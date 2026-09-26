"use client";

import { useLang } from "@/lib/lang";
import { img, hotel } from "@/lib/config";
import { PageHero, SectionHead, StatsBand, CTABand } from "../_ui";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <main>
      <PageHero eyebrow={hotel.shortName} title={a.title} sub={a.sub} />
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-3 border border-[#C77B3F]/40" aria-hidden />
          <img src={img.about} alt={hotel.name} className="relative aspect-[4/5] w-full object-cover grayscale-[0.4]" />
        </div>
        <div className="space-y-5 text-[#EFE7DA]/65">
          <p>{a.story1}</p>
          <p>{a.story2}</p>
          <p className="font-[family-name:var(--font-cormorant)] text-xl font-semibold italic text-[#C77B3F]">{a.story3}</p>
        </div>
      </section>
      <section className="border-y border-[#EFE7DA]/10 px-4 py-16 text-center">
        <p className="mx-auto max-w-3xl font-[family-name:var(--font-cormorant)] text-3xl font-semibold italic md:text-4xl">“{a.mission}”</p>
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.35em] text-[#C77B3F]">{a.missionTitle}</p>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionHead eyebrow="Values" title={a.missionTitle} />
        <div className="grid gap-px bg-[#EFE7DA]/10 sm:grid-cols-2 lg:grid-cols-4">
          {a.values.map((v, i) => (
            <div key={v.title} className="bg-[#12100C] p-7">
              <p className="font-[family-name:var(--font-cormorant)] text-3xl text-[#C77B3F]/60">0{i + 1}</p>
              <h3 className="mt-3 font-[family-name:var(--font-cormorant)] text-xl font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-[#EFE7DA]/50">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <StatsBand />
      <CTABand />
    </main>
  );
}
