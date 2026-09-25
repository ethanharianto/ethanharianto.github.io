"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { Mark } from "@/components/ui/marks/Mark";

/**
 * A fixed preview that trails the cursor and swaps to whichever work
 * row is hovered — the interaction is the point, not the imagery it
 * shows. Desktop/fine-pointer only; a no-op on touch, where rows just
 * work as plain links.
 */
export function CursorPreview({ activeMark }: { activeMark: string | null }) {
  const reduced = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);
  const lastX = useRef<number | null>(null);

  const posConfig = reduced
    ? { stiffness: 1000, damping: 100 }
    : { stiffness: 240, damping: 26 };
  const rotateConfig = { stiffness: 160, damping: 20 };

  const sx = useSpring(x, posConfig);
  const sy = useSpring(y, posConfig);
  const sRotate = useSpring(rotate, rotateConfig);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setFinePointer(mq.matches);
    const onChange = () => setFinePointer(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!finePointer) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!reduced && lastX.current !== null) {
        const dx = e.clientX - lastX.current;
        rotate.set(Math.max(-10, Math.min(10, dx * 0.7)));
      }
      lastX.current = e.clientX;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [finePointer, reduced, x, y, rotate]);

  if (!finePointer) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[140px] w-[200px] -translate-x-1/2 -translate-y-1/2"
      style={{ x: sx, y: sy, rotate: sRotate }}
      initial={false}
      animate={{
        opacity: activeMark ? 1 : 0,
        scale: activeMark ? 1 : 0.94,
      }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="h-full w-full overflow-hidden rounded-[10px] border"
        style={{
          borderColor: "var(--color-hairline-strong)",
          boxShadow: "0 24px 60px -24px rgba(0,0,0,0.5)",
        }}
      >
        <AnimatePresence mode="wait">
          {activeMark && (
            <motion.div
              key={activeMark}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-full w-full"
            >
              <Mark id={activeMark} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
