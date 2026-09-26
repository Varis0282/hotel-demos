"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLang } from "@/lib/lang";
import { hotel } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, MapBlock, bookingStyles } from "../_ui";

export default function Contact() {
  const { lang, t } = useLang();
  return (
    <main>
      <PageHero title={t.booking.title} sub={t.booking.sub} />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-[1.2fr_1fr]">
        <BookingForm styles={bookingStyles} />
        <div className="space-y-4">
          {[
            { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? hotel.address : hotel.addressHi, bg: "bg-[#FDEBD2]" },
            { icon: Phone, title: t.hero.cta2, body: hotel.phone, href: `tel:${hotel.phoneRaw}`, bg: "bg-[#F9E3E0]" },
            { icon: Mail, title: "Email", body: hotel.email, href: `mailto:${hotel.email}`, bg: "bg-[#E3F2EA]" },
          ].map((c) => (
            <a key={c.title} href={c.href} className={`flex gap-4 rounded-3xl p-5 ${c.bg} ${c.href ? "transition hover:-translate-y-0.5" : "pointer-events-none"}`}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm"><c.icon className="h-5 w-5 text-[#E8850C]" /></span>
              <span><span className="block font-extrabold text-[#8A2E2E]">{c.title}</span><span className="text-sm text-[#7A6248]">{c.body}</span></span>
            </a>
          ))}
          <div className="rounded-3xl bg-[#F7EEDC] p-5">
            <p className="flex items-center gap-2 font-extrabold text-[#8A2E2E]"><Clock className="h-5 w-5 text-[#E8850C]" />{t.footer.hours}</p>
            {hotel.timings[lang].map((tm) => (
              <p key={tm.days} className="mt-2 text-sm text-[#7A6248]"><span className="font-bold text-[#5C4630]">{tm.days}:</span> {tm.hours}</p>
            ))}
          </div>
          <p className="rounded-3xl bg-[#8A2E2E] px-5 py-4 text-sm font-bold text-[#FFE9C9]">{t.misc.emergency}: <a href={`tel:${hotel.phoneRaw}`} className="underline">{hotel.phone}</a></p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <MapBlock />
      </section>
    </main>
  );
}
