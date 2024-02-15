import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Marketplace",
  description:
    "This is a digital marketplace where you can buy and sell products. There are various digital products available out here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full antialiased font-sans", inter.className)}
      >
        <Providers>
          <main className="relative flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
            {/* <footer className="bg-black text-white opacity-10">This is footer</footer> */}
          </main>
        </Providers>
      </body>
    </html>
  );
}
