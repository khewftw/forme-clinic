export function InstallmentSection() {
  return (
    <section id="price" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-brand to-brand-dark px-6 py-10 shadow-[0_24px_60px_rgba(56,149,167,0.28)] sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div className="installment-rings" aria-hidden="true" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
              Рассрочка
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
              320 000 ₽ — или удобный платеж в месяц
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
              В клинике ForMe действует беспроцентная рассрочка. Точные условия уточняйте на
              консультации или по телефону.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#consultation"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition hover:bg-white/90"
              >
                Узнать условия рассрочки
                <span className="size-2 rounded-full bg-brand" aria-hidden="true" />
              </a>
              <a
                href="tel:+78124458281"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/35 px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
              >
                Позвонить в клинику
                <span className="size-2 rounded-full bg-white/80" aria-hidden="true" />
              </a>
            </div>

            <p className="mt-5 max-w-lg text-xs leading-6 text-white/60">
              Рассрочка оформляется по условиям партнёров клиники. Подробности уточняйте у
              администратора.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
