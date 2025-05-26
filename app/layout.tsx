import type { Metadata } from "next";
import ThemeProvider from "@/theme/theme-provider";
import { Fira_Code, Fira_Sans } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/theme/theme-toggle";
import { Analytics } from "@vercel/analytics/next";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  variable: "--font-fira-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joseph | Developer Portfolio",
  description:
    "Welcome to my portfolio — I'm Joseph, a web developer focused on crafting sleek, responsive, and user-friendly web experiences.",
  icons: {
    icon: "/icons/me-nobg.png",
  },
  openGraph: {
    title: "Joseph | Developer Portfolio",
    description:
      "Explore projects, designs, and digital creations by Joseph — a developer passionate about clean code and modern web tech.",
    url: "https://www.hellojoedev.vercel.app",
    siteName: "Joseph's Portfolio",
    images: [
      {
        url: "/images/cover.png",
        width: 1200,
        height: 630,
        alt: "Joseph's Portfolio Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph | Developer Portfolio",
    description:
      "Check out my personal dev portfolio featuring clean code, responsive designs, and web projects I’m proud of.",
    images: ["/images/cover.png"],
    creator: "@HelloJoeDev",
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
        className={`${firaSans.variable} ${firaCode.variable} hide-scrollbar antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <ThemeToggle />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
