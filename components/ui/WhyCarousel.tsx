"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { whySlides } from "@/lib/site-data";

function SlidenavIcon({ direction }: { direction: "previous" | "next" }) {
  if (direction === "previous") {
    return (
      <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
        <path fill="none" stroke="#000" strokeWidth="2" d="M7.6 1 1.8 6.9l5.8 6" />
        <path fill="#000" fillRule="evenodd" d="M3.2 6h16v2H3.2z" clipRule="evenodd" />
      </svg>
    );
  }

  return (
    <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
      <path fill="none" stroke="#000" strokeWidth="2" d="M12.4 1l5.8 5.9-5.8 6" />
      <path fill="#000" fillRule="evenodd" d="M.8 6h16v2H.8z" clipRule="evenodd" />
    </svg>
  );
}

export function WhyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = whySlides.length;

  const goToPrev = useCallback(() => {
    setActiveIndex((index) => (index - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const goToNext = useCallback(() => {
    setActiveIndex((index) => (index + 1) % slideCount);
  }, [slideCount]);

  return (
    <div className="relative min-h-[520px] w-full overflow-hidden bg-[#dfe8eb] sm:aspect-[16/9] sm:min-h-[480px] lg:min-h-[600px]">
      <div className="absolute inset-0" aria-live="polite">
        {whySlides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                isActive ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"
              }`}
              aria-hidden={!isActive}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} из ${slideCount}`}
            >
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="object-cover"
              />

              <div
                className="why-slide-blur absolute inset-0 sm:inset-y-0 sm:left-0 sm:w-[62%] sm:rounded-none lg:w-[56%]"
                aria-hidden="true"
              />

              <div className="absolute inset-0 z-10 flex items-start px-5 pt-6 pb-24 sm:items-center sm:px-10 sm:pb-0 sm:pt-0 lg:px-12">
                <div className="max-w-lg">
                  <h3 className="text-[1.65rem] font-semibold leading-[1.15] tracking-[-0.04em] text-ink sm:text-4xl lg:text-[2.5rem]">
                    {slide.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-ink/85 sm:mt-5 sm:text-lg sm:leading-8">
                    {slide.content.map((line, lineIndex) => (
                      <span key={line}>
                        {lineIndex > 0 ? <br /> : null}
                        {line}
                      </span>
                    ))}
                  </p>
                  <a
                    href={slide.href}
                    className="mt-6 inline-flex min-h-10 items-center justify-center bg-[#2f2f2f] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-ink sm:mt-8"
                  >
                    {slide.cta}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-4 left-5 z-20 flex bg-white sm:hidden">
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Предыдущий слайд"
          className="flex h-11 w-11 items-center justify-center transition hover:bg-black/5"
        >
          <SlidenavIcon direction="previous" />
        </button>
        <button
          type="button"
          onClick={goToNext}
          aria-label="Следующий слайд"
          className="flex h-11 w-11 items-center justify-center transition hover:bg-black/5"
        >
          <SlidenavIcon direction="next" />
        </button>
      </div>

      <div className="absolute bottom-4 left-4 z-20 hidden bg-white sm:flex">
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Предыдущий слайд"
          className="flex h-11 w-11 items-center justify-center transition hover:bg-black/5 sm:h-12 sm:w-12"
        >
          <SlidenavIcon direction="previous" />
        </button>
        <button
          type="button"
          onClick={goToNext}
          aria-label="Следующий слайд"
          className="flex h-11 w-11 items-center justify-center transition hover:bg-black/5 sm:h-12 sm:w-12"
        >
          <SlidenavIcon direction="next" />
        </button>
      </div>
    </div>
  );
}
