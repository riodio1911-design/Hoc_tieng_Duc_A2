import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, CheckCircle2, MessageSquare, BookOpen, PenTool, CheckSquare, MountainSnow, Headphones, Heart, Clock } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=800&fit=crop&q=80' },
  0: { bgColor: 'bg-theme-dark' }, 
  1: { bgColor: 'bg-emerald-50' },
  2: { bgColor: 'bg-blue-50' },
  3: { bgColor: 'bg-rose-50' },
  4: { bgColor: 'bg-amber-50' },
  5: { bgColor: 'bg-slate-50' },
  10: { bgColor: 'bg-theme-cream' },
  11: { bgColor: 'bg-indigo-50' },
  15: { bgColor: 'bg-emerald-50' },
  16: { bgColor: 'bg-white' },
  20: { bgImage: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-theme-primary/10' }
};

export default function Lektion3Slides({ playAudio, playingId, onBack }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const totalSlides = 16; 

  const nextSlide = () => {
    if (currentSlide === 13 || currentSlide === totalSlides - 1) {
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
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình Lektion 3</h2>
              <p className="font-bold text-theme-dark/60">Hành trình 8 tiết học chuyên sâu</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: Danh từ hóa & Kì nghỉ
                </h3>
                <div className="space-y-4 flex-1">
                  <button 
                    onClick={() => setCurrentSlide(0)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-primary shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 1: Giới thiệu & Thiên nhiên</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Wald, Strand, Berge...</p>
                    </div>
                  </button>
                  {[
                    {title: 'Tiết 2: Danh từ hóa "-ung"', slide: 4},
                    {title: 'Tiết 3: Danh từ chỉ người "-er"', slide: 6},
                    {title: 'Tiết 4: Tổng kết Buổi 1', slide: 8}
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
                  BUỔI 2: Quá khứ & Cảm xúc
                </h3>
                <div className="space-y-4">
                   {[
                    {title: "Tiết 5: Từ vựng cảm giác", onClick: () => setCurrentSlide(9)},
                    {title: "Tiết 6: Phân biệt Vorlieben", onClick: () => setCurrentSlide(10)},
                    {title: "Tiết 7: Tìm sự yên bình (Integration)", onClick: () => setCurrentSlide(12)},
                    {title: "Tiết 8: Test & Tổng kết", onClick: () => setCurrentSlide(13)}
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
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=800&fit=crop')] bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 3</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                Hier finden Sie Ruhe und Erholung
              </h1>
              <p className="text-xl text-white/80 font-bold">Chủ đề: Nghỉ dưỡng, Thiên nhiên & Sự thư giãn</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 1</span>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Video Giới Thiệu</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-emerald-500/10 space-y-8">
              <div className="flex justify-center">
                <button 
                   onClick={() => playAudio('Sau những ngày làm việc căng thẳng, ai cũng muốn tìm một nơi yên bình để thư giãn. Hôm nay chúng ta sẽ học từ vựng về kỳ nghỉ, thiên nhiên và cách kể về ngày xưa nhé!', 'l3-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'l3-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="text-center font-bold text-theme-dark/70">
                <p>Khám phá cách biến đổi từ loại và các cụm từ thể hiện cảm xúc, sở thích.</p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex gap-8 items-center h-full">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-display font-black text-theme-dark">Bạn Thích Đi Đâu?</h2>
              <h3 className="text-2xl font-bold text-emerald-600">Was ist für Sie Erholung?</h3>
              <p className="text-theme-dark/80 leading-relaxed font-medium text-lg">
                Với bạn, thư giãn là gì? Là đi dạo trên bãi biển (der Strand), leo núi (die Berge) hay đi dạo quanh hồ (der See)?
              </p>
            </div>
            <div className="flex-1 rounded-[32px] overflow-hidden relative shadow-xl min-h-[400px] bg-theme-cream flex items-center justify-center border-4 border-white">
              <MountainSnow size={100} className="text-emerald-500 opacity-20" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
             <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <MountainSnow size={40} />
             </div>
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ Vựng: Thiên nhiên (Natur)</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
               {[
                 { w: 'der Strand', t: 'bãi biển' },
                 { w: 'die Berge (pl)', t: 'những ngọn núi' },
                 { w: 'der See', t: 'cái hồ' },
                 { w: 'das Meer', t: 'đại dương' },
                 { w: 'der Wald', t: 'khu rừng' },
                 { w: 'das Dorf', t: 'ngôi làng' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-6 text-center space-y-4 hover:-translate-y-1 transition-transform border border-emerald-100 bg-white">
                   <button 
                     onClick={() => playAudio(item.w, `l3-v-${i}`, 'de-DE')}
                     className="w-10 h-10 bg-emerald-50 rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     {playingId === `l3-v-${i}` ? <CheckCircle2 className="text-emerald-500 w-5 h-5" /> : <Volume2 className="text-emerald-500 w-5 h-5" />}
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
            <span className="px-6 py-2 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 2</span>
            <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <BookOpen size={40} />
             </div>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Ngữ Pháp: Danh từ hóa "-ung"</h2>
            <div className="slide-card p-10 bg-rose-50 border-2 border-rose-200 text-center">
               <h3 className="text-2xl font-black text-rose-600 mb-4">Thay đổi chức năng từ (Nomenbildung)</h3>
               <p className="text-xl font-medium text-theme-dark leading-relaxed mt-4 bg-white p-4 rounded-xl inline-block shadow-sm">
                 <span className="text-slate-400">Động từ (bỏ -en)</span> + <span className="font-black text-rose-600 bg-rose-100 px-2 py-1 rounded">-ung</span>
               </p>
               <p className="text-lg font-bold text-theme-dark mt-6 italic">
                 ✨ Mẹo: Tất cả các danh từ có đuôi "-ung" đều là giống cái <b>(die)</b>.
               </p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Các ví dụ phổ biến với "-ung"</h2>
            <div className="grid md:grid-cols-2 gap-6 w-full mt-8">
               <div className="slide-card bg-white border border-rose-200 p-8 text-center space-y-4 shadow-sm">
                  <p className="text-2xl text-slate-500 line-through decoration-rose-500">beraten</p>
                  <p className="text-3xl font-black text-rose-600">&rarr; die Beratung</p>
                  <p className="font-bold text-rose-800/60 uppercase tracking-wide">Sự tư vấn</p>
               </div>
               <div className="slide-card bg-white border border-rose-200 p-8 text-center space-y-4 shadow-sm">
                  <p className="text-2xl text-slate-500 line-through decoration-rose-500">erholen</p>
                  <p className="text-3xl font-black text-rose-600">&rarr; die Erholung</p>
                  <p className="font-bold text-rose-800/60 uppercase tracking-wide">Sự thư giãn</p>
               </div>
               <div className="slide-card bg-white border border-rose-200 p-8 text-center space-y-4 shadow-sm">
                  <p className="text-2xl text-slate-500 line-through decoration-rose-500">wandern</p>
                  <p className="text-3xl font-black text-rose-600">&rarr; die Wanderung</p>
                  <p className="font-bold text-rose-800/60 uppercase tracking-wide">Chuyến đi bộ/leo núi</p>
               </div>
               <div className="slide-card bg-white border border-rose-200 p-8 text-center space-y-4 shadow-sm">
                  <p className="text-2xl text-slate-500 line-through decoration-rose-500">übernachten</p>
                  <p className="text-3xl font-black text-rose-600">&rarr; die Übernachtung</p>
                  <p className="font-bold text-rose-800/60 uppercase tracking-wide">Việc ngủ lại qua đêm</p>
               </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto text-center">
            <span className="px-6 py-2 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 3</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Danh từ chỉ người "-er"</h2>
            <div className="slide-card p-10 bg-blue-50 border-2 border-blue-200">
               <p className="text-xl font-medium text-theme-dark leading-relaxed mt-4 bg-white p-4 rounded-xl inline-block shadow-sm mb-8">
                 <span className="text-slate-400">Động từ (bỏ -en)</span> + <span className="font-black text-blue-600 bg-blue-100 px-2 py-1 rounded">-er</span>
               </p>
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl text-left border border-blue-100">
                     <p className="text-slate-500 font-medium">mieten &rarr; <span className="font-black text-blue-600text-lg">der Mieter</span></p>
                     <p className="text-sm font-bold text-slate-400">Người thuê nhà</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-left border border-blue-100">
                     <p className="text-slate-500 font-medium">vermieten &rarr; <span className="font-black text-blue-600text-lg">der Vermieter</span></p>
                     <p className="text-sm font-bold text-slate-400">Chủ cho thuê nhà</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-left border border-blue-100 col-span-2 mt-4 text-center">
                     <p className="text-lg font-bold text-theme-dark italic">
                        ✨ Mẹo: Danh từ chỉ người có đuôi "-er" luôn là giống đực <b>(der)</b>.
                     </p>
                  </div>
               </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="flex gap-8 items-center h-full max-w-5xl mx-auto p-4 flex-col justify-center text-center">
             <h2 className="text-4xl font-display font-black text-theme-dark mb-4">Mô hình phân biệt</h2>
             <div className="w-full slide-card bg-theme-cream border-2 border-slate-200 p-8 shadow-xl">
                <div className="flex items-center justify-between font-black text-xl mb-6 pb-4 border-b-2 border-slate-200 text-slate-500">
                   <div className="w-1/3">Động từ</div>
                   <div className="w-1/3 text-rose-500">Hoạt động (die ... -ung)</div>
                   <div className="w-1/3 text-blue-500">Người (der ... -er)</div>
                </div>
                <div className="space-y-6">
                   <div className="flex items-center justify-between font-bold text-lg">
                      <div className="w-1/3">beraten</div>
                      <div className="w-1/3 text-rose-600">die Beratung</div>
                      <div className="w-1/3 text-blue-600">der Berater</div>
                   </div>
                   <div className="flex items-center justify-between font-bold text-lg">
                      <div className="w-1/3">wandern</div>
                      <div className="w-1/3 text-rose-600">die Wanderung</div>
                      <div className="w-1/3 text-blue-600">der Wanderer</div>
                   </div>
                </div>
             </div>
          </div>
        );
      case 8:
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-center pb-12">
            <div className="w-32 h-32 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-theme-primary/30">
              <CheckCircle2 size={64} />
            </div>
            <div className="space-y-4">
               <h2 className="text-5xl font-display font-black text-theme-dark">Tổng Kết Buổi 1</h2>
               <p className="text-xl font-bold text-theme-dark/60 uppercase tracking-widest">Nắm vững cách cấu tạo danh từ!</p>
             </div>
             <div className="slide-card p-8 text-left space-y-4 max-w-md w-full mx-auto bg-white/90 font-bold text-theme-dark/80">
                <p>👉 Từ vựng thiên nhiên & cảnh quan.</p>
                <p>👉 Danh từ hóa hành động: đuôi <span className="text-rose-500 border border-rose-200 px-1 rounded bg-rose-50">-ung</span></p>
                <p>👉 Danh từ hóa người: đuôi <span className="text-blue-500 border border-blue-200 px-1 rounded bg-blue-50">-er</span></p>
             </div>
          </div>
        );
        case 9:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto">BUỔI 2</span>
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto ml-2">TIẾT 5</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Cảm giác & Không gian</h2>
            <div className="slide-card p-10 max-w-4xl mx-auto w-full bg-amber-50 border-2 border-amber-200 text-left">
               <div className="grid grid-cols-2 gap-6">
                 {[
                   {de: "dunkel", vi: "tối tăm"},
                   {de: "kalt", vi: "lạnh tẻ/lạnh lùng"},
                   {de: "alt", vi: "cổ kính/cũ"},
                   {de: "ruhig", vi: "yên tĩnh/thanh bình"}
                 ].map((w,i) => (
                    <div key={i} className="bg-white p-4 border border-amber-100 rounded-xl flex justify-between items-center shadow-sm">
                       <span className="font-black text-xl text-amber-700">{w.de}</span>
                       <span className="font-medium text-slate-500">{w.vi}</span>
                    </div>
                 ))}
               </div>
               <p className="text-center font-bold mt-8 text-amber-900/60 italic">Sử dụng tính từ để gia tăng tính gợi hình cho những câu chuyện quá khứ.</p>
            </div>
          </div>
        );
        case 10:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-5xl mx-auto text-center">
             <Heart size={64} className="text-rose-400 mx-auto mb-4" />
             <h2 className="text-4xl font-display font-black text-theme-dark">Giao Tiếp: Vorlieben (Sở Thích)</h2>
             <div className="slide-card bg-white border border-rose-200 p-8 shadow-xl text-left mt-8 max-w-3xl mx-auto w-full">
                <div className="space-y-6">
                   <div className="bg-rose-50 p-4 rounded-xl">
                      <p className="font-bold text-slate-500 mb-1">Câu hỏi (Bạn muốn... nhất?):</p>
                      <p className="font-black text-rose-800 text-lg">Welche Reise würdest du am liebsten buchen?</p>
                   </div>
                   <div className="bg-rose-100/50 p-4 rounded-xl">
                      <p className="font-bold text-slate-500 mb-1">Trả lời (Tôi thích nhất...):</p>
                      <p className="font-black text-rose-700 text-lg">Ich würde am liebsten ans Meer fahren.</p>
                   </div>
                </div>
             </div>
          </div>
        );
        case 11:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto text-center">
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 6</span>
             <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <Clock size={40} />
             </div>
            <h2 className="text-4xl font-display font-black text-theme-dark">Ngày xưa mọi thứ tốt hơn?</h2>
            <div className="slide-card p-10 bg-indigo-50 border-2 border-indigo-100 shadow-xl space-y-6 text-left">
                <p className="font-bold text-xl text-indigo-800 border-b border-indigo-200 pb-4">
                  "Früher <span className="text-rose-600">war</span> alles besser?"
                </p>
                <p className="font-medium text-lg leading-relaxed text-slate-700">
                   Sử dụng cấu trúc so sánh Quá khứ với Präteritum (war / hatte):
                </p>
                <div className="bg-white p-4 rounded-xl space-y-2">
                   <p className="font-bold">✨ <span className="text-emerald-600">Früher</span> hatte ich keine Angst vor Spinnen.</p>
                   <p className="font-bold">✨ <span className="text-emerald-600">Früher</span> war der Garten sehr schön.</p>
                </div>
            </div>
          </div>
        );
        case 12:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
            <span className="px-6 py-2 bg-theme-accent text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 7</span>
            <div className="w-20 h-20 bg-theme-accent/10 text-theme-accent rounded-[32px] flex items-center justify-center mx-auto mb-4">
              <MountainSnow size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark">Tìm Lại Sự Yên Bình</h2>
            <div className="slide-card p-10 bg-white shadow-xl border-2 border-theme-accent/10 space-y-6 text-left">
               <h4 className="font-black text-theme-accent text-xl border-b border-theme-dark/10 pb-4">Nhiệm vụ Viết (Integration)</h4>
               <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-4">
                 <li className="text-lg">Tưởng tượng một kỳ nghỉ lý tưởng của bạn để thư giãn.</li>
                 <li className="text-lg">Bạn sẽ đi với ai (danh từ chỉ người đuôi <span className="font-bold text-blue-500">-er</span>)?</li>
                 <li className="text-lg">Bạn kỳ vọng điều gì ở dịch vụ (danh từ đuôi <span className="font-bold text-rose-500">-ung</span>)?</li>
                 <li className="text-lg">Viết 1 đoạn văn (khoảng 30-50 từ) miêu tả nó.</li>
               </ul>
            </div>
          </div>
        );
      case 13:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform -rotate-1 hover:rotate-1 transition-transform max-w-xl mx-auto cursor-pointer" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -right-8 text-6xl animate-bounce">🏆</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 3 <br/> Hoàn thành!
                </h2>
                <div className="w-16 h-2 bg-emerald-500 mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-theme-dark/60 uppercase tracking-widest text-sm bg-theme-cream inline-block px-4 py-2 rounded-lg border-2 border-dashed border-theme-dark/20">
                   Bạn đã nắm được hậu tố -ung / -er!
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
        <div className="absolute top-0 left-0 h-2 bg-emerald-500 transition-all duration-500 ease-out z-20 shadow-sm" style={{ width: currentSlide === -1 ? '0%' : `${((currentSlide + 1) / 14) * 100}%` }} />
        
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
            <div className="text-[10px] md:text-xs font-bold text-emerald-500/80 tracking-widest uppercase text-right">
              Sơ đồ Lektion 3
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
                {currentSlide + 1} / 14
              </span>
              <button onClick={() => setCurrentSlide(-1)} className="text-[10px] text-emerald-500 flex items-center justify-center font-bold hover:underline uppercase tracking-widest p-1 mt-1 bg-emerald-500/10 rounded-lg sm:bg-transparent sm:mt-0 sm:p-0">
                Xem Lộ Trình
              </button>
            </div>
            <button
              onClick={() => {
                 if (currentSlide === 13) setCurrentSlide(-1);
                 else setCurrentSlide(p => p + 1);
              }}
              className="px-4 md:px-6 py-2 md:py-3 bg-emerald-500 text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
            >
              <span className="hidden sm:inline">
                {currentSlide === 13 ? 'Đóng lại' : 'Tiếp'}
              </span> 
              <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
