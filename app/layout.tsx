import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://sanganak.com'),
  title: {
    default: 'SanganakHQ — Digital products with a point of view.',
    template: '%s — SanganakHQ',
  },
  description:
    'SanganakHQ is an independent creative studio building brands, digital experiences, and campaigns with a point of view.',
  generator: 'SanganakHQ',
  alternates: { canonical: 'https://sanganak.com' },
  openGraph: {
    type: 'website',
    url: 'https://sanganak.com',
    siteName: 'SanganakHQ',
    title: 'SanganakHQ — Digital products with a point of view.',
    description: 'An independent creative studio for big shifts.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SanganakHQ — Digital products with a point of view.',
    description: 'An independent creative studio for big shifts.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f7f6' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0e0d' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className="antialiased">
        <div className="grain-overlay" aria-hidden />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
