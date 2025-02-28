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
  if (pathname !== '/' && !pathname.startsWith('/case-studies')) {
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
      const navbarHeight = 100; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-2 sm:bottom-3 md:bottom-4 left-0 right-0 flex justify-center z-50"
      style={{ transform: 'translateZ(0)' }}
    >
      <div className="relative w-[95%] sm:w-[90%] md:w-fit">
        <div className="absolute inset-0 nav-blur rounded-full -z-10" />
        <div className="px-3 sm:px-4 md:px-8 h-[50px] sm:h-[60px] md:h-[80px] flex items-center justify-between space-x-3 sm:space-x-4 md:space-x-8 rounded-full border border-[#c6a255]/20 bg-black/40">
          {/* Logo */}
          <div className="flex items-center">
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

          {/* CTA Button */}
          <LuxuryButton
            href={CTA_URL}
            isExternal
            variant="primary"
            size="sm"
          >
            Let's Talk
          </LuxuryButton>
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
    </motion.nav>
  )
}
