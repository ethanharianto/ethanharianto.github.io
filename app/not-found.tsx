import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="shell min-h-[70vh] flex flex-col justify-center py-32">
      <p className="log mb-5 text-[var(--color-accent)]">404</p>
      <h1 className="display text-[clamp(48px,9vw,128px)] text-[var(--color-ink)] max-w-[12ch]">
        Nothing here.
      </h1>
      <p className="mt-6 max-w-xl text-[17px] text-[var(--color-muted)]">
        The page you're looking for doesn't exist — or got moved in the rebrand.
        Try one of these instead.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">
          Home
          <ArrowUpRight size={14} />
        </Link>
        <Link href="/work" className="btn">
          Work
          <ArrowUpRight size={14} />
        </Link>
        <Link href="/writing" className="btn">
          Writing
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
}
