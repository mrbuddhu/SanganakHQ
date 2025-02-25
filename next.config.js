/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'vercel.app',
        port: '',
        pathname: '/**',
      }
    ],
    domains: ['localhost', 'vercel.app', 'sanganak.vercel.app', 'sanganak-premium.vercel.app'],
    unoptimized: true,
  },
}

module.exports = nextConfig
