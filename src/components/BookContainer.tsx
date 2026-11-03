import React from "react";

export interface BookContainerProps {
  /** Short text that appears in the colored tab on top */
  tabLabel: string;
  /** Tailwind background for the tab pill (should use a CSS-var-based bg class) */
  tabColor?: string;
  /** Section id for anchor links */
  id?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Shared "book" silhouette container.
 *
 * Structure:
 *   - Outer wrapper: provides the violet hard-offset backing layer via a
 *     pseudo-element approach using a nested div shifted 6px down/right.
 *   - Inner white panel: 3px outline, broad 24px corner radius, white background.
 *   - Tab label: small rounded pill anchored to the top-left corner,
 *     lifts above the border on z-axis.
 *
 * No blur anywhere. Offset is reduced on mobile via responsive classes.
 */
export function BookContainer({
  tabLabel,
  tabColor = "bg-[var(--dp-color-accent)]",
  id,
  className = "",
  children,
}: BookContainerProps) {
  return (
    <div id={id} className={`relative scroll-mt-24 ${className}`}>
      {/* Violet hard-offset backing layer — shifted 6px right/down (4px on mobile) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-[4px] translate-y-[4px] sm:translate-x-[6px] sm:translate-y-[6px] rounded-[24px] bg-[var(--dp-color-accent)] border-[3px] border-[var(--dp-color-outline)]"
      />

      {/* Tab label anchored above the panel */}
      <div className="absolute -top-3.5 left-5 sm:left-7 z-20">
        <span
          className={`${tabColor} inline-block px-3 py-0.5 rounded-full border-[2.5px] border-[var(--dp-color-outline)] font-display font-extrabold text-[11px] uppercase tracking-widest text-white shadow-[2px_2px_0px_var(--dp-color-outline)]`}
        >
          {tabLabel}
        </span>
      </div>

      {/* Main white "book" panel */}
      <div className="relative z-10 bg-[var(--dp-color-panel)] border-[3px] border-[var(--dp-color-outline)] rounded-[24px] overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export default BookContainer;
