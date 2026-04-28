import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, RefreshCcw } from 'lucide-react';

export default function Lektion3VocabEx() {
  const [answers1, setAnswers1] = useState<Record<number, string>>({});
  const [answers2, setAnswers2] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  // Hidden words mapping
  const hiddenWordsQuestions = [
    { label: "1. U J K _____ M A (nơi có nhiều nước và cát)", answer: "Strand", options: ["Strand", "Ufer", "Dorf", "Meer"] },
    { label: "2. P Q W _____ F X (vùng có nhiều cây rậm rạp)", answer: "Wald", options: ["Wald", "Wiese", "Dorf", "Baum"] },
    { label: "3. T R S _____ L M (vùng đồng cỏ xanh)", answer: "Wiese", options: ["Wiese", "Berg", "Landschaft", "Ufer"] },
    { label: "4. Z Q W _____ Y X (loài vật bay trên trời)", answer: "Vogel", options: ["Vogel", "Fisch", "Katze", "Hund"] },
    { label: "5. A B F _____ C D (loài vật sống dưới nước)", answer: "Fisch", options: ["Fisch", "Vogel", "Hund", "Kuh"] },
    { label: "6. L K R _____ M N (không gian rộng lớn, cảnh quan tự nhiên)", answer: "Landschaft", options: ["Landschaft", "Dorf", "Ruhe", "Meer"] }
  ];

  // Tourism and adjectives
  const tourismQuestions = [
    { label: "Wir _____ Stadtteilen für Touristen an.", answer: "bieten", options: ["bieten", "erleben", "buchen", "enden"] },
    { label: "Welche Reise würdest du am liebsten _____?", answer: "buchen", options: ["enden", "buchen", "beraten", "mitmachen"] },
    { label: "Nur Fortgeschrittene dürfen beim Unterricht _____.", answer: "mitmachen", options: ["buchen", "mitmachen", "erleben", "anbieten"] },
    { label: "Das gefällt mir _____ nicht.", answer: "überhaupt", options: ["überhaupt", "direkt", "anders", "außerdem"] },
    { label: "E-Bikes _____ gerade im Trend.", answer: "liegen", options: ["machen", "liegen", "sitzen", "anbieten"] }
  ];

  const handleDragStart = (e: React.DragEvent, text: string) => {
    e.dataTransfer.setData('text/plain', text);
  };

  const handleDrop1 = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    const text = e.dataTransfer.getData('text/plain');
    if (hiddenWordsQuestions[index].options.includes(text)) {
       setAnswers1(prev => ({ ...prev, [index]: text }));
    }
  };

  const handleDrop2 = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    const text = e.dataTransfer.getData('text/plain');
    if (tourismQuestions[index].options.includes(text)) {
       setAnswers2(prev => ({ ...prev, [index]: text }));
    }
  };

  const checkAnswers = () => setShowResults(true);
  
  const reset = () => {
    setAnswers1({});
    setAnswers2({});
    setShowResults(false);
  };

  const score = Object.keys(answers1).filter(k => answers1[Number(k)] === hiddenWordsQuestions[Number(k)].answer).length +
                Object.keys(answers2).filter(k => answers2[Number(k)] === tourismQuestions[Number(k)].answer).length;
                
  const total = hiddenWordsQuestions.length + tourismQuestions.length;

  const draggableWords = Array.from(new Set([
    ...hiddenWordsQuestions.flatMap(q => q.options),
    ...tourismQuestions.flatMap(q => q.options)
  ])).sort();

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-emerald-500 mb-2">Bài tập Từ Vựng (Wortschatzübungen)</h2>
        <p className="text-theme-dark/60 font-medium">Lektion 3: Hier finden Sie Ruhe und Erholung.</p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-xl shadow-theme-dark/5 border-2 border-slate-100">
        <h3 className="text-xl font-bold text-theme-dark mb-4">Kéo và thả từ vào ô trống thích hợp:</h3>
        <div className="flex flex-wrap gap-2 mb-2 p-4 bg-slate-50 border border-slate-200 rounded-xl min-h-[80px]">
          {draggableWords.map((word, i) => (
            <motion.div
              key={i}
              draggable
              onDragStart={(e: any) => handleDragStart(e, word)}
              className="px-4 py-2 bg-white border-2 border-emerald-200 text-emerald-700 font-bold rounded-lg cursor-grab active:cursor-grabbing hover:bg-emerald-50 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {word}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-emerald-500/10">
        <h3 className="text-xl font-bold text-emerald-600 mb-6">1. Động vật & Thiên nhiên (Versteckte Wörter)</h3>
        <div className="space-y-4">
          {hiddenWordsQuestions.map((q, i) => {
            const parts = q.label.split('_____');
            return (
              <div key={i} className="flex flex-wrap md:flex-nowrap md:items-center gap-3 bg-slate-50 p-4 rounded-xl font-medium text-theme-dark">
                <span className="flex-1">{parts[0]}</span>
                <div 
                  onDragOver={e => e.preventDefault()}
                  onDrop={e => handleDrop1(e, i)}
                  className={`min-w-[150px] shrink-0 h-10 border-2 border-dashed rounded-lg flex items-center justify-center font-bold px-4
                    ${answers1[i] ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-300 bg-white relative'}
                    ${showResults ? (answers1[i] === q.answer ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-red-500 bg-red-50 text-red-700') : ''}
                  `}
                >
                  {!answers1[i] && <span className="text-slate-400 absolute font-normal text-sm">thả vào đây</span>}
                  {answers1[i]}
                  {showResults && answers1[i] === q.answer && <CheckCircle2 className="w-5 h-5 text-emerald-500 absolute -right-2 -top-2 bg-white rounded-full" />}
                  {showResults && answers1[i] !== q.answer && <XCircle className="w-5 h-5 text-red-500 absolute -right-2 -top-2 bg-white rounded-full" />}
                </div>
                {parts[1] && <span className="text-sm text-slate-500">{parts[1]}</span>}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-blue-500/10">
        <h3 className="text-xl font-bold text-blue-600 mb-6">2. Du lịch & Hoạt động (Tourismus & Aktivitäten)</h3>
        <div className="space-y-4">
          {tourismQuestions.map((q, i) => {
            const parts = q.label.split('_____');
            return (
              <div key={i} className="flex flex-wrap items-center gap-3 bg-slate-50 p-4 rounded-xl font-medium text-theme-dark">
                <span>{parts[0]}</span>
                <div 
                  onDragOver={e => e.preventDefault()}
                  onDrop={e => handleDrop2(e, i)}
                  className={`min-w-[120px] h-10 border-2 border-dashed rounded-lg flex items-center justify-center font-bold px-4
                    ${answers2[i] ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-300 bg-white relative'}
                    ${showResults ? (answers2[i] === q.answer ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-red-500 bg-red-50 text-red-700') : ''}
                  `}
                >
                  {!answers2[i] && <span className="text-slate-400 absolute font-normal text-sm">...</span>}
                  {answers2[i]}
                  {showResults && answers2[i] === q.answer && <CheckCircle2 className="w-5 h-5 text-emerald-500 absolute -right-2 -top-2 bg-white rounded-full" />}
                  {showResults && answers2[i] !== q.answer && <XCircle className="w-5 h-5 text-red-500 absolute -right-2 -top-2 bg-white rounded-full" />}
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
