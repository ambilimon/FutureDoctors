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
  CalendarDays,
  MapPin,
  Star
} from "lucide-react";
import { universities } from "@/data/universities";
import { UniversityCard } from "@/components/UniversityCard";
import { Helmet } from "react-helmet-async";

const MBBSNepalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter universities for Nepal
  const nepalUniversities = universities.filter(
    (university) => university.country.toLowerCase() === "nepal"
  );

  // Manually define Nepal universities since they might not be in the main database yet
  const nepalColleges = [
    {
      id: 45,
      name: "Janaki Medical College",
      country: "Nepal",
      city: "Janakpur",
      tuitionFee: 30000,
      currency: "$",
      image: "/UNIVERSITY IMAGES/NEPAL/JANAKI.jpg",
      facilities: ["Library", "Laboratory", "Cafeteria", "Accommodation", "Medical Center"],
      rating: 4.2,
      category: "Medical",
      description: "Janaki Medical College is a renowned institution for medical education in Nepal, offering quality education with modern facilities.",
      establishedYear: "2003",
      longDescription: "Janaki Medical College is affiliated with Tribhuvan University and is known for its excellent medical education and clinical training. The college has well-equipped laboratories, libraries, and teaching hospitals that provide students with practical experience."
    },
    {
      id: 46,
      name: "Kathmandu Medical College",
      country: "Nepal",
      city: "Kathmandu",
      tuitionFee: 35000,
      currency: "$",
      image: "/UNIVERSITY IMAGES/NEPAL/KATHMANDU.jpg",
      facilities: ["Library", "Laboratory", "Cafeteria", "Accommodation", "WiFi", "Sports Complex", "Research Center"],
      rating: 4.4,
      category: "Medical",
      description: "Kathmandu Medical College is one of the leading medical institutions in Nepal, providing high-quality medical education and training.",
      establishedYear: "1997",
      longDescription: "Kathmandu Medical College is affiliated with Kathmandu University and offers excellent medical programs with a focus on both theoretical knowledge and practical skills. The college has state-of-the-art facilities including modern laboratories, libraries, and teaching hospitals."
    },
    {
      id: 47,
      name: "Nepalgunj Medical College",
      country: "Nepal",
      city: "Nepalgunj",
      tuitionFee: 28000,
      currency: "$",
      image: "/UNIVERSITY IMAGES/NEPAL/NEPALGUNJ.jpg",
      facilities: ["Library", "Laboratory", "Cafeteria", "Accommodation", "Medical Center", "Sports Complex"],
      rating: 4.3,
      category: "Medical",
      description: "Nepalgunj Medical College is a prestigious institution offering comprehensive medical education with modern facilities and experienced faculty.",
      establishedYear: "1996",
      longDescription: "Nepalgunj Medical College is affiliated with Kathmandu University and is committed to providing quality medical education with a focus on practical training. The college has well-equipped laboratories, libraries, and a teaching hospital that provides students with hands-on clinical experience."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>MBBS in Nepal | Study Medicine in Nepal</title>
        <meta name="description" content="Study MBBS in Nepal with globally recognized medical programs. Learn about top medical universities, fees, admission process, and more." />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img 
          src="/UNIVERSITY IMAGES/NEPAL/Nepal.jpg" 
          alt="Mountains of Nepal"
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end">
          <div className="container mx-auto px-4 py-12 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">MBBS in Nepal</h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              Study medicine in Nepal with quality education, affordable fees, and culturally rich experience
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
              <h2 className="text-3xl font-bold mb-6">Overview of MBBS in Nepal</h2>
              <p className="text-lg mb-4">
                Nepal offers a unique opportunity for international students seeking quality medical education at affordable costs.
                With its rich cultural heritage and emerging educational infrastructure, Nepal has become an attractive destination
                for students pursuing medicine, especially from neighboring countries.
              </p>
              <p className="text-lg mb-4">
                Nepalese medical universities follow a curriculum that aligns with international standards, focusing on both
                theoretical knowledge and practical clinical experience. The MBBS programs are recognized by various international
                medical councils, including the Nepal Medical Council (NMC) and the Medical Council of India (MCI).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">Degree Awarded</h3>
                  </div>
                  <p>MBBS (Bachelor of Medicine and Bachelor of Surgery)</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <CalendarDays className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">Duration</h3>
                  </div>
                  <p>5.5 years (including 1 year internship)</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <Globe className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">Medium of Teaching</h3>
                  </div>
                  <p>English</p>
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
              <h2 className="text-3xl font-bold mb-6">Advantages of Studying MBBS in Nepal</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p>Geographic and cultural proximity to India</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p>Affordable tuition fees compared to many countries</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p>English medium instruction throughout the course</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p>Recognition by international medical councils</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p>Similar medical challenges and diseases as in India</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p>No language barrier for Indian students</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p>Rich clinical exposure in various healthcare settings</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p>Low cost of living with familiar culture and food</p>
                </div>
              </div>
            </section>
            
            {/* Top Universities Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Medical Universities in Nepal</h2>
              <p className="text-lg mb-6">
                Nepal offers several prestigious medical institutions that provide high-quality medical education.
                Here are the leading medical colleges in Nepal:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {nepalColleges.map((college) => (
                  <div key={college.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                    <div className="relative h-48">
                      <img 
                        src={college.image} 
                        alt={college.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-4 text-white">
                          <h3 className="text-xl font-bold">{college.name}</h3>
                          <p className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" /> 
                            {college.city}, {college.country}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 mr-1" />
                          <span className="font-medium">{college.rating}</span>
                        </div>
                        <span className="text-blue-600 font-bold">
                          {college.currency}{college.tuitionFee.toLocaleString()} / year
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{college.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {college.facilities.slice(0, 4).map((facility, index) => (
                          <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                            {facility}
                          </span>
                        ))}
                        {college.facilities.length > 4 && (
                          <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                            +{college.facilities.length - 4} more
                          </span>
                        )}
                      </div>
                      <div className="flex justify-end">
                        <Link to={`/university-details/${college.id}`}>
                          <ShimmerButton size="sm" variant="outline" className="font-medium">
                            View Details
                          </ShimmerButton>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* MBBS Admission Process */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Admission Process for MBBS in Nepal</h2>
              <p className="text-lg mb-6">
                The admission process for MBBS in Nepal is competitive and requires careful preparation.
              </p>
              
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                
                {[
                  {
                    step: "Entrance Examination",
                    desc: "Qualify in the entrance examination conducted by the respective universities or the common entrance test in Nepal."
                  },
                  {
                    step: "Application Submission",
                    desc: "Submit the application form along with all required documents to the desired medical college."
                  },
                  {
                    step: "Document Verification",
                    desc: "Verification of academic documents, entrance exam scores, and other credentials."
                  },
                  {
                    step: "Merit List Selection",
                    desc: "Selection based on the merit list prepared according to entrance examination performance."
                  },
                  {
                    step: "Medical Examination",
                    desc: "Undergo a medical examination to ensure fitness for the medical program."
                  },
                  {
                    step: "Fee Payment",
                    desc: "Payment of tuition fees and other charges as specified by the university."
                  },
                  {
                    step: "Enrollment",
                    desc: "Complete the enrollment process and commence the MBBS program."
                  }
                ].map((item, index) => (
                  <div key={index} className="ml-12 mb-6 relative">
                    <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Eligibility Criteria */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Eligibility Criteria for MBBS in Nepal</h2>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p>Minimum 50% marks in Physics, Chemistry, and Biology in 12th grade</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p>NEET qualification (for Indian students)</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p>Pass in entrance examination conducted by the university or common entrance test</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p>Minimum age of 17 years</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p>Good health without any major medical issues</p>
                  </li>
                </ul>
              </div>
            </section>
            
            {/* Documents Required */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Documents Required for MBBS Admission in Nepal</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Notebook className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-medium">10th Mark Sheet</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Notebook className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-medium">12th Mark Sheet</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Notebook className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-medium">NEET Score Card (for Indian students)</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Notebook className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-medium">Entrance Exam Score Card</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Notebook className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-medium">Passport</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Notebook className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-medium">Passport-sized Photographs</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Notebook className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-medium">Character Certificate</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Notebook className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="font-medium">Medical Fitness Certificate</span>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Fees Structure */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Fee Structure for MBBS in Nepal</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="py-3 px-4 text-left border-b border-gray-200">Particulars</th>
                      <th className="py-3 px-4 text-left border-b border-gray-200">Average Cost (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 border-b border-gray-200 font-medium">Tuition Fee (per year)</td>
                      <td className="py-3 px-4 border-b border-gray-200">$8,000 - $12,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border-b border-gray-200 font-medium">Hostel Fee (per year)</td>
                      <td className="py-3 px-4 border-b border-gray-200">$800 - $1,500</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b border-gray-200 font-medium">Food Expenses (per month)</td>
                      <td className="py-3 px-4 border-b border-gray-200">$100 - $200</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border-b border-gray-200 font-medium">Miscellaneous (per year)</td>
                      <td className="py-3 px-4 border-b border-gray-200">$1,000 - $2,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b border-gray-200 font-medium">Total Cost for 5.5 Years</td>
                      <td className="py-3 px-4 border-b border-gray-200">Approx. $50,000 - $75,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Note: The fees mentioned above are approximate and may vary from university to university. 
                Please contact us for the most updated fee structure of specific universities.
              </p>
            </section>
            
            {/* Life in Nepal */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Life in Nepal for International Students</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1527709593724-d2bfd6ee2356?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Kathmandu, Nepal" 
                    className="rounded-lg w-full h-60 object-cover"
                  />
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1512398913032-4a2b9eb6809d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Student life in Nepal" 
                    className="rounded-lg w-full h-60 object-cover"
                  />
                </div>
              </div>
              <p className="text-lg mb-4">
                Nepal offers a unique cultural experience with its rich heritage, diverse traditions, and stunning natural landscapes.
                The country is known for its warm and hospitable people, making it easier for international students to adapt to the
                new environment.
              </p>
              <p className="text-lg mb-4">
                For Indian students, the cultural similarities make the transition particularly smooth. The shared cultural values,
                similar food habits, and familiar lifestyle elements help students feel at home while pursuing their medical education
                in Nepal.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-3">
                    <Building2 className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold">Accommodation</h3>
                  </div>
                  <p>Most medical colleges provide hostel facilities. Off-campus accommodation is also available at affordable rates.</p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-3">
                    <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold">Food & Cuisine</h3>
                  </div>
                  <p>Nepal's cuisine is similar to North Indian food. Indian restaurants and food items are readily available.</p>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-3">
                    <Clock className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold">Transportation</h3>
                  </div>
                  <p>Public transportation is affordable. Major cities have buses, taxis, and ride-sharing services.</p>
                </div>
              </div>
            </section>
            
            {/* FAQs */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3">Is MBBS from Nepal recognized in India?</h3>
                  <p>Yes, MBBS degrees from Nepal's medical colleges that are recognized by the Nepal Medical Council are also recognized by the National Medical Commission (NMC) of India. However, graduates need to clear the NEXT (National Exit Test) to practice medicine in India.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3">What is the medium of instruction in Nepalese medical colleges?</h3>
                  <p>English is the primary medium of instruction in Nepalese medical colleges for MBBS programs, making it convenient for international students, especially from India.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3">How much does it cost to study MBBS in Nepal?</h3>
                  <p>The tuition fees for MBBS in Nepal range from $8,000 to $12,000 per year. The total cost including accommodation and living expenses for the entire 5.5-year program is approximately $50,000 to $75,000.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3">Is NEET qualification necessary for Indian students?</h3>
                  <p>Yes, as per NMC guidelines, Indian students must qualify in NEET to study MBBS abroad, including Nepal. This is mandatory for students who wish to practice medicine in India after completing their degree.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3">Is Nepal safe for international students?</h3>
                  <p>Yes, Nepal is generally a safe country for international students. The Nepalese people are known for their hospitality and friendliness. Most medical colleges have secure campus environments and provide necessary support for international students.</p>
                </div>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <StudentInquiryForm sticky={true} />
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-8">
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p>10+ years of experience in overseas education</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p>Official representatives of top Nepalese medical colleges</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p>End-to-end assistance from application to admission</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p>Pre-departure guidance and orientation</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p>Ongoing support throughout your education</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Contact Our Counselors</h3>
                <p className="mb-4">Have queries about MBBS in Nepal? Our expert counselors are here to help.</p>
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>123 Education Street, Mumbai, India</span>
                </div>
                <div className="flex items-center mb-3">
                  <Star className="w-5 h-5 mr-2" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  <span>info@mbbsabroadjourney.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MBBSNepalPage; 