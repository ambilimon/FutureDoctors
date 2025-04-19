
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { ShimmerButton } from "@/components/ShimmerButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";

// Form schema
const callbackFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  message: z.string().optional(),
  preferredTime: z.string().optional()
});

type CallbackFormValues = z.infer<typeof callbackFormSchema>;

interface RequestCallbackFormProps {
  title?: string;
  subtitle?: string;
  formType?: string;
  className?: string;
}

const RequestCallbackForm = ({ 
  title = "Request a Callback", 
  subtitle = "Our counselors will contact you shortly", 
  formType = "general",
  className = ""
}: RequestCallbackFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<CallbackFormValues>({
    resolver: zodResolver(callbackFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      preferredTime: ""
    },
  });

  const onSubmit = async (values: CallbackFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Store callback request in localStorage
      const callbackData = {
        ...values,
        requestType: formType,
        requestedAt: new Date().toISOString(),
        status: "new"
      };
      
      // Store in localStorage
      const callbacks = JSON.parse(localStorage.getItem("callbackRequests") || "[]");
      callbacks.push(callbackData);
      localStorage.setItem("callbackRequests", JSON.stringify(callbacks));
      
      toast({
        title: "Request Submitted!",
        description: "One of our counselors will call you back shortly.",
      });
      
      form.reset();
    } catch (e) {
      console.error("Error submitting callback request", e);
      toast({
        title: "Submission Failed",
        description: "There was a problem with your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="mb-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
          <Phone className="w-6 h-6 text-blue-700" />
        </div>
        <h3 className="text-2xl font-bold text-blue-900">{title}</h3>
        <p className="text-gray-600 mt-2">{subtitle}</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Your phone number" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="preferredTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Time for Call</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Evening, After 6 PM" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="Your email address" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Any Specific Questions?</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Let us know if you have any specific questions" 
                    className="min-h-[80px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <ShimmerButton 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
            variant="primary"
          >
            {isSubmitting ? "Submitting..." : "Request Callback"}
          </ShimmerButton>
          
          <p className="text-xs text-center text-gray-500 mt-2">
            By submitting this form, you agree to our privacy policy and consent to be contacted by phone.
          </p>
        </form>
      </Form>
    </div>
  );
};

export default RequestCallbackForm;
