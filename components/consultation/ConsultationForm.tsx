"use client";

import { AccentButton } from "@/components/ui/AccentButton";
import { FormEvent, useState } from "react";
import { mainSite } from "@/lib/site-data";

type ContactMethod = "call" | "telegram" | "max";

const contactOptions: { value: ContactMethod; label: string }[] = [
  { value: "call", label: "Звонок" },
  { value: "telegram", label: "Telegram" },
  { value: "max", label: "MAX" },
];

const fieldClassName =
  "w-full border border-black/10 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted/80 focus:border-brand";

export function ConsultationForm() {
  const [contactMethod, setContactMethod] = useState<ContactMethod>("call");
  const [submitted, setSubmitted] = useState(false);

  const showPhone = contactMethod === "call" || contactMethod === "max";
  const showTelegram = contactMethod === "telegram";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-[420px] bg-white p-6 shadow-[0_18px_50px_rgba(31,31,31,0.14)] sm:p-8">
      <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-[1.75rem]">
        Запись на прием
      </h2>

      {submitted ? (
        <p className="mt-6 text-sm leading-7 text-muted">
          Спасибо! Заявка принята. Мы свяжемся с вами в ближайшее время.
        </p>
      ) : (
        <form
          id="karta"
          className="mt-6 space-y-4"
          onSubmit={handleSubmit}
          noValidate
        >
          <div>
            <input
              className={`${fieldClassName} required`}
              type="text"
              name="persona"
              placeholder="Ваше имя"
              required
              autoComplete="name"
            />
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="text-sm text-muted">Способ связи:</span>
            {contactOptions.map((option) => (
              <label key={option.value} className="inline-flex cursor-pointer items-center gap-2">
                <input
                  className="h-4 w-4 accent-brand"
                  type="radio"
                  name="contact_method_karta"
                  value={option.value}
                  checked={contactMethod === option.value}
                  onChange={() => setContactMethod(option.value)}
                />
                <span className="text-sm text-ink">{option.label}</span>
              </label>
            ))}
          </div>

          {showPhone ? (
            <div>
              <input
                className={`${fieldClassName} required`}
                type="tel"
                name="phone"
                placeholder="+7 (___) ___-__-__"
                required
                autoComplete="tel"
              />
            </div>
          ) : null}

          {showTelegram ? (
            <div>
              <input
                className={fieldClassName}
                type="text"
                name="telegram"
                placeholder="@username"
                required
                autoComplete="off"
              />
            </div>
          ) : null}

          <div>
            <textarea
              className={`${fieldClassName} min-h-[132px] resize-y`}
              name="message"
              rows={5}
              placeholder="Ваш вопрос"
            />
          </div>

          <label className="flex items-start gap-3 text-sm leading-6 text-ink/85">
            <input
              className="mt-1 h-4 w-4 shrink-0 accent-brand"
              type="checkbox"
              name="soglasie"
              required
            />
            <span>
              Даю согласие на обработку{" "}
              <a
                href={`${mainSite}/obrabotka-personalnykh-dannykh`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline"
              >
                Персональных данных
              </a>
            </span>
          </label>

          <AccentButton as="button" type="submit" className="w-full min-h-12 px-6 py-3 text-sm tracking-[0.08em]">
            Записаться!
          </AccentButton>
        </form>
      )}
    </div>
  );
}
