'use client';

import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import LuxuryButton from '@/components/ui/LuxuryButton';
import { Code2, Gem, Globe, Lightbulb, Shield, Sparkles } from 'lucide-react';
import { CTA_URL } from '@/constants/links';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | SanganakHQ Premium Innovation Solutions',
  description: 'Choose your path to market leadership with SanganakHQ premium services: Luxury Branding, Elite Design, Bespoke Applications, Blockchain Innovation, AI Solutions, and Marketing HQ.',
  keywords: 'SanganakHQ services, premium innovation solutions, luxury branding, elite design, bespoke applications, blockchain innovation, AI solutions, marketing HQ',
  openGraph: {
    title: 'Services | SanganakHQ Premium Innovation Solutions',
    description: 'Choose your path to market leadership with SanganakHQ premium services: Luxury Branding, Elite Design, Bespoke Applications, Blockchain Innovation, AI Solutions, and Marketing HQ.',
  },
};
// Services Page Component - Premium services ko showcase karne wala main component
// Features:
// - Responsive grid layout - Mobile se desktop tak adaptive design
// - Service cards - Har service ke liye premium card with icon and details
// - Smooth animations - Framer Motion se smooth transitions and effects
// - CTA section - Call-to-action section for user engagement

// Services List:
// - Luxury Branding - Brand identity and strategy
// - Elite Design - UI/UX design solutions
// - Bespoke Applications - Custom software development
// - Blockchain Innovation - Advanced blockchain solutions
// - Advanced AI - AI/ML solutions
// - Elite Package - Comprehensive digital solutions

// Animation Features:
// - Scroll-based animations using Framer Motion
// - Smooth card hover effects
// - Fade-in animations for sections

export default function Services() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Luxury Branding",
      description: "Become a Category King with a brand that commands authority, drives premium pricing, and builds lasting customer loyalty.",
      features: [
        "Strategic Brand Positioning – Dominate your market segment with authority",
        "Signature Visual Identity – Premium perception that converts 30% better",
        "Comprehensive Brand Guidelines – Cohesive, timeless brand consistency",
        "Conversion-Optimized Copywriting – Persuasion that drives measurable results"
      ]
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Elite Design",
      description: "Convert 25% more visitors into customers with premium design that builds trust, drives engagement, and maximizes revenue.",
      features: [
        "Bespoke Website & App Design – Luxury aesthetics that convert visitors to customers",
        "Conversion-Optimized User Journeys – Designed to maximize revenue and reduce bounce rates",
        "Interactive Prototypes – Experience your product before it's built, reducing development costs",
        "Premium Design System – Consistent luxury across all touchpoints for brand authority"
      ]
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Bespoke Applications",
      description: "Launch 3x faster with custom software that scales with your growth, handles enterprise traffic, and delivers measurable ROI.",
      features: [
        "Custom Web & Mobile Development – Precision-engineered for impact and scale",
        "E-Commerce Mastery – Increase average order value by 40% with elite UX",
        "Conversion-Driven Landing Pages – Designed to captivate and convert visitors",
        "SaaS Product Development – Future-proof architecture that grows with your business"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Blockchain Innovation",
      description: "Lead the Web3 revolution with blockchain solutions that create new revenue streams, reduce costs by 60%, and future-proof your business.",
      features: [
        "Smart Contract Development – Automate processes with absolute security and transparency",
        "Next-Gen DApps – Redefine user experiences with decentralized applications",
        "Enterprise Blockchain Integration – Elevate your business with Web3 infrastructure",
        "Tokenomics & Strategy – Design sustainable blockchain ecosystems that drive adoption"
      ]
    },
    {  icon: <Lightbulb className="w-8 h-8" />,
      title: "AI-Powered Intelligence",
      description: "Increase efficiency by 80% and reduce operational costs by 50% with AI solutions that predict, optimize, and automate your business processes.",
      features: [
        "Custom AI Models & Machine Learning – Predict customer behavior, optimize operations, automate workflows",
        "AI-Driven Business Insights – Data-powered growth strategies that increase revenue by 35%",
        "Process Automation – Scale smarter, work faster, reduce manual tasks by 80%",
        "Computer Vision & NLP – Cutting-edge AI experiences that delight customers and drive engagement"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Marketing HQ",
      description: "Grow revenue by 200% and reduce customer acquisition costs by 40% with data-driven marketing strategies that scale your business.",
      features: [
        "SEO & Content Marketing – Rank higher, build compounding inbound traffic, increase organic revenue by 150%",
        "Social Media Strategy & Management – Grow engagement by 300%, build brand authority, drive qualified leads",
        "Paid Ads (Google, Meta, LinkedIn) – Acquire customers with profitable CAC, scale profitable campaigns",
        "Email Marketing & Automations – Nurture leads, increase LTV by 60%, automate customer journeys",
        "Performance Analytics & Reporting – Track ROI, optimize monthly, make data-driven decisions"
      ]
    }
  ];

  return (
    <MainLayout>
      <section className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <LuxuryHeading 
            title="Premium Service Verticals"
            subtitle="Six elite pathways to measurable growth and market leadership"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <LuxuryCard className="flex flex-col h-full">
                  <div className="relative p-4 flex flex-col h-full">
                    <div className="text-[#c6a255] mb-3 text-2xl">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#c6a255] mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-3">{service.description}</p>
                    <ul className="space-y-2 text-gray-300 text-sm flex-grow">
                      {service.features.map((feature, featureIndex) => {
                        const [firstPart, ...rest] = feature.split('–').map(part => part.trim());
                        return (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <span className="text-[#c6a255] mt-1">•</span>
                            <span className="flex-1">
                              <span className="text-[#c6a255]">{firstPart}</span>
                              {rest.length > 0 && (
                                <span className="text-gray-300 block mt-1">{rest.join(' ')}</span>
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </LuxuryCard>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold" style={{
                  background: 'linear-gradient(to right, #c6a255, #e9d5a1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Launch Faster. Grow Smarter. Innovate at Scale.
                </h3>
                <p className="text-xl text-gray-300">
                  Choose Your Path to Market Leadership
                </p>
              </div>
              <div>
                <Link href={CTA_URL} target="_blank">
                  <LuxuryButton size="lg" variant="primary">
                    Book Strategy Call
                  </LuxuryButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
