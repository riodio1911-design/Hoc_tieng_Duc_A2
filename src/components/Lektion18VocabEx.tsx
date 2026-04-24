import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion18VocabEx({ playAudio, playingId }: Props) {
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
      title: 'Bài 1. Phân loại từ vựng thời tiết',
      hint: 'Viết tính từ tương ứng với danh từ thời tiết (ví dụ: Wind -> windig)',
      type: 'match',
      data: [
        { id: '1', question: 'der Wind ->', answer: 'windig', altAnswers: ['windig'] },
        { id: '2', question: 'die Sonne ->', answer: 'sonnig', altAnswers: ['sonnig'] },
        { id: '3', question: 'der Nebel ->', answer: 'neblig', altAnswers: ['neblig'] },
        { id: '4', question: 'der Regen ->', answer: 'regnerisch', altAnswers: ['regnerisch'] }
      ]
    },
    {
      id: 'ex2',
      title: 'Bài 2. Đồ dùng đi biển',
      hint: 'Điền vật dụng đi biển phù hợp: Handtuch, Sonnencreme, Badehose',
      type: 'fill',
      data: [
         { id: '1', text: 'Để bảo vệ da khỏi ánh nắng, mình cần {1}.', inputs: ['1'], answers: ['Sonnencreme'], altAnswers: [['Sonnencreme', 'sonnencreme', 'die Sonnencreme']] },
         { id: '2', text: 'Sau khi bơi, mình dùng {1} để lau khô người.', inputs: ['1'], answers: ['Handtuch'], altAnswers: [['Handtuch', 'handtuch', 'das Handtuch', 'ein Handtuch']] },
         { id: '3', text: 'Nam giới đi bơi cần mặc {1}.', inputs: ['1'], answers: ['Badehose'], altAnswers: [['Badehose', 'badehose', 'die Badehose', 'eine Badehose']] }
      ]
    },
    {
      id: 'ex3',
      title: 'Bài 3. Test Tổng hợp',
      hint: 'Điền từ phù hợp vào chỗ trống',
      type: 'fill',
      data: [
         { id: '1', text: 'Khi trời rất nóng, người ta gọi đó là die {1}.', inputs: ['1'], answers: ['Hitze'], altAnswers: [['Hitze', 'hitze']] },
         { id: '2', text: 'Trái nghĩa với "warm" là: {1}.', inputs: ['1'], answers: ['kalt'], altAnswers: [['kalt']] },
         { id: '3', text: 'Mein Navigator ist {1}, ich weiß nicht, wo ich bin.', inputs: ['1'], answers: ['hin'], altAnswers: [['hin', 'kaputt']], vi: 'Máy dẫn đường của tôi bị hỏng...' },
         { id: '4', text: 'Nơi có nhiều lỗ để đánh bóng vào được gọi là: der {1}.', inputs: ['1'], answers: ['Golfplatz'], altAnswers: [['Golfplatz', 'golfplatz']] },
         { id: '5', text: 'Khi trời có tuyết, trẻ em thích chơi với der {1}.', inputs: ['1'], answers: ['Schnee'], altAnswers: [['Schnee', 'schnee']] }
      ]
    },
    {
      id: 'ex4',
      title: 'Bài 4. Dịch nghĩa thời tiết',
      hint: 'Dịch các từ sau sang tiếng Việt (Sự lạnh lẽo, Dông bão, Nhiều mây, Nóng bức)',
      type: 'match',
      data: [
        { id: '1', question: 'das Gewitter ->', answer: 'Dông bão', altAnswers: ['Dông bão', 'dông bão', 'Giông bão', 'giông bão'] },
        { id: '2', question: 'die Kälte ->', answer: 'Sự lạnh lẽo', altAnswers: ['Sự lạnh lẽo', 'sự lạnh lẽo', 'lạnh lẽo'] },
        { id: '3', question: 'bewölkt ->', answer: 'Nhiều mây', altAnswers: ['Nhiều mây', 'nhiều mây', 'có mây'] },
        { id: '4', question: 'die Hitze ->', answer: 'Sự nóng bức', altAnswers: ['Sự nóng bức', 'sự nóng bức', 'nóng bức'] }
      ]
    },
    {
      id: 'ex5',
      title: 'Bài 5. Thời tiết trong câu',
      hint: 'Điền từ thích hợp: Wetter, Regen, Wind, Kälte',
      type: 'fill',
      data: [
         { id: '1', text: 'Wir bleiben bei dem {1} zu Hause.', inputs: ['1'], answers: ['Regen'], altAnswers: [['Regen', 'regen']], vi: 'Chúng tôi ở nhà khi trời mưa.' },
         { id: '2', text: 'Bei schlechtem {1} können wir nicht spazieren gehen.', inputs: ['1'], answers: ['Wetter'], altAnswers: [['Wetter', 'wetter']], vi: 'Khi thời tiết xấu, chúng tôi không thể đi bộ.' },
         { id: '3', text: 'Der {1} ist heute sehr stark.', inputs: ['1'], answers: ['Wind'], altAnswers: [['Wind', 'wind']], vi: 'Gió hôm nay rất mạnh.' },
         { id: '4', text: 'Ich mag die {1} nicht. Mir ist lieber warm.', inputs: ['1'], answers: ['Kälte'], altAnswers: [['Kälte', 'kälte']], vi: 'Tôi không thích sự lạnh lẽo. Tôi thích ấm áp hơn.' }
      ]
    },
    {
      id: 'ex6',
      title: 'Bài 6. Trái nghĩa và Đồng nghĩa',
      hint: 'Điền từ trái nghĩa phù hợp',
      type: 'match',
      data: [
        { id: '1', question: 'links <->', answer: 'rechts', altAnswers: ['rechts'] },
        { id: '2', question: 'davor <->', answer: 'dahinter', altAnswers: ['dahinter'] },
        { id: '3', question: 'sonnig <->', answer: 'bewölkt', altAnswers: ['bewölkt', 'regnerisch', 'neblig'] },
        { id: '4', question: 'kalt <->', answer: 'warm', altAnswers: ['warm', 'heiß', 'heiss'] }
      ]
    },
    {
      id: 'ex7',
      title: 'Bài 7. Phương hướng / Chỉ đường',
      hint: 'Điền từ: geradeaus, vorbei, links, Parkplatz',
      type: 'fill',
      data: [
         { id: '1', text: 'Gehen Sie immer {1}.', inputs: ['1'], answers: ['geradeaus'], altAnswers: [['geradeaus', 'geradeaus.']], vi: 'Hãy cứ đi thẳng.' },
         { id: '2', text: 'Gehen Sie an der Bäckerei {1}.', inputs: ['1'], answers: ['vorbei'], altAnswers: [['vorbei', 'vorbei.']], vi: 'Hãy đi ngang qua tiệm bánh.' },
         { id: '3', text: 'An der Ampel nach {1}.', inputs: ['1'], answers: ['links'], altAnswers: [['links', 'rechts']], vi: 'Đến đèn giao thông rẽ trái.' },
         { id: '4', text: 'Gibt es hier einen {1}?', inputs: ['1'], answers: ['Parkplatz'], altAnswers: [['Parkplatz', 'parkplatz']], vi: 'Ở đây có bãi đỗ xe không?' }
      ]
    },
    {
      id: 'ex8',
      title: 'Bài 8. Đồ dùng và Địa điểm',
      hint: 'Tương ứng hành động với địa điểm/đồ vật: Freizeitland, Handtuch, Golfplatz',
      type: 'match',
      data: [
        { id: '1', question: 'Die Kinder wollen spielen:', answer: 'Freizeitland', altAnswers: ['Freizeitland', 'das Freizeitland', 'freizeitland'] },
        { id: '2', question: 'Er spielt mit Schläger und Ball:', answer: 'Golfplatz', altAnswers: ['Golfplatz', 'der Golfplatz', 'golfplatz'] },
        { id: '3', question: 'Damit trocknet man sich ab:', answer: 'Handtuch', altAnswers: ['Handtuch', 'das Handtuch', 'handtuch'] }
      ]
    },
    {
      id: 'ex9',
      title: 'Bài 9. Trạng từ',
      hint: 'Điền: meistens, leider, dahinter',
      type: 'fill',
      data: [
         { id: '1', text: 'Er ist {1} pünktlich.', inputs: ['1'], answers: ['meistens'], altAnswers: [['meistens']], vi: 'Anh ấy thông thường đúng giờ.' },
         { id: '2', text: 'Ich habe {1} keine Zeit.', inputs: ['1'], answers: ['leider'], altAnswers: [['leider']], vi: 'Đáng tiếc là tôi không có thời gian.' },
         { id: '3', text: 'Der Parkplatz ist gleich {1}.', inputs: ['1'], answers: ['dahinter'], altAnswers: [['dahinter']], vi: 'Bãi đỗ xe ở ngay phía sau đó.' }
      ]
    },
    {
      id: 'ex10',
      title: 'Bài 10. Dịch từ sang tiếng Đức',
      hint: 'Điền danh từ / tính từ bằng tiếng Đức (có mạo từ nếu là danh từ)',
      type: 'match',
      data: [
        { id: '1', question: 'Mưa (danh từ):', answer: 'Regen', altAnswers: ['Regen', 'der Regen', 'regen'] },
        { id: '2', question: 'Sương mù:', answer: 'Nebel', altAnswers: ['Nebel', 'der Nebel', 'nebel'] },
        { id: '3', question: 'Gió:', answer: 'Wind', altAnswers: ['Wind', 'der Wind', 'wind'] },
        { id: '4', question: 'Ấm áp:', answer: 'warm', altAnswers: ['warm'] }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
         <h2 className="text-3xl font-black text-blue-500 mb-2">Bài tập Từ vựng - Lektion 18</h2>
         <p className="text-theme-dark/60 font-medium">Luyện tập từ vựng thời tiết và đồ dùng đi biển!</p>
      </div>

      {exercises.map((exercise, index) => {
        return (
          <div key={exercise.id} className="bg-white p-6 md:p-8 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-blue-500/10">
            <h3 className="text-xl md:text-2xl font-black text-blue-600 mb-4 flex items-center gap-3">
              {exercise.title}
            </h3>

            {exercise.hint && (
              <div className="bg-blue-500/5 p-4 rounded-xl mb-6 text-blue-700 font-bold text-sm md:text-base">
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
                            playingId === q.id ? 'bg-blue-500 text-white shadow-lg scale-110' : 'bg-white text-blue-500 border-2 border-blue-500/20 hover:bg-blue-500/5'
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
