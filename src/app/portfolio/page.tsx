'use client';

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
      image: "/images/portfolio/creatorshome.jpg",
      caseStudyLink: "/case-studies#creators-home",
      liveLink: "https://creatorshome.xyz",
      tags: ["SaaS", "Creator Economy", "AI Tools", "Analytics"]
    },
    {
      title: "NFTCollect",
      description: "Cross-platform mobile app for NFT collectors featuring real-time price tracking, portfolio management, and marketplace integration.",
      image: "/images/portfolio/nftcollect.jpg",
      caseStudyLink: "/case-studies#nftcollect",
      tags: ["React Native", "Mobile App", "Web3", "NFT"]
    },
    {
      title: "Burgerrr",
      description: "Feature-rich food delivery mobile app specializing in gourmet burgers, with real-time order tracking and personalized recommendations.",
      image: "/images/portfolio/burgerrr.jpg",
      caseStudyLink: "/case-studies#burgerrr",
      tags: ["React Native", "Mobile App", "Food Delivery", "Location Services"]
    },
    {
      title: "Interio",
      description: "Modern interior design platform showcasing luxury spaces and connecting designers with clients.",
      image: "/images/portfolio/interio.jpg",
      caseStudyLink: "/case-studies#interio",
      liveLink: "https://interio-eta.vercel.app/",
      tags: ["Interior Design", "Luxury", "Marketplace"]
    },
    {
      title: "GlobalEats",
      description: "International culinary platform connecting food enthusiasts with authentic global cuisines.",
      image: "/images/portfolio/globaleats.jpg",
      caseStudyLink: "/case-studies#globaleats",
      tags: ["Food Tech", "Marketplace", "Culture"]
    },
    {
      title: "MedicoBuddy",
      description: "SaaS solution transforming medical education with AI-driven learning tools, case management, and professional networking for healthcare professionals.",
      image: "/images/portfolio/medicobuddy.jpg",
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
          <div className="overflow-x-hidden pb-6">
            <div className="flex flex-wrap gap-8 justify-center px-4">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[400px] max-w-full"
                >
                  <LuxuryCard className="h-full p-8 hover:border-luxury-gold-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-luxury-gold-300/10">
                    <div className="flex flex-col items-center text-center h-full">
                      <motion.div 
                        className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-luxury-gold-300/30 group-hover:border-luxury-gold-300/50 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover filter brightness-95 group-hover:brightness-100 transition-all duration-300"
                          priority={index < 3}
                        />
                      </motion.div>
                      
                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
                        
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-medium text-luxury-gold-300/70"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex justify-center gap-6">
                          <Link
                            href={project.caseStudyLink}
                            className="text-luxury-gold-300 hover:text-luxury-gold-100 transition-colors flex items-center gap-2"
                          >
                            View Case Study
                          </Link>
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-luxury-gold-300 hover:text-luxury-gold-100 transition-colors flex items-center gap-2"
                            >
                              Visit Live Site
                            </a>
                          )}
                        </div>
                      </div>
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
            <LuxuryButton href={CTA_URL} variant="primary" size="lg" className="mt-2">
              Start Your Project
            </LuxuryButton>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
