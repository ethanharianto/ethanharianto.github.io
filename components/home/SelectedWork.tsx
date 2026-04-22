"use client";

import Link from "next/link";
import { useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { featuredProjects } from "@/lib/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SelectedWork() {
  const items = featuredProjects();

  return (
    <section id="work" className="py-28 md:py-40 relative">
      <div className="shell">
        <SectionHeader
          index="01"
          label="Selected work"
          title="Things I've shipped end-to-end."
          description="A handful of builds that span product, systems, and the wedge between research and production."
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
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        ref={ref}
        href={`/work/${project.slug}`}
        onMouseMove={onMove}
        className="group relative block border-t border-[var(--color-hairline)] last:border-b py-8 md:py-12 overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx) var(--my), rgba(61,91,255,0.14), transparent 60%)",
          }}
        />
        <div className="relative grid md:grid-cols-12 gap-6 md:gap-8 items-baseline">
          <span className="md:col-span-1 mono-label">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="md:col-span-7">
            <h3 className="display text-[clamp(28px,5vw,56px)] tracking-[-0.04em] text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
              {project.title}
            </h3>
            <p className="mt-3 text-[var(--color-muted)] max-w-xl text-[15px] md:text-[16px]">
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
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[var(--color-hairline)] group-hover:border-[var(--color-ink)] group-hover:bg-[var(--color-ink)] group-hover:text-[var(--color-canvas)] transition-all">
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </div>
        <div className="relative mt-6 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-subtle)]">
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
