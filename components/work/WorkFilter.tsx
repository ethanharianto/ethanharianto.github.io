"use client";

import { motion } from "framer-motion";

import type { ProjectCategory } from "@/lib/projects";
import { cn } from "@/lib/cn";

interface WorkFilterProps {
  categories: readonly (ProjectCategory | "All")[];
  active: ProjectCategory | "All";
  onChange: (value: ProjectCategory | "All") => void;
  counts?: Record<string, number>;
}

export function WorkFilter({
  categories,
  active,
  onChange,
  counts,
}: WorkFilterProps) {
  return (
    <div
      role="tablist"
      className="inline-flex items-center gap-1 p-1 rounded-full border border-[var(--color-hairline)] bg-[rgba(250,243,221,0.02)]"
    >
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cat)}
            className={cn(
              "relative px-4 py-1.5 rounded-full text-xs tracking-tight transition-colors",
              isActive
                ? "text-[var(--color-canvas)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-ink)]",
            )}
          >
            {isActive ? (
              <motion.span
                layoutId="work-filter-pill"
                className="absolute inset-0 rounded-full bg-[var(--color-ink)]"
                transition={{ type: "spring", bounce: 0.18, duration: 0.55 }}
              />
            ) : null}
            <span className="relative font-medium">
              {cat}
              {counts && counts[cat] != null ? (
                <span
                  className={cn(
                    "ml-1.5 font-mono text-[10px]",
                    isActive
                      ? "text-[var(--color-canvas)]/70"
                      : "text-[var(--color-subtle)]",
                  )}
                >
                  {counts[cat]}
                </span>
              ) : null}
            </span>
          </button>
        );
      })}
    </div>
  );
}
