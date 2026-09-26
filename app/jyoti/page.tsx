"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { hotel, img } from "@/lib/config";
import { rooms, amenities, whyUs } from "@/lib/content";
import Icon from "@/components/Icon";
import { FadeIn, SectionHead, StatsBand, ReviewsMarquee, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { lang, t } = useLang();
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pb-10 pt-16 text-center md:pt-24">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 rounded-full border border-[#FFB03A]/30 bg-[#FFB03A]/10 px-4 py-1.5 text-sm font-semibold text-[#FFB03A]">
          <Sparkles className="h-4 w-4" />{t.hero.badge}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
          {t.hero.title} <span className="bg-gradient-to-r from-[#FFB03A] via-[#FF8A5C] to-[#FF6B6B] bg-clip-text text-transparent">{t.hero.titleAccent}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="mx-auto mt-6 max-w-2xl text-lg text-white/65">
          {t.hero.sub}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/jyoti/contact" className="rounded-full bg-gradient-to-r from-[#FFB03A] to-[#FF6B6B] px-8 py-4 font-bold text-[#150E1F] shadow-xl shadow-[#FFB03A]/30 transition hover:scale-105">{t.hero.cta1}</Link>
          <a href={`tel:${hotel.phoneRaw}`} className="rounded-full border border-white/25 px-8 py-4 font-bold transition hover:bg-white/10">{t.hero.cta2}</a>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="relative mx-auto mt-14 max-w-4xl">
          <img src={img.heroAlt} alt={hotel.name} className="aspect-[16/9] w-full rounded-3xl border border-white/10 object-cover shadow-2xl" />
          <div className="absolute -left-3 -top-3 rounded-2xl border border-white/10 bg-[#1D1430]/90 px-5 py-3 backdrop-blur md:-left-8">
            <p className="text-xl font-extrabold text-[#FFB03A]">{hotel.distance}</p>
            <p className="text-xs text-white/55">{lang === "en" ? "walk to Mahakal" : "महाकाल तक पैदल"}</p>
          </div>
          <div className="absolute -bottom-4 -right-3 rounded-2xl border border-white/10 bg-[#1D1430]/90 px-5 py-3 backdrop-blur md:-right-8">
            <p className="text-xl font-extrabold text-[#FF6B6B]">3:00 AM</p>
            <p className="text-xs text-white/55">{lang === "en" ? "Bhasma Aarti wake-up" : "भस्म आरती वेक-अप"}</p>
          </div>
        </motion.div>
      </section>

      <StatsBand />

      {/* Rooms */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead eyebrow="Tariff" title={t.sections.roomsTitle} sub={t.sections.roomsSub} />
        <div className="grid gap-6 md:grid-cols-3">
          {rooms.map((r, i) => (
            <FadeIn key={r.en.title} delay={i * 0.1}>
              <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-[#FFB03A]/40">
                <div className="relative overflow-hidden">
                  <img src={img.rooms[r.photo]} alt={pick(r, lang).title} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
                  <p className="absolute right-3 top-3 rounded-full bg-[#150E1F]/85 px-4 py-1.5 text-sm font-bold text-[#FFB03A] backdrop-blur">{r.price}</p>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold">{pick(r, lang).title}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#FF6B6B]">{pick(r, lang).occupancy}</p>
                  <p className="mt-2 text-sm text-white/60">{pick(r, lang).desc}</p>
                  <Link href="/jyoti/contact" className="mt-4 inline-block rounded-full border border-[#FFB03A]/50 px-5 py-2 text-sm font-bold text-[#FFB03A] transition hover:bg-[#FFB03A] hover:text-[#150E1F]">{t.misc.bookRoom}</Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-8 text-center">
          <Link href="/jyoti/rooms" className="font-bold text-[#FFB03A] hover:underline">{t.misc.viewAll} →</Link>
        </FadeIn>
      </section>

      {/* Amenities */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead eyebrow="Amenities" title={t.sections.amenitiesTitle} sub={t.sections.amenitiesSub} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.slice(0, 8).map((a, i) => (
            <FadeIn key={a.en.title} delay={(i % 4) * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-[#FF6B6B]/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFB03A]/25 to-[#FF6B6B]/25"><Icon name={a.icon} className="h-5 w-5 text-[#FFB03A]" /></span>
                <h3 className="mt-3 font-bold">{pick(a, lang).title}</h3>
                <p className="mt-1 text-sm text-white/55">{pick(a, lang).desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead eyebrow="Promise" title={t.sections.whyTitle} sub={t.sections.whySub} />
        <div className="grid gap-5 md:grid-cols-2">
          {whyUs.map((w, i) => (
            <FadeIn key={w.en.title} delay={i * 0.08}>
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFB03A] to-[#FF6B6B] text-[#150E1F]"><Icon name={w.icon} className="h-6 w-6" /></span>
                <div>
                  <h3 className="font-bold">{pick(w, lang).title}</h3>
                  <p className="mt-1 text-sm text-white/60">{pick(w, lang).desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Reviews marquee */}
      <section className="py-14">
        <SectionHead eyebrow="Guests" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
        <ReviewsMarquee />
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead eyebrow="Gallery" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {img.gallery.map((g, i) => (
            <FadeIn key={g} delay={(i % 3) * 0.08}>
              <img src={g} alt={`${hotel.name} ${i + 1}`} className="aspect-[4/3] w-full rounded-2xl border border-white/10 object-cover transition hover:scale-[1.02]" />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FAQ + Map */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead eyebrow="FAQ" title={t.sections.faqTitle} sub={t.sections.faqSub} />
        <FAQList />
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead eyebrow="Location" title={t.sections.visitTitle} sub={t.sections.visitSub} />
        <MapBlock />
      </section>

      <CTABand />
    </main>
  );
}
