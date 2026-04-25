import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, CheckCircle2, MessageSquare, Car, FileText, CheckSquare, Map, MapPin, Navigation, ArrowRight } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1496450681659-1022e19edbd9?w=1200&h=800&fit=crop&q=80' },
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
  22: { bgImage: "https://images.unsplash.com/photo-1496450681659-1022e19edbd9?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-theme-primary/10' }
};

export default function Lektion17Slides({ playAudio, playingId, onBack }: SlideProps) {
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
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình Lektion 17</h2>
              <p className="font-bold text-theme-dark/60">Hành trình 8 tiết học chuyên sâu</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: Lên kế hoạch & "Wohin"
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
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 1: Einstieg & Phương tiện</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Từ vựng giao thông & Đi lại</p>
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
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 2: Nghe lộ trình</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Lên kế hoạch kỳ nghỉ</p>
                    </div>
                  </button>
                  {[
                    {title: 'Tiết 3: Giới từ chỉ hướng "Wohin?"', slide: 7},
                    {title: "Tiết 4: Reading & Ôn tập", slide: 10}
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
                  BUỔI 2: Chỉ vị trí & Kể chuyện
                </h3>
                <div className="space-y-4">
                   {[
                    {title: 'Tiết 5: Giới từ chỉ vị trí "Wo?"', locked: false, onClick: () => setCurrentSlide(13)},
                    {title: "Tiết 6: Sự cố & Bình luận sự việc", locked: false, onClick: () => setCurrentSlide(15)},
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
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1496450681659-1022e19edbd9?w=1200&h=800&fit=crop')] bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 17</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                In die Stadt
              </h1>
              <p className="text-xl text-white/80 font-bold">Chủ đề: Du lịch, Đi lại & Giới từ chỉ hướng</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Video Giới Thiệu Lektion 17</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-8">
              <div className="flex justify-center">
                <button 
                  onClick={() => playAudio("Chào mừng đến với Bài 17! Trong bài này, chúng ta sẽ học từ vựng về giao thông, cách trả lời câu hỏi đi đâu (Wohin) và ở đâu (Wo).", 'L17-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-theme-primary/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'L17-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-theme-secondary text-lg">1. Mục Tiêu Giao Tiếp</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Nói về các phương tiện giao thông</li>
                    <li>Mô tả điểm đến và lộ trình chuyến đi</li>
                    <li>Kể chuyện và bình luận về những sự việc bất ngờ</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-theme-accent text-lg">2. Từ Vựng & Đọc Hiểu</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Giao thông: Ampel, Tankstelle, Autobahn...</li>
                    <li>Sự cố đi lại: Panne, Stau, Reifen...</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-theme-dark/5 mt-4 text-center">
                <h4 className="font-black text-theme-primary mb-3">3. Ngữ pháp trọng tâm</h4>
                <ul className="text-sm font-bold text-theme-dark/70 flex max-md:flex-col justify-center gap-6">
                  <li>• Giới từ chỉ sự chuyển động (Wohin + Akkusativ)</li>
                  <li>• Giới từ vị trí cố định (Wo + Dativ)</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Ôn Bài Cũ (Lektion 16)</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8">
               <h3 className="text-2xl font-black text-theme-secondary italic">"Indirekte Fragen (Câu hỏi gián tiếp)"</h3>
               <p className="font-bold text-theme-dark/60 text-lg">Nhắc lại: ob vs. W-Fragen</p>
               <div className="flex flex-col gap-4 items-center w-full max-w-sm mx-auto">
                 <button onClick={() => playAudio("Wissen Sie, wann der Zug abfährt?", `l17-ve-1`, 'de-DE')} className="w-full py-3 bg-theme-cream hover:bg-theme-primary hover:text-white rounded-xl font-bold border-2 border-theme-dark/5 transition-colors cursor-pointer text-theme-dark">
                   Wann fährt der Zug ab? ➡️ Wissen Sie, wann der Zug abfährt?
                 </button>
                 <button onClick={() => playAudio("Können Sie mir sagen, ob das Hotel WLAN hat?", `l17-ve-2`, 'de-DE')} className="w-full py-3 bg-theme-cream hover:bg-theme-primary hover:text-white rounded-xl font-bold border-2 border-theme-dark/5 transition-colors cursor-pointer text-theme-dark">
                   Hat das Hotel WLAN? ➡️ Können Sie mir sagen, ob das Hotel WLAN hat?
                 </button>
               </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex gap-8 items-center h-full">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-display font-black text-theme-dark">Tình Huống: Lên Lộ Trình</h2>
              <h3 className="text-2xl font-bold text-theme-primary">Womit fahren wir in den Urlaub?</h3>
              <p className="text-theme-dark/80 leading-relaxed font-medium text-lg">
                Hè này bạn muốn đi đâu? Đi bằng ô tô (<b className="text-theme-dark">mit dem Auto</b>), tàu hỏa (<b className="text-theme-dark">mit dem Zug</b>) hay máy bay (<b className="text-theme-dark">mit dem Flugzeug</b>)? Hành trình có gì thú vị?
              </p>
            </div>
            <div className="flex-1 rounded-[32px] overflow-hidden relative shadow-xl min-h-[400px] bg-theme-cream flex items-center justify-center border-4 border-white">
              <Map size={100} className="text-theme-primary opacity-20" />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ Vựng: Đi Lại & Giao Thông</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
               {[
                 { w: 'die Ampel', t: 'Đèn giao thông' },
                 { w: 'die Tankstelle', t: 'Trạm xăng' },
                 { w: 'die Autobahn', t: 'Đường cao tốc' },
                 { w: 'die Baustelle', t: 'Công trường' },
                 { w: 'der Stau', t: 'Tắc đường' },
                 { w: 'die Panne', t: 'Sự cố hỏng xe' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-6 text-center space-y-4 hover:-translate-y-1 transition-transform">
                   <button 
                     onClick={() => playAudio(item.w, `l17-v-${i}`, 'de-DE')}
                     className="w-12 h-12 bg-theme-primary/10 rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     {playingId === `l17-v-${i}` ? <CheckCircle2 className="text-emerald-500 w-5 h-5" /> : <Volume2 className="text-theme-primary w-5 h-5" />}
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
            <h2 className="text-4xl font-display font-black text-theme-dark">Nghe: Kế hoạch du lịch hè</h2>
            <p className="text-theme-dark/80 font-medium text-xl leading-relaxed">
              Nghe bạn bè bàn bạc xem nên đi đâu du lịch. Họ chọn đi nghỉ mát ở biển hay đi vùng đồi núi? Lắng nghe cách họ dùng từ "đi về phía" (Wohin).
            </p>
          </div>
        );
      case 6:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Nghe: Điểm đến lý tưởng</h2>
            <div className="slide-card p-10 space-y-8 text-center bg-theme-cream border-2 border-theme-primary/10">
              <button 
                onClick={() => playAudio("Dieses Jahr fahren wir in die Berge. Oder fahren wir ans Meer?", 'l17-listen-1', 'de-DE', 'Aoede')}
                className="w-20 h-20 bg-theme-primary text-white rounded-full mx-auto flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
              >
                {playingId === 'l17-listen-1' ? <CheckCircle2 size={32} /> : <Play size={32} className="ml-1" />}
              </button>
              <div className="text-left space-y-4">
                <h4 className="font-black text-theme-dark">Nhiệm vụ:</h4>
                <ul className="space-y-3 font-bold text-theme-dark/70 list-none pl-2">
                  <li className="flex gap-2 items-start"><CheckSquare className="w-5 h-5 text-theme-primary shrink-0"/> Nhận biết điểm đến được nhắc đến.</li>
                  <li className="flex gap-2 items-start"><CheckSquare className="w-5 h-5 text-theme-primary shrink-0"/> Ghi chú các giới từ đi kèm với điểm đến (in, an, nach...).</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 3</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Ngữ Pháp: Wohin? (Giới từ chỉ hướng)</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto space-y-8 bg-theme-primary/5 border-2 border-theme-primary/20">
               <p className="text-2xl font-bold italic text-theme-dark leading-relaxed">
                 Câu hỏi: <span className="text-theme-primary font-black">Wohin</span> fährst du? (Bạn đang lái xe đi đâu?)
               </p>
               <br />
               <p className="text-xl font-bold text-theme-dark leading-relaxed">
                 Trả lời bằng các giới từ chỉ sự chuyển dịch, yêu cầu dùng cách 4 (<span className="text-rose-500 font-bold">Akkusativ</span>).
               </p>
               <div className="flex justify-center mt-4">
                 <button onClick={() => playAudio("Ich fahre an den Strand.", 'l17-gramm-1', 'de-DE')} className="px-6 py-2 bg-white rounded-full font-bold text-theme-primary shadow-sm hover:scale-105 transition-transform">
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
               <h2 className="text-4xl font-display font-black text-theme-dark mb-2">Quy tắc Giới từ chỉ hướng</h2>
               <p className="font-bold text-theme-dark/60">Tùy thuộc vào loại địa điểm đến</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="slide-card p-8 bg-indigo-50 border-2 border-indigo-200">
                <h4 className="font-black text-indigo-600 mb-4 uppercase tracking-widest text-xs">nach</h4>
                <p className="font-medium text-lg leading-relaxed text-theme-dark">
                  + Quốc gia / Lục địa (không có mạo từ)<br/>
                  <span className="text-indigo-600">nach Deutschland, nach Asien</span><br/><br/>
                  + Thành phố<br/>
                  <span className="text-indigo-600">nach Berlin, nach München</span>
                </p>
              </div>
              <div className="slide-card p-8 bg-emerald-50 border-2 border-emerald-200">
                <h4 className="font-black text-emerald-600 mb-4 uppercase tracking-widest text-xs">in / an / auf + Akkusativ</h4>
                <p className="font-medium text-lg leading-relaxed text-theme-dark">
                  <b className="text-emerald-600">an:</b> Nơi có nước (ans Meer, an den See)<br/>
                  <b className="text-emerald-600">in:</b> Địa Hình Rừng Núi / Quốc gia có mạo từ (in die Berge, in die Schweiz)<br/>
                  <b className="text-emerald-600">auf:</b> Lên đảo / nông thôn (auf eine Insel)
                </p>
              </div>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Thực hành Wohin?</h2>
            <div className="slide-card p-8 max-w-3xl mx-auto w-full space-y-6">
               <h4 className="font-black text-theme-primary">Điền giới từ đúng (nach / in / an / auf):</h4>
               <p className="font-medium text-theme-dark">1. Wir fliegen ______ Paris.</p>
               <p className="font-bold text-theme-secondary ml-4">➡️ nach Paris</p>
               
               <div className="h-px bg-theme-dark/10 w-full my-4"></div>
               
               <p className="font-medium text-theme-dark">2. Er fährt ______ Schweiz.</p>
               <div className="bg-theme-cream p-4 rounded-2xl border border-theme-dark/10 font-bold text-lg text-theme-dark/80">
                  in die Schweiz
               </div>
            </div>
          </div>
        );
      case 10:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 4</span>
             <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
               <FileText size={36} />
             </div>
             <h2 className="text-4xl font-display font-black text-theme-dark">Reading: Chuyến đi với xe đạp</h2>
             <p className="text-xl font-bold text-theme-dark/80 max-w-2xl mx-auto leading-relaxed">
               Đọc Blog của một nhóm bạn đạp xe ở sông Donau. Chú ý các cụm từ thể hiện sự hào hứng hoặc miêu tả sự cố. Ôn tập thì Quá khứ Präteritum (war, hatte).
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
               <p className="text-xl font-bold text-theme-dark/60 uppercase tracking-widest">Tuyệt vời! Bạn đã kết thúc nửa đầu Lektion 17</p>
             </div>
             <div className="slide-card p-8 text-left space-y-4 max-w-md w-full mx-auto bg-white/90 font-bold text-theme-dark/80">
                <p>👉 Từ vựng: Phương tiện giao thông & sự cố.</p>
                <p>👉 Ngữ pháp: Giới từ chỉ đích đến "Wohin + Akkusativ".</p>
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
                 Thế nếu bạn muốn nói "Tôi ĐANG Ở một nơi" thay vì nói "Tôi ĐI ĐẾN một nơi" thì sao? <br/>
                 Ví dụ: Nghỉ ngơi TẠI bãi biển. <br/>
                 Bạn sẽ học sự khác biệt cực kỳ quan trọng giữa chỉ hướng (Wohin) và chỉ vị trí tĩnh (Wo).
               </p>
            </div>
          </div>
        );
      case 13:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-3xl mx-auto text-center">
             <div className="w-20 h-20 bg-theme-secondary/20 text-theme-secondary rounded-[32px] flex items-center justify-center mx-auto">
               <MapPin size={40} />
             </div>
             <h2 className="text-4xl font-display font-black text-theme-dark">Mục Tiêu Buổi 2</h2>
             <div className="slide-card p-8 text-left space-y-4 mt-6 border-l-4 border-theme-secondary">
               <h4 className="font-black text-theme-dark text-xl">1. Ngữ pháp "Wo?"</h4>
               <p className="font-medium text-theme-dark/70">Sử dụng giới từ + Dativ cho vị trí tĩnh.</p>
               <h4 className="font-black text-theme-dark text-xl pt-4">2. Bày tỏ cảm xúc</h4>
               <p className="font-medium text-theme-dark/70">Kể về kỳ nghỉ và bình luận những chuyện kỳ thú, khó tin đã xảy ra.</p>
             </div>
          </div>
        );
      case 14:
        return (
          <div className="flex gap-8 items-center h-full flex-col md:flex-row">
            <div className="flex-1 space-y-6 w-full text-center md:text-left">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mb-4">TIẾT 5</span>
              <h2 className="text-4xl font-display font-black text-theme-dark">Ngữ Pháp: Wo? + Dativ</h2>
              <div className="space-y-4 slide-card p-6 border-2 border-theme-dark/5 bg-theme-cream text-left">
                 <p className="font-bold text-theme-dark/80 text-lg leading-relaxed mb-4">
                   Trái với Wohin, khi hỏi <span className="text-theme-secondary">Wo (Ở đâu?)</span>, các phương hướng dùng bộ cách 3 (<span className="text-theme-secondary">Dativ</span>).
                 </p>
                 <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-3">
                    <li>am (+ dem): am Meer / am See</li>
                    <li>im (+ dem): im Wald / im Schwarzwald</li>
                    <li>auf (+ der/dem): auf der Insel</li>
                 </ul>
              </div>
            </div>
            <div className="flex-1 w-full rounded-[32px] overflow-hidden relative shadow-xl min-h-[300px] md:min-h-[400px] bg-white border-4 border-white flex items-center justify-center p-8">
              <div className="text-center space-y-4">
                 <p className="font-bold text-xl text-theme-dark">Wir sind am Meer.</p>
                 <Navigation size={80} className="mx-auto text-theme-secondary text-center" />
              </div>
            </div>
          </div>
        );
      case 15:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center mb-4">Phân biệt Wo vs. Wohin</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="slide-card p-8 bg-indigo-50 border-2 border-indigo-200 text-center space-y-4">
                <h4 className="font-black text-indigo-600 text-2xl">WOHIN (ĐI ĐÂU)</h4>
                <div className="text-indigo-500 font-bold text-lg border-b-2 border-indigo-200 pb-2">+ AKKUSATIV</div>
                <p className="font-medium text-theme-dark text-lg mt-4 h-20 flex items-center justify-center italic">"Wir reisen <span className="font-black ml-1 text-indigo-600">in die Berge.</span>"</p>
              </div>
              <div className="slide-card p-8 bg-emerald-50 border-2 border-emerald-200 text-center space-y-4">
                <h4 className="font-black text-emerald-600 text-2xl">WO (Ở ĐÂU)</h4>
                <div className="text-emerald-500 font-bold text-lg border-b-2 border-emerald-200 pb-2">+ DATIV</div>
                 <p className="font-medium text-theme-dark text-lg mt-4 h-20 flex items-center justify-center italic">"Wir wandern <span className="font-black ml-1 text-emerald-600">in den Bergen.</span>"</p>
              </div>
            </div>
          </div>
        );
      case 16:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 6</span>
             <h2 className="text-4xl font-display font-black text-theme-dark">Từ vựng: Bình Luận Sự Việc</h2>
             <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8 bg-theme-cream border-2 border-theme-dark/10">
                <p className="font-bold text-theme-dark/80 text-xl text-left space-y-4 flex flex-col">
                  <span><b className="text-indigo-600 mr-2">Trường hợp tốt:</b> So ein Glück! Das ist ja toll! Wahnsinn!</span>
                  <span><b className="text-rose-600 mr-2">Trường hợp xấu:</b> Oh je! So ein Pech ! Das darf doch nicht wahr sein!</span>
                  <span><b className="text-emerald-600 mr-2">Sự bất ngờ:</b> Echt? Das gibt's doch gar nicht!</span>
                </p>
             </div>
          </div>
        );
      case 17:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <h2 className="text-4xl font-display font-black text-theme-dark">Thực Hành: Chuyện Lạ</h2>
             <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8 bg-rose-50 border-2 border-rose-200">
                <p className="font-bold text-theme-dark/80 text-xl text-left">
                  "Tôi quên cái ví (Portemonnaie) ở bến xe. Tự nhiên có bác trai lớn tuổi gọi lại và đưa trả."
                </p>
                <div className="bg-white p-4 rounded-xl border border-rose-100 font-bold text-theme-dark mt-6 text-left">
                   <p>Bạn sẽ bình luận thế nào? ➡️ "Nicht zu glauben! So ein Glück!"</p>
                </div>
             </div>
          </div>
        );
      case 18:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
            <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 7</span>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">4 Kỹ Năng / Roleplay</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-amber-500">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><ArrowRight className="text-amber-500 w-5"/> Nói (Sprechen)</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Kể truyện theo chuỗi hình ảnh liên tục (Bildgeschichte). 1 người kể, 1 người bình luận.</p>
              </div>
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-indigo-500">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><ArrowRight className="text-indigo-500 w-5"/> Nghe (Hören)</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Xác định ai là người gặp sự cố hoặc may mắn qua ngữ điệu.</p>
              </div>
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-rose-500 flex flex-col justify-center">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><ArrowRight className="text-rose-500 w-5"/> Đọc (Lesen)</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Đọc các lá thư kì cục về chuyến kì nghỉ thất bại.</p>
              </div>
            </div>
          </div>
        );
      case 19:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <h2 className="text-4xl font-display font-black text-theme-dark">Sáng tạo câu chuyện</h2>
             <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8 bg-blue-50 border-2 border-blue-200">
                <p className="font-bold text-theme-dark/80 text-xl text-center italic">
                  Sử dụng các từ khóa: Autopanne, Wald, dunkel, Batterie leer...
                </p>
                <div className="font-bold text-theme-dark mt-6">
                   Luyện tập kết nối các câu chuyện dùng Perfekt thay đổi tình tiết sao cho kịch tính.
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
                 <span>• Giới từ chỉ sự chuyển dịch: <b>Wohin + Akkusativ</b></span>
                 <span>• Giới từ chỉ vị trí tĩnh: <b>Wo + Dativ</b></span>
                 <span className="text-rose-600">Lưu ý: In / an / auf (Wechselpräpositionen)</span>
               </p>
               
               <h4 className="font-black text-theme-secondary text-xl pt-4 border-b border-theme-dark/10 pb-4">2. Hướng dẫn Test</h4>
               <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-2">
                 <li>Hoàn thành bài tập đánh giá cho bài 17.</li>
                 <li>Chuẩn bị sang chủ đề mới cực kỳ hứng thú.</li>
               </ul>
            </div>
          </div>
        );
      case 21:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform -rotate-1 hover:rotate-1 transition-transform max-w-xl mx-auto cursor-pointer" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -right-8 text-6xl animate-bounce">🚲</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 17 <br/> Đã hoàn thành!
                </h2>
                <div className="w-16 h-2 bg-theme-primary mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-theme-dark/60 uppercase tracking-widest text-sm bg-theme-cream inline-block px-4 py-2 rounded-lg border-2 border-dashed border-theme-dark/20">
                   Tuyệt vời! Bạn có muốn làm phần Test không?
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
              Sơ đồ Lektion 17
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
