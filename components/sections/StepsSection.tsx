import { SectionTitle } from "@/components/ui/SectionTitle";
import { steps } from "@/lib/site-data";

export function StepsSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="От первого звонка до результата — мы рядом на каждом шаге"
          text="Понятный маршрут без лишней тревоги: консультация, обследование, операция, ночь в палате и сопровождение после выписки."
        />
        <div className="grid gap-4 lg:grid-cols-5">
          {steps.map(([title, text], index) => (
            <article key={title} className="border-l-4 border-brand bg-soft p-5">
              <p className="text-sm font-semibold text-brand">Шаг {index + 1}</p>
              <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
