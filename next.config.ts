/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Cloudflare Images delivery host: https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>
      { protocol: 'https', hostname: 'imagedelivery.net' },
      // Nếu bạn vẫn dùng ảnh tĩnh trong public/ thì không cần thêm gì
    ],
  },
};

export default nextConfig;  