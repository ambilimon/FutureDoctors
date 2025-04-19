import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Check, 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Building, 
  Users, 
  Globe, 
  Book, 
  FileText, 
  Award, 
  Clipboard, 
  Landmark, 
  Languages 
} from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudentInquiryForm from "@/components/StudentInquiryForm";
import { universities } from "@/data/universities";
import { University as BaseUniversity } from "@/types/university";

// Extend the base University type with additional fields specific to this component
interface UniversityPageProps {
  id: string | number;
  name: string;
  country: string; // Required field matches base interface
  city: string;
  tuitionRange?: string;
  location?: string;
  features?: string[];
  longDescription?: string;
  description?: string;
  establishedYear?: string;
  image?: string;
  duration?: string;
  language?: string;
  recognition?: string[];
  facilities?: string[];
  hostelAvailable?: boolean;
  intake?: string[];
  // Additional properties used in the component
  studentCount?: string;
  facultyCount?: string;
  indianFoodAvailability?: string;
  advantages?: string[];
  eligibility?: string[];
  documents?: string[];
  courses?: Array<{ name: string; duration: string; fees: string }>;
  admissionProcess?: string[];
  hostelInfo?: string;
}

const UniversityPage = () => {
  const { id } = useParams<{ id: string }>();
  const universityId = id ? parseInt(id, 10) : 0;
  const university = universities.find((uni) => {
    const uniId = typeof uni.id === 'string' ? parseInt(uni.id, 10) : uni.id;
    return uniId === universityId;
  }) as UniversityPageProps | undefined;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [showInquiryForm, setShowInquiryForm] = useState(true);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!university) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">University not found</h1>
            <Link to="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleApplyNow = () => {
    const formElement = document.getElementById('inquiry-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1" ref={sectionRef}>
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col lg:flex-row items-start gap-8 relative">
              <div className="w-full lg:w-1/2 section-animate">
                <Link to="/#universities" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
                  <ArrowLeft size={16} className="mr-2" />
                  Back to Universities
                </Link>
                
                <div className="bg-blue-600/30 inline-block px-3 py-1 rounded-full text-sm mb-4">
                  {university.country === "russia" ? "Russia" : university.country === "georgia" ? "Georgia" : university.country}
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{university.name}</h1>
                
                <div className="flex items-center mb-6">
                  <MapPin size={18} className="mr-2" />
                  <span>{university.location}</span>
                </div>
                
                <p className="text-xl mb-8">{university.longDescription || university.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {(university.features || []).map((feature, index) => (
                    <Badge key={index} className="bg-white/20 hover:bg-white/30 text-white">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center bg-white/10 p-4 rounded-lg">
                    <div className="mr-4 bg-blue-600 p-3 rounded-full">
                      <Book size={20} />
                    </div>
                    <div>
                      <div className="text-sm uppercase">Tuition Range</div>
                      <div className="text-2xl font-bold">{university.tuitionRange}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white/10 p-4 rounded-lg">
                    <div className="mr-4 bg-blue-600 p-3 rounded-full">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-sm uppercase">Established</div>
                      <div className="text-2xl font-bold">{university.establishedYear || "1957"}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <AnimatedButton 
                    className="bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 border-0"
                    onClick={handleApplyNow}
                  >
                    Apply Now
                  </AnimatedButton>
                  <a href={`#inquiry-form`}>
                    <AnimatedButton variant="outline" className="border-white text-white hover:bg-white/10">
                      Get Counselling
                    </AnimatedButton>
                  </a>
                  <AnimatedButton variant="outline" className="border-white text-white hover:bg-white/10">
                    <FileText size={16} className="mr-2" />
                    Download Brochure
                  </AnimatedButton>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 mt-8 lg:mt-0 section-animate stagger-1">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={university.image !== "/placeholder.svg" ? university.image : "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1374&auto=format&fit=crop"}
                    alt={university.name} 
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                        <h4 className="font-bold text-blue-900">World Ranking</h4>
                        <p className="text-blue-700">Top 10%</p>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                        <h4 className="font-bold text-blue-900">MBBS Duration</h4>
                        <p className="text-blue-700">6 Years</p>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                        <h4 className="font-bold text-blue-900">Medium</h4>
                        <p className="text-blue-700">English</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {university.recognition && (
                  <div className="mt-6 bg-white/10 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Award className="text-orange-300 mr-2" size={18} />
                      <div className="text-sm uppercase font-medium">Recognition & Accreditation</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {university.recognition.map((item, index) => (
                        <Badge key={index} className="bg-white/20 hover:bg-white/30 text-white">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 py-4">
              <div className="text-center p-2">
                <div className="text-xs text-gray-500 uppercase">NEET Qualification</div>
                <div className="font-bold text-blue-900">Required</div>
              </div>
              <div className="text-center p-2">
                <div className="text-xs text-gray-500 uppercase">Eligibility</div>
                <div className="font-bold text-blue-900">50% in PCB</div>
              </div>
              <div className="text-center p-2">
                <div className="text-xs text-gray-500 uppercase">Yearly Intake</div>
                <div className="font-bold text-blue-900">500+ Students</div>
              </div>
              <div className="text-center p-2">
                <div className="text-xs text-gray-500 uppercase">Hostel Facilities</div>
                <div className="font-bold text-blue-900">Available</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="h-16 w-full justify-start overflow-x-auto">
                  <TabsTrigger value="overview" className="text-base">Overview</TabsTrigger>
                  <TabsTrigger value="courses" className="text-base">Courses & Fees</TabsTrigger>
                  <TabsTrigger value="admission" className="text-base">Admission Process</TabsTrigger>
                  <TabsTrigger value="facilities" className="text-base">Facilities</TabsTrigger>
                  <TabsTrigger value="gallery" className="text-base">Gallery</TabsTrigger>
                  <TabsTrigger value="faq" className="text-base">FAQ</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsContent value="overview" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 section-animate">
                      <div className="bg-blue-50 rounded-lg p-6 mb-6">
                        <h2 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                          <GraduationCap size={24} className="mr-2" />
                          Key Facts
                        </h2>
                        
                        <div className="space-y-4">
                          {university.establishedYear && (
                            <div className="flex items-start">
                              <div className="bg-blue-100 p-2 rounded-full mr-3">
                                <Calendar size={20} className="text-blue-700" />
                              </div>
                              <div>
                                <h3 className="font-medium">Established</h3>
                                <p>{university.establishedYear}</p>
                              </div>
                            </div>
                          )}
                          
                          {university.studentCount && (
                            <div className="flex items-start">
                              <div className="bg-blue-100 p-2 rounded-full mr-3">
                                <Users size={20} className="text-blue-700" />
                              </div>
                              <div>
                                <h3 className="font-medium">Students</h3>
                                <p>{university.studentCount}</p>
                              </div>
                            </div>
                          )}
                          
                          {university.facultyCount && (
                            <div className="flex items-start">
                              <div className="bg-blue-100 p-2 rounded-full mr-3">
                                <Users size={20} className="text-blue-700" />
                              </div>
                              <div>
                                <h3 className="font-medium">Faculty Members</h3>
                                <p>{university.facultyCount}</p>
                              </div>
                            </div>
                          )}
                          
                          <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-full mr-3">
                              <Languages size={20} className="text-blue-700" />
                            </div>
                            <div>
                              <h3 className="font-medium">Medium of Instruction</h3>
                              <p>English</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-full mr-3">
                              <Building size={20} className="text-blue-700" />
                            </div>
                            <div>
                              <h3 className="font-medium">Campus</h3>
                              <p>Modern facilities with hostels</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-full mr-3">
                              <Globe size={20} className="text-blue-700" />
                            </div>
                            <div>
                              <h3 className="font-medium">Country</h3>
                              <p>{university.country === "russia" ? "Russia" : "Georgia"}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-full mr-3">
                              <Landmark size={20} className="text-blue-700" />
                            </div>
                            <div>
                              <h3 className="font-medium">FMGE/NEXT Success</h3>
                              <p>High Success Rate</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-orange-50 rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-6 text-orange-700 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7H2Z"></path><path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z"></path><path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z"></path></svg>
                          Indian Student Info
                        </h2>
                        
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="bg-orange-100 p-2 rounded-full mr-3">
                              <Check size={20} className="text-orange-700" />
                            </div>
                            <div>
                              <h3 className="font-medium">Indian Food</h3>
                              <p>{university.indianFoodAvailability || "Available in university canteen and nearby restaurants"}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-orange-100 p-2 rounded-full mr-3">
                              <Check size={20} className="text-orange-700" />
                            </div>
                            <div>
                              <h3 className="font-medium">Indian Community</h3>
                              <p>Strong presence of Indian students</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-orange-100 p-2 rounded-full mr-3">
                              <Check size={20} className="text-orange-700" />
                            </div>
                            <div>
                              <h3 className="font-medium">Cultural Celebrations</h3>
                              <p>Diwali, Holi and other festivals celebrated</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="bg-orange-100 p-2 rounded-full mr-3">
                              <Check size={20} className="text-orange-700" />
                            </div>
                            <div>
                              <h3 className="font-medium">Indian Student Association</h3>
                              <p>Active association supporting newcomers</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <div className="mb-8 section-animate">
                        <div className="relative mb-6">
                          <h2 className="text-2xl font-bold text-blue-800">About {university.name}</h2>
                          <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                        </div>
                        
                        <div className="prose max-w-none text-gray-700">
                          <p className="mb-4">
                            {university.name} has established itself as a premier destination for medical studies, offering world-class education that meets international standards. With state-of-the-art facilities and experienced faculty, the university provides an optimal learning environment for aspiring medical professionals.
                          </p>
                          <p className="mb-4">
                            The university follows a comprehensive curriculum that blends theoretical knowledge with practical training. Students benefit from early clinical exposure in affiliated hospitals, ensuring they develop the necessary skills for successful medical careers. The MBBS program is taught entirely in English, making it accessible to international students.
                          </p>
                          <p>
                            With recognition from WHO, NMC, and other international medical councils, graduates from {university.name} are eligible to practice globally after clearing the respective licensing examinations. The university also boasts modern infrastructure, including well-equipped laboratories, digital libraries, and comfortable accommodation facilities.
                          </p>
                        </div>
                      </div>
                      
                      <div className="mb-10 section-animate stagger-1">
                        <div className="relative mb-6">
                          <h2 className="text-2xl font-bold text-blue-800">Why Choose {university.name}?</h2>
                          <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          {(university.advantages || [
                            "Globally Recognized Degree",
                            "Affordable Tuition Fees",
                            "Modern Teaching Methodology",
                            "Multicultural Environment",
                            "Strong Alumni Network",
                            "Clinical Exposure from Early Years",
                            "High FMGE Success Rate",
                            "Excellent Hostel Facilities"
                          ]).map((advantage, index) => (
                            <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                              <div className="mr-3 text-green-600 bg-green-100 p-1.5 rounded-full">
                                <Check size={16} />
                              </div>
                              <p className="text-gray-800">{advantage}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-10 bg-gray-50 p-6 rounded-lg border border-gray-200 section-animate stagger-2">
                        <div className="relative mb-6">
                          <h2 className="text-2xl font-bold text-blue-800">Eligibility Criteria</h2>
                          <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                        </div>
                        
                        <ul className="space-y-3">
                          {(university.eligibility || [
                            "Minimum 50% in PCB (Physics, Chemistry, Biology) in 12th Standard",
                            "NEET Qualification (for Indian Students)",
                            "Age 17+ years as of December 31st of the admission year",
                            "Good Health Status",
                            "Valid Passport",
                            "English Language Proficiency"
                          ]).map((criteria, index) => (
                            <li key={index} className="flex items-start">
                              <div className="mr-3 text-blue-600 bg-blue-100 p-1.5 rounded-full">
                                <Check size={16} />
                              </div>
                              <span className="text-gray-800">{criteria}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                          <p className="text-blue-800 font-medium">
                            Note: As per the National Medical Commission (NMC) regulations, NEET qualification is mandatory for Indian students seeking admission to MBBS programs abroad.
                          </p>
                        </div>
                      </div>
                      
                      {university.recognition && (
                        <div className="mb-10 section-animate stagger-3">
                          <div className="relative mb-6">
                            <h2 className="text-2xl font-bold text-blue-800">Recognition & Accreditation</h2>
                            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                          </div>
                          
                          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {university.recognition.map((item, index) => (
                                <div key={index} className="flex items-start">
                                  <div className="mr-3 text-blue-600 bg-blue-100 p-1.5 rounded-full">
                                    <Check size={16} />
                                  </div>
                                  <span className="text-gray-800">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {university.documents && (
                        <div className="mb-10 section-animate stagger-4">
                          <div className="relative mb-6">
                            <h2 className="text-2xl font-bold text-blue-800">Documents Required</h2>
                            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {university.documents.map((doc, index) => (
                              <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                                <div className="mr-3 text-orange-600 bg-orange-100 p-1.5 rounded-full">
                                  <FileText size={16} />
                                </div>
                                <p className="text-gray-800">{doc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="courses">
                  <div className="max-w-4xl mx-auto">
                    <div className="relative mb-6">
                      <h2 className="text-2xl font-bold text-blue-800">Courses & Fees</h2>
                      <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                    </div>
                    
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Course Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Duration
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Tuition Fees
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {(university.courses || [
                            { name: "MBBS", duration: "6 years", fees: university.tuitionRange || "Contact for fees" },
                          ]).map((course, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {course.name}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {course.duration}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {course.fees}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <p className="text-blue-800 font-medium">
                        Note: The fees mentioned are approximate and subject to change. Please contact us for the exact fee structure.
                      </p>
                    </div>
                    
                    <div className="mt-10">
                      <div className="relative mb-6">
                        <h2 className="text-2xl font-bold text-blue-800">Additional Expenses</h2>
                        <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <Card>
                          <CardContent className="pt-6">
                            <h3 className="text-lg font-semibold mb-4">Living Expenses</h3>
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <Check size={16} className="text-green-500 mr-2" />
                                <span>Accommodation: ₹2-3 Lakhs per year</span>
                              </li>
                              <li className="flex items-center">
                                <Check size={16} className="text-green-500 mr-2" />
                                <span>Food: ₹1-1.5 Lakhs per year</span>
                              </li>
                              <li className="flex items-center">
                                <Check size={16} className="text-green-500 mr-2" />
                                <span>Transportation: ₹30,000-50,000 per year</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardContent className="pt-6">
                            <h3 className="text-lg font-semibold mb-4">One-time Expenses</h3>
                            <ul className="space-y-2">
                              <li className="flex items-center">
                                <Check size={16} className="text-green-500 mr-2" />
                                <span>Visa Fee: ₹15,000-20,000</span>
                              </li>
                              <li className="flex items-center">
                                <Check size={16} className="text-green-500 mr-2" />
                                <span>Medical Insurance: ₹20,000-25,000 per year</span>
                              </li>
                              <li className="flex items-center">
                                <Check size={16} className="text-green-500 mr-2" />
                                <span>Flight Ticket: ₹30,000-40,000</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="admission">
                  <div className="max-w-4xl mx-auto">
                    <div className="relative mb-6">
                      <h2 className="text-2xl font-bold text-blue-800">Admission Process</h2>
                      <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                    </div>
                    
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                      <ol className="relative border-l border-gray-200">
                        {(university.admissionProcess || [
                          "Online Application Submission",
                          "Document Verification",
                          "Admission Offer Letter",
                          "Visa Processing Assistance",
                          "Pre-Departure Orientation"
                        ]).map((step, index) => (
                          <li key={index} className="mb-10 ml-6">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full bg-blue-600 text-white">
                              {index + 1}
                            </span>
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">{step}</h3>
                            <p className="text-gray-600">
                              {index === 0 && "Complete the online application form with all required details and pay the application fee."}
                              {index === 1 && "Submit all necessary documents for verification, including academic records and test scores."}
                              {index === 2 && "Upon successful verification, receive your official offer letter from the university."}
                              {index === 3 && "Our team will guide you through the visa application process with all necessary documentation."}
                              {index === 4 && "Attend our comprehensive orientation program to prepare for your journey and studies abroad."}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="mt-10">
                      <div className="relative mb-6">
                        <h2 className="text-2xl font-bold text-blue-800">Application Timeline</h2>
                        <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                      </div>
                      
                      <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-blue-800 mb-2">Fall Intake (September)</h3>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">→</span>
                                <div>
                                  <span className="font-medium">Application Deadline:</span> June 15
                                </div>
                              </li>
                              <li className="flex items-start">
                                <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">→</span>
                                <div>
                                  <span className="font-medium">Document Submission:</span> June 30
                                </div>
                              </li>
                              <li className="flex items-start">
                                <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">→</span>
                                <div>
                                  <span className="font-medium">Visa Processing:</span> July
                                </div>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-blue-800 mb-2">Spring Intake (February)</h3>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">→</span>
                                <div>
                                  <span className="font-medium">Application Deadline:</span> November 15
                                </div>
                              </li>
                              <li className="flex items-start">
                                <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">→</span>
                                <div>
                                  <span className="font-medium">Document Submission:</span> November 30
                                </div>
                              </li>
                              <li className="flex items-start">
                                <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">→</span>
                                <div>
                                  <span className="font-medium">Visa Processing:</span> December
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="facilities">
                  <div className="max-w-4xl mx-auto">
                    <div className="relative mb-6">
                      <h2 className="text-2xl font-bold text-blue-800">Campus Facilities</h2>
                      <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {(university.facilities || [
                        "Modern Laboratories",
                        "Digital Library",
                        "Simulation Centers",
                        "Sports Complex",
                        "Student Hostels",
                        "Cafeteria & Food Courts",
                        "Wi-Fi Campus",
                        "Auditorium",
                        "Student Lounge"
                      ]).map((facility, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                              <div className="p-2 bg-blue-100 rounded-lg mr-4">
                                <Building className="text-blue-700" size={24} />
                              </div>
                              <h3 className="font-semibold">{facility}</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                              State-of-the-art {facility.toLowerCase()} providing students with the best learning environment.
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    {university.hostelInfo && (
                      <div className="mt-10">
                        <div className="relative mb-6">
                          <h2 className="text-2xl font-bold text-blue-800">Accommodation</h2>
                          <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                        </div>
                        
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                          <p className="text-gray-700 mb-4">
                            {university.hostelInfo}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h3 className="font-semibold text-gray-800 mb-2">Hostel Facilities</h3>
                              <ul className="space-y-2">
                                <li className="flex items-center">
                                  <Check size={16} className="text-green-500 mr-2" />
                                  <span>24/7 Security</span>
                                </li>
                                <li className="flex items-center">
                                  <Check size={16} className="text-green-500 mr-2" />
                                  <span>Hot Water Supply</span>
                                </li>
                                <li className="flex items-center">
                                  <Check size={16} className="text-green-500 mr-2" />
                                  <span>Laundry Service</span>
                                </li>
                                <li className="flex items-center">
                                  <Check size={16} className="text-green-500 mr-2" />
                                  <span>Wi-Fi Connection</span>
                                </li>
                                <li className="flex items-center">
                                  <Check size={16} className="text-green-500 mr-2" />
                                  <span>Recreational Area</span>
                                </li>
                              </ul>
                            </div>
                            
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h3 className="font-semibold text-gray-800 mb-2">Room Types</h3>
                              <ul className="space-y-2">
                                <li className="flex items-center">
                                  <Check size={16} className="text-green-500 mr-2" />
                                  <span>Single Occupancy</span>
                                </li>
                                <li className="flex items-center">
                                  <Check size={16} className="text-green-500 mr-2" />
                                  <span>Double Sharing</span>
                                </li>
                                <li className="flex items-center">
                                  <Check size={16} className="text-green-500 mr-2" />
                                  <span>Triple Sharing</span>
                                </li>
                                <li className="flex items-center">
                                  <Check size={16} className="text-green-500 mr-2" />
                                  <span>Apartment Style</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="gallery">
                  <div className="max-w-4xl mx-auto">
                    <div className="relative mb-6">
                      <h2 className="text-2xl font-bold text-blue-800">Photo Gallery</h2>
                      <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="rounded-lg overflow-hidden shadow-md">
                          <img 
                            src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1374&auto=format&fit=crop" 
                            alt={`University Campus ${item}`}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-10">
                      <div className="relative mb-6">
                        <h2 className="text-2xl font-bold text-blue-800">Virtual Tour</h2>
                        <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-6 text-center">
                        <h3 className="text-lg font-semibold mb-4">Experience the campus virtually</h3>
                        <p className="text-gray-600 mb-6">
                          Explore the university facilities, classrooms, laboratories, and student life in our 360° virtual tour.
                        </p>
                        <Button>Start Virtual Tour</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="faq">
                  <div className="max-w-4xl mx-auto">
                    <div className="relative mb-6">
                      <h2 className="text-2xl font-bold text-blue-800">Frequently Asked Questions</h2>
                      <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600"></div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        {
                          question: "Is NEET mandatory for Indian students?",
                          answer: "Yes, as per the National Medical Commission (NMC) regulations, NEET qualification is mandatory for Indian students seeking admission to MBBS programs abroad."
                        },
                        {
                          question: "What is the medium of instruction?",
                          answer: "The medium of instruction is English for all international students."
                        },
                        {
                          question: "Are scholarships available?",
                          answer: "Yes, the university offers various merit-based scholarships and financial aid options for deserving students."
                        },
                        {
                          question: "Is the degree recognized in India?",
                          answer: "Yes, the university is recognized by the National Medical Commission (NMC) and other international bodies, making the degree valid in India after clearing the necessary licensing examinations."
                        },
                        {
                          question: "What is the hostel accommodation like?",
                          answer: "The university provides comfortable hostel accommodation with various facilities including 24/7 security, Wi-Fi, laundry services, and recreational areas."
                        }
                      ].map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                          <h3 className="text-lg font-semibold text-blue-800 mb-2">{faq.question}</h3>
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="w-full lg:w-1/3" id="inquiry-form">
              <StudentInquiryForm 
                universityId={Number(university.id)} 
                sticky={true}
                className={`${showInquiryForm ? "animate-in" : ""}`} 
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UniversityPage;
