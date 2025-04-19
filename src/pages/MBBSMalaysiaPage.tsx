import { useEffect } from "react";
import MBBSCountryTemplate from "@/templates/MBBSCountryTemplate";

const MBBSMalaysiaPage = () => {
  // Country-specific data
  const countryData = {
    countryName: "Malaysia",
    heroImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    countryDescription: [
      "Malaysia has emerged as a preferred destination for medical education due to its high-quality educational system, advanced infrastructure, and globally recognized degrees. The country offers a unique blend of eastern and western medical practices, providing students with a comprehensive understanding of global healthcare systems.",
      "Malaysian medical universities follow a curriculum that is recognized by various international medical councils including the National Medical Commission (NMC) of India. The MBBS programs in Malaysia are designed to provide students with both theoretical knowledge and practical clinical experience, preparing them for a successful career in medicine."
    ],
    degreeAwarded: "MBBS (Bachelor of Medicine and Bachelor of Surgery)",
    duration: "5 years (including 1 year internship)",
    teachingMedium: "English",
    eligibilityCriteria: "50% in PCB (Physics, Chemistry, Biology) in 12th",
    advantages: [
      { text: "Globally recognized medical degrees" },
      { text: "High-quality education at affordable costs" },
      { text: "English medium instruction throughout the course" },
      { text: "Modern infrastructure and advanced technology" },
      { text: "Multicultural environment and exposure" },
      { text: "Strong clinical training with partner hospitals" },
      { text: "Safe and hospitable environment for international students" },
      { text: "Opportunity to explore diverse Asian cultures" }
    ],
    colleges: [
      {
        id: 42,
        name: "Lincoln University College",
        country: "Malaysia",
        city: "Petaling Jaya",
        tuitionFee: 42000,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/MALAYSIA/LINCOLN.jpg",
        facilities: ["Library", "Laboratory", "Cafeteria", "Accommodation"],
        rating: 4.4,
        description: "Lincoln University College is a premier institution offering quality medical education in Malaysia."
      },
      {
        id: 43,
        name: "MAHSA University",
        country: "Malaysia",
        city: "Kuala Lumpur",
        tuitionFee: 42000,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/MALAYSIA/MAHSA.jpg",
        facilities: ["Library", "Laboratory", "Hospital", "Sports Complex"],
        rating: 4.5,
        description: "MAHSA University is a leading medical university in Malaysia offering world-class education with state-of-the-art facilities."
      },
      {
        id: 44,
        name: "Manipal International University",
        country: "Malaysia",
        city: "Nilai",
        tuitionFee: 45000,
        currency: "USD",
        image: "/UNIVERSITY IMAGES/MALAYSIA/MANIPAL.jpg",
        facilities: ["Library", "Laboratory", "Hospital", "Research Center"],
        rating: 4.6,
        description: "Manipal International University offers high-quality medical education with a focus on clinical skills and modern teaching methodologies."
      }
    ],
    admissionProcess: [
                  {
                    step: "Research and Select Universities",
                    desc: "Research various medical universities in Malaysia and select the ones that best match your requirements and budget."
                  },
                  {
                    step: "Check Eligibility Criteria",
                    desc: "Ensure you meet the eligibility criteria of the selected universities, including academic qualifications and entrance exams."
                  },
                  {
                    step: "Prepare for Entrance Exams",
                    desc: "Some universities may require you to clear specific entrance exams or interviews. Prepare accordingly."
                  },
                  {
                    step: "Apply to Universities",
                    desc: "Submit your application to the selected universities along with all required documents."
                  },
                  {
                    step: "Attend Interviews",
                    desc: "If shortlisted, you may be required to attend interviews either in person or online."
                  },
                  {
                    step: "Receive Offer Letter",
                    desc: "Upon successful selection, you will receive an offer letter from the university."
      }
    ],
    eligibilityItems: [
      { text: "Completion of 12th grade with Physics, Chemistry, and Biology" },
      { text: "Minimum 50% aggregate in PCB (Physics, Chemistry, Biology) in 12th grade" },
      { text: "NEET qualification for Indian students (as per NMC guidelines)" },
      { text: "English proficiency tests like IELTS/TOEFL (requirements vary by university)" },
      { text: "Minimum age of 17 years at the time of admission" },
      { text: "Clearing university-specific entrance tests or interviews if required" }
    ],
    documents: [
      { text: "10th Mark Sheet" },
      { text: "12th Mark Sheet" },
      { text: "NEET Score Card (for Indian students)" },
      { text: "Passport (with minimum 1 year validity)" },
      { text: "Passport-sized Photographs" },
      { text: "Birth Certificate" },
      { text: "Medical Certificate" },
      { text: "English Proficiency Test Score (if required)" },
      { text: "Statement of Purpose" },
      { text: "Letter of Recommendation (if required)" }
    ],
    feeStructure: [
      { name: "Tuition Fee (per year)", cost: "40,000 - 45,000 USD" },
      { name: "Hostel Fee (per year)", cost: "4,000 - 6,000 USD" },
      { name: "Food Expenses (per month)", cost: "300 - 500 USD" },
      { name: "Miscellaneous (per year)", cost: "2,000 - 3,000 USD" },
      { name: "Total Cost for 5 Years", cost: "Approx. 230,000 - 270,000 USD", isHighlighted: true }
    ],
    faqs: [
      {
        question: "Is an MBBS from Malaysia recognized in India?",
        answer: "Yes, MBBS degrees from recognized Malaysian universities are accepted by the National Medical Commission (NMC) in India, provided they meet the necessary criteria. Graduates must qualify the NEXT (National Exit Test) to practice medicine in India."
      },
      {
        question: "What is the medium of instruction in Malaysian medical universities?",
        answer: "The medium of instruction in Malaysian medical universities is English, making it convenient for international students to adapt to the educational environment without language barriers."
      },
      {
        question: "How much does it cost to study MBBS in Malaysia?",
        answer: "The tuition fees for MBBS in Malaysia typically range from $40,000 to $45,000 per year. Including living expenses and other costs, the total investment for the 5-year program would be approximately $230,000 to $270,000."
      },
      {
        question: "Are scholarships available for international students in Malaysia?",
        answer: "Yes, many Malaysian universities offer scholarships and financial aid for international students based on academic merit and other criteria. Additionally, there are government and private scholarships available for medical studies in Malaysia."
      }
    ]
  };

  return <MBBSCountryTemplate {...countryData} />;
};

export default MBBSMalaysiaPage;