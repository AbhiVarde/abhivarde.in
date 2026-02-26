import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import CommandBarInvokar from "./components/common/CommandBarInvokar";
import LayoutWrapper from "./components/common/LayoutWrapper";
import Script from "next/script";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: {
    default: "Abhi Varde // Product Engineer • AI & DevTools • OSS Contributor",
    template: "%s // Abhi Varde",
  },
  description:
    "Product Engineer building AI-native products and developer-first tools. Actively contributing to product-based companies — contributed to Appwrite Console and Website improving UI and developer experience, opened and maintained issues and PRs reviewed and merged by core maintainers, collaborated with designers and product engineers on production improvements. Contributed to Umami website and react-zen with multiple merged PRs, improving UI, documentation, and navigation across production features. Improved mobile UX in Mintlify production docs by fixing layout behavior and enabling horizontal code scrolling. Specializing in end-to-end product development, design systems, AI automation, LLM applications, and exceptional user experiences.",
  keywords: [
    "Product Engineer",
    "Design Engineer",
    "Frontend Developer",
    "Full-Stack Developer",
    "Full Stack Engineer",
    "Software Engineer",
    "Web Developer",
    "Developer Experience Engineer",
    "Open Source Contributor",
    "AI-Native Products",
    "AI Product Engineer",
    "Product Development",
    "Next.js",
    "React",
    "Svelte",
    "TypeScript",
    "JavaScript",
    "Design Systems",
    "UI/UX Engineer",
    "Component Libraries",
    "Developer Tools",
    "SaaS Developer",
    "Product-Based Companies",
    "Startup Engineer",
    "AI Automation",
    "AI Agent",
    "Autonomous Systems",
    "LLM Applications",
    "RAG Systems",
    "Machine Learning",
    "API Development",
    "Cloud Engineering",
    "System Design",
    "Appwrite",
    "Appwrite Console",
    "Appwrite Contributor",
    "Umami",
    "Umami Contributor",
    "react-zen",
    "Mintlify",
    "Mintlify Contributor",
    "Billow",
    "Nothify",
    "Svelte Drawer",
    "Sync UI",
    "ErrExplain",
    "Sendra",
    "Idea Tracker",
    "GST Invoice",
    "404 Generator",
    "Monitoring Tools",
    "Error Analysis",
    "UI Components",
    "Abhi Varde",
    "AbhiVarde",
    "GitHub Portfolio",
    "Tech Portfolio",
  ].join(", "),
  openGraph: {
    title: "Abhi Varde // Product Engineer • AI & DevTools • OSS Contributor",
    description:
      "Building developer-first tools and contributing to product-based companies like Appwrite, Umami, and Mintlify. Contributed to Appwrite Console and Website improving UI and DX, with PRs reviewed and merged by core maintainers. Improved Umami website and react-zen with multiple merged PRs across UI, docs, and navigation. Fixed mobile UX and layout issues in Mintlify production docs. Creator of Billow, Nothify, Svelte Drawer, Sync UI, and more. Focused on product engineering, design systems, and AI automation.",
    siteName:
      "Abhi Varde // Product Engineer • AI & DevTools • OSS Contributor",
    url: "https://abhivarde.in",
    type: "profile",
    images: [
      {
        url: "https://abhivarde.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhi Varde // Product Engineer • AI & DevTools • OSS Contributor",
      },
    ],
    profile: {
      firstName: "Abhi",
      lastName: "Varde",
      username: "AbhiVarde",
      gender: "male",
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@varde_abhi",
    title: "Abhi Varde // Product Engineer • AI & DevTools • OSS Contributor",
    description:
      "Product Engineer • AI & DevTools • OSS Contributor • Contributing to Appwrite, Umami & Mintlify • Building developer-first tools",
    images: "https://abhivarde.in/og-image.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://abhivarde.in",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/icon.png" sizes="320x320" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="preload"
          as="image"
          href="/_next/static/media/me.1a3d9f34.png"
          imageSrcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.1a3d9f34.png&w=390&q=55 390w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.1a3d9f34.png&w=828&q=55 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.1a3d9f34.png&w=1080&q=55 1080w"
          imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 984px"
        />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <Script
          defer
          src="https://analytics.umami.is/script.js"
          data-website-id="58bd2a1c-b5e1-4842-b56b-9d1054f374c8"
          strategy="afterInteractive"
        />
        <Providers>
          <Suspense
            fallback={
              <main className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-center font-medium text-xl md:text-2xl">
                  Loading...
                </h1>
                <p className="text-center mt-4 font-light">
                  Hopefully not for too long :)
                </p>
              </main>
            }
          >
            <LayoutWrapper>{children}</LayoutWrapper>
          </Suspense>
        </Providers>
        <CommandBarInvokar />
      </body>
    </html>
  );
}
