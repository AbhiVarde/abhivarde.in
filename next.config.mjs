/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "resend.com",
      },
      {
        protocol: "https",
        hostname: "appwrite.io",
      },
      {
        protocol: "https",
        hostname: "lingo.dev",
      },
    ],
    qualities: [75, 95, 100],
  },
};

export default nextConfig;
