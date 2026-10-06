/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'karthikeyabendi05.vercel.app',
          },
        ],
        destination: 'https://www.karthikeyabendi.tech/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'karthikeyabendi.vercel.app',
          },
        ],
        destination: 'https://www.karthikeyabendi.tech/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig