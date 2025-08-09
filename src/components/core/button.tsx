import { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import { tv, VariantProps } from "tailwind-variants";
import { classNames } from "@/utils/classNames";

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
}

export default function Button({
  asChild = false,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={classNames(buttonStyles({ variant, className }))}
      {...props}
    />
  );
}

const buttonStyles = tv({
  base: [
    "relative inline-flex w-full shrink-0 items-center justify-center gap-1 rounded-lg border border-transparent px-3 py-2 text-sm leading-snug font-medium tracking-tight text-nowrap whitespace-nowrap transition-all outline-none disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 sm:w-fit [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  variants: {
    variant: {
      primary: "bg-white text-zinc-950 shadow-xs hover:bg-white/90",
      secondary:
        "border-white/20 bg-zinc-950 bg-linear-to-b from-white/5 to-white/15 text-white shadow-xs",
    },
  },
});
