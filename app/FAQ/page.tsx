import { HelpCircle } from "lucide-react";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">

      {/* Header */}
      <section className="bg-white border-b border-gray-100">
        <div className="w-full px-3 sm:px-3 py-5 sm:py-8">
          <div className="max-w-6xl mx-auto text-center">

            <h1 className="text-2xl sm:text-5xl font-black text-gray-900 leading-snug">
              婚活、結婚相談所でよくある質問
            </h1>

          </div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full px-2 sm:px-6 py-2 sm:py-2">
        <div className="max-w-6xl mx-auto w-full space-y-3 sm:space-y-5">

          {/* FAQ 1 */}
          <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">

            <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
              <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
              <h2 className="text-base sm:text-xl font-black leading-snug">
                📌 Q. 本当に恋愛経験が一度もなくても、結婚できますか？
              </h2>
            </div>

            <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed space-y-3">
              <p>
                A. はい、全く問題ありません。当相談所では、カウンセラー歴20年のベテランが、
                お見合いのステップ（服装、挨拶、会話の内容、LINEの頻度）をすべて細かくレクチャーします。
              </p>

              <p>
                さらに現役医師の監修による心理的アプローチも掛け合わせるため、
                恋愛経験が少ない方ほどアドバイスを素直に吸収され、
                半年〜1年以内にスピード成婚されるケースが非常に多いです。
              </p>
            </div>

          </div>

          {/* FAQ 2 */}
          <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">

            <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
              <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
              <h2 className="text-base sm:text-xl font-black leading-snug">
                📌 Q. 固定事務所がないとのことですが、入会手続きはどこでしますか？
              </h2>
            </div>

            <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
              <p>
                A. ご入会のお手続きや書類のご提出、定期的な作戦会議（面談）は、
                大阪・関西圏の主要駅近くにあるホテルのラウンジや、
                落ち着いたカフェ、当社提携契約の事務所で行います。
              </p>
              <p className="mt-2">
                また、すべてオンラインと郵送で完結させることも可能です。
              </p>
            </div>

          </div>

          {/* FAQ 3 */}
          <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">

            <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
              <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
              <h2 className="text-base sm:text-xl font-black leading-snug">
                📌 Q. 出張面談〔事前予約必要〕の際、カウンセラーの交通費やカフェ代の負担はどうなりますか？
              </h2>
            </div>

            <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
              <p>
                A. カウンセラーの出張交通費やカフェ代は一切いただきませんのでご安心ください。
              </p>
              <p className="mt-2">
                素敵な空間でリラックスしながらお話しできるよう、
                事前にあなたに便利なおすすめスポットをご提案させていただきます。
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}