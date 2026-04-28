import React, { useState } from 'react';
import { BookOpen, User, MessageSquare, Plus, ArrowRight, Play, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Lektion11GrammarTheory({ playAudio }: { playAudio: (text: string, id: string) => void }) {
  const [activeTab, setActiveTab] = useState<'reflexive' | 'bewerten'>('reflexive');

  return (
    <div className="space-y-8 bg-zinc-50 rounded-3xl p-6 md:p-8 shadow-sm border border-theme-dark/10">
      
      <div className="flex justify-center gap-4 border-b-2 border-theme-dark/10 pb-4 flex-wrap">
        <button
          onClick={() => setActiveTab('reflexive')}
          className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
            activeTab === 'reflexive' ? 'bg-theme-secondary text-white shadow-lg' : 'bg-white text-theme-dark/60 hover:bg-theme-cream'
          }`}
        >
          <User size={20} /> Reflexive Verben
        </button>
        <button
          onClick={() => setActiveTab('bewerten')}
          className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${
            activeTab === 'bewerten' ? 'bg-rose-500 text-white shadow-lg' : 'bg-white text-theme-dark/60 hover:bg-theme-cream'
          }`}
        >
          <MessageSquare size={20} /> Đánh giá & Chúc mừng
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'reflexive' && (
          <motion.div
            key="reflexive"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-display font-black text-theme-dark uppercase tracking-tight">Reflexive Verben</h2>
              <p className="text-theme-dark/60 font-bold max-w-2xl mx-auto">
                Động từ phản thân đi kèm với đại từ phản thân (sich). Đại từ này đứng sau động từ và biến đổi theo chủ ngữ.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-theme-secondary/20">
                <h3 className="font-black text-xl text-theme-secondary mb-6 flex items-center gap-2"><BookOpen /> Quy tắc chia đại từ</h3>
                <div className="space-y-3">
                  {[
                    { sub: 'ich', pron: 'mich' },
                    { sub: 'du', pron: 'dich' },
                    { sub: 'er / es / sie', pron: 'sich' },
                    { sub: 'wir', pron: 'uns' },
                    { sub: 'ihr', pron: 'euch' },
                    { sub: 'sie / Sie', pron: 'sich' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-theme-cream/30 hover:bg-theme-cream transition-colors">
                      <span className="font-bold text-theme-dark w-1/2">{row.sub}</span>
                      <ArrowRight className="text-theme-secondary/40 w-4 h-4" />
                      <span className="font-black text-theme-secondary w-1/3 text-right">{row.pron}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-theme-primary/20 space-y-6">
                 <h3 className="font-black text-xl text-theme-primary mb-4 flex items-center gap-2">Ví dụ</h3>
                 
                 <div className="space-y-4">
                    <div className="p-4 bg-theme-cream rounded-2xl border-l-4 border-theme-secondary">
                        <button onClick={() => playAudio("Ich fühle mich prima.", 'v_r1')} className="flex items-start gap-3 text-left w-full hover:opacity-80">
                            <Play className="text-theme-secondary shrink-0 mt-1" size={20}/>
                            <div>
                                <p className="font-black text-theme-dark text-lg">
                                  Ich fühle <span className="text-theme-secondary">mich</span> prima.
                                </p>
                                <p className="text-theme-dark/60 font-medium">Tôi cảm thấy tuyệt vời.</p>
                            </div>
                        </button>
                    </div>

                    <div className="p-4 bg-theme-cream rounded-2xl border-l-4 border-theme-secondary">
                        <button onClick={() => playAudio("Er erinnert sich nicht.", 'v_r2')} className="flex items-start gap-3 text-left w-full hover:opacity-80">
                            <Play className="text-theme-secondary shrink-0 mt-1" size={20}/>
                            <div>
                                <p className="font-black text-theme-dark text-lg">
                                  Er erinnert <span className="text-theme-secondary">sich</span> nicht.
                                </p>
                                <p className="text-theme-dark/60 font-medium">Anh ấy không nhớ.</p>
                            </div>
                        </button>
                    </div>
                 </div>

                 <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                    <p className="font-bold text-amber-800 text-sm">
                      <span className="uppercase text-xs tracking-widest block mb-1">Các động từ phản thân phổ biến:</span>
                      sich ärgern (tức giận), sich erinnern (nhớ), sich freuen (vui mừng), sich entschuldigen (xin lỗi), sich unterhalten (trò chuyện), sich treffen (gặp gỡ), sich streiten (cãi nhau), sich beschweren (phàn nàn).
                    </p>
                 </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'bewerten' && (
          <motion.div
            key="bewerten"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-display font-black text-theme-dark uppercase tracking-tight">Đánh giá & Chúc mừng</h2>
              <p className="text-theme-dark/60 font-bold max-w-2xl mx-auto">
                Bày tỏ ý kiến cá nhân và các mẫu câu dùng cho dịp lễ/kỷ niệm.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-indigo-200 space-y-6">
                <h3 className="font-black text-xl text-indigo-600 mb-4 flex items-center gap-2">Etwas bewerten (Đánh Giá)</h3>
                <div className="space-y-3">
                  <p className="font-bold text-theme-dark">Sử dụng mệnh đề <span className="text-rose-500">dass</span>:</p>
                  <ul className="space-y-3 font-medium text-theme-dark">
                    <li className="flex gap-2 bg-indigo-50 p-3 rounded-lg"><span className="text-indigo-600 font-bold shrink-0">Ich finde es traurig/schön, dass...</span> (Tôi thấy buồn/đẹp khi...)</li>
                    <li className="flex gap-2 bg-indigo-50 p-3 rounded-lg"><span className="text-indigo-600 font-bold shrink-0">Ich bin froh, dass...</span> (Tôi thấy vui vì...)</li>
                    <li className="flex gap-2 bg-indigo-50 p-3 rounded-lg"><span className="text-indigo-600 font-bold shrink-0">Ich denke, dass...</span> (Tôi nghĩ rằng...)</li>
                  </ul>
                  <p className="font-bold text-theme-dark pt-3 text-sm">Các cách diễn đạt khác:</p>
                  <ul className="space-y-3 font-medium text-theme-dark">
                     <li className="flex gap-2 border border-theme-dark/10 p-3 rounded-lg bg-theme-cream/30">Meiner Meinung nach ist es sehr gut, dass...</li>
                     <li className="flex gap-2 border border-theme-dark/10 p-3 rounded-lg bg-theme-cream/30">Besonders gut gefällt mir, dass...</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-rose-200 space-y-6">
                <h3 className="font-black text-xl text-rose-600 mb-4 flex items-center gap-2">Gratulieren (Chúc Mừng)</h3>
                <div className="space-y-4">
                  <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl">
                     <p className="font-black text-rose-700">Herzlichen Glückwunsch zum Jubiläum!</p>
                     <p className="text-sm font-medium text-rose-900/60">(Chúc mừng nhân ngày kỷ niệm!)</p>
                  </div>
                  <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl">
                     <p className="font-black text-rose-700">Alles Gute zum Jubiläum! / Viel Glück!</p>
                     <p className="text-sm font-medium text-rose-900/60">(Mọi thứ tốt đẹp nhất! / Chúc may mắn!)</p>
                  </div>
                  <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl">
                     <p className="font-black text-rose-700">Wir wünschen Ihnen ...</p>
                     <p className="text-sm font-medium text-rose-900/60">(Chúng tôi chúc ngài...)</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-theme-dark/10">
                   <h3 className="font-black text-xl text-emerald-600 mb-4 flex items-center gap-2">Sich bedanken (Cảm Ơn)</h3>
                   <div className="space-y-3">
                      <p className="font-bold text-theme-dark bg-emerald-50 p-3 rounded-lg border border-emerald-100">Wir danken Ihnen für ...</p>
                      <p className="font-bold text-theme-dark bg-emerald-50 p-3 rounded-lg border border-emerald-100">Wir bedanken uns für ...</p>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
