import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion17VocabEx({ playAudio, playingId }: Props) {
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
      title: 'Bài 1. Điền từ vào chỗ trống',
      hint: 'Từ gợi ý: Tankstelle - Winterreifen - Pass - Fähre',
      type: 'fill',
      data: [
        { id: '1', text: 'Wir müssen an der nächsten {1} anhalten, der Tank ist fast leer.', inputs: ['1'], answers: ['Tankstelle'], altAnswers: [['Tankstelle', 'tankstelle']], vi: 'Chúng ta phải dừng lại ở trạm xăng tiếp theo...' },
        { id: '2', text: 'Im Winter braucht man unbedingt {1} für das Auto.', inputs: ['1'], answers: ['Winterreifen'], altAnswers: [['Winterreifen', 'winterreifen']], vi: 'Vào mùa đông người ta cần lốp mùa đông...' },
        { id: '3', text: 'An der Grenze mussten wir unseren {1} zeigen.', inputs: ['1'], answers: ['Pass'], altAnswers: [['Pass', 'pass']], vi: 'Ở biên giới chúng tôi phải trình...' },
        { id: '4', text: 'Wir haben keine Brücke gefunden, deshalb sind wir mit der {1} über den Fluss gefahren.', inputs: ['1'], answers: ['Fähre'], altAnswers: [['Fähre', 'faehre']], vi: 'Chúng tôi không tìm thấy cầu, nên đi bằng phà...' }
      ]
    },
    {
      id: 'ex2',
      title: 'Bài 2. Tìm từ trái nghĩa',
      type: 'match',
      data: [
        { id: '1', question: 'die Abfahrt <->', answer: 'Ankunft', altAnswers: ['Ankunft', 'die Ankunft', 'ankunft'] },
        { id: '2', question: 'müde <->', answer: 'munter', altAnswers: ['munter', 'wach'] },
        { id: '3', question: 'pessimistisch <->', answer: 'optimistisch', altAnswers: ['optimistisch'] },
        { id: '4', question: 'der Sommerreifen <->', answer: 'Winterreifen', altAnswers: ['Winterreifen', 'der Winterreifen', 'winterreifen'] }
      ]
    },
    {
      id: 'ex3',
      title: 'Bài 3. Phân loại địa điểm (Có nước / Không có nước)',
      hint: 'Từ gợi ý: Strand - Gebirge - Wald - Insel - See - Wüste.',
      type: 'fill',
      data: [
         { id: '1', text: 'Wasser: {1}, {2}, {3}', inputs: ['1', '2', '3'], answers: ['Strand', 'Insel', 'See'], altAnswers: [['Strand', 'Insel', 'See'], ['Strand', 'Insel', 'See'], ['Strand', 'Insel', 'See']] },
         { id: '2', text: 'Kein Wasser: {1}, {2}, {3}', inputs: ['1', '2', '3'], answers: ['Gebirge', 'Wald', 'Wüste'], altAnswers: [['Gebirge', 'Wald', 'Wüste'], ['Gebirge', 'Wald', 'Wüste'], ['Gebirge', 'Wald', 'Wüste']] }
      ]
    },
    {
      id: 'ex4',
      title: 'Bài 4. Giao thông - Điền từ',
      hint: 'Từ gợi ý: Ampel - Autobahn - Panne - Autoradio',
      type: 'fill',
      data: [
         { id: '1', text: 'Der Motor ist kaputt, wir haben eine {1}.', inputs: ['1'], answers: ['Panne'], altAnswers: [['Panne', 'panne']], vi: 'Động cơ hỏng rồi, chúng ta bị sự cố.' },
         { id: '2', text: 'Auf der {1} darf man schnell fahren.', inputs: ['1'], answers: ['Autobahn'], altAnswers: [['Autobahn', 'autobahn']], vi: 'Trên cao tốc được đi nhanh.' },
         { id: '3', text: 'Du musst an der roten {1} anhalten.', inputs: ['1'], answers: ['Ampel'], altAnswers: [['Ampel', 'ampel']], vi: 'Bạn phải dừng ở đèn đỏ.' },
         { id: '4', text: 'Mach bitte das {1} an, ich möchte Musik hören.', inputs: ['1'], answers: ['Autoradio'], altAnswers: [['Autoradio', 'autoradio']], vi: 'Làm ơn bật đài ô tô lên...' }
      ]
    },
    {
      id: 'ex5',
      title: 'Bài 5. Nối từ: Tình huống & Động từ',
      type: 'match',
      data: [
        { id: '1', question: 'Im Zelt...', answer: 'übernachten', altAnswers: ['übernachten', 'schlafen', 'zelten'] },
        { id: '2', question: 'Geld und Pass an der Grenze...', answer: 'zeigen', altAnswers: ['zeigen'] },
        { id: '3', question: 'Das Auto an der Tankstelle...', answer: 'tanken', altAnswers: ['tanken'] },
        { id: '4', question: 'Nach der langen Fahrt muss ich mich...', answer: 'ausruhen', altAnswers: ['sich ausruhen', 'ausruhen'] }
      ]
    },
    {
      id: 'ex6',
      title: 'Bài 6. Hướng đi (Phương hướng)',
      hint: 'Từ vựng tiếng Đức cho: Bắc, Nam, Đông, Tây.',
      type: 'match',
      data: [
        { id: '1', question: 'Bắc', answer: 'Norden', altAnswers: ['Norden', 'der Norden', 'norden'] },
        { id: '2', question: 'Nam', answer: 'Süden', altAnswers: ['Süden', 'der Süden', 'süden'] },
        { id: '3', question: 'Đông', answer: 'Osten', altAnswers: ['Osten', 'der Osten', 'osten'] },
        { id: '4', question: 'Tây', answer: 'Westen', altAnswers: ['Westen', 'der Westen', 'westen'] }
      ]
    },
    {
      id: 'ex7',
      title: 'Bài 7. Trạng thái sau chuyến đi',
      hint: 'Mệt mỏi, lạ lùng, ngủ thiếp đi...',
      type: 'fill',
      data: [
         { id: '1', text: 'Das Auto macht {1} Geräusche.', inputs: ['1'], answers: ['komische'], altAnswers: [['komische', 'komisch']], vi: 'Xe phát ra tiếng lạ lùng.' },
         { id: '2', text: 'Nach 10 Stunden Fahrt war ich extrem {1}.', inputs: ['1'], answers: ['müde'], altAnswers: [['müde', 'muede']], vi: 'Sau 10 tiếng lái xe, tôi cực kỳ mệt.' },
         { id: '3', text: 'Im Bett bin ich sofort {1}.', inputs: ['1'], answers: ['eingeschlafen'], altAnswers: [['eingeschlafen', 'eingeschlafen.']], vi: 'Ở trên giường, tôi ngủ thiếp đi ngay.' }
      ]
    },
    {
      id: 'ex8',
      title: 'Bài 8. Câu cảm thán',
      hint: 'Hoàn thành câu: So ein Zufall! - Nicht zu glauben! - toll - schrecklich',
      type: 'fill',
      data: [
         { id: '1', text: 'Wir haben uns lange nicht gesehen. {1} ein Zufall!', inputs: ['1'], answers: ['So'], altAnswers: [['So', 'so']] },
         { id: '2', text: '{1} zu glauben! Du bist auch im August dort gewesen?', inputs: ['1'], answers: ['Nicht'], altAnswers: [['Nicht', 'nicht']] },
         { id: '3', text: 'Das Bild sieht wirklich {1} aus. Sehr schön!', inputs: ['1'], answers: ['toll'], altAnswers: [['toll', 'gut', 'schön']] },
         { id: '4', text: 'Die Panne sieht {1} aus.', inputs: ['1'], answers: ['schrecklich'], altAnswers: [['schrecklich', 'schlimm']] }
      ]
    },
    {
      id: 'ex9',
      title: 'Bài 9. Cắm trại & Thiên nhiên',
      type: 'match',
      data: [
        { id: '1', question: 'Đồng cỏ (nơi dựng lều):', answer: 'Wiese', altAnswers: ['Wiese', 'die Wiese', 'wiese'] },
        { id: '2', question: 'Cái lều:', answer: 'Zelt', altAnswers: ['Zelt', 'das Zelt', 'zelt'] },
        { id: '3', question: 'Khu rừng:', answer: 'Wald', altAnswers: ['Wald', 'der Wald', 'wald'] },
        { id: '4', question: 'Sa mạc (rất nóng, cát):', answer: 'Wüste', altAnswers: ['Wüste', 'die Wüste', 'wüste'] }
      ]
    },
    {
      id: 'ex10',
      title: 'Bài 10. Test tổng hợp từ vựng',
      hint: 'Gõ từ tiếng Đức thích hợp.',
      type: 'match',
      data: [
        { id: '1', question: 'Trạm xăng:', answer: 'Tankstelle', altAnswers: ['Tankstelle', 'die Tankstelle', 'tankstelle'] },
        { id: '2', question: 'Bờ biển:', answer: 'Küste', altAnswers: ['Küste', 'die Küste', 'küste'] },
        { id: '3', question: 'Lạc quan (tính từ):', answer: 'optimistisch', altAnswers: ['optimistisch'] },
        { id: '4', question: 'Dãy núi:', answer: 'Gebirge', altAnswers: ['Gebirge', 'das Gebirge', 'gebirge', 'Berge', 'die Berge'] }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
         <h2 className="text-3xl font-black text-amber-500 mb-2">Bài tập Từ vựng - Lektion 17</h2>
         <p className="text-theme-dark/60 font-medium">Luyện tập từ vựng về giao thông và du lịch!</p>
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
