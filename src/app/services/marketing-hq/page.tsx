'use client'

import { motion } from 'framer-motion'
import { Shield, Search, Share2, Mail, BarChart3 } from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'
import LuxuryHeading from '@/components/ui/LuxuryHeading'
import LuxuryCard from '@/components/ui/LuxuryCard'
import LuxuryButton from '@/components/ui/LuxuryButton'
import { CTA_URL } from '@/constants/links'
import Link from 'next/link'

export default function MarketingHQPage() {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO & Content Marketing",
      description: "Rank higher, build compounding inbound traffic, and increase organic revenue by 150% with strategic SEO and content marketing.",
      benefits: [
        "Technical SEO optimization",
        "Content strategy and creation",
        "Keyword research and targeting",
        "Link building and authority development"
      ]
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Strategy & Management",
      description: "Grow engagement by 300%, build brand authority, and drive qualified leads with strategic social media management.",
      benefits: [
        "Social media strategy development",
        "Content creation and curation",
        "Community management and engagement",
        "Influencer partnerships and collaborations"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Paid Ads (Google, Meta, LinkedIn)",
      description: "Acquire customers with profitable CAC and scale profitable campaigns across all major advertising platforms.",
      benefits: [
        "Google Ads and search campaigns",
        "Facebook and Instagram advertising",
        "LinkedIn B2B marketing",
        "Campaign optimization and scaling"
      ]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Marketing & Automations",
      description: "Nurture leads, increase LTV by 60%, and automate customer journeys with sophisticated email marketing strategies.",
      benefits: [
        "Email marketing strategy and design",
        "Marketing automation workflows",
        "Lead nurturing sequences",
        "Customer retention campaigns"
      ]
    }
  ]

  const results = [
    {
      metric: "200%",
      label: "Revenue Growth",
      description: "Data-driven strategies that scale your business"
    },
    {
      metric: "40%",
      label: "Lower CAC",
      description: "Reduce customer acquisition costs with optimization"
    },
    {
      metric: "150%",
      label: "Organic Traffic",
      description: "SEO and content marketing that compounds over time"
    },
    {
      metric: "300%",
      label: "Engagement",
      description: "Social media strategies that build community"
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
                title="Marketing HQ"
                subtitle="Grow revenue by 200% and reduce customer acquisition costs by 40% with data-driven marketing strategies that scale your business"
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
                  Ready to Scale Your Marketing?
                </h3>
                <p className="text-xl text-gray-300">
                  Grow revenue and reduce costs with data-driven marketing strategies
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
