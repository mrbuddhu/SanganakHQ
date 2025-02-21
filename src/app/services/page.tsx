'use client';

import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import { Code2, Gem, Globe, Lightbulb, Shield, Sparkles } from 'lucide-react';
import { CTA_URL } from '@/constants/links';

export default function Services() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Luxury Branding",
      description: "Elevate your brand with our premium digital identity services.",
      features: [
        "Custom Brand Strategy",
        "Visual Identity Design",
        "Brand Guidelines",
        "Marketing Collateral"
      ]
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Elite Design",
      description: "Bespoke UI/UX design solutions for discerning clients.",
      features: [
        "Custom Website Design",
        "Mobile App Design",
        "User Experience Strategy",
        "Interactive Prototypes"
      ]
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Premium Development",
      description: "Cutting-edge development solutions for exceptional digital experiences.",
      features: [
        "Custom Web Applications",
        "Mobile App Development",
        "E-commerce Solutions",
        "API Integration"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing to enhance your brand's presence.",
      features: [
        "SEO Optimization",
        "Content Strategy",
        "Social Media Management",
        "Analytics & Reporting"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Robust security solutions to protect your digital assets.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "24/7 Monitoring"
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Consulting",
      description: "Strategic guidance for digital transformation and growth.",
      features: [
        "Technology Strategy",
        "Digital Transformation",
        "Innovation Workshops",
        "Process Optimization"
      ]
    }
  ];

  return (
    <MainLayout>
      <section className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <LuxuryHeading 
            title="Our Services"
            subtitle="Premium digital solutions tailored to your needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <LuxuryCard>
                  <div className="text-[#c6a255] mb-4 text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#c6a255] mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <span className="text-[#c6a255]">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </LuxuryCard>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold bg-metallic-gradient bg-clip-text text-transparent mb-6">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-luxury-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our premium services can elevate your brand and drive exceptional results.
            </p>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c6a255] text-black px-8 py-3 rounded-lg font-medium hover:bg-[#d4b06a] transition-colors"
            >
              Schedule a Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
