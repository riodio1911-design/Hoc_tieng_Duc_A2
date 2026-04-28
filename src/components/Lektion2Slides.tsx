import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, CheckCircle2, MessageSquare, BookOpen, PenTool, CheckSquare, Home, ArrowRightLeft, Lightbulb, Box } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&h=800&fit=crop&q=80' },
  0: { bgColor: 'bg-theme-dark' }, 
  1: { bgColor: 'bg-rose-50' },
  2: { bgColor: 'bg-indigo-50' },
  3: { bgColor: 'bg-emerald-50' },
  4: { bgColor: 'bg-blue-50' },
  5: { bgColor: 'bg-slate-50' },
  10: { bgColor: 'bg-theme-cream' },
  11: { bgColor: 'bg-amber-50' },
  15: { bgColor: 'bg-rose-50' },
  16: { bgColor: 'bg-white' },
  20: { bgImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-theme-primary/10' }
};

export default function Lektion2Slides({ playAudio, playingId, onBack }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const totalSlides = 17; 

  const nextSlide = () => {
    if (currentSlide === 7 || currentSlide === totalSlides - 1) {
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
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình Lektion 2</h2>
              <p className="font-bold text-theme-dark/60">Hành trình 8 tiết học chuyên sâu</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: Đồ nội thất & Vị trí (Wo?)
                </h3>
                <div className="space-y-4 flex-1">
                  <button 
                    onClick={() => setCurrentSlide(0)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-primary shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 1: Giới thiệu & Đồ đạc</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Kommode, Schrank...</p>
                    </div>
                  </button>
                  {[
                    {title: 'Tiết 2: Wo? (Dativ)', slide: 4},
                    {title: 'Tiết 3: Động từ trạng thái', slide: 6},
                    {title: 'Tiết 4: Tổng kết Buổi 1', slide: 9}
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
                        <h4 className="font-black text-theme-dark hover:text-theme-primary transition-colors text-lg">{item.title}</h4>
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
                  BUỔI 2: Trang trí & Chuyển động
                </h3>
                <div className="space-y-4">
                   {[
                    {title: "Tiết 5: Wohin? (Akk) & Động từ", onClick: () => setCurrentSlide(11)},
                    {title: "Tiết 6: Lời khuyên trang trí", onClick: () => setCurrentSlide(13)},
                    {title: "Tiết 7: Kể chuyện chuyển nhà", onClick: () => setCurrentSlide(14)},
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
          </div>
        );
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&h=800&fit=crop')] bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-rose-500 text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 2</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                Wohin mit der Kommode?
              </h1>
              <p className="text-xl text-white/80 font-bold">Chủ đề: Nhà cửa, Đồ đạc & Sự thay đổi vị trí</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-rose-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 1</span>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Video Giới Thiệu</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-rose-500/10 space-y-8">
              <div className="flex justify-center">
                <button 
                   onClick={() => playAudio('Chào các bạn. Hôm nay Jasmin và Stefan vừa chuyển đến căn hộ mới. Nhưng họ đang tranh luận xem nên đặt cái tủ Kommode này ở đâu. Chúng ta cùng xem nhé!', 'l2-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-rose-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-rose-500/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'l2-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="text-center font-bold text-theme-dark/70">
                <p>Khám phá cách sắp xếp đồ đạc trong nhà ở và cách biểu đạt vị trí, sự di chuyển.</p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex gap-8 items-center h-full">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-display font-black text-theme-dark">Có Gì Trong Thùng Carton?</h2>
              <h3 className="text-2xl font-bold text-rose-600">Was ist das?</h3>
              <p className="text-theme-dark/80 leading-relaxed font-medium text-lg">
                Khi dọn nhà, chúng ta có rất nhiều đồ nội thất (Möbel). Hãy cùng mở thùng đồ của Jasmin xem có những món đồ gì nhé!
              </p>
            </div>
            <div className="flex-1 rounded-[32px] overflow-hidden relative shadow-xl min-h-[400px] bg-theme-cream flex items-center justify-center border-4 border-white">
              <Box size={100} className="text-rose-500 opacity-20" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
             <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <Home size={40} />
             </div>
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ Vựng: Đồ Nội Thất (Möbel)</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
               {[
                 { w: 'die Kommode', t: 'tủ ngăn kéo' },
                 { w: 'der Schrank', t: 'tủ đồ' },
                 { w: 'das Regal', t: 'kệ sách' },
                 { w: 'der Teppich', t: 'tấm thảm' },
                 { w: 'die Lampe', t: 'cái đèn' },
                 { w: 'das Kissen', t: 'cái gối' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-6 text-center space-y-4 hover:-translate-y-1 transition-transform border border-rose-100 bg-white">
                   <button 
                     onClick={() => playAudio(item.w, `l2-v-${i}`, 'de-DE')}
                     className="w-10 h-10 bg-rose-50 rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     {playingId === `l2-v-${i}` ? <CheckCircle2 className="text-rose-500 w-5 h-5" /> : <Volume2 className="text-rose-500 w-5 h-5" />}
                   </button>
                   <div>
                     <h4 className="font-black text-md text-theme-dark">{item.w}</h4>
                     <p className="font-bold text-sm text-theme-dark/60">{item.t}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-rose-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 2</span>
             <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <Box size={40} />
             </div>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Ngữ Pháp: Wo? (Trạng Thái Tĩnh)</h2>
            <div className="slide-card p-10 bg-emerald-50 border-2 border-emerald-200 text-center">
               <h3 className="text-2xl font-black text-emerald-600 uppercase mb-4">Wechselpräpositionen + Dativ</h3>
               <p className="text-xl font-medium text-theme-dark leading-relaxed italic mt-4">
                 Khi bạn muốn hỏi "Vật đó đang NẰM Ở ĐÂU?" (Trạng thái tĩnh, không có sự di chuyển).
                 Ta dùng câu hỏi <span className="font-bold text-rose-600">Wo?</span> + Giới từ chỉ vị trí + <span className="font-bold text-emerald-600 underline">Dativ</span>.
               </p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">9 Giới Từ Vị Trí (Wo?)</h2>
            <div className="slide-card p-10 bg-emerald-50 border-2 border-emerald-200">
               <div className="grid grid-cols-3 gap-4 mb-8">
                 {['an', 'auf', 'hinter', 'in', 'neben', 'über', 'unter', 'vor', 'zwischen'].map((prep, i) =>(
                    <div key={i} className="font-black text-xl text-emerald-700 bg-emerald-100/50 py-2 rounded-lg">
                       {prep}
                    </div>
                 ))}
               </div>
               <div className="space-y-4 max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-sm text-left">
                 <p className="font-bold text-lg text-emerald-800">VD: <span className="text-theme-dark font-medium">Das Bild hängt </span><span className="text-rose-600 underline">an der</span><span className="text-theme-dark font-medium"> Wand. (die Wand &rarr; der Wand)</span></p>
                 <div className="h-px bg-slate-200 w-full my-4" />
                 <p className="text-sm font-bold text-emerald-600">Dativ: der/das &rarr; dem | die &rarr; der | die(pl) &rarr; den...n</p>
               </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto text-center">
            <span className="px-6 py-2 bg-rose-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 3</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Động từ Trạng Thái Vị Trí</h2>
            <div className="slide-card p-10 bg-amber-50 border-2 border-amber-200">
               <ul className="space-y-6 text-xl font-medium text-amber-900 text-left">
                  <li className="flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-amber-500 shrink-0" /> <b>stehen:</b> Đứng (đồ vật có chân/đế như bàn, ghế, tủ)</li>
                  <li className="flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-amber-500 shrink-0" /> <b>liegen:</b> Nằm (đồ vật phẳng/ngang như sách, thảm)</li>
                  <li className="flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-amber-500 shrink-0" /> <b>hängen:</b> Treo (được treo tường như tranh, đèn)</li>
                  <li className="flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-amber-500 shrink-0" /> <b>sitzen:</b> Ngồi (thường dùng cho người đang ngồi)</li>
               </ul>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-center pb-12">
            <div className="w-32 h-32 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-theme-primary/30">
              <CheckCircle2 size={64} />
            </div>
            <div className="space-y-4">
               <h2 className="text-5xl font-display font-black text-theme-dark">Tổng Kết Buổi 1</h2>
               <p className="text-xl font-bold text-theme-dark/60 uppercase tracking-widest">Hiểu cách mô tả sự tĩnh bật (Wo? + Dativ)</p>
             </div>
             <div className="slide-card p-8 text-left space-y-4 max-w-md w-full mx-auto bg-white/90 font-bold text-theme-dark/80">
                <p>👉 Từ vựng đồ nội thất</p>
                <p>👉 Wo? + 9 giới từ + Dativ</p>
                <p>👉 Động từ: stehen, liegen, hängen, sitzen</p>
             </div>
          </div>
        );
        case 8:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto">BUỔI 2</span>
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto ml-2">TIẾT 5</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Wohin? (Tới Đâu)</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-6 bg-blue-50 border-2 border-blue-200 text-left">
               <h3 className="text-2xl font-black text-blue-600 uppercase mb-4 text-center">Sự Chuyển Động (Akkusativ)</h3>
               <p className="font-bold text-theme-dark/80 text-xl leading-relaxed italic text-center text-blue-900">
                 Trái ngược với Wo, khi bạn CẦM một món đồ và ĐẶT nó tới một vị trí. Đó là sự chuyển động. Hành động này dùng <span className="font-black">Wohin?</span> + Giới từ + <span className="underline">Akkusativ</span>.
               </p>
            </div>
          </div>
        );
        case 9:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Cặp Động Từ Vị Trí & Chuyển Động</h2>
            <div className="flex gap-4 max-w-4xl mx-auto w-full flex-col">
              {[
                { a: 'setzen (đặt ngồi xuống)', b: 'sitzen (đang ngồi)' },
                { a: 'stellen (đặt đứng lên)', b: 'stehen (đang đứng)' },
                { a: 'legen (đặt nằm xuống)', b: 'liegen (đang nằm)' },
                { a: 'hängen (treo lên)', b: 'hängen (đang treo)' }
              ].map((pair, idx) => (
                <div key={idx} className="flex gap-4 items-center slide-card bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="flex-1 text-right">
                      <p className="text-2xl font-black text-blue-600">{pair.a}</p>
                      <p className="text-sm font-bold text-slate-500 uppercase">Wohin + Akkusativ</p>
                  </div>
                  <div className="text-2xl font-bold text-slate-300">➡️</div>
                  <div className="flex-1 text-left">
                      <p className="text-2xl font-black text-emerald-600">{pair.b}</p>
                      <p className="text-sm font-bold text-slate-500 uppercase">Wo + Dativ</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        case 10:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto text-center">
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 6</span>
             <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <Lightbulb size={40} />
             </div>
            <h2 className="text-4xl font-display font-black text-theme-dark">Einrichtungstipps (Lời khuyên)</h2>
            <div className="slide-card p-10 bg-indigo-50 border-2 border-indigo-100 shadow-xl space-y-6">
                <p className="font-bold text-lg text-indigo-800 text-left">
                  "Stellen Sie <span className="text-rose-600 underline">nicht zu viele</span> Möbel in den Raum."
                </p>
                <p className="font-bold text-lg text-indigo-800 text-left">
                  "<span className="text-rose-600 underline">Sonst</span> wird das Zimmer zu dunkel."
                </p>
                <p className="font-medium mt-4 text-slate-700 italic">Học cách cấu trúc mệnh lệnh cách để đưa ra lời khuyên trang trí nhà cửa.</p>
            </div>
          </div>
        );
        case 11:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
            <span className="px-6 py-2 bg-theme-accent text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 7</span>
            <div className="w-20 h-20 bg-theme-accent/10 text-theme-accent rounded-[32px] flex items-center justify-center mx-auto mb-4">
              <ArrowRightLeft size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark">Chuyển Nhà (Umzug)</h2>
            <div className="slide-card p-10 bg-white shadow-xl border-2 border-theme-accent/10 space-y-6 text-left">
               <h4 className="font-black text-theme-accent text-xl border-b border-theme-dark/10 pb-4">Câu hỏi thảo luận (Integration)</h4>
               <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-4">
                 <li className="text-lg">Bạn đã từng chuyển nhà bao giờ chưa?</li>
                 <li className="text-lg">Bạn thích hay ghét việc vận chuyển đồ đạc?</li>
                 <li className="text-lg">Tự miêu tả việc bạn sẽ sắp xếp căn phòng của mình ra sao bằng cấu trúc <span className="font-bold italic">Wohin? (Akk)</span>.</li>
               </ul>
            </div>
          </div>
        );
      case 12:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform -rotate-1 hover:rotate-1 transition-transform max-w-xl mx-auto cursor-pointer" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -right-8 text-6xl animate-bounce">🏆</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 2 <br/> Hoàn thành!
                </h2>
                <div className="w-16 h-2 bg-rose-500 mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-theme-dark/60 uppercase tracking-widest text-sm bg-theme-cream inline-block px-4 py-2 rounded-lg border-2 border-dashed border-theme-dark/20">
                   Bây giờ bạn đã biết cách bố trí nhà cửa!
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
    <div className="max-w-6xl mx-auto py-4 md:py-8 w-full h-[85vh] md:h-auto flex flex-col">
      <div className="relative flex-1 rounded-[2.5rem] bg-zinc-100 shadow-2xl border-4 border-white overflow-hidden flex flex-col">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-1000 z-0">
           <div className={`absolute inset-0 w-full h-full transition-colors duration-1000 ${bgConfig.bgColor || 'bg-white'}`} />
           {bgConfig.bgImage && (
               <img src={bgConfig.bgImage} className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-1000" />
           )}
        </div>
        
        {/* Progress bar */}
        <div className="absolute top-0 left-0 h-2 bg-rose-500 transition-all duration-500 ease-out z-20 shadow-sm" style={{ width: currentSlide === -1 ? '0%' : `${((currentSlide + 1) / 13) * 100}%` }} />
        
        {/* Content */}
        <div className="flex-1 p-2 md:p-8 relative z-10 w-full overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full min-h-full flex flex-col justify-center"
            >
              {renderSlide()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        {currentSlide === -1 ? (
          <div className="p-4 flex items-center justify-between border-t border-theme-dark/5 bg-theme-cream/50 z-10 shrink-0">
            {onBack ? (
              <button
                onClick={onBack}
                className="px-4 md:px-6 py-2 md:py-3 rounded-[20px] font-black tracking-wide transition-all flex items-center gap-1 md:gap-2 bg-white border border-theme-dark/10 hover:bg-theme-dark/5 active:scale-95 text-theme-dark text-xs md:text-base shadow-sm"
              >
                <ChevronLeft size={18} className="md:w-5 md:h-5" /> <span className="hidden sm:inline">Trở lại</span>
              </button>
            ) : <div />}
            <div className="text-[10px] md:text-xs font-bold text-rose-500/80 tracking-widest uppercase text-right">
              Sơ đồ Lektion 2
            </div>
          </div>
        ) : (
          <div className="p-4 md:p-6 flex items-center justify-between border-t border-theme-dark/5 bg-theme-cream/50 z-10 shrink-0">
            <button
              onClick={currentSlide === 0 ? () => setCurrentSlide(-1) : prevSlide}
              className="px-4 md:px-6 py-2 md:py-3 rounded-[20px] font-black tracking-wide transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 hover:bg-theme-dark/5 active:scale-95 text-theme-dark text-xs md:text-base"
            >
              <ChevronLeft size={18} className="md:w-5 md:h-5" /> <span className="hidden sm:inline">{currentSlide === 0 ? 'Lộ trình' : 'Trước'}</span>
            </button>
            <div className="flex flex-col items-center gap-1 px-2">
              <span className="font-black text-theme-dark/30 tracking-widest text-xs md:text-sm">
                {currentSlide + 1} / 13
              </span>
              <button onClick={() => setCurrentSlide(-1)} className="text-[10px] text-rose-500 flex items-center justify-center font-bold hover:underline uppercase tracking-widest p-1 mt-1 bg-rose-500/10 rounded-lg sm:bg-transparent sm:mt-0 sm:p-0">
                Xem Lộ Trình
              </button>
            </div>
            <button
              onClick={() => {
                 if (currentSlide === 12) setCurrentSlide(-1);
                 else setCurrentSlide(p => p + 1);
              }}
              className="px-4 md:px-6 py-2 md:py-3 bg-rose-500 text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-rose-500/20 hover:bg-rose-600 transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
            >
              <span className="hidden sm:inline">
                {currentSlide === 12 ? 'Đóng lại' : 'Tiếp'}
              </span> 
              <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

