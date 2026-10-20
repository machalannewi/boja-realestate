"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Section-to-section transitions from the reference:
 * - `exit`: as the section's bottom scrolls up, it shrinks inwards with rounded bottom corners,
 *   revealing the next section's colour (`under`) around it.
 * - `enter`: the section rises in as an inset card with rounded top corners and grows to full width,
 *   with the previous section's colour (`above`) showing around it.
 */
export function Stack({
  children,
  under,
  above,
  exit = false,
  enter = false,
}: {
  children: React.ReactNode;
  under?: string;
  above?: string;
  exit?: boolean;
  enter?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: leaving } = useScroll({ target: ref, offset: ["end end", "end start"] });
  const { scrollYProgress: arriving } = useScroll({ target: ref, offset: ["start end", "start 15%"] });

  const exitScale = useTransform(leaving, [0, 0.7], [1, 0.93]);
  const exitRadius = useTransform(leaving, [0, 0.15], [0, 32]);
  const enterScale = useTransform(arriving, [0, 1], [0.93, 1]);
  const enterRadius = useTransform(arriving, [0.55, 1], [32, 0]);

  return (
    <div ref={ref} style={{ backgroundColor: above ?? under }}>
      <motion.div
        style={
          enter
            ? { scale: enterScale, borderTopLeftRadius: enterRadius, borderTopRightRadius: enterRadius, transformOrigin: "50% 0%", backgroundColor: under }
            : { backgroundColor: under }
        }
        className={enter ? "overflow-clip" : undefined}
      >
        <motion.div
          style={
            exit
              ? { scale: exitScale, borderBottomLeftRadius: exitRadius, borderBottomRightRadius: exitRadius, transformOrigin: "50% 100%" }
              : undefined
          }
          className={exit ? "overflow-clip" : undefined}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

/** Lifts a section's content up from below as the section scrolls in (the "introduced underneath" feel). */
export function Rise({ children, className, distance = 110 }: { children: React.ReactNode; className?: string; distance?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 25%"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.25, 1]);
  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  );
}
