import { useEffect } from "react";
import MBBSCountryTemplate from "@/templates/MBBSCountryTemplate";

const MBBSKyrgyzstanPage = () => {
  // Country-specific data
  const countryData = {
    countryName: "Kyrgyzstan",
    heroImage: "/UNIVERSITY IMAGES/KYRGYZSTAN/Kyrgyzstan.jpg",
    countryDescription: [
      "Kyrgyzstan has become an emerging destination for international students seeking quality medical education. Kyrgyz medical universities are recognized globally for their quality education, advanced teaching methodologies, and highly affordable fee structure.",
      "With several well-established medical universities, Kyrgyzstan provides students with an opportunity to obtain a globally recognized medical degree at very competitive costs. The medical degrees from Kyrgyz universities are recognized by prestigious medical bodies including WHO, UNESCO, and the National Medical Commission (NMC) of India."
    ],
    degreeAwarded: "M.D. Physician (equivalent to MBBS in India)",
    duration: "5-6 years (including internship)",
    teachingMedium: "English (with optional Russian language training)",
    eligibilityCriteria: "50% in PCB (Physics, Chemistry, Biology) in 12th",
    advantages: [
      { text: "Highly affordable tuition fees starting from 2,500 USD per year" },
      { text: "No entrance exams required for admission" },
      { text: "Global recognition by WHO, UNESCO, and NMC" },
      { text: "Well-equipped laboratories and teaching facilities" },
      { text: "Strong clinical exposure through affiliated hospitals" },
      { text: "International faculty and diverse student community" },
      { text: "Safe and hospitable environment for international students" },
      { text: "Low cost of living (150-250 USD per month)" }
    ],
    colleges: [
      {
        id: 40,
        name: "International School of Medicine",
        country: "Kyrgyzstan",
        city: "Bishkek",
        tuitionFee: 3500,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/KYRGYZSTAN/ISM.jpg",
        facilities: ["Hospital", "Laboratory", "Library", "Hostel"],
        rating: 4.3,
        description: "A leading medical institution preferred by international students for its quality education."
      },
      {
        id: 39,
        name: "Bishkek International Medical Institute",
        country: "Kyrgyzstan",
        city: "Bishkek",
        tuitionFee: 3300,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/KYRGYZSTAN/BISHKEK.jpg",
        facilities: ["Modern Labs", "Clinical Training", "Digital Library", "Student Housing"],
        rating: 4.2,
        description: "Focuses on international standards of medical education with modern teaching methodologies."
      },
      {
        id: 38,
        name: "Asian Medical Institute",
        country: "Kyrgyzstan",
        city: "Kant",
        tuitionFee: 2800,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/KYRGYZSTAN/ASIAN.jpg",
        facilities: ["Laboratory", "Hospital", "Library", "Cafeteria"],
        rating: 4.1,
        description: "Known for its modern approach to medical education with affordable tuition fees."
      },
      {
        id: 41,
        name: "Osh State Medical University",
        country: "Kyrgyzstan",
        city: "Osh",
        tuitionFee: 2500,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/KYRGYZSTAN/OSH.jpg",
        facilities: ["Hospital", "Library", "Laboratory", "Accommodation"],
        rating: 4.2,
        description: "One of the leading universities in southern Kyrgyzstan with quality medical education."
      }
    ],
    admissionProcess: [
                  {
                    step: "Document Preparation",
                    desc: "Prepare all required documents including 10th and 12th mark sheets, passport, passport-sized photographs, and medical certificate."
                  },
                  {
                    step: "University Selection",
                    desc: "Choose the right medical university based on your preferences, budget, and location within Kyrgyzstan."
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
                    desc: "Apply for a student visa at the Kyrgyzstan embassy/consulate with the invitation letter and other required documents."
                  },
                  {
                    step: "Travel & Enrollment",
                    desc: "Travel to Kyrgyzstan and complete the admission formalities at the university."
                  }
    ],
    eligibilityItems: [
      { text: "Minimum 50% marks in Physics, Chemistry, and Biology in 12th grade (10+2)" },
      { text: "NEET qualification (for Indian students)" },
      { text: "Minimum age of 17 years" },
      { text: "Good health condition without any serious medical issues" },
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
      { name: "Tuition Fee (per year)", cost: "2,500 - 4,500 USD" },
      { name: "Hostel Fee (per year)", cost: "700 - 1,000 USD" },
      { name: "Food Expenses (per month)", cost: "100 - 150 USD" },
      { name: "Miscellaneous (per year)", cost: "400 - 600 USD" },
      { name: "Total Cost for 6 Years", cost: "Approx. 20,000 - 35,000 USD", isHighlighted: true }
    ],
    faqs: [
      {
        question: "Is MBBS from Kyrgyzstan recognized in India?",
        answer: "Yes, MBBS degrees from Kyrgyz medical universities recognized by the National Medical Commission (NMC) are accepted in India. Graduates need to clear the NEXT (National Exit Test) to practice medicine in India."
      },
      {
        question: "What is the cost of studying MBBS in Kyrgyzstan?",
        answer: "The tuition fees for MBBS in Kyrgyzstan range from $2,500 to $4,500 per year depending on the university. Living expenses are approximately $150-250 per month, making it one of the most affordable destinations for medical education."
      },
      {
        question: "Is it safe for Indian students in Kyrgyzstan?",
        answer: "Yes, Kyrgyzstan is generally safe for international students including Indians. Most universities have dedicated departments for international students and provide support for accommodation, cultural adaptation, and safety concerns."
      },
      {
        question: "What is the climate like in Kyrgyzstan?",
        answer: "Kyrgyzstan has a continental climate with four distinct seasons. Summers are warm with temperatures between 20-30°C, while winters can be cold with temperatures dropping below freezing. Students should bring appropriate clothing for different seasons."
      }
    ]
  };

  return <MBBSCountryTemplate {...countryData} />;
};

export default MBBSKyrgyzstanPage; 