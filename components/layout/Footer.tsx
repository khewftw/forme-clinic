import Image from "next/image";
import { footerColumns, mainSite, socialLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer>
      <section className="bg-[#111] px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-b border-white/15 pb-8 md:grid-cols-[0.22fr_0.28fr_0.24fr_0.26fr]">
            <a href={mainSite} aria-label="ForMe">
              <Image
                src="/forme/logo.svg"
                alt="ForMe"
                width={150}
                height={38}
                className="brightness-0 invert"
              />
            </a>
            <div className="text-sm leading-7 text-white/75">
              <p>СПб, Средний проспект ВО, 2В</p>
              <p>
                Пн-Вс: с 8<sup>00</sup> до 21<sup>00</sup>
              </p>
            </div>
            <div>
              <a href="tel:+78124458281" className="text-lg font-semibold hover:text-brand">
                +7 (812) 445-82-81
              </a>
              <a href="#consultation" className="mt-2 block text-sm text-brand hover:text-white">
                Записаться!
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  rel="noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-white/20 text-xs font-semibold text-white/80 transition hover:border-brand hover:text-brand"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 border-b border-white/15 py-8 text-sm text-white/70 sm:grid-cols-2 lg:grid-cols-3">
            {footerColumns.map((column) => (
              <nav key={column.title}>
                <h3 className="mb-4 text-base font-semibold text-white">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
          <div className="grid gap-5 pt-8 text-xs leading-6 text-white/45 md:grid-cols-[0.55fr_0.45fr]">
            <div>
              <p>© 2026 Клиника пластической хирургии ForMe. Все права защищены.</p>
              <p>Информация и цены на сайте не являются публичной офертой.</p>
            </div>
            <div className="space-y-2 md:text-right">
              <a
                href={`${mainSite}/obrabotka-personalnykh-dannykh`}
                target="_blank"
                className="block hover:text-white"
              >
                Политика в отношении обработки персональных данных
              </a>
              <a
                href={`${mainSite}/cookies-rules`}
                target="_blank"
                className="block hover:text-white"
              >
                Политика использования файлов cookies
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
