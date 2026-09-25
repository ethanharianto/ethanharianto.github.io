"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { featuredProjects } from "@/lib/projects";
import { sections } from "@/lib/copy";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SelectedWork() {
  const items = featuredProjects();

  return (
    <section id="work" className="py-28 md:py-40 relative">
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
            <WorkRow key={p.slug} project={p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface WorkRowProps {
  project: ReturnType<typeof featuredProjects>[number];
  index: number;
}

function WorkRow({ project, index }: WorkRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group relative block border-t border-[var(--color-hairline)] last:border-b py-8 md:py-12 transition-colors"
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
