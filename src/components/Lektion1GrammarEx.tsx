import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, RefreshCcw } from 'lucide-react';

export default function Lektion1GrammarEx() {
  const [possessivAnswers, setPossessivAnswers] = useState<Record<number, string>>({});
  const [perfektAnswers, setPerfektAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const possessivQuestions = [
    { label: "1. Herr Kuhnert, Ihr Garten und ________ Blumen sind wunderschön. (Sie)", answer: "Ihre" },
    { label: "2. Wir können gut zeichnen. ________ Comics sind super. (wir)", answer: "unsere" },
    { label: "3. Amelie und Theresa, was sind ________ Lieblingswitze? (ihr)", answer: "eure" },
    { label: "4. Ich habe Melanie gefragt. ________ Puppen liegen noch hier. (sie)", answer: "ihre" },
    { label: "5. Hast du _________ Schlüssel? (du - Akkusativ: den Schlüssel)", answer: "deinen" },
    { label: "6. Das ist mein Opa. Ich erzähle oft von _________ Opa. (ich - Dativ: dem Opa)", answer: "meinem" }
  ];

  const perfektQuestions = [
    { label: "1. machen", answer: "gemacht" },
    { label: "2. fahren", answer: "ist gefahren" },
    { label: "3. anmachen", answer: "angemacht" },
    { label: "4. telefonieren", answer: "telefoniert" },
    { label: "5. erkennen", answer: "erkannt" },
    { label: "6. streiten", answer: "gestritten" }
  ];

  const checkAnswers = () => setShowResults(true);
  
  const reset = () => {
    setPossessivAnswers({});
    setPerfektAnswers({});
    setShowResults(false);
  };

  const getCleanAnswer = (text: string) => text.toLowerCase().trim();

  let score = 0;
  const total = possessivQuestions.length + perfektQuestions.length;

  possessivQuestions.forEach((q, i) => {
    if (getCleanAnswer(possessivAnswers[i] || '') === getCleanAnswer(q.answer)) score++;
  });
  
  perfektQuestions.forEach((q, i) => {
    // allow just "gefahren" instead of "ist gefahren" just in case, but prefer full form if provided
    const userAns = getCleanAnswer(perfektAnswers[i] || '');
    const correctAns = getCleanAnswer(q.answer);
    if (userAns === correctAns || userAns === correctAns.replace('ist ', '').replace('hat ', '')) score++;
  });

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-rose-500 mb-2">Bài tập Ngữ Pháp (Grammatikübungen)</h2>
        <p className="text-theme-dark/60 font-medium">Lektion 1: Đại từ sở hữu & Thì Perfekt/Präteritum</p>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-emerald-500/10">
        <h3 className="text-xl font-bold text-emerald-600 mb-6">1. Điền Đại từ sở hữu thích hợp (Possessivartikel)</h3>
        <p className="text-sm text-slate-500 mb-6 italic">*Gợi ý: chú ý giống của danh từ phía sau và ngôi chủ ngữ trong ngoặc.</p>
        <div className="space-y-4">
          {possessivQuestions.map((q, i) => {
            const parts = q.label.split('________');
            const isCorrect = getCleanAnswer(possessivAnswers[i] || '') === getCleanAnswer(q.answer);
            return (
              <div key={i} className="flex flex-wrap items-center gap-2 bg-slate-50 p-4 rounded-xl font-medium text-theme-dark">
                <span>{parts[0]}</span>
                <div className="relative">
                  <input
                    type="text"
                    value={possessivAnswers[i] || ''}
                    onChange={(e) => setPossessivAnswers(prev => ({ ...prev, [i]: e.target.value }))}
                    disabled={showResults}
                    className={`w-32 px-3 py-1.5 border-b-2 bg-transparent text-center font-bold focus:outline-none transition-colors
                      ${showResults 
                        ? (isCorrect ? 'border-emerald-500 text-emerald-600' : 'border-red-500 text-red-600')
                        : 'border-slate-300 focus:border-emerald-500'}`}
                  />
                  {showResults && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 absolute -right-6 top-1.5" />}
                  {showResults && !isCorrect && <XCircle className="w-5 h-5 text-red-500 absolute -right-6 top-1.5" />}
                </div>
                <span>{parts[1]}</span>
                {showResults && !isCorrect && (
                   <div className="w-full text-sm text-emerald-600 mt-1 font-bold ml-6">
                     Gợi ý đáp án: {q.answer}
                   </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-blue-500/10">
        <h3 className="text-xl font-bold text-blue-600 mb-6">2. Thì hoàn thành (Perfekt) - Form Partizip II</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {perfektQuestions.map((q, i) => {
            const userAns = getCleanAnswer(perfektAnswers[i] || '');
            const correctAns = getCleanAnswer(q.answer);
            const isCorrect = userAns === correctAns || userAns === correctAns.replace('ist ', '').replace('hat ', '');
            
            return (
              <div key={i} className="flex flex-col gap-2 bg-slate-50 p-4 rounded-xl font-medium text-theme-dark">
                <span className="text-slate-500 font-bold">{q.label}</span>
                <div className="relative flex items-center">
                  <span className="text-sm mr-2 text-slate-400">&rarr;</span>
                  <input
                    type="text"
                    placeholder="Partizip II"
                    value={perfektAnswers[i] || ''}
                    onChange={(e) => setPerfektAnswers(prev => ({ ...prev, [i]: e.target.value }))}
                    disabled={showResults}
                    className={`flex-1 px-3 py-2 border rounded-lg bg-white font-bold focus:outline-none transition-colors
                      ${showResults 
                        ? (isCorrect ? 'border-emerald-500 text-emerald-600 bg-emerald-50/50' : 'border-red-500 text-red-600 bg-red-50/50')
                        : 'border-slate-200 focus:border-blue-500'}`}
                  />
                  {showResults && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 absolute right-2" />}
                  {showResults && !isCorrect && <XCircle className="w-5 h-5 text-red-500 absolute right-2" />}
                </div>
                {showResults && !isCorrect && (
                   <span className="text-sm text-blue-600 font-bold ml-6">Đ/á: {q.answer}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 mt-8">
        {!showResults ? (
          <button
            onClick={checkAnswers}
            className="bg-emerald-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
          >
            Kiểm tra đáp án
          </button>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className={`text-2xl font-black ${score === total ? 'text-emerald-500' : 'text-amber-500'}`}>
              Kết quả: {score}/{total}
            </div>
            <button
              onClick={reset}
              className="flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-700"
            >
              <RefreshCcw size={20} /> Làm lại
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
