
import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShimmerButton } from "@/components/ShimmerButton";
import { Link } from "react-router-dom";

const OurServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our Services | Future Doctor</title>
        <meta name="description" content="Comprehensive services offered by Future Doctor for medical education abroad" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Services</h1>
              <p className="text-xl text-blue-700">Comprehensive support for your medical education journey</p>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-800">How We Help</h2>
                <p className="text-gray-700 mb-4">
                  At Future Doctor, we provide end-to-end services to help aspiring medical students navigate the complex journey of studying medicine abroad. From selecting the right university to settling into your new life, we're with you every step of the way.
                </p>
                <p className="text-gray-700">
                  Our team of experienced advisors includes medical professionals who have studied abroad themselves, ensuring you receive practical, relevant guidance tailored to your unique situation.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d" 
                  alt="Students receiving guidance"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Services Cards */}
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Our Core Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Service 1 */}
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">University Selection</h3>
                  <p className="text-gray-600 mb-4">
                    We help you find the perfect medical university based on your academic profile, budget, and career goals, with access to over 100+ institutions across 20+ countries.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Personalized university matching
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Detailed comparisons of programs
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Insights on recognition & accreditation
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Service 2 */}
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Application Assistance</h3>
                  <p className="text-gray-600 mb-4">
                    Complete support for the application process, including document preparation, translations, and submission to maximize your chances of acceptance.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Document verification & legalization
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Personal statement guidance
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Application tracking & follow-up
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Service 3 */}
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Visa & Travel Support</h3>
                  <p className="text-gray-600 mb-4">
                    Expert guidance on student visa applications, travel arrangements, and pre-departure preparation to ensure a smooth transition abroad.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Visa documentation assistance
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Interview preparation
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Pre-departure orientation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            {/* Additional Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Service 4 */}
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Accommodation Assistance</h3>
                  <p className="text-gray-600 mb-4">
                    Help with finding suitable student housing options, whether university dormitories or private accommodations, based on your preferences and budget.
                  </p>
                </CardContent>
              </Card>
              
              {/* Service 5 */}
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Post-Arrival Support</h3>
                  <p className="text-gray-600 mb-4">
                    Continuous assistance after you arrive at your destination, including orientation, local registration procedures, and cultural adaptation guidance.
                  </p>
                </CardContent>
              </Card>
              
              {/* Service 6 */}
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Scholarship Guidance</h3>
                  <p className="text-gray-600 mb-4">
                    Information about available scholarships and financial aid options for international medical students, with assistance in preparing applications.
                  </p>
                </CardContent>
              </Card>
              
              {/* Service 7 */}
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Career Counseling</h3>
                  <p className="text-gray-600 mb-4">
                    Long-term career planning advice, including pathways to practice medicine in various countries and preparation for licensing examinations.
                  </p>
                </CardContent>
              </Card>
            </div>
        
            {/* Testimonial Section */}
            <div className="bg-blue-50 rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-center text-blue-800">What Our Students Say</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Testimonial 1 */}
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <p className="italic text-gray-600 mb-4">
                      "Future Doctor made my dream of studying medicine possible. Their guidance through the complex application process and visa requirements was invaluable. I'm now in my second year at a top university in Russia!"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-100 mr-4"></div>
                      <div>
                        <p className="font-semibold">Priya Sharma</p>
                        <p className="text-sm text-gray-500">MBBS Student, Russia</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Testimonial 2 */}
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <p className="italic text-gray-600 mb-4">
                      "I was overwhelmed by the options until I found Future Doctor. They helped me select a university that matched my budget and career goals. Their post-arrival support made settling in so much easier."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-100 mr-4"></div>
                      <div>
                        <p className="font-semibold">James Wilson</p>
                        <p className="text-sm text-gray-500">Medical Student, Philippines</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-blue-800">Ready to Begin Your Medical Journey?</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Take the first step toward your medical career with personalized guidance from our experts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/#application">
                  <ShimmerButton>Apply Now</ShimmerButton>
                </Link>
                <Link to="/#contact">
                  <ShimmerButton variant="secondary">Contact Us</ShimmerButton>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OurServicesPage;
