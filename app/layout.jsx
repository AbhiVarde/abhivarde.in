import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import CommandBarInvokar from "./components/common/CommandBarInvokar";
import LayoutWrapper from "./components/common/LayoutWrapper";
import Script from "next/script";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Abhi Varde | Product Engineer & Open Source Contributor",
    template: "%s | Abhi Varde",
  },
  description:
    "Product Engineer building developer-first tools and contributing to product-based companies. Specializing in end-to-end product development, design systems, AI automation, and exceptional user experiences.",

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
    title: "Abhi Varde - Product Engineer & Open Source Contributor",
    description:
      "Building developer-first tools and contributing to product-based companies. Creator of Billow, Nothify, Svelte Drawer, Sync UI, and more. Focused on product engineering, design systems, and AI automation.",
    siteName: "Abhi Varde - Product Engineer",
    url: "https://abhivarde.in",
    type: "profile",
    images: [
      {
        url: "https://abhivarde.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhi Varde - Product Engineer specializing in Developer Experience, Design Systems, and AI Automation",
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
    title: "Abhi Varde - Product Engineer",
    description:
      "Product Engineer • Design Systems • AI Automation • Open Source Contributor • Building developer-first tools",
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

  canonical: "https://abhivarde.in",
  author: "Abhi Varde",

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
