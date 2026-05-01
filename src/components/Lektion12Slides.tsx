import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, CheckCircle2, ShoppingCart, MessageSquare, Utensils, Heart, Info, Coffee, FileText, Eye, BookOpen } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white' },
  0: { bgColor: 'bg-rose-900' }, // Dark red/rose for food theme
  1: { bgColor: 'bg-amber-50' },
  2: { bgColor: 'bg-orange-50' },
  3: { bgColor: 'bg-emerald-50' },
  4: { bgColor: 'bg-teal-50' },
  5: { bgColor: 'bg-blue-50' },
  6: { bgColor: 'bg-indigo-50' },
  7: { bgColor: 'bg-violet-50' },
  8: { bgColor: 'bg-purple-50' },
  9: { bgColor: 'bg-rose-50' },
};

export default function Lektion12Slides({ playAudio, playingId, onBack }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const [activeSlideTab, setActiveSlideTab] = useState<'roadmap'|'downloads'>('roadmap');
  const totalSlides = 10;

  const nextSlide = () => {
    if (currentSlide === 4 || currentSlide === totalSlides - 1) {
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
              <p className="font-bold text-theme-dark/60">Liebe geht durch den Magen - Tình yêu đi qua dạ dày</p>
            </div>
            
            <div className="flex justify-center mb-4">
<div className="bg-theme-cream/50 p-1.5 rounded-2xl inline-flex shadow-inner">
<button onClick={() => setActiveSlideTab('roadmap')} className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSlideTab === 'roadmap' || !activeSlideTab ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}>Bản đồ lộ trình</button>
<button onClick={() => setActiveSlideTab('download')} className={`px-6 py-2 rounded-xl font-bold transition-all text-sm ${activeSlideTab === 'download' ? 'bg-white shadow-sm text-theme-primary' : 'text-theme-dark/40 hover:text-theme-dark/80'}`}>Tải các bài giảng</button>
</div>
</div>
{activeSlideTab === 'roadmap' ? (
<div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-orange-500/5 p-6 rounded-3xl border-2 border-orange-500/10 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-orange-600 mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: NẤU ĂN & CẤU TRÚC "WENN"
                </h3>
                <div className="space-y-4 flex-1">
                  <button 
                    onClick={() => setCurrentSlide(0)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-orange-600 shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark group-hover:text-orange-600 transition-colors text-lg">Tiết 1: Định hướng & Từ vựng</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Chủ đề Lebensmittel (Thực phẩm)</p>
                    </div>
                  </button>
                  <button 
                    onClick={() => setCurrentSlide(2)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-orange-600/50 shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark group-hover:text-orange-600 transition-colors text-lg">Tiết 2: Ngữ pháp "Wenn"</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Mệnh đề phụ chỉ điều kiện</p>
                    </div>
                  </button>
                  {[
                    {title: "Tiết 3: Kỹ năng Nghe (Thói quen ăn uống)", slide: 3},
                    {title: "Tiết 4: Tổng kết Buổi 1 & Luyện tập", slide: 4}
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
              <div className="bg-rose-500/5 p-6 rounded-3xl border-2 border-rose-500/10 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-rose-600 mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center text-sm">2</div>
                  BUỔI 2: NHÀ HÀNG & TỔNG HỢP LIÊN TỪ
                </h3>
                <div className="space-y-4 flex-1">
                   {[
                    {title: "Tiết 5: Mở rộng 'wenn'", onClick: () => setCurrentSlide(5)},
                    {title: "Tiết 6: Dự án Restaurantführer", onClick: () => setCurrentSlide(6)},
                    {title: "Tiết 7: Phân biệt dass, denn, und, wenn", onClick: () => setCurrentSlide(7)},
                    {title: "Tiết 8: Lektionstest & Tổng kết", onClick: () => setCurrentSlide(8)}
                  ].map((item, i) => (
                      <button 
                         key={i}
                         onClick={item.onClick}
                         className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-rose-600/50 shadow-sm group"
                      >
                         <div className="w-12 h-12 rounded-full bg-rose-600/10 text-rose-600 flex items-center justify-center shrink-0">
                           <Play className="w-5 h-5 ml-1" />
                         </div>
                         <div className="text-left flex-1">
                           <h4 className="font-black text-theme-dark group-hover:text-rose-600 transition-colors text-lg">{item.title}</h4>
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
<h3 className="text-2xl font-black text-theme-dark">Tài liệu Bài giảng 12</h3>
<p className="text-theme-dark/70 font-medium text-center max-w-md">Bạn có thể tải trực tiếp file PDF bài giảng và bài tập Lektion 12 dưới đây:</p>
<div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl mt-4">
<a href="/Leitfaden-L12-Teil1.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-theme-primary to-blue-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-theme-primary w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L12</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 1</span></div>
<div className="flex items-center gap-2 mt-2 bg-theme-primary/10 text-theme-primary px-4 py-2 rounded-full font-bold text-sm"><Eye size={16} /> Xem PDF</div>
</a>
<a href="/Leitfaden-L12-Teil2.pdf" target="_blank" rel="noopener noreferrer" className="bg-theme-cream/30 p-6 rounded-2xl flex flex-col items-center justify-center border border-theme-primary/20 hover:border-theme-primary hover:shadow-lg transition-all group gap-4 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-400 group-hover:h-full group-hover:opacity-10 transition-all"></div>
<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm"><FileText className="text-emerald-500 w-8 h-8" /></div>
<div className="text-center"><span className="font-black text-theme-dark block text-lg">Bài Giảng L12</span><span className="text-xs font-bold text-theme-dark/50 uppercase">phần 2</span></div>
<div className="flex items-center gap-2 mt-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full font-bold text-sm"><Eye size={16} /> Xem PDF</div>
</a>
</div>
</div>
            )}
          </div>
        );
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&h=800&fit=crop')] bg-cover bg-center rounded-[48px] relative overflow-hidden w-full">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-orange-500 text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 12</span>
              <h1 className="text-4xl md:text-5xl font-display font-black text-white leading-tight">
                Liebe geht durch <br/> den Magen
              </h1>
              <p className="text-xl text-white/80 font-bold">Chủ đề: Ẩm thực, Nấu ăn & Cấu trúc điều kiện</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Định Hướng Lektion 12</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-orange-500/10 space-y-8">
              <div className="flex justify-center">
                <button 
                  onClick={() => playAudio("Xin chào! Hôm nay chúng ta sẽ tìm hiểu chủ đề Ẩm thực. Thành ngữ 'Liebe geht durch den Magen' có nghĩa là 'Tình yêu đi qua dạ dày'. Các bạn sẽ học cách nói về thói quen ăn uống và cách sử dụng cấu trúc câu điều kiện với từ wenn.", 'L12-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-orange-500/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'L12-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-orange-600 text-lg">1. Mục Tiêu Ngôn Ngữ</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Nói về thói quen nấu ăn và ăn uống.</li>
                    <li>Sử dụng cấu trúc điều kiện <b>wenn</b>.</li>
                    <li>Bày tỏ sự ngạc nhiên và so sánh văn hóa ẩm thực.</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-rose-600 text-lg">2. Từ Vựng Trọng Tâm</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Lebensmittel (Thực phẩm): Fleisch, Gemüse, Rind...</li>
                    <li>Định lượng (Mengen): Hälfte, doppelt, genug...</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-orange-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 2</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Ngữ pháp: Liên từ "wenn" (Nếu, khi)</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto space-y-8 bg-orange-50 border-2 border-orange-100 text-left">
               <p className="text-xl font-bold text-theme-dark leading-relaxed">
                 Từ <b>wenn</b> dùng để chỉ điều kiện hoặc thời gian (nếu, khi nào).<br/>
                 Mệnh đề đi với wenn là mệnh đề phụ (Nebensatz), <b>động từ nằm ở cuối câu</b>.
               </p>
               <div className="grid sm:grid-cols-2 gap-6">
                 <div className="bg-white p-5 rounded-2xl border-l-4 border-orange-500 shadow-sm space-y-2">
                    <h4 className="font-black text-orange-600 mb-2 text-lg">Wenn đứng trước</h4>
                    <p className="text-sm font-medium text-theme-dark/70">Mệnh đề chính đứng sau, động từ chính lên đầu (ngay sau dấu phẩy).</p>
                    <p className="font-bold mt-2 text-orange-700 bg-orange-50 p-2 rounded">
                      <span className="font-black text-orange-600">Wenn</span> es warm <span className="underline">ist</span>,
                      <br/> <span className="underline">essen</span> wir meist Salat.
                    </p>
                 </div>
                 <div className="bg-white p-5 rounded-2xl border-l-4 border-teal-500 shadow-sm space-y-2">
                    <h4 className="font-black text-teal-600 mb-2 text-lg">Wenn đứng sau</h4>
                    <p className="text-sm font-medium text-theme-dark/70">Mệnh đề chính theo trật tự bình thường (S + V).</p>
                    <p className="font-bold mt-2 text-teal-800 bg-teal-50 p-2 rounded">
                      Wir <span className="underline">essen</span> meist Salat,
                      <br/> <span className="font-black text-teal-600">wenn</span> es warm <span className="underline">ist</span>.
                    </p>
                 </div>
               </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <span className="px-6 py-2 bg-orange-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 3</span>
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Giao tiếp: Thói quen ăn uống (Essgewohnheiten)</h2>
             <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto w-full">
                 <div className="slide-card p-6 border-b-4 border-orange-500 bg-white">
                    <Utensils className="text-orange-500 w-10 h-10 mb-4" />
                    <h4 className="font-black text-theme-dark text-lg mb-2">Hỏi về thói quen</h4>
                    <p className="font-bold text-theme-dark/70">"Issen Sie oft vegetarisch?" (Bạn có thường ăn chay không?)</p>
                    <p className="font-bold text-theme-dark/70 mt-2">"Was essen Sie zum Frühstück?" (Bạn ăn gì vào bữa sáng?)</p>
                 </div>
                 <div className="slide-card p-6 border-b-4 border-teal-500 bg-white">
                    <MessageSquare className="text-teal-500 w-10 h-10 mb-4" />
                    <h4 className="font-black text-theme-dark text-lg mb-2">Sử dụng Wenn</h4>
                    <p className="font-bold text-theme-dark/70">"Wenn ich Zeit habe, koche ich oft." (Khi có thời gian, tôi thường nấu ăn.)</p>
                    <p className="font-bold text-theme-dark/70 mt-2">"Wenn ich sparen möchte,..." (Nếu tôi muốn tiết kiệm,...)</p>
                 </div>
             </div>
          </div>
        );
      case 4:
        return (
          <div className="flex gap-8 items-center h-full flex-col md:flex-row">
            <div className="flex-1 space-y-6 w-full text-center md:text-left">
              <span className="px-6 py-2 bg-orange-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mb-4">TIẾT 4</span>
              <h2 className="text-4xl font-display font-black text-theme-dark">Tổng kết Buổi 1 & Luyện tập</h2>
              <div className="space-y-4 slide-card p-6 border-2 border-theme-dark/5 bg-white text-left shadow-sm">
                 <p className="font-bold text-theme-dark/80 text-lg leading-relaxed mb-4">
                   Viết câu với điều kiện:
                 </p>
                 <ul className="text-base font-bold text-theme-dark/70 space-y-4 list-none">
                    <li className="flex items-start gap-2">
                       <CheckCircle2 className="text-orange-500 mt-1 shrink-0" size={20} />
                       <span>Ghi nhớ <b>động từ nằm cuối</b> ở mệnh đề có chứa <b>wenn</b>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                       <CheckCircle2 className="text-orange-500 mt-1 shrink-0" size={20} />
                       <span>Tập trung luyện tập việc <b>đảo ngữ</b> ở mệnh đề chính khi mệnh đề wenn đứng trước.</span>
                    </li>
                    <li className="flex items-start gap-2">
                       <CheckCircle2 className="text-orange-500 mt-1 shrink-0" size={20} />
                       <span>Ôn lại nhóm từ vựng: Lebensmittel (Rindfleisch, Gemüse, Limonade...).</span>
                    </li>
                 </ul>
              </div>
            </div>
            <div className="flex-1 w-full rounded-[32px] overflow-hidden relative shadow-xl min-h-[300px] md:min-h-[400px] bg-slate-100 border-4 border-white flex items-center justify-center p-8">
               <div className="w-32 h-32 bg-orange-200 text-orange-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                 <Volume2 size={48} className="ml-2" />
               </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-rose-600 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">BUỔI 2 : TIẾT 5</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Mở rộng cấu trúc "wenn"</h2>
            <div className="slide-card p-10 max-w-3xl mx-auto space-y-8 bg-rose-50 border-2 border-rose-200 text-left">
               <p className="text-xl font-bold text-theme-dark leading-relaxed">
                 Đôi khi <b>wenn</b> và <b>dann</b> đi cùng nhau ghép thành cặp để nhấn mạnh cấu trúc Nếu - Thì.
               </p>
               <div className="grid gap-6 mt-4">
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <p className="font-bold text-theme-dark text-lg mb-2">Wenn es regnet, <span className="text-rose-600 font-black">dann</span> bleiben wir zu Hause.</p>
                    <p className="font-medium text-theme-dark/70">Nếu trời mưa thì chúng tôi sẽ ở nhà.</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <p className="font-bold text-theme-dark text-lg mb-2">Wenn meine Eltern kommen, <span className="text-rose-600 font-black">dann</span> brate ich leckere Steaks.</p>
                    <p className="font-medium text-theme-dark/70">Nếu bố mẹ tôi đến thì tôi sẽ nướng món bít tết ngon tuyệt.</p>
                 </div>
               </div>
               <p className="text-sm font-bold text-theme-dark/60 text-center mt-4">* "dann" đóng vai trò như một phó từ làm chủ mệnh đề chính, do đó động từ chính đứng ngay sau nó.</p>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <span className="px-6 py-2 bg-rose-600 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 6</span>
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Đánh giá và Thể hiện sự ngạc nhiên</h2>
             
             <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
                <div className="slide-card p-8 bg-white border border-slate-200 rounded-3xl shadow-sm text-left">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4"><Info size={20}/></div>
                  <h4 className="font-black text-theme-dark text-lg mb-4">Überraschung ausdrücken<br/>(Thể hiện sự ngạc nhiên)</h4>
                  <p className="font-bold mb-3 text-base leading-relaxed">"Es wundert mich, <span className="text-blue-600">dass</span>..." <br/><span className="text-sm text-theme-dark/50">(Tôi ngạc nhiên là...)</span></p>
                  <p className="font-bold mb-3 text-base leading-relaxed">"Ich finde es komisch, <span className="text-blue-600">dass</span>..." <br/><span className="text-sm text-theme-dark/50">(Tôi thấy lạ là...)</span></p>
                  <p className="font-bold text-base leading-relaxed">"Das war mir nicht klar, <span className="text-blue-600">dass</span>..." <br/><span className="text-sm text-theme-dark/50">(Tôi đã không biết rằng...)</span></p>
                </div>
                <div className="slide-card p-8 bg-white border border-slate-200 rounded-3xl shadow-sm text-left">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4"><ShoppingCart size={20}/></div>
                  <h4 className="font-black text-theme-dark text-lg mb-4">Etwas vergleichen<br/>(So sánh thực tế)</h4>
                  <p className="font-bold mb-3 text-base leading-relaxed">"Bei uns in Vietnam ist das auch so." <br/><span className="text-sm text-theme-dark/50">(Ở Việt Nam chỗ chúng tôi cũng thế).</span></p>
                  <p className="font-bold text-base leading-relaxed">"In meiner Heimat essen wir..." <br/><span className="text-sm text-theme-dark/50">(Ở quê tôi, chúng tôi ăn...).</span></p>
                </div>
             </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <span className="px-6 py-2 bg-rose-600 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 7</span>
             <h2 className="text-4xl font-display font-black text-theme-dark">Integration - Phân biệt dass, denn, und, wenn</h2>
             
             <div className="bg-white p-8 rounded-3xl border-2 border-rose-100 text-left max-w-3xl mx-auto space-y-6 shadow-sm overflow-x-auto">
                <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="border-b-2 border-theme-dark/10">
                       <th className="p-3 font-black text-theme-dark">Liên từ</th>
                       <th className="p-3 font-black text-theme-dark">Vị trí động từ</th>
                       <th className="p-3 font-black text-theme-dark">Nghĩa</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr className="border-b border-theme-dark/5">
                        <td className="p-3 font-bold text-blue-600">und</td>
                        <td className="p-3 text-theme-dark/70 font-medium">Vị trí 0 (S + V ...)</td>
                        <td className="p-3 text-theme-dark/70 font-medium">và</td>
                     </tr>
                     <tr className="border-b border-theme-dark/5">
                        <td className="p-3 font-bold text-purple-600">denn</td>
                        <td className="p-3 text-theme-dark/70 font-medium">Vị trí 0 (S + V ...)</td>
                        <td className="p-3 text-theme-dark/70 font-medium">vì (câu lý do)</td>
                     </tr>
                     <tr className="border-b border-theme-dark/5">
                        <td className="p-3 font-bold text-teal-600">weil</td>
                        <td className="p-3 text-theme-dark/70 font-medium">Đẩy V cuối câu</td>
                        <td className="p-3 text-theme-dark/70 font-medium">bởi vì</td>
                     </tr>
                     <tr className="border-b border-theme-dark/5">
                        <td className="p-3 font-bold text-orange-600">dass</td>
                        <td className="p-3 text-theme-dark/70 font-medium">Đẩy V cuối câu</td>
                        <td className="p-3 text-theme-dark/70 font-medium">rằng</td>
                     </tr>
                     <tr>
                        <td className="p-3 font-bold text-rose-600">wenn</td>
                        <td className="p-3 text-theme-dark/70 font-medium">Đẩy V cuối câu</td>
                        <td className="p-3 text-theme-dark/70 font-medium">nếu / khi</td>
                     </tr>
                   </tbody>
                </table>
             </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
            <span className="px-6 py-2 bg-rose-600 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 8</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Lektionstest & Tổng kết Modul</h2>
            <div className="slide-card p-10 bg-white border-2 border-rose-200 space-y-6 text-left shadow-sm">
               <h4 className="font-black text-rose-600 text-xl border-b border-theme-dark/10 pb-4">Nội dung Test Lektion 12:</h4>
               <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-3">
                 <li><b>Chia động từ:</b> Chú ý vị trí động từ trong câu có <b>wenn</b>.</li>
                 <li><b>Chọn liên từ:</b> Phân biệt khi nào dùng <b>dass, denn, weil, wenn, und, aber</b>.</li>
                 <li><b>Viết mạch lạc:</b> Viết câu diễn tả thói quen, bày tỏ ngạc nhiên hoặc tư vấn nhà hàng.</li>
               </ul>
            </div>
            <button 
                onClick={() => playAudio("Chúc mừng các bạn đã hoàn thành bài 12 và toàn bộ Modul 4! Hãy làm bài tập ôn luyện cuối kì thật tốt nhé.", 'l12-end-audio', 'vi-VN')}
                className="mx-auto flex items-center justify-center p-4 bg-white border border-slate-200 shadow-sm rounded-2xl font-bold gap-3 hover:bg-slate-50 transition-colors w-max"
              >
                <Volume2 className="text-theme-dark/50" /> Nghe giáo viên dặn dò
              </button>
          </div>
        );
      case 9:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-rose-600 shadow-[16px_16px_0_0_#e11d48] transform rotate-1 hover:-rotate-1 transition-transform max-w-xl mx-auto pointer-events-auto cursor-pointer" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -left-8 text-6xl animate-bounce">🍔</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6 mt-4">
                   Lektion 12 <br/> Đã hoàn thành!
                </h2>
                <div className="w-16 h-2 bg-rose-600 mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-theme-dark/60 uppercase tracking-widest text-sm bg-rose-50 inline-block px-4 py-2 rounded-lg border-2 border-dashed border-rose-200 text-center">
                   Giờ thì tình yêu của bạn...<br/>cũng có thể đi qua dạ dày rồi!
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
    <div className="max-w-6xl mx-auto py-4 md:py-8 w-full h-full flex flex-col pb-24">
      <div className="relative overflow-hidden min-h-[65vh] md:min-h-[650px] h-auto flex flex-col bg-zinc-100 rounded-[2.5rem] shadow-2xl border-4 border-white">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-1000 z-0">
           <div className={`absolute inset-0 w-full h-full transition-colors duration-1000 ${bgConfig.bgColor || 'bg-zinc-100'}`} />
           {bgConfig.bgImage && (
               <img src={bgConfig.bgImage} className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-1000" />
           )}
        </div>
        
        {/* Progress bar */}
        <div className="absolute top-0 left-0 h-2 bg-orange-600 transition-all duration-500 ease-out z-20 shadow-sm" style={{ width: currentSlide === -1 ? '0%' : `${((currentSlide + 1) / totalSlides) * 100}%` }} />
        
        {/* Content */}
        <div className="flex-1 p-2 md:p-8 relative z-10 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full"
            >
              {renderSlide()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        {currentSlide === -1 ? (
          <div className="p-4 flex items-center justify-between border-t border-theme-dark/5 bg-white/50 z-10 w-full">
            
            <div className="text-[10px] md:text-xs font-bold text-theme-dark/50 tracking-widest uppercase text-right">
              Sơ đồ Lektion 12
            </div>
          </div>
        ) : (
          <div className="p-4 md:p-6 flex items-center justify-between border-t border-theme-dark/5 bg-white/50 z-10 w-full">
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
               <button onClick={() => setCurrentSlide(-1)} className="text-[10px] text-orange-600 flex items-center justify-center font-bold hover:underline uppercase tracking-widest p-1 mt-1 bg-orange-50 rounded-lg sm:bg-transparent sm:mt-0 sm:p-0">
                 Xem Lộ Trình
               </button>
            </div>
            <button
               onClick={nextSlide}
               disabled={currentSlide === totalSlides - 2 && currentSlide !== 8}
               className="px-4 md:px-6 py-2 md:py-3 bg-orange-600 text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-orange-600/20 hover:bg-orange-700 transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
            >
               <span className="hidden sm:inline">
                 {currentSlide === 8 ? 'Đóng lại' : 'Tiếp'}
               </span> 
               <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
