import type { Metadata } from "next";
import { DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "AIMemoryHub: Stop Re-Explaining Yourself to AI Tools",
    template: "%s | AIMemoryHub",
  },
  description: "AI memory layers solve context loss across ChatGPT, Claude, and other AI tools. Learn how memory systems work, compare 15+ solutions, and find the right tool for your workflow.",
  keywords: ["AI memory hub", "AI memory system", "cross-AI memory", "persistent AI context", "AI that remembers", "ChatGPT memory alternative"],
  authors: [{ name: "AIMemoryHub" }],
  alternates: {
    canonical: "https://aimemoryhub.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aimemoryhub.com",
    siteName: "AIMemoryHub",
    title: "AIMemoryHub: Stop Re-Explaining Yourself to AI Tools",
    description: "AI memory layers solve context loss across ChatGPT, Claude, and other AI tools. Learn how memory systems work, compare 15+ solutions, and find the right tool for your workflow.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIMemoryHub: Stop Re-Explaining Yourself to AI Tools",
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
      <body className={`${dmSans.variable} ${spaceMono.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
