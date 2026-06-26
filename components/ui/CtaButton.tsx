import { AccentButton } from "@/components/ui/AccentButton";
import type { ReactNode } from "react";

type CtaButtonProps = {
  children: ReactNode;
  variant?: "accent" | "light";
};

export function CtaButton({ children, variant = "accent" }: CtaButtonProps) {
  if (variant === "light") {
    return (
      <a
        href="#consultation"
        className="inline-flex min-h-12 items-center justify-center border border-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-ink"
      >
        {children}
      </a>
    );
  }

  return (
    <AccentButton
      href="#consultation"
      className="min-h-12 px-7 py-3 text-sm tracking-[0.14em]"
    >
      {children}
    </AccentButton>
  );
}
