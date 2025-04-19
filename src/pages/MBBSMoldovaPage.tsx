import { useEffect } from "react";
import MBBSCountryTemplate from "@/templates/MBBSCountryTemplate";

export default function MBBSMoldovaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Country-specific data
  const countryData = {
    countryName: "Moldova",
    heroImage: "/UNIVERSITY IMAGES/MOLDOVA/Moldova.jpg",
    countryDescription: [
      "Moldova, officially the Republic of Moldova, offers an excellent opportunity for international students seeking quality medical education at affordable costs. The country's medical universities are recognized by major medical councils worldwide, including the World Health Organization (WHO), UNESCO, and the National Medical Commission (NMC).",
      "Medical education in Moldova follows the European education system and offers programs taught in English, making it accessible for international students. The medical degree from Moldova is globally recognized, allowing graduates to practice medicine worldwide after clearing the necessary licensing exams.",
      "The cost of MBBS education in Moldova is significantly lower compared to many Western countries, making it a financially viable option for international students. Additionally, the comfortable living conditions, safe environment, and European cultural experience add to the appeal of studying MBBS in Moldova."
    ],
    degreeAwarded: "Doctor of Medicine (MD)",
    duration: "6 years (including internship)",
    teachingMedium: "English",
    eligibilityCriteria: "Minimum 50% in Physics, Chemistry, and Biology in 10+2 (NEET qualified for Indian students)",
    advantages: [
      { text: "Globally recognized medical degree from universities listed in the World Directory of Medical Schools" },
      { text: "Affordable tuition fees compared to Western countries" },
      { text: "English-medium instruction eliminates language barriers" },
      { text: "Modern teaching methodology with practical training" },
      { text: "No donation or capitation fees" },
      { text: "Simple admission process with no entrance exam (NEET qualification required for Indian students)" },
      { text: "Safe environment with low crime rate" },
      { text: "European lifestyle and cultural exposure" },
      { text: "High-quality education with experienced faculty" },
      { text: "Well-equipped laboratories and hospitals for clinical training" }
    ],
    colleges: [
      {
        id: 26,
        name: "Nicolae Testemitanu State University of Medicine and Pharmacy",
        country: "Moldova",
        city: "Chisinau",
        location: "Chisinau, Moldova",
        tuitionFee: 5500,
        currency: "$",
        rating: 4.5,
        image: "/UNIVERSITY IMAGES/MOLDOVA/NICOLAE.png",
        facilities: ["Modern Laboratories", "Digital Library", "Simulation Center", "University Hospital"],
        description: "One of the leading medical universities in Moldova with modern facilities and excellent clinical training.",
        annualFees: "$5,000 - $6,000",
        detailsLink: "/universities/nicolae-testemitanu"
      }
    ],
    admissionProcess: [
      {
        step: "Application Submission",
        desc: "Submit your application form along with necessary documents to the university or through authorized representatives."
      },
      {
        step: "Document Verification",
        desc: "The university will verify your documents and academic qualifications."
                  },
                  {
                    step: "Invitation Letter",
        desc: "Upon successful verification, the university will issue an official invitation letter."
                  },
                  {
                    step: "Visa Application",
        desc: "Apply for a student visa at the Moldovan embassy/consulate in your country with the invitation letter."
      },
      {
        step: "Fee Payment",
        desc: "Pay the tuition fees as per the university's payment schedule."
      },
      {
        step: "Travel Arrangements",
        desc: "Make travel arrangements to Moldova after receiving your visa."
      },
      {
        step: "University Registration",
        desc: "Complete the registration process at the university upon arrival in Moldova."
      }
    ],
    eligibilityItems: [
      { text: "Minimum 50% aggregate in Physics, Chemistry, and Biology in 10+2 or equivalent" },
      { text: "NEET qualification is mandatory for Indian students" },
      { text: "Minimum 17 years of age (as of December 31st of the admission year)" },
      { text: "Good health status with no serious medical conditions" },
      { text: "English proficiency (as courses are taught in English)" }
    ],
    documents: [
      { text: "10th and 12th grade mark sheets and certificates" },
      { text: "NEET scorecard (for Indian students)" },
      { text: "Valid passport with at least 18 months validity" },
      { text: "Passport-sized photographs" },
      { text: "Birth certificate" },
      { text: "Medical fitness certificate" },
      { text: "Character certificate" },
      { text: "Bank statement showing financial capability" },
      { text: "HIV test report" },
      { text: "English proficiency certificate (if applicable)" }
    ],
    feeStructure: [
      { name: "Tuition Fee (per year)", cost: "$4,000 - $6,000", isHighlighted: true },
      { name: "Hostel Accommodation (per year)", cost: "$1,000 - $1,500" },
      { name: "Food Expenses (per year)", cost: "$1,200 - $1,800" },
      { name: "Medical Insurance (per year)", cost: "$200 - $300" },
      { name: "Miscellaneous Expenses (per year)", cost: "$800 - $1,200" },
      { name: "One-time Admission Fee", cost: "$200 - $500" },
      { name: "Total Estimated Cost (for 6 years)", cost: "$36,000 - $54,000", isHighlighted: true }
    ],
    faqs: [
      {
        question: "Is MBBS from Moldova recognized worldwide?",
        answer: "Yes, MBBS (MD) degrees from Moldovan universities are recognized worldwide, including by the WHO, UNESCO, and various national medical councils. Graduates can practice medicine globally after clearing the respective licensing exams of the country where they wish to practice."
      },
      {
        question: "Is NEET mandatory for Indian students to study MBBS in Moldova?",
        answer: "Yes, as per the guidelines of the National Medical Commission (NMC) of India, Indian students must qualify in the NEET exam to pursue MBBS abroad, including in Moldova."
      },
      {
        question: "What is the medium of instruction for MBBS in Moldova?",
        answer: "The medium of instruction for international students is English. Students don't need to learn the local language for academic purposes, though basic knowledge of Romanian or Russian might be helpful for daily interactions."
      },
      {
        question: "What is the duration of the MBBS program in Moldova?",
        answer: "The MBBS program in Moldova typically lasts 6 years, including a one-year internship or clinical rotations."
      },
      {
        question: "How much does it cost to study MBBS in Moldova?",
        answer: "The tuition fees for MBBS in Moldova range from $4,000 to $6,000 per year. The total cost, including accommodation, food, and other expenses, might be around $7,000 to $10,000 per year."
      },
      {
        question: "Are there any scholarships available for international students?",
        answer: "Some Moldovan universities offer scholarships based on academic merit. Additionally, there might be government scholarships or financial aid options available for international students. It's advisable to check with specific universities or authorized representatives."
      },
      {
        question: "How is the accommodation facility in Moldova?",
        answer: "Most universities in Moldova provide hostel accommodation for international students. These hostels are equipped with basic amenities and are generally affordable. Students can also opt for private apartments if they prefer."
      },
      {
        question: "Is Moldova safe for international students?",
        answer: "Yes, Moldova is considered safe for international students. The crime rate is low, and universities take measures to ensure the safety and well-being of their students."
      }
    ]
  };

  return <MBBSCountryTemplate {...countryData} />;
}