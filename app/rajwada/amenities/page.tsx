"use client";

import { useLang, pick } from "@/lib/lang";
import { amenities, whyUs } from "@/lib/content";
import Icon from "@/components/Icon";
import { PageHero, SectionHead, CTABand } from "../_ui";

export default function Amenities() {
  const { lang, t } = useLang();
  return (
    <main>
      <PageHero eyebrow="Amenities" title={t.sections.amenitiesTitle} sub={t.sections.amenitiesSub} />
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-px bg-[#EFE7DA]/10 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((a) => (
            <div key={a.en.title} className="bg-[#12100C] p-7 transition hover:bg-[#171410]">
              <Icon name={a.icon} className="h-6 w-6 text-[#C77B3F]" />
              <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-xl font-semibold">{pick(a, lang).title}</h3>
              <p className="mt-2 text-sm text-[#EFE7DA]/50">{pick(a, lang).desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-t border-[#EFE7DA]/10 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="The promise" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-10 md:grid-cols-2">
            {whyUs.map((w, i) => (
              <div key={w.en.title} className="flex gap-5 border-b border-[#EFE7DA]/10 pb-8">
                <p className="font-[family-name:var(--font-cormorant)] text-3xl text-[#C77B3F]/60">0{i + 1}</p>
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold">{pick(w, lang).title}</h3>
                  <p className="mt-2 text-sm text-[#EFE7DA]/55">{pick(w, lang).desc}</p>
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
