import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion15GrammarEx({ playAudio, playingId }: Props) {
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
      title: '1. Chia động từ "werden" theo đúng cấu trúc Passiv',
      type: 'fill',
      data: [
        { id: '1', text: 'Die Pakete {1} heute geliefert.', inputs: ['1'], answers: ['werden'], altAnswers: [['werden']] },
        { id: '2', text: 'Der Krimi {1} jeden Sonntag im Fernsehen gezeigt.', inputs: ['1'], answers: ['wird'], altAnswers: [['wird']] },
        { id: '3', text: 'Hier {1} zu viel ferngesehen.', inputs: ['1'], answers: ['wird'], altAnswers: [['wird']] },
        { id: '4', text: 'Die Schauspieler {1} für den Film gesucht.', inputs: ['1'], answers: ['werden'], altAnswers: [['werden']] }
      ]
    },
    {
      id: 'ex2',
      title: '2. Chuyển từ Aktiv (Man) sang Passiv',
      type: 'match',
      data: [
        { id: '1', question: 'Man dreht den Film in Berlin.', answer: 'Der Film wird in Berlin gedreht.', altAnswers: ['Der Film wird in Berlin gedreht.', 'Der Film wird in Berlin gedreht'] },
        { id: '2', question: 'Man schreibt das Drehbuch zuerst.', answer: 'Das Drehbuch wird zuerst geschrieben.', altAnswers: ['Das Drehbuch wird zuerst geschrieben.', 'Das Drehbuch wird zuerst geschrieben'] },
        { id: '3', question: 'Man bezahlt die Arbeit schlecht.', answer: 'Die Arbeit wird schlecht bezahlt.', altAnswers: ['Die Arbeit wird schlecht bezahlt.', 'Die Arbeit wird schlecht bezahlt'] },
        { id: '4', question: 'Man klickt auf Senden.', answer: 'Auf Senden wird geklickt.', altAnswers: ['Auf Senden wird geklickt.', 'Auf Senden wird geklickt'] }
      ]
    },
    {
      id: 'ex3',
      title: '3. Phân biệt Aktiv và Passiv (Điền từ)',
      hint: 'Điền động từ hoặc "werden ... + Partizip II"',
      type: 'fill',
      data: [
         { id: '1', text: 'Die Kinder {1} heute zu viel fern. (sehen)', inputs: ['1'], answers: ['sehen'], altAnswers: [['sehen']] },
         { id: '2', text: 'Jeden Abend {1} viele Filme im Fernsehen {2}. (zeigen - Passiv)', inputs: ['1', '2'], answers: ['werden', 'gezeigt'], altAnswers: [['werden'], ['gezeigt']] },
         { id: '3', text: 'Der Paketdienst {1} die Mitarbeiter schlecht. (bezahlen)', inputs: ['1'], answers: ['bezahlt'], altAnswers: [['bezahlt']] }
      ]
    },
    {
      id: 'ex4',
      title: '4. Passiv + Trạng từ chỉ tần suất (oft, selten, nie...)',
      hint: 'Sắp xếp mức độ từ 0% đến 100%: nie, fast nie, selten, manchmal, oft, immer',
      type: 'fill',
      data: [
        { id: '1', text: '0%: {1}', inputs: ['1'], answers: ['nie'], altAnswers: [['nie']] },
        { id: '2', text: 'Gần 0%: {1}', inputs: ['1'], answers: ['fast nie'], altAnswers: [['fast nie']] },
        { id: '3', text: 'Thỉnh thoảng: {1}', inputs: ['1'], answers: ['manchmal'], altAnswers: [['manchmal']] },
        { id: '4', text: 'Thường xuyên: {1}', inputs: ['1'], answers: ['oft'], altAnswers: [['oft']] },
        { id: '5', text: '100%: {1}', inputs: ['1'], answers: ['immer'], altAnswers: [['immer']] }
      ]
    },
    {
      id: 'ex5',
      title: '5. Hoàn thành quy trình với Passiv (Sản xuất TV)',
      hint: 'Dùng các động từ: drehen (quay), schreiben (viết), suchen (tìm), zeigen (chiếu) ở dạng Partizip II',
      type: 'fill',
      data: [
        { id: '1', text: 'Zuerst wird das Drehbuch {1}.', inputs: ['1'], answers: ['geschrieben'], altAnswers: [['geschrieben']] },
        { id: '2', text: 'Dann werden die Schauspieler {1}.', inputs: ['1'], answers: ['gesucht'], altAnswers: [['gesucht', 'instruiert']] },
        { id: '3', text: 'Danach wird der Film {1}.', inputs: ['1'], answers: ['gedreht'], altAnswers: [['gedreht']] },
        { id: '4', text: 'Am Ende wird die Sendung im Fernsehen {1}.', inputs: ['1'], answers: ['gezeigt'], altAnswers: [['gezeigt']] }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
         <h2 className="text-3xl font-black text-theme-primary mb-2">Bài tập Ngữ pháp - Lektion 15</h2>
         <p className="text-theme-dark/60 font-medium">Hoàn thành 5 bài tập dưới đây để nắm vững Passiv nhé!</p>
      </div>

      {exercises.map((exercise, index) => {
        return (
          <div key={exercise.id} className="bg-white p-6 md:p-8 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-theme-primary/10">
            <h3 className="text-xl md:text-2xl font-black text-theme-primary mb-4 flex items-center gap-3">
              {exercise.title}
            </h3>

            {exercise.hint && (
              <div className="bg-theme-primary/5 p-4 rounded-xl mb-6 text-theme-primary font-bold text-sm md:text-base">
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
                            playingId === q.id ? 'bg-theme-primary text-white shadow-lg scale-110' : 'bg-white text-theme-primary border-2 border-theme-primary/20 hover:bg-theme-primary/5'
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
                                    className={`w-full px-3 py-1 bg-white border-2 rounded-lg text-theme-primary font-bold text-center outline-none transition-all ${
                                      isCorrect === true ? 'border-emerald-500 text-emerald-600 bg-emerald-50' :
                                      isCorrect === false ? 'border-rose-500 text-rose-600 bg-rose-50' :
                                      'border-theme-dark/10 focus:border-theme-primary'
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
                      <div key={q.id} className="p-4 bg-theme-cream/30 rounded-2xl border border-theme-dark/5 flex flex-col items-start gap-3">
                        <span className="font-bold text-theme-dark text-left bg-theme-dark/5 px-3 py-1 rounded">{q.question}</span>
                        <div className="relative flex-1 w-full flex-grow">
                          <input
                            type="text"
                            value={answers[key] || ''}
                            onChange={(e) => handleInputChange(key, e.target.value)}
                            className={`w-full px-4 py-2 border-2 rounded-xl font-bold bg-white outline-none transition-all ${
                              isCorrect === true ? 'border-emerald-500 text-emerald-600 bg-emerald-50' :
                              isCorrect === false ? 'border-rose-500 text-rose-600 bg-rose-50' :
                              'border-theme-dark/10 focus:border-theme-primary'
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
                  className="px-8 py-3 bg-theme-primary text-white rounded-2xl font-black shadow-lg shadow-theme-primary/30 hover:bg-theme-dark hover:shadow-theme-dark/30 transition-all hover:-translate-y-1"
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
