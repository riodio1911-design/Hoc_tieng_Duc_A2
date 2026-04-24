import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion17GrammarEx({ playAudio, playingId }: Props) {
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
      title: '1. Chọn giới từ phù hợp (Wohin)',
      hint: 'ans, an die, in den, in die, auf eine, ins, nach...',
      type: 'fill',
      data: [
        { id: '1', text: 'Nächsten Sommer fahren wir {1} Meer.', inputs: ['1'], answers: ['ans'], altAnswers: [['ans', 'an das']] },
        { id: '2', text: 'Wir fahren gern {1} Wald spazieren.', inputs: ['1'], answers: ['in den'], altAnswers: [['in den']] },
        { id: '3', text: 'Fliegst du dieses Jahr {1} Insel?', inputs: ['1'], answers: ['auf eine'], altAnswers: [['auf eine']] },
        { id: '4', text: 'Morgen fahren wir {1} Berlin.', inputs: ['1'], answers: ['nach'], altAnswers: [['nach']] }
      ]
    },
    {
      id: 'ex2',
      title: '2. Wohin oder Wo?',
      hint: 'Dùng giới từ chỉ nơi chốn',
      type: 'fill',
      data: [
        { id: '1', text: 'Wir sind jetzt {1} Gebirge.', inputs: ['1'], answers: ['im'], altAnswers: [['im', 'in dem']] },
        { id: '2', text: 'Wir fahren {1} Meer.', inputs: ['1'], answers: ['ans'], altAnswers: [['ans', 'an das']] },
        { id: '3', text: 'Warst du schon mal {1} Rumänien?', inputs: ['1'], answers: ['in'], altAnswers: [['in']] },
        { id: '4', text: 'Ich liege {1} Strand und lese ein Buch.', inputs: ['1'], answers: ['am'], altAnswers: [['am', 'an dem']] }
      ]
    },
    {
      id: 'ex3',
      title: '3. Chia Dativ hoặc Akkusativ',
      hint: 'an, in, auf, nach...',
      type: 'match',
      data: [
         { id: '1', question: 'Wohin fahrt ihr? - Wir fahren ___ (an/das) Meer.', answer: 'ans', altAnswers: ['ans', 'an das'] },
         { id: '2', question: 'Wo seid ihr? - Wir sind ___ (an/das) Meer.', answer: 'am', altAnswers: ['am', 'an dem'] },
         { id: '3', question: 'Gehen wir ___ (in/đầu) Wald?', answer: 'in den', altAnswers: ['in den'] },
         { id: '4', question: 'Sie wandern gern ___ (in / núi) Berge.', answer: 'in den', altAnswers: ['in den'] },
         { id: '5', question: 'Er arbeitet ___ (auf / das / Land).', answer: 'auf dem', altAnswers: ['auf dem', 'aufm'] }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
         <h2 className="text-3xl font-black text-amber-500 mb-2">Bài tập Ngữ pháp - Lektion 17</h2>
         <p className="text-theme-dark/60 font-medium">Luyện tập với Wo và Wohin</p>
      </div>

      {exercises.map((exercise, index) => {
        return (
          <div key={exercise.id} className="bg-white p-6 md:p-8 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-amber-500/10">
            <h3 className="text-xl md:text-2xl font-black text-amber-600 mb-4 flex items-center gap-3">
              {exercise.title}
            </h3>

            {exercise.hint && (
              <div className="bg-amber-500/5 p-4 rounded-xl mb-6 text-amber-700 font-bold text-sm md:text-base">
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
                            playingId === q.id ? 'bg-amber-500 text-white shadow-lg scale-110' : 'bg-white text-amber-500 border-2 border-amber-500/20 hover:bg-amber-500/5'
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
                                    className={`w-full px-3 py-1 bg-white border-2 rounded-lg text-amber-600 font-bold text-center outline-none transition-all ${
                                      isCorrect === true ? 'border-emerald-500 text-emerald-600 bg-emerald-50' :
                                      isCorrect === false ? 'border-rose-500 text-rose-600 bg-rose-50' :
                                      'border-theme-dark/10 focus:border-amber-500'
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
                              'border-theme-dark/10 focus:border-amber-500'
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
                  className="px-8 py-3 bg-amber-500 text-white rounded-2xl font-black shadow-lg shadow-amber-500/30 hover:bg-theme-dark hover:shadow-theme-dark/30 transition-all hover:-translate-y-1"
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
