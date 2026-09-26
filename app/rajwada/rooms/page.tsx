"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { img } from "@/lib/config";
import { rooms } from "@/lib/content";
import { PageHero, SectionHead, FAQList, CTABand } from "../_ui";

export default function Rooms() {
  const { lang, t } = useLang();
  return (
    <main>
      <PageHero eyebrow="Tariff" title={t.sections.roomsTitle} sub={t.sections.roomsSub} />
      <section className="mx-auto max-w-6xl space-y-16 px-4 py-20">
        {rooms.map((r, i) => (
          <article key={r.en.title} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div className="relative">
              <div className="absolute -inset-3 border border-[#C77B3F]/30" aria-hidden />
              <img src={img.rooms[r.photo]} alt={pick(r, lang).title} className="relative aspect-[4/3] w-full object-cover" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C77B3F]">0{i + 1} · {pick(r, lang).occupancy}</p>
              <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl font-semibold">{pick(r, lang).title}</h2>
              <p className="mt-2 font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#C77B3F]">{r.price} <span className="text-base text-[#EFE7DA]/40">/ {pick(r.per, lang)}</span></p>
              <p className="mt-4 text-[#EFE7DA]/60">{pick(r, lang).desc}</p>
              <ul className="mt-5 space-y-2">
                {pick(r, lang).features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[#EFE7DA]/70"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C77B3F]" />{f}</li>
                ))}
              </ul>
              <Link href="/rajwada/contact#book" className="mt-7 inline-block border border-[#C77B3F] px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C77B3F] transition hover:bg-[#C77B3F] hover:text-[#12100C]">{t.misc.bookRoom}</Link>
            </div>
          </article>
        ))}
      </section>
      <section className="border-t border-[#EFE7DA]/10 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead center eyebrow="FAQ" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>
      <CTABand />
    </main>
  );
}
