/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
    ],
  },
  output: "export", // Bắt buộc để Cloudflare Pages hiểu và build ra static
};

export default nextConfig;
