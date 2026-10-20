"use client";

import { animate, motion, useInView, useMotionValue, useTransform, type HTMLMotionProps } from "framer-motion";
import { useEffect, useRef } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

/** Fades and lifts its children into view once, when scrolled to. */
export function Reveal({
  delay = 0,
  y = 32,
  className,
  children,
  ...rest
}: HTMLMotionProps<"div"> & { delay?: number; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Slides each line of a heading up from behind a mask, the way the reference headings enter. */
export function Lines({
  lines,
  className,
  delay = 0,
  onMount = false,
}: {
  lines: string[];
  className?: string;
  delay?: number;
  onMount?: boolean;
}) {
  // Observe the wrapper, not the lines: each line starts clipped by its mask, so it never "intersects" by itself.
  const trigger = onMount ? { animate: "show" } : { whileInView: "show", viewport: { once: true, margin: "-40px" } };
  return (
    <motion.span className={`block ${className ?? ""}`} initial="hidden" {...trigger}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            variants={{
              hidden: { y: "110%" },
              show: { y: "0%", transition: { duration: 1, delay: delay + i * 0.1, ease } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Counts up to `to` when it scrolls into view. */
export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const value = useMotionValue(Math.round(to * 0.2));
  const text = useTransform(value, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration: 2, ease });
    return () => controls.stop();
  }, [inView, to, value]);

  return <motion.span ref={ref}>{text}</motion.span>;
}

/** Small "● Label" eyebrow used above section headings. */
export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-[12px] ${light ? "text-white/70" : "text-ink/80"}`}>
      <span className={`size-2 rounded-full ${light ? "bg-white" : "bg-ink"}`} />
      {children}
    </span>
  );
}
