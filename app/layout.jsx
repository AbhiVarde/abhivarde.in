import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import CommandBarInvokar from "./components/common/CommandBarInvokar";
import LayoutWrapper from "./components/common/LayoutWrapper";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Abhi Varde | Software Developer",
    template: "%s | Abhi Varde",
  },
  description: "A passionate Software Developer from India.",
  openGraph: {
    title: "Abhi Varde",
    description: "A passionate Software Developer from India.",
    siteName: "Abhi Varde",
    url: "https://abhivarde.in",
    type: "website",
    images: [
      {
        url: "https://abhivarde.in/og-image.png",
        width: 800,
        height: 600,
        alt: "Abhi Varde",
      },
    ],
    profile: {
      firstName: "Abhi",
      lastName: "Varde",
      username: "Abhi Varde",
      gender: "male",
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@varde_abhi",
    title: "Abhi Varde",
    description: "A passionate Software Developer from India.",
    images: "https://abhivarde.in/og-image.png",
  },
  robots: "index,follow",
  canonical: "https://abhivarde.in",
  keywords:
    "Software Developer, Web Developer, Programmer, JavaScript, React, Next.js, Portfolio",
  author: "Abhi Varde",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="./icon.png"
          sizes="320x320"
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
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
        <CommandBarInvokar />
      </body>
    </html>
  );
};