import Image from "next/image";

export default function MarriageStoriesPage() {
  return (
    <main className="bg-white">

      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 py-8 text-center">
        <h1 className="text-2xl sm:text-4xl font-black text-gray-900">
          成婚エピソード
        </h1>
        <p className="mt-2 text-gray-600 font-medium">
          ベテランカウンセラーがサポートした成婚のカタチ
        </p>
      </section>

      {/* Card 1 */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm bg-white">

          <div className="relative w-full h-64 sm:h-80">
            <Image
              src="/storyA.jpg"
              alt="成婚エピソード1"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 sm:p-10 space-y-4">
            <h2 className="text-lg sm:text-xl font-black text-gray-900">
              32歳女性 医師 × 39歳男性 医師
            </h2>

            <div className="text-sm font-semibold text-gray-700 space-y-1">
              <p>❤️ 32歳女性　医師</p>
              <p>🩵 お相手：39歳男性　医師</p>
            </div>

            <div>
              <p className="text-xs font-black text-gray-400 uppercase">お悩み</p>
              <p className="text-gray-700">
                病院勤務が忙しく婚活の時間がない。医師と結婚したいけど職場は既婚者ばかり。
              </p>
            </div>

            <div>
              <p className="text-xs font-black text-gray-400 uppercase">サポート</p>
              <p className="text-gray-700">
                男性医師の中から共働き希望、尊敬できる女性を希望している男性を中心にご紹介
              </p>
            </div>

            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs font-black text-[#D9889D] uppercase">結果</p>
              <p className="text-gray-900 font-semibold">
                活動開始から6ヶ月。女性医師の仕事に深い理解を持つ、誠実なハイステータス医師と成婚退会されました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Card 2 */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm bg-white">

          <div className="relative w-full h-64 sm:h-80">
            <Image src="/storyB.jpg" alt="成婚エピソード2" fill className="object-cover" />
          </div>

          <div className="p-6 sm:p-10 space-y-4">
            <h2 className="text-lg sm:text-xl font-black text-gray-900">
              38歳男性 会社経営者 × 27歳女性
            </h2>

            <div className="text-sm font-semibold text-gray-700 space-y-1">
              <p>🩵 38歳男性 会社経営者</p>
              <p>❤️ お相手：27歳女性 家事手伝い</p>
            </div>

            <div>
              <p className="text-xs font-black text-gray-400 uppercase">お悩み</p>
              <p className="text-gray-700">
                会社経営者。他社婚活で成果が出ず、自分は結婚できないのではと諦めかけていた。
              </p>
            </div>

            <div>
              <p className="text-xs font-black text-gray-400 uppercase">サポート</p>
              <p className="text-gray-700">
                高収入男性なのに成婚にいたらなかった原因を優しく分析。価値観の偏りを認識していただき、女性を包み込むエスコート力をアドバイス
              </p>
            </div>

            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs font-black text-[#D9889D] uppercase">結果</p>
              <p className="text-gray-900 font-semibold">
                8ヶ月後、お互い自然体でいられる家庭的で笑顔のかわいい女性と巡り合い成婚されました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Card 3 */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm bg-white">

          <div className="relative w-full h-64 sm:h-80">
            <Image src="/storyC.jpg" alt="成婚エピソード3" fill className="object-cover" />
          </div>

          <div className="p-6 sm:p-10 space-y-4">
            <h2 className="text-lg sm:text-xl font-black text-gray-900">
              26歳女性　会社員 × 35歳男性 医師
            </h2>

            <div className="text-sm font-semibold text-gray-700 space-y-1">
              <p>❤️ 26歳女性　会社員</p>
              <p>🩵 お相手：35歳男性　医師</p>
            </div>

            <div>
              <p className="text-xs font-black text-gray-400 uppercase">お悩み</p>
              <p className="text-gray-700">
                医師と結婚したいが周囲にもツテがなくアプリでもうまくいかなかった。
              </p>
            </div>

            <div>
              <p className="text-xs font-black text-gray-400 uppercase">サポート</p>
              <p className="text-gray-700">
                可愛らしい女性でしたのでプロフィールで魅力を最大限にお伝え。ベテランカウンセラーの人脈も生かしてお見合い成立。男性医師が本当に求めている女性像や好感をもたれる外見など様々なアドバイスをしました。
              </p>
            </div>

            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs font-black text-[#D9889D] uppercase">結果</p>
              <p className="text-gray-900 font-semibold">活動から10ヶ月で、誠実な勤務医と成婚を掴み取られました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Card 4 */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm bg-white">

          <div className="relative w-full h-64 sm:h-80">
            <Image src="/storyD.jpg" alt="成婚エピソード4" fill className="object-cover" />
          </div>

          <div className="p-6 sm:p-10 space-y-4">
            <h2 className="text-lg sm:text-xl font-black text-gray-900">
              29歳女性 会社員× 32歳男性会社員
            </h2>

            <div className="text-sm font-semibold text-gray-700 space-y-1">
              <p>❤️ 29歳女性　会社員</p>
              <p>🩵 お相手：32歳男性　会社員</p>
            </div>

            <div>
              <p className="text-xs font-black text-gray-400 uppercase">お悩み</p>
              <p className="text-gray-700">
                結婚後お仕事をやめたい、居住地は他府県はさけたい。
              </p>
            </div>

            <div>
              <p className="text-xs font-black text-gray-400 uppercase">サポート</p>
              <p className="text-gray-700">
                豊かな生活ができる年収のお相手にこだわらず、居心地の良さを重視する視点をアドバイス
              </p>
            </div>

            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs font-black text-[#D9889D] uppercase">結果</p>
              <p className="text-gray-900 font-semibold">
                8ヶ月後、男性の積極的なアピールの助けもあり徐々に価値観をすりあわせ成婚されました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Card 5 */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm bg-white">

          <div className="relative w-full h-64 sm:h-80">
            <Image src="/storyE.jpg" alt="成婚エピソード5" fill className="object-cover" />
          </div>

          <div className="p-6 sm:p-10 space-y-4">
            <h2 className="text-lg sm:text-xl font-black text-gray-900">
              38歳男性 検査技師 × 37歳女性 ピアニスト
            </h2>

            <div className="text-sm font-semibold text-gray-700 space-y-1">
              <p>🩵 38歳男性　検査技師</p>
              <p>❤️ お相手：37歳　ピアニスト</p>
            </div>

            <div>
              <p className="text-xs font-black text-gray-400 uppercase">お悩み</p>
              <p className="text-gray-700">
                恋愛経験がほとんどなく会話やデートが不安。
              </p>
            </div>

            <div>
              <p className="text-xs font-black text-gray-400 uppercase">サポート</p>
              <p className="text-gray-700">
                ベテラン仲人としてデート設計と会話シミュレーションを徹底サポート。素直に気持ちを表現する練習もおこないました。
              </p>
            </div>

            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs font-black text-[#D9889D] uppercase">結果</p>
              <p className="text-gray-900 font-semibold">
                活動か11ヶ月後、ピアニストの女性と出会い少しリードしてもらいながら人生初の交際からそのまま見事に成婚。
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}