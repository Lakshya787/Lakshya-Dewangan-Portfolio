import Button from "@/components/Button";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Learning from "@/components/Learning";
import Contact from "@/components/Contact";
import { profile } from "@/data/profile";
import { educationList } from "@/data/education";
import { FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="py-4 sm:py-6 flex flex-col gap-14">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <Hero />

      {/* ── About + Skills (shared book container style) ─────────────────── */}
      <About />
      <Skills />

      {/* ── Featured Projects ─────────────────────────────────────────────── */}
      {/* Projects is an async Server Component — fetches via getFeaturedProjects() */}
      <Projects />

      {/* ── Experience (Renders nothing if data arrays are empty) ─────────── */}
      <Experience />

      {/* ── Education ─────────────────────────────────────────────────────── */}
      <section id="education" className="scroll-mt-24 flex flex-col gap-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--dp-color-accent)]">
            Academic Background
          </span>
          <h2 className="font-display text-3xl font-extrabold text-[var(--dp-color-ink)] tracking-tight">
            Education
          </h2>
          <p className="font-reading text-sm text-[var(--dp-color-ink)]/75">
            Formal computer science degree and foundational coursework.
          </p>
        </div>

        {educationList.map((edu, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 bg-[var(--dp-color-panel)] border-[length:var(--dp-border-outline-width)] border-[var(--dp-color-outline)] rounded-[var(--dp-radius-corner)] shadow-hard flex flex-col gap-6"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-[2px] border-[var(--dp-color-rule-muted)]/30 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[var(--dp-color-accent-warm)] border-[1.5px] border-[var(--dp-color-outline)] rounded-[6px] text-[var(--dp-color-ink)]">
                    {edu.status}
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[var(--dp-color-field-soft)] border-[1.5px] border-[var(--dp-color-outline)] rounded-[6px] text-[var(--dp-color-ink)]">
                    {edu.location}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-[var(--dp-color-ink)] pt-1">
                  {edu.degree}
                </h3>
                <p className="font-reading text-sm sm:text-base text-[var(--dp-color-accent)] font-bold">
                  {edu.field} • {edu.institution}
                </p>
              </div>

              <Button variant="secondary" size="md" href={profile.resume} external>
                <FileText className="w-4 h-4" />
                <span>Resume PDF</span>
              </Button>
            </div>

            <p className="font-reading text-sm sm:text-base text-[var(--dp-color-ink)]/85 max-w-3xl leading-relaxed">
              {edu.description}
            </p>

            <div className="space-y-2.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--dp-color-ink)]/70">
                Core Relevant Coursework
              </span>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-xs font-display font-bold px-3 py-1 rounded-[10px] bg-[var(--dp-color-ground)] border-[2px] border-[var(--dp-color-outline)] shadow-[2px_2px_0px_var(--dp-color-outline)] text-[var(--dp-color-ink)]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── Learning ──────────────────────────────────────────────────────── */}
      <Learning />

      {/* ── Contact & Inset Footer (Mint Back Cover shape) ─────────────────── */}
      <Contact />
    </div>
  );
}
