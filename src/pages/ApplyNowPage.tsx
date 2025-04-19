import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import { Rocket, Phone, Globe, Check, GraduationCap, School, MapPin } from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";
import { useToast } from "@/components/ui/use-toast";

const ApplyNowPage = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    lastAttendedCollege: "",
    neetScore: "",
    country: "",
    university: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    
    // Validate NEET score
    if (id === 'neetScore') {
      const score = parseInt(value);
      if (value && (isNaN(score) || score < 0 || score > 1000)) {
        return; // Don't update if invalid
      }
    }
    
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.lastAttendedCollege) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number with at least 10 digits.",
        variant: "destructive"
      });
      return;
    }
    
    // Store application in localStorage
    const applications = JSON.parse(localStorage.getItem("applications") || "[]");
    applications.push({
      ...formData,
      submittedAt: new Date().toISOString(),
      status: "new"
    });
    localStorage.setItem("applications", JSON.stringify(applications));
    
    toast({
      title: "Application Submitted!",
      description: "We'll contact you shortly to discuss your MBBS abroad journey.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      lastAttendedCollege: "",
      neetScore: "",
      country: "",
      university: "",
      message: ""
    });
  };

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Apply for MBBS Abroad</h1>
              <p className="text-xl opacity-90">
                Start your medical education journey with expert guidance and support
              </p>
            </div>
          </div>
        </div>
        
        <section ref={sectionRef} className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4 section-animate">
              Admission 2025
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 section-animate stagger-1">
              Start Your MBBS Journey Abroad Today
            </h2>
            <p className="text-gray-600 section-animate stagger-2">
              Admissions for MBBS 2025 are now open. Secure your seat with minimal documentation 
              and expert guidance from our counselors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="section-animate stagger-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-semibold mb-6">How to Apply</h3>
                
                <div className="space-y-8">
                  <div className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Qualify NEET</h4>
                      <p className="text-gray-600">
                        Have a valid NEET score. No separate entrance exam is required 
                        for admission to foreign medical universities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Apply Online</h4>
                      <p className="text-gray-600">
                        Fill out our application form and submit the required documents. 
                        Our team will guide you through the process.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Secure Your Seat</h4>
                      <p className="text-gray-600">
                        Pay a minimal booking amount of ₹10,000 to secure your seat 
                        in your preferred university.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Visa & Travel Arrangements</h4>
                      <p className="text-gray-600">
                        Our team will assist with visa processing, travel arrangements, 
                        and pre-departure orientation.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-white rounded-lg border border-blue-100">
                  <h4 className="font-medium flex items-center text-blue-800 mb-2">
                    <Check className="h-5 w-5 mr-2" />
                    Required Documents
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                      NEET Score Card
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                      10th & 12th Mark Sheets
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                      Valid Passport
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                      Passport Size Photographs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="section-animate stagger-4">
              <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                <Rocket className="h-12 w-12 text-blue-700 mb-6" />
                <h3 className="text-2xl font-semibold mb-6">Ready to Begin Your MBBS Journey?</h3>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our expert counselors will get in touch with you to guide 
                  you through the admission process.
                </p>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastAttendedCollege" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Attended College/School*
                      </label>
                      <div className="relative">
                        <School className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          id="lastAttendedCollege"
                          value={formData.lastAttendedCollege}
                          onChange={handleChange}
                          placeholder="Name of your institution"
                          className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="neetScore" className="block text-sm font-medium text-gray-700 mb-1">
                        NEET Score*
                      </label>
                      <div className="relative">
                        <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="number"
                          id="neetScore"
                          value={formData.neetScore}
                          onChange={handleChange}
                          placeholder="Enter score (0-1000)"
                          min="0"
                          max="1000"
                          className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Enter your most recent NEET score (0-1000)
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Country
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <select
                        id="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                      >
                        <option value="">Select your preferred country</option>
                        <option value="russia">Russia</option>
                        <option value="georgia">Georgia</option>
                        <option value="philippines">Philippines</option>
                        <option value="belarus">Belarus</option>
                        <option value="moldova">Moldova</option>
                        <option value="bulgaria">Bulgaria</option>
                        <option value="bosnia">Bosnia</option>
                        <option value="uzbekistan">Uzbekistan</option>
                        <option value="kazakhstan">Kazakhstan</option>
                        <option value="kyrgyzstan">Kyrgyzstan</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="nepal">Nepal</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred University
                    </label>
                    <select
                      id="university"
                      value={formData.university}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select your preferred university</option>
                      <option value="altai">Altai State Medical University</option>
                      <option value="bashkir">Bashkir State Medical University</option>
                      <option value="mari">Mari State University</option>
                      <option value="batumi">Batumi Shota Rustaveli State University</option>
                      <option value="caucasus">Caucasus International University</option>
                      <option value="lyceum">Lyceum of the Philippines University</option>
                      <option value="davao">Davao Medical School Foundation</option>
                      <option value="belarusian">Belarusian State Medical University</option>
                      <option value="grodno">Grodno State Medical University</option>
                      <option value="nicolae">Nicolae Testemitanu State University of Medicine</option>
                      <option value="pleven">Medical University Pleven</option>
                      <option value="andijan">Andijan State Medical Institute</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any specific questions or requirements"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                  
                  <AnimatedButton variant="highlight" className="w-full" size="lg" type="submit">
                    Submit Application
                  </AnimatedButton>
                </form>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 mb-4">You can also reach us directly:</p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-700 mr-2" />
                      <span className="text-sm">+91 9901712001</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-blue-700 mr-2" />
                      <span className="text-sm">info@futuredoctoredu.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApplyNowPage; 