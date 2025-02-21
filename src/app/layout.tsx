import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sanganak - Premium IT Solutions',
  description: 'Beyond AI-generated conformity, we handcraft distinctive digital experiences that transform your vision into reality.',
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
        <style>{`
          #nprogress {
            display: none !important;
          }
        `}</style>
      </head>
      <body className="min-h-screen bg-black antialiased">
        {children}
      </body>
    </html>
  )
}
