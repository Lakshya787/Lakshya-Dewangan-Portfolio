export type SkillLevel = "comfortable" | "familiar" | "learning";

export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Database"
  | "AI/ML"
  | "AI Engineering"
  | "Tools"
  | "Cloud";

export interface SkillItem {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  category: SkillCategory;
  note?: string;
  skills: SkillItem[];
}

export const skillsByCategory: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: "comfortable" },
      { name: "JavaScript", level: "comfortable" },
      { name: "TypeScript", level: "comfortable" },
      { name: "C++", level: "familiar" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: "comfortable" },
      { name: "CSS", level: "comfortable" },
      { name: "React", level: "comfortable" },
      { name: "Next.js", level: "comfortable" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "comfortable" },
      { name: "Express", level: "comfortable" },
      { name: "FastAPI", level: "familiar" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", level: "familiar" },
      { name: "MongoDB", level: "familiar" },
      { name: "Redis", level: "learning" },
    ],
  },
  {
    category: "AI/ML",
    skills: [
      { name: "Scikit-learn", level: "familiar" },
      { name: "PyTorch", level: "familiar" },
      { name: "NLP", level: "learning" },
    ],
  },
  {
    category: "AI Engineering",
    note: "Actively exploring as a learning direction",
    skills: [
      { name: "LLMs", level: "learning" },
      { name: "RAG", level: "learning" },
      { name: "AI Agents", level: "learning" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: "comfortable" },
      { name: "GitHub", level: "comfortable" },
      { name: "Docker", level: "familiar" },
    ],
  },
  {
    category: "Cloud",
    skills: [
      { name: "Vercel", level: "comfortable" },
      { name: "AWS", level: "learning" },
    ],
  },
];

// Flat list for easy filtering/lookup
export const allSkills: (SkillItem & { category: SkillCategory })[] =
  skillsByCategory.flatMap((group) =>
    group.skills.map((skill) => ({
      ...skill,
      category: group.category,
    }))
  );

