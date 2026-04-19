import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, XCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Question = {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'reorder';
  instruction: string;
  content: string; // The part before or the whole sentence
  options?: string[]; // For multiple choice or reorder (shuffled words)
  correctAnswer: string;
  hint?: string;
  explanation?: string;
};

const EXERCISES: Question[] = [
  // PHẦN 1: WELCH-
  {
    id: 'p1_1',
    type: 'multiple-choice',
    instruction: 'Phần 1: Frageartikel "welch-". Chọn đáp án đúng.',
    content: '______ Ausweis haben Sie?',
    options: ['Welcher', 'Welchen'],
    correctAnswer: 'Welchen',
    explanation: 'Ausweis (der) đóng vai trò tân ngữ trực tiếp (Akkusativ) trong câu "haben Sie". -> Welchen.'
  },
  {
    id: 'p1_2',
    type: 'multiple-choice',
    instruction: 'Phần 1: Frageartikel "welch-". Chọn đáp án đúng.',
    content: '______ Tasche gehört Ihnen?',
    options: ['Welche', 'Welchen'],
    correctAnswer: 'Welche',
    explanation: 'Tasche (die) đóng vai trò chủ ngữ (Nominativ) với động từ "gehört". -> Welche.'
  },
  {
    id: 'p1_3',
    type: 'multiple-choice',
    instruction: 'Phần 1: Frageartikel "welch-". Chọn đáp án đúng.',
    content: '______ Formular brauchen Sie?',
    options: ['Welches', 'Welchen'],
    correctAnswer: 'Welches',
    explanation: 'Formular (das) (Akkusativ) đi với "brauchen". Giống trung Akkusativ vẫn là "Welches".'
  },
  {
    id: 'p1_4',
    type: 'fill-blank',
    instruction: 'Phần 1: Điền từ "welch-" phù hợp vào chỗ trống.',
    content: '______ Dokument fehlt?',
    correctAnswer: 'Welches',
    explanation: 'Dokument (das) (Nominativ) -> Welches.'
  },
  // PHẦN 2: DIES- / DER, DIE, DAS
  {
    id: 'p2_1',
    type: 'multiple-choice',
    instruction: 'Phần 2: Demonstrativpronomen. Chọn đáp án đúng.',
    content: '______ Tasche ist meine.',
    options: ['Diese', 'Die'],
    correctAnswer: 'Diese',
    explanation: 'Vì có danh từ "Tasche" đi kèm nên dùng "Diese".'
  },
  {
    id: 'p2_2',
    type: 'multiple-choice',
    instruction: 'Phần 2: Demonstrativpronomen. Chọn đáp án đúng.',
    content: '______ ist meine Tasche.',
    options: ['Diese', 'Die'],
    correctAnswer: 'Die',
    explanation: 'Vì KHÔNG có danh từ đứng liền sau, dùng đại từ thay thế "Die". ("Diese" đứng 1 mình thường không tự nhiên bằng "Die").'
  },
  // PHẦN 3: LASSEN
  {
    id: 'p3_1',
    type: 'fill-blank',
    instruction: 'Phần 3: Động từ "lassen". Viết lại câu thay vì tự làm, bạn "nhờ người khác làm".',
    content: 'Ich repariere das Auto. ➝ Ich ______ das Auto ______',
    correctAnswer: 'lasse reparieren',
    hint: 'Nhập theo định dạng "lasse verb" cách nhau bằng dấu cách',
    explanation: 'Ich lasse das Auto reparieren.'
  },
  {
    id: 'p3_2',
    type: 'fill-blank',
    instruction: 'Phần 3: Động từ "lassen". Viết lại câu thay vì tự làm, bạn "nhờ người khác làm".',
    content: 'Ich schneide meine Haare. ➝ Ich ______ meine Haare ______',
    correctAnswer: 'lasse schneiden',
    hint: 'Nhập theo định dạng "lasse verb" cách nhau bằng dấu cách',
    explanation: 'Ich lasse meine Haare schneiden.'
  },
  {
    id: 'p3_3',
    type: 'reorder',
    instruction: 'Phần 3: Sắp xếp các từ thành câu hoàn chỉnh với "lassen".',
    content: '',
    options: ['den Pass', 'ich', 'kopieren', 'lasse'],
    correctAnswer: 'ich lasse den Pass kopieren',
    explanation: 'Động từ "lasse" đứng vị trí 2, động từ nguyên thể "kopieren" ở cuối câu.'
  }
];

export default function Lektion21GrammarEx() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [reorderedWords, setReorderedWords] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQ = EXERCISES[currentIdx];

  const normalize = (s: string) => s.toLowerCase().trim();

  const handleCheck = () => {
    if (!currentQ) return;
    
    let isCorrect = false;
    if (currentQ.type === 'multiple-choice' || currentQ.type === 'fill-blank') {
      isCorrect = normalize(selectedAnswer) === normalize(currentQ.correctAnswer);
    } else if (currentQ.type === 'reorder') {
      isCorrect = normalize(reorderedWords.join(' ')) === normalize(currentQ.correctAnswer);
    }

    if (isCorrect) setScore(prev => prev + 1);
    setIsChecked(true);
  };

  const handleNext = () => {
    if (currentIdx < EXERCISES.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedAnswer('');
      setReorderedWords([]);
      setIsChecked(false);
    } else {
      setShowResult(true);
    }
  };

  const handleWordSelect = (word: string) => {
    if (!isChecked && !reorderedWords.includes(word)) {
      setReorderedWords([...reorderedWords, word]);
    }
  };

  const handleWordRemove = (word: string) => {
    if (!isChecked) {
      setReorderedWords(reorderedWords.filter(w => w !== word));
    }
  };

  if (showResult) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-sm text-center border-2 border-slate-100 max-w-2xl mx-auto my-12 animate-fade-in">
        <h2 className="text-4xl font-black text-theme-dark mb-4">Hoàn thành!</h2>
        <p className="text-2xl text-slate-500 mb-8">
          Bạn đạt <span className="text-emerald-500 font-black">{score}</span> / {EXERCISES.length} câu.
        </p>
        <button 
          onClick={() => {
            setCurrentIdx(0);
            setScore(0);
            setShowResult(false);
            setSelectedAnswer('');
            setReorderedWords([]);
            setIsChecked(false);
          }}
          className="bg-theme-primary text-white font-bold py-4 px-8 rounded-2xl hover:bg-theme-primary/90 transition-transform active:scale-95 shadow-md"
        >
          Làm lại từ đầu
        </button>
      </div>
    );
  }

  const isCorrect = isChecked && (
    currentQ.type === 'reorder' 
      ? normalize(reorderedWords.join(' ')) === normalize(currentQ.correctAnswer)
      : normalize(selectedAnswer) === normalize(currentQ.correctAnswer)
  );

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border-2 border-slate-100">
        <div className="flex items-center justify-between mb-8 opacity-70">
          <span className="font-bold text-slate-500">Bài tập Ngữ pháp Lektion 21</span>
          <span className="font-bold bg-slate-100 px-4 py-1 rounded-full text-sm">Câu {currentIdx + 1}/{EXERCISES.length}</span>
        </div>

        <div className="mb-8">
          <div className="bg-indigo-50/50 text-indigo-700 px-4 py-2 rounded-xl text-sm font-bold w-fit mb-6 border border-indigo-100">
            {currentQ.instruction}
          </div>
          <h3 className="text-2xl font-bold text-theme-dark leading-relaxed">
             {currentQ.content}
          </h3>
          {currentQ.hint && (
             <p className="text-slate-400 text-sm italic mt-2 flex items-center gap-1"><AlertCircle size={14}/> {currentQ.hint}</p>
          )}
        </div>

        {!isChecked && (
          <div className="space-y-4 min-h-[150px]">
            {currentQ.type === 'multiple-choice' && (
              <div className="flex flex-col gap-3">
                {currentQ.options?.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedAnswer(opt)}
                    className={`p-4 rounded-2xl border-2 text-left font-bold transition-colors ${
                      selectedAnswer === opt 
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-600'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {currentQ.type === 'fill-blank' && (
              <div className="py-4">
                <input
                  autoFocus
                  type="text"
                  value={selectedAnswer}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  placeholder="Nhập câu trả lời..."
                  className="w-full text-xl p-4 rounded-2xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none font-medium placeholder:text-slate-300 transition-all font-mono"
                  onKeyDown={(e) => e.key === 'Enter' && selectedAnswer.trim() && handleCheck()}
                />
              </div>
            )}

            {currentQ.type === 'reorder' && (
              <div className="space-y-6">
                <div className="min-h-[60px] p-4 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-wrap gap-2 items-center">
                  {reorderedWords.map((word, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleWordRemove(word)}
                      className="bg-white px-4 py-2 rounded-xl font-bold text-theme-dark border-2 border-slate-200 shadow-[0_2px_0_rgba(0,0,0,0.05)] hover:border-rose-200 transition-colors"
                    >
                      {word}
                    </button>
                  ))}
                  {reorderedWords.length === 0 && <span className="text-slate-400 text-sm font-medium">Bấm vào các từ bên dưới...</span>}
                </div>
                
                <div className="flex flex-wrap gap-2 bg-indigo-50/50 p-6 rounded-3xl border border-indigo-100">
                  {currentQ.options?.filter(w => !reorderedWords.includes(w)).map((word, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleWordSelect(word)}
                      className="bg-white px-4 py-2 rounded-xl font-bold text-indigo-700 border-2 border-indigo-200 shadow-[0_2px_0_rgba(99,102,241,0.1)] hover:bg-indigo-50 hover:-translate-y-1 transition-all"
                    >
                      {word}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <AnimatePresence>
          {isChecked && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-3xl mt-6 border-2 ${
                isCorrect 
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                  : 'bg-rose-50 border-rose-200 text-rose-800'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {isCorrect ? <CheckCircle2 className="w-8 h-8 text-emerald-500" /> : <XCircle className="w-8 h-8 text-rose-500" />}
                </div>
                <div className="flex-1">
                  <h4 className="font-black text-xl mb-2">
                    {isCorrect ? 'Tuyệt vời!' : 'Chưa chính xác!'}
                  </h4>
                  {!isCorrect && (
                    <div className="mb-4 bg-white/60 p-4 rounded-xl">
                      <p className="text-sm font-bold opacity-70 uppercase tracking-widest mb-1">Đáp án đúng:</p>
                      <p className="font-mono font-bold text-lg">{currentQ.correctAnswer}</p>
                    </div>
                  )}
                  {currentQ.explanation && (
                    <div className="pt-3 border-t border-current/10">
                      <p className="font-medium flex items-center gap-2">
                         <span className="text-xl">💡</span> {currentQ.explanation}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 flex justify-end">
          {!isChecked ? (
            <button
              onClick={handleCheck}
              disabled={
                (currentQ.type === 'multiple-choice' || currentQ.type === 'fill-blank') 
                  ? !selectedAnswer.trim()
                  : reorderedWords.length === 0
              }
              className="bg-indigo-600 text-white font-bold py-4 px-10 rounded-2xl hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95 shadow-md flex items-center gap-2"
            >
              Kiểm tra
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-theme-dark text-white font-bold py-4 px-10 rounded-2xl hover:bg-theme-dark/90 transition-all active:scale-95 shadow-md flex items-center gap-2"
            >
              {currentIdx < EXERCISES.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
               <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
