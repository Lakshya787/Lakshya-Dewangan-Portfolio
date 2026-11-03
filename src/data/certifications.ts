export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  description?: string;
  badgeAccent?: "violet" | "mint" | "warm" | "pink";
}

/*
 * ============================================================================
 * CERTIFICATIONS DATA REGISTRY
 * ============================================================================
 * Add your verified certificates, licenses, or course credentials below.
 *
 * Example Entry:
 * {
 *   id: "aws-cloud-practitioner",
 *   title: "AWS Certified Cloud Practitioner",
 *   issuer: "Amazon Web Services (AWS)",
 *   issueDate: "2024",
 *   credentialId: "EXAMPLE-CRED-ID",
 *   credentialUrl: "https://www.credly.com/your-badge",
 *   skills: ["Cloud Computing", "AWS", "Security"],
 *   description: "Foundational understanding of AWS Cloud concepts, security, architecture, pricing, and support.",
 *   badgeAccent: "warm"
 * }
 * ============================================================================
 */

export const certifications: Certification[] = [];

