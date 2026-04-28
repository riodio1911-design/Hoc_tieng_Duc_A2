import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion6VocabEx({ playAudio, playingId }: Props) {
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
      if (q.answers) {
        q.answers.forEach((_: string, index: number) => {
          const key = `${groupId}_${q.id}_${index + 1}`;
          const userAnswer = answers[key]?.trim().toLowerCase() || '';
          const isCorrect = q.altAnswers[index].some((ans: string) => ans.toLowerCase() === userAnswer);
          newResults[key] = isCorrect;
        });
      } else if (q.altAnswers) {
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
      title: 'Bài 1. Điền từ loại/Danh từ (Veranstaltungen)',
      hint: 'Từ gợi ý: Eintritt - Bühne - Künstlerin - Diskussion',
      type: 'fill',
      data: [
        { id: '1', text: 'Der {1} ist heute kostenlos.', answers: ['Eintritt'], altAnswers: [['eintritt']] },
        { id: '2', text: 'Die {1} steht schon auf der {2}.', answers: ['Künstlerin', 'Bühne'], altAnswers: [['künstlerin'], ['bühne']] },
        { id: '3', text: 'Nach dem Film gab es eine spannende {1}.', answers: ['Diskussion'], altAnswers: [['diskussion']] }
      ]
    },
    {
      id: 'ex2',
      title: 'Bài 2. Dịch từ vựng (Cuộc hẹn & Thời gian)',
      hint: 'Gõ từ vựng tiếng Đức để kiểm tra.',
      type: 'match',
      data: [
        { id: '1', question: 'kéo dài từ thứ 5 đến thứ 7:', answer: 'von Donnerstag bis Samstag', altAnswers: ['von donnerstag bis samstag', 'vom donnerstag bis samstag'] },
        { id: '2', question: 'đề nghị / sự đề xuất:', answer: 'der Vorschlag', altAnswers: ['vorschlag', 'der vorschlag'] },
        { id: '3', question: 'thống nhất, quyết định:', answer: 'ausmachen', altAnswers: ['ausmachen'] },
        { id: '4', question: 'Lễ hội diễn ra vào mùa hè:', answer: 'Das Festival findet im Sommer statt', altAnswers: ['das festival findet im sommer statt', 'festival findet im sommer statt'] }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
         <h2 className="text-3xl font-black text-emerald-500 mb-2">Bài tập Từ vựng - Lektion 6</h2>
         <p className="text-theme-dark/60 font-medium">Luyện tập từ vựng chủ đề "Meine Lieblingsveranstaltung"</p>
      </div>

      {exercises.map((exercise, index) => {
        return (
          <div key={exercise.id} className="bg-white p-6 md:p-8 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-emerald-500/10">
            <h3 className="text-xl md:text-2xl font-black text-emerald-600 mb-4 flex items-center gap-3">
              {exercise.title}
            </h3>

            {exercise.hint && (
              <div className="bg-emerald-500/5 p-4 rounded-xl mb-6 text-emerald-700 font-bold text-sm md:text-base">
                 {exercise.hint}
              </div>
            )}

            <div className="space-y-4">
              {exercise.type === 'fill' ? (
                // Fill in blanks renderer
                exercise.data.map((q: any) => (
                  <div key={q.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <div className="flex flex-col md:flex-row items-start gap-4">
                      <button
                          onClick={() => {
                            let textToPlay = q.text;
                            q.answers.forEach((ans: string, i: number) => {
                              textToPlay = textToPlay.replace(`{${i+1}}`, ans);
                            });
                            playAudio(textToPlay, q.id)
                          }}
                          className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                            playingId === q.id ? 'bg-emerald-500 text-white shadow-lg scale-110' : 'bg-white text-emerald-500 border-2 border-emerald-500/20 hover:bg-emerald-500/5'
                          }`}
                        >
                          <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                      </button>
                      <div className="flex-1 text-lg text-theme-dark font-medium leading-loose flex flex-wrap items-center">
                        {q.text.split(/\{(\d)\}/).map((part: string, i: number) => {
                          const match = part.match(/^(\d)$/);
                          if (match) {
                            const answerIndex = parseInt(match[1]);
                            const inputKey = `${exercise.id}_${q.id}_${answerIndex}`;
                            return (
                              <div key={i} className="inline-block relative mx-2 mb-2 group">
                                <input
                                  type="text"
                                  value={answers[inputKey] || ''}
                                  onChange={(e) => handleInputChange(inputKey, e.target.value)}
                                  className={`w-36 px-4 py-2 text-center rounded-xl font-bold bg-white outline-none transition-all duration-300 relative z-10 ${
                                    results[inputKey] === true 
                                      ? 'text-emerald-600 bg-emerald-50 border-2 border-emerald-500' 
                                      : results[inputKey] === false 
                                        ? 'text-rose-600 bg-rose-50 border-2 border-rose-500' 
                                        : 'text-emerald-600 border-2 border-emerald-500/20 focus:border-emerald-500/50 focus:bg-emerald-50 focus:shadow-lg focus:-translate-y-1'
                                  }`}
                                />
                              </div>
                            );
                          }
                          return <span key={i}>{part}</span>;
                        })}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                // Matching/Translation renderer
                exercise.data.map((q: any) => {
                  const inputKey = `${exercise.id}_${q.id}`;
                  return (
                    <div key={q.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center gap-4">
                      <div className="w-full md:w-1/2 text-theme-dark font-medium">
                        {q.question}
                      </div>
                      <div className="w-full md:w-1/2 relative flex items-center">
                        <input
                          type="text"
                          value={answers[inputKey] || ''}
                          onChange={(e) => handleInputChange(inputKey, e.target.value)}
                          placeholder="Tiếng Đức..."
                          className={`w-full px-4 py-3 rounded-xl font-bold outline-none transition-all duration-300 pr-12 ${
                            results[inputKey] === true 
                              ? 'text-emerald-600 bg-emerald-50 border-2 border-emerald-500 shadow-inner' 
                              : results[inputKey] === false 
                                ? 'text-rose-600 bg-rose-50 border-2 border-rose-500 shadow-inner' 
                                : 'bg-white border-2 border-slate-200 focus:border-emerald-500/50 shadow-sm'
                          }`}
                        />
                        <div className="absolute right-4 text-emerald-500">
                          <button onClick={() => playAudio(q.answer, q.id)}>
                            <Play className="w-5 h-5 hover:scale-110 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => checkGroup(exercise.id, exercise.data)}
                className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-2xl transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
              >
                Kiểm tra
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
