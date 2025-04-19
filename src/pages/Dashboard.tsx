import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShimmerButton } from "@/components/ShimmerButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Search, Grid3X3, ListFilter, LogOut } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import UniversityForm from "@/components/UniversityForm";
import UniversityList from "@/components/UniversityList";
import { Input } from "@/components/ui/input";
import { useSupabase } from "@/hooks/useSupabase";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { toast } = useToast();
  const [editing, setEditing] = useState<number | null>(null);
  const { signOut, user } = useSupabase();
  const navigate = useNavigate();
  const [adminUser, setAdminUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize sample data if none exists
  useEffect(() => {
    try {
      const sampleUniversities = [
        {
          id: 1,
          name: "Tbilisi State Medical University",
          location: "Tbilisi, Georgia",
          country: "Georgia",
          description: "One of the leading medical universities in Georgia with a strong focus on international students.",
          tuitionRange: "₹20-30 Lakhs total",
          image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1486&auto=format&fit=crop",
          features: ["NMC Approved", "English Medium", "Hostel Available"],
        },
        {
          id: 2,
          name: "First Moscow State Medical University",
          location: "Moscow, Russia",
          country: "Russia",
          description: "Russia's oldest and most prestigious medical school offering comprehensive medical education.",
          tuitionRange: "₹25-35 Lakhs total",
          image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=1469&auto=format&fit=crop",
          features: ["NMC Approved", "English Medium", "Modern Labs"],
        },
      ];
      
      // Only initialize if no data exists
      const stored = localStorage.getItem('universities');
      if (!stored) {
        localStorage.setItem('universities', JSON.stringify(sampleUniversities));
        console.log("Sample universities initialized in Dashboard");
      }
    } catch (e) {
      console.error("Error initializing sample data:", e);
      setError("Error initializing data. Please try refreshing the page.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Check for custom admin user
  useEffect(() => {
    try {
      const storedToken = localStorage.getItem('supabase.auth.token');
      if (storedToken) {
        const tokenData = JSON.parse(storedToken);
        if (tokenData?.user?.email === 'admin@gmail.com') {
          setAdminUser(tokenData.user);
        }
      }
    } catch (error) {
      console.error('Error checking admin auth:', error);
    }
  }, []);

  const handleLogout = async () => {
    // Check if it's the custom admin account
    if (adminUser) {
      // Remove the custom token
      localStorage.removeItem('supabase.auth.token');
      
      toast({
        title: "Sign out successful",
        description: "You are now signed out",
      });
      
      navigate("/auth");
      return;
    }
    
    // Otherwise use the regular signOut
    const { success } = await signOut();
    if (success) {
      navigate("/auth");
    }
  };

  // Determine the current user to display
  const currentUser = adminUser || user;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-red-50 p-8 rounded-lg max-w-md">
          <h2 className="text-xl font-bold text-red-700 mb-2">Error Loading Dashboard</h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>Refresh Page</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Admin Dashboard | MBBS Abroad Journey</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">University Dashboard</h1>
            {currentUser && (
              <p className="text-sm text-gray-500 mt-1">
                Logged in as: {currentUser.email}
                {adminUser && <span className="ml-2 text-blue-500 font-medium">(Admin)</span>}
              </p>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-600 border-gray-300"
            >
              <LogOut size={16} /> Logout
            </Button>
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
