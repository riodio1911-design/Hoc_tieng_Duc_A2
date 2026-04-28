import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, ArrowRight, CheckCircle2, RotateCcw, Volume2, Award, Zap } from 'lucide-react';

const EXERCISES = [
  {
    type: 'fill-in',
    question: 'Điền đại từ phản thân thích hợp (mich, dich, sich, uns, euch):',
    sentence: 'Ich freue ___ auf das Wochenende.',
    options: ['mich', 'dich', 'sich', 'uns', 'euch'],
    correctAnswer: 'mich',
    translation: 'Tôi rất mong chờ đến cuối tuần.'
  },
  {
    type: 'fill-in',
    question: 'Điền đại từ phản thân thích hợp:',
    sentence: 'Wir unterhalten ___ über das Wetter.',
    options: ['mich', 'dich', 'sich', 'uns', 'euch'],
    correctAnswer: 'uns',
    translation: 'Chúng tôi trò chuyện về thời tiết.'
  },
  {
    type: 'fill-in',
    question: 'Điền đại từ phản thân thích hợp:',
    sentence: 'Ärgert ihr ___ oft?',
    options: ['mich', 'dich', 'sich', 'uns', 'euch'],
    correctAnswer: 'euch',
    translation: 'Các bạn có thường tức giận không?'
  },
  {
    type: 'fill-in',
    question: 'Điền đại từ phản thân thích hợp:',
    sentence: 'Sie (cô ấy) fühlt ___ heute nicht gut.',
    options: ['mich', 'dich', 'sich', 'uns', 'euch'],
    correctAnswer: 'sich',
    translation: 'Hôm nay cô ấy cảm thấy không khỏe.'
  },
  {
    type: 'multiple-choice',
    question: 'Chọn câu chúc mừng phù hợp cho lễ kỷ niệm công ty:',
    options: ['Guten Appetit!', 'Herzlichen Glückwunsch zum Jubiläum!', 'Schönes Wochenende!', 'Gute Reise!'],
    correctAnswer: 'Herzlichen Glückwunsch zum Jubiläum!',
    translation: 'Chúc mừng nhân ngày kỷ niệm!'
  },
  {
    type: 'multiple-choice',
    question: 'Cách nói "Tôi thấy buồn khi người ta vứt đi nhiều đồ như vậy" trong tiếng Đức:',
    options: [
      'Ich bin froh, dass man so viel wegwirft.',
      'Ich finde es traurig, dass man so viel wegwirft.',
      'Ich denke, dass man nicht wegwerfen soll.'
    ],
    correctAnswer: 'Ich finde es traurig, dass man so viel wegwirft.',
    translation: 'Tôi thấy buồn khi người ta vứt đi nhiều đồ như vậy.'
  }
];

export default function Lektion11GrammarEx({ playAudio }: { playAudio: (text: string, id: string) => void }) {
  const [currentEx, setCurrentEx] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const ex = EXERCISES[currentEx];

  const handleAnswer = (opt: string) => {
    if (showFeedback) return;
    
    setSelectedWord(opt);
    setShowFeedback(true);
    
    if (opt === ex.correctAnswer) {
      setScore(s => s + 1);
      playAudio('Richtig!', 'correct');
    } else {
      playAudio('Falsch!', 'incorrect');
    }
  };

  const nextExercise = () => {
    if (currentEx < EXERCISES.length - 1) {
      setCurrentEx(c => c + 1);
      setSelectedWord(null);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
    }
  };

  const reset = () => {
    setCurrentEx(0);
    setScore(0);
    setIsFinished(false);
    setSelectedWord(null);
    setShowFeedback(false);
  };

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-3xl shadow-xl border-4 border-theme-secondary/10 max-w-2xl mx-auto space-y-6">
        <div className="w-24 h-24 bg-theme-secondary/10 text-theme-secondary rounded-full flex items-center justify-center relative">
          <Award size={48} />
          <Zap className="absolute -top-2 -right-2 text-amber-400 w-8 h-8 drop-shadow-md" />
        </div>
        <h2 className="text-4xl font-display font-black text-theme-dark uppercase">Hoàn thành bài tập!</h2>
        <div className="bg-theme-cream/50 px-8 py-6 rounded-2xl border-2 border-dashed border-theme-dark/10 text-center w-full">
          <p className="text-xl font-bold text-theme-dark/60 mb-2">Điểm của bạn</p>
          <p className="text-6xl font-black text-theme-secondary">{score} <span className="text-3xl text-theme-dark/30">/ {EXERCISES.length}</span></p>
        </div>
        <button
          onClick={reset}
          className="flex items-center gap-2 bg-theme-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-theme-secondary/90 hover:scale-105 hover:shadow-xl transition-all uppercase tracking-widest"
        >
          <RotateCcw size={20} /> Làm lại
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between pb-6 border-b-2 border-theme-dark/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-theme-secondary/10 text-theme-secondary rounded-xl flex items-center justify-center">
            <Target size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-display font-black text-theme-dark">Luyện tập Ngữ pháp</h2>
            <p className="text-theme-dark/60 font-bold uppercase tracking-widest text-xs">Câu {currentEx + 1} / {EXERCISES.length}</p>
          </div>
        </div>
        <div className="bg-theme-cream px-4 py-2 rounded-xl font-bold text-theme-dark">
          Điểm: <span className="text-theme-secondary">{score}</span>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-theme-dark/5 relative overflow-hidden">
        <h3 className="text-xl font-black text-theme-dark mb-6">{ex.question}</h3>

        {ex.type === 'fill-in' && (
          <div className="space-y-8">
            <p className="text-3xl font-bold text-theme-dark bg-theme-cream/50 p-6 rounded-2xl border-2 border-dashed border-theme-dark/20 text-center">
              {ex.sentence!.split('___').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="inline-block px-6 py-1 mx-2 bg-white rounded-lg border-2 border-theme-dark/10 text-theme-secondary font-black shadow-inner min-w-[80px]">
                      {selectedWord || '...'}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {ex.options!.map((opt, idx) => {
                let btnClass = "bg-white text-theme-dark border-theme-dark/10 hover:border-theme-secondary/50";
                if (showFeedback) {
                  if (opt === ex.correctAnswer) btnClass = "bg-emerald-500 text-white border-emerald-500 shadow-lg scale-105 z-10";
                  else if (opt === selectedWord) btnClass = "bg-rose-500 text-white border-rose-500 shadow-lg scale-105 z-10";
                  else btnClass = "opacity-50 border-gray-200 bg-gray-50";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(opt)}
                    disabled={selectedWord !== null}
                    className={`px-6 py-3 rounded-xl font-bold text-lg transition-all border-2 ${btnClass}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {ex.type === 'multiple-choice' && (
          <div className="space-y-4">
             <div className="flex flex-col gap-4">
              {ex.options!.map((opt, idx) => {
                let btnClass = "bg-white text-theme-dark border-theme-dark/10 hover:border-theme-secondary/50";
                if (showFeedback) {
                  if (opt === ex.correctAnswer) btnClass = "bg-emerald-500 text-white border-emerald-500 shadow-lg scale-105 z-10";
                  else if (opt === selectedWord) btnClass = "bg-rose-500 text-white border-rose-500 shadow-lg scale-105 z-10";
                  else btnClass = "opacity-50 border-gray-200 bg-gray-50";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(opt)}
                    disabled={selectedWord !== null}
                    className={`w-full p-4 rounded-2xl font-bold text-lg text-left transition-all border-2 flex items-center justify-between group ${btnClass}`}
                  >
                    <span>{opt}</span>
                    {selectedWord !== null && opt === ex.correctAnswer && <CheckCircle2 className="text-emerald-500" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 space-y-6"
            >
              <div className="bg-theme-cream/30 p-4 rounded-xl border border-theme-dark/10">
                <p className="font-bold text-theme-dark/80 flex items-center gap-2">
                   <Volume2 size={18} className="text-theme-secondary"/> {ex.translation}
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={nextExercise}
                  className="flex items-center gap-2 bg-theme-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-black hover:scale-105 hover:shadow-xl transition-all"
                >
                  {currentEx < EXERCISES.length - 1 ? 'Tiếp tục' : 'Hoàn thành'} <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
