"use client";

import React from "react";
import { Github, Linkedin, FileText, Sparkles, MapPin, GraduationCap, Compass, Briefcase } from "lucide-react";
import Button from "./Button";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="about"
      aria-labelledby="hero-heading"
      className="scroll-mt-24 pt-4 sm:pt-8 pb-8 flex flex-col gap-8 max-[1100px]:gap-6"
    >
      {/* Main Two-Column Hero Assembly */}
      <div className="flex flex-row max-[760px]:flex-col items-center justify-between gap-10 max-[1100px]:gap-6">
        {/* Left Column: Slightly wider text column */}
        <div className="flex-[1.25] flex flex-col items-start gap-5 max-[1100px]:gap-4">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--dp-color-accent-fresh)] border-[2.5px] border-[var(--dp-color-outline)] font-reading text-xs sm:text-sm font-bold text-[var(--dp-color-ink)] shadow-[2.5px_2.5px_0px_var(--dp-color-outline)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--dp-color-accent)] animate-pulse" />
            <span>{profile.status}</span>
          </div>

          {/* Large Host Grotesk Heading (62px - 102px on wide screens) */}
          <div className="space-y-3">
            <h1
              id="hero-heading"
              className="font-display font-black text-[clamp(3.875rem,7.5vw,6.375rem)] text-[var(--dp-color-ink)] leading-[0.92] tracking-[-0.035em]"
            >
              Lakshya.
            </h1>
            <p className="font-display font-extrabold text-xl sm:text-2xl lg:text-[26px] text-[var(--dp-color-accent)] leading-snug tracking-tight">
              {profile.role}
            </p>
          </div>

          {/* Education & Bio Summary */}
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--dp-color-selection)] border-[2px] border-[var(--dp-color-outline)] rounded-[10px] text-xs sm:text-sm font-display font-bold text-[var(--dp-color-ink)] shadow-[2px_2px_0px_var(--dp-color-outline)]">
              <GraduationCap className="w-4 h-4 text-[var(--dp-color-accent)]" />
              <span>BTech CSE · IIIT Naya Raipur</span>
            </div>

            <p className="font-reading text-base sm:text-lg text-[var(--dp-color-ink)]/85 leading-[1.65]">
              {profile.positioningStatement}
            </p>
          </div>

          {/* Actions: GitHub, LinkedIn, Resume (using Button component with rel="noopener noreferrer") */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              variant="primary"
              size="md"
              href={profile.github}
              external
              aria-label="GitHub Profile (opens in new tab)"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </Button>

            <Button
              variant="secondary"
              size="md"
              href={profile.linkedin}
              external
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </Button>

            <Button
              variant="warm"
              size="md"
              href={profile.resume}
              external
              aria-label="Resume PDF (opens in new tab)"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </Button>
          </div>
        </div>

        {/* Right Column: Static assembly of decorative geometric shapes (aria-hidden, no animation) */}
        <div
          aria-hidden="true"
          className="flex-1 w-full max-w-[380px] lg:max-w-[420px] max-[760px]:max-w-[340px] aspect-[4/4.2] relative select-none flex items-center justify-center p-2"
        >
          {/* Main Backdrop Panel with Layered Shadow */}
          <div className="w-full h-full relative bg-[var(--dp-color-panel)] border-[length:var(--dp-border-outline-width)] border-[var(--dp-color-outline)] rounded-[var(--dp-radius-corner)] shadow-[6px_6px_0px_var(--dp-color-outline)] overflow-hidden p-6 flex flex-col justify-between">
            {/* Background geometric grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `radial-gradient(var(--dp-color-outline) 1.5px, transparent 1.5px)`,
                backgroundSize: "16px 16px",
              }}
            />

            {/* Top row of shapes */}
            <div className="relative z-10 flex items-start justify-between">
              {/* Violet Arch */}
              <div className="w-20 h-28 bg-[var(--dp-color-accent)] border-[3px] border-[var(--dp-color-outline)] rounded-t-[40px] rounded-b-[8px] shadow-[4px_4px_0px_var(--dp-color-outline)] flex items-center justify-center">
                <div className="w-8 h-12 bg-[var(--dp-color-panel)] border-[2px] border-[var(--dp-color-outline)] rounded-t-[16px] rounded-b-[4px]" />
              </div>

              {/* Mint Circle */}
              <div className="w-24 h-24 rounded-full bg-[var(--dp-color-accent-fresh)] border-[3px] border-[var(--dp-color-outline)] shadow-[4px_4px_0px_var(--dp-color-outline)] flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[var(--dp-color-accent)] border-[2px] border-[var(--dp-color-outline)]" />
              </div>
            </div>

            {/* Middle decorative geometric elements */}
            <div className="relative z-10 flex items-center justify-center gap-3 my-2">
              {/* Amber Triangle (SVG) */}
              <div className="w-20 h-20 filter drop-shadow-[4px_4px_0px_var(--dp-color-outline)]">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full overflow-visible"
                  fill="none"
                >
                  <polygon
                    points="50,10 90,85 10,85"
                    fill="var(--dp-color-accent-warm)"
                    stroke="var(--dp-color-outline)"
                    strokeWidth="7"
                    strokeLinejoin="round"
                  />
                  {/* Inner eye geometric accent */}
                  <circle
                    cx="50"
                    cy="60"
                    r="10"
                    fill="var(--dp-color-panel)"
                    stroke="var(--dp-color-outline)"
                    strokeWidth="5"
                  />
                </svg>
              </div>

              {/* Pink Block */}
              <div className="w-24 h-16 bg-[var(--dp-color-accent-secondary)] border-[3px] border-[var(--dp-color-outline)] rounded-[14px] shadow-[4px_4px_0px_var(--dp-color-outline)] flex items-center justify-center">
                <div className="w-12 h-4 bg-[var(--dp-color-accent-warm)] border-[2px] border-[var(--dp-color-outline)] rounded-full" />
              </div>
            </div>

            {/* Bottom Row Shapes */}
            <div className="relative z-10 flex items-end justify-between">
              {/* Mint Pill with hard offset */}
              <div className="w-32 h-12 bg-[var(--dp-color-field-soft)] border-[3px] border-[var(--dp-color-outline)] rounded-full shadow-[4px_4px_0px_var(--dp-color-outline)] flex items-center px-3 gap-2">
                <span className="w-4 h-4 rounded-full bg-[var(--dp-color-accent)] border-[1.5px] border-[var(--dp-color-outline)]" />
                <span className="w-4 h-4 rounded-full bg-[var(--dp-color-accent-secondary)] border-[1.5px] border-[var(--dp-color-outline)]" />
                <span className="w-4 h-4 rounded-full bg-[var(--dp-color-accent-warm)] border-[1.5px] border-[var(--dp-color-outline)]" />
              </div>

              {/* Amber Quarter Arch / Half Circle */}
              <div className="w-16 h-16 bg-[var(--dp-color-accent-warm)] border-[3px] border-[var(--dp-color-outline)] rounded-tl-[32px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] shadow-[4px_4px_0px_var(--dp-color-outline)] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[var(--dp-color-outline)]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fact Strip: Layered mint and outlined bases with 3-4 true facts strictly from profile.ts */}
      <div className="w-full bg-[var(--dp-color-field-soft)] border-[length:var(--dp-border-outline-width)] border-[var(--dp-color-outline)] rounded-[var(--dp-radius-corner)] shadow-hard p-4 sm:p-5 relative overflow-hidden">
        {/* Layered Mint Accent Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3.5 mb-3.5 border-b-[2px] border-[var(--dp-color-outline)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--dp-color-accent-fresh)] border-[2px] border-[var(--dp-color-outline)] rounded-[10px] shadow-[2px_2px_0px_var(--dp-color-outline)]">
            <Compass className="w-4 h-4 text-[var(--dp-color-ink)]" />
            <span className="font-display font-extrabold text-xs uppercase tracking-wider text-[var(--dp-color-ink)]">
              Developer Profile Snapshot
            </span>
          </div>

          <span className="font-reading text-xs text-[var(--dp-color-ink)]/70 font-semibold">
            Verified data · {profile.name}
          </span>
        </div>

        {/* 4 True Facts Grid from profile.ts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {/* Fact 1: Education */}
          <div className="p-3.5 bg-[var(--dp-color-panel)] border-[2px] border-[var(--dp-color-outline)] rounded-[14px] shadow-[2.5px_2.5px_0px_var(--dp-color-outline)] flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-xs text-[var(--dp-color-ink)]/70 font-bold uppercase tracking-tight">
              <GraduationCap className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
              <span>Education</span>
            </div>
            <div className="font-display font-black text-sm sm:text-base text-[var(--dp-color-ink)] leading-tight">
              BTech CSE
            </div>
            <div className="font-reading text-xs text-[var(--dp-color-ink)]/75">
              IIIT Naya Raipur
            </div>
          </div>

          {/* Fact 2: Focus / Role */}
          <div className="p-3.5 bg-[var(--dp-color-panel)] border-[2px] border-[var(--dp-color-outline)] rounded-[14px] shadow-[2.5px_2.5px_0px_var(--dp-color-outline)] flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-xs text-[var(--dp-color-ink)]/70 font-bold uppercase tracking-tight">
              <Sparkles className="w-3.5 h-3.5 text-[var(--dp-color-accent-secondary)]" />
              <span>Core Focus</span>
            </div>
            <div className="font-display font-black text-sm sm:text-base text-[var(--dp-color-ink)] leading-tight">
              Full-Stack & Web
            </div>
            <div className="font-reading text-xs text-[var(--dp-color-ink)]/75">
              Exploring AI Engineering
            </div>
          </div>

          {/* Fact 3: Location */}
          <div className="p-3.5 bg-[var(--dp-color-panel)] border-[2px] border-[var(--dp-color-outline)] rounded-[14px] shadow-[2.5px_2.5px_0px_var(--dp-color-outline)] flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-xs text-[var(--dp-color-ink)]/70 font-bold uppercase tracking-tight">
              <MapPin className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
              <span>Location</span>
            </div>
            <div className="font-display font-black text-sm sm:text-base text-[var(--dp-color-ink)] leading-tight">
              {profile.location}
            </div>
            <div className="font-reading text-xs text-[var(--dp-color-ink)]/75">
              Open to Remote / On-site
            </div>
          </div>

          {/* Fact 4: Status */}
          <div className="p-3.5 bg-[var(--dp-color-panel)] border-[2px] border-[var(--dp-color-outline)] rounded-[14px] shadow-[2.5px_2.5px_0px_var(--dp-color-outline)] flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-xs text-[var(--dp-color-ink)]/70 font-bold uppercase tracking-tight">
              <Briefcase className="w-3.5 h-3.5 text-[var(--dp-color-accent-warm)]" />
              <span>Current Status</span>
            </div>
            <div className="font-display font-black text-sm sm:text-base text-[var(--dp-color-ink)] leading-tight">
              Available
            </div>
            <div className="font-reading text-xs text-[var(--dp-color-ink)]/75">
              {profile.status}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
