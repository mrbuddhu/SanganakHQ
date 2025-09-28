'use client';

import { motion } from 'framer-motion';
import { CTA_URL } from '@/constants/links';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight, Calendar } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact SanganakHQ | Book Strategy Call | #1 Premium IT Boutique',
  description: 'Contact SanganakHQ - the #1 Premium IT Boutique. Book your strategy call to discuss luxury branding, elite design, AI solutions, and blockchain innovation. Fast response, expert support.',
  keywords: 'contact SanganakHQ, book strategy call, premium IT boutique contact, luxury branding consultation, elite design consultation, AI solutions consultation, blockchain consultation',
  openGraph: {
    title: 'Contact SanganakHQ | Book Strategy Call | #1 Premium IT Boutique',
    description: 'Contact SanganakHQ - the #1 Premium IT Boutique. Book your strategy call to discuss luxury branding, elite design, AI solutions, and blockchain innovation.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact SanganakHQ - Book Strategy Call',
        type: 'image/png'
      }
    ],
    type: 'website',
    url: 'https://sanganak.org/contact'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact SanganakHQ | Book Strategy Call | #1 Premium IT Boutique',
    description: 'Contact SanganakHQ - the #1 Premium IT Boutique. Book your strategy call to discuss luxury branding, elite design, AI solutions, and blockchain innovation.',
    images: ['/og-image.png']
  },
  alternates: {
    canonical: 'https://sanganak.org/contact'
  }
};
 

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="w-12 h-12 text-luxury-gold-300" />,
      title: 'Email',
      content: 'contact@sanganak.org',
      link: 'mailto:contact@sanganak.org',
      description: 'Available 24/7 for your inquiries'
    },
    {
      icon: <Phone className="w-12 h-12 text-luxury-gold-300" />,
      title: 'Phone',
      content: '+91 9631864610',
      link: 'tel:+919631864610',
      description: 'Monday to Friday, 9AM - 6PM IST'
    },
    {
      icon: <MapPin className="w-12 h-12 text-luxury-gold-300" />,
      title: 'Address',
      content: 'Bihar, India',
      description: 'Our headquarters'
    }
  ];

  const highlights = [
    {
      icon: <Clock className="w-8 h-8 text-luxury-gold-300" />,
      title: 'Fast Response',
      description: 'We aim to respond to all inquiries within 24 hours'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-luxury-gold-300" />,
      title: 'Expert Support',
      description: 'Direct access to our specialized technical team'
    },
    {
      icon: <Calendar className="w-8 h-8 text-luxury-gold-300" />,
      title: 'Easy Scheduling',
      description: 'Book a call at your convenience'
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
              title="Ready to Launch Faster?"
              subtitle="Book Your Strategy Call"
            />
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Ready to grow smarter and innovate at scale? Book a strategy call with our expert team
              to discuss your growth goals and explore tailored solutions for measurable results.
            </p>
            <div className="mt-8">
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-luxury-gold-300 via-luxury-gold-400 to-luxury-gold-500 text-black font-medium rounded-full hover:shadow-lg hover:shadow-luxury-gold-300/20 transition-all duration-300 transform hover:scale-105"
              >
                Book Strategy Call
              </a>
            </div>
          </motion.div>

          {/* Contact Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <LuxuryCard className="p-6 text-center h-full hover:border-luxury-gold-300/50 transition-colors">
                  <div className="flex justify-center mb-4">{highlight.icon}</div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{highlight.description}</p>
                </LuxuryCard>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <LuxuryCard className="p-8 h-full hover:border-luxury-gold-300/50 transition-colors">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6">{info.icon}</div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-4">
                      {info.title}
                    </h3>
                    <p className="text-gray-300 mb-2">
                      {info.link ? (
                        <a
                          href={info.link}
                          className="hover:text-luxury-gold-300 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        info.content
                      )}
                    </p>
                    <p className="text-sm text-gray-400">{info.description}</p>
                  </div>
                </LuxuryCard>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
