"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { img } from "@/lib/config";
import { rooms } from "@/lib/content";
import { PageHero, NumberedHead, FAQList, CTABand } from "../_ui";

export default function Rooms() {
  const { lang, t } = useLang();
  return (
    <main>
      <PageHero kicker="Tariff" title={t.sections.roomsTitle} sub={t.sections.roomsSub} />
      <section className="mx-auto max-w-6xl space-y-14 px-4 py-10">
        {rooms.map((r, i) => (
          <article key={r.en.title} className="border-t-2 border-[#1A1A1A] pt-6">
            <div className="grid gap-8 md:grid-cols-[auto_1fr_1fr]">
              <p className="text-sm font-black text-[#4338CA]">{String(i + 1).padStart(2, "0")}</p>
              <div>
                <h2 className="text-3xl font-black tracking-tight">{pick(r, lang).title}</h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-black/45">{pick(r, lang).occupancy}</p>
                <p className="mt-3 text-3xl font-black text-[#4338CA]">{r.price} <span className="text-base font-semibold text-black/40">/ {pick(r.per, lang)}</span></p>
                <p className="mt-4 text-black/60">{pick(r, lang).desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {pick(r, lang).features.map((f) => (
                    <li key={f} className="text-sm text-black/70">— {f}</li>
                  ))}
                </ul>
                <Link href="/shanti/contact" className="mt-6 inline-block bg-[#1A1A1A] px-6 py-3 font-bold text-white transition hover:bg-[#4338CA]">{t.misc.bookRoom}</Link>
              </div>
              <img src={img.rooms[r.photo]} alt={pick(r, lang).title} className="aspect-[4/3] w-full object-cover grayscale-[0.35]" />
            </div>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <NumberedHead num="04" title={t.sections.faqTitle} sub={t.sections.faqSub} />
        <FAQList />
      </section>
      <CTABand />
    </main>
  );
}
