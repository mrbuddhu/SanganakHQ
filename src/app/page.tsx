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
import { Code2, Gem, Globe, Lightbulb, Shield, Sparkles, ChevronDown, Zap, Plus, Linkedin, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import AuthForm from './AuthForm';
import { CTA_URL } from '@/constants/links';

export default function Home() {
  const fullText = 'The Premium IT Boutique';
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(-1);
  const [displayText, setDisplayText] = useState('The Premium IT Boutique');
  const router = useRouter();
  const pathname = usePathname();

  if (!pathname) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    setDisplayText(fullText); // Ensure it ends with the full text
  }, []);

  const handleTestimonialScroll = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentTestimonialIndex(prev => 
        prev === 0 ? testimonials.length - 3 : Math.max(0, prev - 3)
      );
    } else {
      setCurrentTestimonialIndex(prev => 
        prev + 3 >= testimonials.length ? 0 : prev + 3
      );
    }
  };

  const scrollPortfolio = (direction: 'left' | 'right') => {
    const container = document.querySelector('.portfolio-grid');
    if (container) {
      const scrollAmount = direction === 'left' ? -420 : 420; // 400px card width + 20px gap
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <MainLayout>
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-screen">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black">
              <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,rgba(var(--luxury-gold-300),0.05)_25%,transparent_25%,transparent_75%,rgba(var(--luxury-gold-300),0.05)_75%,rgba(var(--luxury-gold-300),0.05))]" style={{ backgroundSize: '60px 60px' }} />
            </div>
          </div>
          
          <div className="absolute top-0 left-0 right-0 z-10">
            <div className="container mx-auto">
              {/* Testimonial Banner */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center pt-0"
              >
                <div className="bg-black/40 backdrop-blur-sm border border-luxury-gold-300/20 rounded-full px-6 py-2 flex items-center gap-2"
                >
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <div
                        key={index}
                        className="w-10 h-10 rounded-full border-2 border-luxury-gold-300 overflow-hidden bg-gray-800 flex items-center justify-center"
                      >
                        <span className="text-luxury-gold-300 text-xs">F{index}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 ml-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-white font-semibold">5+ Clients</span>
                  </div>
                </div>
              </motion.div>

              <div className="w-full flex justify-center">
                <Image 
                  src="/Globe.jpg" 
                  alt="Sanganak Company Logo" 
                  width={350} 
                  height={350} 
                  className="mx-auto"
                  priority={true}
                />
              </div>

              <div className="text-center space-y-4">
                <h1 
                  className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-wider mb-0"
                  style={{
                    background: 'linear-gradient(to right, #c6a255, #e9d5a1, #c6a255)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 20px rgba(198, 162, 85, 0.3)'
                  }}
                >
                  SANGANAK
                </h1>
                <h2 
                  className="text-2xl md:text-3xl font-bold tracking-wide mt-0"
                  style={{
                    background: 'linear-gradient(to right, #c6a255, #e9d5a1, #c6a255)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 20px rgba(198, 162, 85, 0.3)'
                  }}
                >
                  {displayText}
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                  From strategy to we craft premium solutions that drive engagement,<br />
                  <span className="font-extrabold text-[#c6a255]">execution, growth, and revenue.</span>
                </p>

                {/* Service Categories */}
                <div className="flex flex-wrap justify-center gap-8 mt-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center space-y-2"
                  >
                    <span className="text-4xl text-luxury-gold-300">👑</span>
                    <span className="text-luxury-gold-300 font-semibold">Elite Clientele</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col items-center space-y-2"
                  >
                    <span className="text-4xl text-luxury-gold-300">⭐</span>
                    <span className="text-luxury-gold-300 font-semibold">Bespoke Solutions</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col items-center space-y-2"
                  >
                    <span className="text-4xl text-luxury-gold-300">✨</span>
                    <span className="text-luxury-gold-300 font-semibold">Tailored Solutions</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center -mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              {/* Logo */}
              <div className="relative w-40 h-40 mx-auto mb-8">
                <Image
                  src="/logo.ico"
                  alt="Sanganak Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Company Name */}
              <h2 className="text-5xl md:text-6xl font-bold text-luxury-gold-300 tracking-wider mb-4">
                {displayText}
              </h2>

              {/* Tagline */}
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
                From strategy to we craft premium solutions that drive engagement,<br />
                <span className="font-extrabold text-[#c6a255]">execution, growth, and revenue.</span>
              </p>

              {/* Service Categories */}
              <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-luxury-gold-300 flex justify-center mb-3">
                    <span className="text-4xl">👑</span>
                  </div>
                  <h3 className="text-luxury-gold-300 font-medium">Elite Clientele</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <div className="text-luxury-gold-300 flex justify-center mb-3">
                    <span className="text-4xl">⭐</span>
                  </div>
                  <h3 className="text-luxury-gold-300 font-medium">Bespoke Solutions</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-luxury-gold-300 flex justify-center mb-3">
                    <span className="text-4xl">✨</span>
                  </div>
                  <h3 className="text-luxury-gold-300 font-medium">Tailored Solutions</h3>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen bg-black/95 relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#c6a255]/5 to-black/0" />
          <div className="max-w-6xl mx-auto px-4">
            <LuxuryHeading
              title="Elite Services"
              subtitle="Transforming visions into digital excellence"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Luxury Branding */}
              <LuxuryCard>
                <div className="text-[#c6a255] mb-4 text-2xl">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#c6a255] mb-4">Luxury Branding</h3>
                <p className="text-gray-400 mb-4">Elevate your brand with our premium digital identity services.</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Custom Brand Strategy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Visual Identity Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Brand Guidelines
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Marketing Collateral
                  </li>
                </ul>
              </LuxuryCard>

              {/* Elite Design */}
              <LuxuryCard>
                <div className="text-[#c6a255] mb-4 text-2xl">
                  <Gem className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#c6a255] mb-4">Elite Design</h3>
                <p className="text-gray-400 mb-4">Bespoke UI/UX design solutions for discerning clients.</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Custom Website Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Mobile App Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    User Experience Strategy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Interactive Prototypes
                  </li>
                </ul>
              </LuxuryCard>

              {/* Bespoke Applications */}
              <LuxuryCard>
                <div className="text-[#c6a255] mb-4 text-2xl">
                  <Code2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#c6a255] mb-4">Bespoke Applications</h3>
                <p className="text-gray-400 mb-4">Custom software solutions tailored to your needs.</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Full Stack Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Cloud Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    API Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Performance Optimization
                  </li>
                </ul>
              </LuxuryCard>

              {/* Blockchain Innovation */}
              <LuxuryCard>
                <div className="text-[#c6a255] mb-4 text-2xl">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#c6a255] mb-4">Blockchain Innovation</h3>
                <p className="text-gray-400 mb-4">Advanced blockchain solutions for modern enterprises.</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Smart Contract Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    DApp Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Blockchain Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Security Auditing
                  </li>
                </ul>
              </LuxuryCard>

              {/* Advanced AI */}
              <LuxuryCard>
                <div className="text-[#c6a255] mb-4 text-2xl">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#c6a255] mb-4">Advanced AI</h3>
                <p className="text-gray-400 mb-4">Cutting-edge AI solutions for business transformation.</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Custom AI Models
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Machine Learning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Data Analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Process Automation
                  </li>
                </ul>
              </LuxuryCard>

              {/* Elite Package */}
              <LuxuryCard>
                <div className="text-[#c6a255] mb-4 text-2xl">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#c6a255] mb-4">Elite Package</h3>
                <p className="text-gray-400 mb-4">Comprehensive digital transformation solution.</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Complete Brand Identity & Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Custom Software Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    AI & Blockchain Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c6a255]">•</span>
                    Ongoing Support & Evolution
                  </li>
                </ul>
              </LuxuryCard>
            </motion.div>
          </div>
        </section>

        {/* Services CTA */}
        <section className="py-20 relative">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold bg-metallic-gradient bg-clip-text text-transparent mb-6">
                Ready to Elevate Your Digital Presence?
              </h3>
              <p className="text-luxury-gray-300 mb-8">
                Let's discuss how our bespoke solutions can transform your vision into digital excellence.
              </p>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuxuryButton size="lg">
                  Schedule a Private Consultation
                </LuxuryButton>
              </a>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <LuxuryCard
                  key={index}
                  className="p-6 bg-black/40 backdrop-blur-sm border border-[#c6a255]/20 flex flex-col"
                >
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

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 relative">
          <LuxuryHeading
            title="Our Portfolio"
            subtitle="Discover our latest projects"
          />
          
          <div className="max-w-[90rem] mx-auto pl-16 pr-20 relative">
            {/* Navigation Arrows */}
            <button 
              onClick={() => scrollPortfolio('left')}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 backdrop-blur-sm text-[#c6a255] p-4 rounded-full border border-[#c6a255]/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scrollPortfolio('right')}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 backdrop-blur-sm text-[#c6a255] p-4 rounded-full border border-[#c6a255]/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Portfolio Horizontal Scroll */}
            <div className="flex overflow-hidden gap-8 portfolio-grid -ml-2">
              {portfolio.map((item) => (
                <div key={item.title} className="flex flex-col gap-4 w-[400px]">
                  <LuxuryCard className="h-[450px] p-6 bg-black/40 backdrop-blur-sm border border-[#c6a255]/20">
                    <div className="h-48 overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mt-4 text-luxury-gold-300 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mt-2 line-clamp-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-luxury-gold-900/30 text-luxury-gold-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </LuxuryCard>
                  <div className="flex gap-4 justify-center">
                    <a 
                      href={item.caseStudyLink} 
                      className="px-6 py-2 text-sm border border-luxury-gold-500 text-luxury-gold-300 rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-luxury-gold-500/10 hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] hover:border-luxury-gold-300"
                    >
                      Case Study
                    </a>
                    {item.liveLink && (
                      <a 
                        href={item.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-2 text-sm border border-luxury-gold-500 text-luxury-gold-300 rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-luxury-gold-500/10 hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] hover:border-luxury-gold-300"
                      >
                        See Live
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio CTA */}
        <section className="py-20 relative">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold bg-metallic-gradient bg-clip-text text-transparent mb-6">
                Inspired by Our Work?
              </h3>
              <p className="text-luxury-gray-300 mb-8">
                Discover how we can create a unique digital masterpiece for your brand.
              </p>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuxuryButton size="lg">
                  View Detailed Case Studies
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
                className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/80 border border-[#c6a255]/20 text-[#c6a255] flex items-center justify-center hover:bg-black transition-colors"
              >
                ←
              </button>

              <div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {testimonials.slice(currentTestimonialIndex, currentTestimonialIndex + 3).map((testimonial, index) => (
                  <LuxuryCard key={index} className="flex flex-col h-[500px]">
                    {/* Video Container */}
                    <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                      <video
                        src={testimonial.videoUrl}
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <p className="text-gray-300 italic mb-4">{testimonial.quote}</p>
                      <div className="mt-auto">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-[#c6a255] font-medium">{testimonial.name}</h4>
                            <p className="text-gray-400 text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </LuxuryCard>
                ))}
              </div>

              <button 
                onClick={() => handleTestimonialScroll('next')}
                className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/80 border border-[#c6a255]/20 text-[#c6a255] flex items-center justify-center hover:bg-black transition-colors"
              >
                →
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
                Still Have Questions?
              </h3>
              <p className="text-luxury-gray-300 mb-8">
                Our team is here to provide detailed answers and guide you through every step.
              </p>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuxuryButton size="lg">
                  Get in Touch
                </LuxuryButton>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

const portfolio = [
  {
    title: "Creators Home",
    description: "SaaS platform revolutionizing content creation with AI-powered tools, analytics, and monetization solutions for digital creators.",
    image: "/portfolio/creators-home.jpg",
    caseStudyLink: "/case-studies#creators-home",
    liveLink: "https://creatorshome.xyz",
    tags: ["SaaS", "Creator Economy", "AI Tools", "Analytics"]
  },
  {
    title: "NFTCollect",
    description: "Cross-platform mobile app for NFT collectors featuring real-time price tracking, portfolio management, and marketplace integration.",
    image: "/portfolio/nftcollect.jpg",
    caseStudyLink: "/case-studies#nftcollect",
    tags: ["React Native", "Mobile App", "Web3", "NFT"]
  },
  {
    title: "Burgerrr",
    description: "Feature-rich food delivery mobile app specializing in gourmet burgers, with real-time order tracking and personalized recommendations.",
    image: "/portfolio/burgerrr.jpg",
    caseStudyLink: "/case-studies#burgerrr",
    tags: ["React Native", "Mobile App", "Food Delivery", "Location Services"]
  },
  {
    title: "Interio",
    description: "Modern interior design platform showcasing luxury spaces and connecting designers with clients.",
    image: "/portfolio/interio.jpg",
    caseStudyLink: "/case-studies#interio",
    liveLink: "https://interio-eta.vercel.app/",
    tags: ["Interior Design", "Luxury", "Marketplace"]
  },
  {
    title: "GlobalEats",
    description: "International culinary platform connecting food enthusiasts with authentic global cuisines.",
    image: "/portfolio/globaleats.jpg",
    caseStudyLink: "/case-studies#globaleats",
    tags: ["Food Tech", "Marketplace", "Culture"]
  },
  {
    title: "MedicoBuddy",
    description: "SaaS solution transforming medical education with AI-driven learning tools, case management, and professional networking for healthcare professionals.",
    image: "/portfolio/medicobuddy.jpg",
    caseStudyLink: "/case-studies#medicobuddy",
    tags: ["SaaS", "Medical Education", "AI/ML", "Healthcare"]
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
    name: "Sarah Chen",
    role: "CEO, TechVision Inc.",
    quote: "Sanganak transformed our digital presence with their innovative approach. The AI integration has revolutionized our customer service.",
    videoUrl: "/testimonials/sarah-chen.mp4",
    avatar: "/testimonials/sarah-chen.jpg"
  },
  {
    name: "James Miller",
    role: "CTO, BlockChain Solutions",
    quote: "Their blockchain expertise is unmatched. They delivered a secure, scalable solution that exceeded our expectations.",
    videoUrl: "/testimonials/james-miller.mp4",
    avatar: "/testimonials/james-miller.jpg"
  },
  {
    name: "Elena Rodriguez",
    role: "Creative Director, Design Hub",
    quote: "The attention to detail in their design work is exceptional. Our brand has never looked more premium and cohesive.",
    videoUrl: "/testimonials/elena-rodriguez.mp4",
    avatar: "/testimonials/elena-rodriguez.jpg"
  },
  {
    name: "Michael Zhang",
    role: "Founder, AI Ventures",
    quote: "Sanganak's AI solutions have given us a competitive edge. Their team's technical expertise is truly world-class.",
    videoUrl: "/testimonials/michael-zhang.mp4",
    avatar: "/testimonials/michael-zhang.jpg"
  },
  {
    name: "Priya Patel",
    role: "Head of Marketing, LuxeBrand",
    quote: "The branding work they delivered was simply outstanding. Our engagement metrics have increased by 300%.",
    videoUrl: "/testimonials/priya-patel.mp4",
    avatar: "/testimonials/priya-patel.jpg"
  },
  {
    name: "David Anderson",
    role: "Product Manager, CloudTech",
    quote: "Their development team created a flawless application that has transformed our business operations.",
    videoUrl: "/testimonials/david-anderson.mp4",
    avatar: "/testimonials/david-anderson.jpg"
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
    title: "Tailored Solutions",
    description: "Providing unparalleled attention and dedication to every aspect of your project."
  }
];

export { portfolio, process, testimonials, faqs };
