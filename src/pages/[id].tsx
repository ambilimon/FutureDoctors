import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getUniversityById } from "@/data/universities";
import { University } from "@/data/universities";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CountryApplicationForm from "@/components/inquiry-form/CountryApplicationForm";
import { AlertTriangle } from "lucide-react";

const UniversityDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [university, setUniversity] = useState<University | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      const uniId = Array.isArray(id) ? id[0] : id;
      const foundUniversity = getUniversityById(uniId);
      
      if (foundUniversity) {
        setUniversity(foundUniversity);
      } else {
        console.warn(`University with ID ${uniId} not found`);
      }
      
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading university details...</p>
      </div>
    );
  }

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
            <p className="text-gray-600 mb-8">We couldn't find the university you're looking for.</p>
            <div className="space-y-3">
              <Button className="w-full" onClick={() => router.push('/universities')}>
                View All Universities
              </Button>
              <Button variant="outline" className="w-full" onClick={() => router.back()}>
                Go Back
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Back navigation */}
        <div className="container mx-auto mt-4">
          <Button
            variant="ghost"
            className="flex items-center text-primary"
            onClick={() => router.back()}
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back
          </Button>
        </div>

        {/* Hero section */}
        <section className="bg-slate-50 py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
                
                <div className="mt-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{university.name}</h1>
                  <p className="text-slate-500 mt-2">{university.city}, {university.country}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-slate-500">Tuition Fees</p>
                      <p className="text-lg font-semibold">
                        {university.tuitionFee && university.tuitionFee.amount !== undefined ? 
                          `${university.tuitionFee.currency || '$'}${(university.tuitionFee.amount || 0).toLocaleString()}` : 
                          'Contact for fees'}
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-slate-500">Duration</p>
                      <p className="text-lg font-semibold">{university.duration}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-slate-500">Established</p>
                      <p className="text-lg font-semibold">{university.established}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-slate-500">Students</p>
                      <p className="text-lg font-semibold">{university.totalStudents || "N/A"}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">Apply for Admission</h3>
                  <CountryApplicationForm universityId={university.id} countryName={university.country} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* University details */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="programs">Programs</TabsTrigger>
                <TabsTrigger value="admission">Admission</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">About {university.name}</h3>
                  <p className="text-slate-700 leading-relaxed">{university.description}</p>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {university.facilities.map((facility, index) => (
                        <li key={index} className="flex items-center text-slate-700">
                          <div className="bg-primary/10 p-1 rounded mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          {facility}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-3">Recognition</h4>
                    {Array.isArray(university.recognition) ? (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {university.recognition.map((item, index) => (
                          <li key={index} className="flex items-center text-slate-700">
                            <div className="bg-primary/10 p-1 rounded mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-slate-700">{university.recognition}</p>
                    )}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="programs" className="mt-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">Programs Offered</h3>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h4 className="text-lg font-medium">MBBS (Bachelor of Medicine and Bachelor of Surgery)</h4>
                      <p className="text-slate-700 mt-2">Duration: {university.duration}</p>
                      <p className="text-slate-700">Medium of Instruction: {university.language}</p>
                      <p className="text-slate-700">Eligibility: Completion of 10+2 with Physics, Chemistry and Biology</p>
                    </div>
                    
                    {university.coursesOffered && university.coursesOffered.map((course, index) => (
                      <div key={index} className="border-b pb-4 last:border-0">
                        <h4 className="text-lg font-medium">{course}</h4>
                        <p className="text-slate-700 mt-2">Please contact the university for specific details about this program.</p>
                      </div>
                    ))}
                    
                    {!university.coursesOffered && (
                      <p className="text-slate-500 italic">Contact the university for information about additional programs.</p>
                    )}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="admission" className="mt-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">Admission Process</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-2">Eligibility Criteria</h4>
                      <ul className="list-disc pl-5 space-y-1 text-slate-700">
                        <li>Completion of 10+2 with Physics, Chemistry, and Biology</li>
                        <li>Minimum 50% aggregate marks (45% for reserved categories)</li>
                        <li>NEET qualification (for Indian students)</li>
                        <li>Age: Minimum 17 years as of December 31st of the admission year</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">Required Documents</h4>
                      <ul className="list-disc pl-5 space-y-1 text-slate-700">
                        <li>10th and 12th mark sheets and certificates</li>
                        <li>NEET scorecard (for Indian students)</li>
                        <li>Passport (valid for at least 18 months)</li>
                        <li>Passport-sized photographs</li>
                        <li>Medical fitness certificate</li>
                        <li>Birth certificate</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">Application Process</h4>
                      <ol className="list-decimal pl-5 space-y-2 text-slate-700">
                        <li>Submit the application form with required documents</li>
                        <li>Pay the application fee</li>
                        <li>Receive invitation letter from the university</li>
                        <li>Apply for student visa</li>
                        <li>Complete admission formalities upon arrival</li>
                      </ol>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">Intake Periods</h4>
                      <p className="text-slate-700">
                        {Array.isArray(university.intake) 
                          ? university.intake.join(', ') 
                          : 'Contact for details'}
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default UniversityDetailPage; 