"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * The reward curve.
 *
 * A RL reward curve is a staircase, not a smooth line — it steps when a
 * policy improves and sits flat while it doesn't. Smoothing it would be
 * the prettier and less honest drawing, so this doesn't.
 *
 * This is the one object on the site that's allowed to be bold, which is
 * why everything around it is deliberately quiet.
 *
 * Two behaviours:
 *   - `draw`  — animates the stroke on as it lays itself down. The single
 *               orchestrated moment in the page. Skipped entirely under
 *               prefers-reduced-motion, which renders it complete instead.
 *   - rail    — the same curve stood on end, tracking scroll, used as the
 *               left rail. Independent of `draw`.
 */

export interface CurveStop {
  /** x position, 0–1 across the plot width. */
  at: number;
  /** y position, 0–1 where 1 is the floor. */
  value: number;
  /** Optional tick label. */
  label?: string;
}

/**
 * Builds an SVG path that steps horizontally then vertically between
 * stops — a Manhattan path, which is what an eval curve actually looks
 * like between checkpoints.
 */
function stepPath(
  stops: CurveStop[],
  width: number,
  height: number,
): string {
  if (stops.length === 0) return "";

  const px = (v: number) => v * width;
  const py = (v: number) => height - v * height;

  let d = `M ${px(stops[0].at)} ${py(stops[0].value)}`;

  for (let i = 1; i < stops.length; i++) {
    const prev = stops[i - 1];
    const curr = stops[i];
    // Rise first, then run — so the plateau belongs to the checkpoint
    // that produced it, not the one after.
    d += ` L ${px(curr.at)} ${py(prev.value)}`;
    d += ` L ${px(curr.at)} ${py(curr.value)}`;
  }

  return d;
}

interface RewardCurveProps {
  stops: CurveStop[];
  /** Draw the stroke on mount. Off for the rail. */
  draw?: boolean;
  /** Seconds for the draw-on. */
  duration?: number;
  /** Delay before the draw starts, for sequencing. */
  delay?: number;
  className?: string;
  /** Render tick marks + labels beneath the plot. */
  ticks?: boolean;
  /** Accessible description. */
  label?: string;
}

export function RewardCurve({
  stops,
  draw = false,
  duration = 1.4,
  delay = 0,
  className,
  ticks = false,
  label = "Reward curve, rising in steps across the run",
}: RewardCurveProps) {
  const reduced = useReducedMotion();
  const pathRef = useRef<SVGPathElement>(null);
  const [ready, setReady] = useState(!draw);

  // Lay the stroke down by walking stroke-dashoffset from full length
  // to zero. Measuring in a layout effect avoids the one-frame flash
  // where the curve sits visible before the animation starts.
  useEffect(() => {
    if (!draw || reduced) {
      setReady(true);
      return;
    }
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const raf = requestAnimationFrame(() => {
      path.style.transition = `stroke-dashoffset ${duration}s var(--ease-out-expo) ${delay}s`;
      path.style.strokeDashoffset = "0";
    });

    const t = window.setTimeout(() => setReady(true), (delay + duration) * 1000);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
    };
  }, [draw, duration, delay, reduced]);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className}
      role="img"
      aria-label={label}
    >
      <path
        ref={pathRef}
        d={stepPath(stops, 100, 100)}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth={1.5}
        /* Non-scaling stroke: preserveAspectRatio="none" would otherwise
           stretch a 1.5px line into a smear at wide viewports. */
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
        strokeLinecap="round"
        style={
          ready ? undefined : { strokeDasharray: 0, strokeDashoffset: 0 }
        }
      />
    </svg>
  );
}

interface CurveRailProps {
  /** Ordered section ids. The curve has one step per section. */
  sections: { id: string; name: string }[];
  className?: string;
}

/**
 * The reward curve stood on end, as the left rail.
 *
 * Rises as you scroll, with the plateau for the current section lit in
 * the signal colour. It replaces a stack of numbered chips: the curve
 * says the same thing (where you are in the run) but encodes it as a
 * shape rather than an index.
 */
export function CurveRail({ sections, className }: CurveRailProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible.length > 0) {
          const idx = sections.findIndex(
            (s) => s.id === visible[0].target.id,
          );
          if (idx >= 0) setActive(idx);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  // Progress is what gives the rail its staircase: section i of n
  // reaches height (i + 1) / n, and only the active segment lights up.
  const stops: CurveStop[] = sections.map((_, i) => ({
    at: (i + 1) / sections.length,
    value: (i + 1) / sections.length,
  }));

  return (
    <nav aria-label="Sections" className={className}>
      <CurveRailPath stops={stops} active={active} />
      <ul className="mt-3 space-y-1">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              aria-current={i === active ? "true" : undefined}
              className="flex items-baseline gap-2 py-0.5 transition-colors"
              style={{
                color:
                  i === active ? "var(--color-ink)" : "var(--color-subtle)",
              }}
            >
              <span className="log-key tabular-nums w-4 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="text-[13px] leading-tight"
                style={{
                  opacity: i === active ? 1 : 0.55,
                }}
              >
                {s.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function CurveRailPath({
  stops,
  active,
}: {
  stops: CurveStop[];
  active: number;
}) {
  return (
    <svg
      viewBox="0 0 20 100"
      preserveAspectRatio="none"
      className="w-5 h-full"
      aria-hidden
    >
      {/* Full curve, dim — the shape of the whole run. */}
      <path
        d={stepPath(stops, 20, 100)}
        fill="none"
        stroke="var(--color-hairline-strong)"
        strokeWidth={1.5}
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
      />
      {/* Progress: only up to the active section. */}
      <path
        d={stepPath(stops.slice(0, active + 1), 20, 100)}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth={1.5}
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
        style={{ transition: "d 0.5s var(--ease-out-expo)" }}
      />
    </svg>
  );
}
