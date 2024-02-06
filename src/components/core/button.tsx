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
    "font-semibold",
    "leading-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "df-button--primary",
          "bg-gray-100",
          "text-gray-950",
          "border-gray-950/10",
          "ring-offset-gray-950",
          "shadow-sm",
          "hover:bg-gray-200",
          "focus:outline-none ",
          "focus:ring-1",
          "focus:ring-gray-300",
          "focus:ring-offset-2",
          "dark:bg-gray-800/60",
          "dark:text-gray-400",
          "dark:border-white/10",
          "dark:ring-gray-800",
          "dark:hover:bg-gray-800",
          "dark:hover:text-gray-300",
          "dark:focus:ring-gray-700",
          "dark:focus:ring-offset-gray-950",
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
