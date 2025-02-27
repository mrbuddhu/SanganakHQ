'use client';

import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import LuxuryButton from '@/components/ui/LuxuryButton';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

export default function PrivacyPage() {
  const privacyPolicies = [
    {
      icon: <Shield className="w-8 h-8 text-luxury-gold-300" />,
      title: 'Information Collection',
      description: 'We collect information that you provide directly to us to deliver and improve our services.',
      points: ['Contact information', 'Business details', 'Communication preferences', 'Technical information']
    },
    {
      icon: <Eye className="w-8 h-8 text-luxury-gold-300" />,
      title: 'Information Usage',
      description: 'Your information helps us provide and improve our services while maintaining transparency.',
      points: ['Service delivery', 'Experience personalization', 'Important updates', 'Product improvement']
    },
    {
      icon: <Lock className="w-8 h-8 text-luxury-gold-300" />,
      title: 'Data Security',
      description: 'We implement robust security measures to protect your information from unauthorized access.',
      points: ['Data encryption', 'Security assessments', 'Access controls', 'Continuous monitoring']
    },
    {
      icon: <UserCheck className="w-8 h-8 text-luxury-gold-300" />,
      title: 'Your Rights',
      description: 'We respect and protect your privacy rights, giving you control over your personal information.',
      points: ['Data access', 'Information correction', 'Account deletion', 'Marketing opt-out']
    }
  ];

  return (
    <MainLayout>
      <main className="min-h-screen bg-black text-white pt-24 overflow-y-auto scrollbar-hide scroll-smooth">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <LuxuryHeading
              title="Privacy Policy"
              subtitle="Our commitment to protecting your privacy and data"
            />
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              At Sanganak Premium, we take your privacy seriously and are committed to protecting
              your personal information while delivering premium digital experiences.
            </p>
          </motion.div>

          {/* Privacy Policy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {privacyPolicies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <LuxuryCard className="p-8 h-full hover:border-luxury-gold-300/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{policy.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-3">
                        {policy.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{policy.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {policy.points.map((point, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm rounded-full bg-luxury-gold-300/10 text-luxury-gold-300 border border-luxury-gold-300/20"
                          >
                            {point}
                          </span>
                        ))}                        
                      </div>
                    </div>
                  </div>
                </LuxuryCard>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="max-w-4xl mx-auto pb-16">
            <LuxuryCard className="p-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-8">
                Contact Us
              </h3>
              <p className="text-gray-300 mb-6">
                If you have questions about our privacy practices or would like to exercise your rights,
                please contact our privacy team.
              </p>
            </LuxuryCard>
            <div className="mt-8 text-center">
              <LuxuryButton
                href="mailto:contact@sangnak.org"
                variant="primary"
                size="lg"
                isExternal
              >
                Contact Our Privacy Team
              </LuxuryButton>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
