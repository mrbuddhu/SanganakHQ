/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
        hostname: 'www.godrejinterio.com',
        port: '',
        pathname: '/**',
      }
    ],
    domains: ['images.unsplash.com', 'www.godrejinterio.com'],
    unoptimized: false
  },
};

export default nextConfig;
