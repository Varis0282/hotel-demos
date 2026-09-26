"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { img } from "@/lib/config";
import { rooms } from "@/lib/content";
import { PageHero, FadeIn, SectionHead, FAQList, CTABand } from "../_ui";

export default function Rooms() {
  const { lang, t } = useLang();
  return (
    <main>
      <PageHero title={t.sections.roomsTitle} sub={t.sections.roomsSub} />
      <section className="mx-auto max-w-6xl space-y-8 px-4 py-14">
        {rooms.map((r, i) => (
          <FadeIn key={r.en.title} delay={i * 0.05}>
            <article className={`grid items-center gap-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <img src={img.rooms[r.photo]} alt={pick(r, lang).title} className="h-full min-h-64 w-full object-cover" />
              <div className="p-7 md:p-9">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-extrabold">{pick(r, lang).title}</h2>
                  <span className="rounded-full bg-[#FF6B6B]/15 px-3 py-1 text-sm font-bold text-[#FF6B6B]">{pick(r, lang).occupancy}</span>
                </div>
                <p className="mt-2 bg-gradient-to-r from-[#FFB03A] to-[#FF6B6B] bg-clip-text text-3xl font-extrabold text-transparent">{r.price} <span className="text-base font-normal text-white/45">/ {pick(r.per, lang)}</span></p>
                <p className="mt-3 text-white/65">{pick(r, lang).desc}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {pick(r, lang).features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/75"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB03A]" />{f}</li>
                  ))}
                </ul>
                <Link href="/jyoti/contact" className="mt-6 inline-block rounded-full bg-gradient-to-r from-[#FFB03A] to-[#FF6B6B] px-6 py-3 font-bold text-[#150E1F] transition hover:scale-105">{t.misc.bookRoom}</Link>
              </div>
            </article>
          </FadeIn>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead title={t.sections.faqTitle} sub={t.sections.faqSub} />
        <FAQList />
      </section>
      <CTABand />
    </main>
  );
}
