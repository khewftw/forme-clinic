"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  alt: string;
  sizes?: string;
  className?: string;
  min?: number;
  max?: number;
};

export function BeforeAfterSlider({
  before,
  after,
  alt,
  sizes = "(min-width: 1024px) 16vw, 50vw",
  className = "",
  min = 4,
  max = 96,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerIdRef = useRef<number | null>(null);
  const touchIdRef = useRef<number | null>(null);
  const inputTypeRef = useRef<"pointer" | "touch" | null>(null);
  const dragAxisLockRef = useRef<"none" | "horizontal" | "vertical">("none");
  const startRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const update = () => setIsCoarsePointer(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const updatePosition = useCallback(
    (clientX: number) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = Math.max(min, Math.min(max, (x / rect.width) * 100));
      setPosition(percent);
    },
    [min, max],
  );

  useEffect(() => {
    if (!isDragging) return;

    const getAxisLock = (x: number, y: number) => {
      const start = startRef.current;
      if (!start || dragAxisLockRef.current !== "none") return dragAxisLockRef.current;

      const dx = x - start.x;
      const dy = y - start.y;
      const threshold = 8;

      if (Math.abs(dx) >= threshold || Math.abs(dy) >= threshold) {
        dragAxisLockRef.current = Math.abs(dx) > Math.abs(dy) ? "horizontal" : "vertical";
      }

      return dragAxisLockRef.current;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (pointerIdRef.current !== null && event.pointerId !== pointerIdRef.current) return;
      if (getAxisLock(event.clientX, event.clientY) === "horizontal") {
        // Prevent page scroll while dragging the slider horizontally.
        event.preventDefault();
        updatePosition(event.clientX);
      }
    };

    const stopDragging = () => {
      setIsDragging(false);
      pointerIdRef.current = null;
      touchIdRef.current = null;
      inputTypeRef.current = null;
      dragAxisLockRef.current = "none";
      startRef.current = null;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (pointerIdRef.current !== null && event.pointerId !== pointerIdRef.current) return;
      stopDragging();
    };

    const onPointerCancel = (event: PointerEvent) => {
      if (pointerIdRef.current !== null && event.pointerId !== pointerIdRef.current) return;
      stopDragging();
    };

    const onTouchMove = (event: TouchEvent) => {
      const touchId = touchIdRef.current;
      if (touchId === null) return;
      const touch = Array.from(event.touches).find((t) => t.identifier === touchId);
      if (!touch) return;

      if (getAxisLock(touch.clientX, touch.clientY) === "horizontal") {
        event.preventDefault();
        updatePosition(touch.clientX);
      }
    };

    const onTouchEndOrCancel = (event: TouchEvent) => {
      const touchId = touchIdRef.current;
      if (touchId === null) return;
      const stillActive = Array.from(event.touches).some((t) => t.identifier === touchId);
      if (!stillActive) stopDragging();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: false });
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerCancel);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEndOrCancel);
    window.addEventListener("touchcancel", onTouchEndOrCancel);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerCancel);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEndOrCancel);
      window.removeEventListener("touchcancel", onTouchEndOrCancel);
    };
  }, [isDragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden bg-soft ${className}`}
      style={{ touchAction: "pan-y" }}
      onPointerDown={(event) => {
        if (isCoarsePointer) return;
        // Only left mouse button; on touch it will be 0.
        if (event.pointerType === "mouse" && event.button !== 0) return;
        const container = containerRef.current;
        if (!container) return;

        inputTypeRef.current = "pointer";
        pointerIdRef.current = event.pointerId;
        startRef.current = { x: event.clientX, y: event.clientY };
        dragAxisLockRef.current = "none";
        setIsDragging(true);
        container.setPointerCapture(event.pointerId);
        updatePosition(event.clientX);
      }}
      onTouchStart={(event) => {
        if (isCoarsePointer) return;
        // iOS Safari: pointer events can be flaky; support touch explicitly.
        const touch = event.touches[0];
        if (!touch) return;
        inputTypeRef.current = "touch";
        touchIdRef.current = touch.identifier;
        startRef.current = { x: touch.clientX, y: touch.clientY };
        dragAxisLockRef.current = "none";
        setIsDragging(true);
        updatePosition(touch.clientX);
      }}
      onPointerUp={(event) => {
        if (pointerIdRef.current !== null && event.pointerId !== pointerIdRef.current) return;
        setIsDragging(false);
        pointerIdRef.current = null;
        touchIdRef.current = null;
        inputTypeRef.current = null;
        dragAxisLockRef.current = "none";
        startRef.current = null;
      }}
    >
      <Image
        src={before}
        alt={`До: ${alt}`}
        fill
        sizes={sizes}
        className="object-cover object-center"
        draggable={false}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={after}
          alt={`После: ${alt}`}
          fill
          sizes={sizes}
          className="object-cover object-center"
          draggable={false}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white/90 shadow-[0_0_10px_rgba(0,0,0,0.25)]"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/95 shadow-md">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
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

      <span className="pointer-events-none absolute left-3 top-3 bg-white/92 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink">
        До
      </span>
      <span className="pointer-events-none absolute right-3 top-3 bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
        После
      </span>

      {isCoarsePointer ? (
        <div className="absolute inset-x-3 bottom-3 z-20 rounded-full bg-white/80 px-3 py-2 backdrop-blur">
          <input
            aria-label="Сдвинуть разделитель"
            type="range"
            min={min}
            max={max}
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            className="w-full accent-brand"
          />
        </div>
      ) : null}
    </div>
  );
}

