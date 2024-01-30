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
      <body className="h-full min-h-screen w-full overflow-x-hidden font-family-inter text-base font-normal leading-normal antialiased">
        {children}
      </body>
    </html>
  );
}
