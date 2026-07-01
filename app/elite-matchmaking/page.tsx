"use client";

import React from 'react';
import Image from "next/image";
import femaleAdvisor from "@/public/femaleAdvisor.jpg";
import maleAdvisor from "@/public/maleAdvisor.jpg";
import Link from 'next/link';
import { 
  Sparkles, 
  LineChart, 
  Stethoscope, 
  Compass, 
  ArrowRight,
  Phone,
  Brain,
  GraduationCap,
  CheckCircle2
} from 'lucide-react';

export default function ReasonsPage() {
  return (
    <div>
      <section className="border-b border-pink-100 bg-gradient-to-b from-white to-[#FFF6F8]">
        <div className="max-w-5xl mx-auto px-5 py-12 sm:py-16">

          <span className="inline-block text-xs font-black tracking-widest uppercase text-pink-500 mb-3">
            ハイスペックなあなたへ🩷💙

      ハイスペック男性、ハイスペック女性のあなたへ。人生の幸せは一日でも長いほうがいい。
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
 人生の幸せは一日でも長い方がいい。年収1000万以上男女・医師が集うハイスペック婚活
          </h1>

          <div className="mt-8 text-lg sm:text-xl leading- text-gray-700 space-y-5">

      ハイスペック男女がお相手に困っているわけではないのに、大阪梅田ドクターズ結婚相談所で成婚にむきあうのはなぜなのか？
H3：その答えは、幸せをもたらす結婚を効率的に最短で掴みとり、人生全体の幸福度を上げることが【価値ある選択】と考えているからです。
【人生の幸せををパートナーと共有する時間は、1日でも長いほうがいい】これは、ビジネスの世界で「決断と行動が早いほど、得られる恩恵は大きくなる」ように、婚活においても同様の結果がもたらされます。「一日でも早く理想のパートナーと出会うこと」は、人生全体の幸福度を最大化する決断です。
ハイスペック男女が、迷うことなく「今」動き、一日でも長く結婚がもたらす幸せを享受すべき明確な理由がここにあります。

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
              🩷現役女医カウンセラーからのアドバイス🩷
【第一線で戦うあなたへ。最短で「幸せな家庭」を手に入れるためのアプローチ】
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

日々、社会の最前線でご活躍されている皆さまへ。
社会的な責任や役割の中、充実した多忙な毎日を送っておられると思います。一方で、責任ある立場になればなるほど、誰からも助言は得られにくく自らで自らの判断や行動を律し、あらゆるフィールドで知的好奇心を満たしながら、さらなる高みを目指す毎日になります。立ち止まり考え、そしてまた進んでいく毎日の中、社会で必要とされる喜びを享受されているはずです。一つの扉を開けば、またその先の扉が開くように、終わりのない挑戦が楽しく、人生の価値を高めてくれます。
一方で、仕事だけでは幸せになれないとよく言われますが、それは
仕事とは別に、肩書き関係なく本当の自分に戻れる居場所があることが、人生の幸福度を決定づけるという意味でもあります。社会的な立場で求められる自分と本当の自分には少し違いがあることが多いはずです。社会では責任あるスマートな決断を求められ自信溢れた行動を要求されますが、プライベートでは心配性だったり小学生のように甘えただったりすることもよくあります。
家庭に帰った瞬間に、自分の社会的地位や年収、肩書きに関係なく、ただ『あなた』という存在を受け入れて、どんな敵が来てもどんなことが起きても味方でいてくれるパートナーがいる。誰かにささえられ、誰かをささえることが、人を、強くしてくれます。
また、小さな幸せが私達を幸せにしてくれます。美味しいご飯を一緒に食べ、何気ない今日の出来事を話し、時には笑い合い、時には熱く語り、お互いの存在に安心を感じる。そんな何気ない日常の温かみは、外の世界のどんな成功よりも深く私たちの心を癒やしてくれます。
幸せな結婚生活のスタートは、一日でも早いほうがいいと思います。なぜなら、温かい家庭や家族や子供のために生きる毎日は、仕事とは違う別の大きな幸せを人生に与えてくれますし、幸せをささえる健康や寿命も限りあるものですから、一日一日は誰にとっても貴重なものです。
ハイステータス男女の立場や思考を理解する大阪梅田ドクターズ結婚相談所で、あなたの豊かな未来を変える一歩を踏み出してみませんか？ 
LINE相談でお話しできるのを楽しみにしています。
<Link
  href="/line"
  className="group inline-flex items-center justify-center rounded-full bg-green-500 px-8 py-3 text-base font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-xl active:translate-y-0"
>
  LINEで質問してみる
  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>

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
              🩵ベテランカウンセラーのメッセージ💙
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

20年間で多数の人生を見てきたから断言できることがあります。「結婚は、あなたの人生を2倍にも3倍にも豊かにする」
これまで20年間、大阪でハイスペック層と呼ばれる皆さまの婚活を多数見守り、良縁を結んできました。たくさんの男女の悩みにも寄り添ってきました。
その中で感じているのは、第一線で活躍する方ほど『一人で生きていける強さ』を持っているということです。しかし、だからこそ『この人とだから、一緒に生きていきたい』と思えるパートナーに出会えたときの喜びは計り知れません。
『今日、こんなに嬉しいことがあった』『仕事でちょっと迷いがあった』
そんな日々の機微を、聞いてもらえる家族がいることそれは、これからの人生を生き抜く上での『無敵の盾』を手に入れるようなものです。一人で見る景色も素晴らしいですが、愛する人と二人で分かち合う景色は、あなたの人生の彩りをまったく違うものに変えてくれます。
大切に守るべき人、大切な自分の家庭があれば、人は強くなれますし、人生の選択肢も豊かに広がります。
家族のために、時には犠牲になりながら、また失敗も成功も経験し、挫折を知りながら深みある人間に成長するでしょう。
結婚をあせる必要はありませんが、人生の最も輝かしい、エネルギーに溢れた時間を共に紡ぎ、支え合う時間は、一日でも長いほうが絶対に幸せです。
ハイスペックなあなたの『本当の相性』まだ結婚したその先までを、20年の経験から推しはかることができます。パートナーに出会うチャンスを広げるため、婚活もプロを頼って最短で最高の成果を掴み取りましょう。大阪梅田ドクターズ結婚相談所があなたのハイスペック婚活を全力でサポートします。婚活について質問してみたいことがあればご遠慮なくどうぞ。誠実にお応えしたいと思っています。
【🔘LINEで質問してみる➡️】


結婚すべきか？の迷いがある人は詳しく見るをどうぞ♡
<Link
  href="/should-i-get-married"
  className="group inline-flex items-center justify-center rounded-full bg-pink-500 px-8 py-3 text-base font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-xl active:translate-y-0"
>
  結婚すべきか？詳しく見る
  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>

            <div className="clear-both"></div>

          </div>

        </div>

      </section>



      {/* Additional Sections */}

      <section className="max-w-5xl mx-auto px-5 pb-16">
        <div className="rounded-3xl border border-pink-100 bg-white shadow-sm p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            【For MEN】年収1000万円以上の医師・経営者・エグゼクティブの男性へ
          </h2>
          <div className="text-[17px] sm:text-lg leading-8 text-gray-700 space-y-6">

時間を節約♡完全外注型サポート
【完全代行型】お見合い設定：ご希望に応じてプロフィールの厳ご紹介からスケジュール調整まで、すべて当相談所が代行します。もしあなたが避けたいと思うわずらわしい作業があるならば、可能な限り代行させていただきます♡
【温かみと美貌を兼ね備えた女性をご紹介】
単に容姿が美しいだけでなく、エグゼクティブの妻として、また人生の真のパートナーとしてお互いを高め合える、美貌とを温かい内面を合わせ持つ女性をご推薦します。
          </div>
        </div>
        <div className="rounded-3xl border border-pink-100 bg-white shadow-sm p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6">
            【For WOMEN】ハイスペック女性の方へ 💙ベテランカウンセラーより💙
          </h2>
          <div className="text-[17px] sm:text-lg leading-8 text-gray-700 space-y-6">
築いてきたキャリアも、人を愛する純粋な心も、どちらも諦めなくていい。
はじめまして。大阪梅田ドクターズ結婚相談所のカウンセラーです。
これまで、社会の第一線で美しく、そして懸命に戦ってきた多くの女性たちの人生に寄り添ってきました。その中で、彼女たちが口を揃えて言う言葉があります。
「私のキャリアや立場を、丸ごと受け止めてくれる男性が本当にいるのだろうか」
もしあなたもそんな不安を抱えているなら、どうか安心してください。あなたのキャリアその能力も、すべてあなたの素晴らしい魅力です。
あなたの立場や能力を理解し同じ目線で尊敬し支えあえる男性であることはもちろんですが、もう一つの
あなたに必要なのは、一人の女性として甘えられる場所です、あなたの知性やキャリアをリスペクトし、対等なパートナーとして支え合える「本物の愛」です。
お互いを愛おしく思い、心から支えあえる。そんな「恋愛の延長にある最高の結婚」こそが、あなたの人生をさらに輝かせるでしょう。
大阪梅田ドクターズ相談所は、
条件だけでなく相性を考え、あなたのご希望に寄り添うため、【完全少人数制】を徹底しています。
私達が培ってきた「ハイクラスな男性の本質を見抜く力」と「成婚への確かなノウハウ」。この2つのアプローチで、あなたのキャリアを敬い、一人の女性として心から愛してくれる男性とのご縁を力強く引き寄せます。
結婚は、何かを犠牲にするものではありません。
大好きな人と巡り合い、愛し、愛されることで、あなたの人生はもっと自由で、もっと豊かになります。
「私のすべてを受け止めてくれる、最高の味方に出会えた」そう笑顔で卒業していただける未来のために、私は持てるすべての情熱と経験を注ぎます。
LINE相談を心よりお待ちしております。
          </div>
        </div>

      </section>
      </div>
  );
}