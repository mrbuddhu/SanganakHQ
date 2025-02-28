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
      description: "Elevate your brand with our premium digital identity services.",
      features: [
        "Custom Brand Strategy",
        "Visual Identity Design",
        "Brand Guidelines",
        "Copywriting"
      ]
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Elite Design",
      description: "Bespoke UI/UX design solutions for discerning clients.",
      features: [
        "Custom Website Design",
        "Mobile App Design",
        "User Experience Strategy",
        "Interactive Prototypes"
      ]
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Bespoke Applications",
      description: "Custom software solutions tailored to your needs.",
      features: [
        "Custom Web/Mobile Dev",
        "E-Commerce Solution",
        "Landing Pages",
        "SaaS Solution"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Blockchain Innovation",
      description: "Advanced blockchain solutions for modern enterprises.",
      features: [
        "Smart Contract Development",
        "DApp Architecture",
        "Blockchain Integration",
        "Security Auditing"
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Advanced AI",
      description: "Cutting-edge AI solutions for business transformation.",
      features: [
        "Custom AI Models",
        "Machine Learning",
        "Data Analytics",
        "Process Automation"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Elite Package",
      description: "Comprehensive digital transformation solution.",
      features: [
        "Complete Brand Identity & Design",
        "Custom Software Development",
        "AI & Blockchain Integration *",
        "Ongoing Support & Evolution"
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
                  <div className="relative">
                    <div className="text-[#c6a255] mb-4 text-2xl">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#c6a255] mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <span className="text-[#c6a255]">•</span>
                          {feature}
                        </li>
                      ))}
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
