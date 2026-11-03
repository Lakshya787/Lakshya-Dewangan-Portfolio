export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  description: string;
  coursework: string[];
}

export const educationList: EducationItem[] = [
  {
    degree: "Bachelor of Technology (BTech)",
    field: "Computer Science and Engineering (CSE)",
    institution: "IIIT Naya Raipur",
    location: "India",
    period: "Aug 2024 – Jul 2028",
    status: "3rd Year Undergraduate",
    description:
      "Currently in 3rd year (Aug 2024 – Jul 2028). Rigorous computer science curriculum emphasizing computing fundamentals, data structures, algorithm design, systems programming, and modern software engineering methodologies.",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Database Management Systems",
      "Object-Oriented Programming",
      "Software Engineering",
    ],
  },
];
