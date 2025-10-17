'use client';

import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import { Shield, Lock, Settings, Info } from 'lucide-react';

export default function CookiesPage() {
  const cookieTypes = [
    {
      icon: <Shield className="w-8 h-8 text-luxury-gold-300" />,
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.',
      examples: ['Authentication', 'Security tokens', 'Session management']
    },
    {
      icon: <Settings className="w-8 h-8 text-luxury-gold-300" />,
      title: 'Functional Cookies',
      description: 'These cookies enable us to provide enhanced functionality and personalization. They may be set by us or by third-party providers.',
      examples: ['Language preferences', 'Theme settings', 'User preferences']
    },
    {
      icon: <Info className="w-8 h-8 text-luxury-gold-300" />,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: ['Page views', 'Navigation paths', 'User behavior']
    },
    {
      icon: <Lock className="w-8 h-8 text-luxury-gold-300" />,
      title: 'Marketing Cookies',
      description: 'These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.',
      examples: ['Ad targeting', 'Campaign tracking', 'User profiling']
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
              title="Cookie Policy"
              subtitle="Understanding how we protect and enhance your experience"
            />
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              At Sanganak Premium, we value your privacy and are committed to transparency in how we use cookies
              to deliver a premium digital experience.
            </p>
          </motion.div>

          {/* Cookie Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <LuxuryCard className="p-8 h-full hover:border-luxury-gold-300/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{type.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-3">
                        {type.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{type.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {type.examples.map((example, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm rounded-full bg-luxury-gold-300/10 text-luxury-gold-300 border border-luxury-gold-300/20"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </LuxuryCard>
              </motion.div>
            ))}
          </div>

          {/* Detailed Information */}
          <div className="max-w-4xl mx-auto pb-16">
            <LuxuryCard className="p-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-8">
                Cookie Management
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-luxury-gold-300 font-semibold mb-3">How to Control Cookies</h4>
                  <p className="text-gray-300 mb-4">
                    You can control and/or delete cookies as you wish. You can delete all cookies that are
                    already on your computer and you can set most browsers to prevent them from being placed.
                    If you do this, however, you may have to manually adjust some preferences every time you
                    visit a site and some services and functionalities may not work.
                  </p>
                </div>

                <div>
                  <h4 className="text-luxury-gold-300 font-semibold mb-3">Browser Settings</h4>
                  <p className="text-gray-300 mb-4">
                    Most web browsers allow some control of most cookies through the browser settings. To find
                    out more about cookies, including how to see what cookies have been set, visit{' '}
                    <a
                      href="https://www.aboutcookies.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-luxury-gold-300 hover:text-luxury-gold-200 transition-colors"
                    >
                      www.aboutcookies.org
                    </a>
                  </p>
                </div>

                <div>
                  <h4 className="text-luxury-gold-300 font-semibold mb-3">Updates to This Policy</h4>
                  <p className="text-gray-300">
                    We may update this Cookie Policy from time to time in order to reflect changes to the cookies
                    we use or for other operational, legal, or regulatory reasons. Please therefore revisit
                    this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                  </p>
                </div>

                <div className="border-t border-luxury-gold-300/20 pt-8">
                  <h4 className="text-luxury-gold-300 font-semibold mb-3">Contact Us</h4>
                  <p className="text-gray-300">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us at{' '}
                    <a
                      href="mailto:contact@sanganak.org"
                      className="text-luxury-gold-300 hover:text-luxury-gold-200 transition-colors"
                    >
                      contact@sanganak.org
                    </a>
                  </p>
                </div>
              </div>
            </LuxuryCard>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
