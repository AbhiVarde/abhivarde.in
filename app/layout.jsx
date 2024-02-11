import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"],  variable: "--font-inter"});

export const metadata = {
  title: "Abhi Varde - Developer, Designer, Programmer,Learner",
  description: "Software Developer",
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black">{children}</body>
    </html>
  );
}
