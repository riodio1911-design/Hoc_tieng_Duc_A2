import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, CheckCircle2, MessageSquare, Utensils, AlertTriangle, ArrowRight, Store, CreditCard, Music, Info, Wine, Coffee, Edit3, Ear, Gamepad2, FileText, CheckSquare, Search, Award, Eye, BookOpen } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop&q=80' },
  0: { bgColor: 'bg-theme-dark' }, 
  1: { bgColor: 'bg-amber-50' },
  2: { bgColor: 'bg-indigo-50' },
  3: { bgColor: 'bg-rose-50' },
  4: { bgColor: 'bg-emerald-50' },
  5: { bgColor: 'bg-theme-cream' },
  6: { bgColor: 'bg-violet-50' },
  7: { bgColor: 'bg-amber-50' },
  8: { bgColor: 'bg-blue-50' },
  9: { bgColor: 'bg-emerald-50' },
  10: { bgColor: 'bg-theme-primary/10' },
  11: { bgColor: 'bg-orange-50' },
  12: { bgColor: 'bg-rose-50' },
  13: { bgColor: 'bg-slate-100' },
  14: { bgColor: 'bg-emerald-50' },
  15: { bgColor: 'bg-amber-50' },
  16: { bgColor: 'bg-blue-50' },
  17: { bgColor: 'bg-indigo-50' },
  18: { bgColor: 'bg-violet-50' },
  19: { bgColor: 'bg-rose-50' },
  20: { bgColor: 'bg-orange-50' },
  21: { bgImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-theme-secondary/80' }
};

export default function Lektion10Slides({ playAudio, playingId, onBack }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const [activeSlideTab, setActiveSlideTab] = useState<'roadmap'|'downloads'>('roadmap');
  const totalSlides = 22; // -1 to 20 = 22 slides

  const nextSlide = () => {
    if (currentSlide === 10 || currentSlide === totalSlides - 2) {
      setCurrentSlide(-1);
    } else {
      setCurrentSlide((p) => Math.min(totalSlides - 2, p + 1));
    }
  };

  const prevSlide = () => setCurrentSlide((p) => Math.max(-1, p - 1));

  const renderSlide = () => {
    switch (currentSlide) {
      case -1:
        return (
          <div className="space-y-6 flex flex-col h-full max-w-5xl mx-auto py-4">
            <div className="text-center space-y-2 mb-4">
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình / Tải Xuống</h2>
              <p className="font-bold text-theme-dark/60">Hành trình 8 tiết học chuyên sâu</p>
            </div>
            
            <div className="flex justify-center mb-4">
<div className="bg-theme-cream/50 p-1.5 rounded-2xl inline-flex shadow-inner">
<button onClick={() => setActiveSlideTab('roadmap')} className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSlideTab === 'roadmap' || !activeSlideTab ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}>Bản đồ lộ trình</button>
<button onClick={() => setActiveSlideTab('download')} className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSlideTab === 'download' ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}>Tải các bài giảng</button>
</div>
</div>
{activeSlideTab === 'roadmap' ? (
<div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-theme-secondary/10 p-6 rounded-3xl border-2 border-theme-secondary/20 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-secondary/10 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-secondary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-secondary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: TẠI NHÀ HÀNG & CẤU TRÚC "DASS"
                </h3>
                <div className="space-y-4 flex-1">
                  <button 
                    onClick={() => setCurrentSlide(0)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-secondary/30 shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark group-hover:text-theme-secondary transition-colors text-lg">Tiết 1: Einstieg & Từ vựng</h4>
                    </div>
                  </button>
                  <button 
                    onClick={() => setCurrentSlide(5)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-secondary/30 shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-theme-secondary/10 text-theme-secondary flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark group-hover:text-theme-secondary transition-colors text-lg">Tiết 2: Ngữ pháp "dass"</h4>
                    </div>
                  </button>
                  <button 
                    onClick={() => setCurrentSlide(7)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-dark/10 shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-theme-dark/5 text-theme-dark/60 flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark transition-colors text-lg">Tiết 3: Kỹ năng: Đặt bàn và Gọi món</h4>
                    </div>
                  </button>
                  <button 
                    onClick={() => setCurrentSlide(9)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-dark/10 shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-theme-dark/5 text-theme-dark/60 flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark transition-colors text-lg">Tiết 4: Tổng kết Buổi 1 & Luyện nghe</h4>
                    </div>
                  </button>
                </div>
              </div>

              {/* Buổi 2 */}
              <div className="bg-rose-500/5 p-6 rounded-3xl border-2 border-rose-500/10 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-rose-600 mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center text-sm">2</div>
                  BUỔI 2: PHỤC VỤ, PHÀN NÀN & VĂN HÓA ĂN UỐNG
                </h3>
                <div className="space-y-4 flex-1">
                   {[
                    {title: "Tiết 5: Ôn tập + Kỹ năng Reklamation", onClick: () => setCurrentSlide(11)},
                    {title: "Tiết 6: Kỹ năng: Thanh toán và Tiền tip", onClick: () => setCurrentSlide(13)},
                    {title: "Tiết 7: Integration - Kết hợp 4 kỹ năng", onClick: () => setCurrentSlide(15)},
                    {title: "Tiết 8: Ôn Buổi 2, Test & Tổng kết", onClick: () => setCurrentSlide(17)}
                  ].map((item, i) => (
                      <button 
                         key={i}
                         onClick={item.onClick}
                         className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-rose-200 shadow-sm group"
                      >
                         <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center shrink-0">
                           <Play className="w-5 h-5 ml-1" />
                         </div>
                         <div className="text-left flex-1">
                           <h4 className="font-black text-theme-dark group-hover:text-rose-600 transition-colors text-lg">{item.title}</h4>
                         </div>
                      </button>
                  ))}
                </div>
              </div></div>
) : (
<div className="flex flex-col items-center justify-center space-y-6 flex-1 bg-white p-10 rounded-[32px] border border-theme-primary/10 shadow-xl shadow-theme-dark/5">
<div className="w-20 h-20 bg-theme-primary/10 text-theme-primary rounded-full flex items-center justify-center">
<BookOpen size={40} />
</div>
<h3 className="text-2xl font-black text-theme-dark">Tài liệu Bài giảng 10</h3>
<p className="text-theme-dark/70 font-medium text-center max-w-md">Bạn có thể tải trực tiếp file PDF bài giảng và bài tập Lektion 10 dưới đây:</p>
<div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl mt-4">
<a href="/Leitfaden-L10-Teil1.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-primary to-blue-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-theme-primary w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L10</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 1</span></div>
<div className="flex items-center gap-2 mt-2 bg-theme-primary/10 text-theme-primary px-4 py-2 rounded-full font-bold text-sm"><Eye size={16} /> Xem PDF</div>
</a>
<a href="/Leitfaden-L10-Teil2.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-emerald-500 w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L10</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 2</span></div>
<div className="flex items-center gap-2 mt-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full font-bold text-sm"><Eye size={16} /> Xem PDF</div>
</a>
</div>
</div>
            )}
          </div>
        );
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop')] bg-cover bg-center rounded-[48px] relative overflow-hidden w-full">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 10</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                Gut, dass du reserviert hast
              </h1>
              <p className="text-xl text-white/80 font-bold">Chủ đề: Tại nhà hàng & Mệnh đề phụ "dass"</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto w-full">
            <div className="text-center">
               <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 1</span>
               <h2 className="text-4xl font-display font-black text-theme-dark">Video Giới Thiệu Lektion 10</h2>
            </div>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-8">
              <div className="flex justify-center">
                <button 
                  onClick={() => playAudio("Chào mừng các bạn đến với Lektion 10! Trong bài này, chúng ta sẽ học cách giao tiếp tại nhà hàng: từ gọi món, bày tỏ ý kiến, đến tầm quan trọng của việc đặt bàn trước.", 'L10-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-theme-secondary text-white rounded-full flex items-center justify-center shadow-xl shadow-theme-secondary/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'L10-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="text-center">
                <h4 className="font-black text-theme-secondary text-xl mb-4">Mục tiêu của bài học:</h4>
                <ul className="font-bold text-theme-dark/70 space-y-2 text-lg">
                  <li>✨ Học cách gọi món và giao tiếp tại nhà hàng.</li>
                  <li>✨ Bày tỏ ý kiến và cảm xúc (Tôi nghĩ rằng...).</li>
                  <li>✨ Nhận thức tầm quan trọng của việc đặt bàn trước (reservieren).</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
           <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Einstieg: Khởi Động</h2>
             <div className="slide-card p-8 bg-white border-2 border-indigo-100 flex flex-col md:flex-row gap-8 items-center rounded-3xl">
               <div className="flex-1 w-full rounded-2xl overflow-hidden bg-theme-dark/5 min-h-[250px] relative border-4 border-white shadow-lg flex items-center justify-center">
                 <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&h=400&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Restaurant"/>
                 <div className="bg-white/80 backdrop-blur-sm px-6 py-2 rounded-xl border border-white font-black text-theme-dark rotate-[-5deg] text-2xl shadow-xl z-10">
                   RESERVIERT
                 </div>
               </div>
               <div className="flex-1 space-y-6">
                 <h4 className="font-black text-indigo-600 text-xl">Phỏng đoán tình huống:</h4>
                 <div className="space-y-4">
                   <p className="font-bold text-theme-dark text-lg bg-indigo-50 p-4 rounded-xl border border-indigo-100 shadow-sm">
                     "Was machen die Leute?"<br/>
                     <span className="text-theme-dark/60 text-base font-medium">(Mọi người đang làm gì?)</span>
                   </p>
                   <p className="font-bold text-theme-dark text-lg bg-indigo-50 p-4 rounded-xl border border-indigo-100 shadow-sm">
                     "Haben sie einen Tisch reserviert?"<br/>
                     <span className="text-theme-dark/60 text-base font-medium">(Họ đã đặt bàn chưa?)</span>
                   </p>
                 </div>
               </div>
             </div>
           </div>
        );
      case 3:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-4xl mx-auto w-full">
            <h2 className="text-4xl font-display font-black text-theme-dark">Ôn Bài Cũ Lektion 9 (So sánh)</h2>
            <div className="slide-card p-10 mx-auto w-full space-y-8 bg-rose-50 border-2 border-rose-200">
               <h3 className="text-2xl font-black text-rose-600 italic">"Hoạt động: So sánh sản phẩm/món ăn"</h3>
               <p className="font-bold text-theme-dark/80 text-lg">Học viên sử dụng Komparativ và Superlativ để so sánh món ăn hoặc đồ vật.</p>
               <div className="flex flex-col gap-4 items-center w-full max-w-md mx-auto text-left">
                 <button onClick={() => playAudio("Pizza ist leckerer als Pasta.", `l18-ve-1`, 'de-DE')} className="w-full py-4 px-6 bg-white hover:bg-rose-100 rounded-xl font-bold border-2 border-rose-100 transition-colors shadow-sm text-theme-dark flex items-center justify-between">
                   <span>🍕 Pizza ist <span className="text-rose-600 font-black">leckerer als</span> Pasta.</span> <Volume2 className="text-rose-400 w-5 h-5"/>
                 </button>
                 <button onClick={() => playAudio("Das Auto ist teurer als das Fahrrad.", `l18-ve-2`, 'de-DE')} className="w-full py-4 px-6 bg-white hover:bg-rose-100 rounded-xl font-bold border-2 border-rose-100 transition-colors shadow-sm text-theme-dark flex items-center justify-between">
                   <span>🚗 Das Auto ist <span className="text-rose-600 font-black">teurer als</span> das Fahrrad.</span> <Volume2 className="text-rose-400 w-5 h-5"/>
                 </button>
               </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-5xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ Vựng: Tại Nhà Hàng</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div className="slide-card p-8 bg-white border-2 border-emerald-100 shadow-sm">
                <h4 className="font-black text-emerald-600 text-xl border-b border-emerald-100 pb-3 mb-4">Các Động Từ (Verben)</h4>
                <ul className="space-y-4 font-bold text-lg text-theme-dark">
                  <li className="flex justify-between border-b border-theme-dark/5 pb-2"><span>reservieren</span> <span className="text-theme-dark/50">đặt chỗ</span></li>
                  <li className="flex justify-between border-b border-theme-dark/5 pb-2"><span>bestellen</span> <span className="text-theme-dark/50">gọi món, đặt món</span></li>
                  <li className="flex justify-between border-b border-theme-dark/5 pb-2"><span>einladen</span> <span className="text-theme-dark/50">mời</span></li>
                  <li className="flex justify-between border-b border-theme-dark/5 pb-2"><span>bezahlen</span> <span className="text-theme-dark/50">thanh toán</span></li>
                  <li className="flex justify-between pb-2"><span>wählen</span> <span className="text-theme-dark/50">lựa chọn</span></li>
                </ul>
              </div>
              <div className="slide-card p-8 bg-white border-2 border-blue-100 shadow-sm">
                <h4 className="font-black text-blue-600 text-xl border-b border-blue-100 pb-3 mb-4">Danh Từ (Nomen)</h4>
                <ul className="space-y-4 font-bold text-lg text-theme-dark">
                  <li className="flex justify-between border-b border-theme-dark/5 pb-2"><span>der Tisch, -e</span> <span className="text-theme-dark/50">bàn</span></li>
                  <li className="flex justify-between border-b border-theme-dark/5 pb-2"><span>das Lokal, -e</span> <span className="text-theme-dark/50">quán ăn</span></li>
                  <li className="flex justify-between border-b border-theme-dark/5 pb-2"><span>die Speisekarte, -n</span> <span className="text-theme-dark/50">thực đơn</span></li>
                  <li className="flex justify-between pb-2"><span>das Glas, ⸚er</span> <span className="text-theme-dark/50">ly</span></li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto w-full">
            <div className="text-center">
               <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 2</span>
               <h2 className="text-4xl font-display font-black text-theme-dark mb-2">Ngữ Pháp: Liên từ "dass"</h2>
               <p className="font-bold text-theme-dark/60 text-lg">Mệnh đề phụ - Nắm vững cấu trúc và vị trí động từ</p>
            </div>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-secondary/20 space-y-6 text-center">
              <div className="bg-white p-6 rounded-2xl shadow-sm max-w-2xl mx-auto border-l-4 border-theme-secondary">
                 <h4 className="font-black text-theme-dark mb-4 text-left uppercase tracking-widest text-xs">Công thức:</h4>
                 <p className="text-2xl text-theme-dark font-mono">
                   S + V , <span className="font-black text-rose-500">dass</span> + S + ... + <span className="font-black text-theme-primary">V(chia, cuối câu)</span>
                 </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 max-w-3xl mx-auto">
                 <div className="bg-white p-4 rounded-xl font-bold shadow-sm border border-theme-dark/5 text-theme-dark">Ich finde, <span className="text-rose-500">dass...</span></div>
                 <div className="bg-white p-4 rounded-xl font-bold shadow-sm border border-theme-dark/5 text-theme-dark">Ich glaube, <span className="text-rose-500">dass...</span></div>
                 <div className="bg-white p-4 rounded-xl font-bold shadow-sm border border-theme-dark/5 text-theme-dark">Ich hoffe, <span className="text-rose-500">dass...</span></div>
                 <div className="bg-white p-4 rounded-xl font-bold shadow-sm border border-theme-dark/5 text-theme-dark">Es ist gut, <span className="text-rose-500">dass...</span></div>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto w-full">
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Luyện Tập: Chuyển đổi câu dass</h2>
             <p className="text-center font-bold text-lg text-theme-dark/60">Làm bài tập mục 2 & 3 (KB). Nối câu đơn thành câu có dass.</p>
             <div className="grid gap-6 mt-6 max-w-2xl mx-auto w-full">
                <div className="slide-card p-6 bg-white border-2 border-indigo-100 flex flex-col items-center">
                  <p className="font-bold text-theme-dark/50 uppercase tracking-widest text-xs mb-2">Câu đơn</p>
                  <p className="font-black text-xl text-theme-dark mb-4">Das Restaurant ist toll.</p>
                  <ArrowRight className="text-indigo-500 mb-4" />
                  <p className="font-black text-xl text-theme-dark bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                    Ich finde, <span className="text-rose-500">dass</span> das Restaurant toll <span className="text-indigo-600 underline">ist</span>.
                  </p>
                </div>

                <div className="slide-card p-6 bg-white border-2 border-emerald-100 flex flex-col items-center">
                  <p className="font-bold text-theme-dark/50 uppercase tracking-widest text-xs mb-2">Câu đơn</p>
                  <p className="font-black text-xl text-theme-dark mb-4">Du hast reserviert.</p>
                  <ArrowRight className="text-emerald-500 mb-4" />
                  <p className="font-black text-xl text-theme-dark bg-emerald-50 p-4 rounded-xl border border-emerald-100 text-center">
                    Es ist gut, <span className="text-rose-500">dass</span> du <span className="text-emerald-600 underline">reserviert hast</span>.<br/>
                  </p>
                </div>
             </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center w-full max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 3</span>
            <h2 className="text-4xl font-display font-black text-theme-dark mb-2">Kỹ Năng: Đặt bàn & Gọi món</h2>
            <p className="font-bold text-theme-dark/60 text-lg">Sử dụng mẫu câu lịch sự tại nhà hàng.</p>
            
            <div className="grid md:grid-cols-2 gap-8 w-full mt-8">
               <div className="slide-card p-8 bg-amber-50 border-2 border-amber-200 text-left h-full">
                  <h3 className="font-black text-2xl text-amber-700 mb-4 flex items-center gap-2"><Store /> Đặt bàn</h3>
                  <div className="space-y-4 font-bold text-lg text-theme-dark/80">
                     <p>👉 Ich möchte einen Tisch reservieren.</p>
                     <p className="text-sm font-medium italic">(Tôi muốn đặt một bàn.)</p>
                  </div>
               </div>
               <div className="slide-card p-8 bg-orange-50 border-2 border-orange-200 text-left h-full">
                  <h3 className="font-black text-2xl text-orange-700 mb-4 flex items-center gap-2"><Utensils /> Gọi món</h3>
                  <div className="space-y-4 font-bold text-lg text-theme-dark/80">
                     <p>👉 Ich hätte gern...</p>
                     <p>👉 Ich nehme...</p>
                     <div className="bg-white/60 p-4 mt-6 rounded-xl border border-orange-200/50">
                       <p className="text-orange-800 text-sm">Phân biệt:</p>
                       <p><span className="text-orange-600">essen</span> (ăn món gì)</p>
                       <p><span className="text-orange-600">trinken</span> (uống món gì)</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
             <h2 className="text-4xl font-display font-black text-theme-dark">Luyện Tập: Role-play</h2>
             <div className="slide-card p-10 space-y-8 text-center bg-blue-50 border-2 border-blue-200">
                <p className="text-2xl font-bold text-theme-dark leading-relaxed">
                  Làm việc theo cặp (Pair work). Một người là <b className="text-blue-600">khách</b>, một người là <b className="text-blue-600">nhân viên phục vụ</b>. 
                </p>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex items-center gap-6 text-left">
                  <div className="text-6xl">📖</div>
                  <div>
                    <h4 className="font-black text-xl text-theme-dark mb-2">Thực hành gọi món dựa trên menu.</h4>
                    <p className="font-bold text-theme-dark/60">Sử dụng các mẫu câu: Ich hätte gern... / Was kann ich Ihnen bringen?</p>
                  </div>
                </div>
             </div>
          </div>
        );
      case 9:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-4xl mx-auto">
             <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 4</span>
             <h2 className="text-4xl font-display font-black text-theme-dark">Tổng kết Buổi 1 & Luyện nghe</h2>
             
             <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="slide-card p-8 bg-emerald-50 border-2 border-emerald-200 text-left">
                   <h3 className="text-2xl font-black text-emerald-700 flex items-center gap-2 mb-4"><Ear /> Luyện Nghe</h3>
                   <p className="font-bold text-theme-dark/80 text-lg mb-4">Luyện nghe (Bối cảnh gọi món).</p>
                   <p className="font-bold text-theme-dark/80 text-lg">Audio tổng kết: Tóm tắt các cụm từ quan trọng.</p>
                </div>
                <div className="slide-card p-8 bg-amber-50 border-2 border-amber-200 text-left">
                   <h3 className="text-2xl font-black text-amber-700 flex items-center gap-2 mb-4"><Edit3 /> Bài tập buổi 1</h3>
                   <ul className="space-y-3 font-bold text-theme-dark/80 text-lg list-none">
                     <li className="flex gap-2 items-start"><CheckSquare className="w-6 h-6 text-amber-500 shrink-0"/> Hoàn thành bài tập củng cố trong AB.</li>
                   </ul>
                </div>
             </div>
          </div>
        );
      case 10:
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-center pb-12 w-full">
            <div className="w-32 h-32 bg-theme-secondary text-white rounded-full flex items-center justify-center shadow-2xl shadow-theme-secondary/30 mb-4">
              <CheckCircle2 size={64} />
            </div>
            <div className="space-y-4">
               <h2 className="text-5xl font-display font-black text-theme-dark uppercase tracking-widest">Nửa Đường</h2>
               <p className="text-xl font-bold text-theme-dark/60 mt-4">Bạn đã hoàn thành Buổi 1!</p>
             </div>
             <div className="slide-card p-8 text-center space-y-4 max-w-lg w-full mx-auto bg-white/90 font-bold text-theme-dark">
                <p>Chuẩn bị bước sang Buổi 2: Phục vụ, phàn nàn & Văn hóa ăn uống.</p>
             </div>
          </div>
        );
      case 11:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto w-full text-center">
            <span className="px-6 py-2 bg-rose-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 5: BUỔI 2</span>
            <h2 className="text-4xl font-display font-black text-theme-dark mb-6">Ôn Tập & Giao Tiếp Mới</h2>
            
            <div className="slide-card p-8 bg-white border-2 border-theme-dark/10 shadow-sm text-left mb-6">
              <h3 className="font-black text-xl text-indigo-600 mb-4 flex items-center gap-2"><Gamepad2 /> Slide Ôn bài: Game "Sắp xếp câu"</h3>
              <p className="font-bold text-theme-dark/80 text-lg">Học viên kéo thả các thành phần câu để tạo thành câu <span className="text-theme-secondary">dass</span> hoàn chỉnh.</p>
            </div>

            <div className="slide-card p-8 bg-rose-50 border-2 border-rose-200 text-left">
              <h3 className="font-black text-xl text-rose-600 mb-4 flex items-center gap-2"><AlertTriangle /> Giao tiếp mới: Reklamation (Phàn nàn)</h3>
              <div className="space-y-4 font-bold text-lg text-theme-dark bg-white p-6 rounded-2xl border border-rose-100 shadow-sm">
                <p className="flex flex-col gap-1">
                  <span>🧑 <b>"Das Messer ist nicht sauber."</b> (Dao không sạch)</span>
                  <span>🧑 <b>"Die Suppe ist zu kalt."</b> (Súp quá lạnh)</span>
                </p>
                <div className="h-px bg-theme-dark/10 w-full my-2"></div>
                <p className="flex flex-col gap-1 text-rose-700">
                  <span>💁 <b>"Oh, das tut mir leid."</b> (Ồ, tôi xin lỗi)</span>
                  <span>💁 <b>"Ich bringe sofort ein anderes."</b> (Tôi mang cái khác ngay)</span>
                </p>
              </div>
            </div>
          </div>
        );
      case 12:
         return (
           <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-display font-black text-theme-dark">Luyện Tập: Phàn Nàn</h2>
              <div className="slide-card p-10 space-y-8 text-center bg-white border-2 border-rose-200 shadow-sm">
                 <p className="text-2xl font-bold text-theme-dark leading-relaxed">
                   Thực hành bài tập mục 5 KB.<br/> 
                   Hội thoại phàn nàn và xin lỗi.
                 </p>
                 <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 flex items-center justify-center gap-4">
                   <MessageSquare className="w-10 h-10 text-rose-500" />
                   <div className="text-left">
                     <p className="font-black text-theme-dark underline decoration-rose-300 decoration-4 -underline-offset-2">Mục tiêu:</p>
                     <p className="font-bold text-theme-dark/60 mt-1">Học cách xử lý các sự cố khi đi ăn lịch sự.</p>
                   </div>
                 </div>
              </div>
           </div>
         );
      case 13:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center w-full max-w-4xl mx-auto">
             <span className="px-6 py-2 bg-rose-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 6</span>
             <h2 className="text-4xl font-display font-black text-theme-dark">Kỹ Năng: Thanh Toán & Tiền Tip</h2>
             <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8 bg-orange-50 border-2 border-orange-200">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto">
                  <CreditCard size={32} />
                </div>
                <div className="bg-white p-6 rounded-xl border border-orange-100 font-bold text-theme-dark text-left space-y-4">
                   <p className="text-xl flex gap-2"><b className="text-orange-600 w-32 shrink-0">Yêu cầu:</b> Zahlen, bitte!</p>
                   <p className="text-xl flex gap-2"><b className="text-theme-dark/40 w-32 shrink-0">Hỏi lại:</b> Zusammen oder getrennt?</p>
                   <p className="text-xl flex gap-2"><b className="text-emerald-600 w-32 shrink-0">Tiền tip:</b> Stimmt so.</p>
                </div>
             </div>
          </div>
        );
      case 14:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-3xl mx-auto text-center">
             <h2 className="text-4xl font-display font-black text-theme-dark">Luyện Tập: Thanh Toán & Tiền Tip</h2>
             <div className="slide-card p-10 space-y-8 bg-theme-cream border-2 border-orange-200 shadow-sm text-left">
                <h4 className="font-black text-xl text-theme-dark mb-4">Hoạt động:</h4>
                <div className="space-y-4 font-bold text-lg text-theme-dark/80">
                  <p>1. Thực hành tính toán hóa đơn.</p>
                  <p>2. Roleplay: Thanh toán (Zahlen) và cho tiền tip (Trinkgeld).</p>
                  <div className="mt-8 bg-white p-4 rounded-xl shadow-sm border border-theme-dark/10 italic text-center">
                    Mục tiêu: Học cách yêu cầu thanh toán thành thạo.
                  </div>
                </div>
             </div>
          </div>
        );
      case 15:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto w-full">
            <div className="text-center">
              <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 7</span>
              <h2 className="text-4xl font-display font-black text-theme-dark mb-2">Integration - Kết Hợp 4 Kỹ Năng</h2>
              <p className="text-xl font-bold text-theme-dark/60 uppercase tracking-widest">Chủ đề: Ăn uống</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="slide-card p-8 bg-blue-50 border-2 border-blue-200 text-left h-full">
                <h3 className="font-black text-2xl text-blue-700 flex items-center gap-2 mb-4"><FileText /> Đọc + Viết</h3>
                <p className="font-bold text-lg text-theme-dark/80 mb-3">Đọc các bài đánh giá nhà hàng.</p>
                <div className="bg-white p-4 rounded-xl border border-blue-100 font-bold text-theme-dark/80 text-sm">
                   <b className="text-theme-dark">Viết:</b> Viết nhận xét đánh giá nhà hàng yêu thích (sử dụng mệnh đề dass).
                </div>
              </div>

              <div className="slide-card p-8 bg-emerald-50 border-2 border-emerald-200 text-left h-full">
                <h3 className="font-black text-2xl text-emerald-700 flex items-center gap-2 mb-4"><MessageSquare /> Thảo luận</h3>
                <p className="font-bold text-lg text-theme-dark/80 space-y-4">
                  <span className="block mb-2">Trao đổi về thói quen ăn uống:</span>
                  <span className="block bg-white p-3 rounded-lg border border-emerald-100 shadow-sm">Món ăn nào bạn thích nhất?</span>
                  <span className="block bg-white p-3 rounded-lg border border-emerald-100 shadow-sm mt-3">Bạn thường đi ăn ở đâu?</span>
                </p>
              </div>
            </div>
          </div>
        );
      case 16:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-rose-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 8</span>
            <h2 className="text-4xl font-display font-black text-theme-dark mb-4">Ôn Tập Buổi 2</h2>
            <p className="font-bold text-theme-dark/60 text-xl max-w-2xl mx-auto mb-4">
               Hệ thống lại quy trình từ lúc vào nhà hàng cho đến lúc ra về.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full bg-white p-8 rounded-[32px] border-2 border-theme-dark/10 shadow-sm relative z-0">
               <div className="absolute top-1/2 left-16 right-16 h-1 bg-theme-dark/10 -z-10 hidden md:block"></div>
               {[
                 { step: '1', name: 'Đặt Bàn' },
                 { step: '2', name: 'Gọi Món' },
                 { step: '3', name: 'Phàn Nàn' },
                 { step: '4', name: 'Thanh Toán' }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center gap-2 bg-white px-2">
                   <div className="w-12 h-12 rounded-full bg-theme-secondary text-white font-black flex items-center justify-center text-xl shadow-lg border-4 border-white">{item.step}</div>
                   <p className="font-black text-theme-dark text-lg whitespace-nowrap">{item.name}</p>
                 </div>
               ))}
            </div>
          </div>
        );
      case 17:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-3xl mx-auto text-center">
             <h2 className="text-4xl font-display font-black text-theme-dark">Kiểm Tra Ngắn (Test)</h2>
             <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 shadow-sm text-left space-y-6">
                <h4 className="font-black text-theme-primary text-xl uppercase tracking-widest border-b border-theme-dark/5 pb-4 mb-6">Đánh giá mức độ hoàn thành Lektion 10</h4>
                <ul className="space-y-4 font-bold text-xl text-theme-dark/80 list-disc pl-5 marker:text-theme-primary marker:text-2xl">
                  <li>Phần 1: Cấu trúc <span className="text-theme-secondary">dass</span>.</li>
                  <li>Phần 2: Hội thoại tại nhà hàng.</li>
                  <li>Phần 3: Từ vựng đồ dùng bàn ăn.</li>
                </ul>
             </div>
          </div>
        );
      case 18:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Video Tổng Kết & Bài Tập</h2>
             
             <div className="grid md:grid-cols-2 gap-8">
               <div className="slide-card p-8 bg-indigo-50 border-2 border-indigo-200 h-full">
                  <h3 className="font-black text-xl text-indigo-700 flex items-center gap-2 mb-4 border-b border-indigo-200 pb-2"><Play className="fill-indigo-600"/> AUDIO/VIDEO TỔNG KẾT</h3>
                  <p className="font-bold text-theme-dark/80 mb-4">Tổng kết toàn bài Lektion 10.</p>
               </div>
               
               <div className="slide-card p-8 bg-rose-50 border-2 border-rose-200 h-full flex flex-col gap-4">
                  <h3 className="font-black text-xl text-rose-700 flex items-center gap-2 border-b border-rose-200 pb-2"><Edit3 /> LỜI DẶN BÀI TẬP VỀ NHÀ</h3>
                  <p className="font-bold text-theme-dark/80 flex-1">Ôn tập phần phụ lục cuối bài học và làm bài tập WorkBook.</p>
               </div>
             </div>
          </div>
        );
      case 19:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto text-center">
             <h2 className="text-4xl font-display font-black text-theme-dark">Gợi Ý Quiz & Games Online</h2>
             <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div className="slide-card p-10 bg-white border-2 border-purple-200 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4 text-purple-600">
                    <Search size={32} />
                  </div>
                  <h3 className="font-black text-2xl text-purple-700 mb-4">Quizizz</h3>
                  <p className="font-bold text-theme-dark/70 text-lg">Trắc nghiệm nhanh về câu <b>dass</b>.</p>
                </div>
                
                <div className="slide-card p-10 bg-white border-2 border-blue-200 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 text-blue-600">
                    <Gamepad2 size={32} />
                  </div>
                  <h3 className="font-black text-2xl text-blue-700 mb-4">Wordwall</h3>
                  <p className="font-bold text-theme-dark/70 text-lg">Trò chơi nối từ vựng (Nhà hàng).</p>
                </div>
             </div>
          </div>
        );
      case 20:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform -rotate-1 hover:rotate-1 transition-transform max-w-xl mx-auto cursor-pointer" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -right-8 text-6xl animate-bounce">🍝</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 10 <br/> Hoàn thành xuất sắc!
                </h2>
                <div className="w-16 h-2 bg-theme-secondary mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-theme-dark/60 uppercase tracking-widest text-sm bg-theme-cream inline-block px-4 py-2 rounded-lg border-2 border-dashed border-theme-dark/20">
                   Bạn đã có thể tự tin đi ăn hàng ở Đức!
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
    <div className="max-w-6xl mx-auto py-4 md:py-8 w-full">
      <div className="relative overflow-hidden min-h-[65vh] md:min-h-[650px] h-auto flex flex-col bg-zinc-100 rounded-[2.5rem] shadow-2xl border-4 border-white">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-1000 z-0">
           <div className={`absolute inset-0 w-full h-full transition-colors duration-1000 ${bgConfig.bgColor || 'bg-white'}`} />
           {bgConfig.bgImage && (
               <img src={bgConfig.bgImage} className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-1000" />
           )}
        </div>
        
        {/* Progress bar */}
        <div className="absolute top-0 left-0 h-2 bg-theme-secondary transition-all duration-500 ease-out z-20 shadow-sm" style={{ width: currentSlide === -1 ? '0%' : `${((currentSlide + 1) / totalSlides) * 100}%` }} />
        
        {/* Content */}
        <div className="flex-1 p-2 md:p-8 relative z-10 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex flex-col"
            >
              {renderSlide()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        {currentSlide === -1 ? (
          <div className="p-4 flex items-center justify-between border-t border-theme-dark/5 bg-theme-cream/50 z-10">
            
            <div className="text-[10px] md:text-xs font-bold text-theme-dark/50 tracking-widest uppercase text-right">
              Sơ đồ Lektion 10
            </div>
          </div>
        ) : (
          <div className="p-4 md:p-6 flex items-center justify-between border-t border-theme-dark/5 bg-theme-cream/50 z-10">
            <button
              onClick={currentSlide === 0 ? () => setCurrentSlide(-1) : prevSlide}
              className="px-4 md:px-6 py-2 md:py-3 rounded-[20px] font-black tracking-wide transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 hover:bg-theme-dark/5 active:scale-95 text-theme-dark text-xs md:text-base"
            >
              <ChevronLeft size={18} className="md:w-5 md:h-5" /> <span className="hidden sm:inline">{currentSlide === 0 ? 'Lộ trình' : 'Trước'}</span>
            </button>
            <div className="flex flex-col items-center gap-1 px-2">
              <span className="font-black text-theme-dark/30 tracking-widest text-xs md:text-sm">
                {currentSlide + 1} / {totalSlides-2}
              </span>
              <button onClick={() => setCurrentSlide(-1)} className="text-[10px] text-theme-secondary flex items-center justify-center font-bold hover:underline uppercase tracking-widest p-1 mt-1 bg-theme-secondary/10 rounded-lg sm:bg-transparent sm:mt-0 sm:p-0">
                Xem Lộ Trình
              </button>
            </div>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 2 && currentSlide !== 20}
              className="px-4 md:px-6 py-2 md:py-3 bg-theme-secondary text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-theme-secondary/20 hover:bg-theme-dark transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
            >
              <span className="hidden sm:inline">
                {currentSlide === 20 ? 'Đóng lại' : 'Tiếp'}
              </span> 
              <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
