import type { ComponentPropsWithoutRef, ReactNode } from "react";

export const accentButtonClassName =
  "btn-accent inline-flex items-center justify-center font-semibold uppercase text-white";

type AccentButtonBaseProps = {
  children: ReactNode;
  className?: string;
};

type AccentButtonLinkProps = AccentButtonBaseProps &
  ComponentPropsWithoutRef<"a"> & {
    as?: "a";
  };

type AccentButtonButtonProps = AccentButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & {
    as: "button";
  };

type AccentButtonProps = AccentButtonLinkProps | AccentButtonButtonProps;

function mergeClassName(base: string, extra?: string) {
  return extra ? `${base} ${extra}` : base;
}

export function AccentButton(props: AccentButtonProps) {
  const { children, className, as = "a", ...rest } = props;
  const classes = mergeClassName(accentButtonClassName, className);

  if (as === "button") {
    const { type = "button", ...buttonProps } = rest as ComponentPropsWithoutRef<"button">;
    return (
      <button type={type} className={classes} {...buttonProps}>
        {children}
      </button>
    );
  }

  const linkProps = rest as ComponentPropsWithoutRef<"a">;
  return (
    <a className={classes} {...linkProps}>
      {children}
    </a>
  );
}
