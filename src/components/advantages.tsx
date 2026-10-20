"use client";

import { ChartNoAxesColumn, CirclePlus, Database, FileText, House, Shield, Users } from "lucide-react";
import { ContactPill } from "./hero";
import { Eyebrow, Lines, Reveal } from "./motion";
import { Rise } from "./stack";
import { advantages } from "@/lib/site";

const icons = {
  users: Users,
  shield: Shield,
  database: Database,
  file: FileText,
  plus: CirclePlus,
  chart: ChartNoAxesColumn,
  home: House,
} as const;

export function Advantages() {
  return (
    <section id="advantages" className="bg-white px-4 pb-24 pt-10 md:px-6 md:pb-28">
      <Rise>
        <Reveal>
          <Eyebrow>Explore Our Advantages</Eyebrow>
        </Reveal>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-[34px] leading-[1.12] tracking-[-0.02em] md:text-[48px]">
            <Lines lines={["Why Nigeria Stands", "Unrivalled?"]} />
          </h2>
          <Reveal>
            <ContactPill />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {advantages.map((a, i) => {
            const Icon = icons[a.icon as keyof typeof icons];
            return (
              <Reveal key={a.title} delay={(i % 4) * 0.08} className="max-w-[300px]">
                <Icon className="size-4 text-ink" strokeWidth={1.5} />
                <h3 className="mt-4 whitespace-pre-line text-[17px] font-medium leading-snug">{a.title}</h3>
                <p className="mt-4 text-[12px] leading-relaxed text-ink/55">{a.text}</p>
              </Reveal>
            );
          })}
        </div>
      </Rise>
    </section>
  );
}
