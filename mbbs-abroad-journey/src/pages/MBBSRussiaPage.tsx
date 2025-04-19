
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShimmerButton } from "@/components/ShimmerButton";
import StudentInquiryForm from "@/components/StudentInquiryForm";
import { Link } from "react-router-dom";
import { 
  Notebook, 
  GraduationCap, 
  Building2, 
  BookOpen, 
  Globe, 
  BarChart3, 
  CheckCircle2, 
  Clock,
  CalendarDays
} from "lucide-react";

const MBBSRussiaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Moscow State University"
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end">
          <div className="container mx-auto px-4 py-12 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">MBBS in Russia</h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              Study medicine at prestigious universities in Russia with globally recognized degrees at affordable costs
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/#application">
                <ShimmerButton size="lg" className="font-medium">
                  Apply Now
                </ShimmerButton>
              </Link>
              <Link to="/universities">
                <ShimmerButton size="lg" variant="outline" className="font-medium text-white border-white hover:bg-white/20">
                  Explore Universities
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Overview of MBBS in Russia</h2>
              <p className="text-lg mb-4">
                Russia has emerged as one of the most popular destinations for international students seeking quality medical education. 
                Russian medical universities are recognized globally for their advanced teaching methodologies, state-of-the-art infrastructure, 
                and affordable fee structure.
              </p>
              <p className="text-lg mb-4">
                With over 60 medical universities offering MBBS programs, Russia provides students with an opportunity to obtain a globally 
                recognized medical degree at a fraction of the cost compared to Western countries. The medical degrees from Russian universities 
                are recognized by prestigious medical bodies including WHO, UNESCO, and the Medical Council of India (NMC).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">Degree Awarded</h3>
                  </div>
                  <p>M.D. Physician (equivalent to MBBS in India)</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <CalendarDays className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">Duration</h3>
                  </div>
                  <p>6 years (including 1 year internship)</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <Globe className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">Medium of Teaching</h3>
                  </div>
                  <p>English & Russian (with Russian language training)</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">Eligibility</h3>
                  </div>
                  <p>50% in PCB (Physics, Chemistry, Biology) in 12th</p>
                </div>
              </div>
            </section>
            
            {/* Advantages Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Advantages of Studying MBBS in Russia</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p>Affordable tuition fees starting from 4,500 USD per year</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p>No entrance exams like IELTS, TOEFL required</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p>Global recognition by WHO, UNESCO, and NMC</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p>Modern infrastructure and advanced teaching facilities</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p>Practical-based medical learning approach</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p>Internationally diverse student environment</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p>Safe campus environment with student support services</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p>Affordable living costs (150-300 USD per month)</p>
                </div>
              </div>
            </section>
            
            {/* Top Universities Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Top Medical Universities in Russia</h2>
              <p className="text-lg mb-6">
                Russia boasts some of the oldest and most prestigious medical universities in the world. 
                Here are some of the top choices for international students:
              </p>
              <div className="space-y-6">
                {[
                  {
                    name: "First Moscow State Medical University (Sechenov)",
                    location: "Moscow",
                    established: "1758",
                    recognition: "WHO, UNESCO, NMC",
                    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  },
                  {
                    name: "Peoples' Friendship University of Russia (RUDN)",
                    location: "Moscow",
                    established: "1960",
                    recognition: "WHO, UNESCO, NMC",
                    img: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  },
                  {
                    name: "Kazan Federal University",
                    location: "Kazan",
                    established: "1804",
                    recognition: "WHO, UNESCO, NMC",
                    img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  }
                ].map((university, index) => (
                  <div key={index} className="flex flex-col md:flex-row border border-gray-200 rounded-lg overflow-hidden">
                    <div className="md:w-1/3 h-64 md:h-auto">
                      <img 
                        src={university.img} 
                        alt={university.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop";
                        }}
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold mb-2">{university.name}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center">
                          <Building2 className="w-4 h-4 text-blue-600 mr-2" />
                          <span><strong>Location:</strong> {university.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-blue-600 mr-2" />
                          <span><strong>Established:</strong> {university.established}</span>
                        </div>
                        <div className="flex items-center">
                          <Globe className="w-4 h-4 text-blue-600 mr-2" />
                          <span><strong>Recognition:</strong> {university.recognition}</span>
                        </div>
                      </div>
                      <Link to="/universities">
                        <ShimmerButton size="sm">View Details</ShimmerButton>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link to="/universities">
                  <ShimmerButton size="lg" variant="outline" className="font-medium">
                    View All Russian Universities
                  </ShimmerButton>
                </Link>
              </div>
            </section>
            
            {/* MBBS Admission Process */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Admission Process for MBBS in Russia</h2>
              <p className="text-lg mb-6">
                The admission process for MBBS in Russian medical universities is straightforward and student-friendly, 
                without requiring entrance examinations.
              </p>
              
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                
                {[
                  {
                    step: "Document Preparation",
                    desc: "Prepare all required documents including 10th and 12th mark sheets, passport, passport-sized photographs, and medical certificate."
                  },
                  {
                    step: "University Selection",
                    desc: "Choose the right medical university based on your preferences, budget, and location."
                  },
                  {
                    step: "Application Submission",
                    desc: "Submit the application form along with the required documents to the university or through an authorized representative."
                  },
                  {
                    step: "Invitation Letter",
                    desc: "After document verification, the university issues an invitation letter for visa purposes."
                  },
                  {
                    step: "Visa Application",
                    desc: "Apply for a student visa at the Russian embassy/consulate with the invitation letter and other required documents."
                  },
                  {
                    step: "Travel Arrangements",
                    desc: "Book flight tickets and prepare for departure once the visa is approved."
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-10 pb-8">
                    <div className="absolute left-2 top-2 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10">
                      {index + 1}
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-5 font-medium cursor-pointer bg-white hover:bg-gray-50">
                      <span className="text-lg">Is MBBS from Russia recognized in India?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" width="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </summary>
                    <div className="p-5 border-t border-gray-200 bg-gray-50">
                      <p>Yes, MBBS degrees from Russian medical universities recognized by the National Medical Commission (NMC) are accepted in India. Graduates need to clear the NEXT (National Exit Test) to practice medicine in India.</p>
                    </div>
                  </details>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-5 font-medium cursor-pointer bg-white hover:bg-gray-50">
                      <span className="text-lg">What is the cost of studying MBBS in Russia?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" width="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </summary>
                    <div className="p-5 border-t border-gray-200 bg-gray-50">
                      <p>The tuition fees for MBBS in Russia range from $3,500 to $7,000 per year depending on the university. Living expenses are approximately $150-300 per month, making it one of the most affordable options for medical education globally.</p>
                    </div>
                  </details>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-5 font-medium cursor-pointer bg-white hover:bg-gray-50">
                      <span className="text-lg">Do I need to learn Russian for MBBS studies?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" width="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </summary>
                    <div className="p-5 border-t border-gray-200 bg-gray-50">
                      <p>Many Russian universities offer MBBS programs in English medium. However, learning basic Russian is beneficial for daily communication and patient interactions during clinical rotations. Universities typically offer Russian language courses in the first year.</p>
                    </div>
                  </details>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-5 font-medium cursor-pointer bg-white hover:bg-gray-50">
                      <span className="text-lg">Are entrance exams required for admission?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" width="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </summary>
                    <div className="p-5 border-t border-gray-200 bg-gray-50">
                      <p>No entrance exams like IELTS or TOEFL are required for admission to Russian medical universities. However, students need to meet the minimum eligibility criteria of 50% marks in Physics, Chemistry, and Biology in 12th standard.</p>
                    </div>
                  </details>
                </div>
              </div>
            </section>
            
            {/* CTA Section */}
            <section className="bg-blue-50 p-8 rounded-lg border border-blue-100 mb-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to Start Your Medical Journey in Russia?</h2>
                <p className="text-lg mb-6">
                  Get expert guidance and support for your admission process today. Our experienced counselors will help you choose the right university and guide you through every step.
                </p>
                <Link to="/#application">
                  <ShimmerButton size="lg" className="font-medium">
                    Apply Now
                  </ShimmerButton>
                </Link>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <StudentInquiryForm sticky={true} />
              
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    "10+ years of experience in foreign medical education counseling",
                    "2000+ successful student placements in top universities",
                    "End-to-end support from application to visa",
                    "Dedicated student support team in Russia",
                    "Pre-departure orientation and guidance"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MBBSRussiaPage;
