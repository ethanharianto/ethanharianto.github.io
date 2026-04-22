"use client";

import Link from "next/link";
import { useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

import type { Project } from "@/lib/projects";

interface WorkCardProps {
  project: Project;
  index: number;
  hasCaseStudy: boolean;
}

export function WorkCard({ project, index, hasCaseStudy }: WorkCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    hasCaseStudy ? (
      <Link href={`/work/${project.slug}`} className="absolute inset-0 z-[1]">
        <span className="sr-only">Read about {project.title}</span>
        {children}
      </Link>
    ) : null;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative isolate overflow-hidden rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6 md:p-8 hover:border-[var(--color-hairline-strong)] transition-colors"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(340px circle at var(--mx) var(--my), rgba(61,91,255,0.14), transparent 60%)",
        }}
      />
      <Wrapper>
        <></>
      </Wrapper>
      <div className="relative z-[2] flex items-start justify-between gap-4">
        <div>
          <span className="mono-label">
            {project.category} · {project.year ?? ""}
          </span>
          <h3 className="mt-4 text-2xl md:text-[28px] tracking-[-0.02em] group-hover:text-[var(--color-accent)] transition-colors">
            {project.title}
          </h3>
          {project.role ? (
            <p className="mt-1 text-[13px] text-[var(--color-subtle)] font-mono uppercase tracking-widest">
              {project.role}
            </p>
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="relative z-[3] w-9 h-9 inline-flex items-center justify-center rounded-full border border-[var(--color-hairline)] text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:border-[var(--color-ink)] transition-colors"
              aria-label={`${project.title} on GitHub`}
            >
              <FolderGit2 size={14} />
            </a>
          ) : null}
          {hasCaseStudy ? (
            <span
              aria-hidden
              className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-[var(--color-hairline)] text-[var(--color-muted)] group-hover:border-[var(--color-ink)] group-hover:bg-[var(--color-ink)] group-hover:text-[var(--color-canvas)] transition-all"
            >
              <ArrowUpRight size={14} />
            </span>
          ) : null}
        </div>
      </div>

      <p className="relative z-[2] mt-6 text-[15px] leading-relaxed text-[var(--color-muted)] max-w-prose">
        {project.description}
      </p>

      <div className="relative z-[2] mt-6 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
