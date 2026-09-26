import Link from "next/link";

const themes = [
  { href: "/haveli", name: "Haveli", tag: "Classic Trust", desc: "Ivory and peacock teal with brass accents — the timeless hotel site every family trusts at first glance.", dots: ["#FBF9F4", "#0F5E63", "#B98A2F", "#1A1A1A"], chrome: "#0F5E63" },
  { href: "/jyoti", name: "Jyoti", tag: "Modern Animated", desc: "Midnight tones with amber diya-glow gradients, glass cards and scroll animations — a stay that feels like an experience.", dots: ["#150E1F", "#FFB03A", "#FF6B6B", "#F5EFFF"], chrome: "#150E1F" },
  { href: "/kesar", name: "Kesar", tag: "Warm Devotional", desc: "Saffron warmth, temple arches and marigold touches — built around the yatra, done tastefully.", dots: ["#FFF6E9", "#E8850C", "#8A2E2E", "#2B1E12"], chrome: "#E8850C" },
  { href: "/rajwada", name: "Rajwada", tag: "Heritage Luxury", desc: "Near-black with copper and ivory serifs — palace-stay luxury for the premium traveller.", dots: ["#12100C", "#C77B3F", "#EFE7DA", "#5A4632"], chrome: "#12100C" },
  { href: "/shanti", name: "Shanti", tag: "Minimal Editorial", desc: "White space, big type and one indigo accent — calm, modern and effortless to read.", dots: ["#FFFFFF", "#1A1A1A", "#4338CA", "#9CA3AF"], chrome: "#4338CA" },
];

const features = [
  "Room availability on WhatsApp",
  "Hindi / English toggle",
  "Rooms & tariff pages",
  "Bhasma Aarti assistance highlighted",
  "Guest reviews & gallery",
  "Google Maps + tel links",
];

export default function Showcase() {
  return (
    <main className="min-h-screen bg-[#0B0D10] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-amber-400">Live demo showcase</p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
          One hotel. <span className="bg-gradient-to-r from-amber-300 to-rose-400 bg-clip-text text-transparent">Five completely different websites.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/70">
          Every demo below is a complete, working website for the same hotel — same rooms, same features. You simply pick the design you love, we put your name on it.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {features.map((f) => (
            <span key={f} className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80">{f}</span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {themes.map((tTheme) => (
            <Link key={tTheme.href} href={tTheme.href} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/25 hover:bg-white/[0.07]">
              <div className="mb-5 overflow-hidden rounded-xl border border-white/10">
                <div className="flex items-center gap-1.5 bg-[#1A1D22] px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-3 h-2 w-40 rounded bg-white/10" />
                </div>
                <div className="space-y-2 p-4" style={{ background: tTheme.dots[0] }}>
                  <div className="h-3 w-24 rounded" style={{ background: tTheme.chrome }} />
                  <div className="h-2.5 w-4/5 rounded bg-black/20" />
                  <div className="h-2.5 w-3/5 rounded bg-black/10" />
                  <div className="mt-3 h-6 w-28 rounded" style={{ background: tTheme.chrome }} />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold">{tTheme.name}</h2>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">{tTheme.tag}</span>
                <span className="ml-auto flex gap-1.5">
                  {tTheme.dots.map((d) => (
                    <span key={d} className="h-3.5 w-3.5 rounded-full border border-white/20" style={{ background: d }} />
                  ))}
                </span>
              </div>
              <p className="mt-2 text-white/60">{tTheme.desc}</p>
              <p className="mt-4 font-semibold text-amber-300 transition group-hover:translate-x-1">View demo →</p>
            </Link>
          ))}
        </div>

        <p className="mt-16 text-center text-sm text-white/40">Built with Next.js · Ready in 7 days for your hotel</p>
      </div>
    </main>
  );
}
