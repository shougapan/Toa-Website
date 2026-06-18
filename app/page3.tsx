"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Calendar, 
  ChevronRight, 
  HeartHandshake,
  Compass,
  Stethoscope,
  ClipboardList,
  Activity,
  ArrowRight,
  ChevronDown, 
  UserCheck2 ,
  Heart, 
  ShieldCheck, 
  BarChart3, 
  RotateCcw, 
  Award, 
  Users, 
  Send,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function HomePage() {
  const primaryPink = "bg-[#E6A2B3]";
  const accentPink = "text-[#D9889D]";
  const lightPinkBg = "bg-[#E6A2B3]/10";
  const softCreamPink = "bg-[#F7EBEA]";

  const hashtags = ["#大阪梅田", "#結婚相談所", "#女医監修", "#ロジカル婚活", "#成婚率"];

  // PERSONALITY DIAGNOSIS STATE LOGIC
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const quizQuestions = {
    1: {
      title: "Q1. 憧れの素敵な人（王子様・美女）に出会ったとき、あなたの心境に一番近いものは？",
      answers: [
        { label: "A", text: "「自分とは住む世界が違うな」と、つい一歩引いてしまう" },
        { label: "B", text: "「素敵な人だな」と思いつつ、相手からのアプローチをそっと待つ" },
        { label: "C", text: "「どうすれば自分の魅力をアピールできるか」と、前向きにチャンスを考える" }
      ]
    },
    2: {
      title: "Q2. 気になる人と二人きりのとき、あなたの「恋愛スタイル」はどれ？",
      answers: [
        { label: "A", text: "相手の話をじっくり聞き、常に聞き役に回るのが落ち着く" },
        { label: "B", text: "相手のペースに合わせつつ、ここぞという時にさりげなく気遣いを見せる" },
        { label: "C", text: "自分の話も楽しく共有しながら、お互いのリードで対等に会話を盛り上げる" }
      ]
    },
    3: {
      title: "Q3. 「自分の外見やファッション」に対する、あなたの現在の自信度は？",
      answers: [
        { label: "A", text: "自分に似合うものがまだよく分からず、いつも無難なスタイルになりがち" },
        { label: "B", text: "自分なりのこだわりや良さはあるが、理想の人の前に出るにはプロの客観的な意見も聞いてみたい" },
        { label: "C", text: "自分の魅力を引き出すスタイルを理解しており、外見にはある程度自信を持っている" }
      ]
    },
    4: {
      title: "Q4. 理想のお相手と「初めてのデート」に行くなら、プロデュースしたい理想のプランは？",
      answers: [
        { label: "A", text: "緊張せずに、二人でゆっくりお話しできる静かで落ち着いたカフェ" },
        { label: "B", text: "少し贅沢なホテルのラウンジなど、非日常の特別感を味わえる場所" },
        { label: "C", text: "トレンドの隠れ家レストランなど、自分が「ここが良い」と自信を持って提案できる場所" }
      ]
    },
    5: {
      title: "Q5. 結婚を意識するお相手に対して、あなたが一番「武器（魅力）」にできると思う部分は？",
      answers: [
        { label: "A", text: "相手を否定せず、いつでも味方でいられる「絶対的な安心感と誠実さ」" },
        { label: "B", text: "周りをよく見て、お相手の欲しい言葉やサポートをそっと差し出せる「上品な気配り」" },
        { label: "C", text: "自分の軸をしっかり持ち、お互いを高め合っていける「知性と自立心」" }
      ]
    }
  };

  // FORM SUBMISSION STATE
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-gray-800 font-sans antialiased selection:bg-rose-200">
      
      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 flex items-center justify-center rounded-full border border-[#E6A2B3]">
                <div className="absolute w-6 h-6 rounded-full border border-[#E6A2B3] opacity-60 transform translate-x-0.5" />
                <div className="absolute w-6 h-6 rounded-full border border-[#E6A2B3] opacity-60 transform -translate-x-0.5" />
              </div>
              <div>
                <h1 className="text-sm md:text-base font-bold tracking-wider text-gray-900 leading-none">
                  大阪梅田結婚相談所
              </h1>
              <p className="text-[10px] md:text-xs text-gray-600 tracking-tight mt-0.5 font-medium">
                  MARRIAGE & MEDICAL AGENCY
                </p>
              </div>
            </div>
            <div className="hidden lg:block h-6 w-px bg-gray-200" />
            <p className="hidden lg:block text-xs text-gray-500 font-medium">
              女性医師監修のロジカル成婚
            </p>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:block">
              <ul className="flex gap-6 text-xs md:text-sm font-semibold text-gray-800">
                <li className="hover:text-[#E6A2B3] cursor-pointer transition-colors">ホーム</li>
                <li className="hover:text-[#E6A2B3] cursor-pointer transition-colors">お問い合わせ</li>
                <li className="hover:text-[#E6A2B3] cursor-pointer transition-colors">クリニック</li>
                <li className="hover:text-[#E6A2B3] cursor-pointer transition-colors">お知らせ</li>
              </ul>
            </nav>

            <div className="flex items-stretch self-stretch -my-3">
              <a href="#contact" className={`${primaryPink} hover:bg-[#D9889D] text-white px-5 py-4 text-xs md:text-sm font-bold flex items-center gap-1 transition-colors`}>
                お問い合わせはこちら
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </header>

{/* --- HERO SECTION (TOP-ALIGNED TEXT WITH FADED LEFT PICTURE BLEND) --- */}
<section className="relative w-full bg-linear-to-br from-white via-[#FAF8F5] to-white overflow-hidden border-b border-gray-100">
  
  <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-[#E6A2B3]/5 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

  <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 min-h-[680px] lg:min-h-[780px]">
    
    {/* LEFT COLUMN: TEXT CONTENT */}
    <div className="lg:col-span-7 flex flex-col justify-start px-4 sm:px-6 lg:pl-12 lg:pr-8 pt-10 sm:pt-14 lg:pt-16 pb-12 lg:pb-20 z-10 bg-linear-to-r from-white via-white to-transparent overflow-visible">
      <div className="w-full max-w-4xl overflow-visible">
        
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

        {/* --- LEAD SECTION WITH CLEAR CONNECTION --- */}
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

          {/* Connected Subtext & Down Arrow for Visual Flow */}
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

        {/* --- THREE ULTRA-POP PREMIUM BOXES (CONNECTED SECTION) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 lg:w-[140%] lg:max-w-none z-30 relative px-2 md:px-0">
          
          {/* Strength 1: Rose High-Contrast Pop */}
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

          {/* Strength 2: Purple High-Contrast Pop */}
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

          {/* Strength 3: Gold/Amber High-Contrast Pop */}
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
                証明書の提出が必須の、安心なネットワーク。
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>

    {/* RIGHT COLUMN: IMAGES */}
    <div className="relative lg:col-span-5 h-[480px] lg:h-auto w-full overflow-hidden flex items-end">
      
      {/* Top Floating Badge */}
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

      {/* Bottom Schedule Pin */}
      <div className="absolute bottom-6 right-6 z-20 bg-gray-955/95 backdrop-blur-md text-white rounded-xl px-4 py-2.5 shadow-md flex items-center gap-2.5 font-medium text-xs">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span>本日の無料面談枠あり</span>
      </div>

      {/* Image Layer with Enhanced Gradient Blending */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/couple1.jpg"
          alt="幸せなカップルのイメージ"
          fill
          priority
          className="object-[80%_center] lg:object-[60%_center] object-cover transform scale-100"
        />
        
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/40 via-[#FAF8F5]/20 to-transparent z-10 hidden lg:block pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FAF8F5] to-transparent lg:hidden z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF8F5]/50 to-transparent lg:hidden z-10 pointer-events-none" />
      </div>

      <div className="absolute bottom-3 left-4 z-20 bg-white/60 backdrop-blur-xs px-2 py-0.5 rounded text-[9px] text-gray-500 border border-gray-200/30">
        ※イメージ画像
      </div>

    </div>

  </div>

  {/* --- ALWAYS HOVERING/FIXED CONSULTATION BUTTONS CONTAINER --- */}
  {/* On Desktop: Floats neatly at the bottom-left of the viewport. On Mobile: Pins seamlessly to the bottom width edge. */}
  <div className="fixed bottom-0 left-0 w-full md:w-auto md:bottom-6 md:left-6 z-50 px-4 pb-4 md:p-0 flex flex-col sm:flex-row gap-3 md:gap-4 items-center bg-linear-to-t from-white via-white/90 to-transparent md:bg-transparent pt-6 md:pt-0">
    
    {/* 1. WEB CONSULTATION RESERVATION */}
    <a 
      href="#contact" 
      className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 ${primaryPink} hover:bg-[#D9889D] text-white font-extrabold px-6 lg:px-8 py-3.5 rounded-full shadow-2xl shadow-[#E6A2B3]/40 text-sm lg:text-base transition-all duration-300 transform hover:scale-[1.03] text-center tracking-wide`}
    >
      <span>無料相談の枠を予約する</span>
      <ChevronRight className="w-4 h-4 bg-white/20 rounded-full p-0.5 shrink-0" />
    </a>
    
    {/* 2. OFFICIAL LINE CONSULTATION */}
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
{/*SECTION 2*/}
<div className="w-full bg-linear-to-b from-[#FAF8F5] via-white to-[#FFF5F6] text-gray-800 antialiased selection:bg-[#E6A2B3]/30">
      
      {/* ============================================================
          【H1】 HERO BANNER ASPECT / SECTION TOP
          ============================================================ */}
      <header className="relative max-w-7xl mx-auto pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-center border-b border-rose-100/60">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 select-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#E6A2B3]/15 rounded-full blur-3xl" />
          <div className="absolute top-10 right-10 w-64 h-64 bg-rose-100/40 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <h1 className="text-xs sm:text-sm font-black tracking-widest text-[#D9889D] uppercase mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>大阪の結婚相談所なら［大阪梅田結婚相談所］が選ばれる3つの理由</span>
          </h1>
          <p className="text-xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto">
            現役医師監修 × 仲人歴20年<br className="sm:hidden"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-[#D9889D] to-rose-600">
              妥協なき「最高峰の婚活プロデュース」
            </span>
          </p>
        </div>
      </header>

      {/* ============================================================
          【H2】理由1：現役女医監修×キャリア20年
          ============================================================ */}
      <section className="max-w-5xl mx-auto py-16 px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-rose-50 border border-[#EEDAD6] text-[#D9889D] text-xs font-black tracking-widest uppercase mb-3 shadow-2xs">
            Reason 01
          </span>
          <h2 className="text-lg sm:text-2xl font-black text-gray-900 tracking-tight">
            現役女医監修×キャリア20年ベテランが仕掛ける「最高峰の婚活プロデュース」<br/>
            <span className="text-sm sm:text-base font-bold text-rose-500 mt-2 block">
              現役女医監修×キャリア20年ベテランが仕掛ける「唯一無二の婚活」
            </span>
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white shadow-[0_15px_40px_rgba(230,162,179,0.03)] text-center max-w-4xl mx-auto">
          <p className="text-base sm:text-lg font-black text-gray-900 tracking-wide mb-6">
            理想のさらに上へ。<br/>
            一般のデータ検索では辿り着けない「特別な出会い」の可能性をあなたに。
          </p>
          <p className="text-[13px] sm:text-sm text-gray-600 leading-xl font-medium text-justify max-w-3xl mx-auto">
            世の中には数多くの結婚相談所がありますが、出会える層の「質」に満足できていますか？<br/>
            当相談所は、一般的なマッチングデータだけに頼る場所ではありません。
            第一線で活躍し、エグゼクティブたちのリアルな価値観やライフスタイルを熟知する<span className="text-gray-900 font-bold bg-linear-to-b from-transparent to-[#E6A2B3]/20 px-1">【現役の女性医師による監修】</span>。
            そして、業界の酸いも甘いも知り尽くし、数々の成婚を導いてきた<span className="text-gray-900 font-bold bg-linear-to-b from-transparent to-rose-100 px-1">【キャリア20年のベテラン男性カウンセラー】</span>。<br/><br/>
            この、医療界と婚活界のトッププロ2名がタッグを組み、会員様1名に対して<span className="text-[#D9889D] font-black">「男女2人1組の専任チーム」</span>として密着サポートする、極めて稀少なプレミアム相談所です。
          </p>
        </div>
      </section>

      {/* ============================================================
          【H2】理由2：2名1組のダブルサポート
          ============================================================ */}
      <section className="max-w-5xl mx-auto py-12 px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-rose-50 border border-[#EEDAD6] text-[#D9889D] text-xs font-black tracking-widest uppercase mb-3 shadow-2xs">
            Reason 02
          </span>
          <h2 className="text-lg sm:text-2xl font-black text-gray-900 tracking-tight leading-snug">
            2名1組のダブルサポートだからできる、妥協なき「理想像の徹底解剖」
          </h2>
          <h3 className="text-sm sm:text-base font-black text-rose-500 mt-2">
            現役医師の心理分析 × 20年の成婚データで、あなたの「本当の結婚相手」を科学的に特定
          </h3>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white shadow-[0_20px_40px_rgba(0,0,0,0.02)] max-w-4xl mx-auto">
          <p className="text-[13px] sm:text-sm text-gray-600 leading-xl font-medium text-justify mb-8">
            大阪の結婚相談所［大阪梅田結婚相談所］が圧倒的な高い成婚率を誇る最大の理由は、現役医師とカウンセラー歴20年のベテラン男性仲人が「2名1組のチーム」となり、あなた専用の婚活セカンドとして徹底的に伴走する点にあります。多くの大手結婚相談所やIBJ加盟店でありがちな「ただ条件を並べてシステムで検索するだけ」の機械的なマッチングでは、結婚後の価値観の不一致による失敗や、入会後のミスマッチによるスピード離婚のリスクを排除できません。<br/><br/>
            当相談所では、まずあなた自身が気づいていない深層心理にある「本当の結婚相手への理想像」を入会面談で徹底的に解剖します。医師監修のカウンセリング心理学や脳科学、行動経済学のアプローチを用いて、あなたが人生において「絶対に譲れない条件」と「実は妥協しても幸せになれるポイント」をロジカルに切り分けます。そこに、20年間関西圏のシビアな婚活市場（大阪市・堺市・東大阪市・枚方市・吹田市・豊中市・八尾市など）を見続けてきたプロの豊富な成婚データを掛け合わせることで、あなたのライフスタイルや性格に100%マッチする「隠れた優良男性・理想の女性」の条件を科学的に特定。高収入・高学歴・正社員・公務員・経営者など、身元が保証された年収600万円以上のハイクラスな会員層からも、あなたに本当に合うお相手をスクリーニングします。
          </p>

          <div className="border-t border-rose-100/60 pt-8 mb-8 text-center">
            <p className="text-sm sm:text-base font-black text-gray-900 mb-6">
              私たちはまず、あなたが心から望んでいる「理想の相手像」を、多角的な視点から徹底的に分析します。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-justify max-w-2xl mx-auto">
              <div className="bg-[#FFF5F6]/40 p-4 rounded-xl border border-rose-50">
                <p className="text-[12px] text-gray-600 leading-relaxed font-semibold">
                  一言で「白馬の王子様」「かぐや姫のような絶世の美女」と表現しても人それぞれの王子様も美女も異なります。また、王子様や美女と自身の相性が良いとは限りません。恋愛は自分のアイデンティティを写す鏡のようなものです。自分がどんな性格で、自分が求める形のない何かは何なのか、まさに<span className="text-[#D9889D] font-black">“自分探しの旅”</span>だと思います。
                </p>
              </div>
              <div className="bg-[#FFF5F6]/40 p-4 rounded-xl border border-rose-50">
                <p className="text-[12px] text-gray-600 leading-relaxed font-semibold">
                  「誰を選べばいいのか、誰が自分に合うのか、お相手の方が本当に求めているパートナー像は何なのか…」重要な運命の分かれ道でどちらに舵をきればいいか。現役女医の視点から、数々の診療を経てたくさんの方と接し寄り添ってきた経験をもとに、大切な決断に寄り添ってお気持ちを汲みながらサポートさせていただきます。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-r from-rose-50/50 to-pink-50/30 rounded-2xl p-5 border border-rose-100/40 text-justify">
            <span className="text-[11px] font-black uppercase tracking-wider text-rose-500 block mb-1">● ベテランの視点から</span>
            <p className="text-[12px] sm:text-sm text-gray-600 leading-relaxed font-medium">
              20年の経験に基づき、現実的に成婚へ至るための相性や条件を推測。あなた自身も気づいていなかった「真の理想のお相手、ずっとずっと一緒にいられるお相手」を浮き彫りにします。
              また、時には多数の経験からの予想される結果や可能性も正直にお伝えします。その中には、耳が痛く厳しい内容もあるかもしれませんが、聞いておいて参考にすれば、近道になる情報もたくさんあるにちがいありません。結果的にまわり道を避けることができれば、人生の貴重な時間を有意義に過ごせるはずです。
            </p>
          </div>

          <div className="mt-8 text-center text-[12px] sm:text-sm text-gray-500 font-bold bg-white p-4 rounded-xl border border-dashed border-rose-200">
            もちろん、最後に決断するのは会員様です。婚活に正解はありません。続けるのも辞めるのも全て正解です。<br className="hidden sm:block"/>
            十人十色のご希望に応じて、細かくご対応できるのが当社の強みです。アットホームなサポートと一緒にぜひ頑張りましょう！
          </div>
        </div>
      </section>

      {/* ============================================================
          【H2】理由3：オーダーメイドの婚活戦略
          ============================================================ */}
      <section className="max-w-5xl mx-auto py-12 px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-rose-50 border border-[#EEDAD6] text-[#D9889D] text-xs font-black tracking-widest uppercase mb-3 shadow-2xs">
            Reason 03
          </span>
          <h2 className="text-lg sm:text-2xl font-black text-gray-900 tracking-tight leading-snug">
            「男のプライド」も「女性のこだわり」も120%受け止める、オーダーメイドの婚活戦略
          </h2>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white shadow-[0_20px_40px_rgba(0,0,0,0.02)] max-w-4xl mx-auto text-justify">
          <p className="text-[13px] sm:text-sm text-gray-600 leading-xl font-medium">
            婚活において「年齢や年収、職業、婚姻歴（バツイチ・シングルマザー）に妥協したくない」というアラサー・アラフォー女性の切実な願いや、「自分の男のプライドを傷つけられたくない」「会社の同僚や友人にバレたくない」という20代・30代・40代のビジネスパーソンの男の本音を、私たちは決して否定しません。客観的なデータ分析（ロジカルな戦略）と、1対1の手厚いサポート（感情に寄り添う親身なケア）を完璧に両立させることができます。<br/><br/>
            事務所を構えない出張型結婚相談所・オンライン婚活の強みを活かし、ホテルグランヴィア大阪やスイスホテル南海大阪といったお洒落なホテルラウンジや、プライバシーの守られた個室カフェで、周囲の目を一切気にせずリラックスして作戦会議を行いましょう。<br/><br/>
            恋愛経験なしの方や口下手な男性であっても、2名のプロがお見合い会話術の伝授から梅田・難波での服装コーディネート（ショッピング同行）、さらには交際中のLINEの返信頻度や、仮交際お断りの理由分析、真剣交際タイミングの調整、さらにはプロポーズの言葉・シチュエーションの演出までを完全バックアップ。自己流の婚活やマッチングアプリの不都合な真実（サクラ・嘘・ヤリモク）に振り回されて婚活疲れを起こす前に、最高峰のプロフェッショナルによる妥協なき「理想像の徹底解剖」をぜひご体感ください。あなたのプライドを守りながら、最短ルートでスピード成婚へ導く、最強のシステムがここにあります。
          </p>
        </div>
      </section>

      {/* ============================================================
          【H2】理由4：戦略的ハイスペック婚活（医療アプローチ）
          ============================================================ */}
      <section className="max-w-5xl mx-auto py-12 pb-24 px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-rose-50 border border-[#EEDAD6] text-[#D9889D] text-xs font-black tracking-widest uppercase mb-3 shadow-2xs">
            Reason 04
          </span>
          <h2 className="text-lg sm:text-2xl font-black text-gray-900 tracking-tight leading-snug">
            キャリアも、結婚も、妥協しない。知性と客観的データで、成婚の確率を高める戦略的ハイスペック婚活。
          </h2>
          <h3 className="text-sm sm:text-base font-black text-rose-500 mt-2">
            恋愛や結婚に、ビジネスのような「戦略」が必要な理由
          </h3>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white shadow-[0_20px_40px_rgba(230,162,179,0.04)] max-w-4xl mx-auto">
          <p className="text-[13px] sm:text-sm text-gray-600 leading-xl font-medium text-justify mb-8">
            職場でもあなたは、目標達成のために「現状分析」や「正しい計画」を立ててきたはずです。実は、婚活も全く同じです。
            「いい人がいれば……」と運を天に任せるのは、ゴールのないプロジェクトを進めるようなもの。当相談所では、現役の女医が実践している「徹底的な論理思考」と「客観的なデータ分析」を婚活に応用。あなたの魅力をデータに基づいて分析し、理想のお相手と出会うための「確実性の高いルート」を戦略的に導き出します。
          </p>

          {/* 3選ばれている理由ミニカード */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-[#D9889D] font-black text-xs mb-3">01</div>
              <h4 className="text-xs sm:text-sm font-black text-gray-900 mb-1.5">感覚に頼らないデータ主導</h4>
              <p className="text-[11px] text-gray-500 font-bold leading-normal">相思相愛になりやすいお相手を客観データから厳選します。</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-[#D9889D] font-black text-xs mb-3">02</div>
              <h4 className="text-xs sm:text-sm font-black text-gray-900 mb-1.5">タイムパフォーマンス重視</h4>
              <p className="text-[11px] text-gray-500 font-bold leading-normal">無駄を省き、仕事をしながらスタイリッシュに最短成婚を目指します。</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-[#D9889D] font-black text-xs mb-3">03</div>
              <h4 className="text-xs sm:text-sm font-black text-gray-900 mb-1.5">キャリアへの深い理解</h4>
              <p className="text-[11px] text-gray-500 font-bold leading-normal">共働きや互いのライフスタイルを尊重し合えるハイクラスな出会い。</p>
            </div>
          </div>

          {/* 3つの医療アプローチアコーディオン/カード表現 */}
          <div className="border-t border-gray-100 pt-8 mb-10">
            <h4 className="text-sm sm:text-base font-black text-gray-900 text-center mb-6 flex items-center justify-center gap-2">
              <Stethoscope className="w-4 h-4 text-[#D9889D]" />
              <span>成婚の確率を高める「3つの医療アプローチ」</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative bg-linear-to-b from-white to-[#FFF5F6]/40 p-6 rounded-2xl border border-rose-100/60 shadow-2xs text-center">
                <ClipboardList className="w-6 h-6 text-[#D9889D] mx-auto mb-3" />
                <h5 className="text-xs sm:text-sm font-black text-gray-900 mb-2">1. 【検査】強みの可視化</h5>
                <p className="text-[11px] text-gray-600 font-medium text-justify leading-relaxed">
                  客観的なデータを用いて、婚活市場における「あなたの最大の強み」を明確にします。
                </p>
              </div>
              <div className="relative bg-linear-to-b from-white to-[#FFF5F6]/40 p-6 rounded-2xl border border-rose-100/60 shadow-2xs text-center">
                <Activity className="w-6 h-6 text-[#D9889D] mx-auto mb-3" />
                <h5 className="text-xs sm:text-sm font-black text-gray-900 mb-2">2. 【処方】的確なアドバイス</h5>
                <p className="text-[11px] text-gray-600 font-medium text-justify leading-relaxed">
                  どうしたら状況をよくできるか具体的な改善ステップをロジカルに提案します。
                </p>
              </div>
              <div className="relative bg-linear-to-b from-white to-[#FFF5F6]/40 p-6 rounded-2xl border border-rose-100/60 shadow-2xs text-center">
                <HeartHandshake className="w-6 h-6 text-[#D9889D] mx-auto mb-3" />
                <h5 className="text-xs sm:text-sm font-black text-gray-900 mb-2">3. 【サポート】メンタル支え</h5>
                <p className="text-[11px] text-gray-600 font-medium text-justify leading-relaxed">
                  医師ならではの心理学知見で、不安やストレスをケアし、ポジティブに支えます。
                </p>
              </div>
            </div>
          </div>

          {/* 大切な決意・エピローグ */}
          <div className="bg-gradient-to-br from-[#FFF9F9] to-white rounded-2xl p-6 border-2 border-dashed border-rose-200 text-center">
            <h4 className="text-base font-black text-gray-950 mb-3 tracking-tight">
              【仕事も結婚も両方欲しい！】
            </h4>
            <p className="text-[12px] sm:text-sm text-gray-600 leading-relaxed font-semibold max-w-2xl mx-auto mb-6 text-justify sm:text-center">
              あなたが仕事で培ってきた決断力や論理力、誠実さなどは、幸せな結婚を掴むための強力な武器になります。キャリアも、これからの人生の幸福も、どちらも諦める必要はありません。<br/><br/>
              知性とデータを味方につけて、ハスペックな異性や理解の深い一生モノのパートナーと出会う一歩を踏み出してみませんか？
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] hover:from-[#D9889D] hover:to-rose-600 text-white font-black text-xs tracking-wider px-6 py-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-102"
            >
              <span>まずは無料相談で強みを分析する</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

    </div>
{/* --- PROCESS & NETWORK SECTION --- */}
<section className="py-20 bg-white border-b border-gray-100 relative overflow-hidden">
  {/* Soft background decor to match the premium medical/VIP branding */}
  <div className="absolute top-1/3 right-0 w-96 h-96 bg-rose-50/40 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-50/30 rounded-full blur-3xl pointer-events-none" />

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* SECTION HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="inline-block text-xs font-bold tracking-wider text-[#D9889D] bg-[#FDF6F6] px-4 py-1.5 rounded-full mb-4 border border-[#F5E3E3]">
        MULTIDIMENSIONAL PROCESS
      </span>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 tracking-tight leading-snug">
        2名1組だからできる、<br className="sm:hidden" />真の理想像を浮き彫りにする<br />
        <span className="relative inline-block mt-2">
          「多面的分析プロセス」
          <span className="absolute bottom-1 left-0 w-full h-2 bg-[#E6A2B3]/20 -z-10" />
        </span>
      </h2>
      <p className="mt-4 text-sm text-gray-600 leading-relaxed">
        私たちは、独自の「多面的プロファイリング」によって、あなた自身も気づいていない「真の理想像」を3つのステップで極限まで明確化します。
      </p>
    </div>

    {/* THREE STEP PROGRESSION */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
      
      {/* STEP 1: 女医監修 */}
      <div className="relative bg-[#FDF6F6] border border-[#F5E3E3] rounded-3xl p-8 shadow-2xs flex flex-col justify-between transition-all hover:shadow-md">
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-extrabold tracking-widest text-[#D9889D] uppercase">Step 01</span>
            <div className="w-10 h-10 bg-white border border-[#EEDAD6] rounded-xl flex items-center justify-center shadow-2xs">
              <span className="text-base">🩺</span>
            </div>
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-4 leading-snug">
            現役女医による<br />「深層心理スクリーニング」
          </h3>
          <div className="space-y-4 text-xs text-gray-600 leading-relaxed">
            <p>
              まずは、あなたが表面的な希望条件を求める「本当の理由」を、現役女医の視点から紐解きます。
            </p>
            <p className="border-l-2 border-[#E6A2B3]/40 pl-3 bg-white/50 py-2 rounded-r-xl">
              <strong>「条件」の分解：</strong>経済的な安定が欲しいのか、尊敬できる知性が欲しいのか。動機によって紹介すべきお相手の「人柄」や「職種」は全く変わります。
            </p>
            <p>
              <strong>「理想のライフスタイル」の解剖：</strong>ハイスペック層のリアルな日常を熟知する女医だからこそ、生活レベルでのマッチングもご提供します。
            </p>
          </div>
        </div>
        <p className="mt-6 text-[11px] font-medium text-gray-400 italic">
          ※長く人生に役立つアイデンティティの追求の一助に。
        </p>
      </div>

      {/* STEP 2: ベテランカウンセラー */}
      <div className="relative bg-[#F6F6FA] border border-[#E6E6F0] rounded-3xl p-8 shadow-2xs flex flex-col justify-between transition-all hover:shadow-md">
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-extrabold tracking-widest text-purple-400 uppercase">Step 02</span>
            <div className="w-10 h-10 bg-white border border-purple-100 rounded-xl flex items-center justify-center shadow-2xs">
              <span className="text-base">👔</span>
            </div>
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-4 leading-snug">
            キャリア20年のベテランによる<br />「人生と生活を豊かにする相手選び」
          </h3>
          <div className="space-y-4 text-xs text-gray-600 leading-relaxed">
            <p>
              条件としての理想を並べるだけでなく、これからのあなたの人生や実際の生活を、本当に豊かにできるお相手を探すことが最も重要です。
            </p>
            <p>
              20年間、何百組もの幸せな夫婦を見届けてきたベテラン男性カウンセラーが、豊富な経験に基づいてアドバイスを行います。
            </p>
            <p className="border-l-2 border-purple-300 pl-3 bg-white/50 py-2 rounded-r-xl">
              <strong>相性の本質：</strong>「こういう性格の異性と結ばれると、結婚後の人生がより素晴らしくなる」という、長年の経験だけが知るノウハウをお伝えします。
            </p>
          </div>
        </div>
      </div>

      {/* STEP 3: 特別ネットワーク */}
      <div className="relative bg-[#FAF6F0] border border-[#EFE5D9] rounded-3xl p-8 shadow-2xs flex flex-col justify-between transition-all hover:shadow-md">
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-extrabold tracking-widest text-amber-600/70 uppercase">Step 03</span>
            <div className="w-10 h-10 bg-white border border-amber-100 rounded-xl flex items-center justify-center shadow-2xs">
              <span className="text-base">✨</span>
            </div>
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-4 leading-snug">
            私たちが持つ<br />「特別なネットワーク」の可能性
          </h3>
          <div className="space-y-4 text-xs text-gray-600 leading-relaxed">
            <p>
              あなたの「真の理想像」が明確になった瞬間から、私たちの本当のサポートが始まります。
            </p>
            <p>
              長年の活動のなかで築き上げてきた独自のVIP人脈や特別なリレーションシップ。さらには、現役女医だからこそアプローチが視野に入る、医療界をはじめとしたハイスペック層の確かな知人ネットワーク。
            </p>
            <p className="border-l-2 border-amber-300 pl-3 bg-white/50 py-2 rounded-r-xl font-medium text-amber-900">
              一般の婚活市場やマッチングアプリには決して出回らない特別なルートからアプローチを仕掛けていきます。
            </p>
          </div>
        </div>
      </div>

    </div>

    {/* BOTTOM CLOSING MANIFESTO */}
    <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl text-center lg:text-left">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,162,179,0.15),transparent_45%)]" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="space-y-2">
            <p className="text-xs sm:text-sm text-[#E6A2B3] font-bold tracking-wide">
              「アプリや普通の相談所では、望むお相手に会えなかった」
            </p>
            <p className="text-xs sm:text-sm text-[#E6A2B3] font-bold tracking-wide">
              「自分の価値を正しく理解してくれる、ワンランク上のパートナーと出会いたい」
            </p>
          </div>
          <h3 className="text-base sm:text-lg lg:text-xl font-bold leading-relaxed text-gray-100 pt-2">
            そう願うあなたのために、私たちは持てるすべての人脈と英知を尽くして並走することをお約束します。<br className="hidden lg:block" />
            妥協のない、欲張りな婚活をここから始めましょう。
          </h3>
        </div>
        
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] hover:from-[#D9889D] hover:to-[#C77389] text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all transform hover:scale-[1.02] text-sm tracking-wider w-full sm:w-auto">
            <span>妥協のない婚活を始める</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>

  </div>
</section>

{/* --- HOSPITALITY SECTION (HANDMADE MATCHMAKING) --- */}
<section className="py-20 bg-[#FAF8F5] border-b border-gray-100 relative overflow-hidden">
  {/* Elegant branding accents */}
  <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E6A2B3]/5 rounded-full blur-3xl pointer-events-none" />

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      
      {/* LEFT COLUMN: TEXT CONTENT */}
      <div className="lg:col-span-7 space-y-6">
        <div>
          <span className="inline-block text-xs font-bold tracking-wider text-[#D9889D] bg-white px-4 py-1.5 rounded-full mb-4 border border-[#EEDAD6]/60 shadow-2xs">
            OUR HOSPITALITY
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 tracking-tight leading-snug">
            当相談所のおもてなし<br />
            <span className="relative inline-block mt-2 text-[#D9889D]">
              ぬくもりのある ハンドメイドの婚活
              <span className="absolute bottom-1 left-0 w-full h-1.5 bg-[#E6A2B3]/20 -z-10" />
            </span>
          </h2>
        </div>

        <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
          <div className="bg-white/80 backdrop-blur-xs p-5 rounded-2xl border border-[#EEDAD6]/40 space-y-3">
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <span className="text-rose-400">📱</span> 条件だけでは見えない「本当の相性」
            </h3>
            <p>
              手軽に出会えるマッチングアプリや、条件追求主体のオンライン相談所は、非常に効率的です。
            </p>
            <p>
              しかし、アプリの画面上でどれだけ「年齢・年収・職業」といった数字や条件が一致していても、<strong>「実際に会ってみたら、会話のテンポや価値観が全然違った」</strong>という経験はありませんか？
            </p>
          </div>

          <p>
            同じ「年収〇〇万円のビジネスマン」であっても、その中身やライフスタイル、家庭に求める役割は人によって**180度異なります**。条件の枠組みだけでは、お相手の「繊細な個性」や「未来の暮らしのイメージ」までを見抜くことは困難です。
          </p>
          
          <p className="font-bold text-gray-900 text-base pt-2">
            だからこそ私たちは、オンラインのデータ共有だけに留まりません。
          </p>

          <p>
            あなた自身の「ぼんやりとした理想」の奥にある本音を細かくカウンセリングしてご希望に寄り添い、目に見えない相性までを深く見極める**「ぬくもりのあるハンドメイドの婚活」**を大切にしています。
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN: CONCEPT VISUAL CARDS */}
      <div className="lg:col-span-5 space-y-4">
        
        {/* Top Card: The digital reality */}
        <div className="bg-white/40 border border-gray-200/60 rounded-2xl p-6 opacity-60 scale-95 origin-bottom transition-all hover:opacity-80">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Digital Data Match</div>
          <div className="text-sm font-bold text-gray-500 mb-3">一般的なアプリ・データ主体の相談所</div>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-md">年齢・年収・職業の数値化</span>
            <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-md">画面上の条件一致</span>
            <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-md">価値観のミスマッチ</span>
          </div>
        </div>

        {/* Bottom Card: Your Premium handmade approach */}
        <div className="bg-gradient-to-br from-[#FDF6F6] to-[#FAF6F0] border-2 border-[#E6A2B3]/30 rounded-3xl p-8 shadow-md relative overflow-hidden transform lg:scale-105">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#E6A2B3]/10 rounded-full blur-xl pointer-events-none" />
          
          <div className="text-xs font-bold text-[#D9889D] uppercase tracking-wider mb-2">Premium Human Touch</div>
          <h4 className="text-base font-black text-gray-900 mb-4">
            アプリやデータには真似できない、<br />人と人との深い繋がりをご提案
          </h4>
          
          <ul className="space-y-3 text-xs text-gray-700 font-medium">
            <li className="flex items-start gap-2.5">
              <span className="text-[#D9889D] mt-0.5">✓</span>
              <span>「ぼんやりとした理想」の奥にある本音の抽出</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#D9889D] mt-0.5">✓</span>
              <span>会話のテンポ・生活リズムまで見据えた相性設計</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#D9889D] mt-0.5">✓</span>
              <span>数字には表れない「繊細な個性」のハンドメイドマッチ</span>
            </li>
          </ul>

          <div className="mt-6 pt-5 border-t border-[#EEDAD6]/40 text-center">
            <p className="text-xs font-bold text-[#D9889D]">
              これこそが私たちが追求するおもてなしの形です。
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>

      {/* --- STRATEGIC ADVANTAGE SECTION --- */}
      <section className="py-24 lg:py-32 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <p className={`${accentPink} text-xs font-bold tracking-widest uppercase mb-3`}>STRATEGY & MEDICAL APPROACH</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-950 tracking-tight leading-normal sm:leading-relaxed">
              キャリアも、結婚も、妥協しない。<br />
              <span className="text-gray-900 font-medium text-lg sm:text-xl block mt-2">
                知性と客観的データで、成婚の確率を高める戦略的ハイスペック婚活。
              </span>
            </h2>
            <div className={`w-12 h-0.5 ${accentPink} mx-auto mt-6 opacity-60`} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20">
            
            <div className="lg:col-span-7 space-y-5">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight flex items-center gap-2">
                <span className={`w-1.5 h-5 ${primaryPink} rounded-full inline-block`} />
                恋愛や結婚に、ビジネスのような「戦略」が必要な理由
              </h3>
              <div className="text-sm text-gray-600 space-y-4 leading-relaxed font-normal">
                <p>
                  職場でもあなたは、目標達成のために「現状分析」や「正しい計画」を立ててきたはずです。実は、婚活も全く同じです。
                </p>
                <p>
                  「いい人がいれば……」と運を天に任せるのは、ゴールのないプロジェクトを進めるようなもの。当相談所では、現役の女医が実践している「徹底的な論理思考」と「客観的なデータ分析」を婚活応用。
                </p>
                <p className="font-semibold text-gray-900">
                  あなたの魅力をデータに基づいて分析し、理想のお相手と出会うための<br/>「確実性の高いルート」を戦略的に導き出します。
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#EEDAD6]/40 shadow-xs">
              <h4 className="text-xs font-extrabold text-[#D9889D] tracking-widest uppercase mb-4">FEATURES</h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className={`w-5 h-5 shrink-0 rounded-full ${lightPinkBg} text-[#D9889D] flex items-center justify-center text-xs font-bold mt-0.5`}>✓</div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900 mb-1">「感覚」に頼らないデータ主導のマッチング</h5>
                    <p className="text-xs text-gray-600 leading-normal">相思相愛になりやすいお相手を厳選します。</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className={`w-5 h-5 shrink-0 rounded-full ${lightPinkBg} text-[#D9889D] flex items-center justify-center text-xs font-bold mt-0.5`}>✓</div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900 mb-1">仕事と婚活を両立できるタイムパフォーマンス</h5>
                    <p className="text-xs text-gray-600 leading-normal">無駄な時間を省き、仕事をしながらスタイリッシュに婚活。最短期間での成婚を目指します。</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className={`w-5 h-5 shrink-0 rounded-full ${lightPinkBg} text-[#D9889D] flex items-center justify-center text-xs font-bold mt-0.5`}>✓</div>
                  <div>
                    <h5 className="text-sm font-bold text-gray-900 mb-1">キャリアへの理解が深いパートナーが見つかる</h5>
                    <p className="text-xs text-gray-600 leading-normal">共働きや互いのライフスタイルを尊重し合える出会いを提供します。</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          <div className="bg-[#FAF8F5]/60 rounded-3xl p-6 sm:p-10 border border-gray-100 text-center mb-16">
            <span className="text-xs font-bold text-[#D9889D] tracking-wider block mb-2">MEDICAL PROCESS</span>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-8 tracking-tight">
              成婚の確率を高める「3つの医療アプローチ」
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              
              <div className="bg-white rounded-2xl p-6 border border-[#EEDAD6]/30 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-[#D9889D]/20">01</span>
                    <span className="text-[10px] font-bold text-[#D9889D] bg-[#E6A2B3]/10 px-2.5 py-0.5 rounded-full">DIAGNOSIS</span>
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2">
                    【検査】独自の分析であなたの強みを可視化
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    客観的なデータを用いて、婚活市場における「あなたの最大の強み」を明確にします。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#EEDAD6]/30 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-[#D9889D]/20">02</span>
                    <span className="text-[10px] font-bold text-[#D9889D] bg-[#E6A2B3]/10 px-2.5 py-0.5 rounded-full">PRESCRIPTION</span>
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2">
                    【処方】課題をクリアにする的確なアドバイス
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    どうしたら状況をよくできるか具体的な改善ステップを提案します。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#EEDAD6]/30 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-[#D9889D]/20">03</span>
                    <span className="text-[10px] font-bold text-[#D9889D] bg-[#E6A2B3]/10 px-2.5 py-0.5 rounded-full">TREATMENT</span>
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2">
                    【サポート】メンタルまで支える徹底的なサポート
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    医師ならではの心理学知見で、婚活の不安やストレスをケアし、ポジティブに進めるよう支えます。
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SERVICE INTRODUCTION SECTION */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <p className={`${accentPink} text-xs font-bold tracking-widest uppercase mb-2`}>SERVICE DETAILS</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            提供サービスのご案内
          </h2>
          <div className={`w-12 h-0.5 ${accentPink} mx-auto mt-4 opacity-60`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20 lg:mb-28">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xs transition-all hover:shadow-md hover:border-[#E6A2B3]/20">
            <div className={`w-12 h-12 rounded-xl ${lightPinkBg} flex items-center justify-center ${accentPink} mb-6`}>
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">データと論理に基づく分析</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              直感や偶然だけに頼るのではなく、独自の客観的指標とカウンセリングデータを分析。あなたのライフプランに最適なパートナーシップへの道をロジカルに導き出します。
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xs transition-all hover:shadow-md hover:border-[#E6A2B3]/20">
            <div className={`w-12 h-12 rounded-xl ${lightPinkBg} flex items-center justify-center ${accentPink} mb-6`}>
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">医師監修のマインドケア</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              婚活に伴う精神的な不安やストレスをケアするため、現役の女性医師監修による心理的アプローチを導入。健やかで前向きな意思決定を常にサポートします。
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xs transition-all hover:shadow-md hover:border-[#E6A2B3]/20">
            <div className={`w-12 h-12 rounded-xl ${lightPinkBg} flex items-center justify-center ${accentPink} mb-6`}>
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">厳格な審査とプライバシー</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              各種証明書の提出を義務付けた会員限定のクローズドな環境をご用意。大阪梅田という好立地でありながら、個人のプライバシーは完全に守られた空間を提供します。
            </p>
          </div>
        </div>

      </section>

      {/* INTERACTIVE PERSONALITY TEST SECTION */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <p className={`${accentPink} text-xs font-bold tracking-widest uppercase mb-2`}>DIAGNOSIS TEST</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">30秒でわかる！ロジカル婚活診断</h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-3 max-w-md mx-auto leading-relaxed">
              あなたの隠れた恋愛の価値観や、医師監修アプローチがどのようにマッチするかをデータをもとに簡易診断します。
            </p>
            <div className={`w-12 h-0.5 ${accentPink} mx-auto mt-4 opacity-60`} />
          </div>

          <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#EEDAD6]/70 shadow-xs relative overflow-hidden">
            
            {currentQuestion <= 5 ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-bold ${accentPink} tracking-wider font-mono`}>
                    QUESTION 0{currentQuestion} / 05
                  </span>
                  <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${primaryPink} rounded-full transition-all duration-300`} 
                      style={{ width: `${(currentQuestion / 5) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                    {quizQuestions[currentQuestion as keyof typeof quizQuestions].title}
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {quizQuestions[currentQuestion as keyof typeof quizQuestions].answers.map((answer, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentQuestion(currentQuestion + 1)}
                      className="w-full text-left bg-white hover:bg-[#E6A2B3]/5 active:bg-[#E6A2B3]/10 border border-gray-200 hover:border-[#E6A2B3]/40 p-4 rounded-xl flex items-center justify-between group transition-all duration-200 shadow-xs"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-6 h-6 shrink-0 rounded-full border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-500 bg-gray-50 group-hover:border-[#E6A2B3] group-hover:bg-[#E6A2B3]/10 group-hover:text-[#D9889D] transition-colors">
                          {answer.label}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-700 font-medium group-hover:text-gray-900">
                          {answer.text}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#D9889D] group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-6">
                <div className={`w-12 h-12 rounded-full ${lightPinkBg} flex items-center justify-center mx-auto mb-4 ${accentPink}`}>
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">診断が完了しました！</h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed mb-8">
                  ご回答ありがとうございます。あなたに最適化された「ロジカル成婚カルテ」の構築準備が整いました。詳しい解説 and 分析レポートを受け取りましょう。
                </p>
                <a href="#contact" className={`inline-block ${primaryPink} hover:bg-[#D9889D] text-white font-bold px-8 py-4 rounded-full shadow-md shadow-[#E6A2B3]/20 transition-all`}>
                  無料相談でカルテを受け取る
                </a>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-gray-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[11px] text-gray-500 text-center sm:text-left leading-normal">
                ※診断結果の分析解説は、無料カウンセリング時にお一人ずつの個別データシートとしてお渡しいたします。
              </p>
              {currentQuestion > 1 && (
                <button 
                  onClick={() => setCurrentQuestion(1)}
                  className="text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors underline underline-offset-4 shrink-0 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  最初からやり直す
                </button>
              )}
            </div>

            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full border border-[#E6A2B3]/10 pointer-events-none" />
          </div>

        </div>
      </section>

      {/* --- CONTACT FORM SECTION --- */}
<section id="contact" className="py-24 lg:py-32 bg-[#FAF8F5] border-t border-gray-100 scroll-mt-16">
  <div className="max-w-3xl mx-auto px-4 sm:px-6">
    
    <div className="text-center mb-12">
      <p className={`${accentPink} text-xs font-bold tracking-widest uppercase mb-2`}>RESERVATION & CONTACT</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
        無料カウンセリング予約・お問い合わせ
      </h2>
      <p className="text-xs sm:text-sm text-gray-600 mt-3 max-w-md mx-auto leading-relaxed">
        完全予約制・プライバシー厳守。ご質問のみでもお気軽にお寄せください。
      </p>
      <div className={`w-12 h-0.5 ${accentPink} mx-auto mt-4 opacity-60`} />
    </div>

    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-[#EEDAD6]/40">
      {!formSubmitted ? (
        <form onSubmit={handleFormSubmit} className="space-y-6">
          
          {/* NAME FIELD */}
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-2 flex items-center gap-1.5">
              お名前 <span className="text-[10px] text-white bg-[#E6A2B3] px-1.5 py-0.5 rounded">必須</span>
            </label>
            <input 
              type="text" 
              required
              placeholder="山田 太郎"
              className="w-full text-sm bg-[#FAF8F5] border border-gray-200 focus:border-[#E6A2B3] focus:bg-white rounded-xl px-4 py-3 outline-none transition-all placeholder:text-gray-400"
            />
          </div>

          {/* EMAIL FIELD (New) */}
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-2 flex items-center gap-1.5">
              メールアドレス <span className="text-[10px] text-white bg-[#E6A2B3] px-1.5 py-0.5 rounded">必須</span>
            </label>
            <input 
              type="email" 
              required
              placeholder="example@email.com"
              className="w-full text-sm bg-[#FAF8F5] border border-gray-200 focus:border-[#E6A2B3] focus:bg-white rounded-xl px-4 py-3 outline-none transition-all placeholder:text-gray-400"
            />
          </div>

          {/* AGE & SEX FIELDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2 flex items-center gap-1.5">
                年齢 <span className="text-[10px] text-white bg-[#E6A2B3] px-1.5 py-0.5 rounded">必須</span>
              </label>
              <input 
                type="number" 
                required
                min="20"
                max="80"
                placeholder="35"
                className="w-full text-sm bg-[#FAF8F5] border border-gray-200 focus:border-[#E6A2B3] focus:bg-white rounded-xl px-4 py-3 outline-none transition-all placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2 flex items-center gap-1.5">
                性別 <span className="text-[10px] text-white bg-[#E6A2B3] px-1.5 py-0.5 rounded">必須</span>
              </label>
              <select 
                required
                className="w-full text-sm bg-[#FAF8F5] border border-gray-200 focus:border-[#E6A2B3] focus:bg-white rounded-xl px-4 py-3 outline-none transition-all text-gray-800"
              >
                <option value="" disabled selected>選択してください</option>
                <option value="male">男性</option>
                <option value="female">女性</option>
                <option value="other">その他</option>
              </select>
            </div>
          </div>

          {/* OCCUPATION FIELD (New) */}
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-2 flex items-center gap-1.5">
              ご職業 <span className="text-[10px] text-white bg-[#E6A2B3] px-1.5 py-0.5 rounded">必須</span>
            </label>
            <input 
              type="text" 
              required
              placeholder="医師、会社員、公務員など"
              className="w-full text-sm bg-[#FAF8F5] border border-gray-200 focus:border-[#E6A2B3] focus:bg-white rounded-xl px-4 py-3 outline-none transition-all placeholder:text-gray-400" 
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className={`w-full inline-flex items-center justify-center gap-2 ${primaryPink} hover:bg-[#D9889D] text-white font-bold py-4 rounded-xl shadow-md shadow-[#E6A2B3]/20 transition-all text-sm cursor-pointer`}
            >
              <span>この内容で送信する</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center py-12 space-y-3">
          <div className={`w-12 h-12 rounded-full ${lightPinkBg} flex items-center justify-center mx-auto ${accentPink}`}>
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">送信が完了いたしました</h3>
          <p className="text-sm text-gray-600 max-w-xs mx-auto">
            内容を確認の上、担当カウンセラーより2営業日以内にご連絡いたします。
          </p>
        </div>
      )}
    </div>
  </div>
</section>
    </main>
  );
}