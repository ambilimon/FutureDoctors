import { useEffect } from "react";
import MBBSCountryTemplate from "@/templates/MBBSCountryTemplate";

const MBBSBosniaPage = () => {
  // Country-specific data
  const countryData = {
    countryName: "Bosnia",
    heroImage: "/UNIVERSITY IMAGES/BOSNIA/Bosnia.jpg",
    countryDescription: [
      "Bosnia and Herzegovina, a beautiful country in the Balkan region of Europe, is gaining popularity among international students for medical education. Bosnian medical universities offer high-quality education following European standards at much more affordable costs compared to Western European countries.",
      "Medical degrees from Bosnia are recognized worldwide, including by the World Health Organization (WHO), UNESCO, and medical councils of many countries including India's National Medical Commission (NMC). The Bologna Process ensures that medical education in Bosnia is compatible with EU standards."
    ],
    degreeAwarded: "Doctor of Medicine (M.D.)",
    duration: "6 years (including internship)",
    teachingMedium: "English (with local language support)",
    eligibilityCriteria: "50% in PCB (Physics, Chemistry, Biology) in 12th",
    advantages: [
      { text: "EU standard medical education at affordable tuition fees" },
      { text: "English-medium programs with no language barriers" },
      { text: "Global recognition by WHO, UNESCO, and NMC" },
      { text: "Modern teaching facilities and hospitals" },
      { text: "Practical clinical exposure from early years" },
      { text: "Culturally diverse environment with international students" },
      { text: "Safe country with excellent quality of life" },
      { text: "Affordable living costs (300-500 EUR per month)" }
    ],
    colleges: [
      {
        id: 28,
        name: "University of East Sarajevo",
        country: "Bosnia",
        city: "East Sarajevo",
        tuitionFee: 6000,
        currency: "EUR",
        image: "/UNIVERSITY IMAGES/BOSNIA/EASTSARAJEVO.jpg",
        facilities: ["Modern Hospital", "Research Laboratories", "Digital Library", "Student Accommodation"],
        rating: 4.4,
        description: "A prestigious university in Bosnia offering high-quality medical education with modern facilities and excellent clinical training opportunities."
      }
    ],
    admissionProcess: [
                  {
                    step: "Document Preparation",
                    desc: "Prepare all required documents including 10th and 12th mark sheets, passport, passport-sized photographs, medical certificate, and birth certificate."
                  },
                  {
                    step: "University Selection",
                    desc: "Choose a suitable medical university in Bosnia based on your preferences and budget."
                  },
                  {
                    step: "Application Submission",
                    desc: "Submit your application form with all required documents to the university or through an authorized representative."
                  },
                  {
                    step: "Admission Letter",
                    desc: "After document verification, receive an official admission letter from the university."
                  },
                  {
                    step: "Visa Application",
                    desc: "Apply for a student visa at the Bosnia and Herzegovina embassy or consulate in your country."
                  },
                  {
                    step: "Travel Arrangements",
                    desc: "Make travel arrangements and prepare for your journey to Bosnia."
                  }
    ],
    eligibilityItems: [
      { text: "Minimum 50% marks in Physics, Chemistry, and Biology in 12th grade (10+2)" },
      { text: "NEET qualification (for Indian students)" },
      { text: "Minimum age of 17 years" },
      { text: "Good health condition without any serious medical issues" },
      { text: "Basic English proficiency" }
    ],
    documents: [
      { text: "10th Mark Sheet" },
      { text: "12th Mark Sheet" },
      { text: "NEET Scorecard" },
      { text: "Passport (valid for at least 18 months)" },
      { text: "Passport-sized Photographs" },
      { text: "Medical Certificate" },
      { text: "Birth Certificate" },
      { text: "HIV Test Report" }
    ],
    feeStructure: [
      { name: "Tuition Fee (per year)", cost: "5,000 - 7,000 EUR" },
      { name: "Hostel Fee (per year)", cost: "1,500 - 2,500 EUR" },
      { name: "Food Expenses (per month)", cost: "150 - 250 EUR" },
      { name: "Miscellaneous (per year)", cost: "800 - 1,200 EUR" },
      { name: "Total Cost for 6 Years", cost: "Approx. 45,000 - 60,000 EUR", isHighlighted: true }
    ],
    faqs: [
      {
        question: "Is MBBS from Bosnia recognized in India?",
        answer: "Yes, medical degrees from Bosnian universities recognized by the WHO and NMC are accepted in India. Graduates must clear the NEXT examination to practice medicine in India."
      },
      {
        question: "What is the language of instruction in Bosnian medical universities?",
        answer: "Medical programs for international students are taught in English. Some universities may offer basic local language courses to help with patient interactions during clinical rotations."
      },
      {
        question: "What is the cost of studying MBBS in Bosnia?",
        answer: "The tuition fees range from 5,000 to 7,000 EUR per year. With living expenses included, the total annual cost is approximately 8,000 to 10,000 EUR."
      },
      {
        question: "How is student life in Bosnia for international students?",
        answer: "Bosnia offers a safe and welcoming environment for international students with a blend of Eastern and Western cultures. Students enjoy a comfortable lifestyle with affordable living costs and vibrant student communities."
      }
    ]
  };

  return <MBBSCountryTemplate {...countryData} />;
};

export default MBBSBosniaPage; 