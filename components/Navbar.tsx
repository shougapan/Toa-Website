"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, HeartHandshake, ChevronRight, Calendar } from 'lucide-react';
import Image from "next/image";

export default function PremiumNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: '大阪梅田ドクターズ結婚相談所について', href: '/' },
    { name: '大阪梅田ドクターズ結婚相談所が選ばれる理由', href: '/why-us' },
    { name: 'ハイスペック男性との成婚を望む女性たちへ', href: '/advantages' },
    { name: 'ハイスペックなあなたへ', href: '/elite-matchmaking' },
    // { name: 'ハイスペックなあなたへ', href: '/high-spec' },
    { name: '少人制のハイクラス成婚', href: '/executive' },
    { name: '料金プランと成婚までの流れ', href: '/plan' },
    { name: '男性のための戦略', href: '/mens-strategy' },
    { name: '婚活の悩みと不安を解消する特別サポート', href: '/support' },
    { name: '成婚エピソード', href: '/marriage-story' },
    { name: '入会までの流れ', href: '/membership-steps' },
    { name: '婚活よく.ある質問Q＆A', href: '/FAQ' },
    { name: 'いい人がいない！ともう３0代のあなたへ', href: '/consider' },
    { name: '結婚相談所の入会から成婚退会までの流れとサポート内容を解説', href: '/steps' },
    { name: '結婚相談所お見合いの暗黙のルールと意外なNGマナー', href: '/rules' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
          scrolled 
            ? 'bg-[#FAF7F4]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-gray-200/30 py-3' 
            : 'bg-[#FAF7F4] py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex justify-between items-center">
            
            {/* 1. Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group z-50">
              <Image
                src="/logo2.png"
                alt="Logo"
                width={45}
                height={45}
                priority
              />
              <div className="flex flex-col">
                <span className="text-base font-black text-gray-900 tracking-tight leading-tight">
                  大阪梅田ドクターズ結婚相談所
                </span>
                <span className="text-[12px] font-black text-[#D9889D] tracking-widest leading-none mt-1 uppercase">
                  ２０代３０代の真剣婚活・1年以内の成婚
                </span>
              </div>
            </Link>

            {/* 2. Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-10">
              <div className="flex gap-8">
                {navLinks.slice(0, 6).map((link) => ( // Slicing desktop display to avoid layout bloat on header
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className="relative text-[13px] font-black text-gray-600 hover:text-gray-900 transition-colors tracking-wider py-2 group"
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D9889D] transition-all duration-300 ease-out group-hover:w-full" />
                  </Link>
                ))}
              </div>

              {/* Premium Contact Action Button */}
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-black px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg shadow-gray-900/10 tracking-wider"
              >
                <Calendar className="w-3.5 h-3.5 text-[#E6A2B3]" />
                <span>無料面談を予約する</span>
                <ChevronRight className="w-3 h-3 text-white/50" />
              </Link>
            </div>

            {/* 3. Mobile Hamburger Trigger */}
            <div className="md:hidden flex items-center z-50">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-900 p-2 focus:outline-none transition-transform active:scale-95"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6 animate-fadeIn" /> : <Menu className="w-6 h-6 animate-fadeIn" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 4. Full-screen Mobile Overlay Viewport */}
      <div 
        className={`fixed inset-0 bg-white/98 backdrop-blur-md z-40 md:hidden flex flex-col transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        {/* 🛠️ FIX CONTAINER: Independent scroll wrapper for long lists */}
        <div className="flex-1 overflow-y-auto px-6 pt-24 pb-6 custom-scrollbar">
          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-black tracking-widest text-[#D9889D]/60 uppercase border-b border-gray-100 pb-2 mb-2">
              Navigation Menu
            </p>
            {navLinks.map((link, idx) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${idx * 30}ms` }}
                /* 🛠️ FIX DESIGN: Scaled font down to text-sm/text-base and added alignment properties for long strings */
                className={`text-sm font-bold text-gray-800 hover:text-[#D9889D] flex items-start justify-between gap-4 py-1.5 border-b border-gray-50/50 group transform transition-all duration-300 ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
              >
                <span className="text-left leading-relaxed">{link.name}</span>
                <ChevronRight className="w-4 h-4 mt-1 text-gray-300 flex-shrink-0 group-hover:text-[#D9889D] transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* 🛠️ FIX CTA POSITIONING: Stationary bottom drawer footer tray */}
        <div className={`p-6 border-t border-gray-100 bg-white space-y-3 transform transition-all duration-500 delay-200 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <Link 
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] text-white text-sm font-black py-3.5 rounded-xl shadow-xl shadow-[#E6A2B3]/20"
          >
            <Calendar className="w-4 h-4" />
            <span>無料相談の枠を予約する</span>
          </Link>
          
          <p className="text-center text-[11px] font-bold text-gray-400">
            お電話や公式LINEからも随時受付中
          </p>
        </div>
      </div>
    </>
  );
}