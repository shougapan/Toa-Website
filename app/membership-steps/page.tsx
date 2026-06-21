import { Phone, MessageCircle, FileText, CheckCircle2 } from "lucide-react";

export default function JoiningFlowPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="w-full px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full bg-[#D9889D]/10 px-4 py-2 text-sm font-bold text-[#D9889D]">
              ご入会ガイド
            </span>

            <h1 className="mt-5 text-3xl sm:text-5xl font-black text-gray-900">
              入会までの流れ
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              無料カウンセリングから活動スタートまで、
              安心して進めていただける4ステップをご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full px-3 sm:px-6 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* STEP 1 */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-[#D9889D] text-white px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white text-[#D9889D] flex items-center justify-center font-black text-lg">
                  1
                </div>

                <div>
                  <p className="text-xs font-black tracking-widest">
                    STEP 1
                  </p>
                  <h2 className="text-lg sm:text-2xl font-black">
                    無料カウンセリング・LINE相談のご予約
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                ホームページの専用フォーム、または公式LINEよりお気軽にお申し込みください。
              </p>

              <div className="mt-6 rounded-2xl bg-[#FAF8F5] p-5 border border-pink-100">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#D9889D]" />
                  <p className="font-black text-[#D9889D]">
                    【おすすめ】
                  </p>
                </div>

                <p className="mt-2 text-gray-700">
                  LINEコール（通話・ビデオ通話）やzoomでの無料カウンセリング
                </p>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-[#D9889D] text-white px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white text-[#D9889D] flex items-center justify-center font-black text-lg">
                  2
                </div>

                <div>
                  <p className="text-xs font-black tracking-widest">
                    STEP 2
                  </p>
                  <h2 className="text-lg sm:text-2xl font-black">
                    無料カウンセリング・婚活シミュレーション
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                あなたのお話をじっくり伺う時間を何よりも大切にしています。
                （所要時間：約60分）
              </p>

              <h3 className="mt-8 text-xl font-black text-gray-900">
                選べる3つの相談方法
              </h3>

              <div className="mt-5 grid gap-4">

                <div className="rounded-2xl bg-[#FAF8F5] p-5">
                  <p className="font-black text-[#D9889D]">
                    🌸 LINEコール（ビデオ通話）
                  </p>
                  <p className="mt-2 text-gray-700">
                    スマホ1つで、ご自宅からお気軽に
                  </p>
                </div>

                <div className="rounded-2xl bg-[#FAF8F5] p-5">
                  <p className="font-black text-[#D9889D]">
                    🌸 対面でのご相談
                  </p>
                  <p className="mt-2 text-gray-700">
                    落ち着いたカフェにて。
                  </p>
                </div>

                <div className="rounded-2xl bg-[#FAF8F5] p-5">
                  <p className="font-black text-[#D9889D]">
                    🌸 オンライン（Zoom）
                  </p>
                  <p className="mt-2 text-gray-700">
                    パソコンの画面で話したい方に
                  </p>
                </div>

              </div>

              <div className="mt-6 rounded-2xl bg-pink-50 border border-pink-100 p-5">
                <p className="font-black text-[#D9889D]">
                  🩷お約束
                </p>

                <p className="mt-2 text-gray-700">
                  ひつこい勧誘はいたしません。安心してお気持ちをお聞かせください。
                </p>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-[#D9889D] text-white px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white text-[#D9889D] flex items-center justify-center font-black text-lg">
                  3
                </div>

                <div>
                  <p className="text-xs font-black tracking-widest">
                    STEP 3
                  </p>
                  <h2 className="text-lg sm:text-2xl font-black">
                    じっくりご検討（面談終了後）
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                LINEコール等での無料面談が終わりましたら、一度スマホを置いて、
                ご自宅でじっくりと入会をご検討ください。
              </p>

              <div className="mt-6 bg-[#FAF8F5] rounded-2xl p-5">
                <ul className="space-y-4 text-gray-700">
                  <li>
                    「カウンセラーとの相性は良さそうか？」
                  </li>
                  <li>
                    「料金やサポート内容に納得できたか？」
                  </li>
                </ul>

                <p className="mt-4 font-semibold text-gray-900">
                  をゆっくりお考え頂けます。
                </p>
              </div>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-[#D9889D] text-white px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white text-[#D9889D] flex items-center justify-center font-black text-lg">
                  4
                </div>

                <div>
                  <p className="text-xs font-black tracking-widest">
                    STEP 4
                  </p>
                  <h2 className="text-lg sm:text-2xl font-black">
                    必要書類のご提出・ご入会手続き
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="inline-flex items-center rounded-full bg-[#D9889D] text-white px-4 py-2 font-black mb-6">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                活動スタート！
              </div>

              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                「この相談所で婚活を始めたい！」とお気持ちが決まりましたら、
                入会手続きと書類の提出をお願い致します。
              </p>

              <div className="mt-8 space-y-5">

                <div className="rounded-2xl bg-[#FAF8F5] p-5 border border-pink-100">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-5 h-5 text-[#D9889D]" />
                    <h3 className="font-black text-[#D9889D]">
                      【遠方でも安心！郵送＆オンライン書類提出に対応】
                    </h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    契約手続き書類【概要書面および入会書類】は面談での充分な説明後、
                    順に郵送で行います。
                  </p>
                </div>

                <div className="rounded-2xl bg-[#FAF8F5] p-5 border border-pink-100">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageCircle className="w-5 h-5 text-[#D9889D]" />
                    <h3 className="font-black text-[#D9889D]">
                      【書類はスマホで提出OK】
                    </h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    独身証明書や身分証明書などの必要書類は、
                    スマホのカメラで撮影してLINEで写真を送るだけで提出が完了します。
                    個人情報保護できる通信を利用します。
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}