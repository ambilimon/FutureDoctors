
import { useState } from "react";
import { Filters, University } from "@/pages/UniversitiesPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface CategoriesSidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  universities: University[];
}

export function CategoriesSidebar({
  filters,
  setFilters,
  universities,
}: CategoriesSidebarProps) {
  const [countriesOpen, setCountriesOpen] = useState(true);
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  
  // Get unique countries from universities
  const countries = Array.from(new Set(universities.map((u) => u.country)));
  
  // Get unique categories from universities
  const categories = Array.from(new Set(universities.map((u) => u.category)));

  // Count universities per country
  const countryCount = countries.map((country) => ({
    name: country,
    count: universities.filter((u) => u.country === country).length,
  }));

  // Count universities per category
  const categoryCount = categories.map((category) => ({
    name: category,
    count: universities.filter((u) => u.category === category).length,
  }));

  const toggleCountry = (country: string) => {
    setFilters({
      ...filters,
      countries: filters.countries.includes(country)
        ? filters.countries.filter((c) => c !== country)
        : [...filters.countries, country],
    });
  };

  const toggleCategory = (category: string) => {
    setFilters({
      ...filters,
      categories: filters.categories.includes(category)
        ? filters.categories.filter((c) => c !== category)
        : [...filters.categories, category],
    });
  };

  return (
    <div className="space-y-6 sticky top-24">
      {/* Countries */}
      <Card>
        <Collapsible open={countriesOpen} onOpenChange={setCountriesOpen}>
          <CardHeader className="pb-2">
            <CollapsibleTrigger asChild>
              <CardTitle className="text-lg flex items-center justify-between gap-2 cursor-pointer">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Countries
                </div>
                {countriesOpen ? (
                  <ChevronUp className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                )}
              </CardTitle>
            </CollapsibleTrigger>
          </CardHeader>
          <Separator />
          <CollapsibleContent>
            <CardContent className="pt-4">
              <ScrollArea className="h-[220px] pr-3">
                <div className="flex flex-wrap gap-2">
                  {countryCount.sort((a, b) => b.count - a.count).map(({ name, count }) => (
                    <Badge
                      key={name}
                      variant={filters.countries.includes(name) ? "default" : "outline"}
                      className="cursor-pointer transition-colors hover:bg-primary/90"
                      onClick={() => toggleCountry(name)}
                    >
                      {name} ({count})
                    </Badge>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Categories */}
      <Card>
        <Collapsible open={categoriesOpen} onOpenChange={setCategoriesOpen}>
          <CardHeader className="pb-2">
            <CollapsibleTrigger asChild>
              <CardTitle className="text-lg flex items-center justify-between gap-2 cursor-pointer">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Categories
                </div>
                {categoriesOpen ? (
                  <ChevronUp className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                )}
              </CardTitle>
            </CollapsibleTrigger>
          </CardHeader>
          <Separator />
          <CollapsibleContent>
            <CardContent className="pt-4">
              <ScrollArea className="h-[220px] pr-3">
                <div className="flex flex-wrap gap-2">
                  {categoryCount.sort((a, b) => b.count - a.count).map(({ name, count }) => (
                    <Badge
                      key={name}
                      variant={filters.categories.includes(name) ? "default" : "outline"}
                      className="cursor-pointer transition-colors hover:bg-primary/90"
                      onClick={() => toggleCategory(name)}
                    >
                      {name} ({count})
                    </Badge>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </div>
  );
}
