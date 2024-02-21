import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useEffect } from "react";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full  lenis">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased h-full tracking-tight text-primary",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="fixed bottom-4 right-4 z-[100]">
            <ThemeToggle />
          </div>

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
