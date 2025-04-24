import Gallery, { GalleryItem } from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample gallery items - replace with your actual content
const galleryItems: GalleryItem[] = [
  {
    id: "1",
    type: "image" as const,
    thumbnail: "/images/gallery/university-campus-1.jpg",
    fullSize: "/images/gallery/university-campus-1-full.jpg",
    title: "University Campus Tour",
    description: "Explore our state-of-the-art medical facilities",
  },
  {
    id: "2",
    type: "video" as const,
    thumbnail: "/images/gallery/student-life-thumbnail.jpg",
    videoUrl: "https://www.youtube.com/embed/your-video-id",
    title: "Student Life Experience",
    description: "A day in the life of our medical students",
  },
  {
    id: "3",
    type: "image" as const,
    thumbnail: "/images/gallery/lab-facilities.jpg",
    fullSize: "/images/gallery/lab-facilities-full.jpg",
    title: "Modern Laboratory Facilities",
    description: "Advanced equipment for practical learning",
  },
  {
    id: "4",
    type: "video" as const,
    thumbnail: "/images/gallery/graduation-thumbnail.jpg",
    videoUrl: "https://www.youtube.com/embed/your-video-id",
    title: "Graduation Ceremony",
    description: "Celebrating our successful graduates",
  },
  {
    id: "5",
    type: "image" as const,
    thumbnail: "/images/gallery/clinical-training.jpg",
    fullSize: "/images/gallery/clinical-training-full.jpg",
    title: "Clinical Training",
    description: "Hands-on experience in hospital settings",
  },
  {
    id: "6",
    type: "image" as const,
    thumbnail: "/images/gallery/student-accommodation.jpg",
    fullSize: "/images/gallery/student-accommodation-full.jpg",
    title: "Student Accommodation",
    description: "Comfortable living spaces for students",
  },
  // Add more items as needed
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Gallery items={galleryItems} />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage; 