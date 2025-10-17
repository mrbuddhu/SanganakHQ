'use client';

import { motion } from 'framer-motion';
import { CTA_URL } from '@/constants/links';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import { Lightbulb, Search, Palette, Code, TestTube, Rocket } from 'lucide-react';
import type { Metadata } from 'next';

// Note: Metadata cannot be exported from client components
// This will be handled by the layout or a separate metadata file

export default function Process() {
  const processSteps = [
    {
      icon: <Lightbulb className="w-12 h-12 text-luxury-gold-300" />,
      title: "Discovery & Vision",
      description: "We begin by understanding your vision, goals, and challenges through in-depth consultations. Our team analyzes your requirements and market position to craft a strategic roadmap.",
      details: [
        "Strategic consultation sessions",
        "Market and competitor analysis",
        "Technical feasibility assessment",
        "Project scope definition"
      ]
    },
    {
      icon: <Search className="w-12 h-12 text-luxury-gold-300" />,
      title: "Research & Planning",
      description: "Our experts conduct thorough research and create detailed project plans. We identify the best technologies and methodologies to achieve your objectives efficiently.",
      details: [
        "Technology stack selection",
        "Architecture planning",
        "Resource allocation",
        "Timeline development"
      ]
    },
    {
      icon: <Palette className="w-12 h-12 text-luxury-gold-300" />,
      title: "Design & Prototyping",
      description: "We create sophisticated designs and interactive prototypes that embody your brand's premium identity while ensuring optimal user experience.",
      details: [
        "UI/UX design creation",
        "Brand integration",
        "Interactive prototyping",
        "Design system development"
      ]
    },
    {
      icon: <Code className="w-12 h-12 text-luxury-gold-300" />,
      title: "Development & Implementation",
      description: "Our skilled developers bring the designs to life using cutting-edge technologies and best practices, ensuring scalable and maintainable solutions.",
      details: [
        "Agile development methodology",
        "Regular progress updates",
        "Code quality assurance",
        "Performance optimization"
      ]
    },
    {
      icon: <TestTube className="w-12 h-12 text-luxury-gold-300" />,
      title: "Testing & Refinement",
      description: "Rigorous testing and quality assurance processes ensure your solution meets our premium standards and your expectations.",
      details: [
        "Comprehensive testing",
        "Performance benchmarking",
        "Security auditing",
        "User acceptance testing"
      ]
    },
    {
      icon: <Rocket className="w-12 h-12 text-luxury-gold-300" />,
      title: "Launch & Support",
      description: "We ensure a smooth deployment and provide ongoing support and maintenance to keep your solution operating at peak performance.",
      details: [
        "Controlled deployment",
        "Performance monitoring",
        "24/7 premium support",
        "Regular updates and maintenance"
      ]
    }
  ];

  return (
    <MainLayout>
      <main className="min-h-screen bg-black text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <LuxuryHeading
            title="Our Process"
            subtitle="Crafting Excellence Through Systematic Innovation"
            className="mb-16"
          />

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[39px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-luxury-gold-300 via-luxury-gold-300/50 to-transparent md:left-1/2 md:-ml-0.5" />

              {/* Process Steps */}
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className={`flex items-start gap-8 md:gap-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                      {/* Icon */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-20 h-20 rounded-full bg-black border-2 border-luxury-gold-300 flex items-center justify-center">
                          {step.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`flex-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                        <LuxuryCard className="p-8">
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-4">
                            {step.title}
                          </h3>
                          <p className="text-gray-300 mb-6">{step.description}</p>
                          <ul className={`grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400 ${index % 2 === 1 ? 'md:justify-items-end' : ''}`}>
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold-300" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </LuxuryCard>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-24 text-center"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-4">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's transform your vision into reality with our premium development process.
              </p>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-luxury-gold-300 via-luxury-gold-400 to-luxury-gold-500 text-black font-medium rounded-full hover:shadow-lg hover:shadow-luxury-gold-300/20 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Strategy Call
              </a>
            </motion.div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
