import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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

export function useInquiryForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<InquiryFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      lastAttendedCollege: "",
      message: "",
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      // Store the inquiry in localStorage for now
      const inquiries = JSON.parse(localStorage.getItem("inquiries") || "[]");
      inquiries.push({
        ...data,
        submittedAt: new Date().toISOString(),
        status: "new"
      });
      localStorage.setItem("inquiries", JSON.stringify(inquiries));
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "Your inquiry has been submitted. We'll contact you soon.",
        variant: "default",
      });
      
      form.reset();
      navigate("/thank-you");
    } catch (error) {
      console.error("[MBBS Abroad] Inquiry form submission error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    isLoading,
    onSubmit,
  };
}
