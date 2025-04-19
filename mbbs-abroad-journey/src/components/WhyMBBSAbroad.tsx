
import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

const WhyMBBSAbroad = () => {
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

  const benefits = [
    {
      title: "Affordable Education",
      description: "Complete your MBBS at 1/4th the cost of Indian private medical colleges with no hidden fees or donations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><circle cx="12" cy="12" r="8"/><path d="M10 8v6a1 1 0 0 0 1 1h4"/></svg>
      ),
    },
    {
      title: "Global Recognition",
      description: "Study in WHO, NMC, and UNESCO-approved universities for worldwide acceptance of your medical degree.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
      ),
    },
    {
      title: "Direct Admission",
      description: "No entrance exams beyond NEET qualification, with straightforward visa processing and admission procedures.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><path d="M5 7 3 5"/><path d="M9 5 5 9"/><path d="M11 21v-8a2 2 0 0 1 2-2h8"/><path d="M21 11V3h-8"/><path d="m14 10 7-7"/></svg>
      ),
    },
    {
      title: "Clinical Exposure",
      description: "Gain hands-on clinical training in modern hospitals with international medical practices and techniques.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>
      ),
    },
    {
      title: "Advanced Infrastructure",
      description: "Access world-class medical facilities, laboratories, and libraries with the latest medical technology.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><path d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h16c1 0 2 1 2 2v10c0 1-1 2-2 2h-5"/><path d="M2 9h20"/><path d="M9 19c0 1 1 2 2 2h2c1 0 2-1 2-2v-3H9Z"/></svg>
      ),
    },
    {
      title: "International Exposure",
      description: "Develop a global perspective through interaction with students and faculty from around the world.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><path d="M3 10h18M7 15h1M16 15h1"/><path d="M3 10a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7Z"/><path d="M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/></svg>
      ),
    },
  ];

  return (
    <section id="why-mbbs-abroad" ref={sectionRef} className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="chip mb-4 section-animate">Why Choose MBBS Abroad?</div>
        <h2 className="heading-md mb-6 section-animate stagger-1">
          Benefits of Pursuing Your Medical Degree Internationally
        </h2>
        <p className="text-gray-600 section-animate stagger-2">
          Choosing to study MBBS abroad offers numerous advantages over domestic options, 
          from affordability to quality of education and international exposure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl p-6 card-hover section-animate"
            style={{ transitionDelay: `${0.1 * (index + 3)}s` }}
          >
            <div className="bg-blue-100 p-3 rounded-xl inline-block mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-10 shadow-smooth section-animate stagger-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="heading-md mb-4">Why Students Choose Us</h3>
            <p className="text-gray-600 mb-6">
              We've helped over 2,000 students achieve their dream of becoming doctors through international medical education. Our expertise ensures a smooth journey from admission to graduation.
            </p>
            <ul className="space-y-3">
              {[
                "Personalized counseling and university selection",
                "Complete documentation and visa assistance",
                "Pre-departure orientation and cultural guidance",
                "Continuous support throughout your education",
                "FMGE/NEXT preparation guidance",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="text-blue-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=1470&auto=format&fit=crop"
                alt="Students on campus"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-4 bg-white rounded-lg p-3 shadow-smooth">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                  ))}
                </div>
                <p className="text-sm font-medium">
                  Join 2000+ successful students
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMBBSAbroad;
