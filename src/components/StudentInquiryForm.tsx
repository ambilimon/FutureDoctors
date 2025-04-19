import { Form } from "@/components/ui/form";
import FormHeader from "./inquiry-form/FormHeader";
import ContactFields from "./inquiry-form/ContactFields";
import CountryCheckboxes from "./inquiry-form/CountryCheckboxes";
import MessageField from "./inquiry-form/MessageField";
import SubmitButton from "./inquiry-form/SubmitButton";
import { useInquiryForm } from "./inquiry-form/useInquiryForm";
import { StudentInquiryFormProps, inquiryFormSchema } from "./inquiry-form/types";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { useNavigate } from "react-router-dom";

type FormValues = z.infer<typeof inquiryFormSchema>;

const StudentInquiryForm = (props: StudentInquiryFormProps) => {
  const { className, sticky = false } = props;
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      lastAttendedCollege: "",
      preferredCountries: [],
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      // Store the inquiry in localStorage
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
      if (props.onSuccess) {
        props.onSuccess();
      } else {
        navigate("/thank-you");
      }
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

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${sticky ? "sticky top-24" : ""} ${className || ""}`}>
      <FormHeader />
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <ContactFields control={form.control} />
          <CountryCheckboxes control={form.control} />
          <MessageField control={form.control} />
          <SubmitButton isSubmitting={isLoading} />
        </form>
      </Form>
    </div>
  );
};

export default StudentInquiryForm;
