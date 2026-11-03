export interface Education {
  degree: string;
  field: string;
  institution: string;
  period: string;
  currentYear: string;
  display: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  instagram: string;
  youtube: string;
  email: string;
  resume: string;
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
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
  instagram: string;
  youtube: string;
  email: string;
  resume: string;
  socials: SocialLinks;
}

export const profile: Profile = {
  name: "Lakshya Dewangan",
  firstName: "Lakshya",
  lastName: "Dewangan",
  role: "Full-Stack Developer building for the web and exploring AI.",
  avatar: "/images/icon.png",
  image: "/images/lakshya.jpeg",
  education: "BTech CSE (3rd Year) at IIIT Naya Raipur (Aug 2024 – Jul 2028)",
  educationDetails: {
    degree: "BTech",
    field: "CSE",
    institution: "IIIT Naya Raipur",
    period: "Aug 2024 – Jul 2028",
    currentYear: "3rd Year",
    display: "BTech CSE · 3rd Year at IIIT Naya Raipur (Aug 2024 – Jul 2028)",
  },
  location: "India",
  status: "Open to internships",
  positioningStatement:
    "I'm a 3rd-year Computer Science student at IIIT Naya Raipur (2024 – 2028) and Full-Stack Developer interested in building scalable web applications and exploring AI Engineering. I enjoy turning ideas into functional products, experimenting with new technologies and continuously improving my engineering skills.",
  github: "https://github.com/Lakshya787",
  linkedin: "https://www.linkedin.com/in/lakshya-dewangan-59bb2b302/",
  instagram: "https://www.instagram.com/lakshyadewangan2024/",
  youtube: "https://www.youtube.com/@weaselad",
  email: "mailto:lakshyadewangan78@gmail.com",
  resume: "/resume.pdf",
  socials: {
    github: "https://github.com/Lakshya787",
    linkedin: "https://www.linkedin.com/in/lakshya-dewangan-59bb2b302/",
    instagram: "https://www.instagram.com/lakshyadewangan2024/",
    youtube: "https://www.youtube.com/@weaselad",
    email: "mailto:lakshyadewangan78@gmail.com",
    resume: "/resume.pdf",
  },
};

export const githubUsername = "Lakshya787";
