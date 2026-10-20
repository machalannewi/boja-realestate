"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { House, KeyRound } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { marqueeOffers } from "@/lib/site";

export function IconPair({ dark = true }: { dark?: boolean }) {
  const cls = dark ? "bg-charcoal text-white" : "bg-mist text-ink";
  return (
    <div className="flex gap-1.5">
      <a href="#properties" aria-label="Buy a home" className={`grid size-8 place-items-center rounded-full ${cls}`}>
        <House className="size-3.5" strokeWidth={1.6} />
      </a>
      <a href="#properties" aria-label="Rent a home" className={`grid size-8 place-items-center rounded-full ${cls}`}>
        <KeyRound className="size-3.5" strokeWidth={1.6} />
      </a>
    </div>
  );
}

/** Lagos skyline that grows from an inset card to full-bleed as you scroll, with a running offer ticker. */
export function Skyline() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });

  // Phases: grow from an inset card to full-bleed → hold → settle back to the portfolio's padded width as the page turns dark.
  const grow = useTransform(scrollYProgress, [0.12, 0.5], [56, 100]);
  const growH = useTransform(scrollYProgress, [0.12, 0.5], [62, 100]);
  const inset = useTransform(scrollYProgress, [0.62, 0.88], [0, 1]);
  const width = useMotionTemplate`max(calc(${grow}% - ${inset} * var(--pad) * 2), var(--minw))`;
  const height = useMotionTemplate`calc(${growH}% - ${inset} * var(--pad) * 2)`;
  const radius = useTransform(scrollYProgress, [0.12, 0.47, 0.5, 0.62, 0.7], [22, 22, 0, 0, 22]);
  const imgScale = useTransform(scrollYProgress, [0.12, 0.5], [1.25, 1]);
  const bg = useTransform(scrollYProgress, [0.62, 0.88], ["#f7f4f0", "#1f1e21"]);

  const line = [...marqueeOffers, ...marqueeOffers];

  return (
    <motion.section ref={ref} style={{ backgroundColor: bg }} className="relative h-[210vh] [--minw:calc(100%-32px)] [--pad:16px] md:[--minw:0px] md:[--pad:24px]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        <motion.div style={{ width, height, borderRadius: radius }} className="relative overflow-hidden">
          <motion.div style={{ scale: imgScale }} className="absolute inset-0">
            <Image src="/images/banner-lagos.jpg" alt="Aerial view of Victoria Island and the Lagos lagoon" fill sizes="100vw" className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />

          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden">
            <div className="flex w-max animate-marquee items-center whitespace-nowrap">
              {[0, 1].map((k) => (
                <div key={k} className="flex items-center" aria-hidden={k === 1}>
                  {line.map((t, i) => (
                    <span key={i} className="flex items-center text-[28px] font-semibold tracking-[-0.02em] text-white md:text-[44px]">
                      <span className="px-6 md:px-8">{t}</span>
                      <span className="size-3 rounded-full bg-white md:size-4" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="absolute left-1/2 top-[10%] z-10 -translate-x-1/2">
          <IconPair />
        </div>
      </div>
    </motion.section>
  );
}
