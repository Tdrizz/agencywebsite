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
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "UnifiedOps | Websites & Marketing Systems for Contractors",
  description:
    "UnifiedOps builds the website, follow-up, and marketing tools contractors need to turn missed calls into booked jobs.",
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
