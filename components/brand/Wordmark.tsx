import { cn } from "@/lib/cn";

interface WordmarkProps {
  className?: string;
  withCaret?: boolean;
}

export function Wordmark({ className, withCaret = true }: WordmarkProps) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-[0.04em] font-medium tracking-[-0.04em] leading-none",
        className,
      )}
      aria-label="Ethan Harianto"
    >
      <span>eh</span>
      <span className="text-[var(--color-accent)]">.</span>
      {withCaret ? (
        <span aria-hidden className="caret" style={{ height: "0.8em" }} />
      ) : null}
    </span>
  );
}
