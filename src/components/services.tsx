"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ease, Eyebrow, Lines } from "./motion";
import { Rise } from "./stack";
import { services, tickerChips } from "@/lib/site";

function ServicePill({ item, index, open, onToggle }: { item: (typeof services)[number]; index: number; open: boolean; onToggle: () => void }) {
  return (
    <motion.div
      className="ml-auto overflow-hidden bg-white text-ink"
      style={{ borderRadius: open ? 28 : 999 }}
      initial={{ width: 68, opacity: 0.4 }}
      whileInView={{ width: "100%", opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay: 0.15 + index * 0.12, ease }}
    >
      <button type="button" onClick={onToggle} aria-expanded={open} className="flex h-[68px] w-full items-center gap-4 pl-1.5 pr-6 text-left">
        <span className="relative size-14 shrink-0 overflow-hidden rounded-full">
          <Image src={item.image} alt="" fill sizes="56px" className="object-cover" />
        </span>
        <span className="flex-1 whitespace-nowrap pl-3 text-[15px] md:pl-6 md:text-[16px]">
          {item.title}
          <sup className="ml-1 text-[9px]">0{index + 1}</sup>
        </span>
        <ArrowDown className={`size-5 shrink-0 transition-transform duration-500 ${open ? "rotate-180" : ""}`} strokeWidth={1.4} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="px-6 pb-6 text-[13px] leading-relaxed text-ink/65 md:pl-[92px]">{item.text}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Services() {
  const [open, setOpen] = useState<number | null>(null);
  const chips = [...tickerChips, ...tickerChips];

  return (
    <section id="services" className="relative bg-charcoal pt-20 text-white md:pt-24">
      <Rise className="grid gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="md:sticky md:top-24 md:self-start">
          <h2 className="text-[32px] leading-[1.15] tracking-[-0.02em] md:text-[40px]">
            <Lines lines={["Tailored Solutions", "for Your Real Estate", "Needs"]} />
          </h2>
          <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-[11px] text-white/70 transition-colors hover:text-white">
            <Eyebrow light>Explore More</Eyebrow>
            <ArrowRight className="size-3" strokeWidth={1.6} />
          </a>
        </div>
        <div className="flex flex-col gap-4">
          {services.map((s, i) => (
            <ServicePill key={s.title} item={s} index={i} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
          ))}
        </div>
      </Rise>

      <div className="mt-24 overflow-hidden pb-24 md:mt-28 md:pb-28">
        <div className="flex w-max animate-marquee-slow gap-5">
          {chips.map((c, i) => (
            <span
              key={i}
              aria-hidden={i >= tickerChips.length}
              className="whitespace-nowrap rounded-full bg-charcoal-2 px-8 py-3 text-[40px] uppercase leading-none tracking-[-0.01em] text-[#4a494e] md:text-[56px]"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
