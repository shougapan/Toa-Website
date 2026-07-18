import React from 'react';
import { Metadata } from 'next';
import { Check, Info, HelpCircle } from 'lucide-react';
import Banner from "@/components/Banner"



// ============================================================================
// 1. Next.js SEO Metadata
// ============================================================================
export const metadata: Metadata = {
  title: "料金プラン | 大阪梅田ドクターズ結婚相談所",
  description: "大阪梅田ドクターズ結婚相談所の明確な料金プラン。月5名様限定の完全少人数制で、現役女医とベテランカウンセラーによる医学的・心理学的アプローチを圧倒的なコストパフォーマンスで提供します。",
};

export default function PricePage() {
  // ============================================================================
  // 2. SEO Schema (Using structured pricing data)
  // ============================================================================
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': '料金プラン | 大阪梅田ドクターズ結婚相談所',
    'description': '月5名様限定の完全少人数制。明確な料金システムと安心の休会制度をご案内します。',
    'provider': {
      '@type': 'LocalBusiness',
      'name': '大阪梅田ドクターズ結婚相談所',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Osaka',
        'addressRegion': 'Osaka',
        'addressCountry': 'JP'
      }
    }
  };

  const pricingItems = [
    {
      title: "入会金",
      price: "150,000円",
      text: "入会審査、契約手続き、個別規約説明などにかかる費用です。"
    },
    {
      title: "初期プロデュース・登録料",
      price: "80,000円",
      text: "現役女医×ベテランカウンセラーによる初回戦略面談、プロフィール添削、写真選定、連盟システムへのデータ登録等を行います。"
    },
    {
      title: "月会費",
      price: "15,000円",
      text: "毎月のシステム利用、および継続的なお悩み相談・サポートが含まれます。"
    },
    {
      title: "お見合い料",
      price: "0円（無料）",
      text: "月4回まで無料。5回目以降は1回3,000円（税込）となります。費用を気にせず安心してお会いいただけます。"
    },
    {
      title: "成婚料",
      price: "250,000円",
      text: "ご成婚（婚約）が成立し、相談所を寿退会される際にお支払いいただく成功報酬です。"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full bg-[#F4F7FA] py-12 sm:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* --- Header --- */}
          <div className="text-center">
            <span className="text-xs sm:text-sm font-black tracking-[0.3em] uppercase text-blue-600 block mb-2">
              Price Plan
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#102A43] leading-tight">
              料金プラン
            </h1>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500" />
          </div>

          {/* --- Limited Capacity Alert Container --- */}
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm">
            <div className="flex gap-3 items-start">
              <span className="text-xl mt-0.5">🔔</span>
              <div>
                <h3 className="font-black text-[#102A43] text-lg mb-1">
                  【毎月先着5名様限定】の完全少人数制
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  当相談所は、現役医師によるメンタルケアと最高のサポート品質、高い成婚実績を1人ひとりに維持するため、毎月の新規ご入会を完全限定制とさせていただいております。
                </p>
              </div>
            </div>
          </div>

          <Banner/>

          {/* --- Main Pricing Layout --- */}
          <div className="overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-md">
            
            {/* Table Header (Hidden entirely on mobile to keep things tidy) */}
            <div className="hidden md:grid grid-cols-[1.2fr_1fr_2fr] bg-[#102A43] text-white font-black p-5 text-base tracking-wider">
              <div>項目</div>
              <div>金額（税込）</div>
              <div>内容・備考</div>
            </div>

            {/* Pricing Data Loop */}
            <div className="divide-y divide-gray-100">
              {pricingItems.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_2fr] gap-2 md:gap-0 p-6 md:p-5 transition-colors hover:bg-slate-50/50"
                >
                  {/* Title Block */}
                  <div className="font-black text-lg md:text-base text-[#102A43] flex items-center">
                    <span className="md:hidden text-xs font-bold text-gray-400 mr-2 uppercase tracking-tight block">[ 項目 ]</span>
                    {item.title}
                  </div>

                  {/* Pricing Block */}
                  <div className="font-black text-xl md:text-lg text-blue-600 flex items-center md:py-0 py-1">
                    <span className="md:hidden text-xs font-bold text-gray-400 mr-2 uppercase tracking-tight block">[ 金額 ]</span>
                    {item.price}
                  </div>

                  {/* Description text */}
                  <div className="text-sm sm:text-base leading-relaxed text-gray-600 font-medium md:pt-0 pt-1">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>



          {/* --- Refund Legal Disclaimer Container --- */}
          <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-5 text-xs sm:text-sm leading-relaxed text-amber-900/90 flex gap-2">
            <span className="text-base shrink-0 mt-0.5">⚠️</span>
            <p>
              契約書面をお渡しした日から8日以内のクーリングオフ期間経過後は、初期費用分（入会金・登録料）は中途退会時の返金対象外（返金0円）となります。あらかじめご了承ください。
            </p>
          </div>

          {/* --- Vacation System Feature Block --- */}
          <div className="rounded-3xl border border-blue-200/60 bg-white p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <HelpCircle className="w-6 h-6 text-blue-500 shrink-0" />
              <h3 className="text-xl sm:text-2xl font-black text-[#102A43]">
                安心の休会制度について
              </h3>
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
              お仕事の繁忙期や、少し自分のペースを整えるためにお休みしたいときのために、会員籍を維持したままスムーズに活動をストップできるシステムをご用意しています。
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 space-y-4 text-sm sm:text-base text-gray-700 font-medium">
              <div className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p><span className="font-bold text-gray-900">休会中の月会費：月額 3,000円</span> （通常の月会費 15,000円は完全にストップします）</p>
              </div>
              <div className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p><span className="font-bold text-gray-900">休会期間：</span>1回のご申請につき最長3ヶ月まで取得可能</p>
              </div>
              <div className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p><span className="font-bold text-gray-900">休会中の特別サポート：</span>マッチングシステムはお休みになりますが、月1回まで担当カウンセラーへ直接LINEでお悩み相談が可能です。</p>
              </div>
              <div className="flex gap-3 items-start border-t border-gray-200/60 pt-3 text-xs text-gray-500">
                <p>※お見合い予定が控えている場合や、交際中の特定のパートナーがいる期間は休会制度をご利用いただけません。休会をご希望される月の前月20日までにお申し出ください。</p>
              </div>
            </div>
          </div>

          {/* --- CTA Footer Section --- */}
          <div className="pt-6 text-center">
            <button className="inline-block bg-[#102A43] hover:bg-[#1b4369] text-white text-base sm:text-lg font-bold py-4 px-8 sm:px-12 rounded-full shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition duration-200">
              入会枠を相談する（無料カウンセリングはこちら）
            </button>
          </div>

        </div>
      </div>
    </>
  );
}