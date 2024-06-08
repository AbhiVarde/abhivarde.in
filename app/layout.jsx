import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { Providers } from "./providers";
import KProvider from "./components/common/KProvider";
import CommandBarInvokar from "./components/common/CommandBarInvokar";
import ScrollToTop from "./components/common/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Abhi Varde",
    template: "%s | Abhi Varde",
  },
  description: "A passionate Software Engineer from India.",
  openGraph: {
    title: "Abhi Varde",
    description: "A passionate Software Engineer from India.",
    siteName: "Abhi Varde",
    url: "https://abhivarde.in",
    type: "website",
    images: [
      {
        url: "./favicon.ico",
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
    description: "A passionate Software Engineer from India.",
    images: "./favicon.ico",
  },
  instagram: {
    url: "https://www.instagram.com/iamabhi_189",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="./favicon.ico"
          sizes="320x320"
        />
      </head>
      <body className={`${inter.className} bg-white text-black`}>
        <KProvider>
          <Providers>
            <ScrollToTop />
            <Analytics />
            <Navbar />
            {children}
            <Footer />
          </Providers>
          <CommandBarInvokar />
        </KProvider>
      </body>
    </html>
  );
}
