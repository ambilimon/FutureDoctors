
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShimmerButton } from "@/components/ShimmerButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Search, Grid3X3, ListFilter } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import UniversityForm from "@/components/UniversityForm";
import UniversityList from "@/components/UniversityList";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { toast } = useToast();
  const [editing, setEditing] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold">University Dashboard</h1>
          <ShimmerButton 
            onClick={() => {
              setEditing(null);
              setShowForm(true);
            }} 
            className="flex items-center gap-2"
            shimmerColor="rgba(59, 130, 246, 0.5)"
            background="linear-gradient(45deg, #3b82f6, #1d4ed8)"
          >
            <Plus size={18} /> Add University
          </ShimmerButton>
        </div>

        {!showForm && (
          <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Search universities..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <ShimmerButton
                onClick={() => setViewMode("grid")}
                className={`p-2 ${viewMode === "grid" ? "opacity-100" : "opacity-60"}`}
                shimmerColor="rgba(59, 130, 246, 0.5)"
                background={viewMode === "grid" ? "linear-gradient(45deg, #3b82f6, #1d4ed8)" : "#6b7280"}
              >
                <Grid3X3 size={18} />
              </ShimmerButton>
              <ShimmerButton
                onClick={() => setViewMode("list")}
                className={`p-2 ${viewMode === "list" ? "opacity-100" : "opacity-60"}`}
                shimmerColor="rgba(59, 130, 246, 0.5)"
                background={viewMode === "list" ? "linear-gradient(45deg, #3b82f6, #1d4ed8)" : "#6b7280"}
              >
                <ListFilter size={18} />
              </ShimmerButton>
            </div>
          </div>
        )}

        {showForm ? (
          <Card className="mb-8 border-blue-100 shadow-md">
            <CardHeader className="bg-blue-50 border-b border-blue-100">
              <CardTitle>{editing !== null ? 'Edit University' : 'Add New University'}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <UniversityForm 
                universityId={editing} 
                onCancel={() => {
                  setShowForm(false);
                  setEditing(null);
                }}
                onSuccess={() => {
                  setShowForm(false);
                  setEditing(null);
                  toast({
                    title: editing !== null ? "University updated!" : "University added!",
                    description: editing !== null 
                      ? "The university has been successfully updated." 
                      : "The university has been successfully added.",
                  });
                }}
              />
            </CardContent>
          </Card>
        ) : (
          <UniversityList 
            onEdit={(id) => {
              setEditing(id);
              setShowForm(true);
            }}
            searchQuery={searchQuery}
            viewMode={viewMode}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
