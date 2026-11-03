"use client";

import { useState } from "react";
import {
  Sparkles,
  ArrowUpRight,
  Code2,
  Palette,
  Layers,
  Terminal,
  Zap,
  Github,
  Linkedin,
  Mail,
  CheckCircle2,
  Copy,
  Check,
  GraduationCap,
  MapPin,
  Briefcase,
  FileText,
  BookOpen,
} from "lucide-react";
import Button from "@/components/Button";
import Hero from "@/components/Hero";
import { profile } from "@/data/profile";
import { skillsByCategory } from "@/data/skills";
import { pinnedProjects } from "@/data/pinned-projects";
import { learningProfile } from "@/data/learning";
import { educationList } from "@/data/education";
import { experienceList } from "@/data/experience";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"projects" | "skills" | "learning" | "tokens">("projects");
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = (token: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 1800);
  };

  const tokens = [
    { name: "--dp-color-ground", value: "#fffdf5", label: "Paper Ground" },
    { name: "--dp-color-panel", value: "#ffffff", label: "Panel Background" },
    { name: "--dp-color-ink", value: "#253044", label: "Primary Ink" },
    { name: "--dp-color-outline", value: "#252b3a", label: "Bold Outline" },
    { name: "--dp-color-accent", value: "#6434df", label: "Vibrant Purple" },
    { name: "--dp-color-accent-secondary", value: "#ff78c5", label: "Playful Pink" },
    { name: "--dp-color-accent-warm", value: "#ffd05b", label: "Warm Sun" },
    { name: "--dp-color-accent-fresh", value: "#9bf1cd", label: "Mint Fresh" },
    { name: "--dp-color-field-soft", value: "#e9fff5", label: "Field Soft" },
    { name: "--dp-color-selection", value: "#f1ebff", label: "Selection Lilac" },
  ];

  return (
    <div className="py-4 sm:py-6 flex flex-col gap-14">
      {/* Hero Section */}
      <Hero />

      {/* Button Variant Showcase Card */}
      <section className="p-6 sm:p-8 bg-[var(--dp-color-panel)] border-[length:var(--dp-border-outline-width)] border-[var(--dp-color-outline)] rounded-[var(--dp-radius-corner)] shadow-hard flex flex-col gap-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--dp-color-accent)] font-mono">
            Design System Atoms
          </span>
          <h2 className="font-display text-2xl font-black text-[var(--dp-color-ink)]">
            Playful Geometric Button Controls
          </h2>
          <p className="font-reading text-sm text-[var(--dp-color-ink)]/75">
            Tested variants: 3px outline, 4px hard offset shadow, 2px lift on hover, reduced offset on active, 180ms motion, and 4px offset focus ring.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 bg-[var(--dp-color-ground)] border-[2px] border-[var(--dp-color-outline)] rounded-[14px] flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-[var(--dp-color-ink)]">Primary (Violet)</span>
            <Button variant="primary" size="md">
              Primary Button
            </Button>
          </div>

          <div className="p-4 bg-[var(--dp-color-ground)] border-[2px] border-[var(--dp-color-outline)] rounded-[14px] flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-[var(--dp-color-ink)]">Secondary (White)</span>
            <Button variant="secondary" size="md">
              Secondary Button
            </Button>
          </div>

          <div className="p-4 bg-[var(--dp-color-ground)] border-[2px] border-[var(--dp-color-outline)] rounded-[14px] flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-[var(--dp-color-ink)]">Warm (Amber)</span>
            <Button variant="warm" size="md">
              Warm Button
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-24 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--dp-color-accent)]">
              Work & Builds
            </span>
            <h2 className="font-display text-3xl font-extrabold text-[var(--dp-color-ink)] tracking-tight">
              Featured Projects
            </h2>
            <p className="font-reading text-sm text-[var(--dp-color-ink)]/75">
              Pinned projects and exploration repositories with hard-offset cards.
            </p>
          </div>
          <Button variant="secondary" size="sm" href={profile.github} external>
            <Github className="w-4 h-4" />
            <span>All Repositories</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pinnedProjects.map((project) => (
            <div
              key={project.order}
              className="p-6 bg-[var(--dp-color-panel)] border-[length:var(--dp-border-outline-width)] border-[var(--dp-color-outline)] rounded-[var(--dp-radius-corner)] shadow-hard flex flex-col justify-between gap-6 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg transition-all duration-[180ms]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 text-xs font-black uppercase tracking-wider rounded-[8px] border-[2px] border-[var(--dp-color-outline)] bg-[var(--dp-color-accent-warm)] text-[var(--dp-color-ink)]">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-[6px] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-outline)]">
                    {project.status}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-black text-[var(--dp-color-ink)]">
                  {project.title}
                </h3>
                <p className="font-reading text-sm text-[var(--dp-color-ink)]/80 leading-relaxed">
                  {project.description}
                </p>
                {project.techStack && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-[6px] bg-[var(--dp-color-selection)] border-[1px] border-[var(--dp-color-outline)] text-[var(--dp-color-ink)] font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t-[2px] border-[var(--dp-color-rule-muted)]/30">
                <Button variant="secondary" size="sm" href={project.repo} external>
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </Button>
                {project.demo && (
                  <Button variant="warm" size="sm" href={project.demo} external>
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-24 flex flex-col gap-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--dp-color-accent)]">
            Capabilities
          </span>
          <h2 className="font-display text-3xl font-extrabold text-[var(--dp-color-ink)] tracking-tight">
            Technical Skills
          </h2>
          <p className="font-reading text-sm text-[var(--dp-color-ink)]/75">
            Categorized toolkit with transparent proficiency tags.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillsByCategory.map((group) => (
            <div
              key={group.category}
              className="p-5 bg-[var(--dp-color-panel)] border-[length:var(--dp-border-outline-width)] border-[var(--dp-color-outline)] rounded-[var(--dp-radius-corner)] shadow-hard flex flex-col gap-3"
            >
              <div className="border-b-[2px] border-[var(--dp-color-rule-muted)]/40 pb-2">
                <h3 className="font-display text-lg font-black text-[var(--dp-color-ink)]">
                  {group.category}
                </h3>
                {group.note && (
                  <p className="text-[11px] font-reading text-[var(--dp-color-accent)] font-semibold">
                    {group.note}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                {group.skills.map((skill) => {
                  const levelColors = {
                    comfortable: "bg-[var(--dp-color-accent-fresh)] text-[var(--dp-color-ink)]",
                    familiar: "bg-[var(--dp-color-accent-warm)] text-[var(--dp-color-ink)]",
                    learning: "bg-[var(--dp-color-selection)] text-[var(--dp-color-accent)]",
                  };
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2 rounded-[8px] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-outline)] text-xs font-bold"
                    >
                      <span className="text-[var(--dp-color-ink)]">{skill.name}</span>
                      <span
                        className={`px-2 py-0.5 rounded-[6px] border-[1px] border-[var(--dp-color-outline)] text-[10px] uppercase font-mono tracking-tight font-extrabold ${levelColors[skill.level]}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="scroll-mt-24 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--dp-color-accent)]">
              Practical Work
            </span>
            <h2 className="font-display text-3xl font-extrabold text-[var(--dp-color-ink)] tracking-tight">
              Experience & Roles
            </h2>
            <p className="font-reading text-sm text-[var(--dp-color-ink)]/75">
              Hands-on engineering projects, open source development, and internship readiness.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--dp-color-accent-fresh)] border-[2px] border-[var(--dp-color-outline)] rounded-[12px] shadow-[2px_2px_0px_var(--dp-color-outline)] text-xs font-display font-bold text-[var(--dp-color-ink)] self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-[var(--dp-color-accent)] animate-pulse" />
            <span>Seeking Full-Stack / SWE Internships</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceList.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 bg-[var(--dp-color-panel)] border-[length:var(--dp-border-outline-width)] border-[var(--dp-color-outline)] rounded-[var(--dp-radius-corner)] shadow-hard flex flex-col justify-between gap-5 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-[180ms]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[var(--dp-color-selection)] border-[1.5px] border-[var(--dp-color-outline)] rounded-[6px] text-[var(--dp-color-accent)]">
                    {exp.type}
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[var(--dp-color-accent-warm)] border-[1.5px] border-[var(--dp-color-outline)] rounded-[6px] text-[var(--dp-color-ink)]">
                    {exp.statusBadge}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-black text-[var(--dp-color-ink)]">
                    {exp.role}
                  </h3>
                  <p className="font-reading text-xs text-[var(--dp-color-ink)]/70 font-semibold pt-0.5">
                    {exp.organization} • {exp.period}
                  </p>
                </div>

                <p className="font-reading text-sm text-[var(--dp-color-ink)]/85 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-1.5 pt-1 pl-0 list-none font-reading text-xs text-[var(--dp-color-ink)]/80">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--dp-color-accent)] mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t-[2px] border-[var(--dp-color-rule-muted)]/30 flex flex-wrap gap-1.5">
                {exp.skillsUsed.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-[6px] bg-[var(--dp-color-ground)] border-[1px] border-[var(--dp-color-outline)] text-[var(--dp-color-ink)] font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
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

      {/* Learning Section */}
      <section id="learning" className="scroll-mt-24 flex flex-col gap-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--dp-color-accent)]">
            Continuous Growth
          </span>
          <h2 className="font-display text-3xl font-extrabold text-[var(--dp-color-ink)] tracking-tight">
            Learning Directions
          </h2>
          <p className="font-reading text-sm text-[var(--dp-color-ink)]/75">
            {learningProfile.statement}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {learningProfile.topics.map((topic) => (
            <div
              key={topic.title}
              className="p-5 bg-[var(--dp-color-panel)] border-[length:var(--dp-border-outline-width)] border-[var(--dp-color-outline)] rounded-[var(--dp-radius-corner)] shadow-hard flex flex-col justify-between gap-3 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-[180ms]"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 bg-[var(--dp-color-field-soft)] border-[1px] border-[var(--dp-color-outline)] rounded-[6px] text-[var(--dp-color-ink)]">
                    {topic.category}
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[var(--dp-color-selection)] border-[1px] border-[var(--dp-color-outline)] rounded-[6px] text-[var(--dp-color-accent)]">
                    {topic.status}
                  </span>
                </div>
                <h3 className="font-display text-base font-black text-[var(--dp-color-ink)]">
                  {topic.title}
                </h3>
                <p className="font-reading text-xs text-[var(--dp-color-ink)]/75 leading-relaxed">
                  {topic.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 p-8 sm:p-10 bg-[var(--dp-color-accent-warm)] border-[length:var(--dp-border-outline-width)] border-[var(--dp-color-outline)] rounded-[var(--dp-radius-corner)] shadow-hard flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-mono font-black uppercase tracking-wider text-[var(--dp-color-ink)]">
            Get in touch
          </span>
          <h2 className="font-display text-3xl font-black text-[var(--dp-color-ink)]">
            Let&apos;s build something great together.
          </h2>
          <p className="font-reading text-sm text-[var(--dp-color-ink)]/85">
            Looking for internship opportunities, project collaborations, or tech discussions. Feel free to reach out directly!
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" size="lg" href={profile.email}>
            <Mail className="w-5 h-5" />
            <span>Send Email</span>
          </Button>

          <Button variant="secondary" size="lg" href={profile.linkedin} external>
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-6 pb-8 border-t-[2px] border-[var(--dp-color-rule-muted)]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[var(--dp-color-accent)] border-[1.5px] border-[var(--dp-color-outline)]" />
          <span className="font-reading text-xs text-[var(--dp-color-ink)]/80 font-semibold">
            © {new Date().getFullYear()} {profile.name} • Built with Next.js, TypeScript & Tailwind CSS.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" href={profile.github} external aria-label="GitHub">
            <Github className="w-4 h-4" />
          </Button>
          <Button variant="secondary" size="sm" href={profile.linkedin} external aria-label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </Button>
          <Button variant="secondary" size="sm" href={profile.email} aria-label="Email">
            <Mail className="w-4 h-4" />
          </Button>
        </div>
      </footer>
    </div>
  );
}
