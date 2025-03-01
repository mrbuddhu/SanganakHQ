'use client';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import { CTA_URL } from '@/constants/links';
import LuxuryButton from '@/components/ui/LuxuryButton';

export default function Portfolio() {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const portfolio = [
    {
      title: "Creators Home",
      description: "SaaS platform revolutionizing content creation with AI-powered tools, analytics, and monetization solutions for digital creators.",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1740750711/creatorshome_zzokl2.jpg",
      caseStudyLink: "/case-studies#creators-home",
      liveLink: "https://creatorshome.xyz",
      tags: ["SaaS", "Creator Economy", "AI Tools", "Analytics"]
    },
    {
      title: "NFTCollect",
      description: "Cross-platform mobile app for NFT collectors featuring real-time price tracking, portfolio management, and marketplace integration.",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1740750710/nftcollect_g3ygja.jpg",
      caseStudyLink: "/case-studies#nftcollect",
      tags: ["React Native", "Mobile App", "Web3", "NFT"]
    },
    {
      title: "Burgerrr",
      description: "Feature-rich food delivery mobile app specializing in gourmet burgers, with real-time order tracking and personalized recommendations.",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1740750711/burgerrr_xhsb8c.jpg",
      caseStudyLink: "/case-studies#burgerrr",
      tags: ["React Native", "Mobile App", "Food Delivery", "Location Services"]
    },
    {
      title: "Interio",
      description: "Modern interior design platform showcasing luxury spaces and connecting designers with clients.",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1740750711/interio_kq1fky.jpg",
      caseStudyLink: "/case-studies#interio",
      liveLink: "https://interio-eta.vercel.app/",
      tags: ["Interior Design", "Luxury", "Marketplace"]
    },
    {
      title: "GlobalEats",
      description: "International culinary platform connecting food enthusiasts with authentic global cuisines.",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1740750711/globaleats_oqjzn8.jpg",
      caseStudyLink: "/case-studies#globaleats",
      tags: ["Food Tech", "Marketplace", "Culture"]
    },
    {
      title: "MedicoBuddy",
      description: "SaaS solution transforming medical education with AI-driven learning tools, case management, and professional networking for healthcare professionals.",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1740750711/medicobuddy_fudnrl.jpg",
      caseStudyLink: "/case-studies#medicobuddy",
      tags: ["SaaS", "Medical Education", "AI/ML", "Healthcare"]
    }
  ];

  // Get unique tags
  const allTags = ['All', ...new Set(portfolio.flatMap(item => item.tags))];

  // Filter projects based on selected tag
  const filteredProjects = selectedTag === 'All' 
    ? portfolio 
    : portfolio.filter(project => project.tags.includes(selectedTag));

  return (
    <MainLayout>
      <section className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <LuxuryHeading 
            title="Our Portfolio"
            subtitle="Showcasing our premium digital solutions"
          />

          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8 sm:mt-12 mb-12 sm:mb-16">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full border transition-all duration-300 ${
                  selectedTag === tag
                    ? 'bg-[#c6a255] border-[#c6a255] text-black'
                    : 'border-[#c6a255]/20 text-[#c6a255] hover:bg-[#c6a255]/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Portfolio Cards */}
          <div className="overflow-x-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <LuxuryCard className="h-full overflow-hidden hover:border-luxury-gold-300/50 transition-colors duration-300">
                    {/* Image Section */}
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    </div>

                    {/* Content Section */}
                    <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                      <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full border border-[#c6a255]/20 text-[#c6a255]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">{project.description}</p>
                    </div>
                  </LuxuryCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center mt-12 sm:mt-16 md:mt-20"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-metallic-gradient bg-clip-text text-transparent mb-4 sm:mb-6">
              Ready to Build Your Next Digital Success?
            </h3>
            <p className="text-luxury-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Let's create something extraordinary together that sets new standards in digital excellence.
            </p>
            <LuxuryButton href={CTA_URL} variant="primary" size="lg" className="mt-2" isExternal as="a">
              Start Your Project
            </LuxuryButton>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
