import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, BookOpen, Sparkles, MessageSquare, AlertTriangle } from 'lucide-react';

export default function Lektion10GrammarTheory({ playAudio }: { playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void }) {
  const [activeTab, setActiveTab] = useState<'dass' | 'reklamation'>('dass');

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="flex justify-center gap-4 border-b-2 border-theme-dark/10 pb-4 flex-wrap">
        <button
          onClick={() => setActiveTab('dass')}
          className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
            activeTab === 'dass' ? 'bg-theme-secondary text-white shadow-lg' : 'bg-white text-theme-dark/60 hover:bg-theme-cream'
          }`}
        >
          <BookOpen size={20} /> Mệnh đề "dass"
        </button>
        <button
          onClick={() => setActiveTab('reklamation')}
          className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
            activeTab === 'reklamation' ? 'bg-rose-500 text-white shadow-lg' : 'bg-white text-theme-dark/60 hover:bg-theme-cream'
          }`}
        >
          <MessageSquare size={20} /> Hội thoại tại nhà hàng
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'dass' && (
          <motion.div
            key="dass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-[32px] border-2 border-theme-secondary/20 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-theme-secondary/10 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-black text-theme-secondary flex items-center gap-2 mb-4">
                <Sparkles size={24} /> Konjunktion: dass (rằng)
              </h3>
              
              <p className="text-lg font-medium text-theme-dark/80 mb-6">
                Liên từ <b>"dass"</b> dùng để nối một mệnh đề phụ với mệnh đề chính nhằm bổ sung ý nghĩa (Ví dụ: Tôi nghĩ <i>rằng...</i>). Trong mệnh đề có "dass", động từ được chia luôn nằm ở <b>cuối câu</b>.
              </p>

              <div className="bg-theme-cream/40 p-6 rounded-2xl border-l-4 border-theme-secondary space-y-4">
                 <h4 className="font-black text-theme-dark uppercase tracking-widest text-sm">Cấu trúc</h4>
                 <div className="bg-white p-4 rounded-xl font-mono text-lg text-center font-bold text-theme-secondary shadow-sm">
                    Mệnh đề chính , <span className="text-rose-500">dass</span> + Chủ ngữ + ... + <span className="text-theme-primary">Động từ (chia theo Chủ ngữ)</span>
                 </div>
              </div>
              
              <div className="mt-8 space-y-4">
                 <h4 className="font-black text-theme-dark uppercase tracking-widest text-sm">Ví dụ</h4>
                 
                 <div className="space-y-3">
                    <div className="bg-white border-2 border-theme-dark/10 p-4 rounded-xl flex items-start gap-4">
                       <button onClick={() => playAudio("Ich hoffe, dass das Essen bald kommt.", "l10-g1", "de-DE")} className="shrink-0 mt-1 text-theme-secondary hover:text-theme-secondary/70">
                         <Play size={20} />
                       </button>
                       <div>
                         <p className="font-bold text-lg text-theme-dark">
                           Ich hoffe, <span className="text-rose-500">dass</span> das Essen bald <span className="text-theme-primary underline decoration-2 underline-offset-4">kommt</span>.
                         </p>
                         <p className="text-theme-dark/60 italic font-medium">Tôi hy vọng rằng đồ ăn sẽ ra sớm.</p>
                       </div>
                    </div>
                    <div className="bg-white border-2 border-theme-dark/10 p-4 rounded-xl flex items-start gap-4">
                       <button onClick={() => playAudio("Gut, dass du reserviert hast.", "l10-g2", "de-DE")} className="shrink-0 mt-1 text-theme-secondary hover:text-theme-secondary/70">
                         <Play size={20} />
                       </button>
                       <div>
                         <p className="font-bold text-lg text-theme-dark">
                           Gut, <span className="text-rose-500">dass</span> du <span className="text-theme-primary underline decoration-2 underline-offset-4">reserviert hast</span>.
                         </p>
                         <p className="text-theme-dark/60 italic font-medium">Thật tốt vì bạn đã đặt bàn. (Động từ chia 'hast' đứng cuối, trợ động từ hoặc phần 2 phân từ đi cùng nhau, động từ chia đứng cuối cùng!)</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
            
            <div className="bg-theme-primary/5 p-8 rounded-[32px] border-2 border-theme-primary/20">
               <h3 className="text-xl font-black text-theme-primary flex items-center gap-2 mb-4">
                 Các Cụm Từ Đi Thường Xuyên Với "dass"
               </h3>
               <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm space-y-2">
                     <p className="font-bold text-theme-dark text-lg">Ich hoffe, dass...</p>
                     <p className="text-theme-dark/60">Tôi hy vọng rằng...</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm space-y-2">
                     <p className="font-bold text-theme-dark text-lg">Ich finde/glaube/denke, dass...</p>
                     <p className="text-theme-dark/60">Tôi thấy/tin/nghĩ rằng...</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm space-y-2">
                     <p className="font-bold text-theme-dark text-lg">Gut / Schade, dass...</p>
                     <p className="text-theme-dark/60">Thật tốt / Thật tiếc vì...</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm space-y-2">
                     <p className="font-bold text-theme-dark text-lg">Kann es sein, dass...?</p>
                     <p className="text-theme-dark/60">Có thể là... (không)?</p>
                  </div>
               </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'reklamation' && (
          <motion.div
            key="reklamation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-[32px] border-2 border-rose-200 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-100 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-black text-rose-600 flex items-center gap-2 mb-4">
                 Reklamieren (Phàn nàn)
              </h3>
              
              <div className="space-y-4">
                 {[
                    { bad: "Das Messer ist nicht sauber.", reaction: "Oh! Das tut mir leid.", action: "Ich bringe Ihnen ein anderes." },
                    { bad: "Verzeihen Sie, aber die Suppe ist kalt.", reaction: "Verzeihen Sie.", action: "Ich gebe es an die Küche weiter." }
                 ].map((item, i) => (
                    <div key={i} className="bg-rose-50 border border-rose-100 p-6 rounded-2xl">
                       <p className="font-bold text-theme-dark text-lg mb-2">🧑 Khách: <span className="text-rose-600">"{item.bad}"</span></p>
                       <p className="font-bold text-theme-dark/80">💁 Phục vụ: "{item.reaction} {item.action}"</p>
                    </div>
                 ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-white p-8 rounded-[32px] border-2 border-emerald-200 shadow-sm">
                  <h3 className="text-xl font-black text-emerald-600 mb-4">Bestellen (Gọi món)</h3>
                  <ul className="space-y-3 font-bold text-theme-dark/80">
                     <li>- Ich hätte gern [einen Salat]...</li>
                     <li>- Ich nehme [das Steak]...</li>
                     <li>- Bringen Sie mir lieber [einen Tee]...</li>
                     <li>- Aber nicht mit [Pommes], sondern mit [Reis].</li>
                  </ul>
               </div>

               <div className="bg-white p-8 rounded-[32px] border-2 border-amber-200 shadow-sm">
                  <h3 className="text-xl font-black text-amber-500 mb-4">Bezahlen (Thanh toán)</h3>
                  <ul className="space-y-3 font-bold text-theme-dark/80">
                     <li>- Die Rechnung, bitte.</li>
                     <li>- Wir würden gern zahlen.</li>
                     <li>- Zusammen oder getrennt?</li>
                     <li>- Hier bitte, stimmt so. (Tiền tip)</li>
                  </ul>
               </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
