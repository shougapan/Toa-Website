"use client"

import React from 'react';
import { Heart, Sparkles, Trophy, Flame, UserCheck, MessageCircle, ArrowRight } from 'lucide-react';

export default function MensNavyPremiumLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-100 w-full overflow-x-hidden">
      
      {/* ヒーローセクション - スマホで全幅（ミッドナイトネイビー＆アイスブルー） */}
      <header className="relative bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white py-14 px-4 md:px-6 text-center overflow-hidden w-full border-b border-blue-900/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(14,165,233,0.08),transparent_70%)]"></div>
        <div className="max-w-5xl mx-auto relative z-10 w-full space-y-4">
          <p className="text-sky-400 font-bold tracking-widest text-sm md:text-base uppercase">
            ESTABLISHED FOR 30s PROFESSIONALS
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight tracking-wider text-slate-100">
            30代男性の理想の恋人婚を叶える<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-200 to-teal-100">
              大阪梅田ドクターズ結婚相談所
            </span>
          </h1>
          
          <div className="bg-slate-950/80 p-6 rounded-lg border border-slate-800/80 inline-block text-left w-full mt-4 shadow-xl">
            <p className="text-sky-200 font-extrabold text-lg md:text-2xl mb-3 text-center tracking-wide">
              「素直で 可愛い女性」と出会いませんか？
            </p>
            <p className="text-slate-300 text-base leading-relaxed tracking-wide text-center w-full">
              「今日会えて嬉しい！」って服の袖を引っ張ってくれる。<br />
              そんな恋人みたいに可愛くて、素直で、癒やしてくれる女性に出会いませんか？
            </p>
          </div>
        </div>
      </header>

      {/* 導入メッセージ - スマート・モノトーンの中に潜むエモーション */}
      <section className="py-10 w-full">
        <div className="max-w-5xl mx-auto w-full">
          <div className="bg-white md:rounded-xl p-5 md:p-8 shadow-xs border-y md:border border-slate-200/80 space-y-5 w-full">
            <p className="text-base text-slate-800 leading-relaxed tracking-wide w-full px-4 text-center md:text-left">
              毎日仕事を全力で頑張る30代男性の皆様。<br className="hidden md:inline" />
              <span className="text-slate-950 font-bold border-b-2 border-sky-200 pb-0.5">
                【いくつになっても自分のことを大好きでいてくれる、素直で愛おしい女性】
              </span><br className="block my-2" />
              「お互いに仕事を頑張りながらも、二人の時間はいつも甘くて心地いい」<br />
              そんな、素直で優しくて、見ているだけで癒やされる可愛い女性との出会いを、大阪梅田ドクターズ結婚相談所が、プロデュースします！
            </p>
            
            <div className="bg-gradient-to-r from-blue-50/50 via-slate-50 to-blue-50/50 p-4 border-y md:border border-blue-100/30 md:rounded-lg w-full text-center">
              <p className="text-blue-950 font-bold text-base tracking-wider w-full">
                あなたが手に入れる「恋人みたいに可愛い」理想の女性をイメージしてみましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 理想の女性像 - プレミアムネイビー＆スチールブルー（ディープで知的な大人の質感） */}
      <section className="py-10 bg-slate-950 text-slate-100 w-full">
        <div className="max-w-5xl mx-auto w-full space-y-8">
          <div className="text-center px-4 w-full">
            <span className="text-sky-400 font-bold text-sm tracking-widest block mb-1">OUR MEMBERS PORTRAIT</span>
            <h3 className="text-xl md:text-3xl font-serif font-bold text-slate-100 tracking-wider w-full">
              あなたの前だけで、とびきりピュアな素顔を見せる人
            </h3>
            <p className="text-base text-slate-400 mt-2 w-full">
              自立した大人の品格を持ちながら、あなたの頑張りを誰よりもリスペクトしてくれる魅力的な女性です。
            </p>
          </div>

          <div className="grid gap-0.5 md:gap-4 md:grid-cols-3 w-full">
            {/* 特徴 1 */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 border-y md:border border-slate-800/80 flex flex-col justify-between w-full md:rounded-lg shadow-inner">
              <div className="w-full space-y-3">
                <div className="w-8 h-8 rounded-full bg-blue-950 border border-blue-800 flex items-center justify-center text-sky-300 text-sm font-bold">01</div>
                <h4 className="font-bold text-sky-200 text-base tracking-wide w-full">出会った瞬間からときめく「可憐な可愛さ」</h4>
                <p className="text-base text-slate-300 leading-relaxed w-full">
                  お見合いの席で、少しはにかみながら「初めまして！」と見せてくれるとびきりの笑顔。梅田でデート中も、嬉しそうにあなたの服の袖をちょっと引っ張ったり、楽しそうに笑ったり。その一挙手一投足が愛らしくて、男として「ずっと守ってあげたい」と心から思わせてくれる可愛さを持っています。
                </p>
              </div>
            </div>

            {/* 特徴 2 */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 border-y md:border border-slate-800/80 flex flex-col justify-between w-full md:rounded-lg shadow-inner">
              <div className="w-full space-y-3">
                <div className="w-8 h-8 rounded-full bg-blue-950 border border-blue-800 flex items-center justify-center text-sky-300 text-sm font-bold">02</div>
                <h4 className="font-bold text-sky-200 text-base tracking-wide w-full">あなたのことが大好きな「素直さと優しさ」</h4>
                <p className="text-base text-slate-300 leading-relaxed w-full">
                  「今日会えて本当に嬉しい！」「いつも優しくしてくれてありがとう！」と、ポジティブな感情をストレートに言葉にしてくれます。あなたの頑張りを誰よりもリスペクトし、味方でいてくれるその素直さに、男としての自信がどんどん湧いてきます。
                </p>
              </div>
            </div>

            {/* 特徴 3 */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 border-y md:border border-slate-800/80 flex flex-col justify-between w-full md:rounded-lg shadow-inner">
              <div className="w-full space-y-3">
                <div className="w-8 h-8 rounded-full bg-blue-950 border border-blue-800 flex items-center justify-center text-sky-300 text-sm font-bold">03</div>
                <h4 className="font-bold text-sky-200 text-base tracking-wide w-full">仕事の疲れがすべて溶ける「最高の癒やし」</h4>
                <p className="text-base text-slate-300 leading-relaxed w-full">
                  当相談所には、日頃から人を思いやるホスピタリティとEQ（感情知性）の高い女性が多く在籍しています。お互いに忙しい日々の中でも、二人の時間に一歩入れば、あなたの話を「うん、うん」と優しい瞳で聞いてくれ、そっと寄り添ってくれる。その圧倒的な包容力と癒やしの空間が、あなたの毎日のエネルギー源になります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 恋人婚が叶う理由 - ネイビータイムライン（スマホ全幅・はみ出し対策） */}
      <section className="py-10 bg-white w-full">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-8 px-4 w-full">
            <span className="text-slate-500 font-bold text-xs tracking-widest block mb-1">WHY WE ARE CHOSEN</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-950 tracking-wider w-full">
              理想の「恋人婚」が叶う、3つの揺るぎない理由
            </h2>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:w-0.5 before:bg-slate-100 w-full">
            
            {/* 理由 1 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 text-sky-300 font-extrabold flex items-center justify-center border-4 border-white shadow-md z-10 text-base">
                1
              </div>
              <div className="ml-18 w-[calc(100%-4.5rem)] md:ml-0 md:w-[46%] bg-slate-50/50 p-6 border-y border-l md:border border-slate-200/60 md:rounded-xl">
                <h4 className="font-bold text-slate-950 text-base mb-2 tracking-wide w-full flex items-center gap-2">
                  「人を大切にする優しさ」を持った上質な女性が集まる場所
                </h4>
                <p className="text-base text-slate-700 leading-relaxed tracking-wide w-full">
                  最大の強みは、職業的にも精神的にも自立していながら、パートナーを心の底から大切にできる「お人柄の素晴らしい女性」が揃っていることです。外見の可愛らしさはもちろん、内面から溢れる優しさと素真面目さを兼ね備えた、30代男性が本当に求めている女性とのご縁を、私たちが繋ぎます。
                </p>
              </div>
              <div className="hidden md:block w-[46%]"></div>
            </div>

            {/* 理由 2 */}
            <div className="relative flex flex-col md:flex-row-reverse md:justify-between items-start md:items-center w-full">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 text-sky-300 font-extrabold flex items-center justify-center border-4 border-white shadow-md z-10 text-base">
                2
              </div>
              <div className="ml-18 w-[calc(100%-4.5rem)] md:ml-0 md:w-[46%] bg-slate-50/50 p-6 border-y border-l md:border border-slate-200/60 md:rounded-xl">
                <h4 className="font-bold text-slate-950 text-base mb-2 tracking-wide w-full flex items-center gap-2">
                  可愛い彼女から「一番に選ばれる男」へのプロデュース
                </h4>
                <p className="text-base text-slate-700 leading-relaxed tracking-wide w-full">
                  「こんなに素直で可愛い子、自分に振り向いてくれるかな…」という心配があるかもしれませんね。女性の心を掴むスマートなエスコート、清潔感溢れる服装、LINEでの弾むようなコミュニケーション術まで、プロのカウンセラーがあなたの魅力を200%引き出すサポートをします。
                </p>
              </div>
              <div className="hidden md:block w-[46%]"></div>
            </div>

            {/* 理由 3 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 text-sky-300 font-extrabold flex items-center justify-center border-4 border-white shadow-md z-10 text-base">
                3
              </div>
              <div className="ml-18 w-[calc(100%-4.5rem)] md:ml-0 md:w-[46%] bg-slate-50/50 p-6 border-y border-l md:border border-slate-200/60 md:rounded-xl">
                <h4 className="font-bold text-slate-950 text-base mb-2 tracking-wide w-full flex items-center gap-2">
                  忙しい日々に極上のときめきを。スピード成婚主義
                </h4>
                <p className="text-base text-slate-700 leading-relaxed tracking-wide w-full">
                  平日はお互いにバリバリ働きながらも、週末や仕事帰りのデートが待ち遠しくてたまらなくなる。そんな、一番楽しい恋人期間をスマートに過ごし、そのまま温かい結婚生活へとスムーズに移行できるよう、私達がお手伝いします。
                </p>
              </div>
              <div className="hidden md:block w-[46%]"></div>
            </div>

          </div>
        </div>
      </section>

      {/* ベテランカウンセラーメッセージ - 知性と誠実さを兼ね備えたブルーカード */}
      <section className="py-10 bg-slate-50 w-full">
        <div className="max-w-5xl mx-auto w-full">
          <div className="bg-gradient-to-br from-blue-50/40 via-sky-50/20 to-white p-6 md:p-10 border-y md:border border-blue-100/60 w-full md:rounded-2xl space-y-6 shadow-sm">
            <div className="flex items-center gap-3 px-4 md:px-0 w-full border-b border-blue-100/60 pb-4">
              <div className="w-10 h-10 rounded-full bg-slate-950 text-sky-300 flex items-center justify-center shrink-0 shadow">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-bold tracking-widest block">MESSAGE FOR YOU</span>
                <h4 className="font-bold text-slate-950 text-lg md:text-xl tracking-wide w-full">
                  ベテランカウンセラーからのメッセージ
                </h4>
              </div>
            </div>
            
            <h5 className="font-serif font-bold text-blue-950 text-base md:text-lg tracking-wide px-4 md:px-0 w-full">
              妥協のない、最高の幸せをつかみ取りましょう！
            </h5>
            
            <div className="text-base text-slate-700 space-y-4 leading-relaxed px-4 md:px-0 w-full">
              <p className="w-full">
                結婚するからといって、恋を諦める必要はありません。お互いに仕事をリスペクトし、支え合いながらも、お家やデートでは付き合いたての恋人のように甘くて、笑顔が絶えない関係。そんな理想の未来が、あなたを待っています。
              </p>
              <p className="w-full">
                まずは仕事帰りに、あなたが想い描く「一番可愛いお相手」のイメージを、ワクワクしながら私たちに教えてください。
              </p>
              <p className="font-serif font-bold text-slate-950 text-center text-lg pt-4 w-full border-t border-dashed border-blue-100">
                【大阪梅田ドクターズ結婚相談所】で、あなたの人生を最高にハッピーにする、<br className="hidden md:inline" />
                恋人みたいな奥さんを見つけましょう！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LINE CTA セクション - 完全全幅（プレミアムネイビー） */}
      <section className="py-14 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white text-center px-4 w-full border-t border-slate-800">
        <div className="max-w-5xl mx-auto space-y-5 w-full">
          <span className="text-sky-400 font-bold text-xs tracking-widest block uppercase">GET IN TOUCH</span>
          <h2 className="text-xl md:text-3xl font-serif font-bold tracking-wider text-rose-100 w-full">
            まずは仕事帰りに、ワクワクするお話から始めませんか？
          </h2>
          <p className="text-slate-300 text-base leading-relaxed tracking-wide w-full max-w-2xl mx-auto">
            理想のタイプ、譲れないライフスタイル、何でも気軽に教えてください。<br />
            まずは公式LINEから、あなただけの特別なカウンセリングをご案内いたします。
          </p>
          <div className="pt-4 flex justify-center w-full">
            <a href="#line-add" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold px-8 py-4 rounded-lg shadow-lg hover:shadow-emerald-900/30 transition duration-200 tracking-wider text-base w-full sm:w-auto border border-emerald-500/20">
              <MessageCircle className="w-5 h-5" />
              勧誘ゼロ。まずはLINEで相談してみる（無料）
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}