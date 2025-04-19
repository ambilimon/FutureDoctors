
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { saveStudentInquiry } from "@/lib/database";
import { inquiryFormSchema, StudentInquiryFormValues, StudentInquiryFormProps } from "./types";

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
      
      const { success, error } = await saveStudentInquiry(inquiryData);
      
      if (!success) {
        throw error;
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
      
      // Fallback to localStorage
      try {
        const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
        inquiries.push({
          ...values,
          timestamp: new Date().toISOString(),
          id: Date.now()
        });
        localStorage.setItem('inquiries', JSON.stringify(inquiries));
        
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
        console.error("Error saving inquiry to localStorage", e);
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
