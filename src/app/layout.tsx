import React from 'react';
import type { Metadata } from 'next';
import { LayoutProps } from '@types';
import '@styles/app.scss';

export const metadata: Metadata = {};

export default function Layout({ children }: LayoutProps) {
  const _temp = null;

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
