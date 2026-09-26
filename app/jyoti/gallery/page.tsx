"use client";

import { useLang } from "@/lib/lang";
import { hotel, img } from "@/lib/config";
import { PageHero, FadeIn, SectionHead, ReviewsMarquee, CTABand } from "../_ui";

export default function Gallery() {
  const { t } = useLang();
  const all = [img.heroAlt, ...img.gallery, img.about, img.corridor];
  return (
    <main>
      <PageHero title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="columns-2 gap-4 md:columns-3 [&>div]:mb-4">
          {all.map((g, i) => (
            <FadeIn key={g + i} delay={(i % 3) * 0.06}>
              <img src={g} alt={`${hotel.name} photo ${i + 1}`} className="w-full break-inside-avoid rounded-2xl border border-white/10 object-cover" />
            </FadeIn>
          ))}
        </div>
      </section>
      <section className="py-14">
        <SectionHead title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
        <ReviewsMarquee />
      </section>
      <CTABand />
    </main>
  );
}
