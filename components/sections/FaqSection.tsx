import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { faqs } from "@/lib/site-data";

export function FaqSection() {
  return (
    <section id="faq" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Отвечаем на главные вопросы"
          text="Собрали ответы на вопросы, которые чаще всего задают перед маммопластикой."
        />

        <FaqAccordion items={faqs} />
      </div>
    </section>
  );
}
