import React from 'react';
import './globals.css'; 
import Navbar from '@/components/Navbar'; // 👈 1. Import your Navbar component

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <div className="w-full min-h-screen bg-linear-to-b from-[#FAF8F5] via-white to-[#FFF5F6] text-gray-800 selection:bg-[#E6A2B3]/30 relative overflow-hidden">
          
          {/* --- AMBIENT BACKGROUND ORNAMENTS --- */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40 select-none z-0">
            <div className="absolute top-12 left-5 w-72 h-72 rounded-full bg-[#E6A2B3]/15 blur-3xl" />
            <div className="absolute top-1/3 right-5 w-96 h-96 rounded-full bg-rose-100/30 blur-3xl" />
            <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-pink-50/40 blur-3xl" />
          </div>

          {/* 👈 2. Place the Navbar here so it sits on top of all page content */}
          <Navbar />

          {/* --- MAIN STRUCTURAL SHELL --- */}
          {/* Added pt-20 (padding-top) so the fixed navbar doesn't cover your Hero text on load */}
          <main className="relative z-10 w-full pt-20 lg:pt-24">
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}