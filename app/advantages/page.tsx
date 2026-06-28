"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  HelpCircle, 
  Heart, 
  ArrowRight, 
  ChevronRight, 
  Award,
  UserCheck,
  Briefcase,
  Home,
  AlertCircle,
  ShieldCheck
} from 'lucide-react';

export default function HighSpecStrategyPage() {
  // ナビゲーションのアンカースクロール用リファレンス
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    if (elementRef.current) {
      const offset = 70; // 固定ナビバーのバッファオフセット
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
    <div className="bg-[#FAF8F5] text-gray-950 min-h-screen pb-12 font-medium text-base w-full overflow-x-hidden">
      
      {/* ============================================================
          HERO BANNER HEADLINE (Full-Width Viewport)
          ============================================================ */}
      <div className="w-full pt-8 pb-6 text-center bg-white border-b border-gray-100 px-4">
        <div className="inline-flex items-center gap-1.5 bg-[#E6A2B3]/10 text-[#D9889D] px-3 py-1 rounded-full text-sm font-black tracking-widest uppercase mb-2">
          <Sparkles className="w-4 h-4" />
          <span>High-Spec Marriage Strategy</span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-snug tracking-tight w-full max-w-4xl mx-auto">
          ハイスペック男性との成婚を望む女性たちへ
        </h1>
        
        <div className="w-16 h-1 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] mx-auto mt-4 rounded-full" />
      </div>

      {/* ============================================================
          DYNAMIC TABLE OF CONTENTS INDEX (Full-Width Mobile)
          ============================================================ */}
      <div className="w-full mb-8 sm:px-4 sm:mt-6">
        <div className="bg-white w-full max-w-4xl mx-auto p-4 sm:p-5 shadow-[0_4px_20px_rgba(230,162,179,0.03)] border-y sm:border border-gray-200/50 sm:rounded-2xl">
          <h2 className="text-sm font-black text-gray-400 tracking-wider uppercase mb-2 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#D9889D]" />
            目次：選ばれる真の実績・戦略を読み解く
          </h2>
          
          <div className="space-y-1.5">
            <button 
              onClick={() => scrollToSection(section1Ref)}
              className="w-full text-left bg-[#FAF8F5] hover:bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center justify-between group transition-all"
            >
              <span className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9889D] shrink-0" />
                【成婚のヒント】なぜ、年収1000万超のエグゼクティブは「誰もが羨む美女」を断ったのか？
              </span>
              <span className="text-xs font-black text-[#D9889D] flex items-center gap-0.5 shrink-0 ml-2 group-hover:translate-x-1 transition-transform">
                戦略をみる <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button 
              onClick={() => scrollToSection(section2Ref)}
              className="w-full text-left bg-[#FAF8F5] hover:bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center justify-between group transition-all"
            >
              <span className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9889D] shrink-0" />
                女医からのメッセージ：持続可能なパートナーになるための客観的自己認識
              </span>
              <span className="text-xs font-black text-[#D9889D] flex items-center gap-0.5 shrink-0 ml-2 group-hover:translate-x-1 transition-transform">
                メッセージをみる <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================
          SECTION 1: THE REALITY OF EXECUTIVE MARRIAGE (Full-Width Mobile)
          ============================================================ */}
      <div ref={section1Ref} className="w-full mb-8 sm:px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* SECTION HEADER BLOCK */}
          <div className="bg-white w-full p-4 sm:p-6 shadow-xs border-y sm:border border-gray-100 sm:rounded-2xl">
            <span className="text-xs font-black text-[#D9889D] uppercase tracking-widest block mb-1">Marriage Hints</span>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug">
              【成婚のヒント】なぜ、年収1000万超のエグゼクティブは<br className="hidden sm:inline" />「誰もが羨む美女」を断ったのか？
            </h2>
            <div className="w-12 h-0.5 bg-[#E6A2B3] mt-2 mb-4" />
            
            <h3 className="text-base sm:text-lg font-black text-gray-800 leading-snug mb-3">
              第一線で戦うビジネスマンが、生涯の伴侶を選ぶときに「外見」より優先する3つの絶対条件
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              ハイスペックの男性が容姿端麗な若くて可愛い女性の申し出を断ったケースを、私たちは何度も経験してきました。
              「綺麗だから、若いから選ばれる」という安易な公式は、ハイスペック婚活の世界では通用しません。
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mt-3">
              仕事の最前線で大きな責任とプレッシャーを背負う有能なビジネスマンや経営者にとって、結婚は人生最大の「自分をゆだねる相手を決める決断」です。彼らが外見だけの美女を断り、最後に選ぶ女性の条件には、明確なパターンがあります。
            </p>
          </div>

          {/* CORE VALUE: 3 RESPECTS */}
          <div className="bg-white w-full p-4 sm:p-6 shadow-xs border-y sm:border border-gray-100 sm:rounded-2xl">
            <h3 className="text-base sm:text-lg font-black text-gray-900 flex items-center gap-1.5 border-b border-gray-100 pb-3 mb-4">
              <Award className="w-5 h-5 text-[#D9889D] shrink-0" />
              なぜ容姿だけでは選ばれないのか。第一線で戦う男性が求める「リスペクトの真実」
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
              彼らが求めているのは単なる「条件」や「外見の華やかさ」ではなく、以下の<span className="font-bold text-gray-900">『3つのリスペクト（尊敬と共感）』</span>のうち、どれか1つでも強烈に彼らの心を満たしているということです。女性に「すべてが完璧であること」は求めていません。自分のライフスタイルや価値観に合う「たった1つの何か」を持っている女性に、男性は最大の敬意と愛を払います。
            </p>

            {/* THREE BLOCKS */}
            <div className="space-y-4">
              
              {/* BLOCK 1 */}
              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-gray-100">
                <span className="inline-flex items-center gap-1 bg-[#D9889D]/10 text-[#D9889D] px-2.5 py-0.5 rounded-full text-xs font-black mb-2">
                  <UserCheck className="w-3.5 h-3.5" /> 条件 01
                </span>
                <h4 className="font-black text-base text-gray-900 mb-1.5">
                  【自分には無いものへのリスペクト】彼にない秀でた何かを女性が持っているか
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  高いステータスを持つ男性は、自分を盲目的に崇めたり収入に依存的な女性を警戒します。実際、マッチングアプリに登録したとしても職業や年収を大っぴらに記載している人は医療の職場でも少ないです。
                </p>
                <p className="text-sm text-gray-600 leading-relaxed text-justify mt-2">
                  彼らは、自分にはない経験や秀でた能力や内面を持つ女性を深くリスペクトします。自分とは違う何かを持っていて、常に新しい発見や価値観を与えてくれるお相手だからこそ、自分の世界は広がり、引き上げられ、一生飽きることのないリスペクトが生まれます。単なる『トロフィー（飾り）』としての美しさではなく、お換いの人生の可能性を2倍にする『最高のバディ』のような関係を求めています。
                </p>
              </div>

              {/* BLOCK 2 */}
              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-gray-100">
                <span className="inline-flex items-center gap-1 bg-[#D9889D]/10 text-[#D9889D] px-2.5 py-0.5 rounded-full text-xs font-black mb-2">
                  <Briefcase className="w-3.5 h-3.5" /> 条件 02
                </span>
                <h4 className="font-black text-base text-gray-900 mb-1.5">
                  【キャリアの共感リスペクト】同じ世界観で「戦う毎日」を理解し合えるか
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  社会の最前線にある独特の責任感、不規則な時間、そして高みを目指すからゆえの孤独。同じレベルのキャリアや高い志を持つ者同士だからこそ、言葉にしなくても『ONの自分』を深く共感し、協力しあ voice。
                </p>
                <p className="text-sm text-gray-600 leading-relaxed text-justify mt-2">
                  同じ世界を生きる同志としての絶対的な尊敬や安心が、二人の絆を強固にします。事実、同業種婚や似たフィールドの成婚が多いのもそのためです。
                </p>
              </div>

              {/* BLOCK 3 */}
              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-gray-100">
                <span className="inline-flex items-center gap-1 bg-[#D9889D]/10 text-[#D9889D] px-2.5 py-0.5 rounded-full text-xs font-black mb-2">
                  <Home className="w-3.5 h-3.5" /> 条件 03
                </span>
                <h4 className="font-black text-base text-gray-900 mb-1.5">
                  【プライベートの満足リスペクト】外の鎧を脱ぎ捨てて「心から安らげる家庭」を作れるか
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  社会的に成功すればするほど、家の中は本来の自分でいれる唯一の場所です。プライベートの時間を豊かに彩り、自立を持って精神的な満足と温かみをもたらしてくれる女性の存在に、男性は最大の敬意を払います。
                </p>
                <p className="text-sm text-gray-600 leading-relaxed text-justify mt-2">
                  家に帰ってまで「機嫌を取らなければいけない美女」や「感情の起伏が激しい相手」「信頼できない女性」「奪うだけの傲慢な女性」では、心身が休まりません。外での戦いを忘れ、ただの自分に戻って心からリラックスできる家庭経営の天才。それもまた、彼らが何よりも渇望する存在です。
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          SECTION 2: DOCTOR'S REALISTIC MESSAGE (Full-Width Mobile)
          ============================================================ */}
      <div ref={section2Ref} className="w-full mb-8 sm:px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-white to-[#FFF8FA] w-full p-4 sm:p-6 shadow-sm border-y sm:border border-pink-100/60 sm:rounded-3xl">
          
          {/* BADGE */}
          <div className="text-center mb-6">
            <span className="text-xs font-black text-[#D9889D] uppercase tracking-widest block mb-1">Message from Female Doctor</span>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              女医からのメッセージ
            </h2>
            <div className="w-12 h-0.5 bg-[#E6A2B3] mx-auto mt-2" />
          </div>

          {/* ESSENCE BODY */}
          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
            <p>
              個人の好みはありますが、やはり地位、内面、外見、エスコート力がそろったハイスペック男性は女性から非常に人気です。
            </p>
            <p>
              そんな彼らと真のパートナーになるにはどうしたらいいと思いますか？
            </p>
            
            <p className="font-black text-gray-900 text-base border-l-4 border-[#D9889D] pl-3 py-0.5">
              まず、第一に【選ばれる】というスタンスでは【選ばれません】
            </p>
            
            <p>
              もう少しわかりやすくいうと、<span className="font-bold text-gray-900 border-b-2 border-[#E6A2B3]">彼らの高いステータスに匹敵するレベルの何かが自分に無い限り、真のパートナーにはなれません。</span>
              たとえ、男性の気の迷いで選ばれたとしても長い結婚生活ではすぐに終わりが来てしまいます。
            </p>
            <p>
              選び選ばれる、お互い与え合う、補い合い、守りあえるかが、長く幸せを持続させるポイントです。つまりお相手に何かを与えることができなければ、選ぶことも選ばれることも難しいのです。
            </p>

            {/* REALISTIC WARNING BOX */}
            <div className="bg-red-50/60 p-4 rounded-xl border border-red-100 my-4 text-gray-900">
              <p className="font-black text-sm sm:text-base text-red-700 mb-1.5 flex items-center gap-1">
                <AlertCircle className="w-4 h-4 shrink-0" />
                持続可能なパートナーになるための「厳しい現実」
              </p>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                大阪梅田ドクターズ結婚相談所では、自分のもつ何かを何段も越えた【高望み】は基本、おすすめしていません。【持続可能なパートナー】になれないからです。
              </p>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed mt-2 font-bold">
                あまりに勘違いな自己認識でいらっしゃる場合、成婚は困難です。あなたの魅力を客観的に評価させていただき、対等な範囲であなたの希望を叶える「一段上のパートナー」と成婚するお手伝いをさせていただきます。
              </p>
            </div>

            <p>
              私達と一緒に自分を客観視しましょう。そして、決断力、謙虚さ、前向きな意思があればきっと道は開かれます。
            </p>
            <p>
              同じ時代にこうして過ごすのも何かのご縁。私達と一緒に頑張っていきたいという志をお持ちの賢明なあなたをお待ちしています。私達もまた、あなたと一緒に成長できるはずです。
            </p>
            
            <p className="font-bold text-gray-900 pt-2">
              よろしくお願いします。
            </p>
          </div>

        </div>
      </div>

      {/* ============================================================
          BOTTOM CLOSING CTA BOARD (Full-Width Mobile)
          ============================================================ */}
      <div className="w-full sm:px-4 mt-6">
        <div className="max-w-4xl mx-auto bg-gray-900 text-white w-full p-5 sm:p-8 text-center shadow-xl shadow-gray-900/10 relative overflow-hidden sm:rounded-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-[#D9889D]/10 to-transparent pointer-events-none" />
          
          <ShieldCheck className="w-7 h-7 text-[#E6A2B3] mx-auto mb-2 animate-pulse" />
          <h3 className="text-lg sm:text-xl font-black mb-1.5">プロの客観的な分析眼で、生涯のバディを見つける</h3>
          <p className="text-sm text-gray-400 w-full mx-auto mb-4 font-medium leading-relaxed text-justify sm:text-center px-2">
            一方的な高望みや表面的な条件パズルではなく、お互いをリスペクトし合える「持続可能な最高の出会い」へ。当相談所の分析力と伴走サポートで、あなたの本当の市場価値と魅力を最大限に引き出します。
          </p>

          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center w-full px-2">
            <Link 
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] text-white text-sm font-black px-6 py-3 rounded-xl transition-transform hover:scale-[1.02] shadow-lg shadow-[#E6A2B3]/20"
            >
              <span>客観的な成婚戦略を無料カウンセリングで相談する</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}