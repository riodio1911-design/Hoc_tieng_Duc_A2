import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, ArrowRight, Trophy, Map, RefreshCcw, Volume2, Languages, Loader2 } from 'lucide-react';

const QUIZ_QUESTIONS = [
  {
    id: 1,
    q: "Welches Land ist am kleinsten?",
    translation: "Nước nào nhỏ nhất?",
    options: ["Deutschland", "Österreich", "Die Schweiz"],
    answers: ["Die Schweiz"],
    type: "single",
    expCorrect: "Chính xác! Thụy Sĩ là nước nhỏ nhất trong 3 nước D-A-CH (khoảng 41,285 km²).",
    expWrong: "Sai rồi. Đức là lớn nhất, Áo lớn thứ hai, Thụy Sĩ mới là nước nhỏ nhất."
  },
  {
    id: 2,
    q: "Welches Land hat die längste Grenze?",
    translation: "Nước nào có đường biên giới dài nhất?",
    options: ["Deutschland", "Österreich", "Die Schweiz"],
    answers: ["Deutschland"],
    type: "single",
    expCorrect: "Chính xác! Đức có đường biên giới siêu dài vì nằm giữa trung tâm châu Âu và giáp với 9 quốc gia khác nhau.",
    expWrong: "Chưa đúng. Đức giáp tới 9 quốc gia nên có tổng đường biên giới dài nhất trong 3 nước này."
  },
  {
    id: 3,
    q: "In welchen Ländern liegt der Bodensee? (Chọn nhiều đáp án)",
    translation: "Hồ Bodensee (hồ Constance) nằm ở những quốc gia nào?",
    options: ["In Deutschland", "In Österreich", "In der Schweiz"],
    answers: ["In Deutschland", "In Österreich", "In der Schweiz"],
    type: "multiple",
    expCorrect: "Xuất sắc! Hồ Bodensee là điểm giao tự nhiên cực kỳ nổi tiếng của cả 3 nước Đức, Áo và Thụy Sĩ.",
    expWrong: "Hồ Bodensee giáp ranh với cả 3 quốc gia: Đức, Áo và Thụy Sĩ. Bạn cần chọn tất cả các đáp án!"
  },
  {
    id: 4,
    q: "Welches Land hat die meisten Amtssprachen?",
    translation: "Nước nào có nhiều ngôn ngữ chính thức nhất?",
    options: ["Deutschland", "Österreich", "Die Schweiz"],
    answers: ["Die Schweiz"],
    type: "single",
    expCorrect: "Đúng rồi! Thụy Sĩ có tới 4 ngôn ngữ chính thức: Đức, Pháp, Ý và Romansh.",
    expWrong: "Đức và Áo chủ yếu dùng tiếng Đức. Thụy Sĩ mới là nước có nhiều ngôn ngữ nhất (4 ngôn ngữ chính thức)."
  },
  {
    id: 5,
    q: "Was ist das bekannteste Schweizer Nationalgericht?",
    translation: "Món ăn quốc gia nổi tiếng nhất của Thụy Sĩ là gì?",
    options: ["Gulasch", "Käsefondue", "Labskaus"],
    answers: ["Käsefondue"],
    type: "single",
    expCorrect: "Chuẩn xác! Käsefondue (Lẩu phô mai) là một món ăn biểu tượng, không thể thiếu vào mùa đông của Thụy Sĩ.",
    expWrong: "Gulasch nổi tiếng ở Áo (từ Hungary), Labskaus là đặc sản Bắc Đức. Käsefondue (lẩu phô mai) mới là món của Thụy Sĩ."
  },
  {
    id: 6,
    q: "Welches ist die größte Stadt in Österreich?",
    translation: "Thành phố nào lớn nhất ở Áo?",
    options: ["Graz", "Linz", "Wien"],
    answers: ["Wien"],
    type: "single",
    expCorrect: "Đúng rồi! Wien (Vienna) vừa là thủ đô, vừa là thành phố đông dân và lớn nhất của nước Áo.",
    expWrong: "Graz và Linz là các thành phố lớn thứ 2 và thứ 3. Wien (Thủ đô) mới là thành phố lớn nhất của Áo."
  },
  {
    id: 7,
    q: "Welches Land ist für seine Kaffeehäuser bekannt?",
    translation: "Nước nào nổi tiếng với các quán cà phê truyền thống (Kaffeehäuser)?",
    options: ["Deutschland", "Österreich", "Die Schweiz"],
    answers: ["Österreich"],
    type: "single",
    expCorrect: "Chính xác! 'Văn hóa quán cà phê Viên' (Wiener Kaffeehaus) của Áo vô cùng nổi tiếng và còn được UNESCO công nhận.",
    expWrong: "Áo (đặc biệt là thủ đô Wien) mới là nơi nổi danh toàn thế giới với di sản 'Văn hóa quán cà phê' này."
  },
  {
    id: 8,
    q: "Welches Land hat den höchsten Berg?",
    translation: "Nước nào có ngọn núi cao nhất?",
    options: ["Deutschland", "Österreich", "Die Schweiz"],
    answers: ["Die Schweiz"],
    type: "single",
    expCorrect: "Chính xác! Đỉnh Dufourspitze ở Thụy Sĩ cao tới 4,634m. Thụy Sĩ sở hữu rất nhiều ngọn núi cao bật nhất dãy Alps.",
    expWrong: "Thụy Sĩ sở hữu những đỉnh núi cao nhất dãy Alps (như Dufourspitze > 4600m). Đỉnh cao nhất của Đức (Zugspitze) chưa tới 3000m."
  },
  {
    id: 9,
    q: "Wie heißt die Hauptstadt von Deutschland?",
    translation: "Thủ đô của nước Đức tên là gì?",
    options: ["Hamburg", "München", "Berlin"],
    answers: ["Berlin"],
    type: "single",
    expCorrect: "Hoàn toàn chính xác! Berlin là thủ đô phồn hoa và cũng là thành phố lớn nhất của Đức.",
    expWrong: "Hamburg và München là hai thành phố cực kỳ nổi tiếng nhưng thủ đô của Đức là Berlin."
  }
];

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion24DACHQuiz({ playAudio, playingId }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [completed, setCompleted] = useState<number[]>([]);
  const [showTranslation, setShowTranslation] = useState(false);

  const question = QUIZ_QUESTIONS[currentIndex];
  const isAllCompleted = completed.length === QUIZ_QUESTIONS.length;

  const toggleOption = (option: string) => {
    if (status !== 'idle') return;

    if (question.type === 'single') {
      setSelectedOptions([option]);
    } else {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter(o => o !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    }
  };

  const handleCheck = () => {
    if (selectedOptions.length === 0) return;

    const isCorrect = 
      selectedOptions.every(opt => question.answers.includes(opt)) && 
      selectedOptions.length === question.answers.length;

    if (isCorrect) {
      setStatus('correct');
      if (!completed.includes(currentIndex)) {
        setCompleted([...completed, currentIndex]);
      }
    } else {
      setStatus('wrong');
      // Remove timeout to let user read the explanation and manually go next, or we can just let them retry.
      // Actually, if it's wrong, we can let the user retry by clicking a retry button, or keep showing wrong until they click next/retry.
    }
  };

  const handleNext = () => {
    setSelectedOptions([]);
    setStatus('idle');
    setShowTranslation(false);
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleRetry = () => {
    setSelectedOptions([]);
    setStatus('idle');
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setSelectedOptions([]);
    setStatus('idle');
    setShowTranslation(false);
    setCompleted([]);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="bg-white rounded-[32px] shadow-2xl border-4 border-theme-dark/5 p-6 md:p-10 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-theme-primary/10 rounded-full blur-2xl opacity-60 translate-y-1/3 -translate-x-1/4"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
             <h2 className="text-3xl font-black text-theme-dark flex items-center gap-3">
               <Map className="w-8 h-8 text-blue-500" />
               D-A-CH Quiz
             </h2>
             <div className="flex items-center gap-2 font-bold text-theme-dark/60 bg-theme-cream px-4 py-2 rounded-xl">
                <span>Tiến độ:</span>
                <span className="text-theme-dark text-lg">{completed.length} / {QUIZ_QUESTIONS.length}</span>
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
                 <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-4">
                    <Trophy className="w-12 h-12" />
                 </div>
                 <h3 className="text-3xl font-black text-theme-dark">Chúc mừng! Bạn vượt qua bài Quiz D-A-CH.</h3>
                 <p className="text-lg font-medium text-theme-dark/70 max-w-md">
                   Bạn đã có một lượng kiến thức Landeskunde tuyệt vời về bộ 3 nước nói tiếng Đức (Đức, Áo, Thụy Sĩ).
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
                  {QUIZ_QUESTIONS.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-2 flex-1 rounded-full transition-colors ${i === currentIndex ? 'bg-blue-500' : completed.includes(i) ? 'bg-emerald-400' : 'bg-theme-dark/10'}`}
                    />
                  ))}
                </div>

                <div className="bg-theme-cream/40 p-6 md:p-8 rounded-3xl border-2 border-theme-dark/5">
                   <div className="flex items-start justify-between gap-4">
                     <h3 className="text-xl md:text-2xl font-bold text-theme-dark leading-relaxed flex-1">
                       {question.id}. {question.q}
                     </h3>
                     <div className="flex gap-2 shrink-0">
                       <button
                         onClick={() => playAudio(question.q, `dach-q-${question.id}`)}
                         className={`p-3 rounded-full transition-all ${playingId === `dach-q-${question.id}` ? 'bg-blue-500 text-white animate-pulse' : 'bg-white text-theme-dark/60 hover:bg-blue-50 shadow-sm hover:text-blue-500 hover:shadow'}`}
                         title="Nghe câu hỏi"
                       >
                         <Volume2 className="w-5 h-5" />
                       </button>
                       <button
                         onClick={() => setShowTranslation(!showTranslation)}
                         className={`p-3 rounded-full transition-all ${showTranslation ? 'bg-emerald-500 text-white' : 'bg-white text-theme-dark/60 hover:bg-emerald-50 shadow-sm hover:text-emerald-500 hover:shadow'}`}
                         title="Dịch nghĩa"
                       >
                         <Languages className="w-5 h-5" />
                       </button>
                     </div>
                   </div>

                   <AnimatePresence>
                     {showTranslation && (
                       <motion.div
                         initial={{ opacity: 0, height: 0, marginTop: 0 }}
                         animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                         exit={{ opacity: 0, height: 0, marginTop: 0 }}
                         className="overflow-hidden"
                       >
                         <div className="p-4 bg-white/60 rounded-2xl border-l-4 border-emerald-500">
                           <p className="text-theme-dark/80 italic font-medium">{question.translation}</p>
                         </div>
                       </motion.div>
                     )}
                   </AnimatePresence>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {question.options.map((opt, i) => {
                    const isSelected = selectedOptions.includes(opt);
                    const isCorrect = status === 'correct' && question.answers.includes(opt);
                    const isWrong = status === 'wrong' && isSelected && !question.answers.includes(opt);
                    const shouldShowCorrectWhenWrong = status === 'wrong' && question.answers.includes(opt);

                    return (
                      <button
                        key={i}
                        onClick={() => toggleOption(opt)}
                        disabled={status === 'correct' || status === 'wrong'}
                        className={`p-4 rounded-2xl font-bold text-lg transition-all border-4 text-left flex items-center justify-between
                          ${isSelected && status === 'idle' ? 'border-theme-primary bg-theme-primary/10 text-theme-primary' : ''}
                          ${!isSelected && status === 'idle' ? 'border-theme-dark/10 bg-white text-theme-dark hover:border-theme-primary/50' : ''}
                          ${isCorrect || shouldShowCorrectWhenWrong ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : ''}
                          ${isWrong ? 'border-red-500 bg-red-50 text-red-700 animate-shake' : ''}
                          ${status !== 'idle' && !isSelected && !isCorrect && !shouldShowCorrectWhenWrong ? 'border-theme-dark/5 bg-gray-50 text-gray-400' : ''}
                        `}
                      >
                        {opt}
                        {(isCorrect || shouldShowCorrectWhenWrong) && <CheckCircle2 className="w-6 h-6 text-emerald-500" />}
                        {isWrong && <AlertCircle className="w-6 h-6 text-red-500" />}
                        {isSelected && status === 'idle' && <div className="w-4 h-4 rounded-full bg-theme-primary"></div>}
                      </button>
                    )
                  })}
                </div>

                <AnimatePresence>
                  {status !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className={`p-6 rounded-2xl border-2 flex gap-4 ${status === 'correct' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-red-50 border-red-200 text-red-800'}`}
                    >
                      <div className="shrink-0 mt-1">
                        {status === 'correct' ? <Trophy className="w-8 h-8 text-emerald-500" /> : <AlertCircle className="w-8 h-8 text-red-500" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{status === 'correct' ? 'Tuyệt vời!' : 'Chưa chính xác'}</h4>
                        <p className="font-medium opacity-90">{status === 'correct' ? question.expCorrect : question.expWrong}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex justify-end pt-4">
                  {status === 'correct' ? (
                    <button 
                      onClick={handleNext}
                      className="px-8 py-4 bg-emerald-500 text-white rounded-2xl font-black text-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20"
                    >
                      Tiếp tục <ArrowRight className="w-6 h-6" />
                    </button>
                  ) : status === 'wrong' ? (
                    <button 
                      onClick={handleRetry}
                      className="px-8 py-4 bg-theme-dark text-white rounded-2xl font-black text-lg hover:bg-theme-secondary transition-colors flex items-center justify-center gap-2 shadow-xl"
                    >
                      <RefreshCcw className="w-5 h-5" /> Thử lại
                    </button>
                  ) : (
                    <button 
                      onClick={handleCheck}
                      disabled={selectedOptions.length === 0 || status !== 'idle'}
                      className="px-8 py-4 bg-theme-dark text-white rounded-2xl font-black text-lg hover:bg-theme-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-theme-dark/20"
                    >
                      Kiểm tra
                    </button>
                  )}
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
