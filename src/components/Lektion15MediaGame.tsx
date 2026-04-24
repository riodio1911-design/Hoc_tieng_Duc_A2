import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, RotateCcw, Clapperboard } from 'lucide-react';

interface ComponentProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

interface Step {
  id: string;
  correctOrder: number;
  wordSnippet: string;
  vi: string;
}

export default function Lektion15MediaGame({ playAudio, playingId }: ComponentProps) {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [placedSteps, setPlacedSteps] = useState<Step[]>([]);
  const [availableSteps, setAvailableSteps] = useState<Step[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);

  // Level 1: TV Production Workflow
  const level1Steps: Step[] = [
    { id: 's1', correctOrder: 1, wordSnippet: 'Zuerst wird das Drehbuch geschrieben.', vi: 'Đầu tiên, kịch bản được viết.' },
    { id: 's2', correctOrder: 2, wordSnippet: 'Dann werden die Schauspieler instruiert.', vi: 'Sau đó, diễn viên được chỉ đạo.' },
    { id: 's3', correctOrder: 3, wordSnippet: 'Danach wird der Film im Studio gedreht.', vi: 'Tiếp theo, phim được quay ở trường quay.' },
    { id: 's4', correctOrder: 4, wordSnippet: 'Am Ende wird die Sendung im Fernsehen gezeigt.', vi: 'Cuối cùng, chương trình được chiếu trên TV.' }
  ];

  // Level 2: Online Shopping Workflow
  const level2Steps: Step[] = [
    { id: 's5', correctOrder: 1, wordSnippet: 'Zuerst wird im Computer eingeloggt.', vi: 'Đầu tiên, đăng nhập vào máy tính.' },
    { id: 's6', correctOrder: 2, wordSnippet: 'Dann wird das Produkt ausgesucht.', vi: 'Sau đó, chọn sản phẩm.' },
    { id: 's7', correctOrder: 3, wordSnippet: 'Danach wird die Bestellung abgeschickt.', vi: 'Tiếp theo, đơn hàng được gửi đi.' },
    { id: 's8', correctOrder: 4, wordSnippet: 'Am Ende wird das Paket geliefert.', vi: 'Cuối cùng, gói hàng được giao.' }
  ];

  // Initialize Level
  React.useEffect(() => {
    initLevel(1);
  }, []);

  const initLevel = (level: number) => {
    const steps = level === 1 ? [...level1Steps] : [...level2Steps];
    // Shuffle
    for (let i = steps.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [steps[i], steps[j]] = [steps[j], steps[i]];
    }
    setAvailableSteps(steps);
    setPlacedSteps([]);
    setIsSuccess(false);
    setCurrentLevel(level);
  };

  const handleSelectStep = (step: Step) => {
    // Check if step is the next correct one
    const expectedOrder = placedSteps.length + 1;
    if (step.correctOrder === expectedOrder) {
      setPlacedSteps([...placedSteps, step]);
      setAvailableSteps(availableSteps.filter(s => s.id !== step.id));
      
      // Check success
      if (expectedOrder === level1Steps.length) { // Both levels have 4 steps
        setTimeout(() => setIsSuccess(true), 500);
      }
    } else {
      // Wrong selection - animate error (could add a shake effect state)
      playAudio("Falsch", 'error'); // just a beep or nothing
    }
  };

  if (isSuccess && currentLevel === 1) {
    return (
      <div className="bg-white p-12 rounded-[32px] shadow-xl text-center max-w-2xl mx-auto space-y-6">
         <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Clapperboard size={48} className="text-emerald-500" />
        </div>
        <h2 className="text-4xl font-black text-theme-dark">Chính xác! Cắt! (Cut!)</h2>
        <p className="text-lg font-bold text-theme-dark/60">
          Bạn đã nắm rõ quy trình sản xuất TV.
        </p>
        <button 
          onClick={() => initLevel(2)}
          className="px-8 py-3 bg-theme-primary text-white rounded-2xl font-black shadow-lg hover:scale-105 transition-all mt-4 inline-block"
        >
          Tiếp tục: Mua sắm Online
        </button>
      </div>
    );
  }

  if (isSuccess && currentLevel === 2) {
    return (
      <div className="bg-white p-12 rounded-[32px] shadow-xl text-center max-w-2xl mx-auto space-y-6">
         <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={48} className="text-emerald-500" />
        </div>
        <h2 className="text-4xl font-black text-theme-dark">Hoàn thành xuất sắc!</h2>
        <p className="text-lg font-bold text-theme-dark/60">
          Bạn đã nắm vững quy trình dùng Passiv + Trạng từ chỉ thứ tự.
        </p>
        <button 
          onClick={() => initLevel(1)}
          className="px-8 py-3 bg-theme-secondary text-white rounded-2xl font-black shadow-lg hover:scale-105 transition-all mt-4 flex items-center justify-center gap-2 mx-auto"
        >
          <RotateCcw size={20} /> Chơi lại từ đầu
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="bg-white rounded-[32px] overflow-hidden shadow-xl border-2 border-theme-primary/10">
        <div className="bg-theme-primary p-6 text-white text-center">
            <h2 className="text-2xl font-black mb-2">
              {currentLevel === 1 ? 'Quy trình sản xuất phim' : 'Quy trình mua sắm Online'}
            </h2>
            <p className="font-bold opacity-80">Sắp xếp các bước theo thứ tự hợp lý</p>
        </div>

        <div className="p-8">
           <div className="flex flex-col md:flex-row gap-8">
             {/* Placed Steps (Target) */}
             <div className="flex-1 space-y-4">
               <h3 className="text-xl font-bold text-theme-dark/40 uppercase tracking-widest text-center mb-6">Quy trình</h3>
               {[1, 2, 3, 4].map((orderIndex) => {
                  const step = placedSteps.find(s => s.correctOrder === orderIndex);
                  return (
                    <div 
                      key={`slot-${orderIndex}`} 
                      className={`h-24 rounded-2xl border-4 border-dashed flex items-center justify-center p-4 transition-all ${
                        step ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 bg-slate-50'
                      }`}
                    >
                      {step ? (
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="w-full h-full flex flex-col justify-center items-center text-center"
                        >
                          <p className="font-bold text-theme-dark">{step.wordSnippet}</p>
                          <p className="text-xs text-theme-dark/50 mt-1">{step.vi}</p>
                        </motion.div>
                      ) : (
                        <span className="text-2xl font-black text-slate-300">{orderIndex}</span>
                      )}
                    </div>
                  );
               })}
             </div>

             {/* Available Steps (Source) */}
             <div className="flex-1 space-y-4 border-l-2 border-slate-100 pl-0 md:pl-8 pt-8 md:pt-0">
               <h3 className="text-xl font-bold text-theme-dark/40 uppercase tracking-widest text-center mb-6">Lựa chọn</h3>
               <div className="space-y-4">
                 <AnimatePresence>
                   {availableSteps.map(step => (
                     <motion.button
                       key={step.id}
                       initial={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 0.8 }}
                       onClick={() => handleSelectStep(step)}
                       className="w-full p-4 bg-white border-2 border-theme-primary/20 rounded-2xl text-left hover:bg-theme-primary/5 hover:border-theme-primary hover:-translate-y-1 transition-all shadow-sm group"
                     >
                       <p className="font-bold text-theme-dark group-hover:text-theme-primary transition-colors">{step.wordSnippet}</p>
                       <p className="text-xs text-theme-dark/40 mt-1">{step.vi}</p>
                     </motion.button>
                   ))}
                 </AnimatePresence>
                 {availableSteps.length === 0 && (
                   <div className="h-24 flex items-center justify-center text-theme-dark/30 font-bold italic">
                     Không còn lựa chọn nào
                   </div>
                 )}
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
