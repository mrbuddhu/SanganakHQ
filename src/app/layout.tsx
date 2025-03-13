import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#c6a255',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SANGANAK | #1 Premium IT Boutique',
  description: 'Your trusted partner for premium IT solutions and services.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'SANGANAK | #1 Premium IT Boutique',
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
    title: 'Sanganak - #1 Premium IT Boutique',
    description: 'We craft world-class digital experiences through Luxury Branding, Elite Design, Bespoke Applications, Blockchain Innovation, AI-Powered Intelligence, and Elite Package solutions. Transform your vision into digital excellence.',
    images: [
      {
        url: 'https://sanganak.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sanganak - #1 Premium IT Boutique - Luxury Digital Solutions'
      }
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'Sanganak'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanganak - #1 Premium IT Boutique',
    description: 'We craft world-class digital experiences through Luxury Branding, Elite Design, Bespoke Applications, Blockchain Innovation, AI-Powered Intelligence, and Elite Package solutions. Transform your vision into digital excellence.',
    images: ['https://sanganak.org/og-image.png']
  }
}

import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-black antialiased text-white`}>
        {children}
      </body>
    </html>
  )
}
