
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

// Form schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

type WebinarSignupFormValues = z.infer<typeof formSchema>;

interface WebinarSignupFormProps {
  onSuccess: () => void;
}

const WebinarSignupForm = ({ onSuccess }: WebinarSignupFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<WebinarSignupFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: WebinarSignupFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Store webinar participant data in localStorage
      const webinarData = {
        ...values,
        registeredAt: new Date().toISOString(),
        hasWatched: false,
      };
      
      // Store in localStorage
      const participants = JSON.parse(localStorage.getItem("webinarParticipants") || "[]");
      participants.push(webinarData);
      localStorage.setItem("webinarParticipants", JSON.stringify(participants));
      
      toast({
        title: "Registration Successful!",
        description: "You can now access the webinar.",
      });
      
      form.reset();
      onSuccess();
    } catch (e) {
      console.error("Error registering for webinar", e);
      toast({
        title: "Registration Failed",
        description: "There was a problem with your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
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
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter your phone number" {...field} />
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
          {isSubmitting ? "Registering..." : "Register Now"}
        </ShimmerButton>
      </form>
    </Form>
  );
};

export default WebinarSignupForm;
