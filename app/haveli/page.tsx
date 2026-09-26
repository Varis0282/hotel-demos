"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { hotel, img } from "@/lib/config";
import { rooms, amenities, whyUs } from "@/lib/content";
import Icon from "@/components/Icon";
import { SectionHead, StatsBand, ReviewGrid, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { lang, t } = useLang();
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#B98A2F]/40 bg-[#B98A2F]/10 px-4 py-1.5 text-sm font-semibold text-[#8A6516]">
            <span className="h-2 w-2 rounded-full bg-[#B98A2F]" />{t.hero.badge}
          </p>
          <h1 className="mt-5 font-[family-name:var(--font-lora)] text-4xl font-bold leading-tight text-[#0F5E63] md:text-5xl">
            {t.hero.title} <span className="text-[#B98A2F]">{t.hero.titleAccent}</span>
          </h1>
          <p className="mt-5 text-lg text-[#5B615F]">{t.hero.sub}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/haveli/contact#book" className="rounded-lg bg-[#0F5E63] px-7 py-3.5 font-bold text-white shadow-lg transition hover:brightness-110">{t.hero.cta1}</Link>
            <a href={`tel:${hotel.phoneRaw}`} className="rounded-lg border-2 border-[#0F5E63] px-7 py-3.5 font-bold text-[#0F5E63] transition hover:bg-[#0F5E63]/5">{t.hero.cta2}</a>
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-700"><CheckCircle2 className="h-4 w-4" />{t.hero.open}</p>
        </div>
        <div className="relative">
          <img src={img.hero} alt={hotel.name} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl" />
          <div className="absolute -bottom-5 left-5 rounded-xl bg-white px-5 py-3 shadow-lg">
            <p className="font-[family-name:var(--font-lora)] text-2xl font-bold text-[#0F5E63]">{hotel.distance}</p>
            <p className="text-xs text-[#8A8F8C]">{lang === "en" ? "walk to Mahakal" : "महाकाल तक पैदल"}</p>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Rooms preview */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead eyebrow="Tariff" title={t.sections.roomsTitle} sub={t.sections.roomsSub} />
        <div className="grid gap-6 md:grid-cols-3">
          {rooms.map((r) => (
            <article key={r.en.title} className="overflow-hidden rounded-2xl border border-[#E5DFD2] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative">
                <img src={img.rooms[r.photo]} alt={pick(r, lang).title} className="aspect-[4/3] w-full object-cover" />
                <p className="absolute right-3 top-3 rounded-lg bg-[#0F5E63] px-3 py-1.5 text-sm font-bold text-[#F4D793]">{r.price} <span className="font-normal text-white/80">/ {pick(r.per, lang)}</span></p>
              </div>
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-lora)] text-xl font-bold text-[#0F5E63]">{pick(r, lang).title}</h3>
                <p className="mt-1 text-sm font-semibold text-[#B98A2F]">{pick(r, lang).occupancy}</p>
                <p className="mt-2 text-sm text-[#5B615F]">{pick(r, lang).desc}</p>
                <Link href="/haveli/contact#book" className="mt-4 inline-block rounded-lg bg-[#B98A2F] px-4 py-2 text-sm font-bold text-white hover:brightness-110">{t.misc.bookRoom}</Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center"><Link href="/haveli/rooms" className="font-bold text-[#0F5E63] underline decoration-[#B98A2F] decoration-2 underline-offset-4">{t.misc.viewAll} →</Link></p>
      </section>

      {/* Amenities preview */}
      <section className="bg-[#F2EEE3] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Amenities" title={t.sections.amenitiesTitle} sub={t.sections.amenitiesSub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.slice(0, 8).map((a) => (
              <div key={a.en.title} className="rounded-xl border border-[#E5DFD2] bg-white p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0F5E63]/10"><Icon name={a.icon} className="h-5 w-5 text-[#0F5E63]" /></span>
                <h3 className="mt-3 font-bold text-[#0F5E63]">{pick(a, lang).title}</h3>
                <p className="mt-1 text-sm text-[#5B615F]">{pick(a, lang).desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead eyebrow="Promise" title={t.sections.whyTitle} sub={t.sections.whySub} />
        <div className="grid gap-6 md:grid-cols-2">
          {whyUs.map((w) => (
            <div key={w.en.title} className="flex gap-4 rounded-xl border border-[#E5DFD2] bg-white p-6 shadow-sm">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#B98A2F]/15"><Icon name={w.icon} className="h-6 w-6 text-[#B98A2F]" /></span>
              <div>
                <h3 className="font-[family-name:var(--font-lora)] text-lg font-bold text-[#0F5E63]">{pick(w, lang).title}</h3>
                <p className="mt-1 text-sm text-[#5B615F]">{pick(w, lang).desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[#F2EEE3] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Guests" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <ReviewGrid limit={3} />
        </div>
      </section>

      {/* Gallery strip */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead eyebrow="Gallery" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {img.gallery.map((g, i) => (
            <img key={g} src={g} alt={`${hotel.name} ${i + 1}`} className="aspect-[4/3] w-full rounded-xl object-cover shadow-sm transition hover:scale-[1.02]" />
          ))}
        </div>
      </section>

      {/* FAQ + Map */}
      <section className="bg-[#F2EEE3] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="FAQ" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead eyebrow="Location" title={t.sections.visitTitle} sub={t.sections.visitSub} />
        <MapBlock />
      </section>

      <CTABand />
    </main>
  );
}
