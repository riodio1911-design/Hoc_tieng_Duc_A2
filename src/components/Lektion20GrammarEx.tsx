import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export default function Lektion20GrammarEx({ playAudio }: { playAudio?: (t: string, id: string, l?: string) => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const questions = [
    {
      question: "Ich _______ als Kind oft stundenlang spielen.",
      options: ["darf", "konnte", "durfte"],
      correct: 2,
      explanation: "Nói về sự cho phép trong quá khứ -> Präteritum của 'dürfen' là 'durfte'."
    },
    {
      question: "Mein Bruder _______ schon lesen, ich aber noch nicht.",
      options: ["konnte", "kann", "konntest"],
      correct: 0,
      explanation: "Khả năng trong quá khứ của 'Mein Bruder' (er) -> Präteritum của 'können' là 'konnte'."
    },
    {
      question: "_______ du früher keine Comics lesen?",
      options: ["Wollte", "Musstest", "Mochtest"],
      correct: 2,
      explanation: "Hỏi về sở thích trong quá khứ với chủ ngữ 'du' -> 'mochtest' (từ 'mögen')."
    },
    {
      question: "Wir _______ als Kinder sonntags oft Verwandte besuchen.",
      options: ["mussten", "konnten", "durften"],
      correct: 0,
      explanation: "Bắt buộc phải làm -> 'mussten' (quá khứ của 'müssen')."
    },
    {
      question: "Dirk war sehr gut im Sport. Deshalb _______ er Profisportler werden.",
      options: ["wollte", "durfte", "konnte"],
      correct: 0,
      explanation: "Dirk rất giỏi thể thao nên 'đã muốn' trở thành VĐV -> 'wollte' (từ 'wollen')."
    },
    {
      question: "Hast du Interesse _______ Politik?",
      options: ["für", "an", "auf"],
      correct: 1,
      explanation: "Cấu trúc 'Interesse haben an + Dativ' -> an."
    },
    {
      question: "Ich interessiere mich _______ Geschichte.",
      options: ["an", "über", "für"],
      correct: 2,
      explanation: "Cấu trúc phản thân 'sich interessieren für + Akkusativ' -> für."
    }
  ];

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    const correct = index === questions[currentQuestion].correct;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(s => s + 1);
      if (playAudio) playAudio("Richtig", "correct-g20", "de-DE");
    } else {
      if (playAudio) playAudio("Falsch", "wrong-g20", "de-DE");
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
      <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 text-center max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-theme-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={48} className="text-theme-primary" />
        </div>
        <h3 className="text-3xl font-black text-theme-dark mb-4 uppercase">Tuyệt vời!</h3>
        <p className="text-xl text-theme-dark/70 mb-8 font-medium">Bạn trả lời đúng <strong className="text-theme-primary text-2xl">{score}</strong> / {questions.length} câu.</p>
        <button onClick={resetQuiz} className="bg-theme-primary text-white px-8 py-3 rounded-2xl font-bold text-lg hover:bg-theme-primary/90">Làm lại</button>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-6 shadow-sm border-4 border-white mb-6">
        <div className="flex justify-between items-center mb-6 text-sm font-bold text-theme-dark/40 uppercase tracking-widest">
          <span>Câu {currentQuestion + 1} / {questions.length}</span>
          <span>Điểm: {score}</span>
        </div>
        <h3 className="text-2xl font-bold text-theme-dark mb-8 leading-relaxed">{q.question}</h3>
        <div className="space-y-3">
          <AnimatePresence>
            {q.options.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrectAnswer = q.correct === idx;
              let btnClass = "bg-slate-50 border-slate-200";
              if (selectedAnswer !== null) {
                if (isCorrectAnswer) btnClass = "bg-green-50 border-green-400 text-green-700 shadow-sm";
                else if (isSelected) btnClass = "bg-red-50 border-red-400 text-red-700";
                else btnClass = "bg-slate-50 opacity-50";
              }
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 rounded-2xl font-bold text-lg text-left border-2 flex items-center justify-between ${btnClass}`}
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`mt-6 p-4 rounded-2xl border-2 ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
            <p className="font-medium">{q.explanation}</p>
          </motion.div>
        )}
      </div>
      {selectedAnswer !== null && (
        <div className="flex justify-end">
          <button onClick={nextQuestion} className="flex items-center gap-2 bg-theme-dark text-white px-8 py-3 rounded-2xl font-bold">
            Tiếp tục <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
