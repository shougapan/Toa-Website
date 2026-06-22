


import React from "react";

export default function Home() {
  return (
    <div className="space-y-16 pb-2 md:pb-12">
      
      {/* --- HERO SECTION --- */}
      {/* Aspect-square on mobile keeps the space large enough to accommodate the bigger text comfortably */}
{/* CHANGED: Lowered the height values to make the image length shorter vertically, keeping full viewport width */}
<section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[360px] sm:h-[400px] md:h-[430px] overflow-hidden rounded-none shadow-sm">
  {/* Background Image */}
  <img
    src="/couple1.jpg"
    alt="Marriage Consultation Hero"
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

  {/* Hero Content */}
  <div className="absolute inset-0 flex flex-col justify-start items-start p-6 pt-10 sm:p-12 sm:pt-14 md:p-16 md:pt-18 max-w-xl text-left z-10 mx-auto w-full px-4 sm:px-6 lg:px-8">

<span className="inline-block text-xl md:text-sm font-bold tracking-wider text-pink-300 bg-white border border-white/20 backdrop-blur-md px-2 py-0.5 rounded-full mb-4 shadow-sm opacity-100">
  大阪梅田結婚相談所
</span>

    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-blue-700 tracking-tight ">
      <span className="block text-lg sm:text-xl md:text-2xl font-bold text-blue-700 mb-2 drop-shadow-sm">
        現役女医監修と<br />ベテランカウンセラー
      </span>
      がサポートする、<br className="hidden sm:inline" />
      <span>
        <br />
        あなただけの
        <span className="text-blue-700  font-extrabold">
          <br />
          唯一無二の婚活
        </span>
      </span>
    </h1>

    <p className="mt-3 text-xs sm:text-sm md:text-base text-blue-700 max-w-md leading-relaxed font-semibold ">
      プロフェッショナルな2つの視点から、あなたに寄り添った最適なパートナー探しをサポートいたします。
    </p>

  </div>
</section>

<section className="w-full px-4 md:px-8 py-1">

  {/* Header */}
  <div className="max-w-5xl mx-auto mb-10">
    <span className="text-sm font-bold tracking-wider text-rose-500 uppercase">
      About
    </span>

    <h2 className="mt-3 text-2xl md:text-4xl font-black text-gray-900 leading-tight">
      大阪梅田結婚相談所とは
    </h2>

    <div className="mt-5 h-1 w-16 rounded-full bg-rose-400" />
  </div>

  {/* Body */}
  <div className="max-w-2xl mx-auto space-y-1 text-gray-700 leading-relaxed text-base md:text-lg">

    <p>
      大阪梅田結婚相談所は、現役女医 × キャリア20年のベテランが
      あなたの成婚をサポートする唯一無二の結婚相談所です。
    </p>

    <p className="font-semibold text-gray-900">
      確かな未来が見つかる場所。
    </p>

    <p>
      医師・弁護士・会計士・経営者など、
      ハイステータス層の多忙なライフスタイルを深く理解した
      「現役医師サポート」と、
      20年の経験で培った成婚ノウハウを融合しています。
    </p>

    <p>
      その結果、理想と現実のバランスを取りながら、
      ハイステータス婚を現実へと導きます。
    </p>

    <p>
      「医師 婚活 相談所 ベテランカウンセラー」をお探しの方へ。
      仕事も結婚も妥協したくないあなたのための特別な相談所です。
    </p>

    <p className="font-bold text-gray-900">
      忙しい日々の中でも、最短距離で“本当に合う結婚”へ。
    </p>

  </div>

</section>

      {/* --- STRENGTHS SECTION --- */}
{/* --- STRENGTHS SECTION --- */}
<section className="space-y-1">
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
        大阪 梅田の上質な出会い
      </h3>
      {/* BUMPED: Body text size increased to text-sm / md:text-lg */}
      <p className="mt-1.5 text-sm md:text-lg font-bold leading-normal sm:leading-snug text-gray-900">
        医師・経営者・大手企業勤務が集うハイクラスな会員層
      </p>
      
      {/* BUMPED: Link text size increased to text-xs / md:text-base */}
      <a href="#strength3" className="mt-auto pt-2 text-xs md:text-base font-black text-rose-500 hover:text-rose-600 hover:underline transition-colors duration-200">
        詳細を見る <span className="inline-block text-[10px] md:text-sm">▶</span>
      </a>
    </div>

  </div>
</section>
<section className="w-full px-4 md:px-8 py-2">

  {/* Optional subtle header */}
  <div className="max-w-5xl mx-auto mb-10">
    <span className="text-sm font-bold tracking-wider text-rose-500 uppercase">
      Philosophy
    </span>

    <h2 className="mt-3 text-2xl md:text-4xl font-black text-gray-900 leading-tight">
      梅田エリアにおける婚活の現実と<br />
      大阪梅田結婚相談所のアプローチ
    </h2>

    <div className="mt-5 h-1 w-16 rounded-full bg-rose-400" />
  </div>

  {/* Body */}
  <div className="max-w-5xl mx-auto space-y-1 text-gray-700 leading-relaxed text-base md:text-lg">

    <p>
      大阪・梅田エリア（北区・茶屋町・西梅田・東梅田周辺）には、多くのおすすめ結婚相談所や大手結婚情報サービス、人気の婚活サロンが点在しています。
    </p>

    <p>
      しかし、「AIマッチングだけの大手結婚相談所」や「サポートが薄い格安のマッチングアプリ」「アドバイザーの主観だけに頼る個人結婚相談所」を比較し、
      どこを選べばいいか迷っている方も少なくありません。
    </p>

    <p>
      令和の最新婚活市場を勝ち抜き、20代・30代・40代の方が最短で成婚（婚活のゴール）を迎えるためには、
      確かなエビデンスに基づいた婚活戦略が必要です。
    </p>

    <p>
      梅田で口コミ評判の高い優良な結婚相談所を目指す大阪梅田結婚相談所では、
      他社には決して真似できない唯一無二の体制として、
      <span className="font-bold text-gray-900">
        「理性の医学」と「感性の仲人」
      </span>
      が交わるダブルサポート体制をご提供します。
    </p>

    <p>
      医学的・心理学的アプローチによって異性の本音をロジカルに分析し、
      長年の成婚ノウハウによって現場での実践に落とし込む。
    </p>

    <p>
      この2つのプロフェッショナルによる二人三脚の丁寧なマンツーマンサポートこそが、
      あなたを最短ルートで幸せな結婚へと導き、高い成婚率を誇る最大の理由です。
    </p>

  </div>

</section>
      {/* --- DOCTOR'S SUPPORT SECTION --- */}
      <section className="mx-auto max-w-4xl rounded-2xl border border-rose-100 bg-gradient-to-b from-white to-[#FAF8F5]/40 p-6 sm:p-10 md:p-14 shadow-sm">
        <div className="text-center space-y-1 mb-10">
          <span className="text-xs font-bold tracking-wider text-rose-400 uppercase block md:text-sm">
            Message
          </span>
          <h2 className="text-xl font-black text-gray-800 sm:text-2xl md:text-3xl leading-snug">
            現役女医として病院での経験から学んだ、<br className="hidden sm:inline" />
            優しくて手厚い「心の保健室サポート」
          </h2>
        </div>

<div className="space-y-1 text-base sm:text-lg md:text-xl text-gray-700 leading-snug font-normal tracking-wide">          <p>
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
      {/* --- COUNSELOR MESSAGE SECTION --- */}
<section className="mx-auto max-w-4xl rounded-2xl border border-rose-100 bg-gradient-to-b from-white to-[#FAF8F5]/40 p-6 sm:p-10 md:p-14 shadow-sm">
  <div className="text-center space-y-1 mb-10">
    <span className="text-xs font-bold tracking-wider text-rose-400 uppercase block md:text-sm">
      Message
    </span>
    <h2 className="text-xl font-black text-gray-800 sm:text-2xl md:text-3xl leading-snug">
      ベテランカウンセラーから<br className="hidden sm:inline" />
      会員様への想い
    </h2>
  </div>

<div className="space-y-1 text-base sm:text-lg md:text-xl text-gray-700 leading-snug font-normal tracking-wide">   <p>
      長いカウンセラー経験の中、たくさんの出会いに寄り添ってきました。
      一緒に喜び、時には迷いや悲しみも共有してきました。
      上手くいかずに涙する会員様をみると胸がギュッとなったことが何度もあります。
    </p>

    <p>
      結婚という一つの目標に向けて、会員様とカウンセラーは二人三脚です。
      その過程で、ご自身の恋愛というプライバシーをお話していただくには抵抗もあるとご想像します。
    </p>

    <p>
      でも、
      <span className="font-bold text-gray-900 border-b-2 border-rose-300 bg-rose-50/50 px-1">
        「少し聞いて欲しいことがあります」
        「どうしたらいいと思いますか？」
        「どう思われますか？」
      </span>
      と素直にご相談いただけることがあります。
    </p>

    <p>
      そういったご相談の時には、自分がカウンセラーとして必要とされることに熱い喜びを感じます。
      そして戦略と技術において自分の持っている全てを使い、温かくサポートしたいと常に思っています。
    </p>

    <p>
      上手くいっている時よりも、
      <span className="font-bold text-gray-900">
        「もう諦めようかな」
      </span>
      と立ち止まった時こそ側にいて、真の力を発揮したいと願っています。
    </p>

    <p>
      会員様は大切な人生の分岐点を、たくさん迷いながら、そして決断をしていかれます。
      婚活に限らず人生は選択の連続です。
      たとえそれが間違いや回り道であったとしても、ご自身が深く悩み考えて出した結論ならば、きっと何かを得るはずだと信じています。
    </p>

    <p>
      それは今後ずっと続く人生において、きっと役に立つでしょう。
    </p>

    <p>
      恋愛、結婚そして子育てをした人は、
      <span className="font-bold text-gray-900">
        「誰かのために自分の何かを与え、時には犠牲になることもありながら成長していく」
      </span>
      と聞いたことがあります。
    </p>

    <p>
      恋愛や結婚、子育てを経て経験する無償の愛が、人を豊かにすると感じてやみません。
    </p>

    <p className="pt-4 font-bold text-gray-950 md:text-2xl leading-snug">
      ここで出会ったのも何かのご縁のはずです。<br />
      大阪梅田結婚相談所で、一緒に頑張っていきましょう。
    </p>

  </div>
</section>
<section className="mx-auto max-w-4xl px-3 py-2">
  <div className="mb-4 text-center">
    <h2 className="text-2xl font-black text-gray-900">
      料金システム一覧（税込）
    </h2>
  </div>

  <div className="overflow-hidden rounded-2xl border border-rose-100 shadow-sm">
    <table className="w-full table-fixed text-xs sm:text-sm">
      <thead>
        <tr className="bg-rose-50">
          <th className="w-[28%] p-2 text-left font-bold text-gray-900">
            料金項目
          </th>
          <th className="w-[22%] p-2 text-left font-bold text-gray-900">
            金額
          </th>
          <th className="w-[50%] p-2 text-left font-bold text-gray-900">
            サポート内容
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-rose-100">
        <tr>
          <td className="p-2 font-bold text-gray-900">
            初期費用
            <div className="text-[10px] text-gray-500">
              入会金・登録料含む
            </div>
          </td>
          <td className="p-2 font-bold text-rose-600">
            200,000円
          </td>
          <td className="p-2 text-gray-700">
            システム登録、プロフィール作成・写真撮影サポート
          </td>
        </tr>

        <tr>
  <td className="p-2 font-bold text-gray-900">
    お見合い料
  </td>
  <td className="p-2 font-bold text-green-600">
    0円
  </td>
  <td className="p-2 text-gray-700">
    月4回まで無料<br />
    5回目以降は1回3,000円（税込）
  </td>
</tr>

        <tr className="bg-gray-50/50">
          <td className="p-2 font-bold text-gray-900">
            月会費
          </td>
          <td className="p-2 font-bold text-rose-600">
            15,000円
          </td>
          <td className="p-2 text-gray-700 leading-snug">
            <br />
            定期面談・相談料0円
            <br />
            （オンライン・カフェ・会議室）
          </td>
        </tr>

        <tr>
          <td className="p-2 font-bold text-gray-900">
            服装サポート
          </td>
          <td className="p-2 font-bold text-green-600">
            無料
          </td>
          <td className="p-2 text-gray-700">
            梅田・難波での
            デート服ファッション提案
          </td>
        </tr>

        <tr className="bg-gray-50/50">
          <td className="p-2 font-bold text-gray-900">
            成婚料
            <div className="text-[10px] text-gray-500">
              成果報酬制
            </div>
          </td>
          <td className="p-2 font-bold text-rose-600">
            200,000円
          </td>
          <td className="p-2 text-gray-700">
            ご成婚時のみ
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


<section className="w-full px-4 md:px-8 py-1">

  {/* Header */}
  <div className="max-w-5xl mx-auto text-center mb-2">
    <span className="text-sm font-bold tracking-wider text-rose-500 uppercase">
      Support
    </span>

    <h2 className="mt-3 text-2xl md:text-4xl font-black text-gray-900 leading-tight">
      2名1組のプロが導く<br />
      「成婚までの丁寧なサポート」
    </h2>

    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-rose-400" />
  </div>

  {/* STEP 1 */}
  <div className="max-w-5xl mx-auto mb-16">
    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 leading-snug">
      1. 妥協なき「理想像の徹底解剖」とプロフィール作成（入会フェーズ）
    </h3>

    <div className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
      <p>
        大阪梅田結婚相談所では、あなた自身も気づいていない深層心理にある
        <span className="font-bold text-gray-900">「本当の結婚相手への理想像」</span>
        を入会面談で徹底的に解剖します。
      </p>

      <p>
        医師監修のカウンセリング心理学や脳科学、行動経済学のアプローチを用いて、
        「絶対に譲れない条件」と「実は妥協しても幸せになれるポイント」を整理し、
        ミスマッチや早期離婚を未然に防ぎます。
      </p>

      <p>
        高収入・高学歴・正社員・公務員・経営者など、
        身元が保証されたハイクラスな会員層の中から、
        あなたに最適なお相手をスクリーニングします。
      </p>

      <div className="space-y-2 text-gray-900 font-semibold">
        <p>✓ 異性に好印象を与えるプロフィール写真の作成サポート</p>
        <p>✓ 魅力を120%引き出す自己PR文章のプロデュース</p>
      </div>
    </div>
  </div>

  {/* STEP 2 */}
  <div className="max-w-5xl mx-auto">
    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 leading-snug">
      2. お見合いセッティングと実践会話レッスン（出会いフェーズ）
    </h3>

    <div className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
      <p>
        「恋愛経験がなく異性と話すのが苦手」
        「初対面で沈黙が怖い」
        という方でも安心して活動できるようサポートします。
      </p>

      <p>
        女性心理・男性心理を踏まえた会話術や、
        梅田・難波・心斎橋・天王寺でのデートにふさわしい服装を
        マンツーマンで丁寧にレクチャーします。
      </p>

      <div className="space-y-2 text-gray-900 font-semibold">
        <p>✓ お見合い前の会話トレーニング</p>
        <p>✓ デート服ファッション提案</p>
        <p>✓ ホテルラウンジ予約代行</p>
        <p>✓ スケジュール調整サポート</p>
      </div>

      <p>
        忙しいビジネスパーソンでも、準備から調整まですべて任せることで、
        ストレスなくスマートに婚活が可能です。
      </p>
    </div>
  </div>

</section>

<section className="w-full px-4 md:px-8 py-2">

  {/* Header */}
  <div className="max-w-5xl mx-auto mb-10">
    <span className="text-sm font-bold tracking-wider text-rose-500 uppercase">
      Concept
    </span>

    <h2 className="mt-3 text-2xl md:text-4xl font-black text-gray-900 leading-tight">
      大阪・梅田で理想の結婚を叶える「理想のパートナー」とは？
    </h2>

    <div className="mt-5 h-1 w-16 rounded-full bg-rose-400" />
  </div>

  {/* Body */}
  <div className="max-w-2xl mx-auto space-y-1 text-gray-700 leading-relaxed text-base md:text-lg">

    <p>
      私たちはまず、あなたが心から望んでいる「理想の相手像」を、多角的な視点から徹底的に分析します。
    </p>

    <p>
      一言で「白馬に乗った素敵な王子様」「かぐや姫のような絶世の美女」といっても、
      人それぞれに理想像は異なります。
    </p>

    <p>
      また、必ずしも理想像とご自身との相性が良いとは限りません。
      恋愛は、自分のアイデンティティを映す鏡のようなものです。
    </p>

    <p>
      自分がどんな性格で、どんな人間なのか。
      自分が求めているものは何か。
      相手が求めているものは何か。
      自分が与えることができるものは何か。
      すべてに唯一の正解があるわけではありません。
    </p>

    <p className="font-semibold text-gray-900">
      それはまさに「自分探しの旅」ともいえるものです。
    </p>

    {/* Doctor Perspective */}
    <div className="mt-10 space-y-5">

      <h3 className="text-xl md:text-2xl font-black text-gray-900">
        🩷 現役女医の視点から
      </h3>

      <p>
        数々の診療を通して多くの方に寄り添ってきた経験から、
        「誰を選べばいいのか」「誰が自分に合うのか」
        という重要な分岐点において、丁寧にサポートいたします。
      </p>

      <p>
        お相手が本当に求めているパートナー像や、
        運命の分かれ道でどちらに進むべきかについて、
        お気持ちに寄り添いながらご相談をお受けします。
      </p>

    </div>

    {/* Counselor Perspective */}
    <div className="mt-5 space-y-1">

      <h3 className="text-xl md:text-2xl font-black text-gray-900">
        🩵 ベテランの視点から
      </h3>

      <p>
        20年の経験に基づき、現実的に成婚へ至るための相性や条件を分析します。
      </p>

      <p>
        男性目線・女性目線・エグゼクティブ層の視点を融合することで、
        ご自身でも気づいていなかった「本当の理想の相手像」を明確にしていきます。
      </p>

      <p>
        時には厳しい現実や予測も正直にお伝えしますが、
        それらは婚活の現場経験に基づく重要な情報です。
      </p>

      <p>
        遠回りを避けることで、人生の貴重な時間をより有意義に使える可能性があります。
      </p>

    </div>

    {/* Closing */}
    <div className="mt-10 space-y-1">

      <p>
        もちろん、最終的に決断するのは会員様ご自身です。
        婚活に正解はなく、続けることも、やめることもすべてが正解です。
      </p>

      <p>
        十人十色の価値観や選択を尊重しながら、
        一人ひとりに合わせた柔軟なサポートを行っています。
      </p>

      <p className="font-bold text-gray-900">
        アットホームなサポートの中で、ぜひ一緒に前へ進んでいきましょう。
      </p>

    </div>

  </div>
</section>

<section className="w-full px-4 md:px-8 py-1">

  {/* Header */}
  <div className="max-w-5xl mx-auto mb-10">
    <span className="text-sm font-bold tracking-wider text-rose-500 uppercase">
      Recommend
    </span>

    <h2 className="mt-3 text-2xl md:text-4xl font-black text-gray-900 leading-tight">
      大阪梅田結婚相談所はこんな方におすすめ
    </h2>

    <div className="mt-5 h-1 w-16 rounded-full bg-rose-400" />
  </div>

  {/* Content */}
  <div className="max-w-5xl mx-auto space-y-3e text-gray-700 leading-relaxed text-base md:text-lg">

    <div>
      <p className="font-bold text-gray-900">
        ✅ 大阪で効率よく婚活したい方
      </p>
      <p className="mt-2">
        大阪市、豊中市、北摂などにお住まいで、
        スマートにハイクラス婚活を進めたい方。
      </p>
    </div>

    <div>
      <p className="font-bold text-gray-900">
        ✅ 医師やベテランカウンセラーのサポートを求める方
      </p>
      <p className="mt-2">
        婚活の不安やストレスを、現役女医によるメンタルサポートで解消したい方。
        また、「結婚相談所 20年 カウンセラー 大阪」のプロに頼りたい方。
      </p>
    </div>

    <div>
      <p className="font-bold text-gray-900">
        ✅ 関西のハイクラス婚を熟知した伴走サポートが欲しい方
      </p>
      <p className="mt-2">
        キャリア20年のベテラン仲人による、
        あなた専用のオーダーメイド婚活サポートを求める方。
      </p>
    </div>

    <div>
      <p className="font-bold text-gray-900">
        ✅ ハイステータスな出会いを求める方
      </p>
      <p className="mt-2">
        「ハイステータス 結婚相談所 医師在籍」での出会いを希望し、
        「医師 婚活 結婚相談所 現役医師サポート」や
        「女医 婚活 相談所 ベテランカウンセラー」の強みを活かして
        質の高い出会いを掴みたい方。
      </p>
    </div>

  </div>
</section>

<section className="max-w-5xl mx-auto px-0 sm:px-6 lg:px-8 py-2">
  <div className="text-center mb-10 px-4 sm:px-0">
    <span className="inline-block bg-[#F7E6EB] text-[#D9889D] text-xs font-black px-3 py-1 rounded-full mb-4">
      FAQ
    </span>

    <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
      よくあるご質問
    </h2>

    <p className="mt-3 text-gray-600">
      初めての婚活でも安心して活動していただけるよう、
      よくいただくご質問をまとめました。
    </p>
  </div>

  <div className="space-y-2 sm:space-y-4">

    {/* FAQ 1 */}
    <div className="bg-white rounded-3xl border border-gray-200 p-5 sm:p-8 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-[#F7E6EB] text-[#D9889D] font-black">
          📌
        </span>
        <h3 className="font-black text-gray-900 text-lg">
          結婚相談所に入会したら、本当にサクラはいませんか？
        </h3>
      </div>

      <div className="pl-0 sm:pl-11">
        <p className="text-gray-700 leading-relaxed">
          はい、サクラは一切在籍しておりません。
          当相談所が加盟する結婚相談所連盟では、
          「独身証明書」「住民票」「学歴証明書」
          「収入証明書（男性必須）」などの提出を義務付けています。
          身元が確実で、本気で結婚したい方だけが活動しているため、
          安心してパートナー探しに集中していただけます。
        </p>
      </div>
    </div>

    {/* FAQ 2 */}
    <div className="bg-white rounded-3xl border border-gray-200 p-5 sm:p-8 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-[#F7E6EB] text-[#D9889D] font-black">
          📌
        </span>
        <h3 className="font-black text-gray-900 text-lg">
          人見知りで、お見合いでうまく話せるか不安です。
        </h3>
      </div>

      <div className="pl-0 sm:pl-11">
        <p className="text-gray-700 leading-relaxed">
          ご安心ください。当相談所では、お見合い前の服装選びや髪型の
          トータルコーディネートはもちろん、
          「何を話せばいいか」の会話シミュレーション（模擬お見合い）
          まで事前に行います。
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          また、お見合い当日の流れやNGマナーなども丁寧にご説明いたしますので、
          恋愛経験が少ない方でも自信を持って活動していただけます。
        </p>
      </div>
    </div>

    {/* FAQ 3 */}
    <div className="bg-white rounded-3xl border border-gray-200 p-5 sm:p-8 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-[#F7E6EB] text-[#D9889D] font-black">
          📌
        </span>
        <h3 className="font-black text-gray-900 text-lg">
          マッチングアプリと結婚相談所の最大の違いは何ですか？
        </h3>
      </div>

      <div className="pl-0 sm:pl-11">
        <p className="text-gray-700 leading-relaxed">
          最も大きな違いは
          <span className="font-bold text-gray-900">
            「お相手の結婚に対する本気度」と「プロのサポートの有無」
          </span>
          です。
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          アプリは手軽な反面、結婚の意思が低い方や既婚者が紛れ込むリスクがあります。
          一方、結婚相談所では全員が
          「良い人がいればすぐにでも結婚したい」
          と考えているため、出会いから成婚までのスピードが非常に早いのが特徴です。
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          また、交際中のお悩みやプロポーズのタイミングまで、
          ベテランカウンセラーが仲介・アドバイスを行う点も大きな違いです。
        </p>
      </div>
    </div>

    {/* More FAQs Link Card */}
    <a 
      href="/FAQ" 
      className="flex items-center justify-between bg-white hover:bg-gray-50 border border-gray-200 rounded-3xl p-6 shadow-sm transition-colors duration-200 group"
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F7E6EB] text-[#D9889D] font-black">
          💡
        </span>
        <span className="font-black text-gray-900 text-lg">
          もっと質問を見る / その他のよくあるご質問
        </span>
      </div>
      <svg 
        className="w-6 h-6 text-gray-400 group-hover:text-[#D9889D] transition-colors transform group-hover:translate-x-1 duration-200" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={3}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>

  </div>
</section>

    </div>
  );
}