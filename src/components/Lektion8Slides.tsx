import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, CheckCircle2, MessageSquare, AlertTriangle, ArrowRight, HeartPulse, Stethoscope, CheckSquare, Heart } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=800&fit=crop&q=80' },
  0: { bgColor: 'bg-theme-dark' },
  1: { bgColor: 'bg-amber-50' },
  2: { bgColor: 'bg-rose-50' },
  3: { bgColor: 'bg-emerald-50' },
  4: { bgColor: 'bg-sky-50' },
  5: { bgColor: 'bg-indigo-50' },
  6: { bgColor: 'bg-purple-50' },
  7: { bgColor: 'bg-teal-50' },
  8: { bgColor: 'bg-amber-50' },
  9: { bgColor: 'bg-rose-50' },
  10: { bgColor: 'bg-red-50' },
  11: { bgColor: 'bg-slate-50' },
  12: { bgColor: 'bg-theme-cream' },
  13: { bgImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-theme-primary/10' }
};

export default function Lektion8Slides({ playAudio, playingId, onBack }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
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
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình Lektion 8</h2>
              <p className="font-bold text-theme-dark/60">Hành trình 8 tiết học chuyên sâu</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: Khám Bệnh & Liên từ "weil"
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
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 1: Khám bệnh</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Từ vựng y tế và tâm lý, ôn L7</p>
                    </div>
                  </button>
                  <button 
                    onClick={() => setCurrentSlide(5)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-primary/50 shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-theme-primary/10 text-theme-primary flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 2: Liên từ "weil"</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Mệnh đề phụ chỉ nguyên nhân</p>
                    </div>
                  </button>
                  {[
                    {title: "Tiết 3: Bày tỏ lo lắng & Cảm thông", slide: 6},
                    {title: "Tiết 4: Tổng kết Buổi 1 & Nghe", slide: 7}
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
                  BUỔI 2: "deshalb" & Tình Huống Khẩn Cấp
                </h3>
                <div className="space-y-4">
                   {[
                    {title: "Tiết 5: Liên từ kết quả 'deshalb'", locked: false, onClick: () => setCurrentSlide(8)},
                    {title: "Tiết 6: Tình huống Khẩn cấp (Notfall)", locked: false, onClick: () => setCurrentSlide(10)},
                    {title: "Tiết 7: Kỹ năng Kể chuyện", locked: false, onClick: () => setCurrentSlide(11)},
                    {title: "Tiết 8: Test & Video tổng kết", locked: false, onClick: () => setCurrentSlide(12)}
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
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=800&fit=crop')] bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 8</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                Hoffentlich ist es<br />nicht das Herz!
              </h1>
              <p className="text-xl text-white/80 font-bold">Hy vọng không phải là bệnh tim!</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Video Định Hướng & Mục Tiêu</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-8">
              <div className="flex justify-center">
                <button 
                  onClick={() => playAudio("Chào mừng bạn đến với Lektion 8. Hôm nay chúng ta sẽ tìm hiểu về các tình huống y tế, cách bày tỏ sự lo lắng và sử dụng liên từ chỉ nguyên nhân kết quả.", 'l8-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-theme-primary/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'l8-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-theme-secondary text-lg">1. Mục Tiêu Giao Tiếp</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Giao tiếp tại phòng khám y tế</li>
                    <li>Bày tỏ sự lo lắng và cảm thông</li>
                    <li>Kể lại sự việc hoặc một tình huống tai nạn</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-theme-accent text-lg">2. Từ Vựng & Cấu Trúc</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Từ vựng y tế, bệnh lý, phòng cấp cứu</li>
                    <li>Mệnh đề phụ chỉ nguyên nhân (weil)</li>
                    <li>Liên từ chỉ kết quả (deshalb)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 1</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Ôn Bài Cũ (Lektion 7)</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8">
               <h3 className="text-2xl font-black text-theme-secondary">Game: "Ratschläge geben"</h3>
               <p className="font-bold text-theme-dark/60 text-lg">Đưa ra lời khuyên với <b className="text-theme-dark">sollten</b> và <b className="text-theme-dark">könnten</b>.</p>
               <div className="flex flex-col gap-4 items-center w-full max-w-sm mx-auto">
                 <button onClick={() => playAudio("Du solltest zum Arzt gehen.", `l8-ve-1`, 'de-DE')} className="w-full py-3 bg-theme-cream hover:bg-theme-primary hover:text-white rounded-xl font-bold border-2 border-theme-dark/5 transition-colors cursor-pointer text-theme-dark text-left px-6">
                   Ich bin sehr müde. ➡️ Du solltest...
                 </button>
                 <button onClick={() => playAudio("An deiner Stelle würde ich einen Tee trinken.", `l8-ve-2`, 'de-DE')} className="w-full py-3 bg-theme-cream hover:bg-theme-secondary hover:text-white rounded-xl font-bold border-2 border-theme-dark/5 transition-colors cursor-pointer text-theme-dark text-left px-6">
                   Ich habe Halsschmerzen. ➡️ An deiner Stelle...
                 </button>
               </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex gap-8 items-center h-full">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-display font-black text-theme-dark">Tình Huống: Phòng Khám</h2>
              <h3 className="text-2xl font-bold text-theme-primary">Was ist ein guter Arzt?</h3>
              <p className="text-theme-dark/80 leading-relaxed font-medium text-lg">
                Theo bạn, thế nào là một bác sĩ tốt? Khi ngồi ở phòng chờ phòng khám điện tâm đồ, bệnh nhân thường có cảm giác lo lắng (<b className="text-rose-500">die Sorge</b>) và mong được an tâm, hy vọng (<b className="text-emerald-500">hoffentlich</b>) mọi chuyện đều ổn.
              </p>
            </div>
            <div className="flex-1 w-full rounded-[32px] overflow-hidden relative shadow-xl min-h-[400px] bg-theme-cream flex items-center justify-center border-4 border-white">
              <Stethoscope size={100} className="text-theme-primary/20" />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ Vựng Y Tế & Tâm Lý</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
               {[
                 { w: 'die Untersuchung', t: 'Sự khám, kiểm tra' },
                 { w: 'die Krankheit', t: 'Căn bệnh' },
                 { w: 'die Sprechstunde', t: 'Giờ khám bệnh' },
                 { w: 'der Notfall', t: 'Trường hợp cấp cứu' },
                 { w: 'die Wahrheit', t: 'Sự thật' },
                 { w: 'die Sorge / sich sorgen', t: 'Sự lo lắng / Nỗi lo' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-6 text-center space-y-4 hover:-translate-y-1 transition-transform">
                   <button 
                     onClick={() => playAudio(item.w, `l8-v-${i}`, 'de-DE')}
                     className="w-12 h-12 bg-theme-primary/10 rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     {playingId === `l8-v-${i}` ? <CheckCircle2 className="text-emerald-500 w-5 h-5" /> : <Volume2 className="text-theme-primary w-5 h-5" />}
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
      case 5:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 2</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Ngữ Pháp: "weil"</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto space-y-8 bg-indigo-50 border-2 border-indigo-200">
               <p className="text-xl font-bold text-theme-dark/80 max-w-2xl mx-auto leading-relaxed">
                 Liên từ <b className="text-indigo-600">weil</b> (bởi vì) giải thích nguyên nhân. Câu chứa "weil" là mệnh đề phụ (Nebensatz) nên ĐỘNG TỪ ĐÃ CHIA BỊ ĐẨY XUỐNG CUỐI CÂU.
               </p>
               <br />
               <p className="text-2xl font-black text-theme-dark leading-relaxed">
                 Ich gehe zum Arzt, <span className="text-indigo-600">weil</span> ich Schmerzen <span className="text-indigo-600 border-b-4 border-indigo-200">habe</span>.
               </p>
               <div className="flex justify-center mt-4">
                 <button onClick={() => playAudio("Ich gehe zum Arzt, weil ich Schmerzen habe.", 'l8-gramm-1', 'de-DE')} className="px-6 py-2 bg-white rounded-full font-bold text-theme-primary shadow-sm hover:scale-105 transition-transform">
                   Nghe mẫu câu
                 </button>
               </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 3</span>
            <div className="text-center">
               <h2 className="text-4xl font-display font-black text-theme-dark mb-2">Bày Tỏ Lo Lắng & Cảm Thông</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="slide-card p-8 bg-purple-100 border-2 border-purple-200 text-center space-y-4">
                <HeartPulse className="w-12 h-12 text-purple-500 mx-auto" />
                <h4 className="font-black text-purple-700 uppercase tracking-widest text-xs">Biểu lộ Cảm xúc / Nỗi lo</h4>
                <p className="font-medium text-lg leading-relaxed text-theme-dark">
                  <span className="font-bold text-purple-700">"Was ist los?"</span> (Có chuyện gì vậy?)<br/><br/>
                  <span className="font-bold text-purple-700">"Hoffentlich ist es (nicht)..."</span> (Hy vọng nó ko...)<br/><br/>
                  <span className="font-bold text-purple-700">"Ich habe Angst vor..."</span> (Tôi sợ...)
                </p>
              </div>
              <div className="slide-card p-8 bg-rose-100 border-2 border-rose-200 text-center space-y-4">
                <Heart className="w-12 h-12 text-rose-500 mx-auto" />
                <h4 className="font-black text-rose-700 uppercase tracking-widest text-xs">Cảm thông / Chia sẻ</h4>
                <p className="font-medium text-lg leading-relaxed text-theme-dark">
                  <span className="font-bold text-rose-700">"Das tut mir leid."</span><br/> (Tôi rất lấy làm tiếc.)<br/><br/>
                  <span className="font-bold text-rose-700">"Das finde ich traurig."</span><br/> (Tôi thấy điều đó thật buồn.)
                </p>
              </div>
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
               <p className="text-xl font-bold text-theme-dark/60 uppercase tracking-widest">Wow, nửa chặng đường Lektion 8!</p>
             </div>
             <div className="slide-card p-8 text-left space-y-4 max-w-md w-full mx-auto bg-white/90 font-bold text-theme-dark/80">
                <p>👉 Từ vựng: Bệnh lý, phòng khám, cảm xúc.</p>
                <p>👉 Ngữ pháp: Câu phụ chỉ nguyên nhân với <b className="text-theme-dark">weil</b>.</p>
                <p>👉 Giao tiếp: Thể hiện sự đồng cảm và lắng nghe bệnh nhân.</p>
             </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 5 - BUỔI 2</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Phân Biệt: <span className="text-theme-primary">weil</span> & <span className="text-rose-500">deshalb</span></h2>
            <div className="slide-card p-10 max-w-3xl mx-auto w-full space-y-8 bg-amber-50 border-2 border-amber-200">
               <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="font-black text-theme-primary mb-2 flex items-center gap-2"><ArrowRight /> WEIL (Bởi vì)</h4>
                    <p className="font-bold text-theme-dark/80 text-sm">Chỉ nguyên nhân. Câu phụ, V đứng cuối.</p>
                    <p className="font-bold text-theme-dark mt-2 p-3 bg-white rounded-xl">Ich gehe zum Arzt, <b className="text-theme-primary">weil</b> ich krank <b className="underline">bin</b>.</p>
                  </div>
                  <div>
                    <h4 className="font-black text-rose-500 mb-2 flex items-center gap-2"><ArrowRight /> DESHALB (Vì vậy)</h4>
                    <p className="font-bold text-theme-dark/80 text-sm">Chỉ kết quả. Từ nối, đứng vị trí (1), V đứng vị trí (2).</p>
                    <p className="font-bold text-theme-dark mt-2 p-3 bg-white rounded-xl">Ich bin krank. <b className="text-rose-500">Deshalb</b> <b className="underline">gehe</b> ich zum Arzt.</p>
                  </div>
               </div>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <h2 className="text-4xl font-display font-black text-theme-dark">Luyện Tập: deshalb</h2>
             <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8 bg-blue-50 border-2 border-blue-200">
                <p className="font-bold text-theme-dark/80 text-xl text-left">
                  Biến đổi câu có "weil" sang câu có "deshalb":
                </p>
                <div className="bg-white p-6 rounded-xl border border-blue-100 font-bold text-theme-dark mt-6 text-left space-y-4">
                   <p className="text-lg text-theme-dark/60">Ich bleibe im Bett, <span className="text-theme-primary">weil</span> ich Fieber habe.</p>
                   <p className="text-xl text-theme-secondary flex items-center gap-2"><ArrowRight /> Ich habe Fieber. <span className="text-rose-500">Deshalb</span> bleibe ich im Bett.</p>
                </div>
             </div>
          </div>
        );
      case 10:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 6</span>
            <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-[32px] flex items-center justify-center mx-auto">
               <AlertTriangle size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark">Tình Huống Khẩn Cấp (Notfall)</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                  { w: "bluten", t: "Chảy máu" },
                  { w: "verletzen", t: "Bị thương" },
                  { w: "hinfallen", t: "Ngã" },
                  { w: "operieren", t: "Phẫu thuật" },
                  { w: "Krankenhaus", t: "Bệnh viện" },
                  { w: "Notaufnahme", t: "Cấp cứu" },
                  { w: "Notfall", t: "Trường hợp Khẩn" },
                  { w: "Notarzt", t: "Bác sĩ Cấp cứu" },
              ].map((item, i) => (
                <div key={i} className="slide-card p-4 bg-white space-y-2 border-border shadow-sm">
                   <h4 className="font-bold text-theme-dark">{item.w}</h4>
                   <p className="text-sm text-theme-dark/60 font-medium">{item.t}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 11:
        return (
          <div className="flex gap-8 items-center h-full flex-col md:flex-row">
            <div className="flex-1 space-y-6 w-full text-center md:text-left">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mb-4">TIẾT 7</span>
              <h2 className="text-4xl font-display font-black text-theme-dark">Storytelling - Kể Chuyện Thếp Sức</h2>
              <div className="space-y-4 slide-card p-6 border-2 border-theme-dark/5 bg-theme-cream text-left">
                 <p className="font-bold text-theme-dark/80 text-lg leading-relaxed mb-4">
                   Vận dụng từ vựng khẩn cấp và cặp từ nối <b>weil/deshalb</b> tạo thành một câu chuyện ly kỳ:
                 </p>
                 <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-3">
                    <li><b className="text-theme-dark">Gợi ý 1:</b> Ein Mann ist hingefallen, weil er...</li>
                    <li><b className="text-theme-dark">Gợi ý 2:</b> Deshalb musste er in die Notaufnahme...</li>
                    <li><b className="text-theme-dark">Gợi ý 3:</b> Der Notarzt hat ihn operiert...</li>
                 </ul>
              </div>
            </div>
            <div className="flex-1 w-full rounded-[32px] overflow-hidden relative shadow-xl min-h-[300px] md:min-h-[400px] bg-white border-4 border-white flex items-center justify-center p-8 bg-red-50">
               <AlertTriangle size={150} className="text-rose-500/20" />
            </div>
          </div>
        );
      case 12:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 8</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Test & Video Tổng Kết</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/20 space-y-6 text-left">
               <h4 className="font-black text-theme-primary text-xl border-b border-theme-dark/10 pb-4">1. Ôn Tập Ngữ Pháp:</h4>
               <p className="font-bold text-theme-dark/80 flex flex-col gap-2">
                 <span>• <b>Nguyên nhân & Kết quả (weil / deshalb)</b></span>
               </p>
               
               <h4 className="font-black text-theme-secondary text-xl pt-4 border-b border-theme-dark/10 pb-4">2. Báo Cáo Test:</h4>
               <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-2">
                 <li>Làm bài kiểm tra từ vựng "Notfall" và chia động từ "weil/deshalb".</li>
                 <li>Xem video Heygen tổng kết cách đi khám bệnh và an ủi người khác!</li>
               </ul>
            </div>
          </div>
        );
      case 13:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform -rotate-1 hover:rotate-1 transition-transform max-w-xl mx-auto cursor-pointer" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -right-8 text-6xl animate-bounce">🚑</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 8 <br/> Đã hoàn thành!
                </h2>
                <div className="w-16 h-2 bg-theme-primary mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-theme-dark/60 uppercase tracking-widest text-sm bg-theme-cream inline-block px-4 py-2 rounded-lg border-2 border-dashed border-theme-dark/20">
                   Tuyệt vời! Hãy nhớ sức khỏe luôn là quan trọng nhất!
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
        <div className="absolute top-0 left-0 h-2 bg-theme-primary transition-all duration-500 ease-out z-20 shadow-sm" style={{ width: currentSlide === -1 ? '0%' : `${((currentSlide + 1) / (totalSlides-1)) * 100}%` }} />
        
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
              Sơ đồ Lektion 8
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
              disabled={currentSlide === totalSlides - 2 && currentSlide !== 13}
              className="px-4 md:px-6 py-2 md:py-3 bg-theme-primary text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-theme-primary/20 hover:bg-theme-dark transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
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
