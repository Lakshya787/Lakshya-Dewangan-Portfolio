export type LearningStatus =
  | "currently learning"
  | "actively exploring"
  | "reading & practicing"
  | "up next";

export interface LearningItem {
  name: string;
  category: "Language" | "Framework" | "Tool";
  note: string;
}

export interface LearningTopic {
  title: string;
  category: "AI Engineering" | "Systems & Architecture" | "Backend & Databases" | "Cloud";
  status: LearningStatus;
  focus: string;
  languages?: string[];
  frameworks?: string[];
  tools?: string[];
  tags?: string[];
}

export interface LearningProfile {
  direction: string;
  statement: string;
  stackSummary: {
    languages: LearningItem[];
    frameworks: LearningItem[];
    tools: LearningItem[];
  };
  topics: LearningTopic[];
}

export const learningProfile: LearningProfile = {
  direction: "AI Engineering & Scalable Systems",
  statement:
    "Exploring AI Engineering and distributed systems as an active learning direction—focusing on practical integrations, LLM workflows, RAG pipelines, autonomous agents, and system design alongside core web development.",
  stackSummary: {
    languages: [
      { name: "Python", category: "Language", note: "AI pipelines, agents & automation scripts" },
      { name: "TypeScript", category: "Language", note: "Type-safe full-stack web applications" },
      { name: "Go", category: "Language", note: "Fast CLI tools & concurrent system services" },
      { name: "SQL", category: "Language", note: "Relational queries & database optimizations" },
    ],
    frameworks: [
      { name: "LangChain", category: "Framework", note: "LLM chains, prompt templates & agent loops" },
      { name: "FastAPI", category: "Framework", note: "High-performance asynchronous Python REST APIs" },
      { name: "Next.js", category: "Framework", note: "App Router, SSR, Server Actions & edge routes" },
      { name: "PyTorch", category: "Framework", note: "Tensor math, fine-tuning & model architectures" },
      { name: "React", category: "Framework", note: "Component UI patterns & responsive interfaces" },
    ],
    tools: [
      { name: "Docker", category: "Tool", note: "Isolated containerization & microservices" },
      { name: "Redis", category: "Tool", note: "In-memory caching, pub/sub & rate limiting" },
      { name: "PostgreSQL", category: "Tool", note: "Structured storage & pgvector indexing" },
      { name: "Groq API", category: "Tool", note: "Ultra-fast LPU inference for open models" },
      { name: "Gemini API", category: "Tool", note: "Multimodal AI & structured JSON schemas" },
      { name: "Vector DBs", category: "Tool", note: "Semantic search with Chroma & Pinecone" },
      { name: "Linux VPS", category: "Tool", note: "Ubuntu server configuration & systemd" },
      { name: "AWS", category: "Tool", note: "Cloud hosting, S3 storage & serverless services" },
      { name: "Git", category: "Tool", note: "Branching strategies & collaboration workflows" },
    ],
  },
  topics: [
    {
      title: "Large Language Models (LLMs)",
      category: "AI Engineering",
      status: "currently learning",
      focus:
        "Prompt orchestration, structured outputs, JSON mode enforcement, low-latency inference streaming, and evaluating generative quality.",
      languages: ["Python", "TypeScript"],
      frameworks: ["LangChain", "FastAPI"],
      tools: ["Groq API", "Gemini API"],
      tags: ["Structured Prompts", "Streaming SSE", "Function Calling", "Inference Ops"],
    },
    {
      title: "Retrieval-Augmented Generation (RAG)",
      category: "AI Engineering",
      status: "currently learning",
      focus:
        "Document parsing, vector embeddings, chunking strategies, semantic search, context window budgeting, and ground-truth validation.",
      languages: ["Python"],
      frameworks: ["LangChain", "FastAPI"],
      tools: ["Vector DBs", "PostgreSQL", "Gemini API"],
      tags: ["Vector Embeddings", "Semantic Search", "Document Parsing", "Context Grounding"],
    },
    {
      title: "AI Agents & Tool Use",
      category: "AI Engineering",
      status: "currently learning",
      focus:
        "Multi-step agent loops, function calling schemas, tool integration, plan-and-solve execution, and error recovery.",
      languages: ["Python", "TypeScript"],
      frameworks: ["LangChain", "Next.js"],
      tools: ["Groq API", "Gemini API", "Git"],
      tags: ["Tool Calling", "Agent Loops", "Execution State", "Reasoning Patterns"],
    },
    {
      title: "System Design & Architecture",
      category: "Systems & Architecture",
      status: "currently learning",
      focus:
        "Scalable client-server models, rate limiting, caching strategies with Redis, database indexing, and asynchronous job processing.",
      languages: ["Go", "TypeScript", "SQL"],
      frameworks: ["FastAPI", "Next.js"],
      tools: ["Redis", "PostgreSQL", "Docker"],
      tags: ["Caching / Redis", "API Gateway", "Rate Limiting", "Database Indexing"],
    },
    {
      title: "Cloud Infrastructure & Deployment",
      category: "Cloud",
      status: "reading & practicing",
      focus:
        "Containerization with Docker, deploying resilient services on Linux VPS / AWS, and CI/CD pipelines.",
      languages: ["Go", "Python"],
      frameworks: ["Next.js"],
      tools: ["Docker", "Linux VPS", "AWS", "Vercel", "Git"],
      tags: ["Docker", "Linux VPS", "Vercel", "CI/CD"],
    },
  ],
};
