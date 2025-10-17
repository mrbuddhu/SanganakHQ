'use client';

import { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import TechStack from '@/components/ui/TechStack';
import HeroSection from '@/components/sections/HeroSection';
import EliteServicesSection from '@/components/sections/EliteServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import FAQSection from '@/components/sections/FAQSection';

export default function Home() {
  const [displayText, setDisplayText] = useState("Launch Faster. Grow Smarter. Innovate at Scale.");
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

        {/* === TESTIMONIALS SECTION === */}
        <TestimonialsSection />

        {/* === CASE STUDIES SECTION === */}
        <CaseStudiesSection />

        {/* === PORTFOLIO SECTION === */}
        <PortfolioSection />

        {/* === ELITE SERVICES SECTION === */}
        <EliteServicesSection />

        {/* === COMPARISON SECTION === */}
        <ComparisonSection />

        {/* === PRICING SECTION === */}
        <PricingSection />

        {/* === TECH STACK SECTION === */}
        <TechStack />

        {/* === PROCESS SECTION === */}
        <ProcessSection />

        {/* === FAQ SECTION === */}
        <FAQSection />

        {/* === NEWSLETTER SECTION === */}
        <NewsletterSection />
      </main>
    </MainLayout>
  );
}