"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Phone, CheckCircle, Users, Award, ShieldCheck } from 'lucide-react';

export default function ParentsLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-amber-50/30 text-slate-800 font-sans antialiased selection:bg-amber-200">
      
      {/* ヒーローセクション */}
      <header className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,163,89,0.15),transparent_60%)]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-amber-400 font-bold tracking-widest text-sm md:text-base uppercase mb-4">【親御様へ】</p>
          <h1 className="text-3xl md:text-5xl font-serif font-semibold leading-tight tracking-wide mb-6 text-amber-100">
            大切なご子息、ご令嬢の<br className="md:hidden" />結婚を願うあなたへ
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            仕事にプライベートに忙しく過ごすお子様の未来を、誰よりも優しく、そして真剣に案じられているのは親御様ご自身ではないでしょうか。
          </p>
        </div>
      </header>

      {/* 親御様の悩み・共感セクション */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl shadow-slate-100 border border-amber-100/50 space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-amber-50/50 p-5 rounded-xl border border-amber-100">
              <p className="text-sm font-medium text-slate-600 leading-relaxed">「仕事は順調そうなのに、浮いた話がまったく聞こえてこない」</p>
            </div>
            <div className="bg-amber-50/50 p-5 rounded-xl border border-amber-100">
              <p className="text-sm font-medium text-slate-600 leading-relaxed">「今の時代、マッチングアプリのような出会いは親として少し心配…」</p>
            </div>
            <div className="bg-amber-50/50 p-5 rounded-xl border border-amber-100">
              <p className="text-sm font-medium text-slate-600 leading-relaxed">「親が結婚を急かすと嫌がられるけれど、本当に大丈夫かしら」</p>
            </div>
          </div>

          <div className="pt-6 space-y-6 text-slate-700 leading-relaxed">
            <p className="font-semibold text-lg text-slate-900 text-center">
              「心から尊敬し合える、素晴らしい方と巡り合ってほしい」
            </p>
            <p>
              それは、結婚という選択やパートナーとの関係性が、大切に育てたお子様のこれからの人生や将来にどれほど大きな影響を与えるかを、人生の経験から深く知っていらっしゃるからこその願いです。
            </p>
            <p>
              だからこそ、身元が確かで育ちが良く、上品さと清楚さ、そして豊かな愛情を兼ね備えた方と結ばれてほしい。社会的なお立場や職業も確かな、信頼できる方と手を取り合ってほしい。そして、健やかで愛おしい次世代（お孫様）に恵まれるような、輝かしい未来を築いてほしいと望まれるのは、親として当然の深い愛情です。
            </p>
            <p className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-700">
              しかし、お年頃を迎えたお子様は、時に結婚に対して焦りがなく、後ろ向きであることも珍しくありません。親御様が直接お伝えになるのが難しい今だからこそ、私ども結婚相談所にその大切な想いをお託しください。
            </p>
          </div>
        </div>
      </section>

      {/* 強み・差別化セクション */}
      <section className="py-16 bg-slate-900 text-slate-100 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-400 font-bold text-sm tracking-widest block mb-2">WHY US</span>
            <h2 className="text-2xl md:text-4xl font-serif font-medium text-amber-100">なぜ、私どもなら「違う」のか？</h2>
            <div className="mt-6 max-w-3xl mx-auto p-4 bg-slate-800/60 rounded-xl border border-slate-700">
              <p className="text-sm md:text-base leading-relaxed text-slate-300">
                世の中に結婚相談所は数多くありますが、<span className="text-amber-400 font-semibold">【現役女医の客観的アプローチ】</span>と<span className="text-amber-400 font-semibold">【男性ベテランカウンセラーの確かな経験】</span>が融合した相談所は、唯一無二でございます。親御様の「こういう人と歩んでほしい」という本気の願いを、私たちは以下の3つの確かな力で叶えます。
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* 特徴 1 */}
            <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-medium text-amber-200 mb-4">① 『上質な出会い』</h3>
                <p className="text-amber-400 text-xs font-semibold mb-3">確かな常識と品格を持つ男女が集う環境</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  大阪梅田ドクターズ結婚相談所を選んでくださる会員様は、身元が確かなだけでなく、精神的・経済的にも自立した、素晴らしいお人柄の方ばかりです。社会的な信頼性はもちろん、立ち居振る舞いや言葉遣いに宿る「本物の品性と育ちの良さ、知性」を見極め、丁寧につなぎます。
                </p>
              </div>
            </div>

            {/* 特徴 2 */}
            <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-medium text-amber-200 mb-4">② 客観性と的確な判断力</h3>
                <p className="text-amber-400 text-xs font-semibold mb-3">感情論ではなく、高い分析力に基づいた導き</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  女医としての冷静な分析力と、数々の人生の決断に立ち会ってきた男性カウンセラーが的確な判断材料を提示します。完全少人数制を敷いており、お見合いからプロポーズまで、まるで我が子を送り出すかのような細やかなサポートで、成婚まで迷わせずにお導きいたします。
                </p>
              </div>
              <p className="text-xs text-slate-400 mt-4 pt-4 border-t border-slate-700/50">※無理に入会を勧めたり、決断を押し付けるようなことは一切いたしません。</p>
            </div>

            {/* 特徴 3 */}
            <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-medium text-amber-200 mb-4">③ 魔法のカウンセリング</h3>
                <p className="text-amber-400 text-xs font-semibold mb-3">【焦りのないお子様へ】心を前向きに開く</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  親御様の想いは最高のギフトですが、届け方ひとつで受け止め方は変わります。お子様のペースを尊重しながら、「結婚とはこんなに素晴らしいものなんだ」と、自然に一歩を踏み出したくなるよう、プロの技術で優しく背中を押してまいります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 市場の現実・データセクション */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-amber-50/60 rounded-2xl p-8 md:p-12 border border-amber-200/60">
          <h3 className="text-xl md:text-2xl font-serif font-semibold text-slate-900 text-center mb-6">
            【未来の選択肢を広げる】<br className="md:hidden" />「少しでも早いスタート」がもたらす決定的な違い
          </h3>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-8 text-center max-w-2xl mx-auto">
            「まだ若いから」「仕事が忙しいから」と、お子様ご自身に焦りがない場合、親御様がどれほど未来を心配されても、その危機感は伝わりにくいものです。私どもは、客観的な事実をもって丁寧にお伝えいたします。
          </p>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-amber-100">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 text-base md:text-lg mb-4">
              <span className="w-2 h-6 bg-amber-500 rounded-sm inline-block"></span>
              ベテランカウンセラーが伝える「市場の現実」
            </h4>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed space-y-4">
              婚活市場において<strong>「若さ」と「時間」は、最大の資産</strong>でございます。少しでも早くスタートを切ることで、出会えるお相手の数や質、選択肢の幅は数倍に広がります。理想の「身元が確かで上品な方」とのご縁を確実にするためにも、時間は一刻も無駄にはできません。ぜひ大阪梅田ドクターズ結婚相談所にご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* 3つのステップ */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-slate-900">
              【親御様から始まる】未来への3つのステップ
            </h2>
            <p className="text-slate-500 text-sm mt-3">
              「子どもに内緒で相談してもいいかしら？」というご不安も、どうぞそのまま私どもにお預けください。
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:w-0.5 before:bg-slate-200">
            
            {/* STEP 1 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center border-4 border-white shadow-md z-10">
                1
              </div>
              <div className="ml-16 md:ml-0 md:w-[45%] bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 text-base mb-2">まずは親御様のみでの「ファースト相談」</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  まずは親御様だけで結構でございます。LINE無料相談やお電話にて、大切なお子様の現状や、親御様が望まれるお相手のイメージを詳しくお聞かせください。完全な個人情報厳守をお約束いたします。
                </p>
              </div>
              <div className="hidden md:block w-[45%]"></div>
            </div>

            {/* STEP 2 */}
            <div className="relative flex flex-col md:flex-row-reverse md:justify-between items-start md:items-center">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center border-4 border-white shadow-md z-10">
                2
              </div>
              <div className="ml-16 md:ml-0 md:w-[45%] bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 text-base mb-2">お子様への「自然なアプローチ法」をご提案</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  お年頃のお子様がプレッシャーを感じず、前向きに「一度話を聞いてみようかな」と思えるような、プロの知見を活かしたお声がけの方法をアドバイスいたします。
                </p>
              </div>
              <div className="hidden md:block w-[45%]"></div>
            </div>

            {/* STEP 3 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center border-4 border-white shadow-md z-10">
                3
              </div>
              <div className="ml-16 md:ml-0 md:w-[45%] bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 text-base mb-2">お子様を交えた「焦りのないカウンセリング」</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  お気持ちが整いましたら、お子様を交えてお会いします。決して無理強いはいたしません。本人の「これからの幸せ」に優しく寄り添いながら、自然に一歩を踏み出したくなるようサポートします。
                </p>
              </div>
              <div className="hidden md:block w-[45%]"></div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-indigo-950 text-white text-center px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-amber-400 font-semibold tracking-wider text-sm">【親御様向け】まずは無料カウンセリングから</p>
          <h2 className="text-2xl md:text-3xl font-serif text-amber-100">LINE無料相談・対面対応にて承ります</h2>
          <p className="text-slate-400 text-sm">
            完全秘密厳守。大切なお子様の未来の選択肢を、私たちと一緒に広げてみませんか。
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#line-cta" className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition duration-200">
              <MessageCircle className="w-5 h-5" />
              LINEで無料相談する
            </a>
            <a href="#tel-cta" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg transition duration-200">
              <Phone className="w-5 h-5" />
              お電話で問い合わせる
            </a>
          </div>
        </div>
      </section>

      {/* Q&A アコーディオンセクション */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center text-slate-900 mb-8">
          親御様からのよくあるご質問
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "子どもに内緒で、まずは親だけで相談に行ってもよいのでしょうか？",
              a: "はい、喜んでお承りいたします。実際、多くの親御様が最初はお一人でご相談にお越しになります。大切なお子様の現状や、親御様が思い描く理想の未来について、まずはゆっくりとお聞かせください。完全な秘密厳守を徹底しておりますので、どうぞご安心ください。まずはお電話かLINE無料相談でご連絡ください。"
            },
            {
              q: "子どもが結婚に全く興味を持っておらず、相談所に行くのを嫌がりそうなのですが……。",
              a: "どうぞご安心ください。プロの技術でご相談いたします。お年頃のお子様に対して、無理に入会を勧めたり急かしたりすることは一切ございません。まずは親御様へ「お子様が話を聞くだけなら聞こうかなと思う方法」をアドバイスいたします。その後、お会いできた際には、本人のこれからの人生の幸せに寄り添いながら、自然と結婚へ向けて前向きになれるよう、丁寧にお導きいたします。"
            },
            {
              q: "どのような方が会員として登録されているのでしょうか？",
              a: "身元が確かで、社会的地位や品性を兼ね備えた素晴らしい方々ばかりです。男性会員様は、医師や弁護士などの専門職、大手企業や外資系企業勤務、国家公務員、また経営者など、社会の第一線で活躍し、経済的にも安定された方々が数多く在籍されております。単に条件が良いだけでなく、私どもの相談所が大切にしている「立ち居振る舞いの美しさや教養」を兼ね備えた、誠実で育ちの良い方々を厳選しております。"
            },
            {
              q: "娘は何歳くらいから結婚相談所への入会（婚活）を検討すれば良いのでしょうか？",
              a: "一般社会のデータが示す通り、「20代半ば（24歳〜26歳）」からのスタートが最も理想的でございます。世間では「平均初婚年齢は約30歳」と言われるため、お嬢様ご自身も「30歳までに考えればいい」と安心されているかもしれません。しかし、厚生労働省の人口動態調査によると、日本で最も婚姻届が多く出されている年齢は女性26歳・男性27歳であり、結婚のボリュームゾーンは実は20代後半でございます。多くの女性が30歳を迎えてから一斉に婚活を始めますが、その時点ではすでに、身元が確かで上品なハイクラス男性の多くはご結婚されています。20代半ばに始めるからこそ、圧倒的な優位性を保ちながら妥協のないお相手選びを進めることができます。"
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-5 font-bold text-slate-800 flex justify-between items-center bg-slate-50/50 hover:bg-slate-50 transition"
              >
                <span className="pr-4 text-sm md:text-base">Q. {faq.q}</span>
                {openFaq === idx ? <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
              </button>
              {openFaq === idx && (
                <div className="p-5 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100 bg-white">
                  <p className="font-semibold text-slate-900 mb-2">A.</p>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-slate-950 text-slate-500 text-xs py-8 text-center border-t border-slate-900">
        <p>© 大阪梅田ドクターズ結婚相談所 All Rights Reserved.</p>
      </footer>

    </div>
  );
}