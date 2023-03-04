import type { Metadata } from 'next';
import '../styles/scss/style.scss';

export const metadata: Metadata = {};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
