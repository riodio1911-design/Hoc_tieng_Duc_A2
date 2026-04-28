import React from 'react';
import { motion } from 'motion/react';
import { Info, Play } from 'lucide-react';

export default function Lektion14GrammarTheory({ playAudio, playingId }: { playAudio: (text: string, id: string, lang?: string) => void, playingId: string | null }) {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-rose-500 mb-2">Ngữ pháp Lektion 14 (Grammatik)</h2>
        <p className="text-theme-dark/60 font-medium">Thể Bị Động ở Hiện Tại (Passiv Präsens)</p>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-rose-500/10">
        <h3 className="text-2xl font-bold text-rose-600 mb-4 flex items-center gap-2">
          <span>1. Cấu trúc câu Passiv (Bị động)</span>
        </h3>
        
        <div className="space-y-6 text-lg text-theme-dark">
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
             <p className="font-bold text-rose-700 text-xl text-center mb-2">werden + Partizip II (Động từ chia phân từ 2)</p>
             <p className="text-center text-sm text-theme-dark/70">Động từ "werden" chia theo chủ ngữ, "Partizip II" đứng ở CUỐI CÂU.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
             <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-400">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">Câu Chủ Động (Aktiv)</p>
                <div className="font-medium">
                  <span className="text-slate-700">Frau Brugger</span> <span className="text-blue-600 font-bold">backt</span> <span className="text-rose-600 font-bold">die Lebkuchen</span>.
                </div>
                <p className="text-sm mt-1">Bà Brugger nướng những chiếc bánh Lebkuchen.</p>
             </div>
             
             <div className="bg-rose-50 p-4 rounded-xl border-l-4 border-rose-500">
                <p className="text-xs text-rose-500 font-bold uppercase tracking-widest mb-2">Câu Bị Động (Passiv)</p>
                <button onClick={() => playAudio('Die Lebkuchen werden gebacken.', 'l14_g1')} className="flex items-start gap-2 hover:opacity-80 transition-opacity w-full text-left">
                  <Play size={18} className={`shrink-0 mt-1 ${playingId === 'l14_g1' ? 'text-rose-500 animate-pulse' : 'text-slate-400'}`} />
                  <div>
                    <div className="font-medium">
                      <span className="text-rose-600 font-bold">Die Lebkuchen</span> <span className="text-blue-600 font-black">werden</span> <span className="text-emerald-600 font-black">gebacken</span>.
                    </div>
                    <p className="text-sm text-slate-500 mt-1">Những chiếc bánh Lebkuchen được nướng.</p>
                  </div>
                </button>
             </div>
          </div>
          
          <p className="text-sm bg-blue-50 text-blue-700 p-4 rounded-lg flex items-start gap-3 leading-relaxed">
             <Info size={20} className="shrink-0 mt-0.5" />
             <span>
               <span className="font-bold">Cách dùng:</span> Câu bị động nhấn mạnh vào <strong>HÀNH ĐỘNG</strong> (die Handlung) hoặc <strong>QUÁ TRÌNH</strong>. Người thực hiện hành động (Frau Brugger) trở nên KHÔNG quan trọng và thường bị lược bỏ trong câu Passiv.
             </span>
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-emerald-500/10">
        <h3 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center gap-2">
          <span>2. Bảng chia động từ "werden"</span>
        </h3>
        
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
           <table className="w-full text-left border-collapse">
             <thead>
               <tr className="bg-slate-100 text-slate-700">
                 <th className="p-4 border-b border-slate-200 font-bold">Ngôi (Subjekt)</th>
                 <th className="p-4 border-b border-slate-200 font-bold text-emerald-600">werden</th>
                 <th className="p-4 border-b border-slate-200 font-bold text-slate-500">Ví dụ (Beispiel)</th>
               </tr>
             </thead>
             <tbody className="text-lg font-medium text-theme-dark">
               <tr className="border-b border-slate-100">
                 <td className="p-4">ich</td>
                 <td className="p-4 text-emerald-600 font-black">werde</td>
                 <td className="p-4 text-base font-normal">Ich werde operiert. (Tôi được phẫu thuật.)</td>
               </tr>
               <tr className="border-b border-slate-100 bg-slate-50">
                 <td className="p-4">du</td>
                 <td className="p-4 text-emerald-600 font-black">wirst</td>
                 <td className="p-4 text-base font-normal">Du wirst informiert. (Bạn sẽ được thông báo.)</td>
               </tr>
               <tr className="border-b border-slate-100 bg-rose-50">
                 <td className="p-4 font-bold text-rose-700">er/sie/es (Singular)</td>
                 <td className="p-4 text-rose-600 font-black">wird</td>
                 <td className="p-4 text-base font-normal">
                    <button onClick={() => playAudio('Das Päckchen wird gepackt.', 'l14_g2')} className="flex items-center gap-2 hover:opacity-75">
                      <Play size={14} className="text-rose-400"/> Das Päckchen <strong>wird</strong> gepackt.
                    </button>
                 </td>
               </tr>
               <tr className="border-b border-slate-100">
                 <td className="p-4">wir</td>
                 <td className="p-4 text-emerald-600 font-black">werden</td>
                 <td className="p-4 text-base font-normal">-</td>
               </tr>
               <tr className="border-b border-slate-100 bg-slate-50">
                 <td className="p-4">ihr</td>
                 <td className="p-4 text-emerald-600 font-black">werdet</td>
                 <td className="p-4 text-base font-normal">-</td>
               </tr>
               <tr className="bg-rose-50">
                 <td className="p-4 font-bold text-rose-700">sie/Sie (Plural)</td>
                 <td className="p-4 text-rose-600 font-black">werden</td>
                 <td className="p-4 text-base font-normal">
                    <button onClick={() => playAudio('Die Geschenke werden in den Karton gelegt.', 'l14_g3')} className="flex items-center gap-2 hover:opacity-75">
                      <Play size={14} className="text-rose-400"/> Die Geschenke <strong>werden</strong>...
                    </button>
                 </td>
               </tr>
             </tbody>
           </table>
        </div>
      </div>
      
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-indigo-500/10">
        <h3 className="text-2xl font-bold text-indigo-600 mb-6 flex items-center gap-2">
          <span>3. Passiv để mô tả quy trình (Prozess beschreiben)</span>
        </h3>
        <p className="text-lg font-medium text-slate-600 mb-4">Câu bị động cực kỳ phổ biến khi mô tả các bước thực hiện một công việc (ví dụ: quy trình gửi bưu kiện, nấu ăn).</p>
        
        <div className="space-y-4">
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex items-start gap-4">
             <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold shrink-0">1</div>
             <div>
                <p className="font-bold text-lg text-theme-dark">Zuerst <span className="text-rose-600">wird</span> der Karton <span className="text-emerald-600">beklebt</span>.</p>
                <p className="text-slate-500 text-sm">Đầu tiên vỏ hộp được dán kín.</p>
             </div>
          </div>
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex items-start gap-4">
             <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold shrink-0">2</div>
             <div>
                <p className="font-bold text-lg text-theme-dark">Dann <span className="text-rose-600">wird</span> das Etikett <span className="text-emerald-600">aufgeklebt</span>.</p>
                <p className="text-slate-500 text-sm">Sau đó dán nhãn lên trên.</p>
             </div>
          </div>
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex items-start gap-4">
             <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold shrink-0">3</div>
             <div>
                <p className="font-bold text-lg text-theme-dark">Schließlich <span className="text-rose-600">wird</span> das Päckchen <span className="text-emerald-600">gepackt</span>.</p>
                <p className="text-slate-500 text-sm">Kết cục là gói hàng nhỏ được gói lại.</p>
             </div>
          </div>
        </div>
        <p className="text-sm bg-amber-50 text-amber-800 p-3 mt-4 rounded-lg font-medium border border-amber-200">
           Chú ý: Các trạng từ chỉ kết nối thời gian (Zuerst, Dann, Danach, Später, Schließlich, Zuletzt) thường đứng ở vị trí đầu câu, và liền ngay sau nó là động từ "werden" vị trí số 2.
        </p>
      </div>
    </div>
  );
}
