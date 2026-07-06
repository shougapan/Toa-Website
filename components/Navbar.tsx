"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar, ChevronRight } from 'lucide-react';
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
    { name: '少人制のハイクラス成婚', href: '/executive' },
    { name: 'いい人がいない！ともう３０代のあなたへ', href: '/consider' },
    { name: '誠実で笑顔が可愛い「最高の男性」にであいませんか？', href: '/ideal-man' },
    { name: '男性のための戦略', href: '/mens-strategy' },
    { name: '僕の条件で出会える女性は？', href: '/ideal-woman' },
    { name: '可愛い子に選ばれる男の戦略', href: '/become-her-choice' },
    { name: '料金プランと成婚までの流れ', href: '/plan' },
    { name: '婚活の悩みと不安を解消する特別サポート', href: '/support' },
    { name: '入会までの流れ', href: '/membership-steps' },
    { name: '結婚相談所の入会から成婚退会までの流れとサポート内容を解説', href: '/steps' },
    { name: '婚活よくある質問Q＆A', href: '/FAQ' },
    { name: '成婚エピソード', href: '/marriage-story' },
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

            {/* Logo */}
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

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-10">
              <div className="flex gap-8">
                {navLinks.slice(0, 6).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative text-[13px] font-black text-gray-600 hover:text-gray-900 transition-colors tracking-wider py-2 group"
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D9889D] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-black px-6 py-3 rounded-full transition-all duration-300"
              >
                <Calendar className="w-3.5 h-3.5 text-[#E6A2B3]" />
                <span>無料面談を予約する</span>
                <ChevronRight className="w-3 h-3 text-white/50" />
              </Link>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden flex items-center z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-900"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU (COMPACT GRID) */}
      <div
        className={`fixed inset-0 bg-white z-40 md:hidden flex flex-col transition-all duration-500 ${
          isOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex-1 overflow-y-auto px-3 pt-16 pb-3">

          {/* HEADER */}
          <p className="text-[10px] font-black tracking-widest text-[#D9889D]/60 uppercase mb-2">
            Navigation
          </p>

          {/* GRID */}
          <div className="grid grid-cols-2 gap-2">

            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${idx * 10}ms` }}
                className={`flex items-center justify-between
                  px-3 py-2
                  rounded-xl
                  border border-gray-100
                  bg-white/70 hover:bg-white
                  shadow-sm hover:shadow-md
                  active:scale-[0.98]
                  transition-all duration-200
                  text-[10.5px] font-bold leading-tight text-gray-800
                  hover:text-[#D9889D]
                  ${
                    isOpen
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-2'
                  }
                `}
              >
                <span className="truncate pr-2">{link.name}</span>
                <ChevronRight className="w-3 h-3 text-gray-300 shrink-0" />
              </Link>
            ))}

          </div>
        </div>

        {/* CTA */}
        <div
          className={`p-4 border-t border-gray-100 bg-white transition-all duration-500 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-[#D9889D] text-white font-black py-3 rounded-xl"
          >
            無料相談を予約する
          </Link>
        </div>
      </div>
    </>
  );
}