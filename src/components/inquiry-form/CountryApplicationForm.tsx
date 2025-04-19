import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  lastAttendedCollege: z.string().min(2, "Please enter your last attended college"),
  neetScore: z.string().min(1, "Please enter your NEET score"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface CountryApplicationFormProps {
  countryName?: string;
  sticky?: boolean;
  universityId?: string | number;
}

export default function CountryApplicationForm({ countryName, sticky = false, universityId }: CountryApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      lastAttendedCollege: "",
      neetScore: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      // Store inquiry in localStorage for now
      const inquiries = JSON.parse(localStorage.getItem("inquiries") || "[]");
      const newInquiry = {
        ...data,
        timestamp: new Date().toISOString(),
        status: "pending",
        countryName,
        universityId,
      };
      inquiries.push(newInquiry);
      localStorage.setItem("inquiries", JSON.stringify(inquiries));

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Application submitted successfully! We'll contact you soon.");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={`bg-white p-6 rounded-lg border border-gray-200 shadow-sm ${sticky ? "sticky top-24" : ""}`}>
      <h3 className="text-2xl font-bold mb-6">
        Apply for MBBS in {countryName || "Abroad"}
      </h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
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
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter your email address" {...field} />
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

          <FormField
            control={form.control}
            name="lastAttendedCollege"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Attended College</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your last attended college" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="neetScore"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NEET Score</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your NEET score" {...field} />
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
                <FormLabel>Message (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any specific questions or requirements?"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
} 