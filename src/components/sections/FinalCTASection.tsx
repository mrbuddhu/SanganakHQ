import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
          <div className="bg-gray-900/50 border border-luxury-gold-300/20 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-luxury-gold-300 mb-6">
              Let's Build Something Extraordinary
            </h3>
            
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Your vision deserves the finest execution. Ready to bring your digital dreams to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="https://cal.com/sanganak/strategycall"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => console.log('Primary button clicked')}
                className="px-8 py-4 text-lg font-semibold bg-[#c6a255] text-black rounded-lg hover:bg-[#e9d5a1] transition-colors inline-flex items-center gap-2"
                style={{ pointerEvents: 'auto', position: 'relative', zIndex: 10 }}
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a
                href="/contact"
                onClick={() => console.log('Secondary button clicked')}
                className="px-8 py-4 text-lg font-semibold text-luxury-gold-300 hover:text-luxury-gold-200 transition-colors border border-luxury-gold-300/30 hover:border-luxury-gold-300/50 rounded-lg"
                style={{ pointerEvents: 'auto', position: 'relative', zIndex: 10 }}
              >
                Schedule Consultation
              </a>
            </div>
            
            <p className="text-gray-400 text-sm">
              Questions? <a href="/contact" className="text-luxury-gold-300 hover:text-luxury-gold-200 underline">Get in touch</a> or call <span className="text-luxury-gold-300">+91 9631864610</span>
            </p>
            
            <div className="mt-4 text-xs text-gray-500">
              <p>Debug: Try clicking the buttons above</p>
              <p>Check console for click events</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 