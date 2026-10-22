import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const siteTitle =
  "AK Website Agency | Custom Websites for Small Businesses & Nonprofits";
const siteDescription =
  "AK Website Agency builds custom, mobile-friendly websites for small businesses and nonprofits in Alaska and Hawaii, with optional SEO, Google Ads setup, and ongoing maintenance.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "AK Website Agency",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-white text-gray-900 antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
