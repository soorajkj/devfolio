import { Geist, JetBrains_Mono, McLaren, Cabin_Sketch } from "next/font/google";

// dekko
export const sans = McLaren({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400"],
  display: "swap",
  style: ["normal"],
  preload: true,
});

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-family-geist",
  display: "swap",
  style: ["normal"],
  preload: true,
});

export const bebasNeue = Cabin_Sketch({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-family-bebas-neue",
  style: ["normal"],
  display: "swap",
  preload: true,
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-family-mono",
  style: ["normal"],
  display: "swap",
  preload: true,
});

export const fonts =
  bebasNeue.variable +
  " " +
  geist.variable +
  " " +
  mono.variable +
  " " +
  sans.variable;
