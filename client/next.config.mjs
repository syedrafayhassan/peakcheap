/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://www.peakcheap.com/:path*",
        permanent: true,
      },
      // Redirect non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'peakcheap.com',
          },
        ],
        destination: 'https://www.peakcheap.com/:path*',
        permanent: true,
      },
    ]
  },

};

export default nextConfig;
