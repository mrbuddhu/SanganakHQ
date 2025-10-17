import { motion } from 'framer-motion';
import { ArrowRight, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import LuxuryHeading from '@/components/ui/LuxuryHeading';

export default function FinalCTASection() {
  return (
    <section id="final-cta" className="py-24 bg-[#000000] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <LuxuryHeading
            title="Ready to Transform Your Digital Presence?"
            subtitle="Join the elite brands that trust Sanganak Premium"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900/50 border border-luxury-gold-300/20 rounded-2xl p-8 lg:p-12 text-center relative">
            <h3 className="text-3xl lg:text-4xl font-bold text-luxury-gold-300 mb-6">
              Already have a website?
            </h3>
            
            <p className="text-gray-300 text-lg mb-4 max-w-2xl mx-auto">
              Scale it with our <span className="text-luxury-gold-300 font-bold">Growth Engine Retainers</span>, starting at $1,499/month.
            </p>
            
            <p className="text-gray-400 text-sm mb-8">
              SEO, ads, and growth campaigns managed by your dedicated team.
            </p>
            
            {/* CTA Button - Outside the card with proper z-index */}
            <div className="relative z-20 mb-8">
              <a
                href="https://cal.com/sanganakhq/growth"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => console.log('Growth call button clicked')}
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-[#c6a255] to-[#e9d5a1] text-black rounded-lg hover:from-[#e9d5a1] hover:to-[#c6a255] transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ pointerEvents: 'auto', position: 'relative', zIndex: 20 }}
              >
                <span>Book Growth Strategy Call</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            {/* Social Media Mentions */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-4">Follow our growth journey:</p>
              <div className="flex justify-center items-center gap-4">
                <a
                  href="https://x.com/sanganakHQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-luxury-gold-300 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/sanganakHQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-luxury-gold-300 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/sanganakHQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-luxury-gold-300 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@sanganakHQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-luxury-gold-300 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mt-6">
              Questions? <a href="/contact" className="text-luxury-gold-300 hover:text-luxury-gold-200 underline">Get in touch</a> or call <span className="text-luxury-gold-300">+91 9631864610</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 