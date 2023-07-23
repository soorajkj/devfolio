import type { Metadata } from 'next';
import '@/styles/tailwind.css';
import '@/styles/app.scss';

export const metadata: Metadata = {};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
