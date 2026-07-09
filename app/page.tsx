"use client";



import React from "react";
import Image from "next/image";
import femaleAdvisor from "@/public/femaleAdvisor.jpg";
import maleAdvisor from "@/public/maleAdvisor.jpg";
import Link from "next/link";


import { useState } from "react";


export default function Home() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className=" space-y-6 pb-2 md:pb-12">
      
      
      {/* --- HERO SECTION --- */}
      {/* Aspect-square on mobile keeps the space large enough to accommodate the bigger text comfortably */}
{/* CHANGED: Lowered the height values to make the image length shorter vertically, keeping full viewport width */}
<section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[300px]  md:h-[430px] overflow-hidden rounded-none shadow-sm">
  {/* Background Image */}
  <img
    src="/cuteGirl1.jpg"
    alt="Marriage Consultation Hero"
    className="absolute inset-0 w-full  object-center"
  />

  {/* Hero Content */}

</section>



<section className="w-full px-4 md:px-8">

  {/* Header */}
  <div className="max-w-5xl mx-auto ">
    <span className="text-sm font-bold tracking-wider text-rose-500 uppercase">
      About
    </span>

    <h2 className="mt-2 text-2xl md:text-4xl font-black text-gray-900 leading-tight">
      大阪の結婚相談所なら［大阪梅田ドクターズ結婚相談所］が選ばれる理由｜現役医師監修×仲人歴20年
    </h2>

    <div className="mt-5 h-1 w-16 rounded-full bg-rose-400" />
  </div>

  {/* Body */}
  <p>大阪の結婚相談所なら少人数制
大阪梅田ドクターズ結婚相談所
現役医師監修・仲人歴20年のベテランカウンセラーがサポート。

現役女医と男性ベテランカウンセラーが導く、至極のハイスペック婚活

運命の相手と1年以内の成婚を目指す大人のための結婚相談所</p>

</section>

      {/* --- STRENGTHS SECTION --- */}
{/* --- STRENGTHS SECTION --- */}
<div className="md:hidden space-y-4">

  <div className="text-center">
    <p className="text-[11px] font-black tracking-[0.35em] uppercase text-gray-500">
      OUR STRENGTHS
    </p>

    <h2 className="mt-2 text-3xl font-black text-gray-900">
      私たちが選ばれる3つの理由
    </h2>

    <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-gray-300" />
  </div>


  {/* 01 */}
  <Link
    href="/why-us#strength1"
    className="block rounded-3xl border border-gray-200 bg-[#FCFBF8] p-4 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
  >
    <div className="flex gap-4 items-start">

      <div className="w-[40%] flex-shrink-0">
        <Image
          src="/image3.jpg"
          alt="現役女医とベテラン男性カウンセラー"
          width={400}
          height={400}
          className="w-full aspect-square rounded-2xl object-cover shadow-lg"
        />
      </div>

      <div className="flex-1">

        <h3 className="text-lg font-black text-gray-900 leading-snug">
          １－現役女医とベテラン男性カウンセラーによる最高峰の婚活プロデュース
        </h3>

        <p className="mt-2 text-sm leading-relaxed font-medium text-gray-700">
          ダブルサポートのハイクラス婚活。ハイスペックのための至極の婚活。
        </p>

        <p className="mt-3 font-black text-gray-700 hover:text-rose-500 transition-colors">
          →詳しく見る
        </p>

      </div>

    </div>
  </Link>


  {/* 02 */}
  <Link
    href="/why-us#strength2"
    className="block rounded-3xl border border-gray-200 bg-[#FCFBF8] p-4 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
  >
    <div className="flex gap-4 items-start">

      <div className="w-[40%] flex-shrink-0">
        <Image
          src="/man1.jpg"
          alt="ハイクラスの出会い"
          width={400}
          height={400}
          className="w-full aspect-square rounded-2xl object-cover shadow-lg"
        />
      </div>

      <div className="flex-1">

        <h3 className="text-lg font-black text-gray-900 leading-snug">
          ２－厳選された「ハイクラスの出会い」
        </h3>

        <p className="mt-2 text-sm leading-relaxed font-medium text-gray-700">
          医師・経営者・エリートが集うハイクラスな会員層。至極のハイスペックな出会いをあなたへ。
        </p>

        <p className="mt-3 font-black text-gray-700 hover:text-rose-500 transition-colors">
          →詳しく見る
        </p>

      </div>

    </div>
  </Link>


  {/* 03 */}
  <Link
    href="/why-us#strength3"
    className="block rounded-3xl border border-gray-200 bg-[#FCFBF8] p-4 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
  >
    <div className="flex gap-4 items-start">

      <div className="w-[40%] flex-shrink-0">
        <Image
          src="/woman1.jpg"
          alt="少人数制ハイクラス婚活"
          width={400}
          height={400}
          className="w-full aspect-square rounded-2xl object-cover shadow-lg"
        />
      </div>

      <div className="flex-1">

        <h3 className="text-lg font-black text-gray-900 leading-snug">
          ３－新規入会限定5名
        </h3>

        <p className="mt-2 text-sm leading-relaxed font-medium text-gray-700">
          毎月5名のみの新規入会制限・審査ありの少人数制・ハイクラス婚活。あなたの理想を形にする、フルオーダーメイド戦略。
        </p>

        <p className="mt-3 font-black text-gray-700 hover:text-rose-500 transition-colors">
          →詳しく見る
        </p>

      </div>

    </div>
  </Link>

</div>
<section className="w-full px-4 md:px-8 py-2">

  {/* Optional subtle header */}
  <div className="max-w-5xl mx-auto mb-10">
    <span className="text-sm font-bold tracking-wider text-rose-500 uppercase">
      Philosophy
    </span>

    <h2 className="mt-3 text-2xl md:text-4xl font-black text-gray-900 leading-tight">
      梅田エリアにおける婚活の現実と<br />
      大阪梅田ドクターズ結婚相談所のアプローチ
    </h2>

    <div className="mt-5 h-1 w-16 rounded-full bg-rose-400" />
  </div>

  

  {/* Body */}
<div className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-base md:text-lg">

  {/* Floating Image */}
  <div className="md:float-right md:ml-8 mb-4 md:mb-2 w-full md:w-80">
    <Image
      src="/doctorSuit.jpg"
      alt="婚活カウンセリング"
      width={500}
      height={650}
      className="rounded-2xl object-cover shadow-md border border-gray-100"
    />
  </div>

  <div
    className={`overflow-hidden transition-all duration-500 ${
      expanded ? "max-h-[2000px]" : "max-h-44"
    }`}
  >
    <p> 大阪・梅田エリア（北区・茶屋町・西梅田・東梅田周辺）には、多くのおすすめ結婚相談所や大手結婚情報サービス、人気の婚活サロンが点在しています。 </p> <p> しかし、「AIマッチングだけの大手結婚相談所」や「サポートが薄い格安のマッチングアプリ」「アドバイザーの主観だけに頼る個人結婚相談所」を比較し、 どこを選べばいいか迷っている方も少なくありません。 </p> <p> 令和の最新婚活市場を勝ち抜き、20代・30代・40代の方が最短で成婚（婚活のゴール）を迎えるためには、 確かなエビデンスに基づいた婚活戦略が必要です。 </p> <p> 梅田で口コミ評判の高い優良な結婚相談所を目指す大阪梅田ドクターズ結婚相談所では、 他社には決して真似できない唯一無二の体制として、 <span className="font-bold text-gray-900"> 「理性の医学」と「感性の仲人」 </span> が交わるダブルサポート体制をご提供します。 </p> <p> 医学的・心理学的アプローチによって異性の本音をロジカルに分析し、 長年の成婚ノウハウによって現場での実践に落とし込む。 </p> <p> この2つのプロフェッショナルによる二人三脚の丁寧なマンツーマンサポートこそが、 あなたを最短ルートで幸せな結婚へと導き、高い成婚率を誇る最大の理由です。 </p>
  </div>

  {!expanded && (
    <div className="mt-3 bg-gradient-to-t from-white to-transparent h-12 -mt-12 pointer-events-none" />
  )}

  <button
    onClick={() => setExpanded(!expanded)}
    className="mt-4 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-5 py-2 font-bold text-rose-600 hover:bg-rose-50 transition"
  >
    {expanded ? "閉じる ▲" : "続きを読む ▼"}
  </button>

  <div className="clear-both" />

</div>
</section>

<section className="w-full px-4 md:px-8 py-4 bg-white">
  <div className="max-w-5xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-8">
      <span className="text-sm font-black tracking-[0.3em] uppercase text-rose-500">
        FOR HIGH-SPEC WOMEN
      </span>

      <h2 className="mt-3 text-3xl md:text-5xl font-black text-gray-900 leading-tight">
        ハイスペックな男性と<br className="md:hidden" />
        結婚したいあなたへ
      </h2>

      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-rose-300" />
    </div>

    {/* Content */}
    <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
      {/* Bottom Image */}
      <div className="pt-2">
        <Image
          src="/highspecMan.jpg"
          alt="ハイスペックな男性との婚活"
          width={1200}
          height={800}
          className="w-full rounded-3xl object-cover shadow-lg"
        />
      </div>
      <p className="font-semibold text-gray-900 text-lg md:text-xl">
        成婚を叶えるために必要な
        <span className="text-rose-500 font-black">3つの条件</span>
        とは？
      </p>

      <p>
        多忙を極める彼らが心を満たされるのは、
        互いを高め合える
        <span className="font-bold text-gray-900">
          『3つのリスペクト（尊敬と共感）』
        </span>
        です。
      </p>

      <p>
        「たった1つの強み」があれば、
        男性はあなたに最大の敬意と愛情を払います。
      </p>

      <p>
        婚活とは、一方的に「選ぶ・選ばれる」の品定めではなく、
        お互いに「何かを与え合う関係」を築く場所です。
      </p>

      <p>
        相手のステータスに見合う
        <span className="font-bold text-gray-900">
          「あなただけの価値」
        </span>
        を当相談所で一緒に見つけ、
        戦略的に磨き上げませんか？
      </p>

      {/* CTA */}
      <div className="pt-2">
        <Link
          href="/three-respects"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-300 to-purple-700 px-7 py-4 text-base md:text-lg font-black text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          🔘 医師・エグゼクティブに愛される
          <br className="md:hidden" />
          『3つのリスペクト』の正体 ＞
        </Link>
      </div>



    </div>
  </div>
</section>

<section className="w-full px-4 md:px-8 py-4 bg-white">
  <div className="max-w-5xl mx-auto">

    {/* Top Image */}
    <div className="mb-6">
      <Image
        src="/ceremony.jpg"
        alt="大阪梅田ドクターズ結婚相談所"
        width={1200}
        height={800}
        className="w-full rounded-3xl object-cover shadow-lg"
      />
    </div>

    {/* Heading */}
    <div className="text-center mb-6">
      <span className="text-sm font-black tracking-[0.3em] uppercase text-rose-500">
        SPECIAL INTRODUCTIONS
      </span>

      <h2 className="mt-3 text-3xl md:text-5xl font-black text-gray-900">
        人脈をいかしたご紹介
      </h2>

      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-rose-300" />
    </div>

    {/* Text */}
    <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-base md:text-lg space-y-5">

      <p className="font-semibold text-gray-900">
        大阪梅田ドクターズ結婚相談所の
        <span className="font-black text-rose-500">
          「人脈をいかしたご紹介」
        </span>
      </p>

      <p>
        女医と20年ベテランカウンセラーの人脈が紡ぐ、
        あなただけの特別なご縁をご紹介いたします。
      </p>

      <p>
        <span className="font-bold text-gray-900">
          【女医ルート】
        </span>
        医療業界ネットワークからのご紹介。
        職場婚のような安心感のもと、
        医師・検査技師・薬剤師・看護師・研究員・大学教授など、
        信頼できる方々とのご縁をサポートいたします。
      </p>

      <p>
        <span className="font-bold text-gray-900">
          【20年のベテランカウンセラールート】
        </span>
        梅田の経営者や地主家系との人脈、
        そして20年間ハイスペック婚を支えてきた経験から、
        「身元の確かな方をご紹介してほしい」
        と直接ご相談をいただくこともございます。
      </p>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <p className="text-sm md:text-base">
          ※ ご紹介は双方のご希望・条件・タイミングが合致した際にご提案させていただきます。
          すべての方へのご紹介を保証するものではございませんので、
          あらかじめご了承ください。
        </p>
      </div>

      <p>
        あなたのステータスを尊重し、
        豊かで幸せな結婚生活へ向けて、
        最短距離で伴走いたします。
      </p>

      <div className="rounded-3xl bg-gradient-to-r from-pink-500 to-purple-700 p-2 text-center text-white shadow-lg">
        <p className="mt-2 text-xl md:text-2xl font-black">
          幸せな未来のために
        </p>

        <p className="mt-2 text-lg md:text-xl font-semibold">
          一緒に頑張りましょう！
        </p>
      </div>

    </div>
  </div>
</section>
      {/* --- DOCTOR'S SUPPORT SECTION --- */}
<section className="mx-auto max-w-5xl space-y-1 text-gray-700 leading-relaxed text-base md:text-lg rounded-2xl border border-rose-100 bg-gradient-to-b from-white to-[#FAF8F5]/40 p-6 sm:p-10 md:p-14 shadow-sm">

      {/* Header */}
      <div className="text-center space-y-1 mb-10">
        <span className="text-xs font-bold tracking-wider text-rose-400 uppercase block md:text-sm">
          Message
        </span>

        <h2 className="text-xl font-black text-gray-800 sm:text-2xl md:text-3xl leading-snug">
          現役女医として病院での経験から学んだ、<br className="hidden sm:inline" />
          優しくて手厚い「心の保健室サポート」
        </h2>
      </div>

      {/* Content */}
      <div className="text-base sm:text-lg md:text-xl text-gray-700 leading-snug font-normal tracking-wide space-y-6">

        {/* First paragraph WITH floated image */}
        <p className="clearfix">
          
          {/* Float image */}
          <span className="float-left mr-4 mb-2 w-28 sm:w-32 md:w-40">
            <Image
              src={femaleAdvisor}
              alt="女性アドバイザー"
              className="rounded-xl shadow-md object-cover w-full h-auto"
              priority
            />
          </span>

          病院の診察室で、ドクターがパソコンの画面ばかりを見て、あなたの顔をまともに見なければ寂しくて冷たい気持ちになりますよね。<br />
          私が医療現場で一番大切にしているのは、
          <span className="font-bold text-gray-900 border-b-2 border-rose-300 bg-rose-50/50 px-1">
            「患者様の気持ちに寄り添ってお話をお伺いすることです」
          </span>
        </p>

        {/* Remaining paragraphs */}
        <p>
          また患者様も、それぞれ望むものは違います。聞いてほしい人もいれば、教えてほしい人もいます。ゆっくり癒されたい人もいれば、効率良く終わらせたい人もいます。医療に限らず、人は十人十色、望むものは様々です。どれが正解というわけではありません。
        </p>

        <p>
          また人の繋がりはあたたかいものです。人が人を思いやり、健康や当たり前の小さな幸せを望む。これはどのフィールドでも同じです。<br />
          人生は無機質で冷たいものばかりではなく、暖かい気持ちやつながりがこの世界をまぁるく優しいものにしてくれます。
        </p>

        <p>
          婚活、特にお見合いがうまくいかずに先がみえなくなった時に必要なのも、冷酷な分析や厳しいお説教ではありません。<br />
          深く心に寄り添い、ありのままのあなたやあなたの周りの状況を受け止め、あなたを支える温かい場所です。
        </p>

        <p>
          合理的な認識や、経験に基づく適切な判断があるのは当然ありますが、さらなる人としての温かみを加え、ご満足いただけるサポートを提供できるよう尽力いたします。
        </p>

        <p className="pt-4 font-bold text-gray-950 md:text-2xl leading-snug">
          医師としても経験を積み、個人としても人生のさまざまな状況を経たからこそ見える景色があると考えています。<br />
          今、この時にご一緒できる会員様を温かい気持ちでお待ちしています。
        </p>

      </div>
    </section>
      {/* --- COUNSELOR MESSAGE SECTION --- */}
 <section className="mx-auto max-w-4xl rounded-2xl border border-rose-100 bg-gradient-to-b from-white to-[#FAF8F5]/40 p-6 sm:p-10 md:p-14 shadow-sm">

      {/* Header */}
      <div className="text-center space-y-1 mb-10">
        <span className="text-xs font-bold tracking-wider text-rose-400 uppercase block md:text-sm">
          Message
        </span>

        <h2 className="text-xl font-black text-gray-800 sm:text-2xl md:text-3xl leading-snug">
          ベテランカウンセラーから<br className="hidden sm:inline" />
          会員様への想い
        </h2>
      </div>

      {/* Content */}
      <div className="space-y-6 text-base sm:text-lg md:text-xl text-gray-700 leading-snug font-normal tracking-wide">

        {/* First paragraph with wrapped image */}
        <p className="clearfix">

          <span className="float-left mr-4 mb-2 w-28 sm:w-32 md:w-40">
            <Image
              src={maleAdvisor}
              alt="男性カウンセラー"
              className="rounded-xl shadow-md object-cover w-full h-auto"
              priority
            />
          </span>

          長いカウンセラー経験の中、たくさんの出会いに寄り添ってきました。
          一緒に喜び、時には迷いや悲しみも共有してきました。
          上手くいかずに涙する会員様をみると胸がギュッとなったことが何度もあります。
        </p>

        <p>
          結婚という一つの目標に向けて、会員様とカウンセラーは二人三脚です。
          その過程で、ご自身の恋愛というプライバシーをお話していただくには抵抗もあるとご想像します。
        </p>

        <p>
          でも、
          <span className="font-bold text-gray-900 border-b-2 border-rose-300 bg-rose-50/50 px-1">
            「少し聞いて欲しいことがあります」
            「どうしたらいいと思いますか？」
            「どう思われますか？」
          </span>
          と素直にご相談いただけることがあります。
        </p>

        <p>
          そういったご相談の時には、自分がカウンセラーとして必要とされることに熱い喜びを感じます。
          そして戦略と技術において自分の持っている全てを使い、温かくサポートしたいと常に思っています。
        </p>

        <p>
          上手くいっている時よりも、
          <span className="font-bold text-gray-900">
            「もう諦めようかな」
          </span>
          と立ち止まった時こそ側にいて、真の力を発揮したいと願っています。
        </p>

        <p>
          会員様は大切な人生の分岐点を、たくさん迷いながら、そして決断をしていかれます。
          婚活に限らず人生は選択の連続です。
          たとえそれが間違いや回り道であったとしても、ご自身が深く悩み考えて出した結論ならば、きっと何かを得るはずだと信じています。
        </p>

        <p>
          それは今後ずっと続く人生において、きっと役に立つでしょう。
        </p>

        <p>
          恋愛、結婚そして子育てをした人は、
          <span className="font-bold text-gray-900">
            「誰かのために自分の何かを与え、時には犠牲になることもありながら成長していく」
          </span>
          と聞いたことがあります。
        </p>

        <p>
          恋愛や結婚、子育てを経て経験する無償の愛が、人を豊かにすると感じてやみません。
        </p>

        <p className="pt-4 font-bold text-gray-950 md:text-2xl leading-snug">
          ここで出会ったのも何かのご縁のはずです。<br />
          大阪梅田ドクターズ結婚相談所で、一緒に頑張っていきましょう。
        </p>

      </div>
    </section>
<section className="w-full px-4 md:px-8 py-8 bg-white">

  {/* Header */}
  <div className="max-w-5xl mx-auto text-center mb-8">

    <span className="text-sm font-black tracking-[0.3em] uppercase text-blue-500">
      Price Plan
    </span>

    <h2 className="mt-3 text-2xl md:text-4xl font-black text-[#102A43] leading-tight">
      料金プラン
    </h2>

    <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-400" />

  </div>


  {/* Intro */}
  <div className="max-w-5xl mx-auto mb-8 rounded-3xl border border-blue-100 bg-blue-50/50 p-5 md:p-8">

    <p className="text-gray-700 leading-relaxed font-medium">
      当相談所は、最高のサポート品質と高い成婚実績を維持するため、
      毎月の新規ご入会を
      <span className="font-black text-[#102A43]">
        【先着5名様限定】
      </span>
      の完全少人数制とさせていただいております。
    </p>

  </div>



  {/* Pricing Table */}
  <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-blue-100 shadow-sm">


    {/* Table Header */}
    <div className="
      grid 
      grid-cols-[1fr_1fr_2fr]
      bg-[#102A43]
      text-white
      font-black
      text-sm
      md:text-base
      p-4
    ">

      <div>
        項目
      </div>

      <div>
        金額（税込）
      </div>

      <div>
        内容・備考
      </div>

    </div>



    {[
      {
        title:"入会金",
        price:"150,000円",
        text:"入会審査、契約手続き、個別規約説明などです。"
      },
      {
        title:"初期プロデュース・登録料",
        price:"80,000円",
        text:"女医×ベテランカウンセラーによる初回戦略面談、プロフィール添削、写真選定、連盟システムへのデータ登録等です。"
      },
      {
        title:"月会費",
        price:"15,000円",
        text:"毎月のシステム利用、および継続的なお悩み相談・サポートです。"
      },
      {
        title:"お見合い料",
        price:"0円（無料）",
        text:
        <>
        月4回まで無料
        <br />
        5回目以降は1回3,000円（税込）
        </>
      },
      {
        title:"成婚料",
        price:"250,000円",
        text:"ご成婚（婚約）が成立し、相談所を寿退会される際にお支払いいただく成功報酬です。"
      },

    ].map((item,index)=>(

      <div
        key={index}
        className="
        grid 
        grid-cols-1
        md:grid-cols-[1fr_1fr_2fr]
        gap-3
        md:gap-0
        border-t
        border-blue-100
        bg-white
        p-5
        md:p-4
        "
      >

        <div className="
          font-black
          text-[#102A43]
        ">
          {item.title}
        </div>


        <div className="
          font-black
          text-blue-600
        ">
          {item.price}
        </div>


        <div className="
          text-sm
          md:text-base
          leading-relaxed
          text-gray-700
          font-medium
        ">
          {item.text}
        </div>


      </div>

    ))}


  </div>



  {/* Refund Notice */}
  <div className="
    max-w-5xl mx-auto
    mt-6
    rounded-2xl
    border
    border-blue-100
    bg-blue-50
    p-5
    text-sm
    leading-relaxed
    text-gray-700
  ">

    ※契約書面をお渡しした日から8日以内のクーリングオフ期間経過後は、
    初期費用分（入会金・登録料）は中途退会時の返金対象外（返金0円）となります。

  </div>



  {/* Vacation System */}
  <div className="max-w-5xl mx-auto mt-10">


    <div className="
      rounded-3xl
      border
      border-blue-200
      bg-gradient-to-br
      from-blue-50
      to-white
      p-6
    ">


      <h3 className="
        text-xl
        md:text-2xl
        font-black
        text-[#102A43]
      ">
        【安心の休会制度】
      </h3>


      <p className="
        mt-3
        text-gray-700
        leading-relaxed
        font-medium
      ">
        お仕事の繁忙期や、少し婚活をお休みしたいときのために、
        会員籍を維持したままお休みできるシステムをご用意しています。
      </p>



      <div className="mt-5 space-y-3 text-gray-800 font-medium">


        <p className="flex gap-2">
          <span className="text-blue-600 font-black">✓</span>
          休会中の月会費：月額 3,000円 （通常の月会費15,000円はストップします）
        </p>


        <p className="flex gap-2">
          <span className="text-blue-600 font-black">✓</span>
          休会期間：1回につき最長3ヶ月まで
        </p>


        <p className="flex gap-2">
          <span className="text-blue-600 font-black">✓</span>
          休会中の特典：システムはお休みですが、月1回まで担当カウンセラーにLINEで直接相談が可能です。
        </p>


        <p className="flex gap-2">
          <span className="text-blue-600 font-black">✓</span>
          ※お見合い予定がある場合、または交際中のお相手がいる場合は休会できません。
          休会希望月の前月20日までにお申し出ください。
        </p>


      </div>


    </div>


  </div>


</section>
<section className="w-full px-4 md:px-8 py-1">


  {/* Header */}
  <div className="max-w-5xl mx-auto text-center mb-2">
    <span className="text-sm font-bold tracking-wider text-rose-500 uppercase">
      Support
    </span>

    <h2 className="mt-3 text-2xl md:text-4xl font-black text-gray-900 leading-tight">
      2名1組のプロが導く<br />
      「成婚までの丁寧なサポート」
    </h2>

    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-rose-400" />
  </div>

  {/* Team Image */}
  <div className="max-w-5xl mx-auto mb-10">
    <Image
      src="/team1.jpg"
      alt="大阪梅田ドクターズ結婚相談所 チーム"
      width={1400}
      height={700}
      className="w-full rounded-3xl object-cover shadow-lg border border-gray-100"
    />
  </div>

  {/* STEP 1 */}
  <div className="max-w-5xl mx-auto mb-16">
    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 leading-snug">
      1. 妥協なき「理想像の徹底解剖」とプロフィール作成（入会フェーズ）
    </h3>

    <div className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
      <p>
        大阪梅田ドクターズ結婚相談所では、あなた自身も気づいていない深層心理にある
        <span className="font-bold text-gray-900">「本当の結婚相手への理想像」</span>
        を入会面談で徹底的に解剖します。
      </p>

      <p>
        医師監修のカウンセリング心理学や脳科学、行動経済学のアプローチを用いて、
        「絶対に譲れない条件」と「実は妥協しても幸せになれるポイント」を整理し、
        ミスマッチや早期離婚を未然に防ぎます。
      </p>

      <p>
        高収入・高学歴・正社員・公務員・経営者など、
        身元が保証されたハイクラスな会員層の中から、
        あなたに最適なお相手をスクリーニングします。
      </p>

      <div className="space-y-2 text-gray-900 font-semibold">
        <p>✓ 異性に好印象を与えるプロフィール写真の作成サポート</p>
        <p>✓ 魅力を120%引き出す自己PR文章のプロデュース</p>
      </div>
    </div>
  </div>

  {/* STEP 2 */}
  <div className="max-w-5xl mx-auto mb-16">
    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 leading-snug">
      2. お見合いセッティングと実践会話レッスン（出会いフェーズ）
    </h3>

    <div className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
      <p>
        「恋愛経験がなく異性と話すのが苦手」
        「初対面で沈黙が怖い」
        という方でも安心して活動できるようサポートします。
      </p>

      <p>
        女性心理・男性心理を踏まえた会話術や、
        梅田・難波・心斎橋・天王寺でのデートにふさわしい服装を
        マンツーマンで丁寧にレクチャーします。
      </p>

      <div className="space-y-2 text-gray-900 font-semibold">
        <p>✓ お見合い前の会話トレーニング</p>
        <p>✓ デート服ファッション提案</p>
        <p>✓ ホテルラウンジ予約代行</p>
        <p>✓ スケジュール調整サポート</p>
      </div>

      <p>
        忙しいビジネスパーソンでも、準備から調整まですべて任せることで、
        ストレスなくスマートに婚活が可能です。
      </p>
    </div>
  </div>

  {/* STEP 3 */}
  <div className="max-w-5xl mx-auto mb-16">
    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 leading-snug">
      3. 仮交際・真剣交際中のリアルタイム相談（交際フェーズ）
    </h3>

    <div className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
      <p>
        お見合いでお互いに良い印象を持てば「仮交際」へと進みます。ここからが成婚の鍵を握る最も重要な時期です。デートの場所選びから、嫌われないLINEの返信頻度、仮交際お断りの理由分析まで、ベテラン仲人がリアルタイムで的確にアドバイスします。
      </p>
      
      <p>
        お互いに「この人しかいない」と確信したら、1対1の「真剣交際タイミング」へとステップアップし、結婚後のリアルな生活（共働き希望か、家事育児の分担など）について具体的なすり合わせを行います。
      </p>
      
      <p>
        もし迷いや不安があっても、カウンセラーと一緒に前向きな決断とモチベーションを維持できます。
      </p>
    </div>
  </div>

  {/* STEP 4 */}
  <div className="max-w-5xl mx-auto">
    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 leading-snug">
      4. プロポーズのプロデュースと成婚退会（ゴールフェーズ）
    </h3>

    <div className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
      <p>
        交際期間を重ね、お互いの結婚への温度感が固まったら、プロポーズです。大阪梅田ドクターズ結婚相談所では、お相手に100%喜ばれるプロポーズの言葉・シチュエーション・タイミングや、婚約指輪）の選び方、夜景の見える高級レストランの演出までを完全バックアップします。
      </p>
      
      <p>
        プライバシーは完全秘密厳守で守り抜き、笑顔の寿退会（成婚退会）を迎えていただきます。
      </p>
      
      <p>
        多くの会員様が半年以内でのスピード成婚を叶えて笑顔で卒業されています
      </p>
    </div>
  </div>

</section>
<section className="w-full px-4 md:px-8 py-2">

  {/* Header */}
  <div className="max-w-5xl mx-auto mb-10">
    <span className="text-sm font-bold tracking-wider text-rose-500 uppercase">
      Concept
    </span>

    <h2 className="mt-3 text-2xl md:text-4xl font-black text-gray-900 leading-tight">
      大阪・梅田で理想の結婚を叶える「理想のパートナー」とは？
    </h2>

    <div className="mt-5 h-1 w-16 rounded-full bg-rose-400" />
  </div>

  {/* Body */}
  <div className="max-w-2xl mx-auto space-y-1 text-gray-700 leading-relaxed text-base md:text-lg">

    <p>
      私たちはまず、あなたが心から望んでいる「理想の相手像」を、多角的な視点から徹底的に分析します。
    </p>

    <p>
      一言で「白馬に乗った素敵な王子様」「かぐや姫のような絶世の美女」といっても、
      人それぞれに理想像は異なります。
    </p>

    <p>
      また、必ずしも理想像とご自身との相性が良いとは限りません。
      恋愛は、自分のアイデンティティを映す鏡のようなものです。
    </p>

    <p>
      自分がどんな性格で、どんな人間なのか。
      自分が求めているものは何か。
      相手が求めているものは何か。
      自分が与えることができるものは何か。
      すべてに唯一の正解があるわけではありません。
    </p>

    <p className="font-semibold text-gray-900">
      それはまさに「自分探しの旅」ともいえるものです。
    </p>

    {/* Doctor Perspective */}
    <div className="mt-10 space-y-5">

      <h3 className="text-xl md:text-2xl font-black text-gray-900">
        🩷 現役女医の視点から
      </h3>

      <p>
        数々の診療を通して多くの方に寄り添ってきた経験から、
        「誰を選べばいいのか」「誰が自分に合うのか」
        という重要な分岐点において、丁寧にサポートいたします。
      </p>

      <p>
        お相手が本当に求めているパートナー像や、
        運命の分かれ道でどちらに進むべきかについて、
        お気持ちに寄り添いながらご相談をお受けします。
      </p>

    </div>

    {/* Counselor Perspective */}
    <div className="mt-5 space-y-1">

      <h3 className="text-xl md:text-2xl font-black text-gray-900">
        🩵 ベテランの視点から
      </h3>

      <p>
        20年の経験に基づき、現実的に成婚へ至るための相性や条件を分析します。
      </p>

      <p>
        男性目線・女性目線・エグゼクティブ層の視点を融合することで、
        ご自身でも気づいていなかった「本当の理想の相手像」を明確にしていきます。
      </p>

      <p>
        時には厳しい現実や予測も正直にお伝えしますが、
        それらは婚活の現場経験に基づく重要な情報です。
      </p>

      <p>
        遠回りを避けることで、人生の貴重な時間をより有意義に使える可能性があります。
      </p>

    </div>

    {/* Closing */}
    <div className="mt-10 space-y-1">

      <p>
        もちろん、最終的に決断するのは会員様ご自身です。
        婚活に正解はなく、続けることも、やめることもすべてが正解です。
      </p>

      <p>
        十人十色の価値観や選択を尊重しながら、
        一人ひとりに合わせた柔軟なサポートを行っています。
      </p>

      <p className="font-bold text-gray-900">
        アットホームなサポートの中で、ぜひ一緒に前へ進んでいきましょう。
      </p>

    </div>

  </div>
</section>

<section className="w-full px-4 md:px-8 py-1">

  {/* Header */}
  <div className="max-w-5xl mx-auto mb-10">
    <span className="text-sm font-bold tracking-wider text-rose-500 uppercase">
      Recommend
    </span>

    <h2 className="mt-3 text-2xl md:text-4xl font-black text-gray-900 leading-tight">
      大阪梅田ドクターズ結婚相談所はこんな方におすすめ
    </h2>

    <div className="mt-5 h-1 w-16 rounded-full bg-rose-400" />
  </div>

  {/* Content */}
  <div className="max-w-5xl mx-auto space-y-3e text-gray-700 leading-relaxed text-base md:text-lg">

    <div>
      <p className="font-bold text-gray-900">
        ✅ 大阪で効率よく婚活したい方
      </p>
      <p className="mt-2">
        大阪市、豊中市、北摂などにお住まいで、
        スマートにハイクラス婚活を進めたい方。
      </p>
    </div>

    <div>
      <p className="font-bold text-gray-900">
        ✅ 医師やベテランカウンセラーのサポートを求める方
      </p>
      <p className="mt-2">
        婚活の不安やストレスを、現役女医によるメンタルサポートで解消したい方。
        また、「結婚相談所 20年 カウンセラー 大阪」のプロに頼りたい方。
      </p>
    </div>

    <div>
      <p className="font-bold text-gray-900">
        ✅ 関西のハイクラス婚を熟知した伴走サポートが欲しい方
      </p>
      <p className="mt-2">
        キャリア20年のベテラン仲人による、
        あなた専用のオーダーメイド婚活サポートを求める方。
      </p>
    </div>

    <div>
      <p className="font-bold text-gray-900">
        ✅ ハイステータスな出会いを求める方
      </p>
      <p className="mt-2">
        「ハイステータス 結婚相談所 医師在籍」での出会いを希望し、
        「医師 婚活 結婚相談所 現役医師サポート」や
        「女医 婚活 相談所 ベテランカウンセラー」の強みを活かして
        質の高い出会いを掴みたい方。
      </p>
    </div>

  </div>
</section>

<section className="max-w-5xl mx-auto px-0 sm:px-6 lg:px-8 py-2">
  <div className="text-center mb-10 px-4 sm:px-0">
    <span className="inline-block bg-[#F7E6EB] text-[#D9889D] text-xs font-black px-3 py-1 rounded-full mb-4">
      FAQ
    </span>

    <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
      よくあるご質問
    </h2>

    <p className="mt-3 text-gray-600">
      初めての婚活でも安心して活動していただけるよう、
      よくいただくご質問をまとめました。
    </p>
  </div>

  <div className="space-y-2 sm:space-y-4">

    {/* FAQ 1 */}
    <div className="bg-white rounded-3xl border border-gray-200 p-5 sm:p-8 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-[#F7E6EB] text-[#D9889D] font-black">
          📌
        </span>
        <h3 className="font-black text-gray-900 text-lg">
          結婚相談所に入会したら、本当にサクラはいませんか？
        </h3>
      </div>

      <div className="pl-0 sm:pl-11">
        <p className="text-gray-700 leading-relaxed">
          はい、サクラは一切在籍しておりません。
          当相談所が加盟する結婚相談所連盟では、
          「独身証明書」「住民票」「学歴証明書」
          「収入証明書（男性必須）」などの提出を義務付けています。
          身元が確実で、本気で結婚したい方だけが活動しているため、
          安心してパートナー探しに集中していただけます。
        </p>
      </div>
    </div>

    {/* FAQ 2 */}
    <div className="bg-white rounded-3xl border border-gray-200 p-5 sm:p-8 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-[#F7E6EB] text-[#D9889D] font-black">
          📌
        </span>
        <h3 className="font-black text-gray-900 text-lg">
          人見知りで、お見合いでうまく話せるか不安です。
        </h3>
      </div>

      <div className="pl-0 sm:pl-11">
        <p className="text-gray-700 leading-relaxed">
          ご安心ください。当相談所では、お見合い前の服装選びや髪型の
          トータルコーディネートはもちろん、
          「何を話せばいいか」の会話シミュレーション（模擬お見合い）
          まで事前に行います。
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          また、お見合い当日の流れやNGマナーなども丁寧にご説明いたしますので、
          恋愛経験が少ない方でも自信を持って活動していただけます。
        </p>
      </div>
    </div>

    {/* FAQ 3 */}
    <div className="bg-white rounded-3xl border border-gray-200 p-5 sm:p-8 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-[#F7E6EB] text-[#D9889D] font-black">
          📌
        </span>
        <h3 className="font-black text-gray-900 text-lg">
          マッチングアプリと結婚相談所の最大の違いは何ですか？
        </h3>
      </div>

      <div className="pl-0 sm:pl-11">
        <p className="text-gray-700 leading-relaxed">
          最も大きな違いは
          <span className="font-bold text-gray-900">
            「お相手の結婚に対する本気度」と「プロのサポートの有無」
          </span>
          です。
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          アプリは手軽な反面、結婚の意思が低い方や既婚者が紛れ込むリスクがあります。
          一方、結婚相談所では全員が
          「良い人がいればすぐにでも結婚したい」
          と考えているため、出会いから成婚までのスピードが非常に早いのが特徴です。
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          また、交際中のお悩みやプロポーズのタイミングまで、
          ベテランカウンセラーが仲介・アドバイスを行う点も大きな違いです。
        </p>
      </div>
    </div>

    {/* More FAQs Link Card */}
    <a 
      href="/FAQ" 
      className="flex items-center justify-between bg-white hover:bg-gray-50 border border-gray-200 rounded-3xl p-6 shadow-sm transition-colors duration-200 group"
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F7E6EB] text-[#D9889D] font-black">
          💡
        </span>
        <span className="font-black text-gray-900 text-lg">
          もっと質問を見る / その他のよくあるご質問
        </span>
      </div>
      <svg 
        className="w-6 h-6 text-gray-400 group-hover:text-[#D9889D] transition-colors transform group-hover:translate-x-1 duration-200" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={3}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>

  </div>
</section>

    </div>
  );
}