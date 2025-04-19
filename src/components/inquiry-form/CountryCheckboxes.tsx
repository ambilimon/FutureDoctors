import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Control } from "react-hook-form";
import { StudentInquiryFormValues } from "./types";
import { medicalUniversities } from "@/data/medical-universities";

// Extract unique countries from medical universities
const getUniqueCountries = () => {
  const countries = medicalUniversities.map(uni => uni.country);
  return [...new Set(countries)];
};

interface CountryCheckboxesProps {
  control: Control<StudentInquiryFormValues>;
}

const CountryCheckboxes = ({ control }: CountryCheckboxesProps) => {
  const uniqueCountries = getUniqueCountries();
  
  return (
    <FormField
      control={control}
      name="preferredCountries"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Preferred Countries</FormLabel>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {uniqueCountries.map((country) => (
              <div className="flex items-center space-x-2" key={country}>
                <Checkbox
                  id={`country-${country}`}
                  checked={field.value?.includes(country)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      field.onChange([...(field.value || []), country]);
                    } else {
                      field.onChange(
                        field.value?.filter((value) => value !== country) || []
                      );
                    }
                  }}
                />
                <label
                  htmlFor={`country-${country}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {country}
                </label>
              </div>
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CountryCheckboxes;
