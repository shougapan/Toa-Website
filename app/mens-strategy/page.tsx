
"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ChevronRight, 
  TrendingUp, 
  ShieldCheck, 
  UserCheck, 
  MessageSquare, 
  Compass, 
  ArrowRight,
  Clock,
  Briefcase
} from 'lucide-react';

export default function MensStrategyPage() {
  const phase1Ref = useRef<HTMLDivElement>(null);
  const phase2Ref = useRef<HTMLDivElement>(null);
  const phase3Ref = useRef<HTMLDivElement>(null);

  const scrollToRef = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    if (elementRef.current) {
      const offset = 70; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = elementRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#FAF8F5] text-gray-950 min-h-screen pb-16 font-medium text-base w-full overflow-x-hidden">
      
      {/* ============================================================
          HERO BANNER HEADLINE (Full-Width Viewport)
          ============================================================ */}
      <div className="w-full pt-12 pb-10 text-center bg-slate-900 text-white border-b border-gray-800 px-4 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#D9889D]/10 to-transparent pointer-events-none" />
        
        <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-xs text-[#E6A2B3] px-3.5 py-1 rounded-full text-sm font-black tracking-widest uppercase mb-4">
          <Sparkles className="w-4 h-4" />
          <span>Exclusive Strategy for Men</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-snug tracking-tight w-full max-w-4xl mx-auto">
          格上女性を射止めたい30代男性のあなたへ。
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mt-3 font-bold max-w-2xl mx-auto">
          30代だからこそ、妥協せず勝ちに行く。スペックの壁を越え、理想の女性を射止める「男のための最速攻略戦略」
        </p>
        
        <div className="w-20 h-1 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] mx-auto mt-6 rounded-full" />
      </div>

      {/* ============================================================
          DYNAMIC NAVIGATION INDEX (Full-Width Mobile)
          ============================================================ */}
      <div className="w-full mb-10 sm:px-4 sm:mt-8">
        <div className="bg-white w-full max-w-4xl mx-auto p-5 sm:p-6 shadow-xs border-y sm:border border-gray-200/50 sm:rounded-2xl">
          <h2 className="text-sm font-black text-gray-400 tracking-wider uppercase mb-3 flex items-center gap-2">
            <Compass className="w-4 h-4 text-slate-800" />
            3大攻略フェーズ・ショートカット
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button 
              onClick={() => scrollToRef(phase1Ref)}
              className="text-left bg-[#FAF8F5] hover:bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center justify-between group transition-all"
            >
              <span className="text-sm sm:text-base font-bold text-gray-900">PHASE 01: プロフィール改造</span>
              <ChevronRight className="w-4 h-4 text-[#D9889D] group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button 
              onClick={() => scrollToRef(phase2Ref)}
              className="text-left bg-[#FAF8F5] hover:bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center justify-between group transition-all"
            >
              <span className="text-sm sm:text-base font-bold text-gray-900">PHASE 02: デート完全攻略</span>
              <ChevronRight className="w-4 h-4 text-[#D9889D] group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button 
              onClick={() => scrollToRef(phase3Ref)}
              className="text-left bg-[#FAF8F5] hover:bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center justify-between group transition-all"
            >
              <span className="text-sm sm:text-base font-bold text-gray-900">PHASE 03: コミュニケーション</span>
              <ChevronRight className="w-4 h-4 text-[#D9889D] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================
          MAIN MANIFESTO CONTAINER (Full-Width Mobile & Large Font)
          ============================================================ */}
      <div className="w-full mb-10 sm:px-4">
        <div className="max-w-4xl mx-auto bg-white w-full p-5 sm:p-8 shadow-xs border-y sm:border border-gray-100 sm:rounded-2xl">
          <span className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-widest block mb-1.5">The Market Reality</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-snug tracking-tight">
            「この年齢になったからこそ、もう絶対に妥協したくない」<br />そう決意したあなたへ。
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-slate-800 to-slate-600 mt-3 mb-6 rounded-full" />
          
          <div className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify space-y-4 font-medium">
            <p>
              「自分の年収や外見は平均的。だから、ワンランク上の理想の女性（キャリア女性や人気の美女）は高望みかな……」と、諦める必要はありません。
            </p>
            <p className="font-black text-gray-950 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
              正直にお伝えします。現在の結婚相談所において、30代前半の真面目な男性は、圧倒的な「売り手市場」です。
            </p>
            <p>
              市場のボリュームゾーンは<span className="font-bold text-gray-900 border-b-2 border-[#E6A2B3]">「男性4：女性6」</span>。普通の会社員男性でも、驚くほどチャンスが多い環境が整っています。ただし、何の努力もせずに「格上のモテ女性」を射止められるほど、婚活市場は甘くありません。
            </p>
            <p>
              真剣だからこそ、彼女たちは男性の「本質」を驚くほど冷徹に見抜きます。だからこそ、大阪梅田ドクターズ結婚相談所ではあなたの理想を下げさせるようなことは一切しません。
            </p>
            <p className="text-xl sm:text-2xl font-black text-slate-900 pt-2 leading-tight">
              「理想の相手から選ばれるために、現役女医の心理分析のもと、あなたの持つポテンシャルをどう臨床的（clinical）に開花させるか」
            </p>
            <p>
              そのためのオーダーメイドの攻略作戦を徹底的に立てます。20年の最前線でハイクラスな成婚をデザインしてきたベテランカウンセラーが、あなたの<span className="font-bold text-gray-900 bg-rose-50/60 px-1 text-gray-950">「最高峰の戦略参謀（頼れる兄貴）」</span>となり、あなたの外見・立ち振る舞い・会話術を、選ばれる水準まで引き上げます。
            </p>
            <p>
              現在の30代男性は、「仕事のプロジェクトと同じように、人生のパートナー探しもプロに任せて最短で終わらせる」というスマートな目的で入会されています。会社の信頼できる先輩に相談に行くような安心感で、あなたの『最高の理想』を私たちにぶつけてください。
            </p>
            <p className="font-black text-gray-950 text-lg sm:text-xl pt-2 text-[#D9889D]">
              人生の大きな節目に立ち、強い覚悟とプライドを持って一歩を踏み込むあなたを、私たちは熱意を持ってサポートさせていただきます。
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================
          THE THREE STRATEGIC PHASES (Full-Width Mobile & Large Font)
          ============================================================ */}
      <div className="w-full mb-10 sm:px-4">
        <div className="max-w-4xl mx-auto bg-white w-full p-5 sm:p-8 shadow-xs border-y sm:border border-gray-100 sm:rounded-2xl">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-4 mb-6">
            <span className="w-2.5 h-5 bg-slate-900 rounded-xs shrink-0" />
            【サポート内容（3大戦略）】
          </h3>

          <div className="space-y-8">
            
            {/* PHASE 1 */}
            <div ref={phase1Ref} className="bg-[#FAF8F5] p-5 sm:p-6 rounded-xl border border-gray-100 scroll-mt-20">
              <span className="bg-slate-900 text-white text-xs sm:text-sm font-black px-3 py-1 rounded-sm inline-block mb-3">
                PHASE 01
              </span>
              <h4 className="font-black text-lg sm:text-xl text-gray-900 mb-3">
                プロフィール劇的改造（現役女医監修）
              </h4>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                量産型の自己紹介文は、ターゲット層の目には留まりません。現役女医監修のもと、あなたの職歴、年収、趣味の背景にある「誠実さと将来性」をあぶり出し、聡明な女性が「この人の隣にいたい」と評価する<span className="font-bold text-gray-900">【プレミアムプロフィール】</span>を作成します。
              </p>
            </div>

            {/* PHASE 2 */}
            <div ref={phase2Ref} className="bg-[#FAF8F5] p-5 sm:p-6 rounded-xl border border-gray-100 scroll-mt-20">
              <span className="bg-[#D9889D] text-white text-xs sm:text-sm font-black px-3 py-1 rounded-sm inline-block mb-3">
                PHASE 02
              </span>
              <h4 className="font-black text-lg sm:text-xl text-gray-900 mb-3">
                デート完全攻略（お相手別・オーダーメイド設計）
              </h4>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                初対面で「いい人だけど、興味がわかない」と判断されてしまう男性がいます。洗練されたデート場所の選定、スマートな所作、目線の配り方、知性が滲み出る会話のテンポまで、狙う女性のタイプに合わせて事前にシミュレーションを徹底します。
              </p>
            </div>

            {/* PHASE 3 */}
            <div ref={phase3Ref} className="bg-[#FAF8F5] p-5 sm:p-6 rounded-xl border border-gray-100 scroll-mt-20">
              <span className="bg-slate-900 text-white text-xs sm:text-sm font-black px-3 py-1 rounded-sm inline-block mb-3">
                PHASE 03
              </span>
              <h4 className="font-black text-lg sm:text-xl text-gray-900 mb-3">
                コミュニケーション完全ナビゲート（20年ベテラン直伝）
              </h4>
              <div className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify space-y-3">
                <p>
                  交際初期の段階において、メッセージの頻度や文面1つで関係が終了になるケースは少なくありません。相手の関心を引き続ける「適切な間隔」「温度感」「次につなげるキラーワード」を、ベテランカウンセラーがこれまでの成婚データからリアルタイムでバックアップ。
                </p>
                <p className="font-bold text-gray-950 border-l-2 border-[#D9889D] pl-3 py-0.5">
                  婚活における連絡は、減点を防ぐ「リスクマネジメント」が最重要です。そのプロの技を伝授します。
                </p>
                <p>
                  またお見合いやデートでの対話スキルでは、単なる雑談ではなく、短時間で「この人と未来を築きたい」と思わせる会話＆エスコート術を伝授。あなたの魅力と価値を最高値までチューニングし、平均スペックからでもワンランク上の女性を射止めるお手伝いをさせていただきます。
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ============================================================
          REASONS TO CHOOSE (Full-Width Mobile & Large Font)
          ============================================================ */}
      <div className="w-full mb-10 sm:px-4">
        <div className="max-w-4xl mx-auto bg-white w-full p-5 sm:p-8 shadow-xs border-y sm:border border-gray-100 sm:rounded-2xl">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3">
            スマートな30代男性が、大阪梅田ドクターズ結婚相談所を選ぶ理由
          </h3>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
            当相談所に在籍する30代男性の多くは、「自分の時間を最も価値あるもの」と考える合理的なビジネスパーソンです。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#FAF8F5] p-5 rounded-xl border border-gray-100 flex gap-4 items-start">
              <div className="p-3 bg-slate-900 text-white rounded-lg shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-black text-base sm:text-lg text-gray-950 mb-1">
                  タイムパフォーマンス（タイパ）の最大化
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  結婚の意思が100%ある女性とだけ出会うため、時間のロスがありません。
                </p>
              </div>
            </div>

            <div className="bg-[#FAF8F5] p-5 rounded-xl border border-gray-100 flex gap-4 items-start">
              <div className="p-3 bg-[#D9889D] text-white rounded-lg shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-black text-base sm:text-lg text-gray-950 mb-1">
                  「男磨き」の自己投資としての婚活
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  ここで身につく「女性に選ばれるコミュニケーション能力や洗練された立ち振る舞い」は、そのまま仕事の商談やマネジメント、今後の人生のあらゆる場面で一生モノの武器になります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          DYNAMIC ACTION AREA / LINK DESTINATION (Full-Width Mobile)
          ============================================================ */}
      <div className="w-full sm:px-4 mt-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-950 to-slate-900 text-white w-full p-6 sm:p-10 text-center shadow-xl relative overflow-hidden sm:rounded-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D9889D]/15 to-transparent pointer-events-none" />
          
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-xs mb-4">
            <ShieldCheck className="w-6 h-6 text-[#E6A2B3]" />
          </div>

          <h3 className="text-xl sm:text-2xl font-black mb-3 tracking-tight">
            あなたのプライドと熱意に、私たちは全力で応えます
          </h3>
          
          <p className="text-base sm:text-lg text-gray-300 w-full max-w-2xl mx-auto mb-8 font-medium leading-relaxed text-justify sm:text-center px-1">
            信頼できるビジネスの先輩に、今後のキャリア戦略を相談しに行くような感覚で、まずは私たちのドアを叩いてください。最高峰の戦略参謀と共に、最短期間で理想を現実に変えましょう。
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full px-1">
            <Link 
              href="/why-us" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] text-white text-base sm:text-lg font-black px-8 py-4 rounded-xl transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-[#E6A2B3]/30 active:scale-[0.98]"
            >
              <span>大阪梅田ドクターズ結婚相談所が選ばれる理由</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}