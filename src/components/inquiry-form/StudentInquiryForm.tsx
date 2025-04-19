import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useInquiryForm } from "./useInquiryForm";

export function StudentInquiryForm() {
  const { form, isLoading, onSubmit } = useInquiryForm();

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-6"
        aria-label="Student inquiry form"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Name</FormLabel>
              <FormControl>
                <Input 
                  id={field.name}
                  placeholder="Your name" 
                  aria-describedby="name-description"
                  {...field} 
                />
              </FormControl>
              <FormMessage id="name-description" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Email</FormLabel>
              <FormControl>
                <Input 
                  id={field.name}
                  type="email" 
                  placeholder="Your email" 
                  aria-describedby="email-description"
                  {...field} 
                />
              </FormControl>
              <FormMessage id="email-description" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Phone</FormLabel>
              <FormControl>
                <Input 
                  id={field.name}
                  type="tel" 
                  placeholder="Your phone number" 
                  aria-describedby="phone-description"
                  pattern="[0-9+\-\s()]+"
                  {...field} 
                />
              </FormControl>
              <FormMessage id="phone-description" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Message</FormLabel>
              <FormControl>
                <Textarea 
                  id={field.name}
                  placeholder="Write your message here..."
                  className="min-h-[100px] resize-y"
                  aria-describedby="message-description"
                  {...field}
                />
              </FormControl>
              <FormMessage id="message-description" />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full"
          disabled={isLoading}
          aria-live="polite"
        >
          {isLoading ? "Sending..." : "Send Inquiry"}
        </Button>
      </form>
    </Form>
  );
} 