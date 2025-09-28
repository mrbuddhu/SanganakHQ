'use client'

import { motion } from 'framer-motion'
import { Gem, Palette, Smartphone, Monitor, Zap } from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'
import LuxuryHeading from '@/components/ui/LuxuryHeading'
import LuxuryCard from '@/components/ui/LuxuryCard'
import LuxuryButton from '@/components/ui/LuxuryButton'
import { CTA_URL } from '@/constants/links'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elite Design Services | SanganakHQ Premium IT Boutique | Convert 25% More Visitors',
  description: 'Convert 25% more visitors into customers with SanganakHQ elite design. Premium UI/UX design, conversion-optimized user journeys, interactive prototypes, and design systems for luxury brands.',
  keywords: 'elite design services, premium UI UX design, conversion optimization, user experience design, interactive prototypes, design systems, luxury design, premium aesthetics',
  openGraph: {
    title: 'Elite Design Services | SanganakHQ Premium IT Boutique | Convert 25% More Visitors',
    description: 'Convert 25% more visitors into customers with SanganakHQ elite design. Premium UI/UX design, conversion-optimized user journeys, and interactive prototypes.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SanganakHQ Elite Design Services',
        type: 'image/png'
      }
    ],
    type: 'website',
    url: 'https://sanganak.org/services/elite-design'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Design Services | SanganakHQ Premium IT Boutique | Convert 25% More Visitors',
    description: 'Convert 25% more visitors into customers with SanganakHQ elite design. Premium UI/UX design, conversion-optimized user journeys, and interactive prototypes.',
    images: ['/og-image.png']
  },
  alternates: {
    canonical: 'https://sanganak.org/services/elite-design'
  }
};

export default function EliteDesignPage() {
  const features = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Bespoke Website & App Design",
      description: "Luxury aesthetics that convert visitors to customers with seamless user experiences across all devices.",
      benefits: [
        "Custom website and mobile app design",
        "Responsive design for all screen sizes",
        "Premium visual hierarchy and layout",
        "User-centered design approach"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Conversion-Optimized User Journeys",
      description: "Designed to maximize revenue and reduce bounce rates with strategic user flow optimization.",
      benefits: [
        "User journey mapping and optimization",
        "Conversion funnel analysis and improvement",
        "A/B testing and performance optimization",
        "Revenue-focused design decisions"
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Interactive Prototypes",
      description: "Experience your product before it's built, reducing development costs and ensuring perfect execution.",
      benefits: [
        "High-fidelity interactive prototypes",
        "User testing and feedback integration",
        "Design validation and iteration",
        "Stakeholder approval and sign-off"
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Premium Design System",
      description: "Consistent luxury across all touchpoints for brand authority and scalable design implementation.",
      benefits: [
        "Comprehensive design system creation",
        "Component library and style guide",
        "Brand consistency across platforms",
        "Scalable design implementation"
      ]
    }
  ]

  const results = [
    {
      metric: "25%",
      label: "Higher Conversion Rate",
      description: "Premium design that converts more visitors into customers"
    },
    {
      metric: "40%",
      label: "Reduced Bounce Rate",
      description: "Engaging user experience that keeps visitors on site"
    },
    {
      metric: "60%",
      label: "Faster Load Times",
      description: "Optimized design for superior performance"
    },
    {
      metric: "200%",
      label: "User Engagement",
      description: "Interactive design that drives user interaction"
    }
  ]

  return (
    <MainLayout>
      <section className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <LuxuryHeading
                title="Elite Design Services"
                subtitle="Convert 25% more visitors into customers with premium design that builds trust, drives engagement, and maximizes revenue"
              />
            </motion.div>
          </div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12" style={{
              background: 'linear-gradient(to right, #c6a255, #e9d5a1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Measurable Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <LuxuryCard className="text-center p-6">
                    <div className="text-4xl font-bold text-[#c6a255] mb-2">{result.metric}</div>
                    <div className="text-lg font-semibold text-white mb-2">{result.label}</div>
                    <div className="text-gray-300 text-sm">{result.description}</div>
                  </LuxuryCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12" style={{
              background: 'linear-gradient(to right, #c6a255, #e9d5a1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <LuxuryCard className="p-8">
                    <div className="text-[#c6a255] mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-[#c6a255] mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-3">
                          <span className="text-[#c6a255] mt-1">•</span>
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </LuxuryCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold" style={{
                  background: 'linear-gradient(to right, #c6a255, #e9d5a1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Ready to Convert More Visitors?
                </h3>
                <p className="text-xl text-gray-300">
                  Transform your digital presence with premium design that drives results
                </p>
              </div>
              <div>
                <Link href={CTA_URL} target="_blank">
                  <LuxuryButton size="lg" variant="primary">
                    Book Strategy Call
                  </LuxuryButton>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  )
}
