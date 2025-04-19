
import { Helmet } from "react-helmet-async";
import { CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestCallbackForm from "@/components/RequestCallbackForm";

const AdmissionProcessPage = () => {
  const admissionSteps = [
    {
      title: "Initial Consultation",
      description: "Meet with our expert counselors to understand your preferences, qualifications, and budget.",
    },
    {
      title: "University Selection",
      description: "Based on your profile, we'll recommend suitable universities and programs for your medical education.",
    },
    {
      title: "Documentation",
      description: "We'll help you prepare all necessary documents including application forms, transcripts, and recommendation letters.",
    },
    {
      title: "Application Submission",
      description: "Our team will handle the application submission process to your selected universities.",
    },
    {
      title: "University Acceptance",
      description: "Once accepted, we'll guide you through understanding the offer letter and next steps.",
    },
    {
      title: "Visa Process",
      description: "Complete assistance with visa application, including documentation and interview preparation.",
    },
    {
      title: "Pre-Departure Guidance",
      description: "Comprehensive orientation about accommodation, travel, local customs, and what to pack.",
    },
    {
      title: "Arrival & Settlement",
      description: "Support upon arrival to help you settle comfortably in your new environment.",
    }
  ];

  return (
    <>
      <Helmet>
        <title>Admission Process for MBBS Abroad | Future Doctor</title>
        <meta name="description" content="Learn about our streamlined admission process for MBBS education abroad. Expert guidance from application to enrollment." />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-blue-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-3/5">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                  Your Journey to Becoming a Doctor Starts Here
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  We've simplified the admission process for studying MBBS abroad into clear, manageable steps. Our experienced team guides you through each stage, ensuring a smooth transition to your medical education overseas.
                </p>
              </div>
              <div className="w-full md:w-2/5">
                <RequestCallbackForm 
                  title="Get Admission Guidance" 
                  subtitle="Have questions about the admission process? Request a callback from our experts."
                  formType="admission"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Admission Process Steps */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Step-by-Step Admission Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {admissionSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        <span className="text-blue-600">Step {index + 1}:</span> {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg mb-4">Ready to begin your journey to medical school abroad?</p>
              <a href="#get-started" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
        
        {/* Documents Required Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Documents Required</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="mb-6 text-gray-700">
                  Preparing the right documents is crucial for a successful application. Here's what you'll need:
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Completed application form",
                    "High school mark sheets and certificates (Classes 10 and 12)",
                    "NEET scorecard (if applicable)",
                    "Valid passport",
                    "Passport-sized photographs",
                    "Birth certificate",
                    "Medical fitness certificate",
                    "Bank statement showing sufficient funds",
                    "No Objection Certificate (NOC)",
                    "Student visa (after acceptance)",
                  ].map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="min-w-5 w-5 h-5 text-green-600 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="mt-6 text-gray-600 text-sm">
                  Note: Document requirements may vary slightly by country and university. Our counselors will provide you with a customized list based on your chosen destination.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "When should I start the admission process for MBBS abroad?",
                  answer: "It's recommended to start at least 6-8 months before the intended intake. This gives enough time for university selection, application preparation, visa processing, and pre-departure arrangements."
                },
                {
                  question: "Is NEET mandatory for studying MBBS abroad?",
                  answer: "Yes, as per the National Medical Commission (NMC) guidelines, Indian students must qualify NEET to study MBBS abroad if they wish to practice medicine in India after graduation."
                },
                {
                  question: "What are the language requirements for studying MBBS abroad?",
                  answer: "This varies by country. While many universities offer English-medium programs, some countries might require proficiency in the local language. Our counselors will guide you about specific requirements for your chosen destination."
                },
                {
                  question: "How much does it cost to study MBBS abroad?",
                  answer: "Costs vary significantly depending on the country and university. Generally, tuition fees range from $3,000 to $60,000 per year. Additionally, living expenses depend on the country's cost of living."
                },
                {
                  question: "How does Future Doctor help with visa applications?",
                  answer: "We provide comprehensive visa assistance including documentation preparation, form filling, interview preparation, and guidance throughout the visa process."
                }
              ].map((faq, index) => (
                <div key={index} className="mb-6 border-b pb-6 last:border-b-0">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section id="get-started" className="bg-blue-600 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Begin Your Medical Education Journey Today</h2>
              <p className="text-blue-100 mb-8 text-lg">
                Our expert counselors are ready to guide you through every step of the admission process.
              </p>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <RequestCallbackForm 
                  title="Schedule Your Consultation"
                  subtitle="Let our experts help you navigate the admission process"
                  formType="admission_consultation"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AdmissionProcessPage;
