"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { LogoMark } from "./brand";
import { ease, Lines } from "./motion";
import { IconPair } from "./skyline";
import { propertyTypes } from "@/lib/site";

type Item = (typeof propertyTypes)[number][number];

// Each column starts at its own height and drifts at its own speed, like the reference.
const OFFSETS = ["md:pt-[128px]", "md:pt-0", "md:pt-[52px]", "md:pt-0", "md:pt-[128px]"];
const DRIFT = [-140, -40, -90, -40, -140];

function TypeCard({ item, i }: { item: Item; i: number }) {
  return (
    <motion.a
      href="#contact"
      className={`group relative block overflow-hidden rounded-2xl ${item.tall ? "aspect-[0.64]" : "aspect-[1]"}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, delay: i * 0.05, ease }}
    >
      <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 19vw, 50vw" className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-white/55 via-white/20 to-transparent backdrop-blur-[1px] [mask-image:linear-gradient(to_top,black_55%,transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/25 to-transparent" />
      <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white text-ink transition-transform duration-500 group-hover:rotate-45">
        <ArrowUpRight className="size-4" strokeWidth={1.6} />
      </span>
      <div className="absolute bottom-3 left-3 right-3 text-white md:bottom-4 md:left-4">
        <span className="text-[9px] opacity-90">{item.n}</span>
        <h3 className="mt-1 text-[15px] leading-tight md:text-[18px]">{item.title}</h3>
      </div>
    </motion.a>
  );
}

function CatalogBlock() {
  return (
    <div className="flex flex-col items-center px-2 pt-6 text-center">
      <LogoMark className="h-12 w-auto" />
      <p className="mt-5 text-[11px] leading-snug text-ink/80">
        Explore Our Diverse
        <br />
        Range of Property Types
        <br />
        and Find Your Perfect
        <br />
        Match
      </p>
      <a href="#contact" className="mt-4 flex items-center gap-2 rounded-full bg-charcoal py-1 pl-1 pr-4 text-[11px] text-white transition-transform hover:-translate-y-0.5">
        <span className="grid size-6 place-items-center rounded-full border-2 border-white/80 bg-white text-ink">
          <Download className="size-3" strokeWidth={1.8} />
        </span>
        Catalog Download
      </a>
    </div>
  );
}

function Column({ items, col, progress }: { items: Item[]; col: number; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], [0, DRIFT[col]]);
  return (
    <motion.div style={{ y }} className={`flex flex-col gap-2.5 md:gap-3 ${OFFSETS[col]}`}>
      {items.map((item, i) => (
        <TypeCard key={item.n} item={item} i={i} />
      ))}
      {col === 2 && <CatalogBlock />}
    </motion.div>
  );
}

export function PropertyTypes() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section className="bg-white px-4 pb-10 md:px-6">
      <div className="relative flex justify-center">
        <h2 className="text-center text-[32px] leading-[1.12] tracking-[-0.02em] md:text-[40px]">
          <Lines lines={["Discover Your Ideal", "Property Type"]} />
        </h2>
        <div className="absolute right-0 top-1 hidden md:block">
          <IconPair dark={false} />
        </div>
      </div>

      <div ref={ref} className="mt-14 grid grid-cols-2 gap-2.5 md:mt-16 md:grid-cols-5 md:gap-3">
        {propertyTypes.map((items, col) => (
          <Column key={col} items={items} col={col} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
