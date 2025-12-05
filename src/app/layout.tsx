import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Memory Layer: Stop Re-Explaining Yourself to AI Tools",
    template: "%s | AI Memory Layer",
  },
  description: "AI memory layers solve context loss across ChatGPT, Claude, and other AI tools. Learn how memory systems work, compare 15+ solutions, and find the right tool for your workflow.",
  keywords: ["AI memory layer", "AI memory system", "cross-AI memory", "persistent AI context", "AI that remembers", "ChatGPT memory alternative"],
  authors: [{ name: "AI Memory Layer" }],
  alternates: {
    canonical: "https://aimemorylayer.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aimemorylayer.com",
    siteName: "AI Memory Layer",
    title: "AI Memory Layer: Stop Re-Explaining Yourself to AI Tools",
    description: "AI memory layers solve context loss across ChatGPT, Claude, and other AI tools. Learn how memory systems work, compare 15+ solutions, and find the right tool for your workflow.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Memory Layer: Stop Re-Explaining Yourself to AI Tools",
    description: "AI memory layers solve context loss across ChatGPT, Claude, and other AI tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
