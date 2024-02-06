import React from "react";
import type { Metadata } from "next";
import { LayoutProps } from "@types";
import * as fonts from "@lib/fonts";
import { cx } from "@lib/utils";
import "@styles/app.css";

export const metadata: Metadata = {};

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={cx(`
      ${fonts.montserrat.variable}
      ${fonts.robotoMono.variable}
      ${fonts.bebasNeue.variable}
      scroll-smooth
      `)}
    >
      <body className="h-full min-h-screen w-full overflow-x-hidden bg-white font-family-montserrat text-base font-normal leading-relaxed text-zinc-500 antialiased dark:bg-zinc-900 dark:text-zinc-500">
        {children}
      </body>
    </html>
  );
}
