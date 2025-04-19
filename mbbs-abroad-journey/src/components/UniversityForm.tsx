
import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShimmerButton } from "@/components/ShimmerButton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Upload, Trash2, Plus, X } from "lucide-react";

// Sample data store - in a real app, this would use a backend API
let universityStorage: any[] = [];
try {
  const stored = localStorage.getItem('universities');
  if (stored) {
    universityStorage = JSON.parse(stored);
  }
} catch (e) {
  console.error("Error loading universities from localStorage", e);
}

// If no universities in storage, use default ones
if (universityStorage.length === 0) {
  universityStorage = [];
}

// Validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  location: z.string().min(2, "Location required"),
  country: z.string().min(2, "Country required"),
  description: z.string().min(10, "Description too short"),
  tuitionRange: z.string().min(2, "Tuition range required"),
  image: z.string().url("Must be a valid URL"),
  established: z.string().optional(),
  students: z.string().optional(),
  website: z.string().url("Must be a valid URL").optional().or(z.string().length(0)),
  contactEmail: z.string().email("Invalid email").optional().or(z.string().length(0)),
  contactPhone: z.string().optional(),
  features: z.string().min(2, "Features required"),
  coursesOffered: z.string().optional(),
  admissionProcess: z.string().optional(),
  facilities: z.string().optional(),
  eligibility: z.string().optional(),
  intakes: z.string().optional(),
  hostelFacility: z.boolean().optional(),
  additionalExpenses: z.string().optional(),
  faq: z.string().optional(),
  gallery: z.array(z.string().url()).optional(),
});

type UniversityFormValues = z.infer<typeof formSchema>;

interface UniversityFormProps {
  universityId: number | null;
  onSuccess: () => void;
  onCancel: () => void;
}

const countryOptions = [
  { value: "russia", label: "Russia" },
  { value: "georgia", label: "Georgia" },
  { value: "philippines", label: "Philippines" },
  { value: "belarus", label: "Belarus" },
  { value: "moldova", label: "Moldova" },
  { value: "bulgaria", label: "Bulgaria" },
  { value: "bosnia", label: "Bosnia" },
  { value: "uzbekistan", label: "Uzbekistan" },
  { value: "kazakhstan", label: "Kazakhstan" },
  { value: "kyrgyzstan", label: "Kyrgyzstan" },
  { value: "malaysia", label: "Malaysia" },
  { value: "nepal", label: "Nepal" },
  { value: "india", label: "India" },
];

const UniversityForm = ({ universityId, onSuccess, onCancel }: UniversityFormProps) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("basic");
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [newImageUrl, setNewImageUrl] = useState("");
  
  // Setup form with Zod validation
  const form = useForm<UniversityFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      location: "",
      country: "russia",
      description: "",
      tuitionRange: "",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1374&auto=format&fit=crop",
      established: "",
      students: "",
      website: "",
      contactEmail: "",
      contactPhone: "",
      features: "",
      coursesOffered: "",
      admissionProcess: "",
      facilities: "",
      eligibility: "",
      intakes: "",
      hostelFacility: false,
      additionalExpenses: "",
      faq: "",
      gallery: [],
    },
  });

  // Load university data if editing
  useEffect(() => {
    if (universityId !== null) {
      const university = universityStorage.find((u: any) => u.id === universityId);
      if (university) {
        form.reset({
          name: university.name || "",
          location: university.location || "",
          country: university.country || "russia",
          description: university.description || "",
          tuitionRange: university.tuitionRange || "",
          image: university.image || "",
          established: university.established || "",
          students: university.students || "",
          website: university.website || "",
          contactEmail: university.contactEmail || "",
          contactPhone: university.contactPhone || "",
          features: university.features ? university.features.join(", ") : "",
          coursesOffered: university.coursesOffered || "",
          admissionProcess: university.admissionProcess || "",
          facilities: university.facilities || "",
          eligibility: university.eligibility || "",
          intakes: university.intakes || "",
          hostelFacility: university.hostelFacility || false,
          additionalExpenses: university.additionalExpenses || "",
          faq: university.faq || "",
          gallery: university.gallery || [],
        });
        
        setGalleryImages(university.gallery || []);
      }
    }
  }, [universityId, form]);

  const addGalleryImage = () => {
    if (newImageUrl && newImageUrl.startsWith('http')) {
      setGalleryImages([...galleryImages, newImageUrl]);
      setNewImageUrl("");
    } else {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid image URL",
        variant: "destructive",
      });
    }
  };

  const removeGalleryImage = (index: number) => {
    const updatedImages = [...galleryImages];
    updatedImages.splice(index, 1);
    setGalleryImages(updatedImages);
  };

  const onSubmit = (values: UniversityFormValues) => {
    try {
      const featuresArray = values.features.split(",").map(feature => feature.trim());
      const formData = {
        ...values,
        features: featuresArray,
        gallery: galleryImages,
      };
      
      if (universityId === null) {
        // Add new university
        const newId = universityStorage.length > 0 
          ? Math.max(...universityStorage.map((u: any) => u.id)) + 1 
          : 1;
        
        const newUniversity = {
          id: newId,
          ...formData,
        };
        
        universityStorage.push(newUniversity);
      } else {
        // Update existing university
        const index = universityStorage.findIndex((u: any) => u.id === universityId);
        if (index !== -1) {
          universityStorage[index] = {
            ...universityStorage[index],
            ...formData,
          };
        }
      }
      
      // Save to localStorage
      localStorage.setItem('universities', JSON.stringify(universityStorage));
      
      onSuccess();
    } catch (error) {
      console.error("Error saving university", error);
      toast({
        title: "Error",
        description: "There was a problem saving the university data.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Tabs defaultValue="basic" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full mb-6">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="admission">Admission</TabsTrigger>
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
            <TabsTrigger value="gallery">Gallery & FAQ</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>University Name*</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Tbilisi State Medical University" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location*</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Tbilisi, Georgia" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country*</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countryOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description*</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Provide a brief description of the university" 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="tuitionRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tuition Range*</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. ₹25-35 Lakhs total" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Main Image URL*</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/image.jpg" {...field} />
                    </FormControl>
                    <FormDescription>
                      Use a direct link to an image
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </TabsContent>

          <TabsContent value="details" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="established"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Established Year</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 1918" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="students"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Students</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 5000+" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://www.university.edu" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Email</FormLabel>
                    <FormControl>
                      <Input placeholder="info@university.edu" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="contactPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 234 567 8900" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="features"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Features*</FormLabel>
                  <FormControl>
                    <Input placeholder="English-Medium, WHO & NMC Approved, Established in 1957" {...field} />
                  </FormControl>
                  <FormDescription>
                    Separate features with commas
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <FormField
              control={form.control}
              name="coursesOffered"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Courses Offered</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="List the main courses offered by the university, include details like duration and degree awarded" 
                      className="min-h-[150px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Use Markdown formatting if needed
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>

          <TabsContent value="admission" className="space-y-6">
            <FormField
              control={form.control}
              name="admissionProcess"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Admission Process</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe the step-by-step admission process" 
                      className="min-h-[150px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="eligibility"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Eligibility Requirements</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="List the eligibility requirements for admission" 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="intakes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Available Intakes</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. February and September" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hostelFacility"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel>Hostel Facility Available</FormLabel>
                      <FormDescription>
                        Does the university provide hostel/accommodation?
                      </FormDescription>
                    </div>
                    <FormControl>
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={field.onChange}
                        className="h-4 w-4"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="additionalExpenses"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Expenses</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="List any additional expenses students should be aware of" 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>

          <TabsContent value="facilities" className="space-y-6">
            <FormField
              control={form.control}
              name="facilities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campus Facilities</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe the facilities available on campus (libraries, labs, sports, etc.)" 
                      className="min-h-[200px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>

          <TabsContent value="gallery" className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Gallery Images</h3>
              <p className="text-sm text-gray-500 mb-4">Add images to showcase the university campus and facilities</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {galleryImages.map((image, index) => (
                  <div key={index} className="relative rounded-md overflow-hidden aspect-video bg-gray-100">
                    <img 
                      src={image} 
                      alt={`Gallery ${index+1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://placehold.co/400x300?text=Image+Error";
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => removeGalleryImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2 items-center">
                <Input
                  placeholder="https://example.com/gallery-image.jpg"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  className="flex-grow"
                />
                <ShimmerButton
                  type="button"
                  onClick={addGalleryImage}
                  className="flex items-center gap-1"
                  shimmerColor="rgba(59, 130, 246, 0.5)"
                  background="linear-gradient(45deg, #3b82f6, #1d4ed8)"
                >
                  <Plus size={16} /> Add
                </ShimmerButton>
              </div>
            </div>

            <Separator className="my-6" />

            <FormField
              control={form.control}
              name="faq"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>FAQ</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Add frequently asked questions and answers in format: Q: Question? A: Answer." 
                      className="min-h-[200px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Format as "Q: Question? A: Answer." for each FAQ item
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>
        </Tabs>

        <div className="flex justify-between mt-8 pt-4 border-t">
          <div>
            {activeTab !== "basic" && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => {
                  const tabs = ["basic", "details", "courses", "admission", "facilities", "gallery"];
                  const currentIndex = tabs.indexOf(activeTab);
                  if (currentIndex > 0) {
                    setActiveTab(tabs[currentIndex - 1]);
                  }
                }}
              >
                Previous
              </Button>
            )}
          </div>
          
          <div className="flex gap-4">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            
            {activeTab !== "gallery" ? (
              <ShimmerButton
                type="button"
                onClick={() => {
                  const tabs = ["basic", "details", "courses", "admission", "facilities", "gallery"];
                  const currentIndex = tabs.indexOf(activeTab);
                  if (currentIndex < tabs.length - 1) {
                    setActiveTab(tabs[currentIndex + 1]);
                  }
                }}
                shimmerColor="rgba(59, 130, 246, 0.5)"
                background="linear-gradient(45deg, #3b82f6, #1d4ed8)"
              >
                Next
              </ShimmerButton>
            ) : (
              <ShimmerButton 
                type="submit"
                shimmerColor="rgba(59, 130, 246, 0.5)"
                background="linear-gradient(45deg, #3b82f6, #1d4ed8)"
              >
                {universityId !== null ? 'Update University' : 'Add University'}
              </ShimmerButton>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
};

export default UniversityForm;
