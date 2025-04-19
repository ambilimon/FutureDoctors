import { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Check, 
  ArrowLeft, 
  MapPin, 
  Book, 
  Calendar, 
  Users, 
  Award, 
  GraduationCap,
  Star,
  AlertTriangle
} from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";

// Import universities and helper functions from data file
import { universities, getUniversityById } from "@/data/universities";
import CountryApplicationForm from "@/components/inquiry-form/CountryApplicationForm";

// Debug function to help identify university finding issues
const getUniversity = (id: string | undefined) => {
  console.log(`Attempting to find university with ID: "${id}"`);
  const university = id ? getUniversityById(id) : undefined;
  
  if (university) {
    console.log(`Found university: ${university.name}`);
  } else {
    console.warn(`University with ID "${id}" not found`);
    // Log first 5 university IDs for debugging
    console.log(`First 5 university IDs:`, universities.slice(0, 5).map(u => u.id));
  }
  
  return university;
};

const UniversityDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get the id from the URL params
  const params = useParams();
  const id = params.id;
  
  useEffect(() => {
    console.log(`University ID from URL params: "${id}"`);
  }, [id]);
  
  // Get the university data
  const university = getUniversity(id);
  
  // Get referring page for better navigation context
  const getReferrer = () => {
    const path = location.pathname;
    const referrer = location.state?.from || '';
    
    // If coming from a country page - handle both formats (mbbs-in-country and mbbs-country-page)
    if (referrer.includes('mbbs-in-')) {
      const countryName = referrer.replace('/mbbs-in-', '').replace(/-/g, ' ');
      return {
        path: referrer,
        label: `Back to MBBS in ${countryName.charAt(0).toUpperCase() + countryName.slice(1)}`
      };
    }
    
    // Handle alternative country page URL format (e.g., /mbbs-russia-page)
    if (referrer.includes('mbbs-') && referrer.includes('-page')) {
      const countryName = referrer.replace('/mbbs-', '').replace('-page', '');
      return {
        path: referrer,
        label: `Back to MBBS in ${countryName.charAt(0).toUpperCase() + countryName.slice(1)}`
      };
    }
    
    // Default to universities page
    return {
      path: '/universities',
      label: 'Back to Universities'
    };
  };

  const referrer = getReferrer();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!university) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8 max-w-md mx-auto">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-red-500" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">University Not Found</h1>
            <p className="text-gray-600 mb-8">We couldn't find the university with ID: {id}. It may have been removed or the URL might be incorrect.</p>
            <div className="space-y-3">
              <Button className="w-full" onClick={() => navigate('/universities')}>
                View All Universities
              </Button>
              <Button variant="outline" className="w-full" onClick={() => navigate(-1)}>
                Go Back
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Ensure all arrays are properly handled
  const facilities = Array.isArray(university.facilities) ? university.facilities : [];
  const recognition = Array.isArray(university.recognition) ? university.recognition : [];
  const intake = Array.isArray(university.intake) ? university.intake : [];
  const coursesOffered = Array.isArray(university.coursesOffered) ? university.coursesOffered : [];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[400px]">
          <img 
            src={university.image} 
            alt={university.name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end">
            <div className="container mx-auto px-4 py-12 text-white">
              <Link 
                to={referrer.path}
                className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors duration-200"
                state={{ from: location.pathname }}
              >
                <ArrowLeft size={16} className="mr-2" />
                {referrer.label}
              </Link>
              
              <div className="bg-blue-600/30 inline-block px-3 py-1 rounded-full text-sm mb-4">
                {university.country}
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{university.name}</h1>
              
              <div className="flex items-center mb-6">
                <MapPin size={18} className="mr-2" />
                <span>{university.city}, {university.country}</span>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {facilities.map((feature, index) => (
                  <Badge key={index} className="bg-white/20 hover:bg-white/30 text-white">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* University Details */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Key Information */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg inline-block">
                  <span className="text-blue-700 font-medium">
                    {university.tuitionFee && university.tuitionFee.amount ? 
                      `${university.tuitionFee.currency || '$'}${(university.tuitionFee.amount || 0).toLocaleString()} / year` 
                      : "Contact for fees"}
                  </span>
                </div>
                
                {university.duration && (
                  <div className="bg-orange-50 p-4 rounded-lg inline-block">
                    <span className="text-orange-700 font-medium flex items-center">
                      <Book size={16} className="mr-2" /> {university.duration}
                    </span>
                  </div>
                )}
                
                {university.established && (
                  <div className="bg-gray-100 p-4 rounded-lg inline-block">
                    <span className="text-gray-700 font-medium flex items-center">
                      <Calendar size={16} className="mr-2" /> Est. {university.established}
                    </span>
                  </div>
                )}
                
                {university.totalStudents && (
                  <div className="bg-purple-50 p-4 rounded-lg inline-block">
                    <span className="text-purple-700 font-medium flex items-center">
                      <Users size={16} className="mr-2" /> {university.totalStudents} Students
                    </span>
                  </div>
                )}
              </div>
              
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="overview" onClick={() => setActiveTab("overview")}>
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="courses" onClick={() => setActiveTab("courses")}>
                    Programs
                  </TabsTrigger>
                  <TabsTrigger value="admission" onClick={() => setActiveTab("admission")}>
                    Admission
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold mb-4">About {university.name}</h2>
                    <p className="text-gray-600 leading-relaxed">{university.description}</p>
                  </div>
                  
                    <div className="mt-8">
                      <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {facilities.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                              <Check className="w-4 h-4 text-blue-600" />
                            </div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  
                    <div className="mt-8">
                      <h3 className="text-2xl font-bold mb-4">Recognition & Accreditation</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {recognition.map((item, index) => (
                          <div key={index} className="flex items-start">
                          <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                            <Check className="w-4 h-4 text-green-600" />
                            </div>
                          <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                </TabsContent>
                
                {/* Programs Tab */}
                <TabsContent value="courses" className="space-y-6">
                  <h2 className="text-3xl font-bold mb-6">Programs Offered</h2>
                  
                  <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="bg-blue-50 p-4 border-b">
                      <h3 className="text-xl font-semibold">MBBS Program</h3>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="font-medium">{university.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Medium of Instruction</p>
                          <p className="font-medium">{university.language}</p>
                        </div>
                          </div>
                      
                      <div className="mt-4">
                        <p className="text-sm text-gray-500">Annual Tuition Fee</p>
                        <p className="font-medium">
                          {university.tuitionFee && university.tuitionFee.amount ? 
                            `${university.tuitionFee.currency || '$'}${(university.tuitionFee.amount || 0).toLocaleString()}` 
                            : "Contact for fees"}
                        </p>
                            </div>
                      
                      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Program Highlights</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          <li>Fully recognized by WHO, NMC, and other medical councils</li>
                          <li>Clinical rotations in affiliated hospitals</li>
                          <li>Modern teaching methodology</li>
                          <li>English medium instruction</li>
                        </ul>
                            </div>
                          </div>
                  </div>
                  
                  {coursesOffered.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-2xl font-bold mb-4">Other Courses</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {coursesOffered.map((course, index) => (
                          <div key={index} className="bg-white shadow rounded-lg p-4">
                            <h4 className="font-semibold mb-2">{course}</h4>
                        </div>
                      ))}
                    </div>
                    </div>
                  )}
                </TabsContent>
                
                {/* Admission Tab */}
                <TabsContent value="admission" className="space-y-6">
                  <h2 className="text-3xl font-bold mb-6">Admission Process</h2>
                  
                  <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Eligibility Criteria</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Minimum 50% in PCB (Physics, Chemistry, Biology) in 12th standard</li>
                        <li>NEET qualification as per NMC guidelines</li>
                        <li>Age 17+ years on or before 31st December of the admission year</li>
                        <li>Valid passport</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mt-8 mb-4">Required Documents</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>10th and 12th mark sheets and certificates</li>
                        <li>NEET scorecard</li>
                        <li>Passport (valid for at least 18 months)</li>
                        <li>Passport size photographs</li>
                        <li>Medical fitness certificate</li>
                        <li>Birth certificate</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mt-8 mb-4">Application Steps</h3>
                      <ol className="relative border-l border-gray-200 ml-4 space-y-6 pt-2">
                        <li className="ml-6">
                          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full bg-blue-600 text-white">1</span>
                          <h4 className="font-semibold">Online Application</h4>
                          <p className="text-gray-700">Complete the online application form with all required details</p>
                        </li>
                        <li className="ml-6">
                          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full bg-blue-600 text-white">2</span>
                          <h4 className="font-semibold">Document Submission</h4>
                          <p className="text-gray-700">Submit all necessary documents for verification</p>
                        </li>
                        <li className="ml-6">
                          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full bg-blue-600 text-white">3</span>
                          <h4 className="font-semibold">Admission Letter</h4>
                          <p className="text-gray-700">Receive official admission letter from the university</p>
                        </li>
                        <li className="ml-6">
                          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full bg-blue-600 text-white">4</span>
                          <h4 className="font-semibold">Visa Process</h4>
                          <p className="text-gray-700">Apply for student visa with the admission letter</p>
                        </li>
                        <li className="ml-6">
                          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full bg-blue-600 text-white">5</span>
                          <h4 className="font-semibold">Travel & Orientation</h4>
                          <p className="text-gray-700">Travel to the university and attend orientation program</p>
                        </li>
                      </ol>
                      
                      <div className="mt-8 bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Intake Periods</h4>
                        <div className="flex flex-wrap gap-2">
                          {intake.map((month, index) => (
                            <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                              {month}
                            </span>
                          ))}
                          </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white shadow-lg rounded-lg sticky top-24">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-bold mb-2">Apply for Admission</h3>
                  <p className="text-gray-600 text-sm">Fill the form below to start your admission process</p>
              </div>
              
                <div className="p-6">
                  <CountryApplicationForm 
                    universityId={university.id} 
                    countryName={university.country}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UniversityDetailsPage; 