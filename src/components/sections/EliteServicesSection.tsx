import { motion } from 'framer-motion';
import { Palette, Code2, TrendingUp } from 'lucide-react';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';

export default function EliteServicesSection() {
  const pillars = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design',
      tagline: 'Clarity before creativity. Positioning before pixels.',
      description: 'We design brands and interfaces built to convert, not just impress.',
      features: [
        'Brand positioning & identity systems',
        'High-converting website design',
        'Product UI/UX systems',
        'Conversion-focused messaging & copy',
      ],
      footer: 'For brands that want authority and performance — not decoration.',
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Engineering',
      tagline: 'Scalable digital platforms built properly from day one.',
      description: 'From websites to SaaS products, we engineer systems that grow with you.',
      features: [
        'High-performance websites (Next.js, Webflow, Framer)',
        'SaaS & internal platforms',
        'Mobile applications',
        'AI integrations & workflow automation',
      ],
      footer: 'Clean architecture. Stable deployment. Built to scale.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Growth',
      tagline: 'Revenue infrastructure — not random marketing.',
      description: 'We build systems that turn traffic into predictable growth.',
      features: [
        'Organic acquisition & SEO systems',
        'Paid performance infrastructure',
        'Funnel architecture & CRO',
        'Email & lifecycle automation',
      ],
      footer: 'For founders and brands ready to scale with structure.',
    },
  ];

  return (
    <section id="services" className="w-full min-h-screen bg-[#000000] relative py-20 sm:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <LuxuryHeading
            title="Three Core Pillars"
            subtitle="Everything we deliver fits inside these."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-10 sm:mt-12"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <LuxuryCard className="h-full group hover:border-[#c6a255]/30 transition-all duration-300 p-8 bg-black/50 backdrop-blur-md border border-white/[0.08] hover:shadow-[0_0_40px_-8px_rgba(198,162,85,0.2)] hover:scale-[1.02]">
                <div className="text-[#c6a255] mb-3 transform group-hover:scale-110 transition-all duration-500">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-[#c6a255] uppercase tracking-wider mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm font-medium text-gray-400 mb-3 italic">
                  {pillar.tagline}
                </p>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {pillar.description}
                </p>
                <ul className="space-y-2 text-gray-300 text-sm mb-4">
                  {pillar.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#c6a255] mt-0.5 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 border-t border-white/[0.08] pt-4 mt-4">
                  {pillar.footer}
                </p>
              </LuxuryCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm sm:text-base mt-10 max-w-2xl mx-auto"
        >
          Available as standalone strategic builds or long-term growth partnerships.
        </motion.p>
      </div>
    </section>
  );
}
