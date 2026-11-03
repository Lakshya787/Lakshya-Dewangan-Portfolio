import React from "react";
import {
  Code2,
  Database,
  Server,
  Cpu,
  Cloud,
  Terminal,
  Layers,
  Sparkles,
  Zap,
  GitBranch,
  Box,
  Flame,
  Binary,
  Workflow,
  Radio,
  MessageSquareCode,
  FileCode2,
  FileText,
  Puzzle,
  Globe,
  Braces,
} from "lucide-react";

interface TechSymbolProps {
  name: string;
  className?: string;
  size?: number;
}

export function TechSymbol({ name, className = "w-4 h-4", size = 16 }: TechSymbolProps) {
  const normalized = name.toLowerCase().replace(/[\s\-_.]/g, "");

  // 1. Python
  if (normalized.includes("python") || normalized === "py") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-hidden="true">
        <path
          d="M11.9 2c-3.1 0-4.9 1.4-4.9 4.1v2.1h5v.7H4.3C2 8.9 1 10.7 1 13.8c0 3.2 1.4 4.8 4.2 4.8h1.8v-2.4c0-2.3 1.9-4.2 4.2-4.2h5V9.9c0-2.8-2-4.3-5-4.3h-.7v-2h1.4c.5 0 .9-.5.9-1s-.4-.6-.9-.6zm-2.2 2a.9.9 0 110 1.8.9.9 0 010-1.8z"
          fill="#3776ab"
        />
        <path
          d="M12.1 22c3.1 0 4.9-1.4 4.9-4.1v-2.1h-5v-.7h7.7c2.3 0 3.3-1.8 3.3-4.9 0-3.2-1.4-4.8-4.2-4.8H17v2.4c0 2.3-1.9 4.2-4.2 4.2h-5v2.1c0 2.8 2 4.3 5 4.3h.7v2h-1.4c-.5 0-.9.5-.9 1s.4.6.9.6zm2.2-2a.9.9 0 110-1.8.9.9 0 010 1.8z"
          fill="#ffd43b"
        />
      </svg>
    );
  }

  // 2. TypeScript
  if (normalized.includes("typescript") || normalized === "ts") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#3178c6" />
        <path
          d="M4 10h6v2H7.5v7h-2.5v-7H4v-2zm12.5 3.5c-1-.5-1.5-.9-1.5-1.5 0-.6.5-1 1.4-1 .8 0 1.5.3 2 .8l1.2-1.3c-.9-.8-2-1.2-3.2-1.2-2.1 0-3.5 1.2-3.5 2.8 0 1.3.8 2.2 2.4 2.8 1.1.4 1.6.8 1.6 1.4 0 .7-.6 1.1-1.6 1.1-1 0-1.9-.4-2.5-1.1l-1.3 1.3c1 1.1 2.3 1.6 3.8 1.6 2.3 0 3.7-1.3 3.7-3 0-1.5-1-2.2-2.5-2.7z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  // 3. JavaScript
  if (normalized.includes("javascript") || normalized === "js") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#f7df1e" />
        <path
          d="M6.5 17.5l1.6-1c.4.7.8 1.2 1.6 1.2.8 0 1.3-.3 1.3-1.5V10h2v6.2c0 2.2-1.3 3.2-3.2 3.2-1.7 0-2.7-.9-3.3-1.9zm8.5-.2l1.6-1c.5.8 1.1 1.4 2.2 1.4 1 0 1.6-.5 1.6-1.2 0-.8-.7-1.1-1.8-1.6l-.6-.3c-1.8-.7-3-1.7-3-3.7 0-1.9 1.4-3.3 3.6-3.3 1.6 0 2.7.5 3.5 1.9l-1.5 1c-.4-.7-.9-1-1.9-1-.9 0-1.5.4-1.5 1.1 0 .7.5 1 1.5 1.4l.6.3c2.1.9 3.3 1.8 3.3 3.9 0 2.2-1.7 3.5-4 3.5-2.2 0-3.6-1.1-4.2-2.4z"
          fill="#000000"
        />
      </svg>
    );
  }

  // 4. HTML
  if (normalized.includes("html")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <path d="M4 3l1.8 17 6.2 2 6.2-2L20 3H4z" fill="#e34f26" />
        <path d="M12 4.8v15.4l4.7-1.5 1.5-13.9H12z" fill="#ef652a" />
        <path
          d="M12 8.5H7.7l.3 2.8H12v-2.8zm0 5.6h-2.1l-.2-2H7.6l.3 4.2 4.1 1.2v-3.4zm0-5.6v2.8h4l-.4 3.8-3.6 1.2v2.2l4.8-1.5.8-8.5H12z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  // 5. CSS
  if (normalized.includes("css")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <path d="M4 3l1.8 17 6.2 2 6.2-2L20 3H4z" fill="#1572b6" />
        <path d="M12 4.8v15.4l4.7-1.5 1.5-13.9H12z" fill="#33a9dc" />
        <path
          d="M12 8.5H7.7l.3 2.8H12v-2.8zm0 5.6h-2.1l-.2-2H7.6l.3 4.2 4.1 1.2v-3.4zm0-5.6v2.8h4l-.4 3.8-3.6 1.2v2.2l4.8-1.5.8-8.5H12z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  // 6. React
  if (normalized.includes("react")) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        fill="none"
        stroke="#61dafb"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="2.2" fill="#61dafb" stroke="none" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  // 7. Next.js
  if (normalized.includes("nextjs") || normalized.includes("next")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#000000" />
        <path
          d="M8 7v10h2.2V11.2l5.7 7c.4-.2.8-.5 1.1-.8L9.8 8.8V7H8zm7.3 0H13v6h2.3V7z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  // 8. Vite
  if (normalized.includes("vite")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#646cff" />
        <path d="M19 4L12 19 5 4h3l4 9 4-9h3z" fill="#ffd43b" />
      </svg>
    );
  }

  // 9. Node.js
  if (normalized.includes("node")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <polygon points="12,2 22,7.5 22,18.5 12,24 2,18.5 2,7.5" fill="#339933" />
        <path
          d="M12 6.5l6 3.5v7l-6 3.5-6-3.5v-7l6-3.5zm0 2.2L8 11v4l4 2.3 4-2.3V11l-4-2.3z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  // 10. Express
  if (normalized.includes("express")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#000000" />
        <text
          x="12"
          y="16.5"
          fill="#ffffff"
          fontSize="10"
          fontFamily="system-ui, sans-serif"
          fontWeight="900"
          textAnchor="middle"
        >
          ex
        </text>
      </svg>
    );
  }

  // 11. FastAPI
  if (normalized.includes("fastapi")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#05998b" />
        <path d="M13 3l-6 10h5l-2 8 8-11h-5l2-7z" fill="#ffffff" stroke="#ffffff" strokeWidth="0.5" />
      </svg>
    );
  }

  // 12. PostgreSQL
  if (normalized.includes("postgres")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#336791" />
        <path
          d="M7 8c0-1.7 2.2-3 5-3s5 1.3 5 3v8c0 1.7-2.2 3-5 3s-5-1.3-5-3V8zm2 0c0 .7 1.3 1.5 3 1.5s3-.8 3-1.5-1.3-1.5-3-1.5-3 .8-3 1.5zm0 4c0 .7 1.3 1.5 3 1.5s3-.8 3-1.5v-1.5c-1 .6-2 1-3 1s-2-.4-3-1V12zm0 4c0 .7 1.3 1.5 3 1.5s3-.8 3-1.5v-1.5c-1 .6-2 1-3 1s-2-.4-3-1V16z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  // 13. MongoDB / Mongoose
  if (normalized.includes("mongo")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#13aa52" />
        <path
          d="M12 3c-1.8 3.5-3.5 6.2-3.5 9.2 0 3.5 2.1 6.8 3.5 8.8 1.4-2 3.5-5.3 3.5-8.8 0-3-1.7-5.7-3.5-9.2zm-.2 15.5c-.3-.4-1.8-2.6-1.8-6.3 0-2.3 1.1-4.7 1.8-6 0 4.1 0 8.2 0 12.3z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  // 14. Redis
  if (normalized.includes("redis")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#dc382d" />
        <path d="M6 10l6-3 6 3-6 3-6-3zm0 4l6 3 6-3v2l-6 3-6-3v-2z" fill="#ffffff" />
      </svg>
    );
  }

  // 15. Chrome / Chrome Extension
  if (normalized.includes("chrome") || normalized.includes("extension")) {
    return <Puzzle className={`${className} text-[#ffd05b]`} aria-hidden="true" />;
  }

  // 16. PyTorch
  if (normalized.includes("pytorch")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#ee4c2c" />
        <path
          d="M13.5 5.5l.8.8c1.6 1.6 2.5 3.8 2.5 6.1 0 2.2-.9 4.4-2.5 6l-1.3 1.3c-.3.3-.8.3-1.1 0l-.8-.8c-.3-.3-.3-.8 0-1.1l1.3-1.3c1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.3-1.9-4.5l-.8-.8c-.3-.3-.3-.8 0-1.1l.8-.8c.3-.3.8-.3 1.1 0zm-2.8 1.8a.9.9 0 110 1.8.9.9 0 010-1.8z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  // 17. Scikit-learn
  if (normalized.includes("scikit") || normalized.includes("sklearn")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#f89939" />
        <circle cx="9" cy="9" r="3.5" fill="#3499cd" />
        <circle cx="15" cy="15" r="3.5" fill="#3499cd" />
        <path d="M10 10l4 4" stroke="#ffffff" strokeWidth="2" />
      </svg>
    );
  }

  // 18. NLP
  if (normalized === "nlp") {
    return <MessageSquareCode className={`${className} text-[#6434df]`} aria-hidden="true" />;
  }

  // 19. LLMs
  if (normalized.includes("llm")) {
    return <Sparkles className={`${className} text-[#ff78c5]`} aria-hidden="true" />;
  }

  // 20. RAG
  if (normalized.includes("rag")) {
    return <Layers className={`${className} text-[#6434df]`} aria-hidden="true" />;
  }

  // 21. AI Agents
  if (normalized.includes("agent")) {
    return <Cpu className={`${className} text-[#05998b]`} aria-hidden="true" />;
  }

  // 22. Git / GitHub
  if (normalized === "git" || normalized.includes("github")) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        fill="none"
        stroke="#f05032"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="9" r="3" />
        <line x1="6" y1="9" x2="6" y2="15" />
        <path d="M9 18h3a3 3 0 0 0 3-3V9" />
      </svg>
    );
  }

  // 23. Docker
  if (normalized.includes("docker")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#2496ed" />
        <path
          d="M4 13h16c0 4-3.5 6-8 6s-8-2-8-6zm2-4h2v2H6V9zm3 0h2v2H9V9zm3 0h2v2h-2V9zm-3-3h2v2H9V6zm3 0h2v2h-2V6zm3 3h2v2h-2V9z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  // 24. Vercel
  if (normalized.includes("vercel")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
        <path d="M12 3l9 16H3l9-16z" fill="#000000" />
      </svg>
    );
  }

  // 25. AWS
  if (normalized.includes("aws")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#232f3e" />
        <path
          d="M6 14.5c2.5 1.5 6 2 9.5.5.5-.2 1 .3.7.7-2 2-6 2.5-9.5 1-.6-.2-.8-.8-.4-1.2zm10-.5c.8-.3 1.8-.4 2.2.3.3.6-.3 1.3-.7 1.6l-1.5-1.9z"
          fill="#ff9900"
        />
      </svg>
    );
  }

  // 26. C++
  if (normalized.includes("c++") || normalized === "cpp") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#00599c" />
        <text
          x="12"
          y="16.5"
          fill="#ffffff"
          fontSize="10"
          fontFamily="monospace"
          fontWeight="900"
          textAnchor="middle"
        >
          C++
        </text>
      </svg>
    );
  }

  // 27. Go
  if (normalized === "go" || normalized.includes("golang")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#00add8" />
        <text
          x="12"
          y="16.5"
          fill="#ffffff"
          fontSize="12"
          fontFamily="monospace"
          fontWeight="900"
          textAnchor="middle"
        >
          GO
        </text>
      </svg>
    );
  }

  // 28. LangChain
  if (normalized.includes("langchain")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#1c3c3c" />
        <circle cx="8" cy="12" r="3" fill="#2fd0a5" />
        <circle cx="16" cy="12" r="3" fill="#ffffff" />
        <path d="M10 12h4" stroke="#2fd0a5" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // 29. Gemini
  if (normalized.includes("gemini")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#1e1e2f" />
        <path
          d="M12 3c0 4.97-4.03 9-9 9 4.97 0 9 4.03 9 9 0-4.97 4.03-9 9-9-4.97 0-9-4.03-9-9z"
          fill="url(#geminiGrad)"
        />
        <defs>
          <linearGradient id="geminiGrad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4e88ff" />
            <stop offset="0.5" stopColor="#9a5eff" />
            <stop offset="1" stopColor="#ff78c5" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 30. Groq
  if (normalized.includes("groq")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#f55036" />
        <path d="M7 12l5-6v4h5l-5 6v-4H7z" fill="#ffffff" />
      </svg>
    );
  }

  // 31. Vector DBs
  if (normalized.includes("vector") || normalized.includes("pinecone") || normalized.includes("chroma")) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        fill="none"
        stroke="#6434df"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    );
  }

  // 32. Linux
  if (normalized.includes("linux") || normalized.includes("vps")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#2d3748" />
        <path
          d="M7 9l4 3-4 3M13 15h4"
          stroke="#ffd05b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  }

  // 33. Server-Sent Events / SSE / Streaming
  if (normalized.includes("stream") || normalized.includes("sse") || normalized.includes("events")) {
    return <Radio className={`${className} text-[#05998b]`} aria-hidden="true" />;
  }

  // 34. PDF / ReportLab
  if (normalized.includes("pdf") || normalized.includes("reportlab")) {
    return <FileText className={`${className} text-[#dc382d]`} aria-hidden="true" />;
  }

  // 35. Web Scraping / BeautifulSoup
  if (normalized.includes("soup") || normalized.includes("scrape")) {
    return <Globe className={`${className} text-[#3776ab]`} aria-hidden="true" />;
  }

  // 36. JSON
  if (normalized.includes("json")) {
    return <Braces className={`${className} text-[#ffd05b]`} aria-hidden="true" />;
  }

  // Default fallback code icon
  return <Code2 className={`${className} text-[var(--dp-color-ink)]`} aria-hidden="true" />;
}

export default TechSymbol;
