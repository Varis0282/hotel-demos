"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { hotel, img } from "@/lib/config";
import { rooms, amenities, whyUs } from "@/lib/content";
import Icon from "@/components/Icon";
import { Eyebrow, SectionHead, StatsBand, ReviewGrid, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { lang, t } = useLang();
  return (
    <main>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div>
            <Eyebrow>{t.hero.badge}</Eyebrow>
            <h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl font-semibold leading-[1.08] md:text-7xl">
              {t.hero.title}<br /><em className="text-[#C77B3F]">{t.hero.titleAccent}</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[#EFE7DA]/60">{t.hero.sub}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/rajwada/contact#book" className="bg-[#C77B3F] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#12100C] transition hover:brightness-110">{t.hero.cta1}</Link>
              <a href={`tel:${hotel.phoneRaw}`} className="border border-[#EFE7DA]/30 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] transition hover:border-[#EFE7DA]">{t.hero.cta2}</a>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#C77B3F]/80">{t.hero.open}</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 border border-[#C77B3F]/40" aria-hidden />
            <img src={img.heroAlt} alt={hotel.name} className="relative aspect-[4/5] w-full object-cover" />
            <div className="absolute -bottom-6 -left-6 border border-[#C77B3F] bg-[#12100C] px-6 py-4">
              <p className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#C77B3F]">{hotel.distance}</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#EFE7DA]/50">{lang === "en" ? "to the Jyotirlinga" : "ज्योतिर्लिंग तक"}</p>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Rooms — numbered rows */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionHead eyebrow="Tariff" title={t.sections.roomsTitle} sub={t.sections.roomsSub} />
        <div className="divide-y divide-[#EFE7DA]/10 border-y border-[#EFE7DA]/10">
          {rooms.map((r, i) => (
            <Link key={r.en.title} href="/rajwada/rooms" className="group grid items-center gap-6 py-8 transition hover:bg-[#EFE7DA]/[0.03] md:grid-cols-[auto_1fr_auto_auto]">
              <p className="font-[family-name:var(--font-cormorant)] text-3xl text-[#C77B3F]/60">0{i + 1}</p>
              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold group-hover:text-[#C77B3F]">{pick(r, lang).title}</h3>
                <p className="mt-1 text-sm text-[#EFE7DA]/50">{pick(r, lang).occupancy} · {pick(r, lang).desc}</p>
              </div>
              <img src={img.rooms[r.photo]} alt="" className="hidden h-20 w-32 object-cover grayscale transition group-hover:grayscale-0 md:block" />
              <p className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#C77B3F]">{r.price}</p>
            </Link>
          ))}
        </div>
        <p className="mt-8"><Link href="/rajwada/rooms" className="text-xs font-bold uppercase tracking-[0.25em] text-[#C77B3F] hover:underline">{t.misc.viewAll} →</Link></p>
      </section>

      {/* Amenities */}
      <section className="border-t border-[#EFE7DA]/10 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Amenities" title={t.sections.amenitiesTitle} sub={t.sections.amenitiesSub} />
          <div className="grid gap-px bg-[#EFE7DA]/10 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.slice(0, 8).map((a) => (
              <div key={a.en.title} className="bg-[#12100C] p-7 transition hover:bg-[#171410]">
                <Icon name={a.icon} className="h-6 w-6 text-[#C77B3F]" />
                <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-xl font-semibold">{pick(a, lang).title}</h3>
                <p className="mt-2 text-sm text-[#EFE7DA]/50">{pick(a, lang).desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-[#EFE7DA]/10 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHead eyebrow="The promise" title={t.sections.whyTitle} sub={t.sections.whySub} />
            <img src={img.temple} alt="" className="hidden aspect-[4/3] w-full object-cover grayscale md:block" />
          </div>
          <div className="space-y-8">
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

      {/* Reviews */}
      <section className="border-t border-[#EFE7DA]/10 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead center eyebrow="Guests" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <ReviewGrid limit={3} />
        </div>
      </section>

      {/* Gallery */}
      <section className="border-t border-[#EFE7DA]/10 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Gallery" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-px bg-[#EFE7DA]/10 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <img key={g} src={g} alt={`${hotel.name} ${i + 1}`} className="aspect-[4/3] w-full object-cover grayscale transition duration-500 hover:grayscale-0" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + Map */}
      <section className="border-t border-[#EFE7DA]/10 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead center eyebrow="FAQ" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <SectionHead eyebrow="Location" title={t.sections.visitTitle} sub={t.sections.visitSub} />
        <MapBlock />
      </section>

      <CTABand />
    </main>
  );
}
