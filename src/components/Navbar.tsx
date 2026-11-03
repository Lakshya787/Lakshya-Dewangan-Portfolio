"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Shapes, Menu, X, ArrowUpRight } from "lucide-react";
import Button from "./Button";
import { profile } from "@/data/profile";

export interface NavLinkItem {
  name: string;
  href: string;
}

export const navLinks: NavLinkItem[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Learning", href: "#learning" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Track hash and scroll position to update aria-current
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

  const handleLinkClick = (href: string) => {
    setActiveSection(href);
    if (isOpen) {
      setIsOpen(false);
      menuButtonRef.current?.focus();
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

      <header className="relative w-full pt-4 pb-2 z-40">
        <nav
          aria-label="Main Navigation"
          className="w-full flex items-center justify-between gap-4 p-3.5 sm:p-4 bg-[var(--dp-color-panel)] border-[length:var(--dp-border-outline-width)] border-[var(--dp-color-outline)] rounded-[var(--dp-radius-corner)] shadow-hard"
        >
          {/* Brand Logo / Identification */}
          <Link
            href="/"
            onClick={() => handleLinkClick("")}
            className="group flex items-center gap-2.5 text-[var(--dp-color-ink)] rounded-[12px] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-outline)] focus-visible:outline-offset-4"
          >
            <div className="w-10 h-10 rounded-[12px] overflow-hidden bg-[var(--dp-color-accent)] border-[2.5px] border-[var(--dp-color-outline)] flex items-center justify-center text-white font-bold shadow-[2px_2px_0px_var(--dp-color-outline)] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[3px_3px_0px_var(--dp-color-outline)] transition-all duration-[180ms] relative">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={40}
                height={40}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg sm:text-xl leading-none tracking-tight">
                {profile.name}
              </span>
              <span className="font-reading text-[11px] text-[var(--dp-color-ink)]/70 font-semibold tracking-tight">
                Developer • IIIT NR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-display font-bold list-none m-0 p-0">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`inline-block px-3 py-1.5 rounded-[12px] border-[2px] transition-all duration-[180ms] select-none ${
                      isActive
                        ? "bg-[var(--dp-color-selection)] border-[var(--dp-color-outline)] text-[var(--dp-color-accent)] shadow-[2px_2px_0px_var(--dp-color-outline)]"
                        : "border-transparent text-[var(--dp-color-ink)] hover:border-[var(--dp-color-outline)] hover:bg-[var(--dp-color-field-soft)] hover:shadow-[2px_2px_0px_var(--dp-color-outline)]"
                    } focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-outline)] focus-visible:outline-offset-2`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="warm"
              size="sm"
              href="#contact"
              onClick={() => handleLinkClick("#contact")}
            >
              <span>Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Disclosure Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              ref={menuButtonRef}
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] border-[2.5px] border-[var(--dp-color-outline)] rounded-[12px] shadow-[2px_2px_0px_var(--dp-color-outline)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--dp-color-outline)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-[180ms] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-outline)] focus-visible:outline-offset-2"
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
            className="md:hidden mt-3 p-4 bg-[var(--dp-color-panel)] border-[length:var(--dp-border-outline-width)] border-[var(--dp-color-outline)] rounded-[var(--dp-radius-corner)] shadow-[6px_6px_0px_var(--dp-color-outline)] flex flex-col gap-3"
          >
            <ul className="flex flex-col gap-1.5 list-none m-0 p-0 font-display font-bold text-base">
              {navLinks.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => handleLinkClick(item.href)}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-[12px] border-[2px] transition-all duration-[180ms] ${
                        isActive
                          ? "bg-[var(--dp-color-selection)] border-[var(--dp-color-outline)] text-[var(--dp-color-accent)] shadow-[2px_2px_0px_var(--dp-color-outline)]"
                          : "border-transparent text-[var(--dp-color-ink)] hover:bg-[var(--dp-color-ground)] hover:border-[var(--dp-color-outline)]"
                      } focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--dp-color-outline)] focus-visible:outline-offset-2`}
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="pt-2 border-t-[2px] border-[var(--dp-color-rule-muted)]/40">
              <Button
                variant="warm"
                size="md"
                fullWidth
                href="#contact"
                onClick={() => handleLinkClick("#contact")}
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

