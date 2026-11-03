import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="py-16 sm:py-24 flex flex-col items-center justify-center min-h-[60vh] text-center">
      {/* Playful Geometric Silhouette Card */}
      <div className="relative max-w-lg w-full">
        {/* Violet Hard-Offset Backing Layer */}
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-[6px] translate-y-[6px] sm:translate-x-[8px] sm:translate-y-[8px] rounded-[24px] bg-[var(--dp-color-accent)] border-[3px] border-[var(--dp-color-outline)]"
        />

        {/* Floating Decorative Geometric Shapes */}
        <div
          aria-hidden="true"
          className="absolute -top-6 -left-6 w-14 h-14 rounded-full bg-[var(--dp-color-accent-warm)] border-[3px] border-[var(--dp-color-outline)] shadow-[3px_3px_0px_var(--dp-color-outline)] select-none pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-6 -right-6 w-14 h-14 rounded-[12px] rotate-12 bg-[var(--dp-color-accent-secondary)] border-[3px] border-[var(--dp-color-outline)] shadow-[3px_3px_0px_var(--dp-color-outline)] select-none pointer-events-none"
        />

        {/* Tab pill */}
        <div className="absolute -top-3.5 left-8 z-20">
          <span className="inline-block px-3 py-0.5 rounded-full border-[2.5px] border-[var(--dp-color-outline)] bg-[var(--dp-color-accent-fresh)] text-[var(--dp-color-ink)] font-display font-black text-[11px] uppercase tracking-widest shadow-[2px_2px_0px_var(--dp-color-outline)]">
            404 Error
          </span>
        </div>

        {/* White Panel */}
        <div className="relative z-10 p-8 sm:p-12 bg-[var(--dp-color-panel)] border-[3px] border-[var(--dp-color-outline)] rounded-[24px] flex flex-col items-center gap-6">
          {/* Big Number */}
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute inset-0 translate-x-1 translate-y-1 font-display font-black text-7xl sm:text-8xl text-[var(--dp-color-accent)] opacity-40 select-none"
            >
              404
            </span>
            <h1 className="relative font-display font-black text-7xl sm:text-8xl text-[var(--dp-color-ink)] select-none">
              404
            </h1>
          </div>

          {/* Heading & Copy */}
          <div className="space-y-2">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[var(--dp-color-ink)] tracking-tight">
              Page not found in this chapter.
            </h2>
            <p className="font-reading text-sm sm:text-base text-[var(--dp-color-ink)]/75 max-w-sm mx-auto leading-relaxed">
              The page or project you&apos;re looking for doesn&apos;t exist, was moved, or
              the URL has a typo.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button variant="primary" size="md" href="/">
              <Home className="w-4 h-4" aria-hidden="true" />
              <span>Return Home</span>
            </Button>

            <Button variant="secondary" size="md" href="/projects">
              <Compass className="w-4 h-4" aria-hidden="true" />
              <span>Browse Projects</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

