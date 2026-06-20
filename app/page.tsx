import React from "react";

export default function Home() {
  return (
    <div className="space-y-16 pb-24 md:pb-12">
      
      {/* --- HERO SECTION --- */}
      {/* Aspect-square on mobile keeps the space large enough to accommodate the bigger text comfortably */}
<section className="mx-4 sm:-mx-6 lg:-mx-8 relative aspect-square max-h-[500px] w-full overflow-hidden rounded-b-2xl md:rounded-2xl shadow-sm">
  {/* 1. Background Image */}
  <img
    src="/couple1.jpg"
    alt="Marriage Consultation Hero"
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

  {/* 2. Lightened Contrast Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent mix-blend-multiply" />

  {/* 3. Hero Content */}
  {/* CHANGED: Increased top padding (pt-14 sm:pt-20 md:pt-24) to nudge the entire block downward */}
  <div className="absolute inset-0 flex flex-col justify-start items-start p-6 pt-8 sm:p-11 sm:pt-20 md:p-15 md:pt-24 max-w-xl text-left z-10">
    
    {/* Top Badge/Kicker */}
    <span className="inline-block text-xl md:text-sm font-bold tracking-wider text-rose-300 bg-black/40 border border-white/20 backdrop-blur-md px-2 py-0.5 rounded-full mb-6 shadow-sm opacity-75">
      大阪梅田結婚相談所
    </span>

    {/* Main Title */}
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-white tracking-tight drop-shadow-[0_3px_5px_rgba(0,0,0,0.6)]">
      <span className="block text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-sm">
        現役女医監修と<br/>ベテランカウンセラー
      </span>
      がサポートする、<br className="hidden sm:inline" /><br/>
      あなただけの <span className="text-rose-300 drop-shadow-sm font-extrabold"><br/>唯一無二の婚活</span>
    </h1>
    
    {/* Subtitle / Description */}
    <p className="mt-4 text-xs sm:text-sm md:text-base text-pink-100 max-w-md leading-relaxed font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
      プロフェッショナルな2つの視点から、あなたに寄り添った最適なパートナー探しをサポートいたします。
    </p>
  </div>
</section>
      {/* --- STRENGTHS SECTION --- */}
{/* --- STRENGTHS SECTION --- */}
<section className="space-y-3">
  <div className="text-center">
    <h2 className="text-2xl font-black tracking-wide text-gray-950 md:text-3xl">
      当相談所が選ばれる3つの理由
    </h2>
    <div className="mx-auto mt-2 h-1 w-12 rounded bg-rose-400" />
  </div>

  {/* Strict side-by-side grid across all screen sizes */}
  <div className="grid grid-cols-3 gap-1.5 sm:gap-4 md:gap-6">
    
    {/* Card 1 */}
    <div className="flex flex-col items-center rounded-2xl border border-rose-100 bg-white p-2 sm:p-4 md:p-5 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-1 sm:mb-2 flex h-7 w-7 sm:h-9 sm:w-9 md:h-11 md:w-11 items-center justify-center rounded-full bg-rose-50 text-xs sm:text-base md:text-lg font-extrabold text-rose-600">
        ♥️ 01
      </div>
      {/* BUMPED: Title size increased to text-base / md:text-2xl */}
      <h3 className="text-base font-black text-gray-950 md:text-2xl tracking-tight leading-tight">
        現役女医のプロデュース
      </h3>
      {/* BUMPED: Body text size increased to text-sm / md:text-lg */}
      <p className="mt-1.5 text-sm md:text-lg font-bold leading-normal sm:leading-snug text-gray-900">
        女医監修×キャリア20年ベテランが仕掛ける「最高峰の婚活プロデュース」
      </p>
      
      {/* BUMPED: Link text size increased to text-xs / md:text-base */}
      <a href="#strength1" className="mt-auto pt-2 text-xs md:text-base font-black text-rose-500 hover:text-rose-600 hover:underline transition-colors duration-200">
        詳細を見る <span className="inline-block text-[10px] md:text-sm">▶</span>
      </a>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center rounded-2xl border border-rose-100 bg-white p-2 sm:p-4 md:p-5 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-1 sm:mb-2 flex h-7 w-7 sm:h-9 sm:w-9 md:h-11 md:w-11 items-center justify-center rounded-full bg-rose-50 text-xs sm:text-base md:text-lg font-extrabold text-rose-600">
        ♥️ 02
      </div>
      {/* BUMPED: Title size increased to text-base / md:text-2xl */}
      <h3 className="text-base font-black text-gray-950 md:text-2xl tracking-tight leading-tight">
        あなたの魅力を最大化
      </h3>
      {/* BUMPED: Body text size increased to text-sm / md:text-lg */}
      <p className="mt-1.5 text-sm md:text-lg font-bold leading-normal sm:leading-snug text-gray-900">
        出会った瞬間に『また会いたい』と思わせるさまざまな戦略をアドバイス
      </p>
      
      {/* BUMPED: Link text size increased to text-xs / md:text-base */}
      <a href="#strength2" className="mt-auto pt-2 text-xs md:text-base font-black text-rose-500 hover:text-rose-600 hover:underline transition-colors duration-200">
        詳細を見る <span className="inline-block text-[10px] md:text-sm">▶</span>
      </a>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center rounded-2xl border border-rose-100 bg-white p-2 sm:p-4 md:p-5 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-1 sm:mb-2 flex h-7 w-7 sm:h-9 sm:w-9 md:h-11 md:w-11 items-center justify-center rounded-full bg-rose-50 text-xs sm:text-base md:text-lg font-extrabold text-rose-600">
        ♥️ 03
      </div>
      {/* BUMPED: Title size increased to text-base / md:text-2xl */}
      <h3 className="text-base font-black text-gray-950 md:text-2xl tracking-tight leading-tight">
        安全な会員基盤
      </h3>
      {/* BUMPED: Body text size increased to text-sm / md:text-lg */}
      <p className="mt-1.5 text-sm md:text-lg font-bold leading-normal sm:leading-snug text-gray-900">
        証明書の提出が必須の、安心な network。
      </p>
      
      {/* BUMPED: Link text size increased to text-xs / md:text-base */}
      <a href="#strength3" className="mt-auto pt-2 text-xs md:text-base font-black text-rose-500 hover:text-rose-600 hover:underline transition-colors duration-200">
        詳細を見る <span className="inline-block text-[10px] md:text-sm">▶</span>
      </a>
    </div>

  </div>
</section>

      {/* --- DOCTOR'S SUPPORT SECTION --- */}
      <section className="mx-auto max-w-4xl rounded-2xl border border-rose-100 bg-gradient-to-b from-white to-[#FAF8F5]/40 p-6 sm:p-10 md:p-14 shadow-sm">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold tracking-wider text-rose-400 uppercase block md:text-sm">
            Message
          </span>
          <h2 className="text-xl font-black text-gray-800 sm:text-2xl md:text-3xl leading-snug">
            現役女医として病院での経験から学んだ、<br className="hidden sm:inline" />
            優しくて手厚い「心の保健室サポート」
          </h2>
        </div>

        <div className="space-y-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-normal tracking-wide">
          <p>
            病院の診察室で、ドクターがパソコンの画面ばかりを見て、あなたの顔をまともに見なければ寂しくて冷たい気持ちになりますよね。<br />
            私が医療現場で一番大切にしているのは、<span className="font-bold text-gray-900 border-b-2 border-rose-300 bg-rose-50/50 px-1">「患者様の気持ちに寄り添ってお話をお伺いすることです」</span>
          </p>
          
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
            合理的な認識や、経験に基づく適切な判断があるのは当然いますが、さらなる人として温かみを加えて、ご満足いただけるサポートを提供させていただけるよう尽力いたします。
          </p>
          
          <p className="pt-4 font-bold text-gray-950 md:text-2xl leading-snug">
            医師としても経験を積み、個人としても人生のさまざまな状況を経たからこそ見える景色があると考えています。<br />
            今、この時にご一緒できる会員様を温かい気持ちでお待ちしています。
          </p>
        </div>
      </section>

    </div>
  );
}