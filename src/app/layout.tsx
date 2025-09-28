import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#c6a255',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export const metadata: Metadata = {
  title: 'SanganakHQ – Branding, Web, Apps, AI, Blockchain & Marketing Innovation',
  description: 'Launch faster, grow smarter, and innovate at scale with SanganakHQ. Elite solutions delivered in weeks, not months — across branding, design, websites, applications, AI, blockchain, and marketing.',
  manifest: '/manifest.json',
  metadataBase: new URL('https://sanganak.org'),
  keywords: 'SanganakHQ, Global Innovation Consultancy, Launch Faster, Grow Smarter, Innovate at Scale, Luxury Branding, Elite Design, Bespoke Applications, Blockchain Innovation, AI Solutions, Digital Transformation, Enterprise Technology, International Tech Services, Premium Technology Solutions, Web Development, Mobile Apps, UI/UX Design, Software Development, Digital Agency, Tech Solutions, Enterprise Software, Custom Software Development, Cloud Solutions, SaaS Development, Fintech Solutions, E-commerce Development, Digital Marketing, Tech Consulting',
  authors: [{ name: 'mrbuddhu' }, { name: 'msbuddhu' }],
  creator: 'SanganakHQ',
  publisher: 'SanganakHQ',
  category: 'Technology',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'SanganakHQ | Launch Faster. Grow Smarter.',
  },
  icons: {
    icon: '/Logo.ico',
    shortcut: '/Logo.ico',
    apple: '/Logo.ico',
    other: {
      rel: 'apple-touch-icon',
      url: '/Logo.ico',
    },
  },
  openGraph: {
    title: 'SanganakHQ — Launch Faster. Grow Smarter. Innovate at Scale.',
    description: 'SanganakHQ helps startups launch faster, brands grow smarter, and enterprises innovate at scale. Premium global innovation consultancy delivering luxury branding, elite design, bespoke applications, blockchain innovation, and AI-powered solutions across 6 continents.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SanganakHQ — Launch Faster. Grow Smarter. Innovate at Scale.',
        type: 'image/png'
      }
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'SanganakHQ',
    url: 'https://sanganak.org'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SanganakHQ — Launch Faster. Grow Smarter. Innovate at Scale.',
    description: 'Premium global innovation consultancy delivering luxury branding, elite design, bespoke applications, blockchain innovation, and AI-powered solutions across 6 continents.',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'SanganakHQ — Launch Faster. Grow Smarter. Innovate at Scale.',
      type: 'image/png'
    }],
    site: '@sanganakHQ',
    creator: '@sanganakHQ'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://sanganak.org',
    languages: {
      'en-US': 'https://sanganak.org/en',
      'es': 'https://sanganak.org/es',
      'fr': 'https://sanganak.org/fr',
      'de': 'https://sanganak.org/de',
      'ja': 'https://sanganak.org/ja',
      'zh': 'https://sanganak.org/zh',
    },
  },
  other: {
    'application-name': 'SanganakHQ',
    'msapplication-TileColor': '#c6a255',
    'msapplication-TileImage': '/Logo.ico',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#c6a255',
    'format-detection': 'telephone=no',
    'referrer': 'origin-when-cross-origin',
    'viewport': 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'SanganakHQ'
  }
}

// Enhanced JSON-LD Schema for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SanganakHQ',
  alternateName: 'Launch Faster. Grow Smarter. Innovate at Scale.',
  url: 'https://sanganak.org',
  logo: 'https://sanganak.org/Logo.ico',
  description: 'SanganakHQ helps startups launch faster, brands grow smarter, and enterprises innovate at scale. Premium global innovation consultancy delivering luxury branding, elite design, bespoke applications, blockchain innovation, and AI-powered solutions across 6 continents.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Global'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@sanganak.org',
    telephone: '+919631864610',
    contactOption: 'TollFree',
    areaServed: 'Worldwide',
    availableLanguage: ['English', 'Spanish', 'French', 'German', 'Japanese', 'Chinese']
  },
  sameAs: [
    'https://x.com/sanganakHQ',
    'https://linkedin.com/company/sanganakHQ',
    'https://github.com/sanganakHQ',
    'https://instagram.com/sanganakHQ',
    'https://facebook.com/sanganakorg',
    'https://youtube.com/@sanganakHQ'
  ],
  // Additional organization details
  foundingDate: '2024',
  founder: {
    '@type': 'Person',
    name: 'mrbuddhu'
  },
  // Service offerings
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Luxury Branding',
        description: 'Premium branding solutions for elite businesses'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Elite Design',
        description: 'High-end design services for luxury brands'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Bespoke Applications',
        description: 'Custom software solutions for enterprise clients'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Blockchain Innovation',
        description: 'Advanced blockchain solutions for modern businesses'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'AI Solutions',
        description: 'Cutting-edge AI implementations for business growth'
      }
    }
  ],
  // Business hours
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
    timeZone: 'Asia/Kolkata'
  },
  // Payment methods
  paymentAccepted: ['Credit Card', 'Bank Transfer', 'PayPal'],
  // Price range
  priceRange: '$$$$',
  // Aggregate rating
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '100',
    bestRating: '5',
    worstRating: '1'
  }
}

// Additional schema for FAQ
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does SanganakHQ offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SanganakHQ offers premium innovation services including luxury branding, elite design, bespoke applications, blockchain innovation, AI-powered solutions, and marketing HQ retainers for measurable growth.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I contact SanganakHQ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can contact SanganakHQ via email at contact@sanganak.org, phone at +919631864610, or through our social media channels.'
      }
    },
    {
      '@type': 'Question',
      name: 'What makes SanganakHQ different?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SanganakHQ is a premium global innovation consultancy that helps startups launch faster, brands grow smarter, and enterprises innovate at scale with measurable results across 6 continents.'
      }
    }
  ]
}

import React from 'react';
import ExitIntentPopup from '@/components/ui/ExitIntentPopup';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preload" href="/Logo.ico" as="image" />
        <link rel="preload" href="/og-image.png" as="image" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-[#000000] antialiased text-white`}>
        {children}
        <ExitIntentPopup />
      </body>
    </html>
  )
}
