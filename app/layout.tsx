import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Analytics from '@/components/Analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SaaS Platform - Boost Your Business Growth by 300%',
  description: 'Transform your business with our powerful SaaS platform. Join 10,000+ businesses using advanced analytics, automation, and enterprise security.',
  keywords: 'SaaS, business growth, analytics, automation, productivity',
  openGraph: {
    title: 'SaaS Platform - Boost Your Business Growth by 300%',
    description: 'Transform your business with our powerful SaaS platform.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}