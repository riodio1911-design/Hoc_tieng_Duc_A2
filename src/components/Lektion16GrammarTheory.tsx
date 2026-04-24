import React from 'react';
import { Play } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion16GrammarTheory({ playAudio, playingId }: SlideProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-4xl md:text-5xl font-display font-black text-theme-dark uppercase tracking-wide">
          Indirekte Fragen
        </h2>
        <p className="text-lg font-bold text-theme-dark/60 max-w-2xl mx-auto">
          Câu hỏi gián tiếp giúp câu hỏi trở nên lịch sự hơn trong giao tiếp, đặc biệt trong nhà hàng, khách sạn.
        </p>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-theme-secondary/10">
        <h3 className="text-2xl font-black text-theme-secondary mb-6">1. Câu hỏi gián tiếp với Từ để hỏi (W-Fragen)</h3>
        <p className="text-theme-dark/80 font-medium mb-6">
          Động từ đã chia được đặt ở vị trí <span className="font-bold text-rose-500">cuối câu</span> của mệnh đề phụ.
        </p>
        
        <div className="space-y-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="flex-1">
                <p className="text-sm font-bold text-theme-dark/50 mb-1">Trực tiếp:</p>
                <p className="text-lg font-medium text-theme-dark line-through">Wie viel kostet das Zimmer?</p>
              </div>
              <div className="hidden md:block text-2xl text-theme-dark/20 text-center">→</div>
              <div className="flex-1">
                <p className="text-sm font-bold text-theme-secondary mb-1">Gián tiếp:</p>
                <div className="flex items-center gap-3">
                  <p className="text-xl font-bold text-theme-dark">
                    Wissen Sie, wie viel das Zimmer <span className="text-rose-500">kostet</span>?
                  </p>
                  <button onClick={() => playAudio("Wissen Sie, wie viel das Zimmer kostet?", 'g16_w1')} className="shrink-0 p-2 bg-theme-secondary/10 text-theme-secondary hover:bg-theme-secondary hover:text-white rounded-full transition-all">
                    <Play size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-theme-cream/30 rounded-2xl border border-theme-dark/5">
            <div className="flex flex-col justify-center items-center">
               <h4 className="font-bold text-theme-dark/60 mb-2">Cấu trúc:</h4>
               <p className="text-lg font-bold bg-white px-4 py-2 rounded-xl text-center shadow-sm">
                 <span className="text-theme-primary">Cụm từ mở đầu + ,</span> + W-Wort + Chủ ngữ + ... + <span className="text-rose-500">Động từ</span>?
               </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-theme-primary/10">
        <h3 className="text-2xl font-black text-theme-primary mb-6">2. Câu hỏi gián tiếp Có/Không (Ja/Nein-Fragen)</h3>
        <p className="text-theme-dark/80 font-medium mb-6">
          Dùng liên từ <span className="font-bold text-theme-primary">ob</span> (có... hay không / liệu rằng) để nối câu.
        </p>
        
        <div className="space-y-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="flex-1">
                <p className="text-sm font-bold text-theme-dark/50 mb-1">Trực tiếp:</p>
                <p className="text-lg font-medium text-theme-dark line-through">Ist das Frühstück inklusiv?</p>
              </div>
              <div className="hidden md:block text-2xl text-theme-dark/20 text-center">→</div>
              <div className="flex-1">
                <p className="text-sm font-bold text-theme-primary mb-1">Gián tiếp:</p>
                <div className="flex items-center gap-3">
                  <p className="text-xl font-bold text-theme-dark">
                    Ich möchte gerne wissen, <span className="text-theme-primary">ob</span> das Frühstück inklusiv <span className="text-rose-500">ist</span>.
                  </p>
                  <button onClick={() => playAudio("Ich möchte gerne wissen, ob das Frühstück inklusiv ist.", 'g16_ob1')} className="shrink-0 p-2 bg-theme-primary/10 text-theme-primary hover:bg-theme-primary hover:text-white rounded-full transition-all">
                    <Play size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-theme-cream/30 rounded-2xl border border-theme-dark/5">
            <div className="flex flex-col justify-center items-center">
               <h4 className="font-bold text-theme-dark/60 mb-2">Cấu trúc:</h4>
               <p className="text-lg font-bold bg-white px-4 py-2 rounded-xl text-center shadow-sm">
                 <span className="text-theme-secondary">Cụm từ mở đầu + ,</span> + ob + Chủ ngữ + ... + <span className="text-rose-500">Động từ</span>?
               </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-800 p-6 md:p-10 rounded-[32px] shadow-xl text-white">
        <h3 className="text-2xl font-black text-amber-400 mb-6">3. Các Cụm Từ Mở Đầu Cần Thuộc Lòng</h3>
        <ul className="space-y-4">
           <li className="flex gap-4 p-4 bg-white/10 rounded-xl items-center">
              <span className="text-2xl">🗣</span>
               <div>
                  <p className="font-bold">Wissen Sie, ...?</p>
                  <p className="text-white/60 text-sm">Bạn có biết...?</p>
               </div>
           </li>
           <li className="flex gap-4 p-4 bg-white/10 rounded-xl items-center">
              <span className="text-2xl">🤔</span>
               <div>
                  <p className="font-bold">Können Sie mir sagen, ...?</p>
                  <p className="text-white/60 text-sm">Bạn có thể nói cho tôi...?</p>
               </div>
           </li>
           <li className="flex gap-4 p-4 bg-white/10 rounded-xl items-center">
              <span className="text-2xl">🙋‍♂️</span>
               <div>
                  <p className="font-bold">Darf ich fragen, ...?</p>
                  <p className="text-white/60 text-sm">Tôi có thể hỏi...?</p>
               </div>
           </li>
           <li className="flex gap-4 p-4 bg-white/10 rounded-xl items-center">
              <span className="text-2xl">💡</span>
               <div>
                  <p className="font-bold">Ich möchte gern wissen, ...</p>
                  <p className="text-white/60 text-sm">Tôi muốn biết...</p>
               </div>
           </li>
        </ul>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-emerald-500/20">
        <h3 className="text-2xl font-black text-emerald-600 mb-6">4. Lokale Präpositionen (Giới từ chỉ vị trí và chỉ đường)</h3>
        
        <div className="space-y-4">
           <div className="p-4 border border-slate-200 rounded-xl">
             <p className="font-bold text-lg text-theme-dark"><span className="text-emerald-500">durch</span> + Akkusativ</p>
             <p className="text-theme-dark/60 font-medium">Đi xuyên qua (không gian, cửa, sảnh...)</p>
             <p className="mt-2 text-theme-dark italic font-bold">Gehen Sie durch <span className="text-emerald-600">die</span> Empfangshalle.</p>
           </div>
           
           <div className="p-4 border border-slate-200 rounded-xl">
             <p className="font-bold text-lg text-theme-dark"><span className="text-emerald-500">an ... vorbei</span> + Dativ</p>
             <p className="text-theme-dark/60 font-medium">Đi ngang qua (ai/cái gì đó)</p>
             <p className="mt-2 text-theme-dark italic font-bold">Gehen Sie an <span className="text-emerald-600">dem</span> Restaurant vorbei <strong>(=am)</strong>.</p>
           </div>

           <div className="p-4 border border-slate-200 rounded-xl">
             <p className="font-bold text-lg text-theme-dark"><span className="text-emerald-500">gegenüber von</span> + Dativ</p>
             <p className="text-theme-dark/60 font-medium">Đối diện với</p>
             <p className="mt-2 text-theme-dark italic font-bold">Die Sauna ist gegenüber von <span className="text-emerald-600">dem</span> Schwimmbad <strong>(=vom)</strong>.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
