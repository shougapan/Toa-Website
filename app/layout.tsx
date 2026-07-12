import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <div className="relative min-h-screen w-full bg-gradient-to-b from-[#FAF8F5] via-white to-[#FFF5F6] text-gray-800 selection:bg-[#E6A2B3]/30">

          {/* Background ornaments */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-50">
            {/* Top Left */}
            <div className="absolute top-10 left-0 h-40 w-40 rounded-full bg-[#E6A2B3]/15 blur-3xl md:h-72 md:w-72" />

            {/* Right */}
            <div className="absolute top-1/3 right-0 h-52 w-52 rounded-full bg-rose-100/30 blur-3xl md:h-96 md:w-96" />

            {/* Bottom */}
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-pink-50/40 blur-3xl md:h-80 md:w-80" />
      </div>

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="relative z-10 pt-1 pb-24 lg:pt-24 lg:pb-0 " >
            <div className=" mx-auto w-[98%] max-w-7xl px-0 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>

          {/* Mobile Sticky CTA */}
          <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
            <div className="flex items-center gap-3">

              {/* LINE Button */}
              <a
                href="https://lin.ee/ZXB0UNs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[42%]"
              >
                <Image
                  src="/Line1.png"
                  alt="LINEで友だち追加"
                  width={180}
                  height={56}
                  className="w-full h-14 rounded-full bg-green shadow-xl object-contain"
                />
              </a>

              {/* Reservation Button */}
              <a
                href="/contact"
                className="flex-1 flex items-center justify-center rounded-full bg-rose-500 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-rose-600"
              >
                無料相談を予約する
              </a>

            </div>
          </div>

        </div>
      </body>
    </html>
  );
}