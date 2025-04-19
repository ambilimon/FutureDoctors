import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { availableCountries } from "./inquiry-form/types";

interface CountryNavigationProps {
  currentCountry?: string;
}

const CountryNavigation = ({ currentCountry }: CountryNavigationProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-1">
          {currentCountry ? `MBBS in ${currentCountry}` : "Study Destinations"}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {availableCountries.map((country) => (
          <DropdownMenuItem key={country} asChild>
            <Link to={`/country/${country.toLowerCase()}`}>
              MBBS in {country}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CountryNavigation;
