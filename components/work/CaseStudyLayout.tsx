import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import type { CaseStudyFrontmatter } from "@/lib/content";
import { getProject } from "@/lib/projects";

interface CaseStudyLayoutProps {
  frontmatter: CaseStudyFrontmatter;
  slug: string;
  prev?: { slug: string; title: string } | null;
  next?: { slug: string; title: string } | null;
  children: React.ReactNode;
}

export function CaseStudyLayout({
  frontmatter,
  slug,
  prev,
  next,
  children,
}: CaseStudyLayoutProps) {
  const project = getProject(frontmatter.projectSlug ?? slug);

  return (
    <article>
      <header className="relative overflow-hidden pt-40 pb-20 border-b border-[var(--color-hairline)]">
        <div className="aurora" aria-hidden style={{ opacity: 0.35 }} />
        <div className="shell relative z-[3]">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 link-underline mono-label"
          >
            <ArrowLeft size={12} />
            All work
          </Link>
          <h1 className="display mt-10 text-[clamp(44px,9vw,136px)] text-[var(--color-ink)] max-w-[16ch]">
            {frontmatter.title}
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] md:text-[19px] leading-relaxed text-[var(--color-muted)]">
            {frontmatter.description}
          </p>

          <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[var(--color-hairline)] pt-10">
            <Meta label="Role" value={frontmatter.role} />
            <Meta label="Year" value={frontmatter.year} />
            <Meta
              label="Stack"
              value={frontmatter.stack.join(" · ")}
              className="md:col-span-2"
            />
          </dl>

          {frontmatter.metrics && frontmatter.metrics.length > 0 ? (
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {frontmatter.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6"
                >
                  <p className="mono-label">{m.label}</p>
                  <p className="mt-3 display text-[clamp(28px,4vw,52px)] text-[var(--color-ink)]">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      <div className="shell py-20 md:py-28">
        <div className="mx-auto prose-case">{children}</div>

        {project?.github || project?.demoUrl ? (
          <div className="mt-16 flex flex-wrap gap-3 justify-center">
            {project?.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Source
                <ArrowUpRight size={14} />
              </a>
            ) : null}
            {project?.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Live demo
                <ArrowUpRight size={14} />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>

      {(prev || next) && (
        <footer className="border-t border-[var(--color-hairline)]">
          <div className="shell grid md:grid-cols-2 gap-4 py-12">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group rounded-xl border border-[var(--color-hairline)] p-6 hover:border-[var(--color-hairline-strong)] transition-colors"
              >
                <p className="mono-label">Previous</p>
                <p className="mt-2 text-xl tracking-[-0.02em] group-hover:text-[var(--color-accent)] transition-colors">
                  ← {prev.title}
                </p>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group rounded-xl border border-[var(--color-hairline)] p-6 md:text-right hover:border-[var(--color-hairline-strong)] transition-colors"
              >
                <p className="mono-label">Next</p>
                <p className="mt-2 text-xl tracking-[-0.02em] group-hover:text-[var(--color-accent)] transition-colors">
                  {next.title} →
                </p>
              </Link>
            ) : null}
          </div>
        </footer>
      )}
    </article>
  );
}

function Meta({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <dt className="mono-label">{label}</dt>
      <dd className="mt-2 text-[15px] md:text-[17px] text-[var(--color-ink)]">
        {value}
      </dd>
    </div>
  );
}
