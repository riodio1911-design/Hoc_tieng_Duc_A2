import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion15VocabEx({ playAudio, playingId }: Props) {
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
      title: '1. Điền từ vào chỗ trống',
      hint: 'Từ gợi ý: Krimi - Folge - Sender - Studio',
      type: 'fill',
      data: [
        { id: '1', text: 'Hast du die neueste {1} von "Dr. House" gesehen?', inputs: ['1'], answers: ['Folge'], altAnswers: [['Folge', 'folge']], vi: 'Bạn đã xem tập mới nhất của Dr. House chưa?' },
        { id: '2', text: 'Tatort ist der bekannteste {1} in Deutschland.', inputs: ['1'], answers: ['Krimi'], altAnswers: [['Krimi', 'krimi']], vi: 'Tatort là phim hình sự nổi tiếng nhất ở Đức.' },
        { id: '3', text: 'ARD und ZDF sind öffentlich-rechtliche {1}.', inputs: ['1'], answers: ['Sender'], altAnswers: [['Sender', 'sender']], vi: 'ARD và ZDF là các đài truyền hình công cộng.' },
        { id: '4', text: 'Ein Film wird in einem {1} produziert.', inputs: ['1'], answers: ['Studio'], altAnswers: [['Studio', 'studio']], vi: 'Một bộ phim được sản xuất trong một trường quay.' }
      ]
    },
    {
      id: 'ex2',
      title: '2. Nối động từ với danh từ phù hợp',
      hint: 'Từ gợi ý: bezahlen - ansehen - liefern - einschalten',
      type: 'match',
      data: [
        { id: '1', question: 'Eine Sendung...', answer: 'ansehen', altAnswers: ['ansehen', 'sehen'] },
        { id: '2', question: 'Ein Paket...', answer: 'liefern', altAnswers: ['liefern', 'bringen'] },
        { id: '3', question: 'Den Job...', answer: 'bezahlen', altAnswers: ['bezahlen'] },
        { id: '4', question: 'Den Computer...', answer: 'einschalten', altAnswers: ['einschalten', 'anmachen'] }
      ]
    },
    {
      id: 'ex3',
      title: '3. Đoán thể loại chương trình TV',
      type: 'fill',
      data: [
         { id: '1', text: 'Có Kommissar, có mörder và rất kịch tính: {1}', inputs: ['1'], answers: ['Krimi'], altAnswers: [['Krimi', 'der Krimi']] },
         { id: '2', text: 'Nói về đời thực, thiên nhiên, lịch sử: {1}', inputs: ['1'], answers: ['Dokumentation'], altAnswers: [['Dokumentation', 'die Dokumentation', 'Doku', 'die Doku']] },
         { id: '3', text: 'Có người dẫn chương trình hỏi câu hỏi, người chơi thắng tiền: {1}', inputs: ['1'], answers: ['Quizshow'], altAnswers: [['Quizshow', 'die Quizshow']] },
         { id: '4', text: 'Thông tin về thế giới, chính trị diễn ra hằng ngày: {1}', inputs: ['1'], answers: ['Nachrichten'], altAnswers: [['Nachrichten', 'die Nachrichten', 'Nachrichtensendung']] }
      ]
    },
    {
      id: 'ex4',
      title: '4. Điền mạo từ (der / die / das)',
      type: 'match',
      data: [
        { id: '1', question: '___ Sender', answer: 'der', altAnswers: ['der'] },
        { id: '2', question: '___ Sendung', answer: 'die', altAnswers: ['die'] },
        { id: '3', question: '___ Studio', answer: 'das', altAnswers: ['das'] },
        { id: '4', question: '___ Regisseur', answer: 'der', altAnswers: ['der'] },
        { id: '5', question: '___ Krimi', answer: 'der', altAnswers: ['der'] }
      ]
    },
    {
      id: 'ex5',
      title: '5. Ghép từ (Từ ghép)',
      hint: 'Ghép phần đầu và phần cuối: Dreh, Nach, Spiel, Quiz -> richten, buch, show, film',
      type: 'match',
      data: [
        { id: '1', question: 'Dreh + ... = ', answer: 'buch', altAnswers: ['buch', 'Drehbuch'] },
        { id: '2', question: 'Nach + ... = ', answer: 'richten', altAnswers: ['richten', 'Nachrichten'] },
        { id: '3', question: 'Spiel + ... = ', answer: 'film', altAnswers: ['film', 'Spielfilm'] },
        { id: '4', question: 'Quiz + ... = ', answer: 'show', altAnswers: ['show', 'Quizshow'] }
      ]
    },
    {
      id: 'ex6',
      title: '6. Sắp xếp chữ cái (Scramble)',
      type: 'match',
      data: [
        { id: '1', question: 'i r m i K', answer: 'Krimi', altAnswers: ['Krimi'] },
        { id: '2', question: 'u i S o d t', answer: 'Studio', altAnswers: ['Studio'] },
        { id: '3', question: 'e F g l o', answer: 'Folge', altAnswers: ['Folge'] },
        { id: '4', question: 'n e h c u s s a u', answer: 'aussuchen', altAnswers: ['aussuchen'] }
      ]
    },
    {
      id: 'ex7',
      title: '7. Ai làm việc gì? (Nghề nghiệp)',
      hint: 'Từ gợi ý: Kamera - Schauspieler - Autor - Regisseur',
      type: 'fill',
      data: [
        { id: '1', text: 'Der {1} schreibt das Drehbuch.', inputs: ['1'], answers: ['Autor'], altAnswers: [['Autor', 'der Autor']] },
        { id: '2', text: 'Der {1} instruiert die Schauspieler.', inputs: ['1'], answers: ['Regisseur'], altAnswers: [['Regisseur', 'der Regisseur']] },
        { id: '3', text: 'Die {1} spielen die Rollen.', inputs: ['1'], answers: ['Schauspieler'], altAnswers: [['Schauspieler', 'die Schauspieler']] },
        { id: '4', text: 'Der Kameramann bedient die {1}.', inputs: ['1'], answers: ['Kamera'], altAnswers: [['Kamera', 'die Kamera']] }
      ]
    },
    {
      id: 'ex8',
      title: '8. Trạng từ trong câu',
      type: 'fill',
      data: [
        { id: '1', text: '{1} loggt man sich im Computer ein.', inputs: ['1'], answers: ['Zuerst'], altAnswers: [['Zuerst', 'zuerst']] },
        { id: '2', text: '{1} sucht man ein Produkt aus.', inputs: ['1'], answers: ['Dann'], altAnswers: [['Dann', 'dann', 'Danach', 'danach']] },
        { id: '3', text: '{1} schickt man die Bestellung ab.', inputs: ['1'], answers: ['Danach'], altAnswers: [['Danach', 'danach', 'Dann', 'dann']] },
        { id: '4', text: '{1} wird das Paket geliefert.', inputs: ['1'], answers: ['Am Ende'], altAnswers: [['Am Ende', 'am ende', 'am Ende']] }
      ]
    },
    {
      id: 'ex9',
      title: '9. Đúng (Richtig) hay Sai (Falsch)?',
      hint: 'Gõ: Richtig / Falsch',
      type: 'match',
      data: [
        { id: '1', question: 'In einer Quizshow kann man Geld gewinnen.', answer: 'Richtig', altAnswers: ['Richtig', 'richtig', 'R', 'r'] },
        { id: '2', question: 'Eine Dokumentation (Doku) ist meistens ein Fantasy-Film.', answer: 'Falsch', altAnswers: ['Falsch', 'falsch', 'F', 'f'] },
        { id: '3', question: 'Man sieht Nachrichten, um Informationen über die Welt zu bekommen.', answer: 'Richtig', altAnswers: ['Richtig', 'richtig', 'R', 'r'] }
      ]
    },
    {
      id: 'ex10',
      title: '10. Dịch các câu sau sang tiếng Đức',
      type: 'match',
      data: [
        { id: '1', question: 'Người ta sản xuất bộ phim ở Berlin. (Dùng Aktiv)', answer: 'Man produziert den Film in Berlin.', altAnswers: ['Man produziert den Film in Berlin.', 'Man produziert den Film in Berlin', 'Man dreht den Film in Berlin.', 'Man dreht den Film in Berlin'] },
        { id: '2', question: 'Bạn có thích xem TV không?', answer: 'Siehst du gern fern?', altAnswers: ['Siehst du gern fern?', 'Siehst du gern fern', 'Guckst du gern fern?'] },
        { id: '3', question: 'Tôi đặt hàng online.', answer: 'Ich bestelle online.', altAnswers: ['Ich bestelle online.', 'Ich bestelle online', 'Ich bestelle im Internet.', 'Ich bestelle im Internet'] }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
         <h2 className="text-3xl font-black text-theme-primary mb-2">Bài tập Từ vựng - Lektion 15</h2>
         <p className="text-theme-dark/60 font-medium">Hoàn thành 10 bài tập dưới đây để củng cố từ vựng nhé!</p>
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
