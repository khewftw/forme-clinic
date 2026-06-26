import Image from "next/image";
import type { SurgeonReview } from "./types";

type SurgeonReviewCardProps = {
  review: SurgeonReview;
};

export function SurgeonReviewCard({ review }: SurgeonReviewCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#dfe8eb] p-5 shadow-[0_8px_30px_rgba(56,149,167,0.08)] sm:p-6">
      <div className="grid grid-cols-[minmax(0,1fr)_88px] gap-4 sm:grid-cols-[minmax(0,1fr)_100px] sm:gap-5">
        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
            Пациент
          </p>
          <p className="mt-1 text-sm font-semibold text-ink">{review.patient}</p>
          <p className="text-sm text-muted">{review.date}</p>

          <div className="mt-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              Специалист
            </p>
            <a
              href={review.doctorHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-base font-semibold text-brand transition hover:text-brand-dark hover:underline"
            >
              {review.doctorShort}
            </a>
            <a
              href={review.departmentHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm text-muted transition hover:text-brand"
            >
              {review.department}
            </a>
          </div>
        </div>

        <div className="flex justify-end">
          <a
            href={review.doctorHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block shrink-0"
          >
            <Image
              src={review.image}
              alt={review.doctorName}
              width={100}
              height={100}
              className="h-[88px] w-[88px] rounded-full object-cover shadow-[0_8px_24px_rgba(31,31,31,0.12)] ring-4 ring-white sm:h-[100px] sm:w-[100px]"
            />
          </a>
        </div>
      </div>

      <hr className="my-5 border-ink/10" />
      <p className="text-sm leading-7 text-ink/85">{review.text}</p>
    </article>
  );
}
