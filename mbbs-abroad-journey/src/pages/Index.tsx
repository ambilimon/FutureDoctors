
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyMBBSAbroad from "@/components/WhyMBBSAbroad";
import UniversitySection from "@/components/UniversitySection";
import FeaturedUniversity from "@/components/FeaturedUniversity";
import ApplicationSection from "@/components/ApplicationSection";
import WebinarPromoSection from "@/components/WebinarPromoSection";
import Footer from "@/components/Footer";
import { initializeDatabase } from "@/lib/database";
import { supabase } from "@/lib/supabase";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  // Initialization of Supabase with sample data
  useEffect(() => {
    const initializeSupabase = async () => {
      try {
        // Check if universities table exists in Supabase
        const { error } = await supabase
          .from('universities')
          .select('*', { count: 'exact', head: true });
          
        // If there's an error like table doesn't exist, we'll create it
        if (error && error.code === '42P01') {
          console.log('Universities table does not exist, getting sample data from localStorage');
          const storedUniversities = localStorage.getItem('universities');
          
          if (storedUniversities) {
            const universities = JSON.parse(storedUniversities);
            await initializeDatabase(universities);
          }
        }
      } catch (error) {
        console.error('Error initializing Supabase:', error);
      }
    };
    
    initializeSupabase();
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".section-animate");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Why MBBS Abroad Section */}
      <WhyMBBSAbroad />

      {/* Webinar Promo Section */}
      <WebinarPromoSection />

      {/* University Section */}
      <UniversitySection />

      {/* Featured University */}
      <FeaturedUniversity />

      {/* Application Section */}
      <ApplicationSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
