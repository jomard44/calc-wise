import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CalcWise — Free Online Finance Calculators & Tools",
    template: "%s | CalcWise",
  },
  description:
    "Free online calculators for mortgage, loans, investments, taxes, and more. Make smarter financial decisions with CalcWise — accurate, fast, and easy-to-use tools.",
  keywords: [
    "calculator",
    "mortgage calculator",
    "loan calculator",
    "finance calculator",
    "compound interest calculator",
    "tax calculator",
    "retirement calculator",
  ],
  authors: [{ name: "CalcWise" }],
  creator: "CalcWise",
  metadataBase: new URL("https://calcwise.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://calcwise.com",
    siteName: "CalcWise",
    title: "CalcWise — Free Online Finance Calculators & Tools",
    description:
      "Free online calculators for mortgage, loans, investments, taxes, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CalcWise — Free Online Finance Calculators & Tools",
    description:
      "Free online calculators for mortgage, loans, investments, taxes, and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense - replace ca-pub-XXXXXXX with your publisher ID */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
