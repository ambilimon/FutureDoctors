
import { Link } from "react-router-dom";
import { Globe, PlaneTakeoff } from "lucide-react";

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light' | 'dark';
  showTagline?: boolean;
}

const Logo = ({ className = "", variant = 'default', showTagline = true }: LogoProps) => {
  const textColor = 
    variant === 'light' ? 'text-white' : 
    variant === 'dark' ? 'text-gray-900' : 
    'text-blue-700';
  
  const taglineColor = 
    variant === 'light' ? 'text-blue-100' : 
    variant === 'dark' ? 'text-gray-600' : 
    'text-blue-500';

  const primaryFill = variant === 'light' ? 'white' : '#1D4ED8';
  const secondaryFill = variant === 'light' ? '#1D4ED8' : 'white';

  return (
    <Link to="/" className={`inline-block ${className}`}>
      <div className="flex items-center">
        <div className="mr-3">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background */}
            <rect width="40" height="40" rx="8" fill={primaryFill} />
            
            {/* Globe */}
            <circle cx="20" cy="20" r="12" fill={secondaryFill} />
            
            {/* Latitude lines */}
            <path d="M8 20H32" stroke={primaryFill} strokeWidth="1" strokeLinecap="round" />
            <path d="M10 14H30" stroke={primaryFill} strokeWidth="1" strokeLinecap="round" />
            <path d="M10 26H30" stroke={primaryFill} strokeWidth="1" strokeLinecap="round" />
            
            {/* Longitude lines */}
            <path d="M20 8V32" stroke={primaryFill} strokeWidth="1" strokeLinecap="round" />
            <path d="M14 10V30" stroke={primaryFill} strokeWidth="1" strokeLinecap="round" />
            <path d="M26 10V30" stroke={primaryFill} strokeWidth="1" strokeLinecap="round" />
            
            {/* Airplane */}
            <path d="M30 12L26 16L30 12Z" fill={primaryFill} />
            <path d="M30 12L26 16" stroke={primaryFill} strokeWidth="2" strokeLinecap="round" />
            <path d="M28 10L24 16L28 14L32 16L28 10Z" fill={primaryFill} stroke={primaryFill} strokeWidth="1" />
          </svg>
        </div>
        
        <div>
          <div className={`font-bold text-xl leading-tight ${textColor}`}>Future Doctor</div>
          {showTagline && (
            <div className={`text-xs ${taglineColor}`}>Your Gateway to Global Medical Education</div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Logo;
