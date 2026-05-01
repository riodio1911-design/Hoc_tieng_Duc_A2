import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, CheckCircle2, MessageSquare, Bed, FileText, CheckSquare, Gamepad2, ArrowRight } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&q=80' },
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
  22: { bgImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-theme-primary/10' }
};

export default function Lektion16Slides({ playAudio, playingId, onBack }: SlideProps) {
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
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình Lektion 16</h2>
              <p className="font-bold text-theme-dark/60">Hành trình 8 tiết học chuyên sâu</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: Khách sạn & W-Fragen
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
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 1: Einstieg & Khách sạn</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Từ vựng về phòng ốc & Dịch vụ</p>
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
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 2: Nghe hiểu Rezeption</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Tình huống ở lễ tân</p>
                    </div>
                  </button>
                  {[
                    {title: "Tiết 3: Câu hỏi gián tiếp 'W-Fragen'", slide: 7},
                    {title: "Tiết 4: Luyện nói & Ôn tập", slide: 10}
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
                  BUỔI 2: Chỉ đường & Wissen Sie ob
                </h3>
                <div className="space-y-4">
                   {[
                    {title: "Tiết 5: Chỉ đường trong khách sạn", locked: false, onClick: () => setCurrentSlide(13)},
                    {title: "Tiết 6: Câu hỏi gián tiếp 'ob'", locked: false, onClick: () => setCurrentSlide(15)},
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
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop')] bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 16</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                Zimmer frei
              </h1>
              <p className="text-xl text-white/80 font-bold">Chủ đề: Khách sạn & Câu hỏi gián tiếp</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Video Giới Thiệu Lektion 16</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-8">
              <div className="flex justify-center">
                <button 
                  onClick={() => playAudio("Chào mừng đến với Bài 16! Trong bài này, chúng ta sẽ học cách đặt phòng khách sạn, chỉ đường và đặt câu hỏi lịch sự.", 'L16-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-theme-primary/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'L16-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-theme-secondary text-lg">1. Mục Tiêu Giao Tiếp</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Đặt phòng và hiểu thông tin khách sạn</li>
                    <li>Chỉ đường bên trong một tòa nhà</li>
                    <li>Phàn nàn và yêu cầu lịch sự với nhân viên lễ tân</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-theme-accent text-lg">2. Từ Vựng & Đọc Hiểu</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Từ vựng phòng ốc: Einzelzimmer, Doppelzimmer...</li>
                    <li>Dịch vụ: WLAN, Halbpension, Vollpension</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-theme-dark/5 mt-4 text-center">
                <h4 className="font-black text-theme-primary mb-3">3. Ngữ pháp trọng tâm</h4>
                <ul className="text-sm font-bold text-theme-dark/70 flex max-md:flex-col justify-center gap-6">
                  <li>• Indirekte W-Fragen (Câu hỏi gián tiếp có từ để hỏi)</li>
                  <li>• Indirekte Fragen mit <b>ob</b> (Yes/No questions)</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Ôn Bài Cũ (Lektion 15)</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8">
               <h3 className="text-2xl font-black text-theme-secondary italic">"Đổi sang câu bị động (Passiv)"</h3>
               <p className="font-bold text-theme-dark/60 text-lg">Nhắc lại: werden + Partizip II</p>
               <div className="flex flex-col gap-4 items-center w-full max-w-sm mx-auto">
                 <button onClick={() => playAudio("Das Paket wird geliefert.", `l16-ve-1`, 'de-DE')} className="w-full py-3 bg-theme-cream hover:bg-theme-primary hover:text-white rounded-xl font-bold border-2 border-theme-dark/5 transition-colors cursor-pointer text-theme-dark">
                   Man liefert das Paket. ➡️ Das Paket wird geliefert.
                 </button>
                 <button onClick={() => playAudio("Der Film wird produziert.", `l16-ve-2`, 'de-DE')} className="w-full py-3 bg-theme-cream hover:bg-theme-primary hover:text-white rounded-xl font-bold border-2 border-theme-dark/5 transition-colors cursor-pointer text-theme-dark">
                   Man produziert den Film. ➡️ Der Film wird produziert.
                 </button>
               </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex gap-8 items-center h-full">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-display font-black text-theme-dark">Tình Huống: Khách Sạn</h2>
              <h3 className="text-2xl font-bold text-theme-primary">Was ist Ihnen im Hotel wichtig?</h3>
              <p className="text-theme-dark/80 leading-relaxed font-medium text-lg">
                Khi đi du lịch hoặc công tác, những yếu tố nào quan trọng nhất với bạn? 
                Bữa sáng ngon (<b className="text-theme-dark">gutes Frühstück</b>), Wi-Fi miễn phí (<b className="text-theme-dark">kostenloses WLAN</b>) hay phòng yên tĩnh (<b className="text-theme-dark">ein ruhiges Zimmer</b>)?
              </p>
            </div>
            <div className="flex-1 rounded-[32px] overflow-hidden relative shadow-xl min-h-[400px] bg-theme-cream flex items-center justify-center border-4 border-white">
              <Bed size={100} className="text-theme-primary opacity-20" />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ Vựng: Đặt Phòng</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
               {[
                 { w: 'das Einzelzimmer', t: 'Phòng đơn' },
                 { w: 'das Doppelzimmer', t: 'Phòng đôi' },
                 { w: 'die Halbpension', t: 'Bao 2 bữa (sáng + tối)' },
                 { w: 'die Vollpension', t: 'Bao 3 bữa' },
                 { w: 'das WLAN', t: 'Wi-Fi' },
                 { w: 'die Rezeption', t: 'Lễ tân' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-6 text-center space-y-4 hover:-translate-y-1 transition-transform">
                   <button 
                     onClick={() => playAudio(item.w, `l16-v-${i}`, 'de-DE')}
                     className="w-12 h-12 bg-theme-primary/10 rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     {playingId === `l16-v-${i}` ? <CheckCircle2 className="text-emerald-500 w-5 h-5" /> : <Volume2 className="text-theme-primary w-5 h-5" />}
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
            <h2 className="text-4xl font-display font-black text-theme-dark">Tình huống tại lễ tân</h2>
            <p className="text-theme-dark/80 font-medium text-xl leading-relaxed">
              Bạn đến một khách sạn mới. Bạn muốn hỏi giá phòng, thời gian ăn sáng, và mật khẩu Wi-Fi. Bạn sẽ nói thế nào cho lịch sự? (Hören Track 1.15)
            </p>
          </div>
        );
      case 6:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Nghe: Thông tin Đặt phòng</h2>
            <div className="slide-card p-10 space-y-8 text-center bg-theme-cream border-2 border-theme-primary/10">
              <button 
                onClick={() => playAudio("Guten Tag. Ich habe ein Zimmer reserviert. Können Sie mir sagen, wann es Frühstück gibt?", 'l16-listen-1', 'de-DE', 'Aoede')}
                className="w-20 h-20 bg-theme-primary text-white rounded-full mx-auto flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
              >
                {playingId === 'l16-listen-1' ? <CheckCircle2 size={32} /> : <Play size={32} className="ml-1" />}
              </button>
              <div className="text-left space-y-4">
                <h4 className="font-black text-theme-dark">Nhiệm vụ:</h4>
                <ul className="space-y-3 font-bold text-theme-dark/70 list-none pl-2">
                  <li className="flex gap-2 items-start"><CheckSquare className="w-5 h-5 text-theme-primary shrink-0"/> Ghi chú giá tiền (Preis).</li>
                  <li className="flex gap-2 items-start"><CheckSquare className="w-5 h-5 text-theme-primary shrink-0"/> Nhận biết cách hỏi giờ ăn sáng của khách hàng.</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 3</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Ngữ Pháp: Indirekte Fragen (W-Wort)</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto space-y-8 bg-theme-primary/5 border-2 border-theme-primary/20">
               <p className="text-2xl font-bold italic text-theme-dark leading-relaxed">
                 Câu trực tiếp: "Wie viel <span className="text-rose-500 font-bold">kostet</span> das Zimmer?"
               </p>
               <br />
               <p className="text-2xl font-bold italic text-theme-dark leading-relaxed">
                 Câu gián tiếp: "Können Sie mir sagen, <span className="text-theme-primary font-black">wie viel</span> das Zimmer <span className="text-rose-500 font-bold">kostet</span>?"
               </p>
               <div className="flex justify-center mt-4">
                 <button onClick={() => playAudio("Können Sie mir sagen, wie viel das Zimmer kostet?", 'l16-gramm-1', 'de-DE')} className="px-6 py-2 bg-white rounded-full font-bold text-theme-primary shadow-sm hover:scale-105 transition-transform">
                   Nghe mẫu câu
                 </button>
               </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <div className="text-center">
               <h2 className="text-4xl font-display font-black text-theme-dark mb-2">Cấu trúc: Câu hỏi gián tiếp</h2>
               <p className="font-bold text-theme-dark/60">Dùng để hỏi một cách lịch sự (höflich)</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="slide-card p-8 bg-rose-50 border-2 border-rose-200">
                <h4 className="font-black text-rose-600 mb-4 uppercase tracking-widest text-xs">Phần mở đầu (Einleitung)</h4>
                <p className="font-medium text-lg leading-relaxed text-theme-dark">
                  Können Sie mir sagen, ...<br/>
                  Wissen Sie, ...<br/>
                  Darf ich fragen, ...<br/>
                  Ich möchte wissen, ...
                </p>
              </div>
              <div className="slide-card p-8 bg-indigo-50 border-2 border-indigo-200">
                <h4 className="font-black text-indigo-600 mb-4 uppercase tracking-widest text-xs">Câu phụ (Nebensatz)</h4>
                <p className="font-medium text-lg leading-relaxed text-theme-dark">
                  <b className="text-indigo-600">từ để hỏi</b> (wo, wie, wann...) + chủ ngữ + ... + <u className="font-black decoration-rose-400">động từ</u>.
                </p>
                <p className="text-sm font-bold text-theme-dark/50 mt-4 h-10">Động từ kết thúc ở cuối câu!</p>
              </div>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Thực hành Câu hỏi gián tiếp</h2>
            <div className="slide-card p-8 max-w-3xl mx-auto w-full space-y-6">
               <h4 className="font-black text-theme-primary">Chuyển sang câu lịch sự:</h4>
               <p className="font-medium text-theme-dark">1. Wann beginnt das Frühstück?</p>
               <p className="font-bold text-theme-secondary ml-4">➡️ Wissen Sie, wann das Frühstück beginnt?</p>
               
               <div className="h-px bg-theme-dark/10 w-full my-4"></div>
               
               <p className="font-medium text-theme-dark">2. Wo ist der Aufzug?</p>
               <div className="bg-theme-cream p-4 rounded-2xl border border-theme-dark/10 font-bold text-lg text-theme-dark/80">
                  Darf ich fragen, wo _______________ _______________ ?
               </div>
            </div>
          </div>
        );
      case 10:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 4</span>
             <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
               <MessageSquare size={36} />
             </div>
             <h2 className="text-4xl font-display font-black text-theme-dark">Luyện Nói: Phỏng Vấn Dịch Vụ</h2>
             <p className="text-xl font-bold text-theme-dark/80 max-w-2xl mx-auto leading-relaxed">
               Đóng vai khách hàng và lễ tân. Khách hàng dùng câu hỏi gián tiếp để hỏi về các dịch vụ.<br/><br/>
               <span className="text-theme-primary">A: "Entschuldigung, können Sie mir sagen, wie viel das Einzelzimmer kostet?"</span><br/>
               <span className="text-theme-secondary">B: "Ja, gern. Es kostet 80 Euro."</span>
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
               <p className="text-xl font-bold text-theme-dark/60 uppercase tracking-widest">Bạn đã nắm vững một nửa Lektion 16!</p>
             </div>
             <div className="slide-card p-8 text-left space-y-4 max-w-md w-full mx-auto bg-white/90 font-bold text-theme-dark/80">
                <p>👉 Từ vựng: Đặt phòng khách sạn.</p>
                <p>👉 Ngữ pháp: Câu hỏi gián tiếp với từ để hỏi (W-Fragen).</p>
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
                 Làm thế nào để hỏi "Trong phòng có Wi-Fi không?" <br/>
                 Bằng tiếng Đức: <b className="text-theme-primary text-lg">Gibt es WLAN im Zimmer?</b> <br/>
                 Bạn sẽ học cách biến câu hỏi Yes/No này thành câu gián tiếp lịch sự.
               </p>
            </div>
          </div>
        );
      case 13:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-3xl mx-auto text-center">
             <div className="w-20 h-20 bg-theme-secondary/20 text-theme-secondary rounded-[32px] flex items-center justify-center mx-auto">
               <FileText size={40} />
             </div>
             <h2 className="text-4xl font-display font-black text-theme-dark">Mục Tiêu Buổi 2</h2>
             <div className="slide-card p-8 text-left space-y-4 mt-6 border-l-4 border-theme-secondary">
               <h4 className="font-black text-theme-dark text-xl">1. Ngữ pháp "ob"</h4>
               <p className="font-medium text-theme-dark/70">Sử dụng liên từ "ob" cho các câu hỏi gián tiếp dạng Yes/No.</p>
               <h4 className="font-black text-theme-dark text-xl pt-4">2. Chỉ đường & Roleplay</h4>
               <p className="font-medium text-theme-dark/70">Học cách chỉ đường trong tòa nhà, dùng xuyên qua (durch), đối diện (gegenüber von). Giải quyết phàn nàn ở lễ tân.</p>
             </div>
          </div>
        );
      case 14:
        return (
          <div className="flex gap-8 items-center h-full flex-col md:flex-row">
            <div className="flex-1 space-y-6 w-full text-center md:text-left">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mb-4">TIẾT 5</span>
              <h2 className="text-4xl font-display font-black text-theme-dark">Từ Vựng: Chỉ Đường</h2>
              <h3 className="text-2xl font-bold text-theme-primary">Wege im Hotel beschreiben</h3>
              <div className="space-y-4 slide-card p-6 border-2 border-theme-dark/5 bg-theme-cream text-left">
                 <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-3">
                    <li><b className="text-theme-dark">gegenüber von</b> (+ Dativ): đối diện</li>
                    <li><b className="text-theme-dark">an ... vorbei</b> (+ Dativ): đi ngang qua</li>
                    <li><b className="text-theme-dark">durch</b> (+ Akkusativ): xuyên qua</li>
                 </ul>
              </div>
            </div>
            <div className="flex-1 w-full rounded-[32px] overflow-hidden relative shadow-xl min-h-[300px] md:min-h-[400px] bg-white border-4 border-white flex items-center justify-center p-8">
              <div className="text-center space-y-4">
                 <p className="font-bold text-lg text-theme-dark italic">Gehen Sie am Restaurant vorbei, dann durch die Glastür...</p>
                 <ArrowRight size={80} className="mx-auto text-theme-primary/30" />
              </div>
            </div>
          </div>
        );
      case 15:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 6</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Ngữ Pháp: Indirekte Fragen với "ob"</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto space-y-8 bg-emerald-50 border-2 border-emerald-200">
               <p className="text-2xl font-bold italic text-theme-dark leading-relaxed">
                 Câu trực tiếp: "<span className="text-rose-500 font-bold">Ist</span> das Frühstück inklusiv?"
               </p>
               <br />
               <p className="text-2xl font-bold italic text-theme-dark leading-relaxed">
                 Câu gián tiếp: "Ich möchte wissen, <span className="text-emerald-600 font-black">ob</span> das Frühstück inklusiv <span className="text-rose-500 font-bold">ist</span>."
               </p>
               <div className="flex justify-center mt-4">
                 <button onClick={() => playAudio("Ich möchte wissen, ob das Frühstück inklusiv ist.", 'l16-gramm-ob', 'de-DE')} className="px-6 py-2 bg-white rounded-full font-bold text-emerald-600 shadow-sm hover:scale-105 transition-transform">
                   Nghe mẫu câu
                 </button>
               </div>
            </div>
          </div>
        );
      case 16:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center mb-4">Phân biệt W-Fragen vs "ob"</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="slide-card p-8 bg-indigo-50 border-2 border-indigo-200 text-center space-y-4">
                <h4 className="font-black text-indigo-600 text-2xl">CÓ TỪ ĐỂ HỎI</h4>
                <div className="text-indigo-500 font-bold text-lg border-b-2 border-indigo-200 pb-2">wann, wo, wie...</div>
                <p className="font-medium text-theme-dark">Dùng chính từ để hỏi đó để nối câu.</p>
                <p className="text-sm font-bold opacity-60 mt-4">Können Sie mir sagen, <b>wann</b> der Bus fährt?</p>
              </div>
              <div className="slide-card p-8 bg-emerald-50 border-2 border-emerald-200 text-center space-y-4">
                <h4 className="font-black text-emerald-600 text-2xl">KHÔNG CÓ TỪ ĐỂ HỎI</h4>
                <div className="text-emerald-500 font-bold text-lg border-b-2 border-emerald-200 pb-2">Ja/Nein-Fragen</div>
                <p className="font-medium text-theme-dark">Dùng <b>ob</b> để nối câu.</p>
                <p className="text-sm font-bold opacity-60 mt-4">Wissen Sie, <b>ob</b> der Bus jetzt fährt?</p>
              </div>
            </div>
          </div>
        );
      case 17:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <h2 className="text-4xl font-display font-black text-theme-dark">Thực Hành: "Ob" hay "W-Wort"?</h2>
             <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8 bg-theme-cream border-2 border-theme-dark/10">
                <p className="font-bold text-theme-dark/80 text-xl text-left">
                  1. Gibt es hier ein Restaurant?<br/>
                  <span className="text-theme-secondary text-base">➡️ Ich möchte wissen, ____ es hier ein Restaurant gibt.</span><br/><br/>
                  2. Wo ist der Fitnessraum?<br/>
                  <span className="text-theme-primary text-base">➡️ Können Sie mir sagen, ____ der Fitnessraum ist?</span>
                </p>
             </div>
          </div>
        );
      case 18:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 7</span>
             <h2 className="text-4xl font-display font-black text-theme-dark">Tình Huống Phàn Nàn</h2>
             <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8 bg-rose-50 border-2 border-rose-200">
                <p className="font-bold text-theme-dark/80 text-xl text-left">
                  Khách hàng gặp sự cố: Thiếu khăn tắm (Handtücher) hoặc WLAN không hoạt động.
                </p>
                <div className="bg-white p-4 rounded-xl border border-rose-100 font-bold text-theme-dark mt-6 text-left">
                   <p>Dùng câu gián tiếp để hỏi lễ tân: "Könnten Sie mir bitte sagen, wann der Techniker kommt?"</p>
                </div>
             </div>
          </div>
        );
      case 19:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Integration 4 Kỹ Năng</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-amber-500">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><ArrowRight className="text-amber-500 w-5"/> Nói (Sprechen)</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Roleplay: Khách và lễ tân khách sạn. Than phiền và xử lý khéo léo.</p>
              </div>
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-indigo-500">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><ArrowRight className="text-indigo-500 w-5"/> Nghe (Hören)</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Nghe đoạn hội thoại mô tả cách tìm phòng ăn sáng trong khách sạn.</p>
              </div>
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-rose-500 flex flex-col justify-center">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><ArrowRight className="text-rose-500 w-5"/> Đọc (Lesen)</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Đọc các review khách sạn. Nhận xét tốt (positiv) / xấu (negativ).</p>
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
                 <span>• Indirekte Fragen mit <b>Fragewort</b></span>
                 <span>• Indirekte Fragen mit <b>ob</b></span>
                 <span className="text-rose-600">Lưu ý: Verb ở cuối câu (Am Ende)!</span>
               </p>
               
               <h4 className="font-black text-theme-secondary text-xl pt-4 border-b border-theme-dark/10 pb-4">2. Hướng dẫn làm Test L16</h4>
               <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-2">
                 <li>Làm phần Test từ vựng và ngữ pháp.</li>
                 <li>Chuẩn bị sang Lektion 17: Reisen.</li>
               </ul>
            </div>
          </div>
        );
      case 21:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform -rotate-1 hover:rotate-1 transition-transform max-w-xl mx-auto cursor-pointer" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -right-8 text-6xl animate-bounce">🏨</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 16 <br/> Khép Lại!
                </h2>
                <div className="w-16 h-2 bg-theme-primary mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-theme-dark/60 uppercase tracking-widest text-sm bg-theme-cream inline-block px-4 py-2 rounded-lg border-2 border-dashed border-theme-dark/20">
                   Tuyệt vời! Sẵn sàng cho bài tiếp theo!
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
            
            <div className="text-[10px] md:text-xs font-bold text-theme-dark/50 tracking-widest uppercase text-right">
              Sơ đồ Lektion 16
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
