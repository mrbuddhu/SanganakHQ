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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 border-t border-[#c6a255]/50 pt-8">
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
              alt="Sanganak Premium Logo"
              width={180}
              height={180}
              className="rounded-full hover:scale-105 transition-transform duration-300 w-32 md:w-40 lg:w-[180px]"
            />
            <Link 
              href="/contact"
              className="group relative inline-flex items-center justify-center px-6 py-2 mt-6 overflow-hidden font-medium transition duration-300 ease-out border border-[#c6a255] rounded-full shadow-md text-sm"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#c6a255] group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-[#c6a255] transition-all duration-300 transform group-hover:translate-x-full ease">Contact Us</span>
              <span className="relative invisible">Contact Us</span>
            </Link>
          </div>

          {/* Resources */}
          <div className="space-y-4 text-center lg:text-left lg:pl-24">
            <h3 className="text-lg font-semibold text-[#c6a255]">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-[#c6a255] transition-colors">Blog</Link></li>
              <li><Link href="/docs" className="hover:text-[#c6a255] transition-colors">Documentation</Link></li>
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
        <div className="text-center mt-16 pb-16 md:pb-16">
          <p className="text-[#c6a255] text-sm">
            2025 Sanganak. A venture of mrbuddhu & mrbuddhu Sanganak LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
