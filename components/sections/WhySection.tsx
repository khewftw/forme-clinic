import { WhyCarousel } from "@/components/ui/WhyCarousel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { whySectionMeta } from "@/lib/site-data";

export function WhySection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow={whySectionMeta.eyebrow}
          title={whySectionMeta.title}
          text={whySectionMeta.text}
        />
        <WhyCarousel />
      </div>
    </section>
  );
}
