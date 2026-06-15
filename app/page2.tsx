import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-800">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
          <div>
            <h1 className="text-2xl font-bold text-rose-800 tracking-tight">
              大阪梅田結婚相談所
            </h1>
            <p className="text-xs text-gray-500">女性医師監修</p>
          </div>

          <nav className="hidden md:block">
            <ul className="flex gap-6 text-sm font-medium text-gray-600">
              <li className="text-rose-500 font-semibold">HOME</li>
              <li className="hover:text-rose-500 cursor-pointer">特徴</li>
              <li className="hover:text-rose-500 cursor-pointer">選ばれる理由</li>
              <li className="hover:text-rose-500 cursor-pointer">料金</li>
              <li className="hover:text-rose-500 cursor-pointer">スタッフ</li>
              <li className="hover:text-rose-500 cursor-pointer">アクセス</li>
            </ul>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 min-h-[750px]">

          {/* LEFT */}
          <div className="flex items-center px-6 py-16 lg:py-0">
            <div>

              <p className="mb-4 text-sm tracking-[0.2em] text-rose-500">
                OSAKA UMEDA MARRIAGE AGENCY
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-rose-900">
                現役医師がデータとロジックで導く、
                <br />
                最短ルートの結婚相談所。
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                医学的アプローチで叶える、あなたのための成婚ストーリー。
                <br />
                感覚ではなく、科学で婚活をサポートします。
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-full bg-rose-500 px-8 py-4 text-white font-semibold shadow-md hover:bg-rose-600 transition">
                  無料婚活診断
                </button>

                <button className="rounded-full bg-orange-400 px-8 py-4 text-white font-semibold shadow-md hover:bg-orange-500 transition">
                  無料LINE相談
                </button>
              </div>

              {/* Feature cards */}
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "科学的分析",
                    text: "データに基づく婚活設計"
                  },
                  {
                    title: "医師監修",
                    text: "信頼性の高いサポート"
                  },
                  {
                    title: "駅直結",
                    text: "梅田から徒歩すぐ"
                  }
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border bg-white p-5 shadow-sm"
                  >
                    <h3 className="font-semibold text-rose-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT (image half) */}
          <div className="relative hidden lg:block">
            <Image
              src="/image1.png"
              alt=""
              fill
              className="object-cover"
              priority
            />

            {/* soft overlay for luxury feel */}
            <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-white/40" />
          </div>

        </div>
      </section>

    </main>
  );
}