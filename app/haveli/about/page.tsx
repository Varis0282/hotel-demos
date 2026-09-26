"use client";

import { useLang } from "@/lib/lang";
import { img, hotel } from "@/lib/config";
import { PageHero, SectionHead, StatsBand, CTABand } from "../_ui";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <main>
      <PageHero title={a.title} sub={a.sub} />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div className="space-y-4 text-[#3C4442]">
          <p>{a.story1}</p>
          <p>{a.story2}</p>
          <p className="font-semibold text-[#0F5E63]">{a.story3}</p>
        </div>
        <img src={img.about} alt={hotel.name} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl" />
      </section>
      <section className="bg-[#0F5E63] px-4 py-14 text-center">
        <p className="mx-auto max-w-3xl font-[family-name:var(--font-lora)] text-2xl font-bold italic text-[#F4D793] md:text-3xl">“{a.mission}”</p>
        <p className="mt-3 text-sm uppercase tracking-[0.25em] text-white/70">{a.missionTitle}</p>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead eyebrow="Values" title={a.missionTitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {a.values.map((v, i) => (
            <div key={v.title} className="rounded-xl border border-[#E5DFD2] bg-white p-6 shadow-sm">
              <p className="font-[family-name:var(--font-lora)] text-3xl font-bold text-[#B98A2F]">0{i + 1}</p>
              <h3 className="mt-2 font-bold text-[#0F5E63]">{v.title}</h3>
              <p className="mt-1 text-sm text-[#5B615F]">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <StatsBand />
      <CTABand />
    </main>
  );
}
