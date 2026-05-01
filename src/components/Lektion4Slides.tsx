import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, CheckCircle2, ShoppingCart, Info, ListChecks, BookOpen, FileText, Eye } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80' },
  0: { bgColor: 'bg-theme-dark' }, 
  1: { bgColor: 'bg-orange-50' },
  2: { bgColor: 'bg-amber-50' },
  3: { bgColor: 'bg-yellow-50' },
  4: { bgColor: 'bg-indigo-50' },
  5: { bgColor: 'bg-violet-50' },
  6: { bgColor: 'bg-emerald-50' },
  7: { bgColor: 'bg-teal-50' },
  8: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80' }
};

export default function Lektion4Slides({ playAudio, playingId, onBack }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const [activeSlideTab, setActiveSlideTab] = useState<'roadmap'|'downloads'>('roadmap');
  const totalSlides = 9; 

  const nextSlide = () => setCurrentSlide((p) => Math.min(totalSlides - 1, p + 1));
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
              <div className="bg-orange-50/50 p-6 rounded-3xl border-2 border-orange-100 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/50 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-orange-600 mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: Chợ Thực Phẩm & Nom/Akk
                </h3>
                 <div className="space-y-4 flex-1">
                  <button 
                    onClick={() => setCurrentSlide(1)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-orange-500 shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark group-hover:text-orange-600 transition-colors text-lg">Tiết 1: Giới thiệu Lektion 4</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Video & Tổng quan mua sắm</p>
                    </div>
                  </button>
                   {[
                    {title: 'Tiết 2: Ngữ pháp: Tính từ (Nom & Akk)', slide: 2},
                    {title: 'Tiết 3: Kỹ năng: Hội thoại tại chợ', slide: 3},
                    {title: 'Tiết 4: Tổng kết Buổi 1 & Luyện nghe', slide: 4}
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
                        <h4 className="font-black text-theme-dark hover:text-orange-600 transition-colors text-lg">{item.title}</h4>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Buổi 2 */}
              <div className="bg-indigo-50/50 p-6 rounded-3xl border-2 border-indigo-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-indigo-600 mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm">2</div>
                  BUỔI 2: Đặt Món Ăn & Dativ
                </h3>
               <div className="space-y-4">
                  {[
                    {title: "Tiết 5: Ôn tập + Tính từ (Dativ)", slide: 5},
                    {title: "Tiết 6: Sở thích ăn uống (Vorlieben)", slide: 6},
                    {title: "Tiết 7: Bữa tối cùng bạn bè (Tổng hợp)", slide: 7},
                    {title: "Tiết 8: Ôn Buổi 2 + Video tổng kết", slide: 8}
                  ].map((item, i) => (
                      <button 
                         key={i}
                         onClick={() => setCurrentSlide(item.slide)}
                         className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-indigo-200 shadow-sm group"
                      >
                         <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                           <Play className="w-5 h-5 ml-1" />
                         </div>
                         <div className="text-left flex-1">
                           <h4 className="font-black text-theme-dark group-hover:text-indigo-600 transition-colors text-lg">{item.title}</h4>
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
<h3 className="text-2xl font-black text-theme-dark">Tài liệu Bài giảng 4</h3>
<p className="text-theme-dark/70 font-medium text-center max-w-md">Bạn có thể tải trực tiếp file PDF bài giảng và bài tập Lektion 4 dưới đây:</p>
<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-4xl mt-4">
<a href="/Leitfaden-L4-Teil1.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-primary to-blue-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-theme-primary w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L4</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 1</span></div>
<div className="flex items-center gap-2 mt-2 bg-theme-primary/10 text-theme-primary px-4 py-2 rounded-full font-bold text-sm" style={{ backgroundColor: 'rgba(59,130,246,0.1)', color: '#3b82f6' }} ><Eye size={16} /> Xem PDF</div>
</a>
<a href="/Leitfaden-L4-Teil2.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-emerald-500 w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L4</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 2</span></div>
<div className="flex items-center gap-2 mt-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full font-bold text-sm" ><Eye size={16} /> Xem PDF</div>
</a>
<a href="/Leitfaden-L4-Teil3.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-amber-500 w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L4</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 3</span></div>
<div className="flex items-center gap-2 mt-2 bg-amber-500/10 text-amber-600 px-4 py-2 rounded-full font-bold text-sm" ><Eye size={16} /> Xem PDF</div>
</a>
<a href="/Leitfaden-L4-Teil4.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-red-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-rose-500 w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L4</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 4</span></div>
<div className="flex items-center gap-2 mt-2 bg-rose-500/10 text-rose-600 px-4 py-2 rounded-full font-bold text-sm" ><Eye size={16} /> Xem PDF</div>
</a>
</div>
</div>
            )}
          </div>
        );
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80')] bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-orange-500 text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 4</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                Was darf es sein?
              </h1>
              <p className="text-xl text-white/90 font-bold">Chủ đề: Mua sắm & Biến cách tính từ</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-orange-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 1</span>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Video Giới Thiệu Khóa Học</h2>
            <div className="slide-card p-10 bg-white border-2 border-orange-500/10 space-y-8 rounded-3xl">
              <div className="flex justify-center">
                <button 
                  onClick={() => playAudio('Xin chào các bạn, chào mừng đến với Lektion 4! Hôm nay, chúng ta sẽ bắt đầu tham quan khu chợ thực phẩm. Các bạn sẽ học những từ vựng để mua sắm, các đơn vị đo lường như Kilo, Pfund, Liter... và đặc biệt, chúng ta sẽ học cách chia đuôi tính từ sau mạo từ không xác định (ein/eine). Nghe vui phải không? Bắt đầu nào!', 'l4-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-orange-500/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'l4-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-orange-600 text-lg">1. Mục tiêu từ vựng</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Từ vựng thực phẩm: Gemüse, Obst...</li>
                    <li>Đơn vị đo lường: Kilo, Liter, Packung...</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-indigo-600 text-lg">2. Mục tiêu ngữ pháp</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Biến cách tính từ sau một/ein (Nom, Akk, Dat).</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-indigo-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 2</span>
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Đuôi Tính từ: Nominativ / Akkusativ</h2>
             <div className="slide-card p-10 bg-white border-2 border-indigo-200 rounded-3xl mt-8">
               <p className="text-center font-bold text-theme-dark/80 mb-6">Sau mạo từ không xác định <span className="bg-indigo-100 text-indigo-800 px-2 rounded">ein / eine / ein</span></p>
               <div className="grid md:grid-cols-3 gap-8 text-left">
                  <div className="space-y-2">
                    <h4 className="font-black text-blue-600 text-[16px] mb-2">Maskulin (Nam)</h4>
                    <p className="text-sm">Mang đuôi <strong className="text-blue-600">-er</strong> thay cho "der"</p>
                    <p className="font-bold text-theme-dark bg-slate-50 p-2 rounded">ein frischer Fisch</p>
                    <p className="text-xs italic text-rose-500 font-medium">Akkusativ: -en (einen frischen...)</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-black text-orange-600 text-[16px] mb-2">Neutral (Trung)</h4>
                    <p className="text-sm">Mang đuôi <strong className="text-orange-600">-es</strong> thay cho "das"</p>
                    <p className="font-bold text-theme-dark bg-slate-50 p-2 rounded">ein kaltes Bier</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-black text-rose-600 text-[16px] mb-2">Feminin (Nữ)</h4>
                    <p className="text-sm">Mang đuôi <strong className="text-rose-600">-e</strong> giống "die"</p>
                    <p className="font-bold text-theme-dark bg-slate-50 p-2 rounded">eine grüne Gurke</p>
                  </div>
               </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-orange-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 3</span>
            <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
               <ShoppingCart size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Giao tiếp: Mua Sản phẩm</h2>
            <div className="grid grid-cols-2 gap-6 mt-8">
               {[
                 { w: 'Was darf es sein?', t: 'Bạn muốn mua gì?' },
                 { w: 'Sonst noch etwas?', t: 'Còn gì nữa không?' },
                 { w: 'Ich hätte gern...', t: 'Tôi muốn có (lịch sự)' },
                 { w: 'Geben Sie mir...', t: 'Cho tôi...' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-6 text-center space-y-4 hover:-translate-y-1 transition-transform border border-orange-100 bg-white rounded-3xl">
                   <button 
                     onClick={() => playAudio(item.w, `l4-v2-${i}`, 'de-DE')}
                     className="w-12 h-12 bg-orange-100 rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     {playingId === `l4-v2-${i}` ? <CheckCircle2 className="text-orange-500 w-5 h-5" /> : <Play className="text-orange-500 w-5 h-5 ml-1" />}
                   </button>
                   <div>
                     <h4 className="font-black text-lg text-theme-dark">{item.w}</h4>
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
            <span className="px-6 py-2 bg-indigo-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 4</span>
            <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
               <Info size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Tổng kết Buổi 1 & Luyện nghe</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-3xl border-2 border-indigo-100 shadow-sm text-center space-y-4">
                <h3 className="font-black text-indigo-600 text-lg">Phần 1: Luyện nghe</h3>
                <p className="text-theme-dark/70 font-medium">Bật file nghe "Frühstück im Café" và điền từ còn thiếu vào chỗ trống theo sách (KB mục 5).</p>
                <div className="flex justify-center mt-2">
                  <Play className="text-indigo-400 w-8 h-8" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl border-2 border-indigo-100 shadow-sm text-center space-y-4">
                <h3 className="font-black text-indigo-600 text-lg">Phần 2: Bài tập về nhà</h3>
                <p className="text-theme-dark/70 font-medium">Hoàn thành bài tập củng cố trong sách bài tập (AB) trang 116-117.</p>
                <div className="flex justify-center mt-2">
                  <BookOpen className="text-indigo-400 w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
         return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-violet-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 5</span>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Tính từ với Dativ (Mạo từ K.X.Đ)</h2>
            <div className="slide-card bg-rose-50 border-2 border-rose-200 rounded-3xl overflow-hidden mt-8">
               <div className="bg-rose-600 p-6 text-white text-center">
                 <h4 className="text-2xl font-black mb-2">QUY TẮC DATIV</h4>
                 <p className="font-bold">Gặp Dativ, đuôi tính từ luôn là -EN</p>
               </div>
               <div className="p-8 space-y-4">
                 <div className="flex justify-between items-center border-b border-rose-200 pb-2">
                    <span className="font-bold text-theme-dark/80">mit + ein + magerer Schinken</span>
                    <span className="font-mono font-bold text-rose-600">mit einem mager<span className="text-black">en</span> Schinken</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-rose-200 pb-2">
                    <span className="font-bold text-theme-dark/80">mit + eine + grüne Paprika</span>
                    <span className="font-mono font-bold text-rose-600">mit einer grün<span className="text-black">en</span> Paprika</span>
                 </div>
                 <div className="flex justify-between items-center pb-2">
                    <span className="font-bold text-theme-dark/80">von + ein + guter Wein</span>
                    <span className="font-mono font-bold text-rose-600">von einem gut<span className="text-black">en</span> Wein</span>
                 </div>
               </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 6</span>
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Bày tỏ Sở Thích (Vorlieben)</h2>
             <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-emerald-50 rounded-3xl p-6 border-2 border-emerald-200 shadow-sm hover:-translate-y-1 transition-transform">
                   <h3 className="text-xl font-black text-emerald-600 mb-4 flex items-center gap-2">👍 Khẳng định</h3>
                   <ul className="space-y-4 font-bold text-theme-dark/80">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-emerald-100">"Ich esse gern Käse."</li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-emerald-100">"Das schmeckt mir."</li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-emerald-100">"Ich mag lieber Äpfel." (Tôi thích táo hơn.)</li>
                   </ul>
                </div>
                <div className="bg-rose-50 rounded-3xl p-6 border-2 border-rose-200 shadow-sm hover:-translate-y-1 transition-transform">
                   <h3 className="text-xl font-black text-rose-600 mb-4 flex items-center gap-2">👎 Phủ định</h3>
                   <ul className="space-y-4 font-bold text-theme-dark/80">
                      <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-rose-100">"Ich mag keinen Käse."</li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-rose-100">"Das schmeckt mir nicht."</li>
                      <li className="flex items-start gap-2 bg-white p-3 rounded-xl border border-rose-100">"Ich esse das nicht gern."</li>
                   </ul>
                </div>
             </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-teal-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 7</span>
            <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
               <ListChecks size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Bữa tối cùng bạn bè (Tổng hợp)</h2>
            <div className="bg-white p-8 rounded-3xl border-2 border-teal-100 mt-8 shadow-sm text-center">
               <h3 className="font-black text-teal-600 text-2xl mb-4">Hoạt động kết hợp 4 kỹ năng</h3>
               <p className="text-theme-dark/70 font-medium text-lg leading-relaxed mb-6">
                 Đọc các công thức nấu ăn ngắn hoặc thực đơn. Thảo luận về việc chuẩn bị nguyên liệu: 
                 <br/><br/><strong className="text-theme-dark">"Wir brauchen ein _______ Hähnchen und einen _______ Wein."</strong>
               </p>
               <div className="p-4 bg-teal-50 rounded-2xl text-teal-800 font-medium">
                 Viết một đoạn văn ngắn mô tả bữa ăn bạn đã gọi tại một quán Café (Sử dụng Adjektivdeklination ở Nom, Akk và Dat).
               </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform -rotate-1 hover:rotate-1 transition-transform max-w-xl mx-auto cursor-pointer rounded-[32px]" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -right-8 text-6xl animate-bounce">🛒</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 4 <br/> Đã hoàn thành!
                </h2>
                <div className="w-16 h-2 bg-orange-500 mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-theme-dark/60 uppercase tracking-widest text-sm bg-slate-50 inline-block px-4 py-2 rounded-lg border-2 border-dashed border-theme-dark/20">
                   Bạn đã có thể đi chợ và mô tả tính chất món ăn một cách chuẩn xác!
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
        <div className="absolute top-0 left-0 h-2 bg-orange-500 transition-all duration-500 ease-out z-20 shadow-sm" style={{ width: currentSlide === -1 ? '0%' : `${((currentSlide + 1) / totalSlides) * 100}%` }} />
        
        {/* Content */}
        <div className="flex-1 p-2 md:p-8 relative z-10 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex flex-col justify-center"
            >
              {renderSlide()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        {currentSlide === -1 ? (
          <div className="p-4 flex items-center justify-between border-t border-theme-dark/5 bg-white/50 z-10 backdrop-blur-sm">
            
            <div className="text-[10px] md:text-xs font-bold text-theme-dark/50 tracking-widest uppercase text-right">
              Sơ đồ Lektion 4
            </div>
          </div>
        ) : (
          <div className="p-4 md:p-6 flex items-center justify-between border-t border-theme-dark/5 bg-white/50 z-10 backdrop-blur-sm">
            <button
              onClick={currentSlide === 0 ? () => setCurrentSlide(-1) : prevSlide}
              className="px-4 md:px-6 py-2 md:py-3 rounded-[20px] font-black tracking-wide transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 hover:bg-theme-dark/5 active:scale-95 text-theme-dark text-xs md:text-base"
            >
              <ChevronLeft size={18} className="md:w-5 md:h-5" /> <span className="hidden sm:inline">{currentSlide === 0 ? 'Lộ trình' : 'Trước'}</span>
            </button>
            <div className="flex flex-col items-center gap-1 px-2">
              <span className="font-black text-theme-dark/30 tracking-widest text-xs md:text-sm">
                {currentSlide + 1} / {totalSlides - 1}
              </span>
              <button onClick={() => setCurrentSlide(-1)} className="text-[10px] text-orange-500 flex items-center justify-center font-bold hover:underline uppercase tracking-widest p-1 mt-1 bg-orange-500/10 rounded-lg sm:bg-transparent sm:mt-0 sm:p-0">
                Xem Lộ Trình
              </button>
            </div>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="px-4 md:px-6 py-2 md:py-3 bg-orange-500 text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
            >
              <span className="hidden sm:inline">
                {currentSlide === totalSlides - 1 ? 'Đóng lại' : 'Tiếp'}
              </span> 
              <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
