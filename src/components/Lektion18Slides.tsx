import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, CheckCircle2, MessageSquare, CloudRain, MapPin, Navigation, ArrowRight, CloudLightning, Map, Ticket, CheckSquare } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=1200&h=800&fit=crop&q=80' },
  0: { bgColor: 'bg-theme-dark' }, // Custom title slide
  1: { bgColor: 'bg-amber-50' },
  2: { bgColor: 'bg-rose-50' },
  3: { bgColor: 'bg-emerald-50' },
  8: { bgColor: 'bg-indigo-50' },
  9: { bgColor: 'bg-slate-50' },
  13: { bgColor: 'bg-theme-cream' },
  14: { bgColor: 'bg-orange-50' },
  17: { bgColor: 'bg-emerald-50' },
  18: { bgColor: 'bg-white' },
  22: { bgImage: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-theme-primary/10' }
};

export default function Lektion18Slides({ playAudio, playingId, onBack }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const totalSlides = 23; 

  const nextSlide = () => {
    if (currentSlide === 11 || currentSlide === totalSlides - 1) {
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
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình Lektion 18</h2>
              <p className="font-bold text-theme-dark/60">Hành trình 8 tiết học chuyên sâu</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: Thời Tiết & Chỉ Đường
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
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 1: Einstieg & Thời Tiết</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Từ vựng về thời tiết, nhiệt độ</p>
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
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 2: Nghe Dự báo</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Dự báo thời tiết các vùng</p>
                    </div>
                  </button>
                  {[
                    {title: "Tiết 3: Câu mệnh lệnh (Imperativ)", slide: 7},
                    {title: "Tiết 4: Thực hành Chỉ đường", slide: 10}
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
                  BUỔI 2: Vé Tàu & Nhờ Giúp Đỡ
                </h3>
                <div className="space-y-4">
                   {[
                    {title: "Tiết 5: Giao tiếp tại nhà ga", locked: false, onClick: () => setCurrentSlide(13)},
                    {title: "Tiết 6: Ôn tập Động từ khuyết thiếu", locked: false, onClick: () => setCurrentSlide(15)},
                    {title: "Tiết 7: 4 Kỹ năng (Roleplay)", locked: false, onClick: () => setCurrentSlide(18)},
                    {title: "Tiết 8: Test & Tổng kết", locked: false, onClick: () => setCurrentSlide(20)}
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
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=1200&h=800&fit=crop')] bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 18</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                Wind und Wetter
              </h1>
              <p className="text-xl text-white/80 font-bold">Chủ đề: Thời tiết, Giao thông & Chỉ đường</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Video Giới Thiệu Lektion 18</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-8">
              <div className="flex justify-center">
                <button 
                  onClick={() => playAudio("Chào mừng đến với Bài 18! Trong bài này, chúng ta sẽ học về thời tiết, cách chỉ đường trong thành phố và giao dịch mua vé tàu.", 'L18-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-theme-primary/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'L18-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-theme-secondary text-lg">1. Mục Tiêu Giao Tiếp</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Hỏi và nói về thời tiết</li>
                    <li>Hỏi đường và chỉ đường (Geradeaus, links, rechts)</li>
                    <li>Mua vé tàu tại nhà ga</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-theme-accent text-lg">2. Từ Vựng & Đọc Hiểu</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Thời tiết: Sonne, Regen, Schnee, Wind...</li>
                    <li>Ga tàu: Fahrkarte, Abfahrt, Ankunft...</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-theme-dark/5 mt-4 text-center">
                <h4 className="font-black text-theme-primary mb-3">3. Ngữ pháp trọng tâm</h4>
                <ul className="text-sm font-bold text-theme-dark/70 flex max-md:flex-col justify-center gap-6">
                  <li>• Thể mệnh lệnh lịch sự (Imperativ mit Sie)</li>
                  <li>• Ôn tập Động từ khuyết thiếu (Modalverben)</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Ôn Bài Cũ (Lektion 17)</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8">
               <h3 className="text-2xl font-black text-theme-secondary italic">"Wohin (Akkusativ) vs. Wo (Dativ)"</h3>
               <p className="font-bold text-theme-dark/60 text-lg">Nhắc lại giới từ chuyển động vs. tĩnh</p>
               <div className="flex flex-col gap-4 items-center w-full max-w-sm mx-auto">
                 <button onClick={() => playAudio("Wir fahren in die Berge.", `l18-ve-1`, 'de-DE')} className="w-full py-3 bg-theme-cream hover:bg-theme-primary hover:text-white rounded-xl font-bold border-2 border-theme-dark/5 transition-colors cursor-pointer text-theme-dark">
                   Wir fahren ➡️ in die Berge (Wohin / Đi vào)
                 </button>
                 <button onClick={() => playAudio("Wir wandern in den Bergen.", `l18-ve-2`, 'de-DE')} className="w-full py-3 bg-theme-cream hover:bg-theme-primary hover:text-white rounded-xl font-bold border-2 border-theme-dark/5 transition-colors cursor-pointer text-theme-dark">
                   Wir wandern ➡️ in den Bergen (Wo / Ở tại)
                 </button>
               </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex gap-8 items-center h-full">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-display font-black text-theme-dark">Tình Huống: Thời Tiết</h2>
              <h3 className="text-2xl font-bold text-theme-primary">Wie ist das Wetter heute?</h3>
              <p className="text-theme-dark/80 leading-relaxed font-medium text-lg">
                Hôm nay thời tiết như thế nào? Trời có nắng (<b className="text-theme-dark">die Sonne scheint</b>), trời mưa (<b className="text-theme-dark">es regnet</b>) hay có tuyết rơi (<b className="text-theme-dark">es schneit</b>)? Nhiệt độ là bao nhiêu độ?
              </p>
            </div>
            <div className="flex-1 rounded-[32px] overflow-hidden relative shadow-xl min-h-[400px] bg-theme-cream flex items-center justify-center border-4 border-white">
              <CloudRain size={100} className="text-theme-primary opacity-20" />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ Vựng: Hiện tượng Thời tiết</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
               {[
                 { w: 'die Sonne scheint', t: 'Mặt trời chiếu sáng' },
                 { w: 'es regnet', t: 'Trời mưa' },
                 { w: 'es schneit', t: 'Trời tuyết' },
                 { w: 'es ist windig', t: 'Có gió' },
                 { w: 'es ist bewölkt', t: 'Trời nhiều mây' },
                 { w: 'das Gewitter', t: 'Giông bão' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-6 text-center space-y-4 hover:-translate-y-1 transition-transform">
                   <button 
                     onClick={() => playAudio(item.w, `l18-v-${i}`, 'de-DE')}
                     className="w-12 h-12 bg-theme-primary/10 rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     {playingId === `l18-v-${i}` ? <CheckCircle2 className="text-emerald-500 w-5 h-5" /> : <Volume2 className="text-theme-primary w-5 h-5" />}
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
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-2xl mx-auto">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 2</span>
            <div className="w-20 h-20 bg-theme-accent/20 text-theme-accent rounded-full flex items-center justify-center mx-auto">
               <Volume2 size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark">Nghe: Dự Báo Thời Tiết</h2>
            <p className="text-theme-dark/80 font-medium text-xl leading-relaxed">
              Bạn nghe dự báo trên đài phát thanh (Wetterbericht). Lắng nghe nhiệt độ (Grad) và các hiện tượng thời tiết ứng với từng khu vực (miền Bắc, vùng núi...).
            </p>
          </div>
        );
      case 6:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Nghe: Wetterbericht</h2>
            <div className="slide-card p-10 space-y-8 text-center bg-theme-cream border-2 border-theme-primary/10">
              <button 
                onClick={() => playAudio("Im Norden heute Regen und starker Wind. Die Temperaturen liegen bei 12 Grad.", 'l18-listen-1', 'de-DE', 'Aoede')}
                className="w-20 h-20 bg-theme-primary text-white rounded-full mx-auto flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
              >
                {playingId === 'l18-listen-1' ? <CheckCircle2 size={32} /> : <Play size={32} className="ml-1" />}
              </button>
              <div className="text-left space-y-4">
                <h4 className="font-black text-theme-dark">Nhiệm vụ:</h4>
                <ul className="space-y-3 font-bold text-theme-dark/70 list-none pl-2">
                  <li className="flex gap-2 items-start"><CheckSquare className="w-5 h-5 text-theme-primary shrink-0"/> Nhận biết khu vực (Im Norden/Süden).</li>
                  <li className="flex gap-2 items-start"><CheckSquare className="w-5 h-5 text-theme-primary shrink-0"/> Ghi chú nhiệt độ (Grad) và thời tiết (Sonne/Regen).</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 3</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Ngữ Pháp: Imperativ (Câu Mệnh Lệnh)</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto space-y-8 bg-theme-primary/5 border-2 border-theme-primary/20">
               <p className="text-2xl font-bold italic text-theme-dark leading-relaxed">
                 Câu bình thường: Sie <span className="text-rose-500 font-bold">gehen</span> geradeaus.
               </p>
               <br />
               <p className="text-2xl font-bold italic text-theme-dark leading-relaxed">
                 Câu mệnh lệnh: <span className="text-theme-primary font-black">Gehen</span> Sie geradeaus! (Xin hãy đi thẳng!)
               </p>
               <div className="flex justify-center mt-4">
                 <button onClick={() => playAudio("Gehen Sie geradeaus, und dann biegen Sie links ab.", 'l18-gramm-1', 'de-DE')} className="px-6 py-2 bg-white rounded-full font-bold text-theme-primary shadow-sm hover:scale-105 transition-transform">
                   Nghe mẫu câu
                 </button>
               </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <div className="text-center">
               <h2 className="text-4xl font-display font-black text-theme-dark mb-2">Cấu trúc: Imperativ cho ngôi Sie</h2>
               <p className="font-bold text-theme-dark/60">Dùng để hướng dẫn, yêu cầu khuyên bảo một cách lịch sự</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="slide-card p-8 bg-indigo-50 border-2 border-indigo-200">
                <h4 className="font-black text-indigo-600 mb-4 uppercase tracking-widest text-xs">Đảo Động Từ</h4>
                <p className="font-medium text-lg leading-relaxed text-theme-dark">
                  Mang động từ lên đầu câu, giữ nguyên chủ ngữ "Sie".<br/><br/>
                  <span className="text-indigo-600 font-bold">Fahren</span> Sie nach links!<br/>
                  <span className="text-indigo-600 font-bold">Warten</span> Sie hier, bitte!
                </p>
              </div>
              <div className="slide-card p-8 bg-emerald-50 border-2 border-emerald-200">
                <h4 className="font-black text-emerald-600 mb-4 uppercase tracking-widest text-xs">Phân biệt với câu hỏi</h4>
                <p className="font-medium text-lg leading-relaxed text-theme-dark">
                  Dấu câu và ngữ điệu giúp phân biệt:<br/><br/>
                  Fahren Sie nach rechts<b className="text-rose-500 font-black text-xl">?</b> (Hỏi)<br/>
                  Fahren Sie nach rechts<b className="text-emerald-500 font-black text-xl">!</b> (Mệnh lệnh)
                </p>
              </div>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Thực hành Mệnh Lệnh</h2>
            <div className="slide-card p-8 max-w-3xl mx-auto w-full space-y-6">
               <h4 className="font-black text-theme-primary">Biến đổi thành câu hướng dẫn (Sie):</h4>
               <p className="font-medium text-theme-dark">1. über die Brücke fahren</p>
               <p className="font-bold text-theme-secondary ml-4">➡️ Fahren Sie über die Brücke!</p>
               
               <div className="h-px bg-theme-dark/10 w-full my-4"></div>
               
               <p className="font-medium text-theme-dark">2. hier abbiegen</p>
               <div className="bg-theme-cream p-4 rounded-2xl border border-theme-dark/10 font-bold text-lg text-theme-dark/80">
                  Biegen Sie _______ _______ !
               </div>
            </div>
          </div>
        );
      case 10:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 4</span>
             <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
               <Map size={36} />
             </div>
             <h2 className="text-4xl font-display font-black text-theme-dark">Thực Hành Chỉ Đường Đô Thị</h2>
             <p className="text-xl font-bold text-theme-dark/80 max-w-2xl mx-auto leading-relaxed">
               Dùng bản đồ thu nhỏ, bạn hãy đứng ở vị trí A, thiết kế lộ trình đi đến nhà ga (Bahnhof). Hãy dùng liên tục 3 câu mệnh lệnh! <br/><br/>
               <span className="text-theme-primary italic">"Gehen Sie zuerst geradeaus, dann biegen Sie links ab."</span>
             </p>
          </div>
        );
      case 11:
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-center pb-12">
            <div className="w-32 h-32 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-theme-primary/30">
              <CheckCircle2 size={64} />
            </div>
            <div className="space-y-4">
               <h2 className="text-5xl font-display font-black text-theme-dark">Tổng Kết Buổi 1</h2>
               <p className="text-xl font-bold text-theme-dark/60 uppercase tracking-widest">Wow, nửa chặng đường Lektion 18!</p>
             </div>
             <div className="slide-card p-8 text-left space-y-4 max-w-md w-full mx-auto bg-white/90 font-bold text-theme-dark/80">
                <p>👉 Từ vựng: Thời tiết, nhiệt độ.</p>
                <p>👉 Hướng dẫn đường bằng câu Mệnh lệnh (Imperativ).</p>
             </div>
          </div>
        );
      case 12:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto">BUỔI 2</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Khởi động (Einstieg)</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-6">
               <p className="font-bold text-theme-dark/80 text-xl leading-relaxed">
                 Xin lỗi, tôi có thể đi tàu số mấy để tới sân bay? <br/>
                 Giá vé đi thành phố bên cạnh là bao nhiêu? <br/>
                 Hôm nay chúng ta sẽ đến nhà ga xe lửa để hỏi thông tin!
               </p>
            </div>
          </div>
        );
      case 13:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-3xl mx-auto text-center">
             <div className="w-20 h-20 bg-theme-secondary/20 text-theme-secondary rounded-[32px] flex items-center justify-center mx-auto">
               <Ticket size={40} />
             </div>
             <h2 className="text-4xl font-display font-black text-theme-dark">Mục Tiêu Buổi 2</h2>
             <div className="slide-card p-8 text-left space-y-4 mt-6 border-l-4 border-theme-secondary">
               <h4 className="font-black text-theme-dark text-xl">1. Giao tiếp nhà ga</h4>
               <p className="font-medium text-theme-dark/70">Từ vựng mua vé tàu (Fahrkarte), giờ đến, giờ khởi hành (Ankunft, Abfahrt).</p>
               <h4 className="font-black text-theme-dark text-xl pt-4">2. Ngữ pháp & Cấu trúc</h4>
               <p className="font-medium text-theme-dark/70">Ôn tập hệ thống Modalverben (können, müssen, sollen, dürfen) và thực hành xin giúp đỡ.</p>
             </div>
          </div>
        );
      case 14:
        return (
          <div className="flex gap-8 items-center h-full flex-col md:flex-row">
            <div className="flex-1 space-y-6 w-full text-center md:text-left">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mb-4">TIẾT 5</span>
              <h2 className="text-4xl font-display font-black text-theme-dark">Tại Nhà Ga Tàu</h2>
              <div className="space-y-4 slide-card p-6 border-2 border-theme-dark/5 bg-theme-cream text-left">
                 <p className="font-bold text-theme-dark/80 text-lg leading-relaxed mb-4">
                   Hội thoại mua vé ở quầy (Schalter):
                 </p>
                 <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-3">
                    <li><b className="text-theme-dark">Ein Ticket nach München, bitte.</b> (Một vé đi München)</li>
                    <li><b className="text-theme-dark">Einfach oder hin und zurück?</b> (Một chiều hay khứ hồi?)</li>
                    <li><b className="text-theme-dark">Wann fährt der nächste Zug?</b> (Mấy giờ chuyến tiếp theo chạy?)</li>
                 </ul>
              </div>
            </div>
            <div className="flex-1 w-full rounded-[32px] overflow-hidden relative shadow-xl min-h-[300px] md:min-h-[400px] bg-white border-4 border-white flex items-center justify-center p-8">
              <div className="text-center space-y-4 text-theme-primary text-9xl">
                 🎫
              </div>
            </div>
          </div>
        );
      case 15:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 6</span>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center mb-4">Ôn Tập: Modalverben</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="slide-card p-6 bg-indigo-50 border-2 border-indigo-200 text-center space-y-2">
                <h4 className="font-black text-indigo-600 text-xl">können</h4>
                <p className="font-medium text-theme-dark text-sm">Có khả năng, có thể làm gì.</p>
              </div>
              <div className="slide-card p-6 bg-emerald-50 border-2 border-emerald-200 text-center space-y-2">
                <h4 className="font-black text-emerald-600 text-xl">müssen</h4>
                 <p className="font-medium text-theme-dark text-sm">Bắt buộc phải làm.</p>
              </div>
              <div className="slide-card p-6 bg-rose-50 border-2 border-rose-200 text-center space-y-2">
                <h4 className="font-black text-rose-600 text-xl">dürfen</h4>
                <p className="font-medium text-theme-dark text-sm">Được phép làm (Man darf hier parken).</p>
              </div>
              <div className="slide-card p-6 bg-amber-50 border-2 border-amber-200 text-center space-y-2">
                <h4 className="font-black text-amber-600 text-xl">sollen</h4>
                 <p className="font-medium text-theme-dark text-sm">Lời khuyên, nên làm gì.</p>
              </div>
            </div>
          </div>
        );
      case 16:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 7</span>
             <h2 className="text-4xl font-display font-black text-theme-dark">Nhờ Sự Giúp Đỡ (Hilfe)</h2>
             <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8 bg-theme-cream border-2 border-theme-dark/10">
                <p className="font-bold text-theme-dark/80 text-xl text-left space-y-4 flex flex-col">
                  Bạn đang bị lạc hoặc máy bán vé bị hỏng? Khai báo sự cố:
                  <span><b className="text-rose-600 ml-4">Entschuldigung, können Sie mir bitte helfen?</b></span>
                   <span><b className="text-theme-dark ml-4">Der Fahrkartenautomat funktioniert nicht.</b></span>
                </p>
             </div>
          </div>
        );
      case 17:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <h2 className="text-4xl font-display font-black text-theme-dark">Thực Hành Hỏi Đường / Giúp Đỡ</h2>
             <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8 bg-blue-50 border-2 border-blue-200">
                <p className="font-bold text-theme-dark/80 text-xl text-left">
                  "Tôi không có vé xe bus và máy bị hỏng. Bạn có thể cho tôi biết tôi phải mua vé ở đâu không?"
                </p>
                <div className="bg-white p-4 rounded-xl border border-blue-100 font-bold text-theme-dark mt-6 text-left">
                   <p>Kết hợp câu hỏi gián tiếp hoặc câu lịch sự: <br/>"Wissen Sie, wo ich eine Fahrkarte kaufen kann?"</p>
                </div>
             </div>
          </div>
        );
      case 18:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">4 Kỹ Năng / Roleplay</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-amber-500">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><ArrowRight className="text-amber-500 w-5"/> Nói (Sprechen)</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Đóng vai đứng ở ga tàu, hỏi mua vé khứ hồi đi tỉnh khác, hỏi giờ đi giờ đến.</p>
              </div>
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-indigo-500">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><ArrowRight className="text-indigo-500 w-5"/> Nghe (Hören)</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Nghe thông báo nhà ga (Durchsage): Tàu bị chậm trễ hoặc đổi đường ray.</p>
              </div>
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-rose-500 flex flex-col justify-center">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><ArrowRight className="text-rose-500 w-5"/> Đọc (Lesen)</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Đọc bảng thông tin lịch trình xe lửa (Fahrplan) thực tế.</p>
              </div>
            </div>
          </div>
        );
      case 19:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <h2 className="text-4xl font-display font-black text-theme-dark">Thông báo nhà ga (Durchsagen)</h2>
             <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8 bg-amber-50 border-2 border-amber-200">
                <p className="font-bold text-theme-dark/80 text-xl text-center italic">
                  "Achtung an Gleis 3: Der ICE nach München hat heute leider 20 Minuten Verspätung."
                </p>
                <div className="font-bold text-theme-dark mt-6 text-sm">
                   Việc hiểu các thông báo này vô cùng thiết thực khi đi du lịch tự túc ở các nước Đức, Áo, Thụy Sĩ.
                </div>
             </div>
          </div>
        );
      case 20:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 8</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Ôn Tập & Kiểm Tra Cuối Bài</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/20 space-y-6 text-left">
               <h4 className="font-black text-theme-primary text-xl border-b border-theme-dark/10 pb-4">1. Ngữ pháp trọng tâm:</h4>
               <p className="font-bold text-theme-dark/80 flex flex-col gap-2">
                 <span>• <b>Imperativ (Câu mệnh lệnh Sie)</b></span>
                 <span>• <b>Tổng ôn Modalverben</b></span>
               </p>
               
               <h4 className="font-black text-theme-secondary text-xl pt-4 border-b border-theme-dark/10 pb-4">2. Hướng dẫn Test</h4>
               <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-2">
                 <li>Làm bài đọc và nghe cuối Lektion 18.</li>
                 <li>Chuẩn bị sang Module mới!</li>
               </ul>
            </div>
          </div>
        );
      case 21:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform -rotate-1 hover:rotate-1 transition-transform max-w-xl mx-auto cursor-pointer" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -right-8 text-6xl animate-bounce">🌦️</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 18 <br/> Đã hoàn thành!
                </h2>
                <div className="w-16 h-2 bg-theme-primary mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-theme-dark/60 uppercase tracking-widest text-sm bg-theme-cream inline-block px-4 py-2 rounded-lg border-2 border-dashed border-theme-dark/20">
                   Tuyệt vời! Bạn đã có thể tự mua vé và dẫn đường!
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
              Sơ đồ Lektion 18
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
              disabled={currentSlide === totalSlides - 2 && currentSlide !== 21}
              className="px-4 md:px-6 py-2 md:py-3 bg-theme-primary text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-theme-primary/20 hover:bg-theme-dark transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
            >
              <span className="hidden sm:inline">
                {currentSlide === 21 ? 'Đóng lại' : 'Tiếp'}
              </span> 
              <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
