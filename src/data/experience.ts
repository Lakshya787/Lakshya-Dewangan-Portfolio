export interface Internship {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  type?: "Internship" | "Contract" | "Part-time";
  description: string;
  highlights?: string[];
  skills?: string[];
  certificateUrl?: string;
}

export interface Hackathon {
  id: string;
  title: string;
  organizer?: string;
  project?: string;
  date: string;
  award?: string;
  description: string;
  skills?: string[];
  projectUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  description: string;
  url?: string;
}

/*
 * Note on authenticity:
 * We never fabricate internships, hackathon victories, or work history.
 * If these arrays are empty, the Experience section renders nothing (and the nav link is dropped),
 * avoiding placeholder claims.
 *
 * To add real experience later:
 * Populate internships, hackathons, or achievements below.
 */

export const internships: Internship[] = [];
export const hackathons: Hackathon[] = [];
export const achievements: Achievement[] = [];

export const hasExperience =
  internships.length > 0 || hackathons.length > 0 || achievements.length > 0;

// Legacy fallback type for compatibility
export type ExperienceItem = Internship;
export const experienceList: ExperienceItem[] = [];
