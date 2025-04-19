export interface University {
  id: number;
  name: string;
  country: string;
  city: string;
  tuitionFee: number;
  currency: string;
  image: string;
  facilities: string[];
  rating: number;
  category: string;
  description?: string;
  longDescription?: string;
  features?: string[];
  establishedYear?: string;
  studentCount?: string;
  hospitalAffiliations?: string[];
  recognition?: string[];
  courses?: { name: string; duration: string; fees: string }[];
  admissionProcess?: string[];
  eligibility?: string[];
  advantages?: string[];
  documents?: string[];
  scholarships?: string[];
  facultyCount?: string;
  hostelInfo?: string;
  indianFoodAvailability?: string;
}