import React, { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Lektion6GrammarEx() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, boolean>>({});

  const handleSelect = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    setResults(prev => {
      const newResults = { ...prev };
      delete newResults[questionId];
      return newResults;
    });
  };

  const checkAnswers = (groupId: string, data: any[]) => {
    const newResults: Record<string, boolean> = {};
    data.forEach(q => {
      const key = `${groupId}_${q.id}`;
      if (answers[key]) {
        newResults[key] = answers[key] === q.correct;
      }
    });
    setResults(prev => ({ ...prev, ...newResults }));
  };

  const exercises = [
    {
      id: 'ex1',
      title: 'Bài 1. Điền giới từ thời gian',
      hint: 'Chọn: ab - am - für - in - nach - seit - über - von - vor - vom ... bis - von ... an',
      questions: [
        { id: '1', text: 'Ich schaffe es ___ Freitag leider doch nicht.', options: ['am', 'im', 'von'], correct: 'am' },
        { id: '2', text: 'Können wir unser Treffen verschieben? ___ dem Handballtraining habe ich noch einen Termin beim Zahnarzt.', options: ['Vor', 'Nach', 'In'], correct: 'Vor' },
        { id: '3', text: 'Und abends ___ dem Training muss ich noch packen.', options: ['vor', 'nach', 'in'], correct: 'nach' },
        { id: '4', text: '___ Samstag fahre ich ___ zwei Wochen in den Urlaub.', options: ['Am / für', 'Am / seit', 'Von / für'], correct: 'Am / für' },
        { id: '5', text: 'Und ___ dem Urlaub bin ich dann geschäftlich in London.', options: ['nach', 'vor', 'in'], correct: 'nach' },
        { id: '6', text: 'Wie lange dauert die Prüfung? ___ eine Stunde (viel länger als 1 Stunde).', options: ['Seit', 'Über', 'Von'], correct: 'Über' },
        { id: '7', text: '___ wann beginnt dein Deutschkurs? ___ 1. September.', options: ['Ab / Von ... an', 'Von / Ab', 'Ab / Seit'], correct: 'Ab / Von ... an' },
        { id: '8', text: 'Wie lange ist die Ausstellung? ___ 1. ___ 31. Juli.', options: ['Von / bis', 'Vom / bis zum', 'Am / bis'], correct: 'Vom / bis zum' }
      ]
    },
    {
      id: 'ex2',
      title: 'Bài 2. Chọn câu hỏi đúng',
      hint: 'Seit wann? (Bắt đầu khi nào trong QK và vẫn còn tiếp diễn) / Wie lange? (Bao lâu, kéo dài bao lâu)',
      questions: [
        { id: '1', text: '___ wohnt du schon in der Schweiz?', options: ['Wie lange / Seit wann', 'Ab wann', 'Von wann'], correct: 'Wie lange / Seit wann' },
        { id: '2', text: '___ lernst du Deutsch? - Seit einem Jahr.', options: ['Wie lange', 'Seit wann', 'Wann'], correct: 'Seit wann' },
        { id: '3', text: '___ bleiben Sie in Berlin? - Über einen Monat.', options: ['Wie lange', 'Seit wann', 'Wann'], correct: 'Wie lange' }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
         <h2 className="text-3xl font-black text-indigo-500 mb-2">Bài tập Ngữ pháp - Lektion 6</h2>
         <p className="text-theme-dark/60 font-medium">Temporale Präpositionen (Giới từ chỉ thời gian)</p>
      </div>

      {exercises.map(exercise => (
        <div key={exercise.id} className="bg-white p-6 md:p-8 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-indigo-500/10">
          <h3 className="text-xl md:text-2xl font-black text-indigo-600 mb-4">
            {exercise.title}
          </h3>
          
          {exercise.hint && (
            <div className="bg-indigo-500/5 p-4 rounded-xl mb-6 text-indigo-700 font-bold text-sm md:text-base">
               {exercise.hint}
            </div>
          )}

          <div className="space-y-4">
            {exercise.questions.map(q => {
              const inputKey = `${exercise.id}_${q.id}`;
              const isCorrect = results[inputKey];
              const isWrong = results[inputKey] === false;

              return (
                <div key={q.id} className={`p-4 rounded-2xl border-2 transition-all duration-300 ${isCorrect ? 'bg-emerald-50 border-emerald-500' : isWrong ? 'bg-rose-50 border-rose-500' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="mb-4 text-theme-dark font-medium text-lg leading-relaxed">
                    {q.text.split('___').map((part, index, array) => (
                      <React.Fragment key={index}>
                        {part}
                        {index !== array.length - 1 && (
                          <span className="inline-block px-4 py-1 mx-2 bg-white rounded-lg border border-slate-300 min-w-[60px] text-center font-bold text-indigo-600">
                            {answers[inputKey] || '?'}
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {q.options.map(opt => (
                      <button
                        key={opt}
                        onClick={() => handleSelect(inputKey, opt)}
                        className={`px-4 py-2 rounded-xl font-bold transition-all duration-200 ${
                          answers[inputKey] === opt 
                            ? 'bg-indigo-500 text-white shadow-md' 
                            : 'bg-white text-theme-dark/70 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={() => checkAnswers(exercise.id, exercise.questions)}
              className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-black rounded-2xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
            >
              Kiểm tra
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
