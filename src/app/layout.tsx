import React from "react";
import type { Metadata } from "next";
import { LayoutProps } from "@types";
import { bebasNeue, montserrat, robotoMono } from "@lib/fonts";
import "@styles/app.css";

export const metadata: Metadata = {};

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      style={{ scrollBehavior: "smooth" }}
      className={`
      ${montserrat.variable}
      ${robotoMono.variable}
      ${bebasNeue.variable}`}
    >
      <body className="h-full min-h-screen w-full overflow-x-hidden font-family-inter text-base font-normal leading-normal antialiased">
        {children}
      </body>
    </html>
  );
}
