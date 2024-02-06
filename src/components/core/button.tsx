"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cx } from "@lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonStyles> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, asChild, variant, className, ...rest } = props;

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cx(ButtonStyles({ variant, className }))}
        {...rest}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export default Button;

export const ButtonStyles = cva(
  [
    "df-button",
    "relative",
    "cursor-pointer",
    "whitespace-nowrap",
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-lg",
    "px-6",
    "py-3.5",
    "border",
    "border-transparent",
    "font-family-montserrat",
    "text-base",
    "font-medium",
    "leading-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "df-button--primary",
          "bg-zinc-100",
          "text-zinc-900",
          "border-zinc-900/10",
          "ring-offset-zinc-900",
          "shadow-sm",
          "hover:bg-zinc-200",
          "focus:outline-none ",
          "focus:ring-1",
          "focus:ring-zinc-300",
          "focus:ring-offset-2",
          "dark:bg-zinc-800/60",
          "dark:text-zinc-400",
          "dark:border-white/10",
          "dark:ring-zinc-800",
          "dark:hover:bg-zinc-800",
          "dark:hover:text-zinc-300",
          "dark:focus:ring-zinc-700",
          "dark:focus:ring-offset-zinc-900",
        ],
        secondary: [
          "df-button--secondary",
          "bg-purple-100",
          "text-purple-950",
          "border-purple-950/10",
          "ring-offset-purple-950",
          "shadow-sm",
          "hover:bg-purple-200",
          "focus:outline-none ",
          "focus:ring-1",
          "focus:ring-purple-300",
          "focus:ring-offset-2",
          "dark:bg-purple-700",
          "dark:text-purple-100",
          "dark:border-white/10",
          "dark:ring-purple-800",
          "dark:hover:bg-purple-800",
          "dark:hover:text-purple-300",
          "dark:focus:ring-purple-700",
          "dark:focus:ring-offset-purple-950",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
