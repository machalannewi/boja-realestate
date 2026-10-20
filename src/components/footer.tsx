"use client";

import { Mail, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Logo } from "./brand";
import { Reveal } from "./motion";
import { Rise } from "./stack";
import { nav, site } from "@/lib/site";

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer id="contact" className="bg-cream px-4 pb-10 pt-20 md:px-6 md:pt-24">
      <Rise>
        <div className="grid gap-12 md:grid-cols-3 md:gap-6">
          <Reveal>
            <Logo />
            <p className="mt-6 text-[12px] text-ink/80">{site.tagline}</p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-[12px] text-ink/70">Quick Navigation</p>
            <ul className="mt-6 flex flex-col gap-5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[13px] font-semibold text-ink transition-opacity hover:opacity-60"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex items-center gap-3">
              <span className="relative size-11 overflow-hidden rounded-full">
                <Image
                  src={site.founder.image}
                  alt={site.founder.name}
                  fill
                  sizes="44px"
                  className="object-cover grayscale"
                />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] text-ink/50">
                  {site.founder.role}
                </span>
                <span className="mt-0.5 block text-[13px] text-ink">
                  {site.founder.name}
                </span>
              </span>
            </div>
            <p className="mt-5 text-[17px] leading-snug text-ink">
              We are here to change
              <br />
              your future.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href={site.phoneHref}
                className="rounded-full bg-charcoal px-5 py-2.5 text-[12px] text-white transition-transform hover:-translate-y-0.5"
              >
                Contact Us
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email us"
                className="text-ink transition-opacity hover:opacity-60"
              >
                <Mail className="size-5" strokeWidth={1.6} />
              </a>
              <a
                href={site.telegram}
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="text-ink transition-opacity hover:opacity-60"
              >
                <Send className="size-5" strokeWidth={1.6} />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-3 md:items-end md:gap-6">
          <Reveal>
            <h3 className="text-[17px] text-ink">Subscribe to our news</h3>
            <p className="mt-3 max-w-[260px] text-[11px] leading-snug text-ink/60">
              Stay informed and never miss a beat: subscribe to our exclusive
              news and new-listing updates.
            </p>
            {subscribed ? (
              <p className="mt-8 text-[13px] text-ink">
                Thanks! You&apos;re on the list.
              </p>
            ) : (
              <form
                className="mt-6 max-w-[260px]"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full border-b border-ink/25 bg-transparent pb-2 text-[12px] outline-none placeholder:text-ink/60 focus:border-ink"
                />
                <button
                  type="submit"
                  className="mt-6 rounded-full bg-charcoal px-5 py-2.5 text-[12px] text-white transition-transform hover:-translate-y-0.5"
                >
                  Subscribe
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.08}>
            <a
              href="https://www.google.com/maps/dir//Abuja+905102,+Federal+Capital+Territory/@6.2014901,7.0390913,15z/data=!4m17!1m8!3m7!1s0x104c2f70bb1a815d:0x31a4062ce25e9827!2sAbuja+905102,+Federal+Capital+Territory!3b1!8m2!3d9.2493887!4d6.9333255!16s%2Fg%2F11nmcvrqzg!4m7!1m0!1m5!1m1!1s0x104c2f70bb1a815d:0x31a4062ce25e9827!2m2!1d6.9333255!2d9.2493887?entry=ttu&g_ep=EgoyMDI2MTAxNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="relative block h-[96px] w-[160px] overflow-hidden rounded-lg"
            >
              <Image
                src="/images/map-footer.jpg"
                alt="Map of BOJA's Lekki office"
                fill
                sizes="160px"
                className="object-cover"
              />
              <svg
                viewBox="0 0 24 32"
                className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-full text-charcoal"
                aria-hidden
              >
                <path
                  d="M12 0C5.4 0 0 5.2 0 11.7 0 20.4 12 32 12 32s12-11.6 12-20.3C24 5.2 18.6 0 12 0z"
                  fill="currentColor"
                />
                <circle cx="12" cy="11.5" r="4.2" fill="white" />
              </svg>
            </a>
            <address className="mt-3 text-[12px] not-italic leading-snug text-ink">
              {site.address.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </Reveal>

          <Reveal delay={0.16} className="text-[11px] text-ink/60">
            <p>
              Copyright {new Date().getFullYear()} © {site.full}
            </p>
            <div className="mt-3 flex gap-8 text-ink">
              <a href="#" className="hover:opacity-60">
                Terms Of Service
              </a>
              <a href="#" className="hover:opacity-60">
                Privacy Policy
              </a>
            </div>
          </Reveal>
        </div>
      </Rise>
    </footer>
  );
}
