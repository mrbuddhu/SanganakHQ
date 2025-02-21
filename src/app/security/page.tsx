'use client';

import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import { Shield, Lock, Server, Key, Eye, FileCheck, AlertTriangle, Network } from 'lucide-react';

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: <Shield className="w-12 h-12 text-luxury-gold-300" />,
      title: 'Enterprise-Grade Protection',
      description: 'Military-grade encryption and advanced security protocols to protect your sensitive data.',
      features: [
        'AES-256 encryption',
        'Multi-layer firewalls',
        'DDoS protection',
        'Regular security audits'
      ]
    },
    {
      icon: <Lock className="w-12 h-12 text-luxury-gold-300" />,
      title: 'Access Control',
      description: 'Granular access controls and authentication mechanisms to ensure authorized access only.',
      features: [
        'Multi-factor authentication',
        'Role-based access control',
        'Single sign-on (SSO)',
        'Session management'
      ]
    },
    {
      icon: <Server className="w-12 h-12 text-luxury-gold-300" />,
      title: 'Data Security',
      description: 'Comprehensive data protection measures from storage to transmission.',
      features: [
        'End-to-end encryption',
        'Secure data centers',
        'Regular backups',
        'Data isolation'
      ]
    },
    {
      icon: <Eye className="w-12 h-12 text-luxury-gold-300" />,
      title: 'Monitoring & Response',
      description: '24/7 security monitoring and incident response to detect and prevent threats.',
      features: [
        'Real-time monitoring',
        'Threat detection',
        'Incident response',
        'Security analytics'
      ]
    }
  ];

  const complianceStandards = [
    {
      icon: <Key className="w-8 h-8 text-luxury-gold-300" />,
      title: 'ISO 27001',
      description: 'Certified information security management system'
    },
    {
      icon: <FileCheck className="w-8 h-8 text-luxury-gold-300" />,
      title: 'GDPR Compliant',
      description: 'Full compliance with EU data protection regulations'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-luxury-gold-300" />,
      title: 'SOC 2 Type II',
      description: 'Audited security controls and processes'
    },
    {
      icon: <Network className="w-8 h-8 text-luxury-gold-300" />,
      title: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard'
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
              title="Security & Compliance"
              subtitle="Enterprise-grade protection for your digital assets"
            />
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              At Sanganak Premium, security is not just a feature – it's the foundation of everything we do.
              Our comprehensive security measures ensure your data remains protected at all times.
            </p>
          </motion.div>

          {/* Security Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <LuxuryCard className="p-8 h-full hover:border-luxury-gold-300/50 transition-colors">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold-300" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </LuxuryCard>
              </motion.div>
            ))}
          </div>

          {/* Compliance Standards */}
          <div className="max-w-4xl mx-auto mb-16">
            <LuxuryCard className="p-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-8 text-center">
                Compliance & Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {complianceStandards.map((standard, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">{standard.icon}</div>
                    <div>
                      <h4 className="text-luxury-gold-300 font-semibold mb-2">{standard.title}</h4>
                      <p className="text-gray-300 text-sm">{standard.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </LuxuryCard>
          </div>

          {/* Security Process */}
          <div className="max-w-4xl mx-auto pb-16">
            <LuxuryCard className="p-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-8">
                Our Security Process
              </h3>
              <div className="space-y-8">
                {[
                  {
                    step: '01',
                    title: 'Prevention',
                    description: 'Proactive security measures including regular penetration testing, vulnerability assessments, and security training.'
                  },
                  {
                    step: '02',
                    title: 'Detection',
                    description: 'Advanced threat detection systems monitoring for suspicious activities and potential security breaches 24/7.'
                  },
                  {
                    step: '03',
                    title: 'Response',
                    description: 'Rapid incident response team ready to address and mitigate any security concerns immediately.'
                  },
                  {
                    step: '04',
                    title: 'Recovery',
                    description: 'Comprehensive disaster recovery and business continuity plans to ensure minimal disruption.'
                  }
                ].map((process, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="text-3xl font-bold text-luxury-gold-300/30">{process.step}</div>
                    <div>
                      <h4 className="text-luxury-gold-300 font-semibold mb-2">{process.title}</h4>
                      <p className="text-gray-300">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-luxury-gold-300/20 mt-8 pt-8">
                <h4 className="text-luxury-gold-300 font-semibold mb-3">Security Contact</h4>
                <p className="text-gray-300">
                  For security-related inquiries or to report a security concern, please contact our security team at{' '}
                  <a
                    href="mailto:contact@sanganak.org"
                    className="text-luxury-gold-300 hover:text-luxury-gold-200 transition-colors"
                  >
                    contact@sanganak.org
                  </a>
                </p>
              </div>
            </LuxuryCard>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
