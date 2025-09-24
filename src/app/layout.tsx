import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

/**
 * Root layout - wraps entire application
 * Sets up fonts, theme provider, and analytics
 */
export const metadata: Metadata = {
  title: "Saief Al Emon - Frontend Engineer",
  description:
    "Frontend Engineer specializing in React, Next.js, and TypeScript. Building accessible, pixel-perfect digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {/* Theme provider with persistent dark/light mode */}
        <ThemeProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
