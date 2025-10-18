import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/navbar";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Core Innovate",
  description: "We deliver IT and cybersecurity solutions that protect your business and support growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
