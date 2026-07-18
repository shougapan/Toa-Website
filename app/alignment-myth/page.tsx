import { Metadata } from 'next';
import Image from 'next/image';
import femaleAdvisor from "@/public/femaleAdvisor2.jpg";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "価値観の一致で探す人が結婚できない理由と選ぶべき相手",
  description:
    "価値観が一致する人と出会いたいのに結婚できない理由とは？結婚相談所のプロが「価値観の違いやズレへの適応力」という本質を解説。お互いの違いを認め、持続可能な結婚生活を得る、本当に選ぶべきパートナーの選び方・見極め方を解説。",
  alternates: {
    canonical: "/beginners",
  },
};


export default function EssentialQuestionPage2() {
  return (
    <div className="w-full bg-[#FFFBFD] py-10 sm:py-16 px-4">
      {/* 画面いっぱいに広がる最大幅6xlのワイドコンテナ */}
      <div className="max-w-6xl mx-auto bg-white shadow-sm border border-pink-100/60 rounded-3xl overflow-hidden w-full">
        
        {/* --- ヘッダーセクション --- */}
        <div className="pt-8 pb-6 sm:pt-12 sm:pb-8 text-center w-full">
          <span className="text-xs sm:text-sm font-black text-[#D9889D] uppercase tracking-widest block mb-2">
            Essential Question #02
          </span>
          <p className="text-sm font-bold text-gray-500 mb-2">【本質的な問い②】</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-snug tracking-tight mb-6 w-full">
            「価値観の一致」を探している人が、<br className="sm:hidden" />いつまでも結婚できない理由
          </h1>
          <div className="w-20 h-0.5 bg-[#E6A2B3] mx-auto" />
        </div>

        {/* --- 本文セクション（パディングを排除し、テキスト幅を境界線まで最大化） --- */}
        <div className="px-0 pb-12 sm:pb-16 bg-white w-full space-y-8 text-base text-gray-700 leading-relaxed">
          
          <div className="w-full">
            <p className="mb-4">
              「金銭感覚や仕事への価値観が合う人と結婚したい」<br />
              「家事への意識や食の好み、時間や金銭への感覚（価値観）が合う人と結婚したい」など、
              仕事に頑張り真面目な人ほど失敗を避けようとする気持ちから、価値観の一致を求める傾向があります。
            </p>
            <p className="font-bold text-gray-900 text-lg">
              しかし、ここに最大の盲点があります。心理学や家族関係の研究が示す通り、結婚生活で本当に大切なのは「価値観が合っていること」ではありません。
            </p>
          </div>

          <p className="w-full">
            そもそも、食の好みや時間の感覚、人生の価値観がピタッと一致する人間など、地球上に存在しません。<br />
            さらに30年、40年と続く日常の中では、転職、出産、子育て、親の介護、老後など、環境の変化によってお互いの価値観は必ず変わっていきます。最初の一致にこだわって相手を選んでも、それは数年で意味を持たなくなります。
          </p>

          <p className="w-full font-bold text-gray-900 text-lg border-y border-pink-100/60 py-6">
            では、これらの不一致を抱えながら、なぜ幸せに何十年も続いている夫婦がいるのでしょうか。<br className="hidden sm:inline" />
            家族心理学や行動科学の臨床データが示す、本当の正解を解き明かします。
          </p>

          {/* --- 本質への転換（H2） --- */}
          <section className="space-y-2 w-full pt-4">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 border-l-4 border-[#E6A2B3] pl-4 mb-6 leading-relaxed w-full">
              【本質への転換】重要なのは「ズレがないこと」ではなく、ズレを前にした時の『適応力』
            </h2>

            <p className="w-full">
              本当に長続きする夫婦は、<strong>「お互いに違う考えや習慣を持っていることを、ストレスなくお互いが受け入れて処理できる力」</strong>を持っています。
            </p>
            
            <p className="w-full">
              日々のズレで生活が破綻してしまう夫婦は、相手に「自分と同じやり方」を強制（期待）しています。「なぜ私と同じように家事をやらないの？」「なぜ私と同じ趣味を楽しまないの？」という、同質化の要求がストレスを生むのです。
            </p>

            <p className="w-full">
              一方で、激変する時代を生き抜く最強のバディ（相棒）になれる夫婦は、日々の不一致を以下のように<strong>「軽やかに切り離して適応」</strong>しています。
            </p>

            {/* テキストをキワまで広げたリストスタイル */}
            <div className="space-y-6 pt-4 w-full">
              <div className="w-full">
                <span className="font-bold text-gray-900 block text-base sm:text-lg mb-1">🧹 家事のズレ</span>
                <p className="pl-4 border-l border-gray-200">やり方の違いにイライラするくらいなら、最初から自分でしたり、足りない部分は完璧を求めず、楽観的にとらえ、お互いを責めない仕組みに変える。</p>
              </div>

              <div className="w-full">
                <span className="font-bold text-gray-900 block text-base sm:text-lg mb-1">🍳 食のズレ</span>
                <p className="pl-4 border-l border-gray-200">無理に同じものを食べず、「平日の夜はそれぞれ好きなものを食べる、週末の1食だけ美味しいものを一緒に楽しむ」と、食卓をイベント化する。</p>
              </div>

              <div className="w-full">
                <span className="font-bold text-gray-900 block text-base sm:text-lg mb-1">⏳ 共有時間のズレ</span>
                <p className="pl-4 border-l border-gray-200">相手が1人でいたい時は「今はチャージ中だね」とそっとしておき、自分も自分の趣味に没頭できる、心地よい他人の距離感を維持できる。</p>
              </div>

              <div className="w-full">
                <span className="font-bold text-gray-900 block text-base sm:text-lg mb-1">💼 仕事や子育てに関する考えのズレ</span>
                <p className="pl-4 border-l border-gray-200">お互いの考えのいい所を取り入れながら相談したり、相手の考えを尊重し、許容していく。</p>
              </div>
            </div>
          </section>

          {/* --- 一言メッセージ 🩷 --- */}
<div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm mx-auto">
  {/* Subtitle / Role Info */}
  <div className="mb-4">
    <p className="text-sm font-medium text-gray-500 tracking-wider">
      キャリアカウンセラー / ライフコーチ
    </p>
  </div>

  {/* Main Message Container with Text Wrapping */}
  <div className="py-0 border-t border-b border-pink-150/40 w-full block flow-root text-gray-700 leading-relaxed">
    
    {/* Floated Image: Text wraps around this automatically */}
    <div className="float-left mr-3 mb-2">
      <Image
        src={femaleAdvisor}
        alt="アドバイザー"
        width={84}  
        height={84}
        className="rounded-full object-cover border-4 border-pink-100"
      />
    </div>

    {/* Content Area */}
    <span className="text-xl inline-block mr-1 align-middle">🩷</span>
    <span className="font-bold text-gray-900 text-lg inline align-middle">
      一言メッセージ
    </span>
    
    <p className="mt-2 text-base">
      真面目な人は【選択にゼロか1】しかないことが多いです。要は、固定観念にしばられないことが大切。人生の答えは一つではありません。
    </p>
  </div>

  {/* Action Buttons */}

</div>

          {/* --- ポスト形式的思考への誘導 --- */}
<div className="py-0 text-center w-full px-4">
<Link 
  href="/emotional-maturity#consider"
  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#E6A2B3] to-[#D9889D] text-white font-bold text-sm sm:text-base w-full max-w-md mx-auto py-3.5 px-6 rounded-xl border-t border-[#ffffff]/30 shadow-[0_6px_16px_-4px_rgba(217,136,157,0.6),_0_4px_12px_rgba(0,0,0,0.1),_inset_0_-4px_0_rgba(166,91,109,0.5)] transition-all duration-200 ease-out transform active:translate-y-1 active:shadow-[0_2px_8px_-2px_rgba(217,136,157,0.6),_inset_0_-1px_0_rgba(166,91,109,0.5)] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-4px_rgba(217,136,157,0.7),_inset_0_-4px_0_rgba(166,91,109,0.5)]"
>
    <span className=" max-w-[97%] drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.15)]">
      ポスト形式的思考とは？を詳しく見る➡
    </span>
    

</Link>
</div>
          {/* --- 結婚の定義 --- */}
          <section className="pt-6 w-full space-y-4">
            <h3 className="text-lg sm:text-xl font-black text-gray-900 flex items-center gap-2 w-full">
              💍 大阪梅田ドクターズ結婚相談所が考える「結婚の定義」
            </h3>
            <p className="w-full">
              結婚とは、1つの人格に溶け合うことではありません。<br />
              <strong>「全く違う2つの個性が、お互いの領分を侵さずに、同じ屋根の下で機嫌よく並走するための共同プロジェクト」</strong>です。
            </p>
            <p className="w-full font-medium text-gray-900 pt-2">
              「違っていて当たり前。だったら、お互いが一番ラクなルートを作ろう」とお互いが笑って言える相手。それこそが、持続可能な結婚生活をもたらし、本当に選ぶべきパートナーとなるでしょう。
            </p>
          </section>

          {/* --- フッター（CTA） --- */}
          <div className="pt-12 text-center w-full">
            <button className="inline-block bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] text-white text-base sm:text-lg font-bold py-4 px-12 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200">
              柔軟な視点でパートナーを探す、無料相談はこちら
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}