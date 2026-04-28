import React from 'react';
import { motion } from 'motion/react';
import { Info, Play } from 'lucide-react';

export default function Lektion1GrammarTheory({ playAudio, playingId }: { playAudio: (text: string, id: string, lang?: string) => void, playingId: string | null }) {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-rose-500 mb-2">Ngữ pháp Lektion 1 (Grammatik)</h2>
        <p className="text-theme-dark/60 font-medium">Đại từ sở hữu (Possessivartikel) & Thì Quá khứ (Perfekt/Präteritum)</p>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-rose-500/10">
        <h3 className="text-2xl font-bold text-rose-600 mb-6 flex items-center gap-2">
          <span>1. Đại từ sở hữu (Possessivartikel)</span>
        </h3>
        
        <div className="space-y-6 text-lg text-theme-dark">
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
             <p className="font-bold text-rose-700 mb-2">Cách dùng:</p>
             <p className="leading-relaxed">
               - Đại từ sở hữu dùng để chỉ sự sở hữu (của ai).<br/>
               - Chúng biến cách tương tự như quán từ không xác định (ein/eine).<br/>
               - Lưu ý: Thêm đuôi <span className="font-bold text-rose-600">-e</span> đối với danh từ giống cái (die) và số nhiều (die Plural).
             </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="p-3 border-b-2 font-bold pointer-events-none">Đại từ nhân xưng</th>
                  <th className="p-3 border-b-2 font-bold">der (maskulin) / das (neutral)</th>
                  <th className="p-3 border-b-2 font-bold">die (feminin) / die (Plural)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold">ich</td>
                  <td className="p-3 text-rose-600 font-bold">mein <span className="text-sm font-normal text-slate-500">(Opa / Baby)</span></td>
                  <td className="p-3 text-rose-600 font-bold">meine <span className="text-sm font-normal text-slate-500">(Tante / Neffen)</span></td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold">du</td>
                  <td className="p-3 text-rose-600 font-bold">dein</td>
                  <td className="p-3 text-rose-600 font-bold">deine</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold">er / es</td>
                  <td className="p-3 text-rose-600 font-bold">sein</td>
                  <td className="p-3 text-rose-600 font-bold">seine</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold">sie</td>
                  <td className="p-3 text-rose-600 font-bold">ihr</td>
                  <td className="p-3 text-rose-600 font-bold">ihre</td>
                </tr>
                <tr className="bg-rose-50/50">
                  <td className="p-3 font-bold">wir</td>
                  <td className="p-3 text-rose-600 font-bold">unser</td>
                  <td className="p-3 text-rose-600 font-bold">unsere</td>
                </tr>
                <tr className="bg-rose-50/50">
                  <td className="p-3 font-bold">ihr</td>
                  <td className="p-3 text-rose-600 font-bold">euer</td>
                  <td className="p-3 text-rose-600 font-bold">eure <span className="text-xs text-rose-400 italic">(chú ý mất chữ 'e' ở giữa)</span></td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold">sie (Plural)</td>
                  <td className="p-3 text-rose-600 font-bold">ihr</td>
                  <td className="p-3 text-rose-600 font-bold">ihre</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold">Sie (Trang trọng)</td>
                  <td className="p-3 text-rose-600 font-bold">Ihr</td>
                  <td className="p-3 text-rose-600 font-bold">Ihre</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4 pt-4">
             <h4 className="font-bold text-lg border-b-2 border-rose-100 pb-2">Biến cách ở Akkusativ và Dativ</h4>
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse min-w-[500px] text-sm md:text-base">
                 <thead>
                   <tr className="bg-slate-100 text-slate-700">
                     <th className="p-2 md:p-3 border-b-2 font-bold pointer-events-none"></th>
                     <th className="p-2 md:p-3 border-b-2 font-bold">Nominativ (Das ist...)</th>
                     <th className="p-2 md:p-3 border-b-2 font-bold">Akkusativ (Ich sehe...)</th>
                     <th className="p-2 md:p-3 border-b-2 font-bold">Dativ (mit...)</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                   <tr>
                     <td className="p-2 md:p-3 font-bold text-slate-500">der</td>
                     <td className="p-2 md:p-3">mein Opa</td>
                     <td className="p-2 md:p-3 text-blue-600 font-bold">meinen Opa</td>
                     <td className="p-2 md:p-3 text-emerald-600 font-bold">meinem Opa</td>
                   </tr>
                   <tr>
                     <td className="p-2 md:p-3 font-bold text-slate-500">das</td>
                     <td className="p-2 md:p-3">mein Baby</td>
                     <td className="p-2 md:p-3">mein Baby</td>
                     <td className="p-2 md:p-3 text-emerald-600 font-bold">meinem Baby</td>
                   </tr>
                   <tr>
                     <td className="p-2 md:p-3 font-bold text-slate-500">die</td>
                     <td className="p-2 md:p-3">meine Tante</td>
                     <td className="p-2 md:p-3">meine Tante</td>
                     <td className="p-2 md:p-3 text-amber-600 font-bold">meiner Tante</td>
                   </tr>
                   <tr>
                     <td className="p-2 md:p-3 font-bold text-slate-500">die (Plural)</td>
                     <td className="p-2 md:p-3">meine Neffen</td>
                     <td className="p-2 md:p-3">meine Neffen</td>
                     <td className="p-2 md:p-3 text-purple-600 font-bold">meinen Neffen (+n)</td>
                   </tr>
                 </tbody>
               </table>
             </div>
             
             <p className="text-sm bg-blue-50 text-blue-700 p-3 rounded-lg flex items-start gap-2">
                <Info size={16} className="shrink-0 mt-0.5" />
                <span className="font-semibold">Lưu ý Dativ số nhiều: Danh từ (nếu chưa có s/n/en) thường được thêm "n" ở cuối, bên cạnh việc biến đổi quán từ thành -en.</span>
             </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-emerald-500/10">
        <h3 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center gap-2">
          <span>2. Thì Quá khứ: Perfekt & Präteritum (war/hatte)</span>
        </h3>
        
        <div className="space-y-6 text-lg text-theme-dark">
          <p className="font-medium text-slate-600">Ôn tập lại cách hình thành các động từ ở dạng quá khứ:</p>
          
          <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <h4 className="font-black text-emerald-700 text-xl mb-4 text-center">Perfekt (haben/sein + Partizip II)</h4>
                <ul className="space-y-3 font-medium text-sm md:text-base">
                  <li className="flex justify-between border-b border-emerald-200/50 pb-1"><span>machen</span> <span className="font-bold text-emerald-800">hat gemacht</span></li>
                  <li className="flex justify-between border-b border-emerald-200/50 pb-1"><span>anmachen</span> <span className="font-bold text-emerald-800">hat angemacht</span></li>
                  <li className="flex justify-between border-b border-emerald-200/50 pb-1"><span>telefonieren</span> <span className="font-bold text-emerald-800">hat telefoniert</span></li>
                  <li className="flex justify-between border-b border-emerald-200/50 pb-1"><span>erkennen</span> <span className="font-bold text-emerald-800">hat erkannt</span></li>
                  <li className="flex justify-between border-b border-emerald-200/50 pb-1"><span>fahren</span> <span className="font-bold text-emerald-800">ist gefahren</span></li>
                  <li className="flex justify-between"><span>passieren</span> <span className="font-bold text-emerald-800">ist passiert</span></li>
                </ul>
             </div>

             <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                <h4 className="font-black text-amber-700 text-xl mb-4 text-center">Präteritum (war / hatte)</h4>
                <p className="text-sm text-slate-600 mb-4 text-center">Động từ "sein" (thì là ở) và "haben" (có) thường được dùng ở thì Präteritum hơn Perfekt khi kể chuyện.</p>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="space-y-2 font-medium text-sm">
                    <li className="font-bold text-amber-800 border-b pb-1">sein &rarr; war</li>
                    <li>ich war</li>
                    <li>du warst</li>
                    <li>er/sie/es war</li>
                    <li>wir waren</li>
                    <li>ihr wart</li>
                    <li>sie/Sie waren</li>
                  </ul>
                   <ul className="space-y-2 font-medium text-sm">
                    <li className="font-bold text-amber-800 border-b pb-1">haben &rarr; hatte</li>
                    <li>ich hatte</li>
                    <li>du hattest</li>
                    <li>er/sie/es hatte</li>
                    <li>wir hatten</li>
                    <li>ihr hattet</li>
                    <li>sie/Sie hatten</li>
                  </ul>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-indigo-500/10">
        <h3 className="text-2xl font-bold text-indigo-600 mb-6 flex items-center gap-2">
          <span>3. Trình tự thời gian (Reihenfolge angeben)</span>
        </h3>
        <p className="text-lg font-medium text-slate-600 mb-6">Khi kể một câu chuyện dài, chúng ta dùng các từ nối để chỉ trình tự các sự việc:</p>
        <div className="flex flex-wrap gap-4 items-center justify-center">
            <span className="px-4 py-2 bg-indigo-100 text-indigo-800 font-bold rounded-lg shadow-sm">zuerst</span>
            <span className="text-slate-400 font-bold">&rarr;</span>
            <span className="px-4 py-2 bg-indigo-100 text-indigo-800 font-bold rounded-lg shadow-sm">dann</span>
            <span className="text-slate-400 font-bold">&rarr;</span>
            <span className="px-4 py-2 bg-indigo-100 text-indigo-800 font-bold rounded-lg shadow-sm">danach</span>
            <span className="text-slate-400 font-bold">&rarr;</span>
            <span className="px-4 py-2 bg-indigo-100 text-indigo-800 font-bold rounded-lg shadow-sm">zum Schluss</span>
        </div>
        <p className="text-center mt-6 text-sm text-slate-500">
           Ví dụ: <br/> 
           <span className="font-bold">Zuerst</span> habe ich studiert. <span className="font-bold">Dann</span> habe ich einen Job gefunden. <span className="font-bold">Danach</span> habe ich geheiratet. Und <span className="font-bold">zum Schluss</span> haben wir ein Kind bekommen.
        </p>
      </div>
    </div>
  );
}
