import React from "react";
import {
  Briefcase,
  Trophy,
  ExternalLink,
  Calendar,
  MapPin,
  Sparkles,
  Ticket,
} from "lucide-react";
import {
  internships,
  hackathons,
  achievements,
  hasExperience,
  type Internship,
  type Hackathon,
  type Achievement,
} from "@/data/experience";

/* ─── Ticket Row for Internships ─────────────────────────────────────────── */

function InternshipTicket({ item }: { item: Internship }) {
  return (
    <article className="group relative flex flex-col md:flex-row bg-[var(--dp-color-panel)] border-[3px] border-[var(--dp-color-outline)] rounded-[17px] shadow-hard overflow-hidden transition-all duration-[180ms] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg">
      {/* Left Ticket Stub */}
      <div className="md:w-56 p-5 sm:p-6 bg-[var(--dp-color-ground)] border-b-[3px] md:border-b-0 md:border-r-[3px] border-dashed border-[var(--dp-color-outline)] flex flex-col justify-between gap-3 relative">
        {/* Stub Header */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[8px] border-[2px] border-[var(--dp-color-outline)] bg-[var(--dp-color-accent-fresh)] text-[var(--dp-color-ink)] font-mono text-[10px] font-black uppercase tracking-wider">
            <Briefcase className="w-3 h-3" aria-hidden="true" />
            {item.type || "Internship"}
          </span>
          <Ticket className="w-4 h-4 text-[var(--dp-color-ink)]/40" aria-hidden="true" />
        </div>

        {/* Date & Location */}
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

      {/* Main Ticket Body */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between gap-4">
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="font-display font-black text-xl text-[var(--dp-color-ink)]">
              {item.role}
            </h3>
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

        {/* Skills & Action */}
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
      {/* Left Ticket Stub */}
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

      {/* Main Ticket Body */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between gap-4">
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="font-display font-black text-xl text-[var(--dp-color-ink)]">
              {item.title}
            </h3>
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

/* ─── Experience Section ─────────────────────────────────────────────────── */

export function Experience() {
  // If data arrays are empty, render nothing at all (no placeholder claims)
  if (!hasExperience) {
    return null;
  }

  return (
    <section id="experience" className="scroll-mt-24 flex flex-col gap-6">
      {/* Header */}
      <div>
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--dp-color-accent)]">
          Work &amp; Competitions
        </span>
        <h2 className="font-display text-3xl font-extrabold text-[var(--dp-color-ink)] tracking-tight">
          Experience &amp; Hackathons
        </h2>
        <p className="font-reading text-sm text-[var(--dp-color-ink)]/75 mt-1">
          Internships and competitive hackathons formatted as ticket records.
        </p>
      </div>

      {/* Internships List */}
      {internships.length > 0 && (
        <div className="flex flex-col gap-4">
          {internships.map((item) => (
            <InternshipTicket key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* Hackathons List */}
      {hackathons.length > 0 && (
        <div className="flex flex-col gap-4">
          {hackathons.map((item) => (
            <HackathonTicket key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* Achievements (Optional) */}
      {achievements.length > 0 && (
        <div className="space-y-3 pt-2">
          <h3 className="font-display font-black text-xl text-[var(--dp-color-ink)] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[var(--dp-color-accent-warm)]" aria-hidden="true" />
            Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="p-4 bg-[var(--dp-color-panel)] border-[2.5px] border-[var(--dp-color-outline)] rounded-[14px] shadow-[3px_3px_0px_var(--dp-color-outline)] flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-black text-sm text-[var(--dp-color-ink)]">
                    {ach.title}
                  </span>
                  {ach.date && (
                    <span className="font-mono text-[10px] text-[var(--dp-color-ink)]/60">
                      {ach.date}
                    </span>
                  )}
                </div>
                <p className="font-reading text-xs text-[var(--dp-color-ink)]/75">
                  {ach.description}
                </p>
                {ach.url && (
                  <a
                    href={ach.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-display font-bold text-[11px] text-[var(--dp-color-accent)] hover:underline mt-auto"
                  >
                    <span>Learn more</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Experience;

