
import { ShimmerButton } from "@/components/ShimmerButton";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <>
      <ShimmerButton 
        type="submit" 
        className="w-full"
        disabled={isSubmitting}
        variant="primary"
      >
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </ShimmerButton>
      
      <p className="text-xs text-center text-gray-500 mt-4">
        By submitting this form, you agree to our privacy policy and consent to be contacted about educational opportunities.
      </p>
    </>
  );
};

export default SubmitButton;
