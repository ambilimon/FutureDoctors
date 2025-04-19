import { useState, useEffect } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { Filters } from "@/pages/UniversitiesPage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { BudgetRangeSlider } from "@/components/BudgetRangeSlider";
import { facilityOptions, getAllCountries } from "@/data/universities";

interface FilterSidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  onClose: () => void;
}

export function FilterSidebar({ filters, setFilters, onClose }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([filters.minFee, filters.maxFee]);
  const [countriesOpen, setCountriesOpen] = useState(true);
  const [facilitiesOpen, setFacilitiesOpen] = useState(true);
  const [countries, setCountries] = useState<string[]>([]);

  useEffect(() => {
    // Get all countries on component mount
    const allCountries = getAllCountries();
    setCountries(allCountries);
  }, []);

  const handlePriceChange = (values: [number, number]) => {
    setPriceRange(values);
    setFilters({
      ...filters,
      minFee: values[0],
      maxFee: values[1],
    });
  };

  const handleCurrencyChange = (currency: string) => {
    setFilters({
      ...filters,
      currency,
    });
  };

  const handleCountryChange = (country: string, checked: boolean) => {
    const countryLowercase = country.toLowerCase();
    setFilters({
      ...filters,
      countries: checked
        ? [...filters.countries, countryLowercase]
        : filters.countries.filter((c) => c !== countryLowercase),
    });
  };

  const handleFacilityChange = (facility: string, checked: boolean) => {
    setFilters({
      ...filters,
      facilities: checked
        ? [...filters.facilities, facility]
        : filters.facilities.filter((f) => f !== facility),
    });
  };

  const clearFilters = () => {
    const defaultMinFee = 0;
    const defaultMaxFee = 50000;
    setFilters({
      countries: [],
      categories: [],
      minFee: defaultMinFee,
      maxFee: defaultMaxFee,
      facilities: [],
      currency: "$",
    });
    setPriceRange([defaultMinFee, defaultMaxFee]);
  };

  // Add Indian Food to the facilities list if it's not already included
  const extendedFacilityOptions = [...facilityOptions];
  if (!extendedFacilityOptions.includes("Indian Food")) {
    extendedFacilityOptions.push("Indian Food");
  }

  return (
    <Card className="sticky top-24">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">Filters</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={clearFilters}>
            Reset
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4">
        <ScrollArea className="h-[calc(100vh-240px)] pr-4">
          <div className="space-y-6">
            {/* Budget filter */}
            <div className="space-y-3">
              <h3 className="font-medium">Budget Range</h3>
              <BudgetRangeSlider
                minValue={0}
                maxValue={50000}
                step={1000}
                value={priceRange}
                onChange={handlePriceChange}
                currency={filters.currency || "$"}
                onCurrencyChange={handleCurrencyChange}
              />
            </div>

            <Separator />

            {/* Countries filter */}
            <Collapsible 
              open={countriesOpen} 
              onOpenChange={setCountriesOpen}
              className="space-y-3"
            >
              <CollapsibleTrigger asChild>
                <div className="flex items-center justify-between cursor-pointer">
                  <h3 className="font-medium">Countries</h3>
                  {countriesOpen ? (
                    <ChevronUp className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-3">
                <div className="grid grid-cols-1 gap-3">
                  {countries.map((country) => (
                    <div key={country} className="flex items-center space-x-2">
                      <Checkbox
                        id={`country-${country}`}
                        checked={filters.countries.includes(country.toLowerCase())}
                        onCheckedChange={(checked) =>
                          handleCountryChange(country, checked === true)
                        }
                      />
                      <Label
                        htmlFor={`country-${country}`}
                        className="text-sm font-normal leading-none cursor-pointer"
                      >
                        {country}
                      </Label>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Separator />

            {/* Facilities filter */}
            <Collapsible 
              open={facilitiesOpen} 
              onOpenChange={setFacilitiesOpen}
              className="space-y-3"
            >
              <CollapsibleTrigger asChild>
                <div className="flex items-center justify-between cursor-pointer">
                  <h3 className="font-medium">Facilities</h3>
                  {facilitiesOpen ? (
                    <ChevronUp className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-3">
                <div className="grid grid-cols-1 gap-3">
                  {extendedFacilityOptions.map((facility) => (
                    <div key={facility} className="flex items-center space-x-2">
                      <Checkbox
                        id={`facility-${facility}`}
                        checked={filters.facilities.includes(facility)}
                        onCheckedChange={(checked) =>
                          handleFacilityChange(facility, checked === true)
                        }
                      />
                      <Label
                        htmlFor={`facility-${facility}`}
                        className="text-sm font-normal leading-none cursor-pointer"
                      >
                        {facility}
                      </Label>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Applied filters summary */}
            {(filters.countries.length > 0 ||
              filters.facilities.length > 0 || 
              filters.minFee > 0 || 
              filters.maxFee < 50000) && (
              <>
                <Separator />
                <div className="space-y-3">
                  <h3 className="font-medium">Applied Filters</h3>
                  <div className="space-y-2">
                    {filters.minFee > 0 || filters.maxFee < 50000 ? (
                      <div className="text-sm text-muted-foreground">
                        Budget: {filters.currency}{filters.minFee.toLocaleString()} - {filters.currency}{filters.maxFee.toLocaleString()}
                      </div>
                    ) : null}
                    
                    {filters.countries.length > 0 && (
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">
                          Countries: {filters.countries.length}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {filters.countries.map(country => (
                            <div key={country} className="text-xs bg-secondary px-2 py-1 rounded-full">
                              {country.charAt(0).toUpperCase() + country.slice(1)}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {filters.facilities.length > 0 && (
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">
                          Facilities: {filters.facilities.length}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {filters.facilities.map(facility => (
                            <div key={facility} className="text-xs bg-secondary px-2 py-1 rounded-full">
                              {facility}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
