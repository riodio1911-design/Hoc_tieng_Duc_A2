import React from 'react';
import { motion } from 'motion/react';
import { Info, Play } from 'lucide-react';

export default function Lektion13GrammarTheory({ playAudio, playingId }: { playAudio: (text: string, id: string, lang?: string) => void, playingId: string | null }) {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-rose-500 mb-2">Ngữ pháp Lektion 13 (Grammatik)</h2>
        <p className="text-theme-dark/60 font-medium">Liên từ "als" và "wenn" trong Quá khứ</p>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-rose-500/10">
        <h3 className="text-2xl font-bold text-rose-600 mb-6 flex items-center gap-2">
          <span>1. Mệnh đề phụ với "als" (Nebensatz mit "als")</span>
        </h3>
        
        <div className="space-y-6 text-lg text-theme-dark">
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
             <p className="font-bold text-rose-700 mb-2">Quy tắc (Regel):</p>
             <p className="leading-relaxed">
               - Dùng <span className="font-bold text-rose-600 uppercase">als</span> (khi) cho sự việc đã xảy ra <strong>MỘT LẦN DUY NHẤT</strong> trong quá khứ hoặc một khoảng thời gian dài và liên tục (ví dụ: tuổi thơ, hồi đi học...).<br/>
               - Động từ trong câu phụ chứa "als" luôn phải bị đẩy xuống <strong>CUỐI CÂU</strong>.<br/>
             </p>
          </div>

          <div className="space-y-4 pt-4">
             <h4 className="font-bold text-lg border-b-2 border-rose-100 pb-2">A. Mệnh đề phụ đứng TRƯỚC mệnh đề chính</h4>
             <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-rose-400">
                <button onClick={() => playAudio('Als ich im vierten Semester war, habe ich das Stipendium bekommen.', 'l13_g1_1')} className="flex items-start gap-4 text-left w-full hover:opacity-80 transition-opacity">
                  <Play size={20} className={`shrink-0 mt-1 ${playingId === 'l13_g1_1' ? 'text-rose-500 animate-pulse' : 'text-slate-400'}`} />
                  <div>
                    <p className="font-medium">
                      <span className="text-rose-600 font-black">Als</span> ich im vierten Semester <span className="text-blue-600 font-bold underline">war</span>, <span className="text-blue-600 font-bold underline">habe</span> ich das Stipendium bekommen.
                    </p>
                    <p className="text-sm text-slate-500 mt-1">Khi tôi học kỳ 4, tôi đã nhận được học bổng.</p>
                  </div>
                </button>
             </div>
             <p className="text-sm bg-blue-50 text-blue-700 p-3 rounded-lg flex items-start gap-2">
                <Info size={16} className="shrink-0 mt-0.5" />
                <span className="font-semibold">Lưu ý: Mệnh đề chính phía sau phải đảo động từ lên đứng ngay sau dấu phẩy (V-Vị trí 1).</span>
             </p>
          </div>
          
          <div className="space-y-4 pt-4">
             <h4 className="font-bold text-lg border-b-2 border-rose-100 pb-2">B. Mệnh đề chính đứng TRƯỚC mệnh đề phụ</h4>
             <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-rose-400">
                <button onClick={() => playAudio('Ich habe das Stipendium bekommen, als ich im vierten Semester war.', 'l13_g1_2')} className="flex items-start gap-4 text-left w-full hover:opacity-80 transition-opacity">
                  <Play size={20} className={`shrink-0 mt-1 ${playingId === 'l13_g1_2' ? 'text-rose-500 animate-pulse' : 'text-slate-400'}`} />
                  <div>
                    <p className="font-medium">
                      Ich <span className="text-blue-600 font-bold">habe</span> das Stipendium bekommen, <span className="text-rose-600 font-black">als</span> ich im vierten Semester <span className="text-blue-600 font-bold underline">war</span>.
                    </p>
                    <p className="text-sm text-slate-500 mt-1">Tôi đã nhận được học bổng khi tôi học kỳ 4.</p>
                  </div>
                </button>
             </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-emerald-500/10">
        <h3 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center gap-2">
          <span>2. Sự khác biệt: "Als" vs. "Wenn"</span>
        </h3>
        
        <div className="space-y-6 text-lg text-theme-dark">
          <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                <h4 className="font-black text-rose-600 text-xl mb-2 text-center uppercase tracking-widest">ALS</h4>
                <p className="text-center font-bold text-slate-600 mb-4">Sự việc xảy ra 1 LẦN (Vergangenheit)</p>
                <button onClick={() => playAudio('Als Paul nach Berlin reiste, hat er sich in Marie verliebt.', 'l13_g2_1')} className="flex items-start gap-3 w-full hover:opacity-80 transition-opacity p-3 bg-white rounded-xl">
                  <Play size={18} className={`shrink-0 mt-1 ${playingId === 'l13_g2_1' ? 'text-rose-500 animate-pulse' : 'text-slate-400'}`} />
                  <div>
                    <p className="font-bold text-sm">
                      <span className="text-rose-600">Als</span> Paul nach Berlin reiste, hat er sich verliebt.
                    </p>
                    <p className="text-xs text-slate-500 mt-1">(Khi Paul đi du lịch tới Berlin, anh ấy đã biết yêu - Chỉ 1 chuyến đi cụ thể)</p>
                  </div>
                </button>
             </div>

             <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <h4 className="font-black text-emerald-600 text-xl mb-2 text-center uppercase tracking-widest">WENN</h4>
                <p className="text-center font-bold text-slate-600 mb-4">Sự việc LẶP LẠI nhiều lần (Vergangenheit/Gegenwart)</p>
                <button onClick={() => playAudio('Immer wenn Paul eine E-Mail bekommen hat, hat er auf Deutsch geantwortet.', 'l13_g2_2')} className="flex items-start gap-3 w-full hover:opacity-80 transition-opacity p-3 bg-white rounded-xl">
                  <Play size={18} className={`shrink-0 mt-1 ${playingId === 'l13_g2_2' ? 'text-emerald-500 animate-pulse' : 'text-slate-400'}`} />
                  <div>
                    <p className="font-bold text-sm">
                      <span className="text-emerald-600">Immer wenn</span> Paul eine E-Mail bekommen hat,...
                    </p>
                    <p className="text-xs text-slate-500 mt-1">(Bất cứ khi nào Paul nhận được email... - Xảy ra nhiều lần)</p>
                  </div>
                </button>
             </div>
          </div>
          <p className="bg-amber-50 p-4 border border-amber-200 rounded-xl font-medium text-amber-800 text-sm">
             <span className="font-bold">Mẹo (Tipp):</span> Trong quá khứ, nếu bạn thấy từ "immer" (luôn luôn) hoặc "oft" (thường xuyên), hãy chọn <strong>wenn</strong>. Nếu nói về một cột mốc cuộc đời như "Als ich ein Kind war..." (khi tôi là một đứa trẻ), hãy chọn <strong>als</strong>.
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-indigo-500/10">
        <h3 className="text-2xl font-bold text-indigo-600 mb-6 flex items-center gap-2">
          <span>3. Phát âm: Tính từ đuôi "-ig" và "-lich"</span>
        </h3>
        <p className="text-lg font-medium text-slate-600 mb-4">Quy tắc đọc ở cuối từ (Am Wortende spreche man...):</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100">
             <p className="font-bold text-indigo-700 mb-2">Đuôi -ig đọc là /ich/:</p>
             <ul className="space-y-2 text-theme-dark font-medium cursor-pointer">
                <li onClick={() => playAudio('wichtig', 'ex_wichtig')} className="flex items-center gap-2 hover:opacity-75"><Play size={14} className="text-indigo-400"/> wichtig</li>
                <li onClick={() => playAudio('richtig', 'ex_richtig')} className="flex items-center gap-2 hover:opacity-75"><Play size={14} className="text-indigo-400"/> richtig</li>
                <li onClick={() => playAudio('traurig', 'ex_traurig')} className="flex items-center gap-2 hover:opacity-75"><Play size={14} className="text-indigo-400"/> traurig</li>
             </ul>
             <p className="text-xs mt-3 text-indigo-500 italic">*Tuy nhiên khi đứng giữa 2 nguyên âm (z.B: wichtige), chữ "g" vẫn phát âm là /g/.</p>
          </div>
          <div className="bg-sky-50 p-4 rounded-2xl border border-sky-100">
             <p className="font-bold text-sky-700 mb-2">Đuôi -lich đọc là /lich/:</p>
             <ul className="space-y-2 text-theme-dark font-medium cursor-pointer">
                <li onClick={() => playAudio('freundlich', 'ex_freund')} className="flex items-center gap-2 hover:opacity-75"><Play size={14} className="text-sky-400"/> freundlich</li>
                <li onClick={() => playAudio('glücklich', 'ex_gluck')} className="flex items-center gap-2 hover:opacity-75"><Play size={14} className="text-sky-400"/> glücklich</li>
                <li onClick={() => playAudio('herzlich', 'ex_herz')} className="flex items-center gap-2 hover:opacity-75"><Play size={14} className="text-sky-400"/> herzlich</li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
