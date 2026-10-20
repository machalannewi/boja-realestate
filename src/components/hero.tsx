"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlignJustify, Download, Heart, House, Map, Phone, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Logo } from "./brand";
import { ease, Lines } from "./motion";
import { heroStats, nav, site } from "@/lib/site";

/** Starts as just the call icon, then grows to the right to reveal "Contact Us Now" (on load, or when scrolled to). */
export function ContactPill({
  dark = true,
  className = "",
  onMount = false,
  delay = 0,
}: {
  dark?: boolean;
  className?: string;
  onMount?: boolean;
  delay?: number;
}) {
  const trigger = onMount ? { animate: "show" } : { whileInView: "show", viewport: { once: true, margin: "-40px" } };
  return (
    <motion.a
      href="#contact"
      initial="hidden"
      {...trigger}
      variants={{
        hidden: { width: 36, opacity: 0, scale: 0.6 },
        show: {
          width: "auto",
          opacity: 1,
          scale: 1,
          transition: {
            opacity: { duration: 0.3, delay },
            scale: { duration: 0.5, delay, ease },
            width: { duration: 0.9, delay: delay + 0.45, ease },
          },
        },
      }}
      className={`group inline-flex h-9 items-center gap-2.5 overflow-hidden whitespace-nowrap rounded-full py-1 pl-1 pr-4 text-[13px] ${
        dark ? "bg-charcoal text-white" : "bg-white/85 text-ink backdrop-blur"
      } ${className}`}
    >
      <span
        className={`grid size-7 shrink-0 place-items-center rounded-full ${
          dark ? "border-2 border-white/80 bg-white text-ink" : "border border-ink/10 bg-white text-ink"
        }`}
      >
        <Phone className="size-3.5 transition-transform group-hover:rotate-12" strokeWidth={1.6} />
      </span>
      <motion.span
        variants={{
          hidden: { opacity: 0, x: -8 },
          show: { opacity: 1, x: 0, transition: { duration: 0.5, delay: delay + 0.9, ease } },
        }}
      >
        Contact Us Now
      </motion.span>
    </motion.a>
  );
}

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="home" className="relative grid min-h-[100svh] bg-white p-2 md:grid-cols-2 md:p-2.5">
      {/* Left panel */}
      <motion.div
        className="relative flex min-h-[78svh] flex-col px-4 pb-4 pt-4 md:min-h-0 md:px-6 md:pt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex gap-2">
            <a
              href="#map"
              aria-label="View properties on the map"
              className="grid size-9 place-items-center rounded-lg bg-mist text-ink transition-colors hover:bg-ink hover:text-white"
            >
              <Map className="size-4" strokeWidth={1.5} />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="grid size-9 place-items-center rounded-lg bg-mist text-ink transition-colors hover:bg-ink hover:text-white"
            >
              <AlignJustify className="size-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
          <motion.p
            className="mb-4 text-[12px] text-ink/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
          >
            Building Your Dreams
          </motion.p>
          <h1 className="text-[34px] leading-[1.12] font-normal tracking-[-0.02em] sm:text-[44px] lg:text-[52px]">
            <Lines onMount delay={0.25} lines={["Real Estate in Nigeria:", "Ideal for Living and", "Investing"]} />
          </h1>
        </div>

        <div className="flex items-end justify-between">
          <ContactPill onMount delay={0.5} />
          <motion.a
            href="#properties"
            className="group flex items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease }}
          >
            <span className="text-right text-[11px] leading-tight text-ink/85">
              Explore All
              <br />
              Our Properties
            </span>
            <span className="relative size-12 overflow-hidden rounded-full ring-2 ring-white">
              <Image src="/images/explore-thumb.jpg" alt="" fill sizes="48px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <span className="absolute right-0.5 top-0.5 grid size-3.5 place-items-center rounded-full bg-white text-[8px]">↗</span>
            </span>
          </motion.a>
        </div>
      </motion.div>

      {/* Right image panel */}
      <motion.div
        className="relative min-h-[70svh] overflow-hidden rounded-[22px] md:min-h-0"
        initial={{ opacity: 0.4, filter: "saturate(0.2) brightness(1.5)" }}
        animate={{ opacity: 1, filter: "saturate(1) brightness(1)" }}
        transition={{ duration: 1.6, ease }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Lekki–Ikoyi Link Bridge, Lagos"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent" />

        <motion.div
          className="absolute inset-x-4 top-4 flex items-start gap-6 text-[11px] leading-snug text-white md:inset-x-5 md:top-5 md:gap-12"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease }}
        >
          {heroStats.map((s) => (
            <p key={s} className="max-w-[130px]">
              {s}
            </p>
          ))}
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              aria-label="Save to favourites"
              className="grid size-8 place-items-center rounded-lg border border-white/90 text-white transition-colors hover:bg-white hover:text-ink"
            >
              <Heart className="size-4" strokeWidth={1.5} />
            </button>
            <a href="#properties" aria-label="Properties" className="grid size-8 place-items-center rounded-lg bg-white text-ink">
              <House className="size-4" strokeWidth={1.5} />
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#contact"
          className="absolute bottom-4 right-4 flex items-center gap-5 rounded-2xl bg-white px-3.5 py-3 text-[11px] leading-tight text-ink shadow-sm transition-transform hover:-translate-y-0.5 md:bottom-5 md:right-5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
        >
          <span>
            catalog
            <br />
            download
          </span>
          <Download className="size-4 text-ink/70" strokeWidth={1.5} />
        </motion.a>
      </motion.div>

      {/* Full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-charcoal p-6 text-white md:p-10"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="flex items-center justify-between">
              <Logo light />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="grid size-10 place-items-center rounded-lg bg-white/10 transition-colors hover:bg-white hover:text-ink"
              >
                <X className="size-5" strokeWidth={1.5} />
              </button>
            </div>
            <nav className="my-auto flex flex-col gap-2">
              {[...nav, { label: "Contact", href: "#contact" }].map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="w-fit text-[44px] leading-tight tracking-tight text-white/90 transition-colors hover:text-gold-300 md:text-[72px]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 + i * 0.06, ease }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/60">
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
