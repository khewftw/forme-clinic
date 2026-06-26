"use client";

import Image from "next/image";
import { useState } from "react";
import { StarRating } from "@/components/ui/StarRating";
import type { PlatformReview } from "./types";

const defaultAvatar =
  "data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 124 124' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b3b3b3'%3E%3Ccircle cx='62' cy='42' r='28'/%3E%3Cpath d='M0 124h124v-8c-3-18-26-33-62-33S3 98 0 116z'/%3E%3C/g%3E%3C/svg%3E";

type PlatformReviewCardProps = {
  review: PlatformReview;
};

export function PlatformReviewCard({ review }: PlatformReviewCardProps) {
  const [expanded, setExpanded] = useState(false);
  const canExpand = review.text.length > 180;

  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(31,31,31,0.07)] ring-1 ring-black/[0.04] sm:p-6">
      <header className="flex gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-soft">
          <Image
            src={review.avatar ?? defaultAvatar}
            alt={review.user}
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-ink">{review.user}</p>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
            <StarRating rating={review.rating} />
            <time className="text-xs text-muted">{review.date}</time>
          </div>
        </div>
      </header>

      <div className="mt-4 flex-1 text-sm leading-7 text-ink/85">
        {review.title ? (
          <p className="mb-2 font-semibold text-ink">{review.title}</p>
        ) : null}
        <p className={expanded ? "" : "line-clamp-5"}>{review.text}</p>
        {canExpand ? (
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="mt-2 text-sm font-medium text-brand transition hover:text-brand-dark"
          >
            {expanded ? "Свернуть" : "Читать полностью"}
          </button>
        ) : null}
      </div>

      <footer className="mt-5 border-t border-ink/8 pt-4">
        <a
          href={review.sourceHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-brand transition hover:text-brand-dark hover:underline"
        >
          {review.sourceLabel}
        </a>
      </footer>
    </article>
  );
}
