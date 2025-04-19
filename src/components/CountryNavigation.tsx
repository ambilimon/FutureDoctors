import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe } from "lucide-react";

interface CountryNavigationProps {
  currentCountry?: string;
}

// Organized countries by region for better UI
const countriesByRegion = {
  "Eastern Europe": ["Russia", "Belarus", "Moldova", "Bulgaria"],
  "Caucasus & Central Asia": ["Georgia", "Kazakhstan", "Kyrgyzstan", "Uzbekistan"],
  "Asia": ["Philippines", "Malaysia", "Nepal"],
  "Balkans": ["Bosnia"]
};

const CountryNavigation = ({ currentCountry }: CountryNavigationProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-1">
          {currentCountry ? `MBBS in ${currentCountry}` : "Study Destinations"}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 max-h-80 overflow-y-auto">
        {/* Link to all universities */}
        <DropdownMenuItem asChild>
          <Link to="/universities" className="flex items-center gap-2 font-medium">
            <Globe className="h-4 w-4" />
            All Universities
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Organized by region */}
        {Object.entries(countriesByRegion).map(([region, countries], index) => (
          <div key={region}>
            {index > 0 && <DropdownMenuSeparator />}
            <DropdownMenuLabel>{region}</DropdownMenuLabel>
            {countries.map((country) => (
              <DropdownMenuItem key={country} asChild>
                <Link to={`/mbbs-in-${country.toLowerCase()}`}>
                  MBBS in {country}
                </Link>
              </DropdownMenuItem>
            ))}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CountryNavigation;
