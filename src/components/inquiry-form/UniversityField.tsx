
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Control } from "react-hook-form";
import { StudentInquiryFormValues } from "./types";

interface UniversityFieldProps {
  control: Control<StudentInquiryFormValues>;
  universities: Array<{ id: string | number; name: string }>;
}

const UniversityField = ({ control, universities }: UniversityFieldProps) => {
  return (
    <FormField
      control={control}
      // @ts-ignore - This field is optional and might not be in the form schema
      name="preferredUniversity"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Preferred University</FormLabel>
          <Select 
            onValueChange={field.onChange} 
            // @ts-ignore - This is a string, not an array
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a university" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {universities.map((university) => (
                <SelectItem key={university.id} value={String(university.id)}>
                  {university.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default UniversityField;
