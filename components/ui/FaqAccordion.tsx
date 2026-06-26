"use client";

import { useId, useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
  consultationLink?: boolean;
};

type FaqAccordionProps = {
  items: readonly FaqItem[];
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        fill="currentColor"
        d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z"
      />
    </svg>
  );
}

function formatAnswer(item: FaqItem) {
  const phonePattern = /(\+7 \(\d{3}\) [\d-]+)/;
  const parts = item.answer.split(phonePattern);

  return parts.map((part, index) => {
    if (phonePattern.test(part)) {
      const tel = part.replace(/\D/g, "");
      return (
        <a
          key={`phone-${index}`}
          href={`tel:+${tel}`}
          className="font-medium text-brand underline-offset-2 hover:underline"
        >
          {part}
        </a>
      );
    }

    if (item.consultationLink && part.includes("на этой странице")) {
      const [before, after] = part.split("на этой странице");
      return (
        <span key={`text-${index}`}>
          {before}
          <a href="#consultation" className="font-medium text-brand underline-offset-2 hover:underline">
            на этой странице
          </a>
          {after}
        </span>
      );
    }

    return <span key={`text-${index}`}>{part}</span>;
  });
}

function FaqItemCard({
  item,
  index,
  open,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <article
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        open
          ? "border-brand/25 bg-white shadow-[0_12px_40px_rgba(56,149,167,0.12)]"
          : "border-black/[0.06] bg-white/90 hover:border-brand/15 hover:bg-white"
      }`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-start gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
        >
          <span
            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
              open ? "bg-brand text-white" : "bg-soft text-brand"
            }`}
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-base font-semibold leading-7 text-ink sm:text-[1.05rem]">
              {item.question}
            </span>
          </span>

          <ChevronIcon open={open} />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-ink/8 px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
            <p className="pl-12 text-sm leading-7 text-ink/80 sm:text-[0.95rem] sm:leading-8">
              {formatAnswer(item)}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const leftColumn = items.filter((_, index) => index % 2 === 0);
  const rightColumn = items.filter((_, index) => index % 2 === 1);

  const renderColumn = (columnItems: readonly FaqItem[], offset: number) =>
    columnItems.map((item, columnIndex) => {
      const index = offset + columnIndex * 2;
      return (
        <FaqItemCard
          key={item.question}
          item={item}
          index={index}
          open={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      );
    });

  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
      <div className="flex flex-col gap-4 lg:gap-5">{renderColumn(leftColumn, 0)}</div>
      <div className="flex flex-col gap-4 lg:gap-5">{renderColumn(rightColumn, 1)}</div>
    </div>
  );
}
