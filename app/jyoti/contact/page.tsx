"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLang } from "@/lib/lang";
import { hotel } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, FadeIn, MapBlock, bookingStyles } from "../_ui";

export default function Contact() {
  const { lang, t } = useLang();
  return (
    <main>
      <PageHero title={t.booking.title} sub={t.booking.sub} />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-[1.2fr_1fr]">
        <FadeIn>
          <BookingForm styles={bookingStyles} />
        </FadeIn>
        <FadeIn delay={0.12} className="space-y-4">
          {[
            { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? hotel.address : hotel.addressHi },
            { icon: Phone, title: t.hero.cta2, body: hotel.phone, href: `tel:${hotel.phoneRaw}` },
            { icon: Mail, title: "Email", body: hotel.email, href: `mailto:${hotel.email}` },
          ].map((c) => (
            <a key={c.title} href={c.href} className={`flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur ${c.href ? "transition hover:border-[#FFB03A]/40" : "pointer-events-none"}`}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFB03A]/25 to-[#FF6B6B]/25"><c.icon className="h-5 w-5 text-[#FFB03A]" /></span>
              <span><span className="block font-bold">{c.title}</span><span className="text-sm text-white/60">{c.body}</span></span>
            </a>
          ))}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p className="flex items-center gap-2 font-bold"><Clock className="h-5 w-5 text-[#FFB03A]" />{t.footer.hours}</p>
            {hotel.timings[lang].map((tm) => (
              <p key={tm.days} className="mt-2 text-sm text-white/60"><span className="font-semibold text-white/85">{tm.days}:</span> {tm.hours}</p>
            ))}
          </div>
          <p className="rounded-2xl border border-[#FFB03A]/25 bg-[#FFB03A]/10 px-5 py-4 text-sm font-semibold text-[#FFB03A]">{t.misc.emergency}: <a href={`tel:${hotel.phoneRaw}`} className="underline">{hotel.phone}</a></p>
        </FadeIn>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <MapBlock />
      </section>
    </main>
  );
}
