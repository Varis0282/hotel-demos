"use client";

import { useLang } from "@/lib/lang";
import { hotel, img } from "@/lib/config";
import { PageHero, ReviewGrid, SectionHead, CTABand } from "../_ui";

export default function Gallery() {
  const { t } = useLang();
  const all = [img.hero, ...img.gallery, img.about, img.corridor];
  return (
    <main>
      <PageHero title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="columns-2 gap-4 md:columns-3 [&>img]:mb-4">
          {all.map((g, i) => (
            <img key={g + i} src={g} alt={`${hotel.name} photo ${i + 1}`} className="w-full break-inside-avoid rounded-xl object-cover shadow-sm" />
          ))}
        </div>
      </section>
      <section className="bg-[#F2EEE3] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <ReviewGrid />
        </div>
      </section>
      <CTABand />
    </main>
  );
}
