import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion18GrammarEx({ playAudio, playingId }: Props) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, boolean>>({});

  const handleInputChange = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
    setResults(prev => {
      const newResults = { ...prev };
      delete newResults[id];
      return newResults;
    });
  };

  const checkGroup = (groupId: string, exerciseData: any[]) => {
    const newResults: Record<string, boolean> = {};
    exerciseData.forEach(q => {
      if (q.inputs) {
        q.inputs.forEach((inputId: string, index: number) => {
          const key = `${groupId}_${q.id}_${inputId}`;
          const userAnswer = answers[key]?.trim().toLowerCase() || '';
          const isCorrect = q.altAnswers[index].some((ans: string) => ans.toLowerCase() === userAnswer);
          newResults[key] = isCorrect;
        });
      } else {
        const key = `${groupId}_${q.id}`;
        let userAnswer = (answers[key] || '').trim().toLowerCase();
        userAnswer = userAnswer.replace(/[.?]/g, '').replace(/,/g, '');
        const isCorrect = q.altAnswers.some((ans: string) => ans.toLowerCase().replace(/[.?]/g, '').replace(/,/g, '') === userAnswer);
        newResults[key] = isCorrect;
      }
    });
    setResults(prev => ({ ...prev, ...newResults }));
  };

  const exercises = [
    {
      id: 'ex1',
      title: 'Bài 1. Động từ + Giới từ',
      hint: 'Điền giới từ và chia quán từ phù hợp',
      type: 'fill',
      data: [
        { id: '1', text: 'Ich freue mich sehr {1} (auf / der) Sommer.', inputs: ['1'], answers: ['auf den'], altAnswers: [['auf den']] },
        { id: '2', text: 'Wir sprechen heute {1} (mit / unser) Lehrer.', inputs: ['1'], answers: ['mit unserem'], altAnswers: [['mit unserem']] },
        { id: '3', text: 'Bist du {1} (mit / das) Wetter zufrieden?', inputs: ['1'], answers: ['mit dem'], altAnswers: [['mit dem']] },
        { id: '4', text: 'Träumst du oft {1} (von / một / Reise)?', inputs: ['1'], answers: ['von einer'], altAnswers: [['von einer Reise', 'von einer']] },
        { id: '5', text: 'Er hat sich sehr {1} (über / das) Geschenk gefreut.', inputs: ['1'], answers: ['über das'], altAnswers: [['über das', 'übers']] }
      ]
    },
    {
      id: 'ex2',
      title: 'Bài 2. Chỉ đường',
      hint: 'Điền giới từ chỉ đường phù hợp: durch, über, bis, an / vorbei...',
      type: 'fill',
      data: [
        { id: '1', text: 'Fahren Sie {1} (xuyên qua) den Ort.', inputs: ['1'], answers: ['durch'], altAnswers: [['durch']] },
        { id: '2', text: 'Gehen Sie {1} (ngang qua) der Bäckerei {2}.', inputs: ['1', '2'], answers: ['an', 'vorbei'], altAnswers: [['an'], ['vorbei']] },
        { id: '3', text: 'Sie müssen {1} (băng qua) die Autobahn fahren.', inputs: ['1'], answers: ['über'], altAnswers: [['über']] },
        { id: '4', text: 'Fahren Sie {1} (đến tận) zum Freizeitland.', inputs: ['1'], answers: ['bis'], altAnswers: [['bis']] }
      ]
    },
    {
      id: 'ex3',
      title: 'Bài 3. Test Tổng hợp (Verben mit Präpositionen)',
      type: 'match',
      data: [
         { id: '1', question: 'sich interessieren ___ (für: Akkusativ):', answer: 'für', altAnswers: ['für'] },
         { id: '2', question: 'Lust haben ___ (auf: Akkusativ):', answer: 'auf', altAnswers: ['auf'] },
         { id: '3', question: 'sich ärgern ___ (über: Akkusativ):', answer: 'über', altAnswers: ['über'] },
         { id: '4', question: 'warten ___ (auf / die) Sonne:', answer: 'auf die', altAnswers: ['auf die'] },
         { id: '5', question: 'sprechen ___ (mit / die) Nachbarn:', answer: 'mit den', altAnswers: ['mit den'] }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
         <h2 className="text-3xl font-black text-indigo-500 mb-2">Bài tập Ngữ pháp - Lektion 18</h2>
         <p className="text-theme-dark/60 font-medium">Luyện tập Động từ đi kèm giới từ & Chỉ đường</p>
      </div>

      {exercises.map((exercise, index) => {
        return (
          <div key={exercise.id} className="bg-white p-6 md:p-8 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-indigo-500/10">
            <h3 className="text-xl md:text-2xl font-black text-indigo-600 mb-4 flex items-center gap-3">
              {exercise.title}
            </h3>

            {exercise.hint && (
              <div className="bg-indigo-500/5 p-4 rounded-xl mb-6 text-indigo-700 font-bold text-sm md:text-base">
                {exercise.hint}
              </div>
            )}

            <div className="space-y-4">
              {exercise.type === 'fill' ? (
                // Fill in blanks renderer
                exercise.data.map((q: any) => (
                  <div key={q.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <div className="flex flex-col md:flex-row items-start gap-4">
                      {q.vi && (
                        <button
                          onClick={() => playAudio(q.text.replace(/\{1\}/g, q.answers[0]), q.id)}
                          className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                            playingId === q.id ? 'bg-indigo-500 text-white shadow-lg scale-110' : 'bg-white text-indigo-500 border-2 border-indigo-500/20 hover:bg-indigo-500/5'
                          }`}
                        >
                          <Play size={18} className={playingId === q.id ? 'animate-pulse' : ''} />
                        </button>
                      )}
                      <div className="flex-1 space-y-2">
                        <div className="text-lg font-bold text-theme-dark leading-loose">
                          {q.text.split(/(\{.*?\})/).map((part: string, i: number) => {
                            const match = part.match(/\{(\d+)\}/);
                            if (match) {
                              const inputId = match[1];
                              const key = `${exercise.id}_${q.id}_${inputId}`;
                              const isCorrect = results[key];
                              return (
                                <div key={i} className="inline-block relative min-w-[120px] mx-2">
                                  <input
                                    type="text"
                                    value={answers[key] || ''}
                                    onChange={(e) => handleInputChange(key, e.target.value)}
                                    className={`w-full px-3 py-1 bg-white border-2 rounded-lg text-indigo-600 font-bold text-center outline-none transition-all ${
                                      isCorrect === true ? 'border-emerald-500 text-emerald-600 bg-emerald-50' :
                                      isCorrect === false ? 'border-rose-500 text-rose-600 bg-rose-50' :
                                      'border-theme-dark/10 focus:border-indigo-500'
                                    }`}
                                    placeholder="..."
                                  />
                                  {isCorrect === true && <CheckCircle2 className="absolute -right-2 -top-2 w-5 h-5 text-emerald-500 bg-white rounded-full" />}
                                  {isCorrect === false && <XCircle className="absolute -right-2 -top-2 w-5 h-5 text-rose-500 bg-white rounded-full" />}
                                </div>
                              );
                            }
                            return <span key={i}>{part}</span>;
                          })}
                        </div>
                        {q.vi && <p className="text-sm font-medium text-theme-dark/50">{q.vi}</p>}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                // Match / simple Q&A renderer
                <div className="grid md:grid-cols-1 gap-4">
                  {exercise.data.map((q: any) => {
                    const key = `${exercise.id}_${q.id}`;
                    const isCorrect = results[key];
                    return (
                      <div key={q.id} className="p-4 bg-theme-cream/30 rounded-2xl border border-theme-dark/5 flex flex-col md:flex-row items-start md:items-center gap-4">
                        <span className="font-bold text-theme-dark min-w-[140px] text-left">{q.question}</span>
                        <div className="relative flex-1 w-full flex-grow">
                          <input
                            type="text"
                            value={answers[key] || ''}
                            onChange={(e) => handleInputChange(key, e.target.value)}
                            className={`w-full px-4 py-2 border-2 rounded-xl font-bold bg-white outline-none transition-all ${
                              isCorrect === true ? 'border-emerald-500 text-emerald-600 bg-emerald-50' :
                              isCorrect === false ? 'border-rose-500 text-rose-600 bg-rose-50' :
                              'border-theme-dark/10 focus:border-indigo-500'
                            }`}
                            placeholder="..."
                          />
                          {isCorrect === true && <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />}
                          {isCorrect === false && <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-rose-500" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              
              <div className="flex justify-end pt-4">
                <button
                  onClick={() => checkGroup(exercise.id, exercise.data)}
                  className="px-8 py-3 bg-indigo-500 text-white rounded-2xl font-black shadow-lg shadow-indigo-500/30 hover:bg-theme-dark hover:shadow-theme-dark/30 transition-all hover:-translate-y-1"
                >
                  Kiểm tra Bài {index + 1}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
