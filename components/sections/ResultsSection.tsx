"use client";

import { useMemo, useState } from "react";
import { ResultPairCard } from "@/components/ui/ResultPairCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { formatResultCaption, resultFilters, results } from "@/lib/site-data";

export function ResultsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof resultFilters)[number]["id"]>("all");

  const visibleResults = useMemo(
    () =>
      activeFilter === "all"
        ? results
        : results.filter((result) => result.surgeon === activeFilter),
    [activeFilter],
  );

  return (
    <section id="results" className="bg-soft px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Работы хирургов — участниц программы" />

        <div className="mb-8 flex flex-wrap gap-2">
          {resultFilters.map((filter) => {
            const isActive = activeFilter === filter.id;
            const count =
              filter.id === "all"
                ? results.length
                : results.filter((result) => result.surgeon === filter.id).length;

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={
                  isActive
                    ? "inline-flex items-center gap-2 bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white"
                    : "inline-flex items-center gap-2 border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition hover:border-brand hover:text-brand"
                }
              >
                {filter.label}
                <span
                  className={
                    isActive
                      ? "rounded-full bg-white/15 px-2 py-0.5 text-[10px]"
                      : "rounded-full bg-soft px-2 py-0.5 text-[10px] text-muted"
                  }
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleResults.map((result, index) => (
            <ResultPairCard
              key={result.id}
              before={result.before}
              after={result.after}
              caption={formatResultCaption(result.surgeon, result.label)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
