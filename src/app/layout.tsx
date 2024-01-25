import React from "react";
import type { Metadata } from "next";
import { LayoutProps } from "@types";
import "@styles/app.css";

export const metadata: Metadata = {};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="h-full min-h-screen w-full text-base leading-normal antialiased">
        {children}
      </body>
    </html>
  );
}
