"use client";

import { useCallback, useEffect, useState } from "react";
import { CarouselArrows } from "@/components/ui/CarouselArrows";
import { SurgeonReviewCard } from "./SurgeonReviewCard";
import type { SurgeonReview } from "./types";

type SurgeonReviewsCarouselProps = {
  reviews: SurgeonReview[];
};

function getSlidesPerView(width: number) {
  if (width >= 1280) return 3;
  if (width >= 768) return 2;
  return 1;
}

export function SurgeonReviewsCarousel({ reviews }: SurgeonReviewsCarouselProps) {
  const [page, setPage] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const update = () => setSlidesPerView(getSlidesPerView(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pageCount = Math.max(1, Math.ceil(reviews.length / slidesPerView));
  const activePage = Math.min(page, pageCount - 1);

  const goTo = useCallback(
    (next: number) => {
      setPage(Math.max(0, Math.min(next, pageCount - 1)));
    },
    [pageCount],
  );

  const visible = reviews.slice(
    activePage * slidesPerView,
    activePage * slidesPerView + slidesPerView,
  );

  return (
    <div className="mt-14 border-t border-ink/8 pt-12">
      <div className="mb-8 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
          О специалистах
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
          Отзывы о хирургах программы
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
          Реальные истории пациенток, которые доверили маммопластику нашим
          хирургам.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((review) => (
          <SurgeonReviewCard key={`${review.patient}-${review.date}`} review={review} />
        ))}
      </div>

      {pageCount > 1 ? (
        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <CarouselArrows
            onPrev={() => goTo(activePage <= 0 ? pageCount - 1 : activePage - 1)}
            onNext={() => goTo(activePage >= pageCount - 1 ? 0 : activePage + 1)}
          />

          <ul className="flex flex-wrap justify-center gap-2" role="tablist">
            {Array.from({ length: pageCount }, (_, index) => (
              <li key={index}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activePage === index}
                  aria-label={`Слайд ${index + 1}`}
                  onClick={() => goTo(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    activePage === index ? "bg-brand" : "bg-ink/15 hover:bg-ink/25"
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
