import React from "react";
import {
  Compass,
  Code2,
  Box,
  Wrench,
  Sparkles,
  Layers,
  ArrowRight,
  Terminal,
} from "lucide-react";
import { learningProfile, type LearningTopic, type LearningItem } from "@/data/learning";
import TechSymbol from "./TechSymbol";

function StackPill({ item }: { item: LearningItem }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-[10px] border-[2px] border-[var(--dp-color-outline)] bg-[var(--dp-color-panel)] shadow-[2px_2px_0px_var(--dp-color-outline)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--dp-color-outline)] transition-all duration-[180ms]">
      <TechSymbol name={item.name} className="w-4 h-4 shrink-0" />
      <div className="flex flex-col">
        <span className="font-display font-black text-xs text-[var(--dp-color-ink)] leading-tight">
          {item.name}
        </span>
        <span className="font-reading text-[10px] text-[var(--dp-color-ink)]/70 hidden sm:inline-block leading-none mt-0.5">
          {item.note}
        </span>
      </div>
    </div>
  );
}

function LearningCard({ topic }: { topic: LearningTopic }) {
  const isCurrentlyLearning = topic.status === "currently learning";

  return (
    <article className="p-5 sm:p-6 bg-[var(--dp-color-panel)] border-[length:var(--dp-border-outline-width)] border-[var(--dp-color-outline)] rounded-[var(--dp-radius-corner)] shadow-hard flex flex-col justify-between gap-5 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg transition-all duration-[180ms]">
      <div className="space-y-3">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="font-mono text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-[var(--dp-color-ground)] border-[2px] border-[var(--dp-color-outline)] rounded-[8px] text-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-outline)]">
            {topic.category}
          </span>

          <span
            className={`inline-flex items-center gap-1.5 font-mono text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-[8px] border-[2px] border-[var(--dp-color-outline)] shadow-[1.5px_1.5px_0px_var(--dp-color-outline)] ${
              isCurrentlyLearning
                ? "bg-[var(--dp-color-accent-fresh)] text-[var(--dp-color-ink)]"
                : "bg-[var(--dp-color-selection)] text-[var(--dp-color-accent)]"
            }`}
          >
            {isCurrentlyLearning && (
              <span
                className="w-1.5 h-1.5 rounded-full bg-[var(--dp-color-accent)] shrink-0 animate-pulse"
                aria-hidden="true"
              />
            )}
            {topic.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-black text-xl text-[var(--dp-color-ink)] leading-snug">
          {topic.title}
        </h3>

        {/* Focus description */}
        <p className="font-reading text-sm text-[var(--dp-color-ink)]/80 leading-relaxed">
          {topic.focus}
        </p>
      </div>

      {/* Tech Breakdown: Frameworks, Languages, Tools with individual Symbols */}
      <div className="space-y-3 pt-3 border-t-[2px] border-[var(--dp-color-outline)]/15">
        {/* Frameworks & Languages */}
        {((topic.languages && topic.languages.length > 0) ||
          (topic.frameworks && topic.frameworks.length > 0)) && (
          <div className="space-y-1.5">
            <span className="font-mono text-[10px] font-black uppercase tracking-wider text-[var(--dp-color-ink)]/60 flex items-center gap-1">
              <Code2 className="w-3 h-3 text-[var(--dp-color-accent)]" aria-hidden="true" />
              <span>Languages & Frameworks</span>
            </span>
            <div className="flex flex-wrap gap-1.5">
              {topic.languages?.map((lang) => (
                <span
                  key={lang}
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold px-2 py-0.5 bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-outline)] rounded-[6px] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-outline)]"
                >
                  <TechSymbol name={lang} className="w-3.5 h-3.5 shrink-0" />
                  <span>{lang}</span>
                </span>
              ))}
              {topic.frameworks?.map((fw) => (
                <span
                  key={fw}
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold px-2 py-0.5 bg-[var(--dp-color-field-soft)] border-[1.5px] border-[var(--dp-color-outline)] rounded-[6px] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-outline)]"
                >
                  <TechSymbol name={fw} className="w-3.5 h-3.5 shrink-0" />
                  <span>{fw}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tools & Infrastructure */}
        {topic.tools && topic.tools.length > 0 && (
          <div className="space-y-1.5">
            <span className="font-mono text-[10px] font-black uppercase tracking-wider text-[var(--dp-color-ink)]/60 flex items-center gap-1">
              <Wrench className="w-3 h-3 text-[var(--dp-color-accent-warm)]" aria-hidden="true" />
              <span>Tools & Infrastructure</span>
            </span>
            <div className="flex flex-wrap gap-1.5">
              {topic.tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold px-2 py-0.5 bg-[var(--dp-color-panel)] border-[1.5px] border-[var(--dp-color-outline)] rounded-[6px] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-outline)]"
                >
                  <TechSymbol name={tool} className="w-3.5 h-3.5 shrink-0" />
                  <span>{tool}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Conceptual Focus Tags */}
        {topic.tags && topic.tags.length > 0 && (
          <div className="pt-1 flex flex-wrap gap-1">
            {topic.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] font-medium px-2 py-0.5 rounded-[5px] bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)]/70 border border-[var(--dp-color-outline)]/30"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function Learning() {
  const { stackSummary } = learningProfile;

  return (
    <section
      id="learning"
      className="scroll-mt-24 p-6 sm:p-10 bg-[var(--dp-color-field-soft)] border-[length:var(--dp-border-outline-width)] border-[var(--dp-color-outline)] rounded-[var(--dp-radius-corner)] shadow-hard flex flex-col gap-8 relative overflow-hidden"
    >
      {/* Background Accent Shapes */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full border-[3px] border-[var(--dp-color-outline)] bg-[var(--dp-color-accent-warm)] opacity-20 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-4 right-8 w-16 h-16 rounded-[12px] border-[3px] border-[var(--dp-color-outline)] bg-[var(--dp-color-accent)] opacity-10 rotate-12 pointer-events-none"
      />

      {/* Header */}
      <div className="relative z-10 space-y-2">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-[var(--dp-color-accent)] shrink-0" aria-hidden="true" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--dp-color-accent)]">
            Active Learning Direction
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-black text-[var(--dp-color-ink)] tracking-tight">
          What I&apos;m Currently Learning
        </h2>

        <p className="font-reading text-sm sm:text-base text-[var(--dp-color-ink)]/80 max-w-2xl leading-relaxed">
          {learningProfile.statement}
        </p>
      </div>

      {/* ─── Stack in Focus: Languages, Frameworks & Tools with Symbols ─── */}
      <div className="relative z-10 p-5 sm:p-6 bg-[var(--dp-color-ground)] border-[2.5px] border-[var(--dp-color-outline)] rounded-[14px] shadow-[3px_3px_0px_var(--dp-color-outline)] space-y-5">
        <div className="flex items-center justify-between gap-2 border-b-[2px] border-[var(--dp-color-outline)]/20 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--dp-color-accent)]" aria-hidden="true" />
            <h3 className="font-display font-black text-base sm:text-lg text-[var(--dp-color-ink)]">
              Frameworks, Languages & Tools in Active Learning
            </h3>
          </div>
          <span className="font-mono text-xs font-bold text-[var(--dp-color-accent)]">
            With Tech Symbols
          </span>
        </div>

        {/* 1. Languages */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-wider text-[var(--dp-color-ink)]/75">
            <Terminal className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" aria-hidden="true" />
            <span>Core Languages</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {stackSummary.languages.map((item) => (
              <StackPill key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* 2. Frameworks */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-wider text-[var(--dp-color-ink)]/75">
            <Code2 className="w-3.5 h-3.5 text-[var(--dp-color-accent-fresh)]" aria-hidden="true" />
            <span>Frameworks & Libraries</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {stackSummary.frameworks.map((item) => (
              <StackPill key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* 3. Tools & Infrastructure */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-wider text-[var(--dp-color-ink)]/75">
            <Wrench className="w-3.5 h-3.5 text-[var(--dp-color-accent-warm)]" aria-hidden="true" />
            <span>Tools & Infrastructure</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2">
            {stackSummary.tools.map((item) => (
              <StackPill key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* ─── Deep-Dive Topic Cards ─── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {learningProfile.topics.map((topic) => (
          <LearningCard key={topic.title} topic={topic} />
        ))}
      </div>
    </section>
  );
}

export default Learning;
