import type { Metadata, Viewport } from 'next';
import { Great_Vibes, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const scriptFont = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

const serifFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Happy Birthday Anjali ♡ | A Special Celebration',
  description: 'A private birthday surprise experience crafted with warmth, elegance, and light for Anjali. 28 September 2026.',
  openGraph: {
    title: 'Happy Birthday Anjali ♡',
    description: 'Some people make the world brighter just by being in it...',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0307',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${scriptFont.variable} ${serifFont.variable} ${sansFont.variable} scroll-smooth`}>
      <body className="bg-[#090307] text-[#fbf0f4] antialiased selection:bg-rose-500/30 selection:text-rose-200 overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
