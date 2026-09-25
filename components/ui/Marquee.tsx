import { cn } from "@/lib/cn";

interface MarqueeProps {
  items: string[];
  separator?: string;
  className?: string;
}

export function Marquee({
  items,
  separator = "·",
  className,
}: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-[var(--color-hairline)] py-4",
        className,
      )}
    >
      <div className="marquee font-mono text-[12px] tracking-[0.02em] text-[var(--color-subtle)]">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-14 shrink-0">
            {/* The second copy is decorative — hiding it keeps the
                strip from being announced twice by a screen reader. */}
            <span aria-hidden={i >= items.length}>{item}</span>
            <span aria-hidden className="text-[var(--color-hairline-strong)]">
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
