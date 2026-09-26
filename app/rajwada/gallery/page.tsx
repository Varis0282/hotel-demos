"use client";

import { useLang } from "@/lib/lang";
import { hotel, img } from "@/lib/config";
import { PageHero, SectionHead, ReviewGrid, CTABand } from "../_ui";

export default function Gallery() {
  const { t } = useLang();
  const all = [img.heroAlt, ...img.gallery, img.about, img.corridor];
  return (
    <main>
      <PageHero eyebrow="Gallery" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid grid-cols-2 gap-px bg-[#EFE7DA]/10 md:grid-cols-3">
          {all.map((g, i) => (
            <img key={g + i} src={g} alt={`${hotel.name} photo ${i + 1}`} className="aspect-[4/3] w-full object-cover grayscale transition duration-500 hover:grayscale-0" />
          ))}
        </div>
      </section>
      <section className="border-t border-[#EFE7DA]/10 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead center eyebrow="Guests" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <ReviewGrid />
        </div>
      </section>
      <CTABand />
    </main>
  );
}
