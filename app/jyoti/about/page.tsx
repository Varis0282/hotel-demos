"use client";

import { useLang } from "@/lib/lang";
import { img, hotel } from "@/lib/config";
import { PageHero, FadeIn, SectionHead, StatsBand, CTABand } from "../_ui";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <main>
      <PageHero title={a.title} sub={a.sub} />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2">
        <FadeIn className="space-y-4 text-white/70">
          <p>{a.story1}</p>
          <p>{a.story2}</p>
          <p className="font-semibold text-[#FFB03A]">{a.story3}</p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <img src={img.about} alt={hotel.name} className="aspect-[4/3] w-full rounded-3xl border border-white/10 object-cover shadow-2xl" />
        </FadeIn>
      </section>
      <section className="px-4 py-10">
        <FadeIn className="mx-auto max-w-4xl rounded-3xl border border-[#FFB03A]/25 bg-gradient-to-br from-[#FFB03A]/10 to-[#FF6B6B]/10 p-10 text-center md:p-14">
          <p className="text-2xl font-extrabold md:text-3xl">“{a.mission}”</p>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[#FFB03A]">{a.missionTitle}</p>
        </FadeIn>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead eyebrow="Values" title={a.missionTitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {a.values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="bg-gradient-to-r from-[#FFB03A] to-[#FF6B6B] bg-clip-text text-3xl font-extrabold text-transparent">0{i + 1}</p>
                <h3 className="mt-2 font-bold">{v.title}</h3>
                <p className="mt-1 text-sm text-white/55">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      <StatsBand />
      <CTABand />
    </main>
  );
}
