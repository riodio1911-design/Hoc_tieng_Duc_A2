import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion13GrammarEx({ playAudio, playingId }: Props) {
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
      title: 'Bài 1. Điền "als" hoặc "wenn"',
      hint: 'Hãy nhớ: "als" dùng cho quá khứ 1 lần (như tuổi thơ), "wenn" dùng cho hiện tại hoặc quá khứ lặp lại nhiều lần.',
      type: 'fill',
      data: [
        { id: '1', text: '{1} ich klein war, habe ich oft geweint.', answers: ['Als'], altAnswers: [['als']], vi: 'Khi tôi còn nhỏ, tôi thường khóc.' },
        { id: '2', text: 'Immer {1} ich traurig war, hat meine Oma mir eine Geschichte erzählt.', answers: ['wenn'], altAnswers: [['wenn']], vi: 'Bất cứ khi nào tôi buồn, bà tôi đều kể chuyện cho tôi nghe.' },
        { id: '3', text: '{1} er 6 Jahre alt war, ist er in die Schule gekommen.', answers: ['Als'], altAnswers: [['als']], vi: 'Khi anh ấy 6 tuổi, anh ấy bắt đầu đi học.' },
        { id: '4', text: '{1} ich im Urlaub war, habe ich sie kennengelernt.', answers: ['Als'], altAnswers: [['als']], vi: 'Khi tôi đi nghỉ mát, tôi đã quen cô ấy.' }
      ]
    },
    {
      id: 'ex2',
      title: 'Bài 2. Trật tự từ trong mệnh đề phụ với "als"',
      hint: 'Động từ bị đẩy xuống cuối câu trong mệnh đề phụ.',
      type: 'fill',
      data: [
        { id: '1', text: 'Als ich das Stipendium (bekommen) {1}, war ich sehr glücklich.', answers: ['bekommen habe'], altAnswers: [['bekommen habe', 'bekam']], vi: 'Khi tôi nhận được học bổng, tôi rất hạnh phúc.' },
        { id: '2', text: 'Als sie zum ersten Mal nach Deutschland (fliegen) {1}, hatte sie Angst.', answers: ['geflogen ist'], altAnswers: [['geflogen ist', 'flog', 'geflogen war']], vi: 'Khi cô ấy bay đến Đức lần đầu tiên, cô ấy đã sợ hãi.' },
        { id: '3', text: 'Als er sein Examen (bestehen) {1}, haben wir gefeiert.', answers: ['bestanden hat'], altAnswers: [['bestanden hat', 'bestand']], vi: 'Khi anh ấy thi đỗ, chúng tôi đã ăn mừng.' }
      ]
    },
    {
      id: 'ex3',
      title: 'Bài 3. Trật tự từ khi "als" đứng đầu câu',
      hint: 'Nếu mệnh đề phụ đứng trước, mệnh đề chính phía sau phải đảo ngữ (động từ đứng ngay sau dấu phẩy).',
      type: 'match',
      data: [
        { id: '1', question: 'Als ich klein war, ... (ich - wohnen - in Berlin)', answer: 'habe ich in Berlin gewohnt', altAnswers: ['habe ich in Berlin gewohnt', 'wohnte ich in Berlin'] },
        { id: '2', question: 'Als Paul Marie besuchte, ... (er - sich verlieben)', answer: 'hat er sich verliebt', altAnswers: ['hat er sich verliebt', 'verliebte er sich'] },
        { id: '3', question: 'Als ich den Job bekam, ... (ich - umziehen - nach Hamburg)', answer: 'bin ich nach Hamburg umgezogen', altAnswers: ['bin ich nach Hamburg umgezogen', 'zog ich nach Hamburg um'] }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
         <h2 className="text-3xl font-black text-rose-500 mb-2">Bài tập Ngữ pháp - Lektion 13</h2>
         <p className="text-theme-dark/60 font-medium">Luyện tập liên từ "als" và "wenn"</p>
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
                      {q.vi && (
                        <button
                          onClick={() => playAudio(q.text.replace(/\{1\}/g, q.answers[0]), q.id)}
                          className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                            playingId === q.id ? 'bg-rose-500 text-white shadow-lg scale-110' : 'bg-white text-rose-500 border-2 border-rose-500/20 hover:bg-rose-500/5'
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
                            placeholder="Gõ nửa câu còn lại vào đây..."
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
