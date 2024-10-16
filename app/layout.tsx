"use client";

import Header from '../components/globals/header';
import Footer from '../components/globals/footer';
import WelcomeModal from '@/components/globals/models/WelcomeModal';
import { Metadata } from "next";
import "./globals.css";
import { useEffect, useState } from 'react';


const generateMetadata = (): Metadata => ({
  title: "100 KARMA",
  description: "Generated by KARMA",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem('hasShownWelcomeModal');

    const isMobile = () => window.innerWidth <= 768;

    if (!hasModalBeenShown && isMobile()) {
      setShowModal(true);
      localStorage.setItem('hasShownWelcomeModal', 'true');
    }

    const checkMobile = () => {
      if (isMobile()) {
        setShowModal(!hasModalBeenShown);
      } else {
        setShowModal(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  const metadata: Metadata = generateMetadata();

  return (
    <html lang="en">
      <head>
      <title>{metadata.title as string}</title>
      <meta name="description" content={metadata.description || ''} />
      </head>
      <body className='bg-[#20282F]'>
        <Header />
        {children}
        <Footer />
        {showModal && (
          <WelcomeModal onClose={() => setShowModal(false)} />
        )}
      </body>
    </html>
  );
}