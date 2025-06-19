'use client';

import { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import TechStack from '@/components/ui/TechStack';
import HeroSection from '@/components/sections/HeroSection';
import EliteServicesSection from '@/components/sections/EliteServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import FAQSection from '@/components/sections/FAQSection';

export default function Home() {
  const [displayText, setDisplayText] = useState("#1 Premium IT Boutique");
  const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);

  // Animated counters for hero section
  useEffect(() => {
    let projectTarget = 50;
    let clientTarget = 15;
    let projectInterval = setInterval(() => {
      setProjectCount((prev) => {
        if (prev < projectTarget) {
          return prev + 1;
        } else {
          clearInterval(projectInterval);
          return prev;
        }
      });
    }, 30);
    let clientInterval = setInterval(() => {
      setClientCount((prev) => {
        if (prev < clientTarget) {
          return prev + 1;
        } else {
          clearInterval(clientInterval);
          return prev;
        }
      });
    }, 80);
    return () => {
      clearInterval(projectInterval);
      clearInterval(clientInterval);
    };
  }, []);

  return (
    <MainLayout>
      <main>
        {/* === HERO SECTION === */}
        <HeroSection displayText={displayText} projectCount={projectCount} clientCount={clientCount} />

        {/* === ELITE SERVICES SECTION === */}
        <EliteServicesSection />

        {/* === TECH STACK SECTION === */}
        <TechStack />

        {/* === PORTFOLIO SECTION === */}
        <PortfolioSection />

        {/* === TESTIMONIALS SECTION === */}
        <TestimonialsSection />

        {/* === PRICING SECTION === */}
        <PricingSection />

        {/* === PROCESS SECTION === */}
        <ProcessSection />

        {/* === COMPARISON SECTION === */}
        <ComparisonSection />

        {/* === NEWSLETTER SECTION === */}
        <NewsletterSection />

        {/* === FAQ SECTION === */}
        <FAQSection />
      </main>
    </MainLayout>
  );
}