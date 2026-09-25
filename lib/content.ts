import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();

export interface WritingFrontmatter {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  draft?: boolean;
}

export interface WritingEntry {
  slug: string;
  frontmatter: WritingFrontmatter;
  content: string;
  readingTime: number;
}

export interface CaseStudyFrontmatter {
  title: string;
  description: string;
  role: string;
  year: string;
  stack: string[];
  metrics?: { label: string; value: string }[];
  cover?: string;
  accent?: string;
  projectSlug?: string;
  draft?: boolean;
}

export interface CaseStudyEntry {
  slug: string;
  frontmatter: CaseStudyFrontmatter;
  content: string;
}

function readDir(dir: string) {
  const full = path.join(root, "content", dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(full, file), "utf8");
      const { data, content } = matter(raw);
      return { slug, data, content };
    });
}

function estimateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export function getAllWriting(): WritingEntry[] {
  return readDir("writing")
    .map(({ slug, data, content }) => ({
      slug,
      frontmatter: data as WritingFrontmatter,
      content,
      readingTime: estimateReadingTime(content),
    }))
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export function getWriting(): WritingEntry[] {
  return getAllWriting().filter((e) => !e.frontmatter.draft);
}

/** Every post regardless of `draft`. Previews and local checks only. */
export function getDraftWriting(): WritingEntry[] {
  return getAllWriting().filter((e) => e.frontmatter.draft);
}

/**
 * Drafts are invisible to every public entry point, not just the index.
 * The by-slug loaders used to read from `getAllWriting()`, which meant a
 * `draft: true` post was still statically generated and still served its
 * "Working draft — replace before publishing." description to search
 * engines — the flag protected the list, not the page.
 */
export function getWritingBySlug(slug: string): WritingEntry | undefined {
  return getWriting().find((e) => e.slug === slug);
}

export function getCaseStudies(): CaseStudyEntry[] {
  return readDir("work").map(({ slug, data, content }) => ({
    slug,
    frontmatter: data as CaseStudyFrontmatter,
    content,
  }));
}

export function getPublishedCaseStudies(): CaseStudyEntry[] {
  return getCaseStudies().filter((s) => !s.frontmatter.draft);
}

export function getCaseStudyBySlug(slug: string): CaseStudyEntry | undefined {
  return getPublishedCaseStudies().find((e) => e.slug === slug);
}
