"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import femaleAdvisor from "@/public/femaleAdvisor.jpg";
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

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "ハイスペック男性と結婚する方法",
//   description:
//     "大阪梅田で医師やハイスペック男性との結婚を叶えるためのハイクラス婚活戦略。エグゼクティブに選ばれるために必要な「3つのリスペクト」とは？女医の視点から、最短スピードで成婚へと導き、その後も持続可能な関係を保つための具体的な条件を徹底解説します。",
//   alternates: {
//     canonical: "/advantages",
//   },
// };

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
    <div className="bg-[#FAF8F5] text-gray-950 min-h-screen pb-12 font-medium text-lg w-full overflow-x-hidden">
      
      {/* ============================================================
          HERO BANNER HEADLINE (Full-Width Viewport)
          ============================================================ */}
      <div className="w-full pt-8 pb-6 text-center bg-white border-b border-gray-100 px-4">
        <div className="inline-flex items-center gap-1.5 bg-[#E6A2B3]/10 text-[#D9889D] px-3 py-1 rounded-full text-base font-black tracking-widest uppercase mb-2">
          <Sparkles className="w-4 h-4" />
          <span>High-Spec Marriage Strategy</span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-snug tracking-tight w-full max-w-4xl mx-auto">
          大阪梅田で医師・ハイスペック男性と結婚する方法｜女性向けハイクラス婚活の戦略
        </h1>
        
        <div className="w-16 h-1 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] mx-auto mt-4 rounded-full" />
      </div>

      <h2 className="w-full pt-8 pb-6 text-center bg-white border-b border-gray-100 px-4">大阪梅田で医師やエグゼクティブ男性に選ばれ、確実にハイクラス成婚を叶えるためには、彼ら結婚観を捉えた専用のアプローチが必要です。本ページでは、ハイスペック婚活に必要な３つのリスペクトについて解説します。あなたが最短スピードで成婚にいたり、その後、持続可能な関係を保つための条件について女医の視点から説明していきます。</h2>

      {/* ============================================================
          DYNAMIC TABLE OF CONTENTS INDEX (Full-Width Mobile)
          ============================================================ */}
<div className="w-full mb-8 sm:px-4 sm:mt-6">
  <div className="bg-white w-full max-w-4xl mx-auto p-5 sm:p-6 shadow-[0_6px_30px_rgba(0,0,0,0.04)] border border-gray-200 rounded-3xl">

    <h2 className="text-base font-black text-black tracking-wider uppercase mb-2 flex items-center gap-2">
      <HelpCircle className="w-4 h-4 text-[#D9889D]" />
      👇 気になるテーマからご覧ください
    </h2>

    <p className="text-sm text-gray-600 mb-6">
      ボタンをクリックすると、そのセクションへ移動します。
    </p>

    <div className="space-y-5">

      {/* 成婚のヒント */}
      <div className="rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 to-white p-5 shadow-sm">

        <h3 className="text-lg font-black text-gray-900">
          【成婚のヒント】
        </h3>

        <p className="mt-2 text-base text-gray-700 leading-relaxed">
          なぜ、年収1000万超のエグゼクティブは
          「誰もが羨む美女」を断ったのか？
        </p>

        <div className="mt-6 flex justify-end">

          <button
            onClick={() => scrollToSection(section1Ref)}
            className="group inline-flex min-w-[260px] justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3.5 text-base font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl active:scale-95"
          >
            📖 成婚のヒントを読む
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

        </div>

      </div>

      {/* 女医からのメッセージ */}
      <div className="rounded-2xl border border-pink-200 bg-gradient-to-r from-[#FFF8FA] to-white p-5 shadow-sm">

        <h3 className="text-lg font-black text-gray-900">
          👩‍⚕️ 女医からのメッセージ
        </h3>

        <p className="mt-2 text-base text-gray-700 leading-relaxed">
          持続可能なパートナーになるための
          客観的自己認識
        </p>

        <div className="mt-6 flex justify-end">

          <button
            onClick={() => scrollToSection(section2Ref)}
            className="group inline-flex min-w-[260px] justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3.5 text-base font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl active:scale-95"
          >
            💗 女医からのメッセージ
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

        </div>

      </div>

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
            <h2 className="text-2xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug">
              【成婚のヒント】なぜ、年収1000万超のエグゼクティブは<br className="hidden sm:inline" />「誰もが羨む美女」を断ったのか？
            </h2>
            <div className="w-12 h-0.5 bg-[#E6A2B3] mt-2 mb-4" />
            
            <h3 className="text-lg sm:text-xl font-black text-gray-800 leading-snug mb-3">
              第一線で戦うビジネスマンが、生涯の伴侶を選ぶときに「外見」より優先する3つの絶対条件
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
              ハイスペックの男性が容姿端麗な若くて可愛い女性の申し出を断ったケースを、私たちは何度も経験してきました。
              「綺麗だから、若いから選ばれる」という安易な公式は、ハイスペック婚活の世界では通用しません。
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify mt-3">
              仕事の最前線で大きな責任とプレッシャーを背負う有能なビジネスマンや経営者にとって、結婚は人生最大の「自分をゆだねる相手を決める決断」です。彼らが外見だけの美女を断り、最後に選ぶ女性の条件には、明確なパターンがあります。
            </p>
          </div>

          {/* CORE VALUE: 3 RESPECTS */}
          <div className="bg-white w-full p-4 sm:p-6 shadow-xs border-y sm:border border-gray-100 sm:rounded-2xl">
            <h3 className="text-lg sm:text-xl font-black text-gray-900 flex items-center gap-1.5 border-b border-gray-100 pb-3 mb-4">
              <Award className="w-5 h-5 text-[#D9889D] shrink-0" />
              なぜ容姿だけでは選ばれないのか。第一線で戦う男性が求める「リスペクトの真実」
            </h3>
            <p className="text-base text-gray-600 leading-relaxed text-justify mb-4">
              彼らが求めているのは単なる「条件」や「外見の華やかさ」ではなく、以下の<span className="font-bold text-gray-900">『3つのリスペクト（尊敬と共感）』</span>のうち、どれか1つでも強烈に彼らの心を満たしているということです。女性に「すべてが完璧であること」は求めていません。自分のライフスタイルや価値観に合う「たった1つの何か」を持っている女性に、男性は最大の敬意と愛を払います。
            </p>

            {/* THREE BLOCKS */}
            <div className="space-y-1">
              
              {/* BLOCK 1 */}
              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-gray-100">
                <span className="inline-flex items-center gap-1 bg-[#D9889D]/10 text-[#D9889D] px-2.5 py-0.5 rounded-full text-xs font-black mb-2">
                  <UserCheck className="w-3.5 h-3.5" /> 条件 01
                </span>
                <h4 className="font-black text-lg text-gray-900 mb-1.5">
                  【自分には無いものへのリスペクト】彼にない秀でた何かを女性が持っているか
                </h4>
                <p className="text-base text-gray-600 leading-relaxed text-justify">
                  高いステータスを持つ男性は、自分を盲目的に崇めたり収入に依存的な女性を警戒します。実際、マッチングアプリに登録したとしても職業や年収を大っぴらに記載している人は医療の職場でも少ないです。
                </p>
                <p className="text-base text-gray-600 leading-relaxed text-justify mt-2">
                  彼らは、自分にはない経験や秀でた能力や内面を持つ女性を深くリスペクトします。自分とは違う何かを持っていて、常に新しい発見や価値観を与えてくれるお相手だからこそ、自分の世界は広がり、引き上げられ、一生飽きることのないリスペクトが生まれます。単なる『トロフィー（飾り）』としての美しさではなく、お換いの人生の可能性を2倍にする『最高のバディ』のような関係を求めています。
                </p>
              </div>

              {/* BLOCK 2 */}
              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-gray-100">
                <span className="inline-flex items-center gap-1 bg-[#D9889D]/10 text-[#D9889D] px-2.5 py-0.5 rounded-full text-xs font-black mb-2">
                  <Briefcase className="w-3.5 h-3.5" /> 条件 02
                </span>
                <h4 className="font-black text-lg text-gray-900 mb-1.5">
                  【キャリアの共感リスペクト】同じ世界観で「戦う毎日」を理解し合えるか
                </h4>
                <p className="text-base text-gray-600 leading-relaxed text-justify">
                  社会の最前線にある独特の責任感、不規則な時間、そして高みを目指すからゆえの孤独。同じレベルのキャリアや高い志を持つ者同士だからこそ、言葉にしなくても『ONの自分』を深く共感し、協力しあ voice。
                </p>
                <p className="text-base text-gray-600 leading-relaxed text-justify mt-2">
                  同じ世界を生きる同志としての絶対的な尊敬や安心が、二人の絆を強固にします。事実、同業種婚や似たフィールドの成婚が多いのもそのためです。
                </p>
              </div>

              {/* BLOCK 3 */}
              <div className="bg-[#FAF8F5] p-4 rounded-xl border border-gray-100">
                <span className="inline-flex items-center gap-1 bg-[#D9889D]/10 text-[#D9889D] px-2.5 py-0.5 rounded-full text-xs font-black mb-2">
                  <Home className="w-3.5 h-3.5" /> 条件 03
                </span>
                <h4 className="font-black text-lg text-gray-900 mb-1.5">
                  【プライベートの満足リスペクト】外の鎧を脱ぎ捨てて「心から安らげる家庭」を作れるか
                </h4>
                <p className="text-base text-gray-600 leading-relaxed text-justify">
                  社会的に成功すればするほど、家の中は本来の自分でいれる唯一の場所です。プライベートの時間を豊かに彩り、自立を持って精神的な満足と温かみをもたらしてくれる女性の存在に、男性は最大の敬意を払います。
                </p>
                <p className="text-base text-gray-600 leading-relaxed text-justify mt-2">
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

    {/* Header */}
    <div className="text-center mb-8">
      <span className="text-xs font-black text-[#D9889D] uppercase tracking-widest block mb-1">
        Message from Female Doctor
      </span>

      <h2 className="text-2xl sm:text-2xl font-black text-gray-900 tracking-tight">
        女医からのメッセージ
      </h2>

      <div className="w-12 h-0.5 bg-[#E6A2B3] mx-auto mt-2" />
    </div>

    {/* Letter */}
    <div className="text-lg sm:text-xl text-gray-700 leading-8 tracking-wide">

      <div className="float-left mr-5 mb-3 w-28 sm:w-32 md:w-40">
        <Image
          src={femaleAdvisor}
          alt="現役女医"
          className="rounded-xl shadow-md object-cover w-full h-auto"
          priority
        />
      </div>

      <p>
        個人の好みはありますが、やはり地位、内面、外見、エスコート力がそろったハイスペック男性は女性から非常に人気です。
        そんな彼らと真のパートナーになるにはどうしたらいいと思いますか。

        私は、「選ばれる」という気持ちだけでは、本当に選ばれることは難しいと考えています。

        もう少し分かりやすく言えば、お相手の高いステータスや魅力に見合う何かをご自身も持っていなければ、
        真のパートナーとして長く幸せな関係を築くことは簡単ではありません。
        仮に一時的にご縁があったとしても、お互いが支え合い、与え合い、尊敬し合える関係でなければ、
        長い結婚生活を幸せに続けることは難しいでしょう。

        私は婚活とは「選ぶ・選ばれる」という一方通行のものではなく、
        お互いが何を与えられるのかを考えながら築いていくものだと思っています。

        だからこそ大阪梅田ドクターズ結婚相談所では、
        ご自身の現在地とかけ離れた高望みをおすすめすることはありません。
        厳しいようですが、それでは持続可能なパートナーシップにならない可能性が高いからです。

        もし自己評価と現実に大きな差がある場合には、
        そのことも誠実にお伝えします。
        しかし、それは決して否定するためではありません。

        あなたの魅力を客観的に見つめ、
        今より一段上の素敵なお相手と幸せな結婚ができるよう、
        一緒に考え、一緒に歩んでいきたいと思っています。

        婚活では決断力や素直さ、謙虚さ、そして前向きな気持ちが、
        思っている以上に未来を変えてくれます。

        同じ時代にこうして出会えたことも、一つのご縁です。

        私たちは、あなたが幸せな未来へ進むお手伝いができれば嬉しく思いますし、
        その過程で私たち自身もまた成長させていただけると信じています。

        お会いできる日を心より楽しみにしております。
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
          <h3 className="text-xl sm:text-2xl font-black mb-1.5">プロの客観的な分析眼で、生涯のバディを見つける</h3>
          <p className="text-base text-gray-400 w-full mx-auto mb-4 font-medium leading-relaxed text-justify sm:text-center px-2">
            一方的な高望みや表面的な条件パズルではなく、お互いをリスペクトし合える「持続可能な最高の出会い」へ。当相談所の分析力と伴走サポートで、あなたの本当の市場価値と魅力を最大限に引き出します。
          </p>

          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center w-full px-2">
            <Link 
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] text-white text-base font-black px-6 py-3 rounded-xl transition-transform hover:scale-[1.02] shadow-lg shadow-[#E6A2B3]/20"
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