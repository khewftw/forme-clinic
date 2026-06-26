"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CarouselArrows } from "@/components/ui/CarouselArrows";
import { StarRating } from "@/components/ui/StarRating";
import { leaveReviewHref, platformReviews, reviewPlatforms, reviewsOverall } from "@/lib/site-data";
import { PlatformReviewCard } from "./PlatformReviewCard";
import type { ReviewPlatformId } from "./types";

function getSlidesPerView(width: number) {
  if (width >= 1280) return 3;
  if (width >= 768) return 2;
  return 1;
}

export function AggregateReviews() {
  const [activePlatform, setActivePlatform] = useState<ReviewPlatformId>("all");
  const [page, setPage] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const update = () => setSlidesPerView(getSlidesPerView(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const activeMeta = useMemo(
    () => reviewPlatforms.find((platform) => platform.id === activePlatform) ?? reviewPlatforms[0],
    [activePlatform],
  );

  const filteredReviews = useMemo(
    () =>
      activePlatform === "all"
        ? platformReviews
        : platformReviews.filter((review) => review.platform === activePlatform),
    [activePlatform],
  );

  const pageCount = Math.max(1, Math.ceil(filteredReviews.length / slidesPerView));
  const activePage = Math.min(page, pageCount - 1);

  const visibleReviews = filteredReviews.slice(
    activePage * slidesPerView,
    activePage * slidesPerView + slidesPerView,
  );

  const goTo = useCallback(
    (next: number) => {
      setPage(Math.max(0, Math.min(next, pageCount - 1)));
    },
    [pageCount],
  );

  const handlePlatformChange = (platformId: ReviewPlatformId) => {
    setActivePlatform(platformId);
    setPage(0);
  };

  const overallRating = Number(activeMeta?.rating ?? reviewsOverall.rating);
  const overallCount = activeMeta?.count ?? reviewsOverall.count;

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-[0_10px_40px_rgba(31,31,31,0.06)] ring-1 ring-black/[0.04] sm:p-3">
        <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reviewPlatforms.map((platform) => {
            const isActive = platform.id === activePlatform;

            return (
              <button
                key={platform.id}
                type="button"
                onClick={() => handlePlatformChange(platform.id)}
                className={`flex min-w-[132px] shrink-0 flex-col items-center gap-2 rounded-xl px-3 py-3 text-center transition sm:min-w-[148px] sm:px-4 ${
                  isActive
                    ? "bg-soft text-ink shadow-sm ring-1 ring-brand/15"
                    : "text-muted hover:bg-soft/70 hover:text-ink"
                }`}
              >
                <Image
                  src={platform.logo}
                  alt=""
                  width={platform.id === "all" ? 88 : 72}
                  height={24}
                  className="h-6 w-auto object-contain"
                  unoptimized
                />
                {platform.label ? (
                  <span className="text-[11px] font-medium leading-tight">{platform.label}</span>
                ) : null}
                <span className="text-sm font-semibold text-ink">{platform.rating}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-5 rounded-2xl bg-white px-5 py-5 shadow-[0_10px_40px_rgba(31,31,31,0.06)] ring-1 ring-black/[0.04] sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-6">
        <div>
          <p className="text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-3xl">
            {overallRating}{" "}
            <span className="text-lg font-medium text-muted sm:text-xl">из 5</span>
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <StarRating rating={overallRating} size="md" />
            <p className="text-sm text-muted">
              На основе{" "}
              <span className="font-medium text-ink">
                {overallCount.toLocaleString("ru-RU")}
              </span>{" "}
              оценок
            </p>
          </div>
        </div>

        <a
          href={activeMeta?.reviewUrl ?? leaveReviewHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center self-start rounded-full border border-ink/12 bg-white px-6 py-2.5 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand sm:self-auto"
        >
          Оставить отзыв
        </a>
      </div>

      <div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleReviews.map((review) => (
            <PlatformReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <CarouselArrows
            onPrev={() => goTo(activePage <= 0 ? pageCount - 1 : activePage - 1)}
            onNext={() => goTo(activePage >= pageCount - 1 ? 0 : activePage + 1)}
          />

          {pageCount > 1 ? (
            <ul className="flex flex-wrap justify-center gap-2" role="tablist">
              {Array.from({ length: pageCount }, (_, index) => (
                <li key={index}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activePage === index}
                    aria-label={`Страница ${index + 1}`}
                    onClick={() => goTo(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      activePage === index ? "bg-brand" : "bg-ink/15 hover:bg-ink/25"
                    }`}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <span className="hidden sm:block" aria-hidden="true" />
          )}
        </div>
      </div>
    </div>
  );
}
