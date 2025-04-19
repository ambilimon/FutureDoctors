
import { Helmet } from "react-helmet-async";
import { CheckCircle, BookOpen, Award, Users, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestCallbackForm from "@/components/RequestCallbackForm";

const FMGECoachingPage = () => {
  const features = [
    {
      icon: <BookOpen className="w-10 h-10 text-blue-600" />,
      title: "Comprehensive Study Material",
      description: "Access to specially curated study materials focused on high-yield topics for FMGE/NEXT."
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Expert Faculty",
      description: "Learn from experienced faculty who understand the exam pattern and requirements thoroughly."
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600" />,
      title: "Flexible Scheduling",
      description: "Choose between weekend batches, crash courses, and regular sessions based on your availability."
    },
    {
      icon: <Award className="w-10 h-10 text-blue-600" />,
      title: "Mock Tests & Evaluations",
      description: "Regular assessment through mock tests designed to simulate the actual exam environment."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FMGE/NEXT Exam Coaching | Future Doctor</title>
        <meta name="description" content="Specialized coaching for FMGE (MCI Screening Test) and NEXT exam. Prepare with our expert faculty and comprehensive study material." />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-3/5">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                  FMGE/NEXT Exam Coaching
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  Specialized coaching to help foreign medical graduates clear the FMGE (Foreign Medical Graduate Examination) and prepare for the upcoming NEXT (National Exit Test).
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  {["High Success Rate", "Experienced Faculty", "Personalized Guidance"].map((item, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-2/5">
                <RequestCallbackForm 
                  title="Enroll for FMGE/NEXT Coaching" 
                  subtitle="Our counselors will contact you with coaching details"
                  formType="fmge_coaching"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Our Coaching */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Coaching Program</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-all text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* About the Exams */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">About FMGE & NEXT Exams</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4 text-blue-800">FMGE (Foreign Medical Graduate Examination)</h3>
                <p className="mb-4 text-gray-700">
                  The FMGE is a screening test conducted by the National Board of Examinations (NBE) for Indian citizens who have obtained a medical degree from foreign institutions. Passing this exam is mandatory to practice medicine in India.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="min-w-5 w-5 h-5 text-green-600 mt-0.5" />
                    <span>Conducted twice a year (June and December)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="min-w-5 w-5 h-5 text-green-600 mt-0.5" />
                    <span>180 multiple choice questions with 50% passing mark</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="min-w-5 w-5 h-5 text-green-600 mt-0.5" />
                    <span>Covers 19 pre-clinical and clinical subjects</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-blue-800">NEXT (National Exit Test)</h3>
                <p className="mb-4 text-gray-700">
                  The NEXT is an upcoming examination that will replace the FMGE and serve as a common final year undergraduate medical examination. It will also serve as a licentiate exam for practice, and as an entrance exam for postgraduate courses.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="min-w-5 w-5 h-5 text-green-600 mt-0.5" />
                    <span>Will be implemented as part of the National Medical Commission Act</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="min-w-5 w-5 h-5 text-green-600 mt-0.5" />
                    <span>Will standardize medical education and practice across India</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="min-w-5 w-5 h-5 text-green-600 mt-0.5" />
                    <span>Expected to include both theoretical and practical components</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Coaching Approach */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Coaching Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Comprehensive Coverage</h3>
                <p className="text-gray-700 mb-4">
                  Our program covers all 19 subjects required for the FMGE exam, with special emphasis on high-yield topics and frequently asked questions.
                </p>
                <ul className="space-y-2">
                  {[
                    "Subject-wise lectures by experienced faculty",
                    "Focus on important topics based on previous exam patterns",
                    "Regular updates on curriculum changes",
                    "Inclusion of clinical case discussions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="min-w-5 w-5 h-5 text-green-600 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Practice & Assessment</h3>
                <p className="text-gray-700 mb-4">
                  Regular practice tests and assessments are integral to our coaching program, helping students track their progress and identify areas for improvement.
                </p>
                <ul className="space-y-2">
                  {[
                    "Weekly subject-wise tests",
                    "Monthly comprehensive assessments",
                    "Full-length mock exams simulating actual test conditions",
                    "Detailed performance analytics and personalized feedback",
                    "Discussion of previous years' questions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="min-w-5 w-5 h-5 text-green-600 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-blue-600 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your FMGE/NEXT Preparation?</h2>
              <p className="text-blue-100 mb-8 text-lg">
                Our specialized coaching program will help you prepare thoroughly and confidently for these crucial exams.
              </p>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <RequestCallbackForm 
                  title="Register for Coaching"
                  subtitle="Get details about upcoming batches and enrollment process"
                  formType="fmge_enrollment"
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

export default FMGECoachingPage;
