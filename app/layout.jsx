import { Varela_Round } from "next/font/google";
import Script from "next/script";
import "./styles/globals.css";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Providers } from "./providers";
import Chat from "./components/global/Chat";
const VarelaRound = Varela_Round({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const options = {
  title: "Abhi Varde | Software Developer",
  description:
    "Abhi Varde is a Software Developer and Technical Writer who is passionate about building solutions and contributing to open source communities",
  ogImage:
    "https://res.cloudinary.com/victoreke/image/upload/v1692635746/victoreke/og.png",
};

export const metadata = {
  title: options.title,
  description: options.description,
  icons: {
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: options.title,
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${VarelaRound.className} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Chat />
        </Providers>
      </body>
      <Script async src="https://statsvictor.vercel.app/script.js" />
    </html>
  );
}
