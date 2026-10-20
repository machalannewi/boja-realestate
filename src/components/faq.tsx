"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { ease, Eyebrow, Lines, Reveal } from "./motion";
import { faqs, partners } from "@/lib/site";

// Placeholder wordmarks, each with its own type treatment like real developer logos.
const partnerStyles = [
  "font-sans text-[20px] font-black italic tracking-[-0.04em]",
  "font-logo text-[22px] tracking-[0.06em]",
  "font-sans text-[19px] font-semibold tracking-[0.35em]",
  "font-logo text-[20px] font-semibold tracking-[0.18em]",
  "font-sans text-[18px] font-medium tracking-[0.08em]",
];

export function Partners() {
  const row = [...partners, ...partners, ...partners, ...partners];
  return (
    <section className="relative z-[1] bg-cream pt-6">
      <p className="text-center text-[13px] text-ink/80">Our valued partners</p>
      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee-slow items-center">
          {row.map((p, i) => (
            <span
              key={i}
              aria-hidden={i >= partners.length}
              className={`px-12 text-ink/85 md:px-16 ${partnerStyles[i % partnerStyles.length]}`}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-cream px-4 pb-20 pt-16 md:px-6 md:pb-24">
      <div className="grid gap-10 md:grid-cols-2 md:gap-6">
        <div>
          <Reveal>
            <Eyebrow>Got Questions?</Eyebrow>
          </Reveal>
          <h2 className="mt-5 text-[34px] leading-[1.12] tracking-[-0.02em] md:text-[44px]">
            <Lines lines={["Frequently Asked", "Questions"]} />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[290px] text-[12px] leading-relaxed text-ink/55">
              At BOJA, we offer more than just real estate services: we provide an unparalleled experience tailored to meet your
              needs and exceed your expectations.
            </p>
          </Reveal>
        </div>

        <Reveal className="rounded-[22px] bg-white px-4 py-2 md:px-5">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-ink/10 last:mb-4">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-[13px] text-ink md:text-[14px]"
              >
                {f.q}
                <Plus className={`size-4 shrink-0 text-ink/70 transition-transform duration-500 ${open === i ? "rotate-45" : ""}`} strokeWidth={1.4} />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 pr-10 text-[12.5px] leading-relaxed text-ink/60">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
