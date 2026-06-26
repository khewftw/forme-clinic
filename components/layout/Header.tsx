import Image from "next/image";
import { AccentButton } from "@/components/ui/AccentButton";
import { mainNav, mainSite, topLinks } from "@/lib/site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="border-b border-black/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href={mainSite} aria-label="ForMe" className="shrink-0">
            <Image
              src="/forme/logo.svg"
              alt="ForMe"
              width={150}
              height={38}
              priority
            />
          </a>
          <div className="hidden items-center gap-6 text-xs leading-5 text-muted md:flex">
            <span>
              Санкт-Петербург
              <br />
              Средний проспект ВО, 2В
            </span>
            <span>
              Пн-Вс: с&nbsp;08:00
              <br />
              до&nbsp;21:00
            </span>
          </div>
          <div className="ml-auto hidden items-center gap-5 text-sm lg:flex">
            <nav className="flex items-center gap-5">
              {topLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-brand">
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href={`${mainSite}/component/finder/search`}
              aria-label="Поиск на сайте ForMe"
              className="text-xl leading-none hover:text-brand"
            >
              ⌕
            </a>
            <a
              href="#consultation"
              className="border border-ink px-5 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition hover:border-brand hover:text-brand"
            >
              Обратный звонок
            </a>
          </div>
          <a
            href="tel:+78124458281"
            className="hidden text-sm font-bold text-ink sm:block"
          >
            +7 (812) 445-82-81
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <nav className="flex flex-1 items-center gap-x-5 gap-y-2 overflow-x-auto text-[11px] font-semibold uppercase tracking-[0.08em] text-ink lg:gap-7">
          {mainNav.map((link) => (
            <a key={link.href} href={link.href} className="shrink-0 hover:text-brand">
              {link.label}
            </a>
          ))}
        </nav>
        <AccentButton
          href="#consultation"
          className="hidden shrink-0 px-4 py-2 text-xs tracking-[0.1em] sm:inline-flex"
        >
          Записаться!
        </AccentButton>
      </div>
    </header>
  );
}
