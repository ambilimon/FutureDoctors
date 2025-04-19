
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShimmerButton } from "@/components/ShimmerButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import WebinarSignupForm from "./WebinarSignupForm";
import { Calendar, Clock, Users } from "lucide-react";

const WebinarPromoSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Show signup dialog for everyone
    setIsDialogOpen(true);
  };

  const webinarDetails = {
    date: "April 15, 2025",
    time: "6:00 PM IST",
    duration: "90 minutes",
    speakers: ["Dr. Rajesh Kumar", "Dr. Priya Sharma"],
    topics: [
      "Admission Process for MBBS Abroad",
      "Cost Comparison with Indian Medical Colleges",
      "Licensing Exams and Career Opportunities",
      "Student Life and Cultural Adaptation"
    ]
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Live Webinar
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Everything You Need to Know About MBBS Abroad
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Join our expert counselors for a comprehensive session on pursuing MBBS internationally. 
              Learn about admission processes, costs, and career opportunities.
            </p>
            
            {/* Webinar details */}
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <Calendar className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date & Time</p>
                  <p className="font-medium">{webinarDetails.date} • {webinarDetails.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <Clock className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium">{webinarDetails.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <Users className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Speakers</p>
                  <p className="font-medium">{webinarDetails.speakers.join(", ")}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <ShimmerButton 
                onClick={handleRegisterClick}
                variant="primary"
                className="rounded-full"
              >
                Register for Webinar
              </ShimmerButton>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="MBBS Webinar Preview" 
                className="w-full object-cover h-64 md:h-96"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center shadow-lg cursor-pointer transform transition-transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <p className="text-white font-medium">Next session starting soon</p>
                </div>
              </div>
              
              {/* Topics badges */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 max-w-[60%]">
                {webinarDetails.topics.map((topic, index) => (
                  <span 
                    key={index} 
                    className="bg-white/80 backdrop-blur-sm text-xs font-medium text-blue-800 py-1 px-2 rounded shadow-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Register for the Webinar</DialogTitle>
            <DialogDescription>
              Complete this form to access our exclusive MBBS abroad webinar.
            </DialogDescription>
          </DialogHeader>
          <WebinarSignupForm onSuccess={() => {
            setIsDialogOpen(false);
            navigate("/webinar");
          }} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WebinarPromoSection;
