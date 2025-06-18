import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CTA_URL } from '@/constants/links';
import LuxuryButton from '@/components/ui/LuxuryButton';

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
      const navbarHeight = 80; // Adjusted navbar height
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-2 sm:bottom-3 md:bottom-4 left-0 right-0 flex justify-center z-50"
      style={{ transform: 'translateZ(0)' }}
    >
      <div className="relative w-[75%] sm:w-[70%] md:w-fit ml-0 mr-16 sm:mr-20 md:mr-0 overflow-visible">
        <div className="absolute inset-0 nav-blur rounded-full -z-10" />
        <div className="pl-3 sm:pl-4 md:pl-8 pr-0 h-[50px] sm:h-[60px] md:h-[80px] flex items-center justify-between space-x-3 sm:space-x-4 md:space-x-8 rounded-full border border-[#c6a255]/20 bg-black/40 overflow-visible">
          {/* Logo */}
          <div className="flex items-center ml-[-12px] sm:ml-[-16px] md:ml-[-32px]">
            <Link href="/" className="flex items-center">
              <div className="relative w-[50px] sm:w-[60px] md:w-[80px] h-[50px] sm:h-[60px] md:h-[80px] flex items-center justify-center overflow-hidden rounded-full group">
                <div className="absolute inset-0 bg-[#c6a255]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src="/RoundSanganak.jpeg"
                  alt="Sanganak Logo"
                  width={100}
                  height={100}
                  className="w-full h-full rounded-full p-1.5 sm:p-2 transition-all duration-300 group-hover:scale-110"
                  priority
                />
              </div>
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-6 md:space-x-8">
            {navItems.filter(item => !item.isLogo).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                  setIsMenuOpen(false)
                }}
                className={`text-sm md:text-base font-medium transition-all duration-300 hover:text-[#c6a255] ${
                  activeSection === item.href.replace('#', '') ? 'text-[#c6a255]' : 'text-gray-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center text-[#c6a255] p-2"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Enhanced CTA Button */}
          <motion.a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center h-[50px] sm:h-[60px] md:h-[80px] w-[160px] sm:w-[200px] md:w-[260px] text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#c6a255] via-[#e9d5a1] to-[#c6a255] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#c6a255]/30 absolute right-0 top-0 bottom-0 z-20 p-0 m-0"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(198, 162, 85, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f4e4a6] via-[#c6a255] to-[#f4e4a6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-full bg-[#c6a255]/30 animate-ping opacity-20" />
            
            {/* Button content */}
            <span className="relative z-10 flex items-center gap-1 sm:gap-2">
              <span className="hidden sm:inline">📞</span>
              <span className="font-extrabold">Book a Free Call <span className="hidden sm:inline font-black text-black">@Sanganak</span></span>
            </span>
            
            {/* Notification dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black animate-pulse" />
          </motion.a>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-full left-0 right-0 mb-2 sm:mb-3 md:mb-4 bg-black/95 backdrop-blur-lg rounded-2xl overflow-hidden border border-[#c6a255]/20 lg:hidden"
            >
              <div className="py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4 space-y-1 sm:space-y-2">
                {navItems.filter(item => !item.isLogo).map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                      setIsMenuOpen(false)
                    }}
                    className={`block w-full text-left px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 ${
                      activeSection === item.href.replace('#', '')
                        ? 'bg-[#c6a255]/10 text-[#c6a255]' 
                        : 'text-gray-300 hover:bg-[#c6a255]/5 hover:text-[#c6a255]'
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

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919631864610"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 right-4 bottom-2 sm:bottom-3 md:bottom-4 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#c6a255] to-[#e9d5a1] shadow-xl hover:scale-105 transition-transform duration-200"
        style={{ boxShadow: '0 4px 24px rgba(198,162,85,0.3)' }}
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8 text-black">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.824-2.18C13.7 27.6 14.836 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.04 0-2.062-.16-3.027-.47l-.216-.07-4.65 1.295 1.25-4.51-.14-.22C7.08 18.13 6.5 16.59 6.5 15c0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5zm5.07-6.13c-.277-.14-1.637-.808-1.89-.9-.253-.093-.437-.14-.62.14-.183.277-.71.9-.87 1.085-.16.183-.32.207-.597.07-.277-.14-1.17-.43-2.23-1.37-.824-.735-1.38-1.64-1.54-1.917-.16-.277-.017-.427.123-.567.127-.127.28-.33.42-.493.14-.163.187-.28.28-.463.093-.183.047-.347-.023-.487-.07-.14-.62-1.497-.85-2.05-.223-.537-.45-.463-.62-.47-.16-.007-.347-.01-.533-.01-.187 0-.487.07-.74.347-.253.277-.99.97-.99 2.36 0 1.39 1.012 2.733 1.153 2.92.14.187 2.01 3.08 5.13 4.2.717.247 1.276.395 1.713.505.72.183 1.376.157 1.89.095.577-.07 1.637-.668 1.87-1.312.233-.643.233-1.193.163-1.312-.07-.12-.253-.187-.53-.327z"/>
        </svg>
      </a>
    </motion.nav>
  )
}
