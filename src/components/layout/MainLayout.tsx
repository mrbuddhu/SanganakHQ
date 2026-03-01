'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToHome from '../ui/BackToHome';
import { usePathname } from 'next/navigation';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative flex flex-col">
      {/* Clean dark background — full width */}
      <div className="absolute inset-0 bg-black -z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#c6a255]/[0.06] -z-10" />

      <div className="relative z-0 flex-grow w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <Navbar />
        <main className="w-full overflow-x-hidden [&_h1]:whitespace-normal">
          {children}
        </main>
        <Footer />
      </div>
      {!isHomePage && <BackToHome />}
    </div>
  );
}
