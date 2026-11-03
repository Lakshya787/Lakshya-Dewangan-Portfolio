import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  GitPullRequest,
  Github,
  Star,
  Compass,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Code2,
} from "lucide-react";
import Button from "@/components/Button";
import { plannedContributions, roadmapStages } from "@/data/contributions";
import { profile } from "@/data/profile";

export const metadata = {
  title: "GitHub Contributions in Big Repos — Lakshya Dewangan",
  description:
    "Open source roadmap and planned contributions to large repositories by Lakshya Dewangan.",
};

export default function ContributionsPage() {
  return (
    <div className="py-6 sm:py-10 space-y-8 sm:space-y-12">
      {/* ─── Top Navigation ──────────────────────────────────────────────── */}
      <nav aria-label="Page navigation" className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-display font-extrabold text-[var(--dp-color-ink)] hover:text-[var(--dp-color-accent)] transition-colors group focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-outline)] focus-visible:outline-offset-4 rounded-[8px]"
        >
          <span className="p-1.5 rounded-[8px] border-[2px] border-[var(--dp-color-outline)] bg-[var(--dp-color-panel)] shadow-[2px_2px_0px_var(--dp-color-outline)] group-hover:-translate-x-0.5 group-hover:shadow-[3px_3px_0px_var(--dp-color-outline)] transition-all">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          </span>
          <span>Back to Home</span>
        </Link>

        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[var(--dp-color-accent)] hover:underline"
        >
          <span>Explore Projects</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </nav>

      {/* ─── Page Header ─────────────────────────────────────────────────── */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[10px] border-[2px] border-[var(--dp-color-outline)] bg-[var(--dp-color-accent-fresh)] text-[var(--dp-color-ink)] font-mono text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_var(--dp-color-outline)]">
            <Compass className="w-3.5 h-3.5" aria-hidden="true" />
            Open Source & Community
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[10px] border-[2px] border-[var(--dp-color-outline)] bg-[var(--dp-color-accent-warm)] text-[var(--dp-color-ink)] font-mono text-xs font-bold shadow-[2px_2px_0px_var(--dp-color-outline)]">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            Future Work & Roadmap
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-[var(--dp-color-ink)]">
              Contributions in Big Repos
            </h1>
            <p className="font-reading text-base sm:text-lg text-[var(--dp-color-ink)]/75 max-w-2xl mt-2">
              A transparent, forward-looking roadmap for contributing to major open-source
              ecosystems. Currently diving deep into codebases, documentation, and tooling
              architecture before landing merged pull requests.
            </p>
          </div>

          <Button
            href={profile.github}
            external
            variant="primary"
            size="sm"
            className="shrink-0 self-start md:self-auto"
          >
            <Github className="w-4 h-4" aria-hidden="true" />
            <span>GitHub Profile</span>
          </Button>
        </div>
      </header>

      {/* ─── Roadmap Strip ──────────────────────────────────────────────── */}
      <section
        aria-labelledby="roadmap-heading"
        className="p-5 sm:p-6 bg-[var(--dp-color-panel)] border-[3px] border-[var(--dp-color-outline)] rounded-[17px] shadow-hard space-y-4"
      >
        <div className="flex items-center justify-between gap-2 border-b-[2px] border-[var(--dp-color-outline)]/20 pb-3">
          <h2
            id="roadmap-heading"
            className="font-display font-black text-lg sm:text-xl text-[var(--dp-color-ink)] flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-[var(--dp-color-accent)]" aria-hidden="true" />
            <span>Contribution Roadmap</span>
          </h2>
          <span className="font-mono text-xs font-bold text-[var(--dp-color-ink)]/60">
            Phase 1 in progress
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roadmapStages.map((stage, idx) => (
            <div
              key={stage.id}
              className={`p-4 rounded-[12px] border-[2px] border-[var(--dp-color-outline)] relative transition-all ${
                stage.active
                  ? "bg-[var(--dp-color-selection)] shadow-[3px_3px_0px_var(--dp-color-outline)]"
                  : "bg-[var(--dp-color-ground)] opacity-85"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-black uppercase text-[var(--dp-color-accent)]">
                  Step 0{idx + 1}
                </span>
                {stage.active ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[6px] bg-[var(--dp-color-accent-fresh)] border-[1.5px] border-[var(--dp-color-outline)] font-mono text-[10px] font-bold">
                    Active
                  </span>
                ) : (
                  <span className="font-mono text-[10px] text-[var(--dp-color-ink)]/50">
                    Upcoming
                  </span>
                )}
              </div>
              <h3 className="font-display font-bold text-base text-[var(--dp-color-ink)]">
                {stage.label}
              </h3>
              <p className="font-reading text-xs text-[var(--dp-color-ink)]/75 mt-1 leading-relaxed">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Targeted Repositories ───────────────────────────────────────── */}
      <section aria-labelledby="targeted-repos-heading" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2
              id="targeted-repos-heading"
              className="font-display font-black text-2xl sm:text-3xl text-[var(--dp-color-ink)]"
            >
              Target Repositories
            </h2>
            <p className="font-reading text-sm text-[var(--dp-color-ink)]/70">
              High-impact projects in web infrastructure and AI where I am studying the codebase to submit my first PRs.
            </p>
          </div>
          <span className="font-mono text-xs font-bold text-[var(--dp-color-ink)]/60 bg-[var(--dp-color-panel)] px-3 py-1.5 rounded-[10px] border-[2px] border-[var(--dp-color-outline)] shadow-[2px_2px_0px_var(--dp-color-outline)] shrink-0 self-start sm:self-auto">
            {plannedContributions.length} Target Codebases
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {plannedContributions.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between p-5 sm:p-6 bg-[var(--dp-color-panel)] border-[3px] border-[var(--dp-color-outline)] rounded-[17px] shadow-hard hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg transition-all duration-[180ms]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[8px] border-[2px] border-[var(--dp-color-outline)] bg-[var(--dp-color-ground)] font-mono text-xs font-black text-[var(--dp-color-ink)]">
                    <Code2 className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" aria-hidden="true" />
                    {item.language || "TypeScript"}
                  </span>

                  {item.repoStars && (
                    <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[var(--dp-color-ink)]/70">
                      <Star className="w-3.5 h-3.5 fill-[var(--dp-color-accent-warm)] text-[var(--dp-color-outline)]" aria-hidden="true" />
                      {item.repoStars}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display font-black text-xl text-[var(--dp-color-ink)] group-hover:text-[var(--dp-color-accent)] transition-colors">
                    {item.repo}
                  </h3>
                  <p className="font-mono text-xs text-[var(--dp-color-accent)] font-bold mt-0.5">
                    Target Area: {item.area}
                  </p>
                </div>

                <p className="font-reading text-sm text-[var(--dp-color-ink)]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 mt-2 border-t-[2px] border-[var(--dp-color-outline)]/15">
                <div className="flex flex-wrap gap-1.5">
                  {item.requiredSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-[6px] border-[1.5px] border-[var(--dp-color-outline)] bg-[var(--dp-color-field-soft)] text-[var(--dp-color-ink)] font-mono text-[11px] font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="font-mono text-[11px] font-bold text-[var(--dp-color-ink)]/60 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" aria-hidden="true" />
                    Status: <span className="capitalize text-[var(--dp-color-ink)] font-black">{item.status}</span>
                  </span>

                  <a
                    href={item.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-display font-black text-[var(--dp-color-ink)] hover:text-[var(--dp-color-accent)] transition-colors group/link"
                  >
                    <span>Inspect Repo</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── Commitment Statement ────────────────────────────────────────── */}
      <section
        aria-labelledby="philosophy-heading"
        className="p-6 sm:p-8 bg-[var(--dp-color-ground)] border-[3px] border-[var(--dp-color-outline)] rounded-[17px] shadow-hard space-y-3"
      >
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[var(--dp-color-accent)]" aria-hidden="true" />
          <h2 id="philosophy-heading" className="font-display font-black text-xl text-[var(--dp-color-ink)]">
            Open Source Philosophy
          </h2>
        </div>
        <p className="font-reading text-sm sm:text-base text-[var(--dp-color-ink)]/80 leading-relaxed max-w-3xl">
          High-reputation repositories have stringent review bars. Rather than sending trivial typo PRs, my approach is to first build working systems with the technology, read issues deeply, understand maintainer preferences, and contribute meaningful bug fixes, edge-case test coverage, and documentation improvements.
        </p>
      </section>
    </div>
  );
}

