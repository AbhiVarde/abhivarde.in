/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],

    qualities: [55, 75],

    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],

    minimumCacheTTL: 60 * 60 * 24 * 30,

    remotePatterns: [
      { protocol: "https", hostname: "appwrite.io" },
      { protocol: "https", hostname: "resend.com" },
      { protocol: "https", hostname: "lingo.dev" },
      { protocol: "https", hostname: "framerusercontent.com" },
      { protocol: "https", hostname: "svelte.dev" },
      { protocol: "https", hostname: "ai-sdk.dev" },
      { protocol: "https", hostname: "umami.is" },
      { protocol: "https", hostname: "ui.shadcn.com" },
      { protocol: "https", hostname: "openai.com" },
      { protocol: "https", hostname: "www.gstatic.com" },
      { protocol: "https", hostname: "groq.com" },
      { protocol: "https", hostname: "exa.ai" },
      { protocol: "https", hostname: "assets.stripeassets.com" },
      { protocol: "https", hostname: "github.githubassets.com" },
      { protocol: "https", hostname: "socket.io" },
    ],
  },
};

export default nextConfig;
