'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryButton from '@/components/ui/LuxuryButton';
import LuxuryCard from '@/components/ui/LuxuryCard';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Code2, Gem, Globe, Lightbulb, Shield, Sparkles, ChevronDown, Zap, Plus, Linkedin, Phone, ChevronLeft, ChevronRight, Play, Pause, ArrowRight } from 'lucide-react';
import PricingSection from '@/components/sections/PricingSection';
import { CTA_URL } from '@/constants/links';
import { LuxuryBranding, EliteDesign, BespokeApplications, BlockchainInnovation, AdvancedAI, ElitePackage, Testimonials, Portfolio, Process, Comparison, WhyChooseSanganak, TestimonialsCTA, FAQ, FAQCTA } from './services';
import TechStack from '@/components/ui/TechStack';

export default function Home() {
  const fullText = '#1 Premium IT Boutique';
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(-1);
  const [displayText, setDisplayText] = useState('#1 Premium IT Boutique');
  const router = useRouter();
  const pathname = usePathname();

  if (!pathname) {
    return <div>Loading...</div>;
  }

  const handleTestimonialScroll = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentTestimonialIndex(prev => 
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    } else {
      setCurrentTestimonialIndex(prev => 
        prev + 1 >= testimonials.length ? 0 : prev + 1
      );
    }
  };
  const [currentPortfolioIndex, setCurrentPortfolioIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isMobile = windowWidth < 768;

  const getVisibleItems = (width: number) => {
    if (width >= 1024) return 3;
    if (width >= 768) return 2;
    return 1;
  };

  const handlePortfolioScroll = (direction: 'prev' | 'next') => {
    const step = getVisibleItems(windowWidth);

    if (direction === 'prev') {
      setCurrentPortfolioIndex(prev => 
        prev === 0 ? portfolio.length - step : Math.max(0, prev - step)
      );
    } else {
      setCurrentPortfolioIndex(prev => 
        prev + step >= portfolio.length ? 0 : prev + step
      );
    }
  };

  const portfolio = [
    {
      title: "Creators Home",
      description: "SaaS platform revolutionizing content creation with AI-powered tools, analytics, and monetization solutions for digital creators.",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1740750711/creatorshome_zzokl2.jpg",
      caseStudyLink: "/case-studies/creators-home",
      tags: ["SaaS", "Creator Economy", "AI Tools", "Analytics"]
    },
    {
      title: "NFTCollect",
      description: "Cross-platform mobile app for NFT collectors featuring real-time price tracking, portfolio management, and marketplace integration.",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1740750710/nftcollect_g3ygja.jpg",
      caseStudyLink: "/case-studies/nftcollect",
      tags: ["React Native", "Mobile App", "Web3", "NFT"]
    },
    {
      title: "Burgerrr",
      description: "Feature-rich food delivery mobile app specializing in gourmet burgers, with real-time order tracking and personalized recommendations.",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1740750711/burgerrr_xhsb8c.jpg",
      caseStudyLink: "/case-studies/burgerrr",
      tags: ["React Native", "Mobile App", "Food Delivery", "Location Services"]
    },
    {
      title: "Interio",
      description: "Modern interior design platform showcasing luxury spaces and connecting designers with clients.",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1740750711/interio_kq1fky.jpg",
      caseStudyLink: "/case-studies/interio",
      tags: ["Interior Design", "Luxury", "Marketplace"]
    },
    {
      title: "GlobalEats",
      description: "International culinary platform connecting food enthusiasts with authentic global cuisines.",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1740750711/globaleats_oqjzn8.jpg",
      caseStudyLink: "/case-studies/globaleats",
      tags: ["Food Tech", "Marketplace", "Culture"]
    },
    {
      title: "MedicoBuddy",
      description: "Comprehensive healthcare SaaS platform connecting medical facilities with patients, featuring appointment scheduling, telemedicine, medical records management, and integrated healthcare services.",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1740750711/medicobuddy_fudnrl.jpg",
      caseStudyLink: "/case-studies/medicobuddy",
      tags: ["Healthcare", "SaaS", "Telemedicine", "Patient Care"]
    }
  ];

  const process = [
    {
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a comprehensive project roadmap aligned with your goals."
    },
    {
      title: "Branding & Design",
      description: "Our creative team crafts stunning visuals and unique brand identity that sets you apart."
    },
    {
      title: "Development & Test",
      description: "We build and rigorously test your solution using cutting-edge technology and best practices."
    },
    {
      title: "Delivery & Support",
      description: "We ensure smooth deployment and provide ongoing maintenance to keep your solution running perfectly."
    }
  ];

  const testimonials = [
    {
      name: "Ankit Kumar",
      role: "@Burgerrr",
      rating: 5,
      content: "Working with Sanganak Premium was a game-changing experience. Their attention to detail and innovative solutions exceeded our expectations.",
      videoUrl: "/testimonials/ankit-kumar.mp4",
      avatar: "/testimonials/headshots/ankit-kumar.jpg"
    },
    {
      name: "Shyam Sharma",
      role: "@Interio",
      rating: 5,
      content: "The team at Sanganak Premium delivered an exceptional design system that perfectly captures our brand's luxury essence.",
      videoUrl: "/testimonials/shyam-sharma.mp4",
      avatar: "/testimonials/headshots/shyam-sharma.jpg"
    },
    {
      name: "Shubham Kumar",
      role: "@GlobalEats",
      rating: 5,
      content: "Their expertise in food tech platforms helped us create a seamless experience for our global customer base.",
      videoUrl: "/testimonials/shubham-kumar.mp4",
      avatar: "/testimonials/headshots/shubham-kumar.jpg"
    }
  ];

  const faqs = [
    {
      question: "What sets Sanganak apart from other digital agencies?",
      answer: "We combine cutting-edge technology with luxury design principles to create digital experiences that truly stand out. Our attention to detail, commitment to excellence, and focus on measurable results make us the preferred choice for discerning clients."
    },
    {
      question: "How do you ensure the success of digital projects?",
      answer: "Our proven process involves thorough research, strategic planning, iterative development, and rigorous testing. We maintain transparent communication throughout and use data-driven insights to optimize outcomes."
    },
    {
      question: "What industries do you specialize in?",
      answer: "While we excel across various sectors, we have particular expertise in luxury brands, financial services, technology companies, and high-end retail. Our adaptable approach ensures success regardless of industry."
    },
    {
      question: "How do you handle project timelines and budgets?",
      answer: "We believe in transparent communication and realistic planning. Each project receives a detailed timeline and budget breakdown upfront, with regular updates and milestone tracking throughout the development process."
    },
    {
      question: "What ongoing support do you provide after launch?",
      answer: "We offer comprehensive post-launch support including monitoring, maintenance, updates, and optimization. Our team remains available for continuous improvements and rapid response to any concerns."
    }
  ];

  const elitePoints = [
    {
      icon: "",
      title: "Elite Clientele",
      description: "Serving industry leaders and visionaries who demand excellence in every pixel."
    },
    {
      icon: "",
      title: "Bespoke Solutions",
      description: "Crafting unique digital experiences that reflect your distinct identity and aspirations."
    },
    {
      icon: "",
      title: "ROI Driven",
      description: "Providing unparalleled attention and dedication to every aspect of your project."
    }
  ];
  const [playingVideos, setPlayingVideos] = useState<{ [key: number]: boolean }>({});
  const toggleVideo = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    const video = document.getElementById(`testimonial-video-${index}`) as HTMLVideoElement;
    if (video) {
      if (playingVideos[index]) {
        video.pause();
      } else {
        video.play();
      }
      setPlayingVideos(prev => ({ ...prev, [index]: !prev[index] }));
    }
  };
  return (
    <MainLayout>
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[80svh] py-2 sm:py-4 md:py-6 flex items-start overflow-x-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black">
              <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,rgba(var(--luxury-gold-300),0.05)_25%,transparent_25%,transparent_75%,rgba(var(--luxury-gold-300),0.05)_75%,rgba(var(--luxury-gold-300),0.05))]" style={{ backgroundSize: '60px 60px' }} />
            </div>
          </div>
          
          <div className="relative w-full z-10 pt-4">
            <div className="container mx-auto px-4">
              {/* Testimonial Banner */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-center pb-2 sm:pb-3 md:pb-4"
              >
                <div className="bg-black/40 backdrop-blur-sm border border-luxury-gold-300/20 rounded-full px-4 py-2 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-luxury-gold-300 overflow-hidden">
                      <Image
                        src="/testimonials/headshots/shyam-sharma.jpg"
                        alt="Shyam Sunder Sharma"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div 
                      className="w-8 h-8 rounded-full border-2 border-luxury-gold-300 overflow-hidden"
                      title="Ankit Kumar - Medical Professional, Bengaluru"
                    >
                      <Image
                        src="/testimonials/headshots/ankit-kumar.jpg"
                        alt="Ankit Kumar - Medical Professional, Bengaluru"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-luxury-gold-300 overflow-hidden">
                      <Image
                        src="/testimonials/headshots/shubham-kumar.jpg"
                        alt="Shubham Kumar"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    {[1, 2].map((index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full border-2 border-luxury-gold-300 overflow-hidden bg-gray-800 flex items-center justify-center"
                      >
                        <Image
                          src={`https://images.unsplash.com/photo-${index === 1 ? '1494790108377-be9c29b29330' : '1560250097-0b93528c311a'}?w=32&h=32&auto=format&fit=crop&q=80`}
                          alt={`Client ${index + 3}`}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col ml-2 gap-0.5">
                    <span className="text-[#c6a255] text-xs">15+ Global Clients</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="w-full flex justify-center mt-0 sm:mt-1 md:mt-2 mb-2 sm:mb-3 md:mb-4">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                <Image 
                  src="/Globe.jpg" 
                  alt="Sanganak Company Logo" 
                  width={250} 
                  height={250} 
                    className="mx-auto w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]"
                  priority={true}
                />
                </motion.div>
              </div>

              <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
                <div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-2 sm:mb-3 md:mb-4 px-2 sm:px-4 w-full"
                    style={{
                      background: 'linear-gradient(to right, #c6a255, #e9d5a1, #c6a255)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 20px rgba(198, 162, 85, 0.3)',
                      overflowWrap: 'break-word'
                    }}
                  >
                    SANGANAK
                  </motion.h1>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-2xl md:text-3xl font-bold tracking-wide mb-4 sm:mb-6"
                    style={{
                      background: 'linear-gradient(to right, #c6a255, #e9d5a1, #c6a255)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 20px rgba(198, 162, 85, 0.3)'
                    }}
                  >
                    {displayText}
                  </motion.h2>
                </div>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4"
                >
                "We craft world-class digital experiences that"<br className="hidden sm:block" />
                  <span className="font-extrabold text-[#c6a255]">drive engagement</span>,{' '}
                  <span className="font-extrabold text-[#c6a255]">scale businesses</span>,{' '}
                  <span className="font-extrabold text-[#c6a255]">& maximize revenue—fast</span>.
                </motion.p>

                {/* Service Categories */}
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-2 md:mb-[-3rem]">
                  {[
                    { emoji: "👑", text: "Elite Clientele" },
                    { emoji: "⭐", text: "Bespoke Solutions" },
                    { emoji: "✨", text: "ROI Driven" }
                  ].map((item, index) => (
                  <motion.div
                      key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex flex-col items-center space-y-2 group"
                    >
                      <motion.span 
                        className="text-3xl sm:text-4xl"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.emoji}
                      </motion.span>
                      <span className="text-[#c6a255] font-medium text-sm sm:text-base group-hover:text-[#e9d5a1] transition-colors">
                        {item.text}
                      </span>
                  </motion.div>
                  ))}
                </div>

                {/* Client Logos Marquee */}
                <div className="relative overflow-hidden mt-8 sm:mt-2 md:mt-[-2rem] mb-4 sm:mb-6">
                  <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10" />
                  <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10" />
                  <motion.div
                    animate={{ x: [0, -1920] }}
                    transition={{ 
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="flex gap-8 items-center py-4"
                  >
                    {[
                      { name: "Creators Home", logo: "/client-logos/creatorshome.png" },
                      { name: "NFTCollect", logo: "/client-logos/nftcollect.png" },
                      { name: "Burgerrr", logo: "/client-logos/burgerrr.png" },
                      { name: "Interio", logo: "/client-logos/interio.png" },
                      { name: "GlobalEats", logo: "/client-logos/globaleats.png" },
                      { name: "MedicoBuddy", logo: "/client-logos/medicobuddy.png" }
                    ].map((client, index) => (
                      <div key={index} className="flex-none w-[240px] h-[100px] relative">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          fill
                          sizes="240px"
                          className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-105 transform duration-300"
                          priority={true}
                        />
                      </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {[
                      { name: "Creators Home", logo: "/client-logos/creatorshome.png" },
                      { name: "NFTCollect", logo: "/client-logos/nftcollect.png" },
                      { name: "Burgerrr", logo: "/client-logos/burgerrr.png" },
                      { name: "Interio", logo: "/client-logos/interio.png" },
                      { name: "GlobalEats", logo: "/client-logos/globaleats.png" },
                      { name: "MedicoBuddy", logo: "/client-logos/medicobuddy.png" }
                    ].map((client, index) => (
                      <div key={`duplicate-${index}`} className="flex-none w-[240px] h-[100px] relative">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          fill
                          sizes="240px"
                          className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-105 transform duration-300"
                          priority={true}
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen bg-black/95 relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#c6a255]/5 to-black/0" />
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
            <LuxuryHeading
              title="Elite Services"
              subtitle="Transforming visions into digital excellence"
            />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-[95%] sm:max-w-7xl mx-auto"
            >
              {[
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: "Luxury Branding",
                  description: "Become a Category King with a brand that exudes authority, prestige, and undeniable influence.",
                  features: [
                    "Strategic Brand Positioning – Stand out. Stay unforgettable.",
                    "Signature Visual Identity – Designed for premium perception.",
                    "Comprehensive Brand Guidelines – Cohesive, timeless branding.",
                    "Conversion-Optimized Copywriting – Persuasion meets power."
                  ]
                },
                {
                  icon: <Gem className="w-8 h-8" />,
                  title: "Elite Design",
                  description: "Experience perfection. Every pixel, every interaction, meticulously crafted to convert.",
                  features: [
                    "Bespoke Website & App Design – Luxury aesthetics, seamless UX.",
                    "Conversion-Optimized User Journeys – Designed to maximize revenue.",
                    "Interactive Prototypes – Experience your product before it's built.",
                    "Premium Design System – Consistent luxury across platforms."
                  ]
                },
                {
                  icon: <Code2 className="w-8 h-8" />,
                  title: "Bespoke Applications",
                  description: "Tailor-made digital powerhouses. Scalable, high-performance software for trailblazers.",
                  features: [
                    "Custom Web & Mobile Development – Precision-engineered for impact.",
                    "E-Commerce Mastery – Elevate sales with elite UX.",
                    "Conversion-Driven Landing Pages – Designed to captivate and convert.",
                    "SaaS Product Development – Future-proofing your business."
                  ]
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Blockchain Innovation",
                  description: "Build the future. We architect blockchain solutions for enterprises ready to lead.",
                  features: [
          "Smart Contract Development – Automate with absolute security.",
          "Next-Gen DApps – Redefining decentralized experiences.",
          "Enterprise Blockchain Integration – Elevate your business with Web3.",
          "Tokenomics & Strategy – Designing sustainable blockchain ecosystems."
                  ]
                },
                {
                  icon: <Lightbulb className="w-8 h-8" />,
                  title: "AI-Powered Intelligence",
                  description: "Unleash the power of data. AI isn't the future—it's your competitive advantage today.",
                  features: [
          "Custom AI Models & Machine Learning – Predict. Optimize. Automate.",
          "AI-Driven Business Insights – Data-powered growth strategies.",
          "Process Automation – Scale smarter, work faster.",
          "Computer Vision & NLP – Cutting-edge AI-driven experiences."
                  ]
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Elite Package",
                  description: "The ultimate digital transformation. For businesses serious about dominating their industry.",
                  features: [
          "End-to-End Brand Identity & UI/UX – Comprehensive brand and design excellence.",
          "Custom Software, AI & Blockchain Solutions – Cutting-edge technology integration.",
          "Ongoing Innovation & VIP Strategic Growth – Dedicated support and evolution.",
          "Priority Access & Exclusive Benefits – VIP treatment at every step."
                  ]
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <LuxuryCard className="h-full group hover:border-luxury-gold-300/50 transition-all duration-300">
                    <div className="text-[#c6a255] mb-4 text-2xl transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#c6a255] mb-4 group-hover:text-[#e9d5a1] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                      {service.description}
                    </p>
                    <ul className="space-y-3 text-gray-300 text-sm">
                      {service.features.map((feature, featureIndex) => {
          const [firstPart, ...rest] = feature.split('–').map(part => part.trim());
          return (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 group/item"
                          >
                            <span className="text-[#c6a255] mt-1 group-hover/item:text-[#e9d5a1] transition-colors">•</span>
              <span className="flex-1">
                              <span className="text-[#c6a255] group-hover/item:text-[#e9d5a1] transition-colors">{firstPart}</span>
                {rest.length > 0 && (
                                <span className="text-gray-300 block mt-1 group-hover/item:text-gray-200 transition-colors">{rest.join(' ')}</span>
                )}
              </span>
                          </motion.li>
          );
        })}
      </ul>
    </LuxuryCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <TechStack />

        <PricingSection />

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-4">
            <LuxuryHeading
              title="Our Portfolio"
              subtitle="Explore our collection of premium digital experiences"
            />
            
            <div className="relative mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {portfolio.slice(currentPortfolioIndex, currentPortfolioIndex + getVisibleItems(windowWidth)).map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link href={project.caseStudyLink}>
                      <LuxuryCard className="overflow-hidden h-full">
                        <div className="relative w-full aspect-[16/9] overflow-hidden">
                        <Image
                            src={project.image}
                            alt={`${project.title} - ${project.description}`}
                          fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                            loading="lazy"
                            quality={85}
                        />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      </div>
                        <div className="p-4 sm:p-6">
                          <h3 className="text-lg sm:text-xl font-bold text-luxury-gold-100 mb-2 group-hover:text-luxury-gold-300 transition-colors">
                            {project.title}
                        </h3>
                          <p className="text-sm text-luxury-gold-300/80 mb-4 line-clamp-2">
                            {project.description}
                          </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 bg-luxury-gold-900/50 text-luxury-gold-300 rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </LuxuryCard>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={() => handlePortfolioScroll('prev')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-3 rounded-full bg-black/80 border border-[#c6a255] text-[#c6a255] hover:bg-[#c6a255] hover:text-white transition-all z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => handlePortfolioScroll('next')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-3 rounded-full bg-black/80 border border-[#c6a255] text-[#c6a255] hover:bg-[#c6a255] hover:text-white transition-all z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>
        {/* Process Section */}
        <section className="py-20 relative">
          <LuxuryHeading
            title="Our Process"
            subtitle="How we transform your vision into reality"
          />
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <LuxuryCard key={index} className="p-6 bg-black/40 backdrop-blur-sm border border-[#c6a255]/20 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#c6a255] text-black flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-[#c6a255]">{step.title}</h3>
                  </div>
                  <p className="text-gray-400">{step.description}</p>
                </LuxuryCard>
              ))}
            </div>
          </div>
        </section>
        {/* Process CTA */}
        <section className="py-20 relative">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold bg-metallic-gradient bg-clip-text text-transparent mb-6">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-luxury-gray-300 mb-8">
                Let's walk through our proven process together and bring your vision to life.
              </p>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuxuryButton size="lg">
                  Start Your Project
                </LuxuryButton>
              </a>
            </motion.div>
          </div>
        </section>
        {/* Comparison Section */}
        <section className="relative py-24 overflow-hidden">
          <LuxuryHeading
            title="Why Choose Sanganak?"
            subtitle="See how we stand out from the competition"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto px-4">
            {/* Sanganak Card */}
            <LuxuryCard className="lg:col-span-3 p-6 bg-black/40 backdrop-blur-sm border border-[#c6a255]/20 flex flex-col">
              <h3 className="text-2xl font-bold text-[#c6a255] mb-6">Sanganak</h3>
              <ul className="space-y-6 flex-1">
                <li className="flex items-start gap-3">
                  <span className="text-[#c6a255] text-xl flex-shrink-0">✓</span>
                  <span className="text-[#c6a255]">7-day MVP delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c6a255] text-xl flex-shrink-0">✓</span>
                  <span className="text-[#c6a255]">Fixed project pricing, no surprises</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c6a255] text-xl flex-shrink-0">✓</span>
                  <span className="text-[#c6a255]">Full-stack development & AI expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c6a255] text-xl flex-shrink-0">✓</span>
                  <span className="text-[#c6a255]">Premium project management included</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c6a255] text-xl flex-shrink-0">✓</span>
                  <span className="text-[#c6a255]">24/7 dedicated support & maintenance</span>
                </li>
              </ul>
            </LuxuryCard>

            {/* Freelancers Card */}
            <LuxuryCard className="lg:col-span-3 p-6 bg-black/40 backdrop-blur-sm border border-[#c6a255]/10 h-[400px] flex flex-col">
              <h3 className="text-2xl font-bold text-gray-400 mb-6">Freelancers</h3>
              <ul className="space-y-6 flex-1">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-gray-400">No delivery guarantees</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-gray-400">Unpredictable costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-gray-400">Limited tech stack</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-gray-400">No project management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-gray-400">Limited availability</span>
                </li>
              </ul>
            </LuxuryCard>

            {/* Agencies Card */}
            <LuxuryCard className="lg:col-span-3 p-6 bg-black/40 backdrop-blur-sm border border-[#c6a255]/10 h-[400px] flex flex-col">
              <h3 className="text-2xl font-bold text-gray-400 mb-6">Agencies</h3>
              <ul className="space-y-6 flex-1">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-gray-400">30+ day timelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-gray-400">High monthly fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-gray-400">Generic solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-gray-400">Complex bureaucracy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-gray-400">Ticket-based support</span>
                </li>
              </ul>
            </LuxuryCard>

            {/* Full-time Card */}
            <LuxuryCard className="lg:col-span-3 p-6 bg-black/40 backdrop-blur-sm border border-[#c6a255]/10 h-[400px] flex flex-col">
              <h3 className="text-2xl font-bold text-gray-400 mb-6">Full-time</h3>
              <ul className="space-y-6 flex-1">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-gray-400">Long hiring process</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-gray-400">$100K+ annual cost</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-gray-400">Single technology focus</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-gray-400">Needs management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                  <span className="text-gray-400">Limited by work hours</span>
                </li>
              </ul>
            </LuxuryCard>
          </div>
        </section>
        {/* Why Choose Sanganak CTA */}
        <section className="py-20 relative">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold bg-metallic-gradient bg-clip-text text-transparent mb-6">
                Experience the Sanganak Difference
              </h3>
              <p className="text-luxury-gray-300 mb-8">
                Join the ranks of satisfied clients who chose excellence and innovation.
              </p>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuxuryButton size="lg">
                  Schedule a Discovery Call
                </LuxuryButton>
              </a>
            </motion.div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section id="testimonials" className="relative py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <LuxuryHeading
                title="Client Stories"
                subtitle="Hear from our distinguished clients"
              />
            </div>
           
            <div className="relative">
              <button
                onClick={() => handleTestimonialScroll('prev')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-3 rounded-full bg-black/80 border border-[#c6a255] text-[#c6a255] hover:bg-[#c6a255] hover:text-white transition-all z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 px-4 sm:px-8 max-w-full justify-center">
                {testimonials.slice(currentTestimonialIndex, currentTestimonialIndex + getVisibleItems(windowWidth)).map((testimonial, index) => (
                  <div key={index} className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[360px]">
                    <LuxuryCard className="flex flex-col h-full">
                      {testimonial.name === 'Shyam Sharma' ? (
                        <div>
                          {/* Video Container */}
                          <div className="relative h-[250px] sm:h-[300px] md:h-[350px] rounded-lg overflow-hidden mb-4 group">
                            <video
                              id={`testimonial-video-${index}`}
                              src={testimonial.videoUrl}
                              className="absolute inset-0 w-full h-full object-cover"
                              playsInline
                              loop
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                           
                            {/* Play/Pause Button */}
                            <button
                              onClick={(e) => toggleVideo(e, index)}
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#c6a255]/90 text-black flex items-center justify-center transition-all transform hover:scale-110 hover:bg-[#c6a255] z-20 cursor-pointer"
                            >
                              {playingVideos[index] ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653z" />
                                </svg>
                              )}
                            </button>

                            {/* Video Progress Bar */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
                              <div className={`h-full bg-[#c6a255] transition-all duration-300 ${playingVideos[index] ? 'w-full' : 'w-0'}`} />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 flex flex-col justify-end">
                            <div className="flex items-center gap-3">
                              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                <Image
                                  src={testimonial.avatar}
                                  alt={testimonial.name}
                                  fill
                                  className="object-cover rounded-full"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  priority={index < 3}
                                />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-1 mb-1">
                                  {[1, 2, 3, 4, 5].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-[#c6a255]">
                                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                  ))}
                                </div>
                                <h4 className="font-semibold text-[#c6a255]">{testimonial.name}</h4>
                                <p className="text-sm text-gray-400">{testimonial.role}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          {/* Video Container */}
                          <div className="relative h-[250px] sm:h-[300px] md:h-[350px] rounded-lg overflow-hidden mb-4 group">
                            <video
                              id={`testimonial-video-${index}`}
                              src={testimonial.videoUrl}
                              className="absolute inset-0 w-full h-full object-cover"
                              playsInline
                              loop
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                           
                            {/* Play/Pause Button */}
                            <button
                              onClick={(e) => toggleVideo(e, index)}
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#c6a255]/90 text-black flex items-center justify-center transition-all transform hover:scale-110 hover:bg-[#c6a255] z-20 cursor-pointer"
                            >
                              {playingVideos[index] ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653z" />
                                </svg>
                              )}
                            </button>

                            {/* Video Progress Bar */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
                              <div className={`h-full bg-[#c6a255] transition-all duration-300 ${playingVideos[index] ? 'w-full' : 'w-0'}`} />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 flex flex-col justify-end">
                            <div className="flex items-center gap-3">
                              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                <Image
                                  src={testimonial.avatar}
                                  alt={testimonial.name}
                                  fill
                                  className="object-cover rounded-full"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  priority={index < 3}
                                />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-1 mb-1">
                                  {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-[#c6a255]">
                                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                  ))}
                                </div>
                                <h4 className="font-semibold text-[#c6a255]">{testimonial.name}</h4>
                                <p className="text-sm text-gray-400">{testimonial.role}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </LuxuryCard>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleTestimonialScroll('next')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-3 rounded-full bg-black/80 border border-[#c6a255] text-[#c6a255] hover:bg-[#c6a255] hover:text-white transition-all z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>
        {/* Testimonials CTA */}
        <section className="py-20 relative">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold bg-metallic-gradient bg-clip-text text-transparent mb-6">
                Join Our Success Stories
              </h3>
              <p className="text-luxury-gray-300 mb-8">
                Be the next breakthrough story in our portfolio of excellence.
              </p>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuxuryButton size="lg">
                  Discuss Your Project
                </LuxuryButton>
              </a>
            </motion.div>
          </div>
        </section>
        {/* Newsletter Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4">
            <LuxuryCard className="p-8 sm:p-10">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#c6a255]/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#c6a255]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-[#c6a255] mb-3">Weekly Premium Content</h4>
                <div className="max-w-2xl">
                  <p className="text-gray-300 mb-2">
                    Get exclusive insights on luxury tech, AI innovations, and digital transformation.
                  </p>
                  <p className="text-[#c6a255] font-medium">
                    For visionaries who demand excellence.
                  </p>
                </div>
              </div>
              <div className="relative max-w-2xl mx-auto">
                <form 
                  action="https://sanganak.substack.com/api/v1/free" 
                  method="post" 
                  className="relative z-20 flex flex-col sm:flex-row gap-4 items-stretch"
                >
                  <div className="flex-1 relative group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      className="w-full px-6 py-4 bg-black/60 border border-[#c6a255]/20 rounded-lg focus:outline-none focus:border-[#c6a255] text-white placeholder-gray-400 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-[#c6a255]/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 pointer-events-none" />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#c6a255] hover:bg-[#e9d5a1] text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#c6a255]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>No spam, unsubscribe anytime</span>
                </div>
              </div>
            </LuxuryCard>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="py-20 relative">
          <LuxuryHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services"
          />
          <div className="max-w-3xl mx-auto px-4 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="relative flex items-center gap-4">
                <LuxuryCard className="flex-1 p-6 bg-black/40 backdrop-blur-sm border border-[#c6a255]/20">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-[#c6a255] pr-8">{faq.question}</h3>
                  </div>
                  {openFaq === index && (
                    <div className="mt-4 text-gray-400">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </LuxuryCard>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-[#c6a255]/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-black/60"
                >
                  <Plus 
                    className={`w-5 h-5 text-[#c6a255] transform transition-transform duration-300 ${
                      openFaq === index ? 'rotate-45' : ''
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* FAQ CTA */}
        <section className="py-20 relative">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold bg-metallic-gradient bg-clip-text text-transparent mb-6">
                Ready for Digital Excellence?
              </h3>
              <p className="text-luxury-gray-300 mb-8">
                Jump on a free strategy call. Let's unlock your business potential.
              </p>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuxuryButton size="lg">
                  Free Strategy Call
                </LuxuryButton>
              </a>
            </motion.div>
          </div>
        </section>


      </main>
    </MainLayout>
  );
}