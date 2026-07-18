import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "真の幸せを手に入れるために必要なもの",
  description:
    "幸福の本質は「自分の意思で積み重ねてきた歴史」の先にあります。外側の条件や他人の評価に振り回されない確固たる幸福を掴むために必要な、3つの本質的な土台（居場所・目的・自由）を大阪梅田ドクターズ結婚相談所が解き明かします。",
};

export default function TrueHappinessAnalysis() {
  return (
    <div className="w-full bg-[#FFFBFD] py-10 sm:py-16 px-4">
      {/* 画面いっぱいに広がる最大幅6xlのワイドコンテナ */}
      <div className="max-w-6xl mx-auto bg-white shadow-sm border border-pink-100/60 rounded-3xl overflow-hidden w-full">
        
        {/* --- ヘッダーセクション（ベースの白背景） --- */}
        <div className="pt-10 pb-6 sm:pb-8 text-center w-full bg-white px-4 sm:px-12">
          <span className="text-xs sm:text-sm font-black text-[#D9889D] uppercase tracking-widest block mb-2">
            Essential Question #05
          </span>
          <p className="text-sm font-bold text-gray-500 mb-2">【本質的な問い⑤】</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 leading-snug tracking-tight mb-6 w-full">
            真の幸せを手に入れるために必要なもの。<br />
            幸せの正体とは？人生を満たす「3つの要素」の重なり
          </h1>
          <div className="w-20 h-0.5 bg-[#E6A2B3] mx-auto" />
        </div>

        {/* --- 本文セクション --- */}
        <div className="w-full text-base text-gray-700 leading-relaxed">
          
          {/* 導入リード文（コントラストを強めた薄ピンク背景） */}
          <div className="w-full bg-pink-50/60 py-12 px-6 sm:px-12 md:px-16 space-y-4 border-t border-b border-pink-100/80">
            <h3 className="font-bold text-gray-900 text-lg">
              幸福の本質は「自分の意思で積み重ねてきた歴史」の先にある
            </h3>
            <p>
              「幸せになりたい」。これは、あらゆる時代や環境において、私たち人間が共通して抱く究極の願いです。では、その「幸せ」の具体的な正体とは一体何でしょうか。
            </p>
            <p>
              数多くの人間関係や人生の節目、精度高い成婚の現場に立ち会ってきた私たち（大阪梅田ドクターズ結婚相談所）は、幸福とは日々の日常の中で<strong>「自分の意思で経験を積み重ねてきた歴史」の先にあるもの</strong>だと確信しています。
            </p>
            <p>
              人間が内側から満たされ、誰にも真似できない穏やかで深い大人のオーラを放っているとき、そこには必ず<strong>「居場所」「目的」「自由」</strong>という3つの本質的な要素が、完璧な三位一体として揃っています。
            </p>
            <p>
              あなたがあなた自身の人生を肯定し、真の幸福を手に入れるために「3つの必要な土台」を、ここにストレートに解き明かします。
            </p>
          </div>

          {/* --- ① 居場所（くっきり白背景） --- */}
          <section className="w-full bg-white py-12 sm:py-16 px-6 sm:px-12 md:px-16 space-y-4">
            <h3 className="text-lg sm:text-xl font-black text-gray-900 flex items-center gap-2">
              <span className="text-[#D9889D]">①</span> 自分が必要とされる「自分の居場所」があること
            </h3>
            <p>
              人間が幸せを感じるための第1の土台は、「自分が必要とされる居場所があること」です。これは、単にどこかの組織や家庭に籍を置いているという形式的な話ではありません。自分の存在が何かの役に立ち、<strong>「存在意義」を実感できる心の拠り所</strong>のことです。
            </p>
            <p>
              この大切な居場所は、天から突然降ってくるものではありません。あなたがこれまでの日常の中で、小さながんばりを重ねて築いてきたものです。あなたの行動の積み重ねが、あなたの居場所を形作っています。
            </p>
            <p>
              「いいところがない人なんて、この世に一人も存在しない」という前提で、自分のこれまでの行動を認めた時、この居場所は揺るぎない自信へと変わります。「誰かや社会に必要とされている」という確信があるからこそ、自分を尊び、周囲の人を包み込むような、優しく温かい雰囲気を自然と放つようになるのです。
            </p>
          </section>

          {/* --- ② したいこと（薄ピンク背景） --- */}
          <section className="w-full bg-pink-50/60 py-12 sm:py-16 px-6 sm:px-12 md:px-16 space-y-4 border-t border-b border-pink-100/80">
            <h3 className="text-lg sm:text-xl font-black text-gray-900 flex items-center gap-2">
              <span className="text-[#D9889D]">②</span> したいと思う「何か」があること
            </h3>
            <p>
              第2の要素は、「心の奥底から『したい』と思える、自発的な何か（目的や情熱）を胸に持っていること」です。「やらなければならない義務」や、他人に自慢するための「条件としての目標」ではなく、自分の内側からピュアに湧き出る「もっと知りたい」「これを楽しみたい」という、<strong>純粋な向上心や知的好奇心</strong>のことを指します。
            </p>
            <p>
              人生を生き生きと楽しんでいる人は、常にどんなに小さなことでも「したいこと」に向かって進んでいます。それは決して大きな目標だけではありません。
            </p>
            <p className="italic text-gray-600 bg-white/60 p-4 rounded-xl border border-pink-100/40">
              「今週末のデートのために、相手が喜びそうな美味しいお店をがんばって調べてみる」<br />
              「自分のこれからの健康のために、少しだけ食事にこだわってみる」
            </p>
            <p>
              こうした「小さくてもしたいこと」へ向かって一歩を踏み出して行動している時間そのものが、人間の生命力を最も高い次元で活性化させます。
            </p>
            <p>
              より良い自分や未来を目指して進むエネルギーがあるとき、人の眼差しには輝きが宿り、佇まいには知性と洗練された美しさが現れます。魅力の大小を他人と比べる必要など一切ありません。自分の内なる「したい」に純粋に向き合い、そのプロセスをがんばっている瞬間こそが、人間を最も内側から満たしてくれる幸せの源泉なのです。
            </p>
          </section>

          {/* --- ③ 自由（くっきり白背景） --- */}
          <section className="w-full bg-white py-12 sm:py-16 px-6 sm:px-12 md:px-16 space-y-4">
            <h3 className="text-lg sm:text-xl font-black text-gray-900 flex items-center gap-2">
              <span className="text-[#D9889D]">③</span> それができる「健康や環境などの自由」があること
            </h3>
            <p>
              そして、これらすべての幸福を作動させるための最後の決定的な要素が、「それらを実行に移すことができる、健康や環境という名の『自由』を持っていること」です。どれほど温かい居場所があり、胸に秘めたやりたいことがあっても、自分の意思で選択することを阻まれる不自由な環境に縛られていては、幸福を実現することはできません。
            </p>
            <p>
              この<strong>【健康】という尊い土台を維持し、【環境】を守り、自分の意思で次の選択肢を選べる状態（精神的自立）を確保している</strong>からこそ、人間は本当の意味で「自由」を謳歌できます。
            </p>
            <p className="font-bold text-gray-900 pt-4 text-center block bg-pink-50/30 py-4 rounded-2xl border border-dashed border-pink-200">
              「必要とされる居場所」 × 「したいと思う何か」 × 「それを叶える自由」
            </p>
            <p className="pt-2 text-center sm:text-left">
              この3つの要素がピタリと重なったとき、人は外側の条件や他人の評価に一切振り回されない、確固たる幸福と、圧倒的に美しい佇まいを手に入れることができるのです。
            </p>
          </section>

          {/* --- ベテランカウンセラーからのメッセージ (薄ピンク背景・右フロート画像) --- */}
          <section className="w-full bg-pink-50/60 py-12 px-6 sm:px-12 md:px-16 border-t border-b border-pink-100/80 overflow-hidden">
            <div className="max-w-4xl mx-auto">
              
              {/* ご指定の通り、男性カウンセラー（maleAdvisor2）をテキストの右側にフロート */}
              <div className="float-right ml-4 mb-2 sm:ml-6 sm:mb-4 relative w-20 h-20 sm:w-28 sm:h-28">
                <Image 
                  src="/maleAdvisor2.jpg" 
                  alt="ベテランカウンセラー" 
                  width={421}
                  height={421}
                  className="rounded-full object-cover border-2 border-pink-100 shadow-sm w-full h-full"
                />
              </div>
              
              <div className="flex items-center gap-1 mb-3">
                <span className="text-lg">💙</span>
                <span className="font-black text-gray-900 text-xl">ベテランカウンセラーからのメッセージ</span>
              </div>

              <div className="text-base text-gray-700 space-y-4 leading-relaxed">
                <p className="font-bold text-gray-900">
                  社会で毎日頑張っている皆様へ。
                </p>
                <p>
                  今、婚活という新しいフィールドでさらに人生の次のステージに向かおうとしていることと思います。
                </p>
                <p>
                  ご自身の大切なパートナーとの家庭を得ることで、恋愛だけのパートナーとは違う深いつながりを得ることでしょう。結婚は<strong>【1人のパートナーと一生を共にする】という決断</strong>でもあるので、覚悟を決めた先に、さらなる深いつながりとあなたの居場所ができると思います。
                </p>
                <p>
                  【結婚】という形により、あなたとパートナーを社会が支えてくれるはずです。与えあい、支えあい、笑い、時にはケンカもしながら、誰かと歩む人生、ご家族のために生きる人生の喜びを得ることを願っています。
                </p>
                <p>
                  婚活の道のりは必ずしもうまくいく瞬間ばかりではありませんが、その中、自分を見つめて努力した経験は、将来きっとあなたの礎となり、あなたを成長させてくれることと思います。深みある人間に成長し、温かみを持ち、未来を支えてくれることを心から願っています。
                </p>
                <p className="font-bold text-[#D9889D] pt-2">
                  あなたより少し先を生きている私の経験の全てを、大阪梅田ドクターズ結婚相談所でお伝えしたいと思います。私たちの気持ちに共感していただけるかたの入会をお待ちしています。
                </p>
              </div>
            </div>
          </section>

          {/* --- フッター（くっきり白背景・CTA） --- */}
          <div className="bg-white py-12 text-center w-full">
            <button className="inline-block bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] text-white text-base sm:text-lg font-bold py-4 px-12 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200">
              3つの土台を共に築く、無料カウンセリングはこちら
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}