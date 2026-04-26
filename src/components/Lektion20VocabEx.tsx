import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion20VocabEx({ playAudio, playingId }: Props) {
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
      title: 'Bài 1. Phân loại các loại sách',
      hint: 'Dịch các loại sách từ tiếng Việt sang tiếng Đức (nhớ mạo từ das, der)',
      type: 'match',
      data: [
        { id: '1', question: 'Truyện cổ tích ->', answer: 'das Märchen', altAnswers: ['das märchen', 'das Märchen', 'Märchen'] },
        { id: '2', question: 'Truyện tranh ->', answer: 'der Comic', altAnswers: ['der comic', 'der Comic', 'Comic'] },
        { id: '3', question: 'Sách hướng dẫn ->', answer: 'der Ratgeber', altAnswers: ['der ratgeber', 'der Ratgeber', 'Ratgeber'] },
        { id: '4', question: 'Bài thơ ->', answer: 'das Gedicht', altAnswers: ['das gedicht', 'das Gedicht', 'Gedicht'] }
      ]
    },
    {
      id: 'ex2',
      title: 'Bài 2. Động từ',
      hint: 'Ghi lại các động từ tiếng Đức tương ứng',
      type: 'match',
      data: [
        { id: '1', question: 'Vội vã, khẩn trương ->', answer: 'sich beeilen', altAnswers: ['sich beeilen', 'beeilen'] },
        { id: '2', question: 'Đọc to (cho ai nghe) ->', answer: 'vorlesen', altAnswers: ['vorlesen'] },
        { id: '3', question: 'Đọc (nói chung) ->', answer: 'lesen', altAnswers: ['lesen'] }
      ]
    },
    {
      id: 'ex3',
      title: 'Bài 3. Điền từ vào chỗ trống',
      hint: 'Điền loại sách/thể loại phù hợp: Märchen, Comic, Gedicht',
      type: 'fill',
      data: [
        { id: '1', text: 'Kinder lieben es, wenn die Eltern ihnen ein {1} vorlesen.', inputs: ['1'], answers: ['Märchen'], altAnswers: [['Märchen', 'märchen']], vi: 'Trẻ em thích được bố mẹ đọc truyện cổ tích cho nghe.' },
        { id: '2', text: 'Ein {1} hat viele Bilder und Sprechblasen.', inputs: ['1'], answers: ['Comic'], altAnswers: [['Comic', 'comic', 'der Comic']], vi: 'Một cuốn truyện tranh có nhiều hình ảnh và bong bóng thoại.' },
        { id: '3', text: 'In der Schule müssen wir ein {1} auswendig lernen.', inputs: ['1'], answers: ['Gedicht'], altAnswers: [['Gedicht', 'gedicht', 'das Gedicht']], vi: 'Ở trường, chúng tôi phải học thuộc lòng một bài thơ.' }
      ]
    },
    {
      id: 'ex4',
      title: 'Bài 4. Dịch nghĩa',
      hint: 'Dịch các từ sau sang tiếng Việt',
      type: 'match',
      data: [
        { id: '1', question: 'spannend ->', answer: 'Hấp dẫn', altAnswers: ['hấp dẫn', 'Hấp dẫn', 'Hồi hộp', 'hồi hộp', 'thú vị'] },
        { id: '2', question: 'langweilig ->', answer: 'Nhàm chán', altAnswers: ['nhàm chán', 'Nhàm chán', 'Chán', 'chán'] }
      ]
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto pb-12">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-3xl font-black text-theme-dark uppercase tracking-tight">Bài Tập Từ Vựng</h2>
        <p className="text-theme-dark/70 font-medium">Hoàn thành {exercises.length} bài tập để nắm vững từ vựng chủ đề đọc sách.</p>
      </div>

      {exercises.map((exercise, index) => {
        return (
          <div key={exercise.id} className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-sm border-4 border-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-[100px] -z-10" />
            <h3 className="text-2xl font-black text-theme-dark mb-2">{exercise.title}</h3>
            {exercise.hint && <p className="text-theme-primary font-medium mb-8 flex items-center gap-2">💡 {exercise.hint}</p>}
            
            <div className="space-y-6">
              {exercise.type === 'fill' ? (
                exercise.data.map((q: any) => (
                  <div key={q.id} className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      {q.audioText && (
                        <button 
                          onClick={() => playAudio(q.audioText, `q_${exercise.id}_${q.id}`, 'de-DE')}
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-theme-dark/40 hover:text-blue-500 hover:shadow-md transition-all shrink-0"
                        >
                          {playingId === `q_${exercise.id}_${q.id}` ? <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity }} className="w-3 h-3 bg-blue-500 rounded-full" /> : <Play size={16} className="ml-1" />}
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
                                    className={`w-full px-3 py-1 bg-white border-2 rounded-lg text-blue-600 font-bold text-center outline-none transition-all ${
                                      isCorrect === true ? 'border-emerald-500 text-emerald-600 bg-emerald-50' :
                                      isCorrect === false ? 'border-rose-500 text-rose-600 bg-rose-50' :
                                      'border-theme-dark/10 focus:border-blue-500'
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
                              'border-theme-dark/10 focus:border-blue-500'
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
                  className="px-8 py-3 bg-blue-500 text-white rounded-2xl font-black shadow-lg shadow-blue-500/30 hover:bg-theme-dark hover:shadow-theme-dark/30 transition-all hover:-translate-y-1"
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
