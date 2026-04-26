import React from 'react';
import { Volume2, BookOpen, Clock, Lightbulb } from 'lucide-react';

export default function Lektion20GrammarTheory({ playAudio, playingId }: { playAudio: (text: string, id: string, lang?: string) => void, playingId: string | null }) {
  const GRAMMAR_INTRO_SCRIPT = `Xin chào các bạn. Trọng tâm ngữ pháp của bài 20 là cách chia động từ khuyết thiếu - Modalverben ở thì quá khứ đơn Präteritum. Quá khứ đơn rất hay được dùng để kể chuyện xảy ra trong quá khứ. Đặc điểm quan trọng nhất các bạn cần nhớ khi chuyển Modalverben từ hiện tại sang quá khứ đơn là chúng ta bỏ dấu Umlaut (tức là dấu hai chấm trên đầu các chữ a, o, u) đi và thêm đuôi -te. Ví dụ: können chuyển thành konnte, müssen chuyển thành musste, dürfen thành durfte, wollen thành wollte, sollen thành sollte, và mögen thành mochte. Ngôi ich và er/sie/es sẽ có cách chia hoàn toàn giống nhau. Hãy xem kỹ bảng chia động từ để dễ nhớ hơn nhé!`;

  return (
    <div className="space-y-8 pb-12 animate-fade-in max-w-4xl mx-auto">
      <div className="flex max-md:flex-col items-center justify-center gap-4 mb-8">
        <h2 className="text-3xl font-black text-theme-dark uppercase tracking-tight text-center bg-white/50 py-4 rounded-3xl inline-block px-8 border-2 border-white shadow-sm mb-0">
          Lý thuyết Ngữ pháp
        </h2>
        <div className="flex items-center gap-3 bg-white pl-2 pr-5 py-1.5 rounded-full shadow-sm border-2 border-theme-secondary/20">
          <button 
            onClick={() => playAudio(GRAMMAR_INTRO_SCRIPT, 'l20-grammar-intro', 'vi-VN')} 
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-all ${playingId === 'l20-grammar-intro' ? 'bg-theme-secondary text-white shadow-theme-secondary/30 shadow-lg animate-pulse' : 'bg-theme-secondary/10 text-theme-secondary hover:bg-theme-secondary hover:text-white'}`}
            title="Nghe Bài giảng Ngữ pháp (Tiếng Việt)"
          >
            {playingId === 'l20-grammar-intro' ? <Volume2 size={20} /> : <Volume2 size={20} />}
          </button>
          <span className="text-sm font-bold text-theme-secondary uppercase tracking-widest">
            Audio giới thiệu
          </span>
        </div>
      </div>
      
      {/* SECTION 1: Modalverben im Präteritum */}
      <section className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-sm border-4 border-white overflow-hidden relative group">
        <div className="absolute top-0 left-0 w-full h-2 bg-blue-400 group-hover:h-3 transition-all"></div>
        <h3 className="text-2xl font-black text-blue-500 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Clock size={20} className="text-blue-600" />
          </div>
          1. Động từ khuyết thiếu ở thì Quá khứ (Modalverben im Präteritum)
        </h3>
        
        <p className="text-lg text-theme-dark/80 mb-6 leading-relaxed font-medium">
          Dùng để mô tả khả năng, sự cho phép, ý muốn hoặc nghĩa vụ đã xảy ra trong quá khứ.
          <br /><br />
          <strong className="text-rose-600">Quy tắc cốt lõi:</strong> Bỏ dấu Umlaut (ä, ö, ü) của động từ nguyên thể và thêm đuôi <strong>-te</strong>. Ngôi <code className="bg-blue-50 text-blue-700 px-2 rounded">ich</code> và <code className="bg-blue-50 text-blue-700 px-2 rounded">er/es/sie</code> chia giống y hệt nhau.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left bg-blue-50/50 rounded-2xl overflow-hidden border-2 border-blue-100">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="p-4 font-bold">Ngôi (Pronomen)</th>
                <th className="p-4 font-bold">können <span className="font-normal block text-sm">→ konnte</span></th>
                <th className="p-4 font-bold">müssen <span className="font-normal block text-sm">→ musste</span></th>
                <th className="p-4 font-bold">dürfen <span className="font-normal block text-sm">→ durfte</span></th>
              </tr>
            </thead>
            <tbody className="font-medium text-theme-dark/80 divide-y divide-blue-100">
              <tr>
                <td className="p-4 font-bold bg-blue-50/80">ich</td>
                <td className="p-4">konnte</td>
                <td className="p-4">musste</td>
                <td className="p-4">durfte</td>
              </tr>
              <tr>
                <td className="p-4 font-bold bg-blue-50/80">du</td>
                <td className="p-4">konntest</td>
                <td className="p-4">musstest</td>
                <td className="p-4">durftest</td>
              </tr>
              <tr>
                <td className="p-4 font-bold bg-blue-50/80">er/es/sie</td>
                <td className="p-4">konnte</td>
                <td className="p-4">musste</td>
                <td className="p-4">durfte</td>
              </tr>
              <tr>
                <td className="p-4 font-bold bg-blue-50/80">wir</td>
                <td className="p-4">konnten</td>
                <td className="p-4">mussten</td>
                <td className="p-4">durften</td>
              </tr>
              <tr>
                <td className="p-4 font-bold bg-blue-50/80">ihr</td>
                <td className="p-4">konntet</td>
                <td className="p-4">musstet</td>
                <td className="p-4">durftet</td>
              </tr>
              <tr>
                <td className="p-4 font-bold bg-blue-50/80">sie/Sie</td>
                <td className="p-4">konnten</td>
                <td className="p-4">mussten</td>
                <td className="p-4">durften</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="w-full text-left bg-purple-50/50 rounded-2xl overflow-hidden border-2 border-purple-100">
            <thead className="bg-purple-100 text-purple-800">
              <tr>
                <th className="p-4 font-bold">Ngôi (Pronomen)</th>
                <th className="p-4 font-bold">wollen <span className="font-normal block text-sm">→ wollte</span></th>
                <th className="p-4 font-bold">sollen <span className="font-normal block text-sm">→ sollte</span></th>
                <th className="p-4 font-bold">mögen <span className="font-normal block text-sm">→ mochte</span></th>
              </tr>
            </thead>
            <tbody className="font-medium text-theme-dark/80 divide-y divide-purple-100">
              <tr>
                <td className="p-4 font-bold bg-purple-50/80">ich</td>
                <td className="p-4">wollte</td>
                <td className="p-4">sollte</td>
                <td className="p-4">mochte</td>
              </tr>
              <tr>
                <td className="p-4 font-bold bg-purple-50/80">du</td>
                <td className="p-4">wolltest</td>
                <td className="p-4">solltest</td>
                <td className="p-4">mochtest</td>
              </tr>
              <tr>
                <td className="p-4 font-bold bg-purple-50/80">er/es/sie</td>
                <td className="p-4">wollte</td>
                <td className="p-4">sollte</td>
                <td className="p-4">mochte</td>
              </tr>
              <tr>
                <td className="p-4 font-bold bg-purple-50/80">wir / sie / Sie</td>
                <td className="p-4">wollten</td>
                <td className="p-4">sollten</td>
                <td className="p-4">mochten</td>
              </tr>
              <tr>
                <td className="p-4 font-bold bg-purple-50/80">ihr</td>
                <td className="p-4">wolltet</td>
                <td className="p-4">solltet</td>
                <td className="p-4">mochtet</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-slate-50 p-6 rounded-2xl border-2 border-slate-100">
          <h4 className="font-bold text-slate-800 mb-2 border-b-2 border-slate-200 pb-2">Ví dụ:</h4>
          <ul className="space-y-2 font-medium text-slate-700">
            <li>• Als Kind <strong>durfte</strong> ich keine Comics lesen. <span className="text-slate-400 italic">(Hồi nhỏ tôi không được phép đọc truyện tranh.)</span></li>
            <li>• Mit 5 Jahren <strong>konnte</strong> er schon lesen. <span className="text-slate-400 italic">(Lúc 5 tuổi cậu ấy đã có thể đọc.)</span></li>
            <li>• Ich <strong>wollte</strong> am Wochenende weggehen, aber ich <strong>musste</strong> arbeiten. <span className="text-slate-400 italic">(Tôi đã muốn đi chơi cuối tuần, nhưng tôi lại phải làm việc.)</span></li>
          </ul>
        </div>
      </section>

      {/* SECTION 2: Interesse ausdrücken */}
      <section className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-sm border-4 border-white overflow-hidden relative group">
        <div className="absolute top-0 left-0 w-full h-2 bg-amber-400 group-hover:h-3 transition-all"></div>
        <h3 className="text-2xl font-black text-amber-500 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
            <Lightbulb size={20} className="text-amber-600" />
          </div>
          2. Giới từ đi kèm danh từ/động từ bày tỏ Sở thích (Interesse)
        </h3>
        
        <p className="text-lg text-theme-dark/80 mb-6 leading-relaxed font-medium">
          Khi muốn nói rằng bạn hứng thú hoặc quan tâm đến điều gì, có 2 cấu trúc phổ biến:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-amber-50/50 rounded-3xl p-6 border-2 border-amber-100">
            <h4 className="text-xl font-bold text-amber-600 mb-2">Interesse haben <strong className="text-amber-700">an + Dativ</strong></h4>
            <p className="text-theme-dark/70 text-sm mb-4">Sử dụng danh từ "das Interesse".</p>
            <ul className="space-y-3 font-medium">
              <li className="flex gap-2">
                <span className="text-amber-400">►</span> 
                <span>Ich habe großes Interesse <strong className="text-amber-600">an der</strong> Musik.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-400">►</span> 
                <span>Hast du Interesse <strong className="text-amber-600">an</strong> alten Büchern?</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-400">►</span> 
                <span>Nein, daran habe ich kein Interesse.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-amber-50/50 rounded-3xl p-6 border-2 border-amber-100">
            <h4 className="text-xl font-bold text-amber-600 mb-2">sich interessieren <strong className="text-amber-700">für + Akkusativ</strong></h4>
            <p className="text-theme-dark/70 text-sm mb-4">Sử dụng động từ phản thân.</p>
            <ul className="space-y-3 font-medium">
              <li className="flex gap-2">
                <span className="text-amber-400">►</span> 
                <span>Ich interessiere <strong className="text-amber-600">mich für</strong> Geschichte.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-400">►</span> 
                <span>Interessierst du <strong className="text-amber-600">dich für</strong> Romane?</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-400">►</span> 
                <span>Ja, dafür interessiere ich mich sehr.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
