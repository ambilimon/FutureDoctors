export interface University {
  id: string;
  name: string;
  country: string;
  city: string;
  established?: string;
  description?: string;
  tuitionFee?: {
    amount: number;
    currency: string;
  };
  duration: string;
  language: string;
  recognition: string[];
  facilities: string[];
  image: string;
  hostelAvailable: boolean;
  intake: string[];
  ranking?: string;
  totalStudents?: string;
  indianStudents?: string;
  coursesOffered?: string[];
  category?: string;
  location?: string;
}

// Define facility options for filtering
export const facilityOptions = [
  "Library",
  "Laboratory",
  "Hospital",
  "Hostel",
  "Sports Complex",
  "Research Center",
  "Digital Library",
  "Cafeteria",
  "Wi-Fi Campus",
  "Auditorium",
  "Student Lounge",
  "Simulation Centers",
  "Modern Laboratories",
  "Clinical Facilities",
  "Student Dormitories"
];

export const universities: University[] = [
  // RUSSIA
  {
    id: "1",
    name: "Altai State Medical University",
    country: "Russia",
    city: "Barnaul",
    established: "1954",
    description: "One of the leading medical universities in Siberia with modern facilities and strong clinical training.",
    tuitionFee: {
      amount: 4500,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "IMED"],
    facilities: ["Modern Labs", "Digital Library", "Sports Complex", "Hostel"],
    image: "/UNIVERSITY IMAGES/RUSSIA/ALTAI.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "2",
    name: "Bashkir State Medical University",
    country: "Russia",
    city: "Ufa",
    established: "1932",
    description: "Renowned medical institution with excellent research facilities and clinical exposure.",
    tuitionFee: {
      amount: 4300,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "IMED"],
    facilities: ["Research Centers", "Modern Labs", "Clinical Base"],
    image: "/UNIVERSITY IMAGES/RUSSIA/BASHKIR.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "3",
    name: "Mari State University",
    country: "Russia",
    city: "Yoshkar-Ola",
    established: "1972",
    description: "Comprehensive medical education with strong emphasis on practical training.",
    tuitionFee: {
      amount: 4200,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "IMED"],
    facilities: ["Clinical Base", "Research Labs", "Student Housing"],
    image: "/UNIVERSITY IMAGES/RUSSIA/MARI.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "4",
    name: "Syktyvkar State University",
    country: "Russia",
    city: "Syktyvkar",
    established: "1972",
    description: "Modern medical education with focus on practical skills and research.",
    tuitionFee: {
      amount: 4300,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "IMED"],
    facilities: ["Modern Campus", "Research Centers", "Hostels"],
    image: "/UNIVERSITY IMAGES/RUSSIA/SYKTYVKAR.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "5",
    name: "V.I Vernadsky Crimean Federal University",
    country: "Russia",
    city: "Simferopol",
    established: "1918",
    description: "Historic university with modern medical facilities and strong international connections.",
    tuitionFee: {
      amount: 4400,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "IMED"],
    facilities: ["Modern Labs", "University Hospital", "Research Centers"],
    image: "/UNIVERSITY IMAGES/RUSSIA/VERNADSKY.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "6",
    name: "Orel State Medical University",
    country: "Russia",
    city: "Orel",
    established: "1960",
    description: "Quality medical education with strong emphasis on clinical practice.",
    tuitionFee: {
      amount: 4200,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "IMED"],
    facilities: ["Clinical Base", "Modern Labs", "Student Housing"],
    image: "/UNIVERSITY IMAGES/RUSSIA/OREL.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "7",
    name: "South Ural State Medical University",
    country: "Russia",
    city: "Chelyabinsk",
    established: "1944",
    description: "Leading medical university with advanced research facilities.",
    tuitionFee: {
      amount: 4400,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "IMED"],
    facilities: ["Research Centers", "Modern Labs", "University Hospital"],
    image: "/UNIVERSITY IMAGES/RUSSIA/SOUTHURAL.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "8",
    name: "Tver State Medical University",
    country: "Russia",
    city: "Tver",
    established: "1954",
    description: "Well-established medical university with strong clinical training program.",
    tuitionFee: {
      amount: 4300,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "IMED"],
    facilities: ["Clinical Base", "Research Labs", "Modern Campus"],
    image: "/UNIVERSITY IMAGES/RUSSIA/TVERSM.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "9",
    name: "Kabardino Balkarian State University",
    country: "Russia",
    city: "Nalchik",
    established: "1957",
    description: "Modern medical education with focus on practical training.",
    tuitionFee: {
      amount: 4200,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "IMED"],
    facilities: ["Modern Labs", "Clinical Training", "Student Housing"],
    image: "/UNIVERSITY IMAGES/RUSSIA/KABARDINO.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "10",
    name: "Ulyanovsk State University",
    country: "Russia",
    city: "Ulyanovsk",
    established: "1988",
    description: "Progressive medical university with modern teaching methods.",
    tuitionFee: {
      amount: 4300,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "IMED"],
    facilities: ["Modern Campus", "Research Labs", "Clinical Base"],
    image: "/UNIVERSITY IMAGES/RUSSIA/ULYANOVSK.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "11",
    name: "Orenburg State Medical University",
    country: "Russia",
    city: "Orenburg",
    established: "1944",
    description: "Renowned medical university with excellent clinical exposure.",
    tuitionFee: {
      amount: 4400,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "IMED"],
    facilities: ["University Hospital", "Research Centers", "Modern Labs"],
    image: "/UNIVERSITY IMAGES/RUSSIA/ORENBURG.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },

  // GEORGIA
  {
    id: "12",
    name: "Batumi Shota Rustaveli State University",
    country: "Georgia",
    city: "Batumi",
    established: "1935",
    description: "Leading Georgian university with excellent medical program and modern facilities.",
    tuitionFee: {
      amount: 5000,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Labs", "Research Centers", "Clinical Base"],
    image: "/UNIVERSITY IMAGES/GEORGIA/BATUMI.jpg",
    hostelAvailable: true,
    intake: ["September", "February"]
  },
  {
    id: "13",
    name: "Caucasus International University",
    country: "Georgia",
    city: "Tbilisi",
    established: "1995",
    description: "Modern medical university with international standards and quality education.",
    tuitionFee: {
      amount: 5500,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Labs", "Library", "Clinical Base"],
    image: "/UNIVERSITY IMAGES/GEORGIA/CAUCASUS.jpeg",
    hostelAvailable: true,
    intake: ["September", "February"]
  },
  {
    id: "14",
    name: "European University",
    country: "Georgia",
    city: "Tbilisi",
    established: "2012",
    description: "Progressive medical education with European standards.",
    tuitionFee: {
      amount: 5000,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Infrastructure", "Research Labs", "Clinical Training"],
    image: "/UNIVERSITY IMAGES/GEORGIA/EUROPEAN.jpg",
    hostelAvailable: true,
    intake: ["September", "February"]
  },
  {
    id: "15",
    name: "Georgian National University (SEU)",
    country: "Georgia",
    city: "Tbilisi",
    established: "2001",
    description: "Leading private university offering comprehensive medical education.",
    tuitionFee: {
      amount: 5200,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Campus", "Research Centers", "Clinical Base"],
    image: "/UNIVERSITY IMAGES/GEORGIA/SEU.jpg",
    hostelAvailable: true,
    intake: ["September", "February"]
  },
  {
    id: "16",
    name: "Tbilisi State Medical University",
    country: "Georgia",
    city: "Tbilisi",
    established: "1918",
    description: "Oldest and most prestigious medical university in Georgia.",
    tuitionFee: {
      amount: 5500,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["University Hospital", "Research Labs", "Modern Infrastructure"],
    image: "/UNIVERSITY IMAGES/GEORGIA/TBILISI.jpg",
    hostelAvailable: true,
    intake: ["September", "February"]
  },

  // PHILIPPINES
  {
    id: "17",
    name: "Lyceum of the Philippines University",
    country: "Philippines",
    city: "Manila",
    established: "1952",
    description: "Premier institution known for its modern approach to medical education.",
    tuitionFee: {
      amount: 4000,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "CHED"],
    facilities: ["Modern Labs", "Research Center", "Clinical Training"],
    image: "/UNIVERSITY IMAGES/PHILIPPINES/LYCEUM.jpg",
    hostelAvailable: true,
    intake: ["June", "November"]
  },
  {
    id: "18",
    name: "Davao Medical School Foundation",
    country: "Philippines",
    city: "Davao",
    established: "1976",
    description: "Leading medical school in Mindanao with excellent clinical exposure.",
    tuitionFee: {
      amount: 4500,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "CHED"],
    facilities: ["Hospital Training", "Research Center", "Modern Labs"],
    image: "/UNIVERSITY IMAGES/PHILIPPINES/DAVAO.jpg",
    hostelAvailable: true,
    intake: ["June", "November"]
  },
  {
    id: "19",
    name: "Emilio Aguinaldo Medical Center",
    country: "Philippines",
    city: "Cavite",
    established: "1957",
    description: "Renowned medical center with strong focus on clinical practice.",
    tuitionFee: {
      amount: 4300,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "CHED"],
    facilities: ["Medical Center", "Research Labs", "Modern Campus"],
    image: "/UNIVERSITY IMAGES/PHILIPPINES/EMILIO.jpeg",
    hostelAvailable: true,
    intake: ["June", "November"]
  },
  {
    id: "20",
    name: "Our Lady of Fatima University",
    country: "Philippines",
    city: "Valenzuela",
    established: "1967",
    description: "Renowned for quality medical education and modern facilities.",
    tuitionFee: {
      amount: 4800,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "CHED"],
    facilities: ["Modern Campus", "Research Labs", "Teaching Hospital"],
    image: "/UNIVERSITY IMAGES/PHILIPPINES/FATIMA.jpeg",
    hostelAvailable: true,
    intake: ["June", "November"]
  },
  {
    id: "21",
    name: "UV Gullas College of Medicine",
    country: "Philippines",
    city: "Cebu",
    established: "1919",
    description: "Historic institution with modern medical education approach.",
    tuitionFee: {
      amount: 4600,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "CHED"],
    facilities: ["Modern Labs", "Hospital Training", "Research Center"],
    image: "/UNIVERSITY IMAGES/PHILIPPINES/UVGULLAS.png",
    hostelAvailable: true,
    intake: ["June", "November"]
  },
  {
    id: "22",
    name: "University of Perpetual Help System",
    country: "Philippines",
    city: "Las Piñas",
    established: "1975",
    description: "Comprehensive medical education with strong clinical training.",
    tuitionFee: {
      amount: 4400,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "CHED"],
    facilities: ["Teaching Hospital", "Research Labs", "Modern Campus"],
    image: "/UNIVERSITY IMAGES/PHILIPPINES/PERPETUAL.jpeg",
    hostelAvailable: true,
    intake: ["June", "November"]
  },

  // BELARUS
  {
    id: "23",
    name: "Belarusian State Medical University",
    country: "Belarus",
    city: "Minsk",
    established: "1921",
    description: "One of the oldest and most prestigious medical universities in Belarus.",
    tuitionFee: {
      amount: 5000,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Labs", "Research Centers", "University Hospital"],
    image: "/UNIVERSITY IMAGES/BELARUS/BSMU.jpeg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "24",
    name: "Grodno State Medical University",
    country: "Belarus",
    city: "Grodno",
    established: "1958",
    description: "Leading medical university known for its excellent clinical training.",
    tuitionFee: {
      amount: 4800,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Clinical Base", "Research Labs", "Modern Campus"],
    image: "/UNIVERSITY IMAGES/BELARUS/GRODNO.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "25",
    name: "Vitebsk State Medical University",
    country: "Belarus",
    city: "Vitebsk",
    established: "1934",
    description: "Renowned for its high-quality medical education and research facilities.",
    tuitionFee: {
      amount: 4900,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Labs", "Teaching Hospital", "Research Centers"],
    image: "/UNIVERSITY IMAGES/BELARUS/VITEBSK.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },

  // MOLDOVA
  {
    id: "26",
    name: "Nicolae Testemitanu State University of Medicine and Pharmacy",
    country: "Moldova",
    city: "Chisinau",
    established: "1945",
    description: "Leading medical university in Moldova with strong European connections.",
    tuitionFee: {
      amount: 5200,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Labs", "University Hospital", "Research Centers"],
    image: "/UNIVERSITY IMAGES/MOLDOVA/NICOLAE.png",
    hostelAvailable: true,
    intake: ["September"]
  },

  // BULGARIA
  {
    id: "27",
    name: "Medical University Pleven",
    country: "Bulgaria",
    city: "Pleven",
    established: "1974",
    description: "Modern medical university with advanced training facilities.",
    tuitionFee: {
      amount: 6000,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Virtual Medical Center", "Modern Labs", "University Hospital"],
    image: "/UNIVERSITY IMAGES/BULGARIA/PLEVEN.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },

  // BOSNIA
  {
    id: "28",
    name: "University of East Sarajevo",
    country: "Bosnia",
    city: "East Sarajevo",
    established: "1992",
    description: "Quality medical education with modern European standards.",
    tuitionFee: {
      amount: 5500,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Campus", "Research Labs", "Clinical Training"],
    image: "/UNIVERSITY IMAGES/BOSNIA/EASTSARAJEVO.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },

  // UZBEKISTAN
  {
    id: "29",
    name: "Andijan State Medical Institute",
    country: "Uzbekistan",
    city: "Andijan",
    established: "1955",
    description: "Leading medical institute in Uzbekistan with modern facilities.",
    tuitionFee: {
      amount: 4500,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Labs", "Teaching Hospital", "Research Center"],
    image: "/UNIVERSITY IMAGES/UZBEKISTAN/ANDIJAN.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "30",
    name: "Bukhara State Medical Institute",
    country: "Uzbekistan",
    city: "Bukhara",
    established: "1990",
    description: "Known for quality medical education and clinical training.",
    tuitionFee: {
      amount: 4300,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Campus", "Clinical Base", "Research Labs"],
    image: "/UNIVERSITY IMAGES/UZBEKISTAN/BUKHARA.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "31",
    name: "Tashkent Medical Academy",
    country: "Uzbekistan",
    city: "Tashkent",
    established: "1930",
    description: "Historic medical institute with modern educational standards.",
    tuitionFee: {
      amount: 4400,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["University Hospital", "Research Centers", "Modern Labs"],
    image: "/UNIVERSITY IMAGES/UZBEKISTAN/TASHKENT.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },

  // KAZAKHSTAN
  {
    id: "32",
    name: "Al-Farabi National University",
    country: "Kazakhstan",
    city: "Almaty",
    established: "1931",
    description: "Premier medical university in Kazakhstan with international standards.",
    tuitionFee: {
      amount: 5000,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Labs", "Teaching Hospital", "Research Centers"],
    image: "/UNIVERSITY IMAGES/KAZAKHSTAN/ALFARABI.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "33",
    name: "Astana Medical University",
    country: "Kazakhstan",
    city: "Astana",
    established: "1964",
    description: "Leading medical university in the capital with modern infrastructure.",
    tuitionFee: {
      amount: 4800,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Campus", "Clinical Base", "Research Labs"],
    image: "/UNIVERSITY IMAGES/KAZAKHSTAN/ASTANA.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "34",
    name: "Caspian International School of Medicine",
    country: "Kazakhstan",
    city: "Almaty",
    established: "1995",
    description: "Modern medical university with international standards and quality education.",
    tuitionFee: {
      amount: 5000,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Labs", "Research Centers", "Clinical Base"],
    image: "/UNIVERSITY IMAGES/KAZAKHSTAN/CASPIAN.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "35",
    name: "Kazakh National Medical University",
    country: "Kazakhstan",
    city: "Almaty",
    established: "1931",
    description: "Premier medical university in Kazakhstan with international standards.",
    tuitionFee: {
      amount: 5000,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Labs", "Teaching Hospital", "Research Centers"],
    image: "/UNIVERSITY IMAGES/KAZAKHSTAN/KAZAKH.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "36",
    name: "South Kazakhstan Medical Academy",
    country: "Kazakhstan",
    city: "Almaty",
    established: "1995",
    description: "Modern medical university with international standards and quality education.",
    tuitionFee: {
      amount: 5000,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Labs", "Research Centers", "Clinical Base"],
    image: "/UNIVERSITY IMAGES/KAZAKHSTAN/SOUTHKAZAKH.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "37",
    name: "University of International Business",
    country: "Kazakhstan",
    city: "Almaty",
    established: "1995",
    description: "Modern medical university with international standards and quality education.",
    tuitionFee: {
      amount: 5000,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Labs", "Research Centers", "Clinical Base"],
    image: "/UNIVERSITY IMAGES/KAZAKHSTAN/UIB.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },

  // KYRGYZSTAN
  {
    id: "38",
    name: "Asian Medical Institute",
    country: "Kyrgyzstan",
    city: "Kant",
    established: "2004",
    description: "Modern medical institute with focus on international students.",
    tuitionFee: {
      amount: 4200,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Labs", "Clinical Training", "Research Center"],
    image: "/UNIVERSITY IMAGES/KYRGYZSTAN/ASIAN.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "39",
    name: "Bishkek International Medical Institute",
    country: "Kyrgyzstan",
    city: "Bishkek",
    established: "2003",
    description: "Leading international medical school with modern facilities.",
    tuitionFee: {
      amount: 4300,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Campus", "Teaching Hospital", "Research Labs"],
    image: "/UNIVERSITY IMAGES/KYRGYZSTAN/BISHKEK.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "40",
    name: "International School of Medicine",
    country: "Kyrgyzstan",
    city: "Bishkek",
    established: "2003",
    description: "Leading international medical school with modern facilities.",
    tuitionFee: {
      amount: 4300,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Campus", "Teaching Hospital", "Research Labs"],
    image: "/UNIVERSITY IMAGES/KYRGYZSTAN/ISM.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "41",
    name: "Osh State Medical University",
    country: "Kyrgyzstan",
    city: "Osh",
    established: "1995",
    description: "Modern medical university with international standards and quality education.",
    tuitionFee: {
      amount: 5000,
      currency: "USD"
    },
    duration: "6 years",
    language: "English",
    recognition: ["WHO", "MCI", "ECFMG"],
    facilities: ["Modern Labs", "Research Centers", "Clinical Base"],
    image: "/UNIVERSITY IMAGES/KYRGYZSTAN/OSH.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },

  // MALAYSIA
  {
    id: "42",
    name: "Lincoln University College",
    country: "Malaysia",
    city: "Petaling Jaya",
    established: "2002",
    description: "Modern medical education with international standards.",
    tuitionFee: {
      amount: 7000,
      currency: "USD"
    },
    duration: "5 years",
    language: "English",
    recognition: ["WHO", "MCI", "MMC"],
    facilities: ["Modern Campus", "Research Labs", "Clinical Training"],
    image: "/UNIVERSITY IMAGES/MALAYSIA/LINCOLN.jpg",
    hostelAvailable: true,
    intake: ["March", "September"]
  },
  {
    id: "43",
    name: "MAHSA University",
    country: "Malaysia",
    city: "Kuala Lumpur",
    established: "1987",
    description: "Modern medical university with international standards and quality education.",
    tuitionFee: {
      amount: 7000,
      currency: "USD"
    },
    duration: "5 years",
    language: "English",
    recognition: ["WHO", "MCI", "MMC"],
    facilities: ["Modern Campus", "Research Labs", "Clinical Training"],
    image: "/UNIVERSITY IMAGES/MALAYSIA/MAHSA.jpg",
    hostelAvailable: true,
    intake: ["March", "September"]
  },
  {
    id: "44",
    name: "Manipal International University",
    country: "Malaysia",
    city: "Manipal",
    established: "1987",
    description: "Modern medical university with international standards and quality education.",
    tuitionFee: {
      amount: 7000,
      currency: "USD"
    },
    duration: "5 years",
    language: "English",
    recognition: ["WHO", "MCI", "MMC"],
    facilities: ["Modern Campus", "Research Labs", "Clinical Training"],
    image: "/UNIVERSITY IMAGES/MALAYSIA/MANIPAL.jpg",
    hostelAvailable: true,
    intake: ["March", "September"]
  },

  // NEPAL
  {
    id: "45",
    name: "Janaki Medical College",
    country: "Nepal",
    city: "Janakpur",
    established: "2003",
    description: "Quality medical education with strong clinical exposure.",
    tuitionFee: {
      amount: 4500,
      currency: "USD"
    },
    duration: "5.5 years",
    language: "English",
    recognition: ["WHO", "MCI", "NMC"],
    facilities: ["Teaching Hospital", "Modern Labs", "Research Center"],
    image: "/UNIVERSITY IMAGES/NEPAL/JANAKI.jpg",
    hostelAvailable: true,
    intake: ["September"]
  },
  {
    id: "46",
    name: "Kathmandu Medical College",
    country: "Nepal",
    city: "Kathmandu",
    established: "1995",
    description: "Modern medical university with international standards and quality education.",
    tuitionFee: {
      amount: 5000,
      currency: "USD"
    },
    duration: "5 years",
    language: "English",
    recognition: ["WHO", "MCI", "NMC"],
    facilities: ["Modern Campus", "Research Labs", "Clinical Training"],
    image: "/UNIVERSITY IMAGES/NEPAL/KATHMANDU.jpg",
    hostelAvailable: true,
    intake: ["March", "September"]
  },
  {
    id: "47",
    name: "Nepalgunj Medical College",
    country: "Nepal",
    city: "Nepalgunj",
    established: "1995",
    description: "Modern medical university with international standards and quality education.",
    tuitionFee: {
      amount: 5000,
      currency: "USD"
    },
    duration: "5 years",
    language: "English",
    recognition: ["WHO", "MCI", "NMC"],
    facilities: ["Modern Campus", "Research Labs", "Clinical Training"],
    image: "/UNIVERSITY IMAGES/NEPAL/NEPALGUNJ.jpg",
    hostelAvailable: true,
    intake: ["March", "September"]
  }
];

// Helper function to get universities by country
export const getUniversitiesByCountry = (country: string): University[] => {
  return universities.filter(uni => uni.country.toLowerCase() === country.toLowerCase());
};

// Function to get a university by ID
export function getUniversityById(id: string | undefined): University | undefined {
  if (!id) {
    console.warn("No university ID provided");
    return undefined;
  }
  
  // Normalize the id for comparison (ensure it's a string and trim spaces)
  const normalizedId = String(id).trim();
  
  console.log(`Looking for university with ID: "${normalizedId}"`);
  
  // First try direct string comparison
  let university = universities.find(uni => String(uni.id).trim() === normalizedId);
  
  // If not found and the id can be parsed as a number, try comparing as numbers
  if (!university && !isNaN(Number(normalizedId))) {
    const numId = Number(normalizedId);
    university = universities.find(uni => {
      const uniId = typeof uni.id === 'string' ? Number(uni.id) : uni.id;
      return uniId === numId;
    });
  }
  
  // For debugging
  if (!university) {
    const availableIds = universities.slice(0, 5).map(u => `${u.id} (${typeof u.id})`).join(", ");
    console.warn(`University with ID "${normalizedId}" not found. First 5 available IDs: ${availableIds}`);
  } else {
    console.log(`Found university: ${university.name}`);
  }
  
  return university;
}

// Helper function to get all countries
export const getAllCountries = (): string[] => {
  return Array.from(new Set(universities.map(uni => uni.country)));
};

// Helper function to search universities
export const searchUniversities = (query: string): University[] => {
  const searchTerm = query.toLowerCase();
  return universities.filter(uni => 
    uni.name.toLowerCase().includes(searchTerm) ||
    uni.country.toLowerCase().includes(searchTerm) ||
    uni.city.toLowerCase().includes(searchTerm)
  );
};
