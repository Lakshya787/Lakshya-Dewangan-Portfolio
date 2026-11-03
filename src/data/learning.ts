export type LearningStatus = "actively exploring" | "reading & practicing" | "up next";

export interface LearningTopic {
  title: string;
  category: "AI Engineering" | "Backend & Databases" | "Systems & Cloud";
  status: LearningStatus;
  focus: string;
}

export interface LearningProfile {
  direction: string;
  statement: string;
  topics: LearningTopic[];
}

export const learningProfile: LearningProfile = {
  direction: "AI Engineering & Scalable Systems",
  statement:
    "Exploring AI Engineering as an active learning direction—focusing on practical integrations, LLM workflows, RAG systems, and modern agentic architectures alongside core web development.",
  topics: [
    {
      title: "LLM Orchestration & Prompting",
      category: "AI Engineering",
      status: "actively exploring",
      focus: "Understanding foundational LLM workflows, structured outputs, and API integration patterns.",
    },
    {
      title: "Retrieval-Augmented Generation (RAG)",
      category: "AI Engineering",
      status: "actively exploring",
      focus: "Exploring vector embeddings, document chunking, semantic search, and context grounding.",
    },
    {
      title: "AI Agents & Tool Use",
      category: "AI Engineering",
      status: "reading & practicing",
      focus: "Studying agent loop architectures, function calling, and multi-step reasoning systems.",
    },
    {
      title: "Caching & In-Memory Stores (Redis)",
      category: "Backend & Databases",
      status: "reading & practicing",
      focus: "Learning session management, caching layers, and rate limiting fundamentals.",
    },
    {
      title: "Cloud Deployment & Infrastructure (AWS)",
      category: "Systems & Cloud",
      status: "up next",
      focus: "Hands-on practice with core cloud primitives (EC2, S3, IAM) and deployment workflows.",
    },
  ],
};

