'use client';

import { Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { href: 'https://x.com/sanganakHQ', label: 'X (Twitter)', icon: XIcon },
  { href: 'https://linkedin.com/company/sanganakHQ', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://instagram.com/sanganakHQ', label: 'Instagram', icon: Instagram },
  { href: 'https://youtube.com/@sanganakHQ', label: 'YouTube', icon: Youtube },
  { href: 'https://tiktok.com/@sanganakHQ', label: 'TikTok', icon: TikTokIcon },
  { href: 'https://www.facebook.com/SanganakHQ/', label: 'Facebook', icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Full-width thin divider */}
      <div
        className="w-full"
        style={{
          marginTop: '4rem',
          marginBottom: '2.5rem',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.12) 80%, transparent 100%)',
        }}
      />

      <div className="container mx-auto px-4 text-center">
        {/* Brand name — as big as possible, always one line */}
        <p
          className="font-extrabold uppercase tracking-[0.08em] bg-gradient-to-r from-[#c6a255] via-[#e9d5a1] to-[#c6a255] bg-clip-text text-transparent whitespace-nowrap overflow-hidden text-center"
          style={{
            fontFamily: 'var(--font-inter), "Segoe UI", Helvetica Neue, Arial, sans-serif',
            fontSize: 'clamp(1.75rem, 10vw, 12rem)',
          }}
        >
          SANGANAK<span className="inline-block w-[0.12em]" aria-hidden="true" />HQ
        </p>

        {/* Tagline — gold to match brand */}
        <p
          className="mt-1.5 font-bold text-[#c6a255]"
          style={{
            fontSize: 'clamp(16px, 1.5vw, 18px)',
            fontFamily: 'var(--font-inter), sans-serif',
          }}
        >
          Digital Infrastructure & Growth Systems
        </p>

        {/* Social icons — same gold as tagline */}
        <div className="flex justify-center items-center gap-5 mt-6">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c6a255] hover:text-[#e9d5a1] transition-colors duration-200"
              aria-label={label}
            >
              <Icon className="w-5 h-5" strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* Location & contact — below social icons */}
        <p
          className="mt-5 text-sm font-medium"
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontFamily: 'var(--font-inter), sans-serif',
          }}
        >
          India <span className="mx-2 text-white/30" aria-hidden>|</span> Dubai
        </p>
        <p
          className="mt-1.5 text-sm font-medium"
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontFamily: 'var(--font-inter), sans-serif',
          }}
        >
          <a href="mailto:contact@sanganakhq.com" className="text-[#c6a255]/90 hover:text-[#e9d5a1] transition-colors">
            contact@sanganakhq.com
          </a>
          <span className="mx-2 text-white/30" aria-hidden>|</span>
          <a href="tel:+919631864610" className="text-[#c6a255]/90 hover:text-[#e9d5a1] transition-colors">
            +91 9631864610
          </a>
        </p>

        {/* Copyright */}
        <p
          className="mt-8 pb-12 text-center"
          style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
            fontFamily: 'var(--font-inter), sans-serif',
          }}
        >
          © 2026 SanganakHQ. A venture of MrBuddhu & MsBuddhu Sanganak LLP. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
