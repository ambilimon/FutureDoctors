import { useEffect } from "react";
import MBBSCountryTemplate from "@/templates/MBBSCountryTemplate";

const MBBSGeorgiaPage = () => {
  // Country-specific data
  const countryData = {
    countryName: "Georgia",
    heroImage: "/UNIVERSITY IMAGES/GEORGIA/Georgia.jpeg",
    countryDescription: [
      "Georgia has become a premier destination for international students seeking quality European medical education. Georgian medical universities offer European standard education with modern teaching methods and advanced facilities.",
      "With its strategic location between Eastern Europe and Western Asia, Georgia provides a unique cultural experience while offering medical degrees recognized by WHO, UNESCO, and the Medical Council of India (NMC)."
    ],
    degreeAwarded: "M.D. Doctor of Medicine (equivalent to MBBS in India)",
    duration: "6 years (including 1 year internship)",
    teachingMedium: "English (No language barrier for international students)",
    eligibilityCriteria: "50% in PCB (Physics, Chemistry, Biology) in 12th",
    advantages: [
      { text: "European standard education at affordable tuition fees" },
      { text: "No entrance exams like IELTS, TOEFL required" },
      { text: "Global recognition by WHO, UNESCO, and NMC" },
      { text: "Modern infrastructure and advanced teaching facilities" },
      { text: "Safe and peaceful environment for international students" },
      { text: "Low cost of living compared to other European countries" },
      { text: "Visa-free travel to 98+ countries being an MBBS student" },
      { text: "Diverse international student community from 72+ countries" }
    ],
    colleges: [
      {
        id: 16,
        name: "Tbilisi State Medical University",
        country: "Georgia",
        city: "Tbilisi",
        tuitionFee: 6000,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/GEORGIA/TBILISI.jpg",
        facilities: ["Library", "Hospital", "Research Center", "Cafeteria"],
        rating: 4.7,
        description: "One of the oldest and most prestigious medical universities in Georgia."
      },
      {
        id: 12,
        name: "Batumi Shota Rustaveli State University",
        country: "Georgia",
        city: "Batumi",
        tuitionFee: 5500,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/GEORGIA/BATUMI.jpg",
        facilities: ["Laboratory", "Hospital", "Library", "Sports Complex"],
        rating: 4.4,
        description: "A leading university located in the beautiful coastal city of Batumi."
      },
      {
        id: 14,
        name: "European University",
        country: "Georgia",
        city: "Tbilisi",
        tuitionFee: 5000,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/GEORGIA/EUROPEAN.jpg",
        facilities: ["Hospital", "Laboratory", "Library", "Accommodation"],
        rating: 4.3,
        description: "Known for its modern approach to medical education with European standards."
      },
      {
        id: 13,
        name: "Caucasus International University",
        country: "Georgia",
        city: "Tbilisi",
        tuitionFee: 5200,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/GEORGIA/CAUCASUS.jpeg",
        facilities: ["Hospital", "Laboratory", "Library", "Hostel"],
        rating: 4.2,
        description: "Popular among international students with modern teaching facilities."
      },
      {
        id: 15,
        name: "Georgian National University (SEU)",
        country: "Georgia",
        city: "Tbilisi",
        tuitionFee: 5300,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/GEORGIA/SEU.jpg",
        facilities: ["Hospital", "Laboratory", "Library", "Cafeteria"],
        rating: 4.1,
        description: "Provides quality medical education with affordable tuition fees."
      }
    ],
    admissionProcess: [
                    {
                      step: "Document Preparation",
                      desc: "Prepare all required documents including 10th and 12th mark sheets, passport, passport-sized photographs, and medical certificate."
                    },
                    {
                      step: "University Selection",
                      desc: "Choose the right medical university based on your preferences, budget, and location within Georgia."
                    },
                    {
                      step: "Application Submission",
                      desc: "Submit the application form along with the required documents to the university or through an authorized representative."
                    },
                    {
                      step: "Invitation Letter",
                      desc: "After document verification, the university issues an invitation letter for visa purposes."
                    },
                    {
                      step: "Visa Application",
                      desc: "Apply for a student visa at the Georgian embassy/consulate with the invitation letter and other required documents."
                    },
                    {
                      step: "Travel & Enrollment",
                      desc: "Travel to Georgia and complete the admission formalities at the university."
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
      { text: "10th & 12th Mark Sheets" },
      { text: "NEET Score Card (if applicable)" },
      { text: "Valid Passport (minimum 18 months validity)" },
      { text: "Birth Certificate" },
      { text: "Medical Certificate" },
      { text: "Passport-sized Photographs" },
      { text: "HIV Test Report" },
      { text: "Student Visa" },
      { text: "Migration Certificate" }
    ],
    feeStructure: [
      { name: "Tuition Fee (per year)", cost: "5,000 - 6,500 USD" },
      { name: "Hostel Fee (per year)", cost: "1,000 - 1,800 USD" },
      { name: "Food Expenses (per month)", cost: "150 - 250 USD" },
      { name: "Miscellaneous (per year)", cost: "800 - 1,200 USD" },
      { name: "Total Cost for 6 Years", cost: "Approx. 35,000 - 45,000 USD", isHighlighted: true }
    ],
    faqs: [
      {
        question: "Is MBBS from Georgia recognized in India?",
        answer: "Yes, medical degrees from recognized universities in Georgia are accepted by the National Medical Commission (NMC) of India. Students need to clear the NEXT examination to practice in India."
      },
      {
        question: "What is the fee structure for MBBS in Georgia?",
        answer: "The average tuition fee ranges from $5,000 to $6,500 per year, with total course fees between $35,000 to $45,000 for the entire program, making it more affordable than most European countries."
      },
      {
        question: "Is NEET required for MBBS admission in Georgia?",
        answer: "Yes, for Indian students, clearing NEET is mandatory as per NMC guidelines to study MBBS abroad, including in Georgia."
      },
      {
        question: "What is the medium of instruction in Georgian medical universities?",
        answer: "English is the primary medium of instruction in Georgian medical universities offering international programs, making it convenient for students from various countries."
      }
    ]
  };

  return <MBBSCountryTemplate {...countryData} />;
};

export default MBBSGeorgiaPage; 