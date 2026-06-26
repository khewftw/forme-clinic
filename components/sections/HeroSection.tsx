import { CtaButton } from "@/components/ui/CtaButton";
import { HeroBeforeAfterSlider } from "@/components/ui/HeroBeforeAfterSlider";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
      <div className="flex flex-col justify-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-brand">
          Акция действует до 30 сентября 2026
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-ink sm:text-6xl">
          Маммопластика под ключ за 320 000 ₽
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
          Импланты Mentor, операция, наркоз и палата — всё включено. Никаких доплат на
          консультации.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <CtaButton>Записаться на консультацию</CtaButton>
          <a
            href="#package"
            className="inline-flex min-h-12 items-center justify-center border border-black/20 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition hover:border-brand hover:text-brand"
          >
            Что входит
          </a>
        </div>
        <p className="mt-5 max-w-lg text-xs leading-6 text-muted">
          Ответим в течение 15 минут. Консультация бесплатная. Есть противопоказания,
          необходима консультация специалиста.
        </p>
      </div>
      <HeroBeforeAfterSlider />
    </section>
  );
}
