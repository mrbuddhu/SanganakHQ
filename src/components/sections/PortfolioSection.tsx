import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
            Our Portfolio
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our collection of premium projects that showcase our expertise in luxury digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio items will be added here */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Coming Soon</h3>
              <p className="text-gray-400">Our portfolio is being updated with our latest premium projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection; 