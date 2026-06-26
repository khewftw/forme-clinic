import { ConsultationForm } from "@/components/consultation/ConsultationForm";

const mapSrc =
  "https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=false&source=constructor-api&um=constructor%3A6d5cd7eb5c9d8dcc922077eb86265264d5275e6d82b6475a6ac5bf6980e10683";

export function ConsultationSection() {
  return (
    <section id="consultation" className="pb-0">
      <div className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="max-w-5xl text-3xl font-semibold leading-tight tracking-[-0.05em] text-brand sm:text-5xl">
            Главная ценность нашей клиники — это врачи, знания и опыт которых
            позволяют решать задачи любой сложности.
          </p>
        </div>
      </div>

      <div className="relative min-h-[640px] sm:min-h-[679px]">
        <iframe
          title="Карта клиники ForMe"
          src={mapSrc}
          className="block h-[640px] w-full border-0 sm:h-[679px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="absolute inset-0 flex items-start px-4 py-8 sm:items-center sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-7xl justify-start">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
