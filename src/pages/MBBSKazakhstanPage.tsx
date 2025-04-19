import { useEffect } from "react";
import MBBSCountryTemplate from "@/templates/MBBSCountryTemplate";

const MBBSKazakhstanPage = () => {
  // Country-specific data
  const countryData = {
    countryName: "Kazakhstan",
    heroImage: "/UNIVERSITY IMAGES/KAZAKHSTAN/Kazakhstan.jpg",
    countryDescription: [
      "Kazakhstan is emerging as a preferred destination for international students seeking quality medical education. Kazakhstani medical universities are recognized globally for their modern teaching methodologies, advanced infrastructure, and affordable fee structure.",
      "With several prestigious medical universities, Kazakhstan provides students with an opportunity to obtain a globally recognized medical degree at competitive costs. The medical degrees from Kazakhstani universities are recognized by prestigious medical bodies including WHO, UNESCO, and the National Medical Commission (NMC)."
    ],
    degreeAwarded: "M.D. Physician (equivalent to MBBS in India)",
    duration: "5-6 years (including internship)",
    teachingMedium: "English (with Kazakh/Russian language training)",
    eligibilityCriteria: "50% in PCB (Physics, Chemistry, Biology) in 12th",
    advantages: [
      { text: "Affordable tuition fees starting from 3,500 USD per year" },
      { text: "No entrance exams required for admission" },
      { text: "Global recognition by WHO, UNESCO, and NMC" },
      { text: "Modern infrastructure and advanced teaching facilities" },
      { text: "Excellent clinical exposure and practical training" },
      { text: "Multicultural learning environment with international students" },
      { text: "Safe and secure environment for international students" },
      { text: "Reasonable living costs (200-300 USD per month)" }
    ],
    colleges: [
      {
        id: 32,
        name: "Al-Farabi National University",
        country: "Kazakhstan",
        city: "Almaty",
        tuitionFee: 4800,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/KAZAKHSTAN/ALFARABI.jpg",
        facilities: ["Research Centers", "Modern Libraries", "Clinical Facilities", "Student Dormitories"],
        rating: 4.5,
        description: "A prestigious institution offering modern medical education with excellent research opportunities."
      },
      {
        id: 33,
        name: "Astana Medical University",
        country: "Kazakhstan",
        city: "Nur-Sultan",
        tuitionFee: 4500,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/KAZAKHSTAN/ASTANA.jpg",
        facilities: ["Hospital", "Library", "Laboratory", "Sports Complex"],
        rating: 4.3,
        description: "Leading medical university in the capital city of Kazakhstan."
      },
      {
        id: 34,
        name: "Caspian International School of Medicine",
        country: "Kazakhstan",
        city: "Aktau",
        tuitionFee: 4200,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/KAZAKHSTAN/CASPIAN.jpg",
        facilities: ["Simulation Labs", "Digital Library", "Clinical Training Centers", "Modern Hostels"],
        rating: 4.2,
        description: "A modern medical school with innovative teaching methods and international standards."
      },
      {
        id: 35,
        name: "Kazakh National Medical University",
        country: "Kazakhstan",
        city: "Almaty",
        tuitionFee: 5000,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/KAZAKHSTAN/KAZAKH.jpg",
        facilities: ["Hospital", "Laboratory", "Library", "Research Center"],
        rating: 4.6,
        description: "One of the oldest and most prestigious medical universities in Kazakhstan."
      },
      {
        id: 36,
        name: "South Kazakhstan Medical Academy",
        country: "Kazakhstan",
        city: "Shymkent",
        tuitionFee: 4000,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/KAZAKHSTAN/SKMA.jpg",
        facilities: ["Laboratory", "Hospital", "Library", "Hostel"],
        rating: 4.2,
        description: "Known for its quality medical education and modern teaching facilities."
      },
      {
        id: 37,
        name: "University of International Business",
        country: "Kazakhstan",
        city: "Almaty",
        tuitionFee: 4300,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/KAZAKHSTAN/UIB.jpg",
        facilities: ["Modern Campus", "International Exchange Programs", "Research Facilities", "Accommodation"],
        rating: 4.3,
        description: "Focuses on global medical practices with strong international collaborations."
      }
    ],
    admissionProcess: [
                  {
                    step: "Document Preparation",
                    desc: "Prepare all required documents including 10th and 12th mark sheets, passport, passport-sized photographs, and medical certificate."
                  },
                  {
                    step: "University Selection",
                    desc: "Choose the right medical university based on your preferences, budget, and location."
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
                    desc: "Apply for a student visa at the Kazakhstan embassy/consulate with the invitation letter and other required documents."
                  },
                  {
                    step: "Travel & Enrollment",
                    desc: "Travel to Kazakhstan and complete the admission formalities at the university."
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
      { name: "Tuition Fee (per year)", cost: "3,500 - 5,000 USD" },
      { name: "Hostel Fee (per year)", cost: "800 - 1,200 USD" },
      { name: "Food Expenses (per month)", cost: "200 - 300 USD" },
      { name: "Miscellaneous (per year)", cost: "500 - 800 USD" },
      { name: "Total Cost for 6 Years", cost: "Approx. 30,000 - 40,000 USD", isHighlighted: true }
    ],
    faqs: [
      {
        question: "Is MBBS from Kazakhstan recognized in India?",
        answer: "Yes, MBBS degrees from Kazakhstani medical universities recognized by the National Medical Commission (NMC) are accepted in India. Graduates need to clear the NEXT (National Exit Test) to practice medicine in India."
      },
      {
        question: "What is the cost of studying MBBS in Kazakhstan?",
        answer: "The tuition fees for MBBS in Kazakhstan range from $3,500 to $5,000 per year depending on the university. Living expenses are approximately $200-300 per month, making it an affordable option for medical education."
      },
      {
        question: "Do I need to learn the local language for MBBS studies?",
        answer: "Most Kazakhstani universities offer MBBS programs in English medium. However, learning basic Kazakh or Russian is beneficial for daily communication and patient interactions during clinical rotations. Universities typically offer language courses in the first year."
      },
      {
        question: "Are scholarships available for international students?",
        answer: "Yes, many universities in Kazakhstan offer scholarships for international students based on academic performance. Additionally, the Kazakhstan government also provides various scholarship programs for foreign students."
      }
    ]
  };

  return <MBBSCountryTemplate {...countryData} />;
};

export default MBBSKazakhstanPage; 