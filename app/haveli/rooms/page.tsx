"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { img } from "@/lib/config";
import { rooms } from "@/lib/content";
import { PageHero, CTABand, FAQList, SectionHead } from "../_ui";

export default function Rooms() {
  const { lang, t } = useLang();
  return (
    <main>
      <PageHero title={t.sections.roomsTitle} sub={t.sections.roomsSub} />
      <section className="mx-auto max-w-6xl space-y-10 px-4 py-16">
        {rooms.map((r, i) => (
          <article key={r.en.title} className={`grid items-center gap-8 overflow-hidden rounded-2xl border border-[#E5DFD2] bg-white shadow-sm md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <img src={img.rooms[r.photo]} alt={pick(r, lang).title} className="h-full min-h-64 w-full object-cover" />
            <div className="p-7 md:p-9">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-[family-name:var(--font-lora)] text-2xl font-bold text-[#0F5E63]">{pick(r, lang).title}</h2>
                <span className="rounded-full bg-[#B98A2F]/15 px-3 py-1 text-sm font-bold text-[#8A6516]">{pick(r, lang).occupancy}</span>
              </div>
              <p className="mt-2 font-[family-name:var(--font-lora)] text-3xl font-bold text-[#B98A2F]">{r.price} <span className="text-base font-normal text-[#8A8F8C]">/ {pick(r.per, lang)}</span></p>
              <p className="mt-3 text-[#5B615F]">{pick(r, lang).desc}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {pick(r, lang).features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#3C4442]"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{f}</li>
                ))}
              </ul>
              <Link href="/haveli/contact" className="mt-6 inline-block rounded-lg bg-[#0F5E63] px-6 py-3 font-bold text-white transition hover:brightness-110">{t.misc.bookRoom}</Link>
            </div>
          </article>
        ))}
      </section>
      <section className="bg-[#F2EEE3] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>
      <CTABand />
    </main>
  );
}
