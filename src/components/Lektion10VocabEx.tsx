import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, RefreshCw, Star, Info } from 'lucide-react';

interface VocabExerciseProps {
  lessonItems: any[];
  playAudio?: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
}

export default function Lektion10VocabEx({ lessonItems, playAudio }: VocabExerciseProps) {
  const [currentQuestions, setCurrentQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Generate multiple choice questions
  useEffect(() => {
    generateQuestions();
  }, [lessonItems]);

  const generateQuestions = () => {
    const vocabItems = lessonItems.filter(item => item.id.includes('_v'));
    // Shuffle and pick 10
    const shuffled = [...vocabItems].sort(() => 0.5 - Math.random()).slice(0, 10);
    
    const questions = shuffled.map(item => {
      // Pick 3 random wrong answers
      const wrongAnswers = vocabItems
        .filter(v => v.id !== item.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(v => v.meaning);
      
      const options = [item.meaning, ...wrongAnswers].sort(() => 0.5 - Math.random());
      
      return {
        word: item.word,
        correctMeaning: item.meaning,
        options,
        id: item.id
      };
    });

    setCurrentQuestions(questions);
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const handleAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answer);
    const correct = answer === currentQuestions[currentIndex].correctMeaning;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);

    setTimeout(() => {
      if (currentIndex < currentQuestions.length - 1) {
        setCurrentIndex(i => i + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  if (currentQuestions.length === 0) return <div>Loading...</div>;

  const q = currentQuestions[currentIndex];

  if (showResult) {
    return (
      <div className="bg-white rounded-3xl p-8 text-center max-w-lg mx-auto shadow-xl border-2 border-theme-primary/10">
        <div className="w-24 h-24 bg-theme-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Star className="text-theme-primary w-12 h-12" />
        </div>
        <h3 className="text-3xl font-black text-theme-dark mb-2">Hoàn thành!</h3>
        <p className="text-xl font-bold text-theme-dark/60 mb-8">
          Điểm của bạn: <span className="text-theme-primary">{score}</span> / {currentQuestions.length}
        </p>
        <button 
          onClick={generateQuestions}
          className="bg-theme-primary text-white font-bold px-8 py-4 rounded-2xl flex items-center gap-2 justify-center w-full hover:bg-theme-primary/90 transition-all active:scale-95"
        >
          <RefreshCw size={20} /> Chơi lại
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div className="bg-white px-4 py-2 rounded-2xl font-black text-theme-primary shadow-sm border border-theme-primary/10">
          Câu {currentIndex + 1} / {currentQuestions.length}
        </div>
        <div className="bg-white px-4 py-2 rounded-2xl font-black text-amber-500 shadow-sm border border-amber-500/10 flex items-center gap-2">
          <Star size={18} fill="currentColor" /> {score} Điểm
        </div>
      </div>

      <motion.div 
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white p-8 rounded-3xl shadow-lg border-2 border-theme-dark/5 text-center mb-8"
      >
        <p className="text-sm font-bold text-theme-dark/40 uppercase tracking-widest mb-4">Từ tiếng Đức</p>
        <h2 className="text-4xl font-black text-theme-dark">{q.word}</h2>
      </motion.div>

      <div className="grid gap-4">
        {q.options.map((opt: string, idx: number) => {
          let btnClass = "bg-white hover:border-theme-primary/50 border-transparent text-theme-dark";
          if (selectedAnswer !== null) {
            if (opt === q.correctMeaning) {
              btnClass = "bg-emerald-50 border-emerald-500 text-emerald-700";
            } else if (opt === selectedAnswer) {
              btnClass = "bg-rose-50 border-rose-500 text-rose-700";
            } else {
              btnClass = "bg-white border-transparent text-theme-dark/40";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleAnswer(opt)}
              disabled={selectedAnswer !== null}
              className={`w-full p-4 rounded-2xl font-bold text-lg text-left transition-all border-2 shadow-sm ${btnClass}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
