"use client";

import React, { forwardRef } from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "warm";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--dp-color-accent)] text-white hover:bg-[#5225c5] active:bg-[#451ea8]",
  secondary:
    "bg-[var(--dp-color-panel)] text-[var(--dp-color-ink)] hover:bg-[var(--dp-color-selection)] active:bg-[#e4dcfa]",
  warm:
    "bg-[var(--dp-color-accent-warm)] text-[var(--dp-color-ink)] hover:bg-[#f5c448] active:bg-[#e6b335]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3.5 py-1.5 text-xs rounded-[14px]",
  md: "px-5 py-2.5 text-sm rounded-[17px]",
  lg: "px-6 py-3 text-base rounded-[17px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      fullWidth = false,
      className = "",
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    // Base styles implementing the Playful Geometric specs:
    // - 3px outline in --dp-color-outline
    // - Firm hard offset shadow: 4px 4px 0px
    // - Hover lifts 2px with expanded shadow: 6px 6px 0px
    // - Active presses down with reduced offset: 2px 2px 0px
    // - 180ms transition duration
    // - Focus ring beyond the shadow: outline-offset 4px
    const baseStyles = [
      "inline-flex items-center justify-center gap-2 font-display font-bold select-none",
      "border-[3px] border-[var(--dp-color-outline)]",
      "shadow-[4px_4px_0px_var(--dp-color-outline)]",
      "transition-all duration-[180ms] ease-out",
      "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-outline)] focus-visible:outline-offset-4",
      disabled
        ? "opacity-60 cursor-not-allowed shadow-[2px_2px_0px_var(--dp-color-outline)] translate-x-[2px] translate-y-[2px]"
        : "hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_var(--dp-color-outline)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_var(--dp-color-outline)] cursor-pointer",
      variantStyles[variant],
      sizeStyles[size],
      fullWidth ? "w-full" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    if (href && !disabled) {
      if (external || href.startsWith("http") || href.startsWith("mailto:")) {
        return (
          <a
            href={href}
            target={external || href.startsWith("http") ? "_blank" : undefined}
            rel={external || href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={baseStyles}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={baseStyles}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={baseStyles}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

