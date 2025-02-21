'use client';

import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import { FileText, Shield, Scale, Clock } from 'lucide-react';

export default function TermsPage() {
  const sections = [
    {
      icon: <FileText className="w-8 h-8 text-luxury-gold-300" />,
      title: 'Service Agreement',
      content: [
        {
          subtitle: 'Acceptance of Terms',
          text: 'By accessing or using Sanganak Premium services, you agree to be bound by these Terms of Service and all applicable laws and regulations.'
        },
        {
          subtitle: 'Service Description',
          text: 'We provide premium technology consulting, development, and digital transformation services. The specific scope of services will be detailed in your service agreement.'
        }
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-luxury-gold-300" />,
      title: 'Data & Privacy',
      content: [
        {
          subtitle: 'Data Protection',
          text: 'We implement industry-standard security measures to protect your data. Our data handling practices comply with GDPR and other relevant regulations.'
        },
        {
          subtitle: 'Confidentiality',
          text: 'We maintain strict confidentiality of all client information and require signed NDAs for all projects.'
        }
      ]
    },
    {
      icon: <Scale className="w-8 h-8 text-luxury-gold-300" />,
      title: 'Rights & Responsibilities',
      content: [
        {
          subtitle: 'Intellectual Property',
          text: 'Unless otherwise specified in the service agreement, you retain all rights to your existing IP, while we retain rights to our proprietary tools and methodologies.'
        },
        {
          subtitle: 'Client Obligations',
          text: 'Clients are responsible for providing timely feedback, necessary access, and maintaining the confidentiality of their account credentials.'
        }
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-luxury-gold-300" />,
      title: 'Term & Termination',
      content: [
        {
          subtitle: 'Duration',
          text: 'The term of service begins upon agreement signing and continues as specified in your service contract.'
        },
        {
          subtitle: 'Termination',
          text: 'Either party may terminate the agreement with written notice as per the conditions specified in your service contract.'
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <main className="min-h-screen bg-black text-white pt-24">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <LuxuryHeading
              title="Terms of Service"
              subtitle="Our commitment to transparency and excellence"
            />
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              These terms establish the foundation of our business relationship. We believe in clear,
              fair, and transparent terms that protect both parties while enabling successful collaboration.
            </p>
          </motion.div>

          {/* Last Updated */}
          <div className="max-w-4xl mx-auto mb-12">
            <LuxuryCard className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-gray-300">
                  <span className="text-luxury-gold-300">Last Updated:</span> February 21, 2025
                </p>
                <a
                  href="/terms.pdf"
                  className="text-luxury-gold-300 hover:text-luxury-gold-200 transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Download PDF Version
                </a>
              </div>
            </LuxuryCard>
          </div>

          {/* Terms Sections */}
          <div className="max-w-4xl mx-auto space-y-8 pb-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <LuxuryCard className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 mt-1">{section.icon}</div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-6">
                        {section.title}
                      </h2>
                      <div className="space-y-6">
                        {section.content.map((item, i) => (
                          <div key={i}>
                            <h3 className="text-luxury-gold-300 font-semibold mb-2">{item.subtitle}</h3>
                            <p className="text-gray-300">{item.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </LuxuryCard>
              </motion.div>
            ))}

            {/* Additional Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sections.length * 0.1 }}
            >
              <LuxuryCard className="p-8">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-6">
                  Additional Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-luxury-gold-300 font-semibold mb-2">Modifications</h3>
                    <p className="text-gray-300">
                      We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting
                      to our website. Your continued use of our services constitutes acceptance of the modified terms.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-luxury-gold-300 font-semibold mb-2">Governing Law</h3>
                    <p className="text-gray-300">
                      These terms are governed by the laws of California, United States. Any disputes shall be resolved
                      in the courts of San Francisco, California.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-luxury-gold-300 font-semibold mb-2">Contact</h3>
                    <p className="text-gray-300">
                      For any questions regarding these terms, please contact our legal team at{' '}
                      <a
                        href="mailto:legal@sanganakpremium.com"
                        className="text-luxury-gold-300 hover:text-luxury-gold-200 transition-colors"
                      >
                        legal@sanganakpremium.com
                      </a>
                    </p>
                  </div>
                </div>
              </LuxuryCard>
            </motion.div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
