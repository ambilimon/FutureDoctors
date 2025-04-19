
import { University } from "@/pages/UniversitiesPage";

// List of all possible facilities for filtering
export const facilityOptions = [
  "Library",
  "Laboratory",
  "Cafeteria",
  "Accommodation",
  "WiFi",
  "Sports Complex",
  "Computer Lab",
  "Medical Center",
  "Student Lounge",
  "Gym",
  "Swimming Pool",
  "Research Center",
  "Auditorium",
  "Study Rooms",
  "International Student Office"
];

// Complete list of medical universities
export const universities: University[] = [
  // Russia Universities
  {
    id: 1,
    name: "Altai State Medical University",
    country: "Russia",
    city: "Barnaul",
    tuitionFee: 20000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/RUSSIA/ALTAI.jpg",
    facilities: ["Library", "Laboratory", "Cafeteria", "Accommodation", "Medical Center"],
    rating: 4.3,
    category: "Medical",
    description: "One of Russia's premier medical institutions known for its excellent medical education and research facilities",
    longDescription: "Altai State Medical University is renowned for its comprehensive medical education programs and state-of-the-art facilities. The university offers a perfect blend of theoretical knowledge and practical training.",
    establishedYear: "1954",
    studentCount: "12,000+",
    facultyCount: "800+",
    hospitalAffiliations: ["Altai Regional Clinical Hospital", "City Clinical Hospital No. 1", "Children's Regional Clinical Hospital"],
    recognition: ["WHO", "Medical Council of India", "Ministry of Education and Science of Russia"],
    courses: [
      { name: "General Medicine (MBBS)", duration: "6 years", fees: "$4,000/year" },
      { name: "Dentistry", duration: "5 years", fees: "$4,200/year" },
      { name: "Pharmacy", duration: "5 years", fees: "$3,800/year" }
    ],
    admissionProcess: [
      "Submit online application",
      "Provide academic transcripts",
      "English proficiency test scores",
      "Medical fitness certificate",
      "Visa documentation"
    ],
    eligibility: [
      "Minimum 50% in PCB (Physics, Chemistry, Biology)",
      "NEET qualification (for Indian students)",
      "Age 17-25 years",
      "English proficiency"
    ],
    advantages: [
      "Affordable tuition fees",
      "Modern infrastructure",
      "Multicultural environment",
      "Clinical exposure from early years",
      "International faculty"
    ],
    documents: [
      "10th and 12th mark sheets",
      "NEET scorecard",
      "Passport",
      "Medical certificate",
      "English proficiency certificate"
    ],
    scholarships: [
      "Merit-based scholarships",
      "Sports scholarships",
      "Research fellowships",
      "Government grants"
    ],
    hostelInfo: "Separate hostels for boys and girls with modern amenities, 24/7 security, and Wi-Fi facilities",
    indianFoodAvailability: "Indian mess available with vegetarian and non-vegetarian options"
  },
  {
    id: 2,
    name: "Bashkir State Medical University",
    country: "Russia",
    city: "Ufa",
    tuitionFee: 22000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/RUSSIA/BASHKIR.jpg",
    facilities: ["Library", "Laboratory", "Medical Center", "Research Center"],
    rating: 4.4,
    category: "Medical"
  },
  {
    id: 3,
    name: "Mari State University",
    country: "Russia",
    city: "Yoshkar-Ola",
    tuitionFee: 18000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/RUSSIA/MARI.jpg",
    facilities: ["Library", "Laboratory", "Accommodation", "WiFi"],
    rating: 4.2,
    category: "Medical",
    description: "A prestigious medical university offering quality education in a student-friendly environment",
    longDescription: "Mari State University combines traditional medical education with modern teaching methodologies. The university is known for its personalized attention to students and strong practical training.",
    establishedYear: "1972",
    studentCount: "10,000+",
    facultyCount: "600+",
    hospitalAffiliations: ["Mari Republican Clinical Hospital", "City Hospital of Yoshkar-Ola", "Regional Children's Hospital"],
    recognition: ["WHO", "Medical Council of India", "Russian Ministry of Education"],
    courses: [
      { name: "General Medicine (MBBS)", duration: "6 years", fees: "$3,800/year" },
      { name: "Dentistry", duration: "5 years", fees: "$4,000/year" },
      { name: "Pharmacy", duration: "5 years", fees: "$3,500/year" }
    ],
    admissionProcess: [
      "Application form submission",
      "Academic credentials verification",
      "Language proficiency test",
      "Medical examination",
      "Visa application"
    ],
    eligibility: [
      "Minimum 50% in PCB",
      "NEET qualification (for Indian students)",
      "Age: 17-25 years",
      "English language proficiency"
    ],
    advantages: [
      "Affordable education",
      "Modern teaching facilities",
      "International student support",
      "Practical training focus",
      "Safe campus environment"
    ],
    documents: [
      "Academic certificates",
      "NEET scorecard",
      "Passport copy",
      "Health certificate",
      "Language proficiency proof"
    ],
    scholarships: [
      "Merit scholarships",
      "Sports excellence awards",
      "Cultural talent grants",
      "Financial aid programs"
    ],
    hostelInfo: "Comfortable hostel accommodation with modern amenities, study rooms, and security",
    indianFoodAvailability: "Indian food available in university cafeteria with special arrangements for vegetarians"
  },
  // Georgia Universities
  {
    id: 4,
    name: "Batumi Shote Rustavli State University",
    country: "Georgia",
    city: "Batumi",
    tuitionFee: 15000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/GEORGIA/BATUMI.jpg",
    facilities: ["Library", "Laboratory", "Cafeteria", "International Student Office"],
    rating: 4.3,
    category: "Medical",
    description: "A prestigious Georgian medical university known for its international standards and quality education",
    longDescription: "Batumi Shota Rustaveli State University offers world-class medical education with a focus on practical training and modern teaching methodologies. The university provides an excellent learning environment for international students.",
    establishedYear: "1935",
    studentCount: "9,000+",
    facultyCount: "500+",
    hospitalAffiliations: ["Batumi Regional Hospital", "University Medical Center", "Children's Medical Center"],
    recognition: ["WHO", "Medical Council of India", "Ministry of Education of Georgia"],
    courses: [
      { name: "General Medicine (MBBS)", duration: "6 years", fees: "$4,000/year" },
      { name: "Dentistry", duration: "5 years", fees: "$4,200/year" },
      { name: "Pharmacy", duration: "4 years", fees: "$3,800/year" }
    ],
    admissionProcess: [
      "Online application submission",
      "Document verification",
      "Admission interview",
      "Medical check-up",
      "Visa processing"
    ],
    eligibility: [
      "Minimum 50% in PCB",
      "NEET qualification (for Indian students)",
      "Age 17-25 years",
      "English proficiency required"
    ],
    advantages: [
      "Affordable tuition fees",
      "Modern infrastructure",
      "Beautiful campus location",
      "Strong clinical exposure",
      "International faculty"
    ],
    documents: [
      "High school transcripts",
      "NEET scorecard",
      "Valid passport",
      "Medical certificate",
      "English proficiency certificate"
    ],
    scholarships: [
      "Academic merit scholarships",
      "Sports scholarships",
      "Cultural scholarships",
      "Need-based grants"
    ],
    hostelInfo: "Well-furnished hostels with modern amenities, separate blocks for boys and girls",
    indianFoodAvailability: "Indian cuisine available in campus cafeteria with vegetarian options"
  },
  {
    id: 5,
    name: "Caucasus International University",
    country: "Georgia",
    city: "Tbilisi",
    tuitionFee: 16000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/GEORGIA/CAUCASUS.jpg",
    facilities: ["Library", "Laboratory", "WiFi", "Medical Center"],
    rating: 4.2,
    category: "Medical",
    description: "A leading private medical university in Georgia offering high-quality international education",
    longDescription: "Caucasus International University is committed to excellence in medical education, combining theoretical knowledge with hands-on clinical experience. The university provides a multicultural environment ideal for international students.",
    establishedYear: "1995",
    studentCount: "8,500+",
    facultyCount: "450+",
    hospitalAffiliations: ["Tbilisi Central Hospital", "CIU University Clinic", "Georgian-American Medical Center"],
    recognition: ["WHO", "Medical Council of India", "Georgian Medical Council"],
    courses: [
      { name: "General Medicine (MBBS)", duration: "6 years", fees: "$4,500/year" },
      { name: "Dentistry", duration: "5 years", fees: "$4,800/year" },
      { name: "Pharmacy", duration: "4 years", fees: "$4,000/year" }
    ],
    admissionProcess: [
      "Online registration",
      "Document submission",
      "Entrance examination",
      "Medical examination",
      "Visa application support"
    ],
    eligibility: [
      "Minimum 55% in PCB",
      "NEET qualified (for Indian students)",
      "Age: 17-25 years",
      "English language proficiency"
    ],
    advantages: [
      "Modern teaching methodology",
      "International faculty members",
      "Advanced clinical facilities",
      "Strong research programs",
      "Career guidance support"
    ],
    documents: [
      "Academic transcripts",
      "NEET score certificate",
      "Passport copy",
      "Health certificate",
      "Language proficiency proof"
    ],
    scholarships: [
      "Academic excellence awards",
      "Research scholarships",
      "Sports achievement grants",
      "Financial assistance programs"
    ],
    hostelInfo: "Modern hostel facilities with 24/7 security, internet connectivity, and study areas",
    indianFoodAvailability: "Indian food court with dedicated Indian chefs and diverse menu options"
  },
  // Philippines Universities
  {
    id: 6,
    name: "Lyceum of the Philippines University",
    country: "Philippines",
    city: "Manila",
    tuitionFee: 12000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/PHILIPPINES/LYCEUM.jpg",
    facilities: ["Library", "Laboratory", "Cafeteria", "Medical Center"],
    rating: 4.1,
    category: "Medical",
    // Need to add description property to University type before using it
    // Removing description property until University type is updated
    longDescription: "Lyceum of the Philippines University offers comprehensive medical education with a focus on practical training and research. The university is renowned for its state-of-the-art facilities and experienced faculty.",
    establishedYear: "1952",
    studentCount: "7,500+",
    facultyCount: "400+",
    hospitalAffiliations: ["Manila General Hospital", "LPU Medical Center", "Philippine Children's Medical Center"],
    recognition: ["WHO", "Medical Council of India", "Commission on Higher Education Philippines"],
    courses: [
      { name: "Doctor of Medicine", duration: "4 years", fees: "$5,000/year" },
      { name: "Nursing", duration: "4 years", fees: "$3,500/year" },
      { name: "Pharmacy", duration: "4 years", fees: "$3,000/year" }
    ],
    admissionProcess: [
      "Application form submission",
      "Entrance examination",
      "Document verification",
      "Interview process",
      "Medical clearance"
    ],
    eligibility: [
      "Bachelor's degree for MD program",
      "NEET qualification (for Indian students)",
      "Minimum GPA requirement",
      "English proficiency"
    ],
    advantages: [
      "Competitive tuition fees",
      "Modern medical facilities",
      "Strong clinical partnerships",
      "Research opportunities",
      "International exposure"
    ],
    documents: [
      "Academic credentials",
      "NEET scorecard",
      "Valid passport",
      "Medical certificate",
      "English proficiency proof"
    ],
    scholarships: [
      "Academic scholarships",
      "Research grants",
      "Merit-based awards",
      "Financial aid programs"
    ],
    hostelInfo: "Comfortable dormitories with modern amenities and 24/7 security",
    indianFoodAvailability: "Indian food available in university cafeteria with vegetarian options"
  },
  {
    id: 7,
    name: "Davao Medical School Foundation",
    country: "Philippines",
    city: "Davao",
    tuitionFee: 13000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/PHILIPPINES/DAVAO.jpg",
    facilities: ["Library", "Laboratory", "Accommodation", "Medical Center"],
    rating: 4.2,
    category: "Medical"
  },
  // Belarus Universities
  {
    id: 8,
    name: "Belarusian State Medical University",
    country: "Belarus",
    city: "Minsk",
    tuitionFee: 18000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/BELARUS/BELARUSIAN.jpg",
    facilities: ["Library", "Laboratory", "Research Center", "Medical Center"],
    rating: 4.4,
    category: "Medical"
  },
  {
    id: 9,
    name: "Grodno State Medical University",
    country: "Belarus",
    city: "Grodno",
    tuitionFee: 17000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/BELARUS/GRODNO.jpg",
    facilities: ["Library", "Laboratory", "Accommodation", "Medical Center"],
    rating: 4.3,
    category: "Medical"
  },
  // Moldova Universities
  {
    id: 10,
    name: "Nicolae Testemitanu State University of Medicine",
    country: "Moldova",
    city: "Chisinau",
    tuitionFee: 16000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/MOLDOVA/NICOLAE.jpg",
    facilities: ["Library", "Laboratory", "Medical Center", "Research Center"],
    rating: 4.2,
    category: "Medical"
  },
  // Bulgaria Universities
  {
    id: 11,
    name: "Medical University Pleven",
    country: "Bulgaria",
    city: "Pleven",
    tuitionFee: 19000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/BULGARIA/PLEVEN.jpg",
    facilities: ["Library", "Laboratory", "Medical Center", "Research Center"],
    rating: 4.3,
    category: "Medical"
  },
  // Uzbekistan Universities
  {
    id: 12,
    name: "Andijan State Medical Institute",
    country: "Uzbekistan",
    city: "Andijan",
    tuitionFee: 15000,
    currency: "$",
    image: "/UNIVERSITY IMAGES/UZBEKISTAN/ANDIJAN.jpg",
    facilities: ["Library", "Laboratory", "Medical Center"],
    rating: 4.1,
    category: "Medical"
  }
];
