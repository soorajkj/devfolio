import React from "react";
import type { Metadata } from "next";
import { LayoutProps } from "@types";
import "@styles/app.css";

export const metadata: Metadata = {};

export default function Layout({ children }: LayoutProps) {
  const _temp = null;

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="h-full min-h-screen w-full bg-neutral-950 text-base text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
