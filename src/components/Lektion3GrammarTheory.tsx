import React from 'react';
import { motion } from 'motion/react';
import { Info, Play } from 'lucide-react';

export default function Lektion3GrammarTheory({ playAudio, playingId }: { playAudio: (text: string, id: string, lang?: string) => void, playingId: string | null }) {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-emerald-600 mb-2">Ngữ pháp Lektion 3 (Grammatik)</h2>
        <p className="text-theme-dark/60 font-medium">Danh từ hóa (Nomenbildung: -ung, -er)</p>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-emerald-500/10">
        <h3 className="text-2xl font-bold text-emerald-600 mb-4 flex items-center gap-2">
          <span>1. Verb &rarr; Nomen mit -ung (Danh từ chỉ sự việc/quá trình)</span>
        </h3>
        
        <div className="space-y-6 text-lg text-theme-dark">
          <p className="font-medium">Nhiều động từ trong tiếng Đức có thể được chuyển thành danh từ bằng cách bỏ đuôi "-en" và thêm hậu tố <span className="font-bold text-rose-500">-ung</span>.</p>
          
          <div className="bg-rose-50 p-4 rounded-xl border border-rose-200">
             <p className="font-black text-rose-700 text-center text-xl mb-1">
               WICHTIG (Quan trọng)!
             </p>
             <p className="text-center font-bold text-rose-900">
               Tất cả các danh từ kết thúc bằng đuôi <span className="bg-rose-200 px-1 rounded">-ung</span> đều có giống cái (<span className="text-rose-600">die</span>) và số nhiều thêm -en.
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
             {[
               { v: 'sich erholen', n: 'die Erholung', vi: 'thư giãn', ni: 'sự thư giãn' },
               { v: 'beraten', n: 'die Beratung', vi: 'tư vấn', ni: 'sự tư vấn' },
               { v: 'erfahren', n: 'die Erfahrung', vi: 'trải nghiệm', ni: 'kinh nghiệm' },
               { v: 'wandern', n: 'die Wanderung', vi: 'đi bộ đường dài', ni: 'chuyến đi bộ đd' },
               { v: 'übernachten', n: 'die Übernachtung', vi: 'ngủ qua đêm', ni: 'việc ngủ lại' },
               { v: 'anmelden', n: 'die Anmeldung', vi: 'đăng ký', ni: 'sự đăng ký' },
               { v: 'entspannen', n: 'die Entspannung', vi: 'thư giãn', ni: 'sự thư giãn' },
               { v: 'ausrüsten', n: 'die Ausrüstung', vi: 'trang bị', ni: 'trang thiết bị' }
             ].map((pair, i) => (
                <div key={i} className="flex flex-col p-4 bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden group">
                   <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400 group-hover:w-2 transition-all" />
                   <div className="flex items-center justify-between pl-2">
                     <div>
                       <p className="font-medium text-slate-500 line-through decoration-rose-500 decoration-2">{pair.v}</p>
                       <p className="text-xs text-slate-400 mb-2">{pair.vi}</p>
                     </div>
                     <span className="font-bold text-slate-300 mx-2">➡️</span>
                     <div className="text-right">
                       <p className="font-black text-rose-600">{pair.n}</p>
                       <p className="text-xs font-bold text-rose-800/60">{pair.ni}</p>
                     </div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-blue-500/10">
        <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
          <span>2. Verb &rarr; Nomen mit -er (Danh từ chỉ người hoặc thiết bị)</span>
        </h3>
        
        <div className="space-y-6 text-lg text-theme-dark">
          <p className="font-medium">Khi thêm đuôi <span className="font-bold text-blue-500">-er</span> vào sau gốc động từ, ta tạo được danh từ chỉ người thực hiện hành động đó (hoặc đôi khi chỉ một thiết bị, máy móc).</p>
          
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
             <p className="font-black text-blue-700 text-center text-xl mb-1">
               WICHTIG (Quan trọng)!
             </p>
             <p className="text-center font-bold text-blue-900">
               Danh từ chỉ người (nam) kết thúc bằng <span className="bg-blue-200 px-1 rounded">-er</span> luôn mang giống đực (<span className="text-blue-600">der</span>).
               <br />
               Nếu chỉ người nữ, ta thêm đuôi <span className="bg-rose-200 px-1 rounded text-rose-700">-in</span> (die Verkäuferin).
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
             {[
               { v: 'fahren', n: 'der Fahrer', vi: 'lái xe', ni: 'tài xế' },
               { v: 'wandern', n: 'der Wanderer', vi: 'đi bộ', ni: 'người đi bộ đd' },
               { v: 'verkaufen', n: 'der Verkäufer', vi: 'bán hàng', ni: 'người bán hàng' },
               { v: 'beraten', n: 'der Berater', vi: 'tư vấn', ni: 'người cố vấn' },
               { v: 'vermieten', n: 'der Vermieter', vi: 'cho thuê', ni: 'người cho thuê' },
               { v: 'spielen', n: 'der Spieler', vi: 'chơi', ni: 'người chơi' }
             ].map((pair, i) => (
                <div key={i} className="flex flex-col p-4 bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden group">
                   <div className="absolute top-0 left-0 w-1 h-full bg-blue-400 group-hover:w-2 transition-all" />
                   <div className="flex items-center justify-between pl-2">
                     <div>
                       <p className="font-medium text-slate-500">{pair.v}</p>
                       <p className="text-xs text-slate-400 mb-2">{pair.vi}</p>
                     </div>
                     <span className="font-bold text-slate-300 mx-2">➡️</span>
                     <div className="text-right">
                       <p className="font-black text-blue-600">{pair.n}</p>
                       <p className="text-xs font-bold text-blue-800/60">{pair.ni}</p>
                     </div>
                   </div>
                </div>
             ))}
          </div>
          
          <div className="mt-8 p-4 bg-slate-100 rounded-xl border border-slate-300">
             <h4 className="font-bold mb-3 flex items-center gap-2"><Info className="w-5 h-5" /> Sự phân biệt thú vị:</h4>
             <table className="w-full text-left text-sm md:text-base border-collapse bg-white rounded-lg overflow-hidden">
                <thead><tr className="bg-slate-200"><th className="p-3">Verb</th><th className="p-3">Nomen (-ung)</th><th className="p-3">Nomen (-er)</th></tr></thead>
                <tbody>
                   <tr className="border-b"><td className="p-3 font-medium text-slate-600 border-r">beraten (tư vấn)</td><td className="p-3 text-rose-600 font-bold border-r">die Beratung (sự tư vấn)</td><td className="p-3 text-blue-600 font-bold">der Berater (người cố vấn)</td></tr>
                   <tr className="border-b"><td className="p-3 font-medium text-slate-600 border-r">abholen (đón)</td><td className="p-3 text-rose-600 font-bold border-r">die Abholung (việc đón)</td><td className="p-3 text-blue-600 font-bold">-</td></tr>
                   <tr><td className="p-3 font-medium text-slate-600 border-r">vermieten (cho thuê)</td><td className="p-3 text-rose-600 font-bold border-r">die Vermietung (việc cho thuê)</td><td className="p-3 text-blue-600 font-bold">der Vermieter (chủ cho thuê)</td></tr>
                </tbody>
             </table>
          </div>
        </div>
      </div>
    </div>
  );
}
