import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, BarChart, Scale, Lightbulb, ChevronsUpDown, Check, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Sample university data for comparison
interface University {
  id: number;
  name: string;
  country: string;
  tuitionFee: number;
  currency: string;
  duration: string;
  hostelFee: number;
  livingExpenses: number;
  recognitions: string[];
  passingRate: number;
  studentRatio: string;
  indianStudents: number;
  features: string[];
}

const universities: University[] = [
  {
    id: 1,
    name: "Altai State Medical University",
    country: "Russia",
    tuitionFee: 5000,
    currency: "USD",
    duration: "6 years",
    hostelFee: 1200,
    livingExpenses: 2400,
    recognitions: ["WHO", "NMC", "FAIMER"],
    passingRate: 78,
    studentRatio: "15:1",
    indianStudents: 900,
    features: ["English Medium", "Affordable Tuition", "Modern Infrastructure", "Clinical Exposure"]
  },
  {
    id: 2,
    name: "Tbilisi State Medical University",
    country: "Georgia",
    tuitionFee: 5800,
    currency: "USD",
    duration: "6 years",
    hostelFee: 1500,
    livingExpenses: 3000,
    recognitions: ["WHO", "NMC", "ECFMG"],
    passingRate: 82,
    studentRatio: "12:1",
    indianStudents: 750,
    features: ["European Education", "Modern Campus", "High FMGE Pass Rate", "Research Opportunities"]
  },
  {
    id: 3,
    name: "Davao Medical School Foundation",
    country: "Philippines",
    tuitionFee: 4200,
    currency: "USD",
    duration: "6 years",
    hostelFee: 1300,
    livingExpenses: 2800,
    recognitions: ["WHO", "NMC", "ECFMG"],
    passingRate: 75,
    studentRatio: "16:1",
    indianStudents: 600,
    features: ["US-Pattern Education", "Clinical Rotations", "English Medium", "Multicultural Environment"]
  },
  {
    id: 4,
    name: "Kazakh National Medical University",
    country: "Kazakhstan",
    tuitionFee: 5000,
    currency: "USD",
    duration: "6 years",
    hostelFee: 1100,
    livingExpenses: 2300,
    recognitions: ["WHO", "NMC", "FAIMER"],
    passingRate: 72,
    studentRatio: "18:1",
    indianStudents: 500,
    features: ["Affordable", "Modern Facilities", "Quality Education", "Clinical Training"]
  },
  {
    id: 5,
    name: "International School of Medicine",
    country: "Kyrgyzstan",
    tuitionFee: 4300,
    currency: "USD",
    duration: "6 years",
    hostelFee: 900,
    livingExpenses: 2000,
    recognitions: ["WHO", "NMC"],
    passingRate: 68,
    studentRatio: "19:1",
    indianStudents: 850,
    features: ["Budget-Friendly", "Indian Food", "Cultural Support", "Clinical Exposure"]
  },
  {
    id: 6,
    name: "Manipal International University",
    country: "Malaysia",
    tuitionFee: 6300,
    currency: "USD",
    duration: "5 years",
    hostelFee: 2000,
    livingExpenses: 3500,
    recognitions: ["WHO", "NMC", "FAIMER", "MMC"],
    passingRate: 85,
    studentRatio: "10:1",
    indianStudents: 400,
    features: ["High-Quality Education", "Modern Campus", "Research Facilities", "International Faculty"]
  },
  {
    id: 7,
    name: "Kathmandu Medical College",
    country: "Nepal",
    tuitionFee: 4500,
    currency: "USD",
    duration: "5.5 years",
    hostelFee: 1200,
    livingExpenses: 2200,
    recognitions: ["WHO", "NMC"],
    passingRate: 80,
    studentRatio: "14:1",
    indianStudents: 350,
    features: ["Cultural Similarity", "Proximity to India", "Clinical Training", "Quality Education"]
  }
];

const DecisionToolsPage = () => {
  const [selectedUniversities, setSelectedUniversities] = useState<number[]>([]);
  const [calculatorInputs, setCalculatorInputs] = useState({
    tuitionFee: 5000,
    livingExpenses: 2500,
    duration: 6,
    returnSalary: 60000
  });

  const handleUniversitySelect = (id: number) => {
    if (selectedUniversities.includes(id)) {
      setSelectedUniversities(selectedUniversities.filter(uniId => uniId !== id));
    } else {
      if (selectedUniversities.length < 3) {
        setSelectedUniversities([...selectedUniversities, id]);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCalculatorInputs({
      ...calculatorInputs,
      [name]: Number(value)
    });
  };

  const calculateTotalCost = () => {
    const { tuitionFee, livingExpenses, duration } = calculatorInputs;
    return (tuitionFee + livingExpenses) * duration;
  };

  const calculateBreakEven = () => {
    const totalCost = calculateTotalCost();
    const { returnSalary } = calculatorInputs;
    return Math.ceil(totalCost / returnSalary * 12);
  };

  return (
    <>
      <Helmet>
        <title>Decision Tools | MBBS Abroad Journey</title>
        <meta 
          name="description" 
          content="Interactive tools to compare universities, calculate costs, and evaluate return on investment for your MBBS abroad journey."
        />
      </Helmet>

      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">Tools</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Decision Tools
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Interactive tools to compare universities, calculate costs, and evaluate the return on investment for your medical education abroad.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="compare" className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
                <TabsTrigger value="compare">
                  <Scale className="h-4 w-4 mr-2" />
                  University Comparison
                </TabsTrigger>
                <TabsTrigger value="calculator">
                  <Calculator className="h-4 w-4 mr-2" />
                  ROI Calculator
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="compare">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-4">Compare Universities</h2>
                    <p className="text-gray-600 mb-6">
                      Select up to three universities to compare their features, tuition fees, living expenses, and more. This will help you make an informed decision.
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-medium mb-3">Select Universities to Compare (Max 3)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {universities.map(uni => (
                          <div 
                            key={uni.id} 
                            className={`border p-4 rounded-lg cursor-pointer transition-all ${
                              selectedUniversities.includes(uni.id) 
                                ? 'border-blue-500 bg-blue-50' 
                                : 'hover:border-gray-400'
                            }`}
                            onClick={() => handleUniversitySelect(uni.id)}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">{uni.name}</h4>
                                <p className="text-sm text-gray-600">{uni.country}</p>
                              </div>
                              {selectedUniversities.includes(uni.id) && (
                                <div className="bg-blue-500 text-white p-1 rounded-full">
                                  <Check className="h-4 w-4" />
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {selectedUniversities.length > 0 && (
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="min-w-[180px]">University</TableHead>
                              {selectedUniversities.map(id => (
                                <TableHead key={id}>
                                  <div className="flex flex-col">
                                    <span>{universities.find(u => u.id === id)?.name}</span>
                                    <span className="text-sm text-gray-500">
                                      {universities.find(u => u.id === id)?.country}
                                    </span>
                                  </div>
                                </TableHead>
                              ))}
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">Tuition Fee (Yearly)</TableCell>
                              {selectedUniversities.map(id => {
                                const uni = universities.find(u => u.id === id);
                                return (
                                  <TableCell key={id} className="text-center">
                                    {uni?.currency} {uni?.tuitionFee.toLocaleString()}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Duration</TableCell>
                              {selectedUniversities.map(id => (
                                <TableCell key={id} className="text-center">
                                  {universities.find(u => u.id === id)?.duration}
                                </TableCell>
                              ))}
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Hostel Fee (Yearly)</TableCell>
                              {selectedUniversities.map(id => {
                                const uni = universities.find(u => u.id === id);
                                return (
                                  <TableCell key={id} className="text-center">
                                    {uni?.currency} {uni?.hostelFee.toLocaleString()}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Living Expenses (Yearly)</TableCell>
                              {selectedUniversities.map(id => {
                                const uni = universities.find(u => u.id === id);
                                return (
                                  <TableCell key={id} className="text-center">
                                    {uni?.currency} {uni?.livingExpenses.toLocaleString()}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Total Cost (Full Course)</TableCell>
                              {selectedUniversities.map(id => {
                                const uni = universities.find(u => u.id === id);
                                const years = Number(uni?.duration.split(' ')[0]);
                                const totalCost = (uni?.tuitionFee || 0) * years + (uni?.hostelFee || 0) * years + (uni?.livingExpenses || 0) * years;
                                return (
                                  <TableCell key={id} className="text-center font-bold">
                                    {uni?.currency} {totalCost.toLocaleString()}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">FMGE Passing Rate</TableCell>
                              {selectedUniversities.map(id => (
                                <TableCell key={id} className="text-center">
                                  {universities.find(u => u.id === id)?.passingRate}%
                                </TableCell>
                              ))}
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Teacher to Student Ratio</TableCell>
                              {selectedUniversities.map(id => (
                                <TableCell key={id} className="text-center">
                                  {universities.find(u => u.id === id)?.studentRatio}
                                </TableCell>
                              ))}
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Indian Students</TableCell>
                              {selectedUniversities.map(id => (
                                <TableCell key={id} className="text-center">
                                  {universities.find(u => u.id === id)?.indianStudents.toLocaleString()}+
                                </TableCell>
                              ))}
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Recognitions</TableCell>
                              {selectedUniversities.map(id => (
                                <TableCell key={id} className="text-center">
                                  <div className="flex flex-wrap gap-1 justify-center">
                                    {universities.find(u => u.id === id)?.recognitions.map(recognition => (
                                      <Badge key={recognition} variant="outline" className="text-xs">
                                        {recognition}
                                      </Badge>
                                    ))}
                                  </div>
                                </TableCell>
                              ))}
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Key Features</TableCell>
                              {selectedUniversities.map(id => (
                                <TableCell key={id}>
                                  <ul className="list-disc pl-5 text-sm">
                                    {universities.find(u => u.id === id)?.features.map(feature => (
                                      <li key={feature}>{feature}</li>
                                    ))}
                                  </ul>
                                </TableCell>
                              ))}
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Action</TableCell>
                              {selectedUniversities.map(id => (
                                <TableCell key={id} className="text-center">
                                  <Link to={`/university-details/${id}`}>
                                    <Button size="sm">View Details</Button>
                                  </Link>
                                </TableCell>
                              ))}
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    )}

                    {selectedUniversities.length === 0 && (
                      <div className="text-center py-8 bg-gray-50 rounded-lg">
                        <Lightbulb className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                        <h3 className="text-xl font-medium mb-2">No Universities Selected</h3>
                        <p className="text-gray-600 max-w-md mx-auto">
                          Select universities from the list above to compare their features side by side.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="calculator">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-bold mb-4">ROI Calculator</h2>
                      <p className="text-gray-600 mb-6">
                        Calculate the return on investment for your medical education abroad by estimating costs and expected income.
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="tuitionFee">Yearly Tuition Fee (USD)</Label>
                          <Input 
                            id="tuitionFee" 
                            name="tuitionFee"
                            type="number" 
                            value={calculatorInputs.tuitionFee} 
                            onChange={handleInputChange} 
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="livingExpenses">Yearly Living Expenses (USD)</Label>
                          <Input 
                            id="livingExpenses" 
                            name="livingExpenses"
                            type="number" 
                            value={calculatorInputs.livingExpenses} 
                            onChange={handleInputChange} 
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="duration">Course Duration (Years)</Label>
                          <Input 
                            id="duration" 
                            name="duration"
                            type="number" 
                            value={calculatorInputs.duration} 
                            onChange={handleInputChange} 
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="returnSalary">Expected Annual Salary (USD)</Label>
                          <Input 
                            id="returnSalary" 
                            name="returnSalary"
                            type="number" 
                            value={calculatorInputs.returnSalary} 
                            onChange={handleInputChange} 
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-blue-50">
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-bold mb-4">Your Results</h2>
                      
                      <div className="space-y-6">
                        <div className="bg-white p-4 rounded-lg">
                          <h3 className="text-sm font-medium text-gray-500">Total Investment</h3>
                          <p className="text-3xl font-bold text-blue-700">
                            USD {calculateTotalCost().toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-500">
                            Total cost over {calculatorInputs.duration} years
                          </p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg">
                          <h3 className="text-sm font-medium text-gray-500">Monthly Salary After Graduation</h3>
                          <p className="text-3xl font-bold text-green-700">
                            USD {(calculatorInputs.returnSalary / 12).toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-500">
                            Based on your expected annual salary
                          </p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg">
                          <h3 className="text-sm font-medium text-gray-500">Break-even Point</h3>
                          <p className="text-3xl font-bold text-purple-700">
                            {calculateBreakEven()} months
                          </p>
                          <p className="text-sm text-gray-500">
                            Time to recover your investment after graduation
                          </p>
                        </div>
                        
                        <div className="bg-blue-600 text-white p-4 rounded-lg">
                          <h3 className="font-medium">Investment Advice</h3>
                          <p className="mt-2">
                            {calculateBreakEven() <= 36 
                              ? "This appears to be a good investment with a relatively quick return on investment."
                              : calculateBreakEven() <= 60
                                ? "This is a moderate investment with an average return timeline."
                                : "This is a long-term investment. Consider exploring more affordable options or higher-paying specializations."}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Explore our detailed university guides or speak with our education counselors for personalized advice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/resources/guides">
                <Button variant="default" size="lg">
                  View University Guides
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact an Expert
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

export default DecisionToolsPage;