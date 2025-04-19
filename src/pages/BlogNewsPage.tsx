
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, BookIcon, NewspaperIcon } from "lucide-react";
import { format } from "date-fns";

const BlogNewsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample blog posts data
  const allPosts = {
    blogs: [
      {
        id: 1,
        title: "Top 5 Medical Universities in Russia for Indian Students",
        category: "Universities",
        date: "2025-03-15",
        excerpt: "Discover the best medical universities in Russia that offer quality education at affordable tuition fees for Indian students.",
        image: "/placeholder.svg"
      },
      {
        id: 2,
        title: "FMGE Preparation: A Complete Guide for Foreign Medical Graduates",
        category: "Exams",
        date: "2025-02-28",
        excerpt: "Learn effective strategies and tips to prepare for the Foreign Medical Graduate Examination and increase your chances of passing it on the first attempt.",
        image: "/placeholder.svg"
      },
      {
        id: 3,
        title: "Life of an MBBS Student Abroad: What to Expect",
        category: "Student Life",
        date: "2025-01-20",
        excerpt: "An inside look at the day-to-day life of medical students studying abroad, including academics, cultural experiences, and more.",
        image: "/placeholder.svg"
      }
    ],
    news: [
      {
        id: 1,
        title: "New NMC Guidelines for Foreign Medical Graduates Announced",
        category: "Regulations",
        date: "2025-04-02",
        excerpt: "The National Medical Commission has released new guidelines for Indian students planning to pursue MBBS abroad. Read about the key changes.",
        image: "/placeholder.svg"
      },
      {
        id: 2,
        title: "Webinar: MBBS Admission Process for 2025-26 Academic Year",
        category: "Events",
        date: "2025-03-25",
        excerpt: "Join our upcoming webinar to learn about the admission process for the 2025-26 academic year in top medical universities abroad.",
        image: "/placeholder.svg"
      },
      {
        id: 3,
        title: "Scholarships Announced for Indian Students at Georgian Universities",
        category: "Scholarships",
        date: "2025-03-10",
        excerpt: "Several medical universities in Georgia have announced special scholarships for Indian students for the upcoming academic session.",
        image: "/placeholder.svg"
      }
    ]
  };

  const filterPosts = (posts: any[], term: string) => {
    if (!term) return posts;
    return posts.filter(post => 
      post.title.toLowerCase().includes(term.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(term.toLowerCase()) ||
      post.category.toLowerCase().includes(term.toLowerCase())
    );
  };

  const filteredBlogs = filterPosts(allPosts.blogs, searchTerm);
  const filteredNews = filterPosts(allPosts.news, searchTerm);

  return (
    <>
      <Helmet>
        <title>Blog & News | Future Doctor - MBBS Abroad Counseling</title>
        <meta name="description" content="Stay updated with the latest news, articles, and insights about MBBS abroad, medical education, and healthcare industry." />
      </Helmet>

      <Navbar />

      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">Blog & News</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest information, trends, and insights about medical education abroad.
            </p>
          </div>

          <div className="mb-8">
            <Input
              type="search"
              placeholder="Search articles, news, and topics..."
              className="max-w-lg mx-auto"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Tabs defaultValue="all" className="mb-16">
            <TabsList className="mx-auto flex justify-center">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="blog">
                <BookIcon className="w-4 h-4 mr-2" />
                Blog
              </TabsTrigger>
              <TabsTrigger value="news">
                <NewspaperIcon className="w-4 h-4 mr-2" />
                News
              </TabsTrigger>
            </TabsList>

            {/* All Posts Tab */}
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...filteredBlogs, ...filteredNews].map((post) => (
                  <PostCard key={`${post.id}-${post.category}`} post={post} />
                ))}
              </div>
              {filteredBlogs.length === 0 && filteredNews.length === 0 && (
                <p className="text-center text-gray-500 mt-8">No posts found matching your search criteria.</p>
              )}
            </TabsContent>

            {/* Blog Posts Tab */}
            <TabsContent value="blog">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
              {filteredBlogs.length === 0 && (
                <p className="text-center text-gray-500 mt-8">No blog posts found matching your search criteria.</p>
              )}
            </TabsContent>

            {/* News Tab */}
            <TabsContent value="news">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
              {filteredNews.length === 0 && (
                <p className="text-center text-gray-500 mt-8">No news articles found matching your search criteria.</p>
              )}
            </TabsContent>
          </Tabs>

          <div className="text-center">
            <p className="text-gray-600 mb-2">Want to stay updated?</p>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Subscribe to our newsletter</h3>
            <div className="flex max-w-md mx-auto">
              <Input placeholder="Your email address" className="rounded-r-none" />
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-r-md transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

// Helper component for rendering post cards
const PostCard = ({ post }: { post: any }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
          <span className="mx-2">•</span>
          <span>{post.category}</span>
        </div>
        <CardTitle className="text-xl">{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <a href="#" className="text-blue-700 hover:text-blue-900 font-medium inline-flex items-center">
          Read more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </CardContent>
    </Card>
  );
};

export default BlogNewsPage;
