import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, CheckCircle2, Clock, Calendar, Users, MapPin, CheckSquare, FileText, Eye, BookOpen } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
  0: { bgColor: 'bg-theme-dark' }, 
  1: { bgColor: 'bg-emerald-50' },
  2: { bgColor: 'bg-teal-50' },
  3: { bgColor: 'bg-cyan-50' },
  4: { bgColor: 'bg-indigo-50' },
  5: { bgColor: 'bg-violet-50' },
  6: { bgColor: 'bg-fuchsia-50' },
  7: { bgColor: 'bg-rose-50' },
  8: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' }
};

export default function Lektion6Slides({ playAudio, playingId, onBack }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const [activeSlideTab, setActiveSlideTab] = useState<'roadmap'|'downloads'>('roadmap');
  const totalSlides = 9; 

  const nextSlide = () => {
    if (currentSlide === totalSlides - 1) {
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
              <div className="bg-emerald-50/50 p-6 rounded-3xl border-2 border-emerald-100 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-emerald-600 mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: Sự kiện & Thời gian
                </h3>
                <div className="space-y-4 flex-1">
                  <button 
                    onClick={() => setCurrentSlide(0)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-emerald-500 shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark group-hover:text-emerald-600 transition-colors text-lg">Tiết 1: Giới thiệu Lektion 6</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Tổng quan sự kiện & lễ hội</p>
                    </div>
                  </button>
                  {[
                    {title: 'Tiết 2: Từ vựng Sự kiện', slide: 2},
                    {title: 'Tiết 3: Giới từ thời gian', slide: 4},
                    {title: 'Tiết 4: Tổng kết Buổi 1', slide: 5}
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
                        <h4 className="font-black text-theme-dark hover:text-emerald-600 transition-colors text-lg">{item.title}</h4>
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
                  BUỔI 2: Cuộc hẹn & Gặp gỡ
                </h3>
                <div className="space-y-4">
                  {[
                    {title: "Tiết 5: Từ vựng Cuộc hẹn", onClick: () => setCurrentSlide(6)},
                    {title: "Tiết 6: Luyện nói: Đặt lịch hẹn", onClick: () => setCurrentSlide(7)},
                    {title: "Tiết 7 & 8: Test & Tổng kết", onClick: () => setCurrentSlide(8)}
                  ].map((item, i) => (
                      <button 
                         key={i}
                         onClick={item.onClick}
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
<h3 className="text-2xl font-black text-theme-dark">Tài liệu Bài giảng 6</h3>
<p className="text-theme-dark/70 font-medium text-center max-w-md">Bạn có thể tải trực tiếp file PDF bài giảng và bài tập Lektion 6 dưới đây:</p>
<div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl mt-4">
<a href="/Leitfaden-L6-Teil1.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-primary to-blue-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-theme-primary w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L6</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 1</span></div>
<div className="flex items-center gap-2 mt-2 bg-theme-primary/10 text-theme-primary px-4 py-2 rounded-full font-bold text-sm"><Eye size={16} /> Xem PDF</div>
</a>
<a href="/Leitfaden-L6-Teil2.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-emerald-500 w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L6</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 2</span></div>
<div className="flex items-center gap-2 mt-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full font-bold text-sm"><Eye size={16} /> Xem PDF</div>
</a>
</div>
</div>
            )}
          </div>
        );
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')] bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 6</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                Meine Lieblingsveranstaltung
              </h1>
              <p className="text-xl text-white/90 font-bold">Chủ đề: Sự kiện, Lễ hội và Các cuộc hẹn</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 1</span>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Video Giới Thiệu Khóa Học</h2>
            <div className="slide-card p-10 bg-white border-2 border-emerald-500/10 space-y-8 rounded-3xl">
              <div className="flex justify-center">
                <button 
                   onClick={() => playAudio('Chào mừng các bạn đến với bài 6! Hôm nay chúng ta sẽ học cách miêu tả về các sự kiện, lễ hội, cũng như cách hẹn hò từ vựng cho việc sắp xếp thời gian. Cùng bắt đầu thôi!', 'l6-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'l6-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-emerald-600 text-lg">1. Mục tiêu từ vựng</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Nói về các sự kiện, lễ hội, buổi biểu diễn.</li>
                    <li>Sắp xếp, thay đổi và hủy các cuộc hẹn.</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-teal-600 text-lg">2. Mục tiêu ngữ pháp</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Sử dụng các giới từ chỉ thời gian: von...bis, von...an, seit, über.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 2</span>
             <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <Calendar size={40} />
             </div>
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ Vựng: Sự kiện & Lễ hội</h2>
             <div className="grid grid-cols-2 gap-6 mt-8">
               {[
                 { w: 'die Veranstaltung', t: 'Sự kiện' },
                 { w: 'das Festival', t: 'Lễ hội' },
                 { w: 'die Bühne', t: 'Sân khấu' },
                 { w: 'der Eintritt', t: 'Vé vào cửa' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-6 text-center space-y-4 hover:-translate-y-1 transition-transform border border-emerald-100 bg-white rounded-3xl">
                   <button 
                     onClick={() => playAudio(item.w, `l6-v-${i}`, 'de-DE')}
                     className="w-12 h-12 bg-emerald-100 rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     {playingId === `l6-v-${i}` ? <CheckCircle2 className="text-emerald-500 w-5 h-5" /> : <Play className="text-emerald-500 w-5 h-5 ml-1" />}
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
      case 3:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 3</span>
             <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <Clock size={40} />
             </div>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Ngữ Pháp: Giới từ thời gian</h2>
            <div className="slide-card p-10 bg-white border-2 border-indigo-200 rounded-3xl">
               <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="font-black text-indigo-600 text-lg mb-2">von ... bis</h4>
                    <p className="font-medium text-theme-dark/70 mb-2">Từ ... đến (có kết thúc).</p>
                    <p className="font-bold text-theme-dark italic bg-indigo-50 p-2 rounded">Das Festival ist von Freitag bis Sonntag.</p>
                  </div>
                  <div>
                    <h4 className="font-black text-indigo-600 text-lg mb-2">von ... an</h4>
                    <p className="font-medium text-theme-dark/70 mb-2">Từ ... trở đi (bắt đầu một điều mới).</p>
                    <p className="font-bold text-theme-dark italic bg-indigo-50 p-2 rounded">Von morgen an lerne ich Deutsch.</p>
                  </div>
               </div>
            </div>
          </div>
        );
      case 4:
         return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Ngữ Pháp: seit & über</h2>
            <div className="slide-card p-10 bg-white border-2 border-rose-200 rounded-3xl">
               <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="font-black text-rose-600 text-lg mb-2">seit + Dativ</h4>
                    <p className="font-medium text-theme-dark/70 mb-2">Từ (quá khứ) đến nay.</p>
                    <p className="font-bold text-theme-dark italic bg-rose-50 p-2 rounded">Ich lebe seit einem Jahr in Deutschland.</p>
                  </div>
                  <div>
                    <h4 className="font-black text-rose-600 text-lg mb-2">über + Akk</h4>
                    <p className="font-medium text-theme-dark/70 mb-2">Hơn (một khoảng thời gian).</p>
                    <p className="font-bold text-theme-dark italic bg-rose-50 p-2 rounded">Ich arbeite schon über 10 Jahre hier.</p>
                  </div>
               </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-center pb-12">
            <div className="w-32 h-32 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/30">
              <CheckCircle2 size={64} />
            </div>
            <div className="space-y-4">
               <h2 className="text-5xl font-display font-black text-theme-dark">Tổng Kết Buổi 1</h2>
               <p className="text-xl font-bold text-theme-dark/60 uppercase tracking-widest">Bạn đã nắm được các giới từ thời gian!</p>
             </div>
             <div className="slide-card p-8 text-left space-y-4 max-w-md w-full mx-auto bg-white/90 font-bold text-theme-dark/80 rounded-3xl">
                <p>👉 Từ vựng về các sự kiện.</p>
                <p>👉 Giữa "von...bis", "von...an", "seit" và "über".</p>
             </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-indigo-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 5</span>
             <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <Users size={40} />
             </div>
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ Vựng: Cuộc hẹn (Verabredungen)</h2>
             <div className="grid grid-cols-2 gap-6 mt-8">
               {[
                 { w: 'ausmachen', t: 'Quyết định / Hẹn' },
                 { w: 'vorschlagen', t: 'Đề nghị' },
                 { w: 'mitkommen', t: 'Đi cùng' },
                 { w: 'sich verabreden', t: 'Hẹn hò/gặp' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-6 text-center space-y-4 hover:-translate-y-1 transition-transform border border-indigo-100 bg-white rounded-3xl">
                   <button 
                     onClick={() => playAudio(item.w, `l6-v2-${i}`, 'de-DE')}
                     className="w-12 h-12 bg-indigo-100 rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     {playingId === `l6-v2-${i}` ? <CheckCircle2 className="text-indigo-500 w-5 h-5" /> : <Play className="text-indigo-500 w-5 h-5 ml-1" />}
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
      case 7:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto text-center">
            <span className="px-6 py-2 bg-indigo-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 6</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Luyện nói: Đặt lịch hẹn</h2>
            <div className="slide-card p-10 bg-indigo-50 border-2 border-indigo-100 shadow-xl space-y-6 rounded-3xl">
                <p className="font-bold text-lg text-indigo-800 text-left">
                  "Lass uns ins Kino gehen!" (Hãy cùng đi xem phim nhé!)
                </p>
                <p className="font-bold text-lg text-emerald-800 text-left">
                  "Ja, prima Idee! Wann denn?" (Vâng, ý hay đấy! Vậy khi nào?)
                </p>
                <p className="font-bold text-lg text-indigo-800 text-left">
                  "Am Freitagabend? Was hältst du davon?" (Tối thứ 6 nhé? Cậu nghĩ sao?)
                </p>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform -rotate-1 hover:rotate-1 transition-transform max-w-xl mx-auto cursor-pointer rounded-[32px]" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -right-8 text-6xl animate-bounce">🎓</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 6 <br/> Đã hoàn thành!
                </h2>
                <div className="w-16 h-2 bg-emerald-500 mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-theme-dark/60 uppercase tracking-widest text-sm bg-slate-50 inline-block px-4 py-2 rounded-lg border-2 border-dashed border-theme-dark/20">
                   Bạn đã có thể tự tin hẹn hò rồi đấy!
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
        <div className="absolute top-0 left-0 h-2 bg-emerald-500 transition-all duration-500 ease-out z-20 shadow-sm" style={{ width: currentSlide === -1 ? '0%' : `${((currentSlide + 1) / totalSlides) * 100}%` }} />
        
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
            {onBack ? (
              <button
                onClick={onBack}
                className="px-4 md:px-6 py-2 md:py-3 rounded-[20px] font-black tracking-wide transition-all flex items-center gap-1 md:gap-2 bg-white border border-theme-dark/10 hover:bg-theme-dark/5 active:scale-95 text-theme-dark text-xs md:text-base shadow-sm"
              >
                <ChevronLeft size={18} className="md:w-5 md:h-5" /> <span className="hidden sm:inline">Trở lại</span>
              </button>
            ) : <div />}
            <div className="text-[10px] md:text-xs font-bold text-theme-dark/50 tracking-widest uppercase text-right">
              Sơ đồ Lektion 6
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
              <button onClick={() => setCurrentSlide(-1)} className="text-[10px] text-emerald-500 flex items-center justify-center font-bold hover:underline uppercase tracking-widest p-1 mt-1 bg-emerald-500/10 rounded-lg sm:bg-transparent sm:mt-0 sm:p-0">
                Xem Lộ Trình
              </button>
            </div>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="px-4 md:px-6 py-2 md:py-3 bg-emerald-500 text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
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
