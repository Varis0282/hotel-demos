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
      <PageHero eyebrow="Booking" title={t.booking.title} sub={t.booking.sub} />
      <section id="book" className="scroll-mt-28 mx-auto grid max-w-6xl gap-10 px-4 py-20 lg:grid-cols-[1.2fr_1fr]">
        <BookingForm styles={bookingStyles} />
        <div className="space-y-px bg-[#EFE7DA]/10">
          {[
            { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? hotel.address : hotel.addressHi },
            { icon: Phone, title: t.hero.cta2, body: hotel.phone, href: `tel:${hotel.phoneRaw}` },
            { icon: Mail, title: "Email", body: hotel.email, href: `mailto:${hotel.email}` },
          ].map((c) => (
            <a key={c.title} href={c.href} className={`flex gap-4 bg-[#12100C] p-6 ${c.href ? "transition hover:bg-[#171410]" : "pointer-events-none"}`}>
              <c.icon className="h-5 w-5 shrink-0 text-[#C77B3F]" />
              <span><span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#C77B3F]">{c.title}</span><span className="mt-1 block text-sm text-[#EFE7DA]/60">{c.body}</span></span>
            </a>
          ))}
          <div className="bg-[#12100C] p-6">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C77B3F]"><Clock className="h-4 w-4" />{t.footer.hours}</p>
            {hotel.timings[lang].map((tm) => (
              <p key={tm.days} className="mt-3 text-sm text-[#EFE7DA]/60"><span className="font-semibold text-[#EFE7DA]/85">{tm.days}:</span> {tm.hours}</p>
            ))}
            <p className="mt-4 border-t border-[#EFE7DA]/10 pt-3 text-sm text-[#EFE7DA]/60">{t.misc.emergency}: <a href={`tel:${hotel.phoneRaw}`} className="text-[#C77B3F] underline">{hotel.phone}</a></p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <MapBlock />
      </section>
    </main>
  );
}
