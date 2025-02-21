import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CTA_URL } from '@/constants/links';

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
    { href: '#hero', isLogo: true, logoImage: '/logo.ico' },
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
      className="fixed bottom-8 left-0 right-0 z-50 flex justify-center"
    >
      <div className="relative w-fit">
        <div className="absolute inset-0 bg-black backdrop-blur-sm rounded-full -z-10" />
        <div className="px-8 h-[100px] flex items-center justify-between space-x-8 rounded-full border border-[#c6a255]/20">
          <div className="flex items-center space-x-8 -ml-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                  setIsMenuOpen(false)
                }}
                className={`relative ${item.isLogo ? 'flex items-center' : 'text-base font-medium pl-4'} transition-all duration-300 hover:text-[#c6a255] group ${
                  activeSection === item.href.replace('#', '') ? 'text-[#c6a255]' : 'text-gray-300'
                }`}
              >
                {item.isLogo ? (
                  <div className="relative w-[100px] h-[100px] flex items-center justify-center overflow-visible group">
                    <div className="absolute inset-0 bg-[#c6a255]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src={item.logoImage}
                      alt="Sanganak Logo"
                      width={100}
                      height={100}
                      className="w-[100px] h-[100px] rounded-full p-2 transition-all duration-300 group-hover:scale-110"
                      unoptimized
                      priority
                    />
                  </div>
                ) : (
                  item.label
                )}
              </a>
            ))}
          </div>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-base font-medium text-black bg-luxury-gold-300 rounded-full hover:bg-luxury-gold-100 transition-colors duration-300"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#c6a255]"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-6 h-6"
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

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-full left-0 right-0 mb-4 bg-black/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-[#c6a255]/20 md:hidden"
            >
              <div className="py-4 px-4 space-y-2">
                {navItems.filter(item => !item.isLogo).map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                      setIsMenuOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                      activeSection === item.href.replace('#', '')
                        ? 'bg-[#c6a255]/10 text-[#c6a255]' 
                        : 'text-gray-300 hover:bg-[#c6a255]/5 hover:text-[#c6a255]'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 text-base font-medium rounded-lg bg-[#c6a255] text-black hover:bg-[#c6a255]/90 transition-all duration-200"
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
