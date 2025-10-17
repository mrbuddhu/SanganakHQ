'use client'

import { motion } from 'framer-motion'
import { Globe, Shield, Zap, TrendingUp } from 'lucide-react'
import MainLayout from '@/components/layout/MainLayout'
import LuxuryHeading from '@/components/ui/LuxuryHeading'
import LuxuryCard from '@/components/ui/LuxuryCard'
import LuxuryButton from '@/components/ui/LuxuryButton'
import { CTA_URL } from '@/constants/links'
import Link from 'next/link'

export default function BlockchainInnovationPage() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Smart Contract Development",
      description: "Automate processes with absolute security and transparency using cutting-edge blockchain technology.",
      benefits: [
        "Custom smart contract development",
        "Security auditing and testing",
        "Gas optimization and efficiency",
        "Multi-chain deployment support"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Next-Gen DApps",
      description: "Redefine user experiences with decentralized applications that revolutionize how users interact with your platform.",
      benefits: [
        "Decentralized application development",
        "User-friendly Web3 interfaces",
        "Wallet integration and connectivity",
        "Cross-platform compatibility"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Enterprise Blockchain Integration",
      description: "Elevate your business with Web3 infrastructure that creates new revenue streams and reduces operational costs.",
      benefits: [
        "Enterprise blockchain solutions",
        "Private and public chain integration",
        "API development and integration",
        "Legacy system modernization"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Tokenomics & Strategy",
      description: "Design sustainable blockchain ecosystems that drive adoption and create long-term value for your business.",
      benefits: [
        "Token economics design",
        "Governance model development",
        "Incentive structure creation",
        "Market strategy and positioning"
      ]
    }
  ]

  const results = [
    {
      metric: "60%",
      label: "Cost Reduction",
      description: "Automate processes and reduce operational costs"
    },
    {
      metric: "3x",
      label: "New Revenue Streams",
      description: "Create additional revenue through Web3 integration"
    },
    {
      metric: "99.9%",
      label: "Security",
      description: "Blockchain-level security and transparency"
    },
    {
      metric: "10x",
      label: "Efficiency",
      description: "Automated processes and smart contracts"
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
                title="Blockchain Innovation"
                subtitle="Lead the Web3 revolution with blockchain solutions that create new revenue streams, reduce costs by 60%, and future-proof your business"
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
                  Ready to Lead Web3?
                </h3>
                <p className="text-xl text-gray-300">
                  Transform your business with blockchain innovation and create new revenue streams
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
      {/* JSON-LD: Service + Breadcrumbs (non-visual) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Blockchain Innovation',
            url: 'https://sanganak.org/services/blockchain-innovation'
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sanganak.org/' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://sanganak.org/services' },
              { '@type': 'ListItem', position: 3, name: 'Blockchain Innovation', item: 'https://sanganak.org/services/blockchain-innovation' }
            ]
          })
        }}
      />
    </MainLayout>
  )
}
