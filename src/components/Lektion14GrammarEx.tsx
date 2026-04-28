import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion14GrammarEx({ playAudio, playingId }: Props) {
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
      title: 'Bài 1. Điền thể bị động (Passiv)',
      hint: 'Cấu trúc: werden (ở vị trí 2) + Partizip II (ở cuối câu)',
      type: 'fill',
      data: [
        { id: '1', text: 'Der Karton {1} beklebt.', answers: ['wird'], altAnswers: [['wird']], vi: 'Hộp carton được dán.' },
        { id: '2', text: 'Die Geschenke {1} in den Karton gelegt.', answers: ['werden'], altAnswers: [['werden']], vi: 'Những món quà được đặt vào trong hộp.' },
        { id: '3', text: 'Das Päckchen wird {1}. (packen)', answers: ['gepackt'], altAnswers: [['gepackt']], vi: 'Gói hàng nhỏ được đóng gói.' }
      ]
    },
    {
      id: 'ex2',
      title: 'Bài 2. Đổi câu Chủ động sang Bị động',
      hint: 'Ví dụ: Frau Brugger backt Lebkuchen. -> Lebkuchen werden gebacken. (Bỏ Frau Brugger đi)',
      type: 'match',
      data: [
        { id: '1', question: 'Jedes Jahr kauft Herr Klein einen Weihnachtsbaum. -> Ein Weihnachtsbaum ... (gekauft)', answer: 'wird gekauft', altAnswers: ['wird gekauft', 'wird jedes Jahr gekauft'] },
        { id: '2', question: 'Paula verschickt ein Paket. -> Ein Paket ... (verschickt)', answer: 'wird verschickt', altAnswers: ['wird verschickt'] },
        { id: '3', question: 'Der Lehrer korrigiert einen Test. -> Ein Test ... (korrigiert)', answer: 'wird korrigiert', altAnswers: ['wird korrigiert'] }
      ]
    },
    {
      id: 'ex3',
      title: 'Bài 3. Sắp xếp các bước gửi hàng',
      hint: 'Điền động từ Passiv (wird/werden + Partizip II)',
      type: 'fill',
      data: [
        { id: '1', text: 'Zuerst {1} der Brief geschrieben.', answers: ['wird'], altAnswers: [['wird']], vi: 'Đầu tiên, lá thư được viết.' },
        { id: '2', text: 'Dann wird er zur Post {1} (bringen).', answers: ['gebracht'], altAnswers: [['gebracht']], vi: 'Sau đó, nó được mang tới bưu điện.' },
        { id: '3', text: 'Dann {1} die Briefmarke auf den Brief geklebt.', answers: ['wird'], altAnswers: [['wird']], vi: 'Sau đó, con tem được dán lên lá thư.' }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
         <h2 className="text-3xl font-black text-rose-500 mb-2">Bài tập Ngữ pháp - Lektion 14</h2>
         <p className="text-theme-dark/60 font-medium">Luyện tập câu bị động (Passiv Präsens)</p>
      </div>

      {exercises.map((exercise, index) => {
        return (
          <div key={exercise.id} className="bg-white p-6 md:p-8 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-rose-500/10">
            <h3 className="text-xl md:text-2xl font-black text-rose-600 mb-4 flex items-center gap-3">
              {exercise.title}
            </h3>

            {exercise.hint && (
              <div className="bg-rose-500/5 p-4 rounded-xl mb-6 text-rose-700 font-bold text-sm md:text-base">
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
                        onClick={() => playAudio(q.text.replace(/\{1\}/g, q.answers[0]), q.id)}
                        className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          playingId === q.id ? 'bg-rose-500 text-white shadow-lg scale-110' : 'bg-white text-rose-500 border-2 border-rose-500/20 hover:bg-rose-500/5'
                        }`}
                      >
                        <Play size={18} className={playingId === q.id ? 'animate-pulse' : ''} />
                      </button>
                      
                      <div className="flex-1 space-y-2 pt-1.5">
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
                                    className={`w-full px-3 py-1 bg-white border-2 rounded-lg text-rose-600 font-bold text-center outline-none transition-all ${
                                      isCorrect === true ? 'border-emerald-500 text-emerald-600 bg-emerald-50' :
                                      isCorrect === false ? 'border-rose-500 text-rose-600 bg-rose-50' :
                                      'border-theme-dark/10 focus:border-rose-500'
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
                <div className="grid md:grid-cols-2 gap-4">
                  {exercise.data.map((q: any) => {
                    const key = `${exercise.id}_${q.id}`;
                    const isCorrect = results[key];
                    return (
                      <div key={q.id} className="col-span-full p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col items-start gap-4">
                        <span className="font-bold text-theme-dark">{q.question}</span>
                        <div className="relative w-full">
                          <input
                            type="text"
                            value={answers[key] || ''}
                            onChange={(e) => handleInputChange(key, e.target.value)}
                            className={`w-full px-4 py-2 border-2 rounded-xl font-bold bg-white outline-none transition-all ${
                              isCorrect === true ? 'border-emerald-500 text-emerald-600 bg-emerald-50' :
                              isCorrect === false ? 'border-rose-500 text-rose-600 bg-rose-50' :
                              'border-theme-dark/10 focus:border-rose-500'
                            }`}
                            placeholder="Gõ nửa câu còn lại vào đây (chỉ 2 từ)..."
                          />
                          {isCorrect === true && <CheckCircle2 className="absolute right-3 top-2.5 w-6 h-6 text-emerald-500 bg-white rounded-full" />}
                          {isCorrect === false && <XCircle className="absolute right-3 top-2.5 w-6 h-6 text-rose-500 bg-white rounded-full" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => checkGroup(exercise.id, exercise.data)}
                className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white font-black rounded-xl transition-all active:scale-95 shadow-sm uppercase tracking-wider text-sm"
              >
                Kiểm tra phần này
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
