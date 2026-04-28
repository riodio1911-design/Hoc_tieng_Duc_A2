import React, { useState, useEffect, useMemo } from 'react';
import { Gamepad2, ArrowRight, CheckCircle2, RotateCcw, Volume2, Award, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const EXERCISES = [
  {
    type: 'matching',
    question: 'Nối từ vựng với nghĩa tiếng Việt thích hợp:',
    pairs: [
      { de: 'die Werkstatt', vi: 'xưởng, phân xưởng' },
      { de: 'herstellen', vi: 'sản xuất, chế tạo' },
      { de: 'die Handtasche', vi: 'túi xách tay' },
      { de: 'der Kunde', vi: 'khách hàng' }
    ]
  },
  {
    type: 'multiple-choice',
    question: 'Chọn từ phù hợp để hoàn thành câu:',
    sentence: 'Ich brauche einen ___ für den Brief.',
    options: ['Notizblock', 'Kunden', 'Briefumschlag', 'Stoff'],
    correctAnswer: 'Briefumschlag',
    translation: 'Tôi cần một cái phong bì cho bức thư.'
  },
  {
    type: 'multiple-choice',
    question: 'Chọn từ phù hợp để hoàn thành câu:',
    sentence: 'Wir wünschen Ihnen viel ___ für die Zukunft.',
    options: ['Erfolg', 'Glück', 'Meinung', 'Grund'],
    correctAnswer: 'Glück',
    translation: 'Chúng tôi chúc ngài nhiều may mắn cho tương lai.'
  },
  {
    type: 'matching',
    question: 'Nối câu chúc/cảm ơn với nghĩa tương ứng:',
    pairs: [
      { de: 'viel Erfolg', vi: 'chúc nhiều thành công' },
      { de: 'viel Glück', vi: 'chúc nhiều may mắn' },
      { de: 'sich bedanken', vi: 'cảm ơn' },
      { de: 'gratulieren', vi: 'chúc mừng' }
    ]
  },
  {
    type: 'multiple-choice',
    question: 'Từ nào đồng nghĩa hoặc cùng trường nghĩa với "Meinung" (ý kiến)?',
    sentence: 'Meiner ___ nach ist das eine gute Idee.',
    options: ['Erwachsene', 'Notiz', 'Werkstatt', 'Meinung'],
    correctAnswer: 'Meinung',
    translation: 'Theo ý kiến của tôi thì đó là một ý tưởng hay.'
  }
];

export default function Lektion11VocabEx({ playAudio }: { playAudio: (text: string, id: string) => void }) {
  const [currentEx, setCurrentEx] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const ex = EXERCISES[currentEx];

  // For matching exercises, randomize pairs only once per exercise
  const randomizedPairs = useMemo(() => {
    if (ex.type === 'matching') {
      const deWords = ex.pairs!.map(p => p.de).sort(() => Math.random() - 0.5);
      const viWords = ex.pairs!.map(p => p.vi).sort(() => Math.random() - 0.5);
      return { deWords, viWords };
    }
    return { deWords: [], viWords: [] };
  }, [currentEx]);

  useEffect(() => {
    setSelectedWord(null);
    setMatchedPairs([]);
    setSelectedAnswer(null);
    setShowFeedback(false);
  }, [currentEx]);

  const handleMatch = (word: string, lang: 'de' | 'vi') => {
    if (showFeedback) return;
    
    if (!selectedWord) {
      setSelectedWord(word);
    } else {
      let isCorrect = false;
      const firstWordIsDe = randomizedPairs.deWords.includes(selectedWord);
      
      if (firstWordIsDe && lang === 'vi') {
        isCorrect = ex.pairs!.some(p => p.de === selectedWord && p.vi === word);
      } else if (!firstWordIsDe && lang === 'de') {
        isCorrect = ex.pairs!.some(p => p.vi === selectedWord && p.de === word);
      }

      if (isCorrect) {
        if (lang === 'de') playAudio(word, word);
        else if (firstWordIsDe) playAudio(selectedWord, selectedWord);
        
        setMatchedPairs([...matchedPairs, selectedWord, word]);
        setSelectedWord(null);
        if (matchedPairs.length + 2 === ex.pairs!.length * 2) {
          setScore(s => s + 1);
          setShowFeedback(true);
        }
      } else {
        setSelectedWord(null);
      }
    }
  };

  const handleAnswer = (opt: string) => {
    if (showFeedback) return;
    setSelectedAnswer(opt);
    setShowFeedback(true);
    if (opt === ex.correctAnswer) {
      setScore(s => s + 1);
      playAudio("Richtig!", "correct");
    } else {
      playAudio("Falsch!", "incorrect");
    }
  };

  const reset = () => {
    setCurrentEx(0);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-3xl shadow-xl border-4 border-theme-primary/10 max-w-2xl mx-auto space-y-6">
        <div className="w-24 h-24 bg-theme-primary/10 text-theme-primary rounded-full flex items-center justify-center relative">
          <Award size={48} />
          <Zap className="absolute -top-2 -right-2 text-amber-400 w-8 h-8 drop-shadow-md" />
        </div>
        <h2 className="text-4xl font-display font-black text-theme-dark uppercase">Hoàn thành xuất sắc!</h2>
        <div className="bg-theme-cream/50 px-8 py-6 rounded-2xl border-2 border-dashed border-theme-dark/10 text-center w-full">
          <p className="text-xl font-bold text-theme-dark/60 mb-2">Điểm của bạn</p>
          <p className="text-6xl font-black text-theme-primary">{score} <span className="text-3xl text-theme-dark/30">/ {EXERCISES.length}</span></p>
        </div>
        <button
          onClick={reset}
          className="flex items-center gap-2 bg-theme-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-theme-primary/90 hover:scale-105 hover:shadow-xl transition-all uppercase tracking-widest"
        >
          <RotateCcw size={20} /> Làm lại
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between pb-6 border-b-2 border-theme-dark/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-theme-primary/10 text-theme-primary rounded-xl flex items-center justify-center">
            <Gamepad2 size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-display font-black text-theme-dark">Luyện tập Từ vựng</h2>
            <p className="text-theme-dark/60 font-bold uppercase tracking-widest text-xs">Câu {currentEx + 1} / {EXERCISES.length}</p>
          </div>
        </div>
        <div className="bg-theme-cream px-4 py-2 rounded-xl font-bold text-theme-dark">
          Điểm: <span className="text-theme-primary">{score}</span>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-theme-dark/5 relative overflow-hidden">
        <h3 className="text-xl font-black text-theme-dark mb-8 uppercase tracking-wide">{ex.question}</h3>

        {ex.type === 'matching' && (
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              {randomizedPairs.deWords.map(word => (
                <button
                  key={word}
                  onClick={() => handleMatch(word, 'de')}
                  disabled={matchedPairs.includes(word) || showFeedback}
                  className={`w-full p-4 rounded-2xl font-bold text-lg transition-all border-2 flex items-center justify-between ${
                    matchedPairs.includes(word)
                      ? 'bg-theme-cream/50 text-theme-dark/30 border-theme-dark/10 scale-95'
                      : selectedWord === word
                      ? 'bg-theme-primary text-white border-theme-primary shadow-lg scale-105'
                      : 'bg-white text-theme-dark border-theme-dark/10 hover:border-theme-primary/50 hover:shadow-md'
                  }`}
                >
                  {word}
                </button>
              ))}
            </div>
            <div className="space-y-4">
              {randomizedPairs.viWords.map(word => (
                <button
                  key={word}
                  onClick={() => handleMatch(word, 'vi')}
                  disabled={matchedPairs.includes(word) || showFeedback}
                  className={`w-full p-4 rounded-2xl font-bold text-lg transition-all border-2 flex items-center justify-between ${
                    matchedPairs.includes(word)
                      ? 'bg-emerald-50 text-emerald-300 border-emerald-100 scale-95'
                      : selectedWord === word
                      ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg scale-105'
                      : 'bg-white text-theme-dark border-theme-dark/10 hover:border-emerald-500/50 hover:shadow-md'
                  }`}
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        )}

        {ex.type === 'multiple-choice' && (
          <div className="space-y-8">
            <p className="text-3xl font-bold text-theme-dark bg-theme-cream/50 p-6 rounded-2xl border-2 border-dashed border-theme-dark/20 text-center leading-relaxed">
              {ex.sentence!.split('___').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="inline-block px-6 py-1 mx-2 bg-white rounded-lg border-2 border-theme-dark/10 text-theme-primary font-black shadow-inner min-w-[120px]">
                      {selectedAnswer || '...'}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {ex.options!.map((opt, idx) => {
                let btnClass = "bg-white text-theme-dark border-theme-dark/10 hover:border-theme-primary/50 hover:shadow-md hover:scale-[1.02]";
                if (showFeedback) {
                  if (opt === ex.correctAnswer) btnClass = "bg-emerald-500 text-white border-emerald-500 shadow-lg scale-105 z-10";
                  else if (opt === selectedAnswer) btnClass = "bg-rose-500 text-white border-rose-500 shadow-lg scale-105 z-10";
                  else btnClass = "bg-gray-100 text-gray-400 border-gray-200 opacity-50";
                }
                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(opt)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 rounded-2xl font-bold text-lg text-left transition-all border-2 shadow-sm ${btnClass}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            <AnimatePresence>
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 mt-4"
                >
                  <p className="text-emerald-800 font-bold">{ex.translation}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 flex justify-end"
            >
              <button
                onClick={() => {
                  if (currentEx < EXERCISES.length - 1) {
                    setCurrentEx(c => c + 1);
                  } else {
                    setIsFinished(true);
                  }
                }}
                className="flex items-center gap-2 bg-theme-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-black hover:scale-105 hover:shadow-xl transition-all"
              >
                Tiếp tục <ArrowRight size={20} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
