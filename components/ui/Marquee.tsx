import { cn } from "@/lib/cn";

interface MarqueeProps {
  items: string[];
  separator?: string;
  className?: string;
}

export function Marquee({
  items,
  separator = "•",
  className,
}: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-[var(--color-hairline)] py-5",
        className,
      )}
    >
      <div className="marquee font-mono text-[12px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-16 shrink-0">
            <span>{item}</span>
            <span aria-hidden className="text-[var(--color-subtle)]">
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
