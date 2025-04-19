
import { useEffect, useRef } from "react";
import { Rocket, Phone, Globe, Check } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

const ApplicationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="apply" ref={sectionRef} className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="chip mb-4 section-animate">Apply Now</div>
        <h2 className="heading-md mb-6 section-animate stagger-1">
          Start Your MBBS Journey Abroad Today
        </h2>
        <p className="text-gray-600 section-animate stagger-2">
          Admissions for MBBS 2025 are now open. Secure your seat with minimal documentation 
          and expert guidance from our counselors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 section-animate stagger-3">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-smooth">
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
          </div>
        </div>
        
        <div className="order-1 lg:order-2 section-animate stagger-4">
          <div className="bg-white rounded-2xl shadow-smooth p-8 md:p-10 border border-gray-100">
            <Rocket className="h-12 w-12 text-blue-700 mb-6" />
            <h3 className="text-2xl font-semibold mb-6">Ready to Begin Your MBBS Journey?</h3>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our expert counselors will get in touch with you to guide 
              you through the admission process.
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="neet" className="block text-sm font-medium text-gray-700 mb-1">
                    NEET Score
                  </label>
                  <input
                    type="text"
                    id="neet"
                    placeholder="Enter your NEET score"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Country
                </label>
                <select
                  id="country"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select your preferred country</option>
                  <option value="russia">Russia</option>
                  <option value="georgia">Georgia</option>
                  <option value="kazakhstan">Kazakhstan</option>
                  <option value="kyrgyzstan">Kyrgyzstan</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Any specific questions or requirements"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              
              <AnimatedButton variant="highlight" className="w-full" size="lg">
                Submit Application
              </AnimatedButton>
            </form>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-4">You can also reach us directly:</p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-700 mr-2" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-blue-700 mr-2" />
                  <span className="text-sm">info@mbbsabroad.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 bg-blue-700 text-white rounded-2xl p-8 md:p-10 section-animate stagger-5">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Admissions for MBBS 2025 are NOW OPEN!
            </h3>
            <p className="opacity-90 mb-6">
              Seats are filling fast! Secure your MBBS seat with just ₹10,000 deposit.
              Visit our branches in Davanagere, Hubballi, and Kalaburagi for expert guidance.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {["NEET Required", "No Entrance Exam", "Limited Seats"].map((tag, i) => (
                <span 
                  key={i} 
                  className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <AnimatedButton
              className="bg-white text-blue-700 hover:bg-blue-50 border-0"
              size="lg"
            >
              Apply Now
            </AnimatedButton>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/10 rounded-xl p-4 flex items-start">
              <Check className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Easy Documentation</h4>
                <p className="text-sm opacity-80">Simplified paperwork and document assistance</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 flex items-start">
              <Check className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Guaranteed Admission</h4>
                <p className="text-sm opacity-80">100% admission guarantee in top universities</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 flex items-start">
              <Check className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Visa Success Rate</h4>
                <p className="text-sm opacity-80">High visa success rate with expert assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
