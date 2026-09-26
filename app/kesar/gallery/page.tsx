"use client";

import { useLang } from "@/lib/lang";
import { hotel, img } from "@/lib/config";
import { PageHero, SectionHead, ReviewGrid, CTABand } from "../_ui";

export default function Gallery() {
  const { t } = useLang();
  const all = [img.temple, ...img.gallery, img.about, img.corridor];
  return (
    <main>
      <PageHero title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {all.map((g, i) => (
            <img key={g + i} src={g} alt={`${hotel.name} photo ${i + 1}`} className={`aspect-[4/3] w-full object-cover shadow-sm ${i % 3 === 0 ? "rounded-t-[4rem] rounded-b-2xl" : i % 3 === 1 ? "rounded-2xl" : "rounded-b-[3rem] rounded-t-2xl"}`} />
          ))}
        </div>
      </section>
      <section className="bg-[#FDEBD2] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <ReviewGrid />
        </div>
      </section>
      <CTABand />
    </main>
  );
}
