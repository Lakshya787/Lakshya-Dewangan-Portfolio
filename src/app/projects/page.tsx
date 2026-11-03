import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllProjects } from "@/lib/projects";
import { ProjectsGallery } from "@/components/ProjectsGallery";

export const metadata = {
  title: "Projects — Lakshya",
  description:
    "All projects by Lakshya — Full-Stack, AI Engineering, ML, and Tools. Filterable by category.",
};

/**
 * /projects — Full project gallery page.
 *
 * Server component: fetches all projects (pinned + GitHub repos, ISR-cached)
 * and passes them down to the client ProjectsGallery for interactive filtering.
 */
export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="py-8 sm:py-12 flex flex-col gap-10">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 font-display font-extrabold text-sm text-[var(--dp-color-ink)]/70 hover:text-[var(--dp-color-accent)] transition-colors duration-[180ms] focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-outline)] focus-visible:outline-offset-4 rounded-[6px] self-start"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        Back to home
      </Link>

      {/* Page header */}
      <div className="flex flex-col gap-3 pb-2 border-b-[3px] border-[var(--dp-color-outline)]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--dp-color-accent)]">
              Work &amp; Builds
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-[var(--dp-color-ink)] tracking-tight leading-none mt-1">
              All Projects
            </h1>
          </div>

          {/* Stats pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--dp-color-panel)] border-[3px] border-[var(--dp-color-outline)] rounded-[13px] shadow-hard self-start sm:self-auto shrink-0">
            <span className="w-2 h-2 rounded-full bg-[var(--dp-color-accent)] border-[1.5px] border-[var(--dp-color-outline)] shrink-0" aria-hidden="true" />
            <span className="font-display font-extrabold text-sm text-[var(--dp-color-ink)]">
              {projects.length} project{projects.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        <p className="font-reading text-sm text-[var(--dp-color-ink)]/70 max-w-2xl leading-relaxed">
          Everything I&apos;ve built or contributed to — from full-stack web apps to AI explorations and small tools.
          Filter by category to find what you&apos;re looking for.
        </p>
      </div>

      {/* Gallery with client-side category filters */}
      <ProjectsGallery projects={projects} />
    </div>
  );
}

