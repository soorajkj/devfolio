"use client";

import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function ThemeProvider({ ...props }: ThemeProviderProps) {
  return <NextThemeProvider {...props} />;
}
