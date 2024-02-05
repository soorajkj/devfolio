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
          "bg-sky-500",
          "text-white",
          "hover:bg-sky-600",
          "dark:hover:bg-sky-400",
          "focus:outline-none",
          "focus:ring-2",
          "focus:ring-offset-2",
          "focus:ring-sky-300",
          "dark:focus:ring-offset-slate-900",
          "dark:focus:ring-sky-700",
          "ring-offset-slate-900",
        ],
        secondary: "df-button--secondary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
