import React from "react";
import Link from "next/link";
import {
  Mail,
  Github,
  Linkedin,
  FileText,
  ArrowUp,
  Heart,
  Send,
  MessageSquare,
} from "lucide-react";
import Button from "./Button";
import { profile } from "@/data/profile";
import { navLinks } from "@/data/navigation";

/* ─── Static Geometric Confetti Element ──────────────────────────────────── */

interface ConfettiItem {
  className: string;
  shape: "circle" | "square" | "diamond" | "pill" | "triangle";
  bg: string;
}

const confettiPieces: ConfettiItem[] = [
  // Top Left Edge
  { className: "top-4 left-6 w-3.5 h-3.5", shape: "circle", bg: "bg-[var(--dp-color-accent)]" },
  { className: "top-10 left-16 w-3 h-3 rotate-12", shape: "square", bg: "bg-[var(--dp-color-accent-warm)]" },
  { className: "top-14 left-6 w-2.5 h-2.5 rotate-45", shape: "diamond", bg: "bg-[var(--dp-color-accent-secondary)]" },

  // Top Right Edge
  { className: "top-5 right-8 w-4 h-4 rotate-45", shape: "diamond", bg: "bg-[var(--dp-color-accent-warm)]" },
  { className: "top-12 right-20 w-3 h-3", shape: "circle", bg: "bg-[var(--dp-color-accent)]" },
  { className: "top-16 right-7 w-5 h-2.5 rotate-[-20deg]", shape: "pill", bg: "bg-[#ffffff]" },

  // Middle Left Edge
  { className: "top-36 left-4 w-3 h-3 rotate-45", shape: "diamond", bg: "bg-[#ffffff]" },
  { className: "top-48 left-10 w-2.5 h-2.5", shape: "circle", bg: "bg-[var(--dp-color-accent-warm)]" },

  // Middle Right Edge
  { className: "top-32 right-6 w-3 h-3 rotate-12", shape: "square", bg: "bg-[var(--dp-color-accent-secondary)]" },
  { className: "top-44 right-12 w-3.5 h-3.5", shape: "circle", bg: "bg-[var(--dp-color-accent)]" },
  { className: "top-56 right-5 w-4 h-2 rotate-12", shape: "pill", bg: "bg-[var(--dp-color-accent-warm)]" },
];

function StaticConfetti() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
    >
      {confettiPieces.map((item, idx) => {
        let rounded = "rounded-none";
        if (item.shape === "circle" || item.shape === "pill") rounded = "rounded-full";
        if (item.shape === "square") rounded = "rounded-[3px]";
        if (item.shape === "diamond") rounded = "rounded-[2px]";

        return (
          <span
            key={idx}
            className={`absolute ${item.className} ${item.bg} ${rounded} border-[1.5px] border-[var(--dp-color-outline)] shadow-[1px_1px_0px_var(--dp-color-outline)] opacity-85`}
          />
        );
      })}
    </div>
  );
}

/* ─── Contact Component ──────────────────────────────────────────────────── */

export function Contact() {
  const emailUrl = profile.socials?.email || profile.email;
  const linkedinUrl = profile.socials?.linkedin || profile.linkedin;
  const githubUrl = profile.socials?.github || profile.github;
  const resumeUrl = profile.socials?.resume || profile.resume;

  return (
    <div id="contact" className="scroll-mt-24 pt-4">
      {/* ── Mint "Back Cover" Outer Shape ─────────────────────────────────── */}
      <section
        aria-labelledby="contact-heading"
        className="relative bg-[var(--dp-color-accent-fresh)] border-[length:var(--dp-border-outline-width)] border-[var(--dp-color-outline)] rounded-[28px] sm:rounded-[36px] shadow-[6px_6px_0px_var(--dp-color-outline)] overflow-hidden flex flex-col justify-between"
      >
        {/* Sparse Static Geometric Confetti around edges */}
        <StaticConfetti />

        {/* ── Main Cover Content Area ─────────────────────────────────────── */}
        <div className="relative z-10 p-6 sm:p-10 md:p-14 flex flex-col gap-8 max-w-4xl">
          {/* Badge & Label */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--dp-color-accent)] border-[1.5px] border-[var(--dp-color-outline)] animate-pulse" />
            <span className="font-mono text-xs font-black uppercase tracking-wider text-[var(--dp-color-ink)]">
              Back Cover • Open for Opportunities
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h2
              id="contact-heading"
              className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[var(--dp-color-ink)] tracking-tight leading-[1.08]"
            >
              Let&apos;s build something reliable, fast, and thoughtful together.
            </h2>
            <p className="font-reading text-base sm:text-lg text-[var(--dp-color-ink)]/85 leading-relaxed max-w-2xl pt-1">
              I&apos;m currently seeking software engineering and full-stack internships.
              Whether you have an internship opportunity, an open-source collaboration idea, or just
              want to talk tech and systems—my inbox is always open.
            </p>
          </div>

          {/* Action Buttons - Stacks cleanly on mobile / 760px */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 pt-2">
            <Button
              variant="primary"
              size="lg"
              href={emailUrl}
              aria-label="Send email to Lakshya"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              <span>Send Email</span>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href={linkedinUrl}
              external
              aria-label="Connect with Lakshya on LinkedIn"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
              <span>LinkedIn</span>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href={githubUrl}
              external
              aria-label="View Lakshya's GitHub profile"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
              <span>GitHub</span>
            </Button>

            {resumeUrl && (
              <Button
                variant="warm"
                size="lg"
                href={resumeUrl}
                external
                aria-label="Open Lakshya's resume PDF"
              >
                <FileText className="w-5 h-5" aria-hidden="true" />
                <span>Resume</span>
              </Button>
            )}
          </div>
        </div>

        {/* ── Inset Dark Slate Footer with Broad Curved Top ────────────────── */}
        <footer
          role="contentinfo"
          className="relative z-10 mt-6 sm:mt-10 bg-[#1e2533] text-[#fffdf5] border-t-[3px] border-[var(--dp-color-outline)] rounded-t-[36px] sm:rounded-t-[48px] px-6 sm:px-10 py-10 md:py-12 flex flex-col gap-8 shadow-[0_-4px_0_rgba(0,0,0,0.06)]"
        >
          {/* Top Row: Brand & Quick Navigation */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b-[2px] border-slate-700/60">
            {/* Identity */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full bg-[var(--dp-color-accent-warm)] border-[1.5px] border-[var(--dp-color-outline)] shrink-0"
                  aria-hidden="true"
                />
                <span className="font-display font-black text-xl text-slate-100 tracking-tight">
                  {profile.name}
                </span>
                <span className="font-mono text-xs px-2 py-0.5 rounded-[6px] bg-slate-800 text-[var(--dp-color-accent-fresh)] border border-slate-700">
                  CSE &bull; IIIT Naya Raipur
                </span>
              </div>
              <p className="font-reading text-xs text-slate-300 max-w-sm">
                Full-Stack Developer building accessible web applications and exploring AI Engineering.
              </p>
            </div>

            {/* Quick Links Navigation */}
            <nav aria-label="Footer quick links" className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-2.5 py-1 rounded-[8px] font-display font-bold text-xs text-slate-200 hover:text-[var(--dp-color-accent-warm)] hover:bg-slate-800/80 transition-colors duration-[180ms] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-accent-warm)] focus-visible:outline-offset-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[8px] font-display font-bold text-xs text-[var(--dp-color-accent-fresh)] hover:bg-slate-800/80 transition-colors duration-[180ms] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-accent-fresh)] focus-visible:outline-offset-2"
                aria-label="Back to top of page"
              >
                <span>Top</span>
                <ArrowUp className="w-3 h-3" aria-hidden="true" />
              </a>
            </nav>
          </div>

          {/* Bottom Row: Copyright, Socials, High Contrast Text */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <p className="font-reading text-center sm:text-left text-slate-300">
              &copy; {new Date().getFullYear()} {profile.name}. Designed with Playful Geometric
              principles. Zero blur shadows.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-[10px] border border-slate-600 transition-colors duration-[180ms] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-accent-warm)] focus-visible:outline-offset-2"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-[10px] border border-slate-600 transition-colors duration-[180ms] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-accent-warm)] focus-visible:outline-offset-2"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={emailUrl}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-[10px] border border-slate-600 transition-colors duration-[180ms] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-accent-warm)] focus-visible:outline-offset-2"
                aria-label="Email Lakshya"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Contact;
