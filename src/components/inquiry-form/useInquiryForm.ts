import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { saveStudentInquiry } from "@/lib/database";
import { inquiryFormSchema, StudentInquiryFormValues, StudentInquiryFormProps } from "./types";
import { submitToGoogleSheets, StudentInquiryData } from "@/lib/googleSheets";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number format"),
  lastAttendedCollege: z.string().min(2, "Please enter your last attended college/school"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InquiryFormData = z.infer<typeof formSchema>;

export const useInquiryForm = ({ universityId, onSuccess }: StudentInquiryFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Setup form with Zod validation
  const form = useForm<StudentInquiryFormValues>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      preferredCountries: [],
      message: "",
    },
  });

  const onSubmit = async (values: StudentInquiryFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Save to Supabase
      const inquiryData = {
        ...values,
        timestamp: new Date().toISOString(),
        status: 'new',
      };
      
      // Submit to both Supabase and Google Sheets
      const [supabaseResult, sheetsResult] = await Promise.all([
        saveStudentInquiry(inquiryData),
        submitToGoogleSheets(inquiryData as StudentInquiryData, 'inquiry')
      ]);
      
      if (!supabaseResult.success) {
        throw supabaseResult.error;
      }
      
      toast({
        title: "Inquiry Submitted!",
        description: "We'll contact you shortly about your application.",
      });
      
      // Reset form
      form.reset();
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (e) {
      console.error("Error saving inquiry", e);
      
      // Fallback to localStorage and still try Google Sheets
      try {
        const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
        const inquiryData = {
          ...values,
          timestamp: new Date().toISOString(),
          status: 'new',
          id: Date.now()
        };
        
        inquiries.push(inquiryData);
        localStorage.setItem('inquiries', JSON.stringify(inquiries));
        
        // Try submitting to Google Sheets even if Supabase failed
        await submitToGoogleSheets(inquiryData as StudentInquiryData, 'inquiry');
        
        toast({
          title: "Inquiry Submitted!",
          description: "We'll contact you shortly about your application.",
        });
        
        // Reset form
        form.reset();
        
        if (onSuccess) {
          onSuccess();
        }
      } catch (e) {
        console.error("Error saving inquiry to fallback storage", e);
        toast({
          title: "Error",
          description: "There was a problem submitting your inquiry.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    onSubmit
  };
};
