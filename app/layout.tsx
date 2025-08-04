import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youssef Aarabi | Portfolio",
  description: "Showcasing my projects in MERN Stack, Next.js, and Digital Marketing.",
  icons: "/portfolio.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="flex flex-col items-center justify-center w-full min-h-[81vh] px-2 sm:px-4 md:px-8 py-4 grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
