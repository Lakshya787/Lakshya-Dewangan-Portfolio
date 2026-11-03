export type ExperienceType = "Seeking Internship" | "Project-Based" | "Open Source";

export interface ExperienceItem {
  role: string;
  organization: string;
  type: ExperienceType;
  period: string;
  statusBadge: string;
  description: string;
  highlights: string[];
  skillsUsed: string[];
}

export const experienceList: ExperienceItem[] = [
  {
    role: "Full-Stack Web Development",
    organization: "Independent & Open Source Projects",
    type: "Project-Based",
    period: "Ongoing",
    statusBadge: "Active Building",
    description:
      "Designing and developing responsive web applications, design systems, and developer tools with strict type safety and accessible interactions.",
    highlights: [
      "Engineered end-to-end web apps leveraging Next.js App Router, TypeScript, and custom Tailwind design systems.",
      "Built clean API services and database schemas using Node.js, Express, and PostgreSQL.",
      "Maintained structured version control with Git and GitHub, adhering to clean commit history and documentation.",
    ],
    skillsUsed: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Git"],
  },
  {
    role: "Software Engineering Intern Candidate",
    organization: "Open to Internships / Industry Roles",
    type: "Seeking Internship",
    period: "Upcoming / Available",
    statusBadge: "Open to Offers",
    description:
      "Actively preparing for and seeking full-stack, frontend, or software engineering internship opportunities to deliver value in production codebases.",
    highlights: [
      "Ready to contribute to agile development sprints, code reviews, and cross-functional feature builds.",
      "Available for remote or on-site internship positions across India.",
    ],
    skillsUsed: ["Full-Stack Engineering", "Agile Collaboration", "Code Quality", "Problem Solving"],
  },
];

