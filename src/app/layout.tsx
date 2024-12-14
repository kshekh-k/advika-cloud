import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  variable: '--poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Advika Enterprises Cloud Server',
  description: 'Advika Cloud provide best cloud server solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${poppins.variable}`}>
      <body className={cn('overflow-x-hidden antialiased')}>{children}</body>
    </html>
  );
}
