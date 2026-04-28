import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, CheckCircle2, MessageSquare, BookOpen, PenTool, CheckSquare, Gamepad2, Mic, Headphones, Eye, Clock } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&h=800&fit=crop&q=80' },
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
  20: { bgImage: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-theme-primary/10' }
};

export default function Lektion13Slides({ playAudio, playingId, onBack }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
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
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình Lektion 13</h2>
              <p className="font-bold text-theme-dark/60">Hành trình 8 tiết học chuyên sâu</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: Sự kiện quá khứ & "Als"
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
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 1: Giới thiệu & Từ vựng</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Các mốc tiểu sử</p>
                    </div>
                  </button>
                  {[
                    {title: 'Tiết 2: Ngữ pháp "Als"', slide: 4},
                    {title: 'Tiết 3: Ngữ pháp "Wenn"', slide: 6},
                    {title: 'Tiết 4: Thực hành', slide: 8}
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
                  BUỔI 2: Ngôn ngữ & Luyện tập
                </h3>
                <div className="space-y-4">
                   {[
                    {title: "Tiết 5: Từ vựng học ngôn ngữ", onClick: () => setCurrentSlide(12)},
                    {title: "Tiết 6: Nói về kinh nghiệm", onClick: () => setCurrentSlide(14)},
                    {title: "Tiết 7: 4 Kỹ năng (Roleplay)", onClick: () => setCurrentSlide(16)},
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
              </div>
            </div>
          </div>
        );
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&h=800&fit=crop')] bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 13</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                Meine erste Deutschlehrerin
              </h1>
              <p className="text-xl text-white/80 font-bold">Chủ đề: Tuổi thơ, Học ngôn ngữ & Tiểu sử</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Video Giới Thiệu Lektion 13</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-8">
              <div className="flex justify-center">
                <button 
                   onClick={() => playAudio('Chào mừng các bạn đến với Lektion 13, bài học đầu tiên của cấp độ A2. Trong bài này, chúng ta sẽ học cách kể về các sự kiện trong quá khứ thông qua cấu trúc câu với liên từ Als và Wenn. Các chủ đề từ vựng xoay quanh tiểu sử cá nhân và kinh nghiệm học ngoại ngữ.', 'l13-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-theme-primary/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'l13-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-theme-secondary text-lg">1. Mục Tiêu Giao Tiếp</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Kể về các sự kiện trong đời</li>
                    <li>Chia sẻ kinh nghiệm học ngoại ngữ</li>
                    <li>Thảo luận về kỷ niệm tuổi thơ</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-theme-accent text-lg">2. Từ Vựng</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Các mốc tiểu sử (Studium, Examen, Job)</li>
                    <li>Hoạt động học tập (Vokabeln, Grammatik)</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-theme-dark/5 mt-4 text-center">
                <h4 className="font-black text-theme-primary mb-3">3. Ngữ pháp trọng tâm</h4>
                <ul className="text-sm font-bold text-theme-dark/70 flex justify-center gap-6">
                  <li>• Liên từ phụ thuộc <b>Als</b> và <b>Wenn</b></li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex gap-8 items-center h-full">
            <div className="flex-1 space-y-6">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block w-max">TIẾT 1</span>
              <h2 className="text-4xl font-display font-black text-theme-dark">Tình Huống: Tuổi Thơ</h2>
              <h3 className="text-2xl font-bold text-theme-secondary">Damals in der Schule...</h3>
              <p className="text-theme-dark/80 leading-relaxed font-medium text-lg">
                Bạn còn nhớ ngày đầu tiên đi học (Einschulung) không? Lần đầu tiên bạn học ngoại ngữ là khi nào? Lúc nhỏ bạn sống ở đâu? Hôm nay chúng ta sẽ ngược dòng thời gian để kể về quá khứ!
              </p>
            </div>
            <div className="flex-1 rounded-[32px] overflow-hidden relative shadow-xl min-h-[400px] bg-theme-cream flex items-center justify-center border-4 border-white">
              <Clock size={100} className="text-theme-primary opacity-20" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ Vựng: Các Cột Mốc Cuộc Đời</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
               {[
                 { w: 'ein Studium anfangen', t: 'bắt đầu đại học' },
                 { w: 'im Ausland leben', t: 'sống ở nước ngoài' },
                 { w: 'das Examen bestehen', t: 'thi đỗ' },
                 { w: 'einen Job bekommen', t: 'nhận việc' },
                 { w: 'in die Schule kommen', t: 'vào lớp một' },
                 { w: 'heiraten', t: 'kết hôn' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-6 text-center space-y-4 hover:-translate-y-1 transition-transform border border-rose-100">
                   <button 
                     onClick={() => playAudio(item.w, `l13-v-${i}`, 'de-DE')}
                     className="w-12 h-12 bg-rose-100 rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     {playingId === `l13-v-${i}` ? <CheckCircle2 className="text-rose-500 w-5 h-5" /> : <Volume2 className="text-rose-500 w-5 h-5" />}
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
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 2</span>
             <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <BookOpen size={40} />
             </div>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Ngữ Pháp: Liên từ "Als"</h2>
            <div className="slide-card p-10 bg-emerald-50 border-2 border-emerald-200">
               <h3 className="text-2xl font-black text-emerald-600 uppercase mb-4 text-center">Als ... (Vergangenheit)</h3>
               <p className="text-xl font-medium text-theme-dark leading-relaxed mb-8 text-center italic">
                 Dùng biểu đạt một sự kiện xảy ra <strong className="text-rose-500">MỘT LẦN DUY NHẤT</strong> trong quá khứ hoặc một khoảng thời gian lúc nhỏ.
               </p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Cấu trúc câu với Als</h2>
            <div className="slide-card p-10 bg-emerald-50 border-2 border-emerald-200">
               <div className="space-y-4 max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-sm">
                 <p className="font-bold text-lg mb-1"><span className="text-emerald-500">Als</span> Britta 32 Jahre alt <span className="underline">war</span>, <span className="underline">hat</span> sie wieder zu Hause gewohnt.</p>
                 <div className="h-px bg-slate-200 w-full my-4" />
                 <p className="font-bold text-lg mb-1">Ich <span className="underline">hatte</span> Angst, <span className="text-emerald-500">als</span> ich den Job <span className="underline">bekam</span>.</p>
                 <p className="text-sm font-bold text-emerald-600 mt-4 px-4 py-2 bg-emerald-100 rounded-lg">Lưu ý: Mệnh đề theo sau "als" có động từ chia đứng ở cuối câu. Đây là mệnh đề phụ (Nebensatz).</p>
               </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 3</span>
            <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <BookOpen size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Ngữ Pháp: Liên từ "Wenn"</h2>
            <div className="slide-card p-10 bg-indigo-50 border-2 border-indigo-200">
               <h3 className="text-2xl font-black text-indigo-600 uppercase mb-4 text-center">Wenn ... (Immer wenn)</h3>
               <p className="text-xl font-medium text-theme-dark leading-relaxed mb-8 text-center italic">
                 Dùng biểu đạt sự kiện <strong className="text-rose-500">LẶP ĐI LẶP LẠI NHIỀU LẦN</strong> trong quá khứ (thường kết hợp immer) HOẶC dùng cho hiện tại/tương lai.
               </p>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Cấu trúc câu với Wenn</h2>
            <div className="slide-card p-10 bg-indigo-50 border-2 border-indigo-200">
               <div className="space-y-4 max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-sm">
                 <p className="font-bold text-lg mb-1"><span className="text-indigo-500">Immer wenn</span> ich Zeit <span className="underline">hatte</span>, <span className="underline">habe</span> ich gelesen.</p>
                 <div className="h-px bg-slate-200 w-full my-4" />
                 <p className="font-bold text-lg mb-1"><span className="text-indigo-500">Wenn</span> ich ein Wort nicht verstehe, schlage ich es nach.</p>
                 <p className="text-sm font-bold text-indigo-600 mt-4 px-4 py-2 bg-indigo-100 rounded-lg">Lưu ý: Mệnh đề theo sau "wenn" cũng có động từ chia đứng cuối câu (Nebensatz).</p>
               </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 4</span>
            <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <Gamepad2 size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Thực hành Als hay Wenn</h2>
            <div className="slide-card p-8 max-w-3xl mx-auto w-full space-y-6 bg-white border border-slate-200 shadow-xl">
               <h4 className="font-black text-theme-primary text-center mb-6">Điền Als hoặc Wenn vào chỗ trống</h4>
               
               <div className="space-y-6 text-lg font-medium text-theme-dark flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <span>1.</span>
                    <input id="l13_g1" type="text" className="w-24 px-3 py-1 bg-amber-50 border-2 border-amber-200 rounded-lg text-amber-700 font-bold text-center outline-none focus:border-amber-400 focus:bg-white" placeholder="..." />
                    <span>ich 6 Jahre alt war, kam ich in die Schule.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>2. Immer</span>
                    <input id="l13_g2" type="text" className="w-24 px-3 py-1 bg-amber-50 border-2 border-amber-200 rounded-lg text-amber-700 font-bold text-center outline-none focus:border-amber-400 focus:bg-white" placeholder="..." />
                    <span>sie Urlaub machten, fuhren sie ans Meer.</span>
                  </div>
                  <button onClick={() => {
                     const i1 = document.getElementById('l13_g1') as HTMLInputElement;
                     const i2 = document.getElementById('l13_g2') as HTMLInputElement;
                     if (i1.value.toLowerCase() === 'als') { i1.style.borderColor = 'green'; i1.style.color = 'green'; } else { i1.style.borderColor = 'red'; i1.style.color = 'red'; }
                     if (i2.value.toLowerCase() === 'wenn') { i2.style.borderColor = 'green'; i2.style.color = 'green'; } else { i2.style.borderColor = 'red'; i2.style.color = 'red'; }
                  }} className="mt-6 px-6 py-2 bg-theme-primary text-white rounded-full font-bold hover:scale-105 transition-transform">
                     Kiểm tra
                  </button>
               </div>
            </div>
          </div>
        );
      case 9:
        return (
           <div className="space-y-6 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Tiếp tục thực hành</h2>
            <div className="slide-card p-8 max-w-3xl mx-auto w-full space-y-6 bg-white border border-slate-200 shadow-xl">
               <h4 className="font-black text-theme-primary text-center mb-6">Điền Als hoặc Wenn vào chỗ trống</h4>
               <div className="space-y-6 text-lg font-medium text-theme-dark flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <span>3.</span>
                    <input id="l13_g3" type="text" className="w-24 px-3 py-1 bg-amber-50 border-2 border-amber-200 rounded-lg text-amber-700 font-bold text-center outline-none focus:border-amber-400 focus:bg-white" placeholder="..." />
                    <span>ich gestern nach Hause kam, war die Tür offen.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>4.</span>
                    <input id="l13_g4" type="text" className="w-24 px-3 py-1 bg-amber-50 border-2 border-amber-200 rounded-lg text-amber-700 font-bold text-center outline-none focus:border-amber-400 focus:bg-white" placeholder="..." />
                    <span>ich Zeit habe, gehe ich spazieren.</span>
                  </div>
                  <button onClick={() => {
                     const i3 = document.getElementById('l13_g3') as HTMLInputElement;
                     const i4 = document.getElementById('l13_g4') as HTMLInputElement;
                     if (i3.value.toLowerCase() === 'als') { i3.style.borderColor = 'green'; i3.style.color = 'green'; } else { i3.style.borderColor = 'red'; i3.style.color = 'red'; }
                     if (i4.value.toLowerCase() === 'wenn') { i4.style.borderColor = 'green'; i4.style.color = 'green'; } else { i4.style.borderColor = 'red'; i4.style.color = 'red'; }
                  }} className="mt-6 px-6 py-2 bg-theme-primary text-white rounded-full font-bold hover:scale-105 transition-transform">
                     Kiểm tra
                  </button>
               </div>
            </div>
          </div>
        );
      case 10:
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-center pb-12">
            <div className="w-32 h-32 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-theme-primary/30">
              <CheckCircle2 size={64} />
            </div>
            <div className="space-y-4">
               <h2 className="text-5xl font-display font-black text-theme-dark">Tổng Kết Buổi 1</h2>
               <p className="text-xl font-bold text-theme-dark/60 uppercase tracking-widest">Tuyệt vời, bạn đã nắm được sự khác biệt của Als và Wenn!</p>
             </div>
             <div className="slide-card p-8 text-left space-y-4 max-w-md w-full mx-auto bg-white/90 font-bold text-theme-dark/80">
                <p>👉 Phân biệt Als & Wenn (Quá khứ)</p>
                <p>👉 Từ vựng tiểu sử cuộc đời.</p>
             </div>
          </div>
        );
      case 11:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto">BUỔI 2</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Chủ đề: Học Ngoại Ngữ</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-6 bg-theme-cream border-2 border-theme-dark/10">
               <p className="font-bold text-theme-dark/80 text-xl leading-relaxed italic">
                 Cách học ngoại ngữ tốt nhất của bạn là gì? Nghe nhạc, xem phim, hay làm bài tập ngữ pháp liên tục? <br/>
                 Hôm nay chúng sẽ tiếp tục khám phá phương pháp học tiếng Đức hiệu quả!
               </p>
            </div>
          </div>
        );
      case 12:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 5</span>
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ vựng: Học Ngoại Ngữ</h2>
             <div className="grid grid-cols-2 gap-6">
               {[
                  { de: "Vokabeln lernen", vi: "học từ vựng" },
                 { de: "Sätze aufschreiben", vi: "viết câu" },
                 { de: "Grammatikaufgaben lösen", vi: "giải bài tập ngữ pháp" }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-4 text-left space-x-4 flex items-center bg-blue-50 border border-blue-100 hover:scale-105 transition-transform">
                   <button 
                     onClick={() => playAudio(item.de, `l13-v2-${i}`, 'de-DE')}
                     className="w-10 h-10 bg-blue-200 rounded-full flex flex-shrink-0 items-center justify-center hover:bg-blue-300"
                   >
                     {playingId === `l13-v2-${i}` ? <CheckCircle2 className="text-blue-600 w-5 h-5" /> : <Play className="text-blue-600 w-4 h-4 ml-1" />}
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
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ vựng tiếp theo</h2>
             <div className="grid grid-cols-2 gap-6">
               {[
                 { de: "Texte lesen", vi: "đọc văn bản" },
                 { de: "Lieder mitsingen", vi: "hát theo bài hát" },
                 { de: "Filme anschauen", vi: "xem phim" }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-4 text-left space-x-4 flex items-center bg-blue-50 border border-blue-100 hover:scale-105 transition-transform">
                   <button 
                     onClick={() => playAudio(item.de, `l13-v3-${i}`, 'de-DE')}
                     className="w-10 h-10 bg-blue-200 rounded-full flex flex-shrink-0 items-center justify-center hover:bg-blue-300"
                   >
                     {playingId === `l13-v3-${i}` ? <CheckCircle2 className="text-blue-600 w-5 h-5" /> : <Play className="text-blue-600 w-4 h-4 ml-1" />}
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
      case 14:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 6</span>
             <h2 className="text-4xl font-display font-black text-theme-dark">Nói về kinh nghiệm học tập</h2>
             <div className="slide-card p-10 max-w-3xl mx-auto w-full space-y-8 bg-theme-cream border-2 border-theme-dark/10">
                <p className="font-bold text-theme-dark/80 text-xl text-left space-y-4 flex flex-col italic text-center">
                  "Was hilft dir beim Deutschlernen? Filme schauen oder Vokabelkärtchen schreiben?"<br/><br/>
                  <span className="text-theme-secondary font-black not-italic text-2xl">Mir hilft das ... (Lesen, Schreiben...)</span>
                </p>
             </div>
          </div>
        );
      case 15:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <h2 className="text-4xl font-display font-black text-theme-dark">Thực hành từ vựng</h2>
             <p className="font-medium text-theme-dark/60">Điền từ vào chỗ trống: Lernkärtchen, Vokabeln, Grammatik, Nachsprechen</p>
             <div className="slide-card p-10 max-w-3xl mx-auto w-full space-y-6 bg-white border-2 border-theme-dark/10 shadow-xl flex flex-col items-center">
                <div className="bg-white p-4 rounded-xl border border-theme-dark/5 font-bold text-theme-dark flex flex-col gap-4 w-full">
                  <div className="bg-blue-100 px-4 py-3 rounded-lg text-lg text-left flex flex-wrap items-center gap-2">
                    A: Wie lernst du am besten <input id="l13_v1" type="text" className="w-32 px-2 py-1 bg-white border-2 border-blue-200 text-blue-700 rounded-md outline-none focus:border-blue-500" placeholder="..." /> ?
                  </div>
                  <div className="bg-rose-100 px-4 py-3 rounded-lg text-lg text-right flex flex-wrap justify-end items-center gap-2">
                    B: Ich lerne am besten mit <input id="l13_v2" type="text" className="w-32 px-2 py-1 bg-white border-2 border-rose-200 text-rose-700 rounded-md outline-none focus:border-rose-500" placeholder="..." /> .
                  </div>
                  <div className="bg-emerald-100 px-4 py-3 rounded-lg text-lg text-left flex flex-wrap items-center gap-2">
                    A: Kannst du gut <input id="l13_v3" type="text" className="w-32 px-2 py-1 bg-white border-2 border-emerald-200 text-emerald-700 rounded-md outline-none focus:border-emerald-500" placeholder="..." /> ?
                  </div>
                  <div className="bg-purple-100 px-4 py-3 rounded-lg text-lg text-right flex flex-wrap justify-end items-center gap-2">
                    B: Nein, mir hilft oft das <input id="l13_v4" type="text" className="w-32 px-2 py-1 bg-white border-2 border-purple-200 text-purple-700 rounded-md outline-none focus:border-purple-500" placeholder="..." /> .
                  </div>
                </div>
                <button onClick={() => {
                   const check = (id: string, correct: string) => {
                     const el = document.getElementById(id) as HTMLInputElement;
                     if (el.value.toLowerCase().trim() === correct.toLowerCase()) {
                       el.style.borderColor = 'green'; el.style.color = 'green';
                     } else {
                       el.style.borderColor = 'red'; el.style.color = 'red';
                     }
                   };
                   check('l13_v1', 'vokabeln');
                   check('l13_v2', 'lernkärtchen');
                   check('l13_v3', 'grammatik');
                   check('l13_v4', 'nachsprechen');
                }} className="mt-4 px-6 py-2 bg-theme-primary text-white rounded-full font-bold hover:scale-105 transition-transform max-w-xs">
                   Kiểm tra
                </button>
             </div>
          </div>
        );
      case 16:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
            <span className="px-6 py-2 bg-theme-accent text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 7</span>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">4 Kỹ Năng / Roleplay</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-amber-500 bg-white shadow-md">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><Mic className="text-amber-500 w-5"/> Nói</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Kể lại ấn tượng về giáo viên đầu tiên (Meine erste Deutschlehrerin) bằng Als/Wenn.</p>
              </div>
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-indigo-500 bg-white shadow-md">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><Headphones className="text-indigo-500 w-5"/> Nghe</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Nghe đoạn phỏng vấn về cách học ngoại ngữ của sinh viên trên đường phố.</p>
              </div>
            </div>
          </div>
        );
      case 17:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">4 Kỹ Năng (Tiếp theo)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-rose-500 bg-white shadow-md">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><Eye className="text-rose-500 w-5"/> Đọc</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Đọc tiểu sử của một nhân vật lớn với các dấu mốc thời gian quan trọng.</p>
              </div>
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-emerald-500 bg-white shadow-md">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><PenTool className="text-emerald-500 w-5"/> Viết</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Viết đoạn văn ngắn về trải nghiệm học tiếng (Englisch/Deutsch) của bạn.</p>
              </div>
            </div>
          </div>
        );
      case 18:
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
                 <li>Thực hành đọc "Sprechtraining" cuối Bài 13.</li>
                 <li>Hoàn thành bài tập Arbeitsbuch trang 78.</li>
                 <li>Làm Lektionstest 13 trên Moodle.</li>
               </ul>
            </div>
          </div>
        );
      case 19:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark">Hãy ôn tập kỹ!</h2>
            <div className="slide-card p-10 bg-rose-50 border-2 border-rose-200 mt-6 text-left">
               <h4 className="font-black text-rose-600 text-xl mb-4">Ghi nhớ quan trọng:</h4>
               <p className="text-rose-800 font-medium leading-relaxed font-bold">
                 Cấu trúc Als/Wenn sẽ là tiền đề cực kỳ quan trọng cho các dạng mệnh đề phụ sau này. Luôn nhớ đẩy động từ được chia xuống cuối mệnh đề phụ.
               </p>
            </div>
          </div>
        );
      case 20:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform -rotate-1 hover:rotate-1 transition-transform max-w-xl mx-auto cursor-pointer" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -right-8 text-6xl animate-bounce">🎓</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 13 <br/> Đã hoàn thành!
                </h2>
                <div className="w-16 h-2 bg-theme-primary mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-theme-dark/60 uppercase tracking-widest text-sm bg-theme-cream inline-block px-4 py-2 rounded-lg border-2 border-dashed border-theme-dark/20">
                   Bạn đã có thể kể về quá khứ tự tin!
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
              Sơ đồ Lektion 13
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
              disabled={currentSlide === totalSlides - 2 && currentSlide !== totalSlides-1}
              className="px-4 md:px-6 py-2 md:py-3 bg-theme-primary text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-theme-primary/20 hover:bg-theme-dark transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
            >
              <span className="hidden sm:inline">
                {currentSlide === totalSlides-1 ? 'Đóng lại' : 'Tiếp'}
              </span> 
              <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
