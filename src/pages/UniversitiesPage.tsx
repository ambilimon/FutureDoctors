import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UniversityCard } from "@/components/UniversityCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import { 
  ListFilter, 
  Grid3X3, 
  List, 
  BookOpen, 
  Search, 
  Lightbulb,
  GraduationCap,
  Download
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

// Import universities from data file
import { universities } from "@/data/universities";
import { University } from "@/types/university";

// Define types for filtering
export type Filters = {
  countries: string[];
  categories: string[];
  minFee: number;
  maxFee: number;
  facilities: string[];
  currency?: string;
};

const UniversitiesPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilterSidebar, setShowFilterSidebar] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<Filters>({
    countries: [],
    categories: [],
    minFee: 0,
    maxFee: 50000,
    facilities: [],
    currency: "$",
  });

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      countries: [],
      categories: [],
      minFee: 0,
      maxFee: 50000,
      facilities: [],
      currency: "$",
    });
    setSearchTerm("");
  };

  // Apply filters to universities
  const filteredUniversities = universities.filter((university) => {
    // Filter by search term
    if (searchTerm && 
        !university.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !(university.country && university.country.toLowerCase().includes(searchTerm.toLowerCase())) &&
        !(university.city && university.city.toLowerCase().includes(searchTerm.toLowerCase())) &&
        !(university.category as string && (university.category as string).toLowerCase().includes(searchTerm.toLowerCase()))) {
      return false;
    }
    
    // Filter by countries if any selected
    if (filters.countries.length > 0 && 
        !(university.country && filters.countries.includes(university.country.toLowerCase()))) {
      return false;
    }

    // Filter by categories if any selected
    if (filters.categories.length > 0) {
      // Skip this university if it doesn't have a category
      if (!university.category) {
        return false;
      }
      // Check if the university's category is in the selected categories
      if (!filters.categories.includes(university.category as string)) {
        return false;
      }
    }

    // Filter by fee range
    if (university.tuitionFee) {
      if ((university.tuitionFee.amount || 0) < filters.minFee || 
          (university.tuitionFee.amount || 0) > filters.maxFee) {
        return false;
      }
    }

    // Filter by facilities if any selected
    if (filters.facilities.length > 0 && university.facilities) {
      // Check if university has ANY of the selected facilities (not ALL)
      return filters.facilities.some((facility) => 
        university.facilities.includes(facility)
      );
    }

    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-primary">Find Your Perfect University</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore and filter through top medical universities across the globe to find the ideal match for your academic journey.
          </p>
        </div>

        <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilterSidebar(!showFilterSidebar)}
              className="md:hidden"
            >
              <ListFilter className="h-4 w-4 mr-2" />
              {showFilterSidebar ? "Hide Filters" : "Show Filters"}
            </Button>
            <div className="font-medium">
              {filteredUniversities.length} {filteredUniversities.length === 1 ? 'University' : 'Universities'} found
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Input
              placeholder="Search universities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-xs flex-1"
            />
            <div className="hidden md:flex items-center border rounded-md">
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Sidebar - Filters */}
          <aside className={`${showFilterSidebar ? 'block' : 'hidden'} md:block w-full md:w-1/4 lg:w-1/5 space-y-6`}>
            <FilterSidebar 
              filters={filters} 
              setFilters={setFilters} 
              onClose={() => setShowFilterSidebar(false)}
            />
          </aside>

          {/* Main Content - University Cards */}
          <div className="flex-1">
            {filteredUniversities.length > 0 ? (
              <div className={viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max" 
                : "space-y-4"
              }>
                {filteredUniversities.map((university) => (
                  <UniversityCard 
                    key={university.id} 
                    university={university} 
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div className="w-full text-center py-12 bg-muted rounded-lg">
                <h3 className="text-xl font-medium mb-2">No universities found</h3>
                <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
                <Button variant="outline" onClick={clearFilters} className="mt-4">Clear All Filters</Button>
              </div>
            )}
          </div>
        </div>

        {/* Research Resources Section */}
        <section className="mt-16 mb-8">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-3">Research Resources</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Your Complete Research Guide</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access comprehensive resources to help you make an informed decision for your medical education abroad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">University Guides</h3>
                <p className="text-muted-foreground mb-4">
                  In-depth guides for each country's education system, admission requirements, and university rankings.
                </p>
                <Link to="/resources/guides">
                  <Button variant="outline" className="w-full">
                    View Guides
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Decision Tools</h3>
                <p className="text-muted-foreground mb-4">
                  Interactive tools to compare universities, calculate costs, and evaluate return on investment.
                </p>
                <Link to="/resources/tools">
                  <Button variant="outline" className="w-full">
                    Use Tools
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Resources</h3>
                <p className="text-muted-foreground mb-4">
                  Download free university brochures, country guides, and application checklists.
                </p>
                <Link to="/resources/downloads">
                  <Button variant="outline" className="w-full">
                    Download
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default UniversitiesPage;
