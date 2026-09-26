"use client";

import { useLang } from "@/lib/lang";
import { img, hotel } from "@/lib/config";
import { PageHero, SectionHead, StatsBand, CTABand } from "../_ui";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <main>
      <PageHero title={a.title} sub={a.sub} />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div className="mx-auto w-full max-w-md overflow-hidden rounded-t-[8rem] rounded-b-3xl border-4 border-[#E8850C] shadow-xl md:order-1">
          <img src={img.about} alt={hotel.name} className="aspect-[3/4] w-full object-cover" />
        </div>
        <div className="space-y-4 text-[#5C4630] md:order-2">
          <p>{a.story1}</p>
          <p>{a.story2}</p>
          <p className="font-bold text-[#8A2E2E]">{a.story3}</p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-[#8A2E2E] to-[#5E1F1F] px-4 py-14 text-center">
        <p className="mx-auto max-w-3xl text-2xl font-extrabold text-[#FFE9C9] md:text-3xl">“{a.mission}”</p>
        <p className="mt-3 text-sm font-bold uppercase tracking-widest text-[#F3CBA5]">{a.missionTitle}</p>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHead eyebrow="Mulya" title={a.missionTitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {a.values.map((v, i) => (
            <div key={v.title} className={`rounded-3xl p-6 ${["bg-[#FDEBD2]", "bg-[#F9E3E0]", "bg-[#E3F2EA]", "bg-[#F7EEDC]"][i % 4]}`}>
              <p className="text-3xl font-extrabold text-[#E8850C]">0{i + 1}</p>
              <h3 className="mt-2 font-extrabold text-[#8A2E2E]">{v.title}</h3>
              <p className="mt-1 text-sm text-[#7A6248]">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <StatsBand />
      <CTABand />
    </main>
  );
}
