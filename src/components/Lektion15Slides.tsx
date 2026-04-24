import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, CheckCircle2, MessageSquare, FileText, CheckSquare, Eye, BookOpen } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
}

export default function Lektion15Slides({ playAudio, playingId }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const [activeSlideTab, setActiveSlideTab] = useState<'roadmap' | 'downloads'>('roadmap');
  
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
              <p className="font-bold text-theme-dark/60">Bài 15: Truyền thông & Passiv Präsens</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full pb-8">
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden">
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: GIẢI TRÍ & CÂU BỊ ĐỘNG
                </h3>
                <div className="space-y-4">
                  <button onClick={() => setCurrentSlide(0)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-dark/10 group">
                    <h4 className="font-black text-theme-dark group-hover:text-theme-primary">Tiết 1: Einstieg + Ôn bài cũ</h4>
                  </button>
                  <button onClick={() => setCurrentSlide(2)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-dark/10 group">
                    <h4 className="font-black text-theme-dark group-hover:text-theme-primary">Tiết 2: Passiv Präsens</h4>
                  </button>
                  <button onClick={() => setCurrentSlide(3)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-dark/10 group">
                    <h4 className="font-black text-theme-dark group-hover:text-theme-primary">Tiết 3: Kỹ năng đọc hiểu</h4>
                  </button>
                  <button onClick={() => setCurrentSlide(4)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-dark/10 group">
                    <h4 className="font-black text-theme-dark group-hover:text-theme-primary">Tiết 4: Tổng kết Buổi 1</h4>
                  </button>
                </div>
              </div>

              <div className="bg-theme-secondary/5 p-6 rounded-3xl border-2 border-theme-secondary/10 relative overflow-hidden">
                <h3 className="text-xl font-black text-theme-secondary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-secondary text-white flex items-center justify-center text-sm">2</div>
                  BUỔI 2: QUY TRÌNH & MUA SẮM
                </h3>
                <div className="space-y-4">
                   <button onClick={() => setCurrentSlide(5)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-secondary/20 group">
                     <h4 className="font-black text-theme-dark group-hover:text-theme-secondary">Tiết 5: Ôn tập & Quy trình</h4>
                   </button>
                   <button onClick={() => setCurrentSlide(6)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-secondary/20 group">
                     <h4 className="font-black text-theme-dark group-hover:text-theme-secondary">Tiết 6: Reading & Media</h4>
                   </button>
                   <button onClick={() => setCurrentSlide(7)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-secondary/20 group">
                     <h4 className="font-black text-theme-dark group-hover:text-theme-secondary">Tiết 7: Mua sắm Online</h4>
                   </button>
                   <button onClick={() => setCurrentSlide(8)} className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-secondary/20 group">
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
             <h2 className="text-4xl font-black text-theme-dark">Tiết 1: Einstieg + Ôn bài cũ</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-primary/10 shadow-xl space-y-6">
                <p className="font-bold text-lg text-theme-dark/80">Ôn bài 14: Viết thiệp/tin nhắn cảm ơn ngắn.</p>
                <div className="bg-theme-cream p-6 rounded-2xl border border-theme-dark/10">
                   <p className="italic font-bold text-theme-dark">"Vielen Dank für das Geschenk, ich habe mich sehr gefreut!"</p>
                </div>
             </div>
          </div>
        );
      case 1:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Video & Từ vựng (15')</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-primary/10 shadow-xl">
                 <p className="font-bold mb-4">Các loại hình giải trí (Krimi, Serie, Spielfilm...)</p>
                 <div className="flex flex-wrap gap-4 justify-center">
                    {['Sender', 'Folge', 'Rundfunk', 'Programm'].map(w => (
                       <span key={w} className="px-4 py-2 bg-theme-cream rounded-xl font-bold">{w}</span>
                    ))}
                 </div>
             </div>
          </div>
        );
      case 2:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 2: Passiv Präsens</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-primary/10 shadow-xl text-left space-y-4">
                 <h3 className="text-2xl font-black text-theme-secondary">werden + Partizip II</h3>
                 <p className="font-bold text-theme-dark/80">Nhấn mạnh vào hành động, không phải người làm.</p>
                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <p className="line-through text-theme-dark/50">Man produziert die Sendung.</p>
                    <p className="text-xl font-black text-theme-dark mt-2">Die Sendung <span className="text-theme-primary">wird produziert</span>.</p>
                 </div>
             </div>
          </div>
        );
      case 3:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 3: Đọc hiểu (Reading)</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-primary/10 shadow-xl">
                 <h3 className="font-bold text-xl mb-4 text-theme-primary">Fernsehen früher und heute</h3>
                 <p className="text-theme-dark/80 mb-6 font-medium">Truyền hình ngày xưa và ngày nay.</p>
                 <p className="font-bold italic">Thảo luận: Trẻ em nên xem TV bao nhiêu tiếng một ngày?</p>
             </div>
          </div>
        );
      case 4:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 4: Tổng kết Buổi 1</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-primary/10 shadow-xl">
                 <p className="font-bold text-lg mb-4">Nghe hội thoại thói quen xem TV và điền từ.</p>
                 <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl font-bold">
                    Bài tập về nhà: Tìm 3 chương trình TV ở Việt Nam, mô tả bằng 2 câu Passiv.
                 </div>
             </div>
          </div>
        );
      case 5:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 5: Quy trình (Prozesse)</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-secondary/10 shadow-xl">
                 <p className="font-bold text-lg mb-4">Dùng Passiv để mô tả một quá trình sản xuất phim</p>
                 <ul className="text-left max-w-md mx-auto space-y-3 font-bold text-theme-dark/80">
                    <li>1. Das Drehbuch <b>wird geschrieben</b>.</li>
                    <li>2. Schauspieler <b>werden gesucht</b>.</li>
                    <li>3. Der Film <b>wird gedreht</b>.</li>
                 </ul>
             </div>
          </div>
        );
      case 6:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 6: Reading & Media</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-secondary/10 shadow-xl">
                 <h3 className="font-bold text-xl mb-4">Khóa học "So läuft der Unterricht ab"</h3>
                 <p className="font-medium text-theme-dark/80">Hoạt động: Thiết kế mẫu quảng cáo ngắn cho một kênh truyền hình mới.</p>
             </div>
          </div>
        );
      case 7:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 7: Mua sắm Online</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-theme-secondary/10 shadow-xl">
                 <h3 className="font-bold text-xl mb-4">Online-Shopping: Schön hay gar nicht schön?</h3>
                 <p className="text-theme-dark/80 mb-6 font-medium">So sánh tiện lợi và áp lực công việc giao hàng.</p>
                 <div className="space-y-2">
                    <p className="font-bold">Pakete <span className="text-theme-primary">werden geliefert</span></p>
                    <p className="font-bold">Produkte <span className="text-theme-primary">werden bestellt</span></p>
                 </div>
             </div>
          </div>
        );
      case 8:
        return (
          <div className="p-8 h-full flex flex-col justify-center max-w-4xl mx-auto space-y-6 text-center">
             <h2 className="text-4xl font-black text-theme-dark">Tiết 8: Test & Tổng kết</h2>
             <div className="bg-white p-8 rounded-[32px] border-2 border-emerald-500/10 shadow-xl">
                 <h3 className="font-bold text-emerald-600 text-2xl mb-4">Mục tiêu: Đánh giá Năng lực</h3>
                 <p className="font-medium mb-2">Test nhỏ: Từ vựng giải trí và cấu trúc Passiv.</p>
                 <p className="font-medium">Sẵn sàng bước qua Lektion 16: Đặt phòng Khách sạn.</p>
             </div>
          </div>
        );
      
      case 9:
         return (
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-center pb-12">
            <div className="w-32 h-32 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle2 size={64} />
            </div>
            <h2 className="text-5xl font-black text-theme-dark">Hoàn Thành Lektion 15</h2>
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
              Sơ đồ Lektion 15
           </div>
        ) : (
           <div className="p-6 flex items-center justify-between border-t border-theme-dark/5 bg-theme-cream/50 z-10">
              <button onClick={currentSlide === 0 ? () => setCurrentSlide(-1) : prevSlide} className="px-6 py-3 rounded-xl font-black transition-all flex items-center gap-2 hover:bg-theme-dark/5 text-theme-dark">
                 <ChevronLeft className="w-5 h-5" /> Trước
              </button>
              <span className="font-black text-theme-dark/30 tracking-widest text-sm">{currentSlide + 1} / {totalSlides-1}</span>
              <button disabled={currentSlide === totalSlides - 1 && currentSlide !== 9} onClick={nextSlide} className="px-6 py-3 bg-theme-primary text-white rounded-[20px] font-black shadow-xl hover:bg-theme-dark transition-all flex items-center gap-2">
                 Tiếp <ChevronRight className="w-5 h-5" />
              </button>
           </div>
        )}
      </div>
    </div>
  );
}
