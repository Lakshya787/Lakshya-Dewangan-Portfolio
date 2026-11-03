"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/profile";
import { navLinks, type NavLinkItem } from "@/data/navigation";

export type { NavLinkItem };
export { navLinks };

export function Navbar() {
  const pathname = usePathname() || "/";
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Track hash and scroll position to update active hash on the home page
  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || "");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Handle escape key to close mobile menu and restore focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const isLinkActive = (href: string) => {
    if (href === "/projects") {
      return pathname.startsWith("/projects");
    }
    if (href === "/certifications") {
      return pathname.startsWith("/certifications");
    }
    if (href === "/experience") {
      return pathname.startsWith("/experience");
    }
    if (href === "/contributions") {
      return pathname.startsWith("/contributions");
    }
    if (href.startsWith("/#") && pathname === "/") {
      const targetHash = href.replace("/", "");
      return activeSection === targetHash;
    }
    return false;
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isOpen) {
      setIsOpen(false);
      menuButtonRef.current?.focus();
    }

    // If we're already on the home page and clicking a section anchor, scroll smoothly
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${targetId}`);
        setActiveSection(`#${targetId}`);
      }
    }
  };

  return (
    <>
      {/* Accessible Skip-to-content link for keyboard & screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[var(--dp-color-accent-warm)] focus:text-[var(--dp-color-ink)] focus:border-[3px] focus:border-[var(--dp-color-outline)] focus:rounded-[14px] focus:shadow-[4px_4px_0px_var(--dp-color-outline)] focus:outline focus:outline-[3px] focus:outline-[var(--dp-color-outline)] focus:outline-offset-4 font-display font-bold text-sm"
      >
        Skip to main content
      </a>

      <header className="relative w-full pt-2.5 sm:pt-3 pb-1.5 z-40">
        <nav
          aria-label="Main Navigation"
          className="w-full flex items-center justify-between gap-2 sm:gap-4 px-3 py-2 sm:px-4 sm:py-2.5 bg-[var(--dp-color-panel)] border-[length:var(--dp-border-outline-width)] border-[var(--dp-color-outline)] rounded-[var(--dp-radius-corner)] shadow-hard"
        >
          {/* Brand Logo / Identification */}
          <Link
            href="/"
            onClick={(e) => handleLinkClick(e, "/")}
            className="group flex items-center gap-2 sm:gap-2.5 text-[var(--dp-color-ink)] rounded-[12px] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-outline)] focus-visible:outline-offset-4"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[10px] overflow-hidden bg-[var(--dp-color-panel)] border-[2px] border-[var(--dp-color-outline)] flex items-center justify-center text-white font-bold shadow-[2px_2px_0px_var(--dp-color-outline)] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[3px_3px_0px_var(--dp-color-outline)] transition-all duration-[180ms] relative shrink-0">
              <Image
                src="/images/icon.png"
                alt={profile.name}
                width={36}
                height={36}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-base sm:text-lg leading-none tracking-tight">
                {profile.name}
              </span>
              <span className="hidden min-[400px]:block font-reading text-[10px] sm:text-[11px] text-[var(--dp-color-ink)]/70 font-semibold tracking-tight mt-0.5">
                Developer • 3rd Year IIIT NR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1 text-xs xl:text-[13px] font-display font-bold list-none m-0 p-0">
            {navLinks.map((item) => {
              const active = isLinkActive(item.href);
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    aria-current={active ? "page" : undefined}
                    className={`inline-block px-2 py-1 xl:px-2.5 xl:py-1 rounded-[10px] border-[1.5px] transition-all duration-[180ms] select-none ${
                      active
                        ? "bg-[var(--dp-color-selection)] border-[var(--dp-color-outline)] text-[var(--dp-color-accent)] shadow-[2px_2px_0px_var(--dp-color-outline)]"
                        : "border-transparent text-[var(--dp-color-ink)] hover:border-[var(--dp-color-outline)] hover:bg-[var(--dp-color-field-soft)] hover:shadow-[2px_2px_0px_var(--dp-color-outline)]"
                    } focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-outline)] focus-visible:outline-offset-2`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Right Actions: ThemeToggle + CTA Button */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <ThemeToggle />
            <Button
              variant="warm"
              size="sm"
              href="/#contact"
              onClick={(e) => handleLinkClick(e as any, "/#contact")}
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Mobile Right Controls: ThemeToggle + Menu Disclosure Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 sm:p-2 bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] border-[2px] border-[var(--dp-color-outline)] rounded-[10px] shadow-[2px_2px_0px_var(--dp-color-outline)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--dp-color-outline)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-[180ms] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-outline)] focus-visible:outline-offset-2"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Disclosure Menu (Outlined panel style, no blur) */}
        {isOpen && (
          <div
            id="mobile-navigation-menu"
            ref={mobileMenuRef}
            className="lg:hidden mt-2.5 p-3.5 bg-[var(--dp-color-panel)] border-[length:var(--dp-border-outline-width)] border-[var(--dp-color-outline)] rounded-[var(--dp-radius-corner)] shadow-[5px_5px_0px_var(--dp-color-outline)] flex flex-col gap-2.5"
          >
            <ul className="flex flex-col gap-1 list-none m-0 p-0 font-display font-bold text-sm">
              {navLinks.map((item) => {
                const active = isLinkActive(item.href);
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between px-3 py-2 rounded-[10px] border-[1.5px] transition-all duration-[180ms] ${
                        active
                          ? "bg-[var(--dp-color-selection)] border-[var(--dp-color-outline)] text-[var(--dp-color-accent)] shadow-[2px_2px_0px_var(--dp-color-outline)]"
                          : "border-transparent text-[var(--dp-color-ink)] hover:bg-[var(--dp-color-ground)] hover:border-[var(--dp-color-outline)]"
                      } focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-outline)] focus-visible:outline-offset-2`}
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="pt-2 border-t-[2px] border-[var(--dp-color-rule-muted)]/40">
              <Button
                variant="warm"
                size="sm"
                fullWidth
                href="/#contact"
                onClick={(e) => handleLinkClick(e as any, "/#contact")}
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
