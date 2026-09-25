import { cn } from "@/lib/cn";
import type { CopySlot } from "@/lib/copy";

interface SectionHeaderProps {
  /**
   * Position in the run. Rendered as a step tick, not a badge:
   * the number sits under a hairline that runs to the label, the way
   * an eval readout reads.
   */
  index: string;
  label: string;
  /**
   * A slot, not a string. An unwritten title drops the <h2> entirely
   * rather than leaving an empty heading behind — the section reads as
   * "01 —— Selected work" above the work, which is the quieter layout
   * and the better default.
   */
  title?: CopySlot | null;
  description?: CopySlot | null;
  className?: string;
  align?: "start" | "between";
  action?: React.ReactNode;
}

const show = (slot?: CopySlot | null) =>
  !!slot && (!!slot.text || process.env.NODE_ENV === "development");

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
        "flex flex-col md:flex-row md:items-end gap-6 mb-14",
        align === "between" ? "md:justify-between" : "",
        className,
      )}
    >
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-7">
          <span className="log-val tabular-nums">{index}</span>
          <span
            aria-hidden
            className="h-px w-10 bg-[var(--color-hairline-strong)]"
          />
          <span className="log">{label}</span>
        </div>
        {show(title) ? (
          <h2 className="display text-[length:var(--text-display)] text-[var(--color-ink)]">
            {title!.text ?? (
              <span
                data-copy-slot="empty"
                title={title!.hint}
                className="text-[var(--color-subtle)] italic"
              >
                {title!.hint}
              </span>
            )}
          </h2>
        ) : null}
        {show(description) ? (
          <p className="mt-6 max-w-[62ch] text-[length:var(--text-body)] text-[var(--color-muted)]">
            {description!.text ?? (
              <span
                data-copy-slot="empty"
                title={description!.hint}
                className="italic"
              >
                {description!.hint}
              </span>
            )}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
