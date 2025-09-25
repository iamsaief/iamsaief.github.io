import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { personalInfo, socialLinks } from "@/lib/data/personal-info"; // SEO metadata sources

/**
 * Root layout - wraps entire application
 * Sets up fonts, theme provider, and analytics
 */
// SEO metadata for better previews and indexing
export const metadata: Metadata = {
  metadataBase: new URL("https://iamsaief.github.io"),
  title: {
    default: `${personalInfo.name} - ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.tagline,
  applicationName: personalInfo.name,
  authors: [{ name: personalInfo.name, url: "https://iamsaief.github.io" }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "WordPress",
    "Web Performance",
    "Accessibility",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://iamsaief.github.io/",
    siteName: personalInfo.name,
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description:
      "Frontend Engineer specializing in React, Next.js, and TypeScript.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description:
      "Frontend Engineer specializing in React, Next.js, and TypeScript.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for Person/Website
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    url: "https://iamsaief.github.io/",
    sameAs: socialLinks.map((s) => s.url),
  };

  return (
    <html lang="en" className="dark">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {/* Theme provider with persistent dark/light mode */}
        <ThemeProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        {/* SEO structured data for richer search results */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
