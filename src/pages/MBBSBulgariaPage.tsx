import { useEffect } from "react";
import MBBSCountryTemplate from "@/templates/MBBSCountryTemplate";

const MBBSBulgariaPage = () => {
  // Country-specific data
  const countryData = {
    countryName: "Bulgaria",
    heroImage: "/UNIVERSITY IMAGES/BULGARIA/Bulgaria.jpeg",
    countryDescription: [
      "Bulgaria has become a premier destination for international students seeking quality medical education at affordable costs. As a member of the European Union, Bulgarian medical degrees are recognized globally, offering students a prestigious qualification that opens doors to medical practice worldwide.",
      "With a rich history of medical education dating back over a century, Bulgarian universities offer a blend of traditional medical teaching and modern medical technologies. Medical programs are taught entirely in English, eliminating language barriers for international students while maintaining European standards of education."
    ],
    degreeAwarded: "M.D. (Doctor of Medicine) - EU Recognized",
    duration: "6 years (including clinical rotations)",
    teachingMedium: "English",
    eligibilityCriteria: "50% in PCB (Physics, Chemistry, Biology) in 12th",
    advantages: [
      { text: "EU-recognized medical degrees with global acceptance" },
      { text: "Affordable tuition fees (€5,000-8,000 per year)" },
      { text: "English medium instruction throughout the program" },
      { text: "No entrance examination required for admission" },
      { text: "Modern infrastructure and state-of-the-art facilities" },
      { text: "Safe and friendly environment for international students" },
      { text: "Opportunity to work in EU countries after graduation" },
      { text: "Low cost of living (€300-400 per month)" }
    ],
    colleges: [
    {
      id: 27,
      name: "Medical University Pleven",
      country: "Bulgaria",
      city: "Pleven",
      tuitionFee: 7000,
        currency: "EUR",
      image: "/UNIVERSITY IMAGES/BULGARIA/PLEVEN.jpg",
        facilities: ["Modern Laboratories", "Digital Library", "Simulation Center", "University Hospital", "Research Centers"],
      rating: 4.3,
        description: "Modern medical university with European standards of education and advanced facilities."
      }
    ],
    admissionProcess: [
                  {
                    step: "Document Preparation",
                    desc: "Prepare necessary documents including high school certificates, transcripts, passport, and passport-sized photographs."
                  },
                  {
                    step: "Application Submission",
                    desc: "Apply directly to the university or through an authorized representative with all required documents."
                  },
                  {
                    step: "Entrance Examination",
                    desc: "Some universities may conduct admission tests in Biology and Chemistry, while others offer direct admission based on academic records."
                  },
                  {
                    step: "Acceptance Letter",
                    desc: "Upon successful application review, the university issues an acceptance letter required for visa application."
                  },
                  {
                    step: "Visa Application",
                    desc: "Apply for a student visa at the Bulgarian embassy with the acceptance letter, medical insurance, and financial statements."
                  },
                  {
                    step: "Travel & Enrollment",
                    desc: "Travel to Bulgaria and complete the formal enrollment process at the university."
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
      { text: "NEET Score Card (for Indian students)" },
      { text: "Valid Passport (minimum 1 year validity)" },
      { text: "Passport-sized Photographs" },
      { text: "Birth Certificate" },
      { text: "Medical Fitness Certificate" },
      { text: "Student Visa" },
      { text: "Health Insurance" },
      { text: "Police Clearance Certificate" }
    ],
    feeStructure: [
      { name: "Tuition Fee (per year)", cost: "5,000 - 8,000 EUR" },
      { name: "Hostel Fee (per year)", cost: "1,500 - 2,500 EUR" },
      { name: "Food Expenses (per month)", cost: "150 - 250 EUR" },
      { name: "Miscellaneous (per year)", cost: "800 - 1,200 EUR" },
      { name: "Total Cost for 6 Years", cost: "Approx. 35,000 - 50,000 EUR", isHighlighted: true }
    ],
    faqs: [
      {
        question: "Is MBBS from Bulgaria recognized in India?",
        answer: "Yes, MBBS degrees from Bulgarian universities are recognized by the National Medical Commission (NMC) in India. Graduates need to qualify the NEXT (National Exit Test) to practice medicine in India after completing their degree."
      },
      {
        question: "What is the cost of studying MBBS in Bulgaria?",
        answer: "The tuition fees for MBBS in Bulgaria range from €5,000 to €8,000 per year, depending on the university. Living expenses are approximately €300-400 per month, making it more affordable than many Western European countries."
      },
      {
        question: "Is NEET required for MBBS admission in Bulgaria?",
        answer: "According to NMC guidelines, Indian students must qualify in NEET to study MBBS abroad. While Bulgarian universities do not require NEET scores for admission, Indian students need a valid NEET qualification to be eligible for practice in India after graduation."
      },
      {
        question: "What are the opportunities after completing MBBS from Bulgaria?",
        answer: "After completing MBBS from Bulgaria, graduates can pursue postgraduate studies in European countries, work in EU hospitals, or return to India to practice medicine after clearing the NEXT exam. The EU-recognized degree offers global opportunities in healthcare."
      }
    ]
  };

  return <MBBSCountryTemplate {...countryData} />;
};

export default MBBSBulgariaPage; 