import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-rokkitt",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Praise Apo",
  description:
    "Creative Virtual Assistant | Supporting CEOs, business owners, and professionals in becoming 1% better in everyday personal life and business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>{children}</body>
    </html>
  );
}
