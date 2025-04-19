import { useEffect } from "react";
import MBBSCountryTemplate from "@/templates/MBBSCountryTemplate";

const MBBSBelarusPage = () => {
  // Country-specific data
  const countryData = {
    countryName: "Belarus",
    heroImage: "/UNIVERSITY IMAGES/BELARUS/Belarus.jpeg",
    countryDescription: [
      "Belarus has become a popular destination for international students seeking quality medical education. Belarusian medical universities are recognized globally for their excellent teaching methodologies, modern infrastructure, and affordable fee structure.",
      "With several prestigious medical institutions, Belarus provides students with an opportunity to obtain a globally recognized medical degree at competitive costs. The medical degrees from Belarusian universities are recognized by prestigious medical bodies including WHO, UNESCO, and the National Medical Commission (NMC)."
    ],
    degreeAwarded: "M.D. Physician (equivalent to MBBS in India)",
    duration: "6 years (including internship)",
    teachingMedium: "English (with Russian language training)",
    eligibilityCriteria: "50% in PCB (Physics, Chemistry, Biology) in 12th",
    advantages: [
      { text: "Affordable tuition fees starting from 3,500 USD per year" },
      { text: "No entrance exams required for admission" },
      { text: "Global recognition by WHO, UNESCO, and NMC" },
      { text: "Modern infrastructure and advanced teaching facilities" },
      { text: "Strong European standard medical education" },
      { text: "Multicultural learning environment with students from around the world" },
      { text: "Safe and secure environment for international students" },
      { text: "Affordable living costs (200-300 USD per month)" }
    ],
    colleges: [
      {
        id: 23,
        name: "Belarusian State Medical University",
        country: "Belarus",
        city: "Minsk",
        tuitionFee: 4800,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/BELARUS/BSMU.jpeg",
        facilities: ["Hospital", "Research Center", "Library", "Laboratory"],
        rating: 4.5,
        description: "Premier medical university in Belarus with rich history."
      },
      {
        id: 24,
        name: "Grodno State Medical University",
        country: "Belarus",
        city: "Grodno",
        tuitionFee: 4600,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/BELARUS/GRODNO.jpg",
        facilities: ["Labs", "Hospital", "Library", "Research Center"],
        rating: 4.3,
        description: "Leading medical university known for quality education."
      },
      {
        id: 25,
        name: "Vitebsk State Medical University",
        country: "Belarus",
        city: "Vitebsk",
        tuitionFee: 4700,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/BELARUS/VITEBSK.jpg",
        facilities: ["Research Center", "Hospital", "Library", "Laboratory"],
        rating: 4.4,
        description: "Renowned for medical education and research."
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
                    desc: "Apply for a student visa at the Belarus embassy/consulate with the invitation letter and other required documents."
                  },
                  {
                    step: "Travel & Enrollment",
                    desc: "Travel to Belarus and complete the admission formalities at the university."
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
      { name: "Food Expenses (per month)", cost: "150 - 250 USD" },
      { name: "Miscellaneous (per year)", cost: "500 - 800 USD" },
      { name: "Total Cost for 6 Years", cost: "Approx. 30,000 - 40,000 USD", isHighlighted: true }
    ],
    faqs: [
      {
        question: "Is MBBS from Belarus recognized in India?",
        answer: "Yes, MBBS degrees from Belarusian medical universities recognized by the National Medical Commission (NMC) are accepted in India. Graduates need to clear the NEXT (National Exit Test) to practice medicine in India."
      },
      {
        question: "What is the cost of studying MBBS in Belarus?",
        answer: "The tuition fees for MBBS in Belarus range from $3,500 to $5,000 per year depending on the university. Living expenses are approximately $200-300 per month, making it an affordable option for medical education."
      },
      {
        question: "Do I need to learn Russian for MBBS studies?",
        answer: "Most Belarusian universities offer MBBS programs in English medium. However, learning basic Russian is beneficial for daily communication and patient interactions during clinical rotations. Universities typically offer Russian language courses in the first year."
      },
      {
        question: "What are the top medical universities in Belarus?",
        answer: "Some of the top medical universities in Belarus include Belarusian State Medical University, Vitebsk State Medical University, Grodno State Medical University, and Gomel State Medical University. All these institutions are renowned for their quality education and global recognition."
      }
    ]
  };

  return <MBBSCountryTemplate {...countryData} />;
};

export default MBBSBelarusPage; 