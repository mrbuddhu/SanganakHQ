import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CTA_URL } from '@/constants/links';

// Navbar component - Website ka navigation section jo user ko different pages par navigate karne mein help karta hai
// Features:
// - Responsive design - Mobile aur desktop dono ke liye optimize kiya gaya hai
// - Dynamic links - Current page ke hisab se active state show karta hai
// - Smooth transitions - Menu open/close ke liye smooth animations
// - Premium look - Dark theme with luxury gold accents

// State management:
// - isMenuOpen: Mobile menu ka open/close state track karta hai
// - activeSection: Current visible section ka track rakhta hai

// Intersection Observer:
// - Page scroll ke time automatically active section ko detect karta hai
// - rootMargin: -50% se section ko middle mein aane par active karta hai

// Navigation Items:
// - Logo: Home page ka link
// - Services: Services section ka link
// - Portfolio: Portfolio section ka link
// - Testimonials: Testimonials section ka link

// Scroll Functionality:
// - scrollToSection: Smooth scrolling ke sath section par navigate karta hai
// - Mobile menu ko automatically close karta hai navigation ke baad
export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-50% 0px -50% 0px' // Triggers when section is in middle of viewport
      }
    )

    // Observe all sections
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  // Only show navbar on home page
  if (pathname !== '/' ) {
    return null
  }

  const navItems = [
    { href: '#hero', isLogo: true, logoImage: '/Logo.ico' },
    { href: '#services', label: 'Services', isLogo: false },
    { href: '#portfolio', label: 'Portfolio', isLogo: false },
    { href: '#testimonials', label: 'Testimonials', isLogo: false },
  ]

  const scrollToSection = (href: string) => {
    if (pathname !== '/' && href.startsWith('#')) {
      window.location.href = '/' + href;
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-3 sm:bottom-4 left-0 right-0 flex justify-center z-50 px-3 sm:px-4"
      style={{ transform: 'translateZ(0)' }}
    >
      <div className="relative w-full max-w-[min(92vw,42rem)] ml-0 mr-12 sm:mr-14 md:mr-0 overflow-visible">
        <div className="absolute inset-0 nav-blur rounded-full -z-10" />
        <div className="h-12 sm:h-[52px] md:h-14 pl-3 sm:pl-4 md:pl-5 pr-2 flex items-center justify-between gap-2 sm:gap-4 rounded-full border border-[#c6a255]/20 bg-black/40 overflow-hidden min-w-0">
          {/* Logo - always first */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a255]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center overflow-hidden rounded-full transition-all duration-300 hover:ring-2 hover:ring-[#c6a255]/30">
                <Image
                  src="/RoundSanganak.jpeg"
                  alt="Sanganak Logo"
                  width={48}
                  height={48}
                  className="w-full h-full rounded-full object-cover p-0.5 transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop: nav links in center (flex, no overlap) */}
          <div className="hidden lg:flex items-center flex-1 justify-center gap-5 xl:gap-8 min-w-0 flex-shrink">
            {navItems.filter(item => !item.isLogo).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                  setIsMenuOpen(false)
                }}
                className={`text-[13px] xl:text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#c6a255] whitespace-nowrap flex-shrink-0 ${
                  activeSection === item.href.replace('#', '') ? 'text-[#c6a255]' : 'text-gray-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile: left spacer so hamburger can be centered */}
          <div className="lg:hidden flex-1 min-w-0" />

          {/* Mobile menu button - exact center (equal flex-1 on both sides) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center text-[#c6a255] p-2 shrink-0 rounded-full hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Mobile: right spacer so hamburger stays centered */}
          <div className="lg:hidden flex-1 min-w-0" />

          {/* CTA - in flow; hover zooms until it touches navbar border */}
          <motion.a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 h-8 sm:h-9 md:h-10 w-[90px] sm:w-[100px] md:w-[110px] xl:w-[120px] flex items-center justify-center rounded-full text-[11px] sm:text-xs md:text-sm font-bold text-black bg-gradient-to-r from-[#c6a255] via-[#e9d5a1] to-[#c6a255] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(198,162,85,0.35)] origin-center"
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'tween', duration: 0.25 }}
          >
            Get Started
          </motion.a>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full left-0 right-0 mb-2 rounded-2xl overflow-hidden border border-[#c6a255]/20 bg-black/95 backdrop-blur-lg lg:hidden"
            >
              <div className="py-2 px-3 space-y-0.5">
                {navItems.filter(item => !item.isLogo).map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                      setIsMenuOpen(false)
                    }}
                    className={`block w-full text-left px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      activeSection === item.href.replace('#', '')
                        ? 'bg-white/[0.06] text-[#c6a255]'
                        : 'text-gray-400 hover:bg-white/[0.04] hover:text-[#c6a255]'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating WhatsApp Button - same height as navbar at each breakpoint */}
      <a
        href="https://wa.me/919631864610"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 right-4 bottom-3 sm:bottom-4 h-12 w-12 sm:h-[52px] sm:w-[52px] md:h-14 md:w-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#c6a255] to-[#e9d5a1] shadow-xl hover:scale-105 transition-transform duration-200"
        style={{ boxShadow: '0 4px 24px rgba(198,162,85,0.3)' }}
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.824-2.18C13.7 27.6 14.836 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.04 0-2.062-.16-3.027-.47l-.216-.07-4.65 1.295 1.25-4.51-.14-.22C7.08 18.13 6.5 16.59 6.5 15c0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5zm5.07-6.13c-.277-.14-1.637-.808-1.89-.9-.253-.093-.437-.14-.62.14-.183.277-.71.9-.87 1.085-.16.183-.32.207-.597.07-.277-.14-1.17-.43-2.23-1.37-.824-.735-1.38-1.64-1.54-1.917-.16-.277-.017-.427.123-.567.127-.127.28-.33.42-.493.14-.163.187-.28.28-.463.093-.183.047-.347-.023-.487-.07-.14-.62-1.497-.85-2.05-.223-.537-.45-.463-.62-.47-.16-.007-.347-.01-.533-.01-.187 0-.487.07-.74.347-.253.277-.99.97-.99 2.36 0 1.39 1.012 2.733 1.153 2.92.14.187 2.01 3.08 5.13 4.2.717.247 1.276.395 1.713.505.72.183 1.376.157 1.89.095.577-.07 1.637-.668 1.87-1.312.233-.643.233-1.193.163-1.312-.07-.12-.253-.187-.53-.327z"/>
        </svg>
      </a>
    </motion.nav>
  )
}
