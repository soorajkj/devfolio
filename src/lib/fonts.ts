import { Geist, JetBrains_Mono, Bebas_Neue } from "next/font/google";

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-family-geist",
  display: "swap",
  style: ["normal"],
  preload: true,
});

export const bebasNeue = Bebas_Neue({
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
  bebasNeue.variable + " " + geist.variable + " " + mono.variable;
