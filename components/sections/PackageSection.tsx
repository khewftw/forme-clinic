import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { packageItems, packageNotes } from "@/lib/site-data";

function AlertIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 2.5L17.5 16.25H2.5L10 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 8.5V11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="10" cy="13.25" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function PackageSection() {
  return (
    <section id="package" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Что входит в цену"
          title="Одна цена — и больше ничего лишнего"
          text="Мы собрали всё необходимое в один пакет, чтобы вы точно знали, за что платите."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {packageItems.map((item, index) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden bg-soft transition hover:shadow-[0_12px_40px_rgba(56,149,167,0.12)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#dfe8eb]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 bg-white/95 px-3 py-1 text-xs font-semibold text-brand shadow-sm">
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="relative mt-8 overflow-hidden border border-brand/20 bg-gradient-to-br from-[#16343b] via-ink to-[#1a2f35] p-6 md:p-9">
          <div
            className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-brand/10 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-12 left-1/3 size-52 rounded-full bg-brand/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-8 lg:grid-cols-[0.32fr_0.68fr] lg:items-start">
            <div>
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-full border border-amber-300/30 bg-amber-400/15 text-amber-200">
                <AlertIcon />
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                Важно знать до записи
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/55">
                Уточните эти моменты на консультации, чтобы план операции совпал с ожиданиями.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-1">
              {packageNotes.map((note) => (
                <li
                  key={note}
                  className="flex gap-4 border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm transition hover:border-amber-300/25 hover:bg-white/[0.07]"
                >
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-amber-200 ring-1 ring-amber-300/20">
                    <AlertIcon />
                  </span>
                  <p className="text-sm leading-7 text-white/85">{note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
