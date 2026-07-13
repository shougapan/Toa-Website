"use client";

import React, { useState } from 'react';
import { Heart, Brain, Smile, Activity, MessageSquare, CheckCircle, HelpCircle, Sparkles, RefreshCw, Award, ArrowRight } from 'lucide-react';

export default function EQPage() {
  // クイズ状態の管理
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  // クイズの質問データ
  const quizQuestions = [
    {
      q: "デート中に予期せぬトラブル（予約の不手際や電車の遅延など）が起きた時、あなたの最初の反応は？",
      options: [
        { text: "つい不機嫌になったり、動揺して相手に気を遣わせてしまう", score: 1 },
        { text: "「焦っている自分」を冷静に自覚し、まずは心を落ち着かせるよう努める", score: 3 },
        { text: "問題解決を優先し、相手の気持ちを置き去りにしてテキパキ動きすぎる", score: 2 }
      ]
    },
    {
      q: "お相手が仕事の愚痴や悩みを話してきた時、あなたはどのように対応しますか？",
      options: [
        { text: "「こうすればいいのに」と、すぐに具体的な解決策やアドバイスを伝えてしまう", score: 2 },
        { text: "「それは大変だったね」と相手の言葉を反復し、まずは感情を丸ごと受け止める", score: 3 },
        { text: "話があまり長くなると、どう返していいか分からず適当に聞き流してしまう", score: 1 }
      ]
    },
    {
      q: "交際相手との意見の食い違いや衝突が起きた時、あなたの対話のスタンスは？",
      options: [
        { text: "自分の意見を我慢して相手に合わせるか、逆に感情的に自分の主張を押し通してしまう", score: 1 },
        { text: "「どうせ言っても無駄だ」と諦め、距離を置いてフェードアウトしようとする", score: 1 },
        { text: "お互いの違いを認め合い、勝ち負けではなく「二人にとっての最適解」を話し合おうとする", score: 3 }
      ]
    }
  ];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    
    if (currentQuestion !== null && currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(null);
    setAnswers([]);
    setQuizFinished(false);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const maxScore = quizQuestions.length * 3;

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-gray-700 font-sans antialiased selection:bg-rose-100 py-2.5 space-y-3 px-2 w-full text-base">
      
      {/* 1. イントロ・ヘッダーセクション */}
      <section className="w-full space-y-1.5 text-gray-700 leading-relaxed rounded-xl border border-rose-100 bg-gradient-to-b from-white to-[#FAF8F5]/40 p-3.5 shadow-sm text-base">
        {/* Header */}
        <div className="text-center space-y-1 mb-4 p-1 text-base">
          <span className="font-bold tracking-wider text-rose-400 uppercase block text-base">
            About EQ Method
          </span>
          <h1 className="font-black text-gray-900 leading-snug text-base">
            大阪梅田でハクラス婚活・スピード成婚なら［大阪梅田ドクターズ結婚相談所］｜現役医師監修×仲人歴20年
          </h1>
          <div className="mx-auto mt-1 h-0.5 w-16 bg-rose-400" />
        </div>

        {/* Content */}
        <div className="text-gray-700 leading-relaxed font-normal tracking-wide space-y-3.5 w-full text-base">
          <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg text-center space-y-1.5 w-full text-base">
            <p className="font-bold text-gray-900 text-base">
              大阪の結婚相談所なら少人数制 大阪梅田ドクターズ結婚相談所
            </p>
            <p className="text-gray-600 text-base">
              現役医師監修・仲人歴20年のベテランカウンセラーがサポート。
            </p>
            <p className="text-rose-600 font-black text-base">
              現役女医と男性ベテランカウンセラーが導く、至極のハイスペック婚活
            </p>
            <p className="text-gray-400 text-base">
              運命の相手と1年以内の成婚を目指す大人のための結婚相談所
            </p>
          </div>

          <p className="w-full px-1 text-base">
            大阪梅田ドクターズ結婚相談所では、独自の成婚メソッドとして、心理学や人間関係構築の現場で最重視される「EQ（心の知能指数）」を取り入れています。どれほど素晴らしい条件（年収・学歴・外見）でお相手とマッチングしても、生涯続く幸福な結婚生活を維持し、深めていくために本当に必要なのは、条件の先にある「感情の知性（EQ）」です。
          </p>
          
          <p className="w-full px-1 text-base">
            本ページでは、女医による心理医学的アプローチと、ベテランカウンセラーによる確かな伴走経験に基づき、数あるEQパラメーターの中から「婚活・結婚に最も重要な4つの柱」を厳選。日々の婚活から今日から実践できる、具体的かつ上質な感情トレーニング方法を専門的に解説します。
          </p>
        </div>
      </section>

      {/* 2. 女医からの一言 */}
      <section className="w-full rounded-xl border border-rose-150 bg-rose-50/40 p-3.5 shadow-sm space-y-2.5 text-base">
        <div className="flex items-center gap-1.5 border-b border-rose-100 pb-2 text-base">
          <span className="text-base">👩‍⚕️</span>
          <h2 className="font-black text-rose-600 leading-snug text-base">
            女医からの一言 🩷
          </h2>
        </div>

        <div className="text-gray-700 leading-relaxed font-normal tracking-wide space-y-3 w-full text-base">
          <p className="font-bold text-gray-900 px-1 text-base">
            EQとは、心の知能指数と言われています。EQは後天的にもあげることができるのです！
          </p>
          <p className="text-gray-600 px-1 text-base">
            パラメーターはたくさんありますが、婚活に必要な四つのコアなパラメーターを大阪梅田ドクターズ結婚相談所で高めましょう！
          </p>
          <p className="text-gray-600 px-1 text-base">
            大阪梅田ドクターズ結婚相談所が、女医の視点で考える、婚活において特に重要な四つのパラメーターは
            <strong className="text-rose-600 font-bold text-base">「自己感情を認識する力」「感情コントロール力」「他者への共感力」「対人関係性の調整力」</strong>の四つです。
          </p>
          <p className="text-gray-500 border-t border-rose-100 pt-2 px-1 text-base">
            また、IQとEQの違いにおいて、最大の特徴は「IQは変わりにくいが、EQは何歳からでも後天的に高められる力である」という点にあります。その視点から、EQを高める方法も分かりやすく解説しています。
          </p>
        </div>
      </section>

      {/* 3. 4つのコアパラメータ */}
      <section className="w-full rounded-xl border border-rose-100 bg-gradient-to-b from-white to-[#FAF8F5]/40 p-3.5 shadow-sm space-y-3.5 text-base">
        <div className="text-center space-y-1 mb-3 text-base">
          <span className="font-bold tracking-wider text-rose-400 uppercase block text-base">
            4 Core Pillars
          </span>
          <h2 className="font-black text-gray-800 leading-snug text-base">
            婚活・結婚生活に必要な「4つのEQスキル」
          </h2>
          <div className="mx-auto h-0.5 w-16 bg-rose-400" />
        </div>

        <div className="text-gray-700 leading-relaxed space-y-4 w-full text-base">
          
          {/* Skill 1 */}
          <div className="space-y-1.5 border-b border-rose-50/60 pb-3 w-full text-base">
            <h3 className="font-black text-gray-900 flex items-center gap-2 px-1 text-base">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-500 text-white font-mono shrink-0 font-bold text-base">1</span>
              自分の感情を認識する力（Emotional Self-Awareness）
            </h3>
            <p className="text-gray-600 pl-4 pr-1 text-base">
              <strong>専門的な解説：</strong>自分が「なぜ今イライラしているのか」「何を不安に思っているのか」を、把握する能力です。自分の感情の原因がわからないと解決も難しくなります。
            </p>
            <div className="bg-rose-50/40 p-2.5 rounded-lg border border-rose-100/30 font-medium text-rose-700 pl-6 relative text-base">
              <span className="absolute left-2 text-rose-400 text-base">➡️</span>
              <strong>感情を認識する力を高める方法：</strong><br />
              「怒り」「悲しみ」「寂しさ」など、自分の感情に最も近い言葉を心の中で3つ探して名前をつけてみましょう。言語化することで、自分の感情を理解・認識しやすくなります。
            </div>
          </div>

          {/* Skill 2 */}
          <div className="space-y-1.5 border-b border-rose-50/60 pb-3 w-full text-base">
            <h3 className="font-black text-gray-900 flex items-center gap-2 px-1 text-base">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-500 text-white font-mono shrink-0 font-bold text-base">2</span>
              感情をコントロールする力（Self-Regulation）
            </h3>
            <p className="text-gray-600 pl-4 pr-1 text-base">
              <strong>専門的な解説：</strong>湧き上がった衝動的な感情（怒りや不安）をコントロールする力です。この力が低い人は、【いわゆる不機嫌】によって相手に感情をぶつけやすくなってしまいます。
            </p>
            <div className="bg-rose-50/40 p-2.5 rounded-lg border border-rose-100/30 font-medium text-rose-700 pl-6 relative text-base">
              <span className="absolute left-2 text-rose-400 text-base">➡️</span>
              <strong>感情をコントロールする力を高める方法（6秒猶予と主語の転換法）：</strong><br />
              怒りでカッとなった瞬間、不安で胸がギュッとなった瞬間、心の中で6秒数え、脳の興奮を落ち着かせます。伝えるときは、「あなたはどうして〇〇しないの？」という相手を責める発言ではなく、「（私は）〇〇してもらえると、すごく嬉しいな」という自分を主語とした発言に変換して伝えます。
            </div>
          </div>

          {/* Skill 3 */}
          <div className="space-y-1.5 border-b border-rose-50/60 pb-3 w-full text-base">
            <h3 className="font-black text-gray-900 flex items-center gap-2 px-1 text-base">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-500 text-white font-mono shrink-0 font-bold text-base">3</span>
              他者へ共感する力（Empathy）
            </h3>
            <p className="text-gray-600 pl-4 pr-1 text-base">
              <strong>専門的な解説：</strong>相手の言葉の裏にある「感情」や「状況」を、自分の価値観にとらわれずに受け入れ、共感する力です。
            </p>
            <div className="bg-rose-50/40 p-2.5 rounded-lg border border-rose-100/30 font-medium text-rose-700 pl-6 relative space-y-1.5 w-full text-base">
              <span className="absolute left-2 text-rose-400 text-base">➡️</span>
              <strong>共感する力を高める方法（反復傾聴）：</strong>
              <p className="pl-1 text-base">・相手が悩みや相談を話した際、すぐに「こうすればいいのに」と解決策（アドバイス）を提示するのを我慢します。</p>
              <p className="pl-1 text-base">・まずは「それは大変だったね」「そんなことがあったら悔しいよね」と、相手の言葉を反復し、感情を受け止めます。相手は「この人は私を理解してくれる」と安心感を抱くようになります。</p>
            </div>
          </div>

          {/* Skill 4 */}
          <div className="space-y-1.5 w-full text-base">
            <h3 className="font-black text-gray-900 flex items-center gap-2 px-1 text-base">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-500 text-white font-mono shrink-0 font-bold text-base">4</span>
              対人関係性の調整力（Interpersonal Skills）
            </h3>
            <p className="text-gray-600 pl-4 pr-1 text-base">
              <strong>専門的な解説：</strong>お互いの違いを認め合い、衝突が起きたときでも、勝ち負けではなく「二人にとっての最適な解決策」を得るために対話する力です。
            </p>
            <div className="bg-rose-50/40 p-2.5 rounded-lg border border-rose-100/30 font-medium text-rose-700 pl-6 relative space-y-1.5 w-full text-base">
              <span className="absolute left-2 text-rose-400 text-base">➡️</span>
              <strong>関係の調整力を高めるトレーニング（アサーティブな対話の習慣）：</strong>
              <p className="pl-1 text-base">アサーティブな会話とは、「相手のことも自分のことも、どちらも同じように大切にする」誠実で対等な対話術のことです。</p>
              <p className="pl-1 text-base">自分の意見を無理に押し通すのでもなく、逆に言いたいことを我慢して相手に合わせるのでもない、お互いにとって心地よい着地点を見つけるための大人のコミュニケーションを指します。異なる価値観を持つ二人が長く一緒に暮らす上で、最も重要とされる心の知能指数（EQ）のスキルです。</p>
              <p className="pl-1 text-gray-500 font-normal text-base">・「どうせ言っても無駄だ」と我慢したり、逆に感情的に攻撃したりせず、共通のゴールを目指して話し合いましょう。伝える習慣から始まります。</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. 男女別EQの得意分野傾向と考察 */}
      <section className="w-full rounded-xl border border-rose-100 bg-gradient-to-b from-white to-[#FAF8F5]/40 p-3.5 shadow-sm space-y-3.5 text-base">
        <div className="text-center space-y-1 mb-3 text-base">
          <span className="font-bold tracking-wider text-rose-400 uppercase block text-base">
            Gender Specifics
          </span>
          <h2 className="font-black text-gray-800 leading-snug text-base">
            男女で異なる「EQの得意分野」と傾向
          </h2>
          <div className="mx-auto h-0.5 w-16 bg-rose-400" />
        </div>

        <div className="text-gray-700 leading-relaxed space-y-3.5 w-full text-base">
          <p className="text-gray-600 px-1 text-base">
            男女で異なる「EQの得意分野」はありますが、トータルの高さ（スコア）の男女差はごくわずかです。本質的な違いは、以下のように「どの感情スキルに長けているか」の傾向にあります。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full text-base">
            {/* 女性 */}
            <div className="bg-white rounded-xl p-3 border border-rose-100/50 shadow-xs space-y-1.5 w-full text-base">
              <h4 className="font-bold text-gray-950 flex items-center gap-1.5 text-base">
                <span>👩‍⚕️</span> 女性が得意とするEQ (他者志向)
              </h4>
              <p className="text-gray-500 text-base">
                女性は「自分以外の誰か」との関係性を円滑にするスキルが高い傾向にあります。
              </p>
              <ul className="text-gray-600 pl-4 list-disc space-y-1 text-base">
                <li><strong>高い共感力:</strong> 相手の表情や声から言葉にできない感情を察知。</li>
                <li><strong>対人関係力:</strong> 周囲と調和を図り、良好な関係を築く力。</li>
                <li><strong>自己の感情認識:</strong> 抱いている感情を正確に言語化する力。</li>
              </ul>
            </div>

            {/* 男性 */}
            <div className="bg-white rounded-xl p-3 border border-rose-100/50 shadow-xs space-y-1.5 w-full text-base">
              <h4 className="font-bold text-gray-950 flex items-center gap-1.5 text-base">
                <span>👨</span> 男性が得意としやすいEQスキル (自己・課題志向)
              </h4>
              <p className="text-gray-500 text-base">
                男性は「自分自身の感情のコントロール」や「プレッシャーへの耐性」が高い傾向にあります。
              </p>
              <ul className="text-gray-600 pl-4 list-disc space-y-1 text-base">
                <li><strong>感情の自己調整:</strong> ネガティブな感情に流されず理性に切替。</li>
                <li><strong>ストレス耐性:</strong> プレッシャーに直面しても冷静に対応する力。</li>
                <li><strong>自己肯定感・主張力:</strong> 意見を自信を持って周囲に伝える能力。</li>
              </ul>
            </div>
          </div>

          {/* Q&A */}
          <div className="p-3 bg-slate-900 text-slate-100 rounded-lg space-y-2.5 w-full text-base">
            <h5 className="font-bold text-amber-300 text-base">
              ❓ 問い：なぜこの違い【傾向】が生まれるのか？
            </h5>
            <div className="leading-relaxed text-slate-300 space-y-2 border-t border-slate-800 pt-2 px-0.5 text-base">
              <p className="text-base">
                <strong>1. 社会的・文化的な刷り込み（環境要因）：</strong><br />
                幼少期からの育てられ方や、ジェンダーロールが影響しています。女性は「周囲に配慮し、感情を共有すること」、男性は「弱音を吐かず、冷静で自立していること」を評価されやすいため、それぞれの能力が自然と筋トレのように鍛えられます。
              </p>
              <p className="text-base">
                <strong>2. 脳の処理パターンの違い（生物学的要因）：</strong><br />
                不快な感情に直面したとき、女性の脳はその感情をじっくり咀嚼（共有・言語化）しようとする傾向があり、男性の脳は感情の察知を短時間で終わらせ、すぐに「問題解決モード」にスイッチを切り替える傾向が指摘されています。
              </p>
            </div>
          </div>

          <div className="bg-rose-50/50 rounded-lg p-3 border border-rose-100/30 space-y-1 w-full text-base">
            <p className="font-bold text-rose-600 px-0.5 text-base">👩‍⚕️ 女性医師の見解：</p>
            <p className="text-gray-600 leading-relaxed px-0.5 text-base">
              男らしさ、女らしさといった固定概念や社会的役割の差は少なくなってきています。今後EQの高さも、そうした変化や生物学的な本来の特徴をミックスした形に変化していきますので、性別という固定概念だけではなく<strong>個人それぞれに柔軟に捉えたほうがいい</strong>と考えています。
            </p>
          </div>
        </div>
      </section>

      {/* 5. 結婚・パートナーシップにおけるEQの価値 */}
      <section className="w-full rounded-xl border border-rose-100 bg-gradient-to-b from-white to-[#FAF8F5]/40 p-3.5 shadow-sm space-y-3 text-base">
        <div className="text-center space-y-1 text-base">
          <span className="font-bold tracking-wider text-rose-400 uppercase block text-base">
            Core Importance
          </span>
          <h2 className="font-black text-gray-800 leading-snug text-base">
            結婚・パートナーシップにおけるEQの価値
          </h2>
          <div className="mx-auto h-0.5 w-16 bg-rose-400" />
        </div>

        <div className="text-gray-700 leading-relaxed space-y-3 w-full px-1 text-base">
          <p className="font-bold text-gray-900 border-b border-rose-50 pb-2 text-base">
            「離婚するカップルの多くは、経済力（スペック）の問題ではなく、お互いのEQ（感情の自己管理、共感、衝突解決能力）の低さが原因である」
          </p>
          <p className="text-gray-600 text-base">
            行動科学の大規模な追跡調査では、上記のことが実証されています。
            結婚生活という長期的な共同運営において、お互いの違いを認め合い、ストレスを乗り越えるための<strong>「究極の生存戦略」こそがEQ</strong>なのです。
          </p>

          <p className="text-rose-600 bg-rose-50/50 p-2.5 rounded-lg text-center font-bold border border-rose-100/40 w-full text-base">
            ご自身の性格や傾向をEQ的視点から見ると、自己の客観視に役立ちますよ。婚活のさまざまな壁にもぜひ一緒に利用していきましょう！🩷
          </p>
        </div>
      </section>

      {/* 6. インタラクティブ：EQセルフチェック */}
      <section className="w-full rounded-xl border border-rose-100 bg-gradient-to-b from-white to-[#FAF8F5]/40 p-3.5 shadow-sm space-y-3 text-base">
        <div className="text-center space-y-1 text-base">
          <span className="font-bold tracking-wider text-rose-400 uppercase block text-base">
            Self Diagnostic Quiz
          </span>
          <h2 className="font-black text-gray-800 leading-snug text-base">
            あなたのEQの高さを簡単にチェック✅
          </h2>
          <div className="mx-auto h-0.5 w-16 bg-rose-400" />
        </div>

        <div className="text-gray-700 leading-relaxed space-y-3 w-full px-1 text-base">
          <p className="text-gray-500 text-center text-base">
            日常の婚活シーンを切り取った3問の選択式クイズにチャレンジしてみましょう！結果はその場で表示されます。
          </p>

          {currentQuestion === null && !quizFinished ? (
            <div className="text-center py-2 text-base">
              <button
                onClick={() => setCurrentQuestion(0)}
                className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white font-bold px-8 py-3 rounded-xl shadow-md transition text-base"
              >
                診断をスタートする
                <ArrowRight className="w-4 h-4 text-base" />
              </button>
            </div>
          ) : !quizFinished && currentQuestion !== null ? (
            <div className="space-y-3.5 w-full p-3 bg-white rounded-lg border border-rose-50 shadow-xs text-base">
              <div className="flex justify-between text-gray-400 font-semibold text-base">
                <span>質問 {currentQuestion + 1} / {quizQuestions.length}</span>
                <span>進行度 {Math.round(((currentQuestion) / quizQuestions.length) * 100)}%</span>
              </div>
              <h4 className="font-bold text-gray-900 text-base">
                {quizQuestions[currentQuestion].q}
              </h4>
              <div className="space-y-1.5 pt-1 text-base">
                {quizQuestions[currentQuestion].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(opt.score)}
                    className="w-full text-left p-2.5 rounded-lg border border-gray-200 hover:border-rose-300 hover:bg-rose-50/30 font-medium transition text-gray-700 leading-snug text-base"
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-3 w-full p-4 bg-rose-50/20 rounded-lg border border-rose-100 text-base">
              <p className="text-rose-500 font-bold uppercase tracking-wider text-base">心理チェック結果</p>
              <h4 className="font-bold text-gray-900 text-base">あなたのEQ意識スコア</h4>
              <p className="font-black text-rose-600 text-base">{totalScore} <span className="text-gray-400 text-base">/ {maxScore} 点</span></p>
              <p className="text-gray-600 leading-relaxed text-left bg-white p-3 rounded-lg border border-rose-100/50 text-base">
                {totalScore >= 8 ? "素晴らしい感情知性をお持ちです！自他の感情の客観視能力が高く、衝突があってもアサーティブで前向きな対話で良好な関係を育めます。" : 
                 totalScore >= 5 ? "平均的なEQをお持ちです。少し意識して「6秒猶予」や「反復傾聴」を練習することでお相手への深い安心感提供力を劇的に高められます。" : 
                 "感情が少し先走ってしまう傾向があります。まずは日頃から自分の喜怒哀楽の原因を言語化し、客観的に感情を認知することから始めましょう。"}
              </p>
              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-1.5 font-bold text-gray-500 hover:text-gray-800 transition pt-1 text-base"
              >
                <RefreshCw className="w-3.5 h-3.5 text-base" /> もう一度診断する
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 7. EQについて詳しい説明 (Deep Dive) */}
      <section className="w-full rounded-xl border border-rose-100 bg-gradient-to-b from-white to-[#FAF8F5]/40 p-3.5 shadow-sm space-y-4 text-base">
        <div className="text-center space-y-1 text-base">
          <span className="font-bold tracking-wider text-rose-400 uppercase block text-base">
            Background Theory
          </span>
          <h2 className="font-black text-gray-800 leading-snug text-base">
            【EQについて詳しい説明】
          </h2>
          <div className="mx-auto h-0.5 w-16 bg-rose-400" />
        </div>

        <div className="text-gray-700 leading-relaxed space-y-5 w-full text-base">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-base">
            <div className="space-y-1.5 text-base">
              <h3 className="font-bold text-gray-950 flex items-center gap-2 text-base">
                <span className="w-1.5 h-4 bg-rose-400 rounded-sm inline-block shrink-0" />
                1. EQ理論の誕生と世界への普及
              </h3>
              <p className="text-gray-600 pl-3 text-base">
                EQ（Emotional Intelligence Quotient）の概念は、1990年にアメリカの心理学者ピーター・サロベイ氏とジョン・メイヤー氏の共同研究によって誕生しました。彼らは「社会的に成功する人物は、例外なく自分の感情をコントロールし、他者の感情を察知する能力（エモーショナル・インテリジェンス）に長けている」事実を実証しました。
                この理論を世界に普及させたのが、心理学者ダニエル・ゴールマン氏です。彼は1995年の著書『Emotional Intelligence』（邦題：EQ〜こころの知能指数）の中で、情動を扱う「EQ」を普及させました。
              </p>
            </div>

            <div className="space-y-1.5 text-base">
              <h3 className="font-bold text-gray-950 flex items-center gap-2 text-base">
                <span className="w-1.5 h-4 bg-rose-400 rounded-sm inline-block shrink-0" />
                2. 脳科学から見る「IQ」と「EQ」の決定的な違い
              </h3>
              <p className="text-gray-600 pl-3 text-base">
                主に「前頭葉（理性）」が司るIQは成人後は数値がほぼ一定ですが、EQは感情を司る「大脳辺縁系（扁桃体）」と「前頭葉」の間の情報の連携のスムーズさを表します。
                例えば、デート中にトラブルが起きた際、EQが高い人は「今自分は焦っている」と冷静に認知し、前頭葉で「ここで不機嫌になっても解決しない」と判断して大人の対応を選択できます。最大の特長は、<strong>「IQは成人後ほぼ一定だが、EQは正しいトレーニングで後天的に高められるスキルである」</strong>という点にあります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. EQの15個の基本パラメーター */}
      <section className="w-full rounded-xl border border-rose-100 bg-gradient-to-b from-white to-[#FAF8F5]/40 p-3.5 shadow-sm space-y-3.5 text-base">
        <div className="text-center space-y-1 text-base">
          <span className="font-bold tracking-wider text-rose-400 uppercase block text-base">
            Mental Scorecard
          </span>
          <h2 className="font-black text-gray-800 leading-snug text-base">
            【EQの15個の基本パラメーター】
          </h2>
          <div className="mx-auto h-0.5 w-16 bg-rose-400" />
        </div>

        <div className="text-gray-700 leading-relaxed space-y-3.5 w-full px-1 text-base">
          <p className="text-gray-500 text-center text-base">
            心理医学の世界的権威であるルーヴェン・バーオン氏は、EQを測定可能なモデルとして発展させ、15の詳細なパラメーター（要素）に分類しました。これらは結婚生活を円満に維持するための「人間力のカルテ」となります。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 w-full pt-1 text-base">
            
            {/* 自己領域 */}
            <div className="bg-white rounded-xl p-3 border border-rose-50 shadow-2xs space-y-1.5 w-full text-base">
              <h4 className="font-bold text-rose-500 border-b border-rose-50 pb-1.5 text-base">
                ① 自己領域（インサイド）
              </h4>
              <p className="text-gray-400 leading-relaxed text-base">
                自分の感情を客観的にマネジメントし、婚活の不安や焦りに動じないための土台です。
              </p>
              <ul className="text-gray-600 space-y-1 pl-1 text-base">
                <li><strong>1. 自己認識:</strong> 自分の感情をリアルタイムで正確に捉える力。</li>
                <li><strong>2. 自己肯定力:</strong> 強みも弱みも認め尊重する力。</li>
                <li><strong>3. 自己表現力:</strong> 本音を感情的にならず伝える能力。</li>
                <li><strong>4. 独立性:</strong> 他者に依存せず、自らの意思で決断する力。</li>
                <li><strong>5. 自己実現力:</strong> 人生に目的を持ち、情熱的に生きる力。</li>
              </ul>
            </div>

            {/* 他者領域 */}
            <div className="bg-white rounded-xl p-3 border border-rose-50 shadow-2xs space-y-1.5 w-full text-base">
              <h4 className="font-bold text-rose-500 border-b border-rose-50 pb-1.5 text-base">
                ② 他者領域（パートナーシップ）
              </h4>
              <p className="text-gray-400 leading-relaxed text-base">
                お相手とのすれ違いを解消し、深い安心感と信頼関係を育むための能力です。
              </p>
              <ul className="text-gray-600 space-y-1 pl-1 text-base">
                <li><strong>6. 共感力:</strong> 言葉の裏の「感情」を深く想像し寄り添う力。</li>
                <li><strong>7. 对人関係力:</strong> 心地よい距離で親密な関係を維持するスキル。</li>
                <li><strong>8. 社会的責任:</strong> 協調性を持って貢献しようとする姿勢。</li>
              </ul>
            </div>

            {/* 状況適応 */}
            <div className="bg-white rounded-xl p-3 border border-rose-50 shadow-2xs space-y-1.5 w-full text-base">
              <h4 className="font-bold text-rose-500 border-b border-rose-50 pb-1.5 text-base">
                ③ 状況適応・ストレス管理
              </h4>
              <p className="text-gray-400 leading-relaxed text-base">
                予測不可能なトラブルや意見の食い違いを乗り越える力です。
              </p>
              <ul className="text-gray-600 space-y-1 pl-1 text-base">
                <li><strong>9. 現実検証力:</strong> 事実を客観的・論理的に見極める力。</li>
                <li><strong>10. 柔軟性:</strong> お相手の価値観に応じて考えを変えられる力。</li>
                <li><strong>11. 問題解決力:</strong> 勝ち負けではなく「2人の最適解」を導く力。</li>
                <li><strong>12. ストレス耐性:</strong> トラブルに直面しても冷静に対処する回復力。</li>
                <li><strong>13. 衝動コントロール:</strong> 怒りに対し極端な行動を抑える自制心。</li>
              </ul>
            </div>

            {/* 全体的な気分 */}
            <div className="bg-white rounded-xl p-3 border border-rose-50 shadow-2xs space-y-1.5 w-full text-base">
              <h4 className="font-bold text-rose-500 border-b border-rose-50 pb-1.5 text-base">
                ④ 全体的な気分領域
              </h4>
              <p className="text-gray-400 leading-relaxed text-base">
                常に前を向き、家庭内に温かいエネルギーを灯し続けるためのマインドです。
              </p>
              <ul className="text-gray-600 space-y-1 pl-1 text-base">
                <li><strong>14. 楽観性:</strong> 困難にあっても好転すると信じ可能性に目を向ける力。</li>
                <li><strong>15. 幸福感:</strong> 日常の些細な出来さに満足と感謝を見出す力。</li>
              </ul>
            </div>

          </div>

          <div className="bg-rose-50 border border-rose-100 rounded-xl p-3 text-gray-700 leading-relaxed w-full text-base">
            <span className="font-bold text-rose-600 block mb-1 text-base">👩‍⚕️ 女医からのコメント：</span>
            EQは高いにこしたことは無いと思いますが、完璧な人はこの世におらず、あるパラメーターだけに特化して高い方がうまく仕事もあるでしょうし、あるパラメーターが高くなるとあるパラメーターは低くなるという従属の関係にもなっています。弱みや苦手分野があることも個性であり魅力の一つだと考えています。男女ともに「できない人ほどほっとけなくて可愛い🩷」という点も決して否めないですから(笑)
          </div>
        </div>
      </section>

      {/* 9. 入会アピール & 無料面談予約 (CTA) */}
      <section className="w-full rounded-xl border border-rose-100 bg-gradient-to-b from-white to-[#FAF8F5]/40 p-3.5 shadow-sm space-y-3.5 text-base">
        <div className="text-center space-y-1 text-base">
          <span className="font-bold tracking-wider text-rose-400 uppercase block text-base">
            Contact Call
          </span>
          <h2 className="font-black text-gray-800 leading-snug text-base">
            一生モノのEQトレーニングをあなたへ
          </h2>
          <div className="mx-auto h-0.5 w-16 bg-rose-400" />
        </div>

        <div className="text-gray-700 leading-relaxed space-y-3.5 w-full text-base">
          <p className="font-bold text-gray-900 border-l-4 border-rose-400 pl-3.5 text-base">
            大阪梅田ドクターズ結婚相談所からの一言🩷💙
          </p>

          <p className="text-gray-600 w-full px-1 text-base">
            当相談所では、この15のパラメーターを用いてあなたの心の傾向を判断。脳科学や心理医学の知見に基づき、あなたが無意識に陥りやすい「思考の癖」を女医の視点で分析し、実際のデートやお見合いの具体的なシーンを通じて、どう表現すればお相手の心に響くかをベテランカウンセラーがマンツーマンで実践指導します。あなたの「人間力（EQ）」そのものを磨く機会を得て、生涯続く最高のパートナーシップを手に入れませんか。当社のマインドに共感していただける方の入会をお待ちしています。
          </p>

          <div className="pt-1.5 text-center w-full text-base">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold px-8 py-3 rounded-xl shadow-md transition duration-300 w-full sm:w-auto text-base"
            >
              <MessageSquare className="w-5 h-5 shrink-0 text-base" />
              【無料相談】まずは無料カウンセリングから（LINE無料相談・対面対応）
            </a>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="text-center py-4 text-gray-400 border-t border-rose-50 mt-4 w-full text-base">
        <p>© 大阪梅田ドクターズ結婚相談所 All Rights Reserved.</p>
      </footer>

    </div>
  );
}
