import React from 'react';
import { motion } from 'motion/react';
import { Info, Play } from 'lucide-react';

export default function Lektion2GrammarTheory({ playAudio, playingId }: { playAudio: (text: string, id: string, lang?: string) => void, playingId: string | null }) {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-rose-500 mb-2">Ngữ pháp Lektion 2 (Grammatik)</h2>
        <p className="text-theme-dark/60 font-medium">Giới từ chỉ vị trí (Wechselpräpositionen) & Động từ chỉ vị trí</p>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-rose-500/10">
        <h3 className="text-2xl font-bold text-rose-600 mb-6 flex items-center gap-2">
          <span>1. Giới từ chỉ vị trí (Wechselpräpositionen)</span>
        </h3>
        
        <div className="space-y-6 text-lg text-theme-dark">
          <p className="font-medium">Có 9 giới từ chỉ vị trí có thể đi kèm với cả <span className="font-bold text-emerald-600">Dativ</span> và <span className="font-bold text-blue-600">Akkusativ</span>:</p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {['an', 'auf', 'hinter', 'in', 'neben', 'über', 'unter', 'vor', 'zwischen'].map((prep) => (
              <span key={prep} className="px-4 py-2 bg-slate-100 rounded-lg font-bold text-slate-700 border border-slate-200">
                {prep}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
             <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <h4 className="font-black text-emerald-700 text-xl mb-2 flex items-center gap-2">Câu hỏi: Wo?</h4>
                <p className="font-bold text-emerald-800 mb-4">(Ở đâu? - Chỉ vị trí tĩnh, không di chuyển)</p>
                <div className="space-y-2 font-medium text-sm md:text-base">
                  <p>Dùng với <span className="font-bold text-emerald-700 bg-emerald-200 px-1 rounded">Dativ</span>:</p>
                  <ul className="list-disc pl-5 text-emerald-900 space-y-1">
                    <li>der / das &rarr; <span className="font-bold border-b border-emerald-900">dem (einem)</span></li>
                    <li>die &rarr; <span className="font-bold border-b border-emerald-900">der (einer)</span></li>
                    <li>die(Pl) &rarr; <span className="font-bold border-b border-emerald-900">den (keinen) + n</span></li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-white rounded-xl border border-emerald-200/50">
                  <p className="italic text-slate-600 text-sm mb-1">Ví dụ:</p>
                  <p className="font-bold text-emerald-800">Wo steht das Buch?</p>
                  <p className="font-medium">Das Buch steht auf <span className="text-emerald-700 font-bold">dem</span> Tisch.</p>
                </div>
             </div>

             <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h4 className="font-black text-blue-700 text-xl mb-2 flex items-center gap-2">Câu hỏi: Wohin?</h4>
                <p className="font-bold text-blue-800 mb-4">(Đi về đâu? - Chỉ sự chuyển động/sắp xếp)</p>
                <div className="space-y-2 font-medium text-sm md:text-base">
                  <p>Dùng với <span className="font-bold text-blue-700 bg-blue-200 px-1 rounded">Akkusativ</span>:</p>
                  <ul className="list-disc pl-5 text-blue-900 space-y-1">
                    <li>der &rarr; <span className="font-bold border-b border-blue-900">den (einen)</span></li>
                    <li>das &rarr; <span className="font-bold border-b border-blue-900">das (ein)</span></li>
                    <li>die &rarr; <span className="font-bold border-b border-blue-900">die (eine)</span></li>
                    <li>die(Pl) &rarr; <span className="font-bold border-b border-blue-900">die (keine)</span></li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-white rounded-xl border border-blue-200/50">
                  <p className="italic text-slate-600 text-sm mb-1">Ví dụ:</p>
                  <p className="font-bold text-blue-800">Wohin legst du das Buch?</p>
                  <p className="font-medium">Ich lege das Buch auf <span className="text-blue-700 font-bold">den</span> Tisch.</p>
                </div>
             </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 flex items-start gap-3">
             <Info className="text-amber-600 shrink-0 mt-0.5" />
             <div>
               <p className="font-bold text-amber-800">Chú ý dạng rút gọn:</p>
               <p className="font-medium text-amber-900">in + dem = <span className="font-bold">im</span></p>
               <p className="font-medium text-amber-900">an + dem = <span className="font-bold">am</span></p>
               <p className="font-medium text-amber-900">in + das = <span className="font-bold">ins</span></p>
               <p className="font-medium text-amber-900">an + das = <span className="font-bold">ans</span></p>
             </div>
          </div>

        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-emerald-500/10">
        <h3 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center gap-2">
          <span>2. Động từ chỉ vị trí (Verben mit Wechselpräpositionen)</span>
        </h3>
        
        <div className="space-y-6 text-lg text-theme-dark">
          <p className="font-medium">Khi nói về vị trí đồ vật, tiếng Đức phân biệt rõ trạng thái (đang nằm/đứng/treo) và hành động (đặt nằm/đặt đứng/treo lên).</p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px] text-sm md:text-base">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="p-3 border-b-2 font-bold pointer-events-none w-1/2 rounded-tl-xl text-center border-r border-white">Động từ Trạng thái tĩnh (Wo? + Dativ)</th>
                  <th className="p-3 border-b-2 font-bold w-1/2 rounded-tr-xl text-center">Động từ Chỉ sự chuyển động (Wohin? + Akkusativ)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 border-r border-slate-100">
                     <p className="font-black text-rose-600 text-xl text-center mb-2">stehen</p>
                     <p className="text-center italic text-slate-500 mb-3">(đang đứng - vật có chân/đế)</p>
                     <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
                       <p className="font-bold"><span className="text-rose-600">Die Lampe steht</span> auf <span className="bg-rose-100 px-1 rounded">dem</span> Tisch.</p>
                       <p className="text-xs text-slate-500 mt-1">Cái đèn đang đứng trên bàn.</p>
                     </div>
                  </td>
                  <td className="p-4">
                     <p className="font-black text-blue-600 text-xl text-center mb-2">stellen</p>
                     <p className="text-center italic text-slate-500 mb-3">(hành động đặt đứng lên)</p>
                     <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
                       <p className="font-bold">Ich <span className="text-blue-600">stelle die Lampe</span> auf <span className="bg-blue-100 px-1 rounded">den</span> Tisch.</p>
                       <p className="text-xs text-slate-500 mt-1">Tôi đặt(đứng) cái đèn lên bàn.</p>
                     </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 bg-slate-50/50">
                  <td className="p-4 border-r border-slate-100">
                     <p className="font-black text-rose-600 text-xl text-center mb-2">liegen</p>
                     <p className="text-center italic text-slate-500 mb-3">(đang nằm - vật phẳng, ngang)</p>
                     <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
                       <p className="font-bold"><span className="text-rose-600">Das Buch liegt</span> auf <span className="bg-rose-100 px-1 rounded">dem</span> Bett.</p>
                       <p className="text-xs text-slate-500 mt-1">Cuốn sách đang nằm trên giường.</p>
                     </div>
                  </td>
                  <td className="p-4">
                     <p className="font-black text-blue-600 text-xl text-center mb-2">legen</p>
                     <p className="text-center italic text-slate-500 mb-3">(hành động đặt nằm xuống)</p>
                     <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
                       <p className="font-bold">Ich <span className="text-blue-600">lege das Buch</span> auf <span className="bg-blue-100 px-1 rounded">das</span> Bett.</p>
                       <p className="text-xs text-slate-500 mt-1">Tôi để/đặt(nằm) sách lên giường.</p>
                     </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 border-r border-slate-100">
                     <p className="font-black text-rose-600 text-xl text-center mb-2">hängen <span className="text-sm font-normal">(hat gehangen)</span></p>
                     <p className="text-center italic text-slate-500 mb-3">(đang được treo)</p>
                     <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
                       <p className="font-bold"><span className="text-rose-600">Das Bild hängt</span> an <span className="bg-rose-100 px-1 rounded">der</span> Wand.</p>
                       <p className="text-xs text-slate-500 mt-1">Bức tranh đang treo trên tường.</p>
                     </div>
                  </td>
                  <td className="p-4">
                     <p className="font-black text-blue-600 text-xl text-center mb-2">hängen <span className="text-sm font-normal">(hat gehängt)</span></p>
                     <p className="text-center italic text-slate-500 mb-3">(hành động móc/treo lên)</p>
                     <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
                       <p className="font-bold">Ich <span className="text-blue-600">hänge das Bild</span> an <span className="bg-blue-100 px-1 rounded">die</span> Wand.</p>
                       <p className="text-xs text-slate-500 mt-1">Tôi treo bức tranh lên tường.</p>
                     </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 bg-slate-50/50">
                  <td className="p-4 border-r border-slate-100">
                     <p className="font-black text-rose-600 text-xl text-center mb-2">sitzen</p>
                     <p className="text-center italic text-slate-500 mb-3">(đang ngồi)</p>
                     <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
                       <p className="font-bold"><span className="text-rose-600">Lara sitzt</span> auf <span className="bg-rose-100 px-1 rounded">dem</span> Stuhl.</p>
                       <p className="text-xs text-slate-500 mt-1">Lara đang ngồi trên ghế.</p>
                     </div>
                  </td>
                  <td className="p-4">
                     <p className="font-black text-blue-600 text-xl text-center mb-2">setzen (sich)</p>
                     <p className="text-center italic text-slate-500 mb-3">(hành động ngồi xuống)</p>
                     <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
                       <p className="font-bold">Lara <span className="text-blue-600">setzt sich</span> auf <span className="bg-blue-100 px-1 rounded">den</span> Stuhl.</p>
                       <p className="text-xs text-slate-500 mt-1">Lara bươc tới và ngồi xuống ghế.</p>
                     </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
