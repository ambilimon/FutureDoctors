import { MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { University } from "@/types/university";

interface UniversityCardProps {
  university: University;
  viewMode: "grid" | "list";
}

export function UniversityCard({ university, viewMode }: UniversityCardProps) {
  const {
    id,
    name,
    country,
    city,
    tuitionFee,
    currency = "₹",
    image,
    facilities = [],
    rating = 4.5,
    category = "Medical",
  } = university;

  // Use a consistent array for features/facilities
  const displayFacilities = facilities.length > 0 ? facilities : (university.features || []);
  
  // Handle tuition fee formatting
  const formattedTuitionFee = tuitionFee && tuitionFee.amount !== undefined
    ? `${tuitionFee.currency || currency || '$'}${(tuitionFee.amount || 0).toLocaleString()} / year` 
    : "Contact for fees";

  if (viewMode === "list") {
    return (
      <Link to={`/university-details/${id}`} className="block">
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 h-48 md:h-auto relative">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover absolute inset-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop";
                }}
              />
            </div>
            <div className="flex flex-col flex-1 p-4">
              <CardHeader className="p-0 pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-1">{name}</CardTitle>
                    <CardDescription className="flex items-center text-sm">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      {city}, {country}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-1 bg-amber-50 px-2 py-1 rounded-md">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium text-amber-700">{rating.toFixed(1)}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 py-3 flex-grow">
                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge variant="secondary" className="text-xs">{category}</Badge>
                  {displayFacilities.slice(0, 3).map((facility, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {facility}
                    </Badge>
                  ))}
                  {displayFacilities.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{displayFacilities.length - 3} more
                    </Badge>
                  )}
                </div>
                <p className="text-lg font-semibold text-primary">
                  {formattedTuitionFee}
                </p>
              </CardContent>
              <CardFooter className="p-0 pt-3 flex justify-end items-center gap-3">
                <Link to={`/university-details/${id}`} className="flex-1 md:flex-none" onClick={(e) => e.stopPropagation()}>
                  <Button variant="outline" className="w-full px-3 py-2 h-auto">View Details</Button>
                </Link>
              </CardFooter>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/university-details/${id}`} className="block h-full">
      <Card className="overflow-hidden transition-all hover:shadow-md flex flex-col h-full">
        <div className="aspect-video relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover absolute inset-0"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop";
            }}
          />
          <div className="absolute top-2 right-2 bg-white/90 rounded-md px-2 py-1 flex items-center space-x-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-base mb-1 min-h-[2.5rem]">{name}</CardTitle>
            <Badge variant="secondary" className="text-xs whitespace-nowrap ml-2 flex-shrink-0">{category}</Badge>
          </div>
          <CardDescription className="flex items-center text-sm mt-1">
            <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
            <span className="truncate">{city}, {country}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-1 mb-3">
            {displayFacilities.slice(0, 3).map((facility, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {facility}
              </Badge>
            ))}
            {displayFacilities.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{displayFacilities.length - 3} more
              </Badge>
            )}
          </div>
          <p className="text-lg font-semibold text-primary">
            {formattedTuitionFee}
          </p>
        </CardContent>
        <CardFooter className="flex justify-end pt-2">
          <Link to={`/university-details/${id}`} className="w-full sm:w-auto" onClick={(e) => e.stopPropagation()}>
            <Button size="default" variant="outline" className="w-full px-3 py-2 h-auto min-h-[38px]">View Details</Button>
          </Link>
        </CardFooter>
      </Card>
    </Link>
  );
}
