import { classNames } from "@/utils/classNames";
import React, { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

interface ProjectProps
  extends ComponentProps<"div">,
    VariantProps<typeof projectStyles> {}

export default function Project({ className }: ProjectProps) {
  return (
    <div className={classNames(projectStyles({ className }))}>
      <div className="size-full p-6">
        <h3 className="mb-2 text-base font-medium text-white">Halcyon Theme</h3>
        <p className="text-sm">
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on Visual Studio Marketplace, Package Control, Atom
          Package Manager, and npm.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-1">
          {["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"].map(
            (_, i) => (
              <span
                key={i}
                className="font-family-mono px-1 text-xs text-nowrap"
              >
                {_}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

const projectStyles = tv({
  base: ["min-h-96 border border-dashed border-zinc-800 bg-zinc-900/80"],
  variants: {},
});
