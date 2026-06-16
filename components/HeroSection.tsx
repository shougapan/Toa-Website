import React from 'react';
import Image from 'next/image';
import { Sparkles, CheckCircle2, ChevronDown, ChevronRight, BarChart3 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-linear-to-br from-white via-[#FAF8F5] to-white overflow-hidden border-b border-gray-100">
      
      {/* 背景の環境光・オーナメント装飾 */}
      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-[#E6A2B3]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 min-h-[680px] lg:min-h-[780px]">
        
        {/* ============================================================
            左カラム: テキスト＆3つの強みカード
           ============================================================ */}
        <div className="lg:col-span-7 flex flex-col justify-start px-4 sm:px-6 lg:pl-12 lg:pr-8 pt-10 sm:pt-14 lg:pt-16 pb-12 lg:pb-20 z-10 bg-linear-to-r from-white via-white to-transparent overflow-visible">
          <div className="w-full max-w-4xl overflow-visible">
            
            {/* 上部タグラベルのグループ */}
            <div className="flex flex-wrap items-center gap-2 mb-5 justify-center lg:justify-start">
              <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] text-white px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>現役女医監修 × ロジカル成婚戦略</span>
              </div>
              <div className="inline-flex items-center gap-1 bg-white border border-[#EEDAD6] text-gray-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D9889D]" />
                <span>20年実績 of Wサポート体制</span>
              </div>
            </div>

            {/* リード文・キャッチコピーエリア */}
            <div className="text-center lg:text-left mb-8 select-none relative">
              <h1 className="text-[#D9889D] text-xs sm:text-sm font-black tracking-widest uppercase mb-3 block">
                Relationship Diagnosis
              </h1>

              <h2 className="text-lg sm:text-2xl lg:text-3xl font-black text-gray-900 tracking-tight leading-[1.4] lg:leading-[1.35] max-w-2xl mx-auto lg:mx-0">    
                <span className="relative inline-block">
                  現役女医監修×キャリア20年ベテランが仕掛ける「最高峰の婚活プロデュース」 
                  <span className="absolute bottom-1.5 left-0 w-full h-2.5 bg-gradient-to-r from-[#E6A2B3]/25 to-transparent -z-10 rounded-full" />
                </span>
              </h2>

              {/* 下矢印とサブメッセージによる視線誘導 */}
              <div className="mt-5 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3">
                <p className="text-xs sm:text-sm text-gray-500 font-bold bg-[#FAF8F5] lg:bg-transparent border border-gray-100 lg:border-none px-4 py-2 lg:p-0 rounded-xl flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9889D]" />
                  大阪梅田結婚相談所が選ばれる三つのポイント
                </p>
                <div className="w-6 h-6 rounded-full bg-[#E6A2B3]/10 flex items-center justify-center animate-bounce">
                  <ChevronDown className="w-3.5 h-3.5 text-[#D9889D]" />
                </div>
              </div>
            </div>

            {/* 3つのプレミアムボックス（右側の画像に美しくオーバーラップ） */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 lg:w-[140%] lg:max-w-none z-30 relative px-2 md:px-0">
              
              {/* 強み 1: ローズ系ハイコントラスト */}
              <div className="bg-white/85 backdrop-blur-xl rounded-2xl p-7 min-h-[190px] border border-white shadow-[0_15px_35px_rgba(230,162,179,0.25)] flex flex-col justify-between transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_25px_50px_rgba(230,162,179,0.4)]">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-wider text-white mb-4 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] px-3 py-1 rounded-lg shadow-sm">
                    <span className="opacity-80">POINT</span>
                    <span className="text-xs font-black border-l border-white/30 pl-1.5">01</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-gray-900 mb-2.5 tracking-tight leading-snug">
                    現役女医のプロデュース
                  </h3>
                  <p className="text-[13px] text-gray-700 leading-relaxed font-bold">
                    女医監修×キャリア20年ベテランが仕掛ける「最高峰の婚活プロデュース」
                  </p>
                </div>
              </div>

              {/* 強み 2: パープル系ハイコントラスト */}
              <div className="bg-white/85 backdrop-blur-xl rounded-2xl p-7 min-h-[190px] border border-white shadow-[0_15px_35px_rgba(168,85,247,0.18)] flex flex-col justify-between transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_25px_50px_rgba(168,85,247,0.3)]">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-wider text-white mb-4 bg-gradient-to-r from-purple-400 to-indigo-500 px-3 py-1 rounded-lg shadow-sm">
                    <span className="opacity-80">POINT</span>
                    <span className="text-xs font-black border-l border-white/30 pl-1.5">02</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-gray-900 mb-2.5 tracking-tight leading-snug">
                    あなたの魅力を最大化
                  </h3>
                  <p className="text-[13px] text-gray-700 leading-relaxed font-bold">
                    出会った瞬間に『また会いたい』と思わせるさまざまな戦略をアドバイス
                  </p>
                </div>
              </div>

              {/* 強み 3: ゴールド・アンバー系ハイコントラスト */}
              <div className="bg-white/85 backdrop-blur-xl rounded-2xl p-7 min-h-[190px] border border-white shadow-[0_15px_35px_rgba(217,119,6,0.18)] flex flex-col justify-between transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_25px_50px_rgba(217,119,6,0.3)]">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-wider text-white mb-4 bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 rounded-lg shadow-sm">
                    <span className="opacity-80">POINT</span>
                    <span className="text-xs font-black border-l border-white/30 pl-1.5">03</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-gray-900 mb-2.5 tracking-tight leading-snug">
                    男女２名のダブルサポート
                  </h3>
                  <p className="text-[13px] text-gray-700 leading-relaxed font-bold">
                    婚活サポート歴２０年のベテランカウンセラー×女医による多角的なサポートを提供
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ============================================================
            右カラム: メインビジュアル画像・実績バッジ
           ============================================================ */}
        <div className="relative lg:col-span-5 h-[480px] lg:h-auto w-full overflow-hidden flex items-end">
          
          {/* 実績データフローティングバッジ（右上） */}
          <div className="absolute top-6 right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-gray-100 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
              <BarChart3 className="w-4 h-4 text-[#D9889D]" />
            </div>
            <div>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider leading-none mb-0.5">Success Rate</p>
              <p className="text-xs font-extrabold text-gray-900">
                1年以内成婚率 <span className="text-sm text-[#D9889D] font-black">78.4%</span>
              </p>
            </div>
          </div>

          {/* 当日予約アクティブピン（右下） */}
          <div className="absolute bottom-6 right-6 z-20 bg-gray-900/95 backdrop-blur-md text-white rounded-xl px-4 py-2.5 shadow-md flex items-center gap-2.5 font-medium text-xs">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>本日の無料面談枠あり</span>
          </div>

          {/* グラデーションマスク付きカバー画像 */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/couple1.jpg"
              alt="幸せなカップルのイメージ"
              fill
              priority
              className="object-[80%_center] lg:object-[60%_center] object-cover transform scale-100"
            />
            
            {/* 画面サイズに応じた各種グラデーションフェード */}
            <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/40 via-[#FAF8F5]/20 to-transparent z-10 hidden lg:block pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FAF8F5] to-transparent lg:hidden z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF8F5]/50 to-transparent lg:hidden z-10 pointer-events-none" />
          </div>

          <div className="absolute bottom-3 left-4 z-20 bg-white/60 backdrop-blur-xs px-2 py-0.5 rounded text-[9px] text-gray-500 border border-gray-200/30">
            ※イメージ画像
          </div>

        </div>

      </div>

      {/* ============================================================
          画面下部・追従型CTAコンテナ（モバイル・デスクトップ最適化）
         ============================================================ */}
      <div className="fixed bottom-0 left-0 w-full md:w-auto md:bottom-6 md:left-6 z-50 px-4 pb-4 md:p-0 flex flex-col sm:flex-row gap-3 md:gap-4 items-center bg-linear-to-t from-white via-white/90 to-transparent md:bg-transparent pt-6 md:pt-0">
        
        {/* 1. WEB面談予約ボタン */}
        <a 
          href="#contact" 
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] hover:from-[#D9889D] hover:to-rose-600 text-white font-extrabold px-6 lg:px-8 py-3.5 rounded-full shadow-2xl shadow-[#E6A2B3]/40 text-sm lg:text-base transition-all duration-300 transform hover:scale-[1.03] text-center tracking-wide"
        >
          <span>無料相談の枠を予約する</span>
          <ChevronRight className="w-4 h-4 bg-white/20 rounded-full p-0.5 shrink-0" />
        </a>
        
        {/* 2. 公式LINE相談ボタン */}
        <a 
          href="https://line.me" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#06C755] hover:bg-[#05B34C] text-white font-extrabold px-6 lg:px-8 py-3.5 rounded-full shadow-2xl shadow-[#06C755]/30 text-sm lg:text-base transition-all duration-300 transform hover:scale-[1.03] text-center tracking-wide"
        >
          <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 5.84 2 10.58c0 2.9 1.7 5.48 4.34 6.94-.17.58-.62 2.37-.7 2.73-.1.43.14.43.33.33.13-.08 2.12-1.44 2.95-2.03.7.2 1.43.3 2.17.3 5.52 0 10-3.84 10-8.58S17.52 2 12 2zm4.62 11.23h-1.46c-.14 0-.26-.12-.26-.26v-3.7c0-.14.12-.26.26-.26h1.46c.14 0 .26.12.26.26v.44c0 .14-.12.26-.26.26h-.94v.74h.94c.14 0 .26.12.26.26v.44c0 .14-.12.26-.26.26h-.94v.8h.94c.14 0 .26.12.26.26v.44c0 .15-.12.26-.26.26zm-2.88 0h-.44c-.14 0-.26-.12-.26-.26V9.8c0-.14.12-.26.26-.26h.44c.14 0 .26.12.26.26v2.9c.01.14-.11.27-.26.27zm-1.45 0c0 .14-.12.26-.26.26h-.44c-.1-.01-.19-.08-.23-.17l-1.37-2.04v1.95c0 .14-.12.26-.26.26h-.44c-.14 0-.26-.12-.26-.26V9.8c0-.14.12-.26.26-.26h.44c.1.01.19.08.24.18l1.36 2.02V9.8c0-.14.12-.26.26-.26h.44c.14 0 .26.12.26.26v3.43zm-4.73-1.06h.94c.14 0 .26.12.26.26v.44c0 .14-.12.26-.26.26H6.6c-.14 0-.26-.12-.26-.26V9.8c0-.14.12-.26.26-.26h.44c.14 0 .26.12.26.26v2.9h.26z"/>
          </svg>
          <span>LINEで気軽に相談してみる</span>
        </a>

      </div>
    </section>
  );
}