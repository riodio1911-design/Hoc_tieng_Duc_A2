import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, ShieldAlert, CheckCircle2, MessageSquare, Briefcase, FileText, CheckSquare, Gamepad2, ArrowRight, Plane, Globe, BookOpen } from 'lucide-react';
import { L24_INTRO_SCRIPT, L24_GRAMMAR_SCRIPT } from '../constants'; 

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
  14: { bgColor: 'bg-emerald-50' },
  15: { bgColor: 'bg-white' },
  20: { bgImage: "https://images.unsplash.com/photo-1544716278-e513176f20b5?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-theme-primary/10' }
};

export default function Lektion24Slides({ playAudio, playingId, onBack }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const totalSlides = 16; 

  const nextSlide = () => {
    if (currentSlide === 8 || currentSlide === totalSlides - 1) {
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
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình Lektion 24</h2>
              <p className="font-bold text-theme-dark/60">Hành trình 8 tiết học chuyên sâu</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: Mobility & Präteritum
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
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Từ vựng Cảng Hàng Không & Shadowing</p>
                    </div>
                  </button>
                  {[
                    {title: "Tiết 3: Ngữ pháp Präteritum", slide: 5},
                    {title: "Tiết 4: Luyện nói & Ôn tập", slide: 8}
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
                  BUỔI 2: Experiences Abroad & Emotions
                </h3>
                <div className="space-y-4">
                   {[
                    {title: "Tiết 5: Entry & Đọc hiểu", locked: false, onClick: () => setCurrentSlide(9)},
                    {title: "Tiết 6: Präteritum mit Modalverben", locked: false, onClick: () => setCurrentSlide(11)},
                    {title: "Tiết 7: 4 Kỹ năng (Integration)", locked: false, onClick: () => setCurrentSlide(13)},
                    {title: "Tiết 8: Test & Tổng kết", locked: false, onClick: () => setCurrentSlide(14)}
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
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1551041777-ed277b8dd348?w=1200&h=800&fit=crop')] bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 24</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                Wie sah dein Alltag<br/>aus?
              </h1>
              <p className="text-xl text-white/80 font-bold">Chủ đề: Cuộc sống thường ngày & Präteritum</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Einstieg: Ôn bài cũ & Video định hướng</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-8">
              <div className="flex justify-center gap-4">
                <button 
                  onClick={() => playAudio(L24_INTRO_SCRIPT, 'L24-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-theme-primary/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'L24-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-theme-secondary text-lg">1. Ôn Bài (10')</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Trò chơi: Nối động từ với danh từ của Lektion 23</li>
                    <li>Ví dụ: <i>einen Vertrag / unterschreiben, sich bewerben / um</i></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-theme-accent text-lg">2. Mục tiêu trọng tâm</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Kể về trải nghiệm trong quá khứ</li>
                    <li>Các chuyến đi nước ngoài</li>
                    <li>Cách dùng thì Präteritum</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-theme-dark/5 mt-4 text-center">
                <h4 className="font-black text-theme-primary mb-3 flex justify-center items-center gap-2"><BookOpen /> Einstieg (10')</h4>
                <p className="text-sm font-medium text-theme-dark/80 whitespace-pre-line text-left">
                    <b className="text-theme-dark">Tài liệu:</b> Ảnh nhóm bạn đón Patricia tại sân bay (KB trang 131).<br/>
                    <b className="text-theme-dark text-emerald-600">Hoạt động:</b><br/>
                    1. Xem ảnh: "Wo sind die Leute? Warum sind sie dort?"<br/>
                    2. Luyện nói tự do: "Wann haben Sie zuletzt jemanden am Flughafen oder Bahnhof abgeholt? Erzählen Sie."
                </p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Từ vựng (20')</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-8">
               <h3 className="text-2xl font-black text-theme-secondary italic">Mobilität & Ausland</h3>
               <p className="font-bold text-theme-dark/60 text-lg">Chủ đề sân bay & di chuyển (KB trang 132)</p>
               <div className="flex flex-wrap gap-4 justify-center">
                 {['der Abflug', 'die Ankunft', 'der Anschluss', 'das Visum', 'der Zoll', 'die Grenze', 'der Pass', 'verlängern'].map((w,i) => (
                    <button key={i} onClick={() => playAudio(w, `l24-ve-${i}`, 'de-DE')} className="px-6 py-3 bg-theme-cream hover:bg-theme-primary hover:text-white rounded-xl font-bold border-2 border-theme-dark/5 transition-colors cursor-pointer text-theme-dark">
                      {w}
                    </button>
                 ))}
               </div>
               <div className="bg-white p-4 rounded-xl border border-theme-dark/10 text-left mt-6">
                 <h4 className="font-bold text-theme-primary mb-2">Đố vui từ vựng (Was passt?):</h4>
                 <ul className="text-sm font-medium space-y-2">
                   <li>1. Das brauchen Sie für eine Reise ins Ausland: <b className="text-emerald-600 animate-pulse">Visum / Pass</b></li>
                   <li>2. Sie liegt zwischen zwei Ländern: <b className="text-emerald-600 animate-pulse">Grenze</b></li>
                   <li>3. Sie können ihn verlängern: <b className="text-emerald-600 animate-pulse">Pass / Visum</b></li>
                 </ul>
               </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex gap-8 items-center h-full">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-display font-black text-theme-dark">Tiết 2: Dialog 1 + Nghe hiểu (Hörverstehen)</h2>
              <div className="space-y-4">
                 <h3 className="text-xl font-bold text-theme-primary">Hoạt động (KB trang 131)</h3>
                 <ul className="space-y-3 font-medium text-theme-dark/80 list-disc pl-5">
                    <li><strong className="text-theme-secondary">Pre-listening (5'):</strong> Phân tích biển báo của 4 người: Will, kommen, zu Hause, Patricia.</li>
                    <li><strong className="text-amber-500">Nghe hiểu (10'):</strong> Nghe file Audio 2.32. Trả lời: Warum sind sie dort?</li>
                    <li><strong className="text-emerald-500">Mở rộng (15'):</strong> Chia cặp thảo luận về một lần đi đón người thân ở sân bay hoặc nhà ga. Diễn đạt cảm xúc.</li>
                 </ul>
              </div>
            </div>
            <div className="flex-1 rounded-[32px] overflow-hidden relative shadow-xl min-h-[400px] bg-theme-cream flex items-center justify-center border-4 border-white">
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop" alt="Airport scene" className="w-full h-full object-cover" />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Shadowing (15')</h2>
             <p className="text-center font-bold text-theme-dark/60 text-lg mb-8">Luyện phát âm các từ có âm "ch" và "sch" (bài nghe 2.39)</p>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
               {[
                 { w: 'schriftlich', t: '(bằng văn bản)' },
                 { w: 'das Studium', t: '(việc học đại học)' },
                 { w: 'Spanien', t: '(Tây Ban Nha)' },
                 { w: 'glücklich', t: '(hạnh phúc)' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-6 text-center space-y-4 hover:-translate-y-1 transition-transform border-4 border-white rounded-[24px] bg-theme-cream">
                   <button 
                     onClick={() => playAudio(item.w, `l24-v-${i}`, 'de-DE')}
                     className="w-16 h-16 bg-theme-primary/10 rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     {playingId === `l24-v-${i}` ? <CheckCircle2 className="text-emerald-500 w-8 h-8" /> : <Volume2 className="text-theme-primary w-8 h-8" />}
                   </button>
                   <div>
                     <h4 className="font-black text-2xl text-theme-dark mb-2">{item.w}</h4>
                     <p className="font-bold text-theme-dark/60">{item.t}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-theme-accent/20 text-theme-accent rounded-full flex items-center justify-center mx-auto">
               <Globe size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark">Tiết 3: Grammatik 1 - Präteritum</h2>
            <div className="slide-card p-8 border-2 border-theme-primary/20 bg-white">
                <h3 className="font-black text-theme-primary text-xl mb-4 text-left">Nhận diện (10')</h3>
                <p className="text-theme-dark/80 font-medium text-lg leading-relaxed text-left">
                    Tìm các dạng thì quá khứ (Vergangenheitsformen) trong bài đọc về Patricia - Mitarbeiterporträt (KB trang 132/133).
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                    <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-xl font-bold border-2 border-amber-200">kam (kommen)</span>
                    <span className="bg-rose-100 text-rose-800 px-4 py-2 rounded-xl font-bold border-2 border-rose-200">sagte (sagen)</span>
                    <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-xl font-bold border-2 border-indigo-200">fand (finden)</span>
                    <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-xl font-bold border-2 border-emerald-200">war (sein)</span>
                </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Giải thích (15'): Präteritum</h2>
            <div className="slide-card p-10 space-y-8 bg-theme-cream border-2 border-theme-primary/10">
              <div className="flex items-center gap-4 border-b-2 border-theme-dark/10 pb-4">
                 <button onClick={()=>playAudio(L24_GRAMMAR_SCRIPT, 'L24-gramm-1', 'vi-VN')} className="w-12 h-12 bg-theme-secondary text-white rounded-full flex items-center justify-center shrink-0 hover:scale-105">
                     <Play size={20} className="ml-1"/>
                 </button>
                 <span className="font-bold text-lg text-theme-secondary">Bảng chia động từ Präteritum (sagen, kommen, geben, finden, sehen)</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="bg-white p-6 rounded-2xl border-2 border-emerald-200 shadow-sm">
                     <h4 className="font-black text-emerald-600 mb-3 text-lg">Quy tắc (Regular)</h4>
                     <p className="font-medium text-theme-dark">Thêm đuôi <b>-te</b> vào thân từ.</p>
                     <p className="text-emerald-700 font-bold mt-2 bg-emerald-50 p-2 rounded">sagen &rarr; sagte</p>
                     <p className="text-emerald-700 font-bold mt-2 bg-emerald-50 p-2 rounded">machen &rarr; machte</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border-2 border-rose-200 shadow-sm">
                     <h4 className="font-black text-rose-600 mb-3 text-lg">Bất quy tắc (Irregular)</h4>
                     <p className="font-medium text-theme-dark">Biến đổi thân từ (phải học thuộc).</p>
                     <p className="text-rose-700 font-bold mt-2 bg-rose-50 p-2 rounded">kommen &rarr; kam</p>
                     <p className="text-rose-700 font-bold mt-2 bg-rose-50 p-2 rounded">geben &rarr; gab</p>
                 </div>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Bài tập & Mini speaking</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto space-y-8 bg-indigo-50 border-2 border-indigo-200">
               <div className="text-left space-y-4">
                  <h3 className="font-black text-indigo-800 text-2xl flex items-center gap-3">
                     <FileText className="text-indigo-600"/> Bài tập (10')
                  </h3>
                  <p className="font-medium text-lg leading-relaxed text-indigo-900 bg-white p-4 rounded-xl border border-indigo-100">
                      Điền dạng đúng của động từ vào đoạn văn "Unterwegs in Argentinien". (AB trang 10)
                  </p>
               </div>
               
               <div className="text-left space-y-4 mt-8 pt-6 border-t-2 border-indigo-200/50">
                  <h3 className="font-black text-rose-600 text-2xl flex items-center gap-3">
                     <MessageSquare className="text-rose-500"/> Mini speaking (10')
                  </h3>
                  <div className="bg-white p-6 rounded-2xl border-2 border-rose-100">
                     <p className="text-2xl font-bold italic text-theme-dark leading-relaxed mb-4">
                        "Was machtest du letzten Sommer?"
                     </p>
                     <div className="flex gap-2">
                        <button onClick={() => playAudio("Was machtest du letzten Sommer?", 'l24-gramm-2', 'de-DE')} className="px-6 py-2 bg-rose-100 text-rose-800 rounded-full font-bold shadow-sm hover:scale-105 transition-transform flex items-center gap-2">
                           <Volume2 size={16}/> Nghe
                        </button>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-center">
             <div className="w-24 h-24 bg-theme-primary/10 text-theme-primary rounded-[32px] flex items-center justify-center mx-auto mb-4 border-4 border-theme-primary">
               <Briefcase size={40} />
             </div>
             <h2 className="text-5xl font-display font-black text-theme-dark">Tiết 4: Luyện nói & Ôn tổng kết</h2>
             <div className="slide-card p-8 text-left space-y-6 max-w-2xl w-full mx-auto bg-white/90 font-bold text-theme-dark/80">
                <div className="border-l-4 border-emerald-500 pl-4 py-2">
                    <h4 className="font-black text-emerald-600 mb-2">Luyện nói (20'):</h4>
                    <p>Hoạt động: Kettenspiel (Trò chơi dây chuyền) hỏi về các chuyến đi: "Wo warst du? Wie lange...?"</p>
                </div>
                <div className="border-l-4 border-amber-500 pl-4 py-2">
                    <h4 className="font-black text-amber-600 mb-2">Ôn tập Buổi 1 (10'):</h4>
                    <p>Hệ thống lại từ vựng sân bay và bảng chia động từ Präteritum.</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4 py-2">
                    <h4 className="font-black text-indigo-600 mb-2">Giao bài tập (5'):</h4>
                    <p>AB trang 6, bài 4 (Mô tả trải nghiệm của Patricia).</p>
                </div>
                <div className="border-l-4 border-rose-500 pl-4 py-2">
                    <h4 className="font-black text-rose-600 mb-2">Video tổng kết Buổi 1 (10'):</h4>
                    <p>Tóm tắt: "Hôm nay chúng ta đã học cách kể lại một chuyến đi bằng thì quá khứ..."</p>
                </div>
             </div>
          </div>
        );
      case 9:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto">BUỔI 2</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Tiết 5: Einstieg Buổi 2 + Video định hướng</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto w-full space-y-8">
               <div className="space-y-4 text-left">
                  <div className="bg-amber-50 p-6 rounded-2xl border-2 border-amber-200">
                      <h4 className="font-black text-amber-600 mb-2 text-lg">Film-Stationen Clip 8 (KB trang 136)</h4>
                      <p className="font-medium text-theme-dark">
                         <b>1. Melanie:</b> Xem video. Trả lời: Wie findet Melanie Berlin? Was denkt Melanie über ihr Leben?<br/>
                      </p>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-2xl border-2 border-indigo-200">
                      <h4 className="font-black text-indigo-600 mb-2 text-lg">Phần 2: Thẻ EC và Überraschung</h4>
                      <p className="font-medium text-theme-dark">
                         Xem tiếp video (từ 1:07). Trát lời: Christian giúp Max điều gì? Bất ngờ gì xảy ra cho Melanie & Max? (Cùng đặt chung một phòng).
                      </p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-2xl border-2 border-emerald-200">
                      <h4 className="font-black text-emerald-600 mb-2 text-lg">Sprechanlass (Luyện nói)</h4>
                      <p className="font-medium text-theme-dark italic">"Über welche Überraschung würden Sie sich freuen? Erzählen Sie."</p>
                  </div>
               </div>
            </div>
          </div>
        );
      case 10:
        return (
          <div className="flex gap-8 items-center h-full flex-col lg:flex-row">
            <div className="flex-1 space-y-6 w-full">
              <h2 className="text-4xl font-display font-black text-theme-dark">Lesen (25')</h2>
              <h3 className="text-2xl font-bold text-theme-primary">Văn bản trải nghiệm (KB 132/135)</h3>
              <p className="text-theme-dark/80 leading-relaxed font-medium text-lg mb-6">
                Đọc hiểu & khám phá các từ vựng chỉ trải nghiệm tại nước ngoài và trong công việc.
              </p>
              <div className="bg-theme-cream p-5 rounded-2xl border-2 border-theme-primary/10 space-y-4">
                 <div>
                    <h4 className="font-black text-theme-dark mb-1">1. Ärzte ohne Grenzen (KB tr. 132)</h4>
                    <p className="font-bold text-theme-dark/70 bg-white p-3 rounded-lg text-sm">
                       Chân dung Patricia Günther. Was hat sie im Sudan erlebt? Was hat sie vermisst?
                    </p>
                 </div>
                 <div>
                    <h4 className="font-black text-theme-dark mb-1">2. Lesemagazin (KB tr. 135)</h4>
                    <p className="font-bold text-theme-dark/70 bg-white p-3 rounded-lg text-sm">
                       Arzt - ein Traumberuf? Kai Ebel cùng gia đình chuyển nhà liên tục vì công việc. Korrigieren Sie die Sätze.
                    </p>
                 </div>
              </div>
            </div>
            <div className="flex-1 w-full rounded-[32px] overflow-hidden relative shadow-xl min-h-[300px] lg:min-h-[400px] bg-theme-cream flex items-center justify-center border-4 border-white">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop" alt="Doctors without borders concept" className="w-full h-full object-cover" />
            </div>
          </div>
        );
      case 11:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Tiết 6: Grammatik 2 - Modalverben</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto w-full space-y-8">
               <div className="bg-theme-cream border-2 border-theme-dark/10 p-6 rounded-2xl text-left">
                  <h4 className="font-black text-theme-primary text-xl flex items-center gap-2 mb-4"><CheckSquare className="text-theme-primary"/> Nhận diện (10')</h4>
                  <p className="font-bold text-theme-dark/70 text-lg leading-relaxed">
                      Tìm các câu có chứa <b className="text-theme-dark bg-white px-2 py-1 rounded shadow-sm mx-1">musste</b>, <b className="text-theme-dark bg-white px-2 py-1 rounded shadow-sm mx-1">wollte</b>, <b className="text-theme-dark bg-white px-2 py-1 rounded shadow-sm mx-1">konnte</b> trong văn bản trang 132.
                  </p>
               </div>
               
               <div className="bg-white border-2 border-theme-secondary/20 p-6 rounded-2xl text-left shadow-lg">
                  <h4 className="font-black text-theme-secondary text-xl flex items-center gap-2 mb-4"><Globe className="text-theme-secondary"/> Giải thích (15')</h4>
                  <p className="font-medium text-theme-dark mb-4">
                      Bảng chia Präteritum cho các động từ (đã học ở A1): müssen, können, sollen, wollen, dürfen (KB trang 134, mục 5b)
                  </p>
                  <p className="text-theme-secondary font-bold bg-theme-secondary/5 p-4 rounded-xl border border-theme-secondary/10">
                      Nguyên tắc Modalverben: Bỏ Umlaut (nếu có) và thêm đuôi -te.<br/>
                      müssen &rarr; musste<br/>
                      können &rarr; konnte<br/>
                  </p>
               </div>
            </div>
          </div>
        );
      case 12:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center mb-6">Thực hành Modalverben</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="slide-card p-8 bg-rose-50 border-2 border-rose-200 text-center space-y-6">
                <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto">
                    <FileText size={32}/>
                </div>
                <h4 className="font-black text-rose-600 text-2xl">Bài tập (10')</h4>
                <p className="font-medium text-theme-dark bg-white p-4 rounded-xl">Hoàn thành bài tập AB trang 13, mục 2 về ký ức trang trại của ông bà.</p>
              </div>
              <div className="slide-card p-8 bg-emerald-50 border-2 border-emerald-200 text-center space-y-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <MessageSquare size={32}/>
                </div>
                <h4 className="font-black text-emerald-600 text-2xl">Speaking (10')</h4>
                <div className="text-left space-y-4 flex flex-col items-center">
                    <p className="font-bold text-theme-dark/80 italic text-lg leading-relaxed bg-white p-4 rounded-xl text-center">
                        "Was durftest du als Kind nicht machen?"
                    </p>
                    <button onClick={() => playAudio("Was durftest du als Kind nicht machen?", 'l24-gramm-3', 'de-DE')} className="mt-4 px-6 py-2 bg-white rounded-full font-bold text-emerald-600 shadow-sm hover:scale-105 transition-transform flex gap-2 w-max">
                        <Volume2 size={16}/> Nghe
                    </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 13:
         return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Tiết 7: Projekt Landeskunde & Erfahrungsbericht</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-6">
               <div className="slide-card p-8 space-y-6 border-t-4 border-t-amber-500 bg-amber-50">
                  <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-amber-200">
                     <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><Globe className="text-amber-500" size={20}/> Projekt (KB tr. 137)</h4>
                  </div>
                  <div className="space-y-3 font-medium text-theme-dark/80 text-left">
                     <p className="font-black text-amber-700">Jobben und Reisen im Ausland (Work & Travel):</p>
                     <ul className="list-disc pl-5 space-y-2">
                        <li>Was ist Work & Travel?</li>
                        <li>Wo kann man das machen?</li>
                        <li>Wer kann an dem Programm teilnehmen? Tìm thông tin và trao đổi.</li>
                     </ul>
                  </div>
               </div>
               
               <div className="slide-card p-8 space-y-6 border-t-4 border-t-indigo-500 bg-indigo-50">
                  <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-indigo-200">
                     <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><Briefcase className="text-indigo-500" size={20}/> Viết (KB tr. 133)</h4>
                  </div>
                  <div className="space-y-3 font-medium text-theme-dark/80 text-left">
                     <p className="font-black text-indigo-700">Erfahrungsbericht (Báo cáo trải nghiệm):</p>
                     <ul className="list-disc pl-5 space-y-2">
                        <li>Viết báo cáo thực tế/hư cấu dựa trên các câu hỏi: Wo waren Sie? Wie lange?</li>
                        <li>Was war Ihr schönstes Erlebnis? Was war nicht so schön? (Sử dụng biểu cảm Begeisterung / Enttäuschung).</li>
                     </ul>
                  </div>
               </div>
            </div>
          </div>
        );
      case 14:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <h2 className="text-4xl font-display font-black text-theme-dark">Tiết 8: Ôn Buổi 2 & Test Tổng Kết</h2>
             <div className="slide-card p-10 max-w-3xl mx-auto w-full space-y-8 bg-theme-cream border-2 border-theme-dark/10">
                <div className="text-left space-y-4">
                   <h4 className="font-black text-theme-primary text-xl border-b-2 border-theme-primary/20 pb-2">1. Ôn tập mẫu câu (10')</h4>
                   <p className="font-bold text-theme-dark/80 bg-white p-4 rounded-lg shadow-sm">
                      Hệ thống lại các cụm từ biểu cảm: <span className="text-emerald-600">Begeisterung (Hào hứng)</span> / <span className="text-rose-600">Enttäuschung (Thất vọng)</span> ausdrücken. <br/>
                      - Das hat mir super gefallen... <br/>
                      - Ich fand es traurig, dass...
                   </p>
                </div>
                
                <div className="text-left space-y-4">
                   <h4 className="font-black text-theme-secondary text-xl border-b-2 border-theme-secondary/20 pb-2">2. Test Lektion 24 (20')</h4>
                   <ul className="font-medium text-theme-dark/80 bg-white p-4 rounded-lg shadow-sm list-disc pl-5 space-y-1">
                      <li>Phần 1: Từ vựng du lịch (Abflug, Visum , Zoll).</li>
                      <li>Phần 2: Ngữ pháp: Chia Präteritum.</li>
                      <li>Phần 3: Đọc hiểu văn bản.</li>
                   </ul>
                </div>
                
                <div className="text-left space-y-4">
                   <h4 className="font-black text-amber-600 text-xl border-b-2 border-amber-500/20 pb-2">3. Feedback & Giao bài rập</h4>
                   <p className="font-bold text-theme-dark/80 bg-white p-4 rounded-lg shadow-sm">
                      Chữa Test. Hoàn thành bảng Selbsteinschätzung (Tự đánh giá) trang 17.
                   </p>
                </div>
             </div>
          </div>
        );
      case 15:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform rotate-1 hover:-rotate-1 transition-transform max-w-xl mx-auto cursor-pointer" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -left-8 text-6xl animate-bounce" style={{animationDelay: '0.2s'}}>✈️</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 24 <br/> Modul 8 Hoàn Thành!
                </h2>
                <div className="w-16 h-2 bg-theme-secondary mx-auto rounded-full mb-6"></div>
                <div className="bg-theme-cream inline-block px-6 py-4 rounded-xl border-2 border-dashed border-theme-dark/20 space-y-2">
                   <p className="font-bold text-theme-dark uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                      <Volume2 className="text-theme-primary" size={18}/> Ausklang (KB trang 138)
                   </p>
                   <p className="text-sm font-black text-theme-secondary italic mt-1">Lied: "Wir sind mit dabei"</p>
                   <p className="text-xs text-theme-dark/60 mt-2">Nghe, điền từ còn thiếu và cùng hát để khép lại bài học!</p>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-6 py-2 bg-emerald-600 text-white rounded-xl font-bold shadow-sm hover:scale-105 transition-transform flex items-center justify-center gap-2">
                        <Gamepad2 size={16}/> Lektion 24 Review Game
                    </button>
                    <button className="px-6 py-2 bg-theme-accent text-white rounded-xl font-bold shadow-sm hover:scale-105 transition-transform flex items-center justify-center gap-2">
                        <Gamepad2 size={16}/> Blooket Modul 8
                    </button>
                </div>
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
              Sơ đồ Lektion 24
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
              disabled={currentSlide === totalSlides - 1 && currentSlide !== 15}
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
