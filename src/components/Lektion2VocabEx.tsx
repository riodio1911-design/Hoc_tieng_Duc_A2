import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, RefreshCcw } from 'lucide-react';

export default function Lektion2VocabEx() {
  const [furnitureAnswers, setFurnitureAnswers] = useState<Record<number, string>>({});
  const [tipsAnswers, setTipsAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const furnitureQuestions = [
    { label: "Hier kann man arbeiten:", answer: "Schreibtisch", options: ["Schreibtisch", "Kissen", "Vorhang"] },
    { label: "Sie liegen auf dem Sofa:", answer: "Kissen", options: ["Spiegel", "Kissen", "Teppich"] },
    { label: "Dort kann ich mich sehen:", answer: "Spiegel", options: ["Schrank", "Lampe", "Spiegel"] },
    { label: "Das bringt man aus dem Urlaub mit:", answer: "Souvenir", options: ["Souvenir", "Teppich", "Werkzeug"] },
    { label: "Das hängt vor dem Fenster:", answer: "Vorhang", options: ["Teppich", "Vorhang", "Bild"] },
    { label: "Hier kann man kochen:", answer: "Herd", options: ["Kommode", "Herd", "Sofa"] },
    { label: "Das braucht man zum Reparieren:", answer: "Werkzeug", options: ["Kissen", "Werkzeug", "Spiegel"] }
  ];

  const tipsQuestions = [
    { label: "_____ nicht zu viele Möbel in das Zimmer. (đặt, để)", answer: "Stell", options: ["Häng", "Stell", "Leg"] },
    { label: "_____ man zu viele Möbel in den Raum, wird er kleiner. (đặt nằm/để phẳng)", answer: "Legt", options: ["Hängt", "Legt", "Stellt"] },
    { label: "_____ einen Spiegel an die Wand. (treo)", answer: "Häng", options: ["Legen", "Häng", "Stell"] },
    { label: "_____ vorsichtig mit dunklen Möbeln. (hãy)", answer: "Seid", options: ["Seid", "Hängt", "Stellt"] },
    { label: "Ein Teppich auf dem Boden _____ das Zimmer viel gemütlicher. (làm cho)", answer: "macht", options: ["macht", "hängt", "braucht"] }
  ];

  const handleDragStart = (e: React.DragEvent, text: string) => {
    e.dataTransfer.setData('text/plain', text);
  };

  const handleDropFurniture = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    const text = e.dataTransfer.getData('text/plain');
    if (furnitureQuestions[index].options.includes(text)) {
       setFurnitureAnswers(prev => ({ ...prev, [index]: text }));
    }
  };

  const handleDropTips = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    const text = e.dataTransfer.getData('text/plain');
    if (tipsQuestions[index].options.includes(text)) {
       setTipsAnswers(prev => ({ ...prev, [index]: text }));
    }
  };

  const checkAnswers = () => setShowResults(true);
  
  const reset = () => {
    setFurnitureAnswers({});
    setTipsAnswers({});
    setShowResults(false);
  };

  const score = Object.keys(furnitureAnswers).filter(k => furnitureAnswers[Number(k)] === furnitureQuestions[Number(k)].answer).length +
                Object.keys(tipsAnswers).filter(k => tipsAnswers[Number(k)] === tipsQuestions[Number(k)].answer).length;
                
  const total = furnitureQuestions.length + tipsQuestions.length;

  const draggableWords = Array.from(new Set([
    ...furnitureQuestions.flatMap(q => q.options),
    ...tipsQuestions.flatMap(q => q.options)
  ])).sort();

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-rose-500 mb-2">Bài tập Từ Vựng (Wortschatzübungen)</h2>
        <p className="text-theme-dark/60 font-medium">Lektion 2: Wohin mit der Kommode?</p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-xl shadow-theme-dark/5 border-2 border-slate-100">
        <h3 className="text-xl font-bold text-theme-dark mb-4">Kéo và thả từ vào ô trống thích hợp:</h3>
        <div className="flex flex-wrap gap-2 mb-2 p-4 bg-slate-50 border border-slate-200 rounded-xl min-h-[80px]">
          {draggableWords.map((word, i) => (
            <motion.div
              key={i}
              draggable
              onDragStart={(e: any) => handleDragStart(e, word)}
              className="px-4 py-2 bg-white border-2 border-rose-200 text-rose-700 font-bold rounded-lg cursor-grab active:cursor-grabbing hover:bg-rose-50 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {word}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-rose-500/10">
        <h3 className="text-xl font-bold text-rose-600 mb-6">1. Đồ vật nào đây? (Was ist das?)</h3>
        <div className="space-y-4">
          {furnitureQuestions.map((q, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center gap-3 bg-slate-50 p-4 rounded-xl">
              <span className="font-medium text-theme-dark flex-1">{q.label}</span>
              <div 
                onDragOver={e => e.preventDefault()}
                onDrop={e => handleDropFurniture(e, i)}
                className={`min-w-[150px] h-10 border-2 border-dashed rounded-lg flex items-center justify-center font-bold px-4
                  ${furnitureAnswers[i] ? 'border-rose-500 bg-rose-50 text-rose-700' : 'border-slate-300 bg-white relative'}
                  ${showResults ? (furnitureAnswers[i] === q.answer ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-red-500 bg-red-50 text-red-700') : ''}
                `}
              >
                {!furnitureAnswers[i] && <span className="text-slate-400 absolute font-normal text-sm">thả từ vào đây</span>}
                {furnitureAnswers[i]}
                {showResults && furnitureAnswers[i] === q.answer && <CheckCircle2 className="w-5 h-5 text-emerald-500 absolute -right-2 -top-2 bg-white rounded-full" />}
                {showResults && furnitureAnswers[i] !== q.answer && <XCircle className="w-5 h-5 text-red-500 absolute -right-2 -top-2 bg-white rounded-full" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-blue-500/10">
        <h3 className="text-xl font-bold text-blue-600 mb-6">2. Lời khuyên thiết kế (Einrichtungstipps)</h3>
        <div className="space-y-4">
          {tipsQuestions.map((q, i) => {
            const parts = q.label.split('_____');
            return (
              <div key={i} className="flex flex-wrap items-center gap-3 bg-slate-50 p-4 rounded-xl font-medium text-theme-dark">
                <span>{parts[0]}</span>
                <div 
                  onDragOver={e => e.preventDefault()}
                  onDrop={e => handleDropTips(e, i)}
                  className={`min-w-[120px] h-10 border-2 border-dashed rounded-lg flex items-center justify-center font-bold px-4
                    ${tipsAnswers[i] ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-300 bg-white relative'}
                    ${showResults ? (tipsAnswers[i] === q.answer ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-red-500 bg-red-50 text-red-700') : ''}
                  `}
                >
                  {!tipsAnswers[i] && <span className="text-slate-400 absolute font-normal text-sm">...</span>}
                  {tipsAnswers[i]}
                  {showResults && tipsAnswers[i] === q.answer && <CheckCircle2 className="w-5 h-5 text-emerald-500 absolute -right-2 -top-2 bg-white rounded-full" />}
                  {showResults && tipsAnswers[i] !== q.answer && <XCircle className="w-5 h-5 text-red-500 absolute -right-2 -top-2 bg-white rounded-full" />}
                </div>
                <span>{parts.length > 1 ? parts[1] : ''}</span>
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
