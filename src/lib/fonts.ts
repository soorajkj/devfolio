import { JetBrains_Mono, McLaren, Cabin_Sketch } from "next/font/google";

export const sans = McLaren({
  subsets: ["latin"],
  variable: "--font-family-sans",
  weight: ["400"],
  display: "swap",
  style: ["normal"],
  preload: true,
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-family-mono",
  style: ["normal"],
  display: "swap",
  preload: true,
});

export const caryon = Cabin_Sketch({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-family-caryon",
  style: ["normal"],
  display: "swap",
  preload: true,
});

export const fonts =
  caryon.variable + " " + mono.variable + " " + sans.variable;
