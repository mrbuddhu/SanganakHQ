'use client';

import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import LuxuryButton from '@/components/ui/LuxuryButton';
import { Code2, Gem, Globe, Lightbulb, Shield, Sparkles } from 'lucide-react';
import { CTA_URL } from '@/constants/links';
import Link from 'next/link';
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
      description: "Become a Category King with a brand that exudes authority, prestige, and undeniable influence.",
      features: [
        "Strategic Brand Positioning – Stand out. Stay unforgettable.",
        "Signature Visual Identity – Designed for premium perception.",
        "Comprehensive Brand Guidelines – Cohesive, timeless branding.",
        "Conversion-Optimized Copywriting – Persuasion meets power."
      ]
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Elite Design",
      description: "Experience perfection. Every pixel, every interaction, meticulously crafted to convert.",
      features: [
        "Bespoke Website & App Design – Luxury aesthetics, seamless UX.",
        "Conversion-Optimized User Journeys – Designed to maximize revenue.",
        "Interactive Prototypes – Experience your product before it's built.",
        "Premium Design System – Consistent luxury across platforms."
      ]
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Bespoke Applications",
      description: "Tailor-made digital powerhouses. Scalable, high-performance software for trailblazers.",
      features: [
        "Custom Web & Mobile Development – Precision-engineered for impact.",
        "E-Commerce Mastery – Elevate sales with elite UX.",
        "Conversion-Driven Landing Pages – Designed to captivate and convert.",
        "SaaS Product Development – Future-proofing your business."
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Blockchain Innovation",
      description: "Build the future. We architect blockchain solutions for enterprises ready to lead.",
      features: [
        "Smart Contract Development – Automate with absolute security.",
        "Next-Gen DApps – Redefining decentralized experiences.",
        "Enterprise Blockchain Integration – Elevate your business with Web3.",
        "Tokenomics & Strategy – Designing sustainable blockchain ecosystems."
      ]
    },
    {  icon: <Lightbulb className="w-8 h-8" />,
      title: "AI-Powered Intelligence",
      description: "Unleash the power of data. AI isn't the future—it's your competitive advantage today.",
      features: [
        "Custom AI Models & Machine Learning – Predict. Optimize. Automate.",
        "AI-Driven Business Insights – Data-powered growth strategies.",
        "Process Automation – Scale smarter, work faster.",
        "Computer Vision & NLP – Cutting-edge AI-driven experiences."
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Elite Package",
      description: "The ultimate digital transformation. For businesses serious about dominating their industry.",
      features: [
        "End-to-End Brand Identity & UI/UX – Comprehensive brand and design excellence.",
        "Custom Software, AI & Blockchain Solutions – Cutting-edge technology integration.",
        "Ongoing Innovation & VIP Strategic Growth – Dedicated support and evolution.",
        "Priority Access & Exclusive Benefits – VIP treatment at every step."
      ]
    }
  ];

  return (
    <MainLayout>
      <section className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <LuxuryHeading 
            title="Our Services"
            subtitle="Premium digital solutions tailored to your needs"
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
                <LuxuryCard>
                  <div className="relative p-4">
                    <div className="text-[#c6a255] mb-3 text-2xl">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#c6a255] mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-3">{service.description}</p>
                    <ul className="space-y-2 text-gray-300 text-sm">
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
                  Elevate Your Digital Presence
                </h3>
                <p className="text-xl text-gray-300">
                  Turn Your Vision into Reality
                </p>
              </div>
              <div>
                <Link href={CTA_URL} target="_blank">
                  <LuxuryButton size="lg" variant="primary">
                    Start Your Success Story
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
