"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, MapPin, Mail, ChevronDown, Star, Menu, X, Flame } from "lucide-react";
import { useLang } from "@/lib/lang";
import { hotel, img } from "@/lib/config";
import { stats, faqs, reviews } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" className={`h-3 w-28 ${className}`} aria-hidden>
      <path d="M2 8 Q 12 2, 22 8 T 42 8 T 62 8 T 82 8 T 102 8 T 118 8" fill="none" stroke="#E8850C" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function useNavLinks() {
  const { t } = useLang();
  return [
    { href: "/kesar", label: t.nav.home },
    { href: "/kesar/about", label: t.nav.about },
    { href: "/kesar/rooms", label: t.nav.rooms },
    { href: "/kesar/amenities", label: t.nav.amenities },
    { href: "/kesar/gallery", label: t.nav.gallery },
    { href: "/kesar/contact", label: t.nav.contact },
  ];
}

export function Nav() {
  const { t, lang } = useLang();
  const links = useNavLinks();
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b-4 border-[#E8850C] bg-[#FFF6E9]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-5 px-4 py-3.5">
        <Link href="/kesar" className="flex items-center gap-2.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-[#E8850C] to-[#C2410C] text-white shadow-md"><Flame className="h-5 w-5" /></span>
          <span>
            <span className="block text-lg font-extrabold leading-tight text-[#8A2E2E]">{lang === "en" ? hotel.name : hotel.nameHi}</span>
            <span className="block text-xs font-semibold text-[#B9834C]">{lang === "en" ? "300 m from Mahakal, Ujjain" : "महाकाल से 300 मीटर, उज्जैन"}</span>
          </span>
        </Link>
        <nav className="ml-auto hidden items-center gap-5 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`text-sm font-bold transition hover:text-[#E8850C] ${path === l.href ? "text-[#E8850C]" : "text-[#6B5138]"}`}>{l.label}</Link>
          ))}
          <Link href="/" className="text-xs text-[#B9834C] hover:text-[#8A2E2E]">← All demos</Link>
          <LangToggle className="rounded-full border-2 border-[#E8850C] px-3 py-1 text-xs font-extrabold text-[#E8850C] hover:bg-[#E8850C] hover:text-white" />
          <Link href="/kesar/contact#book" className="rounded-full bg-[#8A2E2E] px-5 py-2.5 text-sm font-bold text-[#FFE9C9] shadow-md transition hover:brightness-110">{t.nav.book}</Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="ml-auto text-[#8A2E2E] lg:hidden" aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="border-t border-[#F3DFC2] px-4 py-3 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2.5 font-bold text-[#6B5138]">{l.label}</Link>
          ))}
          <div className="mt-2 flex items-center gap-3">
            <LangToggle className="rounded-full border-2 border-[#E8850C] px-3 py-1 text-xs font-extrabold text-[#E8850C]" />
            <Link href="/" className="text-xs text-[#B9834C]">← All demos</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow && <p className="mb-2 text-sm font-extrabold uppercase tracking-widest text-[#E8850C]">{eyebrow}</p>}
      <h2 className="text-3xl font-extrabold text-[#8A2E2E] md:text-4xl">{title}</h2>
      <Squiggle className="mx-auto mt-3" />
      {sub && <p className="mt-3 text-[#7A6248]">{sub}</p>}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.en} className={`rounded-t-[3rem] rounded-b-2xl border-2 p-6 text-center ${["border-[#E8850C]/40 bg-[#FDEBD2]", "border-[#8A2E2E]/30 bg-[#F9E3E0]", "border-[#2E7D5B]/30 bg-[#E3F2EA]", "border-[#B9834C]/40 bg-[#F7EEDC]"][i % 4]}`}>
            <p className="text-3xl font-extrabold text-[#8A2E2E] md:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm font-semibold text-[#7A6248]">{lang === "en" ? s.en : s.hi}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-[#E8850C] text-[#E8850C]" : "text-[#E8D8BE]"}`} />
      ))}
    </span>
  );
}

export function ReviewGrid({ limit }: { limit?: number }) {
  const { lang } = useLang();
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {reviews.slice(0, limit ?? reviews.length).map((r, i) => (
        <figure key={r.name} className={`rounded-3xl border-2 border-[#F3DFC2] bg-white p-6 shadow-sm ${i % 2 ? "md:rotate-1" : "md:-rotate-1"} transition hover:rotate-0`}>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-[#E8850C] to-[#C2410C] font-extrabold text-white">{r.name[0]}</span>
            <span>
              <span className="block font-extrabold text-[#8A2E2E]">{r.name}</span>
              <span className="block text-xs text-[#B9834C]">{r.area}</span>
            </span>
          </div>
          <div className="mt-3"><Stars n={r.stars} /></div>
          <blockquote className="mt-2 text-[#5C4630]">“{lang === "en" ? r.en : r.hi}”</blockquote>
        </figure>
      ))}
    </div>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => (
        <div key={i} className="overflow-hidden rounded-2xl border-2 border-[#F3DFC2] bg-white">
          <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-[#8A2E2E]">
            {f[lang].q}
            <ChevronDown className={`h-5 w-5 shrink-0 text-[#E8850C] transition ${openIdx === i ? "rotate-180" : ""}`} />
          </button>
          {openIdx === i && <p className="px-5 pb-5 text-[#7A6248]">{f[lang].a}</p>}
        </div>
      ))}
    </div>
  );
}

export function MapBlock() {
  const { t } = useLang();
  return (
    <div className="overflow-hidden rounded-3xl border-2 border-[#F3DFC2] bg-white">
      <iframe src={hotel.mapEmbed} className="h-72 w-full md:h-96" loading="lazy" title="Map" />
      <div className="flex flex-wrap items-center gap-4 px-5 py-4">
        <p className="flex items-center gap-2 text-sm font-semibold text-[#5C4630]"><MapPin className="h-4 w-4 text-[#E8850C]" />{hotel.address}</p>
        <a href={hotel.mapLink} target="_blank" rel="noopener noreferrer" className="ml-auto rounded-full bg-[#E8850C] px-5 py-2 text-sm font-bold text-white hover:brightness-110">{t.misc.getDirections}</a>
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#8A2E2E] to-[#5E1F1F]">
      <img src={img.temple} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center">
        <Flame className="mx-auto h-9 w-9 text-[#FFB03A]" />
        <h2 className="mt-4 text-3xl font-extrabold text-[#FFE9C9] md:text-4xl">{t.sections.ctaTitle}</h2>
        <p className="mt-3 text-[#F3CBA5]">{t.sections.ctaSub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/kesar/contact#book" className="rounded-full bg-[#E8850C] px-8 py-4 font-extrabold text-white shadow-xl transition hover:scale-105">{t.hero.cta1}</Link>
          <a href={`tel:${hotel.phoneRaw}`} className="rounded-full border-2 border-[#FFE9C9]/60 px-8 py-4 font-bold text-[#FFE9C9] transition hover:bg-white/10">{t.hero.cta2}</a>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden bg-[#FDEBD2] px-4 py-14 text-center">
      <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[#E8850C]/15" aria-hidden />
      <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-[#8A2E2E]/10" aria-hidden />
      <h1 className="relative text-4xl font-extrabold text-[#8A2E2E] md:text-5xl">{title}</h1>
      <Squiggle className="relative mx-auto mt-4" />
      {sub && <p className="relative mx-auto mt-3 max-w-2xl text-[#7A6248]">{sub}</p>}
    </section>
  );
}

export function Footer() {
  const { t, lang } = useLang();
  const links = useNavLinks();
  return (
    <footer className="bg-[#5E1F1F] text-[#F3CBA5]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <p className="text-xl font-extrabold text-[#FFE9C9]">{lang === "en" ? hotel.name : hotel.nameHi}</p>
          <p className="mt-3 text-sm">{t.footer.tagline}</p>
        </div>
        <div>
          <p className="mb-3 font-extrabold text-[#FFE9C9]">{t.footer.quick}</p>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block py-1 text-sm hover:text-[#FFB03A]">{l.label}</Link>
          ))}
        </div>
        <div>
          <p className="mb-3 font-extrabold text-[#FFE9C9]">{t.footer.contact}</p>
          <p className="flex items-start gap-2 text-sm"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB03A]" />{lang === "en" ? hotel.address : hotel.addressHi}</p>
          <a href={`tel:${hotel.phoneRaw}`} className="mt-2 flex items-center gap-2 text-sm hover:text-[#FFB03A]"><Phone className="h-4 w-4 text-[#FFB03A]" />{hotel.phone}</a>
          <a href={`mailto:${hotel.email}`} className="mt-2 flex items-center gap-2 text-sm hover:text-[#FFB03A]"><Mail className="h-4 w-4 text-[#FFB03A]" />{hotel.email}</a>
        </div>
        <div>
          <p className="mb-3 font-extrabold text-[#FFE9C9]">{t.footer.hours}</p>
          {hotel.timings[lang].map((tm) => (
            <p key={tm.days} className="mb-2 text-sm"><span className="font-bold text-[#FFE9C9]">{tm.days}:</span><br />{tm.hours}</p>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-[#D9A98C]">© {new Date().getFullYear()} {hotel.name}. {t.footer.rights}</div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-3xl border-2 border-[#F3DFC2] bg-white p-6 shadow-md md:p-8",
  label: "mb-1.5 block text-sm font-extrabold text-[#8A2E2E]",
  input: "w-full rounded-2xl border-2 border-[#F3DFC2] bg-[#FFF6E9] px-4 py-3 text-[#3A2A1A] outline-none transition focus:border-[#E8850C]",
  select: "w-full rounded-2xl border-2 border-[#F3DFC2] bg-[#FFF6E9] px-4 py-3 text-[#3A2A1A] outline-none transition focus:border-[#E8850C]",
  submit: "flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-lg font-extrabold text-white shadow-lg transition hover:scale-[1.02]",
  success: "rounded-2xl bg-emerald-50 px-4 py-3 font-bold text-emerald-700",
  error: "rounded-2xl bg-red-50 px-4 py-3 font-bold text-red-600",
};
