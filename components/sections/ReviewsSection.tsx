import { AggregateReviews } from "@/components/reviews/AggregateReviews";
import { SurgeonReviewsCarousel } from "@/components/reviews/SurgeonReviewsCarousel";
import { AccentButton } from "@/components/ui/AccentButton";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { leaveReviewHref, surgeonReviews } from "@/lib/site-data";

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-soft px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Отзывы"
          text="Рейтинги с популярных площадок и истории пациентов клиники ForMe."
        />

        <AggregateReviews />

        <SurgeonReviewsCarousel reviews={surgeonReviews} />

        <div className="mt-10">
          <AccentButton
            href={leaveReviewHref}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 px-6 py-3 text-sm tracking-[0.14em]"
          >
            Оставьте ваш отзыв
          </AccentButton>
        </div>
      </div>
    </section>
  );
}
