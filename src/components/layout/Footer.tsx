'use client';

import Image from 'next/image';
import Link from 'next/link';
import LuxuryHeading from '../ui/LuxuryHeading';

// Footer component - Website ka footer section jo important links aur company information display karta hai
// Isme 5 main sections hain:
// 1. Our Services - Company ki services ke links
// 2. Company - Company related pages ke links
// 3. Center Logo - Brand logo aur CTA button
// 4. Resources - Documentation aur help ke links
// 5. Legal - Privacy policy aur terms ke links
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-8 pb-16 md:pb-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Stay Connected Section */}
        <LuxuryHeading
          title="Experience Digital Excellence"
          subtitle="Premium solutions for digital success"
          className="pb-8 mb-8"
        />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 pt-8">
          {/* Our Services */}
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="text-lg font-semibold text-[#c6a255]">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-[#c6a255] transition-colors">All Services</Link></li>
              <li><Link href="/products" className="hover:text-[#c6a255] transition-colors">Products</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#c6a255] transition-colors">Portfolio</Link></li>
              <li><Link href="/case-studies" className="hover:text-[#c6a255] transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="text-lg font-semibold text-[#c6a255]">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-[#c6a255] transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-[#c6a255] transition-colors">Our Team</Link></li>
              <li><Link href="/careers" className="hover:text-[#c6a255] transition-colors">Careers</Link></li>
              <li><Link href="/process" className="hover:text-[#c6a255] transition-colors">Our Process</Link></li>
            </ul>
          </div>

          {/* Center Logo and CTA */}
          <div className="flex flex-col items-center justify-center order-first lg:order-none mb-8 lg:mb-0">
            <Image
              src="/RoundSanganak.jpeg"
              alt="SanganakHQ Logo"
              width={180}
              height={180}
              className="rounded-full hover:scale-105 transition-transform duration-300 w-32 md:w-40 lg:w-[180px]"
            />
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="mailto:contact@sanganak.org" 
                className="text-[#c6a255] hover:text-[#e9d5a1] transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61574176439793" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#c6a255] hover:text-[#e9d5a1] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/sanganakHQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#c6a255] hover:text-[#e9d5a1] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/sanganakHQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#c6a255] hover:text-[#e9d5a1] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/sanganakHQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#c6a255] hover:text-[#e9d5a1] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/919631864610" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#c6a255] hover:text-[#e9d5a1] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4 text-center lg:text-left lg:pl-24">
            <h3 className="text-lg font-semibold text-[#c6a255]">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-[#c6a255] transition-colors">Blog</Link></li>
              <li><Link href="/docs" className="hover:text-[#c6a255] transition-colors">Docs</Link></li>
              <li><Link href="/tutorials" className="hover:text-[#c6a255] transition-colors">Tutorials</Link></li>
              <li><Link href="/support" className="hover:text-[#c6a255] transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4 text-center lg:text-left lg:pl-24">
            <h3 className="text-lg font-semibold text-[#c6a255]">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-[#c6a255] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#c6a255] transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-[#c6a255] transition-colors">Cookie Policy</Link></li>
              <li><Link href="/security" className="hover:text-[#c6a255] transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>



        {/* Copyright */}
        <div className="text-center mt-16 pb-24 md:pb-24">
          <p className="text-[#c6a255] text-sm">
            {currentYear} SanganakHQ. A venture of mrbuddhu & msbuddhu Sanganak LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
