'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import LuxuryButton from '@/components/ui/LuxuryButton';
import LuxuryCard from '@/components/ui/LuxuryCard';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Code2, Gem, Globe, Lightbulb, Shield, Sparkles, ChevronDown, Zap, Plus, Linkedin, Phone, ChevronLeft, ChevronRight, Play, Pause, ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { CTA_URL } from '@/constants/links';
import { LuxuryBranding, EliteDesign, BespokeApplications, BlockchainInnovation, AdvancedAI, ElitePackage, Testimonials, Portfolio, Process, Comparison, WhyChooseSanganak, TestimonialsCTA, FAQ, FAQCTA } from './services';
import TechStack from '@/components/ui/TechStack';

// Simple debounce function for performance
const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Lazy load heavy sections
const PortfolioSection = dynamic(() => import('@/components/sections/PortfolioSection'));
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'));
const PricingSection = dynamic(() => import('@/components/sections/PricingSection'));

export default function Home() {
  const fullText = '#1 Premium IT Boutique';
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(-1);
  const [displayText, setDisplayText] = useState('#1 Premium IT Boutique');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [isIntersecting, setIsIntersecting] = useState<{[key: string]: boolean}>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Performance optimization: Intersection Observer for animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id) {
            setIsIntersecting(prev => ({
              ...prev,
              [entry.target.id]: entry.isIntersecting
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Performance: Debounced resize handler
  const debouncedHandleResize = useCallback(
    debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 150),
    []
  );

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleResize);
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, [debouncedHandleResize]);

  const getVisibleItems = (width: number) => {
    if (width < 640) return 1; // mobile
    if (width < 1024) return 2; // tablet
    return 3; // desktop
  };

  if (!pathname) {
    return <div>Loading...</div>;
  }

  const handleTestimonialScroll = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentTestimonialIndex(prev => 
        prev === 0 ? Math.max(testimonials.length - visibleCount, 0) : prev - 1
      );
    } else {
      setCurrentTestimonialIndex(prev => 
        prev >= testimonials.length - visibleCount ? 0 : prev + 1
      );
    }
  };

  const portfolio = [
    {
      title: "ChainWallet",
      description: "Modern crypto wallet platform with seamless SSO integration",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1744705146/Chainwallet_ki4bvh.png",
      tags: ["Webflow", "Web3", "Crypto", "Authentication"],
      caseStudyLink: "#"
    },
    {
      title: "Realtor",
      description: "Premium real estate platform with advanced property search",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1744705146/Realtor_apikwi.png",
      tags: ["Webflow", "Real Estate", "Property Search", "Booking System"],
      caseStudyLink: "#"
    },
    {
      title: "MyAstro",
      description: "Personalized astrology platform offering daily insights and guidance powered by advanced algorithms.",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1746695836/YourAstro_mtphz9.png",
      tags: ["Astrology", "Personalized", "Web App"],
      caseStudyLink: "#"
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
    },
    {
      title: "Beam Analytics",
      description: "Data analytics SaaS platform with real-time insights",
      image: "https://res.cloudinary.com/sanganak/image/upload/v1744705145/Torch_qikktc.png",
      tags: ["Webflow", "SaaS", "Analytics", "Dashboard"],
      caseStudyLink: "#"
    },
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
      avatar: "/testimonials/headshots/ankit-kumar.jpg",
      type: "video"
    },
    {
      name: "Shyam Sharma",
      role: "@Interio",
      rating: 5,
      content: "Sanganak delivered our MVP in just 15 days. Their premium project management and full-stack expertise made all the difference.",
      avatar: "/testimonials/headshots/shyam-sharma.jpg",
      type: "text"
    },
    {
      name: "Shubham Kumar",
      role: "@GlobalEats",
      rating: 5,
      content: "Their expertise in food tech platforms helped us create a seamless experience for our global customer base.",
      videoUrl: "/testimonials/shubham-kumar.mp4",
      avatar: "/testimonials/headshots/shubham-kumar.jpg",
      type: "video"
    },
    {
      name: "Rahul Verma",
      role: "@TechStart",
      rating: 5,
      content: "3x revenue growth in 6 months! Their AI-powered solutions transformed our entire business model. Absolutely phenomenal work.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1e7220bb89?w=200&h=200&fit=crop&q=80",
      type: "text"
    },
    {
      name: "Priya Singh",
      role: "@LuxeFashion",
      rating: 5,
      content: "Our conversion rate jumped 150% after the redesign. The attention to luxury details and user experience is simply unmatched.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
      type: "text"
    },
    {
      name: "Aarav Patel",
      role: "@FinTechPro",
      rating: 5,
      content: "Delivered our MVP in just 15 days. The quality and speed of execution is remarkable. Worth every penny and more.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
      type: "text"
    },
    {
      name: "Meera Kapoor",
      role: "@LuxeInteriors",
      rating: 5,
      content: "2.5x increase in client acquisitions within 3 months. Their premium design approach perfectly aligns with our luxury market.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
      type: "text"
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
  const [playingVideos, setPlayingVideos] = useState<{[key: number]: boolean}>({});
  const [isMovementPaused, setIsMovementPaused] = useState(false);
  const [centeredCardIndex, setCenteredCardIndex] = useState<number | null>(null);

  // Calculate visible testimonials based on current index and window width
  const visibleCount = getVisibleItems(windowWidth);
  const visibleTestimonials = testimonials.slice(
    currentTestimonialIndex,
    currentTestimonialIndex + visibleCount
  );

  const handleVideoEnd = (index: number) => {
    setPlayingVideos(prev => ({
      ...prev,
      [index]: false
    }));
  };

  const toggleVideo = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    const video = document.getElementById(`testimonial-video-${index}`) as HTMLVideoElement;
    
    if (video) {
      if (video.paused) {
        video.play().catch(error => {
          console.error("Error playing video:", error);
        });
        setPlayingVideos(prev => ({
          ...prev,
          [index]: true
        }));
      } else {
        video.pause();
        setPlayingVideos(prev => ({
          ...prev,
          [index]: false
        }));
      }
    }
  };

  // Update container animation based on movement state
  useEffect(() => {
    const container = document.querySelector('.testimonials-container') as HTMLElement;
    if (container) {
      container.style.animationPlayState = isMovementPaused ? 'paused' : 'running';
    }
  }, [isMovementPaused]);

  // Add hover effect to pause movement
  const handleHover = (e: React.MouseEvent, index: number) => {
    const video = document.getElementById(`testimonial-video-${index}`) as HTMLVideoElement;
    if (video && !video.paused) {
      const container = document.querySelector('.testimonials-container') as HTMLElement;
      if (container) {
        container.style.animationPlayState = 'paused';
      }
    }
  };

  const handleHoverEnd = (e: React.MouseEvent, index: number) => {
    const video = document.getElementById(`testimonial-video-${index}`) as HTMLVideoElement;
    if (video && !video.paused) {
      const container = document.querySelector('.testimonials-container') as HTMLElement;
      if (container) {
        container.style.animationPlayState = 'paused';
      }
    }
  };

  const videoTestimonials = testimonials.filter(testimonial => testimonial.type === "video");
  const textTestimonials = testimonials.filter(testimonial => testimonial.type === "text");

  // Add state for live social proof
  const [showSocialProof, setShowSocialProof] = useState(true);

  // Animated counters for hero section
  const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  useEffect(() => {
    let projectTarget = 50;
    let clientTarget = 15;
    let projectInterval = setInterval(() => {
      setProjectCount((prev) => {
        if (prev < projectTarget) {
          return prev + 1;
        } else {
          clearInterval(projectInterval);
          return prev;
        }
      });
    }, 30);
    let clientInterval = setInterval(() => {
      setClientCount((prev) => {
        if (prev < clientTarget) {
          return prev + 1;
        } else {
          clearInterval(clientInterval);
          return prev;
        }
      });
    }, 80);
    return () => {
      clearInterval(projectInterval);
      clearInterval(clientInterval);
    };
  }, []);

  return (
    <MainLayout>
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[70svh] py-2 sm:py-4 md:py-6 flex items-start overflow-x-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black">
              <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(45deg,rgba(var(--luxury-gold-300),0.04)_25%,transparent_25%,transparent_75%,rgba(var(--luxury-gold-300),0.04)_75%,rgba(var(--luxury-gold-300),0.04))]" style={{ backgroundSize: '80px 80px' }} />
            </div>
          </div>
          
          <div className="relative w-full z-10 pt-2">
            <div className="container mx-auto px-4 max-w-7xl">
              {/* Testimonial Banner */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-center pb-2 sm:pb-3 md:pb-4"
              >
                <div className="bg-black/50 backdrop-blur-md border border-luxury-gold-300/25 rounded-full px-6 py-3 flex items-center gap-3 shadow-2xl shadow-luxury-gold-300/10">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-luxury-gold-300 overflow-hidden ring-2 ring-black">
                      <Image
                        src="/testimonials/headshots/shyam-sharma.jpg"
                        alt="Shyam Sunder Sharma"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div 
                      className="w-8 h-8 rounded-full border-2 border-luxury-gold-300 overflow-hidden ring-2 ring-black"
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
                    <div className="w-8 h-8 rounded-full border-2 border-luxury-gold-300 overflow-hidden ring-2 ring-black">
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
                        className="w-8 h-8 rounded-full border-2 border-luxury-gold-300 overflow-hidden bg-gray-800 flex items-center justify-center ring-2 ring-black"
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
                  <div className="flex flex-col ml-3 gap-1">
                    <span className="text-[#c6a255] text-sm font-medium">15+ Global Clients</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-yellow-400 drop-shadow-sm"
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

              <div className="w-full flex justify-center mt-1 sm:mt-2 md:mt-3 mb-3 sm:mb-4 md:mb-5">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                <Image 
                  src="/Globe.jpg" 
                  alt="Sanganak Company Logo" 
                  width={200} 
                  height={200} 
                  className="mx-auto w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] drop-shadow-2xl"
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-luxury-gold-300/5 rounded-full" />
                </motion.div>
              </div>

              <div className="text-center space-y-3 sm:space-y-4 md:space-y-5 mx-auto max-w-[90%] sm:max-w-full">
                <div className="space-y-2 sm:space-y-3">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-2 sm:mb-3 md:mb-4 px-2 sm:px-4 w-full"
                    style={{
                      background: 'linear-gradient(135deg, #c6a255, #e9d5a1, #c6a255, #f4e6b8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 30px rgba(198, 162, 85, 0.4)',
                      overflowWrap: 'break-word',
                      backgroundSize: '200% 200%',
                      animation: 'gradientShift 4s ease-in-out infinite'
                    }}
                  >
                    SANGANAK
                  </motion.h1>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-2xl font-bold tracking-wide mb-3 sm:mb-4"
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
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto px-4 leading-relaxed"
                >
                "We architect premium digital experiences that transform ambitious visions into"<br className="hidden sm:block" />
                  <span className="font-extrabold text-[#c6a255] drop-shadow-sm">market-leading businesses</span>,{' '}
                  <span className="font-extrabold text-[#c6a255] drop-shadow-sm">premium experiences</span>,{' '}
                  <span className="font-extrabold text-[#c6a255] drop-shadow-sm">& unstoppable growth</span>.
                </motion.p>

                {/* Service Categories */}
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mt-4 sm:mt-6 md:mt-8 mb-3 sm:mb-4">
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
                      className="flex flex-col items-center space-y-2 group cursor-pointer"
                    >
                      <motion.span 
                        className="text-3xl sm:text-4xl drop-shadow-lg"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {item.emoji}
                      </motion.span>
                      <span className="text-[#c6a255] font-semibold text-sm sm:text-base group-hover:text-[#e9d5a1] transition-colors duration-300 drop-shadow-sm">
                        {item.text}
                      </span>
                  </motion.div>
                  ))}
                </div>

                {/* Client Logos Marquee */}
                <div className="relative overflow-hidden mt-2 sm:mt-3 mb-3 sm:mb-4">
                  <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10" />
                  <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10" />
                  <motion.div
                    animate={{ x: [0, -1920] }}
                    transition={{ 
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="flex gap-4 items-center py-3"
                  >
                    {[
                      { name: 'NFTCollect', logo: '/client-logos/nftcollect.png' },
                      { name: 'GlobalEats', logo: '/client-logos/globaleats.png' },
                      { name: 'Interio', logo: '/client-logos/interio.png' },
                      { name: 'MedicoBuddy', logo: '/client-logos/medicobuddy.png' },
                      { name: 'Burgerrr', logo: '/client-logos/burgerrr.png' },
                      { name: 'CreatorsHome', logo: '/client-logos/creatorshome.png' },
                      { name: 'Realtor', logo: '/client-logos/Realtor.png' },
                      { name: 'Beam', logo: '/client-logos/Beam.png' },
                      { name: 'NFTCollect', logo: '/client-logos/nftcollect.png' },
                      { name: 'GlobalEats', logo: '/client-logos/globaleats.png' },
                      { name: 'Interio', logo: '/client-logos/interio.png' },
                      { name: 'MedicoBuddy', logo: '/client-logos/medicobuddy.png' },
                      { name: 'Burgerrr', logo: '/client-logos/burgerrr.png' },
                      { name: 'CreatorsHome', logo: '/client-logos/creatorshome.png' },
                      { name: 'Realtor', logo: '/client-logos/Realtor.png' },
                      { name: 'Beam', logo: '/client-logos/Beam.png' }
                    ].map((client, index) => (
                      <motion.div
                        key={index}
                        className="flex-none w-[240px] h-[100px] relative group"
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Image
                          src={client.logo}
                          alt={`${client.name} - Premium Client`}
                          fill
                          sizes="(max-width: 768px) 180px, 240px"
                          className="object-contain opacity-80 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:brightness-125 brightness-110"
                          priority={index < 8}
                          loading={index < 8 ? "eager" : "lazy"}
                          quality={85}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          {/* Animated Counters */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <span className="text-3xl font-bold text-[#c6a255]">{projectCount}+</span>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-[#c6a255]">{clientCount}+</span>
              <p className="text-gray-300">Happy Clients</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen bg-black/95 relative py-12">
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
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[95%] sm:max-w-7xl mx-auto mt-8"
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
                  <LuxuryCard className="h-full group hover:border-luxury-gold-300/5 transition-all duration-300">
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
        <section id="portfolio" className="py-16 sm:py-24 relative bg-gradient-to-b from-black to-black/95 overflow-hidden">
          <div className="container mx-auto px-4">
            <LuxuryHeading
              title="Our Portfolio"
              subtitle="Explore our collection of premium digital experiences that delivered exceptional results"
            />
            
            {/* First Row - Moves Left */}
                  <motion.div
              initial={{ x: 0 }}
              whileInView={{ x: "-50%" }}
              transition={{ 
                duration: 30, 
                ease: "linear",
                repeat: Infinity
              }}
              viewport={{ once: false }}
              className="flex gap-6 mt-16 mb-8 w-max"
            >
              {[...portfolio.slice(0, 5), ...portfolio.slice(0, 5)].map((project, index) => (
                <motion.div
                  key={`row1-${project.title}-${index}`}
                  className="w-[500px] flex-shrink-0"
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
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
                </motion.div>
                ))}
            </motion.div>

            {/* Second Row - Moves Right */}
            <motion.div 
              initial={{ x: "-50%" }}
              whileInView={{ x: 0 }}
              transition={{ 
                duration: 30, 
                ease: "linear",
                repeat: Infinity
              }}
              viewport={{ once: false }}
              className="flex gap-6 mt-12 w-max"
            >
              {[...portfolio.slice(5, 9), ...portfolio.slice(5, 9)].map((project, index) => (
                <motion.div
                  key={`row2-${project.title}-${index}`}
                  className="w-[500px] flex-shrink-0"
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
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
                </motion.div>
              ))}
            </motion.div>
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <LuxuryCard className="p-8 bg-black/40 backdrop-blur-sm border border-[#c6a255]/20 flex flex-col h-full group hover:border-[#c6a255]/40 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#c6a255]/10 border border-[#c6a255]/20 flex items-center justify-center group-hover:bg-[#c6a255]/20 transition-colors">
                        <span className="text-2xl font-bold text-[#c6a255]">{index + 1}</span>
                  </div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-[#c6a255] to-[#e6c878] text-transparent bg-clip-text">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 flex-grow">{step.description}</p>
                    <div className="mt-6 pt-6 border-t border-[#c6a255]/10">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#c6a255]/80">Step {index + 1}/4</span>
                        <div className="flex gap-1">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i <= index ? 'bg-[#c6a255]' : 'bg-[#c6a255]/20'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                </LuxuryCard>
                </motion.div>
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
                  <span className="text-[#c6a255]">15-day MVP delivery</span>
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
              <h3 className="text-2xl font-bold text-white mb-6">Freelancers</h3>
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
              <h3 className="text-2xl font-bold text-white mb-6">Agencies</h3>
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
              <h3 className="text-2xl font-bold text-white mb-6">Full-time</h3>
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
        <section id="testimonials" className="relative py-24 bg-gradient-to-b from-black to-black/95 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <LuxuryHeading
              title="Client Stories"
              subtitle="Hear from our distinguished clients who achieved extraordinary results"
            />
            
            <div className="relative mt-16">
              <motion.div 
                className="flex justify-center items-center gap-6 sm:gap-8 md:gap-10 overflow-x-auto pb-6 px-4 -mx-4 scrollbar-hide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={currentTestimonialIndex + index}
                    className="w-[320px] sm:w-[340px] flex-shrink-0"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                  >
                    <LuxuryCard className="overflow-hidden group hover:border-luxury-gold-300/40 transition-all duration-500 p-0 bg-black/60 backdrop-blur-md shadow-2xl">
                      <div className="relative aspect-[3/4]">
                        {testimonial.type === 'video' ? (
                          <>
                            <video
                              id={`testimonial-video-${index}`}
                              className="w-full h-full object-cover"
                              src={testimonial.videoUrl}
                              onEnded={() => handleVideoEnd(index)}
                              playsInline
                              preload="metadata"
                            />
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleVideo(e, index);
                              }}
                              className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/20 to-black/40 hover:from-black/70 hover:via-black/30 hover:to-black/50 transition-all duration-500 cursor-pointer z-10"
                              type="button"
                            >
                              <div className="w-24 h-24 rounded-full bg-luxury-gold-300/95 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-luxury-gold-300/30">
                                {playingVideos[index] ? (
                                  <Pause className="w-10 h-10 text-black" />
                                ) : (
                                  <Play className="w-10 h-10 text-black ml-1" />
                                )}
                              </div>
                            </button>
                            <div className="absolute top-4 right-4">
                              <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                                <span className="text-xs text-luxury-gold-300 font-medium">Video Testimonial</span>
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="relative h-full bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold-300/5 via-transparent to-luxury-gold-300/10" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                              <div className="mb-6">
                                <svg className="w-12 h-12 text-luxury-gold-300/60" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                </svg>
                              </div>
                              <p className="text-lg text-luxury-gold-100 text-center font-medium italic leading-relaxed mb-4">
                                "{testimonial.content}"
                              </p>
                              <div className="absolute top-4 right-4">
                                <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                                  <span className="text-xs text-luxury-gold-300 font-medium">Written Review</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6 bg-gradient-to-t from-black/90 to-black/70 backdrop-blur-sm">
                        <div className="flex flex-col items-center">
                          <div className="flex items-center gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <motion.svg
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: (index * 0.15) + (i * 0.1), duration: 0.3 }}
                                className="w-5 h-5 text-luxury-gold-300 drop-shadow-sm"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </motion.svg>
                            ))}
                          </div>
                          <div className="flex flex-col items-center text-center">
                            <h4 className="font-semibold text-luxury-gold-300 text-xl mb-1">{testimonial.name}</h4>
                            <p className="text-sm text-luxury-gold-300/80 font-medium">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex justify-center items-center mt-10 gap-4">
                {testimonials.map((_, index) => {
                  const isActive = index >= currentTestimonialIndex && index < currentTestimonialIndex + visibleCount;
                  return (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentTestimonialIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${isActive 
                        ? 'bg-luxury-gold-300 scale-125 shadow-lg shadow-luxury-gold-300/50' 
                        : 'bg-luxury-gold-300/30 hover:bg-luxury-gold-300/50 hover:scale-110'}`}
                      aria-label={`Go to testimonial ${index + 1}`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  );
                })}
              </div>
              
              <div className="flex justify-center items-center mt-6 gap-6">
                <motion.button
                  onClick={() => handleTestimonialScroll('prev')}
                  className="bg-black/70 hover:bg-black/90 p-3 rounded-full border border-luxury-gold-300/25 hover:border-luxury-gold-300/50 transition-all duration-300 backdrop-blur-sm shadow-lg"
                  aria-label="Previous testimonial"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-6 h-6 text-luxury-gold-300" />
                </motion.button>

                <div className="w-40 h-2 bg-luxury-gold-300/20 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-luxury-gold-300 to-luxury-gold-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{
                      width: `${(currentTestimonialIndex / Math.max(testimonials.length - visibleCount, 1)) * 100}%`
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <motion.button
                  onClick={() => handleTestimonialScroll('next')}
                  className="bg-black/70 hover:bg-black/90 p-3 rounded-full border border-luxury-gold-300/25 hover:border-luxury-gold-300/50 transition-all duration-300 backdrop-blur-sm shadow-lg"
                  aria-label="Next testimonial"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-6 h-6 text-luxury-gold-300" />
                </motion.button>
              </div>
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
        {/* Floating WhatsApp Button */}
        <motion.a
          href="https://wa.me/919631864610"
          className="fixed bottom-4 right-4 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-[#c6a255] hover:bg-[#e9d5a1] rounded-full flex items-center justify-center shadow-2xl shadow-[#c6a255]/30 transition-all duration-300"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </motion.a>
      </main>
    </MainLayout>
  );
}