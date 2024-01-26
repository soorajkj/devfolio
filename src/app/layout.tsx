import React from "react";
import type { Metadata } from "next";
import { LayoutProps } from "@types";
import "@styles/app.css";

export const metadata: Metadata = {};

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="h-full min-h-screen w-full bg-zinc-950 text-base leading-normal text-zinc-600 antialiased">
        {children}
      </body>
    </html>
  );
}
