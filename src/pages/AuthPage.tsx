import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Auth from "@/components/Auth";
import { useSupabase } from "@/hooks/useSupabase";
import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AuthPage = () => {
  const { user, loading } = useSupabase();
  
  // If user is already logged in, redirect to dashboard
  if (!loading && user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Admin Login | MBBS Abroad Journey</title>
        <meta name="description" content="Secure access to MBBS Abroad Journey admin dashboard. Manage university information and applications." />
      </Helmet>
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <Auth />
      </div>
      <Footer />
    </div>
  );
};

export default AuthPage;
