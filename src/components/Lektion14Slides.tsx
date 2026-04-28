import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, CheckCircle2, MessageSquare, BookOpen, PenTool, CheckSquare, Gamepad2, Mic, Headphones, Eye, Gift } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
  onBack?: () => void;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1576089886475-76495dbca7c7?w=1200&h=800&fit=crop&q=80' },
  0: { bgColor: 'bg-theme-dark' }, 
  1: { bgColor: 'bg-amber-50' },
  2: { bgColor: 'bg-emerald-50' },
  3: { bgColor: 'bg-rose-50' },
  4: { bgColor: 'bg-indigo-50' },
  5: { bgColor: 'bg-slate-50' },
  6: { bgColor: 'bg-theme-cream' },
  11: { bgColor: 'bg-orange-50' },
  15: { bgColor: 'bg-emerald-50' },
  16: { bgColor: 'bg-white' },
  20: { bgImage: "https://images.unsplash.com/photo-1576089886475-76495dbca7c7?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-theme-primary/10' }
};

export default function Lektion14Slides({ playAudio, playingId, onBack }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const totalSlides = 21; 

  const nextSlide = () => {
    if (currentSlide === 10 || currentSlide === totalSlides - 1) {
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
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình Lektion 14</h2>
              <p className="font-bold text-theme-dark/60">Hành trình 8 tiết học chuyên sâu</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1: Gửi quà & Passiv
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
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 1: Giới thiệu & Từ vựng</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Tại bưu điện</p>
                    </div>
                  </button>
                  {[
                    {title: 'Tiết 2: Ngữ pháp Thể bị động', slide: 4},
                    {title: 'Tiết 3: Mô tả quy trình', slide: 7},
                    {title: 'Tiết 4: Thực hành Passiv', slide: 9}
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
                        <h4 className="font-black text-theme-dark hover:text-theme-primary transition-colors text-lg">{item.title}</h4>
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
                  BUỔI 2: Thư cảm ơn
                </h3>
                <div className="space-y-4">
                   {[
                    {title: "Tiết 5: Từ vựng vui mừng", onClick: () => setCurrentSlide(12)},
                    {title: "Tiết 6: Cấu trúc câu cảm ơn", onClick: () => setCurrentSlide(14)},
                    {title: "Tiết 7: Viết thư (Roleplay)", onClick: () => setCurrentSlide(16)},
                    {title: "Tiết 8: Test & Tổng kết", onClick: () => setCurrentSlide(18)}
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
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1576089886475-76495dbca7c7?w=1200&h=800&fit=crop')] bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-[2px]"></div>
            <div className="relative z-10 space-y-6 p-8">
              <span className="px-6 py-2 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 14</span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                Es werden fleißig Päckchen gepackt
              </h1>
              <p className="text-xl text-white/80 font-bold">Chủ đề: Tại bưu điện, Thể bị động & Cảm ơn</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Video Giới Thiệu Lektion 14</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-emerald-200 space-y-8">
              <div className="flex justify-center">
                <button 
                  onClick={() => playAudio('Chào mừng các bạn đến với Lektion 14! Bài này chúng ta sẽ nói về chủ đề gửi hàng qua Bưu điện và Thể Bị Động Passiv. Bạn sẽ học cách mô tả lần lượt từng bước trong một quy trình, và cách viết một bức thư cảm ơn ai đó vì món quà.', 'l14-intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'l14-intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-emerald-600 text-lg">1. Mục Tiêu Giao Tiếp</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Mô tả quy trình gửi một gói hàng</li>
                    <li>Sử dụng trạng từ Zuerst, dann, danach...</li>
                    <li>Viết thư bày tỏ sự vui mừng</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-emerald-600 text-lg">2. Từ Vựng</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Từ vựng bưu điện (Paket, Absender, Empfänger)</li>
                    <li>Cảm thán từ, hỏi thăm sức khỏe</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-emerald-100 mt-4 text-center">
                <h4 className="font-black text-emerald-600 mb-3">3. Ngữ pháp trọng tâm</h4>
                <ul className="text-sm font-bold text-theme-dark/70 flex justify-center gap-6">
                  <li>• Thể bị động ở Hiện tại (Passiv Präsens)</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex gap-8 items-center h-full">
            <div className="flex-1 space-y-6">
              <span className="px-6 py-2 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block w-max">TIẾT 1</span>
              <h2 className="text-4xl font-display font-black text-theme-dark">Tình Huống Bưu Điện</h2>
              <h3 className="text-2xl font-bold text-theme-secondary">Auf der Post</h3>
              <p className="text-theme-dark/80 leading-relaxed font-medium text-lg">
                Bạn muốn gửi một món quà sinh nhật cho bạn mình ở xa. Bạn sẽ cần chuẩn bị thùng giấy, nhãn dán, điền tên người nhận, và đem ra bưu điện. Cùng khám phá từ vựng nhé!
              </p>
            </div>
            <div className="flex-1 rounded-[32px] overflow-hidden relative shadow-xl min-h-[400px] bg-theme-cream flex items-center justify-center border-4 border-white">
              <Gift size={100} className="text-theme-primary opacity-20" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ Vựng: Tại Bưu Điện (Auf der Post)</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
               {[
                 { w: 'das Paket', t: 'bưu kiện' },
                 { w: 'das Päckchen', t: 'gói hàng nhỏ' },
                 { w: 'der Karton', t: 'thùng cạc tông' },
                 { w: 'das Etikett', t: 'nhãn dán' },
                 { w: 'der Absender', t: 'người gửi' },
                 { w: 'der Empfänger', t: 'người nhận' }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-6 text-center space-y-4 hover:-translate-y-1 transition-transform border border-emerald-100">
                   <button 
                     onClick={() => playAudio(item.w, `l14-v-${i}`, 'de-DE')}
                     className="w-12 h-12 bg-emerald-100 rounded-full mx-auto flex items-center justify-center hover:scale-110 transition-transform"
                   >
                     {playingId === `l14-v-${i}` ? <CheckCircle2 className="text-emerald-500 w-5 h-5" /> : <Volume2 className="text-emerald-500 w-5 h-5" />}
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
      case 4:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 2</span>
            <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <BookOpen size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Ngữ Pháp: Passiv Präsens</h2>
            <div className="slide-card p-10 bg-indigo-50 border-2 border-indigo-200">
               <h3 className="text-2xl font-black text-indigo-600 uppercase mb-4 text-center">werden + Partizip II</h3>
               <p className="text-xl font-medium text-theme-dark leading-relaxed mb-8 text-center italic">
                 Dùng bị động để nhấn mạnh <strong className="text-rose-500">HÀNH ĐỘNG</strong> hoặc <strong className="text-rose-500">QUY TRÌNH</strong> (trong khi người làm hành động có thể không quan trọng hoặc không cần biết).
               </p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Cấu trúc Passiv</h2>
            <div className="slide-card p-10 bg-indigo-50 border-2 border-indigo-200">
               <div className="space-y-4 max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-sm">
                 <p className="font-bold text-lg mb-1">Sie <span className="underline">packt</span> <span className="text-blue-500">das Päckchen</span>. (Aktiv / Chủ động)</p>
                 <div className="h-px bg-slate-200 w-full my-4" />
                 <p className="font-bold text-lg mb-1"><span className="text-blue-500">Das Päckchen</span> <span className="text-indigo-600 font-black">wird</span> <span className="underline">gepackt</span>. (Passiv / Bị động)</p>
                 <p className="text-sm font-bold text-indigo-600 mt-2">* Túc từ (Akkusativ) trong câu chủ động sẽ biến thành chủ ngữ (Nominativ) trong câu bị động.</p>
                 <p className="text-sm font-bold text-indigo-600 mt-2">* werden chia theo chủ ngữ mới, động từ chính lùi về Partizip II đứng ở cuối câu.</p>
               </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Chia động từ werden</h2>
            <div className="slide-card p-10 bg-white border-2 border-slate-200 shadow-xl max-w-md mx-auto">
               <ul className="text-lg font-bold text-theme-dark space-y-4">
                 <li className="flex justify-between border-b pb-2"><span>ich</span><span className="text-indigo-600">werde</span></li>
                 <li className="flex justify-between border-b pb-2"><span>du</span><span className="text-indigo-600">wirst</span></li>
                 <li className="flex justify-between border-b pb-2"><span>er/sie/es</span><span className="text-indigo-600">wird</span></li>
                 <li className="flex justify-between border-b pb-2"><span>wir</span><span className="text-indigo-600">werden</span></li>
                 <li className="flex justify-between border-b pb-2"><span>ihr</span><span className="text-indigo-600">werdet</span></li>
                 <li className="flex justify-between"><span>sie/Sie</span><span className="text-indigo-600">werden</span></li>
               </ul>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <span className="px-6 py-2 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 3</span>
             <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <CheckSquare size={40} />
             </div>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Mô tả Quy trình Bưu điện</h2>
            <div className="slide-card p-8 bg-emerald-50 border-2 border-emerald-200 text-center h-full flex flex-col justify-center">
               <span className="text-5xl mb-4 block">📦</span>
               <p className="font-bold text-lg text-emerald-800">
                 Khi mô tả quy trình, ta thường kết hợp các trạng từ chỉ trình tự (zuerst, dann, danach, schließlich, zuletzt) với Passiv để chỉ các bước.
               </p>
               <p className="font-medium text-emerald-700 mt-4 underline text-sm">Trạng từ đứng ở vị trí số 1, động từ werden đứng vị trí số 2.</p>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Các bước thực hiện</h2>
            <div className="bg-white p-8 rounded-3xl border-2 border-emerald-200 shadow-xl space-y-6 h-full flex flex-col justify-center">
              <ol className="list-decimal list-inside space-y-6 text-theme-dark font-medium text-lg leading-relaxed">
                <li><span className="font-bold text-emerald-600">Zuerst</span> wird der Karton beklebt.</li>
                <li><span className="font-bold text-emerald-600">Dann</span> wird das Etikett aufgeklebt.</li>
                <li><span className="font-bold text-emerald-600">Danach</span> wird das Päckchen gepackt.</li>
                <li><span className="font-bold text-emerald-600">Zuletzt</span> wird das Päckchen zur Post gebracht.</li>
              </ol>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center">
            <span className="px-6 py-2 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 4</span>
            <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-[32px] flex items-center justify-center mx-auto mb-4">
                <PenTool size={40} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Thực hành Passiv</h2>
            <div className="slide-card p-8 max-w-3xl mx-auto w-full space-y-6 bg-white border border-emerald-200 shadow-xl flex flex-col items-center">
               <h4 className="font-black text-emerald-600 text-center mb-6">Chuyển sang câu Bị động (Passiv)</h4>
               
               <div className="space-y-6 text-lg font-medium text-theme-dark flex flex-col w-full">
                  <div className="flex flex-col gap-2">
                    <span className="font-bold underline">1. Er holt das Paket ab.</span>
                    <div className="flex items-center gap-2">
                      ➡️ Das Paket <input id="l14_g1" type="text" className="w-32 px-3 py-1 bg-amber-50 border-2 border-amber-200 rounded-lg text-amber-700 font-bold text-center outline-none focus:border-amber-400 focus:bg-white" placeholder="..." /> .
                    </div>
                  </div>
                  
                  <div className="h-px bg-theme-dark/10 w-full"></div>
                  
                  <div className="flex flex-col gap-2">
                    <span className="font-bold underline">2. Sie bezahlt die Rechnung.</span>
                    <div className="flex items-center gap-2">
                      ➡️ Die Rechnung <input id="l14_g2" type="text" className="w-32 px-3 py-1 bg-amber-50 border-2 border-amber-200 rounded-lg text-amber-700 font-bold text-center outline-none focus:border-amber-400 focus:bg-white" placeholder="..." /> .
                    </div>
                  </div>
                  
                  <button onClick={() => {
                     const i1 = document.getElementById('l14_g1') as HTMLInputElement;
                     const i2 = document.getElementById('l14_g2') as HTMLInputElement;
                     if (i1.value.toLowerCase().replace(/\s+/g, '') === 'wirdabgeholt') { i1.style.borderColor = 'green'; i1.style.color = 'green'; } else { i1.style.borderColor = 'red'; i1.style.color = 'red'; }
                     if (i2.value.toLowerCase().replace(/\s+/g, '') === 'wirdbezahlt') { i2.style.borderColor = 'green'; i2.style.color = 'green'; } else { i2.style.borderColor = 'red'; i2.style.color = 'red'; }
                  }} className="mt-6 px-6 py-2 bg-emerald-500 text-white rounded-full font-bold hover:scale-105 transition-transform mx-auto block max-w-xs">
                     Kiểm tra
                  </button>
               </div>
            </div>
          </div>
        );
      case 10:
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-center pb-12">
            <div className="w-32 h-32 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/30">
              <CheckCircle2 size={64} />
            </div>
            <div className="space-y-4">
               <h2 className="text-5xl font-display font-black text-theme-dark">Tổng Kết Buổi 1</h2>
               <p className="text-xl font-bold text-theme-dark/60 uppercase tracking-widest">Nửa đầu Lektion 14 quá dễ dàng!</p>
             </div>
             <div className="slide-card p-8 text-left space-y-4 max-w-md w-full mx-auto bg-white/90 font-bold text-theme-dark/80 border-2 border-emerald-100">
                <p>👉 Từ vựng: Các vật phẩm tại Bưu điện.</p>
                <p>👉 Bị động (Passiv): Nhấn mạnh quy trình.</p>
             </div>
          </div>
        );
      case 11:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto">BUỔI 2</span>
            <h2 className="text-4xl font-display font-black text-theme-dark">Thư cảm ơn</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto w-full space-y-6">
               <p className="font-bold text-theme-dark/80 text-xl leading-relaxed italic">
                 Khi bạn nhận được một món quà từ người thân ở xa, điều lịch sự đầu tiên là gửi một là thư cảm ơn!<br/>
                 Hôm nay chúng ta học cách biểu đạt sự vui mừng và hỏi thăm sức khỏe.
               </p>
            </div>
          </div>
        );
      case 12:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <span className="px-6 py-2 bg-theme-secondary text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 5</span>
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ vựng: Sự Vui Mừng (Freude)</h2>
             <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
               {[
                  { de: "sich freuen (über + Akkusativ)", vi: "vui mừng về cái gì đó" },
                 { de: "die Überraschung", vi: "sự bất ngờ" },
                 { de: "die Freude", vi: "niềm vui" },
                 { de: "toll", vi: "tuyệt vời" }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-4 text-left space-x-4 flex items-center bg-rose-50 border border-rose-100 hover:scale-105 transition-transform">
                   <button 
                     onClick={() => playAudio(item.de, `l14-v2-${i}`, 'de-DE')}
                     className="w-10 h-10 bg-rose-200 rounded-full flex flex-shrink-0 items-center justify-center hover:bg-rose-300"
                   >
                     {playingId === `l14-v2-${i}` ? <CheckCircle2 className="text-rose-600 w-5 h-5" /> : <Play className="text-rose-600 w-4 h-4 ml-1" />}
                   </button>
                   <div>
                     <h4 className="font-black text-theme-dark">{item.de}</h4>
                     <p className="font-medium text-sm text-theme-dark/60">{item.vi}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        );
      case 13:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
             <h2 className="text-4xl font-display font-black text-theme-dark text-center">Từ vựng tiếp theo</h2>
             <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
               {[
                 { de: "es geht um...", vi: "nó là về..." },
                 { de: "vermissen", vi: "nhớ nhung" },
                 { de: "Geschenke auspacken", vi: "mở quà" },
                 { de: "Herzlichen Dank!", vi: "Chân thành cảm ơn!" }
               ].map((item, i) => (
                 <div key={i} className="slide-card p-4 text-left space-x-4 flex items-center bg-rose-50 border border-rose-100 hover:scale-105 transition-transform">
                   <button 
                     onClick={() => playAudio(item.de, `l14-v3-${i}`, 'de-DE')}
                     className="w-10 h-10 bg-rose-200 rounded-full flex flex-shrink-0 items-center justify-center hover:bg-rose-300"
                   >
                     {playingId === `l14-v3-${i}` ? <CheckCircle2 className="text-rose-600 w-5 h-5" /> : <Play className="text-rose-600 w-4 h-4 ml-1" />}
                   </button>
                   <div>
                     <h4 className="font-black text-theme-dark">{item.de}</h4>
                     <p className="font-medium text-sm text-theme-dark/60">{item.vi}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        );
      case 14:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <span className="px-6 py-2 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 6</span>
             <h2 className="text-4xl font-display font-black text-theme-dark">Cấu Trúc Cảm Ơn (Thực hành)</h2>
             <p className="font-medium text-theme-dark/80">Điền từ: gedacht, gefreut, für, Geschenke</p>
             <div className="slide-card p-8 max-w-3xl mx-auto w-full space-y-6 bg-white border-2 border-emerald-100 shadow-xl text-left flex flex-col items-center">
                <div className="space-y-4 w-full">
                  <div className="bg-emerald-50 p-4 rounded-xl flex items-center gap-2 flex-wrap">
                    <span className="font-black text-emerald-700">Vielen Dank</span>
                    <input id="l14_v1" type="text" className="w-20 px-2 py-1 bg-white border-2 border-emerald-200 text-emerald-700 rounded-md outline-none focus:border-emerald-500" placeholder="..." />
                    <span className="font-black text-emerald-700">Deine tollen</span>
                    <input id="l14_v2" type="text" className="w-28 px-2 py-1 bg-white border-2 border-emerald-200 text-emerald-700 rounded-md outline-none focus:border-emerald-500" placeholder="..." /> !
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl flex items-center gap-2 flex-wrap">
                    <span className="font-black text-emerald-700">Schön, dass Du an mich</span>
                    <input id="l14_v3" type="text" className="w-28 px-2 py-1 bg-white border-2 border-emerald-200 text-emerald-700 rounded-md outline-none focus:border-emerald-500" placeholder="..." /> <span className="font-black text-emerald-700">hast.</span>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl flex items-center gap-2 flex-wrap">
                    <span className="font-black text-emerald-700">Deine Geschenke haben mich sehr</span>
                    <input id="l14_v4" type="text" className="w-28 px-2 py-1 bg-white border-2 border-emerald-200 text-emerald-700 rounded-md outline-none focus:border-emerald-500" placeholder="..." /> .
                  </div>
                </div>
                <button onClick={() => {
                   const check = (id: string, correct: string) => {
                     const el = document.getElementById(id) as HTMLInputElement;
                     if (el.value.toLowerCase().trim() === correct.toLowerCase()) {
                       el.style.borderColor = 'green'; el.style.color = 'green';
                     } else {
                       el.style.borderColor = 'red'; el.style.color = 'red';
                     }
                   };
                   check('l14_v1', 'für');
                   check('l14_v2', 'geschenke');
                   check('l14_v3', 'gedacht');
                   check('l14_v4', 'gefreut');
                }} className="mt-4 px-6 py-2 bg-emerald-500 text-white rounded-full font-bold hover:scale-105 transition-transform max-w-xs">
                   Kiểm tra
                </button>
             </div>
          </div>
        );
      case 15:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
             <h2 className="text-4xl font-display font-black text-theme-dark">Mẫu Thư Cảm Ơn</h2>
             <div className="slide-card p-10 max-w-3xl mx-auto w-full space-y-6 bg-white border-2 border-slate-200 shadow-xl text-left">
                <div className="font-medium text-theme-dark leading-relaxed font-serif space-y-4 text-lg">
                  <p>Liebe Maria, lieber Klaus,</p>
                  <p>herzlichen Dank für das Paket! Ich habe mich wirklich sehr gefreut. Es war eine tolle Überraschung.</p>
                  <p>Wie geht es euch? Hoffentlich gut. Ich vermisse euch sehr.</p>
                  <p>Liebe Grüße</p>
                  <p>Anna</p>
                </div>
             </div>
          </div>
        );
      case 16:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
            <span className="px-6 py-2 bg-theme-accent text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4 w-max">TIẾT 7</span>
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">4 Kỹ Năng / Roleplay</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-amber-500 bg-white shadow-md">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><Mic className="text-amber-500 w-5"/> Nói</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Mô tả và thuyết trình lại các bước gửi một gói hàng cho bạn cùng lớp.</p>
              </div>
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-indigo-500 bg-white shadow-md">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><Headphones className="text-indigo-500 w-5"/> Nghe</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Nghe đoạn hội thoại tại quầy giao dịch bưu điện.</p>
              </div>
            </div>
          </div>
        );
      case 17:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">4 Kỹ Năng (Tiếp theo)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-rose-500 bg-white shadow-md">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><Eye className="text-rose-500 w-5"/> Đọc</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Đọc thư cảm ơn nhận được món quà sinh nhật từ người thân.</p>
              </div>
              <div className="slide-card p-6 space-y-4 border-t-4 border-t-emerald-500 bg-white shadow-md">
                 <h4 className="font-black text-theme-dark text-lg flex items-center gap-2"><PenTool className="text-emerald-500 w-5"/> Viết</h4>
                 <p className="font-medium text-sm text-theme-dark/70">Viết thư hồi đáp bày tỏ niềm vui khi nhận được quà giáng sinh.</p>
              </div>
            </div>
          </div>
        );
      case 18:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
            <span className="px-6 py-2 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-full text-sm inline-block mx-auto mb-4">TIẾT 8</span>
            <div className="w-20 h-20 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckSquare size={36} />
            </div>
            <h2 className="text-4xl font-display font-black text-theme-dark">Ôn Tập & Kiểm Tra Cuối Bài</h2>
            <div className="slide-card p-10 bg-white shadow-xl border-2 border-emerald-100 space-y-6 text-left">
               <h4 className="font-black text-emerald-600 text-xl border-b border-emerald-100 pb-4">1. Nhiệm vụ tổng kết:</h4>
               <ul className="font-medium text-theme-dark/70 list-disc pl-5 space-y-2">
                 <li>Thực hành viết thư cảm ơn trên diễn đàn thảo luận.</li>
                 <li>Hoàn thành bài tập Arbeitsbuch trang 80-82.</li>
                 <li>Làm Lektionstest 14 trên Moodle.</li>
               </ul>
            </div>
          </div>
        );
      case 19:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark">Hãy ôn tập kỹ!</h2>
            <div className="slide-card p-10 bg-amber-50 border-2 border-amber-200 mt-6 text-left">
               <h4 className="font-black text-amber-600 text-xl mb-4">Ghi nhớ quan trọng:</h4>
               <p className="text-amber-800 font-medium leading-relaxed font-bold">
                 Passiv (Thể bị động) là một trong những phần ngữ pháp khó ở A2 nhưng rất hay dùng trong văn bản hoặc tin tức. Hãy luyện tập chuyển đổi từ chủ động sang bị động thật nhuyễn!
               </p>
            </div>
          </div>
        );
      case 20:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-theme-dark shadow-[16px_16px_0_0_#27272a] transform -rotate-1 hover:rotate-1 transition-transform max-w-xl mx-auto cursor-pointer" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -right-8 text-6xl animate-bounce">🎁</div>
                <h2 className="text-5xl font-black text-theme-dark uppercase tracking-tighter leading-tight mb-6">
                   Lektion 14 <br/> Đã hoàn thành!
                </h2>
                <div className="w-16 h-2 bg-emerald-500 mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-theme-dark/60 uppercase tracking-widest text-sm bg-theme-cream inline-block px-4 py-2 rounded-lg border-2 border-dashed border-theme-dark/20">
                   Bạn đã có thể tự hiểu cách hoạt động của Passiv!
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
              Sơ đồ Lektion 14
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
              <button onClick={() => setCurrentSlide(-1)} className="text-[10px] text-emerald-600 flex items-center justify-center font-bold hover:underline uppercase tracking-widest p-1 mt-1 bg-emerald-500/10 rounded-lg sm:bg-transparent sm:mt-0 sm:p-0">
                Xem Lộ Trình
              </button>
            </div>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 2 && currentSlide !== totalSlides-1}
              className="px-4 md:px-6 py-2 md:py-3 bg-emerald-500 text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
            >
              <span className="hidden sm:inline">
                {currentSlide === totalSlides-1 ? 'Đóng lại' : 'Tiếp'}
              </span> 
              <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
