"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Lines } from "./motion";

/** "Build Your Future With Us": image grows from a centred card to the full width as it scrolls in. */
export function Cta() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const width = useTransform(scrollYProgress, [0.25, 1], ["56%", "100%"]);
  const imgScale = useTransform(scrollYProgress, [0.25, 1], [1.3, 1]);

  return (
    <section ref={ref} className="relative bg-white px-4 pb-6 pt-24 md:px-6 md:pb-8 md:pt-32">
      <motion.div style={{ width }} className="relative mx-auto aspect-[4/5] min-w-full overflow-hidden rounded-[22px] sm:aspect-[16/9] md:min-w-0 md:aspect-[1.85]">
        <motion.div style={{ scale: imgScale }} className="absolute inset-0">
          <Image src="/images/cta.jpg" alt="BOJA advisers meeting clients" fill sizes="100vw" className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/45 via-black/5 to-transparent" />
        <div className="absolute left-6 top-8 md:left-10 md:top-12">
          <h2 className="text-[34px] font-medium leading-[1.1] tracking-[-0.02em] text-white md:text-[52px]">
            <Lines lines={["Build Your Future", "With Us"]} />
          </h2>
          <a
            href="#contact"
            className="mt-5 inline-block rounded-full bg-white/90 px-4 py-2 text-[12px] text-ink backdrop-blur transition-colors hover:bg-white"
          >
            Start Your Journey
          </a>
        </div>
      </motion.div>
    </section>
  );
}
