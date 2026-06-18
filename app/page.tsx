import React from "react";

export default function Home() {
  return (
    <div className="space-y-16 pb-24 md:pb-12">
      
      {/* --- HERO SECTION --- */}
      <section className="-mx-4 sm:-mx-6 lg:-mx-8 relative h-[55vh] min-h-[380px] md:h-[500px] overflow-hidden rounded-b-2xl md:rounded-2xl shadow-sm">
        {/* 1. Your Light Blue Background Image */}
        <img
          src="/couple1.jpg"
          alt="Marriage Consultation Hero"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* 2. Soft Luminous Cream Gradient Mask Fade */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5]/95 via-[#FAF8F5]/60 to-transparent pointer-events-none" />

        {/* 3. Hero Minimalist Text Content */}
        <div className="absolute inset-0 flex flex-col justify-start items-start p-6 sm:p-12 md:p-16 pt-12 sm:pt-16 md:pt-20 max-w-2xl text-left">
          {/* Main Title - Deep Elegant Navy Blue */}
          <h1 className="text-3xl font-black leading-tight text-gray-800 md:text-4xl lg:text-5xl tracking-tight">
            Hello there
          </h1>
          
          {/* Subtitle - Warm Muted Rose */}
          <p className="mt-4 text-sm font-bold text-fuchsia-400 md:text-base lg:text-lg max-w-sm leading-relaxed">
            {/* Enter subtitle text here if needed */}
          </p>
        </div>
      </section>


      {/* --- STRENGTHS SECTION --- */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-xl font-bold tracking-wide text-gray-800 md:text-2xl">
            当相談所が選ばれる3つの理由
          </h2>
          <div className="mx-auto mt-2 h-1 w-12 rounded bg-rose-400" />
        </div>

        {/* Strict side-by-side grid across all screen sizes */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          {/* Card 1 */}
          <div className="flex flex-col items-center rounded-2xl border border-rose-100 bg-white/80 p-3 sm:p-4 md:p-6 text-center shadow-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-2 md:mb-4 flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-50 text-sm sm:text-base md:text-xl font-bold text-rose-500">
              01
            </div>
            <h3 className="text-xs font-bold text-gray-800 sm:text-sm md:text-lg tracking-tight">
              現役女医のプロデュース
            </h3>
            <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm leading-normal sm:leading-relaxed text-gray-600">
              女医監修×キャリア20年ベテランが仕掛ける「最高峰の婚活プロデュース」
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center rounded-2xl border border-rose-100 bg-white/80 p-3 sm:p-4 md:p-6 text-center shadow-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-2 md:mb-4 flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-50 text-sm sm:text-base md:text-xl font-bold text-rose-500">
              02
            </div>
            <h3 className="text-xs font-bold text-gray-800 sm:text-sm md:text-lg tracking-tight">
              あなたの魅力を最大化
            </h3>
            <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm leading-normal sm:leading-relaxed text-gray-600">
              出会った瞬間に『また会いたい』と思わせるさまざまな戦略をアドバイス
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center rounded-2xl border border-rose-100 bg-white/80 p-3 sm:p-4 md:p-6 text-center shadow-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-2 md:mb-4 flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-rose-50 text-sm sm:text-base md:text-xl font-bold text-rose-500">
              03
            </div>
            <h3 className="text-xs font-bold text-gray-800 sm:text-sm md:text-lg tracking-tight">
              安全な会員基盤
            </h3>
            <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm leading-normal sm:leading-relaxed text-gray-600">
              証明書の提出が必須の、安心な network。
            </p>
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

        {/* Increased base text sizing from text-sm/base to text-base/lg/xl */}
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
            合理的な認識や、経験に基づく適切な判断があるのは当然ですが、さらなる人として温かみを加えて、ご満足いただけるサポートを提供させていただけるよう尽力いたします。
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