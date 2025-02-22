import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SANGANAK | The Premium IT Boutique',
  description: 'Your trusted partner for premium IT solutions and services.',
  manifest: '/manifest.json',
  themeColor: '#c6a255',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'SANGANAK | The Premium IT Boutique',
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  openGraph: {
    title: 'Sanganak - Premium IT Boutique',
    description: 'Beyond AI-generated conformity, we handcraft distinctive digital experiences that transform your vision into reality.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sanganak - Premium IT Boutique'
      }
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'Sanganak'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanganak - Premium IT Boutique',
    description: 'Beyond AI-generated conformity, we handcraft distinctive digital experiences that transform your vision into reality.',
    images: ['/og-image.jpg']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/Logo.ico" />
        <link rel="apple-touch-icon" href="/Logo.ico" />
        <style>{`
          #nprogress {
            display: none !important;
          }
        `}</style>
      </head>
      <body className={`${inter.className} min-h-screen bg-black antialiased text-white`}>
        {children}
      </body>
    </html>
  )
}
