"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Avoid hydration mismatch by rendering a consistent placeholder until mounted
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={`p-2 rounded-[10px] sm:rounded-[12px] border-[2px] sm:border-[2.5px] border-[var(--dp-color-outline)] bg-[var(--dp-color-panel)] text-[var(--dp-color-ink)] shadow-[2px_2px_0px_var(--dp-color-outline)] opacity-80 ${className}`}
      >
        <div className="w-4 h-4" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`p-2 rounded-[10px] sm:rounded-[12px] border-[2px] sm:border-[2.5px] border-[var(--dp-color-outline)] bg-[var(--dp-color-panel)] text-[var(--dp-color-ink)] shadow-[2px_2px_0px_var(--dp-color-outline)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--dp-color-outline)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-[180ms] cursor-pointer focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-outline)] focus-visible:outline-offset-2 ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[var(--dp-color-accent-warm)] fill-[var(--dp-color-accent-warm)]/20 animate-in spin-in-90 duration-200" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4 text-[var(--dp-color-accent)] fill-[var(--dp-color-accent)]/20 animate-in -spin-in-90 duration-200" aria-hidden="true" />
      )}
    </button>
  );
}

export default ThemeToggle;

