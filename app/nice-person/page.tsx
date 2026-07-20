import React from 'react';
import { 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  ArrowRight,
  UserCheck
} from 'lucide-react';
import type { Metadata } from 'next';

// ==========================================
// 1. ページ全体のSEO用メタデータ設定 (Server Side)
// ==========================================
export const metadata: Metadata = {
  title: "いい人どまり卒業のヒント",
  description:
    "結婚相談所でいい人どまりを卒業！お見合いで断られる理由と、魅力的な異性になる3つの内面アプローチを解説。万人受けの婚活をやめ、特別感・母性父性・支える覚悟のバイタリティで最愛の1人に選ばれる心の仕組みを大阪梅田のドクターズ結婚相談所が伝授。",
  
  keywords: [
    "いい人どまり 卒業",
    "結婚相談所 選ばれる",
    "異性的魅力",
    "婚活 心理学",
    "包容力 夫婦",
    "大阪梅田 結婚相談所",
    "ドクターズ結婚相談所"
  ],

  authors: [
    {
      name: "現役女医（大阪梅田ドクターズ結婚相談所監修）",
    },
    {
      name: "キャリアカウンセラー / ライフコーチ",
    },
  ],

  alternates: {
    canonical: "/essential-question-6", 
  },

  openGraph: {
    title: "いい人どまりを卒業！結婚相談所でたった一人に選ばれる3つの異性的魅力",
    description: "結婚とは100人にモテるゲームではなく、最愛のたった一人との間に需要と供給を成立させる営み。無難な婚活を卒業するためのアプローチを解説。",
    type: "article",
    locale: "ja_JP",
    siteName: "大阪梅田ドクターズ結婚相談所",
    url: "/essential-question-6",
  },

  twitter: {
    card: "summary_large_image",
    title: "いい人どまりを卒業！結婚相談所でたった一人に選ばれる3つの異性的魅力",
    description: "あなたの内側にある優しさを「特別感」「母性・父性」「支える覚悟」に変える、心理学に基づいた成婚戦略。",
  },
};

// ==========================================
// 2. メインコンポーネント
// ==========================================
export default function EssentialInquirySix() {

  // 構造化データ (JSON-LD) の定義 - 心理学的・行動科学的アプローチの内容に完全一致
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    'headline': 'いい人どまりを卒業！結婚相談所でたった一人に選ばれる「3つの異性的魅力」',
    'description': 'いつも「良い人だけど……」とお断りされてしまう悩みを抱える婚活者へ。万人受けの無難なマナーを捨て、最愛のたった一人に向けて「特別感」「母性・父性」「支える覚悟」を届ける心理学的アプローチを解説。',
    'datePublished': '2026-07-20T12:00:00+09:00',
    'author': [
      {
        '@type': 'Person',
        'name': '現役女医（大阪梅田ドクターズ結婚相談所監修）',
        'jobTitle': 'Medical Doctor'
      },
      {
        '@type': 'Person',
        'name': 'キャリアカウンセラー / ライフコーチ',
        'jobTitle': 'Life Coach / Career Counselor'
      }
    ],
    'publisher': {
      '@type': 'Organization',
      'name': '大阪梅田ドクターズ結婚相談所',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://your-domain.com/logo.png' // 必要に応じて本番環境のロゴURLに差し替えてください
      }
    }
  };

  return (
    <div className="bg-[#FAF8F5] text-gray-950 min-h-screen pb-12 font-medium">
      {/* 構造化データをHEADまたはBody内に安全に注入 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* ============================================================
          HERO BANNER HEADLINE
          ============================================================ */}
      <div className="w-full px-2 sm:px-4 pt-8 pb-4 text-center">
        <div className="inline-flex items-center gap-1.5 bg-[#E6A2B3]/10 text-[#D9889D] px-3 py-1 rounded-full text-base font-black tracking-widest uppercase mb-2">
          <Sparkles className="w-4 h-4" />
          <span>本質的な問い⑥ / Essential Inquiry #6</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-relaxed tracking-tight w-full mx-auto max-w-4xl">
          いい人どまりを卒業！<br className="sm:hidden" />結婚相談所でたった一人に選ばれる<br />
          「3つの異性的魅力」<br className="md:hidden" />【大阪梅田ドクターズ結婚相談所】
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] mx-auto mt-4 rounded-full" />
      </div>

      {/* ============================================================
          INTRODUCTORY TEXT BLOCK
          ============================================================ */}
      <div className="w-full px-2 sm:px-4 mb-8">
        <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-base md:text-lg space-y-5 text-justify bg-white rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(230,162,179,0.02)] border border-gray-200/60">
          <p>
            いつも「良い人だけど……」とお断りされてしまう。そう悩むあなたは、万人受けを狙って「無難な婚活」をしていませんか？
          </p>
          <p>
            結婚とは100人にモテるゲームではなく、最愛のたった一人との間に「Need（需要）とSeed（供給）」を成立させる営みです。誰に対しても80点の気遣いをする「いい人」のままでは、異性としての強烈な魅力は生まれません。
          </p>
          <p>
            退屈な「良い人どまり」を卒業し、魅力的な異性へとレベルアップする鍵は、小手先のモテテクニックではありません。あなたの内側にある優しさを、最愛のたった一人に向けて<span className="font-bold text-gray-900 border-b-2 border-[#E6A2B3]">【特別感】【母性・父性】【支える覚悟】</span>という3つの能動的なバイタリティ（生命力）として集中アプローチすることです。
          </p>
          <p>
            今回は、大阪梅田のドクターズ結婚相談所が、自分の人生を主役として生き、一生のパートナーから魅力的な異性として選ばれるための「婚活のアプローチ方法」を心理学の視点から解説します。
          </p>
        </div>
      </div>

      {/* ============================================================
          THE 3 ELEMENTS SECTION
          ============================================================ */}
      <div className="w-full px-2 sm:px-4 space-y-8">
        
        {/* PILLAR 1 */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#D9889D] text-white text-sm font-black px-2 py-0.5 rounded">01</span>
            <h2 className="text-xl font-black text-gray-900 leading-relaxed">
              【あなただけが大好き🩷】の熱烈アピール：全エネルギーの集中
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-base md:text-lg space-y-5 text-justify">
            <p>
              いい人は「嫌われたくない」ので、誰に対しても80点のマナーで接します。しかし、選ばれる人は、目の前の一人の相手に対して「私は他の誰でもない、あなたに強烈に惹かれている」というエネルギー（熱意）を、強く放ちます。
            </p>
            <p>
              万人受けを狙う気持ちを捨てて、「あなたと居るのが楽しい」「あなたとこれからも過ごしたい」と、好意をストレートに伝えることです。この「あなただけ」という特別感が、<span className="font-bold text-gray-900">【こんなに好きって熱烈に言ってくれる人はいない。この人となら…】</span>とお相手の気持ちを動かします。
            </p>
          </div>

          <div className="mt-4 bg-rose-50/40 text-rose-950 p-4 rounded-xl border border-rose-100/60 leading-relaxed text-base md:text-lg text-justify">
            <span className="font-black text-[#D9889D] block mb-1">一言メッセージ 💙</span>
            人間関係では先にアプローチする方がエネルギーが要ります。そのエネルギーをあえて先に払いましょう！男女ともに待ってるだけでは道は開きません。
          </div>
        </div>

        {/* PILLAR 2 */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#D9889D] text-white text-sm font-black px-2 py-0.5 rounded">02</span>
            <h2 className="text-xl font-black text-gray-900 leading-relaxed">
              【母性・父性】をアピール：全てを受け入れる包容力
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-base md:text-lg space-y-5 text-justify">
            <p>
              いい人の優しさは、表面的な気遣い（料理をとり分ける、話を聞くなど）だけになりがちです。しかし、本当に異性として人を惹きつけるのは、相手の不完全さや格好悪さを全て、<span className="font-bold text-gray-900">「包み込むような母性・父性（圧倒的な包容力）」</span>です。
            </p>
            <p>
              母性・父性を放てる人は、相手が落ち込んだり、失敗したとき、「あ、この人頼りないな」と減点せずに、「そんなところも人間らしくて愛おしい。大丈夫、私がいるよ」と丸ごとホールドします。この「相手の不完全さを、自分のバイタリティで包み込む強さ」に、異性は生涯を共にするパートナーとしての深い安心と絆を感じます。
            </p>
          </div>

          <div className="mt-4 bg-sky-50/40 text-sky-950 p-4 rounded-xl border border-sky-100/60 space-y-3">
            <div className="leading-relaxed text-base md:text-lg text-justify">
              <span className="font-black text-sky-700 block mb-1">一言メッセージ 💙</span>
              母性や父性とはお相手に対して【「どれだけ相手のダメなところや違いを笑って許せるか」という『許容範囲の広さ（器の大きさ）』そのものです。【少しお相手に優しくしよう】と意識すれば、許せる事が増えるかもしれませんね。
            </div>
            
            <div className="pt-2 border-t border-sky-100/60 flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-bold text-gray-500">【正解は一つではないの考え】も参考にしてくださいね</span>
              <button className="inline-flex items-center gap-1 bg-white hover:bg-sky-50 text-sky-700 text-sm font-black px-3 py-1.5 rounded-lg border border-sky-200 transition-colors">
                <span>【ポスト形式的思考】を詳しくみる</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* PILLAR 3 */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#D9889D] text-white text-sm font-black px-2 py-0.5 rounded">03</span>
            <h2 className="text-xl font-black text-gray-900 leading-relaxed">
              【あなたを支える意思】をアピール：人生の同志となる覚悟
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-base md:text-lg space-y-5 text-justify">
            <p>
              「選ばれる」という受け身を捨て、「あなたの人生の重荷を、私も一緒に背負う覚悟がある」という気持ちをアピールすることです。「私を幸せにして」という依存でも、「あなたの色に染まります」という同調でもありません。
            </p>
            <p>
              「あなたの仕事にかける想いや、あなたが大切にしている人生を、私は全力で支えたいし、一緒に頑張りたい」という明確な意思表示です。
            </p>
            <p>
              特に多忙なキャリア層や、孤独を抱える現代の男女にとって、この「支えるアピール」は、単なる良い人を超えた<span className="font-bold text-gray-900">「人生を賭けるに値する存在」</span>へと格上げされる決定的な理由になります。
            </p>
          </div>
        </div>

      </div>

      {/* ============================================================
          SUMMARY / CONCLUSION BOARD
          ============================================================ */}
      <div className="w-full px-2 sm:px-4 mt-8">
        <div className="bg-gray-900 text-white rounded-2xl p-5 sm:p-6 text-center shadow-xl shadow-gray-900/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-[#D9889D]/10 to-transparent pointer-events-none" />
          
          <Heart className="w-7 h-7 text-[#E6A2B3] mx-auto mb-2" />
          <h3 className="text-lg sm:text-xl font-black mb-3 leading-relaxed">
            結婚に必要なのは、100人に好かれる器用さではなく、<br className="hidden sm:inline" />
            たった一人に覚悟を決めて放つ意思表示です。
          </h3>
          
          <div className="max-w-5xl mx-auto text-gray-300 leading-relaxed text-base md:text-lg space-y-5 mb-5 text-justify sm:text-center font-medium">
            <p>
              【私はあなたを支える】【あなたと一緒に居たい】と放つ、気持ちの強さ。当相談所では、あなたの優しい内面を、最愛の一人に深く刺さる『強烈な引力』へと変えるサポートをします。
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 max-w-2xl mx-auto text-left sm:text-center leading-relaxed text-base md:text-lg text-gray-300">
            <span className="font-black text-[#E6A2B3] block mb-0.5">一言メッセージ 🩷</span>
            誰と一緒にいたいか？どんな人と未来を築きたいか？が決まっていない場合は、まずそこから考えてみましょう！
          </div>
        </div>
      </div>

    </div>
  );
}