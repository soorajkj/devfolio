import { Fira_Code as FiraCode, Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-family-inter',
  display: 'swap',
  preload: true,
});

export const firac = FiraCode({
  subsets: ['latin'],
  variable: '--font-family-firac',
  display: 'swap',
  preload: true,
});
