/**
 * ============================================================================
 * PROJECT MANAGEMENT GUIDE: PINNING, UNPINNING & REORDERING
 * ============================================================================
 *
 * 1. HOW TO PIN A PROJECT:
 *    - Open `src/data/pinned-projects.ts`.
 *    - Add a new object to `pinnedProjects` with `featured: true` and specify its
 *      `order` (e.g. 1, 2, 3...).
 *    - Provide the `repo` URL pointing to your GitHub repository.
 *    - Any custom `description` provided here will automatically override the
 *      GitHub repository description.
 *
 * 2. HOW TO UNPIN A PROJECT:
 *    - To keep it in the list but un-feature it: set `featured: false` in
 *      `src/data/pinned-projects.ts`.
 *    - To let it fall back purely to the auto-fetched GitHub repo data: remove
 *      the entry from `pinnedProjects`.
 *
 * 3. HOW TO REORDER FEATURED PROJECTS:
 *    - Change the `order` number (1, 2, 3...) in `pinnedProjects`.
 *    - `getFeaturedProjects()` sorts ascending by `order` and returns up to 4.
 *
 * 4. OFFLINE / RESILIENCE GUARANTEE:
 *    - If the GitHub API fails or reaches rate limits, the system seamlessly
 *      falls back to the pinned entries alone so the portfolio always renders.
 * ============================================================================
 */

import { pinnedProjects, type PinnedProject, type ProjectCategory, type ProjectStatus, type ProjectDetail } from "@/data/pinned-projects";
import { fetchGitHubRepos, type GitHubRepo } from "./github";

export type { ProjectCategory, ProjectStatus, ProjectDetail };

export interface Project {
  slug: string;
  name: string;
  title: string;
  description: string;
  repoUrl: string;
  demoUrl: string | null;
  featured: boolean;
  order: number;
  category: ProjectCategory;
  status: ProjectStatus;
  stars: number;
  language: string | null;
  topics: string[];
  techStack: string[];
  isPinned: boolean;
  /** Rich per-project content for the detail page. Only present on pinned projects. */
  detail?: ProjectDetail;
}

/**
 * Normalizes text to a clean URL-friendly slug.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Extracts the repository name from a GitHub URL or string.
 */
function extractRepoName(urlOrName: string): string {
  const clean = urlOrName.trim().replace(/\/+$/, "");
  const parts = clean.split("/");
  return parts[parts.length - 1].toLowerCase();
}

/**
 * Determines project category for unpinned GitHub repositories based on topics/language.
 */
function inferCategory(repo: GitHubRepo): ProjectCategory {
  const combined = [repo.language, ...repo.topics].map((t) => (t || "").toLowerCase());
  if (combined.some((t) => t.includes("agent") || t.includes("rag") || t.includes("llm"))) {
    return "AI Engineering";
  }
  if (combined.some((t) => t.includes("machine-learning") || t.includes("pytorch") || t.includes("scikit"))) {
    return "ML";
  }
  if (combined.some((t) => t.includes("cli") || t.includes("tool") || t.includes("devops") || t.includes("docker"))) {
    return "Tools";
  }
  return "Full-Stack";
}

/**
 * Converts a PinnedProject definition into the unified Project shape.
 */
function pinnedToProject(pinned: PinnedProject, matchedRepo?: GitHubRepo): Project {
  const repoName = extractRepoName(pinned.repo);
  const slug = slugify(repoName || pinned.title);

  const topics = matchedRepo?.topics ?? [];
  const language = matchedRepo?.language ?? null;
  const techStack =
    pinned.techStack && pinned.techStack.length > 0
      ? pinned.techStack
      : [language, ...topics].filter((item): item is string => Boolean(item));

  return {
    slug,
    name: matchedRepo?.name ?? repoName,
    title: pinned.title,
    // Custom description in pinned-projects.ts overrides the GitHub one
    description: pinned.description || matchedRepo?.description || "No description provided.",
    repoUrl: matchedRepo?.html_url ?? pinned.repo,
    demoUrl: pinned.demo,
    featured: pinned.featured,
    order: pinned.order,
    category: pinned.category,
    status: pinned.status,
    stars: matchedRepo?.stargazers_count ?? 0,
    language,
    topics,
    techStack,
    isPinned: true,
    detail: pinned.detail,
  };
}

/**
 * Converts an unpinned GitHub repository into a standard Project entry.
 */
function githubRepoToProject(repo: GitHubRepo, index: number): Project {
  const slug = slugify(repo.name);
  const techStack = [repo.language, ...repo.topics].filter((item): item is string => Boolean(item));

  return {
    slug,
    name: repo.name,
    title: repo.name,
    description: repo.description || "Public repository on GitHub.",
    repoUrl: repo.html_url,
    demoUrl: null,
    featured: false,
    order: 100 + index,
    category: inferCategory(repo),
    status: "Completed",
    stars: repo.stargazers_count,
    language: repo.language,
    topics: repo.topics,
    techStack,
    isPinned: false,
  };
}

/**
 * Merges GitHub repository data with local pinned projects.
 * Falls back safely to pinned entries alone if GitHub API fails or returns empty.
 */
export async function getAllProjects(): Promise<Project[]> {
  const githubRepos = await fetchGitHubRepos();

  // Map to track which GitHub repos got matched with pinned entries
  const matchedRepoNames = new Set<string>();

  // 1. Process all pinned projects
  const mergedPinnedProjects: Project[] = pinnedProjects.map((pinned) => {
    const pinnedRepoName = extractRepoName(pinned.repo);
    const matched = githubRepos.find(
      (r) =>
        r.name.toLowerCase() === pinnedRepoName ||
        r.html_url.toLowerCase() === pinned.repo.toLowerCase()
    );

    if (matched) {
      matchedRepoNames.add(matched.name.toLowerCase());
    }

    return pinnedToProject(pinned, matched);
  });

  // 2. Process remaining unpinned GitHub repos
  const unpinnedProjects: Project[] = githubRepos
    .filter((repo) => !matchedRepoNames.has(repo.name.toLowerCase()))
    .map((repo, idx) => githubRepoToProject(repo, idx));

  // 3. Combine: pinned projects ordered first by `order`, then unpinned repos by stars
  const sortedPinned = [...mergedPinnedProjects].sort((a, b) => a.order - b.order);
  const sortedUnpinned = [...unpinnedProjects].sort((a, b) => b.stars - a.stars);

  return [...sortedPinned, ...sortedUnpinned];
}

/**
 * Returns featured projects only (featured: true), sorted by `order` ascending, max 4.
 * Falls back to pinned entries if GitHub API fails.
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getAllProjects();
  return all
    .filter((project) => project.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 4);
}

/**
 * Looks up a single project by slug (case-insensitive).
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const normalized = slugify(slug);
  const all = await getAllProjects();
  return all.find((p) => p.slug === normalized) ?? null;
}

