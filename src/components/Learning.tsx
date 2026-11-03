import React from "react";
import { Sparkles, Compass, BookOpen, Layers } from "lucide-react";
import { learningProfile, type LearningTopic } from "@/data/learning";

function LearningCard({ topic }: { topic: LearningTopic }) {
  const isCurrentlyLearning = topic.status === "currently learning";

  return (
    <article className="p-5 sm:p-6 bg-[var(--dp-color-panel)] border-[2.5px] border-[var(--dp-color-outline)] rounded-[14px] shadow-[3px_3px_0px_var(--dp-color-outline)] flex flex-col justify-between gap-4 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_var(--dp-color-outline)] transition-all duration-[180ms]">
      <div className="space-y-2.5">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-outline)] rounded-[6px] text-[var(--dp-color-ink)]/75">
            {topic.category}
          </span>

          <span
            className={`inline-flex items-center gap-1.5 font-mono text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-[6px] border-[1.5px] border-[var(--dp-color-outline)] ${
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
        <h3 className="font-display font-black text-lg text-[var(--dp-color-ink)] leading-snug">
          {topic.title}
        </h3>

        {/* Focus description */}
        <p className="font-reading text-xs sm:text-sm text-[var(--dp-color-ink)]/80 leading-relaxed">
          {topic.focus}
        </p>
      </div>

      {/* Tags / Sub-areas */}
      {topic.tags && topic.tags.length > 0 && (
        <div className="pt-3 border-t-[1.5px] border-[var(--dp-color-rule-muted)]/30 flex flex-wrap gap-1.5">
          {topic.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] font-semibold px-2 py-0.5 bg-[var(--dp-color-ground)] border-[1px] border-[var(--dp-color-outline)] rounded-[6px] text-[var(--dp-color-ink)]/85"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export function Learning() {
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

      {/* Topics Grid - stacks on mobile/760px */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {learningProfile.topics.map((topic) => (
          <LearningCard key={topic.title} topic={topic} />
        ))}
      </div>
    </section>
  );
}

export default Learning;

