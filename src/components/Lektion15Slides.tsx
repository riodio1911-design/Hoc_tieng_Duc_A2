import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, ShieldAlert, CheckCircle2, MessageSquare, MonitorPlay, FileText, CheckSquare, Gamepad2, ArrowRight } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&h=800&fit=crop&q=80' },
  0: { bgColor: 'bg-theme-dark' }, // Custom title slide
  1: { bgColor: 'bg-amber-50' },
  2: { bgColor: 'bg-rose-50' },
  3: { bgColor: 'bg-emerald-50' },
  7: { bgColor: 'bg-indigo-50' },
  8: { bgColor: 'bg-slate-50' },
  11: { bgColor: 'bg-theme-cream' },
  12: { bgColor: 'bg-blue-50' },
  15: { bgColor: 'bg-emerald-50' },
  16: { bgColor: 'bg-white' },
  20: { bgImage: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-theme-primary/10' }
};

export default function Lektion15Slides({ playAudio, playingId, onBack }: SlideProps) {
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
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình Lektion 15</h2>
              <p className="font-bold text-theme-dark/60">Hành trình 8 tiết học chuyên sâu</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: Giải Trí & Bị Động
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
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Truyền hình & Ý tưởng chương trình</p>
                    </div>
                  </button>
                  {[
                    {title: "Tiết 3: Ngữ pháp 'Passiv Präsens'", slide: 7},
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
                  BUỔI 2: Quy trình & Mua sắm
                </h3>
                <div className="space-y-4">
                   {[
                    {title: "Tiết 5: Quy trình (Prozesse)", locked: false, onClick: () => setCurrentSlide(12)},
                    {title: "Tiết 6: Reading & Media", locked: false, onClick: () => setCurrentSlide(15)},
                    {title: "Tiết 7: 4 Kỹ năng (Online Shopping)", locked: false, onClick: () => setCurrentSlide(18)},
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
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&h=800&fit=crop')] bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 15</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                Die Sendung<br/>wird produziert
              </h1>
              <p className="text-xl text-white/80 font-bold">Chủ đề: Phương tiện truyền thông & Giải trí</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Video Giới Thiệu Lektion 15</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-8">
              <div className="flex justify-center">
                <button 
                  onClick={() => playAudio("Chào mừng bạn đến với bài 15! Hôm nay chúng ta sẽ tìm hiểu về Truyền thông và Thể bị động ở thì hiện tại.", 'L15-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-theme-primary/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'L15-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-theme-secondary text-lg">1. Mục Tiêu Giao Tiếp</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Nói về các chương trình truyền hình & giải trí</li>
                    <li>Mô tả một quy trình (sản xuất phim, mua hàng)</li>
                    <li>Hiểu bài đọc về mua sắm online</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-theme-accent text-lg">2. Từ Vựng & Đọc Hiểu</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Từ vựng chủ đề Truyền hình, phim, đài phát thanh</li>
                    <li>Phân tích bài đọc: Thói quen xem truyền hình của mọi người</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-theme-dark/5 mt-4 text-center">
                <h4 className="font-black text-theme-primary mb-3">3. Ngữ pháp trọng tâm</h4>
                <ul className="text-sm font-bold text-theme-dark/70 flex justify-center gap-6">
                  <li>• Thể bị động (<b className="text-theme-secondary">Passiv Präsens</b>) với <i>werden + Partizip II</i></li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Ôn Bài Cũ (Lektion 14)</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8">
               <h3 className="text-2xl font-black text-theme-secondary italic text-center">"Vielen Dank für das Geschenk!"</h3>
               <p className="font-bold text-theme-dark/60 text-lg">Ôn lại kiến thức viết thiệp điện tử và tin nhắn chúc mừng.</p>
               <div className="flex flex-col gap-4 items-center w-full max-w-sm mx-auto">
                 <button onClick={() => playAudio("Herzlichen Glückwunsch zum Geburtstag!", `l15-ve-1`, 'de-DE')} className="w-full py-3 bg-theme-cream hover:bg-theme-primary hover:text-white rounded-xl font-bold border-2 border-theme-dark/5 transition-colors cursor-pointer text-theme-dark">
                   Herzlichen Glückwunsch...
                 </button>
                 <button onClick={() => playAudio("Ich habe mich sehr gefreut.", `l15-ve-2`, 'de-DE')} className="w-full py-3 bg-theme-cream hover:bg-theme-primary hover:text-white rounded-xl font-bold border-2 border-theme-dark/5 transition-colors cursor-pointer text-theme-dark">
                   Ich habe mich sehr gefreut.
                 </button>
               </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex gap-8 items-center h-full flex-col md:flex-row">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h2 className="text-4xl font-display font-black text-theme-dark">Tình Huống: Truyền hình</h2>
              <h3 className="text-2xl font-bold text-theme-primary">Was schauen Sie gern im Fernsehen?</h3>
              <p className="text-theme-dark/80 leading-relaxed font-medium text-lg">
                Trong bài này, chúng ta sẽ bắt gặp các chương trình giải trí như <b className="text-theme-dark">Krimi</b> (Phim trinh thám), <b className="text-theme-dark">Serie</b> (Phim dài tập) hay <b className="text-theme-dark">Dokumentation</b> (Phim tài liệu).
              </p>
            </div>
            <div className="flex-1 w-full rounded-[32px] overflow-hidden relative shadow-xl min-h-[300px] bg-theme-cream flex items-center justify-center border-4 border-white">
              <MonitorPlay size={80} className="text-theme-primary opacity-20" />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ Vựng Trọng Tâm</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
               {[
                 { w: 'der Sender', t: 'Kênh truyền hình' },
                 { w: 'die Sendung', t: 'Chương trình (nhỏ)' },
                 { w: 'das Programm', t: 'Chương trình (lớn)' },
                 { w: 'der Rundfunk', t: 'Đài phát thanh' },
                 { w: 'die Folge', t: 'Tập phim' },
                 { w: 'produzieren', t: 'Sản xuất' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-6 text-center space-y-4 hover:-translate-y-1 transition-transform">
                   <button 
                     onClick={() => playAudio(item.w, `l15-v-${i}`, 'de-DE')}
                     className="w-12 h-12 bg-theme-primary/10 rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     {playingId === `l15-v-${i}` ? <CheckCircle2 className="text-emerald-500 w-5 h-5" /> : <Volume2 className="text-theme-primary w-5 h-5" />}
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
            <div className="w-20 h-20 bg-theme-accent/20 text-theme-accent rounded-full flex items-center justify-center mx-auto">
               <Volume2 size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark">Nghe: Thói quen xem TV</h2>
            <p className="text-theme-dark/80 font-medium text-xl leading-relaxed">
              Bạn thường xem tivi lúc nào? Buổi sáng, buổi trưa hay tối? 
              <br/><br/>
              Hãy nghe Track 1 và xác định xem ai thích xem gì nhé! (Ví dụ: xem tin tức - <b className="text-theme-primary">Nachrichten</b> hay phim thiếu nhi - <b className="text-theme-secondary">Kinderprogramm</b>).
            </p>
          </div>
        );
      case 6:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Thực Hành Nghe Hiểu</h2>
            <div className="slide-card p-10 space-y-8 text-center bg-theme-cream border-2 border-theme-primary/10">
              <button 
                onClick={() => playAudio("Ich sehe oft am Abend fern. Am liebsten schaue ich Dokumentationen.", 'l15-listen-1', 'de-DE', 'Aoede')}
                className="w-20 h-20 bg-theme-primary text-white rounded-full mx-auto flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
              >
                {playingId === 'l15-listen-1' ? <CheckCircle2 size={32} /> : <Play size={32} className="ml-1" />}
              </button>
              <div className="text-left space-y-4">
                <h4 className="font-black text-theme-dark">Nhiệm vụ:</h4>
                <ul className="space-y-3 font-bold text-theme-dark/70 list-none pl-2">
                  <li className="flex gap-2 items-start"><CheckSquare className="w-5 h-5 text-theme-primary shrink-0"/> Nghe đoạn phỏng vấn trong sách (KB trang ...).</li>
                  <li className="flex gap-2 items-start"><CheckSquare className="w-5 h-5 text-theme-primary shrink-0"/> Hoàn thành bài tập đánh dấu Đúng/Sai (Richtig oder Falsch).</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Ngữ Pháp: Passiv Präsens</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto space-y-8 bg-theme-primary/5 border-2 border-theme-primary/20">
               <p className="text-2xl font-bold italic text-theme-dark leading-relaxed">
                 "Die Sendung <span className="text-theme-primary font-black">wird produziert</span>."
               </p>
               <button onClick={() => playAudio("Die Sendung wird produziert.", 'l15-gramm-1', 'de-DE')} className="px-6 py-2 bg-white rounded-full font-bold text-theme-primary shadow-sm hover:scale-105 transition-transform">
                 Nghe mẫu câu
               </button>
               <p className="text-theme-dark/80 font-medium">Bị động ở thì hiện tại. Nhấn mạnh <b className="text-theme-secondary">hành động</b> được thực hiện, chứ không quan trọng <b className="text-theme-dark">ai</b> là người làm hành động đó.</p>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <div className="text-center">
               <h2 className="text-4xl font-display font-black text-theme-dark mb-2">Cấu trúc Passiv Präsens</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="slide-card p-8 bg-rose-50 border-2 border-rose-200">
                <h4 className="font-black text-rose-600 mb-4 uppercase tracking-widest text-xs">Aktiv (Chủ động)</h4>
                <p className="font-medium text-lg leading-relaxed text-theme-dark">
                  <b className="text-rose-500">Man</b> <u className="font-black decoration-rose-400">produziert</u> die Sendung.
                </p>
                <p className="text-sm font-bold text-theme-dark/50 mt-4">(Người ta sản xuất chương trình)</p>
              </div>
              <div className="slide-card p-8 bg-indigo-50 border-2 border-indigo-200">
                <h4 className="font-black text-indigo-600 mb-4 uppercase tracking-widest text-xs">Passiv (Bị động)</h4>
                <p className="font-medium text-lg leading-relaxed text-theme-dark">
                  <b className="text-indigo-600">Die Sendung</b> <u className="font-black decoration-indigo-400">wird</u> <u className="font-black decoration-rose-400">produziert</u>.
                </p>
                <p className="text-sm font-bold text-theme-dark/50 mt-4 h-10">wird (V2) + Partizip II (cuối câu)</p>
              </div>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Mini Speaking & Bài Tập</h2>
            <div className="slide-card p-8 max-w-3xl mx-auto w-full space-y-6">
               <h4 className="font-black text-theme-primary">1. Chuyển sang bị động:</h4>
               <p className="font-medium text-theme-dark">"Man dreht den Film." ➡️ Der Film ______ ____________.</p>
               <div className="h-px bg-theme-dark/10 w-full my-4"></div>
               <h4 className="font-black text-theme-secondary">2. Hoàn thành câu của riêng bạn:</h4>
               <div className="bg-theme-cream p-6 rounded-2xl border border-theme-dark/10 font-bold text-lg text-theme-dark/80">
                  Die Nachrichten ________ um 20 Uhr _________ (zeigen).
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
             <h2 className="text-4xl font-display font-black text-theme-dark">Luyện Nói: Chương trình TV</h2>
             <p className="text-xl font-bold text-theme-dark/80 max-w-2xl mx-auto leading-relaxed">
               Thực hành thảo luận: Kể tên 3 chương trình TV phổ biến ở Việt Nam. Sau đó dùng 1-2 câu bị động để mô tả chương trình đó được chiếu khi nào.<br/><br/>
               <span className="text-theme-primary text-base">Ví dụ: "Ai là Triệu phú wird am Dienstagabend gezeigt."</span>
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
               <p className="text-xl font-bold text-theme-dark/60 uppercase tracking-widest">Tuyệt vời! Bạn đã hoàn thành 4 tiết đầu L15!</p>
             </div>
             <div className="slide-card p-8 text-left space-y-4 max-w-md w-full mx-auto bg-white/90 font-bold text-theme-dark/80">
                <p>👉 Từ vựng: Giải trí, truyền hình, truyền thông.</p>
                <p>👉 Ngữ pháp: <b>Passiv Präsens</b> (werden + Partizip II).</p>
                <p className="text-sm mt-4 text-theme-primary">Bài tập về nhà: Hoàn thiện sách AB phần Passiv.</p>
             </div>
          </div>
        );
      case 12:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto">BUỔI 2</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Einstieg: Game "Quy Trình Sắp Xếp"</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-6">
               <p className="font-bold text-theme-dark/80 text-xl leading-relaxed">
                 Thử thách xếp hạng các sự kiện trong một quy trình sản xuất phim: <b className="text-theme-primary text-lg">Diễn viên, Kịch bản, Máy quay, Hậu kỳ</b>!
               </p>
               <div className="mt-8">
                 <button className="px-6 py-3 bg-theme-accent text-white rounded-xl font-bold shadow-lg flex items-center justify-center mx-auto gap-2 hover:scale-105 transition-all">
                   <Gamepad2 /> Chơi Mini-Game Orden
                 </button>
               </div>
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
               <h4 className="font-black text-theme-dark text-xl">1. Kỹ năng trình bày quy trình (Prozesse)</h4>
               <p className="font-medium text-theme-dark/70">Mô tả quy trình công việc cụ thể bằng câu bị động và các phó từ chỉ thời gian: Zuerst, dann, danach...</p>
               <h4 className="font-black text-theme-dark text-xl pt-4">2. Chủ đề Mua sắm Online</h4>
               <p className="font-medium text-theme-dark/70">Từ vựng về gói hàng, bưu kiện, đặt hàng và thảo luận lợi/hại của việc mua sắm trực tuyến.</p>
             </div>
          </div>
        );
      case 14:
        return (
          <div className="flex gap-8 items-center h-full flex-col md:flex-row">
            <div className="flex-1 space-y-6 w-full text-center md:text-left">
              <h2 className="text-4xl font-display font-black text-theme-dark">Lesen: Bài Đọc</h2>
              <h3 className="text-2xl font-bold text-theme-primary">Hoạt động lớp học</h3>
              <div className="space-y-4 slide-card p-6 border-2 border-theme-dark/5 bg-theme-cream text-left">
                 <p className="font-bold text-theme-dark/80">Khóa học "So läuft der Unterricht ab"</p>
                 <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-2">
                    <li>Đọc hướng dẫn về nội dung khóa học trên web.</li>
                    <li>Tìm các câu Passiv xuất hiện trong bài text.</li>
                 </ul>
              </div>
            </div>
            <div className="flex-1 w-full rounded-[32px] overflow-hidden relative shadow-xl min-h-[300px] md:min-h-[400px] bg-theme-cream border-4 border-white flex items-center justify-center p-8">
              <div className="text-center space-y-4">
                 <FileText size={80} className="mx-auto text-theme-dark/20" />
                 <p className="font-bold text-theme-dark/40 uppercase tracking-widest text-sm">Xem sách Kursbuch</p>
              </div>
            </div>
          </div>
        );
      case 15:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Quy Trình với Passiv</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto space-y-8 bg-emerald-50 border-2 border-emerald-200">
               <p className="text-xl font-bold italic text-theme-dark text-left space-y-4">
                 1. <span className="text-theme-secondary">Zuerst</span> wird das Drehbuch geschrieben.<br/>
                 2. <span className="text-theme-secondary">Dann</span> werden die Schauspieler gesucht.<br/>
                 3. <span className="text-theme-secondary">Am Ende</span> wird der Film gezeigt.
               </p>
               <div className="bg-white p-4 rounded-xl border border-emerald-100 font-bold text-theme-dark mt-6 text-left">
                  <p>Chú ý: Các từ chỉ thứ tự đẩy động từ "werden" xuống vị trí số 2.</p>
               </div>
            </div>
          </div>
        );
      case 16:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center mb-4">Online-Shopping vs Cửa hàng</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="slide-card p-8 bg-blue-50 border-2 border-blue-200 text-center space-y-4">
                <h4 className="font-black text-blue-600 text-2xl">Online kaufen</h4>
                <p className="font-medium text-theme-dark">Tiện lợi, nhanh chóng, nhiều lựa chọn.</p>
                <p className="text-sm font-bold opacity-60">Pakete werden nach Hause geliefert.</p>
              </div>
              <div className="slide-card p-8 bg-emerald-50 border-2 border-emerald-200 text-center space-y-4">
                <h4 className="font-black text-emerald-600 text-2xl">Im Geschäft kaufen</h4>
                <p className="font-medium text-theme-dark">Được thử đồ, tư vấn trực tiếp.</p>
                <p className="text-sm font-bold opacity-60">Produkte werden sofort mitgenommen.</p>
              </div>
            </div>
          </div>
        );
      case 17:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <h2 className="text-4xl font-display font-black text-theme-dark">Thực Hành: Mua sắm Online</h2>
             <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8 bg-theme-cream border-2 border-theme-dark/10">
                <p className="font-bold text-theme-dark/80 text-xl text-left">
                  Mô tả quy trình đặt hàng: <br/><br/>
                  - Ein Produkt <b className="text-theme-primary">wird bestellt</b>.<br/>
                  - Das Paket <b className="text-theme-primary">wird verpackt</b>.<br/>
                  - Das Paket <b className="text-theme-primary">wird geliefert</b>.
                </p>
             </div>
          </div>
        );
      case 18:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Integration 4 Kỹ Năng</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-amber-500">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><ArrowRight className="text-amber-500 w-5"/> Thảo Luận</h4>
                 <p className="font-medium text-sm text-theme-dark/70">"Bạn thích mua sắm online hay ra cửa hàng? Vì sao?"</p>
              </div>
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-indigo-500">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><ArrowRight className="text-indigo-500 w-5"/> Nghe (Hören)</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Làm bài tập nghe về chủ đề mua sắm trực tuyến.</p>
              </div>
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-rose-500 flex flex-col justify-center">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><ArrowRight className="text-rose-500 w-5"/> Viết (Schreiben)</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Viết về quy trình đóng gói và giao hàng.</p>
              </div>
            </div>
          </div>
        );
      case 19:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark">Ôn Tập & Kiểm Tra Cuối Bài</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/20 space-y-6 text-left">
               <h4 className="font-black text-theme-primary text-xl border-b border-theme-dark/10 pb-4">1. Ngữ pháp Passiv:</h4>
               <p className="font-bold text-theme-dark/80 flex flex-wrap gap-3">
                 <span className="bg-white px-3 py-1 rounded-lg shadow-sm border border-theme-dark/5">werden</span>
                 <span className="bg-white px-3 py-1 rounded-lg shadow-sm border border-theme-dark/5">+ Partizip II</span>
               </p>
               
               <h4 className="font-black text-theme-secondary text-xl pt-4 border-b border-theme-dark/10 pb-4">2. Chuẩn bị Lektion 16</h4>
               <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-2">
                 <li>Hoàn thành bài Test Lektion 15.</li>
                 <li>Nắm vững từ vựng giải trí và mua sắm online.</li>
               </ul>
            </div>
          </div>
        );
      case 20:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform -rotate-1 hover:rotate-1 transition-transform max-w-xl mx-auto cursor-pointer" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -right-8 text-6xl animate-bounce">📺</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 15 <br/> Khép Lại!
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
            {onBack ? (
              <button
                onClick={onBack}
                className="px-4 md:px-6 py-2 md:py-3 rounded-[20px] font-black tracking-wide transition-all flex items-center gap-1 md:gap-2 bg-white border border-theme-dark/10 hover:bg-theme-dark/5 active:scale-95 text-theme-dark text-xs md:text-base shadow-sm"
              >
                <ChevronLeft size={18} className="md:w-5 md:h-5" /> <span className="hidden sm:inline">Trở lại</span>
              </button>
            ) : <div />}
            <div className="text-[10px] md:text-xs font-bold text-theme-dark/50 tracking-widest uppercase text-right">
              Sơ đồ Lektion 15
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

