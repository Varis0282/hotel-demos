"use client";

import { useLang } from "@/lib/lang";
import { img, hotel } from "@/lib/config";
import { PageHero, NumberedHead, StatsBand, CTABand } from "../_ui";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <main>
      <PageHero kicker={hotel.shortName} title={a.title} sub={a.sub} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <img src={img.about} alt={hotel.name} className="aspect-[21/9] w-full object-cover grayscale-[0.35]" />
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <p className="text-black/70">{a.story1}</p>
          <p className="text-black/70">{a.story2}</p>
          <p className="font-bold">{a.story3}</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="border-y-2 border-[#1A1A1A] py-12">
          <p className="max-w-4xl text-3xl font-black leading-snug tracking-tight md:text-4xl">“{a.mission}”</p>
          <p className="mt-4 text-xs font-black uppercase tracking-[0.3em] text-[#4338CA]">{a.missionTitle}</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <NumberedHead num="01" title={a.missionTitle} />
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {a.values.map((v, i) => (
            <div key={v.title}>
              <p className="text-sm font-black text-[#4338CA]">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 border-t border-black/15 pt-3 font-black">{v.title}</h3>
              <p className="mt-2 text-sm text-black/55">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <StatsBand />
      <CTABand />
    </main>
  );
}
