"use client";

import React from 'react';
import Image from "next/image";
import femaleAdvisor from "@/public/femaleAdvisor.jpg";
import maleAdvisor from "@/public/maleAdvisor.jpg";
import Link from 'next/link';
import { 
  Sparkles, 
  LineChart, 
  Stethoscope, 
  Compass, 
  ArrowRight,
  Phone,
  Brain,
  GraduationCap,
  CheckCircle2
} from 'lucide-react';

export default function ReasonsPage() {
  return (
    <div className="bg-[#FAF8F5] text-gray-950 min-h-screen pb-16 selection:bg-[#E6A2B3]/20">
      
      {/* ============================================================
          PAGETOP HERO SECTION
          ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-12 pb-10 text-center">
        <div className="inline-flex items-center gap-1.5 bg-[#E6A2B3]/10 text-[#D9889D] px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Why Choose Us</span>
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.3] tracking-tight w-full">
          大阪の結婚相談所なら<span className="text-[#D9889D]">［大阪梅田ドクターズ結婚相談所］</span>が選ばれる6つの理由
          <span className="block text-base sm:text-xl font-bold text-gray-500 mt-3 tracking-normal">
            現役医師監修 × 仲人歴20年ベテランがもたらすロジカル成婚戦略
          </span>
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] mx-auto mt-2 rounded-full" />
      </div>

      {/* ============================================================
          MAIN CONTENTS (ボックスを撤去し、テキスト幅を最大化)
          ============================================================ */}
      <div  className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 space-y-16">
        
        {/* ------------------------------------------------------------
            理由 1
            ------------------------------------------------------------ */}
        <section id="strength1" className="scroll-mt-24 relative w-full">
          <div className="flex items-center gap-4 mb-6">
            <div  className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#E6A2B3] to-[#D9889D] flex items-center justify-center text-white font-black text-lg shadow-md shadow-[#E6A2B3]/20 shrink-0">
              01
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 tracking-tight">
              現役女医監修 × キャリア20年ベテランが仕掛ける「最高峰の婚活プロデュース」
            </h2>
          </div>

          <div className="space-y-2 text-gray-800 leading-relaxed font-medium w-full">
            <p className="text-base sm:text-lg font-black text-[#b3566f] bg-white p-4 rounded-xl border-l-4 border-[#D9889D] shadow-sm">
              理想のさらに上へ。一般のデータ検索では辿り着けない「特別な出会い」の可能性をあなたに。
            </p>
            <p>
              世の中には数多くの結婚相談所がありますが、出会える層の「質」に満足できていますか？ 当相談所は、一般的なマッチングデータだけに頼る場所ではありません。
            </p>
            <p>
              第一線で活躍し、エグゼクティブたちのリアルな価値観やライフスタイルを熟知する<span className="font-bold border-b-2 border-[#E6A2B3]">【現役の女性医師による監修】</span>。そして、業界の酸いも甘いも知り尽くし、数々の成婚を導いた【ベテラン男性カウンセラー】。
            </p>
            <p>
              この、医療界と婚活界のトッププロ2名がタッグを組み、会員様1名に対して「男女2人1組の専任チーム」として密着サポートする、極めて稀少なプレミアム相談所です。
            </p>
          </div>
        </section>

        <hr className="border-gray-200/60" />

        {/* ------------------------------------------------------------
            理由 2
            ------------------------------------------------------------ */}
        <section className="w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-400 to-indigo-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-purple-200 shrink-0">
              02
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 tracking-tight">
              2名1組のダブルサポートだからできる、妥協なき「理想像の徹底解剖」
            </h2>
          </div>

          <div className="mb-6 bg-white p-5 rounded-2xl border border-purple-100 shadow-sm">
            <h3 className="text-base sm:text-lg lg:text-xl font-black text-gray-900 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-purple-600 shrink-0" />
              現役医師の心理分析 × 20年の成婚データで、あなたの「本当の結婚相手」を科学的に特定
            </h3>
          </div>

          <div className="space-y-2 text-gray-800 leading-relaxed font-medium w-full">
            <p>
              当相談所が圧倒的な高い成婚率を誇る最大の理由は、現役医師とカウンセラー歴20年のベテラン男性仲人が「2名1組のチーム」となり、あなた専用の婚活セカンド（セコンド）として徹底的に伴走する点にあります。
            </p>
            <p>
              多くの大手結婚相談所やIBJ加盟店でありがちな「ただ条件を並べてシステムで検索するだけ」の機械的なマッチングでは、結婚後の価値観の不一致による失敗や、入会後のミスマッチによるスピード離婚のリスクを排除できません。
            </p>
            <p>
              当相談所では、まずあなた自身が気づいていない深層心理にある「本当の結婚相手への理想像」を入会面談で徹底的に解剖します。医師監修のカウンセリング心理学や脳科学、行動経済学のアプローチを用いて、あなたが人生において<span className="text-purple-700 font-bold">「絶対に譲れない条件」</span>と<span className="text-gray-500 font-bold">「実は妥協しても幸せになれるポイント」</span>をロジカルに切り分けます。
            </p>
            <p>
              そこに、20年間関西圏のシビアな婚活市場（大阪市・堺市・東大阪市・枚方市・吹田市・豊中市・八尾市など）を見続けてきたプロの豊富な成婚データを掛け合わせることで、あなたのライフスタイルや性格に100%マッチする「隠れた優良男性・理想の女性」の条件を科学的に特定。高収入・高学歴・正社員・公務員・経営者など、身元が保証された年収600万円以上のハイクラスな会員層からも、あなたに本当に合うお相手をスクリーニングします。
            </p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-gray-200">

  {/* Female Doctor */}
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">

    <span className="inline-block text-xs font-black bg-[#E6A2B3] text-white px-2.5 py-1 rounded mb-4">
      現役女医の視点
    </span>

    <div className="text-[15px] leading-7 text-gray-700">

      <span className="float-left mr-4 mb-2 w-24 sm:w-28">
        <Image
          src={femaleAdvisor}
          alt="現役女医"
          className="rounded-xl shadow-md object-cover w-full h-auto"
        />
      </span>

      数々の診療を経てたくさんの方と接し寄り添ってきた経験から、
      「誰を選べばいいのか」「誰が自分に合うのか」
      「お相手が本当に求めているパートナー像」を分析。
      重要な運命の分かれ道で、
      大切な決断に寄り添ってお気持ちを汲みながら
      サポートさせていただきます。

    </div>

  </div>

  {/* Male Counselor */}
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">

    <span className="inline-block text-xs font-black bg-gray-900 text-white px-2.5 py-1 rounded mb-4">
      ベテラン仲人の視点
    </span>

    <div className="text-[15px] leading-7 text-gray-700">

      <span className="float-left mr-4 mb-2 w-24 sm:w-28">
        <Image
          src={maleAdvisor}
          alt="ベテラン仲人"
          className="rounded-xl shadow-md object-cover w-full h-auto"
        />
      </span>

      20年の経験に基づき、
      現実的に成婚へ至るための相性や条件を推測。
      時には多数の経験から予想される結果や
      厳しく耳の痛い内容も正直にお伝えします。
      現場のリアルなカウンセリング経験に裏打ちされた情報だからこそ、
      結果的にまわり道を避けることができ、
      人生の貴重な時間を有意義に過ごせます。もちろん、最後に決断するのは会員様です。婚活に正解はありません。十人十色のご希望に応じて、細かくアットホームに対応できるのが当社の強みです。

    </div>

  </div>

</div>
          </div>
        </section>

        <hr className="border-gray-200/60" />

        {/* ------------------------------------------------------------
            理由 3
            ------------------------------------------------------------ */}
        <section className="w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-amber-200 shrink-0">
              03
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 tracking-tight">
              「男のプライド」も「女性のこだわり」も120%受け止める、オーダーメイドの婚活戦略
            </h2>
          </div>

          <div className="space-y-2 text-gray-800 leading-relaxed font-medium w-full">
            <p>
              婚活において「年齢や年収、職業、婚姻歴（バツイチ・シングルマザー）に妥協したくない」というアラサー・アラフォー女性の切実な願いや、「自分の男のプライドを傷つけられたくない」「会社の同僚や友人にバレたくない」という20代・30代・40代のビジネスパーソンの男の本音を、私たちは決して否定しません。
            </p>
            <p className="font-bold text-gray-900">
              客観的なデータ分析（ロジカルな戦略）と、1対1の手厚いサポート（感情に寄り添う親身なケア）を完璧に両立させることができます。
            </p>
            
            <div className="bg-amber-50/60 border border-amber-200/60 rounded-2xl p-6 my-6">
              <h4 className="font-black text-gray-900 text-sm sm:text-base lg:text-lg mb-2 flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-600" />
                プライバシー厳守の洗練されたサポート体制
              </h4>
              <p className="text-sm sm:text-base text-gray-700">
                当相談所は事務所を構えない出張型・オンライン婚活の強みを活かし、ホテルグランヴィア大阪やスイスホテル南海大阪といったお洒落なホテルラウンジ、プライバシーの守られた個室カフェで、周囲の目を一切気にせずリラックスして作戦会議を行います。
              </p>
            </div>

            <p>
              恋愛経験なしの方や口下手な男性であっても、2名のプロがお見合い会話術の伝授から梅田・難波での服装コーディネート（ショッピング同行）、さらには交際中のLINEの返信頻度や、仮交際お断りの理由分析、真剣交際タイミングの調整、さらにはプロポーズの言葉・シチュエーションの演出までを完全バックアップ。
            </p>
            <p className="text-base font-black text-gray-900 border-t border-gray-200 pt-6">
              自己流の婚活やマッチングアプリの不都合な真実（サクラ・嘘・目的違い）に振り回されて婚活疲れを起こす前に、最高峰のプロフェッショナルによる妥協なき「理想像の徹底解剖」をぜひご体感ください。あなたのプライドを守りながら、最短ルートでスピード成婚へ導く最強のシステムがここにあります。
            </p>
          </div>
        </section>

        <hr className="border-gray-200/60" />

        {/* ------------------------------------------------------------
            理由 4
            ------------------------------------------------------------ */}
        <section className="w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-400 to-emerald-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-teal-200 shrink-0">
              04
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 tracking-tight">
              キャリアも、結婚も、妥協しない。知性と客観的データで成婚の確率を高める「戦略的ハイスペック婚活」
            </h2>
          </div>

          <div className="space-y-2 text-gray-800 leading-relaxed font-medium w-full">
            <h3 className="text-base sm:text-lg lg:text-xl font-black text-gray-900 mt-2 border-b border-gray-200 pb-2">
              恋愛や結婚に、ビジネスのような「戦略」が必要な理由
            </h3>
            <p>
              職場でもあなたは、目標達成のために「現状分析」や「正しい計画」を立ててきたはずです。実は、婚活も全く同じです。「いい人がいれば……」と運を天に任せるのは、ゴールのないプロジェクトを進めるようなもの。
            </p>
            <p>
              当相談所では、現役の女医が実践している<span className="font-bold text-teal-700">「徹底的な論理思考」と「客観的なデータ分析」</span>を婚活に応用。あなたの魅力をデータに基づいて分析し、理想のお相手と出会うための「確実性の高いルート」を戦略的に導き出します。
            </p>

            {/* 3つのビジネスライクメリット */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2">
              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                <p className="font-black text-base text-gray-900 mb-1.5">データ主導マッチング</p>
                <p className="text-sm text-gray-600">「感覚」に頼らず、お互いが相思相愛になりやすいハイクラスなお相手を厳選します。</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                <p className="font-black text-base text-gray-900 mb-1.5">抜群のタイムパフォーマンス</p>
                <p className="text-sm text-gray-600">仕事と両立できるよう無駄な時間を省き、スタイリッシュに進め、最短期間での成婚を目指します。</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                <p className="font-black text-base text-gray-900 mb-1.5">キャリアへの深い理解</p>
                <p className="text-sm text-gray-600">共働きや、互いの専門的なライフスタイルを心から尊重し合える理想のパートナーが見つかります。</p>
              </div>
            </div>

            {/* 医療アプローチ */}
            <h3 className="text-base sm:text-lg lg:text-xl font-black text-gray-900 pt-6 flex items-center gap-2">
              <LineChart className="w-5 h-5 text-teal-600" />
              成婚の確率を高める「3つの医療アプローチ」
            </h3>
            <div className="space-y-4 bg-teal-50/40 border border-teal-100 rounded-2xl p-6">
              <div className="flex gap-3">
                <span className="font-black text-xs text-teal-700 bg-teal-100 px-2 py-0.5 rounded h-5 mt-1 shrink-0">1. 検査</span>
                <p className="text-sm sm:text-base text-gray-800"><span className="font-bold">独自の分析であなたの強みを可視化：</span>客観的なデータを用いて、婚活市場における「あなたの最大の強み」を明確にします。</p>
              </div>
              <div className="flex gap-3 border-t border-teal-100/50 pt-3">
                <span className="font-black text-xs text-teal-700 bg-teal-100 px-2 py-0.5 rounded h-5 mt-1 shrink-0">2. 処方</span>
                <p className="text-sm sm:text-base text-gray-800"><span className="font-bold">課題をクリアにする的確なアドバイス：</span>どうしたら現在の状況をより良く改善できるか、具体的なステップを提案します。</p>
              </div>
              <div className="flex gap-3 border-t border-teal-100/50 pt-3">
                <span className="font-black text-xs text-teal-700 bg-teal-100 px-2 py-0.5 rounded h-5 mt-1 shrink-0">3. サポート</span>
                <p className="text-sm sm:text-base text-gray-800"><span className="font-bold">メンタルまで支える徹底的なケア：</span>医師ならではの心理学の知見で、婚活に伴う不安やストレスをケアし、ポジティブに完走できるよう支えます。</p>
              </div>
            </div>

            <div className="pt-4 text-center">
              <h4 className="text-lg lg:text-xl font-black text-gray-900 mb-2">【仕事も結婚も両方欲しい！】</h4>
              <p className="text-sm sm:text-base">
                あなたが仕事で培ってきた決断力や論理力、誠実さは、幸せな結婚を掴むための強力な武器になります。キャリアも、これからの人生の幸福も、どちらも諦める必要はありません。知性とデータを味方につけて、ハイスペックな異性や理解の深い一生モノのパートナーと出会う一歩を踏み出してみませんか？
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-200/60" />

        {/* ------------------------------------------------------------
            理由 5
            ------------------------------------------------------------ */}
        <section className="w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-400 to-pink-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-rose-200 shrink-0">
              05
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 tracking-tight">
              【現役医師監修】心理学・脳科学に基づく「心が疲れない婚活」で高い成婚率を実現
            </h2>
          </div>

          <div className="space-y-2 text-gray-800 leading-relaxed font-medium w-full">
            <p>
              大阪の結婚相談所［大阪梅田ドクターズ結婚相談所］で理想のパートナーと出会うためには、何よりも前向きなモチベーションを維持することが欠かせません。しかし、お見合いのお断りが続いたり、マッチングアプリでの既婚者や嘘の出会いに直面したりして、強いストレスや焦りから「婚活疲れ」を引き起こしてしまう男女が後を絶ちません。
            </p>
            <div className="bg-rose-50/50 border border-rose-100 rounded-2xl p-6 my-2">
              <h3 className="text-base sm:text-lg lg:text-xl font-black text-gray-900 flex items-center gap-2 mb-3">
                <Brain className="w-5 h-5 text-rose-500 shrink-0" />
                医学・心理学的アプローチによる「独自のメンタルケア体制」
              </h3>
              <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                当相談所は、医療現場で多くの心と向き合ってきた現役医師が監修し、自らもカウンセラーを兼任する、大阪でも極めて珍しい体制を整えています。医学的・心理学的知見に基づいた独自の「婚活メンタルケア」を導入し、感情論ではないロジカルなアプローチを実施。お断りの理由を客観的に分析して次の出会いに繋げるため、婚活疲れを綺麗に解消し、圧倒的に高い成婚率を叩き出しています。
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-200/60" />

        {/* ------------------------------------------------------------
            理由 6
            ------------------------------------------------------------ */}
        <section className="w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-400 to-cyan-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-200 shrink-0">
              06
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 tracking-tight">
              【カウンセラー歴20年】恋愛経験が少ない男女の魅力を120%引き出すプロのサポート
            </h2>
          </div>

          <div className="space-y-2 text-gray-800 leading-relaxed font-medium w-full">
            <p className="text-base font-black text-gray-900">
              「これまでの人生で異性と付き合ったことがない」「人見知りで、お見合いや初デートで気まずい沈黙にならないか不安」という恋愛経験なしの方も、どうぞ安心してお任せください。
            </p>
            <p>
              当相談所には、20年間にわたり大阪のシビアな婚活市場を勝ち抜き、数規模の口下手な男女をスピード成婚へ導いてきたベテラン男性仲人が在籍しています。
            </p>

            <div className="bg-blue-50/40 border border-blue-100 rounded-2xl p-6 mt-2">
              <h3 className="text-base sm:text-lg lg:text-xl font-black text-gray-900 flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-blue-600 shrink-0" />
                データに基づく確実な「マンツーマン必勝指導」
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-gray-800">異性受け抜群のプロフィール写真撮影法</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-gray-800">梅田・難波でのデート用服装コーデ・同行</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-gray-800">沈黙を恐れないための男女心理お見合い会話術</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-gray-800">関係を壊さない最適なLINE連絡頻度のコントロール</span>
                </div>
              </div>
            </div>

            <p className="pt-2 text-sm sm:text-base">
              まるで塾の先生のようにマンツーマンで丁寧に指導。自己流の恋愛ではなく、20年の成婚データに基づく確実な必勝テクニックを伝授し、あなたの魅力を120%底上げします。
            </p>
          </div>
        </section>

      </div>

      {/* ============================================================
          BOTTOM CONTACT CTA TRAY
          ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 mt-16">
        <div className="bg-gray-900 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl shadow-gray-900/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D9889D]/10 to-transparent pointer-events-none" />
          
          <h3 className="text-xl sm:text-3xl font-black mb-3">まずは、プレミアムな無料面談から</h3>
          <p className="text-xs sm:text-base text-gray-400 max-w-2xl mx-auto mb-8 font-medium">
            現役医師の分析ロジックと仲人歴20年の成婚データを掛け合わせた、あなただけのオーダーメイド婚活戦略の片鱗を、ぜひご体感ください。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] text-white text-sm sm:text-base font-black px-10 py-4 rounded-xl transition-transform hover:scale-[1.02] shadow-lg shadow-[#E6A2B3]/20"
            >
              <Phone className="w-4 h-4" />
              <span>無料面談・カウンセリングを予約する</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}