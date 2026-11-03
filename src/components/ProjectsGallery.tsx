"use client";

import React from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project, ProjectCategory } from "@/lib/projects";

/* ─── Category config ────────────────────────────────────────────────────── */

const ALL_CATEGORIES: Array<ProjectCategory | "All"> = [
  "All",
  "Full-Stack",
  "AI Engineering",
  "ML",
  "Tools",
];

const categoryLabels: Record<ProjectCategory | "All", string> = {
  All: "All",
  "Full-Stack": "Full-Stack",
  "AI Engineering": "AI Engineering",
  ML: "ML",
  Tools: "Tools",
};

/* ─── FilterButton ───────────────────────────────────────────────────────── */

function FilterButton({
  label,
  active,
  count,
  onClick,
}: {
  label: string;
  active: boolean;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-[13px] border-[3px] border-[var(--dp-color-outline)]",
        "font-display font-extrabold text-sm",
        "transition-all duration-[180ms]",
        "focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-outline)] focus-visible:outline-offset-4",
        active
          ? "bg-[var(--dp-color-selection)] text-[var(--dp-color-accent)] shadow-[4px_4px_0px_var(--dp-color-accent)]"
          : "bg-[var(--dp-color-panel)] text-[var(--dp-color-ink)] shadow-hard hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg",
      ].join(" ")}
    >
      {label}
      <span
        className={[
          "text-[10px] font-mono font-extrabold px-1.5 py-0.5 rounded-full border-[1.5px] border-[var(--dp-color-outline)]",
          active
            ? "bg-[var(--dp-color-accent)] text-white"
            : "bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)]/60",
        ].join(" ")}
        aria-hidden="true"
      >
        {count}
      </span>
    </button>
  );
}

/* ─── Empty state ────────────────────────────────────────────────────────── */

function EmptyState({ category }: { category: string }) {
  return (
    <div
      role="status"
      className="col-span-full flex flex-col items-center gap-4 py-20 bg-[var(--dp-color-panel)] border-[3px] border-[var(--dp-color-outline)] rounded-[17px] shadow-hard text-center"
    >
      <span className="text-5xl select-none" aria-hidden="true">
        🔭
      </span>
      <div className="space-y-1">
        <p className="font-display font-black text-xl text-[var(--dp-color-ink)]">
          No {category === "All" ? "" : category + " "}projects yet.
        </p>
        <p className="font-reading text-sm text-[var(--dp-color-ink)]/60 max-w-xs mx-auto">
          {category === "All"
            ? "Add entries to pinned-projects.ts to show them here."
            : `There are no projects in the "${category}" category yet. Try another filter.`}
        </p>
      </div>
    </div>
  );
}

/* ─── ProjectsGallery (client — owns filter state) ──────────────────────── */

export function ProjectsGallery({ projects }: { projects: Project[] }) {
  const [active, setActive] = React.useState<ProjectCategory | "All">("All");

  const counts = React.useMemo(() => {
    const map: Record<string, number> = { All: projects.length };
    for (const p of projects) {
      map[p.category] = (map[p.category] ?? 0) + 1;
    }
    return map;
  }, [projects]);

  const filtered = React.useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [projects, active]
  );

  return (
    <div className="flex flex-col gap-8">
      {/* Filter bar */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {ALL_CATEGORIES.map((cat) => (
          <FilterButton
            key={cat}
            label={categoryLabels[cat]}
            active={active === cat}
            count={counts[cat] ?? 0}
            onClick={() => setActive(cat)}
          />
        ))}
      </div>

      {/* Status summary for screen readers */}
      <p className="sr-only" aria-live="polite">
        Showing {filtered.length} {active === "All" ? "" : active + " "}project
        {filtered.length !== 1 ? "s" : ""}.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))
        ) : (
          <EmptyState category={active} />
        )}
      </div>
    </div>
  );
}

export default ProjectsGallery;

