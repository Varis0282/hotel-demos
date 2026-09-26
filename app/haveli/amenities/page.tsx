"use client";

import { useLang, pick } from "@/lib/lang";
import { img } from "@/lib/config";
import { amenities, whyUs } from "@/lib/content";
import Icon from "@/components/Icon";
import { PageHero, SectionHead, CTABand } from "../_ui";

export default function Amenities() {
  const { lang, t } = useLang();
  return (
    <main>
      <PageHero title={t.sections.amenitiesTitle} sub={t.sections.amenitiesSub} />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((a) => (
            <div key={a.en.title} className="rounded-xl border border-[#E5DFD2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0F5E63]/10"><Icon name={a.icon} className="h-6 w-6 text-[#0F5E63]" /></span>
              <h3 className="mt-3 font-bold text-[#0F5E63]">{pick(a, lang).title}</h3>
              <p className="mt-1 text-sm text-[#5B615F]">{pick(a, lang).desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="relative overflow-hidden py-20">
        <img src={img.temple} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#0F5E63]/85" />
        <div className="relative mx-auto max-w-6xl px-4">
          <SectionHead light eyebrow="Why us" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-6 md:grid-cols-2">
            {whyUs.map((w) => (
              <div key={w.en.title} className="flex gap-4 rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F4D793]/20"><Icon name={w.icon} className="h-6 w-6 text-[#F4D793]" /></span>
                <div>
                  <h3 className="font-bold text-white">{pick(w, lang).title}</h3>
                  <p className="mt-1 text-sm text-white/75">{pick(w, lang).desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </main>
  );
}
