type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionTitle({ eyebrow, title, text }: SectionTitleProps) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand">
          {eyebrow}
        </p>
      ) : null}
      <div className="flex items-start gap-3">
        <span className="mt-2 h-4 w-1 shrink-0 bg-brand" aria-hidden="true" />
        <h2 className="text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="mt-5 h-px w-52 bg-ink" />
      {text ? <p className="mt-5 text-base leading-7 text-muted">{text}</p> : null}
    </div>
  );
}
