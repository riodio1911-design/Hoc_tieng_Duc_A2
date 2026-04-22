import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, ArrowRight, Trophy, HelpCircle, RefreshCcw, Volume2, Languages, Loader2 } from 'lucide-react';

const QUESTIONS = [
  {
    desc: "Das brauchen Sie für eine Reise ins Ausland. Sie können es beim Konsulat beantragen.",
    translation: "Bạn cần cái này cho một chuyến đi ra nước ngoài. Bạn có thể xin nó tại lãnh sự quán.",
    word: "Visum",
    hint: "Bắt đầu bằng chữ V, gồm 5 chữ cái"
  },
  {
    desc: "Sie liegt zwischen zwei Ländern. Hier gibt es oft Kontrollen.",
    translation: "Nó nằm giữa hai quốc gia. Ở đây thường xuyên có kiểm tra.",
    word: "Grenze",
    hint: "Bắt đầu bằng chữ G, gồm 6 chữ cái"
  },
  {
    desc: "Sie können ihn verlängern, wenn er nicht mehr gültig ist.",
    translation: "Bạn có thể gia hạn nó nếu nó không còn hiệu lực.",
    word: "Pass",
    hint: "Hộ chiếu, 4 chữ cái, bắt đầu bằng P"
  },
  {
    desc: "Hier werden Ihre Waren und Ihr Gepäck kontrolliert, wenn Sie in ein anderes Land reisen.",
    translation: "Đây là nơi hàng hoá và hành lý của bạn bị kiểm tra khi bạn đi sang một nước khác.",
    word: "Zoll",
    hint: "Hải quan, 4 chữ cái, bắt đầu bằng Z"
  },
  {
    desc: "Dort können Sie ein Visum beantragen.",
    translation: "Bạn có thể xin một cái thị thực ở đó.",
    word: "Konsulat",
    hint: "Lãnh sự quán, 8 chữ cái, bắt đầu bằng K"
  },
  {
    desc: "Der Moment, wenn das Flugzeug am Flughafen startet und in die Luft geht.",
    translation: "Khoảnh khắc khi máy bay rời sân bay và cất cánh.",
    word: "Abflug",
    hint: "Sự khởi hành máy bay, bắt đầu bằng chữ A, gồm 6 chữ cái"
  },
  {
    desc: "Der Moment, wenn man mit dem Zug oder dem Flugzeug am Ziel ankommt.",
    translation: "Khoảnh khắc khi bạn đến đích bằng phương tiện như tàu hỏa hoặc máy bay.",
    word: "Ankunft",
    hint: "Sự đến nơi, bắt đầu bằng chữ A, gồm 7 chữ cái"
  },
  {
    desc: "Die Verbindung für die Weiterreise zum Beispiel am Bahnhof oder am Flughafen.",
    translation: "Chuyến trung chuyển hoặc kết nối cho hành trình tiếp theo của bạn tại ga hoặc sân bay.",
    word: "Anschluss",
    hint: "Chuyến tiếp nối, bắt đầu bằng chữ A, gồm 9 chữ cái"
  },
  {
    desc: "Alle Koffer und Taschen, die Sie auf eine Reise mitnehmen.",
    translation: "Tất cả các loại vali và túi xách mà bạn mang theo trong chuyến đi.",
    word: "Gepäck",
    hint: "Hành lý, bắt đầu bằng chữ G, gồm 6 chữ cái"
  },
  {
    desc: "Wenn der Zug oder das Flugzeug nicht pünktlich ist, sondern später ankommt.",
    translation: "Khi một chuyến tàu hoặc máy bay không đúng giờ mà đến muộn hơn so với lịch trình.",
    word: "Verspätung",
    hint: "Sự trễ giờ, delay. Bắt đầu bằng chữ V, gồm 10 chữ cái"
  }
];

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion24WordGuessingGame({ playAudio, playingId }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [completed, setCompleted] = useState<number[]>([]);

  const question = QUESTIONS[currentIndex];
  const isAllCompleted = completed.length === QUESTIONS.length;

  const handleCheck = () => {
    if (!inputValue.trim()) return;
    
    if (inputValue.toLowerCase().trim() === question.word.toLowerCase()) {
      setStatus('correct');
      if (!completed.includes(currentIndex)) {
        setCompleted([...completed, currentIndex]);
      }
    } else {
      setStatus('wrong');
      setTimeout(() => setStatus('idle'), 1500);
    }
  };

  const handleNext = () => {
    setInputValue("");
    setShowHint(false);
    setShowTranslation(false);
    setStatus('idle');
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setInputValue("");
    setShowHint(false);
    setShowTranslation(false);
    setStatus('idle');
    setCompleted([]);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="bg-white rounded-[32px] shadow-2xl border-4 border-theme-dark/5 p-6 md:p-10 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-theme-primary/10 rounded-full blur-2xl opacity-60 translate-y-1/3 -translate-x-1/4"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
             <h2 className="text-3xl font-black text-theme-dark flex items-center gap-3">
               <HelpCircle className="w-8 h-8 text-amber-500" />
               Was passt? (Đoán từ)
             </h2>
             <div className="flex items-center gap-2 font-bold text-theme-dark/60 bg-theme-cream px-4 py-2 rounded-xl">
                <span>Tiến độ:</span>
                <span className="text-theme-dark text-lg">{completed.length} / {QUESTIONS.length}</span>
             </div>
          </div>

          <AnimatePresence mode="wait">
            {isAllCompleted ? (
              <motion.div 
                key="completed"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-6"
              >
                 <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center text-amber-500 mb-4">
                    <Trophy className="w-12 h-12" />
                 </div>
                 <h3 className="text-3xl font-black text-theme-dark">Chúc mừng! Bạn đã giải mã toàn bộ.</h3>
                 <p className="text-lg font-medium text-theme-dark/70 max-w-md">
                   Bạn đã ghi nhớ rất tốt các từ vựng chủ đề Xuất Nhập Cảnh và Du lịch.
                 </p>
                 <button 
                   onClick={resetGame}
                   className="mt-4 px-8 py-4 bg-theme-dark text-white rounded-2xl font-black shadow-xl hover:scale-105 transition-all flex items-center gap-3"
                 >
                   <RefreshCcw className="w-5 h-5" /> Chơi lại lần nữa
                 </button>
              </motion.div>
            ) : (
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                {/* Progress bar */}
                <div className="flex gap-2 mb-4">
                  {QUESTIONS.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-2 flex-1 rounded-full transition-colors ${i === currentIndex ? 'bg-amber-500' : completed.includes(i) ? 'bg-emerald-400' : 'bg-theme-dark/10'}`}
                    />
                  ))}
                </div>

                <div className="bg-theme-cream/40 p-6 md:p-8 rounded-3xl border-2 border-theme-dark/5 space-y-4">
                   <div className="flex items-start justify-between gap-4">
                     <h3 className="text-xl md:text-2xl font-bold text-theme-dark leading-relaxed flex-1">
                       "{question.desc}"
                     </h3>
                     <div className="flex items-center gap-2 shrink-0">
                        <button 
                          onClick={() => playAudio(question.desc, `l24_guess_${currentIndex}_de`)}
                          className="w-10 h-10 rounded-xl bg-white shadow-sm border border-theme-dark/10 text-theme-primary flex items-center justify-center hover:bg-theme-primary/10 transition-colors"
                          title="Nghe câu hỏi"
                        >
                          {playingId === `l24_guess_${currentIndex}_de` ? <Loader2 className="w-5 h-5 animate-spin" /> : <Volume2 className="w-5 h-5" />}
                        </button>
                        <button 
                          onClick={() => setShowTranslation(!showTranslation)}
                          className={`w-10 h-10 rounded-xl shadow-sm border flex items-center justify-center transition-colors ${showTranslation ? 'bg-theme-primary text-white border-theme-primary' : 'bg-white border-theme-dark/10 text-theme-primary hover:bg-theme-primary/10'}`}
                          title="Dịch nghĩa"
                        >
                          <Languages className="w-5 h-5" />
                        </button>
                     </div>
                   </div>

                   <AnimatePresence>
                     {showTranslation && (
                       <motion.div 
                         initial={{ opacity: 0, height: 0 }}
                         animate={{ opacity: 1, height: 'auto' }}
                         exit={{ opacity: 0, height: 0 }}
                         className="pt-4 border-t-2 border-theme-dark/5"
                       >
                         <p className="text-lg font-medium text-theme-dark/70">
                           {question.translation}
                         </p>
                       </motion.div>
                     )}
                   </AnimatePresence>
                </div>

                <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
                  <div className="relative flex-1">
                    <input 
                      type="text" 
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                        if (status === 'wrong') setStatus('idle');
                      }}
                      onKeyDown={(e) => e.key === 'Enter' && status !== 'correct' && handleCheck()}
                      disabled={status === 'correct'}
                      placeholder="Gõ từ khóa vào đây..."
                      className={`w-full p-4 rounded-2xl border-4 font-black text-2xl transition-all focus:outline-none focus:border-amber-400
                        ${status === 'correct' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 
                          status === 'wrong' ? 'border-red-500 bg-red-50 text-red-700 animate-shake' : 
                          'border-theme-dark/10 bg-white text-theme-dark'
                        }
                      `}
                      autoFocus
                    />
                    {status === 'correct' && (
                      <motion.div 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }} 
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500"
                      >
                        <CheckCircle2 className="w-8 h-8" />
                      </motion.div>
                    )}
                    {status === 'wrong' && (
                      <motion.div 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }} 
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500"
                      >
                        <AlertCircle className="w-8 h-8" />
                      </motion.div>
                    )}
                  </div>
                  
                  {status === 'correct' ? (
                    <button 
                      onClick={handleNext}
                      className="px-8 py-4 bg-emerald-500 text-white rounded-2xl font-black text-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 whitespace-nowrap"
                    >
                      Tiếp tục <ArrowRight className="w-6 h-6" />
                    </button>
                  ) : (
                    <button 
                      onClick={handleCheck}
                      className="px-8 py-4 bg-theme-dark text-white rounded-2xl font-black text-lg hover:bg-theme-primary transition-colors shadow-xl shadow-theme-dark/20 whitespace-nowrap"
                    >
                      Kiểm tra
                    </button>
                  )}
                </div>

                {!showHint ? (
                  <button 
                    onClick={() => setShowHint(true)}
                    className="text-theme-dark/50 hover:text-amber-600 font-bold text-sm underline decoration-2 underline-offset-4 transition-colors"
                  >
                    Xem gợi ý
                  </button>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-amber-50 text-amber-800 p-4 rounded-xl border border-amber-200 font-medium"
                  >
                    💡 <strong className="font-black">Gợi ý:</strong> {question.hint}
                  </motion.div>
                )}

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
