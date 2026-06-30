import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

type ResultPairProps = {
  before: string;
  after: string;
  caption: string;
  index: number;
};

export function ResultPairCard({ before, after, caption, index }: ResultPairProps) {
  return (
    <article className="group overflow-hidden border border-black/8 bg-white shadow-[0_1px_0_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-[0_18px_50px_rgba(56,149,167,0.14)]">
      <BeforeAfterSlider
        before={after}
        after={before}
        alt={caption}
        className="aspect-square"
        sizes="(min-width: 1280px) 22vw, (min-width: 640px) 44vw, 100vw"
      />
      <div className="border-t border-black/6 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
          Кейс 0{index + 1}
        </p>
        <p className="mt-3 text-sm leading-7 text-ink">{caption}</p>
      </div>
    </article>
  );
}
