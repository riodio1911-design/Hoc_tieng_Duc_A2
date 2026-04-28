import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, RefreshCcw } from 'lucide-react';

export default function Lektion1VocabEx() {
  const [familyAnswers, setFamilyAnswers] = useState<Record<number, string>>({});
  const [activityAnswers, setActivityAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const familyQuestions = [
    { label: "Die Schwester von meinem Vater ist meine ...", answer: "Tante", options: ["Cousine", "Nichte", "Tante", "Schwiegermutter"] },
    { label: "Die Tochter von meiner Schwester ist meine ...", answer: "Nichte", options: ["Tante", "Nichte", "Schwiegertochter", "Cousine"] },
    { label: "Die Tochter von meiner Tante ist meine ...", answer: "Cousine", options: ["Nichte", "Cousine", "Schwiegermutter", "Tante"] },
    { label: "Die Mutter von meiner Frau ist meine ...", answer: "Schwiegermutter", options: ["Tante", "Nichte", "Cousine", "Schwiegermutter"] },
    { label: "Die Frau von meinem Sohn ist meine ...", answer: "Schwiegertochter", options: ["Schwiegertochter", "Nichte", "Cousine", "Schwiegermutter"] }
  ];

  const activityQuestions = [
    { label: "Früher habe ich oft draußen ...", answer: "übernachtet", options: ["übernachtet", "gesammelt", "klettern"] },
    { label: "Als Kind bin ich gern auf Bäume ...", answer: "geklettert", options: ["gespielt", "geklettert", "verkauft"] },
    { label: "Ich habe meiner Schwester oft Geschichten ...", answer: "erzählt", options: ["erzählt", "gespielt", "gemacht"] },
    { label: "Wir haben alte Sachen auf dem Flohmarkt ...", answer: "verkauft", options: ["gekauft", "gesammelt", "verkauft"] },
    { label: "Mein Onkel hat immer lustige Witze ...", answer: "erzählt", options: ["gemacht", "erzählt", "gespielt"] }
  ];

  const handleDragStart = (e: React.DragEvent, text: string) => {
    e.dataTransfer.setData('text/plain', text);
  };

  const handleDropFamily = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    const text = e.dataTransfer.getData('text/plain');
    if (familyQuestions[index].options.includes(text)) {
       setFamilyAnswers(prev => ({ ...prev, [index]: text }));
    }
  };

  const handleDropActivity = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    const text = e.dataTransfer.getData('text/plain');
    if (activityQuestions[index].options.includes(text)) {
       setActivityAnswers(prev => ({ ...prev, [index]: text }));
    }
  };

  const checkAnswers = () => setShowResults(true);
  
  const reset = () => {
    setFamilyAnswers({});
    setActivityAnswers({});
    setShowResults(false);
  };

  const score = Object.keys(familyAnswers).filter(k => familyAnswers[Number(k)] === familyQuestions[Number(k)].answer).length +
                Object.keys(activityAnswers).filter(k => activityAnswers[Number(k)] === activityQuestions[Number(k)].answer).length;
                
  const total = familyQuestions.length + activityQuestions.length;

  const draggableWords = Array.from(new Set([
    ...familyQuestions.flatMap(q => q.options),
    ...activityQuestions.flatMap(q => q.options)
  ])).sort();

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-rose-500 mb-2">Bài tập Từ Vựng (Wortschatzübungen)</h2>
        <p className="text-theme-dark/60 font-medium">Lektion 1: Gia đình và Tuổi thơ</p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-xl shadow-theme-dark/5 border-2 border-slate-100">
        <h3 className="text-xl font-bold text-theme-dark mb-4">Danh sách từ vựng (Nhấn giữ và kéo vào ô trống):</h3>
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
        <h3 className="text-xl font-bold text-rose-600 mb-6">1. Wer ist das? (Đó là ai?)</h3>
        <div className="space-y-4">
          {familyQuestions.map((q, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center gap-3 bg-slate-50 p-4 rounded-xl">
              <span className="font-medium text-theme-dark flex-1">{q.label}</span>
              <div 
                onDragOver={e => e.preventDefault()}
                onDrop={e => handleDropFamily(e, i)}
                className={`min-w-[180px] h-10 border-2 border-dashed rounded-lg flex items-center justify-center font-bold px-4
                  ${familyAnswers[i] ? 'border-rose-500 bg-rose-50 text-rose-700' : 'border-slate-300 bg-white relative'}
                  ${showResults ? (familyAnswers[i] === q.answer ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-red-500 bg-red-50 text-red-700') : ''}
                `}
              >
                {!familyAnswers[i] && <span className="text-slate-400 absolute font-normal text-sm">thả từ vào đây</span>}
                {familyAnswers[i]}
                {showResults && familyAnswers[i] === q.answer && <CheckCircle2 className="w-5 h-5 text-emerald-500 absolute -right-2 -top-2 bg-white rounded-full" />}
                {showResults && familyAnswers[i] !== q.answer && <XCircle className="w-5 h-5 text-red-500 absolute -right-2 -top-2 bg-white rounded-full" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-theme-dark/5 border-2 border-blue-500/10">
        <h3 className="text-xl font-bold text-blue-600 mb-6">2. Kindheitserinnerungen (Kỷ niệm tuổi thơ)</h3>
        <div className="space-y-4">
          {activityQuestions.map((q, i) => {
            const parts = q.label.split('...');
            return (
              <div key={i} className="flex flex-wrap items-center gap-3 bg-slate-50 p-4 rounded-xl font-medium text-theme-dark">
                <span>{parts[0]}</span>
                <div 
                  onDragOver={e => e.preventDefault()}
                  onDrop={e => handleDropActivity(e, i)}
                  className={`min-w-[150px] h-10 border-2 border-dashed rounded-lg flex items-center justify-center font-bold px-4
                    ${activityAnswers[i] ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-300 bg-white relative'}
                    ${showResults ? (activityAnswers[i] === q.answer ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-red-500 bg-red-50 text-red-700') : ''}
                  `}
                >
                  {!activityAnswers[i] && <span className="text-slate-400 absolute font-normal text-sm">...</span>}
                  {activityAnswers[i]}
                  {showResults && activityAnswers[i] === q.answer && <CheckCircle2 className="w-5 h-5 text-emerald-500 absolute -right-2 -top-2 bg-white rounded-full" />}
                  {showResults && activityAnswers[i] !== q.answer && <XCircle className="w-5 h-5 text-red-500 absolute -right-2 -top-2 bg-white rounded-full" />}
                </div>
                <span>{parts.length > 1 ? parts[1] : ''}.</span>
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
