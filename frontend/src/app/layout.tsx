import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aliza Wears',
  description: 'Aliza Wears Frontend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-alabaster text-charcoal font-sans">
        {children}
      </body>
    </html>
  );
}