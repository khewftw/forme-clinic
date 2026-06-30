"use client";

import { useMemo, useState } from "react";
import { ResultPairCard } from "@/components/ui/ResultPairCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { formatResultCaption, resultFilters, results } from "@/lib/site-data";

const MOBILE_LIMIT = 6;

export function ResultsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof resultFilters)[number]["id"]>("all");
  const [expanded, setExpanded] = useState(false);

  const visibleResults = useMemo(
    () =>
      activeFilter === "all"
        ? results
        : results.filter((result) => result.surgeon === activeFilter),
    [activeFilter],
  );

  const hasMore = visibleResults.length > MOBILE_LIMIT;

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
                onClick={() => {
                  setActiveFilter(filter.id);
                  setExpanded(false);
                }}
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
            <div
              key={result.id}
              className={!expanded && index >= MOBILE_LIMIT ? "hidden lg:block" : undefined}
            >
              <ResultPairCard
                before={result.before}
                after={result.after}
                caption={formatResultCaption(result.surgeon, result.label)}
                index={index}
              />
            </div>
          ))}
        </div>

        {hasMore && !expanded ? (
          <div className="mt-8 flex justify-center lg:hidden">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-2 border border-ink/15 bg-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition hover:border-brand hover:text-brand"
            >
              Просмотреть ещё
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
