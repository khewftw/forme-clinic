"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroCases } from "@/lib/site-data";

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className={direction === "left" ? "mr-px" : "ml-px"}
    >
      <path
        d={direction === "left" ? "M11 4L6 9L11 14" : "M7 4L12 9L7 14"}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroBeforeAfterSlider() {
  const [caseIndex, setCaseIndex] = useState(0);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCase = heroCases[caseIndex];
  const caseCount = heroCases.length;

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(4, Math.min(96, (x / rect.width) * 100));
    setPosition(percent);
  }, []);

  const goToPrevCase = useCallback(() => {
    setCaseIndex((index) => (index - 1 + caseCount) % caseCount);
    setPosition(50);
  }, [caseCount]);

  const goToNextCase = useCallback(() => {
    setCaseIndex((index) => (index + 1) % caseCount);
    setPosition(50);
  }, [caseCount]);

  useEffect(() => {
    if (!isDragging) return;

    const onPointerMove = (event: PointerEvent) => updatePosition(event.clientX);
    const onPointerUp = () => setIsDragging(false);

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <div className="relative min-h-[420px] overflow-hidden bg-soft lg:min-h-[620px]">
      <div
        ref={containerRef}
        className="absolute inset-0 touch-none select-none"
        onPointerDown={(event) => {
          if ((event.target as HTMLElement).closest("[data-case-nav]")) return;
          setIsDragging(true);
          updatePosition(event.clientX);
        }}
      >
        <Image
          key={`${caseIndex}-before`}
          src={currentCase.before}
          alt={`До: ${currentCase.alt}`}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          draggable={false}
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            key={`${caseIndex}-after`}
            src={currentCase.after}
            alt={`После: ${currentCase.alt}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            draggable={false}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.35)]"
          style={{ left: `${position}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/95 shadow-lg">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M7 6L4 10L7 14M13 6L16 10L13 14"
                stroke="#1f1f1f"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <span className="pointer-events-none absolute left-4 top-4 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink">
          До
        </span>
        <span className="pointer-events-none absolute right-4 top-4 bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
          После
        </span>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/20 to-transparent lg:hidden" />

      <div className="absolute bottom-5 left-5 bg-white/95 px-5 py-4 shadow-lg">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">ForMe Санкт-Петербург</p>
        <p className="mt-1 text-sm font-semibold text-ink">Средний проспект В.О., 2В</p>
      </div>

      <div
        data-case-nav
        className="absolute bottom-5 right-5 z-20 flex items-center gap-2"
      >
        <button
          type="button"
          onClick={goToPrevCase}
          aria-label="Предыдущий кейс"
          className="flex size-11 items-center justify-center bg-white/95 text-ink shadow-lg transition hover:bg-brand hover:text-white"
        >
          <ArrowIcon direction="left" />
        </button>
        <button
          type="button"
          onClick={goToNextCase}
          aria-label="Следующий кейс"
          className="flex size-11 items-center justify-center bg-white/95 text-ink shadow-lg transition hover:bg-brand hover:text-white"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </div>
  );
}
