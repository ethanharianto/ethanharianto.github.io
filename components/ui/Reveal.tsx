"use client";

import { motion, type Transition } from "framer-motion";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "span" | "li";
}

const transition: Transition = {
  duration: 0.9,
  ease: [0.16, 1, 0.3, 1],
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ ...transition, delay }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
