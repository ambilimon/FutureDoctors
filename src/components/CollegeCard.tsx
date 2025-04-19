import { MapPin, Star } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export interface College {
  id: number;
  name: string;
  country: string;
  city: string;
  tuitionFee: number;
  currency: string;
  image: string;
  facilities: string[];
  rating: number;
  description: string;
  features?: string[];
  detailsLink?: string;
}

interface CollegeCardProps {
  id: number;
  name: string;
  country: string;
  city: string;
  description: string;
  image: string;
  rating: number;
  tuitionFee?: number;
  currency?: string;
  features?: string[];
}

export function CollegeCard({ 
  id,
  name, 
  country,
  city,
  description, 
  image, 
  rating,
  features = [],
  tuitionFee,
  currency = 'USD'
}: CollegeCardProps) {
  const routerLocation = useLocation();
  const linkTo = `/university-details/${id}`;

  const formatTuitionFee = () => {
    if (typeof tuitionFee === 'number') {
      return `${currency}${tuitionFee.toLocaleString()}`;
    }
    return 'Contact for fees';
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="flex items-center text-sm">
              <MapPin className="w-4 h-4 mr-1" /> 
              {city}, {country}
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 mr-1" />
            <span className="font-medium">{rating}</span>
          </div>
          <span className="text-blue-600 font-bold">
            {formatTuitionFee()} / year
          </span>
        </div>
        <p className="text-gray-600 mb-3 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {features.slice(0, 4).map((feature, index) => (
            <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
              {feature}
            </span>
          ))}
          {features.length > 4 && (
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
              +{features.length - 4} more
            </span>
          )}
        </div>
        <div className="flex justify-end">
          <Link
            to={linkTo}
            state={{ from: routerLocation.pathname }}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-blue-300 rounded-md shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
} 