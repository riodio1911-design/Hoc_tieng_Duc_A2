import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion16VocabEx({ playAudio, playingId }: Props) {
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
      title: '1. Điền loại phòng',
      hint: 'Từ gợi ý: Einzelzimmer - Doppelzimmer',
      type: 'fill',
      data: [
        { id: '1', text: 'Ich reise alleine, ich möchte ein {1}.', inputs: ['1'], answers: ['Einzelzimmer'], altAnswers: [['Einzelzimmer', 'einzelzimmer']], vi: 'Tôi đi du lịch một mình, tôi muốn một phòng đơn.' },
        { id: '2', text: 'Wir reisen als Paar, wir brauchen ein {1}.', inputs: ['1'], answers: ['Doppelzimmer'], altAnswers: [['Doppelzimmer', 'doppelzimmer']], vi: 'Chúng tôi đi du lịch theo cặp, chúng tôi cần một phòng đôi.' }
      ]
    },
    {
      id: 'ex2',
      title: '2. Nối từ: Vật dụng trong khách sạn',
      hint: 'Từ gợi ý: Handtuch - Föhn - Schlüssel - Aufzug',
      type: 'match',
      data: [
        { id: '1', question: 'Damit trocknen Sie die Haare: ', answer: 'Föhn', altAnswers: ['Föhn', 'foehn', 'der Föhn'] },
        { id: '2', question: 'Damit trocknen Sie den Körper: ', answer: 'Handtuch', altAnswers: ['Handtuch', 'das Handtuch'] },
        { id: '3', question: 'Damit öffnen Sie die Tür: ', answer: 'Schlüssel', altAnswers: ['Schlüssel', 'schluessel', 'der Schlüssel'] },
        { id: '4', question: 'Damit fahren Sie nach oben: ', answer: 'Aufzug', altAnswers: ['Aufzug', 'der Aufzug', 'Fahrstuhl'] }
      ]
    },
    {
      id: 'ex3',
      title: '3. Điền từ vào mẫu hội thoại',
      hint: 'Từ gợi ý: Rezeption - Kreditkarte - Passwort - Formular',
      type: 'fill',
      data: [
         { id: '1', text: 'Wo ist die {1}? Ich muss einchecken.', inputs: ['1'], answers: ['Rezeption'], altAnswers: [['Rezeption', 'die Rezeption']] },
         { id: '2', text: 'Füllen Sie bitte dieses {1} aus.', inputs: ['1'], answers: ['Formular'], altAnswers: [['Formular', 'das Formular']] },
         { id: '3', text: 'Kann ich mit {1} bezahlen?', inputs: ['1'], answers: ['Kreditkarte'], altAnswers: [['Kreditkarte', 'kreditkarte']] },
         { id: '4', text: 'Wie ist das {1} für das WLAN?', inputs: ['1'], answers: ['Passwort'], altAnswers: [['Passwort', 'das Passwort']] }
      ]
    },
    {
      id: 'ex4',
      title: '4. Mạo từ (der, die, das)',
      type: 'match',
      data: [
        { id: '1', question: '___ Rezeption', answer: 'die', altAnswers: ['die'] },
        { id: '2', question: '___ Schlüssel', answer: 'der', altAnswers: ['der'] },
        { id: '3', question: '___ Formular', answer: 'das', altAnswers: ['das'] },
        { id: '4', question: '___ Föhn', answer: 'der', altAnswers: ['der'] },
        { id: '5', question: '___ Handtuch', answer: 'das', altAnswers: ['das'] }
      ]
    },
    {
      id: 'ex5',
      title: '5. Các bữa ăn',
      hint: 'Từ gợi ý: Frühstück - Halbpension - Vollpension',
      type: 'match',
      data: [
        { id: '1', question: 'Chỉ có bữa sáng (nur Frühstück): ', answer: 'Frühstück', altAnswers: ['Frühstück', 'Frühstücksbuffet'] },
        { id: '2', question: 'Bữa sáng và tối (Frühstück und Abendessen): ', answer: 'Halbpension', altAnswers: ['Halbpension'] },
        { id: '3', question: 'Làm 3 bữa (Frühstück, Mittagessen, Abendessen): ', answer: 'Vollpension', altAnswers: ['Vollpension'] }
      ]
    },
    {
      id: 'ex6',
      title: '6. Sắp xếp chữ cái',
      type: 'match',
      data: [
        { id: '1', question: 'b n e h c u', answer: 'buchen', altAnswers: ['buchen'] },
        { id: '2', question: 'z A g f u u', answer: 'Aufzug', altAnswers: ['Aufzug'] },
        { id: '3', question: 'n ö h F', answer: 'Föhn', altAnswers: ['Föhn', 'Foehn'] },
        { id: '4', question: 'l c t i Z e', answer: 'Zelt', altAnswers: ['Zelt', 'zelt'] }
      ]
    },
    {
      id: 'ex7',
      title: '7. Động từ với Danh từ',
      type: 'fill',
      data: [
        { id: '1', text: 'Ein Zimmer {1}', inputs: ['1'], answers: ['buchen/reservieren'], altAnswers: [['buchen', 'reservieren']] },
        { id: '2', text: 'Das Formular {1}', inputs: ['1'], answers: ['ausfüllen'], altAnswers: [['ausfüllen', 'ausfuellen']] },
        { id: '3', text: 'Ins WLAN {1}', inputs: ['1'], answers: ['einloggen'], altAnswers: [['einloggen', 'anmelden']] },
        { id: '4', text: 'Das Passwort {1}', inputs: ['1'], answers: ['eingeben'], altAnswers: [['eingeben', 'brauchen']] }
      ]
    },
    {
      id: 'ex8',
      title: '8. Dịch các câu sau',
      type: 'match',
      data: [
        { id: '1', question: 'Tôi muốn đặt một phòng đôi.', answer: 'Ich möchte ein Doppelzimmer buchen.', altAnswers: ['Ich möchte ein Doppelzimmer buchen.', 'Ich möchte ein Doppelzimmer buchen', 'Ich moechte ein Doppelzimmer buchen.', 'Ich hätte gern ein Doppelzimmer.'] },
        { id: '2', question: 'Lễ tân ở đâu?', answer: 'Wo ist die Rezeption?', altAnswers: ['Wo ist die Rezeption?', 'Wo ist die Rezeption'] },
        { id: '3', question: 'Tôi có thể thanh toán bằng thẻ không?', answer: 'Kann ich mit Karte bezahlen?', altAnswers: ['Kann ich mit Karte bezahlen?', 'Kann ich mit Kreditkarte bezahlen?', 'Kann ich mit Karte bezahlen'] }
      ]
    },
    {
      id: 'ex9',
      title: '9. Trái nghĩa',
      type: 'match',
      data: [
        { id: '1', question: 'anmelden', answer: 'abmelden', altAnswers: ['abmelden'] },
        { id: '2', question: 'Einzelzimmer', answer: 'Doppelzimmer', altAnswers: ['Doppelzimmer'] },
        { id: '3', question: 'einchecken', answer: 'auschecken', altAnswers: ['auschecken'] },
        { id: '4', question: 'bar bezahlen', answer: 'mit Karte bezahlen', altAnswers: ['mit Karte bezahlen', 'mit Karte'] }
      ]
    },
    {
      id: 'ex10',
      title: '10. Từ vựng tổng hợp',
      hint: 'Trả lời câu hỏi',
      type: 'fill',
      data: [
        { id: '1', text: 'Man schläft im Urlaub oft in einem {1}.', inputs: ['1'], answers: ['Hotel'], altAnswers: [['Hotel', 'Zelt', 'Jugendherberge']], vi: 'Người ta thường ngủ trong kỳ nghỉ ở...' },
        { id: '2', text: 'Ohne den {1} kann man die Tür nicht öffnen.', inputs: ['1'], answers: ['Schlüssel'], altAnswers: [['Schlüssel', 'schluessel']], vi: 'Không có ... người ta không thể mở cửa.' },
        { id: '3', text: 'Im Bad braucht man ein {1} für die Hände.', inputs: ['1'], answers: ['Handtuch'], altAnswers: [['Handtuch']], vi: 'Trong phòng tắm cần ... cho tay.' }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
         <h2 className="text-3xl font-black text-emerald-600 mb-2">Bài tập Từ vựng - Lektion 16</h2>
         <p className="text-theme-dark/60 font-medium">Hoàn thành 10 bài tập dưới đây để củng cố từ vựng về Khách sạn nhé!</p>
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
                      {q.vi && (
                        <button
                          onClick={() => playAudio(q.text.replace(/\{1\}/g, q.answers[0]), q.id)}
                          className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                            playingId === q.id ? 'bg-emerald-500 text-white shadow-lg scale-110' : 'bg-white text-emerald-500 border-2 border-emerald-500/20 hover:bg-emerald-500/5'
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
                                    className={`w-full px-3 py-1 bg-white border-2 rounded-lg text-emerald-600 font-bold text-center outline-none transition-all ${
                                      isCorrect === true ? 'border-emerald-500 text-emerald-600 bg-emerald-50' :
                                      isCorrect === false ? 'border-rose-500 text-rose-600 bg-rose-50' :
                                      'border-theme-dark/10 focus:border-emerald-500'
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
                      <div key={q.id} className="p-4 bg-theme-cream/30 rounded-2xl border border-theme-dark/5 flex flex-col md:flex-row items-start md:items-center gap-4">
                        <span className="font-bold text-theme-dark min-w-[140px] text-left md:text-right">{q.question}</span>
                        <div className="relative flex-1 w-full flex-grow">
                          <input
                            type="text"
                            value={answers[key] || ''}
                            onChange={(e) => handleInputChange(key, e.target.value)}
                            className={`w-full px-4 py-2 border-2 rounded-xl font-bold bg-white outline-none transition-all ${
                              isCorrect === true ? 'border-emerald-500 text-emerald-600 bg-emerald-50' :
                              isCorrect === false ? 'border-rose-500 text-rose-600 bg-rose-50' :
                              'border-theme-dark/10 focus:border-emerald-500'
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
                  className="px-8 py-3 bg-emerald-500 text-white rounded-2xl font-black shadow-lg shadow-emerald-500/30 hover:bg-theme-dark hover:shadow-theme-dark/30 transition-all hover:-translate-y-1"
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
