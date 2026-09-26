"use client";

import { useLang } from "@/lib/lang";
import { hotel } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, NumberedHead, MapBlock, bookingStyles } from "../_ui";

export default function Contact() {
  const { lang, t } = useLang();
  return (
    <main>
      <PageHero kicker="Booking" title={t.booking.title} sub={t.booking.sub} />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[1.2fr_1fr]">
        <BookingForm styles={bookingStyles} />
        <div>
          <div className="divide-y divide-black/10 border-y-2 border-[#1A1A1A]">
            <div className="py-5">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-black/40">{t.sections.visitTitle}</p>
              <p className="mt-2 font-semibold">{lang === "en" ? hotel.address : hotel.addressHi}</p>
            </div>
            <div className="py-5">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-black/40">{t.hero.cta2}</p>
              <a href={`tel:${hotel.phoneRaw}`} className="mt-2 block text-2xl font-black text-[#4338CA] underline underline-offset-4">{hotel.phone}</a>
            </div>
            <div className="py-5">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-black/40">Email</p>
              <a href={`mailto:${hotel.email}`} className="mt-2 block font-bold text-[#4338CA] underline underline-offset-4">{hotel.email}</a>
            </div>
            <div className="py-5">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-black/40">{t.footer.hours}</p>
              {hotel.timings[lang].map((tm) => (
                <p key={tm.days} className="mt-2 text-sm"><span className="font-bold">{tm.days}:</span> {tm.hours}</p>
              ))}
            </div>
          </div>
          <p className="mt-5 bg-[#1A1A1A] px-5 py-4 text-sm font-bold text-white">{t.misc.emergency}: <a href={`tel:${hotel.phoneRaw}`} className="text-[#8B84F0] underline">{hotel.phone}</a></p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <NumberedHead num="02" title={t.sections.visitTitle} sub={t.sections.visitSub} />
        <MapBlock />
      </section>
    </main>
  );
}
