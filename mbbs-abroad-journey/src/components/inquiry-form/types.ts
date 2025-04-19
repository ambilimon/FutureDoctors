
import { z } from "zod";

// Validation schema
export const inquiryFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  preferredCountries: z.array(z.string()).min(1, "Please select at least one country"),
  message: z.string().optional(),
});

export type StudentInquiryFormValues = z.infer<typeof inquiryFormSchema>;

export interface StudentInquiryFormProps {
  universityId?: number;
  onSuccess?: () => void;
  className?: string;
  sticky?: boolean;
}

// Define available countries for MBBS
export const availableCountries = [
  "Russia",
  "Georgia",
  "Philippines",
  "Belarus",
  "Moldova",
  "Bulgaria",
  "Bosnia",
  "Uzbekistan",
  "Kazakhstan",
  "Kyrgyzstan",
  "Malaysia",
  "Nepal",
  "Ukraine",
  "Germany",
  "United Kingdom"
];

