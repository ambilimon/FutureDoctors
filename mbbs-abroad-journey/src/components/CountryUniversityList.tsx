
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ShimmerButton } from "@/components/ShimmerButton";
import { ExternalLink, MapPin } from "lucide-react";
import { University } from "@/data/medical-universities";

interface CountryUniversityListProps {
  universities: University[];
  country: string;
}

const CountryUniversityList = ({ universities, country }: CountryUniversityListProps) => {
  const filteredUniversities = universities.filter(uni => uni.country === country);

  if (filteredUniversities.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No universities found for {country}.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredUniversities.map((university) => (
        <Card key={university.id} className="overflow-hidden transition-all hover:shadow-md flex flex-col h-full">
          <div className="aspect-video relative">
            <img
              src={university.image}
              alt={university.name}
              className="w-full h-full object-cover absolute inset-0"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop";
              }}
            />
          </div>
          <CardContent className="flex-1 p-4">
            <h3 className="text-xl font-bold mb-1">{university.name}</h3>
            <p className="flex items-center text-sm text-muted-foreground mb-3">
              <MapPin className="h-3.5 w-3.5 mr-1" />{university.country}
            </p>
            <p className="text-sm mb-3">
              <span className="font-medium">Students:</span> {university.students} | 
              <span className="font-medium ml-2">Est:</span> {university.established}
            </p>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{university.description}</p>
            
            <div className="mt-auto flex gap-2">
              <Link to={`/university/${university.id}`} className="flex-1">
                <ShimmerButton size="sm" className="w-full">View Details</ShimmerButton>
              </Link>
              <Link to="/#application" className="flex-shrink-0">
                <ShimmerButton size="sm" variant="outline" shimmerColor="rgba(37, 99, 235, 0.4)">Apply</ShimmerButton>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CountryUniversityList;
