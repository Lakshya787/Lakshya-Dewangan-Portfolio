"use client";

import React from "react";
import Image from "next/image";
import { Github, Linkedin, Instagram, Youtube, FileText, Sparkles, MapPin, GraduationCap, Compass, Briefcase } from "lucide-react";
import Button from "./Button";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="hero"
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
              className="font-display font-black text-[clamp(2.75rem,6.2vw,5.75rem)] text-[var(--dp-color-ink)] leading-[0.95] tracking-[-0.035em] break-words"
            >
              Lakshya Dewangan.
            </h1>
            <p className="font-display font-extrabold text-xl sm:text-2xl lg:text-[26px] text-[var(--dp-color-accent)] leading-snug tracking-tight">
              {profile.role}
            </p>
          </div>

          {/* Education & Bio Summary */}
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--dp-color-selection)] border-[2px] border-[var(--dp-color-outline)] rounded-[10px] text-xs sm:text-sm font-display font-bold text-[var(--dp-color-ink)] shadow-[2px_2px_0px_var(--dp-color-outline)]">
              <GraduationCap className="w-4 h-4 text-[var(--dp-color-accent)]" />
              <span>BTech CSE · 3rd Year (2024–2028) · IIIT Naya Raipur</span>
            </div>

            <p className="font-reading text-base sm:text-lg text-[var(--dp-color-ink)]/85 leading-[1.65]">
              {profile.positioningStatement}
            </p>
          </div>

          {/* Actions: GitHub, LinkedIn, Instagram, Resume (using Button component with rel="noopener noreferrer") */}
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

            {profile.instagram && (
              <Button
                variant="secondary"
                size="md"
                href={profile.instagram}
                external
                aria-label="Instagram Profile (opens in new tab)"
              >
                <Instagram className="w-4 h-4 text-[#E1306C]" />
                <span>Instagram</span>
              </Button>
            )}

            {profile.youtube && (
              <Button
                variant="secondary"
                size="md"
                href={profile.youtube}
                external
                aria-label="YouTube Channel (opens in new tab)"
              >
                <Youtube className="w-4 h-4 text-[#FF0000]" />
                <span>YouTube</span>
              </Button>
            )}

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

        {/* Right Column: Static assembly of decorative geometric shapes framing Lakshya's portrait */}
        <div className="flex-1 w-full max-w-[380px] lg:max-w-[430px] max-[760px]:max-w-[340px] aspect-[4/4.3] relative select-none flex items-center justify-center p-2">
          {/* Main Backdrop Panel with Layered Shadow */}
          <div className="w-full h-full relative bg-[var(--dp-color-panel)] border-[length:var(--dp-border-outline-width)] border-[var(--dp-color-outline)] rounded-[var(--dp-radius-corner)] shadow-[6px_6px_0px_var(--dp-color-outline)] overflow-hidden p-5 sm:p-6 flex flex-col items-center justify-center">
            {/* Background geometric grid pattern */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `radial-gradient(var(--dp-color-outline) 1.5px, transparent 1.5px)`,
                backgroundSize: "16px 16px",
              }}
            />

            {/* Decorative Geometric Shapes Layer (aria-hidden, no animation) */}
            {/* Top-Left: Violet Arch */}
            <div
              aria-hidden="true"
              className="absolute top-4 left-4 w-12 h-16 bg-[var(--dp-color-accent)] border-[2.5px] border-[var(--dp-color-outline)] rounded-t-[24px] rounded-b-[6px] shadow-[3px_3px_0px_var(--dp-color-outline)] z-0"
            />

            {/* Top-Right: Mint Circle */}
            <div
              aria-hidden="true"
              className="absolute top-4 right-4 w-14 h-14 rounded-full bg-[var(--dp-color-accent-fresh)] border-[2.5px] border-[var(--dp-color-outline)] shadow-[3px_3px_0px_var(--dp-color-outline)] flex items-center justify-center z-0"
            >
              <div className="w-5 h-5 rounded-full bg-[var(--dp-color-accent)] border-[2px] border-[var(--dp-color-outline)]" />
            </div>

            {/* Bottom-Left: Amber Triangle SVG */}
            <div
              aria-hidden="true"
              className="absolute bottom-4 left-4 w-14 h-14 filter drop-shadow-[3px_3px_0px_var(--dp-color-outline)] z-0"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                <polygon
                  points="50,12 90,88 10,88"
                  fill="var(--dp-color-accent-warm)"
                  stroke="var(--dp-color-outline)"
                  strokeWidth="8"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Bottom-Right: Pink Block */}
            <div
              aria-hidden="true"
              className="absolute bottom-4 right-4 w-14 h-10 bg-[var(--dp-color-accent-secondary)] border-[2.5px] border-[var(--dp-color-outline)] rounded-[10px] shadow-[3px_3px_0px_var(--dp-color-outline)] z-0"
            />

            {/* Centerpiece: Lakshya's Framed Portrait */}
            <div className="relative z-10 w-[205px] sm:w-[235px] aspect-[1/1.12] rounded-[var(--dp-radius-corner)] border-[length:var(--dp-border-outline-width)] border-[var(--dp-color-outline)] shadow-[5px_5px_0px_var(--dp-color-outline)] bg-[var(--dp-color-ground)] overflow-hidden">
              <Image
                src={profile.image}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(max-width: 768px) 240px, 280px"
                className="object-cover object-top"
              />
              {/* Inner subtle bottom tag */}
              <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 bg-[var(--dp-color-panel)] border-[2px] border-[var(--dp-color-outline)] rounded-[10px] shadow-[2px_2px_0px_var(--dp-color-outline)] flex items-center justify-between">
                <span className="font-display font-black text-xs text-[var(--dp-color-ink)]">
                  {profile.name}
                </span>
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-[var(--dp-color-accent-fresh)] border-[1px] border-[var(--dp-color-outline)] rounded-[5px] text-[var(--dp-color-ink)]">
                  IIIT NR
                </span>
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
              3rd Year BTech CSE
            </div>
            <div className="font-reading text-xs text-[var(--dp-color-ink)]/75">
              IIIT NR (Aug &apos;24 – Jul &apos;28)
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
