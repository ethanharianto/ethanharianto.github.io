"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";

/**
 * Generative per-project marks.
 *
 * Not screenshots — there are no photos of any of this work here, real
 * or fabricated. Each mark is a small, honestly-abstract sketch drawn
 * from code, keyed off one true fact about the project (a bounding box,
 * a gait cycle, a waveform), so nothing on screen could be mistaken for
 * a claimed photo of the actual build.
 *
 * Rendered inside a fixed 200×140 box by CursorPreview. Every loop here
 * is gated by prefers-reduced-motion — reduced renders the same shape
 * held at one frame instead of animating it.
 */

const STROKE = "var(--color-hairline-strong)";
const INK = "var(--color-ink)";
const ACCENT = "var(--color-accent)";

interface MarkProps {
  id: string;
  className?: string;
}

export function Mark({ id, className }: MarkProps) {
  const reduced = useReducedMotion();

  return (
    <svg
      viewBox="0 0 200 140"
      className={className}
      style={{ width: "100%", height: "100%" }}
      aria-hidden
    >
      <rect
        x={0.5}
        y={0.5}
        width={199}
        height={139}
        fill="var(--color-surface)"
      />
      {id === "veridian" && <VeridianMark reduced={!!reduced} />}
      {id === "route-grader" && <RouteGraderMark reduced={!!reduced} />}
      {id === "slide-social" && <SlideSocialMark reduced={!!reduced} />}
      {id === "stanford-pupper" && <StanfordPupperMark reduced={!!reduced} />}
      {id === "digital-audio-fpga" && <FpgaMark reduced={!!reduced} />}
    </svg>
  );
}

const loop = (duration: number, extra?: Partial<Transition>): Transition => ({
  duration,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
  ...extra,
});

/** A few strokes + a highlight box — the shape of an annotated canvas. */
function VeridianMark({ reduced }: { reduced: boolean }) {
  return (
    <g>
      {[28, 46, 64].map((y, i) => (
        <line
          key={y}
          x1={26}
          y1={y}
          x2={26 + 70 - i * 14}
          y2={y}
          stroke={STROKE}
          strokeWidth={2}
          strokeLinecap="round"
        />
      ))}
      <rect
        x={112}
        y={64}
        width={54}
        height={36}
        rx={3}
        fill="none"
        stroke={ACCENT}
        strokeWidth={1.5}
      />
      <motion.circle
        cx={139}
        cy={82}
        r={3}
        fill={ACCENT}
        animate={reduced ? undefined : { opacity: [1, 0.35, 1] }}
        transition={reduced ? undefined : loop(1.8)}
      />
      <line x1={26} y1={92} x2={78} y2={92} stroke={STROKE} strokeWidth={2} strokeLinecap="round" />
      <line x1={26} y1={110} x2={58} y2={110} stroke={STROKE} strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}

/** Nodes on a grid with a couple of bounding boxes — a detection pass. */
function RouteGraderMark({ reduced }: { reduced: boolean }) {
  const dots = [
    [30, 30], [58, 24], [86, 40], [114, 22], [142, 34], [166, 24],
    [24, 66], [52, 78], [80, 60], [108, 82], [136, 66], [160, 84],
    [36, 108], [64, 100], [92, 116], [120, 104], [148, 112], [172, 100],
  ];
  return (
    <g>
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={1.6} fill={STROKE} />
      ))}
      <motion.rect
        x={44}
        y={14}
        width={40}
        height={30}
        rx={2}
        fill="none"
        stroke={ACCENT}
        strokeWidth={1.5}
        strokeDasharray="4 3"
        animate={reduced ? undefined : { opacity: [0.35, 1, 0.35] }}
        transition={reduced ? undefined : loop(2.2)}
      />
      <motion.rect
        x={96}
        y={70}
        width={52}
        height={38}
        rx={2}
        fill="none"
        stroke={ACCENT}
        strokeWidth={1.5}
        strokeDasharray="4 3"
        animate={reduced ? undefined : { opacity: [1, 0.35, 1] }}
        transition={reduced ? undefined : loop(2.2, { delay: 0.6 })}
      />
    </g>
  );
}

/** A stack of overlapping card outlines that reshuffle. */
function SlideSocialMark({ reduced }: { reduced: boolean }) {
  const cards = [
    { x: 58, y: 26, rest: 0, shuffle: -6 },
    { x: 66, y: 36, rest: 1, shuffle: 8 },
    { x: 74, y: 46, rest: 2, shuffle: -10 },
  ];
  return (
    <g>
      {cards.map((c, i) => (
        <motion.rect
          key={i}
          x={c.x}
          y={c.y}
          width={70}
          height={56}
          rx={7}
          fill="var(--color-surface-2)"
          stroke={i === 0 ? ACCENT : STROKE}
          strokeWidth={1.5}
          animate={reduced ? undefined : { x: [c.x, c.x + c.shuffle, c.x] }}
          transition={reduced ? undefined : loop(3.2, { delay: i * 0.25 })}
        />
      ))}
    </g>
  );
}

/** Four feet tracing a walking gait cycle around a body line. */
function StanfordPupperMark({ reduced }: { reduced: boolean }) {
  const cx = 100;
  const cy = 66;
  const feet = [
    { dx: -46, phase: 0 },
    { dx: -16, phase: 0.5 },
    { dx: 16, phase: 0.25 },
    { dx: 46, phase: 0.75 },
  ];
  return (
    <g>
      <line x1={cx - 46} y1={cy} x2={cx + 46} y2={cy} stroke={STROKE} strokeWidth={2} />
      {feet.map((f, i) => (
        <motion.circle
          key={i}
          cx={cx + f.dx}
          cy={cy}
          r={4}
          fill={i % 2 === 0 ? ACCENT : INK}
          animate={
            reduced
              ? undefined
              : {
                  cy: [cy, cy + 22, cy],
                }
          }
          transition={
            reduced
              ? undefined
              : loop(1.4, { delay: f.phase * 1.4, repeatType: "loop" })
          }
        />
      ))}
    </g>
  );
}

/** A waveform that plays forward, then visibly reverses. */
function FpgaMark({ reduced }: { reduced: boolean }) {
  const heights = [10, 22, 14, 34, 18, 40, 12, 28, 20, 36, 16, 24, 10, 30, 14];
  const barWidth = 8;
  const gap = 3.5;
  const startX = 20;

  return (
    <g>
      {heights.map((h, i) => (
        <motion.rect
          key={i}
          x={startX + i * (barWidth + gap)}
          width={barWidth}
          rx={1.5}
          fill={i % 4 === 0 ? ACCENT : STROKE}
          animate={
            reduced
              ? { y: 70 - h / 2, height: h }
              : { height: [h, h * 0.35, h], y: [70 - h / 2, 70 - (h * 0.35) / 2, 70 - h / 2] }
          }
          transition={reduced ? undefined : loop(1.6, { delay: i * 0.05 })}
        />
      ))}
      <line x1={16} y1={70} x2={184} y2={70} stroke={STROKE} strokeWidth={1} />
    </g>
  );
}
