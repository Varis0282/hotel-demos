"use client";

import { useLang } from "@/lib/lang";
import { hotel, img } from "@/lib/config";
import { PageHero, NumberedHead, ReviewList, CTABand } from "../_ui";

export default function Gallery() {
  const { t } = useLang();
  const all = [img.hero, ...img.gallery, img.about, img.corridor];
  return (
    <main>
      <PageHero kicker="Gallery" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {all.map((g, i) => (
            <img key={g + i} src={g} alt={`${hotel.name} photo ${i + 1}`} className={`w-full object-cover grayscale-[0.5] transition hover:grayscale-0 ${i % 5 === 0 ? "col-span-2 aspect-[21/10]" : "aspect-[4/3]"}`} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <NumberedHead num="02" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
        <ReviewList />
      </section>
      <CTABand />
    </main>
  );
}
