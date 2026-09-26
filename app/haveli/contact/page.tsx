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
            { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? hotel.address : hotel.addressHi },
            { icon: Phone, title: t.hero.cta2, body: hotel.phone, href: `tel:${hotel.phoneRaw}` },
            { icon: Mail, title: "Email", body: hotel.email, href: `mailto:${hotel.email}` },
          ].map((c) => (
            <a key={c.title} href={c.href} className={`flex gap-4 rounded-xl border border-[#E5DFD2] bg-white p-5 shadow-sm ${c.href ? "transition hover:shadow-md" : "pointer-events-none"}`}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0F5E63]/10"><c.icon className="h-5 w-5 text-[#0F5E63]" /></span>
              <span><span className="block font-bold text-[#0F5E63]">{c.title}</span><span className="text-sm text-[#5B615F]">{c.body}</span></span>
            </a>
          ))}
          <div className="rounded-xl border border-[#E5DFD2] bg-white p-5 shadow-sm">
            <p className="flex items-center gap-2 font-bold text-[#0F5E63]"><Clock className="h-5 w-5" />{t.footer.hours}</p>
            {hotel.timings[lang].map((tm) => (
              <p key={tm.days} className="mt-2 text-sm text-[#5B615F]"><span className="font-semibold text-[#3C4442]">{tm.days}:</span> {tm.hours}</p>
            ))}
          </div>
          <p className="rounded-xl bg-[#B98A2F]/15 px-5 py-4 text-sm font-semibold text-[#8A6516]">{t.misc.emergency}: <a href={`tel:${hotel.phoneRaw}`} className="underline">{hotel.phone}</a></p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <MapBlock />
      </section>
    </main>
  );
}
