'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToHome from '../ui/BackToHome';
import { usePathname } from 'next/navigation';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative flex flex-col">
      {/* Clean dark background */}
      <div className="absolute inset-0 bg-black -z-10" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#c6a255]/10 -z-10" />
      
      <div className="relative z-0 flex-grow">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </div>
      {!isHomePage && <BackToHome />}
    </div>
  );
}
