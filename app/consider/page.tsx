export default function MarriageAdvicePage() {
  return (
    <main className="bg-[#faf8f5]">
      <div className="mx-auto max-w-3xl px-4 py-6">

        {/* Small Heading */}
        <p className="text-center text-pink-600 font-semibold text-sm tracking-wide">
          いい人がいない！と思う30代のあなたへ
        </p>

        {/* Main Title */}
        <h1 className="mt-2 text-3xl font-bold leading-tight text-gray-900">
          「いい人が減った？」と思い始めた30代のあなたへ、
          <span className="text-pink-600">
            大阪梅田結婚相談所
          </span>
          への入会は効率いい選択肢の一つ。
        </h1>

        {/* Intro Card */}
        <section className="mt-5 rounded-2xl bg-white p-5 shadow-sm border border-pink-100">

          <h2 className="text-xl font-bold text-gray-900 leading-snug">
            タイパ至上主義！
            <br />
            30代の婚活に大阪・梅田の結婚相談所が
            最強に効率的な理由
          </h2>

          <div className="mt-5 space-y-4 text-[15px] leading-7 text-gray-700">

            <p>
              20代の頃は普通に生活しているだけで
              「素敵だな」と思える人に出会えていたはず。
              しかし30代になると、周りの素敵な人の多くは
              すでに結婚しています。
            </p>

            <p>
              マッチングアプリを開いても、
              理想の相手になかなか巡り会えない。
              「いい人がいない」と感じるのは、
              あなた一人ではありません。
            </p>

            <p>
              ここでいう「いい人」とは、
              優しく、気遣いができ、
              清潔感があり、
              経済的・精神的に自立した人。
            </p>

            <p>
              このような魅力的な人は、
              学生時代や20代のうちに
              パートナーを見つけ、
              婚活市場から離れていくことが多いのです。
            </p>

          </div>
        </section>

        {/* Main Article */}

        <article className="mt-8 space-y-5 text-[15px] leading-7 text-gray-700">

          <h3 className="text-xl font-bold text-gray-900">
            なぜ結婚相談所なの？
          </h3>

          <p>
            自然な出会いが減る30代。
            次に選ばれるのがマッチングアプリですが、
            アプリには結婚を前提としていない利用者もいます。
          </p>

          <p>
            結婚相談所では、
            独身証明や本人確認が徹底されているため、
            安心して婚活を進めることができます。
          </p>

          <div className="rounded-xl bg-pink-50 border border-pink-200 p-4">

            <h4 className="font-bold text-pink-700">
              結婚相談所のメリット
            </h4>

            <ul className="mt-3 space-y-2 list-disc pl-5">

              <li>独身・本人確認済み</li>

              <li>結婚への真剣度が高い</li>

              <li>スケジュール調整を代行</li>

              <li>時間を無駄にしない</li>

              <li>ハイスペックな会員との出会い</li>

            </ul>

          </div>

        </article>

        {/* Doctor Message */}

        <section className="mt-8 rounded-2xl bg-white border border-pink-200 p-5 shadow-sm">

          <div className="text-lg font-bold text-pink-600">
            🩷 女医からのメッセージ
          </div>

          <div className="mt-4 space-y-4 text-[15px] leading-7 text-gray-700">

            <p>
              周囲が結婚し始め、
              将来について考える30代。
            </p>

            <p>
              私たちは様々な場所で異性と出会いますが、
              SNSやアプリには年齢・職業・年収などの
              詐称リスクも存在します。
            </p>

            <p>
              大阪梅田結婚相談所では、
              身元審査をクリアした方だけが活動しています。
            </p>

            <p>
              安心して、
              本気で結婚を考えている方との出会いを
              ご提供しています。
            </p>

          </div>

        </section>

        {/* Bottom CTA */}

        <section className="mt-10 rounded-3xl bg-pink-600 p-6 text-center text-white">

          <h2 className="text-2xl font-bold">
            素敵なお相手に出会いたいあなたへ
          </h2>

          <p className="mt-3 text-pink-50 leading-7 text-[15px]">
            時間を大切にしながら、
            真剣な出会いを探したい方は、
            ぜひ大阪梅田結婚相談所へお越しください。
          </p>

          <button className="mt-6 w-full rounded-full bg-white py-3 text-base font-semibold text-pink-600 shadow">
            無料相談はこちら
          </button>

        </section>

      </div>
    </main>
  );
}