import type { Metadata } from "next";

import { projects } from "@/lib/projects";
import { getCaseStudies } from "@/lib/content";
import { WorkArchive } from "@/components/work/WorkArchive";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects — from shipped products to research — spanning ML systems, web, mobile, and hardware.",
};

export default function WorkIndexPage() {
  const studies = getCaseStudies();
  const caseStudySlugs = studies.map((s) => s.slug);

  return (
    <div className="shell pt-40 pb-20">
      <div className="max-w-3xl mb-16">
        <p className="mono-label mb-5">
          <span className="text-[var(--color-accent)]">Index</span> &nbsp; Work
        </p>
        <h1 className="display text-[clamp(48px,9vw,128px)] text-[var(--color-ink)]">
          Selected <span className="italic text-[var(--color-accent)]">work</span>.
        </h1>
        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[var(--color-muted)] max-w-2xl">
          A working archive of things I've built — production shipping, research
          artifacts, and the occasional weekend project. Filter by stack, or
          open a case study for the longer story.
        </p>
      </div>

      <WorkArchive projects={projects} caseStudySlugs={caseStudySlugs} />
    </div>
  );
}
