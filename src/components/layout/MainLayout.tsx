'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToHome from '../ui/BackToHome';
import { usePathname } from 'next/navigation';

interface MainLayoutProps {
  children: ReactNode;
}

// MainLayout component - Ye hamara main layout component hai jo pure application ka structure maintain karta hai
// Props:
// - children: React.ReactNode - Is prop mein child components pass hote hain jo layout ke andar render honge
export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative flex flex-col px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
      {/* Clean dark background */}
      <div className="absolute inset-0 bg-black -z-10" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#c6a255]/10 -z-10" />
      
      <div className="relative z-0 flex-grow w-full max-w-[1440px] mx-auto">
        <Navbar />
        <main className="w-full overflow-x-hidden px-2 sm:px-4 md:px-6 lg:px-8 [&_h1]:whitespace-normal">
          {children}
        </main>
        <Footer />
      </div>
      {!isHomePage && <BackToHome />}
    </div>
  );
}
