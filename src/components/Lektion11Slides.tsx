import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, CheckCircle2, MessageSquare, ShoppingBag, Shirt, TrendingUp, CheckSquare, Search, FileText, Eye, BookOpen } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white' },
  0: { bgColor: 'bg-theme-dark' }, 
  1: { bgColor: 'bg-amber-50' },
  2: { bgColor: 'bg-rose-50' },
  3: { bgColor: 'bg-sky-50' },
  4: { bgColor: 'bg-emerald-50' },
  5: { bgColor: 'bg-orange-50' },
  6: { bgColor: 'bg-theme-cream' },
  7: { bgColor: 'bg-violet-50' },
  8: { bgColor: 'bg-fuchsia-50' },
  9: { bgColor: 'bg-indigo-50' },
  10: { bgColor: 'bg-white' }
};

export default function Lektion11Slides({ playAudio, playingId, onBack }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const [activeSlideTab, setActiveSlideTab] = useState<'roadmap'|'downloads'>('roadmap');
  const totalSlides = 11; 

  const nextSlide = () => {
    if (currentSlide === 4 || currentSlide === totalSlides - 1) {
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
              <p className="font-bold text-theme-dark/60">Thời trang & So sánh (Kleidung & Komparativ)</p>
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
              <div className="bg-theme-secondary/5 p-6 rounded-3xl border-2 border-theme-secondary/10 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-secondary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-secondary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-secondary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: THỜI TRANG & KOMPARATIV
                </h3>
                <div className="space-y-4 flex-1">
                  <button 
                    onClick={() => setCurrentSlide(0)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-secondary shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark group-hover:text-theme-secondary transition-colors text-lg">Tiết 1: Định hướng & Từ vựng</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Chủ đề Kleidung (Quần áo)</p>
                    </div>
                  </button>
                  <button 
                    onClick={() => setCurrentSlide(2)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-secondary/50 shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark group-hover:text-theme-secondary transition-colors text-lg">Tiết 2: Ngữ pháp Komparativ</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">So sánh hơn của tính từ</p>
                    </div>
                  </button>
                  {[
                    {title: "Tiết 3: Kỹ năng Đi mua sắm", slide: 3},
                    {title: "Tiết 4: Tổng kết Buổi 1 & Nghe", slide: 4}
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
              <div className="bg-theme-primary/5 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">2</div>
                  BUỔI 2: LỜI KHUYÊN & SUPERLATIV
                </h3>
                <div className="space-y-4 flex-1">
                   {[
                    {title: "Tiết 5: So sánh nhất (Superlativ)", onClick: () => setCurrentSlide(5)},
                    {title: "Tiết 6: Đưa ra lời khuyên", onClick: () => setCurrentSlide(6)},
                    {title: "Tiết 7: Củng cố 4 kỹ năng", onClick: () => setCurrentSlide(7)},
                    {title: "Tiết 8: Lektionstest & Tổng kết", onClick: () => setCurrentSlide(8)}
                  ].map((item, i) => (
                      <button 
                         key={i}
                         onClick={item.onClick}
                         className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-primary/50 shadow-sm group"
                      >
                         <div className="w-12 h-12 rounded-full bg-theme-primary/10 text-theme-primary flex items-center justify-center shrink-0">
                           <Play className="w-5 h-5 ml-1" />
                         </div>
                         <div className="text-left flex-1">
                           <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">{item.title}</h4>
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
<h3 className="text-2xl font-black text-theme-dark">Tài liệu Bài giảng 11</h3>
<p className="text-theme-dark/70 font-medium text-center max-w-md">Bạn có thể tải trực tiếp file PDF bài giảng và bài tập Lektion 11 dưới đây:</p>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl mt-4">
<a href="/Leitfaden-L11-Teil1.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-primary to-blue-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-theme-primary w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L11</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 1</span></div>
<div className="flex items-center gap-2 mt-2 bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full font-bold text-sm" style={{ color: '#3b82f6' }}><Eye size={16} /> Xem PDF</div>
</a>
<a href="/Leitfaden-L11-Teil2.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-emerald-500 w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L11</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 2</span></div>
<div className="flex items-center gap-2 mt-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full font-bold text-sm" style={{ color: '' }}><Eye size={16} /> Xem PDF</div>
</a>
<a href="/Leitfaden-L11-Teil3.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-amber-500 w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L11</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 3</span></div>
<div className="flex items-center gap-2 mt-2 bg-amber-500/10 text-amber-600 px-4 py-2 rounded-full font-bold text-sm" style={{ color: '' }}><Eye size={16} /> Xem PDF</div>
</a>
<a href="/Leitfaden-L11-Teil4.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-red-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-rose-500 w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L11</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 4</span></div>
<div className="flex items-center gap-2 mt-2 bg-rose-500/10 text-rose-600 px-4 py-2 rounded-full font-bold text-sm" style={{ color: '' }}><Eye size={16} /> Xem PDF</div>
</a>
</div>
</div>
            )}
          </div>
        );
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=800&fit=crop')] bg-cover bg-center rounded-[48px] relative overflow-hidden w-full">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 11</span>
              <h1 className="text-4xl md:text-5xl font-display font-black text-white leading-tight">
                Zeit für Mode!
              </h1>
              <p className="text-xl text-white/80 font-bold">Chủ đề: Thời trang, Mua sắm & So sánh</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Định Hướng Lektion 11</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-secondary/10 space-y-8">
              <div className="flex justify-center">
                <button 
                  onClick={() => playAudio("Xin chào! Trong bài học hôm nay, chúng ta sẽ mua sắm chuẩn bị cho một sự kiện, học cách gọi tên trang phục và lựa chọn đồ bằng các cấu trúc so sánh hơn và so sánh nhất.", 'L11-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-theme-secondary text-white rounded-full flex items-center justify-center shadow-xl shadow-theme-secondary/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'L11-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-theme-primary text-lg">1. Mục Tiêu Giao Tiếp</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Hội thoại đi mua sắm (hỏi giá, size, thử đồ)</li>
                    <li>Đưa ra ý kiến về trang phục (khen/chê)</li>
                    <li>Đưa ra lời khuyên cho bạn bè (sollen)</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-theme-accent text-lg">2. Từ Vựng & Đọc Hiểu</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Trang phục: Hose, Hemd, Kleid, Schuhe...</li>
                    <li>Màu sắc và chất liệu cơ bản</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-theme-dark/5 text-center">
                <h4 className="font-black text-theme-secondary mb-3">3. Ngữ pháp trọng tâm</h4>
                <ul className="text-sm font-bold text-theme-dark/70 flex max-md:flex-col justify-center gap-6">
                  <li>• So sánh hơn (Komparativ)</li>
                  <li>• So sánh nhất (Superlativ)</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 2</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Ngữ pháp: So sánh hơn (Komparativ)</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto space-y-8 bg-sky-50 border-2 border-sky-100 text-left">
               <p className="text-xl font-bold text-theme-dark leading-relaxed">
                 Để so sánh hai đối tượng với nhau, ta dùng cấu trúc: <br/>
                 <span className="text-sky-600 font-black text-2xl">Adjektiv + -er + als</span>
               </p>
               <div className="grid sm:grid-cols-2 gap-6">
                 <div className="bg-white p-5 rounded-2xl border-l-4 border-sky-500 shadow-sm space-y-2">
                    <h4 className="font-black text-sky-600 mb-2 text-lg">Quy tắc chung</h4>
                    <p className="text-sm font-medium text-theme-dark/70">Thêm <b>-er</b> vào tính từ và dùng <b>als</b>.</p>
                    <p className="font-bold mt-2">billig ➔ billiger</p>
                    <p className="font-bold mt-1 text-sky-700">Das blaue Hemd ist billiger als das rote.</p>
                 </div>
                 <div className="bg-white p-5 rounded-2xl border-l-4 border-rose-500 shadow-sm space-y-2">
                    <h4 className="font-black text-rose-600 mb-2 text-lg">Bất quy tắc (Wichtig!)</h4>
                    <div className="font-bold mt-2 space-y-2 text-theme-dark">
                       <p>gut ➔ <span className="text-rose-600">besser</span></p>
                       <p>viel ➔ <span className="text-rose-600">mehr</span></p>
                       <p>gern ➔ <span className="text-rose-600">lieber</span></p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 3</span>
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Giao tiếp: Đi Mua Sắm (Einkaufen)</h2>
             <div className="grid md:grid-cols-3 gap-4 mt-6">
                 <div className="slide-card p-6 border-b-4 border-sky-500 bg-white">
                    <ShoppingBag className="text-sky-500 w-10 h-10 mb-4" />
                    <h4 className="font-black text-theme-dark text-lg mb-2">Hỏi thăm</h4>
                    <p className="font-bold text-theme-dark/70">"Welche Größe haben Sie?" (Size của bạn là gì?)</p>
                    <p className="font-bold text-theme-dark/70 mt-2">"Wo ist die Umkleidekabine?" (Phòng thử đồ ở đâu?)</p>
                 </div>
                 <div className="slide-card p-6 border-b-4 border-emerald-500 bg-white">
                    <Search className="text-emerald-500 w-10 h-10 mb-4" />
                    <h4 className="font-black text-theme-dark text-lg mb-2">Hỏi ý kiến</h4>
                    <p className="font-bold text-theme-dark/70">"Wie findest du das Kleid?" (Bạn thấy cái váy này thế nào?)</p>
                 </div>
                 <div className="slide-card p-6 border-b-4 border-amber-500 bg-white">
                    <MessageSquare className="text-amber-500 w-10 h-10 mb-4" />
                    <h4 className="font-black text-theme-dark text-lg mb-2">Đưa ra nhận xét</h4>
                    <p className="font-bold text-theme-dark/70">"Das steht dir gut!" (Nó hợp với bạn đó!)</p>
                    <p className="font-bold text-theme-dark/70 mt-2">"Das ist zu eng." (Nó quá chật.)</p>
                 </div>
             </div>
          </div>
        );
      case 4:
        return (
          <div className="flex gap-8 items-center h-full flex-col md:flex-row">
            <div className="flex-1 space-y-6 w-full text-center md:text-left">
              <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mb-4">TIẾT 4</span>
              <h2 className="text-4xl font-display font-black text-theme-dark">Tổng kết Buổi 1 & Luyện nghe</h2>
              <div className="space-y-4 slide-card p-6 border-2 border-theme-dark/5 bg-theme-cream text-left">
                 <p className="font-bold text-theme-dark/80 text-lg leading-relaxed mb-4">
                   Tình huống mua sắm tại trung tâm thương mại:
                 </p>
                 <ul className="text-base font-bold text-theme-dark/70 space-y-3 list-disc pl-5">
                    <li>Ôn lại các tính từ thường đi kèm quần áo (eng, weit, kurz, lang, billig, teuer)</li>
                    <li>Sử dụng thành thạo Komparativ để so sánh hai chiếc áo.</li>
                    <li>Nhập vai (Role-play) khách hàng & nhân viên bán hàng.</li>
                 </ul>
              </div>
            </div>
            <div className="flex-1 w-full rounded-[32px] overflow-hidden relative shadow-xl min-h-[300px] md:min-h-[400px] bg-slate-100 border-4 border-white flex items-center justify-center p-8">
               <div className="w-32 h-32 bg-slate-300 text-slate-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                 <Volume2 size={48} className="ml-2" />
               </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">BUỔI 2 : TIẾT 5</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">So sánh nhất (Superlativ)</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto space-y-8 bg-theme-primary/5 border-2 border-theme-primary/20 text-left">
               <p className="text-xl font-bold text-theme-dark leading-relaxed">
                 Để biểu đạt mức độ "nhất", ta dùng cấu trúc: <br/>
                 <span className="text-theme-primary font-black text-2xl inline-block mt-2">am + Adjektiv + -sten</span> <br/>
                 hoặc <span className="text-theme-secondary font-black text-2xl inline-block mt-2">der/die/das + Adjektiv + -ste</span>
               </p>
               <div className="grid sm:grid-cols-2 gap-6 mt-4">
                 <div className="bg-white p-5 rounded-2xl border-l-4 border-theme-primary shadow-sm space-y-3">
                    <p className="font-black text-lg">schön</p>
                    <p className="font-bold text-theme-dark/70">➔ schöner (Komparativ)</p>
                    <p className="font-bold text-theme-primary text-lg">➔ am schönsten (Superlativ)</p>
                 </div>
                 <div className="bg-white p-5 rounded-2xl border-l-4 border-theme-secondary shadow-sm space-y-3">
                    <p className="font-black text-lg">gut</p>
                    <p className="font-bold text-theme-dark/70">➔ besser (Komparativ)</p>
                    <p className="font-bold text-theme-secondary text-lg">➔ am besten (Superlativ)</p>
                 </div>
               </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 6</span>
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Đưa ra lời khuyên (Ratschläge geben)</h2>
             <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
                <div className="slide-card p-8 bg-white border border-slate-200 rounded-3xl shadow-sm text-left">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4"><CheckSquare size={20}/></div>
                  <h4 className="font-black text-theme-dark text-lg mb-4">Sử dụng động từ "sollen"</h4>
                  <p className="font-bold mb-3 text-lg leading-relaxed">"Ich finde, <span className="text-emerald-600">du solltest</span> das grüne Kleid nehmen."</p>
                  <p className="font-medium text-theme-dark/60">(Tôi thấy là bạn nên chọn chiếc váy màu xanh.)</p>
                </div>
                <div className="slide-card p-8 bg-white border border-slate-200 rounded-3xl shadow-sm text-left">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4"><TrendingUp size={20}/></div>
                  <h4 className="font-black text-theme-dark text-lg mb-4">Dùng So sánh để khuyên</h4>
                  <p className="font-bold mb-3 text-lg leading-relaxed">"Nimm <span className="text-amber-600">lieber</span> das Kleid. Das ist <span className="text-amber-600">am schönsten</span>."</p>
                  <p className="font-medium text-theme-dark/60">(Tốt hơn là lấy váy này đi, nó đẹp nhất đấy.)</p>
                </div>
             </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 7</span>
             <h2 className="text-4xl font-display font-black text-theme-dark">Integration - 4 Kỹ năng</h2>
             
             <div className="bg-white p-8 rounded-3xl border-2 border-indigo-100 text-left max-w-2xl mx-auto space-y-6 shadow-sm">
                <div className="flex gap-4 items-start">
                   <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-black mt-1">1</div>
                   <div>
                     <h4 className="font-black text-lg text-theme-dark">Đọc & Viết (Xu hướng thời trang)</h4>
                     <p className="font-medium text-theme-dark/70 mt-1">Đọc Blog thời trang. Viết một Email tư vấn trang phục sinh nhật (dùng Komparativ & Superlativ).</p>
                   </div>
                </div>
                <div className="flex gap-4 items-start">
                   <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-black mt-1">2</div>
                   <div>
                     <h4 className="font-black text-lg text-theme-dark">Thảo luận (Mua sắm)</h4>
                     <p className="font-medium text-theme-dark/70 mt-1">Làm việc nhóm: "Bạn thích mua sắm online hay trực tiếp tại cửa hàng? Tại sao?"</p>
                   </div>
                </div>
             </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 8</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Lektionstest & Tổng kết</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/20 space-y-6 text-left shadow-sm">
               <h4 className="font-black text-theme-primary text-xl border-b border-theme-dark/10 pb-4">Nội dung Test Lektion 11:</h4>
               <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-2">
                 <li><b>Chia tính từ:</b> Xác định Komparativ và Superlativ.</li>
                 <li><b>Viết lời khuyên:</b> Dùng "sollen" hoặc "lieber / am besten".</li>
                 <li><b>Nghe hiểu:</b> Khoanh vào món đồ được chọn.</li>
               </ul>
            </div>
            <button 
                onClick={() => playAudio("Chúc mừng các bạn đã hoàn thành bài 11. Các bạn nhớ làm bài tập online nhé!", 'l11-end-audio', 'vi-VN')}
                className="mx-auto flex items-center justify-center p-4 bg-white border border-slate-200 shadow-sm rounded-2xl font-bold gap-3 hover:bg-slate-50 transition-colors w-max"
              >
                <Volume2 className="text-theme-dark/50" /> Nghe giáo viên dặn dò
              </button>
          </div>
        );
      case 9:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-theme-cream border-8 border-theme-primary shadow-[16px_16px_0_0_#9333ea] transform rotate-1 hover:-rotate-1 transition-transform max-w-xl mx-auto pointer-events-auto cursor-pointer" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -left-8 text-6xl animate-bounce">🎓</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6 mt-4">
                   Lektion 11 <br/> Đã hoàn thành!
                </h2>
                <div className="w-16 h-2 bg-theme-secondary mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-theme-dark/60 uppercase tracking-widest text-sm bg-white inline-block px-4 py-2 rounded-lg border-2 border-dashed border-theme-dark/20 text-center">
                   Bây giờ bạn đã sẵn sàng để đi mua sắm <br/> và đưa ra những lời khuyên thời trang bổ ích!
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
        <div className="absolute top-0 left-0 h-2 bg-theme-secondary transition-all duration-500 ease-out z-20 shadow-sm" style={{ width: currentSlide === -1 ? '0%' : `${((currentSlide + 1) / totalSlides) * 100}%` }} />
        
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
              Sơ đồ Lektion 11
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
               <button onClick={() => setCurrentSlide(-1)} className="text-[10px] text-theme-secondary flex items-center justify-center font-bold hover:underline uppercase tracking-widest p-1 mt-1 bg-theme-secondary/10 rounded-lg sm:bg-transparent sm:mt-0 sm:p-0">
                 Xem Lộ Trình
               </button>
            </div>
            <button
               onClick={nextSlide}
               disabled={currentSlide === totalSlides - 2 && currentSlide !== 9}
               className="px-4 md:px-6 py-2 md:py-3 bg-theme-secondary text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-theme-secondary/20 hover:bg-theme-dark transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
            >
               <span className="hidden sm:inline">
                 {currentSlide === 9 ? 'Đóng lại' : 'Tiếp'}
               </span> 
               <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
