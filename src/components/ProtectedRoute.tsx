import { Navigate } from "react-router-dom";
import { useSupabase } from "@/hooks/useSupabase";
import { useEffect, useState } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useSupabase();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for custom admin authentication
    const checkAdminAuth = () => {
      try {
        const storedToken = localStorage.getItem('supabase.auth.token');
        if (storedToken) {
          const tokenData = JSON.parse(storedToken);
          const isAdmin = tokenData?.user?.email === 'admin@gmail.com';
          const isTokenValid = tokenData?.expires_at && tokenData.expires_at > Date.now();
          
          if (isAdmin && isTokenValid) {
            setIsAuthenticated(true);
            setIsLoading(false);
            return;
          }
        }
        
        // Fall back to Supabase auth
        setIsAuthenticated(!!user);
        setIsLoading(loading);
      } catch (error) {
        console.error('Error checking admin auth:', error);
        setIsAuthenticated(!!user);
        setIsLoading(loading);
      }
    };
    
    checkAdminAuth();
  }, [user, loading]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 