"use client";

import { motion } from "framer-motion";
import { CircleHelp } from "lucide-react";
import Image from "next/image";
import { ContactPill } from "./hero";
import { Counter, ease, Reveal } from "./motion";
import { Rise } from "./stack";
import { stats, team } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="relative bg-white px-4 pb-6 pt-14 md:px-6 md:pb-8 md:pt-16">
      <Rise className="grid gap-10 md:grid-cols-2 md:gap-6">
        <div className="flex flex-col">
          <Reveal>
            <p className="max-w-[300px] text-[12px] leading-relaxed text-ink/60">
              At BOJA Real Estate, we offer more than property listings: we provide an end-to-end experience, from verified
              titles to handover, tailored to meet your needs and exceed your expectations.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {team.map((src, i) => (
                <span key={src} className="relative size-11 overflow-hidden rounded-full ring-2 ring-white" style={{ zIndex: team.length - i }}>
                  <Image src={src} alt="BOJA team member" fill sizes="44px" className="object-cover grayscale" />
                </span>
              ))}
            </div>
            <a href="#contact" className="text-[12px] leading-snug text-ink/70 hover:text-ink">
              Meet Our
              <br />
              Professional Team
            </a>
          </Reveal>

          <div className="mt-16 md:mt-auto">
            {stats.map((s, i) => (
              <Reveal
                key={s.label[1]}
                delay={i * 0.08}
                className={`grid grid-cols-[1fr_1.4fr] items-center py-7 md:py-8 ${i < stats.length - 1 ? "border-b border-ink/10" : ""}`}
              >
                <span className="text-[52px] font-light leading-none tracking-[-0.03em] md:text-[64px]">
                  <Counter to={s.value} suffix={s.suffix} />
                </span>
                <span className="text-[15px] leading-snug text-ink/85">
                  {s.label[0]}
                  <br />
                  {s.label[1]}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        <motion.div
          className="relative min-h-[560px] overflow-hidden rounded-[22px] md:min-h-[760px]"
          initial={{ clipPath: "inset(18% 8% 0% 8% round 22px)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0% round 22px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.3, ease }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease }}
          >
            <Image src="/images/about.jpg" alt="Eko Atlantic skyline across the water at dusk" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <ContactPill dark={false} className="absolute right-5 top-5" />

          <p className="absolute bottom-6 left-5 text-[12px] font-semibold text-white">Building Your Dreams</p>

          <div className="absolute bottom-5 right-5 flex flex-col items-end gap-3">
            <button type="button" aria-label="Help" className="grid size-8 place-items-center rounded-full bg-white/20 text-white ring-1 ring-white/60 backdrop-blur">
              <CircleHelp className="size-4" strokeWidth={1.5} />
            </button>
            <a href="#contact" className="flex items-center gap-3 rounded-2xl bg-white py-2.5 pl-2.5 pr-6 shadow-lg transition-transform hover:-translate-y-0.5">
              <span className="relative size-11 shrink-0">
                <span className="relative block size-11 overflow-hidden rounded-full">
                  <Image src="/images/expert.jpg" alt="" fill sizes="44px" className="object-cover grayscale" />
                </span>
                <span className="absolute -right-0.5 -top-0.5 size-3 rounded-full border-2 border-white bg-charcoal" />
              </span>
              <span className="leading-tight">
                <span className="block text-[9px] text-ink/50">Special Offer</span>
                <span className="mt-0.5 block text-[12px] text-ink">
                  Get A Free Consultation
                  <br />
                  With Our Expert
                </span>
              </span>
            </a>
          </div>
        </motion.div>
      </Rise>
    </section>
  );
}
