import Gallery, { GalleryItem } from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample gallery items - replace with your actual content
const galleryItems: GalleryItem[] = [
  {
    id: "1",
    type: "image" as const,
    thumbnail: "/STUDENTS GROUP PHOTOS/1L7A4476.JPG",
    fullSize: "/STUDENTS GROUP PHOTOS/1L7A4476.JPG",
    title: "Student Celebration",
    description: "Our medical students celebrating their achievements",
  },
  {
    id: "2",
    type: "image" as const,
    thumbnail: "/STUDENTS GROUP PHOTOS/1L7A4394.JPG",
    fullSize: "/STUDENTS GROUP PHOTOS/1L7A4394.JPG",
    title: "Group Photo Session",
    description: "Students gathered for a memorable photo session",
  },
  {
    id: "3",
    type: "image" as const,
    thumbnail: "/STUDENTS GROUP PHOTOS/DSC06775.JPG",
    fullSize: "/STUDENTS GROUP PHOTOS/DSC06775.JPG",
    title: "Campus Life",
    description: "Students enjoying their time on campus",
  },
  {
    id: "4",
    type: "image" as const,
    thumbnail: "/STUDENTS GROUP PHOTOS/DSC06779.JPG",
    fullSize: "/STUDENTS GROUP PHOTOS/DSC06779.JPG",
    title: "Student Activities",
    description: "Medical students participating in various activities",
  },
  {
    id: "5",
    type: "image" as const,
    thumbnail: "/STUDENTS GROUP PHOTOS/DSC_2367.JPG",
    fullSize: "/STUDENTS GROUP PHOTOS/DSC_2367.JPG",
    title: "Group Study",
    description: "Students collaborating and learning together",
  },
  {
    id: "6",
    type: "image" as const,
    thumbnail: "/STUDENTS GROUP PHOTOS/IMG_20221105_200151.jpg",
    fullSize: "/STUDENTS GROUP PHOTOS/IMG_20221105_200151.jpg",
    title: "Special Event",
    description: "Students at a special university event",
  },
  {
    id: "7",
    type: "image" as const,
    thumbnail: "/STUDENTS GROUP PHOTOS/P1046098.JPG",
    fullSize: "/STUDENTS GROUP PHOTOS/P1046098.JPG",
    title: "Cultural Exchange",
    description: "Students sharing cultural experiences",
  },
  {
    id: "8",
    type: "image" as const,
    thumbnail: "/STUDENTS GROUP PHOTOS/P1046453.JPG",
    fullSize: "/STUDENTS GROUP PHOTOS/P1046453.JPG",
    title: "Academic Excellence",
    description: "Celebrating academic achievements",
  },
  {
    id: "9",
    type: "image" as const,
    thumbnail: "/STUDENTS GROUP PHOTOS/_SCP5244.JPG",
    fullSize: "/STUDENTS GROUP PHOTOS/_SCP5244.JPG",
    title: "University Life",
    description: "A glimpse into university life abroad",
  },
  {
    id: "10",
    type: "image" as const,
    thumbnail: "/STUDENTS GROUP PHOTOS/TAJ_2414.JPG",
    fullSize: "/STUDENTS GROUP PHOTOS/TAJ_2414.JPG",
    title: "Student Community",
    description: "Our vibrant student community",
  },
  {
    id: "11",
    type: "image" as const,
    thumbnail: "/STUDENTS GROUP PHOTOS/TAJ_2535.JPG",
    fullSize: "/STUDENTS GROUP PHOTOS/TAJ_2535.JPG",
    title: "Campus Events",
    description: "Students participating in campus events",
  }
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