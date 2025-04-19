
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RequestCallbackForm from "@/components/RequestCallbackForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Quote } from "lucide-react";

const SuccessStoriesPage = () => {
  // Sample success stories data
  const successStories = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      university: "Kazan Federal University, Russia",
      year: "2020",
      quote: "Thanks to Future Doctor, I'm now practicing medicine in a leading hospital in India. Their guidance throughout my MBBS journey was invaluable.",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Dr. Rahul Verma",
      university: "Tbilisi State Medical University, Georgia",
      year: "2019",
      quote: "From application to graduation, Future Doctor made my dream of becoming a doctor come true. They guided me through every step of the process.",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Dr. Ananya Patel",
      university: "Astana Medical University, Kazakhstan",
      year: "2021",
      quote: "Studying abroad was a challenging decision, but Future Doctor's counseling and support made it the best decision of my life.",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Dr. Karthik Reddy",
      university: "Kyrgyz-Russian Slavic University, Kyrgyzstan",
      year: "2018",
      quote: "I cleared FMGE in my first attempt thanks to Future Doctor's FMGE coaching. Their personalized approach to exam preparation is exceptional.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Success Stories | Future Doctor - MBBS Abroad Counseling</title>
        <meta name="description" content="Read inspiring success stories from our students who successfully completed their MBBS abroad and are now practicing doctors." />
      </Helmet>

      <Navbar />

      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">Our Success Stories</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet our alumni who successfully completed their medical education abroad and are now leading successful careers as doctors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {successStories.map((story) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-blue-50 border-b">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <User className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <CardTitle>{story.name}</CardTitle>
                      <CardDescription>{story.university}, Graduated: {story.year}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex">
                    <Quote className="h-8 w-8 text-blue-200 mr-2 flex-shrink-0" />
                    <p className="text-gray-700 italic">{story.quote}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Success Story Begins Here</h2>
              <p className="text-gray-700 mb-6">
                For over a decade, we have been guiding aspiring medical students through their journey of studying MBBS abroad. Our comprehensive support system ensures that you receive guidance at every step - from university selection and admission to travel arrangements and post-graduation planning.
              </p>
              <p className="text-gray-700 mb-6">
                Our proven track record includes:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>2000+ successful admissions in top medical universities</li>
                <li>98% visa success rate</li>
                <li>85% of our students passing FMGE/NEXT on their first attempt</li>
                <li>Placement assistance in leading hospitals across India</li>
              </ul>
            </div>
            <div className="lg:w-1/3">
              <RequestCallbackForm 
                title="Start Your Medical Journey" 
                subtitle="Get expert counseling from our team" 
                formType="success-stories"
                className="bg-white shadow-xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SuccessStoriesPage;
