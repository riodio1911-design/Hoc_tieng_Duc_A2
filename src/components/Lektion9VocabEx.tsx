import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion9VocabEx({ playAudio, playingId }: Props) {
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
          let userAnswer = answers[key]?.trim().toLowerCase() || '';
          userAnswer = userAnswer.replace(/[.?]/g, '').replace(/,/g, '');
          const isCorrect = q.altAnswers[index].some((ans: string) => ans.toLowerCase().replace(/[.?]/g, '').replace(/,/g, '') === userAnswer);
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
      title: 'Bài 1. Điền từ vựng sản xuất',
      hint: 'Dịch các từ tiếng Việt sang tiếng Đức (có mạo từ das, der, die tương ứng)',
      type: 'match',
      data: [
        { id: '1', question: 'nhà máy ->', answer: 'das Werk', altAnswers: ['das werk', 'das Werk', 'Werk'] },
        { id: '2', question: 'máy móc ->', answer: 'die Maschine', altAnswers: ['die maschine', 'die Maschine', 'Maschine'] },
        { id: '3', question: 'xe ô tô ->', answer: 'der Wagen', altAnswers: ['der wagen', 'der Wagen', 'Wagen', 'das Auto', 'das auto', 'Auto'] },
        { id: '4', question: 'công nhân ->', answer: 'der Arbeiter', altAnswers: ['der arbeiter', 'der Arbeiter', 'Arbeiter'] }
      ]
    },
    {
      id: 'ex2',
      title: 'Bài 2. Dịch hành động & thuật ngữ',
      hint: 'Nhập từ vựng tiếng Đức phù hợp với nghĩa tiếng Việt',
      type: 'match',
      data: [
        { id: '1', question: 'Sản xuất ->', answer: 'produzieren', altAnswers: ['produzieren'] },
        { id: '2', question: 'Tiết kiệm ->', answer: 'sparen', altAnswers: ['sparen'] },
        { id: '3', question: 'Tăng lên ->', answer: 'steigen', altAnswers: ['steigen'] },
        { id: '4', question: 'Giảm xuống ->', answer: 'sinken', altAnswers: ['sinken'] }
      ]
    },
    {
      id: 'ex3',
      title: 'Bài 3. Điền từ vào chỗ trống',
      hint: 'Điền các từ: Lohn, Betrieb, Bedingungen, exportieren',
      type: 'fill',
      data: [
        { id: '1', text: 'Wir arbeiten in einem großen {1}.', inputs: ['1'], answers: ['Betrieb'], altAnswers: [['Betrieb', 'betrieb']], vi: 'Chúng tôi làm việc ở một doanh nghiệp lớn.' },
        { id: '2', text: 'Die Arbeiter streiken, weil der {1} zu niedrig ist.', inputs: ['1'], answers: ['Lohn'], altAnswers: [['Lohn', 'lohn']], vi: 'Các công nhân đình công, bởi vì tiền lương quá thấp.' },
        { id: '3', text: 'Die Firma möchte mehr Autos {1}.', inputs: ['1'], answers: ['exportieren'], altAnswers: [['exportieren', 'Exportieren']], vi: 'Công ty muốn xuất khẩu nhiều xe ô tô hơn.' },
        { id: '4', text: 'Die Arbeits{1} in dieser Firma sind sehr gut.', inputs: ['1'], answers: ['bedingungen'], altAnswers: [['bedingungen', 'Bedingungen']], vi: 'Điều kiện làm việc ở công ty này rất tốt.' }
      ]
    },
    {
      id: 'ex4',
      title: 'Bài 4. Giao tiếp về công việc',
      hint: 'Sắp xếp hoặc điền từ để chỉ Tầm quan trọng (wichtig, unwichtig, mir, dir)',
      type: 'match',
      data: [
        { id: '1', question: 'Ist ... das wichtig? (Hỏi bạn bè) ->', answer: 'dir', altAnswers: ['dir'] },
        { id: '2', question: 'Ja, das ist ... sehr wichtig. (Trả lời) ->', answer: 'mir', altAnswers: ['mir'] },
        { id: '3', question: 'Ein nettes Team ist mir am ... ->', answer: 'wichtigsten', altAnswers: ['wichtigsten'] },
        { id: '4', question: 'Nein, das ist mir nicht so ... ->', answer: 'wichtig', altAnswers: ['wichtig'] }
      ]
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto pb-12">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-3xl font-black text-theme-dark uppercase tracking-tight">Bài Tập Từ Vựng</h2>
        <p className="text-theme-dark/70 font-medium">Lektion 9: Từ vựng về sản xuất, nhà máy và kinh tế.</p>
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
                          {q.text.split(/(\\{.*?\\})/).map((part: string, i: number) => {
                            const match = part.match(/\\{(\\d+)\\}/);
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
