import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, RefreshCcw } from 'lucide-react';
import FeedbackDisplay from './FeedbackDisplay';

interface ExerciseProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  vocabItems: any[];
}

export default function Lektion12VocabEx({ playAudio, vocabItems }: ExerciseProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const exercises = [
    {
      question: "Viele gesunde Getränke enthalten keinen ______.",
      options: ["Alkohol", "Getreide", "Gemüse", "Heimat"],
      correctAnswer: 0
    },
    {
      question: "Ich trinke gern kaltes ______ mit Zitrone.",
      options: ["Schweinefleisch", "Mineralwasser", "Rindfleisch", "Gericht"],
      correctAnswer: 1
    },
    {
      question: "Ein ______ represents everything you eat, like pizza or salad.",
      options: ["Getreide", "Gericht", "Lebensmittel", "Huhn"],
      correctAnswer: 1
    },
    {
      question: "If fifty percent of people like something, they represent the ______ .",
      options: ["doppelt", "rund", "Hälfte", "genug"],
      correctAnswer: 2
    },
    {
      question: "Brot und Nudeln bestehen meistens aus ______.",
      options: ["Getreide", "Hühnerfleisch", "Limonade", "Gemüse"],
      correctAnswer: 0
    }
  ];

  const handleAnswer = (selectedIndex: number) => {
    if (feedback !== null) return;
    
    const isCorrect = selectedIndex === exercises[currentStep].correctAnswer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
      setScore(prev => prev + 1);
      playAudio('Richtig!', 'correct');
    } else {
      playAudio('Falsch!', 'incorrect');
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentStep < exercises.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const restart = () => {
    setCurrentStep(0);
    setScore(0);
    setShowResult(false);
    setFeedback(null);
  };

  if (showResult) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-[32px] border-4 border-theme-dark/5 shadow-xl text-center max-w-2xl mx-auto space-y-8">
        <div className="w-24 h-24 bg-theme-primary/10 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 size={48} className="text-theme-primary" />
        </div>
        <h3 className="text-4xl font-display font-black text-theme-dark">Toll gemacht!</h3>
        <p className="text-xl font-bold text-theme-dark/70">
          Du hast {score} von {exercises.length} richtig beantwortet.
        </p>
        <button
          onClick={restart}
          className="flex items-center gap-2 px-8 py-4 bg-theme-dark text-white rounded-2xl font-bold hover:bg-theme-primary transition-colors"
        >
          <RefreshCcw size={20} />
          Nochmal üben
        </button>
      </div>
    );
  }

  const ex = exercises[currentStep];

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex justify-between items-center bg-white p-4 rounded-2xl border-2 border-slate-100 shadow-sm">
        <span className="font-black text-theme-dark/40 uppercase tracking-widest text-sm">
          Câu {currentStep + 1} / {exercises.length}
        </span>
        <span className="font-black text-theme-primary">
          Điểm: {score}
        </span>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-[32px] border-4 border-theme-primary/10 shadow-xl relative overflow-hidden">
        {feedback && (
          <div className={`absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm ${
            feedback === 'correct' ? 'bg-emerald-500/20' : 'bg-rose-500/20'
          }`}>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`p-6 rounded-full text-white ${
                feedback === 'correct' ? 'bg-emerald-500' : 'bg-rose-500'
              }`}
            >
              {feedback === 'correct' ? <CheckCircle2 size={48} /> : <XCircle size={48} />}
            </motion.div>
          </div>
        )}

        <h3 className="text-2xl font-black text-theme-dark text-center mb-10 leading-relaxed">
          {ex.question}
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          {ex.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              className="p-6 bg-slate-50 border-2 border-slate-200 rounded-2xl font-bold text-lg text-theme-dark hover:border-theme-primary hover:bg-theme-primary/5 transition-all text-left"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
