// BOJA logo and the social icons lucide no longer ships.

import Image from "next/image";

type IconProps = { className?: string };

/** BOJA's own logo (orange-to-pink wordmark with the house roof over the "A"). */
export function Logo({ className = "h-11 w-auto", href = "#home" }: IconProps & { href?: string }) {
  return (
    <a href={href} className="inline-flex" aria-label="BOJA Real Estate home">
      <Image src="/images/boja-logo.png" alt="BOJA" width={393} height={272} priority className={className} />
    </a>
  );
}

export function YoutubeIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="2.5" y="5" width="19" height="14" rx="4" />
      <path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function InstagramIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TiktokIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M16.6 3c.3 2.3 1.7 3.9 4 4.1v3.1c-1.5.1-2.8-.4-4-1.2v6.2c0 4-3.4 6.5-7 5.6-4.4-1.1-5.5-7-1.5-9.4 1-.6 2.3-.9 3.6-.8v3.2c-.4-.1-.8-.2-1.2-.1-1.6.2-2.6 1.7-2 3.3.6 1.4 2.4 1.9 3.6 1 .7-.5 1-1.3 1-2.2V3h3.5z" />
    </svg>
  );
}
