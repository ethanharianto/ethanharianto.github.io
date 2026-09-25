import { cn } from "@/lib/cn";
import type { CopySlot } from "@/lib/copy";

/**
 * Renders a copy slot.
 *
 * The point: an unwritten slot should look unwritten. In development it
 * shows the hint, so a gap is visible on the page and greppable in
 * `@/lib/copy`; in production it renders nothing at all, because an
 * empty paragraph that reserves 1.7em of leading is a hole in the
 * layout that nobody notices until something lands above it.
 */
export function Slot({
  slot,
  className,
  as: Tag = "p",
}: {
  slot: CopySlot;
  className?: string;
  as?: "p" | "div" | "span";
}) {
  if (slot.text) {
    return <Tag className={className}>{slot.text}</Tag>;
  }

  if (process.env.NODE_ENV !== "development") return null;

  return (
    <Tag
      data-copy-slot="empty"
      title={slot.hint}
      className={cn(
        className,
        "border-l-2 border-dashed border-[var(--color-hairline-strong)] pl-4",
        "text-[var(--color-subtle)] italic",
      )}
    >
      {slot.hint}
    </Tag>
  );
}
