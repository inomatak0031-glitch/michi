import React, { useState } from "react";
import { Phone, Clock, MapPin, Mail, ArrowRight } from "lucide-react";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Bar */}
      <div className="bg-white/80 backdrop-blur sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-sky-600 flex items-center justify-center shadow-sm">
              <span className="text-white font-black">道</span>
            </div>
            <div>
              <div className="font-bold leading-tight">一般社団法人 道</div>
              <div className="text-xs text-slate-500">地域に根ざし、共に生きる社会へ</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-sky-700">法人概要</a>
            <a href="#offices" className="hover:text-sky-700">事業所一覧</a>
            <a href="#contact" className="hover:text-sky-700">お問い合わせ</a>
            <a href="tel:08061381652" className="inline-flex items-center gap-2 font-semibold text-sky-700">
              <Phone className="w-4 h-4"/> 080-6138-1652
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden rounded-xl border px-3 py-2 text-sm">メニュー</button>
        </div>
        {open && (
          <div className="md:hidden border-t">
            <nav className="max-w-6xl mx-auto px-4 py-3 grid gap-3">
              <a href="#about" onClick={() => setOpen(false)} className="py-2">法人概要</a>
              <a href="#offices" onClick={() => setOpen(false)} className="py-2">事業所一覧</a>
              <a href="#contact" onClick={() => setOpen(false)} className="py-2">お問い合わせ</a>
              <a href="tel:08061381652" className="py-2 inline-flex items-center gap-2 font-semibold text-sky-700">
                <Phone className="w-4 h-4"/> 080-6138-1652
              </a>
            </nav>
          </div>
        )}
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-slate-50"/>
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
                共に生きる社会を目指して、
                <br className="hidden md:block"/>地域と共に歩む「道」。
              </h1>
              <p className="mt-4 text-slate-600 md:text-lg leading-relaxed">
                一般社団法人 道は、三重県伊賀・名張地域を拠点に、共同生活援助や就労継続支援B型などの福祉事業を展開しています。
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-sky-600 text-white font-semibold px-5 py-3 shadow hover:shadow-md transition">
                  お問い合わせ <ArrowRight className="w-4 h-4"/>
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-600">
                <div className="inline-flex items-center gap-2"><Clock className="w-4 h-4"/> 受付 10:00〜17:00</div>
                <div className="inline-flex items-center gap-2"><MapPin className="w-4 h-4"/> 三重県伊賀市鍛冶屋720番地</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">法人概要</h2>
        <div className="rounded-2xl bg-white p-6 border border-slate-100 shadow-sm">
          <dl className="grid grid-cols-3 gap-y-3 text-sm">
            <dt className="text-slate-500">名称</dt>
            <dd className="col-span-2">一般社団法人 道</dd>
            <dt className="text-slate-500">所在地</dt>
            <dd className="col-span-2">三重県伊賀市鍛冶屋720番地</dd>
            <dt className="text-slate-500">電話</dt>
            <dd className="col-span-2">080-6138-1652</dd>
            <dt className="text-slate-500">受付時間</dt>
            <dd className="col-span-2">10:00〜17:00</dd>
            <dt className="text-slate-500">メール</dt>
            <dd className="col-span-2">michi.88880000@gmail.com</dd>
          </dl>
        </div>
      </section>

      {/* Offices */}
      <section id="offices" className="bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">事業所一覧</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-lg mb-1">共同生活援助事業所</h3>
              <p className="font-semibold text-sky-700">みちソーシャルキャンプ 鍛冶屋</p>
              <p className="text-slate-600 text-sm mt-1">三重県伊賀市鍛冶屋720番地</p>
            </div>
            <div className="rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-lg mb-1">共同生活援助事業所</h3>
              <p className="font-semibold text-sky-700">みち ソーシャルキャンプ 中川ハイツ</p>
              <p className="text-slate-600 text-sm mt-1">三重県伊賀市長田2643-1</p>
            </div>
            <div className="rounded-2xl p-6 border border-slate-100 shadow-sm md:col-span-2">
              <h3 className="font-bold text-lg mb-1">就労継続支援施設B型</h3>
              <p className="font-semibold text-sky-700">みち ソーシャルワークス 名張</p>
              <p className="text-slate-600 text-sm mt-1">三重県名張市桔梗が丘5-3-4</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <div className="rounded-2xl p-6 md:p-8 bg-gradient-to-br from-white to-sky-50 border border-slate-100 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold">お問い合わせ</h2>
              <p className="mt-2 text-slate-600">各種ご相談・見学・連携のご依頼など、お気軽にご連絡ください。</p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="inline-flex items-center gap-2"><Phone className="w-4 h-4"/> 080-6138-1652</div>
                <div className="inline-flex items-center gap-2"><Mail className="w-4 h-4"/> michi.88880000@gmail.com</div>
                <div className="inline-flex items-center gap-2"><Clock className="w-4 h-4"/> 受付 10:00〜17:00</div>
                <div className="inline-flex items-center gap-2"><MapPin className="w-4 h-4"/> 三重県伊賀市鍛冶屋720番地</div>
              </div>
            </div>
            <form className="grid gap-4">
              <div>
                <label className="text-sm text-slate-600">お名前</label>
                <input className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200" placeholder="山田 太郎"/>
              </div>
              <div>
                <label className="text-sm text-slate-600">メール</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200" placeholder="you@example.org"/>
              </div>
              <div>
                <label className="text-sm text-slate-600">内容</label>
                <textarea rows={5} className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200" placeholder="ご相談内容を記入してください"></textarea>
              </div>
              <button type="button" className="rounded-xl bg-sky-600 text-white font-semibold px-5 py-3">送信（デモ）</button>
              <p className="text-xs text-slate-500">※実運用ではFormspreeやGoogleフォーム等へ接続してください。</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-white/70">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} 一般社団法人 道</div>
          <div className="text-xs text-slate-500">プライバシーポリシー / サイトマップ</div>
        </div>
      </footer>
    </div>
  );
}
