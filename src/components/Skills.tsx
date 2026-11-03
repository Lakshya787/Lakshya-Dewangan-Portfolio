import React from "react";
import { CheckCircle2, Circle, BookOpen } from "lucide-react";
import BookContainer from "./BookContainer";
import { skillsByCategory, type SkillLevel } from "@/data/skills";
import TechSymbol from "./TechSymbol";

/* ─── Level metadata ──────────────────────────────────────────────────────── */

const levelMeta: Record<
  SkillLevel,
  {
    label: string;
    /** Short 1–2 char symbol shown inside the chip indicator dot */
    symbol: string;
    /** Icon component rendered next to label in legend */
    Icon: typeof CheckCircle2;
    /** Tailwind class for the chip outer border */
    borderClass: string;
    /** Tailwind class for the chip background */
    bgClass: string;
    /** Tailwind class for the label text color */
    labelClass: string;
    /** Tailwind class for the indicator dot */
    dotClass: string;
  }
> = {
  comfortable: {
    label: "Comfortable",
    symbol: "✓",
    Icon: CheckCircle2,
    borderClass: "border-[var(--dp-color-outline)]",
    bgClass: "bg-[var(--dp-color-panel)]",
    labelClass: "text-[var(--dp-color-ink)]",
    dotClass: "bg-[var(--dp-color-accent)]",
  },
  familiar: {
    label: "Familiar",
    symbol: "~",
    Icon: Circle,
    borderClass: "border-[var(--dp-color-outline)]",
    bgClass: "bg-[var(--dp-color-ground)]",
    labelClass: "text-[var(--dp-color-ink)]",
    dotClass: "bg-[var(--dp-color-accent-warm)]",
  },
  learning: {
    label: "Learning",
    symbol: "↗",
    Icon: BookOpen,
    borderClass: "border-[var(--dp-color-outline)]",
    bgClass: "bg-[var(--dp-color-ground)]",
    labelClass: "text-[var(--dp-color-ink)]",
    dotClass: "bg-[var(--dp-color-accent-secondary)]",
  },
};

/* ─── Skill Chip ─────────────────────────────────────────────────────────── */

function SkillChip({ name, level }: { name: string; level: SkillLevel }) {
  const meta = levelMeta[level];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] border-[2.5px] ${meta.borderClass} ${meta.bgClass} shadow-[2px_2px_0px_var(--dp-color-outline)] font-display font-bold text-xs ${meta.labelClass} hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--dp-color-outline)] transition-all duration-[180ms]`}
    >
      <TechSymbol name={name} className="w-3.5 h-3.5 shrink-0" />
      <span>{name}</span>
      {/* Coloured indicator dot — shape + colour distinguish the level */}
      <span
        className={`w-1.5 h-1.5 shrink-0 rounded-full ${meta.dotClass} border-[1px] border-[var(--dp-color-outline)] ml-0.5`}
        aria-hidden="true"
      />
      {/* Text label suffix differentiates levels without relying solely on colour */}
      <span className="font-mono text-[9px] font-extrabold tracking-tight opacity-60">
        {meta.symbol}
      </span>
    </span>
  );
}

/* ─── Legend ─────────────────────────────────────────────────────────────── */

function Legend() {
  return (
    <div className="flex flex-wrap items-center gap-3 pt-1 pb-4 border-b-[2px] border-[var(--dp-color-outline)] border-opacity-10">
      <span className="font-display font-extrabold text-[10px] uppercase tracking-widest text-[var(--dp-color-ink)]/50 mr-1">
        Legend:
      </span>
      {(Object.entries(levelMeta) as [SkillLevel, typeof levelMeta.comfortable][]).map(
        ([key, meta]) => {
          const Icon = meta.Icon;
          return (
            <span
              key={key}
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[8px] border-[2px] border-[var(--dp-color-outline)] bg-[var(--dp-color-ground)] shadow-[1.5px_1.5px_0px_var(--dp-color-outline)] font-reading text-[11px] font-bold text-[var(--dp-color-ink)]"
            >
              <span
                className={`w-2 h-2 rounded-full ${meta.dotClass} border-[1.5px] border-[var(--dp-color-outline)]`}
                aria-hidden="true"
              />
              <Icon className="w-3 h-3 text-[var(--dp-color-ink)]/60" aria-hidden="true" />
              <span>{meta.label}</span>
              <span className="font-mono text-[9px] opacity-50">{meta.symbol}</span>
            </span>
          );
        }
      )}
    </div>
  );
}

/* ─── Skills Component ───────────────────────────────────────────────────── */

export function Skills() {
  return (
    <BookContainer
      id="skills"
      tabLabel="Skills"
      tabColor="bg-[var(--dp-color-accent-secondary)]"
    >
      <div className="p-6 sm:p-10 flex flex-col gap-7">
        {/* Header */}
        <div className="flex flex-col gap-1 pt-2">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[var(--dp-color-ink)] tracking-tight leading-tight">
            Technical toolkit.
          </h2>
          <p className="font-reading text-sm text-[var(--dp-color-ink)]/70 leading-relaxed">
            Grouped by category. Every skill carries an explicit proficiency label so nothing is hidden behind colour alone.
          </p>
        </div>

        {/* Legend */}
        <Legend />

        {/* Category Groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
          {skillsByCategory.map((group) => {
            const isLearningGroup = group.category === "AI Engineering";
            return (
              <div key={group.category} className="flex flex-col gap-2.5">
                {/* Category header */}
                <div className="flex items-center gap-2">
                  <span className="font-display font-extrabold text-xs uppercase tracking-widest text-[var(--dp-color-ink)]/50">
                    {group.category}
                  </span>
                  {isLearningGroup && (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[6px] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-outline)] font-mono text-[9px] font-extrabold uppercase tracking-wider text-[var(--dp-color-accent-secondary)]">
                      <BookOpen className="w-2.5 h-2.5" aria-hidden="true" />
                      exploring
                    </span>
                  )}
                </div>
                {/* Chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillChip key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </BookContainer>
  );
}

export default Skills;
