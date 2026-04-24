import React from 'react';
import { Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion17GrammarTheory({ playAudio, playingId }: Props) {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-amber-500 mb-2">Ngữ pháp (Grammatik)</h2>
        <p className="text-theme-dark/60 font-medium">Lokale Präpositionen: Wohin vs Wo</p>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-amber-500/10">
         <h3 className="text-2xl font-black text-amber-600 mb-6">1. Phân biệt Wohin? và Wo?</h3>
         <p className="text-theme-dark/80 font-medium mb-6">
           Với một số giới từ chỉ nơi chốn (Wechselpräpositionen), cách chia sẽ thay đổi tùy thuộc vào việc có sự di chuyển hay không:
         </p>
         <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-6 rounded-2xl border-2 border-amber-200">
               <h4 className="text-xl font-bold text-amber-700 mb-2">Wohin? (Đi đâu)</h4>
               <p className="text-amber-800 font-medium mb-4">Chỉ sự chuyển động hướng tới mục tiêu.</p>
               <span className="inline-block px-4 py-1 bg-amber-200 text-amber-800 font-bold rounded-full mb-4">+ Akkusativ</span>
               <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                     <span className="text-amber-500 mt-1">▶</span>
                     <span>Wir fahren <span className="font-bold text-amber-700">an den</span> Strand.</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <span className="text-amber-500 mt-1">▶</span>
                     <span>Ich gehe <span className="font-bold text-amber-700">in den</span> Wald.</span>
                  </li>
               </ul>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200">
               <h4 className="text-xl font-bold text-slate-700 mb-2">Wo? (Ở đâu)</h4>
               <p className="text-slate-600 font-medium mb-4">Chỉ vị trí hiện tại, đứng yên.</p>
               <span className="inline-block px-4 py-1 bg-slate-200 text-slate-700 font-bold rounded-full mb-4">+ Dativ</span>
               <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                     <span className="text-slate-500 mt-1">▶</span>
                     <span>Wir liegen <span className="font-bold text-slate-700">am</span> Strand.</span>
                  </li>
                  <li className="flex items-start gap-2">
                     <span className="text-slate-500 mt-1">▶</span>
                     <span>Ich bin <span className="font-bold text-slate-700">im</span> Wald.</span>
                  </li>
               </ul>
            </div>
         </div>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-amber-500/10">
         <h3 className="text-2xl font-black text-amber-600 mb-6">2. Bảng quy chiếu Địa điểm</h3>
         
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr>
                     <th className="p-4 bg-slate-100 font-bold text-slate-600 rounded-tl-2xl">Địa điểm</th>
                     <th className="p-4 bg-amber-100 font-bold text-amber-700">Wohin? (Akkusativ)</th>
                     <th className="p-4 bg-slate-100 font-bold text-slate-600 rounded-tr-2xl">Wo? (Dativ)</th>
                  </tr>
               </thead>
               <tbody className="font-medium text-theme-dark">
                  <tr className="border-b border-slate-100 border-x">
                     <td className="p-4 font-bold">Biển / Cát bờ</td>
                     <td className="p-4">
                        <span className="text-amber-600 font-bold">ans</span> Meer / <span className="text-amber-600 font-bold">an den</span> Strand / <span className="text-amber-600 font-bold">an die</span> Küste
                     </td>
                     <td className="p-4">
                        <span className="text-slate-600 font-bold">am</span> Meer / <span className="text-slate-600 font-bold">am</span> Strand / <span className="text-slate-600 font-bold">an der</span> Küste
                     </td>
                  </tr>
                  <tr className="border-b border-slate-100 border-x">
                     <td className="p-4 font-bold">Rừng / Hướng Nam</td>
                     <td className="p-4">
                        <span className="text-amber-600 font-bold">in den</span> Wald / <span className="text-amber-600 font-bold">in den</span> Süden
                     </td>
                     <td className="p-4">
                        <span className="text-slate-600 font-bold">im</span> Wald / <span className="text-slate-600 font-bold">im</span> Süden
                     </td>
                  </tr>
                  <tr className="border-b border-slate-100 border-x">
                     <td className="p-4 font-bold">Dãy núi</td>
                     <td className="p-4">
                        <span className="text-amber-600 font-bold">in die</span> Berge / <span className="text-amber-600 font-bold">ins</span> Gebirge
                     </td>
                     <td className="p-4">
                        <span className="text-slate-600 font-bold">in den</span> Bergen / <span className="text-slate-600 font-bold">im</span> Gebirge
                     </td>
                  </tr>
                  <tr className="border-b border-slate-100 border-x">
                     <td className="p-4 font-bold">Đảo / Nông thôn</td>
                     <td className="p-4">
                        <span className="text-amber-600 font-bold">auf eine</span> Insel / <span className="text-amber-600 font-bold">aufs</span> Land
                     </td>
                     <td className="p-4">
                        <span className="text-slate-600 font-bold">auf einer</span> Insel / <span className="text-slate-600 font-bold">auf dem</span> Land
                     </td>
                  </tr>
                  <tr className="border-b border-slate-100 border-x">
                     <td className="p-4 font-bold">Quốc gia (không quán từ)</td>
                     <td className="p-4">
                        <span className="text-amber-600 font-bold">nach</span> Rumänien / <span className="text-amber-600 font-bold">nach</span> Berlin
                     </td>
                     <td className="p-4">
                        <span className="text-slate-600 font-bold">in</span> Rumänien / <span className="text-slate-600 font-bold">in</span> Berlin
                     </td>
                  </tr>
                  <tr className="border-b border-slate-100 border-x">
                     <td className="p-4 font-bold">Quốc gia (có quán từ)</td>
                     <td className="p-4">
                        <span className="text-amber-600 font-bold">in die</span> Schweiz
                     </td>
                     <td className="p-4">
                        <span className="text-slate-600 font-bold">in der</span> Schweiz
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
      
    </div>
  );
}
