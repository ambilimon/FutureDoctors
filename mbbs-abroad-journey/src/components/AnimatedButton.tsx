
import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive" | "highlight" | "primary" | "success";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  asChild?: boolean;
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className, variant = "default", size = "default", ...props }, ref) => {
    const baseClasses = "group relative overflow-hidden transition-all duration-300 ease-out rounded-xl"; // Increased border radius
    
    // Define custom variant styles with improved colors
    const variantClasses = {
      highlight: "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:from-blue-700 hover:to-blue-800",
      primary: "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:from-blue-600 hover:to-blue-700",
      success: "bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-lg hover:from-green-600 hover:to-green-700",
    };
    
    // Determine the final variant for the button component
    // Only pass allowed variants to the underlying Button component
    const finalVariant = (["highlight", "primary", "success"].includes(variant) ? "default" : variant) as "default" | "secondary" | "outline" | "ghost" | "link" | "destructive";
    
    // Select the appropriate custom styles based on the variant
    const additionalClasses = ["highlight", "primary", "success"].includes(variant) 
      ? variantClasses[variant as keyof typeof variantClasses] 
      : "";

    return (
      <Button
        ref={ref}
        variant={finalVariant}
        size={size}
        className={cn(
          baseClasses, 
          additionalClasses, 
          // Enhance hover effects
          "hover:-translate-y-1 active:translate-y-0 transition-transform rounded-xl", // Ensure rounded corners
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
      </Button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export default AnimatedButton;
