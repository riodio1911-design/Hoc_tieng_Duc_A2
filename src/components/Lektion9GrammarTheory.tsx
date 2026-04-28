import React from 'react';
import { Volume2, BookOpen, AlertTriangle } from 'lucide-react';

export default function Lektion9GrammarTheory({ playAudio, playingId }: { playAudio: (text: string, id: string, lang?: string) => void, playingId: string | null }) {
  const GRAMMAR_INTRO_SCRIPT = `Xin chào các bạn. Trọng tâm ngữ pháp của bài 9 là So sánh hơn (Komparativ) và So sánh nhất (Superlativ) của tính từ và trạng từ. 

Thứ nhất, ở Cấp độ So sánh hơn, chúng ta thêm đuôi "-er" vào sau tính từ và dùng thêm từ "als" để so sánh hai sự vật. Ví dụ: "Ein BMW ist schneller als ein Toyota" (Một chiếc xe BMW nhanh hơn một chiếc Toyota). Một số tính từ ngắn có chứa a, o, hay u sẽ cần thêm Umlaut, ví dụ: "alt" thành "älter". Các từ đặc biệt cần nhớ là "gut" thành "besser", "viel" thành "mehr", và "gern" thành "lieber".

Thứ hai, ở Cấp độ So sánh nhất, chúng ta dùng cụm "am ...sten". Ví dụ: "Mein Auto ist am schnellsten". Nếu tính từ kết thúc bằng d, t, s, ss, hay z, ta sẽ thêm "-esten" để dễ đọc, chẳng hạn như "am neuesten". Các trường hợp bất quy tắc ở dạng so sánh nhất là: "gut" thành "am besten", "viel" thành "am meisten", và "gern" thành "am liebsten". So sánh nhất giúp bạn nhấn mạnh sự vượt trội nhất trong một nhóm. Các bạn hãy học kĩ các quy tắc này nhé!`;

  return (
    <div className="space-y-8 pb-12 animate-fade-in max-w-4xl mx-auto">
      <div className="flex max-md:flex-col items-center justify-center gap-4 mb-8">
        <h2 className="text-3xl font-black text-theme-dark uppercase tracking-tight text-center bg-white/50 py-4 rounded-3xl inline-block px-8 border-2 border-white shadow-sm mb-0">
          Lý thuyết Ngữ pháp
        </h2>
        <div className="flex items-center gap-3 bg-white pl-2 pr-5 py-1.5 rounded-full shadow-sm border-2 border-theme-secondary/20">
          <button 
            onClick={() => playAudio(GRAMMAR_INTRO_SCRIPT, 'l9-grammar-intro', 'vi-VN')} 
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-all ${playingId === 'l9-grammar-intro' ? 'bg-theme-secondary text-white shadow-theme-secondary/30 shadow-lg animate-pulse' : 'bg-theme-secondary/10 text-theme-secondary hover:bg-theme-secondary hover:text-white'}`}
            title="Nghe Bài giảng Ngữ pháp (Tiếng Việt)"
          >
            {playingId === 'l9-grammar-intro' ? <Volume2 size={20} /> : <Volume2 size={20} />}
          </button>
          <span className="text-sm font-bold text-theme-secondary uppercase tracking-widest">
            Audio giới thiệu Lektion 9
          </span>
        </div>
      </div>
      
      {/* PHẦN 1: KOMPARATIV */}
      <section className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-sm border-4 border-white overflow-hidden relative group">
        <div className="absolute top-0 left-0 w-full h-2 bg-blue-400 group-hover:h-3 transition-all"></div>
        <h3 className="text-2xl font-black text-blue-500 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
            <BookOpen size={20} className="text-blue-600" />
          </div>
          1. So sánh hơn (Komparativ)
        </h3>
        
        <p className="text-lg text-theme-dark/80 mb-6 leading-relaxed font-medium">
          Dùng để so sánh <strong>2 đối tượng</strong>. Tính từ ở dạng so sánh hơn được thêm đuôi <strong>-er</strong> và kết hợp với từ <strong>als</strong> (hơn).
        </p>

        <div className="bg-blue-50/50 rounded-3xl p-6 border-2 border-blue-100 relative mb-6">
          <h4 className="text-xl font-bold text-blue-600 mb-4 pb-2 border-b-2 border-blue-200">
            Cấu trúc: Tính từ + er + als
          </h4>
          <ul className="space-y-4 font-medium">
            <li className="flex gap-2 flex-col bg-white p-4 rounded-xl shadow-sm">
              <span className="text-lg"><strong className="text-theme-dark">Ein BMW ist </strong><strong className="text-blue-600">schneller als</strong> ein Toyota.</span>
              <span className="text-theme-dark/60 italic text-sm">(Một chiếc BMW nhanh hơn một chiếc Toyota.)</span>
            </li>
            <li className="flex gap-2 flex-col bg-white p-4 rounded-xl shadow-sm">
              <span className="text-lg"><strong className="text-theme-dark">Die Produktion in Deutschland ist </strong><strong className="text-blue-600">teurer als</strong> in Vietnam.</span>
              <span className="text-theme-dark/60 italic text-sm">(Việc sản xuất ở Đức thì đắt đỏ hơn ở Việt Nam.)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* PHẦN 2: SUPERLATIV */}
      <section className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-sm border-4 border-white overflow-hidden relative group">
        <div className="absolute top-0 left-0 w-full h-2 bg-emerald-400 group-hover:h-3 transition-all"></div>
        <h3 className="text-2xl font-black text-emerald-500 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <BookOpen size={20} className="text-emerald-600" />
          </div>
          2. So sánh nhất (Superlativ)
        </h3>
        
        <p className="text-lg text-theme-dark/80 mb-6 leading-relaxed font-medium">
          Dùng để so sánh từ <strong>3 đối tượng</strong> trở lên, nhằm tìm ra cái đứng đầu. Ta thêm <strong>am ...sten</strong>.
        </p>

        <div className="bg-emerald-50/50 rounded-3xl p-6 border-2 border-emerald-100 relative mb-6">
          <h4 className="text-xl font-bold text-emerald-600 mb-4 pb-2 border-b-2 border-emerald-200">
            Cấu trúc: am + Tính từ + sten
          </h4>
          <p className="text-theme-dark/70 mb-4 font-bold bg-white p-3 rounded-xl border-l-4 border-emerald-400">
            Lưu ý: Nếu tính từ kết thúc bằng -d, -t, -s, -ß, -z thì thêm đuôi "-esten" (ví dụ: am neuesten).
          </p>
          <ul className="space-y-4 font-medium">
            <li className="flex gap-2 flex-col bg-white p-4 rounded-xl shadow-sm">
              <span className="text-lg"><strong className="text-theme-dark">Porsche ist </strong><strong className="text-emerald-600">am schnellsten.</strong></span>
              <span className="text-theme-dark/60 italic text-sm">(Porsche là nhanh nhất.)</span>
            </li>
            <li className="flex gap-2 flex-col bg-white p-4 rounded-xl shadow-sm">
              <span className="text-lg"><strong className="text-theme-dark">Die Maschine ist </strong><strong className="text-emerald-600">am neuesten.</strong></span>
              <span className="text-theme-dark/60 italic text-sm">(Cỗ máy này là mới nhất.)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Tóm tắt */}
      <section className="bg-violet-50/50 rounded-[2.5rem] p-6 shadow-sm border-2 border-violet-100 flex items-start gap-4 mx-4 md:mx-0">
        <div className="p-3 bg-violet-100 rounded-2xl flex-shrink-0 text-violet-600">
          <AlertTriangle size={24} />
        </div>
        <div className="w-full">
          <h4 className="font-bold text-violet-800 text-lg mb-4 flex items-center justify-between">
            <span>QUY TẮC & TRƯỜNG HỢP BẤT QUY TẮC</span>
          </h4>
          <div className="bg-white p-4 rounded-xl border-2 border-violet-100 overflow-x-auto">
             <table className="w-full text-left font-medium text-theme-dark min-w-[500px]">
               <thead>
                 <tr className="border-b-2 border-violet-100 text-violet-700">
                   <th className="pb-3 px-4">Positiv (Gốc)</th>
                   <th className="pb-3 px-4">Komparativ (Hơn)</th>
                   <th className="pb-3 px-4">Superlativ (Nhất)</th>
                 </tr>
               </thead>
               <tbody>
                  {/* Có quy tắc */}
                 <tr className="border-b border-violet-50">
                    <td className="py-3 px-4 font-bold text-gray-700">schnell (nhanh)</td>
                    <td className="py-3 px-4 text-blue-600 font-bold">schneller</td>
                    <td className="py-3 px-4 text-emerald-600 font-bold">am schnellsten</td>
                 </tr>
                 <tr className="border-b border-violet-50 bg-violet-50/30">
                    <td className="py-3 px-4 font-bold text-gray-700">billig (rẻ)</td>
                    <td className="py-3 px-4 text-blue-600 font-bold">billiger</td>
                    <td className="py-3 px-4 text-emerald-600 font-bold">am billigsten</td>
                 </tr>
                 
                 {/* Thêm Umlaut */}
                 <tr className="border-b-2 border-violet-100">
                    <td colSpan={3} className="py-2 px-4 text-xs font-black tracking-widest text-violet-400 uppercase">Thêm Umlaut (ä, ö, ü)</td>
                 </tr>
                 <tr className="border-b border-violet-50">
                    <td className="py-3 px-4 font-bold text-gray-700">alt (cũ/già)</td>
                    <td className="py-3 px-4 text-blue-600 font-bold">älter</td>
                    <td className="py-3 px-4 text-emerald-600 font-bold">am ältesten</td>
                 </tr>
                 <tr className="border-b border-violet-50 bg-violet-50/30">
                    <td className="py-3 px-4 font-bold text-gray-700">groß (lớn)</td>
                    <td className="py-3 px-4 text-blue-600 font-bold">größer</td>
                    <td className="py-3 px-4 text-emerald-600 font-bold">am größten</td>
                 </tr>

                 {/* Bất quy tắc */}
                 <tr className="border-b-2 border-violet-100">
                    <td colSpan={3} className="py-2 px-4 text-xs font-black tracking-widest text-rose-500 uppercase">Bất quy tắc (Bắt buộc thuộc)</td>
                 </tr>
                 <tr className="border-b border-rose-50 bg-rose-50/30">
                    <td className="py-3 px-4 font-black text-rose-700">gut (tốt)</td>
                    <td className="py-3 px-4 text-blue-600 font-black">besser</td>
                    <td className="py-3 px-4 text-emerald-600 font-black">am besten</td>
                 </tr>
                 <tr className="border-b border-rose-50 bg-rose-50/30">
                    <td className="py-3 px-4 font-black text-rose-700">viel (nhiều)</td>
                    <td className="py-3 px-4 text-blue-600 font-black">mehr</td>
                    <td className="py-3 px-4 text-emerald-600 font-black">am meisten</td>
                 </tr>
                 <tr className="border-b border-rose-50 bg-rose-50/30">
                    <td className="py-3 px-4 font-black text-rose-700">gern (thích)</td>
                    <td className="py-3 px-4 text-blue-600 font-black">lieber</td>
                    <td className="py-3 px-4 text-emerald-600 font-black">am liebsten</td>
                 </tr>
                 <tr className="bg-rose-50/30">
                    <td className="py-3 px-4 font-black text-rose-700">hoch (cao)</td>
                    <td className="py-3 px-4 text-blue-600 font-black">höher</td>
                    <td className="py-3 px-4 text-emerald-600 font-black">am höchsten</td>
                 </tr>
               </tbody>
             </table>
          </div>
        </div>
      </section>

    </div>
  );
}
