import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  id: string;
  type: "image" | "video";
  thumbnail: string;
  fullSize?: string;
  videoUrl?: string;
  title: string;
  description?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  isHomePage?: boolean;
}

const Gallery = ({ items, isHomePage = false }: GalleryProps) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const displayedItems = isHomePage ? items.slice(0, 6) : items;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isHomePage ? "Glimpse of Our Journey" : "Gallery"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isHomePage
              ? "Explore moments from our students' MBBS journey abroad"
              : "Browse through our collection of photos and videos from various universities and student experiences"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-video overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
              {item.type === "image" ? (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                {item.description && (
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {isHomePage && (
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              <ImageIcon className="w-5 h-5" />
              View Full Gallery
            </Link>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300"
                onClick={() => setSelectedItem(null)}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {selectedItem.type === "image" ? (
                <img
                  src={selectedItem.fullSize || selectedItem.thumbnail}
                  alt={selectedItem.title}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <div className="aspect-video">
                  <iframe
                    src={selectedItem.videoUrl}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              <div className="mt-4 text-white text-center">
                <h3 className="text-xl font-semibold">{selectedItem.title}</h3>
                {selectedItem.description && (
                  <p className="mt-2">{selectedItem.description}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery; 