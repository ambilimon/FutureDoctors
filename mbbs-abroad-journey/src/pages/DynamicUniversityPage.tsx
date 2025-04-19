
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ShimmerButton";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowLeft, Calendar, Globe, Mail, Phone, MapPin, User, School, ExternalLink } from "lucide-react";
import StudentInquiryForm from "@/components/StudentInquiryForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DynamicUniversityPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [university, setUniversity] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Load university data from localStorage
    try {
      const stored = localStorage.getItem('universities');
      if (stored) {
        const universities = JSON.parse(stored);
        const foundUniversity = universities.find((u: any) => u.id === parseInt(id || '0'));
        setUniversity(foundUniversity || null);
      }
      setLoading(false);
    } catch (e) {
      console.error("Error loading university data", e);
      setLoading(false);
    }
  }, [id]);

  // Parse FAQ string to array of Q&A objects
  const parseFaq = (faqString: string) => {
    if (!faqString) return [];
    
    const faqRegex = /Q:\s*(.*?)\s*A:\s*(.*?)(?=Q:|$)/gs;
    const faqs = [];
    let match;
    
    while ((match = faqRegex.exec(faqString)) !== null) {
      faqs.push({
        question: match[1].trim(),
        answer: match[2].trim()
      });
    }
    
    return faqs;
  };

  const faqs = university?.faq ? parseFaq(university.faq) : [];

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex justify-center items-center">
          <div className="animate-pulse">Loading university information...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!university) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">University Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the university you're looking for.</p>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section with University Image */}
        <section className="relative h-[60vh] min-h-[400px]">
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
              <Button 
                variant="outline" 
                size="sm" 
                className="text-white border-white mb-4 hover:bg-white/20"
                onClick={() => navigate('/dashboard')}
              >
                <ArrowLeft size={16} className="mr-2" /> Back to Dashboard
              </Button>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{university.name}</h1>
              <p className="text-xl opacity-90">{university.location}</p>
            </div>
          </div>
        </section>
        
        {/* University Details */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Key Information */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg inline-block">
                  <span className="text-blue-700 font-medium">{university.tuitionRange}</span>
                </div>
                
                {university.established && (
                  <div className="bg-gray-100 p-4 rounded-lg inline-block">
                    <span className="text-gray-700 font-medium flex items-center">
                      <Calendar size={16} className="mr-2" /> Est. {university.established}
                    </span>
                  </div>
                )}
                
                {university.students && (
                  <div className="bg-purple-50 p-4 rounded-lg inline-block">
                    <span className="text-purple-700 font-medium flex items-center">
                      <User size={16} className="mr-2" /> {university.students} Students
                    </span>
                  </div>
                )}
              </div>
              
              {/* Tabs Navigation */}
              <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
                <TabsList className="mb-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="courses">Courses</TabsTrigger>
                  <TabsTrigger value="admission">Admission</TabsTrigger>
                  <TabsTrigger value="facilities">Facilities</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>
                
                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  <h2 className="text-3xl font-bold mb-6">About {university.name}</h2>
                  <div className="text-gray-700 space-y-4">
                    <p className="text-lg leading-relaxed">{university.description}</p>
                  </div>
                  
                  <h3 className="text-2xl font-bold mt-8 mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {university.features.map((feature: string, i: number) => (
                      <div key={i} className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                          <Check size={16} className="text-blue-700" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Contact Info */}
                  <div className="mt-8 space-y-4">
                    <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                          <MapPin size={18} className="text-blue-700" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p className="font-medium">{university.location}</p>
                        </div>
                      </div>
                      
                      {university.website && (
                        <div className="flex items-center">
                          <div className="bg-green-100 p-3 rounded-full mr-4">
                            <Globe size={18} className="text-green-700" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Website</p>
                            <a href={university.website} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:underline flex items-center">
                              Visit website <ExternalLink size={14} className="ml-1" />
                            </a>
                          </div>
                        </div>
                      )}
                      
                      {university.contactEmail && (
                        <div className="flex items-center">
                          <div className="bg-amber-100 p-3 rounded-full mr-4">
                            <Mail size={18} className="text-amber-700" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <a href={`mailto:${university.contactEmail}`} className="font-medium text-blue-600 hover:underline">
                              {university.contactEmail}
                            </a>
                          </div>
                        </div>
                      )}
                      
                      {university.contactPhone && (
                        <div className="flex items-center">
                          <div className="bg-purple-100 p-3 rounded-full mr-4">
                            <Phone size={18} className="text-purple-700" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <a href={`tel:${university.contactPhone}`} className="font-medium">
                              {university.contactPhone}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>
                
                {/* Courses Tab */}
                <TabsContent value="courses" className="space-y-6">
                  <h2 className="text-3xl font-bold mb-6">Courses Offered</h2>
                  
                  {university.coursesOffered ? (
                    <div className="prose max-w-none text-gray-700">
                      {university.coursesOffered.split('\n').map((paragraph: string, i: number) => (
                        <p key={i} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No course information available.</p>
                  )}
                </TabsContent>
                
                {/* Admission Tab */}
                <TabsContent value="admission" className="space-y-8">
                  <h2 className="text-3xl font-bold mb-6">Admission Process</h2>
                  
                  {university.admissionProcess ? (
                    <div className="prose max-w-none text-gray-700">
                      {university.admissionProcess.split('\n').map((paragraph: string, i: number) => (
                        <p key={i} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No admission process information available.</p>
                  )}
                  
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Eligibility Requirements</h3>
                    
                    {university.eligibility ? (
                      <div className="prose max-w-none text-gray-700">
                        {university.eligibility.split('\n').map((paragraph: string, i: number) => (
                          <p key={i} className="mb-4">{paragraph}</p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 italic">No eligibility requirements specified.</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <Calendar size={20} className="mr-2" /> Available Intakes
                      </h3>
                      <p className="font-medium">{university.intakes || "Please contact the university for intake dates."}</p>
                    </div>
                    
                    <div className="bg-amber-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <School size={20} className="mr-2" /> Hostel Facility
                      </h3>
                      <p className="font-medium">
                        {university.hostelFacility ? "Yes, hostel accommodation is available." : "Please contact the university about accommodation options."}
                      </p>
                    </div>
                  </div>
                  
                  {university.additionalExpenses && (
                    <>
                      <h3 className="text-2xl font-bold mt-8 mb-4">Additional Expenses</h3>
                      <div className="prose max-w-none text-gray-700">
                        {university.additionalExpenses.split('\n').map((paragraph: string, i: number) => (
                          <p key={i} className="mb-4">{paragraph}</p>
                        ))}
                      </div>
                    </>
                  )}
                </TabsContent>
                
                {/* Facilities Tab */}
                <TabsContent value="facilities" className="space-y-6">
                  <h2 className="text-3xl font-bold mb-6">Campus Facilities</h2>
                  
                  {university.facilities ? (
                    <div className="prose max-w-none text-gray-700">
                      {university.facilities.split('\n').map((paragraph: string, i: number) => (
                        <p key={i} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No facilities information available.</p>
                  )}
                </TabsContent>
                
                {/* Gallery Tab */}
                <TabsContent value="gallery" className="space-y-6">
                  <h2 className="text-3xl font-bold mb-6">Campus Gallery</h2>
                  
                  {university.gallery && university.gallery.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {university.gallery.map((imageUrl: string, i: number) => (
                        <div key={i} className="rounded-lg overflow-hidden shadow-md">
                          <img 
                            src={imageUrl} 
                            alt={`${university.name} - Gallery ${i+1}`}
                            className="w-full h-64 object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://placehold.co/600x400?text=Image+Not+Available";
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No gallery images available.</p>
                  )}
                </TabsContent>
                
                {/* FAQ Tab */}
                <TabsContent value="faq" className="space-y-6">
                  <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                  
                  {faqs.length > 0 ? (
                    <Accordion type="single" collapsible className="w-full">
                      {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger>{faq.question}</AccordionTrigger>
                          <AccordionContent>
                            <p className="text-gray-700">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    <p className="text-gray-500 italic">No FAQs available for this university.</p>
                  )}
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Application Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="shadow-md border-blue-100">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Interested in {university.name}?</h3>
                    <p className="text-gray-600 mb-6">
                      Fill out this form and our counselors will get in touch with you shortly to guide you through the application process.
                    </p>
                    <StudentInquiryForm universityId={university.id} />
                    
                    <div className="mt-6 pt-6 border-t text-center">
                      <p className="text-gray-500 mb-4">Want to go back to dashboard?</p>
                      <ShimmerButton 
                        onClick={() => navigate('/dashboard')}
                        shimmerColor="rgba(59, 130, 246, 0.5)"
                        background="linear-gradient(45deg, #3b82f6, #1d4ed8)"
                      >
                        Return to Dashboard
                      </ShimmerButton>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DynamicUniversityPage;
