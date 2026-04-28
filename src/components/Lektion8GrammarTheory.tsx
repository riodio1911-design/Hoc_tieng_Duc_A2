import React from 'react';
import { Volume2, BookOpen, AlertTriangle } from 'lucide-react';

export default function Lektion8GrammarTheory({ playAudio, playingId }: { playAudio: (text: string, id: string, lang?: string) => void, playingId: string | null }) {
  const GRAMMAR_INTRO_SCRIPT = `Xin chào các bạn. Về Ngữ pháp bài 8, chúng ta sẽ học cách diễn đạt nguyên nhân và kết quả bằng hai liên từ quan trọng: weil và deshalb. Khi dùng "weil" mang nghĩa "bởi vì", nó dẫn dắt một mệnh đề phụ, và các bạn cần nhớ luôn luôn đưa động từ đã chia xuống cuối câu. Ví dụ: Ich bleibe zu Hause, weil ich krank bin. Ngược lại, khi dùng "deshalb" mang nghĩa "vì vậy", nó đứng ở đầu câu của mệnh đề kết quả, và ngay đằng sau nó - ở vị trí số hai - phải là động từ đã chia. Ví dụ: Ich bin krank, deshalb bleibe ich zu Hause. Các bạn hãy nắm vững vị trí của động từ nhé!`;

  return (
    <div className="space-y-8 pb-12 animate-fade-in max-w-4xl mx-auto">
      <div className="flex max-md:flex-col items-center justify-center gap-4 mb-8">
        <h2 className="text-3xl font-black text-theme-dark uppercase tracking-tight text-center bg-white/50 py-4 rounded-3xl inline-block px-8 border-2 border-white shadow-sm mb-0">
          Lý thuyết Ngữ pháp
        </h2>
        <div className="flex items-center gap-3 bg-white pl-2 pr-5 py-1.5 rounded-full shadow-sm border-2 border-theme-secondary/20">
          <button 
            onClick={() => playAudio(GRAMMAR_INTRO_SCRIPT, 'l8-grammar-intro', 'vi-VN')} 
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-all ${playingId === 'l8-grammar-intro' ? 'bg-theme-secondary text-white shadow-theme-secondary/30 shadow-lg animate-pulse' : 'bg-theme-secondary/10 text-theme-secondary hover:bg-theme-secondary hover:text-white'}`}
            title="Nghe Bài giảng Ngữ pháp (Tiếng Việt)"
          >
            {playingId === 'l8-grammar-intro' ? <Volume2 size={20} /> : <Volume2 size={20} />}
          </button>
          <span className="text-sm font-bold text-theme-secondary uppercase tracking-widest">
            Audio giới thiệu ngữ pháp
          </span>
        </div>
      </div>
      
      {/* PHẦN 1: WEIL */}
      <section className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-sm border-4 border-white overflow-hidden relative group">
        <div className="absolute top-0 left-0 w-full h-2 bg-rose-400 group-hover:h-3 transition-all"></div>
        <h3 className="text-2xl font-black text-rose-500 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-rose-100 flex items-center justify-center flex-shrink-0">
            <BookOpen size={20} className="text-rose-600" />
          </div>
          1. Liên từ "weil" (bởi vì / nguyên nhân)
        </h3>
        
        <p className="text-lg text-theme-dark/80 mb-6 leading-relaxed font-medium">
          Liên từ <strong>weil</strong> (bởi vì) dẫn dắt một mệnh đề phụ (Nebensatz) chỉ nguyên nhân. Mệnh đề chính (Hauptsatz) đứng trước chỉ kết quả.
        </p>

        <div className="bg-rose-50/50 rounded-3xl p-6 border-2 border-rose-100 relative mb-6">
          <h4 className="text-xl font-bold text-rose-600 mb-4 pb-2 border-b-2 border-rose-200">
            Cấu trúc: Hauptsatz (Kết quả) + , + weil + Subjekt... + Verb
          </h4>
          <p className="text-theme-dark/70 mb-4 font-bold bg-white p-3 rounded-xl border-l-4 border-rose-400">
            Lưu ý: Trong mệnh đề phụ bắt đầu bằng "weil", động từ đã chia phải nằm ở cuối câu!
          </p>
          <ul className="space-y-4 font-medium">
            <li className="flex gap-2 flex-col bg-white p-4 rounded-xl shadow-sm">
              <span className="text-lg"><strong className="text-theme-dark">Ich rufe den Notarzt, </strong><strong className="text-rose-600">weil</strong> mein Vater verletzt <u className="text-rose-600">ist</u>.</span>
              <span className="text-theme-dark/60 italic text-sm">(Tôi gọi bác sĩ cấp cứu, bởi vì bố tôi bị thương.)</span>
            </li>
            <li className="flex gap-2 flex-col bg-white p-4 rounded-xl shadow-sm">
              <span className="text-lg"><strong className="text-theme-dark">Er geht nicht ins Büro, </strong><strong className="text-rose-600">weil</strong> er Fieber <u className="text-rose-600">hat</u>.</span>
              <span className="text-theme-dark/60 italic text-sm">(Anh ấy không đến văn phòng, bởi vì anh ấy bị sốt.)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* PHẦN 2: DESHALB */}
      <section className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-sm border-4 border-white overflow-hidden relative group">
        <div className="absolute top-0 left-0 w-full h-2 bg-indigo-400 group-hover:h-3 transition-all"></div>
        <h3 className="text-2xl font-black text-indigo-500 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
            <BookOpen size={20} className="text-indigo-600" />
          </div>
          2. Liên từ "deshalb" (vì vậy / kết quả)
        </h3>
        
        <p className="text-lg text-theme-dark/80 mb-6 leading-relaxed font-medium">
          <strong>deshalb</strong> (vì vậy / do đó) là một trạng từ liên kết. Nó nối 2 mệnh đề chính. Câu thứ nhất chỉ nguyên nhân, câu thứ 2 (bắt đầu bằng deshalb) chỉ kết quả.
        </p>

        <div className="bg-indigo-50/50 rounded-3xl p-6 border-2 border-indigo-100 relative mb-6">
          <h4 className="text-xl font-bold text-indigo-600 mb-4 pb-2 border-b-2 border-indigo-200">
            Cấu trúc: Hauptsatz (Nguyên nhân) . Deshalb + Verb + Subjekt... 
          </h4>
          <p className="text-theme-dark/70 mb-4 font-bold bg-white p-3 rounded-xl border-l-4 border-indigo-400">
            Lưu ý: "deshalb" chiếm vị trí đầu tiên trong câu, nên động từ ngay lập tức đứng ở vị trí số 2!
          </p>
          <ul className="space-y-4 font-medium">
            <li className="flex gap-2 flex-col bg-white p-4 rounded-xl shadow-sm">
              <span className="text-lg"><strong className="text-theme-dark">Mein Vater ist verletzt. </strong><strong className="text-indigo-600">Deshalb</strong> <u className="text-indigo-600">rufe</u> ich den Notarzt.</span>
              <span className="text-theme-dark/60 italic text-sm">(Bố tôi bị thương. Vì vậy tôi gọi bác sĩ cấp cứu.)</span>
            </li>
            <li className="flex gap-2 flex-col bg-white p-4 rounded-xl shadow-sm">
              <span className="text-lg"><strong className="text-theme-dark">Er hat Fieber. </strong><strong className="text-indigo-600">Deshalb</strong> <u className="text-indigo-600">geht</u> er nicht ins Büro.</span>
              <span className="text-theme-dark/60 italic text-sm">(Anh ấy bị sốt. Vì thế anh không đi tới văn phòng.)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Tóm tắt */}
      <section className="bg-sky-50/50 rounded-[2.5rem] p-6 shadow-sm border-2 border-sky-100 flex items-start gap-4 mx-4 md:mx-0">
        <div className="p-3 bg-sky-100 rounded-2xl flex-shrink-0 text-sky-600">
          <AlertTriangle size={24} />
        </div>
        <div className="w-full">
          <h4 className="font-bold text-sky-800 text-lg mb-4">TỔNG KẾT NHANH</h4>
          <div className="bg-white p-4 rounded-xl border-2 border-sky-100 overflow-x-auto">
            <table className="w-full text-left font-medium text-theme-dark min-w-[500px]">
              <thead>
                <tr className="border-b-2 border-sky-50">
                  <th className="pb-3 px-4">Liên từ</th>
                  <th className="pb-3 px-4">Ý nghĩa</th>
                  <th className="pb-3 px-4">Vị trí động từ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-sky-50">
                  <td className="py-4 px-4 font-bold text-rose-600 text-lg">weil</td>
                  <td className="py-4 px-4">bởi vì</td>
                  <td className="py-4 px-4"><span className="bg-rose-100 text-rose-800 px-3 py-1.5 rounded-lg font-bold">Cuối câu</span></td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-indigo-600 text-lg">deshalb</td>
                  <td className="py-4 px-4">vì vậy</td>
                  <td className="py-4 px-4"><span className="bg-indigo-100 text-indigo-800 px-3 py-1.5 rounded-lg font-bold">Vị trí số 2</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
