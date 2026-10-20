"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Download } from "lucide-react";
import { useRef } from "react";
import { Lines } from "./motion";
import { ownershipSteps } from "@/lib/site";

// Circle offsets (as multiples of the diameter) for each stage: row → Venn triangle → merged.
const ROW = [[-0.78, 0], [0, -0.04], [0.78, 0]];
const VENN = [[-0.28, 0.2], [0, -0.24], [0.28, 0.2]];
const MERGED = [[-0.03, 0.02], [0, -0.03], [0.03, 0.01]];
const STOPS = [0, 0.3, 0.45, 0.62, 0.78];

function Circle({ i, progress, label }: { i: number; progress: MotionValue<number>; label: string }) {
  const x = useTransform(progress, STOPS, [ROW[i][0], ROW[i][0], VENN[i][0], VENN[i][0], MERGED[i][0]].map((v) => `${v * 100}%`));
  const y = useTransform(progress, STOPS, [ROW[i][1], ROW[i][1], VENN[i][1], VENN[i][1], MERGED[i][1]].map((v) => `${v * 100}%`));
  const scale = useTransform(progress, STOPS, [1, 1, 0.84, 0.84, 0.84]);
  const labelOpacity = useTransform(progress, [0, 0.28, 0.36], [1, 1, 0]);

  return (
    <motion.div style={{ x, y, scale }} className="absolute inset-0 rounded-full border border-white/45">
      <motion.span
        style={{ opacity: labelOpacity }}
        className="absolute inset-0 grid place-items-center whitespace-pre-line px-8 text-center text-[11px] leading-snug text-white/90 md:text-[12px]"
      >
        {label}
      </motion.span>
    </motion.div>
  );
}

export function Ownership() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const centerOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const pillOpacity = useTransform(scrollYProgress, [0.7, 0.78], [0, 1]);
  const pillWidth = useTransform(scrollYProgress, [0.78, 0.9], [26, 128]);
  const pillTextOpacity = useTransform(scrollYProgress, [0.86, 0.92], [0, 1]);
  const rise = useTransform(scrollYProgress, [0, 0.15], ["8%", "0%"]);

  return (
    <section ref={ref} className="relative h-[320vh] bg-charcoal">
      <div className="sticky top-0 h-screen">
        <div className="relative flex h-full flex-col items-center overflow-hidden bg-charcoal text-white">
          <h2 className="mt-[12vh] text-center text-[30px] tracking-[-0.02em] md:text-[40px]">
            <Lines lines={["Path to Smart Ownership"]} />
          </h2>

          <motion.div style={{ y: rise }} className="relative mt-[5vh] aspect-square w-[34vw] max-w-[260px] md:w-[26vw] md:max-w-[400px]">
            {ownershipSteps.map((label, i) => (
              <Circle key={label} i={i} progress={scrollYProgress} label={label} />
            ))}
            <motion.span
              style={{ opacity: centerOpacity }}
              className="absolute inset-0 grid place-items-center text-center text-[11px] leading-snug text-white/90 md:text-[12px]"
            >
              Smart
              <br />
              Ownership
            </motion.span>
          </motion.div>

          <motion.a
            href="#contact"
            style={{ opacity: pillOpacity, width: pillWidth }}
            className="mt-[7vh] flex h-[26px] items-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-charcoal-2 pl-[3px] pr-3 text-[10px] text-white/85"
          >
            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-white text-ink">
              <Download className="size-3" strokeWidth={1.8} />
            </span>
            <motion.span style={{ opacity: pillTextOpacity }}>Catalog Download</motion.span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
