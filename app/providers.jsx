"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
