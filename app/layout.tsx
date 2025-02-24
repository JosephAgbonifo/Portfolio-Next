import type { Metadata } from "next";
import { Nunito, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const nunito = Nunito({
  variable: "--font-rokkitt",
  subsets: ["latin"],
});
const montserrat = Montserrat({
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
      <body className={`${nunito.variable} ${montserrat.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
