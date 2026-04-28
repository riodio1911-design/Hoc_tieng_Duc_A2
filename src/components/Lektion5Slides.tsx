import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, CheckCircle2, Map, Camera, Users, Target } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&q=80' },
  0: { bgColor: 'bg-theme-dark' }, 
  1: { bgColor: 'bg-orange-50' },
  2: { bgColor: 'bg-amber-50' },
  3: { bgColor: 'bg-yellow-50' },
  4: { bgColor: 'bg-indigo-50' },
  5: { bgColor: 'bg-violet-50' },
  6: { bgColor: 'bg-emerald-50' },
  7: { bgColor: 'bg-teal-50' },
  8: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&q=80' }
};

export default function Lektion5Slides({ playAudio, playingId, onBack }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const totalSlides = 9; 

  const nextSlide = () => setCurrentSlide((p) => Math.min(totalSlides - 1, p + 1));
  const prevSlide = () => setCurrentSlide((p) => Math.max(-1, p - 1));

  const renderSlide = () => {
    switch (currentSlide) {
      case -1:
        return (
          <div className="space-y-6 flex flex-col h-full max-w-5xl mx-auto py-4">
            <div className="text-center space-y-2 mb-4">
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình Lektion 5</h2>
              <p className="font-bold text-theme-dark/60">Hành trình 8 tiết học chuyên sâu</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-orange-50/50 p-6 rounded-3xl border-2 border-orange-100 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/50 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-orange-600 mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: Tham quan thành phố
                </h3>
                 <div className="space-y-4 flex-1">
                  <button 
                    onClick={() => setCurrentSlide(1)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-orange-500 shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark group-hover:text-orange-600 transition-colors text-lg">Tiết 1: Giới thiệu Lektion 5</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Video & Tổng quan du lịch</p>
                    </div>
                  </button>
                   {[
                    {title: 'Tiết 2: Ngữ pháp: Tính từ (Nom & Akk)', slide: 2},
                    {title: 'Tiết 3: Kỹ năng: Chỉ đường & Thông tin', slide: 3},
                    {title: 'Tiết 4: Tổng kết Buổi 1 & Luyện nghe', slide: 4}
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
                        <h4 className="font-black text-theme-dark hover:text-orange-600 transition-colors text-lg">{item.title}</h4>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Buổi 2 */}
              <div className="bg-indigo-50/50 p-6 rounded-3xl border-2 border-indigo-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-indigo-600 mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm">2</div>
                  BUỔI 2: Dativ & Kế hoạch
                </h3>
               <div className="space-y-4">
                  {[
                    {title: "Tiết 5: Ôn tập + Tính từ (Dativ)", slide: 5},
                    {title: "Tiết 6: Lên kế hoạch tham quan", slide: 6},
                    {title: "Tiết 7: Viết bưu thiếp từ kỳ nghỉ", slide: 7},
                    {title: "Tiết 8: Ôn Buổi 2 + Video tổng kết", slide: 8}
                  ].map((item, i) => (
                      <button 
                         key={i}
                         onClick={() => setCurrentSlide(item.slide)}
                         className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-indigo-200 shadow-sm group"
                      >
                         <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                           <Play className="w-5 h-5 ml-1" />
                         </div>
                         <div className="text-left flex-1">
                           <h4 className="font-black text-theme-dark group-hover:text-indigo-600 transition-colors text-lg">{item.title}</h4>
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
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&q=80')] bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-orange-500 text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 5</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                Schaut mal, der schöne Dom!
              </h1>
              <p className="text-xl text-white/90 font-bold">Chủ đề: Tham quan thành phố & Chia đuôi tính từ</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-orange-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 1</span>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Video Giới Thiệu Khóa Học</h2>
            <div className="slide-card p-10 bg-white border-2 border-orange-500/10 space-y-8 rounded-3xl">
              <div className="flex justify-center">
                <button 
                  onClick={() => playAudio('Xin chào các bạn, chào mừng đến với Lektion 5! Hôm nay, chúng ta sẽ bắt đầu chuyến du lịch tham quan nước Đức, cụ thể là nhà thờ cổ ở Cologne. Các bạn sẽ học những từ vựng để hỏi đường, cách lên kế hoạch, và không thể thiếu: Cách chia đuôi tính từ! Cùng bắt đầu thôi!', 'l5-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-orange-500/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'l5-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-orange-600 text-lg">1. Mục tiêu từ vựng</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Từ vựng về du lịch: tham quan, khách sạn.</li>
                    <li>Sử dụng các tính từ miêu tả: đẹp, cũ, nổi tiếng.</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-indigo-600 text-lg">2. Mục tiêu ngữ pháp</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Biến cách tính từ sau mạo từ xác định (Nom, Akk, Dat).</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-amber-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 2</span>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Ngữ pháp: Quy Tắc "Cái Thìa" (Nom & Akk)</h2>
            <div className="slide-card p-10 bg-white border-2 border-amber-200 rounded-3xl mt-8">
               <p className="text-center font-bold text-theme-dark/80 mb-6">Sau các mạo từ xác định <span className="bg-amber-100 text-amber-800 px-2 rounded">der/die/das</span></p>
               <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4">
                    <h4 className="font-black text-emerald-600 text-xl mb-2 flex items-center gap-2"><CheckCircle2/> Đuôi -e</h4>
                    <p className="font-bold text-theme-dark text-lg italic font-mono bg-emerald-50 p-3 rounded-lg border border-emerald-100">- der schön<strong className="text-emerald-600 border-b-2 border-emerald-600">e</strong> Dom (Nom.)</p>
                    <p className="font-bold text-theme-dark text-lg italic font-mono bg-emerald-50 p-3 rounded-lg border border-emerald-100">- das bunt<strong className="text-emerald-600 border-b-2 border-emerald-600">e</strong> Fenster (Nom./Akk.)</p>
                    <p className="font-bold text-theme-dark text-lg italic font-mono bg-emerald-50 p-3 rounded-lg border border-emerald-100">- die alt<strong className="text-emerald-600 border-b-2 border-emerald-600">e</strong> Kamera (Nom./Akk.)</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-black text-rose-600 text-xl mb-2 flex items-center gap-2"><CheckCircle2/> Đuôi -en</h4>
                    <p className="text-sm font-bold text-rose-600 uppercase tracking-wider mb-2">Akkusativ (Giống đực) & Số nhiều</p>
                    <p className="font-bold text-theme-dark text-lg italic font-mono bg-rose-50 p-3 rounded-lg border border-rose-100">Ich finde den alt<strong className="text-rose-600 border-b-2 border-rose-600">en</strong> Dom toll. (Akk.)</p>
                    <p className="font-bold text-theme-dark text-lg italic font-mono bg-rose-50 p-3 rounded-lg border border-rose-100">Die nett<strong className="text-rose-600 border-b-2 border-rose-600">en</strong> Leute hier. (Plural)</p>
                  </div>
               </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-yellow-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 3</span>
             <div className="w-20 h-20 bg-yellow-100 text-yellow-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <Map size={40} />
             </div>
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Kỹ năng: Chỉ đường & Thông tin</h2>
             <div className="grid grid-cols-2 gap-6 mt-8">
               {[
                 { w: 'Wo kann man...?', t: 'Người ta có thể [làm gì] ở đâu?' },
                 { w: 'Gibt es hier...?', t: 'Ở đây có [cái gì] không?' },
                 { w: 'der Prospekt', t: 'Tờ rơi' },
                 { w: 'die Unterkunft', t: 'Chỗ ở khách sạn/nhà trọ' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-6 text-center space-y-4 hover:-translate-y-1 transition-transform border border-yellow-200 bg-white rounded-3xl shadow-sm">
                   <button 
                     onClick={() => playAudio(item.w, `l5-v-${i}`, 'de-DE')}
                     className="w-12 h-12 bg-yellow-100 rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     {playingId === `l5-v-${i}` ? <CheckCircle2 className="text-yellow-600 w-5 h-5" /> : <Play className="text-yellow-600 w-5 h-5 ml-1" />}
                   </button>
                   <div>
                     <h4 className="font-black text-lg text-theme-dark mb-1">{item.w}</h4>
                     <p className="font-bold border-t-2 border-yellow-50 pt-2 text-sm text-theme-dark/60">{item.t}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        );
      case 4:
         return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-indigo-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 4</span>
            <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
               <Target size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Tổng kết Buổi 1 & Luyện nghe</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-3xl border-2 border-indigo-100 shadow-sm text-center space-y-4">
                <h3 className="font-black text-indigo-600 text-lg">Phần 1: Luyện nghe</h3>
                <p className="text-theme-dark/70 font-medium">Bật file nghe đoạn hội thoại tại "Touristeninformation" (Thông tin du lịch) và xác định các địa điểm đúng.</p>
                <div className="flex justify-center mt-2">
                  <Play className="text-indigo-400 w-8 h-8" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl border-2 border-indigo-100 shadow-sm text-center space-y-4">
                <h3 className="font-black text-indigo-600 text-lg">Phần 2: Bài tập về nhà</h3>
                <p className="text-theme-dark/70 font-medium">Hoàn thành bài tập đuôi tính từ (Nom, Akk) trong sách bài tập (AB).</p>
                <div className="flex justify-center mt-2">
                  <div className="text-indigo-400 font-bold text-2xl">AB</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
         return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-violet-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 5</span>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Ôn tập + Tính từ với Dativ</h2>
            <div className="slide-card bg-rose-50 border-2 border-rose-200 rounded-3xl overflow-hidden mt-8">
               <div className="bg-rose-600 p-6 text-white text-center">
                 <h4 className="text-2xl font-black mb-2 flex items-center justify-center gap-2">QUY TẮC VÀNG CỦA DATIV</h4>
                 <p className="font-bold bg-white/20 inline-block px-4 py-2 rounded-xl text-lg">TẤT CẢ tính từ sau mạo từ ở Dativ đều thêm đuôi -EN</p>
               </div>
               <div className="p-8 space-y-4">
                 <div className="flex justify-between items-center border-b border-rose-200 pb-2">
                    <span className="font-bold text-theme-dark/80 bg-white px-3 py-1 rounded-lg">mit + der Reiseführer</span>
                    <span className="font-mono font-bold text-rose-600 text-lg">mit dem nett<span className="text-black border-b-2 border-rose-600">en</span> Reiseführer</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-rose-200 pb-2">
                    <span className="font-bold text-theme-dark/80 bg-white px-3 py-1 rounded-lg">aus + das Hotel</span>
                    <span className="font-mono font-bold text-rose-600 text-lg">aus dem teuer<span className="text-black border-b-2 border-rose-600">en</span> Hotel</span>
                 </div>
                 <div className="flex justify-between items-center pb-2">
                    <span className="font-bold text-theme-dark/80 bg-white px-3 py-1 rounded-lg">in + die Stadt (Dat)</span>
                    <span className="font-mono font-bold text-rose-600 text-lg">in der groß<span className="text-black border-b-2 border-rose-600">en</span> Stadt</span>
                 </div>
               </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 6</span>
             <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <Users size={40} />
             </div>
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Giao tiếp: Lên Kế Hoạch tham quan</h2>
             <div className="grid grid-cols-2 gap-6 mt-8">
               {[
                 { w: 'Wollen wir zuerst...?', t: 'Chúng ta có muốn [x] trước không?' },
                 { w: 'dafür sein', t: 'Ủng hộ (Tôi đồng ý)' },
                 { w: 'dagegen sein', t: 'Phản đối (Tôi không đồng ý)' },
                 { w: 'einverstanden', t: 'Nhất trí nào!' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-6 text-center space-y-4 hover:-translate-y-1 transition-transform border border-emerald-200 bg-white rounded-3xl shadow-sm">
                   <button 
                     onClick={() => playAudio(item.w, `l5-v2-${i}`, 'de-DE')}
                     className="w-12 h-12 bg-emerald-100 rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     {playingId === `l5-v2-${i}` ? <CheckCircle2 className="text-emerald-600 w-5 h-5" /> : <Play className="text-emerald-600 w-5 h-5 ml-1" />}
                   </button>
                   <div>
                     <h4 className="font-black text-lg text-theme-dark">{item.w}</h4>
                     <p className="font-bold border-t-2 border-emerald-50 pt-2 text-sm text-theme-dark/60">{item.t}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-teal-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 7</span>
            <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
               <Camera size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Tổng hợp: Viết bưu thiếp từ kỳ nghỉ</h2>
            <div className="bg-white p-8 rounded-3xl border-2 border-teal-100 mt-8 shadow-sm text-center">
               <h3 className="font-black text-teal-600 text-2xl mb-4">Hoạt động viết & thuyết trình</h3>
               <p className="text-theme-dark/70 font-medium text-lg leading-relaxed mb-6">
                 Tưởng tượng bạn đang đi nghỉ ở Berlin. Hãy viết một bưu thiếp (Postkarte) ngắn gửi cho bạn bè kể về:
                 <br/><br/><strong className="text-theme-dark flex flex-col gap-2">
                    <span>1. Bạn đang ở đâu? Thời tiết thế nào?</span>
                    <span>2. Bạn đã tham quan những địa điểm nổi tiếng nào?</span>
                    <span>3. Sử dụng các tính từ tích cực để miêu tả (tolles Wetter, schönen Dom).</span>
                 </strong>
               </p>
               <div className="p-4 bg-teal-50 rounded-2xl text-teal-800 font-medium border border-teal-200">
                 Chia sẻ bưu thiếp của bạn với người bên cạnh (Partnerarbeit)!
               </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform -rotate-1 hover:rotate-1 transition-transform max-w-xl mx-auto cursor-pointer rounded-[32px]" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -right-8 text-6xl animate-bounce">🎓</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 5 <br/> Đã hoàn thành!
                </h2>
                <div className="w-16 h-2 bg-orange-500 mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-theme-dark/60 uppercase tracking-widest text-sm bg-slate-50 inline-block px-4 py-2 rounded-lg border-2 border-dashed border-theme-dark/20">
                   Bạn đã có thể miêu tả và lên kế hoạch đi chơi!
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
        <div className="absolute top-0 left-0 h-2 bg-orange-500 transition-all duration-500 ease-out z-20 shadow-sm" style={{ width: currentSlide === -1 ? '0%' : `${((currentSlide + 1) / totalSlides) * 100}%` }} />
        
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
              Sơ đồ Lektion 5
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
              <button onClick={() => setCurrentSlide(-1)} className="text-[10px] text-orange-500 flex items-center justify-center font-bold hover:underline uppercase tracking-widest p-1 mt-1 bg-orange-500/10 rounded-lg sm:bg-transparent sm:mt-0 sm:p-0">
                Xem Lộ Trình
              </button>
            </div>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="px-4 md:px-6 py-2 md:py-3 bg-orange-500 text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
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
