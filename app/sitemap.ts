import type { MetadataRoute } from "next";

import { site } from "@/lib/site";
import { getCaseStudies, getWriting } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/work",
    "/writing",
    "/now",
    "/uses",
    "/cv",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const caseRoutes = getCaseStudies().map((s) => ({
    url: `${base}/work/${s.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  const writingRoutes = getWriting().map((p) => ({
    url: `${base}/writing/${p.slug}`,
    lastModified: new Date(p.frontmatter.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseRoutes, ...writingRoutes];
}
