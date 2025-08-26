import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Analytics from '@/components/Analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://saas-landing-page-five-gamma.vercel.app'),
  title: 'Ecoverve - High-Converting SaaS Landing Page',
  description: 'Transform your business with Ecoverve TechSolution. Join 10,000+ businesses using advanced analytics, automation, and enterprise security.',
  keywords: 'SaaS, business growth, analytics, automation, productivity',
  openGraph: {
    title: 'Ecoverve - High-Converting SaaS Landing Page',
    description: 'Transform your business with Ecoverve TechSolution.',
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