import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, RefreshCcw } from 'lucide-react';

export default function Lektion2GrammarEx() {
  const [wohinAnswers, setWohinAnswers] = useState<Record<number, string>>({});
  const [verbsAnswers, setVerbsAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const wohinQuestions = [
    { label: "1. Ich lege die Zeitung auf ", textAfter: " Couch. (die)", answer: "die" },
    { label: "2. Wir stellen das Geschirr in ", textAfter: " Küchenschränke. (die Plural)", answer: "die" },
    { label: "3. Legst du bitte den Bleistift neben ", textAfter: " Papier? (das)", answer: "das" },
    { label: "4. Julia hängt die Lampe über ", textAfter: " Tisch. (der)", answer: "den" },
    { label: "5. Kannst du die Schuhe unter ", textAfter: " Bett stellen? (das)", answer: "das" },
    { label: "6. Stell den Koffer bitte in ", textAfter: " Schrank. (der)", answer: "den" }
  ];

  const verbsQuestions = [
    { textBefore: "1. Der Teppich ist schön. Den ", verbOptions: ["stehen", "stellen", "liegen", "legen"], textAfter: " wir in das Schlafzimmer. (Chúng ta đặt tấm thảm (nằm) vào phòng ngủ)", answer: "legen" },
    { textBefore: "2. Das ist ein tolles Bild. Das können wir über das Sofa ", verbOptions: ["stehen", "stellen", "liegen", "hängen"], textAfter: ".", answer: "hängen" },
    { textBefore: "3. Herr Fischer ", verbOptions: ["liegt", "legt"], textAfter: " seine Tasche in die Ecke. (Ông ấy đang chủ động đặt túi nằm xuống)", answer: "legt" },
    { textBefore: "4. Der neue Computer ", verbOptions: ["steht", "stellt"], textAfter: " schon auf dem Schreibtisch. (Máy tính đang hiện diện (đứng) đấy)", answer: "steht" },
    { textBefore: "5. Die Rechnungen ", verbOptions: ["liegen", "legen"], textAfter: " neben dem Drucker. (Zustand: Hóa đơn đang nằm)", answer: "liegen" },
    { textBefore: "6. Lara ", verbOptions: ["sitzt", "setzt"], textAfter: " auf dem Sofa und liest ein Buch. (Lara đang ngồi)", answer: "sitzt" }
  ];

  const checkAnswers = () => setShowResults(true);
  
  const reset = () => {
    setWohinAnswers({});
    setVerbsAnswers({});
    setShowResults(false);
  };

  const getCleanAnswer = (text: string) => text.toLowerCase().trim();

  let score = 0;
  const total = wohinQuestions.length + verbsQuestions.length;

  wohinQuestions.forEach((q, i) => {
    if (getCleanAnswer(wohinAnswers[i] || '') === getCleanAnswer(q.answer)) score++;
  });
  
  verbsQuestions.forEach((q, i) => {
    if (getCleanAnswer(verbsAnswers[i] || '') === getCleanAnswer(q.answer)) score++;
  });

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-rose-500 mb-2">Bài tập Ngữ Pháp (Grammatikübungen)</h2>
        <p className="text-theme-dark/60 font-medium">Lektion 2: Wohin? & Động từ chỉ vị trí</p>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-blue-500/10">
        <h3 className="text-xl font-bold text-blue-600 mb-6">1. Wohin? (Điền mạo từ ở dạng Akkusativ)</h3>
        <p className="text-sm text-slate-500 mb-6 italic">*Gợi ý: Tất cả các câu đều dùng động từ chuyển động (legen, stellen, hängen), nên mạo từ phía sau giới từ phải dùng cách 4 (Akkusativ).</p>
        <div className="space-y-4">
          {wohinQuestions.map((q, i) => {
            const isCorrect = getCleanAnswer(wohinAnswers[i] || '') === getCleanAnswer(q.answer);
            return (
              <div key={i} className="flex flex-wrap items-center gap-2 bg-slate-50 p-4 rounded-xl font-medium text-theme-dark">
                <span>{q.label}</span>
                <div className="relative">
                  <input
                    type="text"
                    value={wohinAnswers[i] || ''}
                    onChange={(e) => setWohinAnswers(prev => ({ ...prev, [i]: e.target.value }))}
                    disabled={showResults}
                    placeholder="der/den/das/die..."
                    className={`w-32 px-3 py-1.5 border-b-2 bg-transparent text-center font-bold focus:outline-none transition-colors
                      ${showResults 
                        ? (isCorrect ? 'border-emerald-500 text-emerald-600' : 'border-red-500 text-red-600')
                        : 'border-slate-300 focus:border-blue-500'}`}
                  />
                  {showResults && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 absolute -right-6 top-1.5" />}
                  {showResults && !isCorrect && <XCircle className="w-5 h-5 text-red-500 absolute -right-6 top-1.5" />}
                </div>
                <span>{q.textAfter}</span>
                {showResults && !isCorrect && (
                   <div className="w-full text-sm text-blue-600 mt-1 font-bold ml-6">
                     Gợi ý đáp án: {q.answer}
                   </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-emerald-500/10">
        <h3 className="text-xl font-bold text-emerald-600 mb-6">2. Chọn động từ đúng (Verben)</h3>
        <p className="text-sm text-slate-500 mb-6 italic">*Gợi ý: Chú ý xem trong câu đó là trạng thái tĩnh đứng yên (liegen, stehen) hay đang hành động xếp đặt (legen, stellen).</p>
        <div className="space-y-6">
          {verbsQuestions.map((q, i) => {
            const isCorrect = getCleanAnswer(verbsAnswers[i] || '') === getCleanAnswer(q.answer);
            return (
              <div key={i} className="flex flex-col gap-3 bg-slate-50 p-4 rounded-xl font-medium text-theme-dark">
                <div className="flex flex-wrap items-center gap-2">
                   <span>{q.textBefore}</span>
                   <span className="font-bold border-b-2 border-emerald-500 px-2 min-w-[60px] text-center text-emerald-700">
                     {verbsAnswers[i] || "..."}
                   </span>
                   {showResults && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                   {showResults && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
                   <span>{q.textAfter}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {q.verbOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => !showResults && setVerbsAnswers(prev => ({ ...prev, [i]: opt }))}
                      disabled={showResults}
                      className={`px-3 py-1 rounded-lg border text-sm font-bold transition-colors
                        ${verbsAnswers[i] === opt 
                          ? 'bg-emerald-500 text-white border-emerald-500' 
                          : 'bg-white text-slate-600 border-slate-300 hover:border-emerald-300'}
                        ${showResults ? 'cursor-default opacity-80' : ''}
                      `}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {showResults && !isCorrect && (
                   <div className="text-sm text-emerald-600 mt-1 font-bold">
                     Đáp án đúng: {q.answer}
                   </div>
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
