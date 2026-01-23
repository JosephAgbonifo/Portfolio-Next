import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joseph Agbonifo | Creative Engineer",
  description:
    "Senior Frontend Engineer & Web3 Architect specializing in high-fidelity digital experiences, Rust, and the MERN stack.",
  keywords: [
    "Frontend Engineer",
    "Web3 Developer",
    "Next.js",
    "Solidity",
    "Lagos Developer",
    "Creative Engineering",
  ],
  authors: [{ name: "Joseph Agbonifo" }],
  creator: "Joseph Agbonifo",

  // Icon configuration based on your public folder
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  // OpenGraph for social sharing (LinkedIn, Twitter, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com", // Update with your actual domain
    siteName: "Joseph Agbonifo Portfolio",
    title: "Joseph Agbonifo | Creative Engineer",
    description:
      "Turning complex friction into seamless interaction. Explore the archive of digital artifacts.",
    images: [
      {
        url: "/profile-alt.png", // Using your existing profile image as the share preview
        width: 1200,
        height: 630,
        alt: "Joseph Agbonifo Portfolio Preview",
      },
    ],
  },

  // Twitter specific metadata
  twitter: {
    card: "summary_large_image",
    title: "Joseph Agbonifo | Creative Engineer",
    description:
      "Building the future of circular creativity and high-performance web systems.",
    creator: "@hellojoedev",
    images: ["/profile-alt.png"],
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
