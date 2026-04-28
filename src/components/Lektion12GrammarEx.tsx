import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Lektion12GrammarEx() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const exercises = [
    {
      id: "ex1",
      question: "Ich backe gern, ________.",
      options: ["wenn ich Zeit habe", "wenn habe ich Zeit", "ich Zeit habe, wenn"],
      correct: "wenn ich Zeit habe"
    },
    {
      id: "ex2",
      question: "________, bleiben wir lieber zu Hause.",
      options: ["Wenn regnet es", "Wenn es regnet", "Es regnet wenn"],
      correct: "Wenn es regnet"
    },
    {
      id: "ex3",
      question: "Viele Leute essen Fast Food, ________.",
      options: ["denn sie haben keine Zeit", "denn haben sie keine Zeit", "weil sie keine Zeit haben", "A & C sind richtig"],
      correct: "A & C sind richtig"
    },
    {
      id: "ex4",
      question: "Es wundert mich, ________ die Deutschen so viel Brot essen.",
      options: ["dass", "wenn", "denn"],
      correct: "dass"
    },
    {
      id: "ex5",
      question: "________ wir eine Pizza bestellen, freut sich mein Sohn.",
      options: ["Wenn", "Dass", "Und"],
      correct: "Wenn"
    }
  ];

  const handleSelect = (qId: string, answer: string) => {
    if (showResults) return;
    setAnswers(prev => ({ ...prev, [qId]: answer }));
  };

  const getScore = () => {
    let score = 0;
    exercises.forEach(ex => {
      if (answers[ex.id] === ex.correct) score++;
    });
    return score;
  };

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-display font-black text-theme-dark">
          Grammatikübung: Konjunktionen
        </h2>
        <p className="text-theme-dark/70 font-medium">
          Wähle die richtige Lösung. (Chọn đáp án đúng). Chú ý vị trí động từ trong câu.
        </p>
      </div>

      <div className="space-y-6">
        {exercises.map((ex, index) => (
          <div key={ex.id} className="bg-white p-6 md:p-8 rounded-[24px] border-2 border-slate-100 shadow-sm">
            <h4 className="text-xl font-black text-theme-dark mb-6">
              <span className="text-orange-500 mr-2">{index + 1}.</span> 
              {ex.question}
            </h4>
            
            <div className="space-y-3">
              {ex.options.map((option) => {
                const isSelected = answers[ex.id] === option;
                const isCorrect = option === ex.correct;
                const showCorrect = showResults && isCorrect;
                const showWrong = showResults && isSelected && !isCorrect;

                return (
                  <button
                    key={option}
                    onClick={() => handleSelect(ex.id, option)}
                    disabled={showResults}
                    className={`
                      w-full text-left p-4 rounded-xl font-bold transition-all
                      border-2
                      ${isSelected && !showResults ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-slate-100 text-theme-dark hover:border-slate-300'}
                      ${showCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : ''}
                      ${showWrong ? 'border-rose-500 bg-rose-50 text-rose-700' : ''}
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showCorrect && <CheckCircle2 className="text-emerald-500" size={20} />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {showResults && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-50 p-8 rounded-[32px] border-2 border-emerald-100 text-center space-y-4"
        >
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl font-black">{getScore()}/{exercises.length}</span>
          </div>
          <h3 className="text-2xl font-black text-theme-dark">Toll!</h3>
          <p className="font-bold text-theme-dark/70">
            Bạn đã nắm được cách sử dụng liên từ wenn, dass, denn và weil. Nhớ lưu ý vị trí động từ nhé!
          </p>
          <button 
            onClick={() => { setAnswers({}); setShowResults(false); }}
            className="mt-6 px-8 py-3 bg-white text-emerald-600 font-bold rounded-xl border-2 border-emerald-200 hover:bg-emerald-100 transition-colors"
          >
            Làm lại
          </button>
        </motion.div>
      )}

      {!showResults && Object.keys(answers).length === exercises.length && (
        <button
          onClick={() => setShowResults(true)}
          className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white rounded-2xl font-black text-lg hover:bg-orange-700 hover:shadow-xl hover:shadow-orange-600/20 hover:-translate-y-1 transition-all"
        >
          Kiểm tra kết quả <ArrowRight size={20} />
        </button>
      )}
    </div>
  );
}
