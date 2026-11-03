import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Briefcase,
  Trophy,
  ExternalLink,
  Calendar,
  MapPin,
  Sparkles,
  Ticket,
  Mail,
  Linkedin,
  FileText,
  Compass,
  Code2,
  Server,
  Cpu,
} from "lucide-react";
import Button from "@/components/Button";
import {
  internships,
  hackathons,
  achievements,
  hasExperience,
  type Internship,
  type Hackathon,
} from "@/data/experience";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Experience — Lakshya Dewangan",
  description:
    "Engineering internships, hackathons, and software engineering candidate profile of Lakshya Dewangan.",
};

/* ─── Ticket Row for Internships ─────────────────────────────────────────── */

function InternshipTicket({ item }: { item: Internship }) {
  return (
    <article className="group relative flex flex-col md:flex-row bg-[var(--dp-color-panel)] border-[3px] border-[var(--dp-color-outline)] rounded-[17px] shadow-hard overflow-hidden transition-all duration-[180ms] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg">
      <div className="md:w-56 p-5 sm:p-6 bg-[var(--dp-color-ground)] border-b-[3px] md:border-b-0 md:border-r-[3px] border-dashed border-[var(--dp-color-outline)] flex flex-col justify-between gap-3 relative">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[8px] border-[2px] border-[var(--dp-color-outline)] bg-[var(--dp-color-accent-fresh)] text-[var(--dp-color-ink)] font-mono text-[10px] font-black uppercase tracking-wider">
            <Briefcase className="w-3 h-3" aria-hidden="true" />
            {item.type || "Internship"}
          </span>
          <Ticket className="w-4 h-4 text-[var(--dp-color-ink)]/40" aria-hidden="true" />
        </div>

        <div className="space-y-1 font-mono text-xs text-[var(--dp-color-ink)]/75">
          <div className="flex items-center gap-1.5 font-bold">
            <Calendar className="w-3.5 h-3.5 text-[var(--dp-color-accent)] shrink-0" aria-hidden="true" />
            <span>{item.period}</span>
          </div>
          {item.location && (
            <div className="flex items-center gap-1.5 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-[var(--dp-color-ink)]/50 shrink-0" aria-hidden="true" />
              <span>{item.location}</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between gap-4">
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h2 className="font-display font-black text-xl text-[var(--dp-color-ink)]">
              {item.role}
            </h2>
            <span className="font-display font-extrabold text-sm text-[var(--dp-color-accent)]">
              {item.company}
            </span>
          </div>

          <p className="font-reading text-sm text-[var(--dp-color-ink)]/80 leading-relaxed">
            {item.description}
          </p>

          {item.highlights && item.highlights.length > 0 && (
            <ul className="space-y-1.5 pt-1 pl-0 list-none font-reading text-xs text-[var(--dp-color-ink)]/85">
              {item.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[var(--dp-color-accent)] mt-1.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="pt-3 border-t-[2px] border-[var(--dp-color-rule-muted)]/30 flex items-center justify-between gap-3 flex-wrap">
          {item.skills && item.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {item.skills.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-[6px] bg-[var(--dp-color-selection)] border-[1.5px] border-[var(--dp-color-outline)] text-[var(--dp-color-ink)]"
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          {item.certificateUrl && (
            <a
              href={item.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-display font-bold text-xs text-[var(--dp-color-accent)] hover:underline ml-auto"
            >
              <span>Verification</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ─── Ticket Row for Hackathons ──────────────────────────────────────────── */

function HackathonTicket({ item }: { item: Hackathon }) {
  return (
    <article className="group relative flex flex-col md:flex-row bg-[var(--dp-color-panel)] border-[3px] border-[var(--dp-color-outline)] rounded-[17px] shadow-hard overflow-hidden transition-all duration-[180ms] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg">
      <div className="md:w-56 p-5 sm:p-6 bg-[var(--dp-color-field-soft)] border-b-[3px] md:border-b-0 md:border-r-[3px] border-dashed border-[var(--dp-color-outline)] flex flex-col justify-between gap-3 relative">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[8px] border-[2px] border-[var(--dp-color-outline)] bg-[var(--dp-color-accent-warm)] text-[var(--dp-color-ink)] font-mono text-[10px] font-black uppercase tracking-wider">
            <Trophy className="w-3 h-3 text-[var(--dp-color-ink)]" aria-hidden="true" />
            Hackathon
          </span>
          <Ticket className="w-4 h-4 text-[var(--dp-color-ink)]/40" aria-hidden="true" />
        </div>

        <div className="space-y-1 font-mono text-xs text-[var(--dp-color-ink)]/75">
          <div className="flex items-center gap-1.5 font-bold">
            <Calendar className="w-3.5 h-3.5 text-[var(--dp-color-accent)] shrink-0" aria-hidden="true" />
            <span>{item.date}</span>
          </div>
          {item.award && (
            <div className="inline-block px-2 py-0.5 bg-[var(--dp-color-selection)] border-[1.5px] border-[var(--dp-color-outline)] rounded-[6px] font-bold text-[10px] text-[var(--dp-color-accent)]">
              ★ {item.award}
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between gap-4">
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h2 className="font-display font-black text-xl text-[var(--dp-color-ink)]">
              {item.title}
            </h2>
            {item.project && (
              <span className="font-mono font-bold text-xs px-2 py-0.5 bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-outline)] rounded-[6px] text-[var(--dp-color-ink)]">
                Project: {item.project}
              </span>
            )}
          </div>

          <p className="font-reading text-sm text-[var(--dp-color-ink)]/80 leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="pt-3 border-t-[2px] border-[var(--dp-color-rule-muted)]/30 flex items-center justify-between gap-3 flex-wrap">
          {item.skills && item.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {item.skills.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-[6px] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-outline)] text-[var(--dp-color-ink)]"
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          {item.projectUrl && (
            <a
              href={item.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-display font-bold text-xs text-[var(--dp-color-accent)] hover:underline ml-auto"
            >
              <span>View Hack</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ─── Experience Page Component ──────────────────────────────────────────── */

export default function ExperiencePage() {
  const emailUrl = profile.socials?.email || profile.email;
  const linkedinUrl = profile.socials?.linkedin || profile.linkedin;
  const resumeUrl = profile.socials?.resume || profile.resume;

  return (
    <div className="py-8 sm:py-12 flex flex-col gap-10">
      {/* Top Navigation Links */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-display font-extrabold text-sm text-[var(--dp-color-ink)]/70 hover:text-[var(--dp-color-accent)] transition-colors duration-[180ms] focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-outline)] focus-visible:outline-offset-4 rounded-[6px]"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>

        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 font-display font-extrabold text-xs px-3 py-1.5 rounded-[10px] border-[2px] border-[var(--dp-color-outline)] bg-[var(--dp-color-panel)] shadow-[2px_2px_0px_var(--dp-color-outline)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-[180ms] text-[var(--dp-color-ink)]"
        >
          <Compass className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Browse Projects</span>
        </Link>
      </div>

      {/* Page Header */}
      <div className="flex flex-col gap-3 pb-4 border-b-[3px] border-[var(--dp-color-outline)]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--dp-color-accent)]">
              Career &amp; Engineering Journey
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-[var(--dp-color-ink)] tracking-tight leading-none mt-1">
              Experience
            </h1>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--dp-color-accent-fresh)] border-[2.5px] border-[var(--dp-color-outline)] rounded-[12px] shadow-[2.5px_2.5px_0px_var(--dp-color-outline)] self-start sm:self-auto shrink-0">
            <span className="w-2 h-2 rounded-full bg-[var(--dp-color-accent)] animate-pulse" />
            <span className="font-display font-extrabold text-xs text-[var(--dp-color-ink)]">
              Open to SWE / Full-Stack Internships
            </span>
          </div>
        </div>

        <p className="font-reading text-sm sm:text-base text-[var(--dp-color-ink)]/75 max-w-2xl leading-relaxed">
          Industry internships, competitive hackathon sprints, and technical contributions.
        </p>
      </div>

      {/* When Real Experience Exists: Render Ticket Rows */}
      {hasExperience ? (
        <div className="flex flex-col gap-8">
          {internships.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="font-display font-black text-2xl text-[var(--dp-color-ink)] flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[var(--dp-color-accent)]" aria-hidden="true" />
                Internships &amp; Roles
              </h2>
              {internships.map((item) => (
                <InternshipTicket key={item.id} item={item} />
              ))}
            </div>
          )}

          {hackathons.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="font-display font-black text-2xl text-[var(--dp-color-ink)] flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[var(--dp-color-accent-warm)]" aria-hidden="true" />
                Hackathons &amp; Competitions
              </h2>
              {hackathons.map((item) => (
                <HackathonTicket key={item.id} item={item} />
              ))}
            </div>
          )}

          {achievements.length > 0 && (
            <div className="flex flex-col gap-4 pt-2">
              <h2 className="font-display font-black text-2xl text-[var(--dp-color-ink)] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[var(--dp-color-accent-secondary)]" aria-hidden="true" />
                Achievements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {achievements.map((ach) => (
                  <div
                    key={ach.id}
                    className="p-4 bg-[var(--dp-color-panel)] border-[2.5px] border-[var(--dp-color-outline)] rounded-[14px] shadow-[3px_3px_0px_var(--dp-color-outline)] flex flex-col gap-2"
                  >
                    <span className="font-display font-black text-sm text-[var(--dp-color-ink)]">
                      {ach.title}
                    </span>
                    <p className="font-reading text-xs text-[var(--dp-color-ink)]/75">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Honest, Professional Candidate Status & Readiness Blueprint */
        <div className="flex flex-col gap-8 max-w-4xl mx-auto w-full">
          {/* Main Candidate Card in Playful Geometric Silhouette */}
          <div className="relative w-full">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-[6px] translate-y-[6px] sm:translate-x-[8px] sm:translate-y-[8px] rounded-[24px] bg-[var(--dp-color-accent)] border-[3px] border-[var(--dp-color-outline)]"
            />

            <div className="relative z-10 p-6 sm:p-10 bg-[var(--dp-color-panel)] border-[3px] border-[var(--dp-color-outline)] rounded-[24px] flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="px-3 py-1 rounded-full border-[2px] border-[var(--dp-color-outline)] bg-[var(--dp-color-accent-fresh)] font-display font-black text-xs uppercase tracking-wider text-[var(--dp-color-ink)] shadow-[2px_2px_0px_var(--dp-color-outline)]">
                  Candidate Readiness
                </span>

                <span className="font-mono text-xs font-bold text-[var(--dp-color-accent)]">
                  IIIT Naya Raipur &bull; Class of 2028
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="font-display font-black text-2xl sm:text-3xl text-[var(--dp-color-ink)] tracking-tight">
                  Actively Seeking Software Engineering &amp; Full-Stack Internships
                </h2>
                <p className="font-reading text-base text-[var(--dp-color-ink)]/85 leading-relaxed">
                  I am a 3rd-year Computer Science student at IIIT Naya Raipur (Aug 2024 – Jul 2028)
                  actively seeking upcoming summer and semester software engineering internships.
                  I specialize in building full-stack applications with TypeScript, React, Next.js, Node.js,
                  and FastAPI, alongside integrating AI systems and APIs.
                </p>
              </div>

              {/* What I Bring Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-[var(--dp-color-ground)] border-[2px] border-[var(--dp-color-outline)] rounded-[14px] shadow-[2.5px_2.5px_0px_var(--dp-color-outline)] flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-[8px] bg-[var(--dp-color-selection)] border-[1.5px] border-[var(--dp-color-outline)] flex items-center justify-center text-[var(--dp-color-accent)]">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-black text-sm text-[var(--dp-color-ink)]">
                    Full-Stack Web
                  </h3>
                  <p className="font-reading text-xs text-[var(--dp-color-ink)]/75 leading-relaxed">
                    Production Next.js App Router, React 19, TypeScript, responsive Tailwind interfaces, and accessible design systems.
                  </p>
                </div>

                <div className="p-4 bg-[var(--dp-color-ground)] border-[2px] border-[var(--dp-color-outline)] rounded-[14px] shadow-[2.5px_2.5px_0px_var(--dp-color-outline)] flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-[8px] bg-[var(--dp-color-field-soft)] border-[1.5px] border-[var(--dp-color-outline)] flex items-center justify-center text-[var(--dp-color-ink)]">
                    <Server className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-black text-sm text-[var(--dp-color-ink)]">
                    Backend &amp; APIs
                  </h3>
                  <p className="font-reading text-xs text-[var(--dp-color-ink)]/75 leading-relaxed">
                    FastAPI, Express, RESTful APIs, SSE streaming, PostgreSQL, MongoDB, Redis caching, and clean client-server state.
                  </p>
                </div>

                <div className="p-4 bg-[var(--dp-color-ground)] border-[2px] border-[var(--dp-color-outline)] rounded-[14px] shadow-[2.5px_2.5px_0px_var(--dp-color-outline)] flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-[8px] bg-[var(--dp-color-accent-warm)] border-[1.5px] border-[var(--dp-color-outline)] flex items-center justify-center text-[var(--dp-color-ink)]">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-black text-sm text-[var(--dp-color-ink)]">
                    AI Engineering
                  </h3>
                  <p className="font-reading text-xs text-[var(--dp-color-ink)]/75 leading-relaxed">
                    Hands-on integrations with Groq and Gemini APIs, structured prompt design, vector embeddings, and RAG architectures.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t-[2px] border-[var(--dp-color-rule-muted)]/30 flex flex-wrap items-center gap-3">
                <Button variant="primary" size="md" href={emailUrl}>
                  <Mail className="w-4 h-4" />
                  <span>Send Internship Inquiry</span>
                </Button>

                <Button variant="secondary" size="md" href={linkedinUrl} external>
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </Button>

                <Button variant="warm" size="md" href={resumeUrl} external>
                  <FileText className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </Button>

                <Button variant="secondary" size="md" href="/projects">
                  <Compass className="w-4 h-4" />
                  <span>View Projects</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

