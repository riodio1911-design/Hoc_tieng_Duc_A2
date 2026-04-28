import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, RefreshCcw } from 'lucide-react';

export default function Lektion3GrammarEx() {
  const [ungAnswers, setUngAnswers] = useState<Record<number, string>>({});
  const [erAnswers, setErAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  // Nomen mit -ung
  const ungQuestions = [
    { verb: "anmelden", article: "die", answer: "Anmeldung", translation: "(sự đăng ký)" },
    { verb: "übernachten", article: "die", answer: "Übernachtung", translation: "(việc qua đêm)" },
    { verb: "beraten", article: "die", answer: "Beratung", translation: "(sự tư vấn)" },
    { verb: "erfahren", article: "die", answer: "Erfahrung", translation: "(kinh nghiệm)" },
    { verb: "erholen", article: "die", answer: "Erholung", translation: "(sự thư giãn)" }
  ];

  // Nomen mit -er und -ung im Kontext
  const erQuestions = [
    { textBefore: "1. Kommt der ", verbContext: "(wandern)", answer: "Wanderer", textAfter: " erst am Nachmittag?" },
    { textBefore: "2. Ich brauche gute ", verbContext: "(beraten)", answer: "Beratung", textAfter: " beim Kauf eines PCs." },
    { textBefore: "3. Herr Meier ist ein netter ", verbContext: "(vermieten)", answer: "Vermieter", textAfter: " von unserer Wohnung." },
    { textBefore: "4. Nach der ", verbContext: "(anstrengen)", answer: "Anstrengung", textAfter: " brauchen wir eine Pause." },
    { textBefore: "5. Der Bus-", verbContext: "(fahren)", answer: "Fahrer", textAfter: " war sehr freundlich." }
  ];

  const checkAnswers = () => setShowResults(true);
  
  const reset = () => {
    setUngAnswers({});
    setErAnswers({});
    setShowResults(false);
  };

  const cleanAnswer = (text: string) => text.toLowerCase().trim();

  let score = 0;
  const total = ungQuestions.length + erQuestions.length;

  ungQuestions.forEach((q, i) => {
    if (cleanAnswer(ungAnswers[i] || '') === cleanAnswer(q.answer)) score++;
  });
  
  erQuestions.forEach((q, i) => {
    if (cleanAnswer(erAnswers[i] || '') === cleanAnswer(q.answer)) score++;
  });

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-emerald-500 mb-2">Bài tập Ngữ Pháp (Grammatikübungen)</h2>
        <p className="text-theme-dark/60 font-medium">Lektion 3: Danh từ hóa (Nomenbildung -ung, -er)</p>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-rose-500/10">
        <h3 className="text-xl font-bold text-rose-600 mb-6">1. Nomen mit -ung (Tạo danh từ đuôi -ung)</h3>
        <p className="text-sm text-slate-500 mb-6 italic">*Gợi ý: Cắt bỏ đuôi -en của động từ, thêm đuôi -ung vào và viết hoa chữ cái đầu tiên nha.</p>
        <div className="space-y-4">
          {ungQuestions.map((q, i) => {
            const isCorrect = cleanAnswer(ungAnswers[i] || '') === cleanAnswer(q.answer);
            return (
              <div key={i} className="flex flex-wrap items-center gap-3 bg-slate-50 p-4 rounded-xl font-medium text-theme-dark">
                <span className="w-28 text-slate-500 line-through decoration-rose-500">{q.verb}</span>
                <span className="text-slate-300">➡️</span>
                <span className="text-rose-600 font-bold w-6 text-right">{q.article}</span>
                <div className="relative">
                  <input
                    type="text"
                    value={ungAnswers[i] || ''}
                    onChange={(e) => setUngAnswers(prev => ({ ...prev, [i]: e.target.value }))}
                    disabled={showResults}
                    placeholder="...ung"
                    className={`w-36 px-3 py-1.5 border-b-2 bg-transparent font-bold focus:outline-none transition-colors
                      ${showResults 
                        ? (isCorrect ? 'border-emerald-500 text-emerald-600' : 'border-red-500 text-red-600')
                        : 'border-slate-300 focus:border-rose-500'}`}
                  />
                  {showResults && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 absolute -right-6 top-1.5" />}
                  {showResults && !isCorrect && <XCircle className="w-5 h-5 text-red-500 absolute -right-6 top-1.5" />}
                </div>
                <span className="text-sm text-slate-400">{q.translation}</span>
                {showResults && !isCorrect && (
                   <div className="w-full text-sm text-rose-600 mt-1 font-bold ml-40">
                     Đáp án đúng: {q.answer}
                   </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-blue-500/10">
        <h3 className="text-xl font-bold text-blue-600 mb-6">2. Trộn lẫn -er và -ung trong câu</h3>
        <p className="text-sm text-slate-500 mb-6 italic">*Gợi ý: Dựa vào ngữ cảnh (chỉ người = -er, chỉ sự việc = -ung) để chuyển đổi từ trong ngoặc nhé.</p>
        <div className="space-y-4">
          {erQuestions.map((q, i) => {
            const isCorrect = cleanAnswer(erAnswers[i] || '') === cleanAnswer(q.answer);
            return (
              <div key={i} className="flex flex-col gap-2 bg-slate-50 p-4 rounded-xl font-medium text-theme-dark">
                <div className="flex flex-wrap items-center gap-2">
                   <span>{q.textBefore}</span>
                   <span className="text-slate-400">{q.verbContext}</span>
                   <div className="relative">
                      <input
                        type="text"
                        value={erAnswers[i] || ''}
                        onChange={(e) => setErAnswers(prev => ({ ...prev, [i]: e.target.value }))}
                        disabled={showResults}
                        className={`w-32 px-2 py-1 border-b-2 bg-white text-center font-bold focus:outline-none transition-colors shadow-sm
                          ${showResults 
                            ? (isCorrect ? 'border-emerald-500 text-emerald-600' : 'border-red-500 text-red-600')
                            : 'border-slate-300 focus:border-blue-500'}`}
                      />
                      {showResults && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 absolute -right-6 top-1.5" />}
                      {showResults && !isCorrect && <XCircle className="w-5 h-5 text-red-500 absolute -right-6 top-1.5" />}
                   </div>
                   <span>{q.textAfter}</span>
                </div>
                {showResults && !isCorrect && (
                   <div className="text-sm text-blue-600 font-bold mt-1">
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
