"use client";

import { useLang, pick } from "@/lib/lang";
import { amenities, whyUs } from "@/lib/content";
import Icon from "@/components/Icon";
import { PageHero, SectionHead, CTABand } from "../_ui";

export default function Amenities() {
  const { lang, t } = useLang();
  return (
    <main>
      <PageHero title={t.sections.amenitiesTitle} sub={t.sections.amenitiesSub} />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((a, i) => (
            <div key={a.en.title} className={`rounded-3xl p-6 transition hover:-translate-y-1 ${["bg-[#FDEBD2]", "bg-[#F9E3E0]", "bg-[#E3F2EA]", "bg-[#F7EEDC]"][i % 4]}`}>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm"><Icon name={a.icon} className="h-6 w-6 text-[#E8850C]" /></span>
              <h3 className="mt-3 font-extrabold text-[#8A2E2E]">{pick(a, lang).title}</h3>
              <p className="mt-1 text-sm text-[#7A6248]">{pick(a, lang).desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#FDEBD2] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Vishwas" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-6 md:grid-cols-2">
            {whyUs.map((w) => (
              <div key={w.en.title} className="flex gap-4 rounded-3xl border-2 border-[#F3DFC2] bg-white p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#E8850C] to-[#C2410C] text-white"><Icon name={w.icon} className="h-6 w-6" /></span>
                <div>
                  <h3 className="font-extrabold text-[#8A2E2E]">{pick(w, lang).title}</h3>
                  <p className="mt-1 text-sm text-[#7A6248]">{pick(w, lang).desc}</p>
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
