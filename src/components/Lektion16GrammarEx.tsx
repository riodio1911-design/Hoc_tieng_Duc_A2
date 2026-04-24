import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion16GrammarEx({ playAudio, playingId }: Props) {
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
      title: '1. Chuyển sang câu hỏi gián tiếp (W-Fragen)',
      hint: 'Đưa động từ đã chia xuống CUỐI CÂU. Ví dụ: Wo ist der Raum? -> Wissen Sie, wo der Raum ist?',
      type: 'matchPrefix',
      data: [
        { id: '1', question: 'Wo ist der Fitnessraum?', prefix: 'Können Sie mir sagen, ', answer: 'wo der Fitnessraum ist', altAnswers: ['wo der Fitnessraum ist', 'wo der Fitnessraum ist?'] },
        { id: '2', question: 'Wie funktioniert die Kaffeemaschine?', prefix: 'Können Sie mir erklären, ', answer: 'wie die Kaffeemaschine funktioniert', altAnswers: ['wie die Kaffeemaschine funktioniert', 'wie die Kaffeemaschine funktioniert?'] },
        { id: '3', question: 'Wann gibt es Frühstück?', prefix: 'Wissen Sie, ', answer: 'wann es Frühstück gibt', altAnswers: ['wann es Frühstück gibt', 'wann es Frühstück gibt?'] },
        { id: '4', question: 'Warum ist der Aufzug kaputt?', prefix: 'Ich möchte wissen, ', answer: 'warum der Aufzug kaputt ist', altAnswers: ['warum der Aufzug kaputt ist', 'warum der Aufzug kaputt ist.'] }
      ]
    },
    {
      id: 'ex2',
      title: '2. Chuyển sang câu hỏi gián tiếp (Ja/Nein-Fragen)',
      hint: 'Dùng từ "ob" (liệu rằng/có...không) để nối và đưa động từ xuống cuối câu.',
      type: 'matchPrefix',
      data: [
        { id: '1', question: 'Hat das Zimmer einen Balkon?', prefix: 'Ich möchte gern wissen, ', answer: 'ob das Zimmer einen Balkon hat', altAnswers: ['ob das Zimmer einen Balkon hat', 'ob das Zimmer einen Balkon hat.'] },
        { id: '2', question: 'Gibt es überall WLAN?', prefix: 'Wissen Sie, ', answer: 'ob es überall WLAN gibt', altAnswers: ['ob es überall WLAN gibt', 'ob es überall WLAN gibt?'] },
        { id: '3', question: 'Ist der Parkplatz reserviert?', prefix: 'Können Sie mir sagen, ', answer: 'ob der Parkplatz reserviert ist', altAnswers: ['ob der Parkplatz reserviert ist', 'ob der Parkplatz reserviert ist?'] }
      ]
    },
    {
      id: 'ex3',
      title: '3. Sắp xếp câu hỏi gián tiếp',
      hint: 'Chú ý dấu câu và động từ ở cuối',
      type: 'match',
      data: [
         { id: '1', question: 'ob | wissen | Sie | , | frei | noch | ein | ist | Zimmer | ?', answer: 'Wissen Sie, ob noch ein Zimmer frei ist?', altAnswers: ['Wissen Sie, ob noch ein Zimmer frei ist?', 'Wissen Sie, ob noch ein Zimmer frei ist'] },
         { id: '2', question: 'mir | sagen | Können | Sie | , | wann | Frühstück | es | gibt | ?', answer: 'Können Sie mir sagen, wann es Frühstück gibt?', altAnswers: ['Können Sie mir sagen, wann es Frühstück gibt?', 'Können Sie mir sagen, wann es Frühstück gibt'] },
         { id: '3', question: 'ich | möchte | wissen | , | ob | reserviert | ist | der | Parkplatz | .', answer: 'Ich möchte wissen, ob der Parkplatz reserviert ist.', altAnswers: ['Ich möchte wissen, ob der Parkplatz reserviert ist.', 'Ich möchte wissen, ob der Parkplatz reserviert ist'] }
      ]
    },
    {
      id: 'ex4',
      title: '4. Giới từ chỉ phương hướng (Präpositionen)',
      hint: 'Điền giới từ thích hợp: durch, an...vorbei, gegenüber (von), über',
      type: 'fill',
      data: [
        { id: '1', text: 'Gehen Sie {1} die Empfangshalle. (xuyên qua, + Akk)', inputs: ['1'], answers: ['durch'], altAnswers: [['durch']] },
        { id: '2', text: 'Gehen Sie {1} dem Restaurant {2}. (đi ngang qua, + Dativ)', inputs: ['1', '2'], answers: ['an', 'vorbei'], altAnswers: [['an', 'am'], ['vorbei']] },
        { id: '3', text: 'Die Bar ist ganz {1}. (đối diện)', inputs: ['1'], answers: ['gegenüber'], altAnswers: [['gegenüber', 'gegenueber']] },
        { id: '4', text: 'Gehen Sie {1} die Straße. (băng qua đường)', inputs: ['1'], answers: ['über'], altAnswers: [['über', 'ueber']] }
      ]
    },
    {
      id: 'ex5',
      title: '5. Hoàn thành đoạn hội thoại Lễ tân (Indirekte Fragen)',
      hint: 'Điền từ để nối: ob, wo, wie, wann',
      type: 'fill',
      data: [
        { id: '1', text: 'Gast: Wissen Sie, {1} das Frühstück beginnt?', inputs: ['1'], answers: ['wann'], altAnswers: [['wann']] },
        { id: '2', text: 'Rezeptionist: Ab 6:30 Uhr. Darf ich fragen, {1} Sie noch einen Wunsch haben? (có... không)', inputs: ['1'], answers: ['ob'], altAnswers: [['ob']] },
        { id: '3', text: 'Gast: Ja, können Sie mir noch sagen, {1} ich das Schwimmbad finde?', inputs: ['1'], answers: ['wo'], altAnswers: [['wo']] },
        { id: '4', text: 'Rezeptionist: Im Untergeschoss. Wissen Sie schon, {1} der Aufzug funktioniert?', inputs: ['1'], answers: ['wie'], altAnswers: [['wie']] }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
         <h2 className="text-3xl font-black text-theme-primary mb-2">Bài tập Ngữ pháp - Lektion 16</h2>
         <p className="text-theme-dark/60 font-medium">Hoàn thành 5 bài tập dưới đây để nắm vững Câu hỏi gián tiếp nhé!</p>
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
              {exercise.type === 'fill' && (
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
                                <div key={i} className="inline-block relative min-w-[100px] max-w-[150px] mx-2">
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
                                  {isCorrect === true && <CheckCircle2 className="absolute -right-2 -top-2 w-5 h-5 text-emerald-500 bg-white rounded-full z-10" />}
                                  {isCorrect === false && <XCircle className="absolute -right-2 -top-2 w-5 h-5 text-rose-500 bg-white rounded-full z-10" />}
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
              )}

              {exercise.type === 'matchPrefix' && (
                <div className="space-y-4">
                  {exercise.data.map((q: any) => {
                    const key = `${exercise.id}_${q.id}`;
                    const isCorrect = results[key];
                    return (
                      <div key={q.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                        <p className="font-bold text-theme-dark opacity-60 mb-2">{q.question}</p>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                          <span className="font-bold text-theme-primary whitespace-nowrap">{q.prefix}</span>
                          <div className="relative flex-1 w-full">
                            <input
                              type="text"
                              value={answers[key] || ''}
                              onChange={(e) => handleInputChange(key, e.target.value)}
                              className={`w-full px-4 py-2 bg-white border-2 rounded-xl text-theme-dark font-bold outline-none transition-all ${
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
                      </div>
                    );
                  })}
                </div>
              )}
              
              {exercise.type === 'match' && (
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
