import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, CheckCircle2, MessageSquare, FileText, CheckSquare, Eye, BookOpen } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
}

export default function Lektion17Slides({ playAudio, playingId }: SlideProps) {
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
              <p className="font-bold text-theme-dark/60">Bài 17: Du lịch & Giới từ chỉ hướng</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full pb-8">
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden">
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: LÊN KẾ HOẠCH & "WOHIN"
                </h3>
                <div className="space-y-4">
                  <button onClick={() => setCurrentSlide(0)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-dark/10 group">
                    <h4 className="font-black text-theme-dark group-hover:text-theme-primary">Tiết 1: Einstieg & Videos</h4>
                  </button>
                  <button onClick={() => setCurrentSlide(1)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-dark/10 group">
                    <h4 className="font-black text-theme-dark group-hover:text-theme-primary">Tiết 2: Giới từ chỉ hướng "Wohin?"</h4>
                  </button>
                  <button onClick={() => setCurrentSlide(2)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-dark/10 group">
                    <h4 className="font-black text-theme-dark group-hover:text-theme-primary">Tiết 3: Kể về chuyến đi (Reading)</h4>
                  </button>
                  <button onClick={() => setCurrentSlide(3)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-dark/10 group">
                    <h4 className="font-black text-theme-dark group-hover:text-theme-primary">Tiết 4: Nghe & Tổng kết Buổi 1</h4>
                  </button>
                </div>
              </div>

              <div className="bg-theme-secondary/5 p-6 rounded-3xl border-2 border-theme-secondary/10 relative overflow-hidden">
                <h3 className="text-xl font-black text-theme-secondary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-secondary text-white flex items-center justify-center text-sm">2</div>
                  BUỔI 2: ĐỊA ĐIỂM & KỂ CHUYỆN
                </h3>
                <div className="space-y-4">
                   <button onClick={() => setCurrentSlide(4)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-secondary/20 group">
                     <h4 className="font-black text-theme-dark group-hover:text-theme-secondary">Tiết 5: Giới từ chỉ vị trí "Wo?"</h4>
                   </button>
                   <button onClick={() => setCurrentSlide(5)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-secondary/20 group">
                     <h4 className="font-black text-theme-dark group-hover:text-theme-secondary">Tiết 6: Kể chuyện (Communication)</h4>
                   </button>
                   <button onClick={() => setCurrentSlide(6)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-secondary/20 group">
                     <h4 className="font-black text-theme-dark group-hover:text-theme-secondary">Tiết 7: Sáng tạo câu chuyện</h4>
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
             <h2 className="text-4xl font-black text-theme-dark">Tiết 1: Lên kế hoạch chuyến đi</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-primary/10 shadow-xl space-y-6">
                <p className="font-bold text-lg text-theme-dark/80">Từ vựng: Tankstelle, Ampel, Autobahn, Panne...</p>
                <div className="bg-theme-cream p-6 rounded-2xl border border-theme-dark/10">
                   <p className="italic font-bold text-theme-dark">"Wohin muốn bạn đi du lịch?"</p>
                </div>
             </div>
          </div>
        );
      case 1:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 2: "Wohin?" + Akkusativ</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-primary/10 shadow-xl text-left space-y-4">
                 <h3 className="text-2xl font-black text-theme-secondary">Phân loại điểm đến</h3>
                 <ul className="text-left max-w-md space-y-3 font-bold text-theme-dark/80 pl-8 list-disc">
                    <li><span className="text-theme-primary">nach</span> + tên quốc gia/thành phố</li>
                    <li><span className="text-theme-primary">in</span> + địa điểm có không gian (in den Wald)</li>
                    <li><span className="text-theme-primary">an</span> + nơi có nước (ans Meer)</li>
                    <li><span className="text-theme-primary">auf</span> + đảo/nông thôn (auf eine Insel)</li>
                 </ul>
             </div>
          </div>
        );
      case 2:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 3: Kể chuyện (Reading & Grammar)</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-primary/10 shadow-xl">
                 <h3 className="font-bold text-xl mb-4 text-theme-primary">Mit dem Rad an der Donau</h3>
                 <p className="text-theme-dark/80 mb-6 font-medium">Ôn tập lại thì Quá khứ (Perfekt/Präteritum).</p>
                 <p className="font-bold italic">Từ vựng cảm xúc: müde, munter, lạc quan...</p>
             </div>
          </div>
        );
      case 3:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 4: Tổng kết Buổi 1</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-primary/10 shadow-xl">
                 <p className="font-bold text-lg mb-4">Nghe hội thoại về việc chuẩn bị xe và lộ trình.</p>
                 <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl font-bold">
                    Bài tập về nhà: Viết 5 câu kể về kế hoạch du lịch hè này bằng giới từ mới!
                 </div>
             </div>
          </div>
        );
      case 4:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 5: Giới từ chỉ vị trí "Wo?" + Dativ</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-secondary/10 shadow-xl text-left space-y-4">
                 <h3 className="text-2xl font-black text-theme-secondary">Phân biệt "Wohin" vs "Wo"</h3>
                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <p className="text-theme-dark font-bold">Wohin (Akk): Wir fahren <span className="text-theme-primary">ans Meer</span>.</p>
                    <p className="text-theme-dark mt-2 font-bold">Wo (Dat): Wir sind <span className="text-theme-secondary">am Meer</span>.</p>
                 </div>
             </div>
          </div>
        );
      case 5:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 6: Bình luận & Kể chuyện</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-secondary/10 shadow-xl">
                 <h3 className="font-bold text-xl mb-4">Cách bình luận sự việc</h3>
                 <ul className="text-left max-w-md mx-auto space-y-3 font-bold text-theme-dark/80 list-disc">
                    <li>Nicht zu glauben!</li>
                    <li>So ein Zufall!</li>
                    <li>Das sieht toll/schrecklich aus!</li>
                 </ul>
             </div>
          </div>
        );
      case 6:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 7: Sáng tạo câu chuyện (Group work)</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-secondary/10 shadow-xl">
                 <h3 className="font-bold text-xl mb-4 text-theme-secondary">Bốc thăm từ khóa</h3>
                 <p className="text-theme-dark/80 mb-6 font-medium">Kết hợp nhân vật, thời gian, địa điểm để kể một câu chuyện ngắn.</p>
                 <div className="space-y-2">
                    <p className="font-bold italic text-sm">Ví dụ: Kellner, Strand, Sommer...</p>
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
                 <p className="font-medium mb-2">Lời giải đáp các lỗi phổ biến về Akkusativ/Dativ.</p>
                 <p className="font-medium">Sẵn sàng qua Lektion 18: Chỉ đường & Thời tiết.</p>
             </div>
          </div>
        );
      case 8:
         return (
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-center pb-12">
            <div className="w-32 h-32 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle2 size={64} />
            </div>
            <h2 className="text-5xl font-black text-theme-dark">Hoàn Thành Lektion 17</h2>
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
              Sơ đồ Lektion 17
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
