import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
  Star,
  Phone,
  MessageCircle
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShimmerButton } from "@/components/ShimmerButton";
import StudentInquiryForm from "@/components/StudentInquiryForm";
import { CollegeCard, College } from "@/components/CollegeCard";
import CountryUniversitySection from "@/components/CountryUniversitySection";
import CountryApplicationForm from "@/components/inquiry-form/CountryApplicationForm";

export interface AdvantageItem {
  text: string;
}

export interface ProcessStep {
  step: string;
  desc: string;
}

export interface EligibilityItem {
  text: string;
}

export interface DocumentItem {
  text: string;
}

export interface FeeStructureItem {
  name: string;
  cost: string;
  isHighlighted?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CountryPageProps {
  countryName: string;
  heroImage: string;
  countryDescription: string[];
  degreeAwarded: string;
  duration: string;
  teachingMedium: string;
  eligibilityCriteria: string;
  advantages: AdvantageItem[];
  colleges: College[];
  admissionProcess: ProcessStep[];
  eligibilityItems: EligibilityItem[];
  documents: DocumentItem[];
  feeStructure: FeeStructureItem[];
  faqs: FaqItem[];
}

export default function MBBSCountryTemplate({
  countryName,
  heroImage,
  countryDescription,
  degreeAwarded,
  duration,
  teachingMedium,
  eligibilityCriteria,
  advantages,
  colleges,
  admissionProcess,
  eligibilityItems,
  documents,
  feeStructure,
  faqs
}: CountryPageProps) {
  useEffect(() => {
    console.log("MBBSCountryTemplate mounted for:", countryName);
    window.scrollTo(0, 0);
  }, [countryName]);

  if (!countryName || !heroImage) {
    console.error("Missing required props:", { countryName, heroImage });
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Missing Required Data</h1>
          <p>We're having trouble loading the page content. Please try refreshing.</p>
        </div>
      </div>
    );
  }

  try {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>MBBS in {countryName} | Study Medicine in {countryName}</title>
        <meta 
          name="description" 
          content={`Study MBBS in ${countryName} with globally recognized medical programs. Learn about top medical universities, fees, admission process, and more.`}
        />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img 
          src={heroImage} 
          alt={`MBBS in ${countryName}`}
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end">
          <div className="container mx-auto px-4 py-12 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">MBBS in {countryName}</h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              Study medicine at prestigious universities in {countryName} with globally recognized degrees at affordable costs
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
            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Overview of MBBS in {countryName}</h2>
              {countryDescription.map((paragraph, index) => (
                <p key={index} className="text-lg mb-4">{paragraph}</p>
              ))}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">Degree Awarded</h3>
                  </div>
                  <p>{degreeAwarded}</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <CalendarDays className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">Duration</h3>
                  </div>
                  <p>{duration}</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <Globe className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">Medium of Teaching</h3>
                  </div>
                  <p>{teachingMedium}</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">Eligibility</h3>
                  </div>
                  <p>{eligibilityCriteria}</p>
                </div>
              </div>
            </section>
            
            {/* Advantages Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Advantages of Studying MBBS in {countryName}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p>{advantage.text}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Top Universities Section */}
          <CountryUniversitySection 
            countryName={countryName}
            colleges={colleges}
          />
            
            {/* MBBS Admission Process */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Admission Process for MBBS in {countryName}</h2>
              <p className="text-lg mb-6">
                The admission process for MBBS in {countryName} medical universities is straightforward and student-friendly.
              </p>
              
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                
                {admissionProcess.map((item, index) => (
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
              <h2 className="text-3xl font-bold mb-6">Eligibility Criteria for MBBS in {countryName}</h2>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <ul className="space-y-3">
                  {eligibilityItems.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            
            {/* Documents Required */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Documents Required for MBBS Admission in {countryName}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((doc, index) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-3">
                      <Notebook className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-medium">{doc.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Fees Structure */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Fee Structure for MBBS in {countryName}</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="py-3 px-4 text-left border-b border-gray-200">Particulars</th>
                      <th className="py-3 px-4 text-left border-b border-gray-200">Average Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((fee, index) => (
                      <tr key={index} className={fee.isHighlighted ? "bg-blue-50 font-medium" : index % 2 === 0 ? "" : "bg-gray-50"}>
                        <td className="py-3 px-4 border-b border-gray-200 font-medium">{fee.name}</td>
                        <td className="py-3 px-4 border-b border-gray-200">{fee.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Note: The fees mentioned above are approximate and may vary from university to university. 
                Please contact us for the most updated fee structure of specific universities.
              </p>
            </section>
            
            {/* FAQs */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

          {/* Application Form Section */}
          <section className="py-16 bg-gradient-to-b from-blue-50/50 to-white rounded-2xl">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Begin Your Medical Journey in {countryName}</h2>
                <p className="text-lg text-gray-600">
                  Take the first step towards your dream of becoming a doctor. Apply now and let us guide you through the admission process.
                </p>
              </div>
              <CountryApplicationForm countryName={countryName} />
            </div>
          </section>
      </main>
      
      <Footer />
    </div>
  );
  } catch (error) {
    console.error("Error in MBBSCountryTemplate:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Rendering Error</h1>
          <p>We're having trouble rendering the page content. Please try refreshing.</p>
        </div>
      </div>
    );
  }
} 