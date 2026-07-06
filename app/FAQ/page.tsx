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


        <div className="space-y-4 sm:space-y-6">

  {/* Q. どのような人が入会していますか？ */}
  <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
    <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
      <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
      <h2 className="text-base sm:text-xl font-black leading-snug">
        📌 Q. どのような人が入会していますか？
      </h2>
    </div>
    <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
      <p>
        A. 20代〜50代を中心に、真剣に結婚を考えている独身の方のみが在籍しています。
        会社員、公務員、専門職など様々な職業の方が、普段の生活では出会えない理想のお相手を探されています。
      </p>
    </div>
  </div>

  {/* Q. 再婚（バツイチ・子持ち）ですが、お相手は見つかりますか？ */}
  <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
    <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
      <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
      <h2 className="text-base sm:text-xl font-black leading-snug">
        📌 Q. 再婚（バツイチ・子持ち）ですが、お相手は見つかりますか？
      </h2>
    </div>
    <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
      <p>
        A. はい、十分にチャンスはあります。近年は婚姻歴にこだわらない方や、理解のある方が増えています。
        当相談所でも多くの再婚・子連れ婚の方がご成婚されていますので、まずはご相談ください。
      </p>
    </div>
  </div>

  {/* Q. 誰にも知られずに（秘密で）婚活できますか？ */}
  <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
    <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
      <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
      <h2 className="text-base sm:text-xl font-black leading-snug">
        📌 Q. 誰にも知られずに（秘密で）婚活できますか？
      </h2>
    </div>
    <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
      <p>
        A. はい、可能です。プライバシーは厳重に守られます。
        会員サイト内では実名は公開されず、プロフィール写真の閲覧範囲を制限することもできます。
      </p>
    </div>
  </div>

  {/* Q. 平均してどれくらいの期間で成婚できますか？ */}
  <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
    <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
      <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
      <h2 className="text-base sm:text-xl font-black leading-snug">
        📌 Q. 平均してどれくらいの期間で成婚できますか？
      </h2>
    </div>
    <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
      <p>
        A. 個人差はありますが、多くの方が「活動開始から半年〜1年以内」にご成婚されています。
        もっと早い方もいらっしゃいます。
      </p>
    </div>
  </div>

  {/* Q. 「成婚」の定義は何ですか？ */}
  <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
    <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
      <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
      <h2 className="text-base sm:text-xl font-black leading-snug">
        📌 Q. 「成婚」の定義は何ですか？
      </h2>
    </div>
    <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
      <p>
        A. お互いに結婚の意思を固め、プロポーズが成功した段階を「成婚」としています。
      </p>
    </div>
  </div>

  {/* Q. 他の相談所から乗り換える人はいますか？ */}
  <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
    <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
      <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
      <h2 className="text-base sm:text-xl font-black leading-snug">
        📌 Q. 他の相談所から乗り換える人はいますか？
      </h2>
    </div>
    <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
      <p>
        A. はい、多くいらっしゃいます。当所では「手厚いサポート」で選ばれています。
      </p>
    </div>
  </div>

  {/* Q. 交際中にトラブルがあったらどうすればいいですか？ */}
  <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
    <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
      <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
      <h2 className="text-base sm:text-xl font-black leading-snug">
        📌 Q. 交際中にトラブルがあったらどうすればいいですか？
      </h2>
    </div>
    <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
      <p>
        A. アドバイザーが間に入って迅速に対応します。お相手へのお別れの連絡も代行します。
      </p>
    </div>
  </div>

  {/* Q. 入会金以外に、後から追加の費用はかかりますか？ */}
  <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
    <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
      <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
      <h2 className="text-base sm:text-xl font-black leading-snug">
        📌 Q. 入会金以外に、後から追加の費用はかかりますか？
      </h2>
    </div>
    <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
      <p>
        A. ご契約プラン以外の不明な追加料金は発生しません。詳細は料金ページをご覧ください。
      </p>
    </div>
  </div>

  {/* Q. 医師以外（一般職）でも入会できますか？ */}
  <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
    <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
      <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
      <h2 className="text-base sm:text-xl font-black leading-snug">
        📌 Q. 医師以外（一般職）でも入会できますか？
      </h2>
    </div>
    <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
      <p>
        A. はい、どなたでも入会可能です。医師と出会いたい方、手厚いサポートを求める方に選ばれています。
      </p>
    </div>
  </div>

  {/* Q. 医療関係者（医師・看護師など）との出会いは多いですか？ */}
  <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
    <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
      <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
      <h2 className="text-base sm:text-xl font-black leading-snug">
        📌 Q. 医療関係者（医師・看護師など）との出会いは多いですか？
      </h2>
    </div>
    <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
      <p>
        A. はい。独自のネットワークがあるため、医療職の方や、その働き方に理解のあるお相手が多数在籍しています。
      </p>
    </div>
  </div>

  {/* Q. ベテランカウンセラーが担当すると何が違いますか？ */}
  <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
    <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
      <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
      <h2 className="text-base sm:text-xl font-black leading-snug">
        📌 Q. ベテランカウンセラーが担当すると何が違いますか？
      </h2>
    </div>
    <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
      <p>
        A. 豊富な成婚実績に基づく「お相手の心理を見抜く力」と「的確なアドバイス」で、迷いをなくし成婚へ導きます。
      </p>
    </div>
  </div>

  {/* Q. 担当カウンセラーは途中で変わりますか？ */}
  <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
    <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
      <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
      <h2 className="text-base sm:text-xl font-black leading-snug">
        📌 Q. 担当カウンセラーは途中で変わりますか？
      </h2>
    </div>
    <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
      <p>
        A. 原則、入会から成婚までベテランカウンセラーが一緒に活動伴走いたします。
      </p>
    </div>
  </div>

  {/* Q. 他の相談所でうまくいかなかったのですが大丈夫ですか */}
  <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
    <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
      <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
      <h2 className="text-base sm:text-xl font-black leading-snug">
        📌 Q. 他の相談所でうまくいかなかったのですが大丈夫ですか
      </h2>
    </div>
    <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
      <p>
        A. そういったかたこそぜひお越しください。新たな視点であなたのリスタートを支援します。
      </p>
    </div>
  </div>

  {/* Q. 本当にハイスペックな男女は在籍していますか？ */}
  <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
    <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
      <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
      <h2 className="text-base sm:text-xl font-black leading-snug">
        📌 Q. 本当にハイスペックな男女は在籍していますか？
      </h2>
    </div>
    <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
      <p>
        A. はい。医師が在籍する network を活かし、経営者、弁護士、外資系・大手企業勤務、高学歴など、厳選された方々が多数活動しています
      </p>
    </div>
  </div>

  {/* Q. 知人や部下、取引先に婚活していることがバレませんか？ */}
  <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
    <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
      <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
      <h2 className="text-base sm:text-xl font-black leading-snug">
        📌 Q. 知人や部下、取引先に婚活していることがバレませんか？
      </h2>
    </div>
    <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
      <p>
        A. 大阪梅田ドクターズ結婚相談所ではプロフィール写真を「申し込みをした・されたお相手のみ」に限定公開し、極秘で活動することができます。
      </p>
    </div>
  </div>

  {/* Q. 年収や学歴が「普通」ですが、入会しても大丈夫ですか？ */}
  <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
    <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
      <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
      <h2 className="text-base sm:text-xl font-black leading-snug">
        📌 Q. 年収や学歴が「普通」ですが、入会しても大丈夫ですか？
      </h2>
    </div>
    <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
      <p>
        A. もちろん大丈夫です。ハイスペックな方々も「結婚相手には普通の感覚や、居心地の良さを求めたい」という方が非常に多く、実は一番人気があります。
      </p>
    </div>
  </div>

  {/* Q. 生活に支障がない持病（定期的な服薬や通院など）がありますが、入会できますか？ */}
  <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
    <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
      <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
      <h2 className="text-base sm:text-xl font-black leading-snug">
        📌 Q. 生活に支障がない持病（定期的な服薬や通院など）がありますが、入会できますか？
      </h2>
    </div>
    <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
      <p>
        A. はい。持病により入会をお断りすることはありません。個別にあった婚活プランを最大限考慮します
      </p>
    </div>
  </div>

  {/* Q. 子供を望まない（産めない・授かりにくい）事情がありますが、入会できますか？ */}
  <div className="w-full bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
    <div className="w-full bg-[#D9889D] text-white px-4 sm:px-8 py-4 sm:py-6 flex items-start gap-3">
      <HelpCircle className="w-5 h-5 mt-0.5 shrink-0" />
      <h2 className="text-base sm:text-xl font-black leading-snug">
        📌 Q. 子供を望まない（産めない・授かりにくい）事情がありますが、入会できますか？
      </h2>
    </div>
    <div className="w-full px-4 sm:px-8 py-4 sm:py-6 text-gray-700 text-sm sm:text-base leading-snug sm:leading-relaxed">
      <p>
        A. はい、もちろんご入会いただけます。デリケートな事情や体質についても理解を持って、お一人おひとりに寄り添った婚活プランをご提案いたします。
      </p>
    </div>
  </div>

</div>
      </section>
    </main>
  );
}