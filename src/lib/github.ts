import { profile } from "@/data/profile";

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  topics: string[];
}

/**
 * Extracts the GitHub username from the profile data or falls back to 'Lakshya787'.
 */
export function getGitHubUsername(): string {
  if (profile.github) {
    const clean = profile.github.trim().replace(/\/+$/, "");
    const parts = clean.split("/");
    const last = parts[parts.length - 1];
    if (last && !last.includes("TODO")) {
      return last;
    }
  }
  return "Lakshya787";
}

/**
 * Server-side fetch of public repositories for the profile's GitHub user.
 * Revalidates every 3600 seconds (1 hour).
 * Uses process.env.GITHUB_TOKEN if present (server-side only).
 * Handles rate limits and network errors gracefully by returning an empty array.
 */
export async function fetchGitHubRepos(customUsername?: string): Promise<GitHubRepo[]> {
  const username = customUsername || getGitHubUsername();
  if (!username) {
    return [];
  }

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "User-Agent": "lakshya-portfolio",
    };

    // If GITHUB_TOKEN exists in environment, use it server-side only
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=100`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      // Gracefully handle rate-limits (HTTP 403/429) or not-found without throwing
      console.warn(
        `[GitHub API] Fetch failed for "${username}": HTTP ${response.status} ${response.statusText}`
      );
      return [];
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      return [];
    }

    return data
      .filter((repo: any) => !repo.fork && !repo.archived) // prioritize source repos
      .map((repo: any) => ({
        name: String(repo.name ?? ""),
        description: repo.description ? String(repo.description) : null,
        html_url: String(repo.html_url ?? `https://github.com/${username}/${repo.name}`),
        stargazers_count: typeof repo.stargazers_count === "number" ? repo.stargazers_count : 0,
        language: repo.language ? String(repo.language) : null,
        topics: Array.isArray(repo.topics) ? repo.topics.map(String) : [],
      }));
  } catch (error) {
    // Graceful fallback: never throw, return empty array
    console.warn(`[GitHub API] Network or parsing error for "${username}":`, error);
    return [];
  }
}

