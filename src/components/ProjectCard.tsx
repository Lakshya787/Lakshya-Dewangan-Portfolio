import React from "react";
import { Github, ExternalLink, Star, Tag } from "lucide-react";
import Button from "@/components/Button";
import type { Project } from "@/lib/projects";

/* ─── Category colour map ────────────────────────────────────────────────── */

const categoryColors: Record<string, { bg: string; shadow: string }> = {
  "Full-Stack": {
    bg: "bg-[var(--dp-color-accent-fresh)]",
    shadow: "shadow-[3px_3px_0px_var(--dp-color-outline)]",
  },
  "AI Engineering": {
    bg: "bg-[var(--dp-color-selection)]",
    shadow: "shadow-[3px_3px_0px_var(--dp-color-accent)]",
  },
  ML: {
    bg: "bg-[var(--dp-color-accent-secondary)]",
    shadow: "shadow-[3px_3px_0px_var(--dp-color-outline)]",
  },
  Tools: {
    bg: "bg-[var(--dp-color-accent-warm)]",
    shadow: "shadow-[3px_3px_0px_var(--dp-color-outline)]",
  },
};

const statusColors: Record<string, string> = {
  Completed: "bg-[var(--dp-color-accent-fresh)] text-[var(--dp-color-ink)]",
  "In Progress": "bg-[var(--dp-color-accent-warm)] text-[var(--dp-color-ink)]",
  Archived: "bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)]/60",
};

/* ─── Thumbnail placeholder ──────────────────────────────────────────────── */

/**
 * Generates a deterministic accent colour index based on the project title.
 * This gives each card a unique but stable colour without fetching external
 * thumbnail images that might not exist.
 */
function thumbnailColor(title: string): { bg: string; text: string; shape: string } {
  const palettes = [
    { bg: "bg-[var(--dp-color-selection)]", text: "text-[var(--dp-color-accent)]", shape: "bg-[var(--dp-color-accent)]" },
    { bg: "bg-[var(--dp-color-accent-fresh)]", text: "text-[var(--dp-color-ink)]", shape: "bg-[var(--dp-color-accent-fresh)]" },
    { bg: "bg-[var(--dp-color-accent-warm)]", text: "text-[var(--dp-color-ink)]", shape: "bg-[var(--dp-color-accent-warm)]" },
    { bg: "bg-[#fce7f3]", text: "text-[var(--dp-color-ink)]", shape: "bg-[var(--dp-color-accent-secondary)]" },
  ];
  const idx = title.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % palettes.length;
  return palettes[idx];
}

/**
 * Stagger variants: each card index gets a slightly different thumbnail crop
 * to break the grid uniformity.
 */
const thumbnailShapes = [
  // Arch-like: large circle overflowing the top
  <div key="a" aria-hidden="true" className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full opacity-30 border-[3px] border-[var(--dp-color-outline)]" />,
  // Diagonal block
  <div key="b" aria-hidden="true" className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-[40px] opacity-30 border-[3px] border-[var(--dp-color-outline)]" />,
  // Small centered circle
  <div key="c" aria-hidden="true" className="absolute inset-0 m-auto w-20 h-20 rounded-full opacity-25 border-[3px] border-[var(--dp-color-outline)]" />,
  // Corner triangle-ish block
  <div key="d" aria-hidden="true" className="absolute top-2 left-2 w-16 h-16 rounded-[14px] opacity-30 border-[3px] border-[var(--dp-color-outline)] rotate-12" />,
];

/* ─── Language dot ───────────────────────────────────────────────────────── */

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-400",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-400",
  Go: "bg-cyan-400",
  HTML: "bg-orange-400",
  CSS: "bg-purple-400",
  Rust: "bg-orange-600",
  Java: "bg-red-500",
  "C++": "bg-pink-400",
};

function LanguageDot({ lang }: { lang: string }) {
  const dotColor = languageColors[lang] ?? "bg-[var(--dp-color-rule-muted)]";
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[var(--dp-color-ink)]/70">
      <span className={`w-2.5 h-2.5 rounded-full shrink-0 border-[1.5px] border-[var(--dp-color-outline)] ${dotColor}`} aria-hidden="true" />
      {lang}
    </span>
  );
}

/* ─── ProjectCard ────────────────────────────────────────────────────────── */

export interface ProjectCardProps {
  project: Project;
  /** Index in the grid — drives thumbnail stagger and shape variant */
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const catStyle = categoryColors[project.category] ?? categoryColors["Full-Stack"];
  const thumbPalette = thumbnailColor(project.title);
  const shapeEl = thumbnailShapes[index % thumbnailShapes.length];

  return (
    <article
      className="group relative flex flex-col bg-[var(--dp-color-panel)] border-[3px] border-[var(--dp-color-outline)] rounded-[17px] shadow-hard overflow-visible transition-all duration-[180ms] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-hard-lg"
      aria-label={project.title}
    >
      {/* Featured ribbon */}
      {project.featured && (
        <div
          aria-label="Featured project"
          className="absolute -top-3 -right-3 z-20 px-2.5 py-0.5 bg-[var(--dp-color-accent)] border-[2.5px] border-[var(--dp-color-outline)] rounded-full shadow-[2px_2px_0px_var(--dp-color-outline)] font-display font-extrabold text-[10px] uppercase tracking-widest text-white"
        >
          ★ Featured
        </div>
      )}

      {/* Thumbnail */}
      <div
        className={`relative w-full h-[140px] overflow-hidden rounded-t-[14px] border-b-[3px] border-[var(--dp-color-outline)] ${thumbPalette.bg} flex items-center justify-center`}
        aria-hidden="true"
        role="presentation"
      >
        {/* Coloured geometric shapes — staggered per card index */}
        <div className={`absolute w-12 h-12 rounded-full ${thumbPalette.shape} opacity-40 border-[2px] border-[var(--dp-color-outline)]`} />
        {shapeEl}
        {/* Project initials */}
        <span className={`relative z-10 font-display font-black text-4xl ${thumbPalette.text} select-none drop-shadow-none opacity-80`}>
          {project.title
            .split(/\s+/)
            .slice(0, 2)
            .map((w) => w[0]?.toUpperCase())
            .join("")}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 gap-4 p-5">
        {/* Tags row */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Category */}
          <span
            className={`px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-[8px] border-[2px] border-[var(--dp-color-outline)] ${catStyle.bg} ${catStyle.shadow} text-[var(--dp-color-ink)]`}
          >
            {project.category}
          </span>

          {/* Status */}
          <span
            className={`px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-[8px] border-[2px] border-[var(--dp-color-outline)] ${statusColors[project.status] ?? statusColors["Completed"]}`}
          >
            {project.status}
          </span>
        </div>

        {/* Title + description */}
        <div className="flex flex-col gap-1.5">
          <h3 className="font-display text-lg font-black text-[var(--dp-color-ink)] leading-tight">
            {project.title}
          </h3>
          <p className="font-reading text-sm text-[var(--dp-color-ink)]/75 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech stack chips */}
        {project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5" aria-label="Tech stack">
            {project.techStack.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded-[6px] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-outline)] text-[var(--dp-color-ink)] font-semibold"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 6 && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-[6px] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-outline)] text-[var(--dp-color-ink)]/50 font-semibold">
                +{project.techStack.length - 6} more
              </span>
            )}
          </div>
        )}

        {/* Spacer pushes footer to bottom */}
        <div className="flex-1" />

        {/* Footer: language + stars + links */}
        <div className="pt-3 border-t-[2px] border-[var(--dp-color-rule-muted)]/30 flex items-center justify-between gap-3 flex-wrap">
          {/* Meta: language + stars */}
          <div className="flex items-center gap-3">
            {project.language && <LanguageDot lang={project.language} />}
            {project.stars > 0 && (
              <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-[var(--dp-color-ink)]/60">
                <Star className="w-3 h-3" aria-hidden="true" />
                {project.stars}
              </span>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              href={project.repoUrl}
              external
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-3.5 h-3.5" />
              <span>Code</span>
            </Button>

            {project.demoUrl && (
              <Button
                variant="primary"
                size="sm"
                href={project.demoUrl}
                external
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Demo</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

