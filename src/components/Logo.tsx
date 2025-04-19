import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light' | 'dark';
  showTagline?: boolean;
}

const Logo = ({ className = "", variant = 'default', showTagline = true }: LogoProps) => {
  const taglineColor = 
    variant === 'light' ? 'text-blue-100' : 
    variant === 'dark' ? 'text-gray-600' : 
    'text-blue-500';

  return (
    <Link to="/" className={`inline-block ${className}`}>
      <div className="flex items-center">
        <img 
          src="/Logo.png" 
          alt="Future Doctor Logo" 
          className="h-14 w-auto"
        />
        {showTagline && (
          <div className={`ml-2 text-xs ${taglineColor} hidden md:block`}>

          </div>
        )}
      </div>
    </Link>
  );
};

export default Logo;
