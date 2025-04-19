import MBBSCountryTemplate from "@/templates/MBBSCountryTemplate";

const MBBSUzbekistanPage = () => {
  // Country-specific data
  const countryData = {
    countryName: "Uzbekistan",
    heroImage: "/UNIVERSITY IMAGES/UZBEKISTAN/Uzbekistan.jpeg",
    countryDescription: [
      "Uzbekistan, located in Central Asia, has emerged as a promising destination for international students seeking quality medical education. The country's medical universities offer internationally recognized programs with advanced teaching methodologies and state-of-the-art infrastructure.",
      "Uzbekistani medical universities are recognized globally by prestigious organizations including the World Health Organization (WHO), UNESCO, and medical councils of various countries including India's National Medical Commission (NMC). The robust medical education system in Uzbekistan follows high standards of teaching with a modern curriculum that combines theoretical knowledge with practical clinical experience."
    ],
    degreeAwarded: "M.D. (Doctor of Medicine)",
    duration: "6 years (including 1 year internship)",
    teachingMedium: "English (with local language training)",
    eligibilityCriteria: "50% in PCB (Physics, Chemistry, Biology) in 12th",
    advantages: [
      { text: "Affordable tuition fees starting from 3,500 USD per year" },
      { text: "No entrance exams like IELTS or TOEFL required" },
      { text: "Global recognition by WHO, UNESCO, and NMC" },
      { text: "Modern infrastructure and advanced teaching facilities" },
      { text: "Practical-oriented medical education" },
      { text: "Internationally diverse student environment" },
      { text: "Safe and student-friendly environment" },
      { text: "Affordable living costs (200-300 USD per month)" }
    ],
    colleges: [
      {
        id: 31,
        name: "Tashkent Medical Academy",
        country: "Uzbekistan",
        city: "Tashkent",
        tuitionFee: 5000,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/UZBEKISTAN/TASHKENT.jpg",
        facilities: ["Hospital", "Laboratory", "Library", "Sports Complex"],
        rating: 4.3,
        description: "Leading medical institution with modern facilities and diverse international environment."
      },
      {
        id: 29,
        name: "Andijan State Medical Institute",
        country: "Uzbekistan",
        city: "Andijan",
        tuitionFee: 4800,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/UZBEKISTAN/ANDIJAN.jpg",
        facilities: ["Hospital", "Laboratory", "Library", "Student Accommodation"],
        rating: 4.2,
        description: "Well-established medical institute with modern facilities and quality education."
      },
      {
        id: 30,
        name: "Bukhara State Medical Institute",
        country: "Uzbekistan",
        city: "Bukhara",
        tuitionFee: 4700,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/UZBEKISTAN/BUKHARA.jpg",
        facilities: ["Hospital", "Library", "Laboratories", "Student Center"],
        rating: 4.1,
        description: "Known for quality medical education and research opportunities."
      }
    ],
    admissionProcess: [
                  {
                    step: "Document Preparation",
                    desc: "Prepare all required documents including 10th and 12th mark sheets, passport, passport-sized photographs, and medical certificate."
                  },
                  {
                    step: "University Selection",
                    desc: "Choose the right medical university in Uzbekistan based on your preferences, budget, and location."
                  },
                  {
                    step: "Application Submission",
                    desc: "Submit the application form along with the required documents to the university or through an authorized representative."
                  },
                  {
                    step: "Admission Letter",
                    desc: "After document verification, receive an official invitation letter from the university."
                  },
                  {
                    step: "Visa Application",
                    desc: "Apply for a student visa at the Uzbekistan embassy or consulate in your country with the invitation letter."
                  },
                  {
                    step: "Travel Arrangements",
                    desc: "Make travel arrangements and prepare for your journey to Uzbekistan."
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
      { text: "Passport (with minimum 18 months validity)" },
      { text: "Passport-sized Photographs" },
      { text: "Medical Certificate" },
      { text: "Birth Certificate" },
      { text: "HIV Test Report" }
    ],
    feeStructure: [
      { name: "Tuition Fee (per year)", cost: "3,500 - 5,000 USD" },
      { name: "Hostel Fee (per year)", cost: "800 - 1,200 USD" },
      { name: "Food Expenses (per month)", cost: "100 - 150 USD" },
      { name: "Miscellaneous (per year)", cost: "500 - 800 USD" },
      { name: "Total Cost for 6 Years", cost: "Approx. 30,000 - 40,000 USD", isHighlighted: true }
    ],
    faqs: [
      {
        question: "Is MBBS from Uzbekistan recognized worldwide?",
        answer: "Yes, medical degrees from Uzbekistan universities are recognized by WHO, UNESCO, and medical councils of various countries including India's NMC."
      },
      {
        question: "What is the medium of instruction in Uzbekistan?",
        answer: "Most medical universities in Uzbekistan offer MBBS programs in English for international students. Some universities also provide local language training as part of the curriculum."
      },
      {
        question: "How much does it cost to study MBBS in Uzbekistan?",
        answer: "The average tuition fee ranges from 3,500 to 5,000 USD per year. The total cost including accommodation and living expenses is approximately 6,000 to 8,000 USD per year."
      },
      {
        question: "Is NEET mandatory for Indian students?",
        answer: "Yes, NEET qualification is mandatory for Indian students planning to study MBBS in Uzbekistan, as per the guidelines of the National Medical Commission (NMC)."
      },
      {
        question: "Is Uzbekistan safe for international students?",
        answer: "Yes, Uzbekistan is considered one of the safest countries in Central Asia with low crime rates. Universities also have security measures in place to ensure student safety."
      }
    ]
  };

  return <MBBSCountryTemplate {...countryData} />;
};

export default MBBSUzbekistanPage; 