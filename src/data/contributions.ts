export interface PlannedContribution {
  id: string;
  repo: string;
  repoUrl: string;
  area: string;
  description: string;
  requiredSkills: string[];
  status: "researching" | "learning" | "planned";
  repoStars?: string;
  language?: string;
}

export const plannedContributions: PlannedContribution[] = [
  {
    id: "nextjs",
    repo: "vercel/next.js",
    repoUrl: "https://github.com/vercel/next.js",
    area: "Documentation / Bug Fixes",
    description:
      "Improve docs for App Router edge cases and fix minor bugs in the development server. Next.js powers this very portfolio — understanding its internals is already underway.",
    requiredSkills: ["React", "TypeScript", "Node.js", "App Router internals"],
    status: "researching",
    repoStars: "130k+",
    language: "TypeScript",
  },
  {
    id: "langchain",
    repo: "langchain-ai/langchain",
    repoUrl: "https://github.com/langchain-ai/langchain",
    area: "LLM Integrations / Examples",
    description:
      "Add or improve Python examples for RAG pipelines and multi-agent workflows — areas aligned with my AI/ML coursework at IIIT Naya Raipur.",
    requiredSkills: ["Python", "LLMs", "RAG", "Vector DBs"],
    status: "learning",
    repoStars: "95k+",
    language: "Python",
  },
  {
    id: "huggingface",
    repo: "huggingface/transformers",
    repoUrl: "https://github.com/huggingface/transformers",
    area: "Documentation / Tests",
    description:
      "Fix doc inconsistencies and add test coverage for tokenizer edge cases. A great entry point for contributing to large ML infrastructure.",
    requiredSkills: ["Python", "PyTorch", "NLP fundamentals"],
    status: "planned",
    repoStars: "135k+",
    language: "Python",
  },
  {
    id: "shadcn",
    repo: "shadcn-ui/ui",
    repoUrl: "https://github.com/shadcn-ui/ui",
    area: "Accessibility / New Components",
    description:
      "Improve ARIA attributes on existing components and potentially propose new ones. Accessibility work here directly sharpens skills used in every frontend project.",
    requiredSkills: ["React", "TypeScript", "Accessibility (WCAG)", "Radix UI"],
    status: "planned",
    repoStars: "75k+",
    language: "TypeScript",
  },
];

export const roadmapStages = [
  {
    id: "learning",
    label: "Deep Study",
    description: "Reading codebases, understanding contribution guidelines, fixing the knowledge gaps.",
    active: true,
    done: false,
  },
  {
    id: "first-pr",
    label: "First PR",
    description: "Submit a real, reviewed pull request — docs fix, test, or small bug — to at least one repo.",
    active: false,
    done: false,
  },
  {
    id: "sustained",
    label: "Sustained Contributions",
    description: "Become a recognizable contributor. Review others' PRs, help triage issues.",
    active: false,
    done: false,
  },
];

