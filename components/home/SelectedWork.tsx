"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/lib/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CursorPreview } from "@/components/ui/CursorPreview";
import { useSiteContent } from "@/components/providers/ContentProvider";

interface SelectedWorkProps {
  /** Slugs that have a published case study, i.e. a real `/work/[slug]`
   * page to link to. Featured projects without one (the tactile builds
   * that only have a data entry, not a write-up yet) fall back to an
   * external link or render unlinked instead of pointing at a 404. */
  caseStudySlugs?: string[];
}

export function SelectedWork({ caseStudySlugs = [] }: SelectedWorkProps) {
  const { projects, sections } = useSiteContent();
  const items = projects.filter((p) => p.featured);
  const caseStudySet = new Set(caseStudySlugs);
  const [hoveredMark, setHoveredMark] = useState<string | null>(null);

  return (
    <section id="work" className="py-28 md:py-40 relative">
      <CursorPreview activeMark={hoveredMark} />
      <div className="shell">
        <SectionHeader
          index="01"
          label={sections.work.label}
          title={sections.work.title}
          description={sections.work.description}
          action={
            <Link
              href="/work"
              className="inline-flex items-center gap-2 link-underline text-[var(--color-ink)]"
            >
              All work
              <ArrowUpRight size={14} />
            </Link>
          }
        />

        <div className="grid gap-6">
          {items.map((p, idx) => (
            <WorkRow
              key={p.slug}
              project={p}
              index={idx}
              hasCaseStudy={caseStudySet.has(p.slug)}
              onHover={setHoveredMark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface WorkRowProps {
  project: Project;
  index: number;
  hasCaseStudy: boolean;
  onHover: (mark: string | null) => void;
}

function WorkRow({ project, index, hasCaseStudy, onHover }: WorkRowProps) {
  // A case study wins when it exists; otherwise fall back to wherever the
  // project actually lives (repo or live demo) rather than a page that
  // isn't written yet. If neither exists, the row still shows and still
  // previews on hover — it just isn't a link.
  const href = hasCaseStudy
    ? `/work/${project.slug}`
    : project.demoUrl ?? project.github ?? null;
  const isExternal = !hasCaseStudy && !!href;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={href ?? "#"}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        aria-disabled={href ? undefined : true}
        onClick={href ? undefined : (e) => e.preventDefault()}
        className="group relative block border-t border-[var(--color-hairline)] last:border-b py-8 md:py-12 transition-colors"
        onMouseEnter={() => project.mark && onHover(project.mark)}
        onMouseLeave={() => onHover(null)}
      >
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-baseline">
          <span className="md:col-span-1 log-val tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="md:col-span-7">
            <h3 className="display text-[clamp(26px,4.2vw,48px)] text-[var(--color-ink)]">
              {project.title}
            </h3>
            <p className="mt-3 text-[var(--color-muted)] max-w-[56ch] text-[15px] md:text-[16px]">
              {project.description}
            </p>
          </div>
          <div className="md:col-span-3 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
          <div className="md:col-span-1 flex md:justify-end">
            {/* A step tick that lights on hover, rather than a circular
                arrow badge that fills with a colour. The old version
                was a cursor-tracked radial wash — the single loudest
                "this is a template" gesture on the page. */}
            <span
              aria-hidden
              className="mt-2 block h-px w-8 bg-[var(--color-hairline-strong)] transition-all duration-500 group-hover:w-12 group-hover:bg-[var(--color-accent)]"
            />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between log">
          <span>{project.category}</span>
          <span>
            {project.role ? `${project.role} · ` : ""}
            {project.year}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
