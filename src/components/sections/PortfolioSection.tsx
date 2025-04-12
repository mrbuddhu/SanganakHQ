'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import LuxuryCard from '@/components/ui/LuxuryCard';

const projects = [
  {
    title: "Interio",
    description: "Furniture e-commerce platform with AR visualization",
    image: "/portfolio/interio.jpg",
    link: "https://interio.com"
  },
  {
    title: "GlobalEats",
    description: "Food delivery app with real-time tracking",
    image: "/portfolio/globaleats.jpg",
    link: "https://globaleats.com"
  },
  {
    title: "Burgerrr",
    description: "Fast food chain's digital transformation",
    image: "/portfolio/burgerrr.jpg",
    link: "https://burgerrr.com"
  },
  {
    title: "NFTCollect",
    description: "NFT marketplace with social features",
    image: "/portfolio/nftcollect.jpg",
    link: "https://nftcollect.com"
  }
];

export default function PortfolioSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 overflow-hidden bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text">
            Our Work
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            See how we've helped businesses transform their digital presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={project.title} className="relative h-[400px] rounded-2xl overflow-hidden">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative w-full h-full group"
              >
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
                <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                  </div>
                  <div className="mt-4">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-luxury-gold-300 hover:text-luxury-gold-200 transition-colors"
                    >
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 