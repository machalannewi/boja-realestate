"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MapPin, Paintbrush, Sofa } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { InstagramIcon, TiktokIcon, YoutubeIcon } from "./brand";
import { ease, Lines } from "./motion";
import { mapPins, portfolio, site, type Listing } from "@/lib/site";

const tabs = Object.keys(portfolio);

function ArrowBadge() {
  return (
    <span className="grid size-9 place-items-center rounded-full bg-white text-ink transition-transform duration-500 group-hover:rotate-45">
      <ArrowUpRight className="size-4" strokeWidth={1.6} />
    </span>
  );
}

function Chip({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 rounded-xl bg-white/90 px-2 py-1.5 backdrop-blur">
      <span className="text-[8.5px] leading-tight text-ink/50">{label}</span>
      <span className="truncate text-[12px] font-medium text-ink">{children}</span>
    </div>
  );
}

function ListingCard({ item, index }: { item: Listing; index: number }) {
  return (
    <motion.a
      href="#contact"
      className="group relative block aspect-[0.93] overflow-hidden rounded-[22px] bg-charcoal-2"
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: (index % 2) * 0.1, ease }}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(min-width: 768px) 46vw, 100vw"
        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 transition-opacity duration-500 group-hover:opacity-60" />

      <div className="absolute right-4 top-4">
        <ArrowBadge />
      </div>

      {/* Title: bottom-left at rest, moves to the top-left on hover */}
      <h3 className="absolute bottom-6 left-6 max-w-[70%] text-[15px] font-semibold text-white transition-all duration-500 ease-out group-hover:bottom-[calc(100%-4.5rem)] group-hover:max-w-[45%] group-hover:text-[15px] md:text-[16px]">
        {item.title}
      </h3>

      {/* Details revealed on hover */}
      <div className="absolute inset-x-4 bottom-4 flex translate-y-4 flex-col items-end gap-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
        <span className="flex items-center gap-1.5 rounded-xl bg-white/80 px-3 py-2.5 text-[12px] text-ink backdrop-blur">
          <MapPin className="size-4" strokeWidth={1.5} />
          {item.location}
        </span>
        <div className="flex w-full gap-1.5">
          <Chip label="Price">{item.price}</Chip>
          <Chip label="Installment Plan">{item.plan}</Chip>
          <Chip label="Initial Payment">{item.initial}</Chip>
          <Chip label="Upgraded Features">
            <span className="flex gap-1.5">
              <Paintbrush className="size-3.5" strokeWidth={1.6} />
              <Sofa className="size-3.5" strokeWidth={1.6} />
            </span>
          </Chip>
          <Chip label="Completion Date">{item.completion}</Chip>
        </div>
      </div>
    </motion.a>
  );
}

function MapCard() {
  return (
    <motion.a
      id="map"
      href="#contact"
      className="group relative block aspect-[0.93] overflow-hidden rounded-[22px] bg-[#e9e9ea]"
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: 0.1, ease }}
    >
      <Image src="/images/map-lagos.jpg" alt="Map of BOJA properties across Lagos" fill sizes="(min-width: 768px) 46vw, 100vw" className="object-cover" />
      {mapPins.map(([x, y], i) => (
        <motion.span
          key={i}
          className="absolute -translate-x-1/2 -translate-y-full text-charcoal"
          style={{ left: `${x}%`, top: `${y}%` }}
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 + i * 0.06, ease }}
        >
          <svg viewBox="0 0 24 32" className="size-6 drop-shadow transition-transform group-hover:scale-110 md:size-7" aria-hidden>
            <path d="M12 0C5.4 0 0 5.2 0 11.7 0 20.4 12 32 12 32s12-11.6 12-20.3C24 5.2 18.6 0 12 0z" fill="currentColor" />
            <circle cx="12" cy="11.5" r="4.2" fill="white" />
          </svg>
        </motion.span>
      ))}
      <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2.5 text-[12px] text-ink shadow-sm">Find On The Map</span>
      <div className="absolute right-4 top-4">
        <ArrowBadge />
      </div>
      <span className="absolute bottom-2 right-3 text-[8px] text-ink/40">Esri, HERE, Garmin, © OpenStreetMap contributors</span>
    </motion.a>
  );
}

export function Portfolio() {
  const [tab, setTab] = useState(tabs[0]);

  return (
    <section id="properties" className="relative -mt-px bg-charcoal px-4 pb-10 pt-10 text-white md:px-6 md:pb-12 md:pt-14">
      <div className="mb-8 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
        <h2 className="text-[30px] leading-tight tracking-[-0.02em] md:text-[40px]">
          <Lines lines={["Explore Our Property Portfolio"]} />
        </h2>
        {/* Opens from the right: only "For Rent" shows at first, then the control grows leftwards to full width. */}
        <motion.div
          className="flex w-fit rounded-lg bg-charcoal-2 p-1 text-[12px] md:ml-auto"
          initial={{ clipPath: "inset(0% 0% 0% 68% round 8px)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0% round 8px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, delay: 0.35, ease }}
        >
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`relative rounded-md px-4 py-2 transition-colors ${tab === t ? "text-ink" : "text-white/80 hover:text-white"}`}
            >
              {tab === t && (
                <motion.span layoutId="portfolio-tab" className="absolute inset-0 rounded-md bg-white" transition={{ duration: 0.5, ease }} />
              )}
              <span className="relative">{t}</span>
            </button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          className="grid gap-5 md:grid-cols-2 md:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {portfolio[tab].map((item, i) => (
            <ListingCard key={item.title} item={item} index={i} />
          ))}
          <MapCard />
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 grid items-center gap-6 md:mt-16 md:grid-cols-3">
        <div className="hidden md:block" />
        <a
          href="#properties"
          className="mx-auto rounded-full bg-sky px-5 py-2.5 text-[13px] text-ink transition-colors hover:bg-white"
        >
          All Properties
        </a>
        <div className="flex items-center justify-center gap-5 md:justify-end">
          <p className="text-[12px] leading-snug text-white/85">
            Don&apos;t Miss Out on Hot Deals!
            <br />
            Follow Us on Social Media
          </p>
          <div className="flex gap-2">
            {[
              { href: site.youtube, label: "YouTube", Icon: YoutubeIcon },
              { href: site.instagram, label: "Instagram", Icon: InstagramIcon },
              { href: site.tiktok, label: "TikTok", Icon: TiktokIcon },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-9 place-items-center rounded-md bg-charcoal-2 text-white transition-colors hover:bg-white hover:text-ink"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
