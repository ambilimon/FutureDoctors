import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Volume2, VolumeX, Play, Pause, Maximize, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useIsMobile } from "@/hooks/use-mobile";

const WebinarPage = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasJoined, setHasJoined] = useState(false);
  const [attendees, setAttendees] = useState(157); // Fake number to show "other attendees"
  const [showLiveIndicator, setShowLiveIndicator] = useState(true);
  const [question, setQuestion] = useState("");
  const [isAskingQuestion, setIsAskingQuestion] = useState(false);
  const [questions, setQuestions] = useState<Array<{text: string; answered: boolean}>>([]);
  const { toast } = useToast();
  const videoRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // YouTube video ID
  const videoId = "dQw4w9WgXcQ"; // Replace with your actual webinar video ID
  
  useEffect(() => {
    // Check if user has already joined from localStorage
    const hasWatched = localStorage.getItem("webinarWatched") === "true";
    if (hasWatched) {
      setHasJoined(true);
      setIsPlaying(true);
    }
    
    // Simulate generating random number of attendees every few minutes
    const interval = setInterval(() => {
      setAttendees(Math.floor(Math.random() * 50) + 130);
    }, 180000);
    
    // Hide live indicator after 45 minutes to simulate end of "live" session
    const liveTimeout = setTimeout(() => {
      setShowLiveIndicator(false);
    }, 45 * 60 * 1000);

    // Update video progress bar every second
    const progressInterval = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          return newTime > duration ? duration : newTime;
        });
      }
    }, 1000);
    
    // Set fake duration
    setDuration(3600); // 1 hour video
    
    return () => {
      clearInterval(interval);
      clearTimeout(liveTimeout);
      clearInterval(progressInterval);
    };
  }, [isPlaying, duration]);
  
  // Simulate video player controls
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    
    // This would interact with the YouTube Player API in a real implementation
    try {
      if (videoRef.current && videoRef.current.contentWindow) {
        const message = isPlaying ? '{"event":"command","func":"pauseVideo","args":""}' : '{"event":"command","func":"playVideo","args":""}';
        videoRef.current.contentWindow.postMessage(message, '*');
      }
    } catch (e) {
      console.error("Error controlling YouTube player", e);
    }
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
    
    // This would interact with the YouTube Player API in a real implementation
    try {
      if (videoRef.current && videoRef.current.contentWindow) {
        const message = isMuted ? '{"event":"command","func":"unMute","args":""}' : '{"event":"command","func":"mute","args":""}';
        videoRef.current.contentWindow.postMessage(message, '*');
      }
    } catch (e) {
      console.error("Error controlling YouTube player", e);
    }
  };
  
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };
  
  const joinWebinar = () => {
    setHasJoined(true);
    setIsPlaying(true);
    
    toast({
      title: "Joined Successfully!",
      description: "You are now watching the live webinar.",
    });
    
    // Get participant data from localStorage
    try {
      const participants = JSON.parse(localStorage.getItem("webinarParticipants") || "[]");
      // Mark as watched in localStorage
      localStorage.setItem("webinarWatched", "true");
    } catch (e) {
      console.error("Error updating participant data", e);
    }
  };

  const submitQuestion = () => {
    if (!question.trim()) return;
    
    // Add question to list
    setQuestions(prev => [...prev, {text: question, answered: false}]);
    
    // Show confirmation toast
    toast({
      title: "Question Submitted!",
      description: "Our experts will answer your question shortly.",
    });
    
    // Reset the input
    setQuestion("");
    setIsAskingQuestion(false);
  };
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-[#0E1729]"> {/* Dark background matching design */}
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 max-w-6xl"> {/* Adjusted container and max-width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Webinar Details */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-xl p-6 md:p-8 space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Everything You Need to Know About MBBS Abroad
              </h1>
              <p className="text-gray-300">
                Join our experts as they discuss everything you need to know about pursuing MBBS abroad.
              </p>
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white rounded-full"
              >
                Join Webinar Now
              </Button>
            </div>

            <div className="bg-[#1A2232] rounded-xl p-6 md:p-8 space-y-4 text-gray-300">
              <h2 className="text-xl font-semibold text-white">About This Webinar</h2>
              <p>
                In this comprehensive webinar, our expert counselors guide you through everything you need to know about pursuing MBBS abroad. We cover admission requirements, costs, scholarship opportunities, and the advantages of studying medicine internationally.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Admission process for top medical universities abroad</li>
                <li>Cost comparison with Indian private medical colleges</li>
                <li>Scholarships and financial assistance options</li>
                <li>NMC and WHO recognition of international degrees</li>
                <li>Life as an international medical student</li>
                <li>Career prospects after graduating from foreign universities</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Webinar Presenters and Q&A */}
          <div className="bg-[#1A2232] rounded-xl p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Webinar Presenters</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-base md:text-lg">
                    DR
                  </div>
                  <div>
                    <h4 className="font-medium text-sm md:text-base">Dr. Rahul Sharma</h4>
                    <p className="text-xs md:text-sm text-gray-400">Education Counselor, MBBS Ukraine</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-base md:text-lg">
                    AP
                  </div>
                  <div>
                    <h4 className="font-medium text-sm md:text-base">Dr. Anya Petrov</h4>
                    <p className="text-xs md:text-sm text-gray-400">Head of Admissions, TSMU</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Ask Questions</h3>
              <Textarea 
                placeholder="Type your question here..." 
                className="w-full bg-[#2A3242] border-none text-white mb-4"
              />
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Submit Question
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WebinarPage;
