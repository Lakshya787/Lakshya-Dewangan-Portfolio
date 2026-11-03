import { hasExperience } from "./experience";

export interface NavLinkItem {
  name: string;
  href: string;
}

export const allNavLinks: NavLinkItem[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Learning", href: "#learning" },
  { name: "Contact", href: "#contact" },
];

export const getNavLinks = (): NavLinkItem[] => {
  return allNavLinks.filter((item) => item.name !== "Experience" || hasExperience);
};

export const navLinks: NavLinkItem[] = getNavLinks();

