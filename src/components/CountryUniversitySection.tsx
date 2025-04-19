import { useEffect, useRef } from "react";
import { College } from "./CollegeCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CountryUniversitySectionProps {
  countryName: string;
  colleges: College[];
}

const CountryUniversitySection = ({ countryName, colleges }: CountryUniversitySectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
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

    const elements = document.querySelectorAll(".section-animate");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8 section-animate">
          <h2 className="text-3xl font-bold">
            Medical Universities in {countryName}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-4 scroll-smooth hide-scrollbar section-animate"
        >
          {colleges.map((college) => (
            <div
              key={college.id}
              className="flex-none w-[300px] md:w-[350px] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48">
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="text-xl font-bold mb-1">{college.name}</h4>
                    <p className="text-sm opacity-90">{college.city}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-blue-600 font-bold">
                    {college.currency}{college.tuitionFee?.toLocaleString()} / year
                  </div>
                  <div className="text-sm text-gray-600">6 Years Duration</div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {college.description}
                </p>
                <a
                  href={`/university-details/${college.id}`}
                  className="inline-block w-full text-center py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

        {colleges.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <p className="text-gray-500">No universities found for {countryName}.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountryUniversitySection; 