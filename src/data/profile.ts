export interface Education {
  degree: string;
  field: string;
  institution: string;
  display: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  resume: string;
}

export interface Profile {
  name: string;
  role: string;
  avatar: string;
  image: string;
  education: string;
  educationDetails: Education;
  location: string;
  status: string;
  positioningStatement: string;
  github: string;
  linkedin: string;
  email: string;
  resume: string;
  socials: SocialLinks;
}

export const profile: Profile = {
  name: "Lakshya",
  role: "Full-Stack Developer building for the web and exploring AI.",
  avatar: "/images/lakshya.jpeg",
  image: "/images/lakshya.jpeg",
  education: "BTech CSE at IIIT Naya Raipur",
  educationDetails: {
    degree: "BTech",
    field: "CSE",
    institution: "IIIT Naya Raipur",
    display: "BTech CSE at IIIT Naya Raipur",
  },
  location: "India",
  status: "Open to internships",
  positioningStatement:
    "I'm a Computer Science student and Full-Stack Developer interested in building scalable web applications and exploring AI Engineering. I enjoy turning ideas into functional products, experimenting with new technologies and continuously improving my engineering skills.",
  github: "https://github.com/Lakshya787",
  // TODO: Replace with your actual LinkedIn profile URL
  linkedin: "https://linkedin.com/in/TODO_YOUR_LINKEDIN",
  // TODO: Replace with your actual contact email address
  email: "mailto:TODO_YOUR_EMAIL@example.com",
  // TODO: Replace with your actual resume PDF URL or file path
  resume: "/resume.pdf", // Place resume file in public/ or provide external URL
  socials: {
    github: "https://github.com/Lakshya787",
    // TODO: Replace with your actual LinkedIn profile URL
    linkedin: "https://www.linkedin.com/in/lakshya-dewangan-59bb2b302/",
    // TODO: Replace with your actual contact email address
    email: "mailto:lakshyadewangan78@gmail.com",
    // TODO: Replace with your actual resume PDF URL or file path
    resume: "/resume.pdf",
  },
};

export const githubUsername = "Lakshya787";

