import React from 'react';

import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "婚活で「選ぶ・選ばれる」レースに疲れたあなたへ。",
  description:
    "お見合いで「選ぶ・選ばれる」レースに疲れたあなたへ。相手を品定めするほど迷子になり、選ばれようとするほど自分を見失う心の仕組みを解説。大阪梅田のドクターズ結婚相談所が、減点モンスター化する脳のバグを解き明かし、本当のパートナーに出会う答えを提示します。",
  alternates: {
    canonical: "/intellectual-maturity",
  },
};

export default function EssentialQuestionPage3() {
  return (
    <div className="w-full bg-[#FFFBFD] py-10 sm:py-16 px-4">
      {/* 画面いっぱいに広がる最大幅6xlのワイドコンテナ */}
      <div className="max-w-6xl mx-auto bg-white shadow-sm border border-pink-100/60 rounded-3xl overflow-hidden w-full">
        
        {/* --- ヘッダーセクション（flush against the top） --- */}
        <div className="pt-0 pb-6 sm:pb-8 text-center w-full">
          <span className="text-xs sm:text-sm font-black text-[#D9889D] uppercase tracking-widest block mb-2 pt-4">
            Essential Question #03
          </span>
          <p className="text-sm font-bold text-gray-500 mb-2">【本質的な問い③】</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 leading-snug tracking-tight mb-6 w-full px-4 sm:px-0">
            婚活の「選ぶ・選ばれる」レースに疲れたあなたへ。<br />
            お見合いを重ねるほど誰が良いか分からなくなる理由と脳の仕組み
          </h1>
          <div className="w-20 h-0.5 bg-[#E6A2B3] mx-auto" />
        </div>

        {/* --- 本文セクション（パディングを排除し、テキスト幅を境界線まで最大化） --- */}
        <div className="px-0 pb-12 sm:pb-16 bg-white w-full space-y-10 text-base text-gray-700 leading-relaxed">
          
          {/* 導入リード文 */}
          <div className="w-full space-y-4">
            <p className="font-bold text-gray-900 text-lg">
              「お見合いを重ねるほど誰が良いのか分からなくなる。選ばれるために本当の自分を捨てなければいけないのか」
            </p>
            <p>
              大阪梅田の最前線でキャリアを築き、当相談所の門を叩く男女から、最も多く聞く切実な問題がこれです。
            </p>
            <p>
              よくある婚活ブログは「もっと条件を広げよう」「第一印象を良くする努力を」と説明します。しかし、綺麗事なしの事実を申し上げれば、結婚を「相手を評価し、選ぶゲーム」と捉えている限り、「本当に相性の良いパートナー」を見逃し続け、「自分を見失う迷路に迷い込む」ことにもなります。
            </p>
            <p>
              なぜ、相手を品定めする人ほど選ぶ方向性を見失うのか？逆に選ばれることを意識しすぎると、なぜ自分を無くしてしまうのか。<br />
              その裏にある心の仕組みと、大阪梅田ドクターズ結婚相談所が提示する具体的な「答え」を解き明かします。
            </p>
          </div>

          {/* --- セクション1 --- */}
          <section className="space-y-4 w-full border-t border-gray-100 pt-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 border-l-4 border-[#E6A2B3] pl-4 mb-6 leading-relaxed w-full">
              1. 【脳の仕組み】なぜ「評価」を始めると、脳は自動的に「減点モンスター」になるのか？
            </h2>
            <p>
              心理学や脳科学において、人間の脳は「相手を審査しよう」と身構えた瞬間、自動的に<strong>「アラ探しのスイッチ」</strong>が入るようにできています。これは大昔から人類が「危険なもの」をいち早く察知して生き残るために持っている、本能的な防衛機能です。
            </p>
            <p>
              この心のモードのまま、総合点や「年収・外見・学歴」といった欲しいパラメーターの有無ばかりを追い求めると、本来の目的とは違う方向に進む傾向にあります。
            </p>
            <p>
              結果として「年収は高いけれど、話し方が気になる」「清潔感はあるけれど、お店の選び方がスマートじゃない」といった、些細なマイナス面ばかりが頭の中で大きく膨んでしまいます。
            </p>
            <p className="font-medium text-gray-900">
              傷つきたくない、失敗したくないと不安が強い人は、防衛本能からマイナス面を探しがちです。相手の加点（魅力）を探すよりも、お断りする理由（減点要素）を見つける方が脳にとって「安全」であるためです。
            </p>
            <p>
              これによって、自分が本当はどんな人と一緒にいたいのかという「本音の直感」を喪失してしまうのです。選ぶという査定のチェック項目に必死になるあまり、目の前にいる人間の「あたたかい性格」や「一緒にいて落ち着く」といった、本当にあなたと相性の良いはずの原石を、自ら見逃してしまうのがこの品定めゲームの罠です。
            </p>

            {/* --- 一言メッセージ 🩷 (左フロート画像統合版) --- */}
            <div className="py-6 border-t border-b border-pink-100/60 w-full overflow-hidden !mt-8">
              <img 
                src="/femaleAdvisor2.jpg" 
                alt="女性アドバイザー" 
                width={421}
                height={421}
                className="float-left w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border border-pink-100 shadow-sm mr-4 mb-2 sm:mr-6 sm:mb-4"
              />
              <div className="flex items-center gap-1 mb-1">
                <span className="text-base">🩷</span>
                <span className="font-black text-gray-900 text-lg">一言メッセージ</span>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                【どうしてその条件が欲しいのか】【また条件だけで一生その人と一緒にいれるのか？】等を考えることで、バランスのいい考え方ができるかもしれませんね。
              </p>
            </div>
          </section>

          {/* --- セクション2 --- */}
          <section className="space-y-4 w-full border-t border-gray-100 pt-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 border-l-4 border-[#E6A2B3] pl-4 mb-6 leading-relaxed w-full">
              2. 【心の仕組み】「選ばれるための仮面」が、結婚後に自分を破壊する理由
            </h2>
            <p>
              もう一つは、「選ばれるために、本当の自分を偽ってもいいのか」という問いです。お見合いで断られたくないあまり、相手が好みそうな「完璧な自分、相手に合わせた自分」を演じる行為は、心に無理（心理的ストレス）を作り出します。
            </p>
            <p>
              この「偽りの自分」で勝ち取った結婚は、その後にさらなる苦しみを生みます。あなたの心は「選ばれたのは、演じていた私。本当の不器用な自分を知られたら、嫌われてしまうかも」と考えるため、結婚した後も本来の自分を出せなくなります。自分の家なのに心が休まらず、何が欲しかったのかわからなくなるでしょう。時間が経つとお相手も本当のあなたに違和感と不満を持ち、ダメ出しをはじめることもあります。
            </p>
            <p className="font-bold text-gray-900 text-lg">
              本当の自分のアイデンティティーを捨ててまで手に入れるべき結婚など、存在しません。
            </p>
          </section>

          {/* --- セクション3 --- */}
          <section className="space-y-6 w-full border-t border-gray-100 pt-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 border-l-4 border-[#E6A2B3] pl-4 mb-6 leading-relaxed w-full">
              3. 【当相談所が出す答え】品定めを脱出し、自分のままで選ばれるための「2つの処方箋」
            </h2>
            <p>
              では、この迷路を抜け出し、最高のパートナーを見つけるための具体的な「答え」とは何か。私たちはカウンセリングで、以下の「2つの評価軸の切り替え」を大切にしています。
            </p>

            {/* 処方箋① */}
            <div className="w-full space-y-3">
              <span className="font-bold text-gray-900 block text-base sm:text-lg">
                🎯 処方箋①【選びたくなる人への答え】：相手の点数ではなく、自分を見る
              </span>
              <div className="pl-4 border-l-2 border-pink-200 space-y-2">
                <p>
                  相手の点数ではなく、<strong>「その人といる時の自分の『姿』を鏡のように客観的に見てみること」</strong>です。自分が少し不器用だったり、わがままだったり、自信がなかったり、おこりんぼだったりすることも含め、相手が受け止めてくれる相性の良い方ならきっと居心地は良いはずです。自分がイライラしたり、怯えたりしていないはずです。
                </p>
                <p>
                  お互いにリラックスできるお相手が、人間として相性のよいお相手ということになります。その過程で、お相手に異性として素敵だな、一緒にいたいなと感じる部分があれば、関係を一歩すすめてもいいのだと感じます。
                </p>
                <p className="font-medium text-gray-900">
                  また、男女ともに「自分を幸せにしてくれるか」ではなく、「この人を応援したい、喜ばせたい」と思えるかどうかが、持続可能な愛の基準になります。持続的なバランスという概念からも、自分が何かを与えることができない相手からは、何かを継続的にもらうこともできないのです。
                </p>
              </div>
            </div>

            {/* 処方箋② */}
            <div className="w-full space-y-3 pt-4">
              <span className="font-bold text-gray-900 block text-base sm:text-lg">
                🎯 処方箋②【選ばれたい人への答え】：自分がどんな人間か少しずつ伝えていく
              </span>
              <div className="pl-4 border-l-2 border-pink-200 space-y-2">
                <p>
                  「選ばれるために自分を偽ってしまう」のは、ありのままを出すと選ばれないと考えているからです。しかしながら、本当のあなたとしか本当の関係性は築けません。自分を偽らないための本質的な解決策は、自分を客観的に見ながら肯定感を持ち、<strong>「私はこういう人間です」をわかりやすく言葉で伝えること</strong>です。
                </p>
                <p className="text-gray-900 font-medium bg-[#FFF8FA]/50 p-3 rounded-lg border border-pink-50 inline-block w-full sm:w-auto">
                  「束縛や干渉されるのは苦手なタイプです」「優柔不断な所があります」「時間にルーズな面があります」
                </p>
                <p>
                  このように、自分の凸凹（弱みや特性）を相手に示していくしかありません。相手の方がそのあなたを理解しながら、「それなら許容できるよ」「お互い様だね」と受け入れてくれる相手こそが、あなたの本当のパートナーです。お互いの個性や弱みを受容し合いながら、補い合い、歩んでいけることが大切です。
                </p>
              </div>
            </div>
          </section>

          {/* --- メッセージセクション --- */}
          <section className="w-full border-t border-pink-100 pt-10 space-y-4">
            <h3 className="text-lg sm:text-xl font-black text-gray-900 flex items-center gap-2 w-full">
              💍 大阪梅田ドクターズ結婚相談所からのメッセージ
            </h3>
            <p>
              結婚とは、お互いに満点を目指すオーディションではありません。<strong>「お互いに素の自分を出して、笑い合える関係」の獲得</strong>です。
            </p>
            <p>
              大阪梅田ドクターズ結婚相談所は、あなたをデータとして査定することはしません。医療従事者としての客観的な視点と心理学のロジックに基づき、あなたの凸凹（長所も短所も）とパズルのようにピタッと噛み合う、本当の相性を持ったパートナーを一緒に探していきます。
            </p>
            <p className="font-bold text-[#D9889D] text-lg">
              一方通行の選ぶ・選ばれるとは違う、2人の関係を築くという視点から、大阪梅田ドクターズ結婚相談所で婚活を頑張っていきませんか？
            </p>
          </section>

          {/* --- 女医からのメッセージ 🩷 (左フロート画像統合・テキスト回り込み版) --- */}
          <section className="py-8 border-t border-b border-pink-100/60 w-full overflow-hidden !mt-12">
            {/* 左側にフロート（浮動）させてテキストを回り込ませる */}
            <img 
              src="/femaleAdvisor2.jpg" 
              alt="女医・カウンセラー" 
              width={421}
              height={421}
              className="float-left w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-pink-100 shadow-sm mr-4 mb-2 sm:mr-6 sm:mb-4"
            />
            
            <div className="flex items-center gap-1 mb-3">
              <span className="text-lg">🩷</span>
              <span className="font-black text-gray-900 text-xl">女医からのメッセージ</span>
            </div>

            <div className="text-base text-gray-700 space-y-3 leading-relaxed">
              <p>
                「選ばなきゃ」と思えば思うほど、心が迷ってしまいますよね。それはあなたが、自分の人生をそれだけ大切にしている証拠です。
              </p>
              <p>
                婚活は、条件のパズル合わせではありません。「条件は完璧なのに、なぜか気が乗らない」なら、あなたの心が『その人じゃないよ』と教えてくれているのです。逆に、どこか不器用だけど一緒にいてホッとするなら、それこそが真のパートナーのサインかもしれません。
              </p>
              <p className="font-bold text-gray-900">
                誰かを選ぶための「査定の目」を一度休めて、あなたの「心」がどう感じているかに耳を傾けてみませんか？
              </p>
              <p>
                私たちは、あなたが婚活フィールドに溢れる条件の波に溺れそうなとき、いつでも羅針盤となって隣で支えます。
              </p>
              <p>
                カウンセラーとは言葉通り、婚活カウンセリングを通して<strong>【あなた自身の気付き】</strong>を増やしていくサポーターです。私達とお話していく中で、あなた自身が自分の考えを整理し、自分がどんな考えで、どんな人間なのか、何を欲しいのか、どんな未来を望んでいるのかをご自身で気づき、その答え【方向】を見つけていくことでしょう。
              </p>
              <p className="font-medium text-gray-900">
                自分の意志で選んだ未来には、あなたが望む幸せがあり、困難を乗り越えるモチベーションを創り出せます。ゆっくり、あなたのペースで、本当の幸せを一緒に見つけていきましょう。
              </p>
            </div>
          </section>

          {/* --- フッター（CTA） --- */}
          <div className="pt-8 text-center w-full clear-both">
            <button className="inline-block bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] text-white text-base sm:text-lg font-bold py-4 px-12 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200">
              素の自分のままで、本当の幸せを見つける無料相談はこちら
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}