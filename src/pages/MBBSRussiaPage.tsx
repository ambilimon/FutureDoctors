import { useEffect } from "react";
import MBBSCountryTemplate from "@/templates/MBBSCountryTemplate";

const MBBSRussiaPage = () => {
  useEffect(() => {
    console.log("MBBSRussiaPage mounted");
  }, []);

  // Country-specific data
  const countryData = {
    countryName: "Russia",
    heroImage: "/UNIVERSITY IMAGES/RUSSIA/Russia.jpg",
    countryDescription: [
      "Russia has emerged as one of the most popular destinations for international students seeking quality medical education. Russian medical universities are recognized globally for their advanced teaching methodologies, state-of-the-art infrastructure, and affordable fee structure.",
      "With over 60 medical universities offering MBBS programs, Russia provides students with an opportunity to obtain a globally recognized medical degree at a fraction of the cost compared to Western countries. The medical degrees from Russian universities are recognized by prestigious medical bodies including WHO, UNESCO, and the National Medical Commission (NMC)."
    ],
    degreeAwarded: "M.D. Physician (equivalent to MBBS in India)",
    duration: "6 years (including 1 year internship)",
    teachingMedium: "English & Russian (with Russian language training)",
    eligibilityCriteria: "50% in PCB (Physics, Chemistry, Biology) in 12th",
    advantages: [
      { text: "Affordable tuition fees starting from 4,500 USD per year" },
      { text: "No entrance exams like IELTS, TOEFL required" },
      { text: "Global recognition by WHO, UNESCO, and NMC" },
      { text: "Modern infrastructure and advanced teaching facilities" },
      { text: "Practical-based medical learning approach" },
      { text: "Internationally diverse student environment" },
      { text: "Safe campus environment with student support services" },
      { text: "Affordable living costs (150-300 USD per month)" }
    ],
    colleges: [
      {
        id: 1,
        name: "Altai State Medical University",
        country: "Russia",
        city: "Barnaul",
        tuitionFee: 5000,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/RUSSIA/ALTAI.jpg",
        facilities: ["Library", "Laboratory", "Hospital", "Hostel"],
        rating: 4.5,
        description: "A well-known medical university in Russia with modern facilities."
      },
      {
        id: 2,
        name: "Bashkir State Medical University",
        country: "Russia",
        city: "Ufa",
        tuitionFee: 4800,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/RUSSIA/BASHKIR.jpg",
        facilities: ["Library", "Laboratory", "Hospital", "Research Center"],
        rating: 4.3,
        description: "A top-rated medical university located in Ufa, Russia."
      },
      {
        id: 3,
        name: "Mari State University",
        country: "Russia",
        city: "Yoshkar-Ola",
        tuitionFee: 4700,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/RUSSIA/MARI.jpg",
        facilities: ["Library", "Laboratory", "Hospital", "Sports Complex"],
        rating: 4.2,
        description: "Popular among Indian students pursuing MBBS in Russia."
      },
      {
        id: 4,
        name: "Syktyvkar State University",
        country: "Russia",
        city: "Syktyvkar",
        tuitionFee: 4500,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/RUSSIA/SYKTYVKAR.jpg",
        facilities: ["Library", "Laboratory", "Cafeteria", "Hostel"],
        rating: 4.1,
        description: "Renowned for medical and technical education in Russia."
      },
      {
        id: 5,
        name: "V.I Vernadsky Crimean Federal University",
        country: "Russia",
        city: "Simferopol",
        tuitionFee: 5000,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/RUSSIA/VERNADSKY.jpg",
        facilities: ["Library", "Gym", "Hospital", "Hostel"],
        rating: 4.4,
        description: "One of the leading federal universities in Crimea, Russia."
      },
      {
        id: 6,
        name: "Orel State Medical University",
        country: "Russia",
        city: "Orel",
        tuitionFee: 4600,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/RUSSIA/OREL.jpg",
        facilities: ["Modern Laboratories", "Clinical Hospital", "Library", "Student Hostel"],
        rating: 4.0,
        description: "Known for its quality medical education and clinical training programs."
      },
      {
        id: 7,
        name: "South Ural State Medical University",
        country: "Russia",
        city: "Chelyabinsk",
        tuitionFee: 4900,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/RUSSIA/SOUTHURAL.jpg",
        facilities: ["Research Centers", "University Hospital", "Digital Library", "Sports Facilities"],
        rating: 4.2,
        description: "Offers comprehensive medical education with modern teaching methodologies."
      },
      {
        id: 8,
        name: "Tver State Medical University",
        country: "Russia",
        city: "Tver",
        tuitionFee: 4700,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/RUSSIA/TVER.jpg",
        facilities: ["Anatomy Museum", "Simulation Center", "University Clinics", "Student Dormitories"],
        rating: 4.3,
        description: "One of the oldest medical universities in Russia with strong academic traditions."
      },
      {
        id: 9,
        name: "Kabardino Balkarian State University",
        country: "Russia",
        city: "Nalchik",
        tuitionFee: 4400,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/RUSSIA/KABARDINO.jpg",
        facilities: ["Medical Complex", "Library", "Laboratory", "Accommodation"],
        rating: 4.0,
        description: "Located in the picturesque city of Nalchik, offering affordable medical education."
      },
      {
        id: 10,
        name: "Ulyanovsk State University",
        country: "Russia",
        city: "Ulyanovsk",
        tuitionFee: 4600,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/RUSSIA/ULYANOVSK.jpg",
        facilities: ["Medical Institute", "Scientific Library", "Clinical Bases", "International Center"],
        rating: 4.1,
        description: "A multidisciplinary university with strong emphasis on medical education and research."
      },
      {
        id: 11,
        name: "Orenburg State Medical University",
        country: "Russia",
        city: "Orenburg",
        tuitionFee: 4700,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/RUSSIA/ORENBURG.jpg",
        facilities: ["Teaching Hospital", "Simulation Center", "Research Laboratories", "Student Hostels"],
        rating: 4.2,
        description: "Established medical university with a strong focus on clinical practice and research."
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
                    desc: "Apply for a student visa at the Russian embassy/consulate with the invitation letter and other required documents."
                  },
                  {
                    step: "Travel & Enrollment",
                    desc: "Travel to Russia and complete the admission formalities at the university."
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
      { name: "Tuition Fee (per year)", cost: "4,500 - 7,000 USD" },
      { name: "Hostel Fee (per year)", cost: "800 - 1,200 USD" },
      { name: "Food Expenses (per month)", cost: "150 - 300 USD" },
      { name: "Miscellaneous (per year)", cost: "500 - 800 USD" },
      { name: "Total Cost for 6 Years", cost: "Approx. 35,000 - 45,000 USD", isHighlighted: true }
    ],
    faqs: [
      {
        question: "Is MBBS from Russia recognized in India?",
        answer: "Yes, MBBS degrees from Russian medical universities recognized by the National Medical Commission (NMC) are accepted in India. Graduates need to clear the NEXT (National Exit Test) to practice medicine in India."
      },
      {
        question: "What is the cost of studying MBBS in Russia?",
        answer: "The tuition fees for MBBS in Russia range from $3,500 to $7,000 per year depending on the university. Living expenses are approximately $150-300 per month, making it one of the most affordable options for medical education globally."
      },
      {
        question: "Do I need to learn Russian for MBBS studies?",
        answer: "Many Russian universities offer MBBS programs in English medium. However, learning basic Russian is beneficial for daily communication and patient interactions during clinical rotations. Universities typically offer Russian language courses in the first year."
      },
      {
        question: "Are entrance exams required for admission?",
        answer: "No entrance exams like IELTS or TOEFL are required for admission to Russian medical universities. However, students need to meet the minimum eligibility criteria of 50% marks in Physics, Chemistry, and Biology in 12th standard."
      }
    ]
  };

  try {
    console.log("Rendering MBBSRussiaPage with data:", countryData);
    return <MBBSCountryTemplate {...countryData} />;
  } catch (error) {
    console.error("Error rendering MBBSRussiaPage:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p>We're having trouble loading this page. Please try refreshing.</p>
        </div>
      </div>
    );
  }
};

export default MBBSRussiaPage;
