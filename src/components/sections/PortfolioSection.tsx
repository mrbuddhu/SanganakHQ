import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import LuxuryHeading from '@/components/ui/LuxuryHeading';

const PortfolioSection = () => {
  const portfolio = [
    {
      title: "ChainWallet",
      description: "Modern crypto wallet platform with seamless SSO integration",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1744705146/Chainwallet_ki4bvh.png",
      tags: ["Webflow", "Web3", "Crypto", "Authentication"],
      industry: "FinTech / Cryptocurrency",
      techStack: ["Webflow", "Web3", "Blockchain", "SSO"],
      caseStudyLink: "/case-studies/chainwallet"
    },
    {
      title: "Realtor",
      description: "Premium real estate platform with advanced property search",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1744705146/Realtor_apikwi.png",
      tags: ["Webflow", "Real Estate", "Property Search", "Booking System"],
      industry: "Real Estate",
      techStack: ["Webflow", "Property APIs", "Booking System", "Search Engine"],
      caseStudyLink: "/case-studies/realtor"
    },
    {
      title: "MyAstro",
      description: "Personalized astrology platform offering daily insights and guidance powered by advanced algorithms.",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1746695836/YourAstro_mtphz9.png",
      tags: ["Astrology", "Personalized", "Web App"],
      industry: "Lifestyle / Wellness",
      techStack: ["Next.js", "AI Algorithms", "Personalization", "Analytics"],
      caseStudyLink: "/case-studies/myastro"
    },
    {
      title: "NFTCollect",
      description: "Cross-platform mobile app for NFT collectors featuring real-time price tracking, portfolio management, and marketplace integration.",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1740750710/nftcollect_g3ygja.jpg",
      caseStudyLink: "/case-studies/nftcollect",
      tags: ["React Native", "Mobile App", "Web3", "NFT"],
      industry: "Web3 / NFT",
      techStack: ["React Native", "Web3", "Real-time APIs", "Portfolio Management"]
    },
    {
      title: "Burgerrr",
      description: "Feature-rich food delivery mobile app specializing in gourmet burgers, with real-time order tracking and personalized recommendations.",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1740750711/burgerrr_xhsb8c.jpg",
      caseStudyLink: "/case-studies/burgerrr",
      tags: ["React Native", "Mobile App", "Food Delivery", "Location Services"],
      industry: "Food & Beverage",
      techStack: ["React Native", "Location Services", "Payment Gateway", "Real-time Tracking"]
    },
    {
      title: "Interio",
      description: "Modern interior design platform showcasing luxury spaces and connecting designers with clients.",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1740750711/interio_kq1fky.jpg",
      caseStudyLink: "/case-studies/interio",
      tags: ["Interior Design", "Luxury", "Marketplace"],
      industry: "Interior Design / Luxury",
      techStack: ["Next.js", "Marketplace Platform", "Design Tools", "Client Management"]
    },
    {
      title: "GlobalEats",
      description: "International culinary platform connecting food enthusiasts with authentic global cuisines.",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1740750711/globaleats_oqjzn8.jpg",
      caseStudyLink: "/case-studies/globaleats",
      tags: ["Food Tech", "Marketplace", "Culture"],
      industry: "Food Tech / Culture",
      techStack: ["Next.js", "Marketplace", "Cultural APIs", "Recommendation Engine"]
    },
    {
      title: "MedicoBuddy",
      description: "Comprehensive healthcare SaaS platform connecting medical facilities with patients, featuring appointment scheduling, telemedicine, medical records management, and integrated healthcare services.",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1740750711/medicobuddy_fudnrl.jpg",
      caseStudyLink: "/case-studies/medicobuddy",
      tags: ["Healthcare", "SaaS", "Telemedicine", "Patient Care"],
      industry: "Healthcare / SaaS",
      techStack: ["Next.js", "Telemedicine", "EMR Integration", "Video Conferencing"]
    },
    {
      title: "Beam Analytics",
      description: "Data analytics SaaS platform with real-time insights",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1744705145/Torch_qikktc.png",
      tags: ["Webflow", "SaaS", "Analytics", "Dashboard"],
      industry: "SaaS / Analytics",
      techStack: ["Webflow", "Analytics Engine", "Real-time Data", "Dashboard UI"],
      caseStudyLink: "/case-studies/beam-analytics"
    },
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-24 relative bg-[#000000] overflow-hidden">
      <div className="container mx-auto px-4">
        <LuxuryHeading
          title="Our Portfolio"
          subtitle="Explore our collection of premium digital experiences that delivered exceptional results"
        />
        
        {/* First Row - Moves Left */}
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 60, 
            ease: "linear",
            repeat: Infinity
          }}
          className="flex gap-6 mt-16 mb-8 w-max"
        >
          {[...portfolio.slice(0, 5), ...portfolio.slice(0, 5)].map((project, index) => (
                         <motion.div
               key={`row1-${project.title}-${index}`}
               className="w-[500px] flex-shrink-0"
               whileHover={{ y: -8, transition: { duration: 0.5, ease: "easeOut" } }}
             >
              <div className="space-y-3">
                <Link href={project.caseStudyLink}>
                  <div className="relative w-full h-[300px] overflow-hidden rounded-2xl border border-luxury-gold-300/20 group hover:border-luxury-gold-300/30 transition-all duration-300">
                    <div className="relative w-full h-full">
                      {/* Blurred background image */}
                      <Image
                        src={project.image}
                        alt={project.title + ' blurred background'}
                        fill
                        className="object-cover blur-md scale-110 brightness-75 rounded-2xl"
                        aria-hidden="true"
                        draggable={false}
                      />
                      {/* Main contained image */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="500px"
                        className="object-contain brightness-110 z-10"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 rounded-2xl z-20 pointer-events-none" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-bold text-luxury-gold-100 mb-2 group-hover:text-luxury-gold-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs bg-luxury-gold-900/30 text-luxury-gold-300 rounded-full border border-luxury-gold-300/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
                
                {/* Industry & Tech Stack Info - Outside the card */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 font-medium">Industry:</span>
                    <span className="text-xs text-luxury-gold-300 font-semibold">{project.industry}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs text-gray-400 font-medium mt-0.5">Tech:</span>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 py-0.5 text-xs bg-gray-800/50 text-gray-300 rounded border border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row - Moves Right */}
        <motion.div 
          animate={{ x: 0 }}
          transition={{ 
            duration: 60, 
            ease: "linear",
            repeat: Infinity
          }}
          className="flex gap-6 mt-12 w-max"
        >
          {[...portfolio.slice(5, 9), ...portfolio.slice(5, 9)].map((project, index) => (
                         <motion.div
               key={`row2-${project.title}-${index}`}
               className="w-[500px] flex-shrink-0"
               whileHover={{ y: -8, transition: { duration: 0.5, ease: "easeOut" } }}
             >
              <div className="space-y-3">
                <Link href={project.caseStudyLink}>
                  <div className="relative w-full h-[300px] overflow-hidden rounded-2xl border border-luxury-gold-300/20 group hover:border-luxury-gold-300/30 transition-all duration-300">
                    <div className="relative w-full h-full">
                      {/* Blurred background image */}
                      <Image
                        src={project.image}
                        alt={project.title + ' blurred background'}
                        fill
                        className="object-cover blur-md scale-110 brightness-75 rounded-2xl"
                        aria-hidden="true"
                        draggable={false}
                      />
                      {/* Main contained image */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="500px"
                        className="object-contain brightness-110 z-10"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 rounded-2xl z-20 pointer-events-none" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-bold text-luxury-gold-100 mb-2 group-hover:text-luxury-gold-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs bg-luxury-gold-900/30 text-luxury-gold-300 rounded-full border border-luxury-gold-300/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
                
                {/* Industry & Tech Stack Info - Outside the card */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 font-medium">Industry:</span>
                    <span className="text-xs text-luxury-gold-300 font-semibold">{project.industry}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs text-gray-400 font-medium mt-0.5">Tech:</span>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 py-0.5 text-xs bg-gray-800/50 text-gray-300 rounded border border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection; 