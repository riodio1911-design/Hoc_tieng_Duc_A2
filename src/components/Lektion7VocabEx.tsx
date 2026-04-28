import React, { useState } from 'react';
import { RefreshCcw, CheckCircle2, ChevronRight, Check, X } from 'lucide-react';

const exercises = [
  {
    type: 'matching',
    question: 'Nối từ tiếng Đức với nghĩa tiếng Việt tương ứng (Phần 1):',
    pairs: [
      { id: '1', de: 'abnehmen', vi: 'giảm cân' },
      { id: '2', de: 'ausruhen', vi: 'nghỉ ngơi' },
      { id: '3', de: 'trainieren', vi: 'tập luyện' },
      { id: '4', de: 'mindestens', vi: 'ít nhất' },
      { id: '5', de: 'regelmäßig', vi: 'thường xuyên' }
    ]
  },
  {
    type: 'matching',
    question: 'Nối từ tiếng Đức với nghĩa tiếng Việt tương ứng (Phần 2):',
    pairs: [
      { id: '1', de: 'das Gewicht', vi: 'cân nặng' },
      { id: '2', de: 'die Gesundheit', vi: 'sức khỏe' },
      { id: '3', de: 'die Sportart', vi: 'môn thể thao' },
      { id: '4', de: 'teilnehmen', vi: 'tham gia' },
      { id: '5', de: 'empfehlen', vi: 'giới thiệu, khuyên' }
    ]
  },
  {
    type: 'fill-in',
    question: 'Điền từ thích hợp vào chỗ trống (Diät, Gesundheit, fit, empfiehlst, Luft):',
    sentences: [
      { text: 'Ich mache viel Sport und bin sehr _____.', answer: 'fit' },
      { text: 'Rauchen ist schlecht für die _____.', answer: 'Gesundheit' },
      { text: 'Sie ist zu dick und macht jetzt eine _____.', answer: 'Diät' },
      { text: 'Wir gehen nach draußen an die frische _____.', answer: 'Luft' },
      { text: 'Welche Sportart _____ du mir?', answer: 'empfiehlst' }
    ]
  },
  {
    type: 'choice',
    question: 'Chọn từ đúng nhất để hoàn thành câu:',
    questions: [
      { text: "Er möchte 5 Kilo ___.", options: ["abnehmen", "zunehmen", "wiegen"], answer: 0 },
      { text: "Am Wochenende spiele ich oft ___.", options: ["Gesundheit", "Gewicht", "Badminton"], answer: 2 },
      { text: "Ich bin so müde. Ich muss mich ___.", options: ["trainieren", "ausruhen", "teilnehmen"], answer: 1 },
      { text: "Welche ___ machst du gern?", options: ["Diät", "Sportart", "Luft"], answer: 1 }
    ]
  }
];

export default function Lektion7VocabEx() {
  const [currentEx, setCurrentEx] = useState(0);
  const [selectedDe, setSelectedDe] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [fillAnswers, setFillAnswers] = useState<Record<number, string>>({});
  const [choiceAnswers, setChoiceAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const handleMatch = (viId: string) => {
    if (selectedDe) {
      setMatches(prev => ({ ...prev, [selectedDe]: viId }));
      setSelectedDe(null);
    }
  };

  const checkAnswers = () => {
    setShowResult(true);
  };

  const exercise = exercises[currentEx];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-theme-dark/10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-black text-theme-dark">Bài tập Từ vựng</h2>
          <div className="text-theme-dark/50 font-bold">Bài {currentEx + 1}/{exercises.length}</div>
        </div>

        {exercise.type === 'matching' && (
          <div className="space-y-8">
            <p className="text-lg font-bold text-theme-dark/80">{exercise.question}</p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                {exercise.pairs.map(p => (
                  <button
                    key={'de-' + p.id}
                    onClick={() => setSelectedDe(p.id)}
                    disabled={!!matches[p.id]}
                    className={`w-full p-4 rounded-xl font-bold text-left transition-all ${
                      matches[p.id] ? 'bg-emerald-50 text-emerald-600 border-2 border-emerald-200'
                      : selectedDe === p.id ? 'bg-indigo-50 text-indigo-600 border-2 border-indigo-500'
                      : 'bg-white text-theme-dark hover:bg-gray-50 border-2 border-gray-100'
                    }`}
                  >
                    {p.de}
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                {[...exercise.pairs].sort((a,b) => b.vi.localeCompare(a.vi)).map(p => {
                  const isMatched = Object.values(matches).includes(p.id);
                  const matchedDeId = Object.keys(matches).find(key => matches[key] === p.id);
                  const isCorrect = matchedDeId === p.id;

                  return (
                    <button
                      key={'vi-' + p.id}
                      onClick={() => handleMatch(p.id)}
                      disabled={isMatched}
                      className={`w-full p-4 rounded-xl font-bold text-left transition-all ${
                        isMatched ? (isCorrect ? 'bg-emerald-50 text-emerald-600 border-2 border-emerald-200' : 'bg-rose-50 text-rose-600 border-2 border-rose-200')
                        : 'bg-white text-theme-dark hover:bg-gray-50 border-2 border-gray-100'
                      }`}
                    >
                      {p.vi}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {exercise.type === 'fill-in' && (
          <div className="space-y-8">
            <p className="text-lg font-bold text-theme-dark/80">{exercise.question}</p>
            <div className="space-y-6">
              {exercise.sentences?.map((s, i) => {
                const parts = s.text.split('____');
                const isCorrect = fillAnswers[i]?.trim().toLowerCase() === s.answer.toLowerCase();
                return (
                  <div key={i} className="flex flex-wrap items-center gap-2 text-lg">
                    <span>{parts[0]}</span>
                    <input
                      type="text"
                      className={`border-b-2 outline-none text-center px-4 py-1 bg-transparent font-bold w-32 ${
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
                    <span>{parts[1]}</span>
                    {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
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
                const parts = q.text.split('___');
                const selected = choiceAnswers[i];
                return (
                  <div key={i} className="flex flex-col gap-3 p-4 rounded-2xl bg-zinc-50 border border-theme-dark/5">
                    <div className="text-lg font-bold">
                      {i + 1}. {parts[0]}
                      <span className="inline-block min-w-[60px] border-b-2 border-theme-dark/20 text-center text-indigo-600 px-2 mx-1">
                        {selected !== undefined ? q.options[selected] : '...'}
                      </span>
                      {parts[1]}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {q.options.map((opt, optIdx) => (
                        <button
                          key={optIdx}
                          onClick={() => {
                            if (!showResult) {
                              setChoiceAnswers(prev => ({ ...prev, [i]: optIdx }));
                            }
                          }}
                          className={`px-4 py-2 rounded-xl font-bold transition flex items-center gap-2 ${
                            showResult && optIdx === q.answer ? 'bg-emerald-100 text-emerald-700 ring-2 ring-emerald-500' :
                            showResult && selected === optIdx && optIdx !== q.answer ? 'bg-rose-100 text-rose-700 ring-2 ring-rose-500' :
                            selected === optIdx ? 'bg-indigo-600 text-white shadow-md' :
                            'bg-white text-theme-dark hover:bg-zinc-100 border border-theme-dark/10'
                          }`}
                        >
                          {opt}
                          {showResult && optIdx === q.answer && <Check className="w-4 h-4 ml-1" />}
                          {showResult && selected === optIdx && optIdx !== q.answer && <X className="w-4 h-4 ml-1" />}
                        </button>
                      ))}
                    </div>
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

        <div className="mt-12 flex justify-between">
          <button
            onClick={() => {
              setMatches({});
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
