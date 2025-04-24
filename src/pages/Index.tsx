import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyMBBSAbroad from "@/components/WhyMBBSAbroad";
import UniversitySection from "@/components/UniversitySection";
import FeaturedUniversity from "@/components/FeaturedUniversity";
import ApplicationSection from "@/components/ApplicationSection";
import WebinarPromoSection from "@/components/WebinarPromoSection";
import Footer from "@/components/Footer";
import { initializeDatabase, University as DbUniversity } from "@/lib/database";
import { supabase } from "@/lib/supabase";
import { toast } from "@/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";
import { universities } from "@/data/universities";
import { University } from "@/types/university";
import Gallery, { GalleryItem } from "@/components/Gallery";

// Sample gallery items - replace with your actual content
const galleryItems: GalleryItem[] = [
  {
    id: "1",
    type: "image" as const,
    thumbnail: "/images/gallery/university-campus-1.jpg",
    fullSize: "/images/gallery/university-campus-1-full.jpg",
    title: "University Campus Tour",
    description: "Explore our state-of-the-art medical facilities",
  },
  {
    id: "2",
    type: "video" as const,
    thumbnail: "/images/gallery/student-life-thumbnail.jpg",
    videoUrl: "https://www.youtube.com/embed/your-video-id",
    title: "Student Life Experience",
    description: "A day in the life of our medical students",
  },
  {
    id: "3",
    type: "image" as const,
    thumbnail: "/images/gallery/lab-facilities.jpg",
    fullSize: "/images/gallery/lab-facilities-full.jpg",
    title: "Modern Laboratory Facilities",
    description: "Advanced equipment for practical learning",
  },
  {
    id: "4",
    type: "video" as const,
    thumbnail: "/images/gallery/graduation-thumbnail.jpg",
    videoUrl: "https://www.youtube.com/embed/your-video-id",
    title: "Graduation Ceremony",
    description: "Celebrating our successful graduates",
  },
  {
    id: "5",
    type: "image" as const,
    thumbnail: "/images/gallery/clinical-training.jpg",
    fullSize: "/images/gallery/clinical-training-full.jpg",
    title: "Clinical Training",
    description: "Hands-on experience in hospital settings",
  },
  {
    id: "6",
    type: "image" as const,
    thumbnail: "/images/gallery/student-accommodation.jpg",
    fullSize: "/images/gallery/student-accommodation-full.jpg",
    title: "Student Accommodation",
    description: "Comfortable living spaces for students",
  },
];

const Index = () => {
  // Fetch universities data with retry logic and fallback
  const { data: universitiesData, error } = useQuery<University[]>({
    queryKey: ['universities'],
    queryFn: async ({ signal }) => {
      try {
        const { data, error } = await supabase
          .from('universities')
          .select('*')
          .abortSignal(signal);

        if (error) throw error;
        
        if (!data || data.length === 0) {
          console.log('No universities found in Supabase, using fallback data');
          return universities;
        }
        
        return data as University[];
      } catch (error: any) {
        console.error('Error fetching universities:', error);
        
        // If it's a network error or Supabase is unreachable, use fallback data
        if (error.message?.includes('Failed to fetch') || error.code === 'PGRST301') {
          console.log('Using fallback universities data due to fetch error');
          return universities;
        }
        
        throw error;
      }
    },
    retry: 2, // Retry failed requests up to 2 times
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000), // Exponential backoff
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 30 * 60 * 1000, // Keep unused data in cache for 30 minutes (formerly cacheTime)
  });

  useEffect(() => {
    if (error) {
      console.error('Error fetching universities:', error);
      toast({
        title: "Notice",
        description: "Using local university data while we restore the connection",
        variant: "default",
      });
    }
  }, [error]);

  // Intersection Observer for animations
  useEffect(() => {
    // Initialize database connection when data is available
    if (universitiesData) {
      initializeDatabase(universitiesData as unknown as DbUniversity[]);
    }
    
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <WhyMBBSAbroad />
        <UniversitySection universities={(universitiesData || universities) as University[]} />
        <Gallery items={galleryItems} isHomePage={true} />
        <FeaturedUniversity />
        <ApplicationSection />
        <WebinarPromoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
