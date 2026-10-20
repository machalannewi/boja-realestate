// BOJA logo mark and the social icons lucide no longer ships.

type IconProps = { className?: string };

/** Gold skyline mark: a cluster of slim towers rising to a peak. */
export function LogoMark({ className = "h-8 w-auto" }: IconProps) {
  const bars = [
    [0, 22], [3, 30], [6, 38], [9, 46], [12, 56], [15, 46], [18, 36], [21, 28], [24, 20],
  ];
  return (
    <svg viewBox="0 0 27 56" className={className} aria-hidden>
      <defs>
        <linearGradient id="boja-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e8d3a2" />
          <stop offset="0.55" stopColor="#b8975a" />
          <stop offset="1" stopColor="#7d6233" />
        </linearGradient>
      </defs>
      {bars.map(([x, h]) => (
        <rect key={x} x={x} y={56 - h} width="1.6" height={h} fill="url(#boja-gold)" />
      ))}
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="flex items-end gap-2" aria-label="BOJA Real Estate home">
      <LogoMark className="h-8 w-auto" />
      <span className={`flex flex-col leading-none ${light ? "text-white" : "text-ink"}`}>
        <span className="font-logo text-[17px] font-semibold tracking-[0.42em]">BOJA</span>
        <span className="mt-1 font-logo text-[6.5px] tracking-[0.5em] opacity-70">REAL ESTATE</span>
      </span>
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
