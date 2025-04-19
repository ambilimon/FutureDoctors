
import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Us | Future Doctor</title>
        <meta name="description" content="Learn about Future Doctor - Your Gateway to Global Medical Education" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">About Future Doctor</h1>
              <p className="text-xl text-blue-700">Your trusted partner on the journey to becoming a medical professional</p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-800">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2015, Future Doctor emerged from a simple observation: many talented students dream of pursuing medical education but face barriers to entry in their home countries.
                </p>
                <p className="text-gray-700 mb-4">
                  Our founder, Dr. Sarah Chen, experienced these challenges firsthand. After studying medicine abroad and witnessing the transformative impact it had on her career, she established Future Doctor to help other aspiring medical students access quality education globally.
                </p>
                <p className="text-gray-700">
                  Today, we've helped over 5,000 students from 25+ countries achieve their dreams of becoming healthcare professionals by connecting them with top medical universities worldwide.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/UNIVERSITY IMAGES/Services/Us.jpg" 
                  alt="Medical students in a classroom" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-blue-800">Our Mission</h2>
              <p className="text-xl text-gray-700 mb-8">
                To democratize access to medical education by guiding students through their journey to becoming healthcare professionals, regardless of geographical or financial constraints.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                    <p className="text-gray-600">Making quality medical education accessible to deserving students worldwide</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                    <p className="text-gray-600">Partnering with globally recognized institutions known for academic excellence</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Guidance</h3>
                    <p className="text-gray-600">Providing personalized support throughout the application and study process</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                    alt="Dr. Sarah Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Dr. Sarah Chen</h3>
                  <p className="text-blue-600 mb-3">Founder & CEO</p>
                  <p className="text-gray-600">With over 15 years of experience in medical education, Dr. Chen leads our mission to connect students with opportunities worldwide.</p>
                </CardContent>
              </Card>
              
              {/* Team Member 2 */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                    alt="Michael Rodriguez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Michael Rodriguez</h3>
                  <p className="text-blue-600 mb-3">Academic Advisor</p>
                  <p className="text-gray-600">Michael specializes in curriculum alignment and helps students navigate different medical education systems globally.</p>
                </CardContent>
              </Card>
              
              {/* Team Member 3 */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                    alt="Aisha Patel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Aisha Patel</h3>
                  <p className="text-blue-600 mb-3">Student Success Manager</p>
                  <p className="text-gray-600">Aisha ensures our students receive comprehensive support from application through to graduation and beyond.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUsPage;
