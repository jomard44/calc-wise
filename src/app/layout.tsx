import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import AdSenseScript from "@/components/AdSenseScript";
import { Analytics } from "@vercel/analytics/react";

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
  metadataBase: new URL("https://calcwise.site"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://calcwise.site",
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        <meta name="google-adsense-account" content="ca-pub-9587370950538764" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
        <AdSenseScript />
        <Analytics />
      </body>
    </html>
  );
}
