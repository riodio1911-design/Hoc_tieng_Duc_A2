import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, MapPin, Navigation, ArrowRight } from 'lucide-react';

export default function Lektion17TravelGame() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'end'>('intro');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const levels = [
    {
      situation: "Bạn muốn đi tắm biển.",
      question: "Wir fahren ___________.",
      options: [
        { id: "A", text: "am Meer", isCorrect: false },
        { id: "B", text: "ans Meer", isCorrect: true },
        { id: "C", text: "ins Meer", isCorrect: false },
      ],
      explanation: "Chuyển động (Wohin) -> an + Akkusativ = ans Meer."
    },
    {
      situation: "Bạn đang nằm thư giãn trên bãi cỏ.",
      question: "Ich liege ___________.",
      options: [
        { id: "A", text: "auf der Wiese", isCorrect: true },
        { id: "B", text: "auf die Wiese", isCorrect: false },
        { id: "C", text: "in der Wiese", isCorrect: false },
      ],
      explanation: "Đứng yên (Wo) -> auf + Dativ = auf der Wiese."
    },
    {
      situation: "Cả nhà muốn bay đến Tây Ban Nha.",
      question: "Nächstes Jahr fliegen wir ___________.",
      options: [
        { id: "A", text: "in Spanien", isCorrect: false },
        { id: "B", text: "auf Spanien", isCorrect: false },
        { id: "C", text: "nach Spanien", isCorrect: true },
      ],
      explanation: "Đi đến quốc gia không quán từ -> dùng nach."
    },
    {
      situation: "Bạn đang nghỉ dưỡng trên đảo.",
      question: "Wir waren im Urlaub ___________.",
      options: [
        { id: "A", text: "auf einer Insel", isCorrect: true },
        { id: "B", text: "auf eine Insel", isCorrect: false },
        { id: "C", text: "an einer Insel", isCorrect: false },
      ],
      explanation: "Đứng yên (Wo) trên đảo -> auf + Dativ = auf einer Insel."
    },
    {
      situation: "Xe của bạn bị xịt lốp trên cao tốc.",
      question: "Wir hatten eine ___________.",
      options: [
        { id: "A", text: "Autobahn", isCorrect: false },
        { id: "B", text: "Reifenpanne", isCorrect: true },
        { id: "C", text: "Tankstelle", isCorrect: false },
      ],
      explanation: "Reifenpanne là sự cố hỏng lốp xe."
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
    }, 2500); // Wait time to read explanation
  };

  const restart = () => {
    setCurrentLevel(0);
    setScore(0);
    setGameState('intro');
  };

  if (gameState === 'intro') {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-amber-500/10 text-center">
        <Navigation size={64} className="mx-auto text-amber-500 mb-6" />
        <h2 className="text-3xl font-black text-amber-600 mb-4">Reisespiel: Wo oder Wohin?</h2>
        <p className="text-theme-dark/70 mb-8 font-medium">Bắt đầu chuyến du lịch! Hãy chọn đúng giới từ, nơi chốn hoặc phương tiện để có một chuyến đi thuận lợi nhé.</p>
        <button 
          onClick={() => setGameState('playing')}
          className="px-8 py-4 bg-amber-500 text-white font-black rounded-full hover:bg-theme-dark transition-all hover:scale-105"
        >
          Bắt đầu chuyến đi
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
        <p className="text-theme-dark/70 font-medium mb-2">Bạn đã hoàn thành chuyến đi.</p>
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
            <div key={idx} className={`w-3 h-3 rounded-full ${idx === currentLevel ? 'bg-amber-500 scale-125' : idx < currentLevel ? 'bg-amber-200' : 'bg-slate-200'}`} />
          ))}
        </div>
        <div className="font-bold text-amber-600">Trạm {currentLevel + 1} / {levels.length}</div>
      </div>

      <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-amber-500/10">
        <div className="bg-amber-50 rounded-2xl p-6 mb-8 border border-amber-100">
          <p className="text-amber-800 font-medium mb-2 opacity-80">{currentData.situation}</p>
          <h3 className="text-2xl font-black text-theme-dark">{currentData.question}</h3>
        </div>

        <div className="space-y-4">
          <AnimatePresence>
            {currentData.options.map(option => {
              const isSelected = selectedAnswer === option.id;
              const isCorrectObj = option.isCorrect;
              
              let btnClass = "bg-slate-50 border-slate-200 hover:border-amber-500/50 hover:bg-amber-50 text-slate-700";
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
