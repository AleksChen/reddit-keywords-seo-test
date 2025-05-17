import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I Want To... | Collection of Interesting Titles",
  description: "Explore the collection of interesting 'I want to...' titles, including 'i want to eat your pancreas', 'I want to escape from princess lessons' and 'I want to hug that gator'.",
  keywords: ["i want to eat your pancreas", "I want to escape from princess lessons", "I want to hug that gator", "movies", "anime", "books"],
  openGraph: {
    title: "I Want To... | Collection of Interesting Titles",
    description: "Explore the collection of interesting 'I want to...' titles, including 'i want to eat your pancreas', 'I want to escape from princess lessons' and 'I want to hug that gator'.",
    url: "https://reddit-keywords-seo-test.vercel.app/",
    siteName: "I Want To...",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "I Want To... | Collection of Interesting Titles",
    description: "Explore the collection of interesting 'I want to...' titles",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
