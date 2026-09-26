"use client";

import { useLang, pick } from "@/lib/lang";
import { amenities, whyUs } from "@/lib/content";
import { PageHero, NumberedHead, CTABand } from "../_ui";

export default function Amenities() {
  const { lang, t } = useLang();
  return (
    <main>
      <PageHero kicker="Amenities" title={t.sections.amenitiesTitle} sub={t.sections.amenitiesSub} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((a, i) => (
            <div key={a.en.title}>
              <p className="text-sm font-black text-[#4338CA]">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 border-t border-black/15 pt-3 text-lg font-black">{pick(a, lang).title}</h3>
              <p className="mt-2 text-sm text-black/55">{pick(a, lang).desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <NumberedHead num="02" title={t.sections.whyTitle} sub={t.sections.whySub} />
        <div className="grid gap-px border border-black/15 bg-black/15 md:grid-cols-2">
          {whyUs.map((w) => (
            <div key={w.en.title} className="bg-white p-8">
              <h3 className="text-xl font-black">{pick(w, lang).title}</h3>
              <p className="mt-2 text-black/55">{pick(w, lang).desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABand />
    </main>
  );
}
