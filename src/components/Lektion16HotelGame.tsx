import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

interface Scenario {
  id: string;
  context: string;
  options: {
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
}

export default function Lektion16HotelGame({ playAudio, playingId }: Props) {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const scenarios: Scenario[] = [
    {
      id: 'sc1',
      context: 'Bạn bước vào sảnh khách sạn. Nhân viên lễ tân vẫy gọi. Bạn muốn hỏi phòng tập gym nằm ở đâu một cách lịch sự.',
      options: [
        { text: 'Können Sie mir sagen, wo ist der Fitnessraum?', isCorrect: false, feedback: 'Sai cấu trúc! Động từ "ist" phải đứng cuối câu.' },
        { text: 'Können Sie mir sagen, wo der Fitnessraum ist?', isCorrect: true, feedback: 'Giỏi lắm! Động từ "ist" đã được đặt ở cuối mệnh đề phụ.' },
        { text: 'Können Sie mir sagen, wo der Fitnessraum?', isCorrect: false, feedback: 'Thiếu động từ "ist".' }
      ]
    },
    {
      id: 'sc2',
      context: 'Nhân viên lễ tân hướng dẫn bạn: "Gehen Sie _____ die Empfangshalle. Der Fitnessraum ist _____ dem Restaurant." (Đi xuyên qua sảnh. Phòng gym đối diện nhà hàng)',
      options: [
        { text: 'an ... vorbei / gegenüber von', isCorrect: false, feedback: 'Sai giới từ. "Xuyên qua" là durch, "đối diện" là gegenüber von.' },
        { text: 'durch / an ... vorbei', isCorrect: false, feedback: '"durch" là đúng, nhưng "an...vorbei" là đi ngang qua chứ không phải đối diện.' },
        { text: 'durch / gegenüber von', isCorrect: true, feedback: 'Chính xác! durch + Akk và gegenüber von + Dat.' }
      ]
    },
    {
      id: 'sc3',
      context: 'Bạn muốn biết liệu khách sạn có cho đem theo chó cưng không. Bạn sẽ hỏi?',
      options: [
        { text: 'Ich möchte gern wissen, ob man Hunde mitbringen darf.', isCorrect: true, feedback: 'Đúng! Dùng liên từ "ob" cho câu hỏi Yes/No và động từ "darf" cuối câu.' },
        { text: 'Wissen Sie, wann man Hunde mitbringen darf?', isCorrect: false, feedback: '"wann" nghĩa là "khi nào", không phù hợp với ý muốn hỏi "có... hay không".' },
        { text: 'Ich möchte gern wissen, dass man Hunde mitbringen darf.', isCorrect: false, feedback: 'Sai liên từ. Đừng dùng "dass" thay cho "ob" trong câu hỏi.' }
      ]
    },
    {
      id: 'sc4',
      context: 'Lễ tân trả lời: "Ja, das ist kein Problem!" Bây giờ bạn muốn hỏi phòng có bao gồm bữa sáng không.',
      options: [
        { text: 'Darf ich fragen, ob ist das Frühstück inklusiv?', isCorrect: false, feedback: 'Sau "ob", động từ phải ở cuối câu.' },
        { text: 'Darf ich fragen, ob das Frühstück inklusiv ist?', isCorrect: true, feedback: 'Tuyệt vời! Ngữ pháp hoàn hảo.' },
        { text: 'Darf ich fragen, wie das Frühstück inklusiv ist?', isCorrect: false, feedback: 'Dùng "wie" (như thế nào) là không hợp lý.' }
      ]
    },
    {
      id: 'sc5',
      context: 'Cuối cùng, bạn cần thanh toán và muốn biết mình có thể trả bằng thẻ tín dụng không.',
      options: [
        { text: 'Wissen Sie, ob bar bezahlen?', isCorrect: false, feedback: 'Câu hỏi không hoàn chỉnh.' },
        { text: 'Wissen Sie, ob mit Kreditkarte kann bezahlen?', isCorrect: false, feedback: 'Động từ khuyết thiếu "kann" phải ở cuối cùng trong câu phụ.' },
        { text: 'Können Sie mir sagen, ob ich mit Kreditkarte bezahlen kann?', isCorrect: true, feedback: 'Chính xác! "bezahlen kann" ở đúng vị trí.' }
      ]
    }
  ];

  const handleOptionSelect = (index: number) => {
    if (showFeedback) return;
    setSelectedOption(index);
    setShowFeedback(true);
    
    if (scenarios[currentScenario].options[index].isCorrect) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(s => s + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetGame = () => {
    setCurrentScenario(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="bg-white p-12 rounded-[32px] shadow-xl text-center max-w-2xl mx-auto space-y-6">
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={48} className="text-emerald-500" />
        </div>
        <h2 className="text-4xl font-black text-theme-dark">Hoàn thành tình huống!</h2>
        <p className="text-lg font-bold text-theme-dark/60">
          Bạn trả lời đúng {score} / {scenarios.length} câu.
        </p>
        <button 
          onClick={resetGame}
          className="px-8 py-3 bg-theme-primary text-white rounded-2xl font-black flex items-center justify-center gap-2 mx-auto hover:bg-theme-dark transition-all mt-4"
        >
          <RotateCcw size={20} /> Chơi lại
        </button>
      </div>
    );
  }

  const current = scenarios[currentScenario];

  return (
    <div className="max-w-3xl mx-auto pb-12">
      <div className="bg-white rounded-[32px] overflow-hidden shadow-xl border-2 border-theme-primary/10">
        <div className="bg-theme-primary p-6 text-white text-center">
            <h2 className="text-2xl font-black mb-2">Tình huống tại Rezeption</h2>
            <p className="font-bold opacity-80">Trò chơi nhập vai Lektion 16</p>
            <div className="flex justify-center gap-2 mt-4">
              {scenarios.map((_, i) => (
                <div key={i} className={`h-2 rounded-full transition-all ${i === currentScenario ? 'w-8 bg-white' : i < currentScenario ? 'w-2 bg-emerald-300' : 'w-2 bg-white/30'}`} />
              ))}
            </div>
        </div>

        <div className="p-8">
            <p className="text-xl font-bold text-theme-dark bg-theme-cream/30 p-6 rounded-2xl mb-8 leading-snug">
              {current.context}
            </p>

            <div className="space-y-4">
               {current.options.map((opt, i) => (
                 <button
                   key={i}
                   onClick={() => handleOptionSelect(i)}
                   disabled={showFeedback}
                   className={`w-full text-left p-5 rounded-2xl font-bold transition-all border-2 ${
                     showFeedback && i === selectedOption ? 
                       opt.isCorrect ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-rose-50 border-rose-500 text-rose-700'
                     : showFeedback && opt.isCorrect ? 'bg-emerald-50/50 border-emerald-500/50 text-emerald-700/80'
                     : showFeedback ? 'bg-slate-50 border-slate-200 text-slate-400 opacity-50'
                     : 'bg-white border-theme-dark/10 hover:border-theme-primary hover:bg-theme-primary/5 text-theme-dark'
                   }`}
                 >
                   <div className="flex items-center justify-between">
                     <span>{opt.text}</span>
                     {showFeedback && i === selectedOption && (
                       opt.isCorrect ? <CheckCircle2 className="text-emerald-500 shrink-0" /> : <XCircle className="text-rose-500 shrink-0" />
                     )}
                   </div>
                   {showFeedback && i === selectedOption && (
                     <div className={`mt-3 pt-3 border-t text-sm ${opt.isCorrect ? 'border-emerald-500/20' : 'border-rose-500/20'}`}>
                        {opt.feedback}
                     </div>
                   )}
                 </button>
               ))}
            </div>

            {showFeedback && (
              <div className="mt-8 flex justify-end animate-in fade-in slide-in-from-bottom-4">
                <button
                  onClick={handleNext}
                  className="px-8 py-3 bg-theme-primary text-white rounded-2xl font-black shadow-lg shadow-theme-primary/30 hover:bg-theme-dark hover:shadow-theme-dark/30 transition-all hover:-translate-y-1"
                >
                  {currentScenario < scenarios.length - 1 ? 'Tiếp theo' : 'Hoàn thành'}
                </button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
