'use client';

import { CTA_URL } from '@/constants/links';
import Image from 'next/image';
import Link from 'next/link';
import LuxuryHeading from '@/components/ui/LuxuryHeading';

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Heading */}
        <div className="mb-16">
          <LuxuryHeading
            title="Connect With Us"
            subtitle="Explore our resources and get in touch"
            center={true}
          />
        </div>

        {/* Main Footer Content */}
        <div className="relative h-[450px] flex items-center justify-center">
          {/* Center Logo */}
          <div className="absolute left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/RoundSanganak.jpeg"
              alt="Sanganak Premium Logo"
              width={192}
              height={192}
              className="rounded-full"
            />
          </div>

          {/* Far Left Side Text - Our Services */}
          <div className="absolute left-0 top-0 w-1/4 h-full">
            <h4 className="text-[#c6a255] font-semibold absolute left-[55%] top-[20%]">Our Services</h4>
            <div className="absolute left-[50%] top-[32%]">
              <div className="flex items-center gap-6">
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
                <Link href="/services" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  Services
                </Link>
              </div>
            </div>
            <div className="absolute left-[40%] top-[44%]">
              <div className="flex items-center gap-6">
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
                <Link href="/products" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  Products
                </Link>
              </div>
            </div>
            <div className="absolute left-[35%] top-[56%]">
              <div className="flex items-center gap-6">
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
                <Link href="/case-studies" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  Case Studies
                </Link>
              </div>
            </div>
            <div className="absolute left-[40%] top-[68%]">
              <div className="flex items-center gap-6">
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
                <Link href="/portfolio" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  Portfolio
                </Link>
              </div>
            </div>
            <div className="absolute left-[50%] top-[80%]">
              <div className="flex items-center gap-6">
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
                <Link href="/tutorials" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  Tutorials
                </Link>
              </div>
            </div>
          </div>

          {/* Left Center Text - Company */}
          <div className="absolute left-1/4 top-0 w-1/4 h-full">
            <h4 className="text-[#c6a255] font-semibold absolute left-[40%] top-[20%]">Company</h4>
            <div className="absolute left-[35%] top-[32%]">
              <div className="flex items-center gap-6">
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
                <Link href="/about" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  About Us
                </Link>
              </div>
            </div>
            <div className="absolute left-[25%] top-[44%]">
              <div className="flex items-center gap-6">
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
                <Link href="/team" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  Our Team
                </Link>
              </div>
            </div>
            <div className="absolute left-[20%] top-[56%]">
              <div className="flex items-center gap-6">
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
                <Link href="/careers" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  Careers
                </Link>
              </div>
            </div>
            <div className="absolute left-[25%] top-[68%]">
              <div className="flex items-center gap-6">
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
                <Link href="/process" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  Our Process
                </Link>
              </div>
            </div>
            <div className="absolute left-[35%] top-[80%]">
              <div className="flex items-center gap-6">
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
                <Link href="/contact" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side Text - Resources */}
          <div className="absolute right-1/4 top-0 w-1/4 h-full">
            <h4 className="text-[#c6a255] font-semibold absolute right-[75%] top-[20%]">Resources</h4>
            <div className="absolute right-[25%] top-[32%]">
              <div className="flex flex-row-reverse items-center gap-6">
                <Link href="/blog" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  Blog
                </Link>
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
              </div>
            </div>
            <div className="absolute right-[20%] top-[44%]">
              <div className="flex flex-row-reverse items-center gap-6">
                <Link href="/docs" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  Docs
                </Link>
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
              </div>
            </div>
            <div className="absolute right-[15%] top-[56%]">
              <div className="flex flex-row-reverse items-center gap-6">
                <Link href="/support" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  Support
                </Link>
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
              </div>
            </div>
            <div className="absolute right-[20%] top-[68%]">
              <div className="flex flex-row-reverse items-center gap-6">
                <Link href="/tutorials" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  Tutorials
                </Link>
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
              </div>
            </div>
            <div className="absolute right-[25%] top-[80%]">
              <div className="flex flex-row-reverse items-center gap-6">
                <Link href="/security" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  Security
                </Link>
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
              </div>
            </div>
          </div>

          {/* Far Right Side Text - Legal */}
          <div className="absolute right-0 top-0 w-1/4 h-full">
            <h4 className="text-[#c6a255] font-semibold absolute right-[75%] top-[20%]">Legal</h4>
            <div className="absolute right-[50%] top-[32%]">
              <div className="flex flex-row-reverse items-center gap-6">
                <Link href="/terms" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  Terms
                </Link>
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
              </div>
            </div>
            <div className="absolute right-[40%] top-[44%]">
              <div className="flex flex-row-reverse items-center gap-6">
                <Link href="/privacy" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  Privacy
                </Link>
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
              </div>
            </div>
            <div className="absolute right-[35%] top-[56%]">
              <div className="flex flex-row-reverse items-center gap-6">
                <Link href="/cookies" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  Cookies
                </Link>
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
              </div>
            </div>
            <div className="absolute right-[40%] top-[68%]">
              <div className="flex flex-row-reverse items-center gap-6">
                <Link href="/security" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  Security
                </Link>
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
              </div>
            </div>
            <div className="absolute right-[50%] top-[80%]">
              <div className="flex flex-row-reverse items-center gap-6">
                <Link href="/contact" className="text-gray-300 hover:text-[#c6a255] transition-colors px-2">
                  Contact
                </Link>
                <div className="w-1 h-1 rounded-full bg-[#c6a255]"></div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-luxury-gold-300 via-luxury-gold-400 to-luxury-gold-500 text-black font-medium rounded-full hover:shadow-lg hover:shadow-luxury-gold-300/20 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Call
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-300 text-sm mt-8">
          &copy; {new Date().getFullYear()} Sanganak. A venture of mrbuddhu & mrsbuddhu Sanganak LLP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
