export type LearningStatus =
  | "currently learning"
  | "actively exploring"
  | "reading & practicing"
  | "up next";

export interface LearningTopic {
  title: string;
  category: "AI Engineering" | "Systems & Architecture" | "Backend & Databases" | "Cloud";
  status: LearningStatus;
  focus: string;
  tags?: string[];
}

export interface LearningProfile {
  direction: string;
  statement: string;
  topics: LearningTopic[];
}

export const learningProfile: LearningProfile = {
  direction: "AI Engineering & Scalable Systems",
  statement:
    "Exploring AI Engineering and distributed systems as an active learning direction—focusing on practical integrations, LLM workflows, RAG pipelines, autonomous agents, and system design alongside core web development.",
  topics: [
    {
      title: "Large Language Models (LLMs)",
      category: "AI Engineering",
      status: "currently learning",
      focus:
        "Prompt orchestration, structured outputs, JSON mode enforcement, low-latency inference streaming, and evaluating generative quality.",
      tags: ["Groq API", "Gemini API", "Structured Prompts", "Streaming SSE"],
    },
    {
      title: "Retrieval-Augmented Generation (RAG)",
      category: "AI Engineering",
      status: "currently learning",
      focus:
        "Document parsing, vector embeddings, chunking strategies, semantic search, context window budgeting, and ground-truth validation.",
      tags: ["Vector Embeddings", "Semantic Search", "Document Parsing", "Context Grounding"],
    },
    {
      title: "AI Agents & Tool Use",
      category: "AI Engineering",
      status: "currently learning",
      focus:
        "Multi-step agent loops, function calling schemas, tool integration, plan-and-solve execution, and error recovery.",
      tags: ["Tool Calling", "Agent Loops", "Execution State", "Reasoning Patterns"],
    },
    {
      title: "System Design & Architecture",
      category: "Systems & Architecture",
      status: "currently learning",
      focus:
        "Scalable client-server models, rate limiting, caching strategies with Redis, database indexing, and asynchronous job processing.",
      tags: ["Caching / Redis", "API Gateway", "Rate Limiting", "Database Indexing"],
    },
    {
      title: "Cloud Infrastructure & Deployment",
      category: "Cloud",
      status: "reading & practicing",
      focus:
        "Containerization with Docker, deploying resilient services on Linux VPS / AWS, and CI/CD pipelines.",
      tags: ["Docker", "Linux VPS", "Vercel", "CI/CD"],
    },
  ],
};
