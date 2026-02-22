/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],

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

    qualities: [75],
  },
};

export default nextConfig;
