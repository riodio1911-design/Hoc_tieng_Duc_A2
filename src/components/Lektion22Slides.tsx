import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, ShieldAlert, CheckCircle2, MessageSquare, Car, FileText, CheckSquare, Gamepad2, ArrowRight } from 'lucide-react';
import { L22_INTRO_SCRIPT } from '../constants'; 

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1544716278-e513176f20b5?w=1200&h=800&fit=crop&q=80' },
  0: { bgColor: 'bg-theme-dark' }, // Custom title slide
  1: { bgColor: 'bg-amber-50' },
  2: { bgColor: 'bg-rose-50' },
  3: { bgColor: 'bg-emerald-50' },
  7: { bgColor: 'bg-indigo-50' },
  8: { bgColor: 'bg-slate-50' },
  11: { bgColor: 'bg-theme-cream' },
  12: { bgColor: 'bg-orange-50' },
  15: { bgColor: 'bg-emerald-50' },
  16: { bgColor: 'bg-white' },
  20: { bgImage: "https://images.unsplash.com/photo-1544716278-e513176f20b5?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-theme-primary/10' }
};

export default function Lektion22Slides({ playAudio, playingId, onBack }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const totalSlides = 21; 

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
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình Lektion 22</h2>
              <p className="font-bold text-theme-dark/60">Hành trình 8 tiết học chuyên sâu</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: Giao thông & Seit(dem)
                </h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => setCurrentSlide(0)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-primary shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 1 & 2: Einstieg & Nghe hiểu</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Carsharing & Cấu trúc Seit(dem)</p>
                    </div>
                  </button>
                  {[
                    {title: "Tiết 3: Ngữ pháp 'Seit(dem)'", slide: 7},
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
                  BUỔI 2: Quy trình & Bis
                </h3>
                <div className="space-y-4">
                   {[
                    {title: "Tiết 5: Quy trình & Bài đọc", locked: false, onClick: () => setCurrentSlide(12)},
                    {title: "Tiết 6: Ngữ pháp 'Bis'", locked: false, onClick: () => setCurrentSlide(15)},
                    {title: "Tiết 7: 4 Kỹ năng (Integration)", locked: false, onClick: () => setCurrentSlide(18)},
                    {title: "Tiết 8: Test & Tổng kết", locked: false, onClick: () => setCurrentSlide(19)}
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
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=800&fit=crop')] bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 22</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                Seit ich meinen Wagen<br/>verkauft habe, ...
              </h1>
              <p className="text-xl text-white/80 font-bold">Chủ đề: Giao thông & Carsharing</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Video Giới Thiệu Lektion 22</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-8">
              <div className="flex justify-center">
                <button 
                  onClick={() => playAudio(L22_INTRO_SCRIPT, 'L22-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-theme-primary/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'L22-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-theme-secondary text-lg">1. Mục Tiêu Giao Tiếp</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Nói về các phương tiện giao thông</li>
                    <li>Hiểu và giải thích lý do dùng Carsharing</li>
                    <li>Mô tả quy trình đăng ký online (Zuerst, dann...)</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-theme-accent text-lg">2. Từ Vựng & Đọc Hiểu</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Từ vựng chủ đề Carsharing, hợp đồng, thẻ</li>
                    <li>Phân tích bài đọc: Thuê xe đạp bằng điện thoại</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-theme-dark/5 mt-4 text-center">
                <h4 className="font-black text-theme-primary mb-3">3. Ngữ pháp trọng tâm</h4>
                <ul className="text-sm font-bold text-theme-dark/70 flex max-md:flex-col justify-center gap-6">
                  <li>• Nebensatz mit <b>seit(dem)</b></li>
                  <li>• Nebensatz mit <b>bis</b></li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Ôn Bài Cũ (Warm-up)</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8">
               <h3 className="text-2xl font-black text-theme-secondary italic">"Wie kommst du heute zum Kurs?"</h3>
               <p className="font-bold text-theme-dark/60 text-lg">Hôm nay bạn đến lớp bằng phương tiện gì?</p>
               <div className="flex flex-wrap gap-4 justify-center">
                 {['mit dem Bus', 'mit dem Auto', 'mit dem Fahrrad', 'mit der U-Bahn', 'zu Fuß'].map((w,i) => (
                    <button key={i} onClick={() => playAudio(w, `l22-ve-${i}`, 'de-DE')} className="px-6 py-3 bg-theme-cream hover:bg-theme-primary hover:text-white rounded-xl font-bold border-2 border-theme-dark/5 transition-colors cursor-pointer text-theme-dark">
                      {w}
                    </button>
                 ))}
               </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex gap-8 items-center h-full">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-display font-black text-theme-dark">Tình Huống: Carsharing</h2>
              <h3 className="text-2xl font-bold text-theme-primary">Wo ist Frau Radic? Was hat sie in der Hand?</h3>
              <p className="text-theme-dark/80 leading-relaxed font-medium text-lg">
                Thay vì sở hữu một chiếc ô tô riêng, Frau Radic đang dùng dịch vụ <b className="text-theme-dark">Carsharing</b> (Chia sẻ ô tô).
                Cô ấy dùng thẻ (Chipkarte) để mở cửa xe!
              </p>
            </div>
            <div className="flex-1 rounded-[32px] overflow-hidden relative shadow-xl min-h-[400px] bg-theme-cream flex items-center justify-center border-4 border-white">
              <img src="/Lektion22_A2_Kurchbuch_p1.png" alt="Frau Radic Carsharing" className="w-full h-full object-cover" 
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop";
                 }}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ Vựng Trọng Tâm</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
               {[
                 { w: 'die Chipkarte', t: 'Thẻ chip' },
                 { w: 'der Vertrag', t: 'Hợp đồng' },
                 { w: 'anmelden', t: 'Đăng ký (online)' },
                 { w: 'mieten', t: 'Thuê' },
                 { w: 'teilen', t: 'Chia sẻ' },
                 { w: 'umweltfreundlich', t: 'Thân thiện môi trường' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-6 text-center space-y-4 hover:-translate-y-1 transition-transform">
                   <button 
                     onClick={() => playAudio(item.w, `l22-v-${i}`, 'de-DE')}
                     className="w-12 h-12 bg-theme-primary/10 rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     {playingId === `l22-v-${i}` ? <CheckCircle2 className="text-emerald-500 w-5 h-5" /> : <Volume2 className="text-theme-primary w-5 h-5" />}
                   </button>
                   <div>
                     <h4 className="font-black text-lg text-theme-dark">{item.w}</h4>
                     <p className="font-bold text-sm text-theme-dark/60">{item.t}</p>
                   </div>
                 </div>
               ))}
             </div>
             <div className="slide-card p-6 border-l-4 border-theme-secondary bg-theme-secondary/5 mt-4">
                <span className="font-black uppercase tracking-widest text-xs text-theme-secondary">Từ ghép thường dùng (Chunk)</span>
                <p className="font-bold text-lg mt-2 text-theme-dark">
                  👉 einen Vertrag <span className="text-theme-primary cursor-pointer hover:underline" onClick={()=>playAudio("einen Vertrag unterschreiben", "vocab-chunk", "de-DE")}>unterschreiben</span> (Ký hợp đồng)<br/>
                  👉 ein Auto <span className="text-theme-primary cursor-pointer hover:underline" onClick={()=>playAudio("ein Auto teilen", "vocab-chunk-2", "de-DE")}>teilen</span> (Chia sẻ xe)
                </p>
             </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-theme-accent/20 text-theme-accent rounded-full flex items-center justify-center mx-auto">
               <Volume2 size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark">Dự Đoán File Nghe (Pre-listening)</h2>
            <p className="text-theme-dark/80 font-medium text-xl leading-relaxed">
              Bạn sắp nghe một đoạn hội thoại của Frau Radic (Track 2.25). 
              Hãy thử đoán xem: <b className="text-theme-primary">Bà ấy đang đi đâu? Và gọi điện cho ai?</b>
            </p>
          </div>
        );
      case 6:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Nghe Hiểu (Nghe Ý Chính & Chi Tiết)</h2>
            <div className="slide-card p-10 space-y-8 text-center bg-theme-cream border-2 border-theme-primary/10">
              <button 
                onClick={() => playAudio("Hallo! Ja, ich stehe gerade vor dem Auto. Ja, mit der Chipkarte. Bis später!", 'l22-listen-1', 'de-DE', 'Aoede')}
                className="w-20 h-20 bg-theme-primary text-white rounded-full mx-auto flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
              >
                {playingId === 'l22-listen-1' ? <CheckCircle2 size={32} /> : <Play size={32} className="ml-1" />}
              </button>
              <div className="text-left space-y-4">
                <h4 className="font-black text-theme-dark">Nghe và hoàn thành bài tập (AB trang 11):</h4>
                <ul className="space-y-3 font-bold text-theme-dark/70 list-none pl-2">
                  <li className="flex gap-2 items-start"><CheckSquare className="w-5 h-5 text-theme-primary shrink-0"/> Frau Radic đang đi nghỉ <b>hay</b> chuẩn bị đi mua sắm?</li>
                  <li className="flex gap-2 items-start"><CheckSquare className="w-5 h-5 text-theme-primary shrink-0"/> Vì sao Carsharing ngày càng phổ biến? (Nghe Podcast mục 2b)</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Ngữ Pháp: Nhận Diện "Seit(dem)"</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto space-y-8 bg-theme-primary/5 border-2 border-theme-primary/20">
               <p className="text-2xl font-bold italic text-theme-dark leading-relaxed">
                 "<span className="text-theme-primary font-black">Seitdem</span> wir das Auto teilen, habe ich viel weniger Stress."
               </p>
               <button onClick={() => playAudio("Seitdem wir das Auto teilen, habe ich viel weniger Stress.", 'l22-gramm-1', 'de-DE')} className="px-6 py-2 bg-white rounded-full font-bold text-theme-primary shadow-sm hover:scale-105 transition-transform">
                 Nghe mẫu câu
               </button>
               <p className="text-theme-dark/80 font-medium">Bạn có để ý động từ "teilen" nằm ở vị trí nào trong vế câu chứa "Seitdem" không?</p>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <div className="text-center">
               <h2 className="text-4xl font-display font-black text-theme-dark mb-2">Giải thích: Cấu trúc Seit(dem)</h2>
               <p className="font-bold text-theme-dark/60">Câu phụ chỉ thời gian bắt đầu trong quá khứ và kéo dài đến hiện tại</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="slide-card p-8 bg-rose-50 border-2 border-rose-200">
                <h4 className="font-black text-rose-600 mb-4 uppercase tracking-widest text-xs">Cấu trúc 1 (Nebensatz trước)</h4>
                <p className="font-medium text-lg leading-relaxed text-theme-dark">
                  <b className="text-rose-500">Seit(dem)</b> ich in der Stadt <u className="font-black decoration-rose-400">wohne</u>,<br/>
                  <u className="font-black decoration-indigo-400">fahre</u> ich viel Fahrrad.
                </p>
                <p className="text-sm font-bold text-theme-dark/50 mt-4 h-10">(Động từ vế phụ đứng CÚI, động từ vế chính đứng ĐẦU)</p>
              </div>
              <div className="slide-card p-8 bg-indigo-50 border-2 border-indigo-200">
                <h4 className="font-black text-indigo-600 mb-4 uppercase tracking-widest text-xs">Cấu trúc 2 (Nebensatz sau)</h4>
                <p className="font-medium text-lg leading-relaxed text-theme-dark">
                  Ich <u className="font-black decoration-indigo-400">fahre</u> viel Fahrrad,<br/>
                  <b className="text-rose-500">seit(dem)</b> ich in der Stadt <u className="font-black decoration-rose-400">wohne</u>.
                </p>
                <p className="text-sm font-bold text-theme-dark/50 mt-4 h-10">(Động từ vế chính đứng vị trí 2, động từ vế phụ đứng CÚI)</p>
              </div>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Mini Speaking & Bài Tập</h2>
            <div className="slide-card p-8 max-w-3xl mx-auto w-full space-y-6">
               <h4 className="font-black text-theme-primary">1. Nối câu (Bài tập):</h4>
               <p className="font-medium text-theme-dark">Làm bài tập mục 2a, 2b (KB trang 7). Nối các vế câu Seitdem sao cho hợp lý.</p>
               <div className="h-px bg-theme-dark/10 w-full my-4"></div>
               <h4 className="font-black text-theme-secondary">2. Hoàn thành câu của riêng bạn:</h4>
               <div className="bg-theme-cream p-6 rounded-2xl border border-theme-dark/10 font-bold text-lg text-theme-dark/80">
                  Seit ich Deutsch lerne, _________________ .<br/><br/>
                  Seitdem ich in _____ wohne, _________________ .
               </div>
            </div>
          </div>
        );
      case 10:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
               <MessageSquare size={36} />
             </div>
             <h2 className="text-4xl font-display font-black text-theme-dark">Luyện Nói: Phỏng Vấn (Interview)</h2>
             <p className="text-xl font-bold text-theme-dark/80 max-w-2xl mx-auto leading-relaxed">
               Làm việc theo cặp (Pair work). Hỏi đáp về phương tiện di chuyển trong các mùa khác nhau: <br/><br/>
               <span className="text-theme-primary">"Wie kommst du im Sommer zur Arbeit?"</span><br/>
               <span className="text-theme-secondary">"Wie kommst du im Winter zur Arbeit?"</span>
             </p>
          </div>
        );
      case 11:
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-center">
             <div className="w-32 h-32 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-theme-primary/30">
               <CheckCircle2 size={64} />
             </div>
             <div className="space-y-4">
               <h2 className="text-5xl font-display font-black text-theme-dark">Tổng Kết Buổi 1</h2>
               <p className="text-xl font-bold text-theme-dark/60 uppercase tracking-widest">Bạn đã hoàn thành nửa chặng đường Lektion 22!</p>
             </div>
             <div className="slide-card p-8 text-left space-y-4 max-w-md w-full mx-auto bg-white/90 font-bold text-theme-dark/80">
                <p>👉 Từ vựng: Đăng ký online và Carsharing.</p>
                <p>👉 Ngữ pháp: Đứng vững cách dùng câu phụ <b>seit/seitdem</b>.</p>
                <p className="text-sm mt-4 text-theme-primary">Bài tập về nhà: AB trang 6, mục 4 & 5.</p>
             </div>
          </div>
        );
      case 12:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto">BUỔI 2</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Einstieg: Game "Tabu"</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-6">
               <p className="font-bold text-theme-dark/80 text-xl leading-relaxed">
                 Một người giải thích một từ khóa (ví dụ: <b className="text-theme-primary">die Chipkarte</b>) mà không được dùng các từ cấm kỵ (ví dụ cấm dùng: Plastik, Tür öffnen). Người còn lại đoán!
               </p>
               <div className="mt-8">
                 <button className="px-6 py-3 bg-theme-accent text-white rounded-xl font-bold shadow-lg flex items-center justify-center mx-auto gap-2 hover:scale-105 transition-all">
                   <Gamepad2 /> Chơi Mini-quiz Quizizz (Nối câu Seitdem)
                 </button>
               </div>
            </div>
          </div>
        );
      case 13:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-3xl mx-auto text-center">
             <div className="w-20 h-20 bg-theme-secondary/20 text-theme-secondary rounded-[32px] flex items-center justify-center mx-auto">
               <Car size={40} />
             </div>
             <h2 className="text-4xl font-display font-black text-theme-dark">Mục Tiêu Buổi 2</h2>
             <div className="slide-card p-8 text-left space-y-4 mt-6 border-l-4 border-theme-secondary">
               <h4 className="font-black text-theme-dark text-xl">1. Kỹ năng hướng dẫn quy trình</h4>
               <p className="font-medium text-theme-dark/70">Biết cách dùng các từ chỉ thứ tự: Zuerst (Đầu tiên), Dann (Sau đó), Danach, Zuletzt (Cuối cùng).</p>
               <h4 className="font-black text-theme-dark text-xl pt-4">2. Ngữ pháp trọng điểm mới</h4>
               <p className="font-medium text-theme-dark/70">Liên từ chỉ thời gian: <b className="text-theme-secondary text-lg">bis (cho đến khi)</b>.</p>
             </div>
          </div>
        );
      case 14:
        return (
          <div className="flex gap-8 items-center h-full flex-col md:flex-row">
            <div className="flex-1 space-y-6 w-full text-center md:text-left">
              <h2 className="text-4xl font-display font-black text-theme-dark">Lesen: Bài Đọc</h2>
              <h3 className="text-2xl font-bold text-theme-primary">"Mit dem Handy ein Fahrrad mieten"</h3>
              <div className="space-y-4 slide-card p-6 border-2 border-theme-dark/5 bg-theme-cream text-left">
                 <p className="font-bold text-theme-dark/80">Hoạt động:</p>
                 <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-2">
                    <li>Đọc hướng dẫn thuê xe đạp bằng điện thoại (KB trang 5, mục 9).</li>
                    <li>Chú ý các từ chỉ trình tự (zuerst, dann...).</li>
                    <li>Đánh dấu Chọn <b className="text-emerald-500">Richtig</b> (Đúng) hay <b className="text-rose-500">Falsch</b> (Sai).</li>
                 </ul>
              </div>
            </div>
            <div className="flex-1 w-full rounded-[32px] overflow-hidden relative shadow-xl min-h-[300px] md:min-h-[400px] bg-theme-cream border-4 border-white flex items-center justify-center p-8">
              <div className="text-center space-y-4">
                 <FileText size={80} className="mx-auto text-theme-dark/20" />
                 <p className="font-bold text-theme-dark/40 uppercase tracking-widest text-sm">Xem sách KB trang 5</p>
              </div>
            </div>
          </div>
        );
      case 15:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Ngữ Pháp: Liên từ "Bis"</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto space-y-8 bg-emerald-50 border-2 border-emerald-200">
               <p className="text-2xl font-bold italic text-theme-dark leading-relaxed">
                 "Wir warten, <span className="text-emerald-600 font-black">bis</span> der Bus kommt."
               </p>
               <button onClick={() => playAudio("Wir warten, bis der Bus kommt.", 'l22-gramm-2', 'de-DE')} className="px-6 py-2 bg-white rounded-full font-bold text-emerald-600 shadow-sm hover:scale-105 transition-transform">
                 Nghe mẫu câu
               </button>
               <div className="bg-white p-4 rounded-xl border border-emerald-100 font-bold text-theme-dark mt-6 text-left space-y-2">
                  <p>👉 <b>Bis</b> = Cho đến khi (chỉ điểm kết thúc hành động).</p>
                  <p>👉 Tương tự Seitdem, <b>bis</b> bắt đầu một câu phụ (Nebensatz), động từ chính bị đẩy xuống CÚI CÂU.</p>
               </div>
            </div>
          </div>
        );
      case 16:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center mb-4">Phân biệt Seitdem vs Bis</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="slide-card p-8 bg-rose-50 border-2 border-rose-200 text-center space-y-4">
                <h4 className="font-black text-rose-600 text-2xl">SEIT(DEM)</h4>
                <div className="text-rose-500 font-bold text-lg border-b-2 border-rose-200 pb-2">Từ Khi</div>
                <p className="font-medium text-theme-dark">Sự việc bắt đầu trong quá khứ và <b>vẫn đang tiếp diễn</b> lúc này.</p>
                <p className="text-sm font-bold opacity-60 mt-4">Seit ich Auto fahre, bin ich schneller.</p>
              </div>
              <div className="slide-card p-8 bg-emerald-50 border-2 border-emerald-200 text-center space-y-4">
                <h4 className="font-black text-emerald-600 text-2xl">BIS</h4>
                <div className="text-emerald-500 font-bold text-lg border-b-2 border-emerald-200 pb-2">Cho Đến Khi</div>
                <p className="font-medium text-theme-dark">Sự việc đang diễn ra và <b>sẽ kết thúc</b> tại một thời điểm trong tương lai.</p>
                <p className="text-sm font-bold opacity-60 mt-4">Ich lerne, bis die Prüfung beginnt.</p>
              </div>
            </div>
          </div>
        );
      case 17:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <h2 className="text-4xl font-display font-black text-theme-dark">Thực Hành: Bis hay Seitdem?</h2>
             <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8 bg-theme-cream border-2 border-theme-dark/10">
                <p className="font-bold text-theme-dark/80 text-xl text-left">
                  <b>Làm bài TEST mục 2 (KB trang 3)</b>. Chọn từ thích hợp điền vào chỗ trống.<br/><br/>
                  <span className="text-theme-primary mt-4 inline-block">Speaking (Nói nhanh):</span><br/>
                  "Ich lerne Deutsch, bis..."
                </p>
                <div className="bg-white p-4 rounded-xl border border-theme-dark/5 text-sm font-bold opacity-50 italic text-left">
                  (Ví dụ: ...bis ich das B1-Zertifikat habe.)
                </div>
             </div>
          </div>
        );
      case 18:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Integration 4 Kỹ Năng</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-amber-500">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><ArrowRight className="text-amber-500 w-5"/> Nghe + Nói</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Đóng vai hướng dẫn đặt vé tàu qua App điện thoại (KB trang 10, mục 5b).</p>
              </div>
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-indigo-500">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><ArrowRight className="text-indigo-500 w-5"/> Viết (Schreiben)</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Viết tin nhắn chat ngắn giải thích tại sao mình không đến bằng ô tô mà đi xe buýt (AB trang 6, mục 4).</p>
              </div>
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-rose-500 flex flex-col justify-center">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><ArrowRight className="text-rose-500 w-5"/> Thảo Luận</h4>
                 <p className="font-medium text-sm text-theme-dark/70">"Carsharing: Gut hay không tốt? Tại sao?"</p>
              </div>
            </div>
          </div>
        );
      case 19:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark">Ôn Tập & Kiểm Tra Cuối Bài</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/20 space-y-6 text-left">
               <h4 className="font-black text-theme-primary text-xl border-b border-theme-dark/10 pb-4">1. Từ vựng điều hướng:</h4>
               <p className="font-bold text-theme-dark/80 flex flex-wrap gap-3">
                 <span className="bg-white px-3 py-1 rounded-lg shadow-sm border border-theme-dark/5">Zuerst</span>
                 <span className="bg-white px-3 py-1 rounded-lg shadow-sm border border-theme-dark/5">Danach / Dann</span>
                 <span className="bg-white px-3 py-1 rounded-lg shadow-sm border border-theme-dark/5">Zuletzt / Zum Schluss</span>
               </p>
               
               <h4 className="font-black text-theme-secondary text-xl pt-4 border-b border-theme-dark/10 pb-4">2. Test Lektion 22 (KB trang 3)</h4>
               <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-2">
                 <li>Làm toàn bộ phần Test.</li>
                 <li>Tính điểm theo khung: Wörter, Strukturen, Kommunikation.</li>
                 <li>Giáo viên sửa các lỗi sai phổ biến.</li>
               </ul>
            </div>
          </div>
        );
      case 20:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform -rotate-1 hover:rotate-1 transition-transform max-w-xl mx-auto cursor-pointer" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -right-8 text-6xl animate-bounce">🚗</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 22 <br/> Khép Lại!
                </h2>
                <div className="w-16 h-2 bg-theme-primary mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-theme-dark/60 uppercase tracking-widest text-sm bg-theme-cream inline-block px-4 py-2 rounded-lg border-2 border-dashed border-theme-dark/20">
                   Nhớ làm bài tập AB trang 11
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
              Sơ đồ Lektion 22
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
                {currentSlide + 1} / {totalSlides}
              </span>
              <button onClick={() => setCurrentSlide(-1)} className="text-[10px] text-theme-primary flex items-center justify-center font-bold hover:underline uppercase tracking-widest p-1 mt-1 bg-theme-primary/10 rounded-lg sm:bg-transparent sm:mt-0 sm:p-0">
                Xem Lộ Trình
              </button>
            </div>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1 && currentSlide !== 20}
              className="px-4 md:px-6 py-2 md:py-3 bg-theme-primary text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-theme-primary/20 hover:bg-theme-dark transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
            >
              <span className="hidden sm:inline">
                {currentSlide === 20 ? 'Đóng lại' : 'Tiếp'}
              </span> 
              <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
