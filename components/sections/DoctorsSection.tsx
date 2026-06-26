import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { doctors } from "@/lib/site-data";

export function DoctorsSection() {
  return (
    <section id="doctors" className="bg-soft px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Ваши хирурги"
          text="Три пластических хирурга ForMe, участвующие в программе маммопластики под ключ."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {doctors.map((doctor) => (
            <article key={doctor.name} className="bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e5ebee]">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-contain object-bottom"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-brand">
                  {doctor.experience}
                </p>
                <h3 className="mt-3 min-h-16 text-xl font-semibold leading-7 text-ink">
                  {doctor.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{doctor.role}</p>
                <a
                  href="#consultation"
                  className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-ink hover:text-brand"
                >
                  {doctor.cta} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
