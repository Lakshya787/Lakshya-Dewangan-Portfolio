export interface NavLinkItem {
  name: string;
  href: string;
}

export const allNavLinks: NavLinkItem[] = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/projects" },
  { name: "Certifications", href: "/certifications" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/#education" },
  { name: "Learning", href: "/#learning" },
  { name: "Contact", href: "/#contact" },
];

export const getNavLinks = (): NavLinkItem[] => {
  return allNavLinks;
};

export const navLinks: NavLinkItem[] = getNavLinks();
