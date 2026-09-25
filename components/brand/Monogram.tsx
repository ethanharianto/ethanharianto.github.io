import { cn } from "@/lib/cn";

interface MonogramProps {
  className?: string;
  size?: number;
}

export function Monogram({ className, size = 32 }: MonogramProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={cn(className)}
      role="img"
      aria-label="Ethan Harianto monogram"
    >
      <rect width="64" height="64" rx="14" fill="#0b0d0f" />
      <rect
        x="0.75"
        y="0.75"
        width="62.5"
        height="62.5"
        rx="13.25"
        fill="none"
        stroke="rgba(250,243,221,0.14)"
        strokeWidth="1"
      />
      <g fill="#faf3dd">
        <path d="M13 18h18v4h-14v6h12v4h-12v8h14v4h-18z" />
        <path d="M34 18h4v10h12v-10h4v26h-4v-12h-12v12h-4z" />
      </g>
      <rect x="50" y="40" width="6" height="10" fill="#00b4d8" />
    </svg>
  );
}
