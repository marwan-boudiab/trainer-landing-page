import type { Metadata } from 'next';
import { Oswald, Roboto } from 'next/font/google';
import './globals.css';

import { Providers } from './providers';
import App from '@/components';

const oswald = Oswald({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'], variable: '--font-oswald' });
const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'], variable: '--font-roboto' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.URL!),

  title: {
    default: 'Blaze - Calisthenics Trainer',
    template: '%s | Blaze - Calisthenics Trainer',
  },
  description: 'Elevate your fitness journey with Blaze. Discover expert calisthenics training, personalized workout plans, and the inspiration you need to achieve peak performance.',

  twitter: { card: 'summary_large_image' },

  openGraph: {
    title: 'Blaze | Calisthenics Trainer',
    description: 'Elevate your fitness journey with Blaze. Discover expert calisthenics training, personalized workout plans, and the inspiration you need to achieve peak performance.',
    type: 'website',
    locale: 'en_US',
    url: process.env.URL!,
    siteName: 'Blaze Calisthenics',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${roboto.variable} mx-auto w-full max-w-[1920px] bg-primary text-white`}>
        <Providers>
          <App>{children}</App>
        </Providers>
      </body>
    </html>
  );
}