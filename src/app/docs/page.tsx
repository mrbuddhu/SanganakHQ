'use client';

import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import { Book, Code2, Terminal, Workflow, ArrowRight } from 'lucide-react';

export default function DocsPage() {
  const docs = [
    {
      icon: <Book className="w-12 h-12 text-luxury-gold-300" />,
      title: "Getting Started",
      description: "Essential guides to begin your journey with Sanganak's premium services.",
      links: [
        { title: "Platform Overview", href: "#" },
        { title: "Quick Start Guide", href: "#" },
        { title: "Best Practices", href: "#" }
      ]
    },
    {
      icon: <Code2 className="w-12 h-12 text-luxury-gold-300" />,
      title: "API Documentation",
      description: "Comprehensive API documentation for seamless integration.",
      links: [
        { title: "Authentication", href: "#" },
        { title: "Endpoints", href: "#" },
        { title: "Rate Limits", href: "#" }
      ]
    },
    {
      icon: <Terminal className="w-12 h-12 text-luxury-gold-300" />,
      title: "Technical Guides",
      description: "In-depth technical documentation for developers and engineers.",
      links: [
        { title: "System Architecture", href: "#" },
        { title: "Security Guidelines", href: "#" },
        { title: "Performance Tips", href: "#" }
      ]
    },
    {
      icon: <Workflow className="w-12 h-12 text-luxury-gold-300" />,
      title: "Workflows",
      description: "Step-by-step guides for common workflows and processes.",
      links: [
        { title: "Project Setup", href: "#" },
        { title: "Deployment Guide", href: "#" },
        { title: "Monitoring", href: "#" }
      ]
    }
  ];

  return (
    <MainLayout>
      <main className="min-h-screen bg-black text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LuxuryHeading
              title="Documentation"
              subtitle="Comprehensive guides and resources for our premium services"
              className="mb-16"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {docs.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <LuxuryCard className="p-8 h-full hover:border-luxury-gold-300/50 transition-colors">
                  <div className="mb-6">{section.icon}</div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{section.description}</p>
                  <ul className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="flex items-center text-gray-400 hover:text-luxury-gold-300 transition-colors group"
                        >
                          <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </LuxuryCard>
              </motion.div>
            ))}
          </div>

          {/* Search Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-24 text-center max-w-4xl mx-auto"
          >
            <LuxuryCard className="p-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-4">
                Can't find what you're looking for?
              </h2>
              <p className="text-gray-300 mb-8">
                Our support team is here to help you with any questions or technical issues.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-luxury-gold-300 via-luxury-gold-400 to-luxury-gold-500 text-black font-medium rounded-full hover:shadow-lg hover:shadow-luxury-gold-300/20 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </a>
            </LuxuryCard>
          </motion.div>
        </div>
      </main>
    </MainLayout>
  );
}
