
import { GraduationCap } from "lucide-react";

const FormHeader = () => {
  return (
    <div className="mb-6 text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
        <GraduationCap className="w-6 h-6 text-blue-700" />
      </div>
      <h3 className="text-2xl font-bold text-blue-900">Start Your Medical Journey Today</h3>
      <p className="text-gray-600 mt-2">Fill out this form to get personalized guidance for your medical education abroad</p>
    </div>
  );
};

export default FormHeader;
