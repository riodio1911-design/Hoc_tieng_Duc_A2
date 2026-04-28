import React, { useState } from 'react';
import { RefreshCcw, CheckCircle2, ChevronRight, Check, X } from 'lucide-react';

const exercises = [
  {
    type: 'fill-in',
    question: 'Chuyển danh từ thành trạng từ thời gian (mỗi...):',
    sentences: [
      { pre: 'jeden Morgen = ', answer: 'morgens' },
      { pre: 'jeden Abend = ', answer: 'abends' },
      { pre: 'jeden Montag = ', answer: 'montags' },
      { pre: 'jede Nacht = ', answer: 'nachts' },
      { pre: 'jeden Mittwoch = ', answer: 'mittwochs' }
    ]
  },
  {
    type: 'choice',
    question: 'Chọn dạng đúng của könnte / sollte:',
    questions: [
      { text: "Maria möchte abnehmen. Sie _____ keinen Kuchen essen.", options: ["könnten", "sollte", "solltest"], answer: 1 },
      { text: "Ich bin zu dick. Was _____ ich tun?", options: ["soll", "könntest", "solltest"], answer: 0 },
      { text: "Wir _____ am Wochenende in die Berge fahren.", options: ["könnten", "könnte", "solltet"], answer: 0 },
      { text: "Du hast Halsschmerzen. Du _____ Salbeitee trinken.", options: ["sollte", "solltest", "könntet"], answer: 1 }
    ]
  },
  {
    type: 'fill-in',
    question: 'Điền giới từ (zwischen, von, bis, an, seit, über):',
    sentences: [
      { pre: 'Ich lebe in Berlin ', gap: true, post: ' vier Monaten.', answer: 'seit' },
      { pre: 'Das Training ist ', gap: true, post: ' 18:00 und 19:00 Uhr.', answer: 'zwischen' },
      { pre: 'Er wiegt schon ', gap: true, post: ' 80 Kilo.', answer: 'über' },
      { pre: '', gap: true, post: ' morgen mache ich jeden Tag Sport.', answer: 'von' }
    ]
  },
  {
    type: 'fill-in',
    question: 'Chia động từ ở thì hiện tại (Hiện tại / sollen / können...):',
    sentences: [
      { pre: 'Der Arzt sagt, ich ', gap: true, post: ' mehr Wasser trinken. (sollen)', answer: 'soll' },
      { pre: 'Du ', gap: true, post: ' dich ausruhen. (sollen)', answer: 'sollst' },
      { pre: 'Er ', gap: true, post: ' nicht zum Training kommen. (können)', answer: 'kann' },
      { pre: 'Wir ', gap: true, post: ' jeden Tag eine Stunde joggen. (können)', answer: 'können' }
    ]
  },
  {
    type: 'choice',
    question: 'Hoàn thành câu bằng từ chỉ thời gian phù hợp:',
    questions: [
      { text: "___ gehe ich immer ins Fitnessstudio.", options: ["Montags", "Montag", "Im Montag"], answer: 0 },
      { text: "Er arbeitet ___ bis spät in die Nacht.", options: ["abends", "am Abend", "Abend"], answer: 0 },
      { text: "Ich schlafe ___ sehr schlecht.", options: ["nachts", "in der Nacht", "Nacht"], answer: 0 }
    ]
  }
];

export default function Lektion7GrammarEx() {
  const [currentEx, setCurrentEx] = useState(0);
  const [fillAnswers, setFillAnswers] = useState<Record<number, string>>({});
  const [choiceAnswers, setChoiceAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const checkAnswers = () => {
    setShowResult(true);
  };

  const exercise = exercises[currentEx];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-theme-dark/10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-black text-theme-dark">Bài tập Ngữ pháp</h2>
          <div className="text-theme-dark/50 font-bold">Bài {currentEx + 1}/{exercises.length}</div>
        </div>

        {exercise.type === 'fill-in' && (
          <div className="space-y-8">
            <p className="text-lg font-bold text-theme-dark/80">{exercise.question}</p>
            <div className="space-y-6">
              {exercise.sentences?.map((s, i) => {
                const isCorrect = fillAnswers[i]?.trim().toLowerCase() === s.answer.toLowerCase();
                return (
                  <div key={i} className="flex flex-wrap items-center gap-2 text-lg">
                    {s.pre && <span className="font-medium text-theme-dark">{s.pre}</span>}
                    <input
                      type="text"
                      className={`border-b-2 outline-none text-center px-4 py-1 bg-transparent font-bold min-w-[120px] ${
                        showResult ? (isCorrect ? 'border-emerald-500 text-emerald-600' : 'border-rose-500 text-rose-600')
                        : 'border-theme-dark/20 focus:border-indigo-500 text-theme-dark'
                      }`}
                      value={fillAnswers[i] || ''}
                      onChange={(e) => {
                        setFillAnswers(prev => ({ ...prev, [i]: e.target.value }));
                        setShowResult(false);
                      }}
                      readOnly={showResult && isCorrect}
                    />
                    {s.post && <span className="font-medium text-theme-dark">{s.post}</span>}
                    {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 ml-2" />}
                    {showResult && !isCorrect && fillAnswers[i] && (
                       <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded ml-2">Đ/A: {s.answer}</span>
                    )}
                  </div>
                );
              })}
            </div>
            
            <button
              onClick={checkAnswers}
              className="mt-8 px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition"
            >
              Kiểm tra
            </button>
          </div>
        )}

        {exercise.type === 'choice' && (
           <div className="space-y-8">
             <p className="text-lg font-bold text-theme-dark/80">{exercise.question}</p>
             <div className="space-y-6">
                {exercise.questions?.map((q, i) => {
                  const hasAnswered = choiceAnswers[i] !== undefined;
                  const isCorrect = choiceAnswers[i] === q.answer;

                  return (
                    <div key={i} className="bg-gray-50 p-6 rounded-2xl">
                       <p className="text-lg font-medium text-theme-dark mb-4">{q.text}</p>
                       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                         {q.options.map((opt, optIndex) => {
                           const isSelected = choiceAnswers[i] === optIndex;
                           let btnClass = "border-2 bg-white text-theme-dark hover:bg-indigo-50 hover:border-indigo-200";
                           
                           if (showResult) {
                             if (optIndex === q.answer) btnClass = "border-2 border-emerald-500 bg-emerald-50 text-emerald-700";
                             else if (isSelected && !isCorrect) btnClass = "border-2 border-rose-500 bg-rose-50 text-rose-700";
                             else btnClass = "border-2 border-gray-200 bg-white text-gray-400 opacity-50";
                           } else if (isSelected) {
                             btnClass = "border-2 border-indigo-500 bg-indigo-50 text-indigo-700";
                           }

                           return (
                             <button
                               key={optIndex}
                               disabled={showResult}
                               onClick={() => {
                                 setChoiceAnswers(prev => ({...prev, [i]: optIndex}));
                                 setShowResult(false);
                               }}
                               className={`px-4 py-3 rounded-xl font-bold transition-all flex items-center justify-between ${btnClass}`}
                             >
                               {opt}
                               {showResult && optIndex === q.answer && <Check className="w-5 h-5" />}
                               {showResult && isSelected && !isCorrect && <X className="w-5 h-5" />}
                             </button>
                           )
                         })}
                       </div>
                    </div>
                  )
                })}
             </div>
             <button
                onClick={checkAnswers}
                className="mt-8 px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition"
              >
                Kiểm tra
              </button>
           </div>
        )}

        <div className="mt-12 flex justify-between">
          <button
            onClick={() => {
              setFillAnswers({});
              setChoiceAnswers({});
              setShowResult(false);
            }}
            className="flex items-center gap-2 px-6 py-3 font-bold text-theme-dark/60 hover:text-theme-dark transition-colors"
          >
            <RefreshCcw className="w-5 h-5" /> Làm lại
          </button>
          {currentEx < exercises.length - 1 ? (
            <button
              onClick={() => {
                setCurrentEx(prev => prev + 1);
                setShowResult(false);
              }}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Bài tiếp theo <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <div className="flex items-center gap-2 px-6 py-3 bg-emerald-100 text-emerald-600 font-bold rounded-xl">
              <CheckCircle2 className="w-5 h-5" /> Đã hoàn thành
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
