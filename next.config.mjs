/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bhzjuchcsxtqjnkggfsk.supabase.co",
      },
    ],
  },
};

export default nextConfig;
