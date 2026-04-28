import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, XCircle, RefreshCw, Star } from 'lucide-react';

export default function Lektion10GrammarEx() {
  const [currentRule, setCurrentRule] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);

  const exercises = [
    {
      intro: "Die Pommes sind versalzen.",
      start: "Ich finde, dass...",
      correctAnswer: "Ich finde, dass die Pommes versalzen sind.",
      options: [
        "Ich finde, dass die Pommes sind versalzen.",
        "Ich finde, dass die Pommes versalzen sind.",
        "Ich finde, dass sind die Pommes versalzen."
      ]
    },
    {
      intro: "Die Suppe ist kalt.",
      start: "Kann es sein, dass...?",
      correctAnswer: "Kann es sein, dass die Suppe kalt ist?",
      options: [
        "Kann es sein, dass die Suppe ist kalt?",
        "Kann es sein, dass ist die Suppe kalt?",
        "Kann es sein, dass die Suppe kalt ist?"
      ]
    },
    {
      intro: "Es gibt einen Obstsalat.",
      start: "Gut, dass...",
      correctAnswer: "Gut, dass es einen Obstsalat gibt.",
      options: [
        "Gut, dass es einen Obstsalat gibt.",
        "Gut, dass gibt es einen Obstsalat.",
        "Gut, dass es gibt einen Obstsalat."
      ]
    },
    {
      intro: "Sie haben Apfelkuchen.",
      start: "Ich hoffe, dass...",
      correctAnswer: "Ich hoffe, dass sie Apfelkuchen haben.",
      options: [
        "Ich hoffe, dass haben sie Apfelkuchen.",
        "Ich hoffe, dass sie haben Apfelkuchen.",
        "Ich hoffe, dass sie Apfelkuchen haben."
      ]
    },
    {
      intro: "Der Kellner hat den Salat vergessen.",
      start: "Schade, dass...",
      correctAnswer: "Schade, dass der Kellner den Salat vergessen hat.",
      options: [
        "Schade, dass der Kellner hat den Salat vergessen.",
        "Schade, dass der Kellner den Salat vergessen hat.",
        "Schade, dass hat der Kellner den Salat vergessen."
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    if (selectedWord !== null) return;
    
    setSelectedWord(answer);
    const correct = answer === exercises[currentRule].correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);

    setTimeout(() => {
      if (currentRule < exercises.length - 1) {
        setCurrentRule(r => r + 1);
        setSelectedWord(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  const restart = () => {
    setCurrentRule(0);
    setScore(0);
    setSelectedWord(null);
    setIsCorrect(null);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="bg-white rounded-3xl p-8 text-center max-w-lg mx-auto shadow-xl border-2 border-theme-primary/10">
        <div className="w-24 h-24 bg-theme-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Star className="text-theme-primary w-12 h-12" />
        </div>
        <h3 className="text-3xl font-black text-theme-dark mb-2">Hoàn thành!</h3>
        <p className="text-xl font-bold text-theme-dark/60 mb-8">
          Điểm của bạn: <span className="text-theme-primary">{score}</span> / {exercises.length}
        </p>
        <button 
          onClick={restart}
          className="bg-theme-primary text-white font-bold px-8 py-4 rounded-2xl flex items-center gap-2 justify-center w-full hover:bg-theme-primary/90 transition-all active:scale-95"
        >
          <RefreshCw size={20} /> Làm lại
        </button>
      </div>
    );
  }

  const ex = exercises[currentRule];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div className="bg-white px-4 py-2 rounded-2xl font-black text-theme-primary shadow-sm border border-theme-primary/10">
          Câu {currentRule + 1} / {exercises.length}
        </div>
        <div className="bg-white px-4 py-2 rounded-2xl font-black text-amber-500 shadow-sm border border-amber-500/10 flex items-center gap-2">
          <Star size={18} fill="currentColor" /> {score}
        </div>
      </div>

      <motion.div 
        key={currentRule}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <div className="bg-theme-primary/5 p-8 rounded-3xl border-2 border-theme-primary/20 text-center">
           <p className="text-theme-dark/50 font-bold mb-2 uppercase tracking-widest text-sm">Câu gốc</p>
           <h3 className="text-2xl font-black text-theme-dark mb-6">"{ex.intro}"</h3>
           
           <div className="flex items-center justify-center gap-4 text-theme-dark/40 mb-6">
             <div className="h-px bg-theme-dark/10 flex-1"></div>
             <ArrowRight size={20} />
             <div className="h-px bg-theme-dark/10 flex-1"></div>
           </div>

           <p className="text-theme-dark/50 font-bold mb-2 uppercase tracking-widest text-sm">Bắt đầu bằng</p>
           <h3 className="text-xl font-bold text-theme-primary bg-white inline-block px-6 py-3 rounded-xl border-b-4 border-theme-primary/20 shadow-sm">
             {ex.start}
           </h3>
        </div>

        <div className="space-y-4">
          {ex.options.map((opt, idx) => {
            let btnClass = "bg-white hover:border-theme-primary border-transparent text-theme-dark";
            if (selectedWord !== null) {
              if (opt === ex.correctAnswer) {
                btnClass = "bg-emerald-50 border-emerald-500 text-emerald-700";
              } else if (opt === selectedWord) {
                btnClass = "bg-rose-50 border-rose-500 text-rose-700";
              } else {
                btnClass = "bg-white border-transparent text-theme-dark/40 opacity-50";
              }
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
                {selectedWord === opt && !isCorrect && <XCircle className="text-rose-500" />}
              </button>
            );
          })}
        </div>

      </motion.div>
    </div>
  );
}
