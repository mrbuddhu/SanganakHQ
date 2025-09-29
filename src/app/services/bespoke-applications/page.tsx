'use client'

import { motion } from 'framer-motion'
import { Code2, Smartphone, Globe, ShoppingCart, Rocket } from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'
import LuxuryHeading from '@/components/ui/LuxuryHeading'
import LuxuryCard from '@/components/ui/LuxuryCard'
import LuxuryButton from '@/components/ui/LuxuryButton'
import { CTA_URL } from '@/constants/links'
import Link from 'next/link'
import type { Metadata } from 'next'

// Note: Metadata cannot be exported from client components
// This will be handled by the layout or a separate metadata file

export default function BespokeApplicationsPage() {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Custom Web & Mobile Development",
      description: "Precision-engineered for impact and scale with modern technologies that handle enterprise-level traffic.",
      benefits: [
        "Next.js and React Native development",
        "Scalable architecture and infrastructure",
        "Performance optimization and monitoring",
        "Cross-platform compatibility"
      ]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Mastery",
      description: "Increase average order value by 40% with elite UX that converts visitors into loyal customers.",
      benefits: [
        "Custom e-commerce platform development",
        "Payment gateway integration",
        "Inventory management systems",
        "Customer relationship management"
      ]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "SaaS Product Development",
      description: "Future-proof architecture that grows with your business and scales to millions of users.",
      benefits: [
        "Multi-tenant SaaS architecture",
        "User authentication and authorization",
        "Subscription billing and management",
        "API development and integration"
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "No-Code Solutions",
      description: "Webflow for web, Flutterflow for mobile, launch in 2 weeks with rapid prototyping and deployment.",
      benefits: [
        "Webflow website development",
        "Flutterflow mobile app creation",
        "Rapid prototyping and iteration",
        "Quick deployment and scaling"
      ]
    }
  ]

  const results = [
    {
      metric: "3x",
      label: "Faster Launch",
      description: "Get to market faster with optimized development processes"
    },
    {
      metric: "40%",
      label: "Higher AOV",
      description: "Increase average order value with premium UX"
    },
    {
      metric: "99.9%",
      label: "Uptime",
      description: "Enterprise-grade reliability and performance"
    },
    {
      metric: "10x",
      label: "Scalability",
      description: "Handle millions of users with ease"
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
                title="Bespoke Applications"
                subtitle="Launch 3x faster with custom software that scales with your growth, handles enterprise traffic, and delivers measurable ROI"
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
                  Ready to Launch Faster?
                </h3>
                <p className="text-xl text-gray-300">
                  Build custom software that scales with your business and delivers measurable ROI
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
