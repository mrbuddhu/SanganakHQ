import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import { Sparkles, Crown, Target, TrendingUp, Users, DollarSign } from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'
import LuxuryHeading from '@/components/ui/LuxuryHeading'
import LuxuryCard from '@/components/ui/LuxuryCard'
import LuxuryButton from '@/components/ui/LuxuryButton'
import { CTA_URL } from '@/constants/links'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Luxury Branding Services – SanganakHQ | Become a Category King',
  description: 'Become a Category King with SanganakHQ luxury branding. Strategic positioning, premium visual identity, and conversion-optimized copywriting that drives 30% better conversions and market authority.',
  keywords: 'luxury branding, premium brand agency, category king, brand positioning, visual identity, brand strategy, premium branding services, SanganakHQ',
  openGraph: {
    title: 'Luxury Branding Services – SanganakHQ | Become a Category King',
    description: 'Become a Category King with SanganakHQ luxury branding. Strategic positioning, premium visual identity, and conversion-optimized copywriting that drives 30% better conversions and market authority.',
  },
}

export default function LuxuryBrandingPage() {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Brand Positioning",
      description: "Dominate your market segment with authority and create an unforgettable brand presence that commands premium pricing.",
      benefits: [
        "Market research and competitive analysis",
        "Unique value proposition development",
        "Brand differentiation strategy",
        "Premium positioning framework"
      ]
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Signature Visual Identity",
      description: "Premium perception that converts 30% better with luxury design elements that build trust and authority.",
      benefits: [
        "Logo design and brand mark creation",
        "Color palette and typography systems",
        "Visual hierarchy and design principles",
        "Premium brand asset development"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Conversion-Optimized Copywriting",
      description: "Persuasion that drives measurable results with copy that converts visitors into loyal customers.",
      benefits: [
        "Brand voice and tone development",
        "Sales copy and marketing materials",
        "Website and landing page copy",
        "Email and social media content"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comprehensive Brand Guidelines",
      description: "Cohesive, timeless brand consistency across all touchpoints for maximum impact and recognition.",
      benefits: [
        "Brand style guide creation",
        "Usage guidelines and standards",
        "Template and asset library",
        "Team training and implementation"
      ]
    }
  ]

  const results = [
    {
      metric: "30%",
      label: "Better Conversion Rates",
      description: "Premium branding that converts visitors into customers"
    },
    {
      metric: "150%",
      label: "Brand Recognition",
      description: "Increased brand awareness and market presence"
    },
    {
      metric: "40%",
      label: "Premium Pricing",
      description: "Ability to command higher prices with luxury positioning"
    },
    {
      metric: "200%",
      label: "Customer Loyalty",
      description: "Stronger emotional connection and repeat purchases"
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
                title="Luxury Branding Services"
                subtitle="Become a Category King with premium branding that commands authority, drives premium pricing, and builds lasting customer loyalty"
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
                  Ready to Become a Category King?
                </h3>
                <p className="text-xl text-gray-300">
                  Transform your brand into a market leader with premium positioning and luxury design
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
