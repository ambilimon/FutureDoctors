import { useEffect } from "react";
import MBBSCountryTemplate from "@/templates/MBBSCountryTemplate";

const MBBSPhilippinesPage = () => {
  // Country-specific data
  const countryData = {
    countryName: "Philippines",
    heroImage: "/UNIVERSITY IMAGES/PHILIPPINES/Philippines.jpg",
    countryDescription: [
      "The Philippines has become an increasingly popular destination for international students seeking quality medical education. Known for its English-based curriculum and international standards, Filipino medical universities offer comprehensive medical programs that are recognized globally.",
      "With a strong focus on practical training and clinical exposure, medical education in the Philippines prepares students for a successful career in medicine. The country's medical universities are recognized by prestigious medical bodies including the World Health Organization (WHO) and the National Medical Commission (NMC)."
    ],
    degreeAwarded: "M.D. (Doctor of Medicine)",
    duration: "5.5 to 6 years (including BS Pre-Medicine)",
    teachingMedium: "English",
    eligibilityCriteria: "50% in PCB (Physics, Chemistry, Biology) in 12th",
    advantages: [
      { text: "English as the medium of instruction" },
      { text: "Global recognition by WHO, UNESCO, and NMC" },
      { text: "Modern infrastructure and advanced teaching facilities" },
      { text: "Clinical rotations in affiliated hospitals" },
      { text: "Affordable tuition fees compared to Western countries" },
      { text: "Cultural similarity with India makes adaptation easier" },
      { text: "Safe and welcoming environment for international students" }
    ],
    colleges: [
      {
        id: 17,
        name: "Lyceum of the Philippines University",
        country: "Philippines",
        city: "Manila",
        tuitionFee: 5200,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/PHILIPPINES/LYCEUM.jpg",
        facilities: ["Modern Labs", "Research Center", "Library", "Student Housing"],
        rating: 4.4,
        description: "A leading university offering quality medical education with modern facilities."
      },
      {
        id: 18,
        name: "Davao Medical School Foundation",
        country: "Philippines",
        city: "Davao City",
        tuitionFee: 4800,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/PHILIPPINES/DAVAO.jpg",
        facilities: ["Laboratory", "Hospital", "Library", "Hostel"],
        rating: 4.5,
        description: "Popular among Indian students for medical education in the Philippines."
      },
      {
        id: 19,
        name: "Emilio Aguinaldo Medical Center",
        country: "Philippines",
        city: "Cavite",
        tuitionFee: 4700,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/PHILIPPINES/EMILIO.jpeg",
        facilities: ["Medical Center", "Research Labs", "Library", "Clinical Facilities"],
        rating: 4.3,
        description: "Renowned for its clinical training and modern medical education approach."
      },
      {
        id: 20,
        name: "Our Lady of Fatima University",
        country: "Philippines",
        city: "Valenzuela",
        tuitionFee: 4600,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/PHILIPPINES/FATIMA.jpeg",
        facilities: ["Hospital", "Research Facilities", "Digital Library", "Sports Complex"],
        rating: 4.4,
        description: "Known for its comprehensive approach to medical education and excellent faculty."
      },
      {
        id: 21,
        name: "UV Gullas College of Medicine",
        country: "Philippines",
        city: "Cebu",
        tuitionFee: 4500,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/PHILIPPINES/UVGULLAS.png",
        facilities: ["Advanced Labs", "Clinical Training Centers", "Library", "Cafeteria"],
        rating: 4.2,
        description: "Offers modern medical education with focus on clinical exposure from early years."
      },
      {
        id: 22,
        name: "University of Perpetual Help System",
        country: "Philippines",
        city: "Las Piñas",
        tuitionFee: 4500,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/PHILIPPINES/PERPETUAL.jpeg",
        facilities: ["Hospital", "Laboratory", "Cafeteria", "Sports Facilities"],
        rating: 4.3,
        description: "Renowned for quality medical education with excellent clinical exposure."
      }
    ],
    admissionProcess: [
                    {
                      step: "Document Preparation",
                      desc: "Prepare all required documents including 10th and 12th mark sheets, passport, passport-sized photographs, and medical certificate."
                    },
                    {
                      step: "University Selection",
                      desc: "Choose the right medical university based on your preferences, budget, and location within the Philippines."
                    },
                    {
                      step: "Application Submission",
                      desc: "Submit the application form along with the required documents to the university or through an authorized representative."
                    },
                    {
                      step: "Admission Letter",
                      desc: "Receive your admission letter from the university after document verification."
                    },
                    {
                      step: "Fee Payment",
                      desc: "Pay the initial fees as mentioned in the admission letter to secure your seat."
                    },
                    {
                      step: "Visa Application",
                      desc: "Apply for a student visa with the admission letter and other required documents."
                    },
                    {
                      step: "Travel Arrangements",
                      desc: "Make travel arrangements and prepare for your journey to the Philippines."
                    }
    ],
    eligibilityItems: [
      { text: "Minimum 50% marks in Physics, Chemistry, and Biology in 12th grade (10+2)" },
      { text: "NEET qualification (for Indian students)" },
      { text: "Minimum age of 17 years" },
      { text: "Good health condition" },
      { text: "Valid passport" }
    ],
    documents: [
      { text: "10th and 12th mark sheets and certificates" },
      { text: "NEET scorecard (for Indian students)" },
      { text: "Valid passport with at least 18 months validity" },
      { text: "Passport-sized photographs (white background)" },
      { text: "Birth certificate" },
      { text: "Medical fitness certificate" },
      { text: "Student visa application form" },
      { text: "Letter of recommendation (if required)" },
      { text: "Financial statements or bank statements" },
      { text: "COVID-19 vaccination certificate" }
    ],
    feeStructure: [
      { name: "Tuition Fee (per year)", cost: "3,000 - 6,000 USD" },
      { name: "Hostel Fee (per year)", cost: "1,000 - 1,500 USD" },
      { name: "Food Expenses (per month)", cost: "150 - 250 USD" },
      { name: "Miscellaneous (per year)", cost: "800 - 1,200 USD" },
      { name: "Total Cost for 6 Years", cost: "Approx. 20,000 - 35,000 USD", isHighlighted: true }
    ],
    faqs: [
      {
        question: "Is MBBS from Philippines recognized in India?",
        answer: "Yes, medical degrees from recognized universities in the Philippines are accepted by the National Medical Commission (NMC) of India. Students need to clear the FMGE/NEXT examination to practice in India."
      },
      {
        question: "What is the fee structure for MBBS in Philippines?",
        answer: "The average tuition fee ranges from $3,000 to $6,000 per year, with total course fees between $20,000 to $35,000 for the entire program, making it more affordable than many Western countries."
      },
      {
        question: "What is the duration of MBBS in Philippines?",
        answer: "The MBBS program in the Philippines typically takes 5.5 to 6 years to complete, including a BS pre-medicine program (2 years) followed by the MD program (4 years)."
      },
      {
        question: "Is NEET required for MBBS admission in Philippines?",
        answer: "Yes, for Indian students, clearing NEET is mandatory as per NMC guidelines to study MBBS abroad, including in the Philippines."
      },
      {
        question: "What is the medium of instruction in Filipino medical universities?",
        answer: "English is the primary medium of instruction in all Filipino medical universities, making it convenient for international students."
      }
    ]
  };

  return <MBBSCountryTemplate {...countryData} />;
};

export default MBBSPhilippinesPage; 