'use client';

import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import { Clock, HeartHandshake, MessageSquare, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { CTA_URL } from '@/constants/links';

export default function SupportPage() {
  const supportFeatures = [
    {
      icon: <Clock className="w-12 h-12 text-luxury-gold-300" />,
      title: '24/7 Support',
      description: 'Our dedicated team is available round the clock to assist you with any technical needs or inquiries.'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-luxury-gold-300" />,
      title: 'Quick Response',
      description: 'Experience priority support with our guaranteed response time of under 2 hours for critical issues.'
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-luxury-gold-300" />,
      title: 'Secure Communication',
      description: 'Your information is protected with enterprise-grade security and end-to-end encryption protocols.'
    },
    {
      icon: <HeartHandshake className="w-12 h-12 text-luxury-gold-300" />,
      title: 'Expert Assistance',
      description: 'Connect directly with our senior technical specialists who understand your unique business needs.'
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-luxury-gold-300" />,
      title: 'Phone Support',
      details: '+91 9631864610',
      subtext: 'Available 24/7 for premium clients'
    },
    {
      icon: <Mail className="w-6 h-6 text-luxury-gold-300" />,
      title: 'Email Support',
      details: 'contact@sanganak.org',
      subtext: 'Response within 2 hours'
    },
    {
      icon: <MapPin className="w-6 h-6 text-luxury-gold-300" />,
      title: 'Office Location',
      details: 'Bihar, India',
      subtext: 'Available for in-person consultations'
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
              title="Premium Support"
              subtitle="Experience unparalleled customer service and technical expertise"
            />
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Our dedicated support team combines technical expertise with a deep understanding of your business needs,
              ensuring you receive the highest level of assistance.
            </p>
          </motion.div>

          {/* Support Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {supportFeatures.map((feature, index) => (
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
                  <p className="text-gray-300">{feature.description}</p>
                </LuxuryCard>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="max-w-4xl mx-auto mb-8">
            <LuxuryCard className="p-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-8 text-center">
                Get in Touch
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">{info.icon}</div>
                    <h4 className="text-luxury-gold-300 font-semibold mb-2">{info.title}</h4>
                    <p className="text-white mb-1">{info.details}</p>
                    <p className="text-gray-400 text-sm">{info.subtext}</p>
                  </div>
                ))}
              </div>
            </LuxuryCard>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-6">
              Get Premium Support
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a call with our support team to discuss your needs and get immediate assistance.
            </p>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-luxury-gold-300 via-luxury-gold-400 to-luxury-gold-500 text-black font-medium rounded-full hover:shadow-lg hover:shadow-luxury-gold-300/20 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Call
            </a>
          </motion.div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto pb-16">
            <LuxuryCard className="p-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-8 text-center">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                {[
                  {
                    q: "What is included in premium support?",
                    a: "Our premium support includes 24/7 technical assistance, priority response times, dedicated account managers, and regular system health checks."
                  },
                  {
                    q: "How quickly can I expect a response?",
                    a: "Premium clients receive responses within 2 hours for critical issues. Standard inquiries are addressed within 4 business hours."
                  },
                  {
                    q: "Do you offer on-site support?",
                    a: "Yes, we provide on-site support for enterprise clients in select locations. Contact us to learn more about our on-site services."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-luxury-gold-300/20 pb-6">
                    <h4 className="text-luxury-gold-300 font-semibold mb-2">{faq.q}</h4>
                    <p className="text-gray-300">{faq.a}</p>
                  </div>
                ))}
              </div>
            </LuxuryCard>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
