import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Star,
  CheckCircle2,
  Lightbulb,
  Layers,
  Zap,
  AlertTriangle,
  BookOpen,
  Camera,
  FlaskConical,
} from "lucide-react";
import { getAllProjects, getProjectBySlug, type Project, type ProjectDetail } from "@/lib/projects";
import { pinnedProjects, type PinnedProject } from "@/data/pinned-projects";
import Button from "@/components/Button";

/* ─── Static params ──────────────────────────────────────────────────────── */

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

/* ─── Metadata ───────────────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) {
    return { title: "Project not found — Lakshya" };
  }
  return {
    title: `${project.title} — Lakshya`,
    description: project.description,
  };
}

/* ─── Category colour map ────────────────────────────────────────────────── */

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Full-Stack":     { bg: "bg-[var(--dp-color-accent-fresh)]",     text: "text-[var(--dp-color-ink)]" },
  "AI Engineering": { bg: "bg-[var(--dp-color-selection)]",        text: "text-[var(--dp-color-accent)]" },
  ML:               { bg: "bg-[var(--dp-color-accent-secondary)]", text: "text-[var(--dp-color-ink)]" },
  Tools:            { bg: "bg-[var(--dp-color-accent-warm)]",      text: "text-[var(--dp-color-ink)]" },
};

/* ─── Numbered process sections ─────────────────────────────────────────────
 *
 * Each section has: a number badge (different shapes per step), an icon,
 * a title, and a render function.
 *
 * Shapes cycle: circle → diamond → pentagon → hexagon → circle → ...
 * Implemented as Tailwind-based clips / border tricks so no SVG required.
 * ─────────────────────────────────────────────────────────────────────────── */

type SectionDef = {
  key: keyof ProjectDetail | "techStackSection";
  title: string;
  Icon: typeof CheckCircle2;
  /** Shape variant drives badge appearance */
  shape: "circle" | "diamond" | "rounded-square" | "pill" | "hexish";
  render: (project: Project) => React.ReactNode | null;
};

const SECTIONS: SectionDef[] = [
  {
    key: "problem",
    title: "Problem Statement",
    Icon: AlertTriangle,
    shape: "circle",
    render: (p) =>
      p.detail?.problem ? (
        <p className="font-reading text-base text-[var(--dp-color-ink)]/85 leading-[1.75] max-w-3xl">
          {p.detail.problem}
        </p>
      ) : null,
  },
  {
    key: "motivation",
    title: "Motivation",
    Icon: Lightbulb,
    shape: "diamond",
    render: (p) =>
      p.detail?.motivation ? (
        <p className="font-reading text-base text-[var(--dp-color-ink)]/85 leading-[1.75] max-w-3xl">
          {p.detail.motivation}
        </p>
      ) : null,
  },
  {
    key: "features",
    title: "Key Features",
    Icon: CheckCircle2,
    shape: "rounded-square",
    render: (p) =>
      p.detail?.features?.length ? (
        <ul className="flex flex-col gap-2 max-w-2xl">
          {p.detail.features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 font-reading text-sm text-[var(--dp-color-ink)]/85 leading-relaxed">
              <span className="mt-[5px] w-2 h-2 rounded-full bg-[var(--dp-color-accent)] border-[1.5px] border-[var(--dp-color-outline)] shrink-0" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
      ) : null,
  },
  {
    key: "techStackSection",
    title: "Tech Stack",
    Icon: Layers,
    shape: "pill",
    render: (p) =>
      p.techStack.length ? (
        <div className="flex flex-wrap gap-2 max-w-2xl" aria-label="Technologies used">
          {p.techStack.map((t) => (
            <span
              key={t}
              className="font-mono text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--dp-color-ground)] border-[2px] border-[var(--dp-color-outline)] shadow-[2px_2px_0px_var(--dp-color-outline)] text-[var(--dp-color-ink)]"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null,
  },
  {
    key: "architecture",
    title: "Architecture",
    Icon: FlaskConical,
    shape: "hexish",
    render: (p) => {
      const arch = p.detail?.architecture;
      if (!arch) return null;
      return (
        <div className="flex flex-col gap-4 max-w-3xl">
          <p className="font-reading text-sm text-[var(--dp-color-ink)]/85 leading-relaxed">
            {arch.description}
          </p>
          {arch.imageSrc && (
            <div className="relative w-full max-w-2xl">
              {/* Coloured hard shadow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-[6px] translate-y-[6px] rounded-[14px] bg-[var(--dp-color-accent-fresh)] border-[2px] border-[var(--dp-color-outline)]"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={arch.imageSrc}
                alt={arch.imageAlt ?? "Architecture diagram"}
                className="relative z-10 w-full rounded-[14px] border-[3px] border-[var(--dp-color-outline)] object-cover"
                width={800}
                height={450}
              />
            </div>
          )}
        </div>
      );
    },
  },
  {
    key: "implementation",
    title: "Implementation Details",
    Icon: Zap,
    shape: "circle",
    render: (p) =>
      p.detail?.implementation?.length ? (
        <ul className="flex flex-col gap-3 max-w-3xl">
          {p.detail.implementation.map((item, i) => (
            <li key={i} className="flex items-start gap-3 font-reading text-sm text-[var(--dp-color-ink)]/85 leading-relaxed">
              <span className="shrink-0 mt-0.5 font-mono font-black text-[10px] w-5 h-5 rounded-[6px] bg-[var(--dp-color-accent)] text-white flex items-center justify-center border-[1.5px] border-[var(--dp-color-outline)] shadow-[1px_1px_0px_var(--dp-color-outline)]">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>
      ) : null,
  },
  {
    key: "challenges",
    title: "Challenges",
    Icon: AlertTriangle,
    shape: "diamond",
    render: (p) =>
      p.detail?.challenges?.length ? (
        <ul className="flex flex-col gap-3 max-w-3xl">
          {p.detail.challenges.map((c, i) => (
            <li key={i} className="flex items-start gap-3 font-reading text-sm text-[var(--dp-color-ink)]/85 leading-relaxed">
              <span className="mt-[5px] w-2.5 h-2.5 rounded-[3px] bg-[var(--dp-color-accent-secondary)] border-[1.5px] border-[var(--dp-color-outline)] shrink-0 rotate-45" aria-hidden="true" />
              {c}
            </li>
          ))}
        </ul>
      ) : null,
  },
  {
    key: "learned",
    title: "What I Learned",
    Icon: BookOpen,
    shape: "rounded-square",
    render: (p) =>
      p.detail?.learned?.length ? (
        <ul className="flex flex-col gap-2.5 max-w-2xl">
          {p.detail.learned.map((l, i) => (
            <li key={i} className="flex items-start gap-3 font-reading text-sm text-[var(--dp-color-ink)]/85 leading-relaxed">
              <span className="mt-[3px] shrink-0 w-5 h-5 rounded-full bg-[var(--dp-color-accent-fresh)] border-[1.5px] border-[var(--dp-color-outline)] shadow-[1.5px_1.5px_0px_var(--dp-color-outline)] flex items-center justify-center">
                <BookOpen className="w-2.5 h-2.5 text-[var(--dp-color-ink)]" aria-hidden="true" />
              </span>
              {l}
            </li>
          ))}
        </ul>
      ) : null,
  },
  {
    key: "screenshots",
    title: "Screenshots",
    Icon: Camera,
    shape: "pill",
    render: (p) => {
      const shots = p.detail?.screenshots;
      if (!shots?.length) return null;
      // Alternating crop shapes: rounded-full top, square-ish, rounded large, arched
      const cropStyles = [
        "rounded-t-full rounded-b-[20px]",  // arch
        "rounded-[20px]",                    // square-ish rounded
        "rounded-[40px]",                    // very rounded
        "rounded-[20px] rounded-tl-[60px]", // asymmetric
      ];
      // Alternating hard shadow colours
      const shadowColors = [
        "bg-[var(--dp-color-accent)]",
        "bg-[var(--dp-color-accent-warm)]",
        "bg-[var(--dp-color-accent-fresh)]",
        "bg-[var(--dp-color-accent-secondary)]",
      ];
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl">
          {shots.map((shot, i) => (
            <figure key={i} className="flex flex-col gap-2">
              {/* Shadow backing + image */}
              <div className="relative w-full aspect-video">
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 translate-x-[6px] translate-y-[6px] ${shadowColors[i % shadowColors.length]} border-[2px] border-[var(--dp-color-outline)] ${cropStyles[i % cropStyles.length]}`}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.src}
                  alt={shot.alt}
                  width={600}
                  height={338}
                  className={`relative z-10 w-full h-full object-cover border-[3px] border-[var(--dp-color-outline)] ${cropStyles[i % cropStyles.length]}`}
                />
              </div>
              {shot.caption && (
                <figcaption className="font-reading text-xs text-[var(--dp-color-ink)]/55 text-center leading-snug">
                  {shot.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      );
    },
  },
];

/* ─── Badge shapes ───────────────────────────────────────────────────────── */

function StepBadge({
  number,
  shape,
}: {
  number: number;
  shape: SectionDef["shape"];
}) {
  const base =
    "shrink-0 w-8 h-8 flex items-center justify-center font-display font-black text-xs text-white bg-[var(--dp-color-accent)] border-[2.5px] border-[var(--dp-color-outline)] shadow-[2px_2px_0px_var(--dp-color-outline)]";

  const shapeClass: Record<SectionDef["shape"], string> = {
    circle:         "rounded-full",
    diamond:        "rounded-[4px] rotate-45",
    "rounded-square": "rounded-[8px]",
    pill:           "rounded-full w-10 h-6",
    hexish:         "rounded-[6px]",
  };

  const labelClass = shape === "diamond" ? "-rotate-45" : "";

  return (
    <span className={`${base} ${shapeClass[shape]}`} aria-hidden="true">
      <span className={labelClass}>{number}</span>
    </span>
  );
}

/* ─── Section row ────────────────────────────────────────────────────────── */

function ProcessSection({
  number,
  title,
  Icon,
  shape,
  isLast,
  children,
}: {
  number: number;
  title: string;
  Icon: typeof CheckCircle2;
  shape: SectionDef["shape"];
  isLast: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex gap-5 sm:gap-7">
      {/* Left rail: badge + vertical line */}
      <div className="flex flex-col items-center">
        <StepBadge number={number} shape={shape} />
        {!isLast && (
          <div
            aria-hidden="true"
            className="mt-2 w-0.5 flex-1 min-h-[2rem] bg-[var(--dp-color-outline)] opacity-15 rounded-full"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 pb-8 min-w-0 flex-1">
        <div className="flex items-center gap-2 pt-1">
          <Icon className="w-4 h-4 text-[var(--dp-color-accent)] shrink-0" aria-hidden="true" />
          <h2 className="font-display font-black text-lg text-[var(--dp-color-ink)] tracking-tight">
            {title}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

/* ─── Language dot ───────────────────────────────────────────────────────── */

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-400",
  JavaScript: "bg-yellow-400",
  Python:     "bg-green-400",
  Go:         "bg-cyan-400",
  HTML:       "bg-orange-400",
  CSS:        "bg-purple-400",
  Rust:       "bg-orange-600",
  Java:       "bg-red-500",
  "C++":      "bg-pink-400",
};

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const catStyle = categoryColors[project.category] ?? categoryColors["Full-Stack"];
  const langDot  = project.language ? (languageColors[project.language] ?? "bg-[var(--dp-color-rule-muted)]") : null;

  // Filter sections to those with actual content
  const activeSections = SECTIONS.filter((sec) => {
    const content = sec.render(project);
    return content !== null && content !== undefined;
  });

  return (
    <div className="py-8 sm:py-12 flex flex-col gap-10">

      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 font-display font-extrabold text-sm text-[var(--dp-color-ink)]/65 hover:text-[var(--dp-color-accent)] transition-colors duration-[180ms] focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-outline)] focus-visible:outline-offset-4 rounded-[6px] self-start"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        All projects
      </Link>

      {/* ── Book container ────────────────────────────────────────────────── */}
      <div className="relative">
        {/* Violet hard-offset backing layer */}
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-[5px] translate-y-[5px] sm:translate-x-[8px] sm:translate-y-[8px] rounded-[24px] bg-[var(--dp-color-accent)] border-[3px] border-[var(--dp-color-outline)]"
        />

        {/* Tab label */}
        <div className="absolute -top-3.5 left-5 sm:left-8 z-20">
          <span
            className={`${catStyle.bg} ${catStyle.text} inline-block px-3 py-0.5 rounded-full border-[2.5px] border-[var(--dp-color-outline)] font-display font-extrabold text-[11px] uppercase tracking-widest shadow-[2px_2px_0px_var(--dp-color-outline)]`}
          >
            {project.category}
          </span>
        </div>

        {/* White panel */}
        <div className="relative z-10 bg-[var(--dp-color-panel)] border-[3px] border-[var(--dp-color-outline)] rounded-[24px] overflow-hidden">

          {/* ── Project header ─────────────────────────────────────────── */}
          <div className="p-6 sm:p-10 border-b-[3px] border-[var(--dp-color-outline)] flex flex-col gap-5">
            {/* Status + stars row */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-[8px] border-[2px] border-[var(--dp-color-outline)] bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)]">
                {project.status}
              </span>
              {project.featured && (
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-[8px] border-[2px] border-[var(--dp-color-outline)] bg-[var(--dp-color-accent)] text-white">
                  ★ Featured
                </span>
              )}
              {project.stars > 0 && (
                <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-[var(--dp-color-ink)]/55 px-2.5 py-0.5 rounded-[8px] border-[2px] border-[var(--dp-color-outline)] bg-[var(--dp-color-ground)]">
                  <Star className="w-3 h-3" aria-hidden="true" />
                  {project.stars} stars
                </span>
              )}
              {langDot && project.language && (
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[var(--dp-color-ink)]/65 px-2.5 py-0.5 rounded-[8px] border-[2px] border-[var(--dp-color-outline)] bg-[var(--dp-color-ground)]">
                  <span className={`w-2.5 h-2.5 rounded-full ${langDot} border-[1.5px] border-[var(--dp-color-outline)]`} aria-hidden="true" />
                  {project.language}
                </span>
              )}
            </div>

            {/* Title */}
            <div>
              <h1 className="font-display font-black text-3xl sm:text-5xl text-[var(--dp-color-ink)] tracking-tight leading-none">
                {project.title}
              </h1>
              <p className="font-reading text-base sm:text-lg text-[var(--dp-color-ink)]/75 leading-relaxed mt-3 max-w-2xl">
                {project.description}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button variant="secondary" size="md" href={project.repoUrl} external>
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </Button>
              {project.demoUrl && (
                <Button variant="primary" size="md" href={project.demoUrl} external>
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </Button>
              )}
            </div>
          </div>

          {/* ── Process strip ─────────────────────────────────────────── */}
          {activeSections.length > 0 ? (
            <div className="p-6 sm:p-10">
              <div className="flex flex-col">
                {activeSections.map((sec, idx) => (
                  <ProcessSection
                    key={sec.key}
                    number={idx + 1}
                    title={sec.title}
                    Icon={sec.Icon}
                    shape={sec.shape}
                    isLast={idx === activeSections.length - 1}
                  >
                    {sec.render(project)}
                  </ProcessSection>
                ))}
              </div>
            </div>
          ) : (
            /* No detail content — friendly prompt */
            <div className="p-8 sm:p-12 flex flex-col items-center gap-4 text-center">
              <span className="text-4xl" aria-hidden="true">📂</span>
              <p className="font-display font-black text-xl text-[var(--dp-color-ink)]">
                Detail coming soon.
              </p>
              <p className="font-reading text-sm text-[var(--dp-color-ink)]/60 max-w-xs">
                Add a <code className="font-mono">detail</code> field to this project in{" "}
                <code className="font-mono">pinned-projects.ts</code> to fill in this page.
              </p>
              <Button variant="secondary" size="md" href={project.repoUrl} external className="mt-2">
                <Github className="w-4 h-4" />
                <span>View source on GitHub</span>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* ── Bottom nav ──────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 font-display font-extrabold text-sm text-[var(--dp-color-ink)]/65 hover:text-[var(--dp-color-accent)] transition-colors duration-[180ms] focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-outline)] focus-visible:outline-offset-4 rounded-[6px]"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to all projects
        </Link>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" href={project.repoUrl} external>
            <Github className="w-3.5 h-3.5" />
            <span>Code</span>
          </Button>
          {project.demoUrl && (
            <Button variant="primary" size="sm" href={project.demoUrl} external>
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Demo</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

