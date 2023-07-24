import React from 'react';
import type { Metadata } from 'next';
import { LayoutProps } from '@/types';
import { firac, inter } from '@/lib/fonts';
import '@/styles/tailwind.css';
import '@/styles/app.scss';

export const metadata: Metadata = {};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className={firac.variable + ' ' + inter.variable}>
      <body className="h-full min-h-screen w-full font-family-inter text-base font-normal leading-none antialiased">
        {children}
      </body>
    </html>
  );
}
