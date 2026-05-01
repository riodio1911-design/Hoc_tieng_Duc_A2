import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, CheckCircle2, MessageSquare, PenTool, Map, BookOpen, Music, CheckSquare } from 'lucide-react';

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
  3: { bgColor: 'bg-sky-50' },
  4: { bgColor: 'bg-emerald-50' },
  5: { bgColor: 'bg-orange-50' },
  6: { bgColor: 'bg-theme-cream' },
  7: { bgColor: 'bg-violet-50' },
  8: { bgColor: 'bg-fuchsia-50' },
  9: { bgColor: 'bg-indigo-50' },
  10: { bgColor: 'bg-theme-cream' },
  11: { bgColor: 'bg-white' }
};

export default function Lektion19Slides({ playAudio, playingId, onBack }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const totalSlides = 12; 

  const nextSlide = () => {
    if (currentSlide === 6 || currentSlide === totalSlides - 1) {
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
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình Lektion 19</h2>
              <p className="font-bold text-theme-dark/60">Wohin gehen wir heute? (Hôm nay chúng ta đi đâu?)</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: VĂN HÓA & ĐI - ĐẾN
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
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 1: Định hướng & Văn hóa</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Các hoạt động giải trí</p>
                    </div>
                  </button>
                  <button 
                    onClick={() => setCurrentSlide(4)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-primary/50 shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 2: Woher?</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Giới từ chỉ nguồn gốc</p>
                    </div>
                  </button>
                  {[
                    {title: "Tiết 3: Wohin? (Đích đến)", slide: 5},
                    {title: "Tiết 4: Tổng kết Buổi 1 & Nghe", slide: 6}
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
                  BUỔI 2: ĐỀ NGHỊ & THUYẾT PHỤC
                </h3>
                <div className="space-y-4">
                   {[
                    {title: "Tiết 5: Từ vựng Sự kiện", onClick: () => setCurrentSlide(7)},
                    {title: "Tiết 6: Giao tiếp & Thuyết phục", onClick: () => setCurrentSlide(8)},
                    {title: "Tiết 7: Đọc hiểu & Thơ ca", onClick: () => setCurrentSlide(9)},
                    {title: "Tiết 8: Ôn tập & Test", onClick: () => setCurrentSlide(10)}
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
          </div>
        );
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-theme-dark bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 19</span>
              <h1 className="text-4xl md:text-5xl font-display font-black text-white leading-tight">
                Wohin gehen wir heute?
              </h1>
              <p className="text-xl text-white/80 font-bold">Chủ đề: Đi đâu, từ đâu & Các hoạt động văn hóa</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Định Hướng Lektion 19</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-8">
              <div className="flex justify-center">
                <button 
                  onClick={() => playAudio("Chào các bạn. Trong bài này, chúng ta sẽ học cách hỏi và trả lời đi đâu, từ đâu về. Đồng thời chúng ta học cách rủ bạn bè tham gia các sự kiện văn hóa nhé.", 'L19-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-theme-primary/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'L19-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-theme-secondary text-lg">1. Mục Tiêu Giao Tiếp</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Hỏi và nói về đích đến, nguồn gốc di chuyển</li>
                    <li>Rủ bạn đi chơi, đưa ra lời từ chối khéo léo</li>
                    <li>Nói về sự kiện văn hóa nghệ thuật</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-theme-accent text-lg">2. Từ Vựng & Đọc Hiểu</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Địa điểm: Kino, Theater, Museum, Konzert...</li>
                    <li>Tính từ: ausgezeichnet, spannend, traurig...</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-theme-dark/5 text-center">
                <h4 className="font-black text-theme-primary mb-3">3. Ngữ pháp trọng tâm</h4>
                <ul className="text-sm font-bold text-theme-dark/70 flex max-md:flex-col justify-center gap-6">
                  <li>• Giới từ "Woher?": aus, von (Dativ)</li>
                  <li>• Giới từ "Wohin?": in (Akkusativ), zu, nach (Dativ)</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Ôn Bài Cũ (Lektion 18)</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8 bg-white shadow-sm border border-slate-100">
               <h3 className="text-2xl font-black text-theme-secondary italic">"Weather & Emotions"</h3>
               <p className="font-bold text-theme-dark/60 text-lg">Ghép động từ có giới từ với cảm xúc & thời tiết:</p>
               <div className="bg-theme-cream p-4 rounded-xl border border-theme-dark/10 font-bold text-theme-dark text-left space-y-2 text-lg text-theme-dark/80">
                  <p>1. "Trời nắng quá, tôi mong đợi mặt trời!" <br/> 👉 Ich <span className="text-emerald-600">freue mich auf</span> die Sonne.</p>
                  <p>2. "Tôi bực mình về cơn mưa." <br/> 👉 Ich <span className="text-amber-600">ärgere mich über</span> den Regen.</p>
               </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 1</span>
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Địa Điểm Văn Hóa Nghệ Thuật</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 { w: 'das Kino', i: '🍿', m: 'Rạp phim' },
                 { w: 'das Theater', i: '🎭', m: 'Nhà hát' },
                 { w: 'das Konzert', i: '🎫', m: 'Buổi hòa nhạc' },
                 { w: 'das Museum', i: '🖼️', m: 'Bảo tàng' },
                 { w: 'die Ausstellung', i: '🎨', m: 'Triển lãm' },
                 { w: 'die Sendung', i: '📺', m: 'Chương trình TV' },
                 { w: 'das Publikum', i: '👥', m: 'Khán giả' },
                 { w: 'der Journalist', i: '🎙️', m: 'Nhà báo' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-4 text-center space-y-4 hover:-translate-y-1 transition-transform border-b-4 border-theme-primary/20 bg-white shadow-sm">
                   <div className="text-4xl">{item.i}</div>
                   <div>
                     <h4 className="font-black text-sm md:text-base text-theme-dark">{item.w}</h4>
                     <p className="font-bold text-[11px] md:text-xs text-theme-dark/60">{item.m}</p>
                   </div>
                   <button 
                     onClick={() => playAudio(item.w, `l19-v-${i}`, 'de-DE')}
                     className="mx-auto flex"
                   >
                     {playingId === `l19-v-${i}` ? <CheckCircle2 className="text-emerald-500 w-5 h-5" /> : <Volume2 className="text-theme-dark/30 hover:text-theme-primary w-5 h-5" />}
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
            <h2 className="text-4xl font-display font-black text-theme-dark">Giới từ chỉ Nguồn gốc: Woher?</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto space-y-8 bg-theme-primary/5 border-2 border-theme-primary/20 text-left">
               <p className="text-xl font-bold text-theme-dark leading-relaxed">
                 Để nói "từ ... về/đến", ta dùng giới từ <span className="text-theme-primary">aus</span> và <span className="text-theme-secondary">von</span> đi với <b>Dativ</b>.
               </p>
               <div className="grid sm:grid-cols-2 gap-6">
                 <div className="bg-white p-5 rounded-2xl border-l-4 border-theme-primary shadow-sm space-y-2 border-y border-r border-slate-100 min-h-32">
                    <h4 className="font-black text-theme-primary mb-2 text-lg">aus + Dativ (Từ bên trong)</h4>
                    <p className="text-sm font-medium text-theme-dark/70">Không gian có bao quanh (nhà, thành phố, quốc gia, rạp chiếu phim).</p>
                    <p className="font-bold mt-2">Ich komme aus dem Kino.</p>
                 </div>
                 <div className="bg-white p-5 rounded-2xl border-l-4 border-theme-secondary shadow-sm space-y-2 border-y border-r border-slate-100 min-h-32">
                    <h4 className="font-black text-theme-secondary mb-2 text-lg">von + Dativ (Hoạt động / Con người)</h4>
                    <p className="text-sm font-medium text-theme-dark/70">Từ một người, một hoạt động sự kiện, hoặc một nơi không rõ không gian kín.</p>
                    <p className="font-bold mt-2">Ich komme vom (= von dem) Sport. / vom Arzt.</p>
                 </div>
               </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 3</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Giới từ chỉ Đích đến: Wohin?</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto space-y-8 bg-sky-50 border-2 border-sky-100 text-left">
               <p className="text-xl font-bold text-theme-dark leading-relaxed">
                 Để trả lời cho câu "Đi đâu?", ta chia hai trường hợp <span className="text-sky-600">in (Akk)</span> và <span className="text-emerald-600">zu (Dativ)</span> / nach.
               </p>
               <div className="grid sm:grid-cols-2 gap-6">
                 <div className="bg-white p-5 rounded-2xl border-l-4 border-sky-500 shadow-sm space-y-2">
                    <h4 className="font-black text-sky-600 mb-2 text-lg">in + Akkusativ</h4>
                    <p className="text-sm font-medium text-theme-dark/70">Vào bên trong một nơi chốn cụ thể (có gian nhà/cổng).</p>
                    <p className="font-bold mt-2">Wir gehen ins (= in das) Kino. / in die Stadt.</p>
                 </div>
                 <div className="bg-white p-5 rounded-2xl border-l-4 border-emerald-500 shadow-sm space-y-2">
                    <h4 className="font-black text-emerald-600 mb-2 text-lg">zu + Dativ</h4>
                    <p className="text-sm font-medium text-theme-dark/70">Đến gặp ai đó, đến một cơ sở có tổ chức / hoạt động.</p>
                    <p className="font-bold mt-2">Ich gehe zu Paul. / zur (= zu der) Bank.</p>
                 </div>
               </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="flex gap-8 items-center h-full flex-col md:flex-row">
            <div className="flex-1 space-y-6 w-full text-center md:text-left">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mb-4">TIẾT 4</span>
              <h2 className="text-4xl font-display font-black text-theme-dark">Tổng Kết Kép (Wo / Woher / Wohin)</h2>
              <div className="space-y-4 slide-card p-6 border-2 border-theme-dark/5 bg-theme-cream text-left">
                 <p className="font-bold text-theme-dark/80 text-lg leading-relaxed mb-4">
                   Tóm tắt bộ 3 giới từ tương ứng thần thánh:
                 </p>
                 <div className="bg-white p-4 rounded-xl space-y-3 border border-slate-200 text-center font-bold">
                    <div className="grid grid-cols-3 gap-2 border-b border-theme-dark/10 pb-2 mb-2">
                      <div className="text-rose-500">Woher?</div>
                      <div className="text-theme-dark/50">Wo?</div>
                      <div className="text-sky-500">Wohin?</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-lg">aus dem</div>
                      <div>im (in dem)</div>
                      <div className="text-lg">ins (in das)</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-lg">vom (von dem)</div>
                      <div>beim (bei dem)</div>
                      <div className="text-lg">zum (zu dem)</div>
                    </div>
                 </div>
              </div>
            </div>
            <div className="flex-1 w-full rounded-[32px] overflow-hidden relative shadow-xl min-h-[300px] md:min-h-[400px] bg-slate-100 border-4 border-white flex items-center justify-center p-8">
               <div className="w-32 h-32 bg-slate-300 text-slate-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                 <Play size={48} className="ml-2" />
               </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">BUỔI 2 : TIẾT 5</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Từ vựng Sự Kiện & Chương Trình</h2>
             <div className="slide-card p-10 max-w-3xl mx-auto space-y-8 bg-theme-secondary/5 border-2 border-theme-secondary/20 text-left">
               <p className="text-xl font-medium text-theme-dark border-b-2 border-white pb-4">
                 Khi xem một lịch trình văn hóa (Kulturprogramm), ta thường gặp các khái niệm thời gian:
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="bg-theme-cream p-4 rounded-xl border border-theme-dark/10 shadow-sm text-center">
                    <p className="font-black text-theme-secondary uppercase tracking-widest mb-1 text-sm">Cột mốc</p>
                    <p className="font-bold">Anfang des Jahres (Đầu năm)</p>
                    <p className="font-bold">Ende des Monats (Cuối tháng)</p>
                 </div>
                 <div className="bg-theme-cream p-4 rounded-xl border border-theme-dark/10 shadow-sm text-center">
                    <p className="font-black text-emerald-600 uppercase tracking-widest mb-1 text-sm">Khoảng</p>
                    <p className="font-bold text-lg">von ... bis ...</p>
                    <p className="text-slate-500 font-medium text-sm">(Từ ... đến ...)</p>
                 </div>
               </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 6</span>
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Rủ Rê & Thuyết Phục</h2>
             <div className="grid md:grid-cols-3 gap-6">
                <div className="slide-card p-6 bg-white border border-slate-200 rounded-3xl shadow-sm text-left">
                  <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mb-4"><MessageSquare size={20}/></div>
                  <h4 className="font-black text-theme-dark text-lg mb-3">1. Rủ (Vorschläge)</h4>
                  <p className="font-bold mb-2">Haben Sie / Hast du Lust auf ...?</p>
                  <p className="font-bold">Sollen wir ...?</p>
                </div>
                <div className="slide-card p-6 bg-white border border-slate-200 rounded-3xl shadow-sm text-left">
                  <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4"><MessageSquare size={20}/></div>
                  <h4 className="font-black text-theme-dark text-lg mb-3">2. Từ chối (Ablehnen)</h4>
                  <p className="font-bold mb-2">Also, ich weiß nicht...</p>
                  <p className="font-bold">Das hört sich nicht so toll an.</p>
                </div>
                <div className="slide-card p-6 bg-white border border-slate-200 rounded-3xl shadow-sm text-left">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4"><CheckSquare size={20}/></div>
                  <h4 className="font-black text-theme-dark text-lg mb-3">3. Thuyết phục</h4>
                  <p className="font-bold mb-2 text-emerald-600">Das musst du sehen!</p>
                  <p className="font-bold text-emerald-600">Komm doch mit!</p>
                </div>
             </div>
          </div>
        );
      case 9:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-indigo-200 shadow-sm">
               <Music size={36} />
             </div>
             <h2 className="text-4xl font-display font-black text-theme-dark">Poetry Slam (Thơ ca)</h2>
             <p className="text-xl font-bold text-theme-dark/80 max-w-2xl mx-auto leading-relaxed">
               Học viên ứng dụng các từ nối phương hướng vào thơ ca, sáng tác bài thơ gieo vần kết hợp cấu trúc (Woher / Wohin).
             </p>
             <div className="bg-white/90 p-6 rounded-2xl border-l-4 border-indigo-500 text-left max-w-lg mx-auto space-y-2 mt-4 shadow-sm border border-slate-100 uppercase tracking-widest italic font-bold">
                <p>Wohin gehen wir heute?</p>
                <p>Ins Theater, das ist eine Freude!</p>
                <p>Woher kommst du, mein Freund?</p>
                <p>Aus der Stadt, wo die Sonne scheint!</p>
             </div>
          </div>
        );
      case 10:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 8</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Lektionstest & Tổng kết</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/20 space-y-6 text-left shadow-sm">
               <h4 className="font-black text-theme-primary text-xl border-b border-theme-dark/10 pb-4">Nội dung Test:</h4>
               <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-2">
                 <li><b>Woher / Wohin</b> (Phân biệt và điền in, zu, nach, aus, von).</li>
                 <li><b>Từ vựng</b> các loại hình hoạt động văn hóa giải trí.</li>
                 <li><b>Sắp xếp đoạn hội thoại</b> rủ bạn bè đi chơi.</li>
               </ul>
            </div>
            <button 
                onClick={() => playAudio("Tổng kết: Chúng ta đi ra khỏi nhà (aus dem Haus), đến rạp phim (ins Kino), và sau đó trở về từ rạp (vom Kino). Cảm ơn các bạn!", 'l19-end-audio', 'vi-VN')}
                className="mx-auto flex items-center justify-center p-4 bg-white border border-slate-200 shadow-sm rounded-2xl font-bold gap-3 hover:bg-slate-50 transition-colors w-max"
              >
                <Volume2 className="text-theme-dark/50" /> Nghe giáo viên tổng kết
              </button>
          </div>
        );
      case 11:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform rotate-1 hover:-rotate-1 transition-transform max-w-xl mx-auto pointer-events-auto cursor-pointer" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -left-8 text-6xl animate-bounce">🎓</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 19 <br/> Đã hoàn thành!
                </h2>
                <div className="w-16 h-2 bg-theme-primary mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-theme-dark/60 uppercase tracking-widest text-sm bg-theme-cream inline-block px-4 py-2 rounded-lg border-2 border-dashed border-theme-dark/20 text-center">
                   Giờ đây bạn đã có thể kể rõ ràng các hướng (Woher, Wohin) <br/> và lên lịch rủ rê bạn bè một cách tự tin!
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
            
            <div className="text-[10px] md:text-xs font-bold text-theme-dark/50 tracking-widest uppercase text-right">
              Sơ đồ Lektion 19
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
              disabled={currentSlide === totalSlides - 2 && currentSlide !== 11}
              className="px-4 md:px-6 py-2 md:py-3 bg-theme-primary text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-theme-primary/20 hover:bg-theme-dark transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
            >
              <span className="hidden sm:inline">
                {currentSlide === 11 ? 'Đóng lại' : 'Tiếp'}
              </span> 
              <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
