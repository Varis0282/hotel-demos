"use client";

import Link from "next/link";
import { Flame, CheckCircle2 } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { hotel, img } from "@/lib/config";
import { rooms, amenities, whyUs } from "@/lib/content";
import Icon from "@/components/Icon";
import { SectionHead, StatsBand, ReviewGrid, FAQList, MapBlock, CTABand, Squiggle } from "./_ui";

export default function Home() {
  const { lang, t } = useLang();
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E8850C]/15" aria-hidden />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#8A2E2E] px-4 py-1.5 text-sm font-bold text-[#FFE9C9]">
              <Flame className="h-4 w-4 text-[#FFB03A]" />{t.hero.badge}
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-[#8A2E2E] md:text-5xl">
              {t.hero.title}<br /><span className="text-[#E8850C]">{t.hero.titleAccent}</span>
            </h1>
            <Squiggle className="mt-3" />
            <p className="mt-5 text-lg text-[#7A6248]">{t.hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/kesar/contact#book" className="rounded-full bg-[#E8850C] px-7 py-3.5 font-extrabold text-white shadow-lg transition hover:scale-105">{t.hero.cta1}</Link>
              <a href={`tel:${hotel.phoneRaw}`} className="rounded-full border-2 border-[#8A2E2E] px-7 py-3.5 font-bold text-[#8A2E2E] transition hover:bg-[#8A2E2E] hover:text-[#FFE9C9]">{t.hero.cta2}</a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm font-bold text-[#2E7D5B]"><CheckCircle2 className="h-4 w-4" />{t.hero.open}</p>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-t-[10rem] rounded-b-3xl border-4 border-[#E8850C] shadow-2xl">
              <img src={img.temple} alt={hotel.name} className="aspect-[3/4] w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl border-2 border-[#F3DFC2] bg-white px-5 py-3 shadow-lg">
              <p className="text-2xl font-extrabold text-[#E8850C]">{hotel.distance}</p>
              <p className="text-xs font-semibold text-[#7A6248]">{lang === "en" ? "walk to Mahakal" : "महाकाल तक पैदल"}</p>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Rooms */}
      <section className="bg-[#FDEBD2] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.sections.roomsTitle} title={t.sections.roomsTitle} sub={t.sections.roomsSub} />
          <div className="grid gap-6 md:grid-cols-3">
            {rooms.map((r) => (
              <article key={r.en.title} className="overflow-hidden rounded-3xl border-2 border-[#F3DFC2] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img src={img.rooms[r.photo]} alt={pick(r, lang).title} className="aspect-[4/3] w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg font-extrabold text-[#8A2E2E]">{pick(r, lang).title}</h3>
                  </div>
                  <p className="mt-1 text-2xl font-extrabold text-[#E8850C]">{r.price} <span className="text-sm font-semibold text-[#B9834C]">/ {pick(r.per, lang)}</span></p>
                  <p className="mt-1 text-sm font-bold text-[#2E7D5B]">{pick(r, lang).occupancy}</p>
                  <p className="mt-2 text-sm text-[#7A6248]">{pick(r, lang).desc}</p>
                  <Link href="/kesar/contact#book" className="mt-4 inline-block rounded-full bg-[#8A2E2E] px-5 py-2 text-sm font-bold text-[#FFE9C9] hover:brightness-110">{t.misc.bookRoom}</Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center"><Link href="/kesar/rooms" className="font-extrabold text-[#E8850C] underline decoration-wavy underline-offset-4">{t.misc.viewAll} →</Link></p>
        </div>
      </section>

      {/* Amenities */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead eyebrow="Seva" title={t.sections.amenitiesTitle} sub={t.sections.amenitiesSub} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.slice(0, 8).map((a, i) => (
            <div key={a.en.title} className={`rounded-3xl p-5 ${["bg-[#FDEBD2]", "bg-[#F9E3E0]", "bg-[#E3F2EA]", "bg-[#F7EEDC]"][i % 4]}`}>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm"><Icon name={a.icon} className="h-6 w-6 text-[#E8850C]" /></span>
              <h3 className="mt-3 font-extrabold text-[#8A2E2E]">{pick(a, lang).title}</h3>
              <p className="mt-1 text-sm text-[#7A6248]">{pick(a, lang).desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-[#FDEBD2] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Vishwas" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-6 md:grid-cols-2">
            {whyUs.map((w) => (
              <div key={w.en.title} className="flex gap-4 rounded-3xl border-2 border-[#F3DFC2] bg-white p-6">
                <span className="flex h-13 w-13 h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#E8850C] to-[#C2410C] text-white"><Icon name={w.icon} className="h-6 w-6" /></span>
                <div>
                  <h3 className="font-extrabold text-[#8A2E2E]">{pick(w, lang).title}</h3>
                  <p className="mt-1 text-sm text-[#7A6248]">{pick(w, lang).desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead eyebrow="Yatri" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
        <ReviewGrid limit={3} />
      </section>

      {/* Gallery */}
      <section className="bg-[#FDEBD2] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Jhalak" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <img key={g} src={g} alt={`${hotel.name} ${i + 1}`} className={`aspect-[4/3] w-full object-cover shadow-sm transition hover:rotate-0 hover:scale-[1.02] ${i % 2 ? "rounded-t-[4rem] rounded-b-2xl" : "rounded-2xl"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + Map */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead eyebrow="Sawaal" title={t.sections.faqTitle} sub={t.sections.faqSub} />
        <FAQList />
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <SectionHead eyebrow="Pata" title={t.sections.visitTitle} sub={t.sections.visitSub} />
        <MapBlock />
      </section>

      <CTABand />
    </main>
  );
}
