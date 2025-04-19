import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Book, Download, CheckCircle, Flag, GraduationCap, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Define country guide types
interface CountryGuide {
  id: number;
  country: string;
  flag: string;
  description: string;
  topics: string[];
  popular: boolean;
}

// Sample country guides data
const countryGuides: CountryGuide[] = [
  {
    id: 1,
    country: "Russia",
    flag: "🇷🇺",
    description: "Comprehensive guide to MBBS in Russia, covering top universities, admission process, fees structure, and student life.",
    topics: ["Education System", "Top Universities", "Admission Process", "Visa Requirements", "Living Expenses"],
    popular: true
  },
  {
    id: 2,
    country: "Georgia",
    flag: "🇬🇪",
    description: "Complete information about pursuing medical education in Georgia with details on NMC approved universities and eligibility criteria.",
    topics: ["University Rankings", "Fee Structure", "Clinical Exposure", "Student Testimonials", "Post-Graduation Scope"],
    popular: true
  },
  {
    id: 3,
    country: "Philippines",
    flag: "🇵🇭", 
    description: "Detailed guide on MBBS in the Philippines covering American-pattern education system, clinical rotations, and language advantages.",
    topics: ["US-Pattern Education", "Clinical Training", "USMLE Preparation", "Accommodation", "Cultural Experience"],
    popular: true
  },
  {
    id: 4,
    country: "Kazakhstan",
    flag: "🇰🇿",
    description: "Explore medical education in Kazakhstan with information on affordable universities, modern infrastructure, and multicultural environment.",
    topics: ["Education Quality", "Infrastructure", "Recognition", "Application Timeline", "Scholarship Options"],
    popular: false
  },
  {
    id: 5,
    country: "Kyrgyzstan",
    flag: "🇰🇬",
    description: "Comprehensive guide on pursuing MBBS in Kyrgyzstan, focusing on low-cost education with quality standards and international recognition.",
    topics: ["Affordable Education", "Hostel Facilities", "Indian Food", "Weather Conditions", "Travel Information"],
    popular: false
  },
  {
    id: 6,
    country: "Malaysia",
    flag: "🇲🇾",
    description: "In-depth information about medical programs in Malaysia with emphasis on high-quality education, modern facilities, and multicultural exposure.",
    topics: ["British Education System", "Research Opportunities", "Clinical Rotations", "Campus Life", "Career Prospects"],
    popular: true
  },
  {
    id: 7,
    country: "Nepal",
    flag: "🇳🇵",
    description: "Comprehensive guide for Indian students planning to study MBBS in Nepal, covering proximity advantages and cultural similarities.",
    topics: ["Proximity Benefits", "Cultural Similarity", "Education Standards", "Living Costs", "Return Preparation"],
    popular: false
  },
  {
    id: 8,
    country: "Uzbekistan",
    flag: "🇺🇿",
    description: "Detailed information on medical universities in Uzbekistan with focus on affordability, quality education, and international faculty.",
    topics: ["Educational Quality", "Modern Infrastructure", "Faculty Profile", "Admission Timeline", "Alumni Network"],
    popular: false
  },
  {
    id: 9,
    country: "Belarus",
    flag: "🇧🇾",
    description: "Complete guide on MBBS in Belarus highlighting European standards of education, research opportunities, and post-graduation pathways.",
    topics: ["European Education", "Research Focus", "Teaching Methodology", "Internship Opportunities", "Student Support"],
    popular: false
  }
];

// Resource guide interface
interface ResourceGuide {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  downloadLink: string;
}

// Sample resource guides
const resourceGuides: ResourceGuide[] = [
  {
    id: 1,
    title: "MBBS Abroad Admission Checklist",
    description: "Complete checklist of documents and requirements for securing admission in foreign medical universities.",
    icon: <CheckCircle className="h-6 w-6 text-green-600" />,
    downloadLink: "#"
  },
  {
    id: 2,
    title: "NEET Score Requirements Guide",
    description: "Country-wise and university-wise NEET score requirements for Indian students pursuing MBBS abroad.",
    icon: <Search className="h-6 w-6 text-blue-600" />,
    downloadLink: "#"
  },
  {
    id: 3,
    title: "Foreign Medical Graduate Examination (FMGE) Preparation",
    description: "Comprehensive guide on preparing for FMGE/NEXT exam after completing MBBS abroad.",
    icon: <GraduationCap className="h-6 w-6 text-purple-600" />,
    downloadLink: "#"
  }
];

const UniversityGuidesPage = () => {
  return (
    <>
      <Helmet>
        <title>University Guides | MBBS Abroad Journey</title>
        <meta 
          name="description" 
          content="Comprehensive guides for each country's education system, admission requirements, and university rankings for MBBS abroad."
        />
      </Helmet>

      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">Resources</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                University Guides
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                In-depth guides for each country's education system, admission requirements, and university rankings to help you make an informed decision.
              </p>
              <div className="flex justify-center mb-8">
                <div className="relative w-full max-w-md">
                  <Input 
                    type="text" 
                    placeholder="Search guides by country or topic..." 
                    className="pr-10"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="countries" className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
                <TabsTrigger value="countries">Country Guides</TabsTrigger>
                <TabsTrigger value="resources">General Resources</TabsTrigger>
              </TabsList>
              
              <TabsContent value="countries">
                <div className="flex flex-col gap-4 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">Popular Country Guides</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {countryGuides
                      .filter(guide => guide.popular)
                      .map(guide => (
                        <Card key={guide.id} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <span className="text-4xl">{guide.flag}</span>
                              <div>
                                <CardTitle>{guide.country}</CardTitle>
                                <CardDescription>MBBS Study Guide</CardDescription>
                              </div>
                            </div>
                            <p className="text-gray-600 mb-4 line-clamp-3">{guide.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {guide.topics.slice(0, 3).map((topic, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {topic}
                                </Badge>
                              ))}
                              {guide.topics.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{guide.topics.length - 3} more
                                </Badge>
                              )}
                            </div>
                            <Link to={`/resources/guides/${guide.country.toLowerCase()}`}>
                              <Button className="w-full">View Guide</Button>
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold text-gray-900">All Country Guides</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {countryGuides
                      .filter(guide => !guide.popular)
                      .map(guide => (
                        <Card key={guide.id} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <span className="text-4xl">{guide.flag}</span>
                              <div>
                                <CardTitle>{guide.country}</CardTitle>
                                <CardDescription>MBBS Study Guide</CardDescription>
                              </div>
                            </div>
                            <p className="text-gray-600 mb-4 line-clamp-3">{guide.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {guide.topics.slice(0, 3).map((topic, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {topic}
                                </Badge>
                              ))}
                              {guide.topics.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{guide.topics.length - 3} more
                                </Badge>
                              )}
                            </div>
                            <Link to={`/resources/guides/${guide.country.toLowerCase()}`}>
                              <Button className="w-full">View Guide</Button>
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="resources">
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold text-gray-900">Helpful Resources</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resourceGuides.map(resource => (
                      <Card key={resource.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="bg-gray-100 p-3 rounded-full">
                              {resource.icon}
                            </div>
                            <CardTitle>{resource.title}</CardTitle>
                          </div>
                          <p className="text-gray-600 mb-6">{resource.description}</p>
                          <a href={resource.downloadLink}>
                            <Button variant="outline" className="w-full">
                              <Download className="h-4 w-4 mr-2" />
                              Download PDF
                            </Button>
                          </a>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Personalized Guidance?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our education counselors can help you understand which country and university is the best fit for your goals and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  Contact an Expert
                </Button>
              </Link>
              <Link to="/resources/tools">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" size="lg">
                  Use Decision Tools
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default UniversityGuidesPage; 