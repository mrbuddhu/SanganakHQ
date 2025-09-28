'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Brain, Zap, Eye } from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'
import LuxuryHeading from '@/components/ui/LuxuryHeading'
import LuxuryCard from '@/components/ui/LuxuryCard'
import LuxuryButton from '@/components/ui/LuxuryButton'
import { CTA_URL } from '@/constants/links'
import Link from 'next/link'

// Service JSON-LD Schema for SEO
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI-Powered Intelligence Services',
  description: 'Increase efficiency by 80% and reduce operational costs by 50% with SanganakHQ AI solutions. Custom AI models, automation, and data-driven insights that transform your business.',
  provider: {
    '@type': 'Organization',
    name: 'SanganakHQ',
    url: 'https://sanganak.org'
  },
  serviceType: 'AI Solutions',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI-Powered Intelligence Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom AI Models & Machine Learning',
          description: 'Predict customer behavior, optimize operations, and automate workflows with cutting-edge AI.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI-Driven Business Insights',
          description: 'Data-powered growth strategies that increase revenue by 35% through intelligent analytics.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Process Automation',
          description: 'Scale smarter, work faster, and reduce manual tasks by 80% with intelligent automation.'
        }
      }
    ]
  },
  offers: {
    '@type': 'Offer',
    price: '4999',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    validFrom: '2024-01-01'
  }
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://sanganak.org'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://sanganak.org/services'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'AI-Powered Intelligence',
      item: 'https://sanganak.org/services/ai-powered-intelligence'
    }
  ]
}

export default function AIPoweredIntelligencePage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Custom AI Models & Machine Learning",
      description: "Predict customer behavior, optimize operations, and automate workflows with tailored AI solutions.",
      benefits: [
        "Custom machine learning model development",
        "Predictive analytics and forecasting",
        "Natural language processing (NLP)",
        "Computer vision and image recognition"
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "AI-Driven Business Insights",
      description: "Data-powered growth strategies that increase revenue by 35% with actionable intelligence and recommendations.",
      benefits: [
        "Advanced data analytics and insights",
        "Customer behavior analysis",
        "Market trend identification",
        "Strategic decision support"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Process Automation",
      description: "Scale smarter, work faster, and reduce manual tasks by 80% with intelligent automation solutions.",
      benefits: [
        "Workflow automation and optimization",
        "Robotic process automation (RPA)",
        "Intelligent document processing",
        "Customer service automation"
      ]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Computer Vision & NLP",
      description: "Cutting-edge AI experiences that delight customers and drive engagement with advanced recognition capabilities.",
      benefits: [
        "Image and video analysis",
        "Text and sentiment analysis",
        "Voice recognition and processing",
        "Real-time content moderation"
      ]
    }
  ]

  const results = [
    {
      metric: "80%",
      label: "Efficiency Increase",
      description: "Automate processes and boost productivity"
    },
    {
      metric: "50%",
      label: "Cost Reduction",
      description: "Reduce operational costs with AI automation"
    },
    {
      metric: "35%",
      label: "Revenue Growth",
      description: "Data-driven insights that increase revenue"
    },
    {
      metric: "90%",
      label: "Accuracy",
      description: "AI-powered predictions and recommendations"
    }
  ]

  return (
    <MainLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
                title="AI-Powered Intelligence"
                subtitle="Increase efficiency by 80% and reduce operational costs by 50% with AI solutions that predict, optimize, and automate your business processes"
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
                  Ready to Automate Your Business?
                </h3>
                <p className="text-xl text-gray-300">
                  Transform your operations with AI solutions that predict, optimize, and automate
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
