import React from "react";
import { Code2, Globe, Cpu, Gamepad2 } from "lucide-react";
import BookContainer from "./BookContainer";
import { profile } from "@/data/profile";

const interests = [
  {
    icon: Code2,
    label: "Full-Stack Engineering",
    detail: "Building end-to-end web apps with React, Next.js, and Node.js",
  },
  {
    icon: Cpu,
    label: "AI Engineering",
    detail: "Exploring LLMs, RAG pipelines, and agentic workflows as an active learning direction",
  },
  {
    icon: Globe,
    label: "Open Source & Developer Tools",
    detail: "Contributing to the broader ecosystem and building tools that improve developer workflow",
  },
  {
    icon: Gamepad2,
    label: "Systems & Computer Science",
    detail: "Curious about how things work under the hood — OS internals, networks, data structures",
  },
];

export function About() {
  return (
    <BookContainer
      id="about-section"
      tabLabel="About"
      tabColor="bg-[var(--dp-color-accent)]"
    >
      <div className="p-6 sm:p-10 flex flex-col gap-8">
        {/* Positioning Statement */}
        <div className="flex flex-col gap-3 pt-2">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[var(--dp-color-ink)] tracking-tight leading-tight">
            Who I am &amp; what I&apos;m building toward.
          </h2>
          <p className="font-reading text-base sm:text-lg text-[var(--dp-color-ink)]/85 leading-[1.7] max-w-2xl">
            {profile.positioningStatement}
          </p>
        </div>

        {/* Divider */}
        <div className="h-[2px] bg-[var(--dp-color-outline)] rounded-full opacity-10" />

        {/* Interests List */}
        <div className="flex flex-col gap-3">
          <span className="font-display font-extrabold text-xs uppercase tracking-widest text-[var(--dp-color-ink)]/50">
            Areas of Interest
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none m-0 p-0">
            {interests.map(({ icon: Icon, label, detail }) => (
              <li
                key={label}
                className="flex items-start gap-3 p-4 bg-[var(--dp-color-ground)] border-[2.5px] border-[var(--dp-color-outline)] rounded-[16px] shadow-[3px_3px_0px_var(--dp-color-outline)]"
              >
                <span className="w-8 h-8 shrink-0 rounded-[10px] bg-[var(--dp-color-selection)] border-[2px] border-[var(--dp-color-outline)] flex items-center justify-center shadow-[2px_2px_0px_var(--dp-color-outline)]">
                  <Icon className="w-4 h-4 text-[var(--dp-color-accent)]" />
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="font-display font-black text-sm text-[var(--dp-color-ink)] leading-tight">
                    {label}
                  </span>
                  <span className="font-reading text-xs text-[var(--dp-color-ink)]/70 leading-snug">
                    {detail}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BookContainer>
  );
}

export default About;
