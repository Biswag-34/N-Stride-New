import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type CommonButtonProps = PropsWithChildren<{
  className?: string;
  external?: boolean;
  href?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}>;

type ButtonProps = CommonButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonButtonProps> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonButtonProps>;

const baseClasses =
  "inline-flex min-w-0 max-w-full items-center justify-center gap-2 rounded-md text-center font-semibold leading-snug transition duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white shadow-soft hover:bg-primary-dark",
  secondary: "bg-soft-sky text-primary hover:bg-border-soft",
  outline: "border border-primary bg-white text-primary hover:bg-background-soft",
  ghost: "bg-transparent text-primary-dark hover:bg-background-soft",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

export function Button({
  children,
  className,
  external,
  href,
  size = "md",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          className={classes}
          href={href}
          rel="noreferrer"
          target="_blank"
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link className={classes} href={href} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type="button" {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
