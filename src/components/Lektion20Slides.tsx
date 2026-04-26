import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, CheckCircle2, MessageSquare, PenTool, Map, Ticket, CheckSquare } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white' },
  0: { bgColor: 'bg-theme-dark' }, // Custom title slide
  1: { bgColor: 'bg-amber-50' },
  2: { bgColor: 'bg-rose-50' },
  3: { bgColor: 'bg-emerald-50' },
  8: { bgColor: 'bg-indigo-50' },
  9: { bgColor: 'bg-slate-50' },
  13: { bgColor: 'bg-theme-cream' },
  14: { bgColor: 'bg-orange-50' },
  17: { bgColor: 'bg-emerald-50' },
  18: { bgColor: 'bg-white' }
};

export default function Lektion20Slides({ playAudio, playingId, onBack }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const totalSlides = 17; 

  const nextSlide = () => {
    if (currentSlide === 9 || currentSlide === totalSlides - 1) {
      setCurrentSlide(-1);
    } else {
      setCurrentSlide((p) => Math.min(totalSlides - 1, p + 1));
    }
  };

  const prevSlide = () => setCurrentSlide((p) => Math.max(-1, p - 1));

  const renderSlide = () => {
    switch (currentSlide) {
      case -1:
        return (
          <div className="space-y-6 flex flex-col h-full max-w-5xl mx-auto py-4">
            <div className="text-center space-y-2 mb-4">
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình Lektion 20</h2>
              <p className="font-bold text-theme-dark/60">Ich durfte eigentlich keine Comics lesen</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: Thế Giới Sách & Quá Khứ
                </h3>
                <div className="space-y-4 flex-1">
                  <button 
                    onClick={() => setCurrentSlide(0)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-primary shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 1: Định hướng & Thế giới sách</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Các thể loại sách</p>
                    </div>
                  </button>
                  <button 
                    onClick={() => setCurrentSlide(4)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-primary/50 shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 2: Modalverben im Präteritum</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Động từ khuyết thiếu ở quá khứ</p>
                    </div>
                  </button>
                  {[
                    {title: "Tiết 3: Kể chuyện thời thơ ấu", slide: 6},
                    {title: "Tiết 4: Luyện nghe & Tổng kết", slide: 8}
                  ].map((item, i) => (
                    <button 
                      key={i}
                      onClick={() => setCurrentSlide(item.slide)}
                      className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-dark/10 shadow-sm group"
                    >
                      <div className="w-12 h-12 rounded-full bg-theme-dark/5 text-theme-dark/60 flex items-center justify-center shrink-0">
                        <Play className="w-5 h-5 ml-1" />
                      </div>
                      <div className="text-left flex-1">
                        <h4 className="font-black text-theme-dark transition-colors text-lg">{item.title}</h4>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Buổi 2 */}
              <div className="bg-theme-secondary/5 p-6 rounded-3xl border-2 border-theme-secondary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-secondary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-secondary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-secondary text-white flex items-center justify-center text-sm">2</div>
                  BUỔI 2: Sở thích & Nhận xét
                </h3>
                <div className="space-y-4">
                   {[
                    {title: "Tiết 5: Giới từ với Interesse", onClick: () => setCurrentSlide(10)},
                    {title: "Tiết 6: Giới thiệu và Nhận xét", onClick: () => setCurrentSlide(12)},
                    {title: "Tiết 7: 4 Kỹ năng & Thảo luận", onClick: () => setCurrentSlide(14)},
                    {title: "Tiết 8: Test & Tổng kết", onClick: () => setCurrentSlide(15)}
                  ].map((item, i) => (
                      <button 
                         key={i}
                         onClick={item.onClick}
                         className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-secondary shadow-sm group"
                      >
                         <div className="w-12 h-12 rounded-full bg-theme-secondary/10 text-theme-secondary flex items-center justify-center shrink-0">
                           <Play className="w-5 h-5 ml-1" />
                         </div>
                         <div className="text-left flex-1">
                           <h4 className="font-black text-theme-dark group-hover:text-theme-secondary transition-colors text-lg">{item.title}</h4>
                         </div>
                      </button>
                  ))}
                </div>
              </div>
            </div>
            {onBack && (
              <div className="text-center mt-4">
                <button onClick={onBack} className="text-theme-dark/50 hover:text-theme-dark font-bold underline underline-offset-4">Quay lại menu</button>
              </div>
            )}
          </div>
        );
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-theme-dark bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 20</span>
              <h1 className="text-4xl md:text-5xl font-display font-black text-white leading-tight">
                Ich durfte eigentlich keine Comics lesen
              </h1>
              <p className="text-xl text-white/80 font-bold">Chủ đề: Thói quen đọc sách & Kỷ niệm thơ ấu</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Video Giới Thiệu Lektion 20</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-8">
              <div className="flex justify-center">
                <button 
                  onClick={() => playAudio("Chào các bạn. Trong Lektion 20, chúng ta sẽ học từ vựng về các thể loại sách khác nhau, cách nói về sở thích đọc sách, cũng như điểm ngữ pháp rất quan trọng là chia động từ khuyết thiếu ở thì quá khứ đơn để kể về thời thơ ấu.", 'L20-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-theme-primary/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'L20-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-theme-secondary text-lg">1. Mục Tiêu Giao Tiếp</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Nói về thói quen đọc sách</li>
                    <li>Kể về những việc được phép/bắt buộc làm hồi nhỏ</li>
                    <li>Bày tỏ sự quan tâm, đánh giá một cuốn sách</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-theme-accent text-lg">2. Từ Vựng & Đọc Hiểu</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Các thể loại sách: Krimi, Sachbuch, Roman...</li>
                    <li>Tính từ mô tả: spannend, langweilig, romantisch...</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-theme-dark/5 mt-4 text-center">
                <h4 className="font-black text-theme-primary mb-3">3. Ngữ pháp trọng tâm</h4>
                <ul className="text-sm font-bold text-theme-dark/70 flex max-md:flex-col justify-center gap-6">
                  <li>• Modalverben im Präteritum</li>
                  <li>• Giới từ với "Interesse"</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Ôn Bài Cũ (Lektion 19)</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8 bg-white shadow-sm border border-slate-100">
               <h3 className="text-2xl font-black text-theme-secondary italic">"Woher? Wo? Wohin?"</h3>
               <p className="font-bold text-theme-dark/60 text-lg">Chọn câu trả lời đúng cho các hoạt động giải trí (Kino, Theater, Konzert):</p>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                 <button onClick={() => playAudio("Wir gehen ins Kino. (Wohin)", `l20-ve-1`, 'de-DE')} className="p-4 bg-theme-cream hover:bg-theme-primary hover:text-white rounded-xl font-bold border-2 border-theme-dark/5 transition-colors cursor-pointer text-theme-dark flex flex-col items-center shadow-sm">
                   <span>Thái độ di chuyển</span>
                   <span className="text-sm opacity-80">(Wohin?)</span>
                   <span className="mt-2">ins Kino</span>
                 </button>
                 <button onClick={() => playAudio("Wir sind im Kino. (Wo)", `l20-ve-2`, 'de-DE')} className="p-4 bg-theme-cream hover:bg-theme-secondary hover:text-white rounded-xl font-bold border-2 border-theme-dark/5 transition-colors cursor-pointer text-theme-dark flex flex-col items-center shadow-sm">
                   <span>Tĩnh/Tại chỗ</span>
                   <span className="text-sm opacity-80">(Wo?)</span>
                   <span className="mt-2">im Kino</span>
                 </button>
                 <button onClick={() => playAudio("Wir kommen aus dem Kino. (Woher)", `l20-ve-3`, 'de-DE')} className="p-4 bg-theme-cream hover:bg-emerald-500 hover:text-white rounded-xl font-bold border-2 border-theme-dark/5 transition-colors cursor-pointer text-theme-dark flex flex-col items-center shadow-sm">
                   <span>Rời đi</span>
                   <span className="text-sm opacity-80">(Woher?)</span>
                   <span className="mt-2">aus dem Kino</span>
                 </button>
               </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 1</span>
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Thế Giới Sách (Bücherwelt)</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 { w: 'der Comic', i: '💭', m: 'Truyện tranh' },
                 { w: 'das Bilderbuch', i: '🎨', m: 'Sách tranh' },
                 { w: 'das Märchen', i: '👸', m: 'Chuyện cổ tích' },
                 { w: 'das Sachbuch', i: '📚', m: 'Sách thông tin' },
                 { w: 'das Hörbuch', i: '🎧', m: 'Sách nói' },
                 { w: 'der Krimi', i: '🕵️', m: 'Trinh thám' },
                 { w: 'der Roman', i: '📖', m: 'Tiểu thuyết' },
                 { w: 'der Ratgeber', i: '💡', m: 'Hướng dẫn' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-4 text-center space-y-4 hover:-translate-y-1 transition-transform border-b-4 border-theme-primary/20 bg-white">
                   <div className="text-4xl">{item.i}</div>
                   <div>
                     <h4 className="font-black text-sm md:text-base text-theme-dark">{item.w}</h4>
                     <p className="font-bold text-[11px] md:text-xs text-theme-dark/60">{item.m}</p>
                   </div>
                   <button 
                     onClick={() => playAudio(item.w, `l20-v-${i}`, 'de-DE')}
                     className="mx-auto flex"
                   >
                     {playingId === `l20-v-${i}` ? <CheckCircle2 className="text-emerald-500 w-5 h-5" /> : <Volume2 className="text-theme-dark/30 hover:text-theme-primary w-5 h-5" />}
                   </button>
                 </div>
               ))}
             </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 2</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Động từ khuyết thiếu Quá khứ</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto space-y-8 bg-theme-primary/5 border-2 border-theme-primary/20 text-left">
               <p className="text-xl font-bold text-theme-dark leading-relaxed">
                 Thì <span className="text-theme-primary">Präteritum</span> của Modalverben (können, müssen, dürfen, wollen, sollen, mögen) rất phổ biến trong giao tiếp để nói về chuyện đã qua.
               </p>
               <div className="bg-white p-6 rounded-2xl border-2 border-theme-dark/5 space-y-4 shadow-sm">
                  <h4 className="font-black text-theme-secondary uppercase tracking-widest mb-2">Quy tắc vàng:</h4>
                  <ul className="space-y-2 font-medium text-lg text-theme-dark/70 list-disc pl-5">
                    <li>Bỏ dấu Umlaut (ä, ö, ü).</li>
                    <li>Thêm đuôi quá khứ <b>-te</b>.</li>
                    <li>Ngôi <b>ich</b> và <b>er/es/sie</b> chia y hệt nhau.</li>
                  </ul>
               </div>
               <div className="flex justify-center flex-wrap gap-4 mt-6">
                 <span className="px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-lg border-2 border-blue-200">können ➡️ konnte</span>
                 <span className="px-4 py-2 bg-rose-100 text-rose-700 font-bold rounded-lg border-2 border-rose-200">müssen ➡️ musste</span>
                 <span className="px-4 py-2 bg-emerald-100 text-emerald-700 font-bold rounded-lg border-2 border-emerald-200">dürfen ➡️ durfte</span>
                 <span className="px-4 py-2 bg-amber-100 text-amber-700 font-bold rounded-lg border-2 border-amber-200">mögen ➡️ mochte</span>
               </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center mb-6">Thực hành chia Präteritum</h2>
            <div className="bg-white p-8 rounded-3xl border-2 border-theme-dark/10 shadow-sm space-y-6">
              <p className="font-bold text-theme-dark/80 text-xl">Điền đúng dạng quá khứ của động từ khuyết thiếu:</p>
              
              <div className="space-y-4">
                 <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                   <div className="w-8 h-8 flex-shrink-0 bg-theme-primary/10 text-theme-primary rounded-full flex items-center justify-center font-bold">1</div>
                   <div className="flex-1 font-medium text-lg">Als Kind <span className="inline-block w-24 border-b-2 border-theme-primary mx-2 text-center text-theme-primary font-bold">durfte</span> ich keine Comics lesen. (dürfen)</div>
                 </div>
                 
                 <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                   <div className="w-8 h-8 flex-shrink-0 bg-theme-secondary/10 text-theme-secondary rounded-full flex items-center justify-center font-bold">2</div>
                   <div className="flex-1 font-medium text-lg">Wir <span className="inline-block w-24 border-b-2 border-theme-dark/20 mx-2 text-center text-theme-secondary font-bold">_______</span> früher oft um 6 Uhr aufstehen. (müssen)</div>
                 </div>
                 
                 <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                   <div className="w-8 h-8 flex-shrink-0 bg-amber-500/10 text-amber-600 rounded-full flex items-center justify-center font-bold">3</div>
                   <div className="flex-1 font-medium text-lg">Mein Bruder <span className="inline-block w-24 border-b-2 border-theme-dark/20 mx-2 text-center text-amber-600 font-bold">_______</span> schon mit 5 Jahren lesen. (können)</div>
                 </div>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 3</span>
             <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200 shadow-sm">
               <MessageSquare size={36} />
             </div>
             <h2 className="text-4xl font-display font-black text-theme-dark">Phỏng vấn: Thời Thơ Ấu</h2>
             <p className="text-xl font-bold text-theme-dark/80 max-w-2xl mx-auto leading-relaxed">
               Hỏi và trả lời về những việc bạn thích làm, được phép làm hoặc bắt buộc làm khi còn nhỏ. (Sử dụng mochte, wollte, durfte, musste)
             </p>
             <div className="bg-white/90 p-6 rounded-2xl border-l-4 border-emerald-500 text-left max-w-2xl mx-auto space-y-2 mt-4 shadow-sm border border-slate-100">
                <p className="font-bold text-lg"><span className="text-emerald-600">A:</span> Was mochtest du als Kind gern?</p>
                <p className="font-bold text-lg"><span className="text-slate-600">B:</span> Ich mochte Comics, aber ich <u className="decoration-emerald-500 decoration-2">durfte</u> sie nicht lesen. Ich <u className="decoration-emerald-500 decoration-2">musste</u> immer draußen spielen.</p>
             </div>
          </div>
        );
      case 7:
        return (
          <div className="flex flex-col flex-1 pb-16 items-center justify-center h-full text-center space-y-12">
            <div className="p-12 relative w-full max-w-2xl">
               <div className="absolute inset-0 bg-theme-primary/10 rotate-3 rounded-[3rem]"></div>
               <div className="relative bg-white border-2 border-theme-primary/20 rounded-[3rem] p-12 shadow-xl shadow-theme-primary/5">
                  <h2 className="text-4xl font-black text-theme-dark mb-6">Bạn có biết?</h2>
                  <p className="text-xl font-medium text-theme-dark/80 leading-relaxed">
                    Người Đức rất thích đọc sách. Trung bình mỗi người Đức đọc khoảng <b>10 cuốn sách</b> mỗi năm! Sách trinh thám (Krimi) là thể loại được yêu thích nhất.
                  </p>
               </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="flex gap-8 items-center h-full flex-col md:flex-row">
            <div className="flex-1 space-y-6 w-full text-center md:text-left">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mb-4">TIẾT 4</span>
              <h2 className="text-4xl font-display font-black text-theme-dark">Luyện Nghe / Đọc</h2>
              <div className="space-y-4 slide-card p-6 border-2 border-theme-dark/5 bg-theme-cream text-left">
                 <p className="font-bold text-theme-dark/80 text-lg leading-relaxed mb-4">
                   Nhân vật nói về cuốn sách tuổi thơ của họ:
                 </p>
                 <div className="bg-white p-4 rounded-xl space-y-2 border border-slate-200">
                    <p className="font-medium">"Ich habe alle Bücher von Christine Nöstlinger gelesen. Eines ihrer besten Bücher ist der Gurkenkönig."</p>
                    <button onClick={() => playAudio("Ich habe alle Bücher von Christine Nöstlinger gelesen. Eines ihrer besten Bücher ist der Gurkenkönig.", 'l20-listen-audio', 'de-DE')} className="mt-2 flex items-center gap-2 text-sm font-bold text-theme-primary hover:underline">
                      <Volume2 size={16} /> Nghe thử
                    </button>
                 </div>
              </div>
            </div>
            <div className="flex-1 w-full rounded-[32px] overflow-hidden relative shadow-xl min-h-[300px] md:min-h-[400px] bg-indigo-50 border-4 border-white flex items-center justify-center p-8">
               <div className="w-32 h-32 bg-indigo-200 text-indigo-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                 <Play size={48} className="ml-2" />
               </div>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-center pb-12">
            <div className="w-32 h-32 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-theme-primary/30 border-4 border-white">
              <CheckCircle2 size={64} />
            </div>
            <div className="space-y-4">
               <h2 className="text-5xl font-display font-black text-theme-dark">Tổng Kết Buổi 1</h2>
               <p className="text-xl font-bold text-theme-dark/60 uppercase tracking-widest">Tuyệt vời!</p>
             </div>
             <div className="slide-card p-8 text-left space-y-4 max-w-md w-full mx-auto bg-white/90 font-bold text-theme-dark/80 border border-slate-100 shadow-sm border-t-4 border-t-theme-primary">
                <p>👉 Từ vựng: Các loại sách và tuổi thơ.</p>
                <p>👉 Ngữ pháp: Modalverben ở thì Quá khứ đơn (konnte, musste, durfte, wollte).</p>
             </div>
          </div>
        );
      case 10:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">BUỔI 2</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Giới từ với "Interesse"</h2>
             <div className="slide-card p-10 max-w-3xl mx-auto space-y-8 bg-theme-secondary/5 border-2 border-theme-secondary/20 text-left">
               <p className="text-xl font-medium text-theme-dark leading-relaxed">
                 Có hai cách phổ biến để diễn đạt sự quan tâm, sở thích với một lĩnh vực:
               </p>
               <div className="grid sm:grid-cols-2 gap-4">
                 <div className="bg-white p-5 rounded-2xl border-l-4 border-amber-500 shadow-sm border-y border-r border-slate-100">
                    <h4 className="font-black text-amber-600 mb-2 text-lg">sich interessieren + für (Akk)</h4>
                    <p className="text-sm font-medium mb-2 text-theme-dark/70 border-b border-slate-100 pb-2">Động từ phản thân</p>
                    <p className="font-bold">Ich interessiere mich für Romane.</p>
                 </div>
                 <div className="bg-white p-5 rounded-2xl border-l-4 border-indigo-500 shadow-sm border-y border-r border-slate-100">
                    <h4 className="font-black text-indigo-600 mb-2 text-lg">Interesse haben + an (Dat)</h4>
                    <p className="text-sm font-medium mb-2 text-theme-dark/70 border-b border-slate-100 pb-2">Sử dụng danh từ</p>
                    <p className="font-bold">Ich habe großes Interesse an Politik.</p>
                 </div>
               </div>
            </div>
          </div>
        );
      case 11:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Thực hành hỏi về Sở thích</h2>
             <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8 bg-blue-50 border-2 border-blue-200">
                <p className="font-bold text-theme-dark/80 text-xl text-left bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <span className="text-blue-500 block mb-2">"Liest du gern Romane?"</span>
                  <span className="block mb-2">"Ja, und wie! Das <b>interessiert mich sehr</b>."</span>
                  <span className="text-rose-500 block">"Nein, die finde ich ehrlich gesagt <b>langweilig</b>."</span>
                </p>
                <div className="bg-theme-cream p-4 rounded-xl border border-theme-dark/10 font-bold text-theme-dark mt-6 text-left space-y-2 text-sm text-theme-dark/80">
                   <p>Cùng luyện tập với Partner của bạn qua các chủ đề: Krimi, Sachbuch, Computerzeitschrift...</p>
                </div>
             </div>
          </div>
        );
      case 12:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 6</span>
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Tính từ Nhận xét Sách</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               {[
                 { w: 'spannend', m: 'Hồi hộp' },
                 { w: 'romantisch', m: 'Lãng mạn' },
                 { w: 'lustig', m: 'Hài hước' },
                 { w: 'interessant', m: 'Thú vị' },
                 { w: 'traurig', m: 'Buồn bã' },
                 { w: 'langweilig', m: 'Nhàm chán' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-5 text-center space-y-2 hover:scale-105 transition-transform bg-white border border-slate-200 shadow-sm rounded-2xl">
                   <h4 className="font-black text-lg text-theme-dark">{item.w}</h4>
                   <p className="font-bold text-sm text-theme-dark/60">{item.m}</p>
                 </div>
               ))}
             </div>
          </div>
        );
      case 13:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border-2 border-white">
               <PenTool size={36} />
             </div>
             <h2 className="text-4xl font-display font-black text-theme-dark">Viết: Mein Buchtipp</h2>
             <p className="text-xl font-bold text-theme-dark/80 max-w-2xl mx-auto leading-relaxed">
               Viết một đoạn giới thiệu cuốn sách yêu thích của bạn cho cả lớp.<br/>
             </p>
             <div className="bg-theme-cream p-8 rounded-2xl text-left max-w-xl mx-auto w-full border border-theme-dark/10 shadow-sm relative">
                <div className="absolute top-4 right-4 opacity-50"><CheckSquare size={32} /></div>
                <p className="italic font-medium text-slate-800 mb-3 border-b border-white pb-3">Ich möchte euch den Roman "..." von ... empfehlen.</p>
                <p className="italic font-medium text-slate-800 mb-3 border-b border-white pb-3">Der Roman ist sehr ... (tính từ), denn man erfährt viel über ...</p>
                <p className="italic font-medium text-slate-800">Das Buch hat mir sehr gut gefallen.</p>
             </div>
          </div>
        );
      case 14:
        return (
          <div className="flex gap-8 items-center h-full flex-col md:flex-row">
            <div className="flex-1 space-y-6 w-full text-center md:text-left">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mb-4">TIẾT 7</span>
              <h2 className="text-4xl font-display font-black text-theme-dark">Thảo luận Nhóm</h2>
              <div className="space-y-4 slide-card p-6 border-2 border-theme-dark/5 bg-theme-cream text-left">
                 <h4 className="font-bold text-theme-primary text-xl">Lợi ích của việc đọc sách</h4>
                 <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-3">
                    <li>Sử dụng liên từ chỉ nguyên nhân: <b>weil</b>, <b>denn</b>.</li>
                    <li>Nêu ví dụ cụ thể với <b>zum Beispiel</b>.</li>
                 </ul>
                 <div className="h-px w-full bg-slate-200 my-4"></div>
                 <p className="font-bold text-theme-dark/90 flex items-center justify-between">
                   <span>E-Books <br/><span className="text-xs font-normal">Sách điện tử</span></span>
                   <span className="text-rose-500 font-black">VS</span>
                   <span className="text-right">Papierbücher <br/><span className="text-xs font-normal">Sách giấy</span></span>
                 </p>
              </div>
            </div>
            <div className="flex-1 w-full rounded-[32px] overflow-hidden relative shadow-xl min-h-[300px] md:min-h-[400px] bg-theme-secondary/20 border-4 border-white flex items-center justify-center p-8">
               <div className="w-32 h-32 bg-theme-secondary/50 text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                 <MessageSquare size={48} className="ml-2" />
               </div>
            </div>
          </div>
        );
      case 15:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 8</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Ôn Tập & Kiểm Tra Cuối Bài</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/20 space-y-6 text-left shadow-sm">
               <h4 className="font-black text-theme-primary text-xl border-b border-theme-dark/10 pb-4">1. Từ vựng & Ngữ pháp:</h4>
               <p className="font-bold text-theme-dark/80 flex flex-col gap-2">
                 <span>• <b>Modalverben im Präteritum</b> (musste, konnte, wollte...)</span>
                 <span>• <b>Interesse an / sich interessieren für</b></span>
                 <span>• <b>Từ vựng các thể loại sách</b></span>
               </p>
               
               <h4 className="font-black text-theme-secondary text-xl pt-4 border-b border-theme-dark/10 pb-4">2. Lektionstest</h4>
               <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-2">
                 <li>Hoàn thành bài tập AB trang 123 và Lektionstest trên hệ thống Moodle Edugo.</li>
               </ul>
            </div>
          </div>
        );
      case 16:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform -rotate-1 hover:rotate-1 transition-transform max-w-xl mx-auto cursor-pointer shadow-lg" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -right-8 text-6xl animate-bounce">🎓</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 20 <br/> Đã hoàn thành!
                </h2>
                <div className="w-16 h-2 bg-theme-primary mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-theme-dark/60 uppercase tracking-widest text-sm bg-theme-cream inline-block px-4 py-2 rounded-lg border-2 border-dashed border-theme-dark/20 text-center">
                   Tuyệt vời! Bạn đã có thể kể về quá khứ và chia sẻ sở thích đọc sách của mình!
                </p>
             </div>
          </div>
        );
      default:
        return null;
    }
  };

  const bgConfig = backgrounds[currentSlide] || { bgColor: 'bg-white' };

  return (
    <div className="max-w-6xl mx-auto py-4 md:py-8 w-full h-full flex flex-col pb-24">
      <div className="relative overflow-hidden min-h-[65vh] md:min-h-[650px] h-auto flex flex-col bg-zinc-100 rounded-[2.5rem] shadow-2xl border-4 border-white">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-1000 z-0">
           <div className={`absolute inset-0 w-full h-full transition-colors duration-1000 ${bgConfig.bgColor || 'bg-zinc-100'}`} />
           {bgConfig.bgImage && (
               <img src={bgConfig.bgImage} className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-1000" />
           )}
        </div>
        
        {/* Progress bar */}
        <div className="absolute top-0 left-0 h-2 bg-theme-primary transition-all duration-500 ease-out z-20 shadow-sm" style={{ width: currentSlide === -1 ? '0%' : `${((currentSlide + 1) / totalSlides) * 100}%` }} />
        
        {/* Content */}
        <div className="flex-1 p-2 md:p-8 relative z-10 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full"
            >
              {renderSlide()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        {currentSlide === -1 ? (
          <div className="p-4 flex items-center justify-between border-t border-theme-dark/5 bg-theme-cream/50 z-10 w-full">
            {onBack ? (
              <button
                onClick={onBack}
                className="px-4 md:px-6 py-2 md:py-3 rounded-[20px] font-black tracking-wide transition-all flex items-center gap-1 md:gap-2 bg-white border border-theme-dark/10 hover:bg-theme-dark/5 active:scale-95 text-theme-dark text-xs md:text-base shadow-sm"
              >
                <ChevronLeft size={18} className="md:w-5 md:h-5" /> <span className="hidden sm:inline">Trở lại</span>
              </button>
            ) : <div />}
            <div className="text-[10px] md:text-xs font-bold text-theme-dark/50 tracking-widest uppercase text-right">
              Sơ đồ Lektion 20
            </div>
          </div>
        ) : (
          <div className="p-4 md:p-6 flex items-center justify-between border-t border-theme-dark/5 bg-theme-cream/50 z-10 w-full">
            <button
              onClick={currentSlide === 0 ? () => setCurrentSlide(-1) : prevSlide}
              className="px-4 md:px-6 py-2 md:py-3 rounded-[20px] font-black tracking-wide transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 hover:bg-theme-dark/5 active:scale-95 text-theme-dark text-xs md:text-base"
            >
              <ChevronLeft size={18} className="md:w-5 md:h-5" /> <span className="hidden sm:inline">{currentSlide === 0 ? 'Lộ trình' : 'Trước'}</span>
            </button>
            <div className="flex flex-col items-center gap-1 px-2">
              <span className="font-black text-theme-dark/30 tracking-widest text-xs md:text-sm">
                {currentSlide + 1} / {totalSlides-1}
              </span>
              <button onClick={() => setCurrentSlide(-1)} className="text-[10px] text-theme-primary flex items-center justify-center font-bold hover:underline uppercase tracking-widest p-1 mt-1 bg-theme-primary/10 rounded-lg sm:bg-transparent sm:mt-0 sm:p-0">
                Xem Lộ Trình
              </button>
            </div>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 2 && currentSlide !== 16}
              className="px-4 md:px-6 py-2 md:py-3 bg-theme-primary text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-theme-primary/20 hover:bg-theme-dark transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
            >
              <span className="hidden sm:inline">
                {currentSlide === 16 ? 'Đóng lại' : 'Tiếp'}
              </span> 
              <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
