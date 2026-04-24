import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, ShieldAlert, CheckCircle2, MessageSquare, Car, FileText, CheckSquare, Gamepad2, ArrowRight, Eye, BookOpen, Download } from 'lucide-react';
import AlibiGame from './AlibiGame';
import { L21_INTRO_SCRIPT } from '../constants';

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
  15: { bgColor: 'bg-emerald-50' },
  16: { bgColor: 'bg-white' },
  20: { bgImage: "https://images.unsplash.com/photo-1544716278-e513176f20b5?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-theme-primary/10' }
};

export default function Lektion21Slides({ playAudio, playingId }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const [activeSlideTab, setActiveSlideTab] = useState<'roadmap' | 'downloads'>('roadmap');
  const totalSlides = 26; 

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
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình / Tải Xuống</h2>
              <p className="font-bold text-theme-dark/60">Bài 21: Tội phạm, giấy tờ & ngữ pháp welch-/dies-, lassen</p>
            </div>
            
            <div className="flex justify-center mb-4">
              <div className="bg-theme-cream/50 p-1.5 rounded-2xl inline-flex shadow-inner">
                <button
                  onClick={() => setActiveSlideTab('roadmap')}
                  className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSlideTab === 'roadmap' || !activeSlideTab ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                >
                  Bản đồ lộ trình Lektion 21
                </button>
                <button
                  onClick={() => setActiveSlideTab('downloads')}
                  className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSlideTab === 'downloads' ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}
                >
                  Tải các bài giảng
                </button>
              </div>
            </div>

            {activeSlideTab === 'roadmap' ? (
            <div className="grid md:grid-cols-2 gap-8 w-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: TỘI PHẠM, GIẤY TỜ & ĐẠI TỪ CHỈ ĐỊNH
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
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 1: Einstieg + Ôn bài + Video</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Từ vựng giấy tờ</p>
                    </div>
                  </button>
                  {[
                    {title: "Tiết 2: Dialog 1 + Nghe hiểu", slide: 5},
                    {title: "Tiết 3: Grammatik 1 - welch- / dies-", slide: 9},
                    {title: "Tiết 4: Luyện nói + Ôn Buổi 1", slide: 11}
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
                  BUỔI 2: Phòng chống trộm & Động từ lassen
                </h3>
                <div className="space-y-4">
                   {[
                    {title: "Tiết 5: Einstieg Buổi 2", locked: false, onClick: () => setCurrentSlide(14)},
                    {title: "Tiết 6: Grammatik 2 - Động từ 'lassen'", locked: false, onClick: () => setCurrentSlide(17)},
                    {title: "Tiết 7: Integration - 4 kỹ năng", locked: false, onClick: () => setCurrentSlide(20)},
                    {title: "Tiết 8: Test & Video tổng kết", locked: false, onClick: () => setCurrentSlide(22)}
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
            ) : (
              <div className="flex flex-col items-center justify-center space-y-6 flex-1 bg-white p-10 rounded-[32px] border border-theme-primary/10 shadow-xl shadow-theme-dark/5">
                <h3 className="text-2xl font-black text-theme-dark">Tài liệu Bài giảng 21</h3>
                <p className="text-theme-dark/70 font-medium text-center max-w-md">
                  Bạn có thể tải trực tiếp file PDF bài giảng và bài tập Lektion 21 dưới đây:
                </p>
                <div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl mt-4">
                  <a href="/Leitfaden-L21-Teil1.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-primary to-blue-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
                      <FileText className="text-theme-primary w-8 h-8" />
                    </div>
                    <div className="text-center">
                      <span className="font-black text-theme-dark block text-lg">Bài Giảng L21</span>
                      <span className="text-xs font-bold text-theme-dark/50 uppercase">phần 1</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 bg-theme-primary/10 text-theme-primary px-4 py-2 rounded-full font-bold text-sm">
                      <Eye size={16} /> Xem PDF
                    </div>
                  </a>
                  
                  <a href="/Leitfaden-L21-Teil2.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
                      <FileText className="text-emerald-500 w-8 h-8" />
                    </div>
                    <div className="text-center">
                      <span className="font-black text-theme-dark block text-lg">Bài Giảng L21</span>
                      <span className="text-xs font-bold text-theme-dark/50 uppercase">phần 2</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full font-bold text-sm">
                      <Eye size={16} /> Xem PDF
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
        );
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80')] bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 21</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                Ja genau, den meine ich.
              </h1>
              <p className="text-xl text-white/80 font-bold">Chủ đề: Tội phạm, giấy tờ & ngữ pháp welch-/dies-, lassen</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Tiết 1: Einstieg + Ôn bài cũ (10')</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-8">
              <h3 className="text-2xl font-black text-theme-primary text-center">Q&A về các loại sách/phim yêu thích (L20)</h3>
              <div className="bg-white p-6 rounded-2xl text-center space-y-4 shadow-sm border border-theme-dark/10">
                <MessageSquare className="w-12 h-12 mx-auto text-theme-secondary" />
                <p className="text-2xl font-bold italic">"Welchen Film hast du zuletzt gesehen?"</p>
                <p className="text-theme-dark/60 font-medium">Bạn vừa xem bộ phim nào gần đây nhất?</p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Video giới thiệu (5')</h2>
            <div className="slide-card p-10 text-center space-y-6 bg-theme-cream border-2 border-theme-primary/10">
               <button 
                  onClick={() => playAudio(L21_INTRO_SCRIPT, 'l21-intro1', 'vi-VN')}
                  className="w-24 h-24 bg-theme-primary text-white mx-auto rounded-full flex items-center justify-center shadow-xl shadow-theme-primary/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'l21-intro1' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
                <div className="space-y-4">
                   <h3 className="text-xl font-bold text-theme-dark">Tình huống: Herr Abelein bị đập kính xe</h3>
                   <ul className="text-left max-w-md mx-auto space-y-2 font-medium text-theme-dark/80 list-disc pl-5">
                      <li>Học cách mô tả đồ vật và mô tả người</li>
                      <li>Dùng đại từ chỉ định</li>
                   </ul>
                </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex gap-8 items-center h-full">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-display font-black text-theme-dark">Einstieg (10')</h2>
              <div className="slide-card p-6 space-y-4">
                 <h3 className="text-2xl font-bold text-theme-primary">Phỏng đoán</h3>
                 <p className="text-xl font-medium text-theme-dark/80 italic">"Was ist hier passiert? Einbruch hay Autounfall?"</p>
                 <p className="text-sm text-theme-dark/60">(KB trang 1a) Quan sát ảnh Herr Abelein bên cạnh chiếc xe bị vỡ kính.</p>
              </div>
            </div>
            <div className="flex-1 rounded-[32px] overflow-hidden relative shadow-xl min-h-[400px]">
              <img 
                src="/Lektion 21_A2_Kurchbuch_p1.png" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&q=80";
                }}
                alt="Lektion 21 Buch Seite 1" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ vựng (20'): Các loại giấy tờ</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto w-full space-y-8 bg-white text-center">
              <p className="font-bold text-theme-dark/60 text-lg">Dokumente (KB trang 2/14)</p>
              <div className="flex flex-wrap gap-4 justify-center">
                 {['der Ausweis', 'das Bargeld', 'die EC-Karte', 'die Gesundheitskarte', 'der Führerschein'].map((w,i) => (
                    <button key={i} onClick={() => playAudio(w, `l21-v1-${i}`, 'de-DE')} className="px-6 py-3 bg-theme-cream hover:bg-theme-secondary hover:text-white rounded-xl font-bold border-2 border-theme-dark/5 transition-colors cursor-pointer text-theme-dark">
                      {w}
                    </button>
                 ))}
              </div>
              <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mt-6 text-left">
                <h4 className="font-black text-amber-700 flex items-center gap-2 mb-2"><Eye /> Game: "Was fehlt?"</h4>
                <p className="font-medium text-amber-900">Hoạt động: Giáo viên sẽ che hoặc ẩn bớt tên giấy tờ trên màn hình, học viên cần gọi tên xem loại giấy tờ nào vừa biến mất.</p>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Tiết 2: Dialog 1 + Nghe hiểu (Hörverstehen)</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-6 text-center">
              <h3 className="text-2xl font-black text-theme-primary">Pre-listening (5')</h3>
              <p className="font-medium text-theme-dark/80 text-lg">Xem 4 tấm ảnh nghi phạm (KB trang 2, mục 4c).</p>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Nghe ý chính (10')</h2>
            <div className="slide-card p-10 space-y-6 max-w-2xl mx-auto w-full border-4 border-white bg-theme-cream rounded-[32px]">
               <button 
                  onClick={() => playAudio('Wo ist Herr Abelein heute? Hat er den Täter gesehen? (File 2.23)', 'l21-nghe1', 'de-DE')}
                  className="w-24 h-24 bg-theme-primary text-white rounded-full mx-auto flex items-center justify-center shadow-xl shadow-theme-primary/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'l21-nghe1' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
                <div className="space-y-3 font-medium text-lg text-theme-dark/80">
                   <p><b>Câu hỏi (KB 4a):</b></p>
                   <ul className="text-left space-y-2 list-disc pl-5">
                      <li>Wo ist Herr Abelein?</li>
                      <li>Hat er den Täter gesehen?</li>
                   </ul>
                </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center items-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Nghe chi tiết (15')</h2>
            <div className="slide-card p-10 max-w-3xl w-full text-center space-y-6">
              <BookOpen className="w-12 h-12 text-theme-secondary mx-auto" />
              <p className="text-xl font-bold text-theme-dark">Làm bài nối thông tin (KB 4b)</p>
              <div className="text-left bg-theme-cream p-6 rounded-2xl border border-theme-dark/10 mt-6">
                <h4 className="font-black text-theme-dark mb-4 text-lg">Chú ý các chi tiết mô tả đặc điểm nhân dạng:</h4>
                <ul className="font-bold text-theme-dark/70 space-y-2 text-lg">
                  <li>• Hammer (cái búa)</li>
                  <li>• schmales Gesicht (khuôn mặt gầy)</li>
                  <li>• dunkle Haare (tóc đen)</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center items-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Shadowing (15')</h2>
            <div className="slide-card p-10 max-w-2xl w-full text-center space-y-8 bg-theme-primary/5">
              <p className="font-medium text-theme-dark/80 italic text-lg">Luyện đọc đoạn hội thoại nhận diện thủ phạm (KB 4c).</p>
              <div className="bg-white p-6 rounded-2xl border border-theme-dark/10">
                 <p className="text-2xl font-bold text-theme-dark mb-4">"Welcher denn? Der?"</p>
                 <p className="text-2xl font-bold text-theme-secondary">"Nein, dieser da."</p>
              </div>
               <button 
                  onClick={() => playAudio('Welcher denn? Der? Nein, dieser da.', 'l21-shadowing', 'de-DE')}
                  className="mt-4 px-8 py-3 bg-theme-primary text-white font-bold rounded-xl shadow-lg hover:opacity-90"
                >
                  Nghe lời thoại
                </button>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center items-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Tiết 3: Grammatik 1 - welch- / dies-</h2>
            <div className="slide-card p-10 max-w-3xl w-full text-center space-y-6">
               <h3 className="text-2xl font-black text-theme-secondary">Mục tiêu: Sử dụng đúng quán từ nghi vấn và đại từ chỉ định.</h3>
               <div className="text-left space-y-4">
                  <p className="font-bold text-theme-dark/80"><strong className="text-theme-dark">Nhận diện (10'):</strong> Từ đoạn hội thoại 4c, rút ra bảng chia đuôi cho welch-, dies-, der/den.</p>
                  <p className="font-bold text-theme-dark/80"><strong className="text-theme-dark">Giải thích (15'):</strong> Bảng Grammatik (KB trang 4).</p>
                  <div className="bg-emerald-50 p-4 border border-emerald-200 rounded-xl">
                      <p className="font-medium text-emerald-900">Nhấn mạnh: Trong khẩu ngữ (văn nói), người Đức rất hay dùng <b>der/das/die</b> thay cho <b>dieser/dieses/diese</b> !</p>
                  </div>
               </div>
            </div>
          </div>
        );
      case 10:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center items-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Bài tập & Mini speaking (20')</h2>
            <div className="grid md:grid-cols-2 gap-8 w-full">
               <div className="slide-card p-8 space-y-4">
                  <h3 className="font-black text-theme-primary text-xl"><BookOpen className="w-6 h-6 inline-block mb-1 mr-2"/>Bài tập (10')</h3>
                  <p className="font-medium text-theme-dark/80">Làm KB trang 9, mục 3.</p>
                  <p className="text-sm text-theme-dark/60">Nối câu hỏi và câu trả lời về thủ phạm.</p>
               </div>
               <div className="slide-card p-8 space-y-4">
                  <h3 className="font-black text-theme-accent text-xl"><MessageSquare className="w-6 h-6 inline-block mb-1 mr-2"/>Mini speaking (10')</h3>
                  <p className="font-medium text-theme-dark/80">Nhìn đồ vật trong lớp để đặt câu:</p>
                  <div className="bg-theme-cream p-4 border border-theme-dark/10 rounded-xl mt-4">
                     <p className="font-bold text-theme-dark">A: "Welchen Kuli meinst du?"</p>
                     <p className="font-bold text-theme-secondary mt-2">B: "Den da. / Diesen da."</p>
                  </div>
               </div>
            </div>
          </div>
        );
      case 11:
        return (
           <div className="h-full flex flex-col pt-6">
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-display font-black text-theme-dark">Tiết 4: Luyện nói (20')</h2>
              <p className="text-theme-dark/60 font-medium">Alibi-Spiel (KB trang 2, mục 5) - Đóng vai cảnh sát & nghi phạm</p>
            </div>
            <div className="flex-1 slide-card overflow-hidden w-full max-w-5xl mx-auto">
               <div className="h-full w-full overflow-y-auto custom-scrollbar p-2">
                 <AlibiGame onBack={() => {}} playAudio={playAudio} playingId={playingId} />
               </div>
            </div>
          </div>
        );
      case 12:
        return (
          <div className="space-y-6 flex flex-col h-full max-w-4xl mx-auto justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Ôn tập Buổi 1 & Giao bài tập (15')</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-6">
              <div className="space-y-3">
                 <h3 className="text-2xl font-black text-theme-primary">Ôn tập hệ thống (10')</h3>
                 <ul className="text-lg font-bold text-theme-dark/80 space-y-2 list-disc pl-5">
                    <li>Hệ thống lại từ vựng Dokumente</li>
                    <li>Cách phân loại và chia đuôi <i>welch-</i> ở 3 giống.</li>
                 </ul>
              </div>
              <div className="h-px bg-theme-dark/10 w-full my-6"></div>
              <div className="space-y-3">
                 <h3 className="text-2xl font-black text-theme-secondary">Giao bài tập (5')</h3>
                 <p className="text-lg font-bold text-theme-dark/80">Làm Arbeitsbuch (AB) trang 9, bài 1 & 2.</p>
              </div>
            </div>
          </div>
        );
      case 13:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Video tổng kết Buổi 1 (10')</h2>
            <div className="slide-card p-10 bg-theme-dark text-white space-y-8 rounded-[32px]">
               <button 
                  onClick={() => playAudio('Tổng kết: Câu chuyện của ông Abelein bị đập vỡ kính xe là một kinh nghiệm. Lưu ý các từ vựng chỉ giấy tờ tuỳ thân và đặc biệt là cách sử dụng đại từ để hỏi welch cũng như đại từ chỉ định diese/dieser trong giao tiếp hằng ngày.', 'l21-tongket1', 'vi-VN')}
                  className="w-24 h-24 bg-white text-theme-dark mx-auto rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform cursor-pointer"
                >
                  {playingId === 'l21-tongket1' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
                <div className="space-y-2">
                   <h3 className="text-xl font-bold">Giáo viên ảo tổng kết vụ án của Herr Abelein.</h3>
                   <p className="text-white/60">Ghi chú lại các từ khóa quan trọng trong câu chuyện.</p>
                </div>
            </div>
          </div>
        );
      case 14:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Tiết 5: Einstieg Buổi 2</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-6 border-4 border-emerald-100 bg-emerald-50">
               <h3 className="text-2xl font-black text-emerald-800">Warm-up (5'): Kim's Game</h3>
               <p className="font-bold text-emerald-900/70 text-lg">Trò chơi giúp kích hoạt lại từ vựng. Cùng nhớ lại các chi tiết của tên trộm từ buổi trước nhé!</p>
            </div>
            <div className="slide-card p-8 max-w-2xl mx-auto w-full mt-4 space-y-4 text-left border border-theme-dark/10">
               <h4 className="font-black text-theme-dark text-xl"><CheckSquare className="inline-block mb-1 mr-2"/> Ôn nhanh (10')</h4>
               <p className="font-medium text-theme-dark/80">Chữa bài tập AB về mô tả người.</p>
            </div>
          </div>
        );
      case 15:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Video giới thiệu Buổi 2 (5')</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-6">
               <button 
                  onClick={() => playAudio('Chào mừng bước sang buổi 2. Lần này chúng ta sẽ tìm hiểu các giải pháp phòng chống trộm cắp và làm quen với cấu trúc nhờ vả cùng động từ lassen.', 'l21-intro2', 'vi-VN')}
                  className="w-20 h-20 bg-theme-primary text-white mx-auto rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
                >
                  {playingId === 'l21-intro2' ? <CheckCircle2 size={32} /> : <Play size={32} className="ml-1" />}
                </button>
                <div className="space-y-4 mt-6">
                   <h3 className="text-xl font-bold text-theme-dark">Mục tiêu: Kích hoạt từ vựng an ninh nhà cửa & động từ "lassen".</h3>
                   <p className="font-medium text-theme-dark/60">Giới thiệu về các mẹo phòng chống trộm và cấu trúc nhờ vả.</p>
                </div>
            </div>
          </div>
        );
      case 16:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center items-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Lesen (25')</h2>
            <div className="slide-card p-10 max-w-3xl w-full space-y-6">
               <h3 className="text-2xl font-black text-theme-primary flex items-center gap-2"><FileText /> Flyer "10 Prima Tipps"</h3>
               <p className="text-sm font-bold text-theme-dark/50">(KB trang 3)</p>
               
               <div className="bg-theme-cream p-6 rounded-2xl border border-theme-dark/10 mt-6 space-y-4">
                  <h4 className="font-black text-theme-dark text-lg">Hoạt động Classify: Phân loại hành động</h4>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white p-4 rounded-xl shadow-sm text-center font-bold text-theme-dark">
                        Vor dem Einbruch <br/><span className="text-sm font-medium text-theme-dark/50">(Trước khi trộm)</span>
                     </div>
                     <div className="bg-white p-4 rounded-xl shadow-sm text-center font-bold text-theme-dark">
                        Nach dem Einbruch <br/><span className="text-sm font-medium text-theme-dark/50">(Sau khi trộm)</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        );
      case 17:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Tiết 6: Grammatik 2 - Động từ "lassen"</h2>
            <div className="slide-card p-10 max-w-3xl w-full space-y-8 bg-theme-cream border-2 border-theme-primary/10">
               <h3 className="text-xl font-bold text-theme-dark">Mục tiêu: Phân biệt tự làm và nhờ người khác làm.</h3>
               <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="bg-white p-6 rounded-2xl border border-theme-dark/10 shadow-sm space-y-2">
                     <p className="font-black text-rose-600 text-lg">"Ich leere"</p>
                     <p className="font-medium text-theme-dark/70 text-sm">Tự mình làm (VD: Tôi tự dọn hòm thư)</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-theme-dark/10 shadow-sm space-y-2">
                     <p className="font-black text-emerald-600 text-lg">"Ich lasse leeren"</p>
                     <p className="font-medium text-theme-dark/70 text-sm">Nhờ người khác làm (VD: Tôi nhờ người dọn hòm thư)</p>
                  </div>
               </div>
               <p className="text-sm font-bold text-theme-dark/50 mt-4">Nhận diện từ Tip 6 (KB trang 3)</p>
            </div>
          </div>
        );
      case 18:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Giải thích & Cấu trúc (15')</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-6 text-left bg-theme-primary/5">
               <p className="font-bold text-theme-dark/80 text-lg"><strong className="text-theme-dark">Cấu trúc:</strong> lassen + Infinitiv</p>
               <div className="bg-white p-6 rounded-2xl border border-theme-dark/10 space-y-3">
                  <h4 className="font-black text-theme-secondary">Chia động từ lassen (bất quy tắc):</h4>
                  <ul className="font-mono text-sm space-y-1 text-theme-dark">
                     <li>ich lasse</li>
                     <li className="text-rose-600 font-bold">du lässt</li>
                     <li className="text-rose-600 font-bold">er/sie/es lässt</li>
                     <li>wir lassen</li>
                     <li>ihr lasst</li>
                     <li>sie/Sie lassen</li>
                  </ul>
               </div>
            </div>
          </div>
        );
      case 19:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Bài tập & Speaking (20')</h2>
            <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
               <div className="slide-card p-8 space-y-4 bg-white">
                  <h3 className="font-black text-theme-primary text-xl">Bài tập (10')</h3>
                  <p className="font-medium text-theme-dark/80">Làm KB trang 11, mục 8.</p>
                  <p className="text-sm text-theme-dark/60 mt-2">Điền động từ <b>lassen</b> và các hành động:</p>
                  <ul className="text-sm font-bold text-theme-dark/70 list-disc pl-5">
                    <li>reparieren</li>
                    <li>putzen</li>
                    <li>schneiden</li>
                  </ul>
               </div>
               <div className="slide-card p-8 space-y-4 bg-white">
                  <h3 className="font-black text-theme-accent text-xl">Speaking (10')</h3>
                  <div className="bg-theme-cream p-4 border border-theme-dark/10 rounded-xl space-y-3 mt-2">
                     <p className="font-bold text-theme-dark">"Was lässt du machen?"</p>
                     <p className="text-sm font-medium text-theme-dark/70 italic">- Ich lasse meine Haare schneiden.<br/>- Ich lasse mein Fahrrad reparieren.</p>
                  </div>
               </div>
            </div>
          </div>
        );
      case 20:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Tiết 7: Integration - Kết hợp 4 kỹ năng</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-8">
              <h3 className="text-xl font-bold text-theme-dark text-center">Nghe + Nói (15'): Tauschringe</h3>
              <p className="font-medium text-theme-dark/60 text-center -mt-4">(Vòng tròn trao đổi dịch vụ - KB trang 11, mục 12)</p>
              
              <div className="bg-white p-6 rounded-2xl text-left border border-theme-dark/10 flex flex-col gap-4">
                 <h4 className="font-black text-theme-primary">Hoạt động đóng vai</h4>
                 <p className="font-bold text-theme-dark">Diễn đạt cách nhờ vả và đề nghị giúp đỡ:</p>
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <p className="font-medium text-theme-secondary">A: "Könntest du mir helfen?"</p>
                    <p className="font-medium text-theme-dark mt-2">B: "Ja klar, was brauchst du?"</p>
                    <p className="font-medium text-theme-secondary mt-2">A: "Ich lasse mein Fahrrad reparieren."</p>
                 </div>
              </div>
            </div>
          </div>
        );
      case 21:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl font-display font-black text-theme-dark">Viết & Thảo luận (30')</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 slide-card space-y-4">
                <h3 className="font-black text-theme-primary flex items-center gap-2"><FileText /> Viết (20')</h3>
                <p className="text-theme-dark font-medium text-sm">(KB trang 12, mục 1b)</p>
                <p className="text-theme-dark/80 font-bold">Viết Email kể lại một vụ trộm, chú ý dùng các từ nối đã học:</p>
                <div className="flex flex-wrap gap-2 mt-4 text-xs font-black">
                   <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-lg">Plötzlich</span>
                   <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-lg">Zum Glück</span>
                   <span className="px-3 py-1 bg-rose-100 text-rose-800 rounded-lg">Leider</span>
                </div>
              </div>
              <div className="p-8 slide-card space-y-4">
                <h3 className="font-black text-theme-secondary flex items-center gap-2"><MessageSquare /> Thảo luận (10')</h3>
                <p className="text-theme-dark/80 font-bold">Chia sẻ các mẹo giữ an toàn cá nhân dựa trên bài đọc 10 Prima Tipps.</p>
              </div>
            </div>
          </div>
        );
      case 22:
        return (
          <div className="space-y-6 flex flex-col h-full max-w-4xl mx-auto justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Tiết 8: Ôn Buổi 2 + Test + Video tổng kết Lektion</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-6">
              <h3 className="text-2xl font-black text-theme-primary">Ôn tập Buổi 2 (10')</h3>
              <p className="text-lg font-medium text-theme-dark/80">Hệ thống lại cách dùng <b>lassen</b> và các từ vựng chủ chốt về tội phạm (KB trang 14).</p>
               <button 
                  onClick={() => playAudio('Chúng ta hãy dành 10 phút để ôn tập hệ thống cấu trúc lassen và các từ vựng tội phạm chính nhé.', 'l21-on2', 'vi-VN')}
                  className="mt-4 w-16 h-16 bg-theme-primary text-white mx-auto rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                >
                  <Volume2 />
                </button>
            </div>
          </div>
        );
      case 23:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark">Test & Feedback (25')</h2>
            <div className="grid md:grid-cols-2 gap-8 w-full">
               <div className="slide-card p-8 space-y-4">
                  <h3 className="font-black text-rose-500 text-2xl uppercase tracking-wider">TEST (20')</h3>
                  <p className="font-medium text-theme-dark/80">Làm bài TEST (KB trang 13).</p>
                  <p className="text-sm text-theme-dark/60 mt-2">Tự chấm điểm theo các mục:</p>
                  <ul className="text-sm font-bold text-theme-dark/70 list-disc pl-5 text-left ml-6">
                    <li>Wörter</li>
                    <li>Strukturen</li>
                    <li>Kommunikation</li>
                  </ul>
               </div>
               <div className="slide-card p-8 space-y-4">
                  <h3 className="font-black text-emerald-600 text-xl">Feedback & Bài tập (5')</h3>
                  <p className="text-sm font-medium text-theme-dark/70 text-left">- Giải đáp các câu hỏi khó trong bài Test.</p>
                  <p className="text-sm font-medium text-theme-dark/70 text-left">- Nhắc nhở: Học thuộc cột "Lernwortschatz" trang 14.</p>
               </div>
            </div>
          </div>
        );
      case 24:
        return (
          <div className="space-y-6 flex flex-col h-full max-w-4xl mx-auto justify-center text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Video tổng kết Lektion 21 (5')</h2>
            <div className="slide-card p-10 bg-theme-dark text-white space-y-6 rounded-[32px]">
               <button 
                  onClick={() => playAudio('Chúc mừng các bạn đã hoàn thành Lektion 21. Chúng ta đã học cách mô tả sự việc, cách dùng welch, dies và cấu trúc lassen. Hãy ôn luyện thật kỹ để chuẩn bị sang Lektion 22 với chủ đề Carsharing nhé.', 'l21-tongket-final', 'vi-VN')}
                  className="w-24 h-24 bg-white text-theme-dark mx-auto rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
                >
                  {playingId === 'l21-tongket-final' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
                <div className="space-y-2">
                   <h3 className="text-xl font-bold">Giáo viên ảo tổng kết toàn bài</h3>
                   <ul className="text-white/80 font-medium text-sm space-y-1 list-none">
                     <li>✅ Mô tả sự việc trộm cắp/mất đồ</li>
                     <li>✅ Dùng welch- / dies-</li>
                     <li>✅ Động từ lassen</li>
                   </ul>
                   <p className="text-emerald-300 font-bold mt-4 pt-4 border-t border-white/20">👉 Xem trước Lektion 22 (Carsharing).</p>
                </div>
            </div>
          </div>
        );
      case 25:
         return (
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-center pb-12">
            <div className="w-32 h-32 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-200">
              <CheckCircle2 size={64} />
            </div>
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-display font-black text-theme-dark">Hoàn Thành Lektion 21</h2>
              <p className="text-xl font-bold text-theme-dark/60 uppercase tracking-widest">Ende gut, alles gut!</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const bgConfig = backgrounds[currentSlide] || { bgColor: 'bg-theme-cream' };

  return (
    <div className="max-w-6xl mx-auto py-4 md:py-8 w-full">
      <div className="relative overflow-hidden h-[75vh] min-h-[550px] md:h-[650px] flex flex-col bg-zinc-100 rounded-[2.5rem] shadow-2xl border-4 border-white">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-1000 z-0">
           <div className={`absolute inset-0 w-full h-full transition-colors duration-1000 ${bgConfig.bgColor || 'bg-white'}`} />
           {bgConfig.bgImage && (
               <img src={bgConfig.bgImage} className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-1000" alt="" />
           )}
        </div>
        
        {/* Progress bar */}
        <div className="absolute top-0 left-0 h-2 bg-theme-primary transition-all duration-500 ease-out z-20 shadow-sm" style={{ width: currentSlide === -1 ? '0%' : `${((currentSlide + 1) / totalSlides) * 100}%` }} />
        
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
            Sơ đồ tổng quan Lektion 21
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
              <button onClick={() => setCurrentSlide(-1)} className="text-[10px] text-theme-primary font-bold hover:underline uppercase tracking-widest hidden sm:block">
                Xem Lộ Trình
              </button>
            </div>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1 && currentSlide !== 25}
              className="px-4 md:px-6 py-2 md:py-3 bg-theme-primary text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-theme-primary/20 hover:bg-theme-dark transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
            >
              <span className="hidden sm:inline">{currentSlide === totalSlides - 1 ? 'Hoàn thành' : 'Tiếp'}</span> <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
