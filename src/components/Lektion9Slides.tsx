import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, CheckCircle2, MessageSquare, Megaphone, TrendingUp, TrendingDown, ArrowRight, Factory, Car, Music, CheckSquare, FileText, Eye, BookOpen } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&h=800&fit=crop&q=80' },
  0: { bgColor: 'bg-theme-dark' }, // Custom title slide
  1: { bgColor: 'bg-amber-50' },
  2: { bgColor: 'bg-rose-50' },
  3: { bgColor: 'bg-slate-100' },
  4: { bgColor: 'bg-blue-50' },
  5: { bgColor: 'bg-indigo-50' },
  6: { bgColor: 'bg-emerald-50' },
  7: { bgColor: 'bg-white' },
  8: { bgColor: 'bg-amber-50' },
  9: { bgColor: 'bg-orange-50' },
  10: { bgColor: 'bg-rose-50' },
  11: { bgColor: 'bg-indigo-50' },
  12: { bgColor: 'bg-white' },
  13: { bgImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-theme-primary/10' }
};

export default function Lektion9Slides({ playAudio, playingId, onBack }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const [activeSlideTab, setActiveSlideTab] = useState<'roadmap'|'downloads'>('roadmap');
  const totalSlides = 15; 

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
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình / Tải Xuống</h2>
              <p className="font-bold text-theme-dark/60">Hành trình 8 tiết học chuyên sâu</p>
            </div>
            
            <div className="flex justify-center mb-4">
<div className="bg-theme-cream/50 p-1.5 rounded-2xl inline-flex shadow-inner">
<button onClick={() => setActiveSlideTab('roadmap')} className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSlideTab === 'roadmap' || !activeSlideTab ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}>Bản đồ lộ trình</button>
<button disabled className="px-6 py-2 rounded-xl font-bold text-sm text-theme-dark/30 cursor-not-allowed" title="Tính năng này đang được cập nhật">Tải các bài giảng</button>
</div>
</div>
{activeSlideTab === 'roadmap' ? (
<div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: Công Nghiệp Ô Tô
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
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 1: Einstieg & Từ vựng</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Sức khỏe (weil/deshalb), Nhà máy</p>
                    </div>
                  </button>
                  <button 
                    onClick={() => setCurrentSlide(4)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-primary/50 shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-theme-primary/10 text-theme-primary flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 2: Ngữ pháp Komparativ</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">So sánh hơn của tính từ</p>
                    </div>
                  </button>
                  <button 
                    onClick={() => setCurrentSlide(6)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-dark/10 shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-theme-dark/5 text-theme-dark/60 flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark transition-colors text-lg">Tiết 3: Quy trình sản xuất</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Thống kê kinh tế (steigen, sinken)</p>
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
                      <h4 className="font-black text-theme-dark transition-colors text-lg">Tiết 4: Tổng kết Buổi 1</h4>
                    </div>
                  </button>
                </div>
              </div>

              {/* Buổi 2 */}
              <div className="bg-theme-secondary/5 p-6 rounded-3xl border-2 border-theme-secondary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-secondary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-secondary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-secondary text-white flex items-center justify-center text-sm">2</div>
                  BUỔI 2: Quảng Cáo & Ưu Điểm
                </h3>
                <div className="space-y-4">
                   {[
                    {title: "Tiết 5: Ngữ pháp Superlativ", sub: "So sánh nhất", onClick: () => setCurrentSlide(8)},
                    {title: "Tiết 6: Kỹ năng Quảng cáo", sub: "Giới thiệu sản phẩm", onClick: () => setCurrentSlide(10)},
                    {title: "Tiết 7: Cùng thảo luận", sub: "Chủ đề: Thời gian là vàng", onClick: () => setCurrentSlide(11)},
                    {title: "Tiết 8: Test & Tổng kết", sub: "Hoàn thiện bài học", onClick: () => setCurrentSlide(12)}
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
                           <p className="text-sm font-bold text-theme-dark/50 mt-1">{item.sub}</p>
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
<h3 className="text-2xl font-black text-theme-dark">Tài liệu Bài giảng 9</h3>
<p className="text-theme-dark/70 font-medium text-center max-w-md">Bạn có thể tải trực tiếp file PDF bài giảng và bài tập Lektion 9 dưới đây:</p>
<div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl mt-4">
<a href="/Leitfaden-L9-Teil1.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-primary to-blue-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-theme-primary w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L9</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 1</span></div>
<div className="flex items-center gap-2 mt-2 bg-theme-primary/10 text-theme-primary px-4 py-2 rounded-full font-bold text-sm"><Eye size={16} /> Xem PDF</div>
</a>
<a href="/Leitfaden-L9-Teil2.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-emerald-500 w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L9</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 2</span></div>
<div className="flex items-center gap-2 mt-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full font-bold text-sm"><Eye size={16} /> Xem PDF</div>
</a>
</div>
</div>
            )}
          </div>
        );
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&h=800&fit=crop')] bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 9</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                Bei guten Autos sind wir ganz vorn
              </h1>
              <p className="text-xl text-white/80 font-bold">Công nghiệp ô tô, Quảng cáo & Cấp độ So sánh</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <div className="text-center">
               <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 1</span>
               <h2 className="text-4xl font-display font-black text-theme-dark">Giới thiệu Lektion 9</h2>
            </div>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-8">
              <div className="flex justify-center">
                <button 
                  onClick={() => playAudio("Chào mừng các bạn đến với Bài 9! Trong bài này, chúng ta sẽ khám phá ngành sản xuất ô tô của Đức và học cách so sánh các sản phẩm nhé.", 'L9-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-theme-primary/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'L9-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-theme-secondary text-lg">1. Mục Tiêu Giao Tiếp</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Nói về sự khác biệt giữa các sản phẩm</li>
                    <li>Mô tả quy trình sản xuất và kinh tế</li>
                    <li>Hiểu văn bản quảng cáo, giới thiệu</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-theme-accent text-lg">2. Từ Vựng Mới</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Kinh tế: Produktion, Werk, Lager, Export</li>
                    <li>Biến động: steigen, sinken, sparen</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-theme-dark/5 mt-4 text-center">
                <h4 className="font-black text-theme-primary mb-3">3. Ngữ pháp trọng tâm</h4>
                <ul className="text-sm font-bold text-theme-dark/70 flex max-md:flex-col justify-center gap-6">
                  <li>• Komparativ (So sánh hơn)</li>
                  <li>• Superlativ (So sánh nhất)</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Ôn Bài Cũ: Lektion 8</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8 bg-rose-50 border-2 border-rose-200">
               <h3 className="text-2xl font-black text-rose-600 italic">"weill & deshalb"</h3>
               <p className="font-bold text-theme-dark/60 text-lg">Giải thích lý do và hậu quả về sức khỏe</p>
               <div className="flex flex-col gap-4 items-center w-full max-w-sm mx-auto">
                 <button onClick={() => playAudio("Ich bin fit, weil ich viel Sport mache.", 'l9-ve-1', 'de-DE')} className="w-full py-3 bg-white hover:bg-rose-500 hover:text-white rounded-xl font-bold border-2 border-rose-100 transition-colors cursor-pointer text-theme-dark text-left px-4">
                   1. Ich bin fit, <b className="text-rose-600">weil</b> ich viel Sport mache.
                 </button>
                 <button onClick={() => playAudio("Ich mache viel Sport, deshalb bin ich fit.", 'l9-ve-2', 'de-DE')} className="w-full py-3 bg-white hover:bg-rose-500 hover:text-white rounded-xl font-bold border-2 border-rose-100 transition-colors cursor-pointer text-theme-dark text-left px-4">
                   2. Ich mache viel Sport, <b className="text-rose-600">deshalb</b> bin ich fit.
                 </button>
               </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex gap-8 items-center h-full flex-col md:flex-row">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-display font-black text-theme-dark">Từ vựng: Trong Nhà Máy</h2>
              <div className="space-y-4">
                {[
                  { w: 'die Produktion', t: 'Sự sản xuất' },
                  { w: 'das Werk / die Halle', t: 'Nhà máy / Phân xưởng' },
                  { w: 'das Lager', t: 'Nhà kho' },
                  { w: 'die Maschine', t: 'Máy móc' },
                  { w: 'der Lkw', t: 'Xe tải (Lastkraftwagen)' }
                ].map((item, i) => (
                   <div key={i} className="flex justify-between items-center bg-white p-3 px-6 rounded-xl shadow-sm border border-theme-dark/5">
                      <span className="font-bold text-theme-dark text-lg">{item.w}</span>
                      <span className="font-medium text-theme-dark/60">{item.t}</span>
                   </div>
                ))}
              </div>
            </div>
            <div className="flex-1 rounded-[32px] overflow-hidden relative shadow-xl min-h-[400px] bg-theme-dark flex items-center justify-center border-4 border-white w-full">
              <Factory size={120} className="text-white/20" />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <div className="text-center">
               <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 2</span>
               <h2 className="text-4xl font-display font-black text-theme-dark mb-2">Ngữ Pháp: Komparativ</h2>
               <p className="font-bold text-theme-dark/60">Cấp độ so sánh hơn của tính từ</p>
            </div>
            <div className="slide-card p-10 bg-blue-50 border-2 border-blue-200 text-center space-y-6">
              <h3 className="text-3xl font-black text-blue-600">Tính từ + er + als</h3>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4 max-w-md mx-auto text-left border-l-4 border-blue-500">
                 <p className="text-xl text-theme-dark">Ein Audi ist <span className="font-black text-blue-600">schneller als</span> ein Fahrrad.</p>
                 <p className="text-theme-dark/70 font-medium italic">(Một chiếc Audi thì nhanh hơn một chiếc xe đạp.)</p>
              </div>

              <div className="flex justify-center gap-4 pt-4">
                 <div className="bg-white px-6 py-3 rounded-xl border border-blue-100 font-bold">
                    schnell ➔ schneller
                 </div>
                 <div className="bg-white px-6 py-3 rounded-xl border border-blue-100 font-bold">
                    billig ➔ billiger
                 </div>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Komparativ: Các Trường Hợp Đặc Biệt</h2>
             <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="slide-card p-8 bg-indigo-50 border-2 border-indigo-200">
                  <h4 className="font-black text-indigo-600 mb-4 uppercase tracking-widest text-sm">Thêm Umlaut (a, o, u)</h4>
                  <ul className="font-medium text-lg text-theme-dark space-y-3">
                     <li>alt ➔ <b>älter</b></li>
                     <li>groß ➔ <b>größer</b></li>
                     <li>lang ➔ <b>länger</b></li>
                  </ul>
                </div>
                <div className="slide-card p-8 bg-rose-50 border-2 border-rose-200">
                  <h4 className="font-black text-rose-600 mb-4 uppercase tracking-widest text-sm">Bất Quy Tắc (Học thuộc)</h4>
                  <ul className="font-medium text-lg text-theme-dark space-y-3">
                     <li>gut ➔ <b className="text-rose-600">besser</b></li>
                     <li>viel ➔ <b className="text-rose-600">mehr</b></li>
                     <li>gern ➔ <b className="text-rose-600">lieber</b></li>
                     <li>hoch ➔ <b className="text-rose-600">höher</b></li>
                  </ul>
                </div>
             </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 3</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Thống Kê Kinh Tế</h2>
            
            <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto w-full mt-8">
               <div className="slide-card p-8 bg-emerald-50 border-2 border-emerald-200 flex flex-col items-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                     <TrendingUp size={32} />
                  </div>
                  <h3 className="font-black text-2xl text-emerald-700">steigen</h3>
                  <p className="font-bold text-theme-dark/70 mt-2">Tăng lên</p>
                  <p className="mt-4 text-sm text-theme-dark/60 bg-white p-3 rounded-lg border border-emerald-100 w-full">Die Produktion steigt um 5%.</p>
               </div>
               <div className="slide-card p-8 bg-rose-50 border-2 border-rose-200 flex flex-col items-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 mb-4">
                     <TrendingDown size={32} />
                  </div>
                  <h3 className="font-black text-2xl text-rose-700">sinken</h3>
                  <p className="font-bold text-theme-dark/70 mt-2">Giảm xuống</p>
                  <p className="mt-4 text-sm text-theme-dark/60 bg-white p-3 rounded-lg border border-rose-100 w-full">Die Kosten sinken.</p>
               </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-center pb-12">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 4</span>
            <div className="w-32 h-32 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-theme-primary/30">
              <CheckCircle2 size={64} />
            </div>
            <div className="space-y-4">
               <h2 className="text-5xl font-display font-black text-theme-dark">Tổng Kết Buổi 1</h2>
               <p className="text-xl font-bold text-theme-dark/60 uppercase tracking-widest">Wow, nửa chặng đường Lektion 9!</p>
             </div>
             <div className="slide-card p-8 text-left space-y-4 max-w-md w-full mx-auto bg-white/90 font-bold text-theme-dark/80">
                <p>👉 Từ vựng: Nhà máy, quy trình sản xuất.</p>
                <p>👉 Ngữ pháp: Komparativ (So sánh hơn, tính từ + er + als).</p>
                <p>👉 Kinh tế: Tăng (steigen) và giảm (sinken).</p>
             </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <div className="text-center">
               <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 5: BUỔI 2</span>
               <h2 className="text-4xl font-display font-black text-theme-dark mb-2">Ngữ Pháp: Superlativ</h2>
               <p className="font-bold text-theme-dark/60">Cấp độ so sánh nhất của tính từ</p>
            </div>
            <div className="slide-card p-10 bg-amber-50 border-2 border-amber-200 text-center space-y-6">
              <h3 className="text-3xl font-black text-amber-600">am + Tính từ + sten</h3>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4 max-w-md mx-auto text-left border-l-4 border-amber-500">
                 <p className="text-xl text-theme-dark">Dieses Auto ist <span className="font-black text-amber-600">am schnellsten</span>.</p>
                 <p className="text-theme-dark/70 font-medium italic">(Chiếc xe này là nhanh nhất.)</p>
                 <p className="text-xl text-theme-dark border-t border-theme-dark/10 pt-4 mt-4">Das ist <span className="font-black text-amber-600">das schnellste</span> Auto.</p>
                 <p className="text-theme-dark/70 font-medium italic">(Đó là chiếc xe nhanh nhất - Tính từ đứng trc danh từ có mạo từ xác định: ste)</p>
              </div>

              <div className="flex justify-center gap-4 pt-4">
                 <div className="bg-white px-6 py-3 rounded-xl border border-amber-100 font-bold">
                    schnell ➔ am schnellsten
                 </div>
                 <div className="bg-white px-6 py-3 rounded-xl border border-amber-100 font-bold">
                    billig ➔ am billigsten
                 </div>
              </div>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Superlativ: Các Trường Hợp Đặc Biệt</h2>
             <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="slide-card p-8 bg-orange-50 border-2 border-orange-200">
                  <h4 className="font-black text-orange-600 mb-4 uppercase tracking-widest text-sm">Thêm "e" (tận cùng -t, -d, -s, -z)</h4>
                  <ul className="font-medium text-lg text-theme-dark space-y-3">
                     <li>kalt ➔ am kält<b>e</b>sten</li>
                     <li>heiß ➔ am heiß<b>e</b>sten</li>
                     <li>kurz ➔ am kürz<b>e</b>sten</li>
                  </ul>
                </div>
                <div className="slide-card p-8 bg-rose-50 border-2 border-rose-200">
                  <h4 className="font-black text-rose-600 mb-4 uppercase tracking-widest text-sm">Bất Quy Tắc (Học thuộc)</h4>
                  <ul className="font-medium text-lg text-theme-dark space-y-3">
                     <li>gut ➔ <b className="text-rose-600">am besten</b></li>
                     <li>viel ➔ <b className="text-rose-600">am meisten</b></li>
                     <li>gern ➔ <b className="text-rose-600">am liebsten</b></li>
                     <li>hoch ➔ <b className="text-rose-600">am höchsten</b></li>
                  </ul>
                </div>
             </div>
          </div>
        );
      case 10:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 6</span>
             <h2 className="text-4xl font-display font-black text-theme-dark">Giao Tiếp: Quảng Cáo & SP</h2>
             <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8 bg-rose-50 border-2 border-rose-200">
                <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto">
                  <Megaphone size={32} />
                </div>
                <p className="font-bold text-theme-dark/80 text-xl text-center">
                  "Sản phẩm của chúng tôi rẻ nhất!"<br/> "Chúng tôi sản xuất nhanh hơn đối thủ."
                </p>
                <div className="bg-white p-4 rounded-xl border border-rose-100 font-bold text-theme-dark mt-6 text-left space-y-2">
                   <p className="text-rose-600">&gt; Unser Produkt ist am billigsten.</p>
                   <p className="text-rose-600">&gt; Wir produzieren schneller als die Konkurrenz.</p>
                </div>
             </div>
          </div>
        );
      case 11:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 7</span>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center mb-4">Thời Gian Là Vàng Bạc</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="slide-card p-8 bg-indigo-50 border-2 border-indigo-200">
                <h4 className="font-black text-indigo-600 mb-4 flex items-center gap-2 text-xl"><Music /> Âm nhạc & Đọc hiểu</h4>
                <p className="font-medium text-lg leading-relaxed text-theme-dark">
                  Bài hát <b>24 Stunden sind zu wenig</b>.<br/>
                  "Tại sao chúng ta luôn muốn nhanh hơn, rẻ hơn, tốt hơn?"
                </p>
              </div>
              <div className="slide-card p-8 bg-blue-50 border-2 border-blue-200">
                <h4 className="font-black text-blue-600 mb-4 flex items-center gap-2 text-xl"><MessageSquare /> Thảo luận</h4>
                <p className="font-medium text-lg leading-relaxed text-theme-dark">
                  Bày tỏ quan điểm.<br/>
                  Sử dụng cấu trúc: <b>"Ich finde ..., weil ..."</b>
                </p>
              </div>
            </div>
          </div>
        );
      case 12:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 8</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Tổng Kết & Bài Tập Mở Rộng</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/20 space-y-6 text-left">
               <h4 className="font-black text-theme-primary text-xl border-b border-theme-dark/10 pb-4">1. Ngữ pháp trọng tâm:</h4>
               <p className="font-bold text-theme-dark/80 flex flex-col gap-2">
                 <span>• <b>Komparativ (schneller)</b>: Dùng "als" khi so sánh.</span>
                 <span>• <b>Superlativ (am schnellsten)</b>: Cao nhất.</span>
               </p>
               
               <h4 className="font-black text-theme-secondary text-xl pt-4 border-b border-theme-dark/10 pb-4">2. Từ vựng & Kinh tế</h4>
               <p className="font-bold text-theme-dark/80 flex flex-col gap-2">
                 <span>• Sản xuất: Werk, Halle, Lkw, Produktion</span>
                 <span>• Động từ: steigen, sinken, sparen</span>
               </p>
            </div>
          </div>
        );
      case 13:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform -rotate-1 hover:rotate-1 transition-transform max-w-xl mx-auto cursor-pointer" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -right-8 text-6xl animate-bounce">🚗</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 9 <br/> Đã hoàn thành!
                </h2>
                <div className="w-16 h-2 bg-theme-primary mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-theme-dark/60 uppercase tracking-widest text-sm bg-theme-cream inline-block px-4 py-2 rounded-lg border-2 border-dashed border-theme-dark/20">
                   Bạn đã nắm vững các công thức so sánh!
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
        <div className="absolute top-0 left-0 h-2 bg-theme-primary transition-all duration-500 ease-out z-20 shadow-sm" style={{ width: currentSlide === -1 ? '0%' : `${((currentSlide + 1) / totalSlides) * 100}%` }} />
        
        {/* Content */}
        <div className="flex-1 p-2 md:p-8 relative z-10 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {renderSlide()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        {currentSlide === -1 ? (
          <div className="p-4 flex items-center justify-between border-t border-theme-dark/5 bg-theme-cream/50 z-10">
            {onBack ? (
              <button
                onClick={onBack}
                className="px-4 md:px-6 py-2 md:py-3 rounded-[20px] font-black tracking-wide transition-all flex items-center gap-1 md:gap-2 bg-white border border-theme-dark/10 hover:bg-theme-dark/5 active:scale-95 text-theme-dark text-xs md:text-base shadow-sm"
              >
                <ChevronLeft size={18} className="md:w-5 md:h-5" /> <span className="hidden sm:inline">Trở lại</span>
              </button>
            ) : <div />}
            <div className="text-[10px] md:text-xs font-bold text-theme-dark/50 tracking-widest uppercase text-right">
              Sơ đồ Lektion 9
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
                {currentSlide + 1} / {totalSlides-1}
              </span>
              <button onClick={() => setCurrentSlide(-1)} className="text-[10px] text-theme-primary flex items-center justify-center font-bold hover:underline uppercase tracking-widest p-1 mt-1 bg-theme-primary/10 rounded-lg sm:bg-transparent sm:mt-0 sm:p-0">
                Xem Lộ Trình
              </button>
            </div>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 2 && currentSlide !== totalSlides - 1}
              className="px-4 md:px-6 py-2 md:py-3 bg-theme-primary text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-theme-primary/20 hover:bg-theme-dark transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
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
