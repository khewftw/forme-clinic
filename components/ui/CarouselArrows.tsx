function SlidenavIcon({ direction }: { direction: "previous" | "next" }) {
  if (direction === "previous") {
    return (
      <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="2" d="M7.6 1 1.8 6.9l5.8 6" />
        <path fill="currentColor" fillRule="evenodd" d="M3.2 6h16v2H3.2z" clipRule="evenodd" />
      </svg>
    );
  }

  return (
    <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeWidth="2" d="M12.4 1l5.8 5.9-5.8 6" />
      <path fill="currentColor" fillRule="evenodd" d="M.8 6h16v2H.8z" clipRule="evenodd" />
    </svg>
  );
}

type CarouselArrowsProps = {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
};

export function CarouselArrows({ onPrev, onNext, className = "" }: CarouselArrowsProps) {
  return (
    <div className={`inline-flex bg-white shadow-sm ring-1 ring-black/5 ${className}`}>
      <button
        type="button"
        onClick={onPrev}
        aria-label="Предыдущий слайд"
        className="flex h-11 w-11 items-center justify-center text-ink transition hover:bg-black/5 sm:h-12 sm:w-12"
      >
        <SlidenavIcon direction="previous" />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Следующий слайд"
        className="flex h-11 w-11 items-center justify-center text-ink transition hover:bg-black/5 sm:h-12 sm:w-12"
      >
        <SlidenavIcon direction="next" />
      </button>
    </div>
  );
}
