import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
            Client Testimonials
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from our esteemed clients about their experience with our premium services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial items will be added here */}
          <div className="bg-gray-800 rounded-lg p-8">
            <Quote className="w-8 h-8 text-purple-500 mb-4" />
            <p className="text-gray-300 mb-4">
              "Coming soon: Testimonials from our valued clients."
            </p>
            <div className="flex items-center">
              <div className="ml-4">
                <h4 className="text-white font-semibold">Coming Soon</h4>
                <p className="text-gray-400">Client Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 