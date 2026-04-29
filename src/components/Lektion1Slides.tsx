import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, CheckCircle2, MessageSquare, BookOpen, PenTool, CheckSquare, Gamepad2, Mic, Headphones, Eye, Clock, Users, FileText } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=800&fit=crop&q=80' },
  0: { bgColor: 'bg-theme-dark' }, 
  1: { bgColor: 'bg-amber-50' },
  2: { bgColor: 'bg-rose-50' },
  3: { bgColor: 'bg-emerald-50' },
  4: { bgColor: 'bg-indigo-50' },
  5: { bgColor: 'bg-slate-50' },
  10: { bgColor: 'bg-theme-cream' },
  11: { bgColor: 'bg-orange-50' },
  15: { bgColor: 'bg-emerald-50' },
  16: { bgColor: 'bg-white' },
  20: { bgImage: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-theme-primary/10' }
};

export default function Lektion1Slides({ playAudio, playingId, onBack }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const [activeSlideTab, setActiveSlideTab] = useState<'roadmap'|'downloads'>('roadmap');
  const totalSlides = 21; 

  const nextSlide = () => {
    if (currentSlide === 10 || currentSlide === totalSlides - 1) {
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
                  BUỔI 1: Gia đình & Nghề nghiệp
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
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 1: Giới thiệu & Video</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Tổng quan giáo trình</p>
                    </div>
                  </button>
                  {[
                    {title: 'Tiết 2: Từ vựng gia đình', slide: 4},
                    {title: 'Tiết 3: Đại từ sở hữu (Nom)', slide: 6},
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
                  BUỔI 2: Biến cách & Kể chuyện
                </h3>
                <div className="space-y-4">
                   {[
                    {title: "Tiết 5: Ôn tập & Đại từ (Akk/Dat)", onClick: () => setCurrentSlide(11)},
                    {title: "Tiết 6: Nói về truyền thống", onClick: () => setCurrentSlide(13)},
                    {title: "Tiết 7: Kể chuyện gia đình", onClick: () => setCurrentSlide(15)},
                    {title: "Tiết 8: Test & Tổng kết", onClick: () => setCurrentSlide(18)}
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
              </div></div>
) : (
<div className="flex flex-col items-center justify-center space-y-6 flex-1 bg-white p-10 rounded-[32px] border border-theme-primary/10 shadow-xl shadow-theme-dark/5">
<div className="w-20 h-20 bg-theme-primary/10 text-theme-primary rounded-full flex items-center justify-center">
<BookOpen size={40} />
</div>
<h3 className="text-2xl font-black text-theme-dark">Tài liệu Bài giảng 1</h3>
<p className="text-theme-dark/70 font-medium text-center max-w-md">Bạn có thể tải trực tiếp file PDF bài giảng và bài tập Lektion 1 dưới đây:</p>
<div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl mt-4">
<a href="/Leitfaden-L1-Teil1.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-primary to-blue-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-theme-primary w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L1</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 1</span></div>
<div className="flex items-center gap-2 mt-2 bg-theme-primary/10 text-theme-primary px-4 py-2 rounded-full font-bold text-sm"><Eye size={16} /> Xem PDF</div>
</a>
<a href="/Leitfaden-L1-Teil2.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-emerald-500 w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L1</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 2</span></div>
<div className="flex items-center gap-2 mt-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full font-bold text-sm"><Eye size={16} /> Xem PDF</div>
</a>
</div>
</div>
            )}
          </div>
        );
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=800&fit=crop')] bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 1</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                Mein Opa war auch schon Bäcker
              </h1>
              <p className="text-xl text-white/80 font-bold">Chủ đề: Gia đình, Nghề nghiệp & Kỷ niệm tuổi thơ</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 1</span>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Video Giới Thiệu Khóa Học</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-8">
              <div className="flex justify-center">
                <button 
                   onClick={() => playAudio('Chào mừng các bạn đến với trình độ A2! Giáo trình của chúng ta chia làm 24 bài học. Hôm nay chúng ta bắt đầu với Lektion 1. Chủ đề của chúng ta là gia đình đa thế hệ và các nghề nghiệp truyền thống. Chúng ta cùng tìm hiểu nhé!', 'l1-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-theme-primary/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'l1-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-theme-secondary text-lg">1. Cấu trúc giáo trình</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Trình độ A2: 24 bài (A2.1 và A2.2)</li>
                    <li>Chia làm 8 Module, mỗi Module 3 bài</li>
                    <li>Có sách giáo khoa (KB) & Sách bài tập (AB)</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-theme-accent text-lg">2. Mục tiêu Lektion 1</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Gọi tên các thành viên họ hàng</li>
                    <li>Nói về nghề nghiệp (Bäcker, Arzt...)</li>
                    <li>Kể lạc tuổi thơ bằng quá khứ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex gap-8 items-center h-full">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-display font-black text-theme-dark">Gia Đình Bạn Thế Nào?</h2>
              <h3 className="text-2xl font-bold text-theme-secondary">Wer ist das?</h3>
              <p className="text-theme-dark/80 leading-relaxed font-medium text-lg">
                Hãy tưởng tượng bạn đang xem một cuốn album ảnh cũ cùng gia đình. 
                Bạn sẽ giới thiệu những người trong ảnh như thế nào? "Đây là chú tôi, còn kia là bà nội tôi..."
              </p>
            </div>
            <div className="flex-1 rounded-[32px] overflow-hidden relative shadow-xl min-h-[400px] bg-theme-cream flex items-center justify-center border-4 border-white">
              <Users size={100} className="text-theme-primary opacity-20" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 2</span>
             <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <Users size={40} />
             </div>
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ Vựng: Gia đình mở rộng</h2>
             <div className="grid grid-cols-2 gap-6 mt-8">
               {[
                 { w: 'die Schwiegermutter', t: 'mẹ chồng/vợ' },
                 { w: 'die Schwiegertochter', t: 'con dâu' },
                 { w: 'der Neffe', t: 'cháu trai' },
                 { w: 'die Nichte', t: 'cháu gái' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-6 text-center space-y-4 hover:-translate-y-1 transition-transform border border-rose-100">
                   <button 
                     onClick={() => playAudio(item.w, `l1-v-${i}`, 'de-DE')}
                     className="w-12 h-12 bg-rose-100 rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     {playingId === `l1-v-${i}` ? <CheckCircle2 className="text-rose-500 w-5 h-5" /> : <Volume2 className="text-rose-500 w-5 h-5" />}
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
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ Vựng: Nghề nghiệp</h2>
            <div className="slide-card p-10 bg-white border-2 border-slate-200">
               <div className="space-y-6 text-center">
                 <p className="font-bold text-2xl text-theme-dark">der Bäcker &rarr; die Bäcker<span className="text-rose-600">in</span></p>
                 <p className="font-bold text-2xl text-theme-dark">der Arzt &rarr; die Ärzt<span className="text-rose-600">in</span></p>
                 <div className="h-px bg-slate-200 w-full my-4" />
                 <p className="text-lg font-medium text-slate-500 italic">Thêm đuôi "-in" để chỉ nữ giới làm nghề nghiệp đó. (Lưu ý một số từ đổi biến âm 'a' thành 'ä').</p>
               </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 3</span>
             <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <BookOpen size={40} />
             </div>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Ngữ Pháp: Possessivartikel (Nom)</h2>
            <div className="slide-card p-10 bg-emerald-50 border-2 border-emerald-200">
               <h3 className="text-2xl font-black text-emerald-600 uppercase mb-4 text-center">unser, euer, ihr, Ihr</h3>
               <p className="text-xl font-medium text-theme-dark leading-relaxed text-center italic">
                 Đây là Đại từ sở hữu mới của A2 ngoài mein/dein/sein/ihr. Dùng để nói "của chúng tôi", "của các bạn", "của họ", "của ngài".
               </p>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Đuôi của Possessivartikel</h2>
            <div className="slide-card p-10 bg-emerald-50 border-2 border-emerald-200 space-y-8">
               <div className="space-y-4 max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-sm text-left">
                 <p className="font-bold text-lg mb-1">Das ist <span className="text-emerald-600">unser</span> Opa. (der)</p>
                 <p className="font-bold text-lg mb-1">Das ist <span className="text-emerald-600">unsere</span> Tante. (die)</p>
                 <div className="h-px bg-slate-200 w-full my-4" />
                 <p className="font-bold text-lg mb-1">Oh, sind das <span className="text-emerald-600">eure</span> Fahrräder? (die Plural)</p>
                 <p className="text-sm font-bold text-emerald-600 mt-4 px-4 py-2 bg-emerald-100 rounded-lg">Cần thêm "-e" nếu danh từ phía sau là giống CÁI (die) hoặc SỐ NHIỀU.</p>
               </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto text-center">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 4</span>
            <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <Headphones size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark">Luyện nghe & Tổng kết</h2>
            <div className="slide-card p-10 bg-indigo-50 border-2 border-indigo-200 space-y-6">
               <h4 className="font-black text-indigo-600 text-xl">Luyện nghe hội thoại bài 1 (KB)</h4>
               <p className="font-medium text-slate-700 text-left">
                 Học viên nghe cuộc nói chuyện giữa các thành viên gia đình trong tiệm bánh.
                 Ai đang làm nghề gì? Ông nội ngày trước làm nghề gì?
               </p>
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
               <p className="text-xl font-bold text-theme-dark/60 uppercase tracking-widest">Tuyệt vời, bạn đã nhớ được các ngôi sở hữu mới!</p>
             </div>
             <div className="slide-card p-8 text-left space-y-4 max-w-md w-full mx-auto bg-white/90 font-bold text-theme-dark/80">
                <p>👉 Từ vựng gia đình & nghề nghiệp.</p>
                <p>👉 Unser / euer / ihr / Ihr (Nominativ).</p>
             </div>
          </div>
        );
      case 9:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto">BUỔI 2</span>
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto ml-2">TIẾT 5</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Ôn tập & Biến cách Akkusativ/Dativ</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-6 bg-theme-cream border-2 border-theme-dark/10">
               <p className="font-bold text-theme-dark/80 text-xl leading-relaxed italic text-left">
                 Bạn đã biết "mein Vater", "meine Mutter". 
                 Bây giờ, nếu nói "Tôi thấy bố tôi" hay "Tôi đi chơi với mẹ tôi" thì Possessivartikel sẽ thay đổi đuôi ra sao?
               </p>
            </div>
          </div>
        );
      case 10:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Biến cách Possessivartikel</h2>
            <div className="slide-card p-10 bg-white border-2 border-theme-dark/10 shadow-xl space-y-6 text-left">
               <p className="font-bold text-lg text-rose-600 mb-1">Akkusativ (vd: sehen, lieben, haben)</p>
               <p className="font-medium text-slate-700">der &rarr; den <span className="font-bold text-theme-dark">(Ich sehe <span className="underline">meinen</span> Opa).</span></p>
               
               <div className="h-px bg-slate-200 w-full my-4" />
               
               <p className="font-bold text-lg text-emerald-600 mb-1">Dativ (vd: mit, von, aus)</p>
               <p className="font-medium text-slate-700">der/das &rarr; dem <span className="font-bold text-theme-dark">(Ich spreche mit <span className="underline">meinem</span> Opa).</span></p>
               <p className="font-medium text-slate-700">die &rarr; der <span className="font-bold text-theme-dark">(Ich spiele mit <span className="underline">meiner</span> Nichte).</span></p>
               <p className="font-medium text-slate-700">die(pl) &rarr; den +n <span className="font-bold text-theme-dark">(Ich koche für <span className="underline">meinen</span> Neffe<span className="text-rose-500 font-black">n</span>).</span></p>
            </div>
          </div>
        );
      case 11:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto text-center">
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 6</span>
             <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <Mic size={40} />
             </div>
            <h2 className="text-4xl font-display font-black text-theme-dark">Nói: Nghề nghiệp gia đình</h2>
            <div className="slide-card p-10 bg-indigo-50 border-2 border-indigo-100 shadow-xl space-y-6">
                <p className="font-bold text-lg text-indigo-800 text-left">
                  "Mein Großvater <span className="text-rose-600 underline">war</span> Bäcker."
                </p>
                <p className="font-bold text-lg text-indigo-800 text-left">
                  "Ich möchte auf keinen Fall Arzt werden."
                </p>
                <p className="font-medium mt-4 text-slate-700 italic">Làm việc nhóm: Hỏi các bạn cùng lớp xem bố mẹ, ông bà của họ làm nghề gì và họ muốn làm nghề gì.</p>
            </div>
          </div>
        );
      case 12:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto text-center">
             <span className="px-6 py-2 bg-theme-accent text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 7</span>
             <h2 className="text-4xl font-display font-black text-theme-dark">Kể chuyện gia đình (Integration)</h2>
             <div className="grid grid-cols-2 gap-6 mt-8">
               {[
                 { de: "draussen übernachten", vi: "ngủ ngoài trời" },
                 { de: "auf Bäume klettern", vi: "trèo cây" },
                 { de: "Comics lesen", vi: "đọc truyện tranh" },
                 { de: "Witze erzählen", vi: "kể chuyện cười" }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-4 text-left space-x-4 flex items-center bg-blue-50 border border-blue-100 hover:scale-105 transition-transform">
                   <button 
                     onClick={() => playAudio(item.de, `l1-v3-${i}`, 'de-DE')}
                     className="w-10 h-10 bg-blue-200 rounded-full flex flex-shrink-0 items-center justify-center hover:bg-blue-300"
                   >
                     {playingId === `l1-v3-${i}` ? <CheckCircle2 className="text-blue-600 w-5 h-5" /> : <Play className="text-blue-600 w-4 h-4 ml-1" />}
                   </button>
                   <div>
                     <h4 className="font-black text-theme-dark">{item.de}</h4>
                     <p className="font-medium text-sm text-theme-dark/60">{item.vi}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        );
      case 13:
         return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto text-center">
             <h2 className="text-4xl font-display font-black text-theme-dark">Sử dụng Quá Khứ (Perfekt/Präteritum)</h2>
             <div className="slide-card p-10 bg-emerald-50 border-2 border-emerald-100 shadow-xl space-y-6 text-left">
                <p className="font-bold text-lg text-emerald-800">
                  <span className="bg-emerald-200 px-2 py-1 rounded">Zuerst</span> haben wir gespielt.
                </p>
                <p className="font-bold text-lg text-emerald-800">
                  <span className="bg-emerald-200 px-2 py-1 rounded">Dann</span> hat er Witze erzählt.
                </p>
                <p className="font-bold text-lg text-emerald-800">
                   <span className="bg-emerald-200 px-2 py-1 rounded">Zum Schluss</span> haben wir draußen übernachtet.
                </p>
                <p className="font-medium mt-6 text-slate-700 italic">Sử dụng cụm từ nối để câu chuyện thêm logic.</p>
             </div>
          </div>
        );
      case 14:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 8</span>
            <div className="w-20 h-20 bg-theme-primary/10 text-theme-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckSquare size={36} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark">Ôn Tập & Kiểm Tra Cuối Bài</h2>
            <div className="slide-card p-10 bg-white shadow-xl border-2 border-theme-primary/10 space-y-6 text-left">
               <h4 className="font-black text-theme-primary text-xl border-b border-theme-dark/10 pb-4">1. Nhiệm vụ tổng kết:</h4>
               <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-2">
                 <li>Review lại các đại từ sở hữu Akkusativ/Dativ.</li>
                 <li>Viết đoạn ngắn kể một kỉ niệm độc đáo ở tuổi thơ.</li>
                 <li>Làm bài Test kiểm tra phần cuối bài.</li>
               </ul>
            </div>
          </div>
        );
      case 15:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform -rotate-1 hover:rotate-1 transition-transform max-w-xl mx-auto cursor-pointer" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -right-8 text-6xl animate-bounce">🎓</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 1 <br/> Đã hoàn thành!
                </h2>
                <div className="w-16 h-2 bg-theme-primary mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-theme-dark/60 uppercase tracking-widest text-sm bg-theme-cream inline-block px-4 py-2 rounded-lg border-2 border-dashed border-theme-dark/20">
                   Khởi đầu tuyệt vời cho trình độ A2!
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
              className="w-full h-full flex flex-col justify-center"
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
              Sơ đồ Lektion 1
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
                {currentSlide + 1} / 15
              </span>
              <button onClick={() => setCurrentSlide(-1)} className="text-[10px] text-theme-primary flex items-center justify-center font-bold hover:underline uppercase tracking-widest p-1 mt-1 bg-theme-primary/10 rounded-lg sm:bg-transparent sm:mt-0 sm:p-0">
                Xem Lộ Trình
              </button>
            </div>
            <button
              onClick={nextSlide}
              disabled={currentSlide === 15}
              className="px-4 md:px-6 py-2 md:py-3 bg-theme-primary text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-theme-primary/20 hover:bg-theme-dark transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
            >
              <span className="hidden sm:inline">
                {currentSlide === 15 ? 'Đóng lại' : 'Tiếp'}
              </span> 
              <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
