import Image from "next/image";

type ResultPairProps = {
  before: string;
  after: string;
  caption: string;
  index: number;
};

export function ResultPairCard({ before, after, caption, index }: ResultPairProps) {
  return (
    <article className="group overflow-hidden border border-black/8 bg-white shadow-[0_1px_0_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-[0_18px_50px_rgba(56,149,167,0.14)]">
      <div className="relative grid grid-cols-2">
        {[
          { src: before, label: "До" },
          { src: after, label: "После" },
        ].map((image) => (
          <div key={image.label} className="relative aspect-[3/4] overflow-hidden bg-soft">
            <Image
              src={image.src}
              alt={`${image.label}: ${caption}`}
              fill
              sizes="(min-width: 1024px) 16vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
            />
            <span
              className={
                image.label === "До"
                  ? "absolute left-3 top-3 bg-white/92 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink"
                  : "absolute left-3 top-3 bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white"
              }
            >
              {image.label}
            </span>
          </div>
        ))}
        <div
          className="pointer-events-none absolute inset-y-4 left-1/2 w-px -translate-x-1/2 bg-white/80"
          aria-hidden="true"
        />
      </div>
      <div className="border-t border-black/6 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
          Кейс 0{index + 1}
        </p>
        <p className="mt-3 text-sm leading-7 text-ink">{caption}</p>
      </div>
    </article>
  );
}
