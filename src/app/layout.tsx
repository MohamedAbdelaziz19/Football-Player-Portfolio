"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/Header';
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <html lang="en" className={inter.className}>
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
};

export default RootLayout;
