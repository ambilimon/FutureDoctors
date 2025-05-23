import { useSupabase } from '@/hooks/useSupabase';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import { ShimmerButton } from "./ShimmerButton";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { PhoneCall, Globe, GraduationCap, Users, Building2, ChevronRight } from 'lucide-react';

const carouselUniversities = [
  {
    id: 1,
    name: "Altai State Medical University",
    country: "Russia",
    students: "8,000+",
    established: "1954",
    image: "/UNIVERSITY IMAGES/RUSSIA/ALTAI.jpg",
    description: "Leading medical university in Siberian region with modern facilities"
  },
  {
    id: 2,
    name: "Bashkir State Medical University",
    country: "Russia",
    students: "10,000+",
    established: "1932",
    image: "/UNIVERSITY IMAGES/RUSSIA/BASHKIR.jpg",
    description: "One of Russia's oldest and most prestigious medical universities"
  },
  {
    id: 3,
    name: "Syktyvkar State University",
    country: "Russia",
    students: "7,000+",
    established: "1972",
    image: "/UNIVERSITY IMAGES/RUSSIA/SYKTYVKAR.jpg",
    description: "Modern university with strong focus on medical education and research"
  },
  {
    id: 4,
    name: "South Ural State Medical University",
    country: "Russia",
    students: "9,000+",
    established: "1944",
    image: "/UNIVERSITY IMAGES/RUSSIA/SOUTHURAL.jpg",
    description: "Renowned for quality medical education and clinical training"
  }
];

export default function HeroSection() {
  const { user } = useSupabase();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [selectedCountry, setSelectedCountry] = useState("russia");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const handleSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", handleSelect);
    
    handleSelect();

    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi]);

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

    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll(".section-animate");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll(".section-animate");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const handleCountrySelect = async (country: string) => {
    setIsLoading(true);
    setSelectedCountry(country);
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoading(false);
    navigate(`/mbbs-in-${country.toLowerCase()}`);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[90vh] md:min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
      
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-float -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-float animation-delay-1200 -z-10" />
      <div className="absolute top-3/4 right-1/3 w-48 h-48 bg-indigo-100 rounded-full filter blur-3xl opacity-20 animate-float animation-delay-600 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="chip mb-4 section-animate stagger-1">MBBS Abroad Journey</div>
            <h1 className="heading-lg mb-6 section-animate stagger-2">
              Start Your <span className="hero-text-gradient">MBBS Journey Abroad</span> – Affordable, Globally Recognized!
            </h1>
            <p className="text-lg text-gray-600 mb-8 section-animate stagger-3 max-w-lg">
              Get a globally recognized MBBS degree at 1/4th the cost of Indian private medical colleges, with no donation and direct admission in WHO, NMC, and UNESCO-approved universities.
            </p>
            <div className="flex flex-wrap gap-4 section-animate stagger-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <ShimmerButton 
                  variant="highlight" 
                  size="lg" 
                  className="w-full flex items-center justify-center gap-2 rounded-full"
                >
                  <PhoneCall className="w-5 h-5" />
                  Request Call Back
                </ShimmerButton>
              </Link>
              <Link to="/universities" className="w-full sm:w-auto">
                <ShimmerButton 
                  variant="outline" 
                  size="lg" 
                  className="w-full flex items-center justify-center gap-2 rounded-full"
                  shimmerColor="rgba(37, 99, 235, 0.5)"
                >
                  <Globe className="w-5 h-5" />
                  Explore Universities
                </ShimmerButton>
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4 section-animate stagger-5">
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-700">100+</h3>
                <p className="text-sm text-gray-600">Partner Universities</p>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-700">2000+</h3>
                <p className="text-sm text-gray-600">Students Placed</p>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-700">95%</h3>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 section-animate">
            <div className="relative">
              <Carousel 
                className="w-full max-w-xl mx-auto"
                setApi={setCarouselApi}
              >
                <CarouselContent>
                  {carouselUniversities.map((university) => (
                    <CarouselItem key={university.id}>
                      <div className="p-1">
                        <div className="rounded-2xl overflow-hidden shadow-smooth-lg">
                          <div className="relative">
                            <div className="aspect-[4/3] w-full">
                              <img 
                                src={university.image} 
                                alt={`${university.name} campus`} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute top-4 left-4">
                              <Badge variant="secondary" className="bg-white/80 text-blue-700 font-medium">
                                {university.country}
                              </Badge>
                            </div>
                          </div>
                          <div className="p-5 bg-white">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">{university.name}</h3>
                            <p className="text-gray-600 mb-4">{university.description}</p>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="flex items-center">
                                <GraduationCap size={16} className="mr-2 text-blue-600" />
                                <span className="text-sm text-gray-700">Est. {university.established}</span>
                              </div>
                              <div className="flex items-center">
                                <Users size={16} className="mr-2 text-blue-600" />
                                <span className="text-sm text-gray-700">{university.students}</span>
                              </div>
                            </div>
                            <Link to={`/university-details/${university.id}`} className="mt-4 inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors">
                              View Details <ChevronRight size={16} className="ml-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
              </Carousel>

              <div className="flex justify-center mt-4 space-x-2">
                {carouselUniversities.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === index ? "w-6 bg-blue-600" : "w-2 bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => carouselApi?.scrollTo(index)}
                  />
                ))}
              </div>

              <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 shadow-smooth animate-fade-in-up">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Building2 className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">WHO & NMC Approved</p>
                    <p className="text-xs text-gray-500">Globally Recognized Degrees</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 glass-card rounded-xl p-4 shadow-smooth animate-fade-in-up animation-delay-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Globe className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Affordable Tuition</p>
                    <p className="text-xs text-gray-500">Starting at ₹20 Lakhs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
