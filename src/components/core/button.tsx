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
    "inline-flex",
    "cursor-pointer",
    "items-center",
    "justify-center",
    "whitespace-nowrap",
    "rounded-lg",
    "px-6",
    "py-3.5",
    "font-family-montserrat",
    "text-base",
    "font-medium",
    "leading-none",
    "ring-2",
    "ring-offset-2",
  ],
  {
    variants: {
      variant: {
        primary: "df-button--primary",
        secondary: "df-button--secondary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
