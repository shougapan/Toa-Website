"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  HelpCircle, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Zap, 
  UserCheck, 
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  Eye,
  Heart
} from 'lucide-react';

export default function SupportPage() {
  // Navigation section triggers for the anchor scrolling layout
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    if (elementRef.current) {
      const offset = 90; // Fixed navbar buffer offset
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
    <div className="bg-[#FAF8F5] text-gray-950 min-h-screen  pb-20 font-medium">
      
      {/* ============================================================
          HERO BANNER HEADLINE
          ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-12 pb-10 text-center">
        <div className="inline-flex items-center gap-1.5 bg-[#E6A2B3]/10 text-[#D9889D] px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Premium Concierge Support</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-[1.4] tracking-tight max-w-5xl mx-auto">
          「誰に申し込めばいい？」など婚活の悩みと不安をすべて解消！<br className="hidden md:inline" />
          20年の他社裏連携と医師の分析眼で、本当に会えるお相手への「申し込み代行」まで特別サポート
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] mx-auto mt-6 rounded-full" />
        
        <p className="max-w-3xl mx-auto mt-6 text-sm sm:text-base text-gray-700 leading-relaxed">
          大阪梅田結婚相談所で「誰に申し込めばいいか分からない」「プロフィールの見方が分からない」とお悩みではありませんか？当相談所では、データだけに頼らない仲人型ならではの<span className="font-bold text-gray-900 border-b-2 border-[#E6A2B3]">【技あり！特別サポート紹介】</span>で、あなたの婚活の悩みを丸ごと解決します！
        </p>
      </div>

      {/* ============================================================
          DYNAMIC TABLE OF CONTENTS INDEX
          ============================================================ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(230,162,179,0.03)] border border-gray-200/50">
          <h2 className="text-sm font-black text-gray-400 tracking-wider uppercase mb-4 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#D9889D]" />
            目次：お悩みから解決策を見つける
          </h2>
          
          <div className="space-y-3">
            <button 
              onClick={() => scrollToSection(section1Ref)}
              className="w-full text-left bg-[#FAF8F5] hover:bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center justify-between group transition-all"
            >
              <span className="text-xs sm:text-sm font-bold text-gray-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9889D]" />
                結婚相談所で「誰に申し込めばいいか分からない」婚活の悩みを解決！
              </span>
              <span className="text-xs font-black text-[#D9889D] flex items-center gap-1 shrink-0 ml-4 group-hover:translate-x-1 transition-transform">
                解決法をみる <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button 
              onClick={() => scrollToSection(section2Ref)}
              className="w-full text-left bg-[#FAF8F5] hover:bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center justify-between group transition-all"
            >
              <span className="text-xs sm:text-sm font-bold text-gray-900 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9889D]" />
                「身元も人柄もよくわかっている安心な人」を紹介してほしい
              </span>
              <span className="text-xs font-black text-[#D9889D] flex items-center gap-1 shrink-0 ml-4 group-hover:translate-x-1 transition-transform">
                解決法をみる <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <div className="p-4 rounded-xl bg-gray-50/50 border border-dashed border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 opacity-80">
              <div className="space-y-1">
                <span className="inline-block bg-gray-200 text-gray-600 text-[10px] font-black px-2 py-0.5 rounded-sm">その他のお悩み</span>
                <p className="text-xs sm:text-sm font-bold text-gray-600">
                  ・誰もがうらやむハイステ男女を紹介して欲しい / ・理想のお相手はお見合い不成立 / ・仮交際にならない
                </p>
              </div>
              <Link 
                href="/#contact" 
                className="text-xs font-black text-gray-900 flex items-center gap-1 shrink-0 hover:underline"
              >
                詳しく相談する <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          SECTION 1: BACKSTAGE DECODING & APPLICATION PROXY
          ============================================================ */}
      <div ref={section1Ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-10">
          <span className="text-xs font-black text-[#D9889D] uppercase tracking-widest block mb-2">Problem Breakdown 01</span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            検索画面の「誰に申し込めばいいか迷う」原因と、一人でボタンを押せない不安
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-xl mx-auto">
            そもそも誰に申し込めばいいのかわからない、プロフィールの見方が分からないという婚活あるあるの悩みを解決します。
          </p>
        </div>

        {/* SOLUTION INTRO TRAY */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-gray-100 mb-8">
          <div className="bg-emerald-50/50 text-emerald-900 p-4 rounded-2xl border border-emerald-100 mb-6 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-black">【解決法】もう検索画面で迷わない！あなたの代わりに「最高の1人」へ手続きする【申し込み代行システム】</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            医師の審美眼とベテランカウンセラーの経験で、婚活の迷いや不安からあなたを解放します。当相談所は、ただの「申し込み代行」はいたしません。同じ条件の候補者の中から、医師の分析力とベテランカウンセラーのデータリサーチに基づき、<span className="font-bold text-gray-900">あなたが本当に会うべき人を仕分けしてお相手を選び抜き、申し込み手続きを代行</span>します。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#FAF8F5] p-4 rounded-xl border border-gray-100 text-xs text-gray-600">
              「同じ年収、年齢なのに、他の細かいパラメータが少しずつ違って、誰がベストかわからない。」
            </div>
            <div className="bg-[#FAF8F5] p-4 rounded-xl border border-gray-100 text-xs text-gray-600">
              「プロフィールの自己PRはみんな良く見えて、本当の着眼点（見るべきポイント）が分からない」
            </div>
            <div className="bg-[#FAF8F5] p-4 rounded-xl border border-gray-100 text-xs text-gray-600">
              「せっかく申し込んでも、お相手の『検索画面には載っていない本音の条件』に引っかかってお断りされる」
            </div>
          </div>
        </div>

        {/* EYE OF THE PROFESSIONAL: DETAILED BREAKDOWN */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.02)] border border-gray-100 space-y-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-3 py-1 rounded-md text-xs font-black uppercase mb-4">
              <span>Method 1</span>
            </div>
            <h3 className="text-lg font-black text-gray-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#D9889D]" />
              【プロの着眼点】文字の裏を見抜く20年の経験と医師の分析眼
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              プロフィールの見方にはコツがあります。同じ年収・同じ職業でも、書き方ひとつでお相手の本当の価値観や性格を見抜きます。他社カウンセラーが代筆した素晴らしい紹介文の裏に隠されたリアルを精査します。
            </p>
          </div>

          {/* TWO-COLUMN PROFILE DECODER GRID */}
          <div className="space-y-4">
            <div className="bg-amber-50/40 text-amber-900 px-4 py-2.5 rounded-xl border border-amber-100/60 text-xs flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>下記はあくまでもデータ分析上の可能性の一例であり、すべてのお相手に必然的に当てはまるものではありません。</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              
              {/* CASE 1 */}
              <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-xs">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 font-bold text-xs text-gray-500">事例 1：紹介文の建前と本音</div>
                <div className="p-4 space-y-3 text-xs sm:text-sm">
                  <div className="bg-[#FAF8F5] p-3 rounded-lg"><span className="font-black text-gray-400 block text-[11px] uppercase mb-0.5">紹介文（建前）</span>「頼りがいがあって、意見をハキハキしゃべる男らしい方です」</div>
                  <div className="bg-rose-50/30 p-3 rounded-lg border border-rose-100/40"><span className="font-black text-rose-600 block text-[11px] uppercase mb-0.5">実際（本音の可能性）</span>自分の話ばかりで、「人の話をあまり聞かない」頑固な一面があることも。</div>
                  <p className="text-xs font-bold text-gray-800 pt-1">
                    <span className="text-[#D9889D]">◆ 仲人の連携リサーチ：</span> 他社カウンセラーに「普段の会員同士の会話での様子」を裏取りし、本当に包容力があるのか、ただの自己中心的（オレ様気質）なのかを事前に見極めます。
                  </p>
                </div>
              </div>

              {/* CASE 2 */}
              <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-xs">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 font-bold text-xs text-gray-500">事例 2：優しさの裏にある落とし穴</div>
                <div className="p-4 space-y-3 text-xs sm:text-sm">
                  <div className="bg-[#FAF8F5] p-3 rounded-lg"><span className="font-black text-gray-400 block text-[11px] uppercase mb-0.5">紹介文（建前）</span>「お相手の意見を尊重してくれる、優しくて穏やかな方です」</div>
                  <div className="bg-rose-50/30 p-3 rounded-lg border border-rose-100/40"><span className="font-black text-rose-600 block text-[11px] uppercase mb-0.5">実際（本音の可能性）</span>「優柔不断でデートの場所すらリードしてくれない」タイプであるケース。</div>
                  <p className="text-xs font-bold text-gray-800 pt-1">
                    <span className="text-[#D9889D]">◆ 仲人の連携リサーチ：</span> 「優しい」が「主体性のなさ」になっていないか、お相手のカウンセラーに「お見合いの段取りを自分でスムーズにできる方ですか？」と確認します。
                  </p>
                </div>
              </div>

              {/* CASE 3 */}
              <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-xs">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 font-bold text-xs text-gray-500">事例 3：自立の裏にある落とし穴</div>
                <div className="p-4 space-y-3 text-xs sm:text-sm">
                  <div className="bg-[#FAF8F5] p-3 rounded-lg"><span className="font-black text-gray-400 block text-[11px] uppercase mb-0.5">紹介文（建前）</span>「精神的・経済的に自立しており、ご自身の世界や趣味を大切にされています」</div>
                  <div className="bg-rose-50/30 p-3 rounded-lg border border-rose-100/40"><span className="font-black text-rose-600 block text-[11px] uppercase mb-0.5">実際（本音の可能性）</span>自分のライフスタイルが完成しすぎていて、「結婚しても生活リズムを変える気がない、他人が入る隙間がない」状態。</div>
                  <p className="text-xs font-bold text-gray-800 pt-1">
                    <span className="text-[#D9889D]">◆ 仲人の連携リサーチ：</span> お相手の「隠れた希望条件」として「週末は別々に過ごしたい」などの極端な本音がないか、水面下でリサーチします。
                  </p>
                </div>
              </div>

              {/* CASE 4 */}
              <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-xs">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 font-bold text-xs text-gray-500">事例 4：家庭的の裏にある落とし穴</div>
                <div className="p-4 space-y-3 text-xs sm:text-sm">
                  <div className="bg-[#FAF8F5] p-3 rounded-lg"><span className="font-black text-gray-400 block text-[11px] uppercase mb-0.5">紹介文（建前）</span>「料理や掃除がプロ並み！とても几帳面で家庭的な女性です」</div>
                  <div className="bg-rose-50/30 p-3 rounded-lg border border-rose-100/40"><span className="font-black text-rose-600 block text-[11px] uppercase mb-0.5">実際（本音の可能性）</span>家事へのこだわりが強すぎて、「パートナーのやり方に細かくダメ出しをする、マイルールが厳しすぎる」完璧主義者。</div>
                  <p className="text-xs font-bold text-gray-800 pt-1">
                    <span className="text-[#D9889D]">◆ 仲人の連携リサーチ：</span> ただ家庭的なだけでなく、お相手に対して「大雑把さも許容できる柔軟性があるか」を仲人同士の連携で探ります。
                  </p>
                </div>
              </div>

            </div>
          </div>

          <hr className="border-gray-100" />

          {/* METHOD 2 & 3 SUBSECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-3 py-1 rounded-md text-xs font-black uppercase">
                <span>Method 2</span>
              </div>
              <h4 className="font-black text-base text-gray-900">【秘匿情報】プロフィール検索には絶対に載らない「お相手の隠れた希望条件」を確認</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                実は、多くの会員様が「プロフィールには書けないけれど、譲れない隠れた希望条件（例：お相手に望む年齢、子供が欲しいかどうか、将来の実家との距離感、生活や居住地のこだわり）」を持っています。キャリアで築いた他社カウンセラーとの深いパイプから、この「画面には出ない本音の条件」を事前に直接引き出します。
              </p>
            </div>

            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#D9889D] text-white px-3 py-1 rounded-md text-xs font-black uppercase">
                <span>Method 3</span>
              </div>
              <h4 className="font-black text-base text-gray-900">【打率の高さ】お見合いのプロがお相手の「隠れた希望」に合致しているか確認して申し込みます</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                例えば、20代女性を希望している40代男性に同世代の40代女性が申し込んでもお見合い成立はほぼしません。大阪梅田結婚相談所では、他社とのカウンセラー同士・仲人の連携情報により、お相手の隠れた希望条件に、あなたがマッチしているかを事前確認して申し込み代行します。だからこそ、無駄な申し込みであなたが傷つくことはなく、お見合いの成立確率が劇的に跳ね上がるのです。
              </p>
            </div>
          </div>

          {/* BRAND ASSURANCE BLOCK */}
          <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-gray-100 text-xs sm:text-sm text-gray-700 leading-relaxed font-bold">
            当社【大阪梅田結婚相談所】では、女性医師の客観的な分析眼と、キャリア20年のベテランカウンセラーが、他社相談所との深いパイプからこの裏情報を直接引き出します。あなたが「どこをポイントにして選べばハズレがないか」を明確にアドバイスいたします。
          </div>
        </div>
      </div>

      {/* ============================================================
          SECTION 2: INTERNAL HIGH-CONVERSION CLUB INTRODUCTION
          ============================================================ */}
      <div ref={section2Ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-10">
          <span className="text-xs font-black text-[#D9889D] uppercase tracking-widest block mb-2">Solution Framework 02</span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            検索画面から選ぶより「身元も人柄も100%わかっている安心な人」を紹介してほしいあなたへ
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-xl mx-auto">
            医師の分析眼と20年の実績で繋ぐ【特別な自社会員紹介】システム
          </p>
        </div>

        {/* CORE PLATFORM BENEFITS */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_12px_40px_rgba(230,162,179,0.04)] border border-white">
          <div className="bg-rose-50 text-[#D9889D] p-4 rounded-2xl border border-rose-100/60 mb-8">
            <p className="text-xs sm:text-sm font-black text-center flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              自社だけの解決策：システムだけに頼らず、誰よりもよく知っている「自社の優秀な会員様」同士をマッチング
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* VALUE CARD 1 */}
            <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-white shadow-xs text-[#D9889D] flex items-center justify-center font-black text-xs mb-3">01</div>
                <h3 className="font-black text-sm sm:text-base text-gray-900 mb-2">【超・最高効率】お互いの「人柄・本音」を100%把握</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  プロフィールに「頼りがいがあってハキハキしゃべる」と書かれていても本当の優しさや聞き上手な面は他社の人には分かりません。当社の自社会員様であれば、日頃の徹底した面談を通して「文字の裏にある本当の結婚観」を完全に把握しているため、ハズレのない紹介が可能です。
                </p>
              </div>
            </div>

            {/* VALUE CARD 2 */}
            <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-white shadow-xs text-[#D9889D] flex items-center justify-center font-black text-xs mb-3">02</div>
                <h3 className="font-black text-sm sm:text-base text-gray-900 mb-2">【スピード成婚】調整やフィードバックが「秒速」</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  お見合いの調整や、デート後のフィードバック、お相手が今どう思っているかの本音確認まで、すべて当社の社内で完結します。他社を挟まないため、「お相手も好印象を持っています」「次はこういうデートがおすすめ」といった連携が驚くほどスムーズに進み、タイムラグやすれ違いをゼロにします。
                </p>
              </div>
            </div>

            {/* VALUE CARD 3 */}
            <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-white shadow-xs text-[#D9889D] flex items-center justify-center font-black text-xs mb-3">03</div>
                <h3 className="font-black text-sm sm:text-base text-gray-900 mb-2">【特別な安心感】厳選された素晴らしい会員ネットワーク</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  当相談所には、女性医師のネットワークやベテランの口コミを頼りに、身元が確かで、社会的地位や人柄も素晴らしい会員様が多数在籍しています。この「自社内の優良な特別ネットワーク」を最優先で活用し、対面で相談しながら安全に申し込みを代行できることこそが当社の強みです。
                </p>
              </div>
            </div>

          </div>

          {/* COMPLIANCE FOOTNOTE */}
          <div className="mt-8 pt-4 border-t border-gray-100 text-center">
            <p className="text-[11px] font-bold text-gray-400 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-gray-300" />
              ※自社内紹介に関して個人情報の厳守・プライバシー保護の管理体制は必ず徹底・遵守しています。
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================
          BOTTOM CLOSING CTA BOARD
          ============================================================ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-gray-900 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl shadow-gray-900/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-[#D9889D]/10 to-transparent pointer-events-none" />
          
          <Heart className="w-8 h-8 text-[#E6A2B3] mx-auto mb-4 animate-pulse" />
          <h3 className="text-xl sm:text-2xl font-black mb-3">もう、検索画面のデータ迷路で悩む必要はありません</h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
            20年の経験が誇る他社カウンセラー連携の裏情報リサーチと、確かな身元の自社内限定マッチング。あなたの理想に直撃する、失敗のないスマートな婚活へシフトしましょう。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] text-white text-sm font-black px-8 py-4 rounded-xl transition-transform hover:scale-[1.02] shadow-lg shadow-[#E6A2B3]/20"
            >
              <span>無料カウンセリングで「特別サポート」の詳細を聞く</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}