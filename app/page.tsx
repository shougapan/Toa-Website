import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { Sparkles, CheckCircle2, ChevronDown, ChevronRight, BarChart3, Clock, Briefcase, Stethoscope, ClipboardCheck, ShieldAlert, HeartHandshake } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="w-full bg-[#FAF8F5] text-gray-800 antialiased selection:bg-[#E6A2B3]/30">
      
      {/* ============================================================
          1. HERO SECTION (キャッチコピー & 3つの強みカード)
         ============================================================ */}
 {/* ============================================================
          1. HERO SECTION (キャッチコピー & 3つの強みカード)
         ============================================================ */}
      <section className="relative w-full lg:h-screen bg-linear-to-br from-white via-[#FAF8F5] to-white overflow-hidden border-b border-gray-100">
        
        {/* 背景の環境光・オーナメント装飾 */}
        <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-[#E6A2B3]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-rose-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-none grid grid-cols-1 lg:grid-cols-12 min-h-[700px] lg:h-screen">
          
          {/* 左カラム: テキスト＆トップ3つの強みカード */}
          <div className="lg:col-span-7 flex flex-col justify-center px-4 sm:px-8 lg:pl-16 lg:pr-12 pt-6 sm:pt-10 lg:pt-8 pb-12 lg:pb-12 z-10 bg-linear-to-r from-white via-white to-transparent overflow-visible">
            <div className="w-full max-w-4xl overflow-visible">
              
              {/* 上部タグラベルのグループ */}
              <div className="flex flex-wrap items-center gap-2 mb-5 justify-center lg:justify-start">
                <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] text-white px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  <span>現役女医監修 × ロジカル成婚戦略</span>
                </div>
                <div className="inline-flex items-center gap-1 bg-white border border-[#EEDAD6] text-gray-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D9889D]" />
                  <span>知性と客観的データで、成婚の確率を高める</span>
                </div>
              </div>

              {/* メインキャッチコピー */}
              <div className="text-center lg:text-left mb-8 select-none relative">
                <h1 className="text-[#D9889D] text-xs sm:text-sm font-black tracking-widest uppercase mb-2 block">
                  Relationship Diagnosis
                </h1>

                {/* スクイーズしたテキスト（サブキャッチコピーとして追加） */}
                <p className="text-sm sm:text-base font-extrabold text-gray-700 mb-4 tracking-tight leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  現役女医監修×キャリア20年ベテランが仕掛ける<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9889D] to-[#b3566f] font-black">「最高峰の婚活プロデュース」</span>
                </p>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.3] lg:leading-[1.25] max-w-2xl mx-auto lg:mx-0">    
                  <span className="block mb-2 sm:mb-3">キャリアも、結婚も、</span>
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D9889D] to-[#b3566f]">
                    妥協しない。
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-[#E6A2B3]/25 to-transparent -z-10 rounded-full" />
                  </span>
                </h2>

                {/* 下矢印による視線誘導 */}
                <div className="mt-5 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3">
                  <p className="text-xs sm:text-sm text-gray-500 font-bold bg-[#FAF8F5] lg:bg-transparent border border-gray-100 lg:border-none px-4 py-2 lg:p-0 rounded-xl flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9889D]" />
                    戦略的ハイスペック婚活が選ばれる三つのポイント
                  </p>
                  <div className="w-6 h-6 rounded-full bg-[#E6A2B3]/10 flex items-center justify-center animate-bounce">
                    <ChevronDown className="w-3.5 h-3.5 text-[#D9889D]" />
                  </div>
                </div>
              </div>

              {/* 3つのプレミアムボックス */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4 lg:w-[130%] lg:max-w-none z-30 relative px-2 md:px-0">
                
                {/* 強み 1 */}
                <Link 
                  href="/why-us"
                  className="bg-white/85 backdrop-blur-xl rounded-2xl p-6 min-h-[170px] border border-white shadow-[0_15px_35px_rgba(230,162,179,0.25)] flex flex-col justify-between transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_25px_50px_rgba(230,162,179,0.4)] group block"
                >
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-wider text-white mb-3 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] px-3 py-1 rounded-lg shadow-sm">
                      <span className="opacity-80">POINT</span>
                      <span className="text-xs font-black border-l border-white/30 pl-1.5">01</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-gray-900 mb-2 tracking-tight leading-snug group-hover:text-[#D9889D] transition-colors">
                      現役女医のプロデュース
                    </h3>
                    <p className="text-[13px] text-gray-700 leading-relaxed font-bold">
                      女医監修×キャリア20年ベテランが仕掛ける「最高峰の婚活プロデュース」
                    </p>
                  </div>
                </Link>

                {/* 強み 2 */}
                <Link 
                  href="/why-us"
                  className="bg-white/85 backdrop-blur-xl rounded-2xl p-6 min-h-[170px] border border-white shadow-[0_15px_35px_rgba(168,85,247,0.18)] flex flex-col justify-between transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_25px_50px_rgba(168,85,247,0.3)] group block"
                >
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-wider text-white mb-3 bg-gradient-to-r from-purple-400 to-indigo-500 px-3 py-1 rounded-lg shadow-sm">
                      <span className="opacity-80">POINT</span>
                      <span className="text-xs font-black border-l border-white/30 pl-1.5">02</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-gray-900 mb-2 tracking-tight leading-snug group-hover:text-purple-600 transition-colors">
                      あなたの魅力を最大化
                    </h3>
                    <p className="text-[13px] text-gray-700 leading-relaxed font-bold">
                      出会った瞬さに『また会いたい』と思わせるさまざまな戦略をアドバイス
                    </p>
                  </div>
                </Link>

                {/* 強み 3 */}
                <Link 
                  href="/why-us"
                  className="bg-white/85 backdrop-blur-xl rounded-2xl p-6 min-h-[170px] border border-white shadow-[0_15px_35px_rgba(217,119,6,0.18)] flex flex-col justify-between transition-all duration-300 hover:bg-white hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_25px_50px_rgba(217,119,6,0.3)] group block"
                >
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-wider text-white mb-3 bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 rounded-lg shadow-sm">
                      <span className="opacity-80">POINT</span>
                      <span className="text-xs font-black border-l border-white/30 pl-1.5">03</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-gray-900 mb-2 tracking-tight leading-snug group-hover:text-amber-600 transition-colors">
                      男女２名のダブルサポート
                    </h3>
                    <p className="text-[13px] text-gray-700 leading-relaxed font-bold">
                      婚活サポート歴２０年のベテランカウンセラー×女医による多角的なサポートを提供
                    </p>
                  </div>
                </Link>

              </div>

            </div>
          </div>

          {/* 右カラム: メインビジュアル画像・実績バッジ */}
          <div className="relative lg:col-span-5 h-[450px] lg:h-full w-full overflow-hidden flex items-end">
            
            {/* 実績データフローティングバッジ */}
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

            {/* 当日予約アクティブピン */}
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
                className="object-[80%_center] lg:object-[60%_center] object-cover"
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
      </section>

      {/* ============================================================
          2. INTRODUCTION SECTION (なぜビジネスのような戦略が必要か)
         ============================================================ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_15px_50px_rgba(230,162,179,0.08)] border border-rose-100/40 relative overflow-hidden">
          
          <div className="text-center mb-10">
            <span className="text-xs font-black text-[#D9889D] tracking-widest uppercase bg-rose-50 px-3 py-1 rounded-md">The Logic</span>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-3 tracking-tight">
              恋愛や結婚に、ビジネスのような「戦略」が必要な理由
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                職場でもあなたは、目標達成のために<span className="text-gray-900 font-bold border-b-2 border-[#E6A2B3]/30 px-0.5">「現状分析」</span>や<span className="text-gray-900 font-bold border-b-2 border-[#E6A2B3]/30 px-0.5">「正しい計画」</span>を立ててきたはずです。実は、婚活も全く同じです。
              </p>
              <p className="bg-[#FAF8F5] p-4 rounded-xl border-l-4 border-amber-400 text-gray-700 text-sm">
                「いい人がいれば……」と運を天に任せるのは、<br />
                <span className="font-bold text-gray-900">ゴールのないプロジェクトを進めるようなもの</span>です。
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#FAF8F5] to-white rounded-2xl p-6 sm:p-8 border border-[#EEDAD6]/60 shadow-xs">
              <div className="flex items-center gap-2 mb-3 text-[#D9889D]">
                <Stethoscope className="w-5 h-5" />
                <span className="text-xs font-bold tracking-wider">現役女医が実践するアプローチ</span>
              </div>
              <p className="text-base sm:text-lg text-gray-900 font-black leading-relaxed mb-4">
                「徹底的な論理思考」と<br />「客観的なデータ分析」を応用。
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                あなたの魅力をデータに基づいて分析し、理想のお相手と出会うための「確実性の高いルート」を導き出します。私たちの具体的なアプローチの詳細は
                <Link href="/why-us" className="text-[#D9889D] font-bold underline hover:text-[#b3566f] ml-1 transition-colors">
                  コンセプト・カウンセラー紹介ページ
                </Link>
                をご覧ください。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          3. THREE REASONS SECTION (選ばれている3つの理由)
         ============================================================ */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <h3 className="text-xs font-black text-[#D9889D] tracking-widest uppercase mb-2">Our Features</h3>
            <p className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">選ばれている3つの理由</p>
            <div className="w-10 h-0.5 bg-[#D9889D] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 理由 1 */}
            <div className="bg-[#FAF8F5] rounded-2xl p-8 border border-transparent transition-all duration-300 hover:bg-white hover:border-rose-100 hover:shadow-[0_20px_45px_rgba(230,162,179,0.12)] group">
              <div className="w-12 h-12 rounded-xl bg-white text-[#D9889D] flex items-center justify-center shadow-xs mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black text-[#D9889D] tracking-widest block mb-1">REASON 01</span>
              <h4 className="text-base sm:text-lg font-black text-gray-900 mb-3 tracking-tight leading-snug">
                「感覚」に頼らない<br />データ主導のマッチング
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                相思相愛になりやすいお相手を厳選。客観的な指標を用いることで、ミスマッチのない理想的な出会いを提供します。
                <Link href="/support" className="text-[#D9889D] font-bold block mt-2 hover:underline">
                  料金・サービス詳細へ →
                </Link>
              </p>
            </div>

            {/* 理由 2 */}
            <div className="bg-[#FAF8F5] rounded-2xl p-8 border border-transparent transition-all duration-300 hover:bg-white hover:border-rose-100 hover:shadow-[0_20px_45px_rgba(230,162,179,0.12)] group">
              <div className="w-12 h-12 rounded-xl bg-white text-[#D9889D] flex items-center justify-center shadow-xs mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black text-[#D9889D] tracking-widest block mb-1">REASON 02</span>
              <h4 className="text-base sm:text-lg font-black text-gray-900 mb-3 tracking-tight leading-snug">
                仕事と婚活を両立できる<br />タイムパフォーマンス
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                無駄な時間を省き、仕事をしながらスタイリッシュに婚活。
                <Link href="/why-us" className="text-[#D9889D] font-bold inline hover:underline mx-0.5">
                  選ばれる理由
                </Link>
                でもある高効率な仕組みで、最短期間での納得の成婚を目指します。
              </p>
            </div>

            {/* 理由 3 */}
            <div className="bg-[#FAF8F5] rounded-2xl p-8 border border-transparent transition-all duration-300 hover:bg-white hover:border-rose-100 hover:shadow-[0_20px_45px_rgba(230,162,179,0.12)] group">
              <div className="w-12 h-12 rounded-xl bg-white text-[#D9889D] flex items-center justify-center shadow-xs mb-6 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black text-[#D9889D] tracking-widest block mb-1">REASON 03</span>
              <h4 className="text-base sm:text-lg font-black text-gray-900 mb-3 tracking-tight leading-snug">
                キャリアへの理解が深い<br />パートナーが見つかる
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                共働きや互いのライフスタイル、人生のビジョンを尊重し合えるハイレイヤーな出会いを提供します。まずはお気軽に
                <Link href="/contact" className="text-[#D9889D] font-bold inline hover:underline mx-0.5">
                  無料カウンセリング
                </Link>
                へお申し込みください。
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          4. MEDICAL APPROACH SECTION (3つの医療アプローチ)
         ============================================================ */}
      <section className="py-20 bg-linear-to-b from-white to-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 bg-[#D9889D]/10 text-[#D9889D] px-3 py-1 rounded-md text-xs font-bold tracking-wider mb-3">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Medical Method</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              成婚の確率を高める「3つの医療アプローチ」
            </h3>
            <p className="text-xs text-gray-500 mt-2 font-medium">根拠に基づき、最短で結果を出すためのドクターズ・プロセス</p>
          </div>

          <div className="space-y-6">
            
            {/* アプローチ 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100/80 shadow-xs flex flex-col sm:flex-row gap-6 items-start transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-[#D9889D] flex items-center justify-center shrink-0 font-bold text-lg">
                <ClipboardCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="text-[10px] font-black tracking-wider text-white bg-gray-900 px-2 py-0.5 rounded-xs">APPROACH 01</span>
                  <h4 className="text-base sm:text-lg font-black text-gray-900">【検査】独自の分析であなたの強みを可視化</h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                  客観的なデータを用いて、婚活市場における「あなたの最大の強み」を明確にします。主観に頼らないからこそ、自身の持つ本当の価値に気付くことができます。（具体的なプログラム内容は
                  <Link href="/support" className="text-[#D9889D] font-bold underline hover:text-[#b3566f] mx-0.5">
                    サービス・プランのご案内
                  </Link>
                  に掲載しています）
                </p>
              </div>
            </div>

            {/* アプローチ 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100/80 shadow-xs flex flex-col sm:flex-row gap-6 items-start transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-[#D9889D] flex items-center justify-center shrink-0 font-bold text-lg">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="text-[10px] font-black tracking-wider text-white bg-gray-900 px-2 py-0.5 rounded-xs">APPROACH 02</span>
                  <h4 className="text-base sm:text-lg font-black text-gray-900">【処方】課題をクリアにする的確なアドバイス</h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                  ボトルネックとなっている課題に対して、どうしたら状況を改善できるか具体的なステップを提案。あなたの魅力を最大化する明確な「処方箋」を提示します。
                </p>
              </div>
            </div>

            {/* アプローチ 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100/80 shadow-xs flex flex-col sm:flex-row gap-6 items-start transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-[#D9889D] flex items-center justify-center shrink-0 font-bold text-lg">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="text-[10px] font-black tracking-wider text-white bg-gray-900 px-2 py-0.5 rounded-xs">APPROACH 03</span>
                  <h4 className="text-base sm:text-lg font-black text-gray-900">【サポート】メンタルまで支える徹底的なサポート</h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                  医師ならではの心理学知見で、婚活に伴う不安やストレスをきめ細やかにケア。活動中のマインドを高いレベルで安定させ、ポジティブに進めるようフルサポートします。
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          5. CLOSING OUTRO SECTION (仕事も結婚も両方欲しい！)
         ============================================================ */}
      <section className="py-24 bg-gradient-to-br from-[#FAF8F5] via-white to-white text-center px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-50/30 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-black text-[#D9889D] tracking-widest uppercase block mb-3">Message for You</span>
          <h3 className="text-xl sm:text-3xl font-black text-gray-900 tracking-tight mb-8">
            【仕事も結婚も両方欲しい！】
          </h3>
          
          <div className="space-y-5 text-sm sm:text-base text-gray-700 font-bold leading-relaxed max-w-2xl mx-auto mb-12">
            <p>
              あなたが仕事で培ってきた決断力や論理力、誠実さなどは、<br />
              幸せな結婚を掴むための<span className="text-[#D9889D] font-black">強力な武器</span>になります。
            </p>
            <p className="text-gray-900 sm:text-lg font-black">
              キャリアも、これからの人生の幸福も、どちらも諦める必要はありません。
            </p>
            <p className="text-gray-500 font-medium text-xs sm:text-sm pt-4 border-t border-gray-100 max-w-md mx-auto">
              知性とデータを味方につけて、ハイスペックな異性や理解の深い一生モノのパートナーと出会う一歩を踏み出してみませんか？
              <Link href="/contact" className="text-[#D9889D] font-bold underline hover:text-[#b3566f] block mt-3">
                まずは無料面談であなたのお悩みをお聞かせください
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 追従型CTAコンテナのための下部余白 */}
      <div className="h-24 md:h-28" />

      {/* ============================================================
          6. STICKY CTA CONTAINER (画面下部・追従型コンテナ)
         ============================================================ */}
      <div className="fixed bottom-0 left-0 w-full md:w-auto md:bottom-6 md:left-6 z-50 px-4 pb-4 md:p-0 flex flex-col sm:flex-row gap-3 md:gap-4 items-center bg-linear-to-t from-white via-white/95 to-transparent md:bg-transparent pt-6 md:pt-0">
        
        {/* 1. WEB面談予約ボタン */}
        <Link 
          href="/contact" 
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] hover:from-[#D9889D] hover:to-rose-600 text-white font-extrabold px-6 lg:px-8 py-3.5 rounded-full shadow-2xl shadow-[#E6A2B3]/40 text-sm lg:text-base transition-all duration-300 transform scale-100 hover:scale-[1.03] text-center tracking-wide"
        >
          <span>無料相談の枠を予約する</span>
          <ChevronRight className="w-4 h-4 bg-white/20 rounded-full p-0.5 shrink-0" />
        </Link>
        
        {/* 2. 公式LINE相談ボタン */}
        <Link 
          href="https://line.me" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#06C755] hover:bg-[#05B34C] text-white font-extrabold px-6 lg:px-8 py-3.5 rounded-full shadow-2xl shadow-[#06C755]/30 text-sm lg:text-base transition-all duration-300 transform scale-100 hover:scale-[1.03] text-center tracking-wide"
        >
          <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 5.84 2 10.58c0 2.9 1.7 5.48 4.34 6.94-.17.58-.62 2.37-.7 2.73-.1.43.14.43.33.33.13-.08 2.12-1.44 2.95-2.03.7.2 1.43.3 2.17.3 5.52 0 10-3.84 10-8.58S17.52 2 12 2zm4.62 11.23h-1.46c-.14 0-.26-.12-.26-.26v-3.7c0-.14.12-.26.26-.26h1.46c.14 0 .26.12.26.26v.44c0 .14-.12.26-.26.26h-.94v.74h.94c.14 0 .26.12.26.26v.44c0 .14-.12.26-.26.26h-.94v.8h.94c.14 0 .26.12.26.26v.44c0 .15-.12.26-.26.26zm-2.88 0h-.44c-.14 0-.26-.12-.26-.26V9.8c0-.14.12-.26.26-.26h.44c.14 0 .26.12.26.26vNav.2.9h.26z"/>
          </svg>
          <span>LINEで気軽に相談してみる</span>
        </Link>

      </div>
    </div>
  );
}