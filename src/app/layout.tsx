import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import ThemeProvider from "@/components/ThemeProvider";
import { fonts } from "@/lib/fonts";
import { seo } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = seo;

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={fonts} suppressHydrationWarning={true}>
      <body className="font-family-geist h-full min-h-screen w-full bg-white text-base leading-normal font-normal text-neutral-600 not-italic antialiased">
        <ThemeProvider
          enableSystem
          disableTransitionOnChange
          defaultTheme="system"
          attribute="class"
          forcedTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
