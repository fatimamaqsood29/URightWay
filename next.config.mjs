/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'source.unsplash.com',
        'images.unsplash.com' // Adding both common Unsplash domains
      ],
      minimumCacheTTL: 60, // Cache images for 60 seconds
    },
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
      styledComponents: true, // If you're using styled-components
    },
    experimental: {
      appDir: true, // If using the App Router
      serverComponentsExternalPackages: ['@prisma/client'], // If using Prisma
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-DNS-Prefetch-Control',
              value: 'on'
            }
          ],
        },
      ]
    }
  };
  
  export default nextConfig;