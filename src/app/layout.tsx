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
  title: 'SanganakHQ | Branding • Design • Web Development • Mobile Apps • AI • Blockchain • Marketing',
  description: 'SanganakHQ delivers elite solutions in weeks, not months. Ship faster, lift conversions, and lead your market with our premium branding, design, web development, mobile apps, AI, blockchain, and marketing services.',
  manifest: '/manifest.json',
  metadataBase: new URL('https://sanganak.org'),
  keywords: 'Sanganak, Sanganak org, Sanganak com, SanganakHQ, Sanganak Technologies, Sanganak Tech, Sanganak Solutions, Sanganak Innovation, Sanganak Services, Sanganak Company, Sanganak Technologies India, Sanganak Software, Sanganak Development, Sanganak Consulting, Sanganak Digital, Sanganak Agency, Sanganak Branding, Sanganak Design, Sanganak Apps, Sanganak AI, Sanganak Blockchain, Sanganak Marketing, Sanganak Web Development, Sanganak Mobile Apps, Sanganak UI UX, Sanganak Software Development, Sanganak Tech Solutions, Sanganak Enterprise, Sanganak Cloud, Sanganak SaaS, Sanganak Fintech, Sanganak E-commerce, Sanganak Digital Marketing, Sanganak Tech Consulting, SanganakHQ Technologies, SanganakHQ Tech, SanganakHQ Solutions, SanganakHQ Services, SanganakHQ Digital, SanganakHQ Branding, SanganakHQ Design, SanganakHQ Development, SanganakHQ AI, SanganakHQ Blockchain, SanganakHQ Marketing, SanganakHQ Web Development, SanganakHQ Mobile Apps, SanganakHQ Software, SanganakHQ Consulting, SanganakHQ Enterprise, SanganakHQ Cloud, SanganakHQ SaaS, SanganakHQ Fintech, SanganakHQ E-commerce, SanganakHQ Digital Marketing, SanganakHQ Tech Consulting, SanganakHQ Global, SanganakHQ International, SanganakHQ Premium, SanganakHQ Elite, SanganakHQ Luxury, SanganakHQ Innovation, SanganakHQ Technology, SanganakHQ Solutions Provider, SanganakHQ Tech Company, SanganakHQ Digital Agency, SanganakHQ Software Company, SanganakHQ Development Company, SanganakHQ Consulting Firm, SanganakHQ Technology Services, SanganakHQ Digital Solutions, SanganakHQ Tech Services, SanganakHQ Innovation Hub, SanganakHQ Technology Hub, SanganakHQ Digital Hub, SanganakHQ Tech Hub, SanganakHQ Solutions Hub, SanganakHQ Services Hub, SanganakHQ Company Hub, SanganakHQ Business Hub, SanganakHQ Enterprise Hub, SanganakHQ Startup Hub, SanganakHQ Innovation Lab, SanganakHQ Technology Lab, SanganakHQ Digital Lab, SanganakHQ Tech Lab, SanganakHQ Solutions Lab, SanganakHQ Services Lab, SanganakHQ Company Lab, SanganakHQ Business Lab, SanganakHQ Enterprise Lab, SanganakHQ Startup Lab, Framer, Webflow, FlutterFlow, WordPress, React, React Native, Next.js, Vue.js, Angular, Node.js, Express.js, MongoDB, PostgreSQL, MySQL, Firebase, AWS, Google Cloud, Azure, Docker, Kubernetes, Git, GitHub, GitLab, Figma, Adobe XD, Sketch, InVision, Zeplin, Tailwind CSS, Bootstrap, Material UI, Ant Design, Chakra UI, Styled Components, Sass, Less, TypeScript, JavaScript, Python, Java, PHP, Ruby, Go, Swift, Kotlin, Flutter, Dart, Xamarin, Ionic, Cordova, PhoneGap, Unity, Unreal Engine, Blender, Maya, 3ds Max, Cinema 4D, After Effects, Premiere Pro, Photoshop, Illustrator, InDesign, Canva, Notion, Slack, Discord, Zoom, Microsoft Teams, Jira, Trello, Asana, Monday.com, ClickUp, Airtable, Zapier, Make, IFTTT, Stripe, PayPal, Square, Razorpay, RazorpayX, Razorpay Capital, Razorpay Smart Collect, Razorpay Route, Razorpay Magic, Razorpay Tax, Razorpay Invoices, Razorpay Subscriptions, Razorpay Smart Collect, Razorpay Route, Razorpay Magic, Razorpay Tax, Razorpay Invoices, Razorpay Subscriptions, Global Innovation Consultancy, Launch Faster, Grow Smarter, Innovate at Scale, Luxury Branding, Elite Design, Bespoke Applications, Blockchain Innovation, AI Solutions, Digital Transformation, Enterprise Technology, International Tech Services, Premium Technology Solutions, Web Development, Mobile Apps, UI/UX Design, Software Development, Digital Agency, Tech Solutions, Enterprise Software, Custom Software Development, Cloud Solutions, SaaS Development, Fintech Solutions, E-commerce Development, Digital Marketing, Tech Consulting, web development, mobile app development, branding services, design services, digital marketing, software development, tech consulting, UI UX design, custom software, web design, app development, e-commerce development, fintech solutions, cloud solutions, SaaS development, blockchain development, AI solutions, digital transformation, enterprise software, startup development, tech solutions, innovation consulting, technology services, digital solutions, tech company, software company, development company, consulting firm, technology hub, innovation lab, tech lab, digital agency, software agency, development agency, tech services, digital services, innovation services, technology consulting, digital consulting, tech consulting, software consulting, development consulting, web consulting, mobile consulting, branding consulting, design consulting, marketing consulting, business consulting, startup consulting, enterprise consulting, tech support, digital support, software support, development support, web support, mobile support, branding support, design support, marketing support, business support, startup support, enterprise support, tech help, digital help, software help, development help, web help, mobile help, branding help, design help, marketing help, business help, startup help, enterprise help, tech assistance, digital assistance, software assistance, development assistance, web assistance, mobile assistance, branding assistance, design assistance, marketing assistance, business assistance, startup assistance, enterprise assistance, tech solutions provider, digital solutions provider, software solutions provider, development solutions provider, web solutions provider, mobile solutions provider, branding solutions provider, design solutions provider, marketing solutions provider, business solutions provider, startup solutions provider, enterprise solutions provider, tech services provider, digital services provider, software services provider, development services provider, web services provider, mobile services provider, branding services provider, design services provider, marketing services provider, business services provider, startup services provider, enterprise services provider, tech company services, digital company services, software company services, development company services, web company services, mobile company services, branding company services, design company services, marketing company services, business company services, startup company services, enterprise company services, tech agency services, digital agency services, software agency services, development agency services, web agency services, mobile agency services, branding agency services, design agency services, marketing agency services, business agency services, startup agency services, enterprise agency services, tech hub services, digital hub services, software hub services, development hub services, web hub services, mobile hub services, branding hub services, design hub services, marketing hub services, business hub services, startup hub services, enterprise hub services, tech lab services, digital lab services, software lab services, development lab services, web lab services, mobile lab services, branding lab services, design lab services, marketing lab services, business lab services, startup lab services, enterprise lab services, AI development, artificial intelligence, machine learning, deep learning, neural networks, computer vision, natural language processing, NLP, AI consulting, AI solutions, AI services, AI development, AI implementation, AI integration, AI automation, AI chatbots, AI assistants, AI tools, AI platforms, AI software, AI applications, AI systems, AI technology, AI innovation, AI transformation, AI strategy, AI consulting, AI advisory, AI support, AI help, AI assistance, AI solutions provider, AI services provider, AI development company, AI consulting firm, AI technology company, AI innovation lab, AI research, AI development services, AI implementation services, AI integration services, AI automation services, AI chatbot development, AI assistant development, AI tool development, AI platform development, AI software development, AI application development, AI system development, AI technology services, AI innovation services, AI transformation services, AI strategy services, AI consulting services, AI advisory services, AI support services, AI help services, AI assistance services, blockchain development, blockchain solutions, blockchain services, blockchain consulting, blockchain technology, blockchain innovation, blockchain applications, blockchain platforms, blockchain software, blockchain systems, blockchain integration, blockchain implementation, blockchain automation, blockchain security, blockchain audit, blockchain testing, blockchain deployment, blockchain maintenance, blockchain support, blockchain help, blockchain assistance, blockchain solutions provider, blockchain services provider, blockchain development company, blockchain consulting firm, blockchain technology company, blockchain innovation lab, blockchain research, blockchain development services, blockchain implementation services, blockchain integration services, blockchain automation services, blockchain security services, blockchain audit services, blockchain testing services, blockchain deployment services, blockchain maintenance services, blockchain support services, blockchain help services, blockchain assistance services, smart contracts, smart contract development, smart contract solutions, smart contract services, smart contract consulting, smart contract technology, smart contract innovation, smart contract applications, smart contract platforms, smart contract software, smart contract systems, smart contract integration, smart contract implementation, smart contract automation, smart contract security, smart contract audit, smart contract testing, smart contract deployment, smart contract maintenance, smart contract support, smart contract help, smart contract assistance, smart contract solutions provider, smart contract services provider, smart contract development company, smart contract consulting firm, smart contract technology company, smart contract innovation lab, smart contract research, smart contract development services, smart contract implementation services, smart contract integration services, smart contract automation services, smart contract security services, smart contract audit services, smart contract testing services, smart contract deployment services, smart contract maintenance services, smart contract support services, smart contract help services, smart contract assistance services, cryptocurrency, crypto, crypto development, crypto solutions, crypto services, crypto consulting, crypto technology, crypto innovation, crypto applications, crypto platforms, crypto software, crypto systems, crypto integration, crypto implementation, crypto automation, crypto security, crypto audit, crypto testing, crypto deployment, crypto maintenance, crypto support, crypto help, crypto assistance, crypto solutions provider, crypto services provider, crypto development company, crypto consulting firm, crypto technology company, crypto innovation lab, crypto research, crypto development services, crypto implementation services, crypto integration services, crypto automation services, crypto security services, crypto audit services, crypto testing services, crypto deployment services, crypto maintenance services, crypto support services, crypto help services, crypto assistance services, digital marketing, digital marketing services, digital marketing solutions, digital marketing consulting, digital marketing strategy, digital marketing campaigns, digital marketing automation, digital marketing analytics, digital marketing optimization, digital marketing ROI, digital marketing performance, digital marketing growth, digital marketing scaling, digital marketing transformation, digital marketing innovation, digital marketing technology, digital marketing tools, digital marketing platforms, digital marketing software, digital marketing systems, digital marketing integration, digital marketing implementation, digital marketing support, digital marketing help, digital marketing assistance, digital marketing solutions provider, digital marketing services provider, digital marketing development company, digital marketing consulting firm, digital marketing technology company, digital marketing innovation lab, digital marketing research, digital marketing development services, digital marketing implementation services, digital marketing integration services, digital marketing automation services, digital marketing analytics services, digital marketing optimization services, digital marketing ROI services, digital marketing performance services, digital marketing growth services, digital marketing scaling services, digital marketing transformation services, digital marketing innovation services, digital marketing technology services, digital marketing tool services, digital marketing platform services, digital marketing software services, digital marketing system services, digital marketing support services, digital marketing help services, digital marketing assistance services, social media marketing, content marketing, email marketing, search engine marketing, SEM, search engine optimization, SEO, pay per click, PPC, display advertising, video marketing, influencer marketing, affiliate marketing, marketing automation, marketing analytics, marketing optimization, marketing strategy, marketing consulting, marketing services, marketing solutions, marketing technology, marketing innovation, marketing transformation, marketing growth, marketing scaling, marketing performance, marketing ROI, marketing support, marketing help, marketing assistance, marketing solutions provider, marketing services provider, marketing development company, marketing consulting firm, marketing technology company, marketing innovation lab, marketing research, marketing development services, marketing implementation services, marketing integration services, marketing automation services, marketing analytics services, marketing optimization services, marketing strategy services, marketing consulting services, marketing technology services, marketing innovation services, marketing transformation services, marketing growth services, marketing scaling services, marketing performance services, marketing ROI services, marketing support services, marketing help services, marketing assistance services',
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
    title: 'SanganakHQ | Branding • Design • Web Development • Mobile Apps • AI • Blockchain • Marketing',
    description: 'SanganakHQ delivers elite solutions in weeks, not months. Ship faster, lift conversions, and lead your market with our premium branding, design, web development, mobile apps, AI, blockchain, and marketing services.',
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
    title: 'SanganakHQ | Branding • Design • Web Development • Mobile Apps • AI • Blockchain • Marketing',
    description: 'SanganakHQ delivers elite solutions in weeks, not months. Ship faster, lift conversions, and lead your market with our premium branding, design, web development, mobile apps, AI, blockchain, and marketing services.',
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
  alternateName: ['Sanganak Technologies', 'SanganakHQ Technologies', 'Sanganak Tech', 'SanganakHQ Tech', '#1 Premium IT Boutique', 'Launch Faster. Grow Smarter. Innovate at Scale.'],
  url: 'https://sanganak.org',
  logo: 'https://sanganak.org/Logo.ico',
  description: 'SanganakHQ is the #1 Premium IT Boutique delivering luxury branding, elite design, bespoke applications, blockchain innovation, and AI-powered solutions. We help startups launch faster, brands grow smarter, and enterprises innovate at scale across 6 continents.',
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
  slogan: 'Launch Faster. Grow Smarter. Innovate at Scale.',
  tagline: '#1 Premium IT Boutique',
  industry: 'Technology Services',
  numberOfEmployees: '10-50',
  description: 'SanganakHQ is the #1 Premium IT Boutique delivering luxury branding, elite design, bespoke applications, blockchain innovation, and AI-powered solutions. We help startups launch faster, brands grow smarter, and enterprises innovate at scale across 6 continents.',
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
        text: 'SanganakHQ is the #1 Premium IT Boutique offering luxury branding, elite design, bespoke applications, blockchain innovation, AI-powered solutions, and marketing HQ retainers for measurable growth.'
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
        text: 'SanganakHQ is the #1 Premium IT Boutique that helps startups launch faster, brands grow smarter, and enterprises innovate at scale with measurable results across 6 continents.'
      }
    }
  ]
}

// Website schema for better search results
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SanganakHQ',
  alternateName: ['Sanganak Technologies', 'SanganakHQ Technologies', '#1 Premium IT Boutique'],
  url: 'https://sanganak.org',
  description: 'SanganakHQ is the #1 Premium IT Boutique delivering luxury branding, elite design, bespoke applications, blockchain innovation, and AI-powered solutions.',
  publisher: {
    '@type': 'Organization',
    name: 'SanganakHQ',
    url: 'https://sanganak.org',
    logo: 'https://sanganak.org/Logo.ico'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://sanganak.org/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  },
  mainEntity: {
    '@type': 'Organization',
    name: 'SanganakHQ',
    url: 'https://sanganak.org'
  }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preload" href="/Logo.ico" as="image" />
        <link rel="preload" href="/og-image.png" as="image" />
        
        {/* Additional SEO optimizations */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        
        {/* Local SEO */}
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Bihar, India" />
        <meta name="geo.position" content="25.0961;85.3131" />
        <meta name="ICBM" content="25.0961, 85.3131" />
        
        {/* Additional structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'SanganakHQ',
              description: 'Premium IT Boutique delivering luxury branding, elite design, and AI solutions',
              url: 'https://sanganak.org',
              telephone: '+919631864610',
              email: 'contact@sanganak.org',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
                addressRegion: 'Bihar',
                addressLocality: 'Remote'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '25.0961',
                longitude: '85.3131'
              },
              openingHours: 'Mo-Fr 09:00-18:00',
              priceRange: '$$$$',
              serviceArea: {
                '@type': 'Country',
                name: 'Worldwide'
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-[#000000] antialiased text-white`}>
        {children}
        <ExitIntentPopup />
      </body>
    </html>
  )
}
