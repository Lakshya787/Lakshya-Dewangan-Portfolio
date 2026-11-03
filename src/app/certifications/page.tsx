import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Award,
  ExternalLink,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Sparkles,
  Compass,
} from "lucide-react";
import Button from "@/components/Button";
import { certifications, type Certification } from "@/data/certifications";

export const metadata = {
  title: "Certifications — Lakshya Dewangan",
  description:
    "Verified technical certifications, credentials, and course completions by Lakshya Dewangan.",
};

const badgeStyles: Record<
  NonNullable<Certification["badgeAccent"]>,
  { bg: string; text: string; shadow: string }
> = {
  violet: {
    bg: "bg-[var(--dp-color-accent)]",
    text: "text-white",
    shadow: "shadow-[2px_2px_0px_var(--dp-color-outline)]",
  },
  mint: {
    bg: "bg-[var(--dp-color-accent-fresh)]",
    text: "text-[var(--dp-color-ink)]",
    shadow: "shadow-[2px_2px_0px_var(--dp-color-outline)]",
  },
  warm: {
    bg: "bg-[var(--dp-color-accent-warm)]",
    text: "text-[var(--dp-color-ink)]",
    shadow: "shadow-[2px_2px_0px_var(--dp-color-outline)]",
  },
  pink: {
    bg: "bg-[var(--dp-color-accent-secondary)]",
    text: "text-[var(--dp-color-ink)]",
    shadow: "shadow-[2px_2px_0px_var(--dp-color-outline)]",
  },
};

function CertificationCard({ cert }: { cert: Certification }) {
  const accent = badgeStyles[cert.badgeAccent || "mint"];

  return (
    <article className="group relative flex flex-col justify-between bg-[var(--dp-color-panel)] border-[3px] border-[var(--dp-color-outline)] rounded-[17px] shadow-hard p-6 gap-5 transition-all duration-[180ms] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg">
      <div className="space-y-3.5">
        {/* Header row: Issuer badge & Date */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[8px] border-[2px] border-[var(--dp-color-outline)] ${accent.bg} ${accent.text} ${accent.shadow} font-mono text-[10px] font-black uppercase tracking-wider`}
          >
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            {cert.issuer}
          </span>

          <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[var(--dp-color-ink)]/70">
            <Calendar className="w-3 h-3 text-[var(--dp-color-accent)]" aria-hidden="true" />
            {cert.issueDate}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display font-black text-xl text-[var(--dp-color-ink)] leading-snug">
          {cert.title}
        </h2>

        {/* Description */}
        {cert.description && (
          <p className="font-reading text-sm text-[var(--dp-color-ink)]/80 leading-relaxed">
            {cert.description}
          </p>
        )}

        {/* Credential ID */}
        {cert.credentialId && (
          <div className="inline-block font-mono text-[11px] font-bold px-2 py-0.5 bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-outline)] rounded-[6px] text-[var(--dp-color-ink)]/75">
            Credential ID: {cert.credentialId}
          </div>
        )}

        {/* Skills */}
        {cert.skills && cert.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-[6px] bg-[var(--dp-color-selection)] border-[1.5px] border-[var(--dp-color-outline)] text-[var(--dp-color-accent)]"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Verification Link */}
      {cert.credentialUrl && (
        <div className="pt-3 border-t-[2px] border-[var(--dp-color-rule-muted)]/30">
          <Button
            variant="secondary"
            size="sm"
            href={cert.credentialUrl}
            external
            fullWidth
            aria-label={`Verify ${cert.title} certificate`}
          >
            <span>Verify Credential</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </Button>
        </div>
      )}
    </article>
  );
}

export default function CertificationsPage() {
  return (
    <div className="py-8 sm:py-12 flex flex-col gap-10">
      {/* Top Navigation Links */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-display font-extrabold text-sm text-[var(--dp-color-ink)]/70 hover:text-[var(--dp-color-accent)] transition-colors duration-[180ms] focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-outline)] focus-visible:outline-offset-4 rounded-[6px]"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>

        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 font-display font-extrabold text-xs px-3 py-1.5 rounded-[10px] border-[2px] border-[var(--dp-color-outline)] bg-[var(--dp-color-panel)] shadow-[2px_2px_0px_var(--dp-color-outline)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-[180ms] text-[var(--dp-color-ink)]"
        >
          <Compass className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Browse Projects</span>
        </Link>
      </div>

      {/* Page Header */}
      <div className="flex flex-col gap-3 pb-4 border-b-[3px] border-[var(--dp-color-outline)]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--dp-color-accent)]">
              Credentials &amp; Learning Validation
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-[var(--dp-color-ink)] tracking-tight leading-none mt-1">
              Certifications
            </h1>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--dp-color-panel)] border-[3px] border-[var(--dp-color-outline)] rounded-[13px] shadow-hard self-start sm:self-auto shrink-0">
            <Award className="w-4 h-4 text-[var(--dp-color-accent)] shrink-0" aria-hidden="true" />
            <span className="font-display font-extrabold text-sm text-[var(--dp-color-ink)]">
              {certifications.length} Credential{certifications.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        <p className="font-reading text-sm sm:text-base text-[var(--dp-color-ink)]/75 max-w-2xl leading-relaxed">
          Verified technical certifications, professional training, and validated course completions
          supporting my full-stack engineering and systems foundation.
        </p>
      </div>

      {/* Certifications Grid or Empty State */}
      {certifications.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      ) : (
        /* Playful Geometric Empty State */
        <div
          role="status"
          className="relative max-w-xl mx-auto w-full my-6"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-[6px] translate-y-[6px] rounded-[24px] bg-[var(--dp-color-accent-fresh)] border-[3px] border-[var(--dp-color-outline)]"
          />

          <div className="relative z-10 p-8 sm:p-12 bg-[var(--dp-color-panel)] border-[3px] border-[var(--dp-color-outline)] rounded-[24px] flex flex-col items-center gap-5 text-center">
            <div className="w-16 h-16 rounded-[18px] bg-[var(--dp-color-selection)] border-[2.5px] border-[var(--dp-color-outline)] shadow-[3px_3px_0px_var(--dp-color-outline)] flex items-center justify-center text-[var(--dp-color-accent)]">
              <Award className="w-8 h-8" aria-hidden="true" />
            </div>

            <div className="space-y-2">
              <h2 className="font-display font-black text-2xl text-[var(--dp-color-ink)]">
                Certifications in Progress
              </h2>
              <p className="font-reading text-sm text-[var(--dp-color-ink)]/75 max-w-md leading-relaxed">
                I am currently preparing for industry cloud and systems certifications.
                Credentials will appear here once officially completed and verified.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button variant="primary" size="md" href="/projects">
                <Compass className="w-4 h-4" aria-hidden="true" />
                <span>Explore Projects</span>
              </Button>
              <Button variant="secondary" size="md" href="/">
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                <span>Return Home</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

