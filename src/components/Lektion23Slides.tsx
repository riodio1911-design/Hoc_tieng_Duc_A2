import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, ShieldAlert, CheckCircle2, MessageSquare, Briefcase, FileText, CheckSquare, Gamepad2, ArrowRight, Plane, Globe, BookOpen, Languages } from 'lucide-react';
import { L23_INTRO_SCRIPT, L23_GRAMMAR_SCRIPT } from '../constants'; 

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
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
  16: { bgColor: 'bg-white', bgImage: "https://images.unsplash.com/photo-1544716278-e513176f20b5?w=1200&h=800&fit=crop&q=80" }
};

export default function Lektion23Slides({ playAudio, playingId }: SlideProps) {
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
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình Lektion 23</h2>
              <p className="font-bold text-theme-dark/60">Hành trình 8 tiết học chuyên sâu</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: Giáo Dục & Nominativ
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
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 1 & 2: Einstieg & Đọc hiểu</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Từ vựng Trường học & Ngành nghề</p>
                    </div>
                  </button>
                  {[
                    {title: "Tiết 3: Relativsatz (Nominativ)", slide: 5},
                    {title: "Tiết 4: Luyện nói & Ôn tổng kết", slide: 8}
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
                  BUỔI 2: Job Satisfaction & Akkusativ
                </h3>
                <div className="space-y-4">
                   {[
                    {title: "Tiết 5: Einstieg Buổi 2 & Hệ thống giáo dục", locked: false, onClick: () => setCurrentSlide(9)},
                    {title: "Tiết 6: Nghe hiểu & Thảo luận", locked: false, onClick: () => setCurrentSlide(11)},
                    {title: "Tiết 7: Relativsatz (Akkusativ) & Luyện tập", locked: false, onClick: () => setCurrentSlide(13)},
                    {title: "Tiết 8: Ôn Buổi 2 & Giao bài", locked: false, onClick: () => setCurrentSlide(14)}
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
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop')] bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 23</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                Der Beruf,<br/>der zu mir passt
              </h1>
              <p className="text-xl text-white/80 font-bold">Chủ đề: Nghề nghiệp lý tưởng</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Tiết 1: Einstieg & Video định hướng</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-secondary/10 space-y-8">
              <div className="flex justify-center gap-4">
                <button 
                  onClick={() => playAudio(L23_INTRO_SCRIPT, 'L23-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-theme-secondary text-white rounded-full flex items-center justify-center shadow-xl shadow-theme-secondary/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'L23-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-theme-secondary text-lg">1. Ôn Bài cũ (10')</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Trò chơi: Nối động từ với danh từ của Lektion 22</li>
                    <li>Ví dụ: <i>einen Vertrag / unterschreiben</i></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-theme-accent text-lg">2. Mục tiêu trọng tâm</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Nghề nghiệp lý tưởng, hệ thống trường học Đức</li>
                    <li>Ngữ pháp: Mệnh đề quan hệ (Relativsatz)</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-theme-dark/5 mt-4 text-center">
                <h4 className="font-black text-theme-secondary mb-3 flex justify-center items-center gap-2"><Globe /> Einstieg (10')</h4>
                <p className="text-sm font-medium text-theme-dark/80 whitespace-pre-line">
                    <b className="text-theme-dark">Slide:</b> Ảnh người đàn ông làm vườn (KB 23 trang 127).<br/>
                    <b className="text-theme-dark text-emerald-600">Hoạt động:</b> Quan sát ảnh, nghe audio 2.28 và thảo luận:<br/>
                    "Wie geht es dem Mann? Warum?"<br/>
                    "Welche Tätigkeit macht Sie glücklich?"
                </p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark">Từ vựng các cấp học (20')</h2>
            <div className="slide-card p-10 bg-white shadow-xl space-y-8 border-2 border-emerald-100">
               <h3 className="text-2xl font-black text-emerald-600 italic flex items-center justify-center gap-2">
                 <Briefcase /> Schulsystem in Deutschland
               </h3>
               <p className="font-bold text-theme-dark/60 text-lg mb-6">Các loại trường học (Grundschule, Gymnasium...)</p>
               
               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                 {[
                   {w: 'die Grundschule', t: '(Trường tiểu học)'},
                   {w: 'die Realschule', t: '(Trường thực hành)'},
                   {w: 'das Gymnasium', t: '(Trường trung học chuyên)'},
                   {w: 'das Abitur', t: '(Bằng tốt nghiệp phổ thông)'},
                   {w: 'die Lehre', t: '(Học nghề)'},
                   {w: 'das Studium', t: '(Học đại học)'}
                 ].map((item, i) => (
                    <button key={i} onClick={() => playAudio(item.w, `l23-ve-${i}`, 'de-DE')} className="p-4 bg-emerald-50 hover:bg-emerald-500 hover:text-white rounded-2xl border-2 border-emerald-100 transition-colors flex flex-col text-center shadow-sm">
                      <span className="font-black text-lg text-emerald-900 group-hover:text-white">{item.w}</span>
                      <span className="text-sm font-medium text-emerald-700/80 group-hover:text-emerald-100 mt-1">{item.t}</span>
                    </button>
                 ))}
               </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex gap-8 items-center h-full flex-col lg:flex-row">
            <div className="flex-1 space-y-6 w-full">
              <h2 className="text-4xl font-display font-black text-theme-dark">Tiết 2: Đọc hiểu (Lesen)</h2>
              <div className="space-y-4">
                 <h3 className="text-xl font-black text-theme-primary flex items-center gap-2"><BookOpen/> Đọc hiểu (Lesen) - Bài 3 (128)</h3>
                 <ul className="space-y-4 font-medium text-theme-dark/80 bg-theme-cream p-6 rounded-2xl border-2 border-theme-primary/10">
                    <li className="flex items-start gap-2">
                       <span className="shrink-0 mt-1 rounded text-white bg-theme-primary px-2 font-bold text-xs py-0.5">Bước 1</span>
                       <span><strong className="text-theme-dark">Überschrift (5'):</strong> "Liebe die Arbeit, die du machst!". Đọc bìa sách (Klappentext) và chọn đáp án đúng (3a).</span>
                    </li>
                    <li className="flex items-start gap-2">
                       <span className="shrink-0 mt-1 rounded text-white bg-emerald-500 px-2 font-bold text-xs py-0.5">Bước 2</span>
                       <span><strong className="text-theme-dark">Đọc chi tiết (15'):</strong> Đọc toàn bộ văn bản về Mark Brügge. Làm bài tập Richtig/Falsch (3b). Chú ý quá trình học và làm việc của anh ấy.</span>
                    </li>
                    <li className="flex items-start gap-2">
                       <span className="shrink-0 mt-1 rounded text-white bg-rose-500 px-2 font-bold text-xs py-0.5">Bước 3</span>
                       <span><strong className="text-theme-dark">Thảo luận (10'):</strong> "Würden Sie das Buch lesen? Warum / Warum nicht?" (3c). Thể hiện quan điểm cá nhân.</span>
                    </li>
                 </ul>
              </div>
            </div>
            <div className="flex-1 w-full rounded-[32px] overflow-hidden relative shadow-xl min-h-[300px] lg:min-h-[400px] bg-theme-cream flex items-center justify-center border-4 border-white">
              <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop" alt="Reading concept" className="w-full h-full object-cover" />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Shadowing (15')</h2>
             <p className="text-center font-bold text-theme-dark/60 text-lg mb-8">Luyện đọc câu trích dẫn chứa Mệnh đề quan hệ</p>
             <div className="max-w-3xl mx-auto w-full slide-card p-10 text-center space-y-8 bg-indigo-50 border-4 border-indigo-100 rounded-[32px]">
                <p className="text-2xl md:text-3xl font-black text-indigo-900 leading-tight italic">
                   "Jeder junge Mensch, <span className="text-indigo-600 bg-white px-2 py-1 mx-1 shadow-sm rounded">der</span> von der Schule kommt, sollte dieses Buch lesen."
                </p>
                <p className="text-indigo-700 font-bold bg-indigo-100 p-4 rounded-xl border border-indigo-200">
                   "Mọi bạn trẻ, những người vừa rời ghế nhà trường, nên đọc cuốn sách này."
                </p>
                <button 
                  onClick={() => playAudio("Jeder junge Mensch, der von der Schule kommt, sollte dieses Buch lesen.", 'l23-shadowing-1', 'de-DE')}
                  className="w-16 h-16 bg-white text-indigo-600 rounded-full mx-auto flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                  {playingId === 'l23-shadowing-1' ? <CheckCircle2 className="text-emerald-500 w-8 h-8" /> : <Volume2 className="w-8 h-8" />}
                </button>
             </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-theme-secondary/20 text-theme-secondary rounded-full flex items-center justify-center mx-auto">
               <Languages size={40} className="w-10 h-10"/>
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark">Tiết 3: Grammatik - Relativsatz (Nominativ)</h2>
            <div className="slide-card p-8 border-2 border-theme-secondary/20 bg-white">
                <h3 className="font-black text-theme-secondary text-xl mb-4 text-left">Khám phá quy luật (10')</h3>
                <p className="text-theme-dark/80 font-medium text-lg leading-relaxed text-left bg-theme-cream p-4 rounded-xl">
                    Bài 4a (KB 129): "Ein Mensch, der nicht weiß, was er will." <br/>
                    Dựa vào bài đọc ở phần 3a, điền các đại từ quan hệ (Relativpronomen) vào chỗ trống trong bảng.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <span className="bg-theme-secondary/10 text-theme-secondary px-6 py-3 rounded-xl font-bold border-2 border-theme-secondary/20">Das ist ein Mensch, <strong className="text-theme-primary ml-1">der</strong> nicht weiß...</span>
                    <span className="bg-emerald-100 text-emerald-800 px-6 py-3 rounded-xl font-bold border-2 border-emerald-200">Das Buch, <strong className="text-emerald-600 ml-1">das</strong> so empfehlenswert ist.</span>
                    <span className="bg-rose-100 text-rose-800 px-6 py-3 rounded-xl font-bold border-2 border-rose-200">Die Arbeit, <strong className="text-rose-600 ml-1">die</strong> zu mir passt.</span>
                </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Giải thích cấu trúc Relativsatz (15')</h2>
            <div className="slide-card p-10 space-y-8 bg-theme-cream border-2 border-theme-primary/10">
              <div className="flex items-center gap-4 border-b-2 border-theme-dark/10 pb-4">
                 <button onClick={()=>playAudio(L23_GRAMMAR_SCRIPT, 'L23-gramm-1', 'vi-VN')} className="w-12 h-12 bg-theme-secondary text-white rounded-full flex items-center justify-center shrink-0 hover:scale-105">
                     <Play size={20} className="ml-1"/>
                 </button>
                 <span className="font-bold text-lg text-theme-secondary">Bảng cấu trúc ngữ pháp (KB trang 2)</span>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border-4 border-dashed border-theme-secondary/30 text-center space-y-4">
                  <p className="font-mono text-xl md:text-2xl text-theme-dark bg-theme-secondary/5 py-4 rounded-xl border border-theme-secondary/10 overflow-x-auto whitespace-nowrap">
                     Danh từ từ tham chiếu <span className="font-black text-rose-500">,</span> Relativpronomen <span className="text-theme-dark/40">+ ... +</span> <span className="text-theme-primary font-black uppercase">Verb (Cuối)</span> .
                  </p>
                  <p className="font-medium text-lg text-theme-dark/70">
                     <span className="text-emerald-600 font-bold">Lưu ý:</span> Đại từ quan hệ có giới tính (Genus) và số lượng (Numerus) <strong className="text-theme-primary">giống với danh từ mà nó thay thế.</strong>
                  </p>
                  <button onClick={() => playAudio("Das ist ein Job, der mir gefällt.", 'l23-gramm-example', 'de-DE')} className="mx-auto mt-4 w-12 h-12 bg-theme-cream rounded-full border border-theme-secondary/20 flex items-center justify-center text-theme-secondary hover:bg-theme-secondary hover:text-white transition-colors">
                     <Volume2 size={20}/>
                  </button>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Thực hành Mệnh đề quan hệ</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
               <div className="slide-card p-8 bg-amber-50 border-2 border-amber-200 text-left space-y-6">
                  <h3 className="font-black text-amber-700 text-2xl flex items-center gap-3">
                     <FileText className="text-amber-600 w-8 h-8"/> Bài tập (10')
                  </h3>
                  <p className="font-medium text-lg bg-white p-4 rounded-xl text-amber-900 border border-amber-100">
                      Làm bài tập 4b (KB 129): Luyện nói theo cặp. "Das ist der Kollege, der..." sử dụng các hình ảnh ở trang 173 và 176 để luyện phản xạ sử dụng mệnh đề quan hệ.
                  </p>
               </div>
               
               <div className="slide-card p-8 bg-rose-50 border-2 border-rose-200 text-left space-y-6">
                  <h3 className="font-black text-rose-700 text-2xl flex items-center gap-3">
                     <MessageSquare className="text-rose-600 w-8 h-8"/> Mini speaking (10')
                  </h3>
                  <div className="space-y-4">
                     <p className="font-bold text-theme-dark leading-relaxed text-sm">
                        Mô tả đồ vật/người sử dụng mệnh đề quan hệ.
                     </p>
                     <p className="italic text-rose-800 bg-white p-4 rounded-xl shadow-sm font-medium border border-rose-100">
                        "Das ist ein Mensch, der viel arbeitet."
                     </p>
                     <button onClick={() => playAudio("Das ist ein Mensch, der viel arbeitet.", 'l23-gramm-2', 'de-DE')} className="px-6 py-2 bg-rose-600 text-white rounded-full font-bold shadow-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 w-max text-sm">
                        <Volume2 size={16}/> Nghe ví dụ
                     </button>
                  </div>
               </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-center">
             <div className="w-24 h-24 bg-theme-primary/10 text-theme-primary rounded-[32px] flex items-center justify-center mx-auto mb-4 border-4 border-theme-primary shadow-inner">
               <CheckSquare size={40} />
             </div>
             <h2 className="text-5xl font-display font-black text-theme-dark">Tiết 4: Luyện nói & Ôn tổng kết</h2>
             <div className="slide-card p-8 text-left space-y-6 max-w-2xl w-full mx-auto bg-white border-2 border-theme-dark/5 shadow-xl font-bold text-theme-dark/80 rounded-[32px]">
                <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50 rounded-r-xl pr-4">
                    <h4 className="font-black text-emerald-700 mb-2">Luyện nói (20'):</h4>
                    <p className="font-medium text-theme-dark">Sử dụng sơ đồ học tập (KB 2, mục 6). Thảo luận: "Welcher Schultyp passt zu Simon? Tại sao?"</p>
                </div>
                <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50 rounded-r-xl pr-4">
                    <h4 className="font-black text-amber-700 mb-2">Ôn tập Buổi 1 (10'):</h4>
                    <p className="font-medium text-theme-dark">Hệ thống lại các từ vựng trường học & cấu trúc động từ cuối câu.</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50 rounded-r-xl pr-4">
                    <h4 className="font-black text-indigo-700 mb-2">Giao bài tập (5'):</h4>
                    <p className="font-medium text-theme-dark">AB trang 5, mục 1 & 2.</p>
                </div>
                <div className="border-l-4 border-rose-500 pl-4 py-2 bg-rose-50 rounded-r-xl pr-4">
                    <h4 className="font-black text-rose-700 mb-2">Video (10'):</h4>
                    <p className="font-medium text-theme-dark">Tóm tắt ngữ pháp Nominativ Relativsatz.</p>
                </div>
             </div>
          </div>
        );
      case 9:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto">BUỔI 2</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Tiết 5: Khởi động Buổi 2</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto w-full space-y-8 bg-white border-2 border-theme-secondary/20">
               <div className="space-y-6 text-left">
                  <div className="bg-amber-50 p-6 rounded-2xl border-2 border-amber-200 shadow-sm flex gap-4">
                      <Gamepad2 className="text-amber-500 w-10 h-10 shrink-0"/>
                      <div>
                        <h4 className="font-black text-amber-700 mb-2 text-lg">Warm-up (5'):</h4>
                        <p className="font-medium text-theme-dark">Trắc nghiệm nhanh ôn tập các cụm từ vựng về hệ thống giáo dục Đức ở Lektion 23.</p>
                      </div>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-2xl border-2 border-indigo-200 shadow-sm flex gap-4">
                      <FileText className="text-indigo-500 w-10 h-10 shrink-0"/>
                      <div>
                        <h4 className="font-black text-indigo-700 mb-2 text-lg">Ôn Tập Relativsatz Nominativ (10'):</h4>
                        <p className="font-medium text-theme-dark">Sửa bài tập về nhà trong AB. Đặt 2 câu miêu tả đồ vật trong lớp học.</p>
                      </div>
                  </div>
               </div>
            </div>
          </div>
        );
      case 10:
        return (
           <div className="flex gap-8 items-center h-full flex-col lg:flex-row">
            <div className="flex-1 space-y-6 w-full">
              <h2 className="text-4xl font-display font-black text-theme-dark">Nghe hiểu (25')</h2>
              <div className="bg-theme-cream p-8 rounded-3xl border-2 border-theme-primary/10 shadow-lg space-y-6">
                 <h3 className="text-xl font-black text-theme-primary bg-white p-3 rounded-xl inline-block">Sự hài lòng trong công việc</h3>
                 <p className="text-theme-dark/80 leading-relaxed font-medium text-lg">
                    Phân tích 3 nhân vật (KB trang 3, mục 5a).
                 </p>
                 <div className="bg-white p-6 rounded-2xl space-y-4">
                    <h4 className="font-black text-theme-dark">Hoạt động:</h4>
                    <p className="font-medium text-theme-dark/70">
                       Nghe file 2.29-31 và tích chọn mức độ hài lòng của mỗi nhân vật: <span className="text-emerald-500 font-bold">(Vui)</span>, <span className="text-amber-500 font-bold">(Bình thường)</span>, <span className="text-rose-500 font-bold">(Buồn)</span>.
                    </p>
                 </div>
              </div>
            </div>
            <div className="flex-1 w-full rounded-[32px] overflow-hidden relative shadow-xl min-h-[300px] lg:min-h-[400px] bg-theme-cream flex items-center justify-center border-4 border-white">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop" alt="Job satisfaction" className="w-full h-full object-cover" />
            </div>
          </div>
        );
      case 11:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Tiết 6: Nghe hiểu & Thảo luận</h2>
            <div className="slide-card p-10 max-w-4xl mx-auto w-full space-y-8 bg-theme-cream border-2 border-theme-dark/10">
               <div className="bg-white border-2 border-theme-dark/5 p-8 rounded-3xl text-left shadow-sm">
                  <h4 className="font-black text-theme-primary text-2xl flex items-center gap-3 mb-6">
                     <CheckSquare className="text-theme-primary w-8 h-8"/> Nghe hiểu (10')
                  </h4>
                  <p className="font-bold text-theme-dark/70 text-lg leading-relaxed bg-amber-50 p-6 rounded-2xl">
                      Nghe lại file 2.29-31 và hoàn thành bài tập 5b (KB 129): <br/>
                      Điền từ vào chỗ trống: "Damit bin ich super zufrieden", "der Job ist nicht toll, aber okay", "Ich habe wirklich genug", "So macht Arbeiten Spaß."
                  </p>
               </div>
               
               <div className="bg-theme-secondary/10 border-2 border-theme-secondary/20 p-8 rounded-3xl text-left shadow-lg">
                  <h4 className="font-black text-theme-secondary text-2xl flex items-center gap-3 mb-6">
                     <Globe className="text-theme-secondary w-8 h-8"/> Phỏng vấn (15')
                  </h4>
                  <p className="font-medium text-theme-dark mb-4 text-lg bg-white p-6 rounded-2xl">
                      Làm việc theo cặp: Phỏng vấn bạn học về công việc/học tập theo bảng bài 5c (KB 129). <br/>
                      Sử dụng các mẫu câu: "Bist du mit ... zufrieden?", "Warum (nicht)?", "Ja, ich bin sehr zufrieden", "Na ja, es geht", "Nein, überhaupt nicht".
                  </p>
               </div>
            </div>
          </div>
        );
      case 12:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center mb-6">Tiết 7: Relativsatz (Akkusativ)</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="slide-card p-8 bg-amber-50 border-2 border-amber-200 space-y-6">
                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
                    <FileText size={32}/>
                </div>
                <h4 className="font-black text-amber-700 text-2xl">Nhận diện & Giải thích (15')</h4>
                <div className="font-medium text-theme-dark bg-white p-4 rounded-xl shadow-sm text-left">
                   <p className="mb-2 italic">"Das ist der Job, <strong className="text-rose-500">den</strong> ich mag."</p>
                   <p>Mệnh đề quan hệ cách nhận (Akkusativ).<br/>
                   Thay đổi duy nhất: <strong className="text-rose-500">der &rarr; den</strong>.<br/>
                   Các ngôi còn lại (das, die, die) giữ nguyên như Nominativ.</p>
                   <p className="mt-2 text-sm text-theme-dark/60">Tham khảo bài 4a bảng Akkusativ (KB 129).</p>
                </div>
              </div>
              <div className="slide-card p-8 bg-emerald-50 border-2 border-emerald-200 space-y-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <MessageSquare size={32}/>
                </div>
                <h4 className="font-black text-emerald-700 text-2xl">Thực hành (10')</h4>
                <p className="font-medium text-theme-dark bg-white p-4 rounded-xl shadow-sm">Hoàn thành bảng chia đại từ quan hệ ở Akkusativ trong bài 4a. So sánh sự khác nhau giữa Nominativ và Akkusativ với bạn cùng bàn.</p>
              </div>
            </div>
          </div>
        );
      case 13:
         return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Ôn tập hệ thống (Khác)</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-6 w-full">
               <div className="slide-card p-8 space-y-6 border-t-8 border-t-amber-500 bg-white shadow-xl">
                  <div className="flex justify-between items-center bg-amber-50 p-4 rounded-2xl">
                     <h4 className="font-black text-amber-700 text-xl flex items-center gap-2">Phỏng vấn (20')</h4>
                     <Play className="text-amber-500 w-8 h-8"/>
                  </div>
                  <p className="font-medium text-lg text-theme-dark/70 border-l-4 border-amber-200 pl-4">
                      Phỏng vấn bạn học về sự hài lòng trong công việc/học tập theo bảng ở KB trang 128.
                  </p>
               </div>
               
               <div className="slide-card p-8 space-y-6 border-t-8 border-t-indigo-500 bg-white shadow-xl">
                  <div className="flex justify-between items-center bg-indigo-50 p-4 rounded-2xl">
                     <h4 className="font-black text-indigo-700 text-xl flex items-center gap-2">Viết & Nói (25')</h4>
                     <Briefcase className="text-indigo-500 w-8 h-8"/>
                  </div>
                  <div className="font-medium text-sm md:text-base text-theme-dark/70 space-y-3 pl-2">
                      <p>Nhóm 4 người:</p>
                      <p className="bg-indigo-50 p-4 rounded-xl italic font-bold text-indigo-900 border border-indigo-100">
                          Sử dụng các hình ảnh ở KB 130 và các từ vựng nghề nghiệp để dự đoán xem công việc lý tưởng của bạn cùng bàn là gì.
                      </p>
                  </div>
               </div>
            </div>
          </div>
        );
      case 14:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <h2 className="text-4xl font-display font-black text-theme-dark">Tiết 8: Ôn Buổi 2 & Test Tổng Kết</h2>
             <div className="slide-card p-10 max-w-4xl mx-auto w-full space-y-8 bg-theme-cream border-2 border-theme-dark/10">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-left space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-theme-dark/5">
                       <h4 className="font-black text-theme-secondary text-xl border-b-2 border-theme-secondary/20 pb-2">1. Ôn Mẫu Câu (10')</h4>
                       <ul className="font-bold text-theme-dark/80 list-disc pl-5 space-y-2">
                          <li>zufrieden sein mit</li>
                          <li>sich bewerben um</li>
                          <li>kündigen</li>
                          <li>Gleitzeit haben</li>
                       </ul>
                    </div>
                    
                    <div className="text-left space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-theme-dark/5">
                       <h4 className="font-black text-rose-600 text-xl border-b-2 border-rose-500/20 pb-2">2. Test Lektion 23 (20')</h4>
                       <ul className="font-medium text-theme-dark/80 list-decimal pl-5 space-y-2">
                          <li>Phần 1: Nghề nghiệp & Hệ thống trường học.</li>
                          <li>Phần 2: Mệnh đề quan hệ Relativsatz (Nominativ & Akkusativ).</li>
                          <li>Phần 3: Đọc hiểu văn bản.</li>
                       </ul>
                    </div>
                </div>
                
                <div className="text-left space-y-4 bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
                   <h4 className="font-black text-emerald-700 text-xl flex items-center gap-2"><CheckCircle2/> Chữa Test & Giao bài</h4>
                   <p className="font-bold text-emerald-900">
                      Chữa bài Test. Hoàn thành phần bài tập Lektion 23 trong Arbeitsbuch (AB).
                   </p>
                </div>
             </div>
          </div>
        );
      case 15:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform -rotate-1 hover:rotate-1 transition-transform max-w-xl mx-auto cursor-pointer" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-10 -right-8 text-6xl animate-pulse" style={{animationDelay: '0.2s'}}>🎓</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 23 <br/> Hoàn Thành!
                </h2>
                <div className="w-16 h-2 bg-theme-primary mx-auto rounded-full mb-6"></div>
                <div className="bg-theme-secondary/10 inline-block px-6 py-4 rounded-xl border-2 border-dashed border-theme-secondary space-y-2">
                   <p className="font-bold text-theme-secondary uppercase tracking-widest text-sm">
                      Video tổng kết Lektion (5 phút)
                   </p>
                   <p className="text-xs text-theme-dark/60 font-medium">Bạn đã có thể dùng Relativsatz để mô tả công việc mơ ước!</p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-6 py-3 bg-theme-dark text-white rounded-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2">
                        <Gamepad2 size={16}/> Game Rätsel
                    </button>
                    <button className="px-6 py-3 bg-amber-500 text-white rounded-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2">
                        <Gamepad2 size={16}/> Kahoot Review
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
      <div className="relative overflow-hidden h-[75vh] min-h-[550px] md:h-[650px] flex flex-col bg-zinc-100 rounded-[2.5rem] shadow-2xl border-4 border-white">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-1000 z-0">
           <div className={`absolute inset-0 w-full h-full transition-colors duration-1000 ${bgConfig.bgColor || 'bg-white'}`} />
           {bgConfig.bgImage && (
               <img src={bgConfig.bgImage} className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-1000" />
           )}
        </div>
        
        {/* Progress bar */}
        <div className="absolute top-0 left-0 h-2 bg-theme-secondary transition-all duration-500 ease-out z-20 shadow-sm" style={{ width: currentSlide === -1 ? '0%' : `${((currentSlide + 1) / totalSlides) * 100}%` }} />
        
        {/* Content */}
        <div className="flex-1 p-2 md:p-8 relative z-10 overflow-y-auto custom-scrollbar overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-max h-full"
            >
              {renderSlide()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        {currentSlide === -1 ? (
          <div className="p-4 flex justify-center border-t border-theme-dark/5 bg-theme-cream/50 z-10 text-[10px] md:text-xs font-bold text-theme-dark/50 tracking-widest uppercase">
            Sơ đồ tổng quan Lektion 23
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
              <button onClick={() => setCurrentSlide(-1)} className="text-[10px] text-theme-secondary font-bold hover:underline uppercase tracking-widest hidden sm:block">
                Xem Lộ Trình
              </button>
            </div>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1 && currentSlide !== 15}
              className="px-4 md:px-6 py-2 md:py-3 bg-theme-secondary text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-theme-secondary/20 hover:bg-theme-dark transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
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
