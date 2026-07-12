"use client"

import React, { useState } from 'react';
import { Heart, Brain, Smile, Activity, MessageSquare, CheckCircle, HelpCircle, Sparkles, RefreshCw, Award, ArrowRight } from 'lucide-react';

import { Metadata } from 'next';



// ============================================================================
// 1. Static Metadata Export (For Head Tags & Social Previews)
// ============================================================================
// export const metadata: Metadata = {
//   title: '【女医の本質】「選ぶ・選ばれる」婚活の呪縛。外部基準を脱する本当の相性｜大阪梅田ドクターズ結婚相談所',
//   description: '評価や査定を続けるうちに自分の欲しいパートナーを見失う罠。選ばれるために本当の自分を捨てる葛藤に対し、他人の物差しを捨てて自分のリラックス度を基準にする、心理学に基づいた正しい選び方を提示。現役女医監修コラム。'
// };




export default function EQPage() {
  // クイズ状態の管理
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

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
    <div className="min-h-screen bg-rose-50/20 text-slate-800 font-sans antialiased selection:bg-rose-200">
      
      {/* イントロ・ヘッダーセクション */}
      <section className="w-full px-4 md:px-8 pt-16 pb-12 bg-white border-b border-rose-100">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs md:text-sm font-bold tracking-widest text-rose-500 uppercase block mb-2">
            About EQ Method
          </span>

          <h1 className="text-2xl md:text-4xl font-serif font-black text-slate-900 leading-tight tracking-wide">
            大阪梅田でハクラス婚活・スピード成婚なら<br className="hidden md:inline" />
            <span className="text-rose-600">［大阪梅田ドクターズ結婚相談所］</span>｜現役医師監修×仲人歴20年
          </h1>

          <div className="mt-5 h-1 w-20 rounded-full bg-rose-400" />
          
          <div className="mt-8 p-6 md:p-8 bg-slate-900 text-slate-100 rounded-2xl shadow-xl shadow-slate-900/10 space-y-4">
            <p className="text-sm md:text-base leading-relaxed text-slate-300">
              大阪の結婚相談所なら少人数制 <strong className="text-white">大阪梅田ドクターズ結婚相談所</strong><br />
              現役医師監修・仲人歴20年のベテランカウンセラーがあなたの婚活をフルサポート。
            </p>
            <p className="text-base md:text-xl font-serif font-medium text-amber-300 tracking-wide">
              現役女医と男性ベテランカウンセラーが導く、至極のハイスペック婚活
            </p>
            <p className="text-xs md:text-sm text-slate-400">
              運命の相手と1年以内の成婚を目指す大人のための結婚相談所
            </p>
          </div>
        </div>
      </section>

      {/* 導入セクション */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-6">
            婚活・結婚生活に必要な<br className="md:hidden" />「4つのEQスキル」とEQの高め方
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed text-left md:text-center">
            大阪梅田ドクターズ結婚相談所では、独自の成婚メソッドとして、心理学や人間関係構築の現場で最重視される「EQ（心の知能指数）」を取り入れています。
            どれほど素晴らしい条件（年収・学歴・外見）でお相手とマッチングしても、生涯続く幸福な結婚生活を維持し、深めていくために本当に必要なのは、条件の先にある<strong className="text-rose-600 font-semibold">「感情の知性（EQ）」</strong>です。
          </p>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed text-left md:text-center mt-4">
            本ページでは、女医による心理医学的アプローチと、ベテランカウンセラーによる確かな伴走経験に基づき、数あるEQパラメーターの中から「婚活・結婚に最も重要な4つの柱」を厳選。今日から実践できる、具体的かつ上質な感情トレーニング方法を専門的に解説します。
          </p>
        </div>

        {/* 女医からの一言コンポーネント (Pink Box) */}
        <div className="bg-rose-50 border-2 border-dashed border-rose-200 rounded-2xl p-6 md:p-8 relative mt-12 shadow-sm">
          <div className="absolute -top-4 left-6 bg-rose-500 text-white font-bold text-xs px-4 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <span>女医からの一言</span>
            <Heart className="w-3 h-3 fill-white" />
          </div>
          <div className="text-slate-700 text-sm md:text-base space-y-3 leading-relaxed pt-2">
            <p className="font-bold text-rose-600">
              EQとは、心の知能指数と言われています。EQは後天的にもあげることができるのです！
            </p>
            <p>
              パラメーターはたくさんありますが、婚活に必要な四つのコアなパラメーターを大阪梅田ドクターズ結婚相談所で高めましよう！
            </p>
            <p className="text-xs text-slate-500 mt-4 border-t border-rose-100 pt-3">
              また、IQとEQの違いにおいて、最大の特徴は<strong>「IQは変わりにくいが、EQは何歳からでも後天的に高められる力である」</strong>という点です。その視点から、EQを高める方法も分かりやすく解説しています。
            </p>
          </div>
        </div>
      </section>

      {/* 4つの重要なコアパラメーター */}
      <section className="py-16 bg-white px-4 border-t border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-rose-500 font-bold text-xs tracking-widest uppercase block mb-1">4 CORE PARAMETERS</span>
            <h3 className="text-xl md:text-3xl font-serif font-bold text-slate-900">婚活において特に重要な4つのパラメーター</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            
            {/* 1力 */}
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-rose-500 text-white font-bold rounded-xl flex items-center justify-center font-serif">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base md:text-lg">自分の感情を認識する力</h4>
                    <p className="text-xs text-slate-400 font-mono">Emotional Self-Awareness</p>
                  </div>
                </div>
                <div className="space-y-4 text-sm md:text-base leading-relaxed">
                  <p className="text-slate-600 bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-xs md:text-sm">
                    <span className="font-bold text-slate-900 block mb-1">【専門的な解説】</span>
                    自分が「なぜ今イライラしているのか」「何を不安に思っているのか」を把握する能力です。自分の感情の原因がわからないと解決も難しくなります。
                  </p>
                  <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-100/70 text-slate-700">
                    <span className="font-bold text-rose-600 text-xs block mb-1">💡 感情を認識する力を高める方法</span>
                    「怒り」「悲しみ」「寂しさ」など、自分の感情に最も近い言葉を心の中で3つ探して名前をつけてみましょう。言語化することで、自分の感情を理解・認識しやすくなります。
                  </div>
                </div>
              </div>
            </div>

            {/* 2力 */}
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-rose-500 text-white font-bold rounded-xl flex items-center justify-center font-serif">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base md:text-lg">感情をコントロールする力</h4>
                    <p className="text-xs text-slate-400 font-mono">Self-Regulation</p>
                  </div>
                </div>
                <div className="space-y-4 text-sm md:text-base leading-relaxed">
                  <p className="text-slate-600 bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-xs md:text-sm">
                    <span className="font-bold text-slate-900 block mb-1">【専門的な解説】</span>
                    湧き上がった衝動的な感情（怒りや不安）をコントロールする力です。この力が低い人は、【いわゆる不機嫌】によって相手に感情をぶつけやすくなってしまいます。
                  </p>
                  <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-100/70 text-slate-700">
                    <span className="font-bold text-rose-600 text-xs block mb-1">💡 感情をコントロールする力を高める方法</span>
                    <strong>「6秒猶予と主語の転換法」</strong><br />
                    怒りや不安が起きた瞬間、心の中で6秒数え脳を落ち着かせます。伝えるときは、「あなたはどうして〇〇しないの？」ではなく、「（私は）〇〇してもらえると嬉しいな」という自分を主語（Iメッセージ）にした発言に変換します。
                  </div>
                </div>
              </div>
            </div>

            {/* 3力 */}
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-rose-500 text-white font-bold rounded-xl flex items-center justify-center font-serif">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base md:text-lg">他者へ共感する力</h4>
                    <p className="text-xs text-slate-400 font-mono">Empathy</p>
                  </div>
                </div>
                <div className="space-y-4 text-sm md:text-base leading-relaxed">
                  <p className="text-slate-600 bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-xs md:text-sm">
                    <span className="font-bold text-slate-900 block mb-1">【専門的な解説】</span>
                    相手の言葉の裏にある「感情」や「状況」を、自分の価値観にとらわれずに受け入れ、共感する力です。
                  </p>
                  <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-100/70 text-slate-700 space-y-2">
                    <span className="font-bold text-rose-600 text-xs block mb-1">💡 共感する力を高める方法（反復傾聴）</span>
                    <p>・悩みを聞いた際、すぐに「こうすればいいのに」と解決策（アドバイス）を提示するのを我慢します。</p>
                    <p>・まずは「それは大変だったね」「悔しかったよね」と相手の言葉を反復し感情を受け止めます。相手は深い安心感を抱くようになります。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4力 */}
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-rose-500 text-white font-bold rounded-xl flex items-center justify-center font-serif">4</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base md:text-lg">対人関係性の調整力</h4>
                    <p className="text-xs text-slate-400 font-mono">Interpersonal Skills</p>
                  </div>
                </div>
                <div className="space-y-4 text-sm md:text-base leading-relaxed">
                  <p className="text-slate-600 bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-xs md:text-sm">
                    <span className="font-bold text-slate-900 block mb-1">【専門的な解説】</span>
                    お互いの違いを認め合い、衝突が起きたときでも、勝ち負けではなく「二人にとっての最適な解決策」を得るために対話する力です。
                  </p>
                  <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-100/70 text-slate-700 text-xs md:text-sm space-y-1">
                    <span className="font-bold text-rose-600 text-xs block mb-1">💡 関係の調整力を高めるトレーニング</span>
                    <strong>「アサーティブな対話の習慣」</strong><br />
                    「相手のことも自分のことも大切にする」誠実で対等な対話術。感情的に攻撃したり我慢したりせず、共通のゴールを目指して話し合う習慣から始まります。異なる価値観を持つ二人が長く暮らす上で最も重要です。
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 男女で異なるEQの得意分野 */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">男女で異なる「EQの得意分野」と傾向</h3>
          <p className="text-slate-500 text-sm mt-2 max-w-2xl mx-auto">
            EQのトータルの高さ（スコア）に男女差はほとんどありません。しかし、本質的に「どの感情スキルに長けているか」の傾向に違いが見られます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 女性 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-rose-100">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">👩‍⚕️</span>
              <h4 className="font-bold text-lg text-slate-900">女性が得意とするEQ（他者志向）</h4>
            </div>
            <p className="text-slate-500 text-xs mb-4">女性は「自分以外の誰か」との関係性を円滑にするスキルが高い傾向にあります。</p>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="bg-rose-50/30 p-3 rounded-lg"><strong className="text-rose-600 block mb-0.5">高い共感力（Empathy）</strong> 相手の表情や声のトーンから、言葉にできない感情を察知する能力。</li>
              <li className="bg-rose-50/30 p-3 rounded-lg"><strong className="text-rose-600 block mb-0.5">対人関係力（Interpersonal Skills）</strong> 周囲と調和を図り、良好なチームワークやコミュニティを築く能力。</li>
              <li className="bg-rose-50/30 p-3 rounded-lg"><strong className="text-rose-600 block mb-0.5">自己の感情認識（Emotional Self-Awareness）</strong> 自分が今どんな感情を抱いているかを正確に捉え、言語化する能力。</li>
            </ul>
          </div>

          {/* 男性 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">👨</span>
              <h4 className="font-bold text-lg text-slate-900">男性が得意としやすいEQ（自己・課題志向）</h4>
            </div>
            <p className="text-slate-500 text-xs mb-4">男性は「自分自身の感情のコントロール」や「プレッシャーへの耐性」が高い傾向にあります。</p>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="bg-slate-50 p-3 rounded-lg"><strong className="text-slate-900 block mb-0.5">感情の自己調整（Self-Regulation）</strong> 湧き上がったネガティブな感情に流されず、素早く理性に切り替える能力。</li>
              <li className="bg-slate-50 p-3 rounded-lg"><strong className="text-slate-900 block mb-0.5">ストレス耐性（Stress Tolerance）</strong> トラブルやプレッシャーに直面しても、冷静さを保って対応する能力。</li>
              <li className="bg-slate-50 p-3 rounded-lg"><strong className="text-slate-900 block mb-0.5">自己肯定感・主張力（Assertiveness）</strong> 自分の意見を自信を持って周囲にアピールする能力。</li>
            </ul>
          </div>
        </div>

        {/* 問いと答えのセクション */}
        <div className="mt-8 bg-slate-900 text-slate-200 p-6 md:p-8 rounded-2xl space-y-4">
          <div className="flex items-start gap-3">
            <span className="bg-amber-400 text-slate-950 font-bold text-xs px-2 py-0.5 rounded uppercase mt-1">Q</span>
            <p className="font-bold text-white text-sm md:text-base">なぜこの違い【傾向】が生まれるのか？</p>
          </div>
          <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
            <span className="bg-rose-500 text-white font-bold text-xs px-2 py-0.5 rounded uppercase mt-1">A</span>
            <div className="text-sm space-y-4 text-slate-300 leading-relaxed">
              <p>
                <strong>1. 社会的・文化的な刷り込み（環境要因）</strong><br />
                幼少期からの育てられ方や、ジェンダーロールが影響しています。女性は「周囲に配慮し、感情を共有すること」、男性は「弱音を吐かず冷静でいること」を評価されやすいため、それぞれの能力が筋トレのように鍛えられます。
              </p>
              <p>
                <strong>2. 脳の処理パターンの違い（生物学的要因）</strong><br />
                不快な感情に直面したとき、女性の脳はその感情をじっくり咀嚼（共有・言語化）しようとし、男性の脳は感情の察知を短時間で終わらせ、すぐに「問題解決モード」に切り替える傾向が脳科学的にも指摘されています。
              </p>
            </div>
          </div>
        </div>

        {/* 女医からの一言 (Flex block) */}
        <div className="bg-rose-50 border-2 border-dashed border-rose-200 rounded-2xl p-6 md:p-8 relative mt-12 shadow-sm">
          <div className="absolute -top-4 left-6 bg-rose-500 text-white font-bold text-xs px-4 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <span>女医からの一言</span>
            <Heart className="w-3 h-3 fill-white" />
          </div>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed pt-2">
            現代では固定概念や役割の差は少なくなってきています。今後EQの高さも、変化や生物学的な本来の特徴をミックスした形に変化していきますので、性別という固定概念だけではなく<strong>個人それぞれに柔軟に捉えたほうがいい</strong>と考えています。
          </p>
        </div>
      </section>

      {/* パートナーシップにおけるEQの価値 */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-12 h-12 bg-rose-500/10 text-rose-400 rounded-full flex items-center justify-center mx-auto border border-rose-500/20">
            <Activity className="w-6 h-6" />
          </div>
          <h3 className="text-xl md:text-3xl font-serif text-amber-200">
            【結婚・パートナーシップにおけるEQの価値】
          </h3>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            行動科学の大規模な追跡調査では、<strong className="text-white">「離婚するカップルの多くは、経済力（スペック）の問題ではなく、お互いのEQ（感情の自己管理、共感、衝突解決能力）の低さが原因である」</strong>ことが実証されています。
          </p>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            結婚生活という長期的な共同運営において、お互いの違いを認め合い、ストレスを乗り越えるための<strong>「究極の生存戦略」</strong>こそがEQなのです。
          </p>

          <div className="pt-4 text-xs md:text-sm text-rose-300 italic">
            「ご自身の性格や傾向をEQの視点から見ると、自己の客観視に役立ちますよ。婚活のさまざまな壁にもぜひ一緒に利用していきましょう！ 🩷」
          </div>
        </div>
      </section>

      {/* インタラクティブEQセルフチェック */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <div className="bg-white border-2 border-rose-100 rounded-3xl p-6 md:p-10 shadow-xl shadow-rose-900/5">
          <div className="text-center mb-6">
            <span className="bg-rose-100 text-rose-700 font-bold text-xs px-3 py-1 rounded-full inline-flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> セルフ診断
            </span>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mt-2">あなたのEQの高さを簡単にチェック✅</h3>
            <p className="text-xs text-slate-500 mt-2">
              日常の婚活シーンを切り取った3問の選択式クイズにチャレンジしますか？結果はその場で表示されます。
            </p>
          </div>

          {currentQuestion === null && !quizFinished ? (
            <div className="text-center py-6">
              <button
                onClick={() => setCurrentQuestion(0)}
                className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white font-bold px-8 py-4 rounded-xl shadow-md transition"
              >
                診断をスタートする
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : !quizFinished && currentQuestion !== null ? (
            <div className="space-y-6">
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>質問 {currentQuestion + 1} / {quizQuestions.length}</span>
                <span>進行度 {Math.round(((currentQuestion) / quizQuestions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-rose-500 h-1.5 transition-all duration-300" style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}></div>
              </div>
              <h4 className="font-bold text-slate-900 text-base md:text-lg bg-slate-50 p-4 rounded-xl border border-slate-100">
                {quizQuestions[currentQuestion].q}
              </h4>
              <div className="space-y-3">
                {quizQuestions[currentQuestion].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(opt.score)}
                    className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-rose-400 hover:bg-rose-50/20 text-sm font-medium transition text-slate-700"
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6 py-4">
              <div className="text-4xl">🎉</div>
              <h4 className="font-bold text-slate-900 text-lg">診断が完了しました！</h4>
              <div className="bg-rose-50 p-6 rounded-2xl max-w-md mx-auto border border-rose-100">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">あなたのEQ意識スコア</p>
                <p className="text-3xl font-serif font-bold text-rose-600 mt-1">{totalScore} <span className="text-xs text-slate-400">/ {maxScore} 点</span></p>
                <p className="text-xs text-slate-600 mt-4 leading-relaxed text-left bg-white p-3 rounded-xl border border-rose-100/50">
                  {totalScore >= 8 ? "素晴らしい感情知性のベースをお持ちです！さらに強みを伸ばすことで最高に居心地の良いパートナーシップを築けます。" : 
                   totalScore >= 5 ? "平均的なEQをお持ちです。トレーニング次第で、お相手を引き寄せる「愛され力」を飛躍的に高めることができます。" : 
                   "感情が少し先走ってしまう癖があるかもしれません。女医監修のメソッドで、後天的にEQを高めるトレーニングがおすすめです。"}
                </p>
              </div>
              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition"
              >
                <RefreshCw className="w-3 h-3" /> もう一度診断する
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 深掘り：EQの詳しい説明 */}
      <section className="py-16 bg-white px-4 border-t border-slate-100">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center">
            <span className="text-slate-400 font-bold text-xs tracking-widest uppercase block mb-1">DEEP DIVE</span>
            <h3 className="text-2xl font-serif font-bold text-slate-900">【EQについてさらに詳しく知る】</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-1 h-4 bg-rose-500 rounded-full inline-block"></span>
                1. EQ理論の誕生とダニエル・ゴールマンによる普及
              </h4>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                EQ（Emotional Intelligence Quotient）の概念は、1990年にアメリカの心理学者ピーター・サロベイ氏とジョン・メイヤー氏の研究によって誕生しました。「社会的に成功する人物は、例外なく自分の感情をコントロールし、他者の感情を察知する能力に長けている」事実を実証。
              </p>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                この理論を世界に普及させたのが心理学者ダニエル・ゴールマン氏です。1995年の著書『Emotional Intelligence』（邦題：EQ〜こころの知能指数）の中で、人間の成功や幸福を左右するのは従来の「IQ（知能指数）」だけでなく、情動を扱う「EQ」であると定着させました。
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-1 h-4 bg-rose-500 rounded-full inline-block"></span>
                2. 脳科学から見る「IQ」と「EQ」の決定的な違い
              </h4>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                主に「前頭葉（理性）」が司るIQは成人後は数値がほぼ一定ですが、EQは感情を司る「大脳辺縁系（扁桃体）」と「前頭葉」の間の情報の連携のスムーズさを表します。
              </p>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                例えば、デート中にトラブルが起きた際、EQが高い人は「今自分は焦っている」と冷静に認知し、前頭葉で「ここで不機嫌になっても解決しない」と判断して大人の対応を選択できます。最大の特長は、<strong>「IQは一定だが、EQは正しいトレーニングで後天的に高められるスキルである」</strong>という点にあります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 15個の基本パラメーター */}
      <section className="py-16 bg-slate-50 px-4 border-t border-b border-slate-200/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-serif font-bold text-slate-900">【EQの15個の基本パラメーター】</h3>
            <p className="text-slate-500 text-xs md:text-sm mt-2 max-w-2xl mx-auto">
              心理医学の世界的権威であるルーヴェン・バーオン氏は、EQを15の詳細な要素に分類しました。これらは結婚生活を円満に維持するための「人間力のカルテ」となります。
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* 1. 自己領域 */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900 text-sm border-b border-rose-100 pb-2 mb-3 text-rose-600">
                ① 自己領域（インサイド）
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li><strong>1. 自己認識:</strong> 自分の感情の動きや原因をリアルタイムで正確に捉える力。</li>
                <li><strong>2. 自己肯定力:</strong> 強みも弱みも認め尊重する力。拒絶を恐れません。</li>
                <li><strong>3. 自己表現力:</strong> 本音を感情的にならずアサーティブに伝える能力。</li>
                <li><strong>4. 独立性:</strong> 他者に過度に依存せず自らの意思で主体的に決断する力。</li>
                <li><strong>5. 自己実現力:</strong> 人生に目的を持ち情熱的に生きる力。互いに自立します。</li>
              </ul>
            </div>

            {/* 2. 他者領域 */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900 text-sm border-b border-rose-100 pb-2 mb-3 text-rose-600">
                ② 他者領域（パートナー）
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li><strong>6. 共感力:</strong> お相手の立場に立ち、言葉の裏の「感情」を想像し寄り添う力。</li>
                <li><strong>7. 对人関係力:</strong> 心地よい距離感を保ちながら、親密な関係を維持するスキル。</li>
                <li><strong>8. 社会的責任:</strong> 家庭という最小の社会のために、協調性を持って貢献しようとする姿勢。</li>
              </ul>
            </div>

            {/* 3. 状況適応 */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900 text-sm border-b border-rose-100 pb-2 mb-3 text-rose-600">
                ③ 状況適応・ストレス管理
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li><strong>9. 現実検証力:</strong> 思い込みを排除し、目の前の事実を客観的・論理的に見極める力。</li>
                <li><strong>10. 柔軟性:</strong> マイルールに固執せず価値観に応じて変化できる力。</li>
                <li><strong>11. 問題解決力:</strong> 衝突時、勝ち負けではなく「2人の最適解」を導き出す力。</li>
                <li><strong>12. ストレス耐性:</strong> プレッシャーに直面してもパニックにならず冷静に対処する回復力。</li>
                <li><strong>13. 衝動コントロール:</strong> 湧き上がった怒りに対し極端な行動を抑える自制心。</li>
              </ul>
            </div>

            {/* 4. 全体的な気分 */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900 text-sm border-b border-rose-100 pb-2 mb-3 text-rose-600">
                ④ 全体的な気分領域
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li><strong>14. 楽観性:</strong> 困難な状況にあっても、状況は好転すると信じ未来に目を向け続ける力。</li>
                <li><strong>15. 幸福感:</strong> 日常の小さな出来事に満足と感謝を見出し、自分自身が今満たされていると感じる力。</li>
              </ul>
            </div>

          </div>

          {/* 女医のユニークなコメント */}
          <div className="mt-8 bg-rose-50 border border-rose-100 rounded-2xl p-6 text-slate-700 text-xs md:text-sm leading-relaxed">
            <span className="font-bold text-rose-600 block mb-1">👩‍⚕️ 女医からのコメント：</span>
            EQは高いにこしたことは無いと思いますが、完璧な人はこの世にはおらず、あるパラメーターだけに特化して高い方がうまくいく仕事もあるでしょうし、あるパラメーターが高くなるとあるパラメーターは低くなるという従属の関係にもなっています。
            つまり、自分のフィールドで、必要な時に、必要とされるパラメーターを少し高めていけばいいのだと考えています。
            そして、逆に、<strong>弱みや苦手分野があることも個性であり魅力の一つ</strong>だと考えています。男女ともに「できない人ほどほっとけなくて可愛い🩷」という点も決して否めないですから(笑)
          </div>
        </div>
      </section>

      {/* まとめ・入会アピール */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 md:p-12 text-slate-100 shadow-xl space-y-6">
          <span className="text-amber-400 font-bold text-xs tracking-widest block uppercase">MESSAGE</span>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-amber-100">
            大阪梅田ドクターズ結婚相談所からの一言🩷💙<br />
            <span className="text-white text-lg md:text-xl block mt-2">女医とカウンセラーが提供する「一生モノのEQトレーニング」</span>
          </h3>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-3xl mx-auto text-left md:text-center">
            当相談所では、この15のパラメーターを用いてあなたの心の傾向を判断。脳科学や心理医学の知見に基づき、あなたが無意識に陥りやすい「思考の癖」を女医の視点で分析し、実際のデートやお見合いの具体的なシーンを通じて、どう表現すればお相手の心に響くかをベテランカウンセラーがマンツーマンで実践指導します。
          </p>
          <p className="text-sm md:text-base text-slate-200 font-medium">
            あなたの「人間力（EQ）」そのものを磨く機会を得て、生涯続く最高のパートナーシップを手に入れませんか。<br />
            当社のマインドに共感していただける方の入会をお待ちしています。
          </p>
          
          <div className="pt-4">
            <a href="#contact" className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition">
              <MessageSquare className="w-4 h-4" />
              まずは無料カウンセリングを予約する
            </a>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-slate-950 text-slate-600 text-xs py-8 text-center border-t border-slate-900">
        <p>© 大阪梅田ドクターズ結婚相談所 All Rights Reserved.</p>
      </footer>

    </div>
  );
}