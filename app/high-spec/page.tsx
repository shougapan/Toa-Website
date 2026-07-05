import React from "react";
import Link from "next/link";
import {
  Heart,
  Briefcase,
  Clock,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  ArrowRight,
} from "lucide-react";

export default function EliteMatchmakingPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">

      {/* Hero */}
      <section className="bg-gradient-to-b from-rose-50 to-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-14">

          <div className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-sm font-semibold text-rose-700">
            🩷ハイスペックなあなたへ 💙
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            人生の幸せは、一日でも長い方がいい。
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            年収1000万円以上の男女・医師・経営者・エグゼクティブのための
            ハイクラス婚活。
          </p>

          <p className="mt-8 text-lg leading-8 text-gray-700">
            成功している方ほど、「最短で最良の結果を得る」という価値を
            理解しています。結婚も同じです。
          </p>

          <Link
            href="/line"
            className="mt-10 inline-flex items-center rounded-full bg-rose-500 px-8 py-4 text-white font-semibold shadow hover:bg-rose-600 transition"
          >
            LINEで相談する
            <ArrowRight className="ml-2 h-5 w-5"/>
          </Link>

        </div>
      </section>

      {/* Why */}
      <section className="max-w-5xl mx-auto px-4 py-14">

        <div className="text-center">

          <h2 className="text-3xl font-bold">
            なぜハイスペック男女は結婚相談所を選ぶのか？
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            お相手に困っているからではありません。
            「人生全体の幸福度を最大化する」という、
            最も合理的な選択だからです。
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-12">

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <Clock className="text-rose-500"/>
            <h3 className="mt-4 font-bold text-xl">
              時間を最大化
            </h3>
            <p className="mt-3 text-gray-600 leading-7">
              幸せな結婚生活は、
              一日でも早く始めるほど人生全体の価値が高まります。
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <Briefcase className="text-rose-500"/>
            <h3 className="mt-4 font-bold text-xl">
              効率的な婚活
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              プロによるサポートで、
              無駄な時間を省き理想のお相手へ。
            </p>

          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">

            <Heart className="text-rose-500"/>

            <h3 className="mt-4 font-bold text-xl">
              人生の幸福
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              家庭は仕事では得られない安心と幸せを与えてくれます。
            </p>

          </div>

        </div>

      </section>

      {/* Doctor */}

      <section className="bg-white py-16">

        <div className="max-w-5xl mx-auto px-4">

          <div className="flex items-center gap-3">

            <Stethoscope className="text-pink-500"/>

            <h2 className="text-3xl font-bold">
              現役女医カウンセラーからのメッセージ
            </h2>

        </div>

          <div className="mt-8 rounded-3xl bg-rose-50 p-8">

            <p className="leading-8 text-gray-700">
              第一線で活躍するあなたへ。
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              社会的な成功だけでは人生は完成しません。
              肩書きを脱いだとき、
              「あなた」という存在を受け止めてくれる
              パートナーがいることこそ、
              本当の豊かさにつながります。
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              幸せな家庭を築く時間は、
              一日でも長いほうがいい。
              その第一歩を私たちがお手伝いします。
            </p>

          </div>

        </div>

      </section>

      {/* Veteran */}

      <section className="py-16">

        <div className="max-w-5xl mx-auto px-4">

          <div className="flex items-center gap-3">

            <Users className="text-blue-500"/>

            <h2 className="text-3xl font-bold">
              ベテランカウンセラーより
            </h2>

          </div>

          <div className="mt-8 rounded-3xl bg-white shadow-sm p-8">

            <h3 className="text-2xl font-bold">
              結婚は人生を2倍にも3倍にも豊かにします
            </h3>

            <p className="mt-6 leading-8 text-gray-700">
              20年間、多くのハイクラス会員様のご成婚を見届けてきました。
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              一人でも幸せになれる方ほど、
              本当に相性の良いパートナーに出会えた時の喜びは
              計り知れません。
            </p>

          </div>

        </div>

      </section>

      {/* Men Women */}

      <section className="max-w-5xl mx-auto px-4 py-16">

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow">

            <Sparkles className="text-blue-500"/>

            <h2 className="mt-4 text-2xl font-bold">
              For MEN
            </h2>

            <ul className="mt-6 space-y-4 text-gray-700">

              <li>✓ 完全代行型のお見合いサポート</li>

              <li>✓ スケジュール調整も全てお任せ</li>

              <li>✓ エグゼクティブにふさわしい女性をご紹介</li>

            </ul>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow">

            <ShieldCheck className="text-pink-500"/>

            <h2 className="mt-4 text-2xl font-bold">
              For WOMEN
            </h2>

            <ul className="mt-6 space-y-4 text-gray-700">

              <li>✓ キャリアも恋愛も諦めなくていい</li>

              <li>✓ ハイクラス男性とのご縁をサポート</li>

              <li>✓ 完全少人数制で丁寧なサポート</li>

            </ul>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-rose-500 to-pink-500 py-20">

        <div className="max-w-3xl mx-auto px-4 text-center text-white">

          <h2 className="text-4xl font-bold">
            あなたの人生を変える一歩を。
          </h2>

          <p className="mt-6 text-lg leading-8">
            まずはLINEでお気軽にご相談ください。
          </p>

          <Link
            href="/line"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-rose-600 hover:bg-gray-100 transition"
          >
            LINEで質問する
          </Link>

        </div>

      </section>

    </main>
  );
}