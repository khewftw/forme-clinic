type StarRatingProps = {
  rating: number;
  max?: number;
  size?: "sm" | "md";
};

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M5.987 9.42 2.727 11.41a.48.48 0 0 1-.715-.526l.945-3.764L.216 4.988A.48.48 0 0 1 .47 4.13l3.586-.295L5.552.348a.48.48 0 0 1 .883.001l1.483 3.486 3.61.296a.48.48 0 0 1 .255.857L9.031 7.121l.943 3.766a.48.48 0 0 1-.715.527L5.987 9.419z"
      />
    </svg>
  );
}

export function StarRating({ rating, max = 5, size = "sm" }: StarRatingProps) {
  const starClass = size === "md" ? "h-5 w-5" : "h-3.5 w-3.5";

  return (
    <div
      className="inline-flex items-center gap-0.5 text-[#f0b429]"
      role="img"
      aria-label={`Оценка ${rating} из ${max}`}
    >
      {Array.from({ length: max }, (_, index) => {
        const fill = Math.min(1, Math.max(0, rating - index));

        return (
          <span key={index} className={`relative inline-block ${starClass}`}>
            <StarIcon className={`${starClass} text-[#e4e8eb]`} />
            {fill > 0 ? (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <StarIcon className={`${starClass} text-[#f0b429]`} />
              </span>
            ) : null}
          </span>
        );
      })}
    </div>
  );
}
