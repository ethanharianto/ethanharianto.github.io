import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  eyebrow?: string;
  description?: string;
  className?: string;
  align?: "start" | "between";
  action?: React.ReactNode;
}

export function SectionHeader({
  index,
  label,
  title,
  description,
  className,
  align = "between",
  action,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end gap-6 mb-16",
        align === "between" ? "md:justify-between" : "",
        className,
      )}
    >
      <div className="max-w-2xl">
        <div className="flex items-center gap-4 mono-label mb-6">
          <span className="text-[var(--color-accent)]">{index}</span>
          <span className="h-px flex-1 bg-[var(--color-hairline)] max-w-16" />
          <span>{label}</span>
        </div>
        <h2 className="display text-[clamp(40px,6vw,88px)] text-[var(--color-ink)]">
          {title}
        </h2>
        {description ? (
          <p className="mt-6 max-w-xl text-[var(--color-muted)] text-[17px] leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
