"use client";

import React, { useState } from 'react';
import { 
  Calendar, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Info,
  Clock
} from 'lucide-react';

export default function ContactConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    agreePrivacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated API endpoint latency response 
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[#FAF8F5] text-gray-950 min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
        <div className="max-w-xl w-full bg-white rounded-3xl p-8 sm:p-12 shadow-[0_10px_40px_rgba(230,162,179,0.05)] border border-gray-100 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900">無料相談のご予約を承りました</h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              この度はお問い合わせいただき誠にありがとうございます。<br />
              ご入力いただいた内容を確認の上、担当カウンセラーより24時間以内に日時確定のご連絡（メールまたはお電話）を差し上げます。
            </p>
          </div>
          <div className="bg-[#FAF8F5] p-4 rounded-xl border border-gray-100 text-[11px] text-gray-500 font-bold max-w-sm mx-auto">
            ※数日経っても返信が届かない場合は、迷惑メールフォルダをご確認いただくか、お手数ですがお電話にて再度ご連絡をお願いいたします。
          </div>
          <button 
            onClick={() => setIsSuccess(false)}
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-black px-6 py-3 rounded-xl transition-all"
          >
            トップページに戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F5] text-gray-950 min-h-screen pt-10 pb-20 font-medium">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#E6A2B3]/10 text-[#D9889D] px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>Reservation</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight">
            無料カウンセリング予約・お問い合わせ
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
            「お相手の選び方に迷う」「特別サポート紹介の詳細を知りたい」など、どのようなことでもお気軽にご相談ください。オンライン（Zoom等）またはご来店（大阪梅田オフィス）での面談を承っております。
          </p>
        </div>

        {/* FORM & INFO TRAY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* SIDE DETAILS COLUMN */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <h3 className="text-xs font-black text-gray-400 tracking-wider uppercase border-b border-gray-100 pb-2">
                面談のご案内
              </h3>
              
              <div className="space-y-3">
                <div className="flex gap-3">
                  <Clock className="w-4 h-4 text-[#D9889D] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-gray-900">営業時間</p>
                    <p className="text-[11px] text-gray-600">11:00 ～ 20:00 (定休: 火曜日)</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Info className="w-4 h-4 text-[#D9889D] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-gray-900">所要時間</p>
                    <p className="text-[11px] text-gray-600">約60分 ～ 90分（完全予約制）</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-emerald-900">秘密厳守</p>
                    <p className="text-[11px] text-emerald-700">お預かりする個人情報は、入会のご案内および連絡以外の目的には一切使用いたしません。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#E6A2B3]/5 rounded-2xl p-5 border border-[#E6A2B3]/10 text-[11px] text-gray-600 leading-relaxed">
              <p className="font-bold text-[#D9889D] mb-1">💡 カウンセラーより</p>
              無理な勧誘やしつこい営業は一切行いません。まずはあなたの理想の婚活スタイルや現在のお悩みをゆっくりお聞かせください。
            </div>
          </div>

          {/* INTERACTIVE FORM COLUMN */}
          <form 
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-gray-100 space-y-6"
          >
            
            {/* NAME FIELD */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-black text-gray-900 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-gray-400" />
                お名前 <span className="text-[10px] bg-rose-50 text-rose-600 px-1.5 py-0.5 rounded-sm font-black">必須</span>
              </label>
              <input 
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="梅田 太郎"
                className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-gray-200 focus:border-[#D9889D] focus:bg-white rounded-xl px-4 py-3 outline-none transition-all"
              />
            </div>

            {/* AGE & GENDER ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="age" className="text-xs font-black text-gray-900">
                  ご年齢 <span className="text-[10px] bg-rose-50 text-rose-600 px-1.5 py-0.5 rounded-sm font-black">必須</span>
                </label>
                <input 
                  type="number"
                  id="age"
                  name="age"
                  required
                  min="20"
                  max="80"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="35"
                  className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-gray-200 focus:border-[#D9889D] focus:bg-white rounded-xl px-4 py-3 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="gender" className="text-xs font-black text-gray-900">
                  性別 <span className="text-[10px] bg-rose-50 text-rose-600 px-1.5 py-0.5 rounded-sm font-black">必須</span>
                </label>
                <select 
                  id="gender"
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-gray-200 focus:border-[#D9889D] focus:bg-white rounded-xl px-4 py-3 outline-none transition-all appearance-none"
                >
                  <option value="">選択してください</option>
                  <option value="male">男性</option>
                  <option value="female">女性</option>
                  <option value="other">その他 / 回答しない</option>
                </select>
              </div>
            </div>

            {/* PHONE FIELD */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs font-black text-gray-900 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-gray-400" />
                電話番号 <span className="text-[10px] bg-rose-50 text-rose-600 px-1.5 py-0.5 rounded-sm font-black">必須</span>
              </label>
              <input 
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="090-1234-5678"
                className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-gray-200 focus:border-[#D9889D] focus:bg-white rounded-xl px-4 py-3 outline-none transition-all"
              />
            </div>

            {/* EMAIL FIELD */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-black text-gray-900 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-gray-400" />
                メールアドレス <span className="text-[10px] bg-rose-50 text-rose-600 px-1.5 py-0.5 rounded-sm font-black">必須</span>
              </label>
              <input 
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
                className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-gray-200 focus:border-[#D9889D] focus:bg-white rounded-xl px-4 py-3 outline-none transition-all"
              />
            </div>

            {/* PREFERRED DATE & TIME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="preferredDate" className="text-xs font-black text-gray-900">
                  第一希望日 <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-sm font-black">任意</span>
                </label>
                <input 
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-gray-200 focus:border-[#D9889D] focus:bg-white rounded-xl px-4 py-3 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="preferredTime" className="text-xs font-black text-gray-900">
                  希望時間帯 <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-sm font-black">任意</span>
                </label>
                <select 
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-gray-200 focus:border-[#D9889D] focus:bg-white rounded-xl px-4 py-3 outline-none transition-all appearance-none"
                >
                  <option value="">選択してください</option>
                  <option value="11:00-13:00">11:00 ～ 13:00</option>
                  <option value="13:00-15:00">13:00 ～ 15:00</option>
                  <option value="15:00-17:00">15:00 ～ 17:00</option>
                  <option value="17:00-19:00">17:00 ～ 19:00</option>
                  <option value="any">いつでも可</option>
                </select>
              </div>
            </div>

            {/* COMMENTS / MESSAGE */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-black text-gray-900 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-gray-400" />
                相談内容・ご質問 <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-sm font-black">任意</span>
              </label>
              <textarea 
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="「特別サポート紹介プランに興味がある」「まずは現状のお悩み相談を希望」など、自由にご記入ください。"
                className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-gray-200 focus:border-[#D9889D] focus:bg-white rounded-xl px-4 py-3 outline-none transition-all resize-none"
              />
            </div>

            {/* PRIVACY CHECKBOX */}
            <div className="pt-2">
              <label className="relative flex items-start gap-3 cursor-pointer group text-xs text-gray-700 leading-relaxed select-none">
                <input 
                  type="checkbox"
                  name="agreePrivacy"
                  required
                  checked={formData.agreePrivacy}
                  onChange={handleChange}
                  className="mt-0.5 rounded border-gray-300 text-[#D9889D] focus:ring-[#D9889D] w-4 h-4 accent-[#D9889D]"
                />
                <span>
                  当相談所の
                  <a href="/privacy" target="_blank" className="font-bold text-gray-900 underline hover:text-[#D9889D]">
                    個人情報保護方針（プライバシーポリシー）
                  </a>
                  に同意の上、送信します。
                </span>
              </label>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E6A2B3] to-[#D9889D] text-white text-sm font-black py-4 rounded-xl transition-all disabled:opacity-50 shadow-lg shadow-[#E6A2B3]/10 hover:scale-[1.01]"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>この内容で無料相談を予約する</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}