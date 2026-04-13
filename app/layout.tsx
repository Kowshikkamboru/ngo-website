import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Bahujana Samaja Seva Sangham — Empowering Communities in Telangana',
  description:
    'A registered NGO in Hyderabad dedicated to the social, economic, and cultural upliftment of marginalized communities across Telangana. Join us in serving society and building community.',
  keywords: [
    'NGO Hyderabad', 'Telangana NGO', 'Bahujana Samaja Seva Sangham',
    'community development', 'education', 'healthcare', 'women empowerment',
  ],
  openGraph: {
    title: 'Bahujana Samaja Seva Sangham',
    description: 'Empowering Communities, Transforming Lives in Telangana.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
