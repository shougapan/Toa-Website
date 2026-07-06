"use client"

import React, { useRef } from 'react';

export default function MobileFirstMarriagePage(): React.JSX.Element {
  // Adding explicit HTMLDivElement types for TypeScript compatibility
  const step1Ref = useRef<HTMLDivElement | null>(null);
  const step2Ref = useRef<HTMLDivElement | null>(null);
  const step3Ref = useRef<HTMLDivElement | null>(null);
  const step4Ref = useRef<HTMLDivElement | null>(null);
  const step5Ref = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>): void => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    /* Increased base sizes: text-xs -> text-sm, sm:text-sm -> sm:text-base */
    <div className="w-full max-w-xl mx-auto p-3 bg-white text-gray-900 font-sans leading-relaxed tracking-tight text-sm sm:text-base antialiased">
      
      {/* Main Header */}
      <header className="border-b border-pink-500 pb-2 mb-3">
        {/* Scaled header: text-base -> text-lg, sm:text-lg -> sm:text-xl */}
        <h1 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">
          【成婚まで平均6ヶ月】結婚相談所の入会から成婚退会までの流れと婚活スケジュール
        </h1>
      </header>

      {/* Intro Section */}
      <section className="bg-gray-50 p-2.5 rounded mb-4 space-y-2 border border-gray-100 text-justify">
        <p className="font-semibold text-pink-700">「結婚相談所に入会したら、具体的にどうやって婚活が進むの？」</p>
        <p className="font-semibold text-pink-700">「本当に出会いはある？成婚までに必要な期間や費用はどれくらい？」</p>
        <p>
          婚活アプリやマッチングアプリを卒業して、本格的な婚活を始める際、このような疑問や不安を抱く方は少なくありません。実は、結婚相談所の選び方や入会のタイミングと同じくらい、事前に全体の婚活スケジュールを把握しておくことが、早期成婚への一番の近道です。
        </p>
        <p>
          大阪梅田ドクターズ結婚相談所では、プロの婚活カウンセラー（仲人）があなたに寄り添い、プロフィール作成からお相手探し、お見合い、恋愛・交際期間の過ごし方、 tenderして理想のプロポーズを迎えて「成婚退会」するまでをマンツーマンで徹底サポートいたします。
        </p>
        <p>
          ご入会手続きから成婚にいたるまでの全ステップと大阪梅田ドクターズ結婚相談所の特別なサポートを分かりやすく解説します。
        </p>
        <p>
          人気の20代・30代婚活やアラサー・アラフォー婚活で成果を出すための婚活のコツや、各段階での具体的なサポート内容を知ることで、活動のイメージが明確になり、安心して最初の一歩を踏出せるはずです。あなたの「幸せな結婚」への最短ルートを、一緒に確認していきましょう。
        </p>
      </section>

      <section className="mb-6 space-y-2">
        {/* STEP 1 */}
        <div className="border border-gray-200 p-2 rounded bg-white">
          <div className="flex items-baseline space-x-1 mb-0.5">
            {/* Scaled badge: text-[9px] -> text-[11px] */}
            <span className="bg-pink-600 text-white text-[11px] font-bold px-1 rounded">STEP 1</span>
            <p className="font-bold text-gray-800">プロフィールの作成＆写真撮影</p>
          </div>
          {/* Scaled text: text-[11px] -> text-[13px] */}
          <p className="text-gray-600 text-[13px] leading-snug">あなたの魅力を最大限に引き出すプロフィールを一緒に作成します。提携しているフォトスタジオでのスタジオ撮影もサポートいたしますので、好印象を与える素敵な1枚をご用意できます。</p>
          <div className="mt-2 flex justify-end items-center h-[28px]">
            {/* Scaled button font: text-[10px] -> text-[12px] */}
            <button 
              type="button"
              onClick={() => scrollToSection(step1Ref)}
              className="relative overflow-hidden inline-flex items-center space-x-1 bg-gradient-to-r from-pink-500 to-rose-500 px-3.5 py-0.5 rounded-full text-[12px] font-black text-white shadow-[0_2px_4px_rgba(0,0,0,0.15)] border-b-4 border-pink-700 hover:brightness-105 transition-all duration-100 active:translate-y-0.5 active:border-b-2 transform before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_3s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent"
            >
              <span className="relative z-10">💓 詳しい説明</span>
              {/* Scaled arrow symbol: text-[8px] -> text-[10px] */}
              <span className="relative z-10 text-[10px] opacity-90">▶</span>
            </button>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="border border-gray-200 p-2 rounded bg-white">
          <div className="flex items-baseline space-x-1 mb-0.5">
            {/* Scaled badge: text-[9px] -> text-[11px] */}
            <span className="bg-pink-600 text-white text-[11px] font-bold px-1 rounded">STEP 2</span>
            <p className="font-bold text-gray-800">お相手探し・ご紹介</p>
          </div>
          {/* Scaled text: text-[11px] -> text-[13px] */}
          <p className="text-gray-600 text-[13px] leading-snug">最先端の検索システムを使って、24時間いつでもご希望の条件でお相手をお探しいただけます。また、データだけでは分からない、カウンセラー目線での「あなたにぴったりなお相手」のご紹介も行います</p>
          <div className="mt-2 flex justify-end items-center h-[28px]">
            {/* Scaled button font: text-[10px] -> text-[12px] */}
            <button 
              type="button"
              onClick={() => scrollToSection(step2Ref)}
              className="relative overflow-hidden inline-flex items-center space-x-1 bg-gradient-to-r from-pink-500 to-rose-500 px-3.5 py-0.5 rounded-full text-[12px] font-black text-white shadow-[0_2px_4px_rgba(0,0,0,0.15)] border-b-4 border-pink-700 hover:brightness-105 transition-all duration-100 active:translate-y-0.5 active:border-b-2 transform before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_3s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent"
            >
              <span className="relative z-10">💓 詳しい説明</span>
              {/* Scaled arrow symbol: text-[8px] -> text-[10px] */}
              <span className="relative z-10 text-[10px] opacity-90">▶</span>
            </button>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="border border-gray-200 p-2 rounded bg-white">
          <div className="flex items-baseline space-x-1 mb-0.5">
            {/* Scaled badge: text-[9px] -> text-[11px] */}
            <span className="bg-pink-600 text-white text-[11px] font-bold px-1 rounded">STEP 3</span>
            <p className="font-bold text-gray-800">お見合い</p>
          </div>
          {/* Scaled text: text-[11px] -> text-[13px] */}
          <p className="text-gray-600 text-[13px] leading-snug">お互いに「会ってみたい」となったらお見合いが成立です。場所や日時の調整はすべてカウンセラーが代行します。当日の服装や会話のコツなども事前にアドバイスいたしますのでご安心ください。</p>
          <div className="mt-2 flex justify-end items-center h-[28px]">
            {/* Scaled button font: text-[10px] -> text-[12px] */}
            <button 
              type="button"
              onClick={() => scrollToSection(step3Ref)}
              className="relative overflow-hidden inline-flex items-center space-x-1 bg-gradient-to-r from-pink-500 to-rose-500 px-3.5 py-0.5 rounded-full text-[12px] font-black text-white shadow-[0_2px_4px_rgba(0,0,0,0.15)] border-b-4 border-pink-700 hover:brightness-105 transition-all duration-100 active:translate-y-0.5 active:border-b-2 transform before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_3s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent"
            >
              <span className="relative z-10">💓 詳しい説明</span>
              {/* Scaled arrow symbol: text-[8px] -> text-[10px] */}
              <span className="relative z-10 text-[10px] opacity-90">▶</span>
            </button>
          </div>
        </div>

        {/* STEP 4 */}
        <div className="border border-gray-200 p-2 rounded bg-white">
          <div className="flex items-baseline space-x-1 mb-0.5">
            {/* Scaled badge: text-[9px] -> text-[11px] */}
            <span className="bg-pink-600 text-white text-[11px] font-bold px-1 rounded">STEP 4</span>
            <p className="font-bold text-gray-800">仮交際（お知り合いの期間）</p>
          </div>
          {/* Scaled text: text-[11px] -> text-[13px] */}
          <p className="text-gray-600 text-[13px] leading-snug">お見合い後、お互いに「また会いたい」と思ったら交際スタートです。まずは複数の方とデートを重ねながら、少しずつお互いのことを知っていく期間です。</p>
          <div className="mt-2 flex justify-end items-center h-[28px]">
            {/* Scaled button font: text-[10px] -> text-[12px] */}
            <button 
              type="button"
              onClick={() => scrollToSection(step4Ref)}
              className="relative overflow-hidden inline-flex items-center space-x-1 bg-gradient-to-r from-pink-500 to-rose-500 px-3.5 py-0.5 rounded-full text-[12px] font-black text-white shadow-[0_2px_4px_rgba(0,0,0,0.15)] border-b-4 border-pink-700 hover:brightness-105 transition-all duration-100 active:translate-y-0.5 active:border-b-2 transform before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_3s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent"
            >
              <span className="relative z-10">💓 詳しい説明</span>
              {/* Scaled arrow symbol: text-[8px] -> text-[10px] */}
              <span className="relative z-10 text-[10px] opacity-90">▶</span>
            </button>
          </div>
        </div>

        {/* STEP 5 */}
        <div className="border border-gray-200 p-2 rounded bg-white">
          <div className="flex items-baseline space-x-1 mb-0.5">
            {/* Scaled badge: text-[9px] -> text-[11px] */}
            <span className="bg-pink-600 text-white text-[11px] font-bold px-1 rounded">STEP 5</span>
            <p className="font-bold text-gray-800">真剣交際（恋人の期間）</p>
          </div>
          {/* Scaled text: text-[11px] -> text-[13px] */}
          <p className="text-gray-600 text-[13px] leading-snug">「この人と結婚を見据えてお付き合いしたい」という特定の1名が決まったら、真剣交際へと進みます。他の異性との連絡や紹介はストップし、結婚後の具体的なイメージを擦り合わせていきます。</p>
          <div className="mt-2 flex justify-end items-center h-[28px]">
            {/* Scaled button font: text-[10px] -> text-[12px] */}
            <button 
              type="button"
              onClick={() => scrollToSection(step5Ref)}
              className="relative overflow-hidden inline-flex items-center space-x-1 bg-gradient-to-r from-pink-500 to-rose-500 px-3.5 py-0.5 rounded-full text-[12px] font-black text-white shadow-[0_2px_4px_rgba(0,0,0,0.15)] border-b-4 border-pink-700 hover:brightness-105 transition-all duration-100 active:translate-y-0.5 active:border-b-2 transform before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_3s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent"
            >
              <span className="relative z-10">💓 詳しい説明</span>
              {/* Scaled arrow symbol: text-[8px] -> text-[10px] */}
              <span className="relative z-10 text-[10px] opacity-90">▶</span>
            </button>
          </div>
        </div>

        {/* STEP 6 */}
        <div className="border border-gray-200 p-2 rounded bg-white">
          <div className="flex items-baseline space-x-1 mb-0.5">
            {/* Scaled badge: text-[9px] -> text-[11px] */}
            <span className="bg-pink-600 text-white text-[11px] font-bold px-1 rounded">STEP 6</span>
            <p className="font-bold text-gray-800">プロポーズ・ご成婚</p>
          </div>
          {/* Scaled text: text-[11px] -> text-[13px] */}
          <p className="text-gray-600 text-[13px] leading-snug">お互いの気持ちが固まったら、いよいよプロポーズです。タイミングやシチュエーションのご相談もお任せください。</p>
          <div className="mt-2 flex justify-end items-center h-[28px]">
            {/* Scaled button font: text-[10px] -> text-[12px] */}
            <button 
              type="button"
              onClick={() => scrollToSection(step5Ref)}
              className="relative overflow-hidden inline-flex items-center space-x-1 bg-gradient-to-r from-pink-500 to-rose-500 px-3.5 py-0.5 rounded-full text-[12px] font-black text-white shadow-[0_2px_4px_rgba(0,0,0,0.15)] border-b-4 border-pink-700 hover:brightness-105 transition-all duration-100 active:translate-y-0.5 active:border-b-2 transform before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_3s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent"
            >
              <span className="relative z-10">💓 詳しい説明</span>
              {/* Scaled arrow symbol: text-[8px] -> text-[10px] */}
              <span className="relative z-10 text-[10px] opacity-90">▶</span>
            </button>
          </div>
        </div>
      </section>

      {/* Content Breakdown */}
      <div className="border-t border-gray-300 pt-3 space-y-5">
        
        {/* STEP 1 DETAIL */}
        <div ref={step1Ref} className="scroll-mt-3">
          <div className="p-2.5 border border-pink-100 bg-white rounded space-y-2 text-justify">
            {/* Scaled header description: text-xs -> text-sm, sm:text-sm -> sm:text-base */}
            <h3 className="text-sm sm:text-base font-bold text-gray-800 border-b pb-1">
               STEP 1：お見合い成立率が劇的に変わる「プロフィールの戦略的作成」と「奇跡の1枚を引き出す写真プロデュース」
            </h3>
            <p>
              結婚相談所の婚活において、お見合い写真とプロフィールは「あなたと出会うための最初の大切な扉（第一印象）」です。お相手が「ぜひお見合いしてみたい！」と感じ、次のステップ（マッチング）へ進むことができます。魅力を引き出すプロフィール生まれ変わる自分にワクワク！「雰囲気美人」「雰囲気イケメン」になるためのプロサポート
            </p>
            <div className="pt-1">
              <p className="font-bold text-gray-800">【大阪梅田ドクターズ結婚相談所の特別プロフィール作成】</p>
              <p>婚活の第一関門である「プロフィール」。</p>
              <p>大阪梅田ドクターズ結婚相談所では、機械的なデータ入力やありきたりなテンプレートは一切使いません。あなた自身の気付いていない魅力や、お相手に「会ってみたい」と思わせる動機を戦略的に言語化し、最高のお見合い成立率を叩き出す「特別なプロフィール」を完全オーダーメイドで書き上げます。</p>
            </div>
            <div className="pt-1">
              <p className="font-bold text-gray-800">理想の未来を引き寄せる「ターゲット逆算型」プロフィール作成</p>
              <p>当相談所が最も大切にしているのは、単にお見合いの数を増やすことではありません。あなたが「どんな人と出会い、どんな家庭を築きたいか」という未来のビジョンから逆算し、そのターゲットの心にピンポイントで刺さるプロフィールを設計します。共働き・自立した家庭を築きたい方、温かい笑顔があふれる、家庭第一の生活を送りたい方、経済的に安定し、洗練された暮らしを求めたい方など、理想の家庭像を考慮してあなたにマッチングする異性を一緒に相談しながら作成します。</p>
            </div>
            <p>
              テンプレートに当てはめるだけの自己紹介文では、無難な人しか集まりません。あなたの理想のパートナーに出会えための、戦略的なアプローチを行います。「文章を書くのが苦手」「自分の強みが分からない」という方はカウンセラーによる「自己紹介文」のオーダーメイド作成もおまかせ下さい。大阪梅田ドクターズ結婚相談所では、じっくり行うインタビュー（ヒアリング）を基に、プロの婚活カウンセラー（仲人）が素敵な自己紹介文を完成させます。
            </p>
            <div className="pt-1">
              <p className="font-bold text-gray-800">理想の異性に響く「キーワード戦略」</p>
              <p>例えば「料理が好き」ではなく「最近はハーブを育てて料理に使うのにハマっています」など、会話のきっかけになりやすいワードを散りばめます。これにより、お見合い当日の会話も弾みやすくなります。</p>
            </div>
            <div className="pt-1">
              <p className="font-bold text-gray-800">最強の追い風になる「担当カウンセラーからの紹介文</p>
              <p>実は、会員様ご本人の文章と同じくらい読まれるのが、私たちカウンセラーが書く担当者紹介文（PR）です。お人柄、誠実さ、素敵な外見など、ご自身では書けない客観的な魅力をプロの視点から熱量を持ってアピールします。マッチングアプリ卒業を考えている方や、他社で「いいねが来ない」「マッチングしない」と悩んでいた方も、当相談所のプロデュースによって「お見合い成立率が劇的にアップした！」と、多くの嬉しいお声をいただいています。</p>
            </div>
            <div className="pt-1 border-t border-gray-100">
              <p className="font-bold text-gray-800">【大阪梅田ドクターズ結婚相談所の特別プロデュースの内容】</p>
              <p>街で二度見したくなる雰囲気美人やクールでリッチな印象のビジネスマンを見かけますよね。婚活でもお見合い成立率が圧倒的に高い会員様に共通しているのは、自分の魅力を知り尽くした「雰囲気美人」であり「雰囲気イケメン」であるということです。雰囲気美人、雰囲気イケメンにはどうしたら慣れると思いますか？あなたも少しの工夫で彼らのような素敵な雰囲気になれます♡</p>
            </div>
            <div className="bg-pink-50/50 p-2 rounded space-y-1">
              <p className="font-bold text-pink-700">〜髪型〜異性の視線を釘付けにする「髪型とヘアケア」の法則</p>
              <p>第一印象の約8割は「髪型」で決まると言われています 。お顔の造形を変えることはできなくても、髪型と艶（ツヤ）を変えるだけで、誰でも一瞬で垢抜けることが可能です。【女性編】憧れの「人魚姫のようなロングヘア」「健康的なキュートなセミロング」は誰もが好印象を持ちます。柔らかい毛、垢抜けたミルクティーブラウン、ミルクティーグレージュのヘアカラー。短くてもサラサラと動く髪。上品な艶（ツヤ）がポイントです。婚活髪型の王道で思わず触れたくなるような髪は異性の視線を一瞬で釘付けにします。顔まわりを明るくハーフアップにアレンジしたり、顔の形に合わせた小顔カットで「上品なお姉さん・透明感のある可愛い女性」の雰囲気をプロデュースします [提携サロンのご紹介が可能です】【男性編】ワックスで作る「美しい毛流れ」の爽やか短髪スタイルメンズ婚活で最も重要なのは、耳まわりと襟足（えりあし）のすっきりとした清潔感です 。お見合い前には美容室でメンズカットと眉毛スタイリング（眉カット）を行います。ワックスを使って綺麗に毛流れを整え、トップに自然なボリュームを出し、サイドをスマートに抑えて綺麗な毛流れを作るだけで、爽やかで誠実な大人の男の魅力が完成します。ボサボサの寝癖や、何もつけていないペタッとした髪では清潔感は出せません。プロ直伝のスタイリングで、誰でも簡単に「雰囲気イケメン」へと生まれ変われます。</p>
            </div>
            {/* Scaled footer status description: text-[11px] -> text-[13px] */}
            <p className="font-bold text-center text-pink-600 pt-1 text-[13px]">一緒に素敵なプロフィールを作成しましょう。</p>
          </div>
        </div>

        {/* STEP 2 DETAIL */}
        <div ref={step2Ref} className="scroll-mt-3">
          <div className="p-2.5 border border-gray-200 bg-white rounded space-y-2 text-justify">
            {/* Scaled header description: text-xs -> text-sm, sm:text-sm -> sm:text-base */}
            <h3 className="text-sm sm:text-base font-bold text-gray-800 border-b pb-1">
              「ただ検索するだけ」の婚活は、もう終わり。あなたの理想をカタチにする、独自の「お相手検索サポート」
            </h3>
            <p className="font-bold text-gray-700">【本文】</p>
            <p>当相談所の最先端検索システムには、数万人以上の真剣な会員様が登録されています。しかし、条件を入れてボタンを押すだけでは、本当に相性の良いパートナーが見つかりません。だからこそ当相談所では、関西の婚活を知り尽くしたベテランのカウンセラーが、あなたの「検索の精度」を劇的に高める伴走サポートを行います。</p>
            <p><strong>【理想にぴったりの人が見つかる「検索条件」を設定】</strong> 年齢や年収といった項目だけでなく、あなたの性格やライフスタイルをヒアリングし、ベストな検索条件を一緒に設定します。「条件を少し広げるだけで、魅力的な人が一気に見つかるようになった！」と多くの会員様が実感しています。</p>
            <p><strong>【プロの目線による「プロフィールの読み方」を伝授】</strong> お相手のプロフィール文章や写真から、「この人はどんな結婚生活を望んでいるか」「あなたと相性が良いか」をカウンセラーが一緒に分析します。文字面だけでは分からない、お相手の本当の人柄を見抜くコツをお教えします。</p>
            <p><strong>【お見合い成立のためにアプローチ指導】</strong> 「検索して良い人を見つけても、お見合いが成立しない…」そんな悩みを解消します。譲れない条件は何か？妥協できる条件はあるのか？などもご一緒に相談。また、お相手の価値観に合わせた効果的なアプローチ方法も具体的にアドバイスします。</p>
            <p><strong>【フィードバック面談」で軌道修正】</strong> 「検索してもなかなかうまくいかない」という時は、梅田のサロンやオンラインでいつでも作戦会議。検索履歴やマッチング傾向をデータで振り返り、お相手のターゲット層を変更したり、アピールポイントを修正したりして、常に最短ルートでの成婚を目指します。</p>
          </div>
        </div>

        {/* STEP 3 DETAIL */}
        <div ref={step3Ref} className="scroll-mt-3">
          <div className="p-2.5 border border-gray-200 bg-white rounded space-y-2 text-justify">
            {/* Scaled header description: text-xs -> text-sm, sm:text-sm -> sm:text-base */}
            <h3 className="text-sm sm:text-base font-bold text-gray-800 border-b pb-1">
               お見合いでは第一印象が一番大切。
            </h3>
            
            <div className="bg-gray-50 border border-gray-300 p-2 rounded flex flex-col space-y-1.5">
              {/* Scaled informational label: text-[11px] -> text-[13px] */}
              <span className="text-[13px] leading-tight text-gray-700">大阪梅田ドクターズ結婚相談所ではお見合いの基本ルールをサポートします。</span>
              {/* Scaled internal button anchor: text-[10px] -> text-[12px] */}
              <button 
                type="button" 
                onClick={() => window.location.href = '/rules'}
                className="w-full text-center bg-gray-800 text-white font-bold py-1 rounded text-[12px] active:bg-gray-700"
              >
                お見合いルール・規約を見る
              </button>
            </div>

            <p className="text-gray-600">や第一印象を決める外見などをサポートします。</p>

            <div className="pt-1">
              <p className="font-bold text-pink-700">〜服装〜男性の視線を釘付けにする！第一印象で一目惚れされる「勝てる婚活ファッション」の秘密</p>
              <p>お見合いの席や初デートの瞬間、お相手があなたを見た瞬間に「あっ、素敵な人だな」と心がときめくかどうかの第一印象は、身にまとっている服装（コーディネート）で決まります。大阪梅田ドクターズ結婚相談所のファッション アドバイス、買い物同行（ショッピング同行）では、ただ無難な花柄ワンピースやスーツスタイルなどの婚活服を選ぶのではなく、異性の視線を釘付けにし、あなたの魅力を120%引き出す「勝負服」をプロデュースします。</p>
            </div>

            <div className="bg-pink-50/30 p-2 rounded border border-pink-100">
              {/* Scaled inner subsection label: text-[11px] -> text-[13px] */}
              <p className="font-bold text-gray-800 text-[13px] mb-1">❤️【女性編】透明感と上品な色気を放つ「人魚姫ワンピース」と風で揺れるヒラヒラのスカート</p>
              {/* Scaled block content: text-[11px] -> text-[13px] */}
              <p className="text-[13px] text-gray-700">女性の婚活ファッションで圧倒的に強いのは、やはりワンピースやスカートスタイルです。しかし、ただ綺麗めワンピを着ればいいというわけではありません。異性をドキッとさせる「スタイル美人に格上げするシルエット」華やかで明るいパステルカラー、王道の白を選び、骨格診断（骨格ストレート・骨格ウェーブ・骨格ナチュラル）に基づき、ウエスト位置を高く見せ、動くたびにひらりと綺麗に揺れる素材を選ぶことで、女性らしい柔らかさとエレガントさを演出します。シルクやサテンのような上品な光沢やとろみブラウスは、肌を美しく見せ、女性らしい柔らかさを強調し、守りたくなるような雰囲気を与えてくれます。圧倒的ヒロイン感100%の「ふんわりシフォンスカート×上品リブニットも計算された「メリハリシルエット」になれるおすすめです。体のラインを綺麗に見せるコンパクトなリブニットに風が吹くたびに柔らかく揺れるシフォン素材のスカートが華やか。守ってあげたいと思わせます。適度なデコルテの肌見せ、華奢で上品なの細いネックレス、手首を細く見せる上質なブレスレット。身体のラインを綺麗に見せる半袖ニットなど、男性を釘付けにする要素を欲張りに詰め込み上品かつ綺麗な雰囲気美女になりましょう。</p>
            </div>

            <div className="pt-2 border-t border-gray-100">
              <p className="font-bold text-gray-800">🩵他の男に圧倒的な差をつける！理想の女性を射止める「上級者向けメンズ婚活スタイル」🩵<br />💙【男性編】</p>
              
              {/* Scaled text wrapper block: text-[11px] -> text-[13px] */}
              <div className="mt-1.5 p-2 bg-gray-50 rounded border border-gray-200 text-[13px] space-y-1">
                <p className="font-bold text-gray-800">1. クール＆リッチを叶える「3つの鉄則」</p>
                <p><strong>素材で語るリッチ感:</strong> 秋冬ならペラペラしたポリエステル混ではなく、ウール、シルク、カシミヤ、リアルレザーなど、光沢と落ち感のある素材を選びます。これだけで「育ちの良さ」と「経済的な余裕」を演出できます。春夏なら、「透けない・ヨレない」上質な夏素材を選びます。おすすめは「サマーウール」や、シルクが混ざった「シルケット加工コットン」。光沢があり、シワになりにくく高級感をキープできます。「シルケット加工」「マーセライズド加工」は高級セレクトショップはもちろん、最近ではファストファッションでも「マーセライズコットン」という名前で格安で展開されているほど、実は身近で評価の高い素材です。表面の毛羽立ちが綺麗にカットされているため、スーツのインナーにしても違和感がないほど上品な光沢があります。</p>
              </div>
            </div>

            <div className="space-y-1 pt-1">
              <p className="font-bold text-gray-800">王道のジャケットスタイル</p>
              <p>① 「頼りがい」と「経済的な余裕」を本能的に感じるから 女性は男性の服装を見るとき、無意識に「素材の質感」をチェックしています。ペラペラしたポリエステル混ではなく、「サマーウール×シルク混」の上品な艶や、「リネンウール」の立体的なシャリ感は、それだけで「上質なものを知っている大人」の雰囲建立を醸し出します。言葉でアピールしなくても、「この人は仕事ができて、経済的にも精神的にも余裕がありそう」という信頼感に繋がるのです。</p>
            </div>

            {/* Scaled text block wrapper: text-[11px] -> text-[13px] */}
            <div className="bg-gray-50 p-2 rounded border space-y-1.5 text-[13px]">
              <p className="font-bold text-pink-700">春夏ジャケットコーデ</p>
              <p><strong>【サマーウール×シルク混】</strong> ウールにシルクを混ぜた、最高級の薄手生地です。光の当たり方で上品な艶（ツヤ）とドレープ感が生まれ、遠目からでも仕立ての良さが伝わります。</p>
              <p><strong>【強撚（きょうねん）リネンウール】</strong> 糸を強くねじった（強撚）麻とウールの混紡生地。独特の「シャリ感（ドライな肌触り）」で大人のクール</p>
            </div>

            {/* Scaled text block wrapper: text-[11px] -> text-[13px] */}
            <div className="bg-gray-50 p-2 rounded border space-y-1.5 text-[13px]">
              <p className="font-bold text-pink-700">コーデ例</p>
              <p><strong>左（都会派スマートモノトーン）：</strong> 長い脚のラインを美しく見せるチャコールグレーのテーパードスラックス。アイスグレーの軽いジャケットと、内側の艶やかな黒インナーとの高低差で、知的でシャープな印象を最大化しています。</p>
              <p><strong>右（都会派リッチ・アースカラー）：</strong> 首元を上品に見せるモックネックと、大人っぽいビターブラウンのジャケット。脚長効果のある美しいシルエットのネイビー（または白）パンツを合わせ、周囲の男性と圧倒的な差をつけるスタイリッシュな佇まいを表現。</p>
            </div>
          </div>
        </div>

        {/* STEP 4 DETAIL */}
        <div ref={step4Ref} className="scroll-mt-3">
          <div className="p-2.5 border border-gray-200 bg-white rounded space-y-2 text-justify">
            {/* Scaled header description: text-xs -> text-sm, sm:text-sm -> sm:text-base */}
            <h3 className="text-sm sm:text-base font-bold text-gray-800 border-b pb-1">
               成婚率を劇的に変える「仮交際」の並走サポート
            </h3>
            {/* Scaled secondary text heading: text-[11px] -> text-[13px] */}
            <p className="font-semibold text-center text-gray-700 bg-gray-50 p-1 rounded border text-[13px]">
              大阪・梅田で勝つ婚活｜仮交際から真剣交際へ繋ぐ「女医×ベテラン」のリアルタイムサポート
            </p>
            <p>
              結婚相談所の婚活で、最も明暗を分けるのが「仮交際」の期間です。「友達以上、恋人未満」のこの時期は、複数のお相手とデートができる半面、「誰を選べばいいの？」「デートの頻度は？」「相手はどう思っている？」など、一番悩みや迷いが生じやすい期間でもあります。大阪梅田ドクターズ結婚相談所では、LINEや電話にて、お悩みにリアルタイムで並走します。
            </p>
            
            <div className="border-l-2 border-pink-500 pl-2 py-0.5 space-y-0.5">
              <h4 className="font-bold text-gray-800"> デート直後のモヤモヤを解決するロジカルカウンセリング</h4>
              {/* Scaled text wrapper block: text-[11px] -> text-[13px] */}
              <p className="text-[13px] text-gray-600">デートが終わったら、すぐに「楽しかった点」「違和感を持った点」をデートの振り返りで共有していただきます。カウンセラーが、「なぜその違和感を持ったのか」「どのようにしたらいいか」を一緒に相談していきます。</p>
            </div>

            <div className="border-l-2 border-pink-500 pl-2 py-0.5 space-y-0.5">
              <h4 className="font-bold text-gray-800">###  2. 梅田の最新デートスポットを網羅したプラン＆服装プロデュース</h4>
              {/* Scaled text wrapper block: text-[11px] -> text-[13px] */}
              <p className="text-[13px] text-gray-600">「デートはどこに行けばいい？」「踏み込んだ話をしたい」といった相談に、お店選びから服装、関係の進め方までご相談します。平日デートから、週末デートまで、トレンドを抑えたスマートなプランを提案します。</p>
            </div>

            <div className="border-l-2 border-pink-500 pl-2 py-0.5 space-y-0.5">
              <h4 className="font-bold text-gray-800">###  3. お相手の「本音」を結婚相談所に確認するアプローチ</h4>
              {/* Scaled text wrapper block: text-[11px] -> text-[13px] */}
              <p className="text-[13px] text-gray-600">「自分のことをどう思っているか直接聞きづらい」という場合もご安心ください。業界を熟知したベテランカウンセラーが、重要なタイミングではお相手側の結婚相談所に確認します。「お相手も好印象を持っていますよ」「もう少し今の関係で考えたい」など、相手のリアルな本音をフィードバックしてくれます。告白（真剣交際）にすすむタイミングもわかりやすくなります。またこちら側の好意を伝え、お相手の相談所のカウンセラーからもそれとなくお伝えしていただくことも可能です。</p>
            </div>

            {/* Scaled footer anchor description box: text-[10px] -> text-[12px], sm:text-[11px] -> sm:text-[13px] */}
            <div className="bg-pink-50 p-2 rounded border border-pink-200 text-center font-bold text-[12px] sm:text-[13px] text-pink-800">
              ［大阪梅田のサロンで仮交際のサポート体制について詳しく聞いてみる（無料カウンセリング予約）］ [Find out more about the support available for casual dating at our salon in Umeda, Osaka (book a free consultation)]
            </div>
          </div>
        </div>

        {/* STEP 5 & 6 DETAILS */}
        <div ref={step5Ref} className="scroll-mt-3">
    
          <div className="p-2.5 border border-gray-200 bg-white rounded space-y-2 text-justify">
            {/* Scaled header description: text-xs -> text-sm, sm:text-sm -> sm:text-base */}
            <h3 className="text-sm sm:text-base font-bold text-gray-800 border-b pb-1">
              成婚への最終ステップ「真剣交際」からプロポーズまでのサポート
            </h3>
            <p>
              仮交際を経て、お互いが「結婚を前提とした一対一のお付き合い」を希望すると、いよいよ「真剣交際」へと進みます。成婚退会（婚約）までの平均期間は約1ヶ月。この大切な時期に、当相談所では大阪梅田の提携事務所やLINE・お電話にて、プロポーズ成功を迎えるための「成婚へのサポート」を行います。
            </p>

            {/* Scaled middle section sub-heading: text-xs -> text-sm */}
            <h2 className="text-sm font-bold text-gray-800 bg-gray-50 p-1 border rounded">
              ## 大阪梅田で確実にプロポーズを成功させる｜「女医×ベテラン」の真剣交際・成婚プロデュース
            </h2>
            
            <p>
              真剣交際へ進んだからといって、100%成婚できるわけではありません。実は、「結婚後の具体的な生活イメージのズレ」や「ご家族との関係」などによって、最終段階で交際が終了してしまうケースが婚活業界では少なくありません。大阪梅田ドクターズ結婚相談所では、そんな「成婚直前の不安や迷い」をなくし、お二人がスムーズに結婚へと歩めるよう、バックアップします。
            </p>

            {/* Scaled text wrapper block: text-[11px] -> text-[13px] */}
            <div className="p-2 bg-gray-50 rounded border text-[13px] space-y-0.5">
              <h3 className="font-bold text-gray-800">### 1. 結婚後の課題をのりこえるためアドバイス</h3>
              <p className="text-gray-600">「住む場所」「仕事の継続」「家計の管理」「将来の家族計画」など、切り出しにくいお金や将来のテーマについて、カウンセラーが、ストレスなく本音を話し合える「スマートな対話の進め方やタイミング」をアドバイス。お互いの価値観を認め合いながら、理想の家庭像を形にするためのサポートをします。</p>
            </div>

            {/* Scaled text wrapper block: text-[11px] -> text-[13px] */}
            <div className="p-2 bg-gray-50 rounded border text-[13px] space-y-0.5">
              <h3 className="font-bold text-gray-800">### 2. 「プロポーズのタイミング」</h3>
              <p className="text-gray-600">「本当に今プロポーズして大丈夫？」「指輪やシチュエーションはどうすればいい？」という疑問や不安も、一切一人で悩む必要はありません。さまざまな疑問に適宜ご対応します。</p>
            </div>

            {/* Scaled text wrapper block: text-[11px] -> text-[13px] */}
            <div className="p-2 bg-gray-50 rounded border text-[13px] space-y-0.5">
              <h3 className="font-bold text-gray-800">### 3. 大阪・梅田エリアの「極上プロポーズプラン」をトータル演出</h3>
              <p className="text-gray-600">一生の思い出になるプロポーズを、最高の形でご相談します。一流ホテルのメインダイニングや、夜景の美しいラグジュアリーなレストランの選定、予約のタイミング、当日のエスコート方法までご提案します。</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}