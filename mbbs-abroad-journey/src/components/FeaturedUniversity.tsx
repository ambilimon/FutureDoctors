
import { useEffect, useRef } from "react";
import { ShimmerButton } from "./ShimmerButton";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedUniversity = () => {
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
    <section ref={sectionRef} className="section-container">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-smooth-lg section-animate">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 md:p-12 text-white">
            <div className="bg-white/20 text-white text-xs font-medium inline-flex items-center px-3 py-1 rounded-full mb-6">
              Featured University
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Tbilisi State Medical University
            </h2>
            <p className="opacity-90 mb-8">
              Georgia's oldest and most prestigious medical university, offering exceptional medical education with modern facilities and international recognition since 1918.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Historic Institution with Modern Facilities",
                "WHO, NMC, and UNESCO Recognized",
                "Affordable MBBS Fees – ₹25-35 Lakhs Total",
                "100% English Medium Programs",
                "High FMGE Success Rate",
                "Strong Clinical Training from Early Years",
                "Safe & Student-Friendly Environment in Tbilisi",
              ].map((feature, i) => (
                <div key={i} className="flex items-start">
                  <div className="bg-white/20 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/university/13">
                <ShimmerButton
                  background="#ffffff"
                  shimmerColor="rgba(59, 130, 246, 0.5)"
                  className="text-blue-700"
                >
                  Apply to TSMU
                </ShimmerButton>
              </Link>
              <Link to="/university/13">
                <ShimmerButton
                  background="transparent"
                  shimmerColor="rgba(255, 255, 255, 0.3)"
                  className="border border-white text-white"
                >
                  Learn More
                </ShimmerButton>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="h-full min-h-[350px] lg:min-h-0">
              <img
                src="https://images.unsplash.com/photo-1593377201809-2bf7bef6dc5d?q=80&w=1373&auto=format&fit=crop"
                alt="Tbilisi State Medical University Campus"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 right-6 glass-card bg-white/80 rounded-lg p-4 max-w-xs shadow-smooth">
              <div className="flex space-x-4 items-center">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><path d="M12 8V2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2z"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">2025 Admissions Open</h4>
                  <p className="text-sm text-gray-600">Limited seats available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedUniversity;
