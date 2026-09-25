import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/cn";

interface MetricProps {
  label: string;
  value: string;
  caption?: string;
}

function Metric({ label, value, caption }: MetricProps) {
  return (
    <div className="not-prose rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6 my-8">
      <p className="log">{label}</p>
      <p className="mt-3 display text-[clamp(28px,4vw,48px)] text-[var(--color-ink)]">
        {value}
      </p>
      {caption ? (
        <p className="mt-3 text-sm text-[var(--color-muted)]">{caption}</p>
      ) : null}
    </div>
  );
}

interface PullquoteProps {
  children: React.ReactNode;
  cite?: string;
}

function Pullquote({ children, cite }: PullquoteProps) {
  return (
    <figure className="not-prose my-12 border-l-2 border-[var(--color-accent)] pl-6">
      <blockquote className="text-[22px] md:text-[28px] leading-[1.2] tracking-[-0.015em] text-[var(--color-ink)]">
        {children}
      </blockquote>
      {cite ? (
        <figcaption className="mt-4 log">— {cite}</figcaption>
      ) : null}
    </figure>
  );
}

interface GalleryProps {
  images: { src: string; alt: string; caption?: string }[];
  columns?: 1 | 2 | 3;
}

function Gallery({ images, columns = 2 }: GalleryProps) {
  return (
    <div
      className={cn(
        "not-prose my-12 grid gap-4",
        columns === 1 && "grid-cols-1",
        columns === 2 && "grid-cols-1 md:grid-cols-2",
        columns === 3 && "grid-cols-1 md:grid-cols-3",
      )}
    >
      {images.map((img) => (
        <figure
          key={img.src}
          className="rounded-xl overflow-hidden border border-[var(--color-hairline)] bg-[var(--color-surface)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.src} alt={img.alt} className="w-full h-auto" />
          {img.caption ? (
            <figcaption className="p-3 log">{img.caption}</figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="not-prose log my-8 flex items-center gap-3">
      <span className="h-px w-6 bg-[var(--color-accent)]" />
      {children}
    </p>
  );
}

export const mdxComponents: MDXComponents = {
  Metric,
  Pullquote,
  Gallery,
  Kicker,
};
