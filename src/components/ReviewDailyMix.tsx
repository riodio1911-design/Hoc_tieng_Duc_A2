import React, { useState, useMemo } from 'react';
import { VOCABULARY_DATA, VocabularyItem, GrammarItem } from '../constants';
import { Brain, CheckCircle2, XCircle, RotateCcw, ChevronRight } from 'lucide-react';

type QuizItem = {
   type: 'vocab' | 'grammar';
   question: string;
   answer: string;
   options: string[];
   explanation?: string;
   originalItem: VocabularyItem | GrammarItem;
};

// Hàm trộn mảng ngẫu nhiên (Fisher-Yates)
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function ReviewDailyMix() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [questions, setQuestions] = useState<QuizItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Khởi tạo bộ câu hỏi ngẫu nhiên khi bắt đầu
  const startDailyMix = () => {
     let allVocab: VocabularyItem[] = [];
     let allGrammar: GrammarItem[] = [];

     VOCABULARY_DATA.forEach(lesson => {
         if (lesson.id === 'review') return;
         allVocab = [...allVocab, ...lesson.items];
         if (lesson.grammar) {
             allGrammar = [...allGrammar, ...lesson.grammar];
         }
     });

     // Random mix: 6 vocab, 4 grammar = 10 items
     const mixedVocab = shuffleArray(allVocab).slice(0, 6);
     const mixedGrammar = shuffleArray(allGrammar).slice(0, 4);

     const generateOptions = (correct: string, items: any[], field: string) => {
         // Lấy các options ngẫu nhiên nhưng không giống câu đúng
         const pool = items.filter(v => v[field] !== correct).map(v => v[field]);
         const wrongOptions = shuffleArray(pool).slice(0, 3);
         return shuffleArray([correct, ...wrongOptions]);
     }

     const quiz: QuizItem[] = [];
     
     // Tạo câu hỏi từ vựng (Nhìn nghĩa -> Chọn từ tiếng Đức)
     mixedVocab.forEach(v => {
         quiz.push({
             type: 'vocab',
             question: v.meaning,
             answer: v.word,
             options: generateOptions(v.word, allVocab, 'word'),
             originalItem: v
         });
     });

     // Tạo câu hỏi ngữ pháp (Nhìn quy tắc/ý nghĩa -> Chọn ví dụ/cấu trúc đúng)
     mixedGrammar.forEach(g => {
         quiz.push({
             type: 'grammar',
             question: `Chọn ví dụ đúng cho: ${g.meaning}`,
             answer: g.example,
             options: generateOptions(g.example, allGrammar, 'example'),
             explanation: g.rule,
             originalItem: g
         });
     });

     setQuestions(shuffleArray(quiz));
     setCurrentIndex(0);
     setScore(0);
     setSelectedAnswer(null);
     setShowResult(false);
     setIsPlaying(true);
  };

  const handleSelectAnswer = (opt: string) => {
      setSelectedAnswer(opt);
      if (opt === questions[currentIndex].answer) {
          setScore(s => s + 1);
      }
  };

  const nextQuestion = () => {
      if (currentIndex + 1 >= questions.length) {
          setShowResult(true);
      } else {
          setCurrentIndex(c => c + 1);
          setSelectedAnswer(null);
      }
  };

  const quit = () => {
      setIsPlaying(false);
      setShowResult(false);
  };

  if (!isPlaying) {
      return (
          <div className="flex flex-col items-center justify-center space-y-6 pt-10 pb-20 text-center">
              <div className="w-24 h-24 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center shadow-inner">
                  <Brain className="w-12 h-12" />
              </div>
              <div className="max-w-md">
                 <h2 className="text-3xl font-black text-theme-dark tracking-tight">Daily Mix <br/> Trạm Ôn Tập</h2>
                 <p className="text-theme-dark/70 font-medium mt-4 bg-white p-4 rounded-xl border border-theme-dark/10">
                    Mỗi ngày 10 câu hỏi ngẫu nhiên từ khóa Menschen A2 (Lektion 1 - Lektion 24) giúp bạn chống "quên" kiến thức.
                 </p>
              </div>
              <button onClick={startDailyMix} className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-black rounded-[24px] shadow-lg shadow-amber-500/20 transition-all text-xl mt-4 flex items-center justify-center gap-2">
                 Bắt đầu ôn tập <ChevronRight className="w-6 h-6" />
              </button>
          </div>
      );
  }

  if (showResult) {
       return (
          <div className="flex flex-col items-center justify-center space-y-6 pt-10 text-center">
              <div className="w-24 h-24 bg-theme-primary/10 text-theme-primary rounded-full flex items-center justify-center">
                  <Brain className="w-12 h-12" />
              </div>
              <h2 className="text-4xl font-black text-theme-dark">Hoàn Thành!</h2>
              <div className="bg-white p-8 rounded-3xl border border-theme-dark/10 shadow-xl min-w-[300px]">
                  <p className="text-sm font-black text-theme-dark/50 uppercase tracking-widest mb-2">ĐIỂM CỦA BẠN</p>
                  <p className="text-7xl font-black text-theme-primary">{score}<span className="text-4xl text-theme-dark/30">/10</span></p>
                  
                  {score === 10 ? (
                      <p className="text-emerald-600 font-bold mt-4">Xuất sắc! Trí nhớ của bạn rất tuyệt vời.</p>
                  ) : score >= 7 ? (
                      <p className="text-amber-600 font-bold mt-4">Rất tốt! Chỉ hổng một vài chỗ nhỏ thôi.</p>
                  ) : (
                      <p className="text-rose-600 font-bold mt-4">Cần ôn tập lại các bài Lektion trước đó nhé!</p>
                  )}
              </div>
              <div className="flex gap-4 mt-8">
                 <button onClick={quit} className="px-6 py-3 bg-white border-2 border-theme-dark/10 rounded-2xl font-bold text-theme-dark/70 hover:bg-theme-cream">Trở về</button>
                 <button onClick={startDailyMix} className="px-6 py-3 bg-theme-primary text-white hover:bg-theme-secondary rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-theme-primary/20"><RotateCcw size={18}/> Thử vòng mới</button>
              </div>
          </div>
       );
  }

  const q = questions[currentIndex];

  return (
      <div className="max-w-2xl mx-auto py-8">
          {/* Progress bar */}
          <div className="mb-6">
             <div className="flex justify-between items-center mb-2">
                 <span className="text-xs font-black uppercase text-theme-dark/40 tracking-widest">Câu {currentIndex + 1} / 10</span>
                 <span className="text-xs font-black uppercase text-amber-500 tracking-widest">Điểm: {score}</span>
             </div>
             <div className="h-3 bg-theme-dark/5 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 transition-all duration-300" style={{width: `${((currentIndex)/10)*100}%`}}></div>
             </div>
          </div>

          {/* Question Card */}
          <div className="bg-white p-8 rounded-[32px] border-4 border-theme-dark/5 shadow-xl space-y-8">
              <div className="text-center">
                 <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 ${q.type === 'vocab' ? 'bg-indigo-100 text-indigo-700' : 'bg-emerald-100 text-emerald-700'}`}>
                    {q.type === 'vocab' ? 'Từ vựng' : 'Ngữ pháp'}
                 </span>
                 <h3 className="text-2xl font-black text-theme-dark leading-tight">{q.question}</h3>
              </div>

              <div className="grid grid-cols-1 gap-3">
                 {q.options.map(opt => {
                     const isSelected = selectedAnswer === opt;
                     const isCorrect = opt === q.answer;
                     let buttonClass = "bg-slate-50 border-2 border-transparent text-theme-dark hover:bg-slate-100 hover:border-slate-200";
                     
                     if (selectedAnswer) {
                         if (isCorrect) buttonClass = "bg-emerald-100 border-2 border-emerald-500 text-emerald-800 font-bold";
                         else if (isSelected) buttonClass = "bg-rose-100 border-2 border-rose-500 text-rose-800 font-bold";
                         else buttonClass = "bg-slate-50 border-2 border-transparent text-theme-dark/50 opacity-50";
                     }

                     return (
                        <button 
                            key={opt}
                            disabled={selectedAnswer !== null}
                            onClick={() => handleSelectAnswer(opt)}
                            className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between ${buttonClass}`}
                        >
                            <span className="text-lg">{opt}</span>
                            {selectedAnswer && isCorrect && <CheckCircle2 className="text-emerald-600" />}
                            {selectedAnswer && isSelected && !isCorrect && <XCircle className="text-rose-600" />}
                        </button>
                     )
                 })}
              </div>

              {selectedAnswer && (
                  <div className="pt-4 border-t-2 border-slate-100 animate-fade-in text-center">
                      {q.explanation && (
                          <p className="text-sm font-medium text-emerald-700 bg-emerald-50 p-4 rounded-xl mb-4 italic text-left border border-emerald-100">
                             Lý thuyết: {q.explanation}
                          </p>
                      )}
                      <button onClick={nextQuestion} className="w-full py-4 bg-theme-dark text-white rounded-2xl font-black text-lg hover:bg-black transition-colors flex items-center justify-center gap-2">
                          Tiếp tục <ChevronRight size={20} />
                      </button>
                  </div>
              )}
          </div>
      </div>
  );
}
