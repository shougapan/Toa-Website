import Image from "next/image";

import clinic1 from "@/public/couple1.jpg";
import clinic2 from "@/public/femaleAdvisor.jpg";
import clinic3 from "@/public/maleAdvisor.jpg";




export default function MembershipSteps() {
  return (
    <div>
      <section className="w-[98%] mx-auto rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 p-8 sm:p-12 space-y-8">

  <header className="space-y-5">

    <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-xs font-black tracking-widest text-blue-700">
      📝 MEMBERSHIP POLICY
    </div>

    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.25]">
      入会制限と審査について
    </h1>

    <p className="text-lg sm:text-xl leading-relaxed text-gray-700 max-w-5xl">
大阪梅田ドクターズ結婚相談所は、会員数を競うような「大量生産型」の結婚相談所ではございません。
限られた時間の中、全ての会員様に真摯に向き合っていきたいと考えています。
客観的な分析、そして20年の最前線で培った男性仲人としての実践的な戦略。これらを駆使し、お一人おひとりの人生に深くコミットするため、当相談所では【毎月の新規入会者数を5名限定】にさせていただいております。
そのため、大変恐縮ではございますが、どなたでもご入会いただけるわけではございません。無料の「婚活相談」の段階で、以下のような方のご入会はお断りさせていただいております。
    </p>

  </header>

</section>

<section className="w-[98%] mx-auto rounded-3xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-red-50 p-6 sm:p-8 lg:p-10 shadow-sm">

  <header className="space-y-4 mb-8">
    <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5 text-sm font-black text-red-700">
      ⚠️ 入会審査について
    </div>

    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
      このような方のご入会は
      <span className="text-red-600">お断りしております</span>
    </h2>

    <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-5xl">
      私たちは少人数制で一人ひとりに深く向き合う結婚相談所です。
      そのため、どなたでもご入会いただけるわけではありません。
      限られたサポート枠を、本気で理想の未来を目指す方のために確保しております。
    </p>
  </header>

  <div className="grid gap-4 md:grid-cols-2">

    <article className="rounded-2xl bg-white border border-red-100 p-5">
      <h3 className="font-black text-gray-900 mb-3">
        ❌ 受け身の姿勢の方
      </h3>

      <p className="text-gray-700 leading-relaxed">
        「お金を払えば相談所がすべてやってくれる」と考えている方。
        婚活はご本人の行動があってこそ成果につながります。
      </p>
    </article>

    <article className="rounded-2xl bg-white border border-red-100 p-5">
      <h3 className="font-black text-gray-900 mb-3">
        ❌ プロのアドバイスや戦略を素直に実践できず、言い訳を重ねてしまう方
      </h3>

      <p className="text-gray-700 leading-relaxed">
        プロからの提案や戦略を受け入れられず、
        言い訳を重ねてしまう方。
      </p>
    </article>

    <article className="rounded-2xl bg-white border border-red-100 p-5">
      <h3 className="font-black text-gray-900 mb-3">
        ❌ ご自身のことは棚に上げ、お相手への批判や愚痴ばかりを口にされる方
      </h3>

      <p className="text-gray-700 leading-relaxed">
        ご自身の改善よりも、
        お相手への批判や愚痴ばかりを口にされる方。
      </p>
    </article>

    <article className="rounded-2xl bg-white border border-red-100 p-5">
      <h3 className="font-black text-gray-900 mb-3">
        ❌ 「どうせ私なんて」「この歳だから無理」と、最初から諦める前提の方
      </h3>

      <p className="text-gray-700 leading-relaxed">
過酷な現実をお伝えしますが、婚活において「他力本願な姿勢」や「後ろ向きなマインド」のままでは、どれほど私たちが最高の武器（戦略・ネットワーク）をお渡ししても、格上のお相手から選ばれることは絶対にありません。あなたの大切な時間とお金を無駄にさせないためにも、このような場合は入会をご遠慮いただいております。
      </p>
    </article>

  </div>
</section>

{/* ========================================= */}
{/* 私たちがサポートしたい方 */}
{/* ========================================= */}

<section className="w-[98%] mx-auto rounded-3xl border border-pink-100 bg-gradient-to-br from-pink-50 via-white to-blue-50 shadow-sm p-8 lg:p-12">

  <header className="space-y-6">

    <div className="inline-flex items-center rounded-full bg-pink-100 px-4 py-1 text-sm font-bold text-pink-700">
      🩷 私たちが、すべての情熱を注いでサポートしたい方
    </div>

    <h2 className="text-2xl lg:text-4xl font-black text-gray-900 leading-tight">
      私たちが、すべての情熱を注いでサポートしたいのは
      <span className="text-pink-600">
        「このような方」です。
      </span>
    </h2>

  </header>

  <div className="mt-8 space-y-6 text-lg leading-9 text-gray-700">

    <p>
      私たちが求めているのは、完璧なスペックを持った方ではありません。
    </p>

    <div className="rounded-2xl bg-white border border-pink-100 p-6 shadow-sm">
      <p className="text-xl font-black text-pink-600 leading-relaxed">
        「これまでの自分を変えて、本気で理想の人生、未来を掴み取りたい」
      </p>
    </div>

    <p>
      そのために、私たちの戦略を信じ、前向きに、泥臭く努力する覚悟がある方。
    </p>

    <p>
      そんなあなたの「本気の決断」に、私たちは全責任を持って伴走いたします。
    </p>

  </div>

</section>



{/* ========================================= */}
{/* 3つのお約束 */}
{/* ========================================= */}

<section className="space-y-10 mt-16">

  <header className="space-y-4 text-center">

    <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-bold text-blue-700">
      🌟 私たちの理念
    </div>

    <h2 className="text-2xl lg:text-4xl font-black text-gray-900">
      私たちの理念に共感していただける会員様への
      <span className="text-blue-600">
        「3つの約束」
      </span>
    </h2>

  </header>

  <div className="grid lg:grid-cols-3 gap-8">

    {/* Promise 1 */}

    <article className="rounded-3xl bg-white border border-pink-100 shadow-sm p-8 space-y-5">

      <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-2xl">
        💖
      </div>

      <h3 className="text-xl font-black text-gray-900 leading-snug">
        1.【あなたの可能性を発見し120%信じ抜きます】
      </h3>

      <p className="leading-8 text-gray-700">
        世間が「高望みだ」と笑うような理想であっても、あなたが前向きに挑戦する限り、勝つための戦術を、徹底的にプロデュースします。
      </p>

    </article>



    {/* Promise 2 */}

    <article className="rounded-3xl bg-white border border-blue-100 shadow-sm p-8 space-y-5">

      <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
        📈
      </div>

      <h3 className="text-xl font-black text-gray-900 leading-snug">
        2.【感情論ではなく、常に『次にやるべき具体策』を提示します】
      </h3>

      <p className="leading-8 text-gray-700">
        「もっと頑張りましょう」といった無責任な発言は一切言いません。上手くいかない原因をロジカルに解明し、明日から使える「具体的な行動マニュアル」を提示し続けます。
      </p>

    </article>



    {/* Promise 3 */}

    <article className="rounded-3xl bg-white border border-emerald-100 shadow-sm p-8 space-y-5">

      <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl">
        🤝
      </div>

      <h3 className="text-xl font-black text-gray-900 leading-snug">
        3.【あなたが心折れそうな時ほど、最強の味方であり続けます】
      </h3>

      <p className="leading-8 text-gray-700">
        婚活は、時に厳しい現実と向き合うこともあります。しかし、あなたが前向きである限り、現役女医があなたのメンタルに寄り添ってケアし、20年のベテラン男性仲人が「頼れる兄貴」として何度でもあなたを立ち上がらせます。
      </p>

    </article>

  </div>

</section>



<section className="w-[98%] mx-auto mt-12 rounded-3xl bg-gradient-to-br from-pink-50 to-white border border-pink-100 p-10">

<header className="space-y-4">

<div className="text-xs font-black tracking-widest text-pink-600 uppercase">
OUR IDEAL MEMBER
</div>

<h2 className="text-3xl font-black text-gray-900">
🩷 私たちが本気で応援したい方
</h2>

</header>

<div className="mt-8 space-y-6 text-lg leading-relaxed">

<p>
完璧なスペックは必要ありません。
</p>

<p>
必要なのは、
「本気で人生を変えたい」という覚悟だけです。
</p>

<div className="rounded-2xl bg-white border border-pink-100 p-6">

<p className="font-black text-pink-700">
私たちの戦略を信じ、
前向きに努力できる方には、
私たちは全責任を持って伴走します。
</p>

</div>

</div>

</section>

{/* =========================
    Our Three Promises
========================= */}

<section className="w-[98%] mx-auto mt-14 space-y-8">

  <header className="space-y-5">

    <div className="inline-flex items-center rounded-full bg-pink-100 px-4 py-2 text-xs font-black tracking-widest text-pink-700">
      🌟 OUR PROMISE
    </div>

    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-[1.25]">
      私たちの理念に共感していただける会員様への
      <span className="text-pink-600">3つのお約束</span>
    </h2>

    <p className="text-lg text-gray-700 leading-relaxed max-w-5xl">
      ご入会いただいた会員様には、一人ひとりの人生に本気で向き合い、
      私たちが責任を持って伴走いたします。
    </p>

  </header>

  <div className="grid gap-8 lg:grid-cols-3">

    {/* Promise 1 */}

    <article className="rounded-3xl border border-pink-100 bg-white p-8 shadow-sm hover:shadow-lg transition">

      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-600 font-black text-lg mb-6">
        01
      </div>

      <h3 className="text-xl font-black text-gray-900 leading-snug mb-5">
        あなたの可能性を
        <br />
        120％信じ抜きます
      </h3>

      <p className="text-gray-700 leading-relaxed">
        世間から「高望み」と言われる理想であっても、
        あなたが本気で挑戦する限り、
        私たちはその可能性を決して否定しません。
      </p>

      <div className="mt-6 rounded-2xl bg-pink-50 p-4">

        <p className="text-sm leading-relaxed text-pink-800 font-semibold">
          理想を諦めるのではなく、
          理想を実現するための戦略を徹底的に考えます。
        </p>

      </div>

    </article>

    {/* Promise 2 */}

    <article className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm hover:shadow-lg transition">

      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-black text-lg mb-6">
        02
      </div>

      <h3 className="text-xl font-black text-gray-900 leading-snug mb-5">
        感情論ではなく
        <br />
        次にやるべき具体策を示します
      </h3>

      <p className="text-gray-700 leading-relaxed">
        「もっと頑張りましょう」といった曖昧なアドバイスではなく、
        うまくいかない原因を分析し、
        明日から実践できる行動レベルまで落とし込みます。
      </p>

      <div className="mt-6 rounded-2xl bg-blue-50 p-4">

        <p className="text-sm leading-relaxed text-blue-800 font-semibold">
          常に「次に何をすれば良いか」が
          明確になるサポートをお約束します。
        </p>

      </div>

    </article>

    {/* Promise 3 */}

    <article className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm hover:shadow-lg transition">

      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 font-black text-lg mb-6">
        03
      </div>

      <h3 className="text-xl font-black text-gray-900 leading-snug mb-5">
        心が折れそうな時ほど
        <br />
        最強の味方であり続けます
      </h3>

      <p className="text-gray-700 leading-relaxed">
        婚活では思うように進まない時期もあります。
        そんな時こそ現役女医と20年以上の経験を持つベテランカウンセラーが、
        あなたの心に寄り添い、前へ進む力を支えます。
      </p>

      <div className="mt-6 rounded-2xl bg-emerald-50 p-4">

        <p className="text-sm leading-relaxed text-emerald-800 font-semibold">
          一人で悩ませず、
          最後まで伴走し続けることをお約束します。
        </p>

      </div>

    </article>

  </div>

</section>



{/* ========================================= */}
{/* Closing Message */}
{/* ========================================= */}

<section className="w-[98%] mx-auto rounded-3xl border border-pink-100 bg-gradient-to-br from-pink-50 via-white to-blue-50 shadow-sm p-8 lg:p-12">

  <div className="max-w-5xl mx-auto text-center space-y-8">

    <div className="inline-flex items-center rounded-full bg-pink-100 px-4 py-1 text-sm font-bold text-pink-700">
      🌸 最後にお伝えしたいこと
    </div>

    <blockquote className="rounded-2xl bg-white border border-pink-100 shadow-sm px-8 py-10">

      <p className="text-2xl lg:text-4xl font-black leading-relaxed text-gray-900">
        「この年齢だからこそ、もう絶対に負けたくない。<br className="hidden sm:block" />
        最高のパートナーと、最高の人生を始めたい。」
      </p>

    </blockquote>

    <div className="space-y-6 text-lg leading-9 text-gray-700">

      <p>
        その前向きな決意をお持ちのあなたを、私たちは両手を広げてお待ちしております。
      </p>

      <p>
        大阪梅田ドクターズ結婚相談所でお目にかかれる日を、心より楽しみにしております。
      </p>

    </div>

  </div>

</section>

{/* =========================
    ご入会までの4ステップ
========================= */}

<section className="w-[98%] mx-auto mt-16 space-y-10">

  <header className="text-center max-w-5xl mx-auto space-y-5">

    <div className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-xs font-black tracking-widest text-blue-700">
      START YOUR JOURNEY
    </div>

    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-[1.25]">
      ご入会までの
      <span className="text-blue-600">4ステップ</span>
    </h2>

    <p className="text-lg leading-relaxed text-gray-700">
      無理な勧誘は一切ありません。
      あなたのペースを尊重しながら、一歩ずつ安心して進めていただけます。
    </p>

  </header>

  <div className="grid gap-8 lg:grid-cols-4">

    {/* STEP 1 */}

    <article className="rounded-3xl border border-green-100 bg-white shadow-sm p-7 flex flex-col">

      <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 font-black flex items-center justify-center mb-5">
        01
      </div>

      <h3 className="text-xl font-black text-gray-900 mb-4">
        公式LINE
        <br />
        プライベート相談
      </h3>

      <p className="text-gray-700 leading-relaxed flex-grow">
        まずは公式LINEから、
        あなたのお悩みや現在の状況をお気軽にご相談ください。
      </p>

      <div className="mt-6 rounded-2xl bg-green-50 border border-green-100 p-4">

        <p className="text-sm font-semibold text-green-800">
          ✓ ベテランカウンセラーが
          完全個別で丁寧にお答えします。
        </p>

      </div>

    </article>

    {/* STEP 2 */}

    <article className="rounded-3xl border border-blue-100 bg-white shadow-sm p-7 flex flex-col">

      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 font-black flex items-center justify-center mb-5">
        02
      </div>

      <h3 className="text-xl font-black text-gray-900 mb-4">
        無料
        <br />
        個別カウンセリング
      </h3>

      <p className="text-gray-700 leading-relaxed flex-grow">
        LINE相談を経て、さらに深く対話をご希望の方のみ、無料面談へお進みいただけます。
      </p>

      <div className="mt-6 rounded-2xl bg-blue-50 border border-blue-100 p-4">

        <p className="text-sm font-semibold text-blue-800">
          ✓ 落ちついた空間であなたの歩みを伺います。強引な入会誘導は一切ございません。
        </p>

      </div>

    </article>

    {/* STEP 3 */}

    <article className="rounded-3xl border border-pink-100 bg-white shadow-sm p-7 flex flex-col">

      <div className="w-12 h-12 rounded-full bg-pink-100 text-pink-700 font-black flex items-center justify-center mb-5">
        03
      </div>

      <h3 className="text-xl font-black text-gray-900 mb-4">
        これからの方向性を相談
      </h3>

      <p className="text-gray-700 leading-relaxed flex-grow">
        対話をもとに、女医のロジカル分析と心理アプローチから、あなたに最適な婚活の方向性を共有。
      </p>

      <div className="mt-6 rounded-2xl bg-pink-50 border border-pink-100 p-4">

        <p className="text-sm font-semibold text-pink-800">
          ✓  あなた自身の「納得感」を最も大切にしながら、これからの進み方を一緒に考えます。
        </p>

      </div>

    </article>

    {/* STEP 4 */}

    <article className="rounded-3xl border border-amber-100 bg-white shadow-sm p-7 flex flex-col">

      <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 font-black flex items-center justify-center mb-5">
        04
      </div>

      <h3 className="text-xl font-black text-gray-900 mb-4">
        洗練された
        <br />
        婚活スタート
      </h3>

      <p className="text-gray-700 leading-relaxed flex-grow">
        独自の会話トレーニング（EQ向上）や外見のブランディングを行い、最高の状態で活動を開始。
      </p>

      <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-100 p-4">

        <p className="text-sm font-semibold text-amber-800">
          ✓  交際中のLINEサポートからさまざまな決断まで、カウンセラーが常にあなたの傍らで伴走します。
        </p>

      </div>

    </article>

  </div>

</section>

{/* =========================
    Final LINE CTA
========================= */}

<section className="w-[98%] mx-auto mt-16 mb-20 rounded-3xl overflow-hidden border border-green-200 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 shadow-xl">

  <div className="px-8 py-12 sm:px-12 sm:py-16 text-center">

    {/* Badge */}

    <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur px-5 py-2 text-xs font-black tracking-widest text-white">
      📱 OFFICIAL LINE
    </div>

    {/* Heading */}

    <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.25]">
      まずはLINEで、
      <br />
      気軽に相談してみませんか？
    </h2>

    {/* Description */}

    <p className="mt-6 max-w-4xl mx-auto text-lg sm:text-xl leading-relaxed text-green-50">
      婚活の悩みやご不安は、人それぞれ違います。
      <br />
      あなたの状況に合わせて、現役女医と20年以上の経験を持つ
      ベテランカウンセラーが丁寧にお答えします。
    </p>

    {/* Trust boxes */}

    <div className="mt-10 grid gap-4 sm:grid-cols-3">

      <div className="rounded-2xl bg-white/15 backdrop-blur p-5">
        <p className="text-2xl mb-2">💬</p>
        <p className="font-black text-white">
          完全個別相談
        </p>
        <p className="text-sm text-green-100 mt-2">
          あなた専用のプライベート相談
        </p>
      </div>

      <div className="rounded-2xl bg-white/15 backdrop-blur p-5">
        <p className="text-2xl mb-2">🕒</p>
        <p className="font-black text-white">
          24時間受付
        </p>
        <p className="text-sm text-green-100 mt-2">
          お好きなタイミングでご相談可能
        </p>
      </div>

      <div className="rounded-2xl bg-white/15 backdrop-blur p-5">
        <p className="text-2xl mb-2">🔒</p>
        <p className="font-black text-white">
          秘密厳守
        </p>
        <p className="text-sm text-green-100 mt-2">
          プライバシーは完全に保護されます
        </p>
      </div>

    </div>

    {/* CTA */}

    <div className="mt-12">

      <button className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-xl font-black text-green-700 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">

        <span className="text-2xl">📱</span>

        <span>
          公式LINEで無料相談する
        </span>

        <span className="text-lg">
          →
        </span>

      </button>

    </div>

    {/* Bottom note */}

    <div className="mt-8 space-y-2">

      <p className="text-sm font-semibold text-green-100">
        ✓ 無理な勧誘は一切ありません
      </p>

      <p className="text-sm font-semibold text-green-100">
        ✓ 匿名でのご相談も可能です
      </p>

      <p className="text-sm font-semibold text-green-100">
        ✓ あなたのペースでゆっくりご検討いただけます
      </p>

    </div>

  </div>

</section>
    </div>

  );
}