"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { Project, ProjectCategory } from "@/lib/projects";
import { categories } from "@/lib/projects";
import { WorkFilter } from "./WorkFilter";
import { WorkCard } from "./WorkCard";

interface WorkArchiveProps {
  projects: Project[];
  caseStudySlugs: string[];
}

export function WorkArchive({ projects, caseStudySlugs }: WorkArchiveProps) {
  const [active, setActive] = useState<ProjectCategory | "All">("All");
  const slugSet = useMemo(() => new Set(caseStudySlugs), [caseStudySlugs]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    for (const p of projects) c[p.category] = (c[p.category] ?? 0) + 1;
    return c;
  }, [projects]);

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [projects, active],
  );

  return (
    <>
      <div className="mb-12">
        <WorkFilter
          categories={categories}
          active={active}
          onChange={setActive}
          counts={counts}
        />
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, idx) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <WorkCard
                project={p}
                index={idx}
                hasCaseStudy={slugSet.has(p.slug)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
