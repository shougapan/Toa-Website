"use client";

import React from 'react';
import Image from "next/image";
import femaleAdvisor from "@/public/femaleAdvisor.jpg";
import maleAdvisor from "@/public/maleAdvisor.jpg";
import Link from 'next/link';
import { 
  Sparkles, 
  ChevronRight, 
  Coins, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  HelpCircle,
  Phone,
  ArrowRight
} from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="bg-[#FAF8F5] text-gray-950 min-h-screen  pb-20">
      
      {/* ============================================================
          PAGETOP HERO SECTION
          ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-12 pb-12 text-center">
        <div className="inline-flex items-center gap-1.5 bg-[#E6A2B3]/10 text-[#D9889D] px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-4">
          <Coins className="w-3.5 h-3.5" />
          <span>Price & Flow</span>
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.3] tracking-tight max-w-5xl mx-auto">
          無店舗型だから実現した高コスパと成婚までの流れ
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] mx-auto mt-6 rounded-full" />
      </div>

      {/* ============================================================
          CONCEPT INTRO TRAY
          ============================================================ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_4px_25px_rgba(230,162,179,0.04)] border border-white/80 space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
          <p>
            大阪の結婚相談所［大阪梅田結婚相談所］の料金システムと活動の流れをご案内します。当相談所は、特定の事務所を構えない出張型結婚相談所・オンライン婚活のスタイルを採用しています。
          </p>
          <p>
            一等地のオフィス家賃や莫大な広告宣伝費を徹底的にカットすることで、初期費用や月会費を抑えたリーズナブルな料金設定と、<span className="font-bold border-b border-[#E6A2B3] text-gray-900">現役医師監修・カウンセラー歴20年のベテラン仲人による最高峰の手厚いサポート</span>（コスパ最強）を両立させています。お金の無駄を一切省き、成婚という「結果」に100%投資できるスマートなプランです。
          </p>
          <p>
            カットした固定費は、20代・30代・40代のビジネスパーソンへの手厚いサポートや、お一人おひとりの成婚プログラムのクオリティ向上へ全額還元しています。特定の店舗を持たないことで、会社の同僚や友人にバレたくないという方の男のプライドや女性のプライバシーも完全秘密厳守で守り抜くことができます。
          </p>
        </div>
      </div>

      {/* ============================================================
          MAIN PRICING CARDS
          ============================================================ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            安心の料金プラン（成果報酬制システム）
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 font-bold">透明性の高いシンプルな料金プランで安心をあなたに</p>
        </div>

        {/* PRICE TABLE WRAPPER */}
        <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(230,162,179,0.06)] border border-white overflow-hidden">
          <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            {/* INITIAL COST */}
            <div className="pt-6 md:pt-0 text-center flex flex-col justify-between min-h-[180px]">
              <div>
                <span className="text-[11px] font-black tracking-wider text-gray-400 uppercase block mb-1">Initial Cost</span>
                <h3 className="font-black text-base text-gray-900">初期費用</h3>
                <p className="text-xs text-gray-500 font-bold mt-0.5">（入会金・登録料）</p>
              </div>
              <div className="my-4">
                <span className="text-3xl sm:text-4xl font-black text-gray-900">20</span>
                <span className="text-sm font-black text-gray-800 ml-1">万円</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed max-w-[240px] mx-auto">
                プロフィール作成や、IBJ等のシステム登録にかかる初期費用です。
              </p>
            </div>

            {/* MONTHLY FEE */}
            <div className="pt-8 md:pt-0 text-center flex flex-col justify-between min-h-[180px]">
              <div>
                <span className="text-[11px] font-black tracking-wider text-[#D9889D] uppercase block mb-1">Monthly Cost</span>
                <h3 className="font-black text-base text-gray-900">月会費</h3>
                <p className="text-xs text-gray-500 font-bold mt-0.5">毎月の活動費</p>
              </div>
              <div className="my-4">
                <span className="text-3xl sm:text-4xl font-black text-[#D9889D]">15,000</span>
                <span className="text-sm font-black text-gray-800 ml-1">円</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed max-w-[240px] mx-auto">
                お見合いの申し込み・申し受けは<span className="font-bold text-gray-900">何度でも無料</span>です。出会いのチャンスを最大限に広げます。
              </p>
            </div>

            {/* SUCCESS FEE */}
            <div className="pt-8 md:pt-0 text-center flex flex-col justify-between min-h-[180px]">
              <div>
                <span className="text-[11px] font-black tracking-wider text-gray-400 uppercase block mb-1">Success Rewards</span>
                <h3 className="font-black text-base text-gray-900">成婚料</h3>
                <p className="text-xs text-gray-500 font-bold mt-0.5">（成果報酬制）</p>
              </div>
              <div className="my-4">
                <span className="text-3xl sm:text-4xl font-black text-gray-900">20</span>
                <span className="text-sm font-black text-gray-800 ml-1">万円</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed max-w-[240px] mx-auto">
                お二人が結婚を決意し、寿退会される際にお支払いいただく成果報酬です。結果が出るまで余分な費用は発生しません。
              </p>
            </div>

          </div>

          {/* SYSTEM ASSURANCE BANNER */}
          <div className="bg-[#FAF8F5] px-6 py-5 border-t border-gray-100 text-center">
            <p className="text-xs sm:text-sm font-bold text-gray-800 flex items-center justify-center gap-1.5 flex-wrap">
              <CheckCircle2 className="w-4 h-4 text-[#D9889D]" />
              安心の約束：お見合い料・サポート料など「追加料金・隠れた費用」は一切かかりません。
            </p>
          </div>
        </div>

        {/* MATTERS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-start gap-4">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 font-bold text-sm">¥0</div>
            <div>
              <h4 className="font-black text-sm text-gray-900 mb-1">お見合い料「無料」で毎週出会える</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                毎月のお見合い料の負担がないため、費用を気にせず理想のお相手と毎週積極的にお会いいただけます。【上限週4件まで調整可能】
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex items-start gap-4">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-bold text-sm">✓</div>
            <div>
              <h4 className="font-black text-sm text-gray-900 mb-1">結果に寄り添う成果報酬制</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                成婚に至るまで余分な費用がかからない明朗会計システム。お客様の幸せな決意の瞬間まで並走いたします。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          REFUND POLICY SECTION
          ============================================================ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-gray-100 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              万が一の時も安心の返金制度（クーリングオフ・中途解約）
            </h2>
          </div>

          <div className="space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
            <h3 className="font-black text-gray-900 text-base border-b border-gray-100 pb-2">
              特定商取引法に基づく安心の運営体制と返金保証
            </h3>
            <p>
              「もし途中で仕事がさらに忙しくなったら？」「気が変わって退会したくなったらお金は戻る？」という不安を抱えたままでは、本気の婚活はスタートできませんよね。
            </p>
            <p>
              当相談所では、<span className="font-bold text-gray-900">法令（特定商取引法）を厳格に遵守</span>し、入会手続き（ご契約）から8日以内であれば無条件で全額が返金されるクーリングオフ制度を完備しています。また、活動途中で退会を希望される場合も、法律に基づいた明確な返金規定（中途解約に伴う返金制度）を設けております。
            </p>
            <p>
              特定の事務所（店舗）を持たない無店舗型・出張型結婚相談所だからこそ、運営面でのクリーンさと信頼性には誰よりもこだわっています。あなたの大切な資産と時間を、誠実なシステムで守り抜くことをお約束します。
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================
          REQUIRED DOCUMENTS
          ============================================================ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              入会時にご用意いただく「必要書類」一覧
            </h2>
          </div>

          <div className="space-y-6 text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
            <h3 className="font-black text-gray-900 text-base border-b border-gray-100 pb-2">
              100%身元が保証された安全な出会いを提供するための厳格な審査基準
            </h3>
            <p>
              当相談所が、マッチングアプリや一般的な婚活パーティーのような「嘘のプロフィール」や「既婚者・サクラの混入」を100%排除し、安全で質の高い出会い（高い成婚率）を維持できるのは、すべてのご入会者様に以下の公的書類のご提出を義務付けているからです。
            </p>

            {/* DOCUMENT CHECKLIST GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#FAF8F5] p-5 sm:p-6 rounded-2xl border border-gray-100">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9889D] mt-1 shrink-0" />
                <p className="text-xs sm:text-sm text-gray-800"><span className="font-bold text-gray-900">独身証明書</span>（3ヶ月以内に発行されたもの）</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9889D] mt-1 shrink-0" />
                <p className="text-xs sm:text-sm text-gray-800"><span className="font-bold text-gray-900">住民票</span>（マイナンバー記載なしのもの）</p>
              </div>
              <div className="flex items-start gap-2 sm:col-span-2 border-t border-gray-200/50 pt-2 mt-1">
                <CheckCircle2 className="w-4 h-4 text-[#D9889D] mt-1 shrink-0" />
                <p className="text-xs sm:text-sm text-gray-800"><span className="font-bold text-gray-900">学歴証明書</span>（短大卒以上の方は卒業証明書または卒業証書のコピー）</p>
              </div>
              <div className="flex items-start gap-2 sm:col-span-2 border-t border-gray-200/50 pt-2 mt-1">
                <CheckCircle2 className="w-4 h-4 text-[#D9889D] mt-1 shrink-0" />
                <p className="text-xs sm:text-sm text-gray-800">
                  <span className="font-bold text-gray-900">収入証明書（男性必須）</span>：源泉徴収票や確定申告書など<br />
                  <span className="text-[11px] text-gray-500 font-normal">※これがあるからこそ、年収600万円以上、公務員、正社員、経営者といったハイクラスな層のデータに嘘がありません。</span>
                </p>
              </div>
              <div className="flex items-start gap-2 sm:col-span-2 border-t border-gray-200/50 pt-2 mt-1">
                <CheckCircle2 className="w-4 h-4 text-[#D9889D] mt-1 shrink-0" />
                <p className="text-xs sm:text-sm text-gray-800"><span className="font-bold text-gray-900">資格証明書</span>（現役医師、弁護士、公認会計士など専門職の方）</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600">
              書類の集め方が分からない場合も、カウンセラー歴20年のベテラン仲人が丁寧にサポートしますのでご安心ください。徹底した管理体制のもと、あなたの男のプライドや女性のプライバシーを守りながら安全な婚活環境をお届けします。
            </p>
          </div>
        </div>
      </div>

       <main className="bg-[#FFF9FA] min-h-screen">

      {/* Hero */}
      <section className="border-b border-pink-100 bg-gradient-to-b from-white to-[#FFF6F8]">
        <div className="max-w-5xl mx-auto px-5 py-12 sm:py-16">

          <span className="inline-block text-xs font-black tracking-widest uppercase text-pink-500 mb-3">
            For High Status Men & Women
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            人生の幸せは一日でも長い方がいい。<br />
            年収1000万以上男女・医師が集うハイスペック婚活
          </h1>

          <div className="mt-8 text-lg sm:text-xl leading-9 text-gray-700 space-y-5">

            {/* Paste introductory paragraphs here */}

          </div>

        </div>
      </section>



      {/* Female Doctor Letter */}

      <section className="max-w-5xl mx-auto px-5 py-12">

        <div className="rounded-3xl border border-pink-100 bg-white shadow-sm p-6 sm:p-10">

          <div className="text-center mb-8">

            <span className="text-xs font-black tracking-widest uppercase text-pink-400 block">
              Message
            </span>

            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-gray-900">
              🩷 現役女医カウンセラーからのアドバイス
            </h2>

          </div>

          <div className="text-[17px] sm:text-lg leading-8 text-gray-700">

            <div className="float-left mr-5 mb-3 w-28 sm:w-36 md:w-44">
              <Image
                src={femaleAdvisor}
                alt="Female Doctor"
                className="rounded-2xl shadow-md w-full h-auto object-cover"
                priority
              />
            </div>

第一線で戦うあなたへ。最短で「幸せな家庭」を手に入れるためのアプローチ】 日々、社会の最前線でご活躍されている皆さまへ。 社会的な責任や役割の中、充実した多忙な毎日を送っておられると思います。一方で、責任ある立場になればなるほど、誰からも助言は得られにくく自らで自らの判断や行動を律し、あらゆるフィールドで知的好奇心を満たしながら、さらなる高みを目指す毎日になります。立ち止まり考え、そしてまた進んでいく毎日の中、社会で必要とされる喜びを享受されているはずです。一つの扉を開けば、またその先の扉が開くように、終わりのない挑戦が楽しく、人生の価値を高めてくれます。 一方で、仕事だけでは幸せになれないとよく言われますが、それは 仕事とは別に、肩書き関係なく本当の自分に戻れる居場所があることが、人生の幸福度を決定づけるという意味でもあります。社会的な立場で求められる自分と本当の自分には少し違いがあることが多いはずです。社会では責任あるスマートな決断を求められ自信溢れた行動を要求されますが、プライベートでは心配性だったり小学生のように甘えただったりすることもよくあります。 家庭に帰った瞬間に、自分の社会的地位や年収、肩書きに関係なく、ただ『あなた』という存在を受け入れて、どんな敵が来てもどんなことが起きても味方でいてくれるパートナーがいる。誰かにささえられ、誰かをささえることが、人を、強くしてくれます。 また、小さな幸せが私達を幸せにしてくれます。美味しいご飯を一緒に食べ、何気ない今日の出来事を話し、時には笑い合い、時には熱く語り、お互いの存在に安心を感じる。そんな何気ない日常の温かみは、外の世界のどんな成功よりも深く私たちの心を癒やしてくれます。 幸せな結婚生活のスタートは、一日でも早いほうがいいと思います。なぜなら、温かい家庭や家族や子供のために生きる毎日は、仕事とは違う別の大きな幸せを人生に与えてくれますし、幸せをささえる健康や寿命も限りあるものですから、一日一日は誰にとっても貴重なものです。 ハイステータス男女の立場や思考を理解する大阪梅田ドクターズ結婚相談所で、あなたの豊かな未来を変える一歩を踏み出してみませんか？ LINE相談でお話しできるのを楽しみにしています。 【🔘LINEで質問してみる➡️】

            <div className="clear-both"></div>

          </div>

        </div>

      </section>



      {/* Male Counselor Letter */}

      <section className="max-w-5xl mx-auto px-5 pb-12">

        <div className="rounded-3xl border border-blue-100 bg-white shadow-sm p-6 sm:p-10">

          <div className="text-center mb-8">

            <span className="text-xs font-black tracking-widest uppercase text-sky-500 block">
              Message
            </span>

            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-gray-900">
              🩵 ベテランカウンセラーのメッセージ
            </h2>

          </div>

          <div className="text-[17px] sm:text-lg leading-8 text-gray-700">

            <div className="float-left mr-5 mb-3 w-28 sm:w-36 md:w-44">
              <Image
                src={maleAdvisor}
                alt="Male Counselor"
                className="rounded-2xl shadow-md w-full h-auto object-cover"
              />
            </div>

20年間で多数の人生を見てきたから断言できることがあります。「結婚は、あなたの人生を2倍にも3倍にも豊かにする」 これまで20年間、大阪でハイスペック層と呼ばれる皆さまの婚活を多数見守り、良縁を結んできました。たくさんの男女の悩みにも寄り添ってきました。 その中で感じているのは、第一線で活躍する方ほど『一人で生きていける強さ』を持っているということです。しかし、だからこそ『この人とだから、一緒に生きていきたい』と思えるパートナーに出会えたときの喜びは計り知れません。 『今日、こんなに嬉しいことがあった』『仕事でちょっと迷いがあった』 そんな日々の機微を、聞いてもらえる家族がいることそれは、これからの人生を生き抜く上での『無敵の盾』を手に入れるようなものです。一人で見る景色も素晴らしいですが、愛する人と二人で分かち合う景色は、あなたの人生の彩りをまったく違うものに変えてくれます。 大切に守るべき人、大切な自分の家庭があれば、人は強くなれますし、人生の選択肢も豊かに広がります。 家族のために、時には犠牲になりながら、また失敗も成功も経験し、挫折を知りながら深みある人間に成長するでしょう。 結婚をあせる必要はありませんが、人生の最も輝かしい、エネルギーに溢れた時間を共に紡ぎ、支え合う時間は、一日でも長いほうが絶対に幸せです。 ハイスペックなあなたの『本当の相性』まだ結婚したその先までを、20年の経験から推しはかることができます。パートナーに出会うチャンスを広げるため、婚活もプロを頼って最短で最高の成果を掴み取りましょう。大阪梅田ドクターズ結婚相談所があなたのハイスペック婚活を全力でサポートします。婚活について質問してみたいことがあればご遠慮なくどうぞ。誠実にお応えしたいと思っています。 【🔘LINEで質問してみる➡️】　結婚すべきか？の迷いがある人は詳しく見るをどうぞ♡ 🔘結婚すべきか？詳しく見る➡️

            <div className="clear-both"></div>

          </div>

        </div>

      </section>



      {/* Additional Sections */}

      <section className="max-w-5xl mx-auto px-5 pb-16">

        <div className="rounded-3xl border border-pink-100 bg-white shadow-sm p-6 sm:p-10">

          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            【For MEN】経営者、有名企業勤務、医師、会計士などでハイステータスの男性へ
          </h2>

          <div className="text-[17px] sm:text-lg leading-8 text-gray-700 space-y-6">

    時間を節約♡完全外注型サポート 【完全代行型】お見合い設定：ご希望に応じてプロフィールの厳選ご紹介からスケジュール調整まで、すべて当相談所が代行します。もしあなたが避けたいと思うわずらわしい作業があるならば、可能な限り代行させていただきます♡ 【温かみと美貌を兼ね備えた女性をご紹介】 単に容姿が美しいだけでなく、エグゼクティブの妻として、また人生の真のパートナーとしてお互いを高め合える、美貌とを温かい内面を合わせ持つ女性をご推薦します。

          </div>

        </div>

      </section>

    </main>

      {/* ============================================================
          BOTTOM CONTACT CTA TRAY
          ============================================================ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-gray-900 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl shadow-gray-900/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-[#D9889D]/10 to-transparent pointer-events-none" />
          
          <h3 className="text-xl sm:text-2xl font-black mb-3">まずは、プレミアムな無料面談から</h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
            現役医師の分析ロジックと仲人歴20年の成婚データを掛け合わせた、あなただけのオーダーメイド婚活戦略の片鱗を、ぜひご体感ください。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] text-white text-sm font-black px-8 py-4 rounded-xl transition-transform hover:scale-[1.02] shadow-lg shadow-[#E6A2B3]/20"
            >
              <Phone className="w-4 h-4" />
              <span>無料面談・カウンセリングを予約する</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}