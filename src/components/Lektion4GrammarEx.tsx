import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Lektion4GrammarEx() {
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
      title: 'Bài 1. Điền đuôi tính từ (Nominativ & Akkusativ)',
      hint: 'Mẹo: Nominativ giống Đực là -er, Trung là -es, Cái là -e. Akkusativ chỉ khác giống Đực là -en.',
      questions: [
        { id: '1', text: 'Ich hätte gern einen mager___ Schinken.', options: ['-er', '-en', '-e'], correct: '-en' },
        { id: '2', text: 'Das ist ein frisch___ Brot.', options: ['-es', '-en', '-e'], correct: '-es' },
        { id: '3', text: 'Wir brauchen eine normal___ Milch.', options: ['-es', '-en', '-e'], correct: '-e' },
        { id: '4', text: 'Möchtest du ein weich___ gekochtes Ei?', options: ['-es', '-er', '-en'], correct: '-es' },
        { id: '5', text: 'Da ist ein frisch___ Apfel.', options: ['-er', '-es', '-e'], correct: '-er' }
      ]
    },
    {
      id: 'ex2',
      title: 'Bài 2. Điền đuôi tính từ (Dativ)',
      hint: 'Mẹo: Sau giới từ "mit von aus zu..." hoặc ở cách Dativ thì tính từ ĐỀU CÓ ĐUÔI -EN.',
      questions: [
        { id: '1', text: 'Ich esse Brot mit einem fett___ Schinken.', options: ['-en', '-er', '-em'], correct: '-en' },
        { id: '2', text: 'Wir machen eine Pizza mit einer grün___ Paprika.', options: ['-en', '-er', '-e'], correct: '-en' },
        { id: '3', text: 'Hast du das Rezept von einem berühmt___ Koch?', options: ['-en', '-er', '-em'], correct: '-en' },
        { id: '4', text: 'Ich koche mit einem hell___ Mehl.', options: ['-en', '-es', '-em'], correct: '-en' }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
         <h2 className="text-3xl font-black text-indigo-500 mb-2">Bài tập Ngữ pháp - Lektion 4</h2>
         <p className="text-theme-dark/60 font-medium">Biến cách tính từ sau mạo từ không xác định (ein/eine)</p>
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
                          <span className="inline-block px-4 py-1 mx-2 bg-white rounded-lg border border-slate-300 min-w-[50px] text-center font-bold text-indigo-600">
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
                        className={`px-6 py-2 rounded-xl font-bold transition-all duration-200 ${
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
