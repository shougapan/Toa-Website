"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, HeartHandshake, ChevronRight, Calendar } from 'lucide-react';
import Image from "next/image";

import {
  Home,
  Sparkles,
  Users,
  Star,
  Crown,
  AlertCircle,
  Heart,
  User,
  Target,
  Gem,
  CreditCard,
  HelpCircle,
  ClipboardList,
  ArrowRightLeft,
  MessageCircleQuestion,
  Trophy,
  FileText,
  ShieldAlert,
  FlaskConical,
} from "lucide-react";

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
  { name: '大阪梅田ドクターズ結婚相談所について', href: '/', icon: Home },
  { name: '大阪梅田ドクターズ結婚相談所が選ばれる理由', href: '/why-us', icon: Sparkles },
  { name: 'ハイスペック男性との成婚を望む女性たちへ', href: '/advantages', icon: Users },
  { name: 'ハイスペックなあなたへ', href: '/elite-matchmaking', icon: Crown },
  { name: '少人制のハイクラス成婚', href: '/executive', icon: Gem },
  { name: 'いい人がいない！ともう３０代のあなたへ', href: '/consider', icon: AlertCircle },
  { name: '誠実で笑顔が可愛い「最高の男性」にであいませんか？', href: '/ideal-man', icon: Heart },
  { name: '男性のための戦略', href: '/mens-strategy', icon: Target },
  { name: '僕の条件で出会える女性は？', href: '/ideal-woman', icon: User },
  { name: '可愛い子に選ばれる男の戦略', href: '/become-her-choice', icon: Star },
  { name: '料金プランと成婚までの流れ', href: '/plan', icon: CreditCard },
  { name: '婚活の悩みと不安を解消する特別サポート', href: '/support', icon: HelpCircle },
  { name: '入会までの流れ', href: '/membership-steps', icon: ClipboardList },
  { name: '結婚相談所の入会から成婚退会までの流れとサポート内容を解説', href: '/steps', icon: ArrowRightLeft },
  { name: '婚活よくある質問Q＆A', href: '/FAQ', icon: MessageCircleQuestion },
  { name: '成婚エピソード', href: '/marriage-story', icon: Trophy },
  { name: '結婚相談所お見合いの暗黙のルールと意外なNGマナー', href: '/rules', icon: ShieldAlert },
  { name: 'test', href: '/test', icon: FlaskConical },
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
        {/* 🛠️ COMPACT CONTAINER: Highly scannable list structure context */}
        <div className="flex-1 overflow-y-auto px-5 pt-20 pb-4 custom-scrollbar">
          <div className="flex flex-col gap-1.5">
            <p className="text-[10px] font-black tracking-widest text-[#D9889D]/60 uppercase border-b border-gray-100 pb-1 mb-1">
              Navigation Menu
            </p>
{navLinks.map((link, idx) => {
  const Icon = link.icon;

  return (
    <Link
      key={link.name}
      href={link.href}
      onClick={() => setIsOpen(false)}
      style={{ transitionDelay: `${idx * 20}ms` }}
      className={`group flex items-center justify-between gap-4
        px-4 py-3 rounded-2xl border border-gray-100
        bg-white/70 hover:bg-white
        shadow-sm hover:shadow-md
        active:scale-[0.98]
        transition-all duration-300
        text-[13px] font-bold text-gray-800
        hover:text-[#D9889D]
        ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}
      `}
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-50 text-pink-500 group-hover:bg-pink-100 transition-colors">
          <Icon className="w-4 h-4" />
        </span>

        <span className="text-left leading-5 tracking-tight">
          {link.name}
        </span>
      </div>

      <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#D9889D] transition-colors" />
    </Link>
  );
})}
          </div>
        </div>
      </div>
    </>
  );
}