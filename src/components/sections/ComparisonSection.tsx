import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import LuxuryHeading from '@/components/ui/LuxuryHeading';

export default function ComparisonSection() {
  const comparisonData = [
    {
      feature: "Project Timeline",
      competitors: "3-6 months",
      sanganak: "2-8 weeks",
      sanganakHighlight: true
    },
    {
      feature: "Quality Assurance",
      competitors: "Basic testing",
      sanganak: "Comprehensive QA",
      sanganakHighlight: true
    },
    {
      feature: "Support & Maintenance",
      competitors: "Limited support",
      sanganak: "Lifetime support",
      sanganakHighlight: true
    },
    {
      feature: "Technology Stack",
      competitors: "Outdated tech",
      sanganak: "Cutting-edge",
      sanganakHighlight: true
    },
    {
      feature: "Design Quality",
      competitors: "Template-based",
      sanganak: "Bespoke luxury",
      sanganakHighlight: true
    },
    {
      feature: "Project Management",
      competitors: "Poor communication",
      sanganak: "Transparent process",
      sanganakHighlight: true
    }
  ];

  return (
    <section id="comparison" className="py-24 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-luxury-gold-300">Sanganak</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we outperform traditional agencies and freelancers
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-luxury-gold-300/20 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Feature Column */}
              <div className="bg-black/30 p-8 border-b lg:border-b-0 lg:border-r border-luxury-gold-300/10">
                <h3 className="text-xl font-bold text-luxury-gold-300 mb-8 text-center lg:text-left">Features</h3>
                <div className="space-y-8">
                  {comparisonData.map((item, index) => (
                    <motion.div
                      key={item.feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center min-h-[60px]"
                    >
                      <span className="text-gray-300 font-medium text-center lg:text-left">{item.feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Competitors Column */}
              <div className="bg-red-500/5 p-8 border-b lg:border-b-0 lg:border-r border-luxury-gold-300/10">
                <h3 className="text-xl font-bold text-red-400 mb-8 text-center">Other Agencies</h3>
                <div className="space-y-8">
                  {comparisonData.map((item, index) => (
                    <motion.div
                      key={item.feature}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center min-h-[60px]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                          <X className="w-4 h-4 text-red-400" />
                        </div>
                        <span className="text-gray-400 text-center">{item.competitors}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Sanganak Column */}
              <div className="bg-luxury-gold-300/5 p-8">
                <h3 className="text-xl font-bold text-luxury-gold-300 mb-8 text-center">Sanganak Premium</h3>
                <div className="space-y-8">
                  {comparisonData.map((item, index) => (
                    <motion.div
                      key={item.feature}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center min-h-[60px]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-luxury-gold-300/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-luxury-gold-300" />
                        </div>
                        <span className={`font-medium text-center ${item.sanganakHighlight ? 'text-luxury-gold-300' : 'text-gray-300'}`}>
                          {item.sanganak}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We don't just build websites—we create digital experiences that drive results. 
            Our premium approach ensures your project stands out in today's competitive landscape.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 