import React from "react";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import Button from "@/components/Button";
import { getFeaturedProjects } from "@/lib/projects";
import { profile } from "@/data/profile";

/**
 * Featured Projects section for the home page.
 * Renders up to 4 featured projects via getFeaturedProjects() (server-side,
 * ISR-cached). Shows a link to the full /projects page.
 */
export async function Projects() {
  const featured = await getFeaturedProjects();

  return (
    <section id="projects" className="scroll-mt-24 flex flex-col gap-6">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--dp-color-accent)]">
            Work &amp; Builds
          </span>
          <h2 className="font-display text-3xl font-extrabold text-[var(--dp-color-ink)] tracking-tight">
            Featured Projects
          </h2>
          <p className="font-reading text-sm text-[var(--dp-color-ink)]/75 max-w-lg mt-1">
            A selection of things I&apos;ve built. Full list on the projects page.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-display font-extrabold text-sm px-4 py-2 rounded-[13px] border-[3px] border-[var(--dp-color-outline)] bg-[var(--dp-color-panel)] shadow-hard hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg transition-all duration-[180ms] focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-outline)] focus-visible:outline-offset-4"
          >
            All Projects
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          <Button variant="secondary" size="sm" href={profile.github} external aria-label="View all repositories on GitHub">
            <Github className="w-4 h-4" />
            <span className="sr-only sm:not-sr-only">GitHub</span>
          </Button>
        </div>
      </div>

      {/* Grid */}
      {featured.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      ) : (
        /* Empty state — shown only if somehow no featured projects exist */
        <div className="flex flex-col items-center gap-4 py-16 bg-[var(--dp-color-panel)] border-[3px] border-[var(--dp-color-outline)] rounded-[17px] shadow-hard text-center">
          <span className="text-4xl" aria-hidden="true">🚧</span>
          <p className="font-display font-extrabold text-lg text-[var(--dp-color-ink)]">
            Projects coming soon.
          </p>
          <p className="font-reading text-sm text-[var(--dp-color-ink)]/65 max-w-xs">
            Pin some repos in <code className="font-mono">pinned-projects.ts</code> to feature them here.
          </p>
        </div>
      )}
    </section>
  );
}

export default Projects;

