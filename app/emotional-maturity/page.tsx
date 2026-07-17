import React from 'react';

// ※ Next.js等の環境に合わせて、適切なアイコンやImageコンポーネントをインポートしてください。
// import Image from 'next/image';

interface MaturityPageProps {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

export default function MaturityPage({ sectionRef }: MaturityPageProps) {
  return (
    <div ref={sectionRef} className="w-full bg-[#FFFBFD] py-10 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md border border-pink-100/60 rounded-3xl overflow-hidden">
        
        {/* --- ヒーローヘッダーセクション --- */}
        <div className="relative bg-gradient-to-b from-[#FFF5F8] to-white p-6 sm:p-10 text-center border-b border-pink-50">
          <span className="text-xs sm:text-sm font-black text-[#D9889D] uppercase tracking-widest block mb-2">
            Special Column for Inner Maturity
          </span>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 leading-snug tracking-tight mb-4">
            大人の結婚に必要な「人間的成熟度」とは？<br className="hidden sm:inline" />
            誰もが本能的に惹かれる内面魅力の4つの条件
          </h1>
          <div className="w-16 h-1 bg-[#E6A2B3] mx-auto mb-6" />
          
          <p className="text-base text-gray-700 leading-relaxed text-left sm:text-center max-w-2xl mx-auto">
            恋愛の「火種」を燃え上がらせ、生涯続く結婚生活の「安心の土台」となるもの。
            それが、性別を超えて誰もが惹きつけられる<strong>「人間的成熟度（精神的成熟）」</strong>です。
            心理学や医療の現場でも重視されるこの成熟度は、モテテクニックだけでは作れません。
          </p>
          <p className="text-base text-gray-700 leading-relaxed text-left sm:text-center max-w-2xl mx-auto mt-4">
            ここでは、婚活サバイバルを勝ち抜き、生涯のパートナーから「この人と生きたい」と選ばれるための4つの内面的アプローチと、他者受容をスムーズに可能にする脳と心のメカニズムを解説します。
          </p>
        </div>

        {/* --- 4つの内面的魅力（条件） --- */}
        <div className="p-6 sm:p-10 space-y-8">
          <h2 className="text-lg sm:text-xl font-black text-gray-900 border-l-4 border-[#E6A2B3] pl-3 mb-6">
            本能的に惹かれる「人間的成熟度」4つの条件
          </h2>

          <div className="grid gap-6">
            {/* 条件1 */}
            <div className="p-5 bg-gradient-to-r from-blue-50/40 to-transparent rounded-2xl border border-blue-100/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🔵</span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">自分の感情の認知</h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed pl-8">
                自分の心に湧き上がる「寂しさ・怒り・恐怖」といった感情から目を背けず、客観的に見つめる力（メタ認知能力）です。
                自分の内面を把握できているからこそ、他者に対しても嘘のない、圧倒的な誠実さとして伝わります。
              </p>
            </div>

            {/* 条件2 */}
            <div className="p-5 bg-gradient-to-r from-blue-50/40 to-transparent rounded-2xl border border-blue-100/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🔵</span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">感情の安定（セルフコントロール）</h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed pl-8">
                心理学者ダニエル・ゴールマンが提唱するEQ（心の知能指数）の根幹であり、不安や怒りを「お相手のせい」にせず、自分で感情を処理するメンタルヘルス能力。
                「大人の安定感」は、変化の多い現代の結婚生活において、最も価値のある心理的安定性となります。
              </p>
            </div>

            {/* 条件3 */}
            <div className="p-5 bg-gradient-to-r from-blue-50/40 to-transparent rounded-2xl border border-blue-100/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🔵</span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">自己への肯定感</h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed pl-8 space-y-2">
                <span>自分の強みだけでなく、不完全な部分や弱さも「これが今の自分だ」と認め、自分自身の最大の味方でいられる強さです。自分の内側にブレない土台があるため、精神的恒常性（メンタルの安定）を維持できます。</span>
                <span className="block mt-2">他者からの過度な承認欲求（見返り）を求めず、自立して相手と向き合えるため、依存や支配のない対等なパートナーシップが築けます。</span>
              </p>
            </div>

            {/* 条件4 */}
            <div className="p-5 bg-gradient-to-r from-blue-50/40 to-transparent rounded-2xl border border-blue-100/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🔵</span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">高い共感力と傾聴力</h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed pl-8">
                相手の話を自分の価値観で評価（ジャッジ）せずに聴くことができ、相手の気持ちや背景となる世界をそのまま理解【共感】しようとする姿勢です。
              </p>
            </div>
          </div>
        </div>

        {/* --- 深掘り：真の共感の仕方 --- */}
        <div className="bg-[#FFF8FA] p-6 sm:p-10 border-y border-pink-100/60">
          <div className="text-center mb-6">
            <span className="text-xl">🩷</span>
            <h2 className="text-lg sm:text-xl font-black text-gray-900 mt-1">
              簡単そうで難しい？！「真の共感の仕方」
            </h2>
            <div className="w-12 h-0.5 bg-[#E6A2B3] mx-auto mt-2" />
          </div>

          <p className="text-base text-gray-700 leading-relaxed mb-6">
            他者に共感できるというのは、単に相手の話に「笑顔で相槌を打つ」といった表面的なスキルではありません。共感できるために必要な力を、もう少し深く考えてみましょう。
          </p>

          <div className="space-y-6">
            {/* 問いと答え */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-pink-100">
              <div className="text-[#D9889D] font-black text-base mb-1">【問い】真に相手に共感するためには何が必要か？</div>
              <div className="text-gray-900 font-bold text-base mb-4">【答え】</div>
              
              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <div>
                  <h4 className="font-bold text-gray-900 flex items-center gap-1.5 mb-1">
                    <span className="text-xs bg-[#E6A2B3] text-white px-2 py-0.5 rounded-full font-black">1</span>
                    視点を変えた想像力
                  </h4>
                  <p className="pl-6">
                    自分とは全く異なる価値観や背景を持つ相手が、「なぜその感情を抱くに至ったか」という背景を、視点を変えて論理的・感情的に想像、推測する力です。
                    現在の自分の位置から自分を少しずつ遠ざけていくイメージでやってみると、上手くできるかもしれません。
                  </p>
                </div>

                <hr className="border-pink-50" />

                <div>
                  <h4 className="font-bold text-gray-900 flex items-center gap-1.5 mb-1">
                    <span className="text-xs bg-[#E6A2B3] text-white px-2 py-0.5 rounded-full font-black">2</span>
                    判断（自分の価値観との照合）を一旦手放す
                  </h4>
                  <p className="pl-6">
                    共感することが苦手な人は「じゃあ、自分もその意見や行動を正しいと思うか？（＝同意）」を、話を聴きながら自分の倫理観や価値観と照合し、お相手をジャッジしてしまいます。
                  </p>
                  <p className="pl-6 mt-2">
                    そのため、「相手の状況や気持ちは100%理解できる（ステップ①）」けれど、「私の価値観とは違うから同意はできない（ステップ②）」という状態で思考が止まりがちです。
                  </p>
                  <p className="pl-6 mt-2 font-medium text-gray-900 bg-pink-50/50 p-3 rounded-lg border-l-2 border-[#E6A2B3]">
                    本当の共感とは、相手に対する「正しい・間違い」や「ベストな選択か否か」を判定する作業をせずに、ただ「今、相手が感じている痛みや喜びを、自分も同じ温度で感じる」ということなのです。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- ポスト形式的思考 --- */}
        <div className="p-6 sm:p-10 space-y-6">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
              理解はできるけど、「相手に同意できない、否定したくなる」のはなぜ？
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              大人の知性は「白か黒か（正論か間違いか）」ではなく、矛盾や不完全さを受け入れる<strong>「ポスト形式的思考（Post-formal Thought）」</strong>に移行しますが、その成熟が低いと他者の受容や共感がしにくい状況になります。
            </p>
          </div>

          <div className="bg-gray-50 p-5 sm:p-6 rounded-2xl border border-gray-150">
            <h4 className="text-base font-black text-gray-900 mb-3 flex items-center gap-2">
              🧠 ポスト形式的思考とは？（大人の思考法）
            </h4>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              子どもの頃、私たちの脳は「正しいか、間違いか」「白か、黒か」という二者択一の絶対的な正解を求めます（これを発達心理学者ピアジェは「形式的思考」と呼びました）。
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              しかし、20代以降の社会経験を積む中で、人間の脳はさらに進化し、「ポスト形式的思考」へと発達します。これは、以下の特徴を持つ<strong>「大人のための柔軟な思考システム」</strong>です。
            </p>
            
            <ul className="space-y-2 text-base text-gray-700 pl-4 mb-4 list-disc">
              <li>世界の「正解」は一つではないと知っている（相対性）。</li>
              <li>物事には常に矛盾が含まれることを受け入れられる（矛盾の受容）。</li>
              <li>理屈（論理）だけでなく、その場の文脈や「相手の感情」を統合して判断できる（統合性）。</li>
            </ul>

            <p className="text-base text-gray-700 leading-relaxed">
              子どもの思考（白黒思考）だと、意見が合わない（同意できない）相手に対して、「あいつは間違っている」と突き放すか、無理やり相手に合わせるしかありません。
              しかし、ポスト形式的思考ができる大人は、以下のように脳内で処理します。
            </p>

            <div className="mt-4 bg-white p-4 rounded-xl border border-gray-200 text-base text-gray-700 leading-relaxed">
              相手の意見そのもの（例えば「仕事を投げ出す」という行為）には賛成できなくても、<strong>「その人がこれまで生きてきた状況、今の置かれた状況、その瞬間の感情」を丸ごと一つの現実として受け止める（＝共感）</strong>ことができます。
              <span className="block mt-2 text-gray-900 font-medium">
                「私はその行動は選ばないけれど、あなたがその瞬間、そうせざるを得なかったほどの苦しみは、本当に痛いほど分かるよ」
              </span>
              という、矛盾を矛盾のまま抱きしめる包容力こそが、この思考の本質です。
            </div>
          </div>
        </div>

        {/* --- 結婚生活で最強な理由 --- */}
        <div className="p-6 sm:p-10 bg-gradient-to-b from-white to-[#FFF5F8] border-t border-pink-100/60">
          <h3 className="text-base sm:text-lg font-black text-gray-900 mb-4">
            結婚生活において、なぜこれが「最強の内面魅力」なのか？
          </h3>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            結婚生活は、育った環境が全く違う二人が一緒に暮らすわけですから、毎日が「矛盾」と「不完全さ」の連続です。
          </p>

          <div className="space-y-3 mb-4">
            <div className="flex items-start gap-2 text-base text-gray-700 bg-white/80 p-3 rounded-lg border border-pink-50">
              <span className="text-[#D9889D] font-bold">例1</span>
              <p>「お互いに大好きなのに、生活の些細なこだわりでイライラしてしまう」</p>
            </div>
            <div className="flex items-start gap-2 text-base text-gray-700 bg-white/80 p-3 rounded-lg border border-pink-50">
              <span className="text-[#D9889D] font-bold">例2</span>
              <p>「相手の言っていることは正論だけど、今はどうしても受け入れられない」</p>
            </div>
          </div>

          <p className="text-base text-gray-700 leading-relaxed">
            こうした矛盾に直面したとき、白黒思考の人は「相性が悪い」「相手が間違っている」とすぐに離婚や破局を考えてしまいます。
            しかし、ポスト形式的思考ができる人は、<strong>「矛盾があるのが当たり前。お互い不完全な人間同士、どうやって新しい二人のルール（第3の答え）を作っていこうか」</strong>と、関係を柔軟に育むことができます。
          </p>
        </div>

        {/* --- メッセージ 💬 --- */}
        <div className="p-6 sm:p-10 bg-[#FFF8FA] border-t border-b border-pink-100/60">
          <div className="flex gap-3">
            <span className="text-2xl mt-1">💬</span>
            <div className="space-y-3 text-base text-gray-700 leading-relaxed">
              <h4 className="font-bold text-gray-900 text-lg">メッセージ</h4>
              <p>
                大人になると価値観が固定するため自分を変えるのも難しくなる傾向がありますが、新しい知識や見解を知ることで、<strong>「なるほど、少し視野を広げて柔軟にチャレンジしてみようかな？」「そういうやり方もあるのか」</strong>と気づきのチャンスになればいいのかなと思います。
              </p>
              <p>
                その上で、人生において、どのような選択をするかはあなた次第です。
              </p>
              <p className="font-bold text-[#D9889D]">
                私たちは「人生の答えは一つではない」と深く考え、あなたの全ての選択に可能な限り寄り添うことをお約束します。
              </p>
            </div>
          </div>
        </div>

        {/* --- まとめ＆フッター（CTA） --- */}
        <div className="p-6 sm:p-10 text-center bg-white space-y-6">
          <div className="max-w-xl mx-auto">
            <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-3">
              🚪 新しい未来への扉を開きませんか？
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              大人の知性を兼ね備え、内面の成熟度を高めれば、結婚生活だけではなく、社会でもさらなる飛躍を得るでしょう。
            </p>
            <p className="text-base text-gray-700 leading-relaxed font-medium">
              大阪梅田ドクターズ結婚相談所で、専門的な知識と知見を基に内面を磨く手がかりを得て、一生モノの魅力を手に入れませんか？
              あなたのその知的な挑戦を、心理学臨床経験の力で「一生モノの魅力」へと昇華させます。
            </p>
          </div>

          <div className="pt-4">
            <button className="inline-block bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] text-white text-base font-bold py-4 px-8 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200">
              内面から磨く、無料カウンセリングを予約する
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}