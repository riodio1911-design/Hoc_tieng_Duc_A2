import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, MapPin, Navigation, ArrowRight } from 'lucide-react';

export default function Lektion18NavigatorGame() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'end'>('intro');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const levels = [
    {
      situation: "Bạn cần nói về ước mơ du lịch.",
      question: "Ich träume ___________ Urlaub.",
      options: [
        { id: "A", text: "von einem", isCorrect: true },
        { id: "B", text: "über einen", isCorrect: false },
        { id: "C", text: "für den", isCorrect: false },
      ],
      explanation: "träumen đi với giới từ 'von' + Dativ."
    },
    {
      situation: "Chỉ đường đi đến bãi đỗ xe.",
      question: "Fahren Sie ___________ Parkplatz.",
      options: [
        { id: "A", text: "durch den", isCorrect: false },
        { id: "B", text: "über dem", isCorrect: false },
        { id: "C", text: "bis zum", isCorrect: true },
      ],
      explanation: "Chỉ đường đến tận một nơi nào đó dùng 'bis zu' + Dativ (zum = zu dem)."
    },
    {
      situation: "Bạn đang hướng dẫn ai đó đi qua hầm.",
      question: "Gehen Sie ___________ Tunnel.",
      options: [
        { id: "A", text: "durch den", isCorrect: true },
        { id: "B", text: "über den", isCorrect: false },
        { id: "C", text: "an dem", isCorrect: false },
      ],
      explanation: "Đi xuyên qua một không gian (hầm, rừng) dùng 'durch' + Akkusativ."
    },
    {
      situation: "Nói về sở thích / quan tâm.",
      question: "Interessierst du dich ___________ Klavierkonzerte?",
      options: [
        { id: "A", text: "über", isCorrect: false },
        { id: "B", text: "für", isCorrect: true },
        { id: "C", text: "auf", isCorrect: false },
      ],
      explanation: "sich interessieren đi với giới từ 'für' + Akkusativ."
    },
    {
      situation: "Chỉ đường đi ngang qua tiệm bánh.",
      question: "Gehen Sie ___________ Bäckerei ___________.",
      options: [
        { id: "A", text: "an der ... vorbei", isCorrect: true },
        { id: "B", text: "durch die ... vorbei", isCorrect: false },
        { id: "C", text: "bis zur ... hin", isCorrect: false },
      ],
      explanation: "Cấu trúc đi ngang qua ai/cái gì không dừng lại: an + Dativ + vorbei."
    }
  ];

  const handleAnswer = (optionId: string, isCorrect: boolean) => {
    setSelectedAnswer(optionId);
    if (isCorrect) {
      setScore(s => s + 1);
    }
    
    setTimeout(() => {
      setSelectedAnswer(null);
      if (currentLevel < levels.length - 1) {
        setCurrentLevel(curr => curr + 1);
      } else {
        setGameState('end');
      }
    }, 2800); // Wait time to read explanation
  };

  const restart = () => {
    setCurrentLevel(0);
    setScore(0);
    setGameState('intro');
  };

  if (gameState === 'intro') {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-indigo-500/10 text-center">
        <Navigation size={64} className="mx-auto text-indigo-500 mb-6" />
        <h2 className="text-3xl font-black text-indigo-600 mb-4">Mein Navigator ist hin!</h2>
        <p className="text-theme-dark/70 mb-8 font-medium">Bạn bị lạc đường! Hãy sử dụng đúng các giới từ chỉ đường và động từ để tìm lại hướng đi nhé.</p>
        <button 
          onClick={() => setGameState('playing')}
          className="px-8 py-4 bg-indigo-500 text-white font-black rounded-full hover:bg-theme-dark transition-all hover:scale-105"
        >
          Sửa Navigator
        </button>
      </div>
    );
  }

  if (gameState === 'end') {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-emerald-500/10 text-center">
        <div className="w-24 h-24 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <MapPin size={48} className="text-emerald-500" />
        </div>
        <h2 className="text-3xl font-black text-emerald-600 mb-4">Ziel erreicht! (Đã đến nơi)</h2>
        <p className="text-theme-dark/70 font-medium mb-2">Bạn đã tìm được đường về.</p>
        <p className="text-2xl font-bold text-emerald-500 mb-8">Điểm số: {score} / {levels.length}</p>
        <button 
          onClick={restart}
          className="px-8 py-4 bg-emerald-500 text-white font-black rounded-full hover:bg-theme-dark transition-all hover:scale-105"
        >
          Chơi lại nào!
        </button>
      </div>
    );
  }

  const currentData = levels[currentLevel];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex gap-2">
          {levels.map((_, idx) => (
            <div key={idx} className={`w-3 h-3 rounded-full ${idx === currentLevel ? 'bg-indigo-500 scale-125' : idx < currentLevel ? 'bg-indigo-200' : 'bg-slate-200'}`} />
          ))}
        </div>
        <div className="font-bold text-indigo-600">Trạm {currentLevel + 1} / {levels.length}</div>
      </div>

      <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-indigo-500/10">
        <div className="bg-indigo-50 rounded-2xl p-6 mb-8 border border-indigo-100">
          <p className="text-indigo-800 font-medium mb-2 opacity-80">{currentData.situation}</p>
          <h3 className="text-2xl font-black text-theme-dark">{currentData.question}</h3>
        </div>

        <div className="space-y-4">
          <AnimatePresence>
            {currentData.options.map(option => {
              const isSelected = selectedAnswer === option.id;
              const isCorrectObj = option.isCorrect;
              
              let btnClass = "bg-slate-50 border-slate-200 hover:border-indigo-500/50 hover:bg-indigo-50 text-slate-700";
              let icon = null;

              if (selectedAnswer) {
                if (isCorrectObj) {
                  btnClass = "bg-emerald-50 border-emerald-500/50 text-emerald-700";
                  icon = <CheckCircle2 className="text-emerald-500" />;
                } else if (isSelected) {
                  btnClass = "bg-rose-50 border-rose-500/50 text-rose-700";
                  icon = <XCircle className="text-rose-500" />;
                } else {
                   btnClass = "bg-slate-50 border-slate-200 text-slate-400 opacity-50";
                }
              }

              return (
                <motion.button
                  key={option.id}
                  layout
                  disabled={selectedAnswer !== null}
                  whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                  onClick={() => handleAnswer(option.id, option.isCorrect)}
                  className={`w-full p-4 rounded-2xl border-2 font-bold text-left md:text-lg flex justify-between items-center transition-colors ${btnClass}`}
                >
                  <span>{option.text}</span>
                  {icon && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>{icon}</motion.div>}
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedAnswer && (
            <motion.div 
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              className="mt-6 p-4 bg-blue-50 text-blue-800 rounded-xl border border-blue-200 font-medium flex items-start gap-3"
            >
              <div className="mt-1"><ArrowRight size={18} className="text-blue-500" /></div>
              <p>{currentData.explanation}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
