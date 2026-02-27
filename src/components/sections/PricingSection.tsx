'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Send, X } from 'lucide-react';
import Image from 'next/image';
import LuxuryHeading from '@/components/ui/LuxuryHeading';
import LuxuryCard from '@/components/ui/LuxuryCard';
import LuxuryButton from '@/components/ui/LuxuryButton';
import { CTA_URL } from '@/constants/links';

type Tab = 'product' | 'landing' | 'website' | 'brand';
type Mode = 'design' | 'design_dev';

const pricing = {
  product: {
    title: 'Custom Product Build',
    price: 10000,
    suffix: '+',
    features: [
      'Mobile / Web / SaaS products',
      'Dedicated PM + senior execution',
      'Deep UX research',
      'Pixel-perfect frontend development',
      'Scalable architecture',
      'Rapid iteration cycles',
      'Post-launch support',
    ],
  },
  landing: {
    design: {
      price: 3500,
      features: [
        'Single high-converting page',
        '3 design concepts',
        'Full copywriting',
        'Figma handoff',
      ],
    },
    design_dev: {
      price: 6500,
      features: [
        'Everything in Design',
        'Framer / Webflow / Next.js build',
        'Performance optimization',
        'Launch support',
      ],
    },
  },
  website: {
    design: {
      price: 6000,
      features: [
        'Multi-page UX architecture',
        '3 design concepts',
        'Full copywriting',
        'Figma system',
      ],
    },
    design_dev: {
      price: 10000,
      features: [
        'Everything in Design',
        'Webflow / Next.js build',
        'CMS setup',
        'SEO foundation',
      ],
    },
  },
  brand: {
    price: 4000,
    features: [
      'Logo, type, colors',
      '5 brand explorations',
      'Brand guidelines',
      'Ready-to-use brand kit',
    ],
  },
  growth: {
    priceMin: 4000,
    priceMax: 8000,
    period: 'month',
    features: [
      '1 request at a time',
      'Flexible evolving scope',
      'Weekly performance updates',
      'Dedicated strategist',
      'Continuous optimization',
    ],
  },
  reset: {
    name: 'Revenue Reset',
    price: 2000,
  },
};

function formatPrice(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<Tab>('product');
  const [mode, setMode] = useState<Mode>('design');
  const [isResetOpen, setIsResetOpen] = useState(false);

  const handleTabChange = useCallback((tab: Tab) => {
    setActiveTab(tab);
    setMode('design');
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsResetOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isResetOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isResetOpen]);

  const showToggle = activeTab === 'landing' || activeTab === 'website';

  const getProductPrice = () => {
    if (activeTab === 'product') {
      return { display: `From ${formatPrice(pricing.product.price)}${pricing.product.suffix}`, features: pricing.product.features };
    }
    if (activeTab === 'brand') {
      return { display: `From ${formatPrice(pricing.brand.price)}`, features: pricing.brand.features };
    }
    const tabData = activeTab === 'landing' ? pricing.landing : pricing.website;
    const data = mode === 'design' ? tabData.design : tabData.design_dev;
    return { display: `From ${formatPrice(data.price)}`, features: data.features };
  };

  const { display: productPriceDisplay, features: productFeatures } = getProductPrice();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative z-10 w-full py-20 sm:py-24 overflow-hidden bg-[#000000]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <LuxuryHeading
            title="Premium Investment Packages"
            subtitle="Choose Your Path to 3x Faster Launches, 30% Conversion Lifts, and Market Leadership"
            className="bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text"
          />
        </motion.div>

        {/* Pricing Grid: Desktop 2-col, Mobile stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1440px] mx-auto">
          {/* Left: Product Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1"
          >
            <LuxuryCard className="h-full flex flex-col bg-black border-luxury-gold-300/20 p-6 lg:p-8" delay={0}>
              {/* Tabs: golden pill when active, 3D luxury CTA style */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(['product', 'landing', 'website', 'brand'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-[#c6a255] via-[#e9d5a1] to-[#c6a255] text-black shadow-[0_4px_14px_rgba(198,162,85,0.4)] hover:shadow-[0_6px_20px_rgba(198,162,85,0.5)] hover:scale-[1.03] active:scale-[0.98]'
                        : 'bg-black/70 border border-white/10 text-gray-400 hover:text-gray-300 hover:border-white/20'
                    }`}
                  >
                    {tab === 'product' && 'Product'}
                    {tab === 'landing' && 'Landing'}
                    {tab === 'website' && 'Website'}
                    {tab === 'brand' && 'Brand'}
                  </button>
                ))}
              </div>

              {/* Toggle: black container, golden pill slides to selected (smaller than tab pills) */}
              {showToggle && (
                <div className="relative flex mb-6 p-1 rounded-full bg-black border border-white/10 w-fit">
                  <motion.div
                    layout
                    className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-[#c6a255] via-[#e9d5a1] to-[#c6a255] shadow-[0_2px_8px_rgba(198,162,85,0.35)]"
                    initial={false}
                    animate={{
                      left: mode === 'design' ? 4 : '50%',
                      width: 'calc(50% - 4px)',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    style={{ top: 4, bottom: 4 }}
                  />
                  <button
                    onClick={() => setMode('design')}
                    className="relative z-10 flex-1 min-w-[88px] px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200"
                    style={{ color: mode === 'design' ? '#000' : 'rgb(156 163 175)' }}
                  >
                    Design Only
                  </button>
                  <button
                    onClick={() => setMode('design_dev')}
                    className="relative z-10 flex-1 min-w-[88px] px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200"
                    style={{ color: mode === 'design_dev' ? '#000' : 'rgb(156 163 175)' }}
                  >
                    Design + Dev
                  </button>
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-2">
                {activeTab === 'product' && pricing.product.title}
                {activeTab === 'landing' && 'Landing Page'}
                {activeTab === 'website' && 'Full Website'}
                {activeTab === 'brand' && 'Brand Identity'}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {activeTab === 'product' &&
                  'For funded teams building new SaaS products or internal platforms.'}
                {activeTab === 'landing' &&
                  'For launches where a single high-converting page drives the outcome.'}
                {activeTab === 'website' &&
                  'For brands that need a multi-page site that sells and tells the story.'}
                {activeTab === 'brand' &&
                  'For founders who need a premium identity before scaling growth.'}
              </p>

              {/* Price with animation */}
              <div className="mb-6 min-h-[2.5rem]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={productPriceDisplay}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25 }}
                    className="text-3xl lg:text-4xl font-bold text-luxury-gold-300"
                  >
                    {productPriceDisplay}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {productFeatures.slice(0, 7).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-luxury-gold-300 mt-1 flex-shrink-0 text-xs">●</span>
                    <span className="text-gray-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <LuxuryButton
                as="a"
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto text-center text-base font-bold py-3 px-6 inline-flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Intro Call
              </LuxuryButton>
            </LuxuryCard>
          </motion.div>

          {/* Right: Growth Partner + Revenue Reset */}
          <div className="order-2 flex flex-col gap-6">
            {/* Growth Partner Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <LuxuryCard className="relative overflow-visible bg-black border-luxury-gold-300/20 p-6 lg:p-8" delay={0.1}>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text">
                    Growth Partner
                  </h3>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs font-medium text-gray-300">Most Popular</span>
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-luxury-gold-300 mb-2">
                  ${pricing.growth.priceMin.toLocaleString()}–${pricing.growth.priceMax.toLocaleString()}/mo
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  For teams with traffic who want compounding, done-for-you growth.
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Starts at {formatPrice(pricing.growth.priceMin)} for a single channel. Multi-channel
                  and higher-volume engagements typically land between {formatPrice(6000)}–{formatPrice(8000)} per month.
                </p>
                <ul className="space-y-3 mb-8">
                  {pricing.growth.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-luxury-gold-300 mt-1 flex-shrink-0 text-xs">●</span>
                      <span className="text-gray-300 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <LuxuryButton
                  as="a"
                  href="https://cal.com/sanganakhq/growth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full lg:w-auto text-center text-base font-bold py-3 px-6 inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Intro Call
                </LuxuryButton>
              </LuxuryCard>
            </motion.div>

            {/* Revenue Reset Card - smaller */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <LuxuryCard className="bg-black border-luxury-gold-300/20 p-6" delay={0.2}>
                <h3 className="text-xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-1">
                  {pricing.reset.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">1-Week Strategic Intensive</p>
                <div className="text-2xl font-bold text-luxury-gold-300 mb-6">
                  {formatPrice(pricing.reset.price)}
                </div>
                <LuxuryButton
                  as="button"
                  type="button"
                  variant="secondary"
                  onClick={() => setIsResetOpen(true)}
                  className="w-full lg:w-auto text-center text-base font-bold py-3 px-6 inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  View Details
                </LuxuryButton>
              </LuxuryCard>
            </motion.div>
          </div>
        </div>

        {/* Revenue Reset Modal */}
        <AnimatePresence>
          {isResetOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setIsResetOpen(false)}
            >
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-[720px] w-full rounded-2xl bg-black border border-luxury-gold-300/20 p-8 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsResetOpen(false)}
                  className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-gray-300 hover:bg-white/5 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-200 text-transparent bg-clip-text mb-2">
                  Revenue Reset
                </h3>
                <p className="text-gray-300 mb-8">
                  A full-stack revenue intervention across design, code, and marketing systems.
                </p>
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-luxury-gold-300 uppercase tracking-wider mb-2">
                      Product Layer
                    </h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• UX & conversion audit</li>
                      <li>• Design system breakdown</li>
                      <li>• Code & performance review</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-luxury-gold-300 uppercase tracking-wider mb-2">
                      Growth Layer
                    </h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Funnel & messaging analysis</li>
                      <li>• Paid acquisition & lifecycle review</li>
                      <li>• Revenue bottleneck mapping</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-luxury-gold-300 uppercase tracking-wider mb-2">
                      Execution Layer
                    </h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• 30–60–90 day roadmap</li>
                      <li>• 1 high-impact fix implemented</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <LuxuryButton
                    as="a"
                    href={CTA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-base font-bold py-3 px-6"
                  >
                    Apply for Revenue Reset
                  </LuxuryButton>
                  <LuxuryButton
                    as="a"
                    href={CTA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    className="flex-1 text-center text-base font-bold py-3 px-6"
                  >
                    Book Strategy Call
                  </LuxuryButton>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Client Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-gray-400 text-base font-medium mb-8 text-center">Trusted by 15+ Global Brands</div>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10" />
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex gap-2 items-center py-3"
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
                { name: 'Beam', logo: '/client-logos/Beam.png' },
              ].map((client, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-[240px] h-[100px] relative group"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} - Premium Client`}
                    fill
                    sizes="(max-width: 768px) 180px, 240px"
                    className="object-contain opacity-80 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:brightness-125 brightness-110"
                    priority={index < 8}
                    loading={index < 8 ? 'eager' : 'lazy'}
                    quality={85}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
