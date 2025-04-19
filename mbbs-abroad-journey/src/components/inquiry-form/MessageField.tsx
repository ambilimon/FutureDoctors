
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { StudentInquiryFormValues } from "./types";

interface MessageFieldProps {
  control: Control<StudentInquiryFormValues>;
}

const MessageField = ({ control }: MessageFieldProps) => {
  return (
    <FormField
      control={control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Additional Questions/Comments</FormLabel>
          <FormControl>
            <Textarea 
              placeholder="Any specific questions or requirements?" 
              className="min-h-[80px]"
              {...field} 
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default MessageField;
