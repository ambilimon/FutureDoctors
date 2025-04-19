import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { University } from "@/types/university";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Globe, MapPin, School, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface UniversitySectionProps {
  universities: University[];
}

const UniversitySection: React.FC<UniversitySectionProps> = ({ universities }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");

  // Group universities by country
  const countriesWithUniversities = useMemo(() => {
    const grouped = universities.reduce((acc, university) => {
      const country = university.country;
      if (!acc[country]) {
        acc[country] = [];
      }
      acc[country].push(university);
      return acc;
    }, {} as Record<string, University[]>);

    // Sort countries by number of universities (descending)
    return Object.entries(grouped).sort((a, b) => b[1].length - a[1].length);
  }, [universities]);

  // Get displayed universities based on selected country
  const displayedUniversities = useMemo(() => {
    if (selectedCountry === "all") {
      return universities;
    }
    return universities.filter(uni => uni.country === selectedCountry);
  }, [universities, selectedCountry]);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
          Our Partner Universities
        </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our network of prestigious medical universities across multiple countries, 
            each offering world-class education and international recognition.
          </p>
        </div>

        {/* Mobile Country Selection */}
        <div className="md:hidden mb-8">
          <Select
            value={selectedCountry}
            onValueChange={setSelectedCountry}
          >
            <SelectTrigger className="w-full bg-white">
              <SelectValue>
                <div className="flex items-center gap-2">
                  {selectedCountry === "all" ? (
                    <>
                      <Globe className="w-4 h-4" />
                      <span>All Countries ({universities.length})</span>
                    </>
                  ) : (
                    <>
                      <MapPin className="w-4 h-4" />
                      <span>
                        {selectedCountry} ({universities.filter(uni => uni.country === selectedCountry).length})
                      </span>
                    </>
                  )}
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>All Countries ({universities.length})</span>
                </div>
              </SelectItem>
              {countriesWithUniversities.map(([country, unis]) => (
                <SelectItem key={country} value={country}>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{country} ({unis.length})</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Desktop Country Selection */}
        <div className="hidden md:block mb-12">
          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <div className="flex flex-wrap gap-3">
              <Button
                variant={selectedCountry === "all" ? "default" : "outline"}
                onClick={() => setSelectedCountry("all")}
                className={cn(
                  "flex items-center gap-2 rounded-full h-9 px-4 text-sm transition-all duration-200",
                  selectedCountry === "all" ? "bg-blue-600 text-white shadow-md" : "hover:bg-blue-50"
                )}
              >
                <Globe className="w-4 h-4" />
                <span>All Countries</span>
                <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs ml-1">
                  {universities.length}
                </span>
              </Button>
              {countriesWithUniversities.map(([country, unis]) => (
                <Button
                  key={country}
                  variant={selectedCountry === country ? "default" : "outline"}
                  onClick={() => setSelectedCountry(country)}
                  className={cn(
                    "flex items-center gap-2 rounded-full h-9 px-4 text-sm transition-all duration-200",
                    selectedCountry === country ? "bg-blue-600 text-white shadow-md" : "hover:bg-blue-50"
                  )}
                >
                  <MapPin className="w-4 h-4" />
                  <span>{country}</span>
                  <span className={cn(
                    "px-2 py-0.5 rounded-full text-xs ml-1",
                    selectedCountry === country ? "bg-white/20" : "bg-gray-100"
                  )}>
                    {unis.length}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedUniversities.map((university) => (
            <div
              key={university.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <div className="relative">
              <img
                src={university.image}
                alt={university.name}
                className="w-full h-48 object-cover"
              />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {university.country}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {university.name}
                </h3>
                <div className="flex items-start gap-2 text-gray-600 mb-4">
                  <School className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p className="line-clamp-2 text-sm">
                    {university.description || "Renowned medical university offering comprehensive medical education"}
                  </p>
                </div>
                <Link
                  to={`/university-details/${university.id}`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {displayedUniversities.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <p className="text-gray-500">No universities found for the selected country.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default UniversitySection;
