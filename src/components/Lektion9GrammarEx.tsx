import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export default function Lektion9GrammarEx({ playAudio, playingId }: { playAudio?: (t: string, id: string, l?: string) => void, playingId?: string | null }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const questions = [
    {
      question: "Ein Lkw ist ______ als ein Auto.",
      options: [
        "groß",
        "größer",
        "am größten"
      ],
      correct: 1,
      explanation: "Có từ 'als' -> So sánh hơn (Komparativ). 'groß' chuyển thành 'größer'."
    },
    {
      question: "Welches Auto ist ______?",
      options: [
        "schnell",
        "schneller",
        "am schnellsten"
      ],
      correct: 2,
      explanation: "Câu hỏi tìm cái nhất trong số nhiều xe, không có 'als'. -> So sánh nhất (Superlativ). Dùng 'am schnellsten'."
    },
    {
      question: "Ich trinke gern Tee, aber Kaffee trinke ich ______.",
      options: [
        "gerner",
        "lieber",
        "am liebsten"
      ],
      correct: 1,
      explanation: "So sánh hơn của 'gern' là bất quy tắc: 'lieber' (thích hơn)."
    },
    {
      question: "Audi ist gut, BMW ist besser, aber Porsche ist ______.",
      options: [
        "am gutesten",
        "besserer",
        "am besten"
      ],
      correct: 2,
      explanation: "Cấu trúc tăng tiến: gut - besser - am besten. So sánh nhất của 'gut' là 'am besten'."
    },
    {
      question: "Der Lohn in Deutschland ist ______ als in Vietnam.",
      options: [
        "hoch",
        "höher",
        "am höchsten"
      ],
      correct: 1,
      explanation: "Có từ 'als' -> So sánh hơn. Từ 'hoch' có dạng so sánh hơn đặc biệt là 'höher'."
    },
    {
      question: "Heute haben wir ______ Zeit als gestern.",
      options: [
        "vieler",
        "mehr",
        "am meisten"
      ],
      correct: 1,
      explanation: "So sánh hơn của 'viel' (nhiều) là 'mehr'."
    }
  ];

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    const correct = index === questions[currentQuestion].correct;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(s => s + 1);
      if (playAudio) playAudio("Richtig", "correct-g9", "de-DE");
    } else {
      if (playAudio) playAudio("Falsch", "wrong-g9", "de-DE");
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(c => c + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  if (showResult) {
    return (
      <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 shadow-sm border-4 border-white text-center max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-theme-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={48} className="text-theme-primary" />
        </div>
        <h3 className="text-3xl font-black text-theme-dark mb-4 uppercase">Hoàn thành bài tập!</h3>
        <p className="text-xl text-theme-dark/70 mb-8 font-medium">
          Bạn trả lời đúng <strong className="text-theme-primary text-2xl">{score}</strong> / {questions.length} câu.
        </p>
        <button
          onClick={resetQuiz}
          className="bg-theme-primary text-white px-8 py-3 rounded-2xl font-bold text-lg hover:bg-theme-primary/90 transition-colors inline-block shadow-lg shadow-theme-primary/20"
        >
          Làm lại
        </button>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-theme-dark uppercase tracking-tight">Bài Tập Ngữ Pháp</h2>
        <p className="text-theme-dark/70 font-medium">Chọn dạng điền đúng của tính từ (So sánh hơn / So sánh nhất).</p>
      </div>

      <div className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-sm border-4 border-white mb-6">
        <div className="flex justify-between items-center mb-6 text-sm font-bold text-theme-dark/40 uppercase tracking-widest">
          <span>Câu {currentQuestion + 1} / {questions.length}</span>
          <span>Điểm: {score}</span>
        </div>

        <h3 className="text-2xl font-bold text-theme-dark mb-8 leading-relaxed">
          {q.question}
        </h3>

        <div className="space-y-3">
          <AnimatePresence>
            {q.options.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrectAnswer = q.correct === idx;
              
              let btnClass = "bg-slate-50 border-slate-200 text-theme-dark hover:border-theme-primary/50 hover:bg-theme-primary/5";
              if (selectedAnswer !== null) {
                if (isCorrectAnswer) btnClass = "bg-green-50 border-green-400 text-green-700 shadow-sm";
                else if (isSelected) btnClass = "bg-red-50 border-red-400 text-red-700";
                else btnClass = "bg-slate-50 border-slate-200 text-theme-dark/40 opacity-50";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 rounded-2xl font-bold text-lg text-left transition-all border-2 flex items-center justify-between group ${btnClass}`}
                >
                  <span>{opt}</span>
                  {selectedAnswer !== null && isCorrectAnswer && <CheckCircle2 className="text-green-500" />}
                  {isSelected && !isCorrectAnswer && <XCircle className="text-red-500" />}
                </button>
              );
            })}
          </AnimatePresence>
        </div>

        {selectedAnswer !== null && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 p-4 rounded-2xl border-2 ${isCorrect ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}
          >
            <p className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
              {q.explanation}
            </p>
          </motion.div>
        )}
      </div>

      {selectedAnswer !== null && (
        <div className="flex justify-end">
          <button
            onClick={nextQuestion}
            className="flex items-center gap-2 bg-theme-dark text-white px-8 py-3 rounded-2xl font-bold hover:bg-black transition-colors"
          >
            {currentQuestion < questions.length - 1 ? 'Tiếp tục' : 'Xem kết quả'}
            <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
