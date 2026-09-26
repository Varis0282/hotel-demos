"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, MapPin, Mail, Star, Menu, X, Plus, Minus } from "lucide-react";
import { useLang } from "@/lib/lang";
import { hotel, img } from "@/lib/config";
import { stats, faqs, reviews } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const COPPER = "#C77B3F";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-[#C77B3F]">
      <span className="h-px w-10 bg-[#C77B3F]" />{children}
    </p>
  );
}

export function useNavLinks() {
  const { t } = useLang();
  return [
    { href: "/rajwada", label: t.nav.home },
    { href: "/rajwada/about", label: t.nav.about },
    { href: "/rajwada/rooms", label: t.nav.rooms },
    { href: "/rajwada/amenities", label: t.nav.amenities },
    { href: "/rajwada/gallery", label: t.nav.gallery },
    { href: "/rajwada/contact", label: t.nav.contact },
  ];
}

export function Nav() {
  const { t, lang } = useLang();
  const links = useNavLinks();
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-[#EFE7DA]/10 bg-[#12100C]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-4">
        <Link href="/rajwada" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center border border-[#C77B3F] font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[#C77B3F]">K</span>
          <span className="font-[family-name:var(--font-cormorant)] text-xl font-semibold tracking-wide">{lang === "en" ? hotel.name : hotel.nameHi}</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`text-xs font-semibold uppercase tracking-[0.2em] transition hover:text-[#C77B3F] ${path === l.href ? "text-[#C77B3F]" : "text-[#EFE7DA]/60"}`}>{l.label}</Link>
          ))}
          <Link href="/" className="text-[11px] uppercase tracking-widest text-[#EFE7DA]/35 hover:text-[#EFE7DA]/70">← All demos</Link>
          <LangToggle className="border border-[#EFE7DA]/25 px-3 py-1 text-xs font-bold hover:border-[#C77B3F] hover:text-[#C77B3F]" />
          <Link href="/rajwada/contact#book" className="border border-[#C77B3F] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#C77B3F] transition hover:bg-[#C77B3F] hover:text-[#12100C]">{t.nav.book}</Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="ml-auto lg:hidden" aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="border-t border-[#EFE7DA]/10 px-4 py-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2.5 text-sm font-semibold uppercase tracking-widest text-[#EFE7DA]/80">{l.label}</Link>
          ))}
          <div className="mt-3 flex items-center gap-4">
            <LangToggle className="border border-[#EFE7DA]/25 px-3 py-1 text-xs font-bold" />
            <Link href="/" className="text-[11px] uppercase tracking-widest text-[#EFE7DA]/35">← All demos</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub, center }: { eyebrow: string; title: string; sub?: string; center?: boolean }) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <div className={center ? "flex justify-center" : ""}><Eyebrow>{eyebrow}</Eyebrow></div>
      <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-semibold md:text-5xl">{title}</h2>
      {sub && <p className="mt-3 text-[#EFE7DA]/55">{sub}</p>}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="border-y border-[#EFE7DA]/10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-[#EFE7DA]/10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.en} className="bg-[#12100C] px-6 py-10 text-center">
            <p className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-[#C77B3F] md:text-5xl">{s.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#EFE7DA]/50">{lang === "en" ? s.en : s.hi}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <span className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-3.5 w-3.5 ${i <= n ? "fill-[#C77B3F] text-[#C77B3F]" : "text-[#EFE7DA]/20"}`} />
      ))}
    </span>
  );
}

export function ReviewGrid({ limit }: { limit?: number }) {
  const { lang } = useLang();
  return (
    <div className="grid gap-px bg-[#EFE7DA]/10 md:grid-cols-3">
      {reviews.slice(0, limit ?? reviews.length).map((r) => (
        <figure key={r.name} className="bg-[#12100C] p-8">
          <Stars n={r.stars} />
          <blockquote className="mt-4 font-[family-name:var(--font-cormorant)] text-lg italic text-[#EFE7DA]/85">“{lang === "en" ? r.en : r.hi}”</blockquote>
          <figcaption className="mt-5 border-t border-[#EFE7DA]/10 pt-4">
            <p className="text-sm font-bold uppercase tracking-widest text-[#C77B3F]">{r.name}</p>
            <p className="mt-1 text-xs text-[#EFE7DA]/40">{r.area}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-[#EFE7DA]/10 border-y border-[#EFE7DA]/10">
      {faqs.map((f, i) => (
        <div key={i}>
          <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left font-[family-name:var(--font-cormorant)] text-xl font-semibold">
            {f[lang].q}
            {openIdx === i ? <Minus className="h-4 w-4 shrink-0 text-[#C77B3F]" /> : <Plus className="h-4 w-4 shrink-0 text-[#C77B3F]" />}
          </button>
          {openIdx === i && <p className="pb-5 text-[#EFE7DA]/60">{f[lang].a}</p>}
        </div>
      ))}
    </div>
  );
}

export function MapBlock() {
  const { t } = useLang();
  return (
    <div className="border border-[#EFE7DA]/10">
      <iframe src={hotel.mapEmbed} className="h-72 w-full grayscale invert-[0.92] md:h-96" loading="lazy" title="Map" />
      <div className="flex flex-wrap items-center gap-4 border-t border-[#EFE7DA]/10 px-6 py-5">
        <p className="flex items-center gap-2 text-sm text-[#EFE7DA]/60"><MapPin className="h-4 w-4 text-[#C77B3F]" />{hotel.address}</p>
        <a href={hotel.mapLink} target="_blank" rel="noopener noreferrer" className="ml-auto border border-[#C77B3F] px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C77B3F] transition hover:bg-[#C77B3F] hover:text-[#12100C]">{t.misc.getDirections}</a>
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden border-t border-[#EFE7DA]/10">
      <img src={img.cta} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale" />
      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#C77B3F]">{hotel.shortName} · {hotel.city}</p>
        <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-semibold md:text-5xl">{t.sections.ctaTitle}</h2>
        <p className="mt-4 text-[#EFE7DA]/60">{t.sections.ctaSub}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/rajwada/contact#book" className="bg-[#C77B3F] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#12100C] transition hover:brightness-110">{t.hero.cta1}</Link>
          <a href={`tel:${hotel.phoneRaw}`} className="border border-[#EFE7DA]/30 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] transition hover:border-[#EFE7DA]">{t.hero.cta2}</a>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ title, sub, eyebrow }: { title: string; sub?: string; eyebrow: string }) {
  return (
    <section className="border-b border-[#EFE7DA]/10 px-4 py-16 text-center">
      <div className="flex justify-center"><Eyebrow>{eyebrow}</Eyebrow></div>
      <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl font-semibold md:text-6xl">{title}</h1>
      {sub && <p className="mx-auto mt-4 max-w-2xl text-[#EFE7DA]/55">{sub}</p>}
    </section>
  );
}

export function Footer() {
  const { t, lang } = useLang();
  const links = useNavLinks();
  return (
    <footer className="border-t border-[#EFE7DA]/10 bg-[#0C0A07]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <p className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#C77B3F]">{lang === "en" ? hotel.name : hotel.nameHi}</p>
          <p className="mt-3 text-sm text-[#EFE7DA]/50">{t.footer.tagline}</p>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#EFE7DA]/80">{t.footer.quick}</p>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block py-1 text-sm text-[#EFE7DA]/50 hover:text-[#C77B3F]">{l.label}</Link>
          ))}
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#EFE7DA]/80">{t.footer.contact}</p>
          <p className="flex items-start gap-2 text-sm text-[#EFE7DA]/50"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C77B3F]" />{lang === "en" ? hotel.address : hotel.addressHi}</p>
          <a href={`tel:${hotel.phoneRaw}`} className="mt-2 flex items-center gap-2 text-sm text-[#EFE7DA]/50 hover:text-[#C77B3F]"><Phone className="h-4 w-4 text-[#C77B3F]" />{hotel.phone}</a>
          <a href={`mailto:${hotel.email}`} className="mt-2 flex items-center gap-2 text-sm text-[#EFE7DA]/50 hover:text-[#C77B3F]"><Mail className="h-4 w-4 text-[#C77B3F]" />{hotel.email}</a>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#EFE7DA]/80">{t.footer.hours}</p>
          {hotel.timings[lang].map((tm) => (
            <p key={tm.days} className="mb-2 text-sm text-[#EFE7DA]/50"><span className="font-semibold text-[#EFE7DA]/80">{tm.days}:</span><br />{tm.hours}</p>
          ))}
        </div>
      </div>
      <div className="border-t border-[#EFE7DA]/10 px-4 py-4 text-center text-xs text-[#EFE7DA]/30">© {new Date().getFullYear()} {hotel.name}. {t.footer.rights}</div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 border border-[#EFE7DA]/15 bg-[#0C0A07] p-6 md:p-8",
  label: "mb-1.5 block text-xs font-bold uppercase tracking-[0.2em] text-[#C77B3F]",
  input: "w-full border border-[#EFE7DA]/20 bg-[#12100C] px-4 py-3 text-[#EFE7DA] outline-none transition [color-scheme:dark] placeholder:text-[#EFE7DA]/25 focus:border-[#C77B3F]",
  select: "w-full border border-[#EFE7DA]/20 bg-[#12100C] px-4 py-3 text-[#EFE7DA] outline-none transition focus:border-[#C77B3F]",
  submit: "flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:brightness-110",
  success: "border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 font-semibold text-emerald-300",
  error: "border border-red-500/40 bg-red-500/10 px-4 py-3 font-semibold text-red-300",
};
