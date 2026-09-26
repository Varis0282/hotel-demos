"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, MapPin, Mail, ChevronDown, Star, Menu, X } from "lucide-react";
import { useLang } from "@/lib/lang";
import { hotel, img } from "@/lib/config";
import { stats, faqs, reviews } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const ACCENT = "#0F5E63";
export const BRASS = "#B98A2F";

export function useNavLinks() {
  const { t } = useLang();
  return [
    { href: "/haveli", label: t.nav.home },
    { href: "/haveli/about", label: t.nav.about },
    { href: "/haveli/rooms", label: t.nav.rooms },
    { href: "/haveli/amenities", label: t.nav.amenities },
    { href: "/haveli/gallery", label: t.nav.gallery },
    { href: "/haveli/contact", label: t.nav.contact },
  ];
}

export function Nav() {
  const { t, lang } = useLang();
  const links = useNavLinks();
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-[#0F5E63] px-4 py-2 text-xs text-white/90 sm:text-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-4">
          <a href={`tel:${hotel.phoneRaw}`} className="flex items-center gap-1.5 font-semibold"><Phone className="h-3.5 w-3.5" />{hotel.phone}</a>
          <span className="hidden items-center gap-1.5 md:flex"><MapPin className="h-3.5 w-3.5" />{hotel.distance} {lang === "en" ? "from Mahakal Temple" : "महाकाल मंदिर से"}</span>
          <span className="ml-auto flex items-center gap-3">
            <Link href="/" className="opacity-75 hover:opacity-100">← All demos</Link>
            <LangToggle className="rounded-full border border-white/40 px-3 py-0.5 font-bold hover:bg-white/10" />
          </span>
        </div>
      </div>
      <div className="border-b border-[#E5DFD2] bg-[#FBF9F4]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3">
          <Link href="/haveli" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F5E63] font-[family-name:var(--font-lora)] text-xl font-bold text-[#F4D793]">K</span>
            <span className="font-[family-name:var(--font-lora)] text-lg font-bold leading-tight text-[#0F5E63]">{lang === "en" ? hotel.name : hotel.nameHi}</span>
          </Link>
          <nav className="ml-auto hidden items-center gap-5 lg:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={`text-sm font-semibold transition hover:text-[#0F5E63] ${path === l.href ? "text-[#0F5E63] underline underline-offset-8 decoration-[#B98A2F] decoration-2" : "text-[#5B615F]"}`}>{l.label}</Link>
            ))}
            <Link href="/haveli/contact" className="rounded-lg bg-[#B98A2F] px-5 py-2.5 text-sm font-bold text-white shadow transition hover:brightness-110">{t.nav.book}</Link>
          </nav>
          <button onClick={() => setOpen(!open)} className="ml-auto text-[#0F5E63] lg:hidden" aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <nav className="border-t border-[#E5DFD2] px-4 py-3 lg:hidden">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2.5 font-semibold text-[#3C4442]">{l.label}</Link>
            ))}
            <Link href="/haveli/contact" onClick={() => setOpen(false)} className="mt-2 block rounded-lg bg-[#B98A2F] px-5 py-2.5 text-center font-bold text-white">{t.nav.book}</Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub, light }: { eyebrow?: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow && <p className={`mb-2 text-xs font-bold uppercase tracking-[0.25em] ${light ? "text-[#F4D793]" : "text-[#B98A2F]"}`}>{eyebrow}</p>}
      <h2 className={`font-[family-name:var(--font-lora)] text-3xl font-bold md:text-4xl ${light ? "text-white" : "text-[#0F5E63]"}`}>{title}</h2>
      {sub && <p className={`mt-3 ${light ? "text-white/75" : "text-[#5B615F]"}`}>{sub}</p>}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="bg-[#0F5E63]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.en} className="text-center">
          <p className="font-[family-name:var(--font-lora)] text-3xl font-bold text-[#F4D793] md:text-4xl">{s.value}</p>
          <p className="mt-1 text-sm text-white/80">{lang === "en" ? s.en : s.hi}</p>
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
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-[#B98A2F] text-[#B98A2F]" : "text-[#D8D2C4]"}`} />
      ))}
    </span>
  );
}

export function ReviewGrid({ limit }: { limit?: number }) {
  const { lang } = useLang();
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {reviews.slice(0, limit ?? reviews.length).map((r) => (
        <figure key={r.name} className="rounded-xl border border-[#E5DFD2] bg-white p-6 shadow-sm">
          <Stars n={r.stars} />
          <blockquote className="mt-3 text-[#3C4442]">“{lang === "en" ? r.en : r.hi}”</blockquote>
          <figcaption className="mt-4 border-t border-[#EFEAE0] pt-3">
            <p className="font-bold text-[#0F5E63]">{r.name}</p>
            <p className="text-sm text-[#8A8F8C]">{r.area}</p>
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
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => (
        <div key={i} className="overflow-hidden rounded-xl border border-[#E5DFD2] bg-white">
          <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-[#0F5E63]">
            {f[lang].q}
            <ChevronDown className={`h-5 w-5 shrink-0 transition ${openIdx === i ? "rotate-180" : ""}`} />
          </button>
          {openIdx === i && <p className="px-5 pb-5 text-[#5B615F]">{f[lang].a}</p>}
        </div>
      ))}
    </div>
  );
}

export function MapBlock() {
  const { t } = useLang();
  return (
    <div className="overflow-hidden rounded-xl border border-[#E5DFD2] bg-white shadow-sm">
      <iframe src={hotel.mapEmbed} className="h-72 w-full md:h-96" loading="lazy" title="Map" />
      <div className="flex flex-wrap items-center gap-4 px-5 py-4">
        <p className="flex items-center gap-2 text-sm text-[#3C4442]"><MapPin className="h-4 w-4 text-[#B98A2F]" />{hotel.address}</p>
        <a href={hotel.mapLink} target="_blank" rel="noopener noreferrer" className="ml-auto rounded-lg bg-[#0F5E63] px-4 py-2 text-sm font-bold text-white hover:brightness-110">{t.misc.getDirections}</a>
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-[#0F5E63]">
      <img src={img.cta} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="font-[family-name:var(--font-lora)] text-3xl font-bold text-white md:text-4xl">{t.sections.ctaTitle}</h2>
        <p className="mt-3 text-white/80">{t.sections.ctaSub}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <Link href="/haveli/contact" className="rounded-lg bg-[#B98A2F] px-7 py-3.5 font-bold text-white shadow-lg transition hover:brightness-110">{t.hero.cta1}</Link>
          <a href={`tel:${hotel.phoneRaw}`} className="rounded-lg border-2 border-white/60 px-7 py-3.5 font-bold text-white transition hover:bg-white/10">{t.hero.cta2}</a>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="border-b border-[#E5DFD2] bg-gradient-to-b from-[#EDF4F3] to-[#FBF9F4] px-4 py-14 text-center">
      <h1 className="font-[family-name:var(--font-lora)] text-4xl font-bold text-[#0F5E63] md:text-5xl">{title}</h1>
      {sub && <p className="mx-auto mt-3 max-w-2xl text-[#5B615F]">{sub}</p>}
    </section>
  );
}

export function Footer() {
  const { t, lang } = useLang();
  const links = useNavLinks();
  return (
    <footer className="bg-[#0B3E42] text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <p className="font-[family-name:var(--font-lora)] text-xl font-bold text-[#F4D793]">{lang === "en" ? hotel.name : hotel.nameHi}</p>
          <p className="mt-3 text-sm">{t.footer.tagline}</p>
        </div>
        <div>
          <p className="mb-3 font-bold text-white">{t.footer.quick}</p>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block py-1 text-sm hover:text-[#F4D793]">{l.label}</Link>
          ))}
        </div>
        <div>
          <p className="mb-3 font-bold text-white">{t.footer.contact}</p>
          <p className="flex items-start gap-2 text-sm"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F4D793]" />{lang === "en" ? hotel.address : hotel.addressHi}</p>
          <a href={`tel:${hotel.phoneRaw}`} className="mt-2 flex items-center gap-2 text-sm hover:text-[#F4D793]"><Phone className="h-4 w-4 text-[#F4D793]" />{hotel.phone}</a>
          <a href={`mailto:${hotel.email}`} className="mt-2 flex items-center gap-2 text-sm hover:text-[#F4D793]"><Mail className="h-4 w-4 text-[#F4D793]" />{hotel.email}</a>
        </div>
        <div>
          <p className="mb-3 font-bold text-white">{t.footer.hours}</p>
          {hotel.timings[lang].map((tm) => (
            <p key={tm.days} className="mb-2 text-sm"><span className="font-semibold text-white">{tm.days}:</span><br />{tm.hours}</p>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/50">© {new Date().getFullYear()} {hotel.name}. {t.footer.rights}</div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-2xl border border-[#E5DFD2] bg-white p-6 shadow-md md:p-8",
  label: "mb-1.5 block text-sm font-bold text-[#0F5E63]",
  input: "w-full rounded-lg border border-[#D8D2C4] bg-[#FBF9F4] px-4 py-3 text-[#22292B] outline-none transition focus:border-[#0F5E63] focus:ring-2 focus:ring-[#0F5E63]/20",
  select: "w-full rounded-lg border border-[#D8D2C4] bg-[#FBF9F4] px-4 py-3 text-[#22292B] outline-none transition focus:border-[#0F5E63]",
  submit: "flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-4 text-lg font-bold text-white shadow transition hover:brightness-105",
  success: "rounded-lg bg-emerald-50 px-4 py-3 font-semibold text-emerald-700",
  error: "rounded-lg bg-red-50 px-4 py-3 font-semibold text-red-600",
};
