"use client";

import { useLang, pick } from "@/lib/lang";
import { amenities, whyUs } from "@/lib/content";
import Icon from "@/components/Icon";
import { PageHero, FadeIn, SectionHead, CTABand } from "../_ui";

export default function Amenities() {
  const { lang, t } = useLang();
  return (
    <main>
      <PageHero title={t.sections.amenitiesTitle} sub={t.sections.amenitiesSub} />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((a, i) => (
            <FadeIn key={a.en.title} delay={(i % 4) * 0.07}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#FFB03A]/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFB03A]/25 to-[#FF6B6B]/25"><Icon name={a.icon} className="h-6 w-6 text-[#FFB03A]" /></span>
                <h3 className="mt-3 font-bold">{pick(a, lang).title}</h3>
                <p className="mt-1 text-sm text-white/55">{pick(a, lang).desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead eyebrow="Why us" title={t.sections.whyTitle} sub={t.sections.whySub} />
        <div className="grid gap-5 md:grid-cols-2">
          {whyUs.map((w, i) => (
            <FadeIn key={w.en.title} delay={i * 0.08}>
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFB03A] to-[#FF6B6B] text-[#150E1F]"><Icon name={w.icon} className="h-6 w-6" /></span>
                <div>
                  <h3 className="font-bold">{pick(w, lang).title}</h3>
                  <p className="mt-1 text-sm text-white/60">{pick(w, lang).desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      <CTABand />
    </main>
  );
}
