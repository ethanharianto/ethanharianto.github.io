import type { Metadata } from "next";

import { projects } from "@/lib/projects";
import { getPublishedCaseStudies } from "@/lib/content";
import { WorkArchive } from "@/components/work/WorkArchive";

export const metadata: Metadata = {
  title: "Work",
  description: "Projects, 2020 to now.",
};

export default function WorkIndexPage() {
  const studies = getPublishedCaseStudies();
  const caseStudySlugs = studies.map((s) => s.slug);

  return (
    <div className="shell pt-40 pb-20">
      <div className="max-w-3xl mb-16">
        <p className="log mb-5">
          <span className="text-[var(--color-accent)]">Index</span> &nbsp; Work
        </p>
        <h1 className="display text-[clamp(48px,9vw,128px)] text-[var(--color-ink)]">
          Selected work.
        </h1>
        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[var(--color-muted)] max-w-2xl">
          {projects.length} projects, 2020 to now. Filter by stack.
        </p>
      </div>

      <WorkArchive projects={projects} caseStudySlugs={caseStudySlugs} />
    </div>
  );
}
