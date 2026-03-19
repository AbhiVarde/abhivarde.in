import { Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Suspense } from "react";
import { Providers } from "./providers";
import CommandBarInvokar from "./components/command/CommandBarInvokar";
import LayoutWrapper from "./components/layout/LayoutWrapper";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-sans",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: true,
  variable: "--font-mono",
});

export const metadata = {
  title: {
    default: "Abhi Varde // Product Engineer",
    template: "%s // Abhi Varde",
  },
  description:
    "Product Engineer building things that ship. AI agents, developer tools, automation SaaS, and production UI systems. Contributor to Better Hub, Appwrite, and Mintlify. Based in India.",
  keywords: [
    "Abhi Varde",
    "Product Engineer",
    "Design Engineer",
    "Frontend Engineer",
    "AI Developer Tools",
    "AI Agent",
    "Next.js",
    "React",
    "Svelte",
    "TypeScript",
    "Design Systems",
    "Open Source",
    "SaaS",
    "Better Hub",
    "Appwrite",
    "Mintlify",
    "Nothify",
    "NodeFlow",
    "Sync UI",
    "abhivarde.in",
  ].join(", "),
  authors: [{ name: "Abhi Varde", url: "https://abhivarde.in" }],
  creator: "Abhi Varde",
  metadataBase: new URL("https://abhivarde.in"),
  openGraph: {
    title: "Abhi Varde // Product Engineer",
    description:
      "Product Engineer building things that ship. AI agents, developer tools, automation SaaS, and production UI systems. Contributor to Better Hub, Appwrite, and Mintlify.",
    siteName: "Abhi Varde",
    url: "https://abhivarde.in",
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "https://abhivarde.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhi Varde // Product Engineer",
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
    creator: "@varde_abhi",
    title: "Abhi Varde // Product Engineer",
    description:
      "Building AI agents, developer tools, and production UI. Contributor to open source. Always shipping · abhivarde.in",
    images: ["https://abhivarde.in/og-image.png"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abhi Varde",
              url: "https://abhivarde.in",
              image: "https://abhivarde.in/og-image.png",
              jobTitle: "Product Engineer",
              description:
                "Product Engineer building AI agents, developer tools, and production UI systems. Contributor to Better Hub, Appwrite, and Mintlify.",
              sameAs: [
                "https://github.com/AbhiVarde",
                "https://x.com/varde_abhi",
                "https://linkedin.com/in/abhi-varde",
              ],
              knowsAbout: [
                "Product Engineering",
                "AI Developer Tools",
                "Design Systems",
                "Open Source",
                "Next.js",
                "React",
                "Svelte",
                "TypeScript",
                "SaaS",
                "UI Engineering",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${firaCode.variable} bg-black text-white`}
        style={{ fontFamily: "var(--font-sans), sans-serif" }}
      >
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
                <h1 className="text-center font-medium text-xl">Loading</h1>
                <p className="text-center mt-2 text-sm text-white/40 font-light">
                  just a moment...
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
