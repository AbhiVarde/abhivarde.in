/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "resend.com" },
      { protocol: "https", hostname: "appwrite.io" },
      { protocol: "https", hostname: "lingo.dev" },
      { protocol: "https", hostname: "framerusercontent.com" },
      { protocol: "https", hostname: "svelte.dev" },
      { protocol: "https", hostname: "ai-sdk.dev" },
    ],
    unoptimized: true,
    qualities: [75, 95, 100],
  },
};

export default nextConfig;
