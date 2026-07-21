/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path",
        has: [
          {
            type: "host",
            value: "peakcheap.com",
          },
        ],
        destination: "https://www.peakcheap.com/:path*",
        permanent: true,
      },
    ]
  },

};

export default nextConfig;
