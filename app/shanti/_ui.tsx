"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Plus, Minus } from "lucide-react";
import { useLang } from "@/lib/lang";
import { hotel, img } from "@/lib/config";
import { stats, faqs, reviews } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const INDIGO = "#4338CA";

export function useNavLinks() {
  const { t } = useLang();
  return [
    { href: "/shanti", label: t.nav.home },
    { href: "/shanti/about", label: t.nav.about },
    { href: "/shanti/rooms", label: t.nav.rooms },
    { href: "/shanti/amenities", label: t.nav.amenities },
    { href: "/shanti/gallery", label: t.nav.gallery },
    { href: "/shanti/contact", label: t.nav.contact },
  ];
}

export function Nav() {
  const { t } = useLang();
  const links = useNavLinks();
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b-2 border-[#1A1A1A] bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-4">
        <Link href="/shanti" className="text-lg font-black uppercase tracking-tight">
          Kesar<span className="text-[#4338CA]">.</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`text-sm font-semibold underline-offset-4 transition hover:underline ${path === l.href ? "text-[#4338CA] underline" : ""}`}>{l.label}</Link>
          ))}
          <Link href="/" className="text-xs text-black/40 hover:text-black/70">← All demos</Link>
          <LangToggle className="border-2 border-[#1A1A1A] px-3 py-1 text-xs font-black hover:bg-[#1A1A1A] hover:text-white" />
          <Link href="/shanti/contact#book" className="bg-[#4338CA] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1A1A1A]">{t.nav.book}</Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="ml-auto lg:hidden" aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="border-t border-black/10 px-4 py-3 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2.5 font-semibold">{l.label}</Link>
          ))}
          <div className="mt-2 flex items-center gap-3">
            <LangToggle className="border-2 border-[#1A1A1A] px-3 py-1 text-xs font-black" />
            <Link href="/" className="text-xs text-black/40">← All demos</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function NumberedHead({ num, title, sub }: { num: string; title: string; sub?: string }) {
  return (
    <div className="mb-10 border-t-2 border-[#1A1A1A] pt-5">
      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
        <p className="text-sm font-black text-[#4338CA]">{num}</p>
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">{title}</h2>
        {sub && <p className="text-black/50 md:ml-auto md:max-w-sm md:text-right">{sub}</p>}
      </div>
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <div className="grid grid-cols-2 border-y-2 border-[#1A1A1A] md:grid-cols-4">
      {stats.map((s, i) => (
        <div key={s.en} className={`px-6 py-8 ${i < 3 ? "md:border-r md:border-black/15" : ""} ${i % 2 === 0 ? "border-r border-black/15 md:border-r" : ""}`}>
          <p className="text-3xl font-black tracking-tight text-[#4338CA] md:text-4xl">{s.value}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-black/50">{lang === "en" ? s.en : s.hi}</p>
        </div>
      ))}
    </div>
  );
}

export function ReviewList({ limit }: { limit?: number }) {
  const { lang } = useLang();
  return (
    <div className="divide-y divide-black/10">
      {reviews.slice(0, limit ?? reviews.length).map((r) => (
        <figure key={r.name} className="grid gap-3 py-7 md:grid-cols-[220px_1fr]">
          <figcaption>
            <p className="font-black">{r.name}</p>
            <p className="text-sm text-black/45">{r.area}</p>
            <p className="mt-1 text-sm font-bold text-[#4338CA]">{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</p>
          </figcaption>
          <blockquote className="text-lg leading-relaxed text-black/75">“{lang === "en" ? r.en : r.hi}”</blockquote>
        </figure>
      ))}
    </div>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {faqs.map((f, i) => (
        <div key={i}>
          <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-bold">
            {f[lang].q}
            {openIdx === i ? <Minus className="h-5 w-5 shrink-0 text-[#4338CA]" /> : <Plus className="h-5 w-5 shrink-0 text-[#4338CA]" />}
          </button>
          {openIdx === i && <p className="max-w-3xl pb-6 text-black/60">{f[lang].a}</p>}
        </div>
      ))}
    </div>
  );
}

export function MapBlock() {
  const { t } = useLang();
  return (
    <div className="border-2 border-[#1A1A1A]">
      <iframe src={hotel.mapEmbed} className="h-72 w-full grayscale md:h-96" loading="lazy" title="Map" />
      <div className="flex flex-wrap items-center gap-4 border-t-2 border-[#1A1A1A] px-5 py-4">
        <p className="text-sm font-semibold">{hotel.address}</p>
        <a href={hotel.mapLink} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-1 font-bold text-[#4338CA] underline underline-offset-4">{t.misc.getDirections}<ArrowUpRight className="h-4 w-4" /></a>
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="bg-[#1A1A1A] text-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[#8B84F0]">{hotel.shortName} · {hotel.city}</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">{t.sections.ctaTitle}</h2>
        <p className="mt-4 max-w-xl text-white/60">{t.sections.ctaSub}</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href="/shanti/contact#book" className="bg-[#4338CA] px-8 py-4 font-bold transition hover:bg-white hover:text-[#1A1A1A]">{t.hero.cta1}</Link>
          <a href={`tel:${hotel.phoneRaw}`} className="border-2 border-white/40 px-8 py-4 font-bold transition hover:border-white">{t.hero.cta2}</a>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-10 pt-16">
      <p className="text-xs font-black uppercase tracking-[0.3em] text-[#4338CA]">{kicker}</p>
      <h1 className="mt-3 max-w-3xl text-5xl font-black tracking-tight md:text-6xl">{title}</h1>
      {sub && <p className="mt-5 max-w-2xl text-lg text-black/55">{sub}</p>}
    </section>
  );
}

export function Footer() {
  const { t, lang } = useLang();
  const links = useNavLinks();
  return (
    <footer className="border-t-2 border-[#1A1A1A] bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <p className="text-2xl font-black uppercase tracking-tight">Kesar<span className="text-[#4338CA]">.</span></p>
          <p className="mt-3 text-sm text-black/55">{t.footer.tagline}</p>
        </div>
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-black/40">{t.footer.quick}</p>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block py-1 text-sm font-semibold underline-offset-4 hover:underline">{l.label}</Link>
          ))}
        </div>
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-black/40">{t.footer.contact}</p>
          <p className="text-sm text-black/70">{lang === "en" ? hotel.address : hotel.addressHi}</p>
          <a href={`tel:${hotel.phoneRaw}`} className="mt-2 block text-sm font-bold text-[#4338CA] underline underline-offset-4">{hotel.phone}</a>
          <a href={`mailto:${hotel.email}`} className="mt-1 block text-sm font-bold text-[#4338CA] underline underline-offset-4">{hotel.email}</a>
        </div>
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-black/40">{t.footer.hours}</p>
          {hotel.timings[lang].map((tm) => (
            <p key={tm.days} className="mb-2 text-sm text-black/70"><span className="font-bold">{tm.days}:</span><br />{tm.hours}</p>
          ))}
        </div>
      </div>
      <div className="border-t border-black/10 px-4 py-4 text-center text-xs text-black/40">© {new Date().getFullYear()} {hotel.name}. {t.footer.rights}</div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-6 border-2 border-[#1A1A1A] p-6 md:p-8",
  label: "mb-1.5 block text-xs font-black uppercase tracking-[0.2em]",
  input: "w-full border-0 border-b-2 border-black/20 bg-transparent px-0 py-2.5 outline-none transition placeholder:text-black/30 focus:border-[#4338CA]",
  select: "w-full border-0 border-b-2 border-black/20 bg-transparent px-0 py-2.5 outline-none transition focus:border-[#4338CA]",
  submit: "flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-4 text-lg font-black text-white transition hover:bg-[#1A1A1A]",
  success: "border-l-4 border-emerald-600 bg-emerald-50 px-4 py-3 font-bold text-emerald-700",
  error: "border-l-4 border-red-600 bg-red-50 px-4 py-3 font-bold text-red-600",
};

export { img };
