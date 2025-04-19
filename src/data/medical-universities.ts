
export interface University {
  id: number;
  name: string;
  country: string;
  students: string;
  established: string;
  image: string;
  description: string;
}

export const medicalUniversities: University[] = [
  {
    id: 1,
    name: "Oxford Medical College",
    country: "United Kingdom",
    students: "15,000+",
    established: "1096",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "World-renowned for medical research and innovation"
  },
  {
    id: 2,
    name: "Tbilisi State Medical University",
    country: "Georgia",
    students: "10,000+",
    established: "1918",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop",
    description: "Historical excellence in medical education since 1918"
  },
  {
    id: 3,
    name: "Kyiv Medical University",
    country: "Ukraine",
    students: "8,000+",
    established: "1841",
    image: "https://images.unsplash.com/photo-1598018553943-93e017e803df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Modern approach to medical training with clinical focus"
  },
  {
    id: 4,
    name: "Berlin Institute of Health",
    country: "Germany",
    students: "12,000+",
    established: "1935",
    image: "https://images.unsplash.com/photo-1544298621-35a989e4e54a?q=80&w=2070&auto=format&fit=crop",
    description: "Cutting-edge research and breakthrough medical technologies"
  },
  {
    id: 5,
    name: "Moscow Medical Academy",
    country: "Russia",
    students: "11,000+",
    established: "1758",
    image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Traditional medical education with modern research facilities"
  },
  {
    id: 6,
    name: "Harvard Medical School",
    country: "USA",
    students: "16,000+",
    established: "1782",
    image: "https://images.unsplash.com/photo-1587058680578-a67a97b33215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Pioneer in medical breakthroughs and healthcare innovation"
  }
];
