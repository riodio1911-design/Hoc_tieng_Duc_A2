import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, CheckCircle2, MessageSquare, FileText, CheckSquare, Eye, BookOpen } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
}

export default function Lektion16Slides({ playAudio, playingId }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const totalSlides = 11;
  const nextSlide = () => setCurrentSlide((p) => Math.min(totalSlides - 1, p + 1));
  const prevSlide = () => setCurrentSlide((p) => Math.max(-1, p - 1));

  const renderSlide = () => {
    switch (currentSlide) {
      case -1:
        return (
          <div className="space-y-6 flex flex-col h-full max-w-5xl mx-auto py-4">
            <div className="text-center space-y-2 mb-4">
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình</h2>
              <p className="font-bold text-theme-dark/60">Bài 16: Khách sạn & Câu hỏi gián tiếp</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full pb-8">
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden">
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: KHÁCH SẠN & W-FRAGEN
                </h3>
                <div className="space-y-4">
                  <button onClick={() => setCurrentSlide(0)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-dark/10 group">
                    <h4 className="font-black text-theme-dark group-hover:text-theme-primary">Tiết 1: Đặt phòng khách sạn</h4>
                  </button>
                  <button onClick={() => setCurrentSlide(1)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-dark/10 group">
                    <h4 className="font-black text-theme-dark group-hover:text-theme-primary">Tiết 2: Câu hỏi gián tiếp (W-Fragen)</h4>
                  </button>
                  <button onClick={() => setCurrentSlide(2)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-dark/10 group">
                    <h4 className="font-black text-theme-dark group-hover:text-theme-primary">Tiết 3: Đọc hiểu & Quảng cáo</h4>
                  </button>
                  <button onClick={() => setCurrentSlide(3)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-dark/10 group">
                    <h4 className="font-black text-theme-dark group-hover:text-theme-primary">Tiết 4: Nghe & Tổng kết Buổi 1</h4>
                  </button>
                </div>
              </div>

              <div className="bg-theme-secondary/5 p-6 rounded-3xl border-2 border-theme-secondary/10 relative overflow-hidden">
                <h3 className="text-xl font-black text-theme-secondary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-secondary text-white flex items-center justify-center text-sm">2</div>
                  BUỔI 2: CHỈ ĐƯỜNG & WISSEN SIE OB
                </h3>
                <div className="space-y-4">
                   <button onClick={() => setCurrentSlide(4)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-secondary/20 group">
                     <h4 className="font-black text-theme-dark group-hover:text-theme-secondary">Tiết 5: Câu hỏi gián tiếp "ob"</h4>
                   </button>
                   <button onClick={() => setCurrentSlide(5)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-secondary/20 group">
                     <h4 className="font-black text-theme-dark group-hover:text-theme-secondary">Tiết 6: Chỉ đường trong khách sạn</h4>
                   </button>
                   <button onClick={() => setCurrentSlide(6)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-secondary/20 group">
                     <h4 className="font-black text-theme-dark group-hover:text-theme-secondary">Tiết 7: Tình huống Rezeption</h4>
                   </button>
                   <button onClick={() => setCurrentSlide(7)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-secondary/20 group">
                     <h4 className="font-black text-theme-dark group-hover:text-theme-secondary">Tiết 8: Test & Video</h4>
                   </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 0:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 1: Đặt phòng Khách sạn</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-primary/10 shadow-xl space-y-6">
                <p className="font-bold text-lg text-theme-dark/80">Từ vựng: Einzelzimmer, Doppelzimmer, WLAN, Halbpension...</p>
                <div className="bg-theme-cream p-6 rounded-2xl border border-theme-dark/10">
                   <p className="italic font-bold text-theme-dark">"Was ist Ihnen im Hotel wichtig?"</p>
                </div>
             </div>
          </div>
        );
      case 1:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 2: Câu hỏi gián tiếp (W-Fragen)</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-primary/10 shadow-xl text-left space-y-4">
                 <h3 className="text-2xl font-black text-theme-secondary">Wissen Sie / Können Sie mir sagen + W-Wort ... + Verb</h3>
                 <p className="font-bold text-theme-dark/80">Làm câu hỏi trở nên lịch sự hơn.</p>
                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <p className="line-through text-theme-dark/50">Wie viel kostet das Zimmer?</p>
                    <p className="text-xl font-black text-theme-dark mt-2">Darf ich fragen, <span className="text-theme-primary">wie viel</span> das Zimmer <span className="text-theme-primary">kostet</span>?</p>
                 </div>
             </div>
          </div>
        );
      case 2:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 3: Đọc hiểu (Reading)</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-primary/10 shadow-xl">
                 <h3 className="font-bold text-xl mb-4 text-theme-primary">Quảng cáo Khách sạn & Lời khuyên</h3>
                 <p className="text-theme-dark/80 mb-6 font-medium">Hotel Aida vs. Ferienhaus an der Ostsee</p>
                 <p className="font-bold italic">Thảo luận: So sánh giá cả, địa điểm và dịch vụ.</p>
             </div>
          </div>
        );
      case 3:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 4: Tổng kết Buổi 1</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-primary/10 shadow-xl">
                 <p className="font-bold text-lg mb-4">Nghe hội thoại: Điền thông tin đặt phòng (số đêm, giá tiền).</p>
                 <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl font-bold">
                    Bài tập về nhà: Viết 3 câu hỏi gián tiếp để hỏi lễ tân khách sạn.
                 </div>
             </div>
          </div>
        );
      case 4:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 5: Câu hỏi gián tiếp với "ob"</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-secondary/10 shadow-xl text-left space-y-4">
                 <h3 className="text-2xl font-black text-theme-secondary">Dùng cho câu hỏi Yes/No</h3>
                 <p className="font-bold text-theme-dark/80">Ich möchte wissen, ob ... / Wissen Sie, ob...</p>
                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <p className="line-through text-theme-dark/50">Ist das Frühstück inklusiv?</p>
                    <p className="text-xl font-black text-theme-dark mt-2">Ich würde gerne wissen, <span className="text-theme-secondary">ob</span> das Frühstück inklusiv <span className="text-theme-secondary">ist</span>.</p>
                 </div>
             </div>
          </div>
        );
      case 5:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 6: Chỉ đường (Local Prepositions)</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-secondary/10 shadow-xl">
                 <h3 className="font-bold text-xl mb-4">Mô tả vị trí trong khách sạn</h3>
                 <ul className="text-left max-w-md mx-auto space-y-3 font-bold text-theme-dark/80">
                    <li>• gegenüber von (đối diện)</li>
                    <li>• an ... vorbei (đi ngang qua)</li>
                    <li>• durch (xuyên qua)</li>
                 </ul>
                 <p className="font-medium mt-6 italic">Gehen Sie am Restaurant vorbei, dann durch die Glastür...</p>
             </div>
          </div>
        );
      case 6:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 7: Tình huống tại Rezeption</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-secondary/10 shadow-xl">
                 <h3 className="font-bold text-xl mb-4 text-theme-secondary">Giải quyết sự cố</h3>
                 <p className="text-theme-dark/80 mb-6 font-medium">Nghe tình huống: Thiếu khăn tắm, WiFi bị hỏng.</p>
                 <div className="space-y-2">
                    <p className="font-bold">Roleplay: Khách hàng dùng câu hỏi gián tiếp để phàn nàn lịch sự.</p>
                 </div>
             </div>
          </div>
        );
      case 7:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 8: Test & Tổng kết</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-emerald-500/10 shadow-xl">
                 <h3 className="font-bold text-emerald-600 text-2xl mb-4">Mục tiêu: Đánh giá Năng lực</h3>
                 <p className="font-medium mb-2">Test nhỏ: Từ vựng khách sạn, ngữ pháp gián tiếp.</p>
                 <p className="font-medium">Sẵn sàng bước qua Lektion 17: Du lịch Rumänien.</p>
             </div>
          </div>
        );
      
      case 8:
         return (
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-center pb-12">
            <div className="w-32 h-32 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle2 size={64} />
            </div>
            <h2 className="text-5xl font-black text-theme-dark">Hoàn Thành Lektion 16</h2>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8 w-full">
      <div className="relative overflow-hidden h-[650px] flex flex-col bg-zinc-50 rounded-[2.5rem] shadow-2xl border-4 border-white">
        <div className="flex-1 p-8 relative z-10 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="h-full">
              {renderSlide()}
            </motion.div>
          </AnimatePresence>
        </div>

        {currentSlide === -1 ? (
           <div className="p-4 flex justify-center border-t border-theme-dark/5 bg-theme-cream/50 z-10 text-xs font-bold text-theme-dark/50 tracking-widest uppercase">
              Sơ đồ Lektion 16
           </div>
        ) : (
           <div className="p-6 flex items-center justify-between border-t border-theme-dark/5 bg-theme-cream/50 z-10">
              <button onClick={currentSlide === 0 ? () => setCurrentSlide(-1) : prevSlide} className="px-6 py-3 rounded-xl font-black transition-all flex items-center gap-2 hover:bg-theme-dark/5 text-theme-dark">
                 <ChevronLeft className="w-5 h-5" /> Trước
              </button>
              <span className="font-black text-theme-dark/30 tracking-widest text-sm">{currentSlide + 1} / {totalSlides-1}</span>
              <button disabled={currentSlide === totalSlides - 1 && currentSlide !== 8} onClick={nextSlide} className="px-6 py-3 bg-theme-primary text-white rounded-[20px] font-black shadow-xl hover:bg-theme-dark transition-all flex items-center gap-2">
                 Tiếp <ChevronRight className="w-5 h-5" />
              </button>
           </div>
        )}
      </div>
    </div>
  );
}
