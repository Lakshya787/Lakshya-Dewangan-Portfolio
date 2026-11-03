
export type ProjectCategory =
  | "Full-Stack"
  | "AI Engineering"
  | "ML"
  | "Tools";

export type ProjectStatus =
  | "Completed"
  | "In Progress"
  | "Archived";

/* ─── Per-project detail content ─────────────────────────────────────────────
 *
 * All fields are optional. Only provide what you can honestly describe from
 * your own work. Never fabricate data, performance numbers, or experiences.
 *
 * HOW TO ADD DETAIL TO A PROJECT:
 *   1. Add a `detail: { ... }` field to the project entry in `pinnedProjects`.
 *   2. Fill in only the sections you have real content for.
 *   3. The detail page renders only sections that contain content — empty
 *      fields are silently skipped.
 * ─────────────────────────────────────────────────────────────────────────── */

export interface ProjectScreenshot {
  /** Path relative to /public, e.g. "/images/projects/cheatsheet-home.png" */
  src: string;
  /** Required descriptive alt text — describe what is visible on screen */
  alt: string;
  /** Optional caption shown below the image */
  caption?: string;
}

export interface ArchitectureDiagram {
  /** Plain-text ASCII/Mermaid-style diagram OR a short prose description */
  description: string;
  /** Optional image path (relative to /public) for a diagram image */
  imageSrc?: string;
  imageAlt?: string;
}

export interface ProjectDetail {
  /** One or two sentences describing the core problem the project solves */
  problem?: string;
  /** Why you built it — personal motivation, context */
  motivation?: string;
  /** Bullet list of key features */
  features?: string[];
  /** Plain-text or structured architecture overview */
  architecture?: ArchitectureDiagram;
  /** Paragraphs or bullet points describing key implementation decisions */
  implementation?: string[];
  /** Honest description of the hardest parts */
  challenges?: string[];
  /** What you actually learned while building it */
  learned?: string[];
  /** Screenshots or demo images */
  screenshots?: ProjectScreenshot[];
}

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
  /** Optional rich detail shown on the /projects/[slug] detail page */
  detail?: ProjectDetail;
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
    detail: {
      problem:
        "Developer documentation is scattered across dozens of pages and reference sites. Reading through entire docs to find the key APIs or patterns you need is time-consuming, especially when switching between multiple libraries on the same project.",
      motivation:
        "I wanted a tool I could actually use myself while learning new frameworks — paste a docs URL, get a compact cheatsheet I could keep open in a second window. Building it also gave me hands-on experience connecting a Next.js frontend to a Python backend over SSE.",
      features: [
        "Accepts any public documentation URL as input",
        "Scrapes and cleans page content with BeautifulSoup",
        "Sends cleaned text to Groq's LLM API with a structured extraction prompt",
        "Streams the LLM response token-by-token to the browser via Server-Sent Events",
        "Renders the streamed markdown in real time as it arrives",
        "Generates a formatted, downloadable PDF using ReportLab",
      ],
      architecture: {
        description:
          "Next.js frontend → FastAPI backend. The user submits a URL; FastAPI fetches and parses the page with BeautifulSoup, then sends the extracted text to the Groq API. The LLM response is streamed back to the frontend via an SSE endpoint. Once streaming is complete, a separate endpoint generates and serves the PDF.",
      },
      implementation: [
        "Used BeautifulSoup to strip nav, footer, and script tags so only the main documentation prose reaches the LLM — this significantly improved output quality.",
        "FastAPI's StreamingResponse with media_type='text/event-stream' handles the SSE channel; the frontend uses the browser EventSource API to consume it.",
        "Groq's Llama-3 model was chosen for its low latency at inference time, which makes the streaming feel responsive.",
        "ReportLab builds the PDF server-side from the final markdown content after streaming completes.",
      ],
      challenges: [
        "SSE requires keeping the HTTP connection open for the full duration of streaming. Getting FastAPI and the Next.js API route to cooperate on connection lifecycle took debugging.",
        "Some documentation sites use heavy JavaScript rendering, so BeautifulSoup (which parses static HTML) retrieves incomplete content. Worked around this by adding a warning when the scraped content is below a minimum length threshold.",
        "Prompt engineering: getting the LLM to produce a consistently structured cheatsheet format (sections, code blocks, concise bullets) required several iterations of the system prompt.",
      ],
      learned: [
        "How Server-Sent Events differ from WebSockets and when SSE is the simpler, correct choice for one-way server-to-client streaming.",
        "FastAPI's async streaming primitives and how to test them locally.",
        "Hands-on experience with Groq's API and how model choice affects latency vs. quality.",
        "PDF generation is a lot more manual than expected — ReportLab operates at a fairly low level.",
      ],
    },
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
    detail: {
      problem:
        "When learning something new, it is easy to get lost deciding what to study next. Generic roadmaps found online rarely match a person's existing knowledge or time availability.",
      motivation:
        "I wanted to explore how LLMs can personalise learning paths rather than return generic advice. Resync was the project where I first connected a full MERN-style backend to a generative AI API and built user-facing progress tracking around it.",
      features: [
        "User submits a learning goal and current skill level in natural language",
        "Gemini API generates a structured, step-by-step roadmap tailored to the input",
        "Roadmap is broken into daily actionable tasks stored in MongoDB",
        "Dashboard shows overall progress, completed steps, and current streak",
        "Skill level indicators update as tasks are marked complete",
      ],
      architecture: {
        description:
          "React + Vite SPA communicates with an Express REST API. The API calls the Gemini API to generate the roadmap on first request, then persists the result in MongoDB via Mongoose. Subsequent requests for the same roadmap are served from the database.",
      },
      implementation: [
        "The Gemini prompt is structured to return JSON so the backend can parse and store individual steps as MongoDB documents without further processing.",
        "Mongoose schemas enforce the roadmap structure — each step has a title, description, estimated duration, and a completion boolean.",
        "The React dashboard uses local component state for optimistic UI updates when a task is marked complete, syncing with the backend in the background.",
      ],
      challenges: [
        "Getting the Gemini API to return consistent, parseable JSON required prompt iteration and adding a JSON schema description to the system prompt.",
        "MongoDB connection management in a Node/Express app without a proper connection pool initially caused timeout errors under repeated requests — fixed by moving the connection to module initialization.",
      ],
      learned: [
        "How to design a prompt that returns structured JSON reliably rather than free-form text.",
        "Express middleware composition for auth, error handling, and request validation.",
        "Full-stack state management patterns: when to trust the UI state optimistically and when to wait for the server.",
      ],
    },
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
    detail: {
      problem:
        "Distracting websites are one click away during deep work sessions. Existing blockers can be too easy to bypass, making them ineffective when willpower is already strained.",
      motivation:
        "I built Siteloqq to solve my own distraction problem and to learn the Chrome Extensions APIs — Manifest V3, declarativeNetRequest, and chrome.storage.",
      features: [
        "Block any list of URLs with one click",
        "Timed sessions: block sites for a set duration that cannot be cancelled",
        "Persistent block list saved to chrome.storage.local",
        "Emergency unlock requires completing a deliberate challenge to add friction",
        "React + Vite popup UI packaged into the extension",
      ],
      implementation: [
        "Uses Chrome's declarativeNetRequest API (Manifest V3) to redirect blocked URLs to a custom block page without needing a background service worker to intercept each request.",
        "The Vite build outputs a static bundle that Chrome loads as the popup — no server involved.",
        "chrome.storage.local persists the block list across browser restarts.",
      ],
      challenges: [
        "Manifest V3 replaced the older blocking webRequest API with declarativeNetRequest, which has a different mental model. Translating user-defined URL patterns into the required rule format required careful reading of the Chrome docs.",
      ],
      learned: [
        "The Chrome Extensions Manifest V3 architecture and the difference between service workers, content scripts, and popup pages.",
        "How declarativeNetRequest rules work and their limitations compared to the old webRequest API.",
        "Packaging a React/Vite app as a browser extension.",
      ],
    },
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
    detail: {
      motivation:
        "I built this while learning Go to practice struct types, file I/O, and CLI argument parsing using only the standard library — no external dependencies.",
      features: [
        "Add, list, complete, and delete tasks from the terminal",
        "Tasks persist across sessions via a local JSON file",
        "Colour-coded output: completed tasks shown differently from pending ones",
        "Single binary, zero external dependencies",
      ],
      implementation: [
        "Uses Go's encoding/json package to marshal and unmarshal the task list to a flat JSON file in the user's home directory.",
        "os.Args parsing handles subcommands (add, list, done, delete) without a CLI framework.",
      ],
      learned: [
        "Go's type system, struct tags, and interface patterns.",
        "File I/O and JSON serialization in Go.",
        "Writing self-contained CLI tools without external dependencies.",
      ],
    },
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
    detail: {
      motivation:
        "I built this for myself and classmates to quickly turn lecture notes into self-test quizzes without needing an account or an external service.",
      features: [
        "Paste questions and answers in a simple text format",
        "Instant quiz generation — no server, runs entirely in the browser",
        "Score tracking at the end of each session",
        "Deployed as a static site on Vercel",
      ],
      learned: [
        "DOM manipulation and event handling with vanilla JavaScript.",
        "Parsing user-provided structured text in the browser.",
        "Static site deployment workflow with Vercel.",
      ],
    },
  },
];
