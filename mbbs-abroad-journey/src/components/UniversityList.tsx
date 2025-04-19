
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShimmerButton } from "@/components/ShimmerButton";
import { Pencil, Trash2, ExternalLink, Eye } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";
import { UniversityCard } from "./UniversityCard";

interface University {
  id: number;
  name: string;
  location: string;
  country: string;
  description: string;
  tuitionRange: string;
  image: string;
  features: string[];
  [key: string]: any;
}

interface UniversityListProps {
  onEdit: (id: number) => void;
  searchQuery?: string;
  viewMode?: "grid" | "list";
}

const UniversityList = ({ onEdit, searchQuery = "", viewMode = "grid" }: UniversityListProps) => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Fetch universities from localStorage
    try {
      const stored = localStorage.getItem('universities');
      if (stored) {
        setUniversities(JSON.parse(stored));
      }
      setLoading(false);
    } catch (e) {
      console.error("Error loading universities", e);
      setLoading(false);
    }
  }, []);

  const handleDelete = (id: number) => {
    try {
      const updatedUniversities = universities.filter(uni => uni.id !== id);
      setUniversities(updatedUniversities);
      localStorage.setItem('universities', JSON.stringify(updatedUniversities));
      
      toast({
        title: "University deleted",
        description: "The university has been successfully removed.",
      });
    } catch (e) {
      console.error("Error deleting university", e);
      toast({
        title: "Error",
        description: "There was a problem deleting the university.",
        variant: "destructive",
      });
    }
  };

  const filteredUniversities = universities.filter(uni => 
    uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    uni.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    uni.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-pulse">Loading universities...</div>
      </div>
    );
  }

  if (universities.length === 0) {
    return (
      <div className="text-center py-12 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="text-xl font-medium mb-2">No Universities Yet</h3>
        <p className="text-gray-600 mb-6">Get started by adding your first university</p>
        <div className="flex justify-center">
          <ShimmerButton
            onClick={() => onEdit(0)}
            shimmerColor="rgba(59, 130, 246, 0.5)"
            background="linear-gradient(45deg, #3b82f6, #1d4ed8)"
          >
            Add University
          </ShimmerButton>
        </div>
      </div>
    );
  }

  if (filteredUniversities.length === 0) {
    return (
      <div className="text-center py-12 bg-amber-50 rounded-lg border border-amber-100">
        <h3 className="text-xl font-medium mb-2">No Matching Universities</h3>
        <p className="text-gray-600">No universities match your search criteria.</p>
      </div>
    );
  }

  if (viewMode === "grid") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUniversities.map((university) => (
          <div key={university.id} className="relative group">
            <UniversityCard 
              university={{
                id: university.id,
                name: university.name,
                country: university.country,
                city: university.location.split(',')[0]?.trim() || '',
                tuitionFee: 0, // This would need to be parsed from tuitionRange
                currency: "₹",
                image: university.image,
                facilities: university.features,
                rating: 4.5,
                category: "Medical",
              }}
              viewMode="grid"
            />
            
            {/* Overlay with action buttons */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
              <ShimmerButton
                onClick={() => onEdit(university.id)}
                className="p-2"
                shimmerColor="rgba(59, 130, 246, 0.5)"
                background="linear-gradient(45deg, #3b82f6, #1d4ed8)"
              >
                <Pencil size={16} />
              </ShimmerButton>
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <ShimmerButton
                    className="p-2"
                    shimmerColor="rgba(239, 68, 68, 0.5)"
                    background="linear-gradient(45deg, #ef4444, #b91c1c)"
                  >
                    <Trash2 size={16} />
                  </ShimmerButton>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will permanently delete the university "{university.name}". This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDelete(university.id)}>
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              
              <Link to={`/dynamic-university/${university.id}`}>
                <ShimmerButton
                  className="p-2"
                  shimmerColor="rgba(22, 163, 74, 0.5)"
                  background="linear-gradient(45deg, #16a34a, #15803d)"
                >
                  <Eye size={16} />
                </ShimmerButton>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="rounded-lg border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">University</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Tuition Range</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUniversities.map((university) => (
            <TableRow key={university.id}>
              <TableCell className="font-medium flex items-center gap-3">
                <img 
                  src={university.image} 
                  alt={university.name}
                  className="w-10 h-10 rounded-md object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://placehold.co/100?text=Uni";
                  }}
                />
                {university.name}
              </TableCell>
              <TableCell>{university.location}</TableCell>
              <TableCell>{university.tuitionRange}</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <ShimmerButton
                    onClick={() => onEdit(university.id)}
                    className="p-2"
                    shimmerColor="rgba(59, 130, 246, 0.5)"
                    background="linear-gradient(45deg, #3b82f6, #1d4ed8)"
                  >
                    <Pencil size={16} />
                  </ShimmerButton>
                  
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <ShimmerButton
                        className="p-2"
                        shimmerColor="rgba(239, 68, 68, 0.5)"
                        background="linear-gradient(45deg, #ef4444, #b91c1c)"
                      >
                        <Trash2 size={16} />
                      </ShimmerButton>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will permanently delete the university "{university.name}". This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(university.id)}>
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  
                  <Link to={`/dynamic-university/${university.id}`}>
                    <ShimmerButton
                      className="p-2"
                      shimmerColor="rgba(22, 163, 74, 0.5)"
                      background="linear-gradient(45deg, #16a34a, #15803d)"
                    >
                      <ExternalLink size={16} />
                    </ShimmerButton>
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UniversityList;
