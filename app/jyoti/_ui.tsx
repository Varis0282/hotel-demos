"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useInView, animate } from "framer-motion";
import { Phone, MapPin, Mail, ChevronDown, Star, Menu, X } from "lucide-react";
import { useLang } from "@/lib/lang";
import { hotel, img } from "@/lib/config";
import { stats, faqs, reviews } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export function Blobs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#FFB03A]/15 blur-[120px]" />
      <div className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-[#FF6B6B]/12 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-[#7C3AED]/15 blur-[120px]" />
    </div>
  );
}

export function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

export function useNavLinks() {
  const { t } = useLang();
  return [
    { href: "/jyoti", label: t.nav.home },
    { href: "/jyoti/about", label: t.nav.about },
    { href: "/jyoti/rooms", label: t.nav.rooms },
    { href: "/jyoti/amenities", label: t.nav.amenities },
    { href: "/jyoti/gallery", label: t.nav.gallery },
    { href: "/jyoti/contact", label: t.nav.contact },
  ];
}

export function Nav() {
  const { t } = useLang();
  const links = useNavLinks();
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-4 z-40 px-4">
      <div className="mx-auto flex max-w-5xl items-center gap-4 rounded-2xl border border-white/10 bg-[#1D1430]/80 px-5 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <Link href="/jyoti" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFB03A] to-[#FF6B6B] text-lg font-extrabold text-[#150E1F]">K</span>
          <span className="hidden font-bold sm:block">{hotel.shortName}</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-4 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`text-sm transition hover:text-[#FFB03A] ${path === l.href ? "font-bold text-[#FFB03A]" : "text-white/70"}`}>{l.label}</Link>
          ))}
          <Link href="/" className="text-xs text-white/40 hover:text-white/70">← All demos</Link>
          <LangToggle className="rounded-full border border-white/20 px-3 py-1 text-xs font-bold hover:bg-white/10" />
          <Link href="/jyoti/contact" className="rounded-full bg-gradient-to-r from-[#FFB03A] to-[#FF6B6B] px-5 py-2 text-sm font-bold text-[#150E1F] shadow-lg shadow-[#FFB03A]/25 transition hover:shadow-[#FFB03A]/40">{t.nav.book}</Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="ml-auto lg:hidden" aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="mx-auto mt-2 max-w-5xl space-y-1 rounded-2xl border border-white/10 bg-[#1D1430]/95 p-4 backdrop-blur-xl lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 font-semibold text-white/85 hover:bg-white/5">{l.label}</Link>
          ))}
          <div className="flex items-center gap-3 px-3 pt-2">
            <LangToggle className="rounded-full border border-white/20 px-3 py-1 text-xs font-bold" />
            <Link href="/" className="text-xs text-white/40">← All demos</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#FFB03A]">{eyebrow}</p>}
      <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-white/60">{sub}</p>}
    </FadeIn>
  );
}

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const numMatch = value.match(/[\d,]+/);
  const suffix = numMatch ? value.slice((numMatch.index ?? 0) + numMatch[0].length) : "";
  const prefix = numMatch ? value.slice(0, numMatch.index) : value;
  const target = numMatch ? parseInt(numMatch[0].replace(/,/g, ""), 10) : 0;
  useEffect(() => {
    if (!inView || !ref.current || !numMatch) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${prefix}${Math.round(v).toLocaleString("en-IN")}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, target, prefix, suffix, numMatch]);
  return <span ref={ref}>{numMatch ? `${prefix}0${suffix}` : value}</span>;
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <FadeIn key={s.en} delay={i * 0.08}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
              <p className="bg-gradient-to-r from-[#FFB03A] to-[#FF6B6B] bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl"><Counter value={s.value} /></p>
              <p className="mt-2 text-sm text-white/60">{lang === "en" ? s.en : s.hi}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-[#FFB03A] text-[#FFB03A]" : "text-white/20"}`} />
      ))}
    </span>
  );
}

export function ReviewsMarquee() {
  const { lang } = useLang();
  const doubled = [...reviews, ...reviews];
  return (
    <div className="group relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused]">
        {doubled.map((r, i) => (
          <figure key={r.name + i} className="w-80 shrink-0 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <Stars n={r.stars} />
            <blockquote className="mt-3 text-sm text-white/80">“{lang === "en" ? r.en : r.hi}”</blockquote>
            <figcaption className="mt-3 text-sm"><span className="font-bold text-[#FFB03A]">{r.name}</span> <span className="text-white/40">· {r.area}</span></figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => (
        <FadeIn key={i} delay={i * 0.05}>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              {f[lang].q}
              <ChevronDown className={`h-5 w-5 shrink-0 text-[#FFB03A] transition ${openIdx === i ? "rotate-180" : ""}`} />
            </button>
            {openIdx === i && <p className="px-5 pb-5 text-white/65">{f[lang].a}</p>}
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

export function MapBlock() {
  const { t } = useLang();
  return (
    <FadeIn>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
        <iframe src={hotel.mapEmbed} className="h-72 w-full invert-[0.9] hue-rotate-180 md:h-96" loading="lazy" title="Map" />
        <div className="flex flex-wrap items-center gap-4 px-5 py-4">
          <p className="flex items-center gap-2 text-sm text-white/70"><MapPin className="h-4 w-4 text-[#FFB03A]" />{hotel.address}</p>
          <a href={hotel.mapLink} target="_blank" rel="noopener noreferrer" className="ml-auto rounded-full bg-gradient-to-r from-[#FFB03A] to-[#FF6B6B] px-5 py-2 text-sm font-bold text-[#150E1F]">{t.misc.getDirections}</a>
        </div>
      </div>
    </FadeIn>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="px-4 py-20">
      <FadeIn className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 p-10 text-center md:p-16">
          <img src={img.cta} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#150E1F]/80 via-[#3B1E4E]/70 to-[#150E1F]/80" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold md:text-4xl">{t.sections.ctaTitle}</h2>
            <p className="mt-3 text-white/70">{t.sections.ctaSub}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/jyoti/contact" className="rounded-full bg-gradient-to-r from-[#FFB03A] to-[#FF6B6B] px-8 py-4 font-bold text-[#150E1F] shadow-xl shadow-[#FFB03A]/30 transition hover:scale-105">{t.hero.cta1}</Link>
              <a href={`tel:${hotel.phoneRaw}`} className="rounded-full border border-white/30 px-8 py-4 font-bold transition hover:bg-white/10">{t.hero.cta2}</a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="px-4 pb-6 pt-16 text-center md:pt-20">
      <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-extrabold md:text-5xl">
        {title}
      </motion.h1>
      {sub && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="mx-auto mt-4 max-w-2xl text-white/60">{sub}</motion.p>}
    </section>
  );
}

export function Footer() {
  const { t, lang } = useLang();
  const links = useNavLinks();
  return (
    <footer className="border-t border-white/10 bg-[#100A18]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <p className="text-xl font-extrabold"><span className="bg-gradient-to-r from-[#FFB03A] to-[#FF6B6B] bg-clip-text text-transparent">{lang === "en" ? hotel.name : hotel.nameHi}</span></p>
          <p className="mt-3 text-sm text-white/55">{t.footer.tagline}</p>
        </div>
        <div>
          <p className="mb-3 font-bold">{t.footer.quick}</p>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block py-1 text-sm text-white/55 hover:text-[#FFB03A]">{l.label}</Link>
          ))}
        </div>
        <div>
          <p className="mb-3 font-bold">{t.footer.contact}</p>
          <p className="flex items-start gap-2 text-sm text-white/55"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB03A]" />{lang === "en" ? hotel.address : hotel.addressHi}</p>
          <a href={`tel:${hotel.phoneRaw}`} className="mt-2 flex items-center gap-2 text-sm text-white/55 hover:text-[#FFB03A]"><Phone className="h-4 w-4 text-[#FFB03A]" />{hotel.phone}</a>
          <a href={`mailto:${hotel.email}`} className="mt-2 flex items-center gap-2 text-sm text-white/55 hover:text-[#FFB03A]"><Mail className="h-4 w-4 text-[#FFB03A]" />{hotel.email}</a>
        </div>
        <div>
          <p className="mb-3 font-bold">{t.footer.hours}</p>
          {hotel.timings[lang].map((tm) => (
            <p key={tm.days} className="mb-2 text-sm text-white/55"><span className="font-semibold text-white/85">{tm.days}:</span><br />{tm.hours}</p>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/35">© {new Date().getFullYear()} {hotel.name}. {t.footer.rights}</div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8",
  label: "mb-1.5 block text-sm font-bold text-[#FFB03A]",
  input: "w-full rounded-xl border border-white/15 bg-[#150E1F]/60 px-4 py-3 text-white outline-none transition [color-scheme:dark] placeholder:text-white/30 focus:border-[#FFB03A] focus:ring-2 focus:ring-[#FFB03A]/20",
  select: "w-full rounded-xl border border-white/15 bg-[#150E1F]/60 px-4 py-3 text-white outline-none transition focus:border-[#FFB03A]",
  submit: "flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-lg font-bold text-white shadow-lg shadow-[#25D366]/25 transition hover:scale-[1.02]",
  success: "rounded-xl bg-emerald-400/15 px-4 py-3 font-semibold text-emerald-300",
  error: "rounded-xl bg-red-400/15 px-4 py-3 font-semibold text-red-300",
};
