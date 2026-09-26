"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { hotel, img } from "@/lib/config";
import { rooms, amenities, whyUs } from "@/lib/content";
import { NumberedHead, StatsBand, ReviewList, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { lang, t } = useLang();
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-16 md:pt-24">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#4338CA]">{t.hero.badge}</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-8xl">
          {t.hero.title}<br /><span className="text-[#4338CA]">{t.hero.titleAccent}</span>
        </h1>
        <div className="mt-8 grid gap-8 border-t-2 border-[#1A1A1A] pt-6 md:grid-cols-[1fr_auto]">
          <p className="max-w-xl text-lg text-black/60">{t.hero.sub}</p>
          <div className="flex flex-wrap items-start gap-4">
            <Link href="/shanti/contact" className="bg-[#4338CA] px-7 py-4 font-bold text-white transition hover:bg-[#1A1A1A]">{t.hero.cta1}</Link>
            <a href={`tel:${hotel.phoneRaw}`} className="border-2 border-[#1A1A1A] px-7 py-4 font-bold transition hover:bg-[#1A1A1A] hover:text-white">{t.hero.cta2}</a>
          </div>
        </div>
        <img src={img.hero} alt={hotel.name} className="mt-10 aspect-[21/9] w-full object-cover grayscale-[0.35]" />
        <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-black/40">{t.hero.open}</p>
      </section>

      <StatsBand />

      {/* Rooms */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <NumberedHead num="01" title={t.sections.roomsTitle} sub={t.sections.roomsSub} />
        <div className="divide-y divide-black/10 border-y border-black/10">
          {rooms.map((r) => (
            <Link key={r.en.title} href="/shanti/rooms" className="group grid items-center gap-4 py-6 md:grid-cols-[1fr_auto_auto_auto]">
              <div>
                <h3 className="text-xl font-black group-hover:text-[#4338CA]">{pick(r, lang).title}</h3>
                <p className="mt-1 text-sm text-black/50">{pick(r, lang).occupancy}</p>
              </div>
              <img src={img.rooms[r.photo]} alt="" className="hidden h-16 w-28 object-cover grayscale md:block" />
              <p className="text-2xl font-black text-[#4338CA]">{r.price}</p>
              <ArrowUpRight className="h-6 w-6 transition group-hover:translate-x-1 group-hover:text-[#4338CA]" />
            </Link>
          ))}
        </div>
        <Link href="/shanti/rooms" className="mt-6 inline-block font-bold text-[#4338CA] underline underline-offset-4">{t.misc.viewAll}</Link>
      </section>

      {/* Amenities */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <NumberedHead num="02" title={t.sections.amenitiesTitle} sub={t.sections.amenitiesSub} />
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.slice(0, 8).map((a, i) => (
            <div key={a.en.title}>
              <p className="text-sm font-black text-[#4338CA]">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 border-t border-black/15 pt-3 font-black">{pick(a, lang).title}</h3>
              <p className="mt-2 text-sm text-black/55">{pick(a, lang).desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <NumberedHead num="03" title={t.sections.whyTitle} sub={t.sections.whySub} />
        <div className="grid gap-px border border-black/15 bg-black/15 md:grid-cols-2">
          {whyUs.map((w) => (
            <div key={w.en.title} className="bg-white p-8">
              <h3 className="text-xl font-black">{pick(w, lang).title}</h3>
              <p className="mt-2 text-black/55">{pick(w, lang).desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <NumberedHead num="04" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
        <ReviewList limit={3} />
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <NumberedHead num="05" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {img.gallery.map((g, i) => (
            <img key={g} src={g} alt={`${hotel.name} ${i + 1}`} className="aspect-[4/3] w-full object-cover grayscale-[0.5] transition hover:grayscale-0" />
          ))}
        </div>
      </section>

      {/* FAQ + Map */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <NumberedHead num="06" title={t.sections.faqTitle} sub={t.sections.faqSub} />
        <FAQList />
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <NumberedHead num="07" title={t.sections.visitTitle} sub={t.sections.visitSub} />
        <MapBlock />
      </section>

      <CTABand />
    </main>
  );
}
