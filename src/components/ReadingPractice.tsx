import { READING_DATA } from '../data/readingData';
import React, { useState } from 'react';
import { BookOpenText, CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';

export default function ReadingPractice({ lessonId }: { lessonId: string }) {
  const content = READING_DATA[lessonId];
  const [answers, setAnswers] = useState<Record<any, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!content) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
        <BookOpenText className="w-16 h-16 text-theme-dark/10" />
        <p className="font-bold text-theme-dark/40">Chưa có bài đọc hiểu cho bài học này.</p>
      </div>
    );
  }

  const handleSelect = (qId: any, optIdx: number) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setIsSubmitted(false);
  };

  const score = Object.keys(answers).reduce((acc, qId) => {
    const q = content.questions.find((x: any) => x.id == qId);
    if (q && answers[qId as any] === (q.correctAnswer ?? q.correct)) return acc + 1;
    return acc;
  }, 0);

  const totalQuestions = content.questions.length;
  const isAllAnswered = Object.keys(answers).length === totalQuestions;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12 w-full px-2 md:px-0">
      
      {/* Header section */}
      <div className="text-center space-y-2 mb-8">
        <span className="px-6 py-2 bg-indigo-100 text-indigo-600 font-black uppercase tracking-widest rounded-full text-sm inline-flex items-center gap-2 mb-2">
          <BookOpenText size={18} /> Đọc Hiểu
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-black text-theme-dark">{content.title}</h2>
        <p className="font-bold text-theme-dark/60">{content.instruction}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Reading Text Panel */}
        <div className="bg-white rounded-[32px] p-6 text-base shadow-xl shadow-theme-dark/5 border-2 border-theme-dark/5">
          <div className="prose prose-p:leading-relaxed prose-p:mb-4 max-w-none text-theme-dark/80 font-medium">
            {content.text.map((paragraph: string, idx: number) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Questions Panel */}
        <div className="space-y-6">
          {content.questions.map((q: any, i: number) => {
            const hasAnswered = answers[q.id] !== undefined;
            const isCorrect = isSubmitted && answers[q.id] === (q.correctAnswer ?? q.correct);
            const isWrong = isSubmitted && hasAnswered && answers[q.id] !== (q.correctAnswer ?? q.correct);

            return (
              <div 
                key={q.id} 
                className={`bg-white rounded-3xl p-6 shadow-sm border-2 transition-all ${
                  isCorrect ? 'border-emerald-500 bg-emerald-50/30' : 
                  isWrong ? 'border-rose-500 bg-rose-50/30' : 
                  'border-theme-dark/5'
                }`}
              >
                <h4 className="font-bold text-theme-dark mb-4 flex gap-2">
                  <span className="text-theme-dark/40">{i+1}.</span>
                  {q.question}
                </h4>
                <div className="space-y-2">
                  {q.options.map((opt: string, optIdx: number) => {
                    const isSelected = answers[q.id] === optIdx;
                    const showCorrect = isSubmitted && optIdx === (q.correctAnswer ?? q.correct);
                    const showWrong = isSubmitted && isSelected && !showCorrect;

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelect(q.id, optIdx)}
                        disabled={isSubmitted}
                        className={`w-full text-left p-3 rounded-xl font-medium border text-sm transition-all flex items-center justify-between ${
                          showCorrect ? 'bg-emerald-100 border-emerald-500 text-emerald-800' :
                          showWrong ? 'bg-rose-100 border-rose-500 text-rose-800' :
                          isSelected ? 'bg-indigo-50 border-indigo-500 text-indigo-700 shadow-inner' :
                          'bg-zinc-50 border-zinc-200 text-theme-dark hover:bg-zinc-100 hover:border-zinc-300'
                        } ${isSubmitted ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        <span>{opt}</span>
                        {showCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                        {showWrong && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
                {isSubmitted && q.explanation && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }} 
                    className="mt-4 p-3 bg-white/60 rounded-xl border border-theme-dark/10 text-sm font-bold text-theme-dark/70"
                  >
                    💡 {q.explanation}
                  </motion.div>
                )}
              </div>
            );
          })}

          <div className="pt-4 flex justify-between items-center sticky bottom-4 z-10 bg-white/80 backdrop-blur pb-4 border-b">
            {!isSubmitted ? (
               <button
                 onClick={handleSubmit}
                 disabled={!isAllAnswered}
                 className="w-full py-4 bg-theme-primary text-white rounded-2xl font-black text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-theme-dark transition-colors shadow-lg shadow-theme-primary/20 flex justify-center items-center gap-2"
               >
                 Nộp Bài <ArrowRight size={20} />
               </button>
            ) : (
               <div className="w-full flex items-center justify-between bg-zinc-50 border-2 border-theme-dark/10 p-4 rounded-2xl shadow-sm">
                 <div className="font-black text-xl text-theme-dark">
                   Kết quả: <span className={score === totalQuestions ? 'text-emerald-500' : 'text-theme-primary'}>{score}/{totalQuestions}</span>
                 </div>
                 <button 
                   onClick={handleReset}
                   className="px-6 py-2 bg-theme-dark/5 hover:bg-theme-dark/10 text-theme-dark rounded-xl font-bold flex items-center gap-2 transition-colors"
                 >
                   <RotateCcw size={18} /> Làm lại
                 </button>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
