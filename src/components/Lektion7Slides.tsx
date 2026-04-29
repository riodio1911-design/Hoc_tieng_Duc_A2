import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, CheckCircle2, Dumbbell, Calendar, HeartPulse, Clock, FileText, Eye, BookOpen } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80' },
  0: { bgColor: 'bg-theme-dark' }, 
  1: { bgColor: 'bg-emerald-50' },
  2: { bgColor: 'bg-teal-50' },
  3: { bgColor: 'bg-cyan-50' },
  4: { bgColor: 'bg-indigo-50' },
  5: { bgColor: 'bg-violet-50' },
  6: { bgColor: 'bg-fuchsia-50' },
  7: { bgColor: 'bg-rose-50' },
  8: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80' }
};

export default function Lektion7Slides({ playAudio, playingId, onBack }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const [activeSlideTab, setActiveSlideTab] = useState<'roadmap'|'downloads'>('roadmap');
  const totalSlides = 9; 

  const nextSlide = () => {
    if (currentSlide === totalSlides - 1) {
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
              <p className="font-bold text-theme-dark/60">Hành trình 8 tiết học chuyên sâu</p>
            </div>
            
            <div className="flex justify-center mb-4">
<div className="bg-theme-cream/50 p-1.5 rounded-2xl inline-flex shadow-inner">
<button onClick={() => setActiveSlideTab('roadmap')} className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSlideTab === 'roadmap' || !activeSlideTab ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}>Bản đồ lộ trình</button>
<button disabled className="px-6 py-2 rounded-xl font-bold text-sm text-theme-dark/30 cursor-not-allowed" title="Tính năng này đang được cập nhật">Tải các bài giảng</button>
</div>
</div>
{activeSlideTab === 'roadmap' ? (
<div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-emerald-50/50 p-6 rounded-3xl border-2 border-emerald-100 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-emerald-600 mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: Thể thao & Tiền tố thời gian
                </h3>
                 <div className="space-y-4 flex-1">
                  <button 
                    onClick={() => setCurrentSlide(1)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-emerald-500 shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark group-hover:text-emerald-600 transition-colors text-lg">Tiết 1: Giới thiệu Lektion 7</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Video & Từ vựng Thể thao</p>
                    </div>
                  </button>
                   {[
                    {title: 'Tiết 2: Ngữ pháp: Trạng từ thời gian', slide: 2},
                    {title: 'Tiết 3: Giới từ chỉ thời gian', slide: 3},
                    {title: 'Tiết 4: Tổng kết Buổi 1 & Luyện nghe', slide: 4}
                  ].map((item, i) => (
                    <button 
                      key={i}
                      onClick={() => setCurrentSlide(item.slide)}
                      className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-emerald-100/50 shadow-sm group"
                    >
                      <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 font-black">
                        {i + 2}
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-theme-dark group-hover:text-emerald-600 transition-colors">{item.title}</h4>
                      </div>
                    </button>
                  ))}
                 </div>
              </div>

              {/* Buổi 2 */}
              <div className="bg-indigo-50/50 p-6 rounded-3xl border-2 border-indigo-100 relative overflow-hidden flex flex-col">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 rounded-bl-full -z-10" />
                 <h3 className="text-xl font-black text-indigo-600 mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm">2</div>
                  BUỔI 2: Đưa ra lời khuyên & Lối sống
                </h3>
               <div className="space-y-4">
                  {[
                    {title: "Tiết 5: Konjunktiv II (könnten, sollten)", slide: 5},
                    {title: "Tiết 6: Đưa ra lời khuyên (Ratschläge)", slide: 6},
                    {title: "Tiết 7: Vượt qua 'Con quỷ lười biếng'", slide: 7},
                    {title: "Tiết 8: Ôn Buổi 2 & Test Tổng kết", slide: 8}
                  ].map((item, i) => (
                      <button 
                         key={i}
                         onClick={() => setCurrentSlide(item.slide)}
                         className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-indigo-100/50 shadow-sm group"
                      >
                         <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0 font-black">
                            {i + 5}
                         </div>
                         <div className="text-left">
                            <h4 className="font-bold text-theme-dark group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                         </div>
                      </button>
                  ))}
               </div>
              </div></div>
) : (
<div className="flex flex-col items-center justify-center space-y-6 flex-1 bg-white p-10 rounded-[32px] border border-theme-primary/10 shadow-xl shadow-theme-dark/5">
<div className="w-20 h-20 bg-theme-primary/10 text-theme-primary rounded-full flex items-center justify-center">
<BookOpen size={40} />
</div>
<h3 className="text-2xl font-black text-theme-dark">Tài liệu Bài giảng 7</h3>
<p className="text-theme-dark/70 font-medium text-center max-w-md">Bạn có thể tải trực tiếp file PDF bài giảng và bài tập Lektion 7 dưới đây:</p>
<div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl mt-4">
<a href="/Leitfaden-L7-Teil1.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-primary to-blue-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-theme-primary w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L7</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 1</span></div>
<div className="flex items-center gap-2 mt-2 bg-theme-primary/10 text-theme-primary px-4 py-2 rounded-full font-bold text-sm"><Eye size={16} /> Xem PDF</div>
</a>
<a href="/Leitfaden-L7-Teil2.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-emerald-500 w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L7</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 2</span></div>
<div className="flex items-center gap-2 mt-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full font-bold text-sm"><Eye size={16} /> Xem PDF</div>
</a>
</div>
</div>
            )}
          </div>
        );
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8 max-w-4xl mx-auto px-4">
             <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20">
               <Dumbbell className="w-12 h-12 text-white" />
             </div>
             <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-tight">
                   Lektion 7<br/>
                   <span className="text-emerald-400">Wir könnten montags joggen gehen</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed">
                   Khám phá cách nói về sức khỏe, các môn thể thao và cách đưa ra lời khuyên với Konjunktiv II.
                </p>
             </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 1</span>
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
               <HeartPulse size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Thể Thao & Sức Khỏe</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
               {[
                 { w: 'das Fitnessstudio', t: 'phòng gym' },
                 { w: 'abnehmen', t: 'giảm cân' },
                 { w: 'trainieren', t: 'tập luyện' },
                 { w: 'regelmäßig', t: 'thường xuyên' },
                 { w: 'die Gesundheit', t: 'sức khỏe' },
                 { w: 'fit sein', t: 'cơ thể săn chắc' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-6 text-center space-y-4 hover:-translate-y-1 transition-transform border border-emerald-200 bg-white rounded-3xl shadow-sm">
                   <button 
                     onClick={() => playAudio(item.w, `l7-v1-${i}`, 'de-DE')}
                     className="w-12 h-12 bg-emerald-100 rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     {playingId === `l7-v1-${i}` ? <CheckCircle2 className="text-emerald-600 w-5 h-5" /> : <Play className="text-emerald-600 w-5 h-5 ml-1" />}
                   </button>
                   <div>
                     <h4 className="font-black text-lg text-theme-dark mb-1">{item.w}</h4>
                     <p className="font-bold border-t-2 border-emerald-50 pt-2 text-sm text-theme-dark/60">{item.t}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-teal-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 2</span>
            <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
               <Calendar size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Trạng Từ Chỉ Thời Gian (Lặp Lại)</h2>
            <div className="bg-white p-8 rounded-3xl border-2 border-teal-200 mt-8 shadow-sm text-center">
               <h3 className="font-black text-teal-600 text-2xl mb-4">Danh từ {'->'} Trạng từ (-s)</h3>
               <p className="text-theme-dark/70 font-medium text-lg leading-relaxed mb-8">
                 Dùng để chỉ thói quen lặp lại. Viết thường chữ cái đầu, thêm đuôi <b>-s</b> vào danh từ chỉ thời gian.
               </p>
               <div className="grid grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                  <div className="bg-teal-50 p-4 rounded-xl border border-teal-100 font-bold text-theme-dark">der Montag {'->'} <span className="text-teal-600">montags</span> (mỗi thứ 2)</div>
                  <div className="bg-teal-50 p-4 rounded-xl border border-teal-100 font-bold text-theme-dark">der Abend {'->'} <span className="text-teal-600">abends</span> (mỗi tối)</div>
               </div>
               <p className="mt-8 text-xl font-bold italic text-teal-800 bg-teal-50 py-3 rounded-2xl">
                 "Ich gehe jeden Montag joggen." = "Ich gehe <span className="text-teal-600">montags</span> joggen."
               </p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-cyan-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 3</span>
            <div className="w-20 h-20 bg-cyan-100 text-cyan-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
               <Clock size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Giới Từ Chỉ Khoảng Thời Gian</h2>
            <div className="grid grid-cols-2 gap-6 mt-8">
               <div className="bg-cyan-50 rounded-3xl p-6 border-2 border-cyan-200">
                  <h3 className="text-xl font-black text-cyan-700 mb-2">zwischen (+ Dativ)</h3>
                  <p className="font-bold text-theme-dark">Giữa ... và ...</p>
                  <p className="text-sm italic mt-2 text-cyan-800">"Zwischen 7.00 und 7.15 Uhr"</p>
               </div>
               <div className="bg-teal-50 rounded-3xl p-6 border-2 border-teal-200">
                  <h3 className="text-xl font-black text-teal-700 mb-2">seit (+ Dativ)</h3>
                  <p className="font-bold text-theme-dark">Từ ... (đến nay)</p>
                  <p className="text-sm italic mt-2 text-teal-800">"Seit vier Monaten"</p>
               </div>
               <div className="bg-sky-50 rounded-3xl p-6 border-2 border-sky-200">
                  <h3 className="text-xl font-black text-sky-700 mb-2">von ... an (+ Dativ)</h3>
                  <p className="font-bold text-theme-dark">Từ (tương lai/hiện tại)</p>
                  <p className="text-sm italic mt-2 text-sky-800">"Von morgen an"</p>
               </div>
               <div className="bg-indigo-50 rounded-3xl p-6 border-2 border-indigo-200">
                  <h3 className="text-xl font-black text-indigo-700 mb-2">über (+ Akkusativ)</h3>
                  <p className="font-bold text-theme-dark">Hơn ... (lượng thời gian/cân nặng)</p>
                  <p className="text-sm italic mt-2 text-indigo-800">"Über zwei Stunden"</p>
               </div>
            </div>
          </div>
        );
      case 4:
         return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-indigo-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 4</span>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Tổng kết Buổi 1 & Luyện nghe</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-3xl border-2 border-indigo-100 shadow-sm text-center space-y-4">
                <h3 className="font-black text-indigo-600 text-lg">Phần 1: Luyện nghe</h3>
                <p className="text-theme-dark/70 font-medium">Lắng nghe hội thoại và điền các mốc thời gian, giới từ tương ứng trong KB.</p>
                <div className="flex justify-center mt-2">
                  <Play className="text-indigo-400 w-8 h-8" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl border-2 border-indigo-100 shadow-sm text-center space-y-4">
                <h3 className="font-black text-indigo-600 text-lg">Phần 2: Bài tập về nhà</h3>
                <p className="text-theme-dark/70 font-medium">Hoàn thành bài tập về Temporale Präpositionen trong sách bài tập (AB).</p>
                <div className="flex justify-center mt-2">
                  <div className="text-indigo-400 font-bold text-3xl">AB</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-violet-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 5</span>
            <div className="w-20 h-20 bg-violet-100 text-violet-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
               <FileText size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Konjunktiv II: könnte & sollte</h2>
            <div className="bg-white p-8 rounded-3xl border-2 border-violet-200 mt-8 shadow-sm">
               <p className="text-center font-bold text-theme-dark/80 mb-6">Sử dụng để đưa ra gợi ý, lời khuyên lịch sự.</p>
               <table className="w-full text-left text-lg">
                  <thead>
                     <tr className="text-violet-700">
                        <th className="pb-4 border-b border-violet-100">Pronomen</th>
                        <th className="pb-4 border-b border-violet-100">können {'->'} könnte</th>
                        <th className="pb-4 border-b border-violet-100">sollen {'->'} sollte</th>
                     </tr>
                  </thead>
                  <tbody className="font-bold text-theme-dark">
                     <tr><td className="py-2">ich</td><td>könnte</td><td>sollte</td></tr>
                     <tr><td className="py-2 bg-violet-50 rounded-l-xl pl-2">du</td><td className="bg-violet-50">könntest</td><td className="bg-violet-50 rounded-r-xl">solltest</td></tr>
                     <tr><td className="py-2">er/sie/es</td><td>könnte</td><td>sollte</td></tr>
                     <tr><td className="py-2">wir/Sie</td><td>könnten</td><td>sollten</td></tr>
                  </tbody>
               </table>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-fuchsia-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 6</span>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Đưa Ra Lời Khuyên (Ratschläge)</h2>
            <div className="grid gap-6 mt-8">
               <div className="bg-fuchsia-50 rounded-3xl p-6 border-2 border-fuchsia-200 flex items-center gap-4">
                  <div className="w-12 h-12 bg-fuchsia-200 rounded-full flex items-center justify-center font-black text-fuchsia-700 shrink-0">1</div>
                  <p className="font-bold text-lg text-theme-dark"><span className="text-fuchsia-600">Du solltest</span> jeden Tag eine halbe Stunde laufen.</p>
               </div>
               <div className="bg-indigo-50 rounded-3xl p-6 border-2 border-indigo-200 flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center font-black text-indigo-700 shrink-0">2</div>
                  <p className="font-bold text-lg text-theme-dark"><span className="text-indigo-600">Du könntest</span> aber auch Rad fahren.</p>
               </div>
               <div className="bg-rose-50 rounded-3xl p-6 border-2 border-rose-200 flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center font-black text-rose-700 shrink-0">3</div>
                  <p className="font-bold text-lg text-theme-dark"><span className="text-rose-600">An deiner Stelle würde ich</span> weniger Kaffee trinken.</p>
               </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-rose-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 7</span>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Chiến Thắng "Con Quỷ Lười Biếng"</h2>
            <div className="bg-white p-8 rounded-3xl border-2 border-rose-200 mt-8 shadow-sm text-center">
               <h3 className="font-black text-rose-600 text-2xl mb-4">"Der innere Schweinehund"</h3>
               <p className="text-theme-dark/70 font-medium text-lg leading-relaxed mb-6">
                 Đọc về những nỗ lực thay đổi thói quen. Thảo luận về những việc bạn hay trì hoãn (ví dụ: tập thể dục, rửa chén).
               </p>
               <div className="p-4 bg-rose-50 rounded-2xl text-rose-800 font-bold border border-rose-100 flex flex-col gap-2">
                 <span>"Ich würde gern mehr Fahrrad fahren. Das macht fit."</span>
                 <span>"Ja, das stimmt. Ich fahre jeden Tag."</span>
               </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform -rotate-1 hover:rotate-1 transition-transform max-w-xl mx-auto cursor-pointer rounded-[32px]" onClick={() => setCurrentSlide(-1)}>
               <h2 className="text-5xl font-display font-black text-theme-dark mb-4">Glückwunsch!</h2>
               <p className="text-xl font-bold text-theme-dark/60">Bạn đã hoàn thành Lektion 7.</p>
               <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full border-4 border-theme-dark shadow-[4px_4px_0_0_#27272a] flex items-center justify-center">
                 <span className="font-black text-xl">!</span>
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
        <div className="absolute top-0 left-0 h-2 bg-emerald-500 transition-all duration-500 ease-out z-20 shadow-sm" style={{ width: currentSlide === -1 ? '0%' : `${((currentSlide + 1) / totalSlides) * 100}%` }} />
        
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
          <div className="p-4 flex items-center justify-between border-t border-theme-dark/5 bg-white/50 z-10 backdrop-blur-sm">
            {onBack ? (
              <button
                onClick={onBack}
                className="px-4 md:px-6 py-2 md:py-3 rounded-[20px] font-black tracking-wide transition-all flex items-center gap-1 md:gap-2 bg-white border border-theme-dark/10 hover:bg-theme-dark/5 active:scale-95 text-theme-dark text-xs md:text-base shadow-sm"
              >
                <ChevronLeft size={18} className="md:w-5 md:h-5" /> <span className="hidden sm:inline">Trở lại</span>
              </button>
            ) : <div />}
            <div className="text-[10px] md:text-xs font-bold text-theme-dark/50 tracking-widest uppercase text-right">
              Sơ đồ Lektion 7
            </div>
          </div>
        ) : (
          <div className="p-4 md:p-6 flex items-center justify-between border-t border-theme-dark/5 bg-white/50 z-10 backdrop-blur-sm">
            <button
              onClick={currentSlide === 0 ? () => setCurrentSlide(-1) : prevSlide}
              className="px-4 md:px-6 py-2 md:py-3 rounded-[20px] font-black tracking-wide transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 hover:bg-theme-dark/5 active:scale-95 text-theme-dark text-xs md:text-base"
            >
              <ChevronLeft size={18} className="md:w-5 md:h-5" /> <span className="hidden sm:inline">{currentSlide === 0 ? 'Lộ trình' : 'Trước'}</span>
            </button>
            <div className="flex flex-col items-center gap-1 px-2">
              <span className="font-black text-theme-dark/30 tracking-widest text-xs md:text-sm">
                {currentSlide + 1} / {totalSlides - 1}
              </span>
              <button onClick={() => setCurrentSlide(-1)} className="text-[10px] text-emerald-500 flex items-center justify-center font-bold hover:underline uppercase tracking-widest p-1 mt-1 bg-emerald-500/10 rounded-lg sm:bg-transparent sm:mt-0 sm:p-0">
                Xem Lộ Trình
              </button>
            </div>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="px-4 md:px-6 py-2 md:py-3 bg-emerald-500 text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
            >
              <span className="hidden sm:inline">
                {currentSlide === totalSlides - 1 ? 'Đóng lại' : 'Tiếp'}
              </span> 
              <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
