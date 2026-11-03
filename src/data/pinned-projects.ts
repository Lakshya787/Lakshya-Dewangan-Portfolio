
export type ProjectCategory =
  | "Full-Stack"
  | "AI Engineering"
  | "ML"
  | "Tools";

export type ProjectStatus =
  | "Completed"
  | "In Progress"
  | "Archived";

export interface PinnedProject {
  title: string;
  repo: string;
  featured: boolean;
  order: number;
  category: ProjectCategory;
  status: ProjectStatus;
  demo: string | null;
  description: string;
  techStack?: string[];
}

export const pinnedProjects: PinnedProject[] = [
  {
    title: "CheatSheet.ai",
    repo: "https://github.com/Lakshya787/CheatsheetGenerator",
    featured: true,
    order: 1,
    category: "AI Engineering",
    status: "Completed",
    demo: "https://cheatsheet-generator-eight.vercel.app",
    description:
      "An AI-powered developer tool that converts documentation URLs into structured, downloadable cheatsheets. Uses web scraping, Groq-powered LLM inference, real-time SSE streaming, and PDF generation.",
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "FastAPI",
      "Python",
      "Groq API",
      "BeautifulSoup",
      "Server-Sent Events",
      "ReportLab",
    ],
  },
  {
    title: "Resync",
    repo: "https://github.com/Lakshya787/Resync",
    featured: true,
    order: 2,
    category: "AI Engineering",
    status: "Completed",
    demo: "https://resync-liard.vercel.app",
    description:
      "An AI-powered learning roadmap system that turns user goals into structured learning steps and daily actions, with progress tracking, skill levels, and dashboard analytics.",
    techStack: [
      "React",
      "Vite",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Gemini API",
    ],
  },
  {
    title: "Siteloqq",
    repo: "https://github.com/Lakshya787/Siteloqq",
    featured: true,
    order: 3,
    category: "Tools",
    status: "Completed",
    demo: null,
    description:
      "A Chrome website-blocking extension designed to reduce distractions. Includes timed website blocking, persistent local storage, and a strict emergency unlock challenge.",
    techStack: [
      "JavaScript",
      "React",
      "Vite",
      "Chrome Extensions",
      "CSS",
    ],
  },
  {
    title: "CLI Task Manager",
    repo: "https://github.com/Lakshya787/CLI_Task_Manager",
    featured: false,
    order: 4,
    category: "Tools",
    status: "Completed",
    demo: null,
    description:
      "A command-line task manager written in Go, supporting task creation, listing, deletion, completion tracking, and persistent JSON-based storage.",
    techStack: [
      "Go",
      "JSON",
      "Standard Library",
    ],
  },
  {
    title: "Quiz Maker",
    repo: "https://github.com/Lakshya787/Quiz-Maker",
    featured: false,
    order: 5,
    category: "Tools",
    status: "Completed",
    demo: "https://quiz-maker-lake.vercel.app",
    description:
      "A lightweight quiz-making tool that helps students create revision quizzes by pasting content in a predefined format.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
];
