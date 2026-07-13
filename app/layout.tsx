import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  // 優先度 1: 重複コンテンツ対策（ドメインが決まったら差し替えてください）
  metadataBase: new URL('https://www.umeda-doctors-marry.com'), 
  alternates: {
    canonical: '/',
  },

  // 優先度 2: 日本語SEO・ローカル検索（大阪・梅田）に特化したタイトルと説明文
  title: {
    // 32文字：Googleの検索結果で絶対に途切れない、最も強力なキーワードの組み合わせ
    default: '大阪梅田ドクターズ結婚相談所｜20代30代のハイクラス婚活', 
    template: '%s ｜ 大阪梅田ドクターズ結婚相談所', 
  },
  // 108文字：スマホの検索画面にジャストサイズで収まる、医師監修と実績をアピールした文章
  description: '大阪梅田でハイクラス婚活・スピード成婚なら当相談所へ。現役医師監修×仲人歴20年のベテランカウンセラーが、医学的アプローチと丁寧なマンツーマンサポートで、20代・30代の1年以内の成婚へ導きます。',
  
  // サイト内でアピールされている、ユーザーが実際に検索するキーワード
  keywords: [
    '大阪 結婚相談所',
    '梅田 結婚相談所 おすすめ',
    'ハイスペック 婚活 大阪',
    '医師 婚活 結婚相談所',
    '20代 30代 婚活 スピード成婚',
    '少人数制 結婚相談所 梅田'
  ],

  // 優先度 3: LINEやSNSでシェアされた時の見栄え（スマホでの婚活相談の共有に必須）
  openGraph: {
    title: '大阪梅田ドクターズ結婚相談所｜20代30代の真剣婚活・1年以内の成婚',
    description: '現役医師監修×仲人歴20年のダブルサポート。毎月5名限定の完全少人数制で、あなたの理想のスピード成婚を叶えます。',
    url: 'https://www.umeda-doctors-marry.com',
    siteName: '大阪梅田ドクターズ結婚相談所',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '大阪梅田ドクターズ結婚相談所',
    description: '現役医師監修×仲人歴20年のダブルサポートで目指すハイクラススピード成婚。',
  },

  // 優先度 4: クローラーへの巡回指示とGoogle連携
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  verification: {
    // Google Search Console登録時に発行されるコードをここに入れます
    google: 'your-google-search-console-code-here', 
  },
};

export const viewport = {
  themeColor: '#ffb6c1', // サイト内の「🩷」やピンクのブランドカラーに合わせた色（例: ライトピンク）
  width: 'device-width',
  initialScale: 1,
};




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

    {/* Custom LINE Button */}
    <a
      href="https://lin.ee/ZXB0UNs"
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#06C755] py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#05b34c]"
    >
      {/* LINE SVG Icon */}
      <svg 
        className="w-5 h-5 fill-current" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 10.304c0-5.36-5.385-9.72-12-9.72s-12 4.36-12 9.72c0 4.8 4.266 8.825 10.027 9.565.39.084.922.258 1.058.592.12.302.079.775.039 1.08l-.171 1.027c-.052.31-.25 1.21 1.077.66 1.266-.525 6.83-4.022 9.317-6.89 1.73-1.921 2.651-4.004 2.651-6.314z"/>
      </svg>
      <span>LINEで友だち追加</span>
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