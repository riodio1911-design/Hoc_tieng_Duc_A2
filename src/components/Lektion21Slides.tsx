import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Play, Volume2, ShieldAlert, CheckCircle2, Image as ImageIcon, Loader2 } from 'lucide-react';
import AlibiGame from './AlibiGame';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN', overrideVoiceName?: string) => void;
  playingId: string | null;
}

const backgrounds: Record<number, { bgImage?: string, bgColor?: string }> = {
  [-1]: { bgColor: 'bg-white', bgImage: 'https://images.unsplash.com/photo-1544716278-e513176f20b5?w=1200&h=800&fit=crop&q=80' },
  0: { bgColor: 'bg-theme-dark' }, // Custom handling in slide
  1: { bgColor: 'bg-amber-50' },
  2: { bgColor: 'bg-rose-50' },
  8: { bgImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=800&fit=crop&q=80', bgColor: 'bg-emerald-50/90' },
  9: { bgColor: 'bg-indigo-50' },
  17: { bgColor: 'bg-white' },
  // Lassen slides
  18: { bgImage: "https://images.unsplash.com/photo-1544716278-e513176f20b5?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-red-50/50' },
  19: { bgImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-orange-50/80' },
  20: { bgImage: "https://images.unsplash.com/photo-1542435503-914efa0f6062?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-rose-50/90' },
  21: { bgColor: "bg-gradient-to-br from-orange-100 to-rose-100" },
  22: { bgImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-amber-50/80' },
  23: { bgColor: "bg-slate-50" },
  24: { bgImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop&q=80", bgColor: 'bg-rose-50/90' },
  25: { bgColor: "bg-theme-cream" }
};

const MatchingGame = () => {
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<number, string>>({});
  const [wrongPair, setWrongPair] = useState<{left: number, right: string} | null>(null);

  const leftItems = [
    { id: 1, text: "1. Herr Abelein hatte seine Jacke..." },
    { id: 2, text: "2. Er hat seine Geldbörse in das Auto gelegt" },
    { id: 3, text: "3. Als er wieder unten war," },
    { id: 4, text: "4. Der Mann hat die Autoscheibe eingeschlagen," }
  ];

  const rightItems = [
    { id: 'A', text: "A. die Geldbörse gestohlen und ist weggelaufen." },
    { id: 'B', text: "B. sah er einen Mann mit einem Hammer." },
    { id: 'C', text: "C. und wollte sie holen." },
    { id: 'D', text: "D. und das Auto abgesperrt." }
  ];

  // Correct mapping: 1-C, 2-D, 3-B, 4-A
  const correctMatches: Record<number, string> = {
    1: 'C',
    2: 'D',
    3: 'B',
    4: 'A'
  };

  const handleLeftClick = (id: number) => {
    if (matchedPairs[id]) return;
    setSelectedLeft(id === selectedLeft ? null : id);
  };

  const handleRightClick = (id: string) => {
    if (selectedLeft === null) return;
    if (Object.values(matchedPairs).includes(id)) return;

    if (correctMatches[selectedLeft] === id) {
      setMatchedPairs(prev => ({ ...prev, [selectedLeft]: id }));
      setSelectedLeft(null);
    } else {
      setWrongPair({ left: selectedLeft, right: id });
      setTimeout(() => {
        setWrongPair(null);
        setSelectedLeft(null);
      }, 1000);
    }
  };

  const isAllMatched = Object.keys(matchedPairs).length === 4;

  return (
    <div className="space-y-6 flex flex-col h-full mt-4">
      <div className="flex-1 grid md:grid-cols-2 gap-8 overflow-y-auto custom-scrollbar p-2">
        <div className="space-y-4">
          {leftItems.map(item => {
            const isMatched = !!matchedPairs[item.id];
            const isSelected = selectedLeft === item.id;
            const isWrong = wrongPair?.left === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLeftClick(item.id)}
                disabled={isMatched}
                className={`w-full text-left p-5 rounded-2xl text-sm font-bold transition-all border-2 ${
                  isMatched ? 'bg-emerald-50 border-emerald-200 text-emerald-900 opacity-60' :
                  isSelected ? 'bg-theme-primary/10 border-theme-primary text-theme-primary shadow-md scale-[1.02]' :
                  isWrong ? 'bg-red-50 border-red-400 text-red-900 animate-shake' :
                  'bg-white border-theme-dark/10 hover:border-theme-primary/50 text-theme-dark shadow-sm'
                }`}
              >
                {item.text}
              </button>
            );
          })}
        </div>
        <div className="space-y-4">
          {rightItems.map(item => {
            const isMatched = Object.values(matchedPairs).includes(item.id);
            const isWrong = wrongPair?.right === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleRightClick(item.id)}
                disabled={isMatched}
                className={`w-full text-left p-5 rounded-2xl text-sm font-bold transition-all border-2 ${
                  isMatched ? 'bg-emerald-50 border-emerald-200 text-emerald-900 opacity-60 shadow-none' :
                  isWrong ? 'bg-red-50 border-red-400 text-red-900 animate-shake' :
                  'bg-theme-cream border-theme-secondary/20 hover:border-theme-secondary text-theme-secondary shadow-sm'
                }`}
              >
                {item.text}
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="text-center h-8 flex items-center justify-center">
        {isAllMatched ? (
          <span className="text-emerald-500 font-black flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200 shadow-sm"><CheckCircle2/> Chúc mừng bạn đã ghép đúng tất cả!</span>
        ) : (
          <p className="font-bold text-theme-dark/40 text-xs uppercase tracking-widest">
            Chọn một câu bên trái rồi ghép với câu bên phải tương ứng
          </p>
        )}
      </div>
    </div>
  );
};

const DragDropGame = () => {
  const [dragAnswers, setDragAnswers] = useState<Record<string, string>>({});
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const words = ['EC-Karte', 'Ausweis', 'Bargeld', 'Gesundheitskarte', 'Führerschein'];
  const availableWords = words.filter(w => !Object.values(dragAnswers).includes(w));

  const handleBlankClick = (blankId: string) => {
    if (selectedWord) {
      setDragAnswers(prev => ({ ...prev, [blankId]: selectedWord }));
      setSelectedWord(null);
    } else if (dragAnswers[blankId]) {
      // Bấm vào từ đã điền để bỏ chọn
      const newAnswers = { ...dragAnswers };
      delete newAnswers[blankId];
      setDragAnswers(newAnswers);
    }
  };

  const Blank = ({ id, width }: { id: string, width: string }) => {
    const isFilled = !!dragAnswers[id];
    return (
      <span 
        onClick={() => handleBlankClick(id)}
        className={`inline-flex items-center justify-center min-h-[28px] cursor-pointer mx-1 border-b-2 font-black transition-all ${width} ${
          isFilled 
            ? 'border-theme-primary text-theme-primary bg-theme-primary/10 rounded-t-lg px-2' 
            : selectedWord ? 'border-amber-400 bg-amber-50 hover:bg-amber-100' : 'border-theme-dark/20 hover:border-theme-dark/50'
        }`}
      >
        {dragAnswers[id] || `(${id})`}
      </span>
    );
  };

  return (
    <div className="space-y-6 h-full flex flex-col justify-center max-w-4xl mx-auto">
      <div className="text-center mb-4 space-y-2">
        <h2 className="text-3xl font-display font-black text-theme-dark">Bài Tập Điền Từ</h2>
        <p className="text-theme-dark/60 font-bold">Hãy chọn từ bên dưới và bấm vào ô trống để điền</p>
      </div>
      
      <div className="flex flex-wrap gap-3 justify-center mb-6 min-h-[50px] p-4 bg-theme-cream/50 rounded-2xl border-2 border-theme-dark/5 border-dashed">
        {availableWords.map((w,i) => (
          <button 
            key={i} 
            onClick={() => setSelectedWord(selectedWord === w ? null : w)}
            className={`px-4 py-2 bg-white shadow-sm border-2 rounded-xl font-black transition-all cursor-pointer ${
              selectedWord === w ? 'border-theme-primary text-theme-primary scale-110 shadow-md' : 'border-theme-dark/10 text-theme-secondary hover:border-theme-secondary/50'
            }`}
          >
            {w}
          </button>
        ))}
        {availableWords.length === 0 && (
          <span className="text-emerald-500 font-black flex items-center gap-2"><CheckCircle2/> Bạn đã dùng hết các từ!</span>
        )}
      </div>

      <div className="slide-card p-10 font-medium text-lg leading-[2.5] text-theme-dark">
        Oh nein, ich habe meine <span className="inline-block border-b-2 border-theme-dark/20 px-4 font-black">Geldbörse</span> (a) verloren. Hoffentlich ruft der Finder mich an. Denn das Schlimmste ist: Außer den 250,- Euro <Blank id="b" width="w-24"/> waren auch meine Karten in dem Geldbeutel. Bei der Bank habe ich sofort angerufen und meine <Blank id="c" width="w-32"/> und meine <span className="inline-block border-b-2 border-theme-dark/20 px-4 font-black">Kreditkarte</span> (d) gesperrt. Nun muss ich noch bei der Krankenkasse anrufen, denn ich brauche ja eine neue <Blank id="f" width="w-40"/>... Aber ich brauche natürlich auch einen neuen <Blank id="h" width="w-24"/>. Nur meinen <Blank id="i" width="w-32"/> hatte ich zum Glück nicht dabei.
      </div>
    </div>
  );
};

const ListeningOrderGame = ({ playAudio, playingId }: { playAudio: any, playingId: any }) => {
  const defaultItems = [
    { id: '1', text: 'Jacke vergessen (Quên áo khoác)', correctOrder: 1 },
    { id: '2', text: 'Geldbörse ins Auto gelegt (Để ví vào xe)', correctOrder: 2 },
    { id: '3', text: 'Scheibe eingeschlagen (Đập vỡ kính)', correctOrder: 3 },
    { id: '4', text: 'Täter weggelaufen (Thủ phạm bỏ chạy)', correctOrder: 4 }
  ];

  const [items] = useState(() => [...defaultItems].sort(() => Math.random() - 0.5));
  const [clicks, setClicks] = useState<string[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCardClick = (id: string) => {
    if (showAnswer) return;
    setClicks(prev => {
      if (prev.includes(id)) {
        return prev.filter(c => c !== id);
      }
      if (prev.length < items.length) {
        return [...prev, id];
      }
      return prev;
    });
  };

  const checkAnswer = () => setShowAnswer(true);
  const reset = () => {
    setClicks([]);
    setShowAnswer(false);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center h-full">
      <div className="space-y-6">
        <button 
          onClick={() => playAudio("Ich hatte meine Jacke in der Wohnung vergessen und wollte sie holen. Meine Geldbörse habe ich ins Auto gelegt und das Auto abgesperrt. Als ich wieder unten war, habe ich einen Mann mit einem Hammer gesehen. Er hat die Autoscheibe eingeschlagen, die Geldbörse gestohlen und ist weggelaufen...", 'listen-2', 'de-DE', 'Zephyr')}
          className="w-full flex flex-col items-center justify-center space-y-6 p-8 md:p-12 slide-card hover:border-theme-primary transition-all group"
        >
          <div className="w-20 h-20 bg-theme-primary/10 rounded-full flex items-center justify-center text-theme-primary group-hover:scale-110 transition-transform">
            {playingId === 'listen-2' ? <CheckCircle2 size={32} /> : <Volume2 size={32} />}
          </div>
          <span className="font-black text-xl text-theme-dark">Nghe đoạn hội thoại</span>
        </button>

        <div className="flex gap-4 w-full">
          {clicks.length > 0 && !showAnswer && (
            <button onClick={reset} className="flex-1 py-3 bg-zinc-100 text-zinc-600 rounded-xl font-bold hover:bg-zinc-200 transition-colors">
              Làm lại
            </button>
          )}
          {clicks.length === items.length && !showAnswer && (
            <button onClick={checkAnswer} className="flex-1 py-3 bg-theme-primary text-white rounded-xl font-bold shadow-lg shadow-theme-primary/30 hover:bg-theme-primary/90 transition-colors">
              Xem đáp án
            </button>
          )}
          {showAnswer && (
            <button onClick={reset} className="w-full py-3 bg-theme-secondary text-white rounded-xl font-bold shadow-lg shadow-theme-secondary/30 hover:bg-theme-secondary/90 transition-colors">
              Thử lại từ đầu
            </button>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const clickIndex = clicks.indexOf(item.id);
          const isClicked = clickIndex !== -1;
          const displayNum = isClicked ? clickIndex + 1 : '?';
          
          let statusColor = "bg-white text-theme-dark/40 border-theme-dark/20";
          let cardStyle = isClicked ? "bg-theme-primary/5 border-theme-primary/20" : "bg-theme-cream border-theme-dark/5 hover:border-theme-primary/30";

          if (showAnswer) {
            const isCorrect = clickIndex + 1 === item.correctOrder;
            if (isCorrect && isClicked) {
              statusColor = "bg-emerald-500 text-white border-emerald-600";
              cardStyle = "bg-emerald-50 border-emerald-200";
            } else {
              statusColor = "bg-rose-500 text-white border-rose-600";
              cardStyle = "bg-rose-50 border-rose-200";
            }
          } else if (isClicked) {
            statusColor = "bg-theme-primary text-white border-theme-primary";
          }

          return (
            <div 
              key={item.id} 
              onClick={() => handleCardClick(item.id)}
              className={`p-4 rounded-xl font-bold text-theme-dark shadow-sm border transition-all cursor-pointer flex justify-between items-center ${cardStyle}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm border-2 font-black transition-colors ${statusColor}`}>
                  {displayNum}
                </div>
                <span>{item.text}</span>
              </div>
              
              {showAnswer && (
                <div className="text-xs font-black px-2 py-1 bg-white rounded-lg shadow-sm text-theme-dark/50">
                  Thứ tự đúng: {item.correctOrder}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Lektion21Presentation({ playAudio, playingId }: SlideProps) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const totalSlides = 36; // 18 original + 8 lassen slides + 10 writing/aussprache slides

  const nextSlide = () => {
    if (currentSlide === 17 || currentSlide === 25 || currentSlide === 35) {
      setCurrentSlide(-1);
    } else {
      setCurrentSlide((p) => Math.min(totalSlides - 1, p + 1));
    }
  };

  const prevSlide = () => setCurrentSlide((p) => Math.max(-1, p - 1));

  const renderSlide = () => {
    switch (currentSlide) {
      case -1:
        return (
          <div className="space-y-6 flex flex-col h-full max-w-5xl mx-auto py-4">
            <div className="text-center space-y-2 mb-4">
              <h2 className="text-4xl font-display font-black text-theme-dark uppercase tracking-wide">Bản Đồ Lộ Trình Lektion 21</h2>
              <p className="font-bold text-theme-dark/60">Hành trình 8 tiết học chuyên sâu</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full h-full pb-8">
              {/* Buổi 1 */}
              <div className="bg-theme-cream/30 p-6 rounded-3xl border-2 border-theme-primary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-primary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm">1</div>
                  BUỔI 1
                </h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => setCurrentSlide(0)}
                    className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-primary shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 ml-1" />
                    </div>
                    <div className="text-left flex-1">
                      <h4 className="font-black text-theme-dark group-hover:text-theme-primary transition-colors text-lg">Tiết 1: Der Einbruch</h4>
                      <p className="text-sm font-bold text-theme-dark/50 mt-1">Từ vựng & Ngữ cảnh (Bạn đang ở đây)</p>
                    </div>
                  </button>
                  {[
                    "Tiết 2: Kỹ năng nghe chi tiết",
                    "Tiết 3: Mô tả nhân dạng thủ phạm",
                    "Tiết 4: Từ hỏi 'welch-'"
                  ].map((title, i) => (
                    <div key={i} className="w-full bg-white/50 p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-dark/5 opacity-80 cursor-not-allowed">
                      <div className="w-12 h-12 rounded-full bg-theme-dark/5 text-theme-dark/30 flex items-center justify-center shrink-0">
                        <ShieldAlert className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-theme-dark/40 text-base">{title}</h4>
                        <p className="text-xs font-black text-theme-dark/30 uppercase tracking-widest mt-0.5">Đang khóa</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buổi 2 */}
              <div className="bg-theme-secondary/5 p-6 rounded-3xl border-2 border-theme-secondary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-secondary/5 rounded-bl-full -z-10" />
                <h3 className="text-xl font-black text-theme-secondary mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-theme-secondary text-white flex items-center justify-center text-sm">2</div>
                  BUỔI 2
                </h3>
                <div className="space-y-4">
                   {[
                    {title: "Tiết 5: Đại từ 'dieser/der'", locked: true},
                    {title: "Tiết 6: Động từ 'lassen'", locked: false, onClick: () => setCurrentSlide(18)},
                    {title: "Tiết 7: Dịch vụ & Video thực tế", locked: true},
                    {title: "Tiết 8: Writing & Tổng ôn", locked: false, onClick: () => setCurrentSlide(26)}
                  ].map((item, i) => (
                    item.locked ? (
                      <div key={i} className="w-full bg-white/50 p-4 rounded-2xl flex items-center gap-4 border-2 border-theme-dark/5 opacity-80 cursor-not-allowed">
                        <div className="w-12 h-12 rounded-full bg-theme-dark/5 text-theme-dark/30 flex items-center justify-center shrink-0">
                           <ShieldAlert className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                           <h4 className="font-bold text-theme-dark/40 text-base">{item.title}</h4>
                           <p className="text-xs font-black text-theme-dark/30 uppercase tracking-widest mt-0.5">Đang khóa</p>
                        </div>
                      </div>
                    ) : (
                      <button 
                         key={i}
                         onClick={item.onClick}
                         className="w-full bg-white p-4 rounded-2xl flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all border-2 border-theme-secondary shadow-sm group"
                      >
                         <div className="w-12 h-12 rounded-full bg-theme-secondary/10 text-theme-secondary flex items-center justify-center shrink-0">
                           <Play className="w-5 h-5 ml-1" />
                         </div>
                         <div className="text-left flex-1">
                           <h4 className="font-black text-theme-dark group-hover:text-theme-secondary transition-colors text-lg">{item.title}</h4>
                           <p className="text-sm font-bold text-theme-dark/50 mt-1">Từ vựng & Mẫu câu mới</p>
                         </div>
                      </button>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-[500px] space-y-8 text-center bg-[url('https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80')] bg-cover bg-center rounded-[48px] relative overflow-hidden">
            <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-sm"></div>
            <div className="relative z-10 space-y-4 p-8">
              <span className="px-4 py-2 bg-theme-primary text-white font-black uppercase tracking-widest rounded-full text-sm">Lektion 21</span>
              <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-tight">
                Ja genau, <br/>den meine ich.
              </h1>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-display font-black text-theme-dark">Ôn tập Lektion 20</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 slide-card space-y-4">
                <h3 className="font-black text-theme-primary">Luyện mẫu câu</h3>
                <p className="font-bold text-theme-dark/80">"Wie lernst du Deutsch?"</p>
                <div className="text-sm font-medium text-theme-dark/60">
                  <p>• Ich lerne Deutsch mit...</p>
                  <p>• Ich sehe Filme / höre Musik...</p>
                </div>
              </div>
              <div className="p-6 slide-card space-y-4">
                <h3 className="font-black text-theme-secondary">Thảo luận</h3>
                <p className="font-bold text-theme-dark/80">"Was ist für dich wichtig beim Lernen?"</p>
                <div className="text-sm font-medium text-theme-dark/60">
                  <p>• Für mich ist wichtig, dass...</p>
                  <p>• Ich muss jeden Tag lernen</p>
                </div>
              </div>
              <div className="p-6 slide-card space-y-4">
                <h3 className="font-black text-theme-accent">Luyện nói theo cặp</h3>
                <p className="font-bold text-theme-dark/80">"Wie hast du früher Deutsch gelernt?"</p>
                <div className="text-sm font-medium text-theme-dark/60">
                  <p>• Als ich in Vietnam war, habe ich...</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 2: // New Intro Video Slide
        return (
          <div className="space-y-6 p-8 h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center">Video Giới Thiệu Lektion 21</h2>
            <div className="slide-card p-10 bg-theme-cream border-2 border-theme-primary/10 space-y-8">
              <div className="flex justify-center">
                <button 
                  onClick={() => playAudio("Xin chào các bạn. Trong bài 21, chúng ta học cách sử dụng tiếng Đức trong các tình huống thực tế liên quan đến giấy tờ, thông tin cá nhân và thuật lại một sự việc. Các mục tiêu chính bao gồm: Kể lại một sự việc với các từ nối thời gian. Hỏi và mô tả chi tiết đồ vật. Đọc hiểu các tờ thông báo. Từ vựng về các loại giấy tờ. Ngữ pháp trọng tâm là đại từ để hỏi welch-, đại từ chỉ định dieser, và động từ lassen.", 'intro-video', 'vi-VN')}
                  className="w-24 h-24 bg-theme-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-theme-primary/30 hover:scale-105 transition-transform"
                >
                  {playingId === 'intro-video' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-theme-secondary text-lg">1. Kỹ năng Giao tiếp</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Thuật lại sự việc đã xảy ra</li>
                    <li>Sử dụng tín hiệu thời gian</li>
                    <li>Mô tả đồ vật ("Können Sie das beschreiben?")</li>
                    <li>Diễn đạt sự quên ("Ich kann mich nicht erinnern")</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-black text-theme-accent text-lg">2. Kỹ năng Đọc & Từ vựng</h4>
                  <ul className="text-sm font-bold text-theme-dark/70 space-y-2 list-disc pl-5">
                    <li>Đọc hiểu tờ rơi (Flyer), thông báo</li>
                    <li>Chủ đề "Dokumente" (Giấy tờ tùy thân)</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-theme-dark/5 mt-4 text-center">
                <h4 className="font-black text-theme-primary mb-3">3. Ngữ pháp trọng tâm</h4>
                <ul className="text-sm font-bold text-theme-dark/70 flex max-md:flex-col justify-center gap-6">
                  <li>• Frageartikel <b>"welch-"</b></li>
                  <li>• Demonstrativpronomen</li>
                  <li>• Động từ <b>"lassen"</b></li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 3: // Tình huống (Old slide 2)
        return (
          <div className="flex gap-8 items-center h-full">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-display font-black text-theme-dark">Tình Huống Trong Hình</h2>
              <h3 className="text-2xl font-bold text-theme-primary italic">Das darf doch alles nicht wahr sein!</h3>
              <p className="text-theme-dark/80 leading-relaxed font-medium text-lg">Bạn thấy gì trong ảnh?<br/>Anh ấy đang làm gì?<br/>Người đàn ông đang gọi điện, có thể có sự cố xảy ra với xe hơi.</p>
            </div>
            <div className="flex-1 rounded-[32px] overflow-hidden relative shadow-xl min-h-[400px]">
              <img 
                src="/Lektion 21_A2_Kurchbuch_p1.png" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&q=80";
                }}
                alt="Lektion 21 Buch Seite 1" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-black text-theme-dark">Ý Nghĩa và Cách Dùng</h2>
            <div className="p-10 slide-card">
              <h3 className="text-3xl font-black text-theme-primary mb-6">Das darf doch alles nicht wahr sein!</h3>
              <p className="text-theme-dark/80 leading-relaxed font-bold text-lg mb-8">
                Có nghĩa là "Điều này không thể là sự thật được!". Đây là câu cảm thán bày tỏ sự ngạc nhiên, thất vọng hoặc không tin nổi điều gì đó.
              </p>
              <div className="bg-theme-cream p-6 rounded-2xl border-2 border-theme-primary/10">
                <span className="font-black text-theme-dark/50 uppercase tracking-widest text-xs mb-2 block">Ví dụ sử dụng</span>
                <p className="text-theme-dark font-medium">Khi gặp sự cố bất ngờ: xe hỏng, mất đồ, tin xấu... Bạn có thể thốt lên câu này!</p>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-12 p-8 h-full flex flex-col justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-display font-black text-theme-dark">Câu Hỏi Thảo Luận</h2>
              <p className="text-theme-dark/60 font-medium mt-2">Suy nghĩ và trả lời về tình huống trong hình</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 slide-card space-y-4">
                <div className="w-12 h-12 bg-theme-primary/10 rounded-full flex items-center justify-center text-theme-primary font-black text-xl">1</div>
                <p className="text-theme-dark font-bold text-lg">Sehen Sie das Foto an. Was meinen Sie? Was ist hier passiert?</p>
                <p className="text-theme-dark/60 font-medium">Hãy quan sát bức ảnh và cho biết bạn nghĩ điều gì đã xảy ra?</p>
              </div>
              <div className="p-8 slide-card space-y-4">
                <div className="w-12 h-12 bg-theme-secondary/10 rounded-full flex items-center justify-center text-theme-secondary font-black text-xl">2</div>
                <p className="text-theme-dark font-bold text-lg">Wen ruft Herr Abelein an?</p>
                <p className="text-theme-dark/60 font-medium">Ông Abelein đang gọi điện cho ai? Thảo luận theo nhóm hoặc viết câu trả lời ngắn.</p>
              </div>
            </div>
          </div>
        );
      case 6:
      case 7:
        const isSlide6 = currentSlide === 6;
        const vocabs = isSlide6 ? [
          { word: "der Einbruch", trans: "Vụ đột nhập, trộm cắp" },
          { word: "der Autounfall", trans: "Tai nạn xe hơi" },
          { word: "die Polizei / Notarzt", trans: "Cảnh sát / Cấp cứu" },
          { word: "die Versicherung", trans: "Bảo hiểm" }
        ] : [
          { word: "der Ausweis", trans: "Giấy tờ tùy thân" },
          { word: "die EC-Karte", trans: "Thẻ ngân hàng" },
          { word: "das Bargeld", trans: "Tiền mặt" },
          { word: "der Führerschein", trans: "Bằng lái xe" }
        ];
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">{isSlide6 ? 'Từ Vựng Liên Quan' : 'Bildlexikon - Từ vựng qua hình ảnh'}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {vocabs.map((v, i) => (
                <div key={i} className="p-6 slide-card text-center space-y-4 flex flex-col items-center justify-center group hover:bg-theme-primary/5">
                  <button 
                    onClick={() => playAudio(v.word, `vocab-${currentSlide}-${i}`)}
                    className="w-16 h-16 bg-theme-cream rounded-full flex items-center justify-center text-theme-primary shadow-sm hover:scale-110 transition-transform"
                  >
                    {playingId === `vocab-${currentSlide}-${i}` ? <CheckCircle2 className="text-emerald-500" /> : <Volume2 />}
                  </button>
                  <div>
                    <h4 className="font-black text-theme-dark text-lg group-hover:text-theme-primary transition-colors">{v.word}</h4>
                    <p className="text-xs font-bold text-theme-dark/60 mt-1">{v.trans}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 8:
        return (
          <div className="h-full flex flex-col">
            <div className="mb-6">
              <h2 className="text-3xl font-display font-black text-theme-dark">Từ Vựng Qua Trò Chơi</h2>
              <p className="text-theme-dark/60 font-medium">Alibi-Spiel GAME: Deutsch lernen mit Spaß!</p>
            </div>
            <div className="flex-1 slide-card overflow-hidden">
               <div className="h-full w-full overflow-y-auto custom-scrollbar">
                 <AlibiGame onBack={() => {}} playAudio={playAudio} playingId={playingId} />
               </div>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Luyện Nghe Chi Tiết</h2>
            <div className="flex items-center justify-center gap-2 text-theme-secondary">
              <Volume2 size={20} />
              <p className="font-bold text-sm tracking-wide">FILE ÂM THANH: 22_Lektion21_1b.mp3</p>
            </div>
            <div className="slide-card p-10 space-y-6">
              <button 
                onClick={() => playAudio("Hallo Polizei. Ich rufe aus Schwachhausen an. Mein Name ist Abelein. Bei mir wurde ins Auto eingebrochen! Ich war nur kurz oben in der Wohnung und habe meine Jacke vergessen...", 'listen-1', 'de-DE', 'Zephyr')}
                className="w-24 h-24 bg-theme-primary text-white rounded-full mx-auto flex items-center justify-center shadow-xl shadow-theme-primary/30 hover:scale-105 transition-transform"
              >
                {playingId === 'listen-1' ? <CheckCircle2 size={40} /> : <Play size={40} className="ml-2" />}
              </button>
              <div className="text-left space-y-4 bg-theme-cream p-6 rounded-2xl">
                <h4 className="font-black text-theme-dark text-lg border-b border-theme-dark/10 pb-2">Câu hỏi thảo luận nhanh:</h4>
                <ul className="space-y-3 font-bold text-theme-dark/80 list-disc pl-5">
                  <li>Ông Abelein đang ở đâu?</li>
                  <li>Có thấy kẻ trộm không?</li>
                  <li>Bị mất gì?</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 10:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Nghe Lần 2 & Sắp Xếp</h2>
            <p className="text-theme-dark/60 font-medium">Lắng nghe lại trích đoạn và hãy <b className="text-theme-primary">sắp xếp theo thứ tự (1-4)</b> các sự việc xảy ra ở các thẻ bên phải nhé!</p>
            <ListeningOrderGame playAudio={playAudio} playingId={playingId} />
          </div>
        );
      case 11:
        return (
          <div className="space-y-6 flex flex-col h-full max-w-5xl w-full mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-black text-theme-dark">Trò Chơi Kết Nối Câu</h2>
            <MatchingGame />
          </div>
        );
      case 12:
        return (
          <div className="space-y-10 p-8 h-full flex flex-col justify-center items-center text-center">
            <div className="w-24 h-24 bg-theme-accent/10 text-theme-accent rounded-[32px] flex items-center justify-center mb-4">
              <ShieldAlert size={48} />
            </div>
            <h2 className="text-5xl font-display font-black text-theme-dark">Góc Kể Chuyện</h2>
            <h3 className="text-3xl font-bold text-theme-secondary">Ist Ihnen so etwas auch schon einmal passiert?</h3>
            <p className="text-theme-dark/80 max-w-2xl text-xl leading-relaxed font-medium">
              Bạn đã từng bị mất đồ, bị trộm, hoặc gặp tình huống tương tự khi đi du lịch hay trong cuộc sống hàng ngày chưa? <br/><br/>
              <b>Hãy chia sẻ câu chuyện của bạn!</b>
            </p>
          </div>
        );
      case 13:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark">Cấu Trúc Mẫu Câu</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="slide-card p-8 space-y-6">
                <span className="font-black text-theme-primary uppercase tracking-widest text-xs">Mở bài</span>
                <p className="text-2xl font-bold text-theme-dark">Ich war im Urlaub in...</p>
                <p className="text-theme-dark/60 font-medium italic">(Tôi đã đi nghỉ ở...)</p>
              </div>
              <div className="slide-card p-8 space-y-6">
                <span className="font-black text-theme-secondary uppercase tracking-widest text-xs">Sự việc</span>
                <p className="text-2xl font-bold text-theme-dark">Jemand hat meine... gestohlen.</p>
                <p className="text-theme-dark/60 font-medium italic">(Ai đó đã lấy trộm... của tôi)</p>
              </div>
              <div className="slide-card p-8 md:col-span-2 space-y-4">
                <span className="font-black text-theme-accent uppercase tracking-widest text-xs">Từ khóa hỗ trợ</span>
                <div className="flex gap-4">
                  <div className="bg-theme-cream px-4 py-2 rounded-xl font-bold text-theme-dark border border-theme-dark/5">Plötzlich (Bỗng nhiên)</div>
                  <div className="bg-theme-cream px-4 py-2 rounded-xl font-bold text-theme-dark border border-theme-dark/5">Zum Glück (May mắn thay)</div>
                  <div className="bg-theme-cream px-4 py-2 rounded-xl font-bold text-theme-dark border border-theme-dark/5">Leider (Rất tiếc)</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 14:
        return <DragDropGame />;
      case 15:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-display font-black text-theme-dark text-center mb-4">Tổng Kết Từ Vựng</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { w: 'AUSWEIS', t: 'Chứng minh thư' },
                { w: 'EC-KARTE', t: 'Thẻ ngân hàng' },
                { w: 'BARGELD', t: 'Tiền mặt' },
                { w: 'FÜHRERSCHEIN', t: 'Bằng lái xe' }
              ].map((item, i) => (
                <div key={i} className="slide-card p-6 text-center space-y-4 hover:-translate-y-2 transition-transform cursor-pointer">
                  <div className="w-16 h-16 bg-theme-primary/10 rounded-full mx-auto flex items-center justify-center">
                    <Volume2 className="text-theme-primary" />
                  </div>
                  <h4 className="font-black text-lg text-theme-dark">{item.w}</h4>
                  <p className="font-bold text-xs text-theme-dark/60 uppercase">{item.t}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 16:
        return (
          <div className="space-y-8 p-8 h-full flex flex-col justify-center text-center">
            <h2 className="text-5xl font-display font-black text-theme-dark mb-4">Hausaufgaben</h2>
            <div className="slide-card p-10 max-w-2xl mx-auto space-y-8">
              <div className="space-y-3">
                <h4 className="font-black text-theme-primary text-xl">1. Luyện tập từ vựng</h4>
                <p className="font-medium text-theme-dark/80">Viết 3 câu mô tả tình huống sử dụng: Ausweis, EC-Karte, Bargeld...</p>
              </div>
              <div className="h-px bg-theme-dark/10 w-full"></div>
              <div className="space-y-3">
                <h4 className="font-black text-theme-secondary text-xl">2. Ôn luyện nghe & nói</h4>
                <p className="font-medium text-theme-dark/80">Chuẩn bị kể lại câu chuyện của Herrn Abelein bằng tiếng Đức cho tiết sau.</p>
              </div>
            </div>
          </div>
        );
      case 17:
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-center">
            <div className="w-32 h-32 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-200">
              <CheckCircle2 size={64} />
            </div>
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-display font-black text-theme-dark">Tổng Kết Tiết Học</h2>
              <p className="text-xl font-bold text-theme-dark/60 uppercase tracking-widest">Gut gemacht! Bạn đã làm rất tốt!</p>
            </div>
            <div className="slide-card p-8 text-left space-y-6 max-w-lg w-full bg-white/90 backdrop-blur-sm border-2 border-white shadow-xl mx-auto">
              <h4 className="font-black text-theme-dark">Mục tiêu đã đạt được:</h4>
              <ul className="space-y-4 font-bold text-theme-dark/80 list-none">
                <li className="flex gap-3"><CheckCircle2 className="text-emerald-500 shrink-0"/> Nhận diện tình huống trộm cắp</li>
                <li className="flex gap-3"><CheckCircle2 className="text-emerald-500 shrink-0"/> Học từ vựng giấy tờ tùy thân</li>
                <li className="flex gap-3"><CheckCircle2 className="text-emerald-500 shrink-0"/> Thực hành nghe và kể chuyện</li>
              </ul>
            </div>
          </div>
        );
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
      case 24:
      case 25:
          return renderLassenSlide(currentSlide);
      case 26:
      case 27:
      case 28:
      case 29:
      case 30:
      case 31:
      case 32:
      case 33:
      case 34:
      case 35:
          return renderWritingSlide(currentSlide);
      default:
        return null;
    }
  };

  const renderLassenSlide = (idx: number) => {
    switch (idx) {
      case 18:
        return (
          <div className="flex flex-col items-center justify-center text-center h-full space-y-6 pt-12 scale-90 md:scale-100">
             <h2 className="text-4xl md:text-6xl font-black text-theme-dark tracking-tighter leading-none bg-white/60 p-6 rounded-3xl backdrop-blur-sm shadow-xl border-2 border-white">
               HỌC TIẾNG ĐỨC VỚI <br/>
               <span className="text-amber-500">ĐỘNG TỪ „LASSEN“</span>
             </h2>
             <p className="font-bold text-theme-dark uppercase tracking-widest text-sm bg-white shadow-sm px-6 py-3 rounded-full border-2 border-white backdrop-blur-md">
               Bài tập luyện tập cơ bản
             </p>
             <p className="text-lg font-bold text-theme-dark/80 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl max-w-xl mx-auto mt-8 border border-white">
               Tổng quan về ngữ pháp, các ví dụ mẫu và cách ứng dụng thực tế.
             </p>
          </div>
        );
      case 19:
        return (
          <div className="flex flex-col justify-center h-full space-y-8 px-2 md:px-12 py-10 scale-90 origin-top md:scale-100 md:origin-top text-center md:text-left">
              <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md px-6 py-4 rounded-3xl shadow-sm border-2 border-white w-fit mx-auto md:mx-0">
                <h2 className="text-3xl md:text-4xl font-black text-amber-600 tracking-tight leading-tight uppercase font-display">
                   NGỮ PHÁP: „LASSEN“ + ĐỘNG TỪ NGUYÊN THỂ
                </h2>
              </div>
              <div className="p-8 bg-white/90 backdrop-blur-xl rounded-[2rem] border-4 border-amber-100 shadow-xl shadow-amber-500/10 max-w-4xl">
                 <p className="text-lg md:text-xl font-bold text-theme-dark leading-relaxed mb-6">
                   Ý nghĩa cơ bản: <span className="text-amber-600 bg-amber-50 px-3 py-1 rounded-xl shadow-inner border border-amber-100 inline-block mt-2 md:mt-0">Để/Nhờ ai đó làm việc gì cho mình (etwas von jemand anderem machen lassen)</span>
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md border-2 border-amber-50 flex items-center gap-4">
                       <span className="text-3xl md:text-4xl shrink-0">🚪</span>
                       <div>
                         <p className="font-black text-theme-dark text-base md:text-lg flex items-center gap-2">einbauen <button onClick={() => playAudio('einbauen', 'einbauen')}><Volume2 size={16} className="text-theme-primary" /></button></p>
                         <p className="font-black text-theme-dark text-base md:text-lg flex items-center gap-2">sichern <button onClick={() => playAudio('sichern', 'sichern')}><Volume2 size={16} className="text-theme-primary" /></button></p>
                         <p className="text-xs md:text-sm font-medium mt-1 text-theme-dark/60 border-t pt-1 border-theme-dark/10">Lắp đặt / Bảo vệ</p>
                       </div>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md border-2 border-amber-50 flex items-center gap-4">
                       <span className="text-3xl md:text-4xl shrink-0">🪣</span>
                       <div>
                         <p className="font-black text-theme-dark text-base md:text-lg flex items-center gap-2">putzen <button onClick={() => playAudio('putzen', 'putzen')}><Volume2 size={16} className="text-theme-primary" /></button></p>
                         <p className="font-black text-theme-dark text-base md:text-lg flex items-center gap-2">helfen <button onClick={() => playAudio('helfen', 'helfen')}><Volume2 size={16} className="text-theme-primary" /></button></p>
                         <p className="text-xs md:text-sm font-medium mt-1 text-theme-dark/60 border-t pt-1 border-theme-dark/10">Lau dọn / Giúp đỡ</p>
                       </div>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md border-2 border-amber-50 flex items-center gap-4">
                       <span className="text-3xl md:text-4xl shrink-0">🔧</span>
                       <div>
                         <p className="font-black text-theme-dark text-base md:text-lg flex items-center gap-2">reparieren <button onClick={() => playAudio('reparieren', 'reparieren')}><Volume2 size={16} className="text-theme-primary" /></button></p>
                         <p className="font-black text-theme-dark text-base md:text-lg flex items-center gap-2">wechseln <button onClick={() => playAudio('wechseln', 'wechseln')}><Volume2 size={16} className="text-theme-primary" /></button></p>
                         <p className="text-xs md:text-sm font-medium mt-1 text-theme-dark/60 border-t pt-1 border-theme-dark/10">Sửa chữa / Thay thế</p>
                       </div>
                    </div>
                 </div>
              </div>
          </div>
        );
      case 20:
        return (
          <div className="flex flex-col h-full space-y-6 p-2 md:p-8 pt-10 scale-90 origin-top md:scale-100 md:origin-top">
             <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-3xl shadow-sm border-2 border-white w-fit">
                  <h2 className="text-3xl md:text-4xl font-black text-rose-500 tracking-tight font-display uppercase">
                     Bài tập 10: Ông Schrader đang làm gì?
                  </h2>
                  <button onClick={() => playAudio('Übung 10: Was macht Herr Schrader?', 'u10')} className="p-2 bg-rose-100 text-rose-600 rounded-full hover:bg-rose-200">
                    <Volume2 size={24} />
                  </button>
                </div>
                <p className="text-lg font-bold text-theme-dark/90 bg-white/80 px-6 py-3 rounded-2xl inline-block backdrop-blur-md shadow-sm border border-white">
                   Ông Schrader tự làm các việc gì? Việc gì ông ấy thuê/nhờ người khác làm? Hãy theo dõi sự khác biệt. (Was macht Herr Schrader selbst? Was lässt er machen?)
                </p>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 flex-1">
                {[
                   { icon: '✂️', text: 'Haare schneiden', vi: 'Cắt tóc' },
                   { icon: '🚗', text: 'Auto waschen', vi: 'Rửa xe' },
                   { icon: '🍳', text: 'Kochen', vi: 'Nấu ăn' },
                   { icon: '🧹', text: 'Wohnung putzen', vi: 'Dọn nhà' }
                ].map((item, idx) => (
                   <div key={idx} className="bg-white/95 backdrop-blur-md p-6 rounded-[2rem] shadow-xl shadow-rose-500/5 border-4 border-white flex flex-col items-center justify-center text-center relative group">
                      <button onClick={() => playAudio(item.text, `u10-${idx}`)} className="absolute top-4 right-4 text-theme-dark/30 hover:text-theme-primary">
                        <Volume2 size={20} />
                      </button>
                      <div className="w-16 h-16 bg-rose-50 rounded-[1.5rem] flex items-center justify-center text-3xl mb-4 shadow-inner border border-rose-100">
                         {item.icon}
                      </div>
                      <h4 className="font-black text-lg text-theme-dark leading-tight">{item.text}</h4>
                      <p className="text-xs font-bold text-theme-dark/50 uppercase mt-2 border-t border-theme-dark/10 pt-2 w-full">{item.vi}</p>
                   </div>
                ))}
             </div>
          </div>
        );
      case 21:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-2 md:p-8 space-y-8 pt-10 scale-90 origin-top md:scale-100 md:origin-top">
             <div className="space-y-4">
                <div className="flex items-center justify-center gap-4 bg-white/50 px-8 py-4 rounded-3xl border border-white">
                  <h2 className="text-3xl md:text-4xl font-black text-orange-600 font-display uppercase tracking-tighter drop-shadow-sm">
                     Liên hệ Bản Thân: Bài tập 11
                  </h2>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/70 px-8 py-4 rounded-2xl backdrop-blur-md border-[3px] border-white shadow-md max-w-2xl mx-auto flex-col md:flex-row">
                   <p className="text-base md:text-lg font-bold text-orange-900/80">
                      Nếu bạn có nhiều tiền – Bạn sẽ tự làm việc gì? Việc gì bạn sẽ thuê người làm? <br/>
                      <span className="text-sm font-medium mt-2 text-theme-dark/70">(Sie haben viel Geld – Was machen Sie selbst? Was lassen Sie machen?)</span>
                   </p>
                   <button onClick={() => playAudio('Sie haben viel Geld – Was machen Sie selbst? Was lassen Sie machen?', 'u11')} className="p-2 shrink-0 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200">
                      <Volume2 size={24} />
                   </button>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                <div className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-6 md:p-8 shadow-xl shadow-orange-500/10 border-4 border-white relative">
                   <h3 className="text-2xl font-black text-emerald-600 mb-4 uppercase tracking-widest bg-emerald-50 py-2 rounded-xl flex items-center justify-center gap-2">
                     Điều tôi tự làm <button onClick={() => playAudio('Das mache ich selbst', 'mache-selbst')}><Volume2 size={20} className="text-emerald-500" /></button>
                   </h3>
                   <p className="text-base font-bold text-theme-dark/70 leading-relaxed border-b border-theme-dark/10 pb-4 mb-4">
                      Das mache ich selbst: Kochen, Einkaufen, Sport treiben, Gartenarbeit...
                   </p>
                   <p className="text-sm text-theme-dark/60 font-medium">Nấu ăn, đi chợ, thể thao, làm vườn – Những việc mang lại niềm vui.</p>
                </div>
                
                <div className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-6 md:p-8 shadow-xl shadow-orange-500/10 border-4 border-white relative">
                   <h3 className="text-2xl font-black text-rose-600 mb-4 uppercase tracking-widest bg-rose-50 py-2 rounded-xl flex items-center justify-center gap-2">
                     Điều tôi thuê làm <button onClick={() => playAudio('Das lasse ich machen', 'lasse-machen')}><Volume2 size={20} className="text-rose-500" /></button>
                   </h3>
                   <p className="text-base font-bold text-theme-dark/70 leading-relaxed border-b border-theme-dark/10 pb-4 mb-4">
                      Das lasse ich machen: Wohnung putzen, Auto waschen, Haare schneiden...
                   </p>
                   <p className="text-sm text-theme-dark/60 font-medium">Dọn nhà, rửa xe, cắt tóc, sửa chữa – Những việc có thể giao cho người khác.</p>
                </div>
             </div>
          </div>
        );
      case 22:
        return (
          <div className="flex flex-col h-full justify-center space-y-6 p-2 md:p-10 pt-10 scale-90 origin-top md:scale-100 md:origin-top">
             <div className="space-y-4 bg-white/85 backdrop-blur-2xl p-6 rounded-[2.5rem] border-4 border-white shadow-xl shadow-amber-500/10">
                 <div className="flex items-center gap-4">
                   <h2 className="text-3xl font-black text-theme-dark uppercase font-display tracking-tight flex-1">
                      Luyện Nghe: Bài 12a - <span className="text-amber-600 block md:inline">Vòng Tròn Trao Đổi (Tauschringe)</span>
                   </h2>
                   <button onClick={() => playAudio('Tauschringe', 'tauschringe')} className="p-2 bg-amber-100 text-amber-600 rounded-full hover:bg-amber-200 shrink-0"><Volume2 size={24}/></button>
                 </div>
                 <p className="text-base font-bold text-theme-dark/70">
                    Phóng sự hôm nay: Các hội nhóm trao đổi – Hỗ trợ hàng xóm bằng cách trao đổi thời gian làm việc. Hãy nghe và trả lời các câu hỏi: <br/>
                    <span className="text-sm border-t border-theme-dark/10 pt-2 block mt-2">(Unsere Reportage heute: Tauschringe. Hören Sie zu und beantworten Sie die Fragen:)</span>
                 </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                   { q: "Gibt es viele Tauschringe?", vi: "Có nhiều nhóm Tauschring ở Đức không?", sub: "Gibt es viele oder nur wenige Tauschringe in Deutschland?" },
                   { q: "Wer hilft sich?", vi: "Ai giúp đỡ ai?", sub: "Helfen sich Nachbarn oder Freunde gegenseitig bei den Tauschringen?" },
                   { q: "Was wird getauscht?", vi: "Trao đổi gì?", sub: "Wird Geld oder Arbeitszeit getauscht? Ist die Hilfe kostenlos?" }
                ].map((item, idx) => (
                   <div key={idx} className="bg-gradient-to-br from-amber-400 to-amber-500 text-white rounded-[2rem] p-6 shadow-xl shadow-amber-500/20 hover:-translate-y-1 transition-transform border-[3px] border-amber-300 relative group">
                      <button onClick={() => playAudio(item.q + ". " + item.sub, `q12a-${idx}`)} className="absolute top-4 right-4 text-white/50 hover:text-white z-10"><Volume2 size={24}/></button>
                      <h3 className="text-xl font-black mb-1 leading-tight drop-shadow-md pr-8">{item.q}</h3>
                      <p className="text-xs font-bold text-white/80 uppercase tracking-widest mb-4 border-b border-white/20 pb-2">{item.vi}</p>
                      <p className="font-bold leading-relaxed opacity-90 text-sm">{item.sub}</p>
                   </div>
                ))}
             </div>
          </div>
        );
      case 23:
        return (
          <div className="flex flex-col md:flex-row h-full items-center p-2 md:p-8 gap-6 pt-10 scale-90 origin-top md:scale-100 md:origin-top">
             <div className="flex-1 space-y-6 bg-white p-8 rounded-[3rem] shadow-xl shadow-slate-200/50 border-4 border-white">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-800 font-display uppercase tracking-tighter">
                     Luyện Nghe Chi Tiết <br/> <span className="text-indigo-500">Bài 12b</span>
                  </h2>
                </div>
                <p className="text-lg font-bold text-slate-600 leading-relaxed">
                   Họ trao đổi/cung cấp dịch vụ gì? Hãy nghe và điền vào bảng. <br/>
                   <span className="text-sm border-t border-slate-100 pt-2 mt-2 block">(Was bieten die Tauscher an? Wobei helfen sie? Füllen Sie die Tabelle aus.)</span>
                </p>
                <button onClick={() => playAudio('Was bieten die Tauscher an? Wobei helfen sie?', '12b')} className="flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl font-bold hover:bg-indigo-100">
                  <Volume2 size={20} /> Nghe câu hỏi
                </button>
             </div>

             <div className="flex-1 flex flex-col gap-6 w-full">
                <div className="bg-gradient-to-r from-rose-100 to-rose-50 text-rose-900 py-8 px-6 rounded-[2rem] shadow-sm border-2 border-white text-center transform hover:scale-[1.02] transition-transform">
                   <h3 className="text-xl font-black mb-2 opacity-60 uppercase tracking-widest text-xs flex items-center justify-center gap-2">Người Phụ Nữ (Die Dame) <button onClick={() => playAudio('Die Dame', 'dame')}><Volume2 size={16}/></button></h3>
                   <p className="text-2xl font-black flex items-center justify-center gap-2">
                     Babysitting anbieten <button onClick={() => playAudio('Babysitting anbieten', 'baby')}><Volume2 size={20}/></button>
                   </p>
                   <p className="text-sm font-bold opacity-70 mt-2">(Trông trẻ)</p>
                </div>
                <div className="bg-gradient-to-r from-indigo-100 to-indigo-50 text-indigo-900 py-8 px-6 rounded-[2rem] shadow-sm border-2 border-white text-center transform hover:scale-[1.02] transition-transform">
                   <h3 className="text-xl font-black mb-2 opacity-60 uppercase tracking-widest text-xs flex items-center justify-center gap-2">Người Đàn Ông (Der Mann) <button onClick={() => playAudio('Der Mann', 'mann')}><Volume2 size={16}/></button></h3>
                   <p className="text-2xl font-black flex items-center justify-center gap-2">
                     Angebot - ? <button onClick={() => playAudio('Angebot', 'angebot')}><Volume2 size={20}/></button>
                   </p>
                </div>
             </div>
          </div>
        );
      case 24:
        return (
          <div className="flex flex-col md:flex-row h-full items-center p-2 md:p-8 gap-8 pt-10 scale-90 origin-top md:scale-100 md:origin-top">
             <div className="flex-1 bg-white/80 p-6 rounded-3xl backdrop-blur-md shadow-lg border-2 border-white text-center md:text-left">
                 <h2 className="text-4xl md:text-6xl font-black text-theme-dark font-display uppercase tracking-tighter drop-shadow-sm leading-tight">
                    TỔNG KẾT <br/>
                    <span className="text-rose-500 text-3xl">LASSEN</span><br/>
                    <span className="text-xl font-bold tracking-widest">(CHO PHÉP/NHỜ VẢ)</span>
                 </h2>
             </div>
             <div className="flex-1 bg-white/95 backdrop-blur-3xl p-6 md:p-8 rounded-[3rem] shadow-2xl shadow-rose-900/10 border-4 border-white">
                <ul className="space-y-4">
                   {[
                      { de: "„lassen\" = von anderen machen lassen", vi: "Nhờ người khác làm việc cho mình" },
                      { de: "Korrekte Verbformen anwenden", vi: "Chia động từ lassen đúng cách" },
                      { de: "Anwendung bei Reparaturen", vi: "Hay dùng trong việc sửa chữa" },
                      { de: "Haushalt und Dienstleistungen", vi: "Dịch vụ và việc nhà (Haushalt)" }
                   ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 hover:bg-rose-50 p-2 rounded-xl transition-colors">
                         <div className="w-8 h-8 shrink-0 bg-theme-dark text-white rounded-full flex items-center justify-center font-bold">{idx+1}</div>
                         <div className="flex-1">
                           <p className="text-base font-bold text-theme-dark leading-tight pt-1 flex items-center gap-2">
                             {item.de} 
                             <button onClick={() => playAudio(item.de, `sum-${idx}`)}><Volume2 size={16} className="text-theme-primary"/></button>
                           </p>
                           <p className="text-sm mt-1 text-theme-dark/60 font-medium">{item.vi}</p>
                         </div>
                      </li>
                   ))}
                </ul>
             </div>
          </div>
        );
      case 25:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/10 border-8 border-amber-100 hover:scale-110 transition-transform">
                <span className="text-6xl">🎓</span>
             </div>
             <h2 className="text-5xl md:text-7xl font-black text-theme-dark font-display uppercase tracking-tighter p-8 bg-white/50 backdrop-blur-md rounded-[3rem] border-4 border-white shadow-xl flex flex-col gap-2 relative">
                CẢM ƠN! <br/> <span className="text-amber-500">VIELEN DANK!</span>
                <button onClick={() => playAudio('Vielen Dank', 'vd-lassen')} className="absolute top-4 right-4 text-theme-primary"><Volume2 size={32}/></button>
             </h2>
          </div>
        );
      default:
        return null;
    }
  };

  const renderWritingSlide = (idx: number) => {
    switch (idx) {
      case 26:
        return (
          <div className="flex flex-col items-center justify-center text-center h-full space-y-6 pt-12">
             <div className="w-24 h-24 bg-zinc-100 border-4 border-zinc-800 shadow-[4px_4px_0_0_#27272a] rounded-xl flex items-center justify-center text-4xl mb-4 transform -rotate-3">
               📝
             </div>
             <p className="font-bold text-zinc-600 uppercase tracking-widest text-sm bg-white border-2 border-zinc-200 px-6 py-2 rounded-full">
               Sprachtraining Deutsch
             </p>
             <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter leading-tight bg-white p-6 border-4 border-zinc-800 shadow-[8px_8px_0_0_#27272a] transform rotate-1 rounded-2xl max-w-2xl flex items-center gap-4">
               <span>TRAINING:<br/>Schreiben & Aussprache</span>
               <button onClick={() => playAudio('Sprachtraining Deutsch. Schreiben und Aussprache im Deutschunterricht', 'l21-s26')} className="text-zinc-400 hover:text-zinc-800 flex-shrink-0 transition-colors"><Volume2 size={40}/></button>
             </h2>
             <p className="text-lg font-bold text-zinc-700 max-w-xl mx-auto mt-8 bg-zinc-50 border-2 border-dashed border-zinc-400 p-4 rounded-xl">
               Huấn luyện kĩ năng viết sáng tạo và phát âm chuẩn tiếng Đức. 
             </p>
          </div>
        );
      case 27:
        return (
          <div className="flex flex-col justify-center h-full space-y-8 px-2 md:px-12 py-10">
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 bg-white border-4 border-zinc-800 shadow-[6px_6px_0_0_#27272a] px-6 py-4 rounded-2xl inline-flex items-center gap-4 w-fit tracking-tight leading-tight transform -rotate-1">
                 Schreiben Training (Kỹ năng Viết)
                 <span className="text-4xl">✏️</span>
                 <button onClick={() => playAudio('Schreiben Training', 'l21-s27')} className="text-zinc-300 hover:text-zinc-600 ml-2"><Volume2 size={28}/></button>
              </h2>
              <div className="space-y-6 max-w-3xl">
                 <div className="p-6 bg-white rounded-xl border-4 border-zinc-800 shadow-[4px_4px_0_0_#27272a] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#27272a] transition-all">
                    <p className="text-xl font-bold text-zinc-800 flex items-start gap-3">
                      <span className="px-2 py-1 bg-zinc-200 rounded-md shrink-0">Bối cảnh:</span> 
                      <div>
                         Lauras Freundin hatte gestern Nacht einen Einbruch erlebt.<br/>
                         <span className="text-base text-zinc-500 font-medium">Bạn của Laura đã gặp một vụ trộm đêm qua.</span>
                      </div>
                      <button onClick={() => playAudio('Lauras Freundin hatte gestern Nacht einen Einbruch erlebt.', 'l21-s27-1')} className="text-zinc-300 hover:text-zinc-600 mt-1 shrink-0"><Volume2 size={24}/></button>
                    </p>
                 </div>
                 <div className="p-6 bg-amber-50 rounded-xl border-4 border-zinc-800 shadow-[4px_4px_0_0_#27272a] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#27272a] transition-all">
                    <p className="text-xl font-bold text-zinc-800 flex items-start gap-3">
                      <span className="px-2 py-1 bg-amber-200 rounded-md shrink-0">Mục tiêu:</span> 
                      <div>
                         Schreiben Sie eine spannende Geschichte über eine Freundin anhand von Bildern.<br/>
                         <span className="text-base text-zinc-500 font-medium">Viết một câu chuyện ly kỳ về một người bạn dựa trên tranh.</span>
                      </div>
                      <button onClick={() => playAudio('Schreiben Sie eine spannende Geschichte über eine Freundin anhand von Bildern.', 'l21-s27-2')} className="text-zinc-300 hover:text-amber-600 mt-1 shrink-0"><Volume2 size={24}/></button>
                    </p>
                 </div>
                 <div className="p-6 bg-emerald-50 rounded-xl border-4 border-zinc-800 shadow-[4px_4px_0_0_#27272a] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#27272a] transition-all">
                    <p className="text-xl font-bold text-zinc-800 flex items-start gap-3">
                      <span className="px-2 py-1 bg-emerald-200 rounded-md shrink-0">Trọng tâm:</span> 
                      <div>Kể chuyện sáng tạo và lôi cuốn – hãy làm cho câu chuyện sống động!</div>
                    </p>
                 </div>
              </div>
          </div>
        );
      case 28:
        return (
          <div className="flex flex-col h-full space-y-10 p-2 md:p-8 pt-10">
             <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white border-4 border-zinc-800 shadow-[4px_4px_0_0_#27272a] rounded-full flex items-center justify-center text-3xl shrink-0">
                  🔍
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight flex items-center gap-4">
                   Bildsequenz (Chuỗi hình ảnh)
                   <button onClick={() => playAudio('Bildsequenz', 'l21-s28')} className="text-zinc-300 hover:text-zinc-600"><Volume2 size={32}/></button>
                </h2>
             </div>
             <div className="flex flex-col gap-6 flex-1 max-w-2xl mx-auto w-full">
                {[
                   { id: 1, text: 'Bilder 1-6 anschauen und die Reihenfolge verstehen', vi: 'Xem tranh 1-6 và hiểu trình tự', de: 'Bilder 1 bis 6 anschauen und die Reihenfolge verstehen' },
                   { id: 2, text: 'Notizen machen: "Was ist passiert?"', vi: 'Ghi chú: "Chuyện gì đã xảy ra?"', de: 'Notizen machen: Was ist passiert?' },
                   { id: 3, text: 'Vokabelhilfe nutzen: "mit dem Hund spazieren gehen"', vi: 'Sử dụng từ vựng hỗ trợ: "đi dạo với chó"', de: 'Vokabelhilfe nutzen: mit dem Hund spazieren gehen' }
                ].map((item) => (
                   <div key={item.id} className="flex items-start gap-6 bg-white p-6 rounded-2xl border-4 border-zinc-800 shadow-[6px_6px_0_0_#27272a] hover:-translate-x-2 transition-transform">
                      <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-zinc-100 rounded-full flex items-center justify-center text-xl md:text-2xl font-black border-4 border-zinc-800 mt-1">
                         {item.id}
                      </div>
                      <div className="flex-1">
                         <h4 className="font-bold text-lg md:text-xl text-zinc-800 leading-tight mb-2">{item.text}</h4>
                         <p className="text-zinc-500 font-medium text-sm md:text-base">{item.vi}</p>
                      </div>
                      <button onClick={() => playAudio(item.de, `l21-s28-${item.id}`)} className="text-zinc-300 hover:text-zinc-800 shrink-0 mt-2">
                        <Volume2 size={24}/>
                      </button>
                   </div>
                ))}
             </div>
          </div>
        );
      case 29:
        return (
          <div className="flex flex-col items-center h-full p-2 md:p-8 space-y-8 pt-10">
             <h2 className="text-4xl md:text-5xl font-black text-zinc-900 bg-white border-4 border-zinc-800 shadow-[6px_6px_0_0_#27272a] px-8 py-4 rounded-xl transform rotate-1 flex items-center gap-4">
                E-Mail Schreiben (Viết Email)
                <button onClick={() => playAudio('E-Mail Schreiben', 'l21-s29')} className="text-zinc-300 hover:text-zinc-600"><Volume2 size={32}/></button>
             </h2>

             <div className="w-full max-w-xl flex flex-col items-center gap-4 relative mt-8">
                <div className="w-2 h-full bg-zinc-800 absolute left-1/2 -translate-x-1/2 -z-10 top-0"></div>
                {[
                   { de: 'Liebe/Lieber ___ ,', vi: 'Gửi ___ (Thân mến),' },
                   { de: 'Plötzlich ...', vi: 'Đột nhiên ...' },
                   { de: 'Und weißt du, was dann passiert ist?', vi: 'Và thế là bạn có biết chuyện gì xảy ra tiếp theo không?' },
                   { de: 'Also pass auf: ...', vi: 'Nghe này: ...' },
                   { de: 'Zum Glück ...', vi: 'May mắn thay ...' }
                ].map((item, i) => (
                   <div key={i} className={`bg-white border-4 border-zinc-800 p-4 rounded-lg shadow-[4px_4px_0_0_#27272a] w-full max-w-md text-center hover:scale-105 transition-transform cursor-pointer group relative ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}>
                      <div className="flex justify-center items-center gap-3">
                         <span className="font-black text-lg text-zinc-800">{item.de}</span>
                         <button onClick={(e) => { e.stopPropagation(); playAudio(item.de, `l21-s29-${i}`); }} className="text-zinc-300 hover:text-indigo-600"><Volume2 size={20}/></button>
                      </div>
                      <p className="text-sm font-bold text-zinc-500 mt-1">{item.vi}</p>
                      
                      <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-3xl">
                        💡
                      </div>
                   </div>
                ))}
             </div>
          </div>
        );
      case 30:
        return (
          <div className="flex flex-col justify-center h-full space-y-10 p-2 md:p-10 pt-10 text-center">
             <h2 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase tracking-tighter">
                Spannend <br/>
                <span className="bg-zinc-900 text-white px-4 py-1 inline-block mt-2 transform -rotate-2 flex items-center gap-3">
                  Schreiben (Viết Tự Sự)
                  <button onClick={() => playAudio('Spannend Schreiben', 'l21-s30')} className="text-zinc-500 hover:text-white"><Volume2 size={28}/></button>
                </span>
             </h2>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full mt-8">
                <div className="bg-white p-6 md:p-8 rounded-2xl border-4 border-zinc-800 shadow-[6px_6px_0_0_#27272a] flex flex-col items-center text-center group hover:-translate-y-2 transition-transform transform -rotate-1">
                   <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center text-3xl mb-6 border-2 border-rose-300">
                     ❗️
                   </div>
                   <p className="font-bold text-lg md:text-xl text-zinc-800 leading-relaxed">
                     <span className="block mb-2">Beginnen Sie nicht immer mit dem Subjekt – variieren Sie Ihre Satzstrukturen!</span>
                     <span className="text-base text-zinc-500 font-medium block border-t-2 border-zinc-100 mt-2 pt-2">Đừng luôn bắt đầu bằng Chủ Ngữ – hãy thay đổi cấu trúc câu để tạo sự kịch tính!</span>
                   </p>
                   <button onClick={() => playAudio('Beginnen Sie nicht immer mit dem Subjekt. Variieren Sie Ihre Satzstrukturen für mehr Spannung.', 'l21-s30-1')} className="mt-4 text-zinc-400 hover:text-rose-600 bg-zinc-50 p-3 rounded-full"><Volume2 size={20}/></button>
                </div>
                <div className="bg-white p-6 md:p-8 rounded-2xl border-4 border-zinc-800 shadow-[6px_6px_0_0_#27272a] flex flex-col items-center text-center group hover:-translate-y-2 transition-transform transform rotate-1">
                   <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-3xl mb-6 border-2 border-amber-300">
                     🗣️
                   </div>
                   <p className="font-bold text-lg md:text-xl text-zinc-800 leading-relaxed">
                     <span className="block mb-2">Sammeln Sie vor dem Schreiben Redemittel wie "Plötzlich...", "Zum Glück..."</span>
                     <span className="text-base text-zinc-500 font-medium block border-t-2 border-zinc-100 mt-2 pt-2">Hãy gom thập các cụm từ nối trước khi viết (Đột nhiên, may mắn thay...) để câu chuyện mạch lạc.</span>
                   </p>
                   <button onClick={() => playAudio('Sammeln Sie vor dem Schreiben passende Redemittel wie Plötzlich, Zum Glück.', 'l21-s30-2')} className="mt-4 text-zinc-400 hover:text-amber-600 bg-zinc-50 p-3 rounded-full"><Volume2 size={20}/></button>
                </div>
             </div>
          </div>
        );
      case 31:
        return (
          <div className="flex flex-col justify-center items-center h-full p-2 md:p-12 gap-8 pt-10">
             <div className="w-full max-w-3xl space-y-6 bg-zinc-900 p-8 rounded-[2rem] shadow-xl border-4 border-zinc-900 text-white transform rotate-1 relative">
                <div className="absolute -top-10 right-10 text-6xl transform rotate-12 drop-shadow-xl z-20">🎧</div>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-center flex justify-center items-center gap-4">
                   Luyện Phát Âm <br/>
                   <button onClick={() => playAudio('Aussprache Training', 'l21-s31')} className="text-zinc-600 hover:text-white mt-1"><Volume2 size={32}/></button>
                </h2>
                <h3 className="text-lg font-bold text-zinc-400 text-center uppercase tracking-widest border-b-2 border-zinc-700 pb-4">
                  Từ vựng Lektion 21
                </h3>
                <p className="text-base md:text-lg font-medium leading-relaxed text-zinc-300 text-center mt-4 bg-zinc-800 p-4 rounded-xl border-l-4 border-indigo-500">
                   Hãy luyện nghe và đọc theo 37 câu mẫu quan trọng để cải thiện phát âm và ghi nhớ từ vựng trong ngữ cảnh.
                </p>
             </div>
          </div>
        );
      case 32:
        return (
          <div className="flex flex-col h-full space-y-6 p-2 md:p-6 pb-20 overflow-y-auto custom-scrollbar">
             <h2 className="text-3xl font-black text-zinc-900 text-center uppercase bg-white border-4 border-zinc-800 py-3 rounded-2xl shadow-[4px_4px_0_0_#27272a] mx-auto px-8 w-fit">
                Câu mẫu (1 - 10)
             </h2>
             
             <div className="grid gap-4 max-w-4xl mx-auto w-full pb-10">
                {[
                   { word: 'das Dokument', de: 'Ich habe das Dokument gelesen, weil ich den Vertrag verstehen wollte.', vi: 'Tôi đã đọc tài liệu vì tôi muốn hiểu hợp đồng.' },
                   { word: 'der Ausweis', de: 'Ich musste meinen Ausweis zeigen, als ich zur Polizei gegangen bin.', vi: 'Tôi đã phải xuất trình giấy tờ khi tôi đến đồn cảnh sát.' },
                   { word: 'Bargeld', de: 'Ich hatte kein Bargeld dabei, deshalb konnte ich nichts kaufen.', vi: 'Tôi không có tiền mặt nên không thể mua gì.' },
                   { word: 'die EC-Karte', de: 'Ich habe meine EC-Karte verloren und musste sie sperren lassen.', vi: 'Tôi đã làm mất thẻ ngân hàng và phải khóa nó.' },
                   { word: 'die Telefonkarte', de: 'Früher habe ich oft eine Telefonkarte benutzt, wenn ich telefonieren wollte.', vi: 'Trước đây tôi thường dùng thẻ điện thoại khi muốn gọi điện.' },
                   { word: 'die Gesundheitskarte', de: 'Ich musste meine Gesundheitskarte zeigen, als ich beim Arzt war.', vi: 'Tôi phải đưa thẻ bảo hiểm khi đi khám.' },
                   { word: 'der Einbruch', de: 'Es gab einen Einbruch, während wir im Urlaub waren.', vi: 'Có một vụ trộm khi chúng tôi đi nghỉ.' },
                   { word: 'die Feuerwehr', de: 'Die Feuerwehr musste kommen, weil das Haus gebrannt hat.', vi: 'Đội cứu hỏa phải đến vì nhà bị cháy.' },
                   { word: 'der Polizist', de: 'Der Polizist hat mir geholfen, nachdem ich den Täter gesehen hatte.', vi: 'Cảnh sát đã giúp tôi sau khi tôi thấy thủ phạm.' },
                   { word: 'die Polizistin', de: 'Die Polizistin hat alles notiert, was der Zeuge gesagt hat.', vi: 'Nữ cảnh sát đã ghi lại tất cả những gì nhân chứng nói.' }
                ].map((item, idx) => (
                   <div key={idx} className="bg-white p-4 rounded-xl border-2 border-zinc-200 hover:border-indigo-400 shadow-sm transition-colors group">
                      <div className="flex items-center gap-3 mb-2">
                        <button onClick={() => playAudio(item.word, `l21-ws32-${idx}`)} className="text-zinc-400 hover:text-indigo-600 bg-zinc-50 p-2 rounded-lg shrink-0">
                          <Volume2 size={20} />
                        </button>
                        <h4 className="font-black text-lg text-indigo-700">{item.word}</h4>
                      </div>
                      <div className="pl-12">
                         <div className="flex items-start gap-2">
                            <p className="font-bold text-zinc-800 text-sm md:text-base leading-relaxed">{item.de}</p>
                            <button onClick={() => playAudio(item.de, `l21-es32-${idx}`)} className="text-zinc-300 hover:text-rose-500 mt-1 shrink-0"><Volume2 size={16}/></button>
                         </div>
                         <p className="text-zinc-500 text-sm font-medium mt-1">→ {item.vi}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        );
      case 33:
        return (
          <div className="flex flex-col h-full space-y-6 p-2 md:p-6 pb-20 overflow-y-auto custom-scrollbar">
             <h2 className="text-3xl font-black text-zinc-900 text-center uppercase bg-white border-4 border-zinc-800 py-3 rounded-2xl shadow-[4px_4px_0_0_#27272a] mx-auto px-8 w-fit mb-4 mt-6">
                Câu mẫu (11 - 25)
             </h2>
             
             <div className="grid gap-4 max-w-4xl mx-auto w-full pb-10">
                {[
                   { word: 'das Schloss', de: 'Ich konnte die Tür nicht öffnen, weil das Schloss kaputt war.', vi: 'Tôi không mở được cửa vì ổ khóa bị hỏng.' },
                   { word: 'der Täter', de: 'Der Täter ist schnell weggelaufen, bevor die Polizei gekommen ist.', vi: 'Thủ phạm đã chạy đi trước khi cảnh sát đến.' },
                   { word: 'die Versicherung', de: 'Die Versicherung hat den Schaden bezahlt, nachdem ich angerufen hatte.', vi: 'Bảo hiểm đã trả tiền sau khi tôi gọi.' },
                   { word: 'der Zeuge', de: 'Ein Zeuge hat gesehen, wie der Täter ins Haus gegangen ist.', vi: 'Một nhân chứng đã thấy thủ phạm vào nhà.' },
                   { word: 'die Glühbirne', de: 'Die Glühbirne ist kaputt, deshalb muss ich sie wechseln.', vi: 'Bóng đèn hỏng nên tôi phải thay.' },
                   { word: 'der Hammer', de: 'Ich habe einen Hammer benutzt, um die Tür zu öffnen.', vi: 'Tôi đã dùng búa để mở cửa.' },
                   { word: 'die Liste', de: 'Ich habe eine Liste gemacht, damit ich nichts vergesse.', vi: 'Tôi lập danh sách để không quên gì.' },
                   { word: 'der Strom', de: 'Der Strom war weg, als der Sturm gekommen ist.', vi: 'Mất điện khi cơn bão đến.' },
                   { word: 'der Titel', de: 'Der Titel des Films ist interessant, deshalb möchte ich ihn sehen.', vi: 'Tiêu đề phim thú vị nên tôi muốn xem.' },
                   { word: 'stehen', de: 'Er stand vor der Tür, als ich nach Hause kam.', vi: 'Anh ấy đứng trước cửa khi tôi về nhà.' },
                   { word: 'stehlen', de: 'Jemand hat mein Fahrrad gestohlen, während ich gearbeitet habe.', vi: 'Ai đó đã lấy xe đạp khi tôi đang làm việc.' },
                   { word: 'ändern', de: 'Ich habe meine Meinung geändert, nachdem ich alles gehört habe.', vi: 'Tôi đã thay đổi ý kiến sau khi nghe mọi thứ.' },
                   { word: 'brennen', de: 'Das Haus hat gebrannt, weil jemand vergessen hat, den Herd auszuschalten.', vi: 'Nhà cháy vì ai đó quên tắt bếp.' },
                   { word: 'lassen', de: 'Ich lasse mein Auto reparieren, weil es kaputt ist.', vi: 'Tôi mang xe đi sửa vì nó bị hỏng.' },
                   { word: 'nähen', de: 'Meine Mutter hat mir eine Jacke genäht, als ich klein war.', vi: 'Mẹ tôi đã may áo cho tôi khi tôi còn nhỏ.' }
                ].map((item, idx) => (
                   <div key={idx} className="bg-white p-4 rounded-xl border-2 border-zinc-200 hover:border-amber-400 shadow-sm transition-colors group">
                      <div className="flex items-center gap-3 mb-2">
                        <button onClick={() => playAudio(item.word, `l21-ws33-${idx}`)} className="text-zinc-400 hover:text-amber-600 bg-zinc-50 p-2 rounded-lg shrink-0">
                          <Volume2 size={20} />
                        </button>
                        <h4 className="font-black text-lg text-amber-700">{item.word}</h4>
                      </div>
                      <div className="pl-12">
                         <div className="flex items-start gap-2">
                            <p className="font-bold text-zinc-800 text-sm md:text-base leading-relaxed">{item.de}</p>
                            <button onClick={() => playAudio(item.de, `l21-es33-${idx}`)} className="text-zinc-300 hover:text-rose-500 mt-1 shrink-0"><Volume2 size={16}/></button>
                         </div>
                         <p className="text-zinc-500 text-sm font-medium mt-1">→ {item.vi}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        );
      case 34:
        return (
          <div className="flex flex-col h-full space-y-6 p-2 md:p-6 pb-20 overflow-y-auto custom-scrollbar">
             <h2 className="text-3xl font-black text-zinc-900 text-center uppercase bg-white border-4 border-zinc-800 py-3 rounded-2xl shadow-[4px_4px_0_0_#27272a] mx-auto px-8 w-fit mb-4 mt-6">
                Câu mẫu (26 - 37)
             </h2>
             
             <div className="grid gap-4 max-w-4xl mx-auto w-full pb-10">
                {[
                   { word: 'reinigen', de: 'Ich habe das Zimmer gereinigt, bevor die Gäste gekommen sind.', vi: 'Tôi đã dọn phòng trước khi khách đến.' },
                   { word: 'schneiden', de: 'Ich habe mich geschnitten, als ich Gemüse geschnitten habe.', vi: 'Tôi bị đứt tay khi cắt rau.' },
                   { word: 'waschen', de: 'Ich habe meine Hände gewaschen, nachdem ich draußen war.', vi: 'Tôi đã rửa tay sau khi ra ngoài.' },
                   { word: 'abschließen', de: 'Ich habe die Tür abgeschlossen, bevor ich gegangen bin.', vi: 'Tôi đã khóa cửa trước khi đi.' },
                   { word: 'absperren', de: 'Die Polizei hat die Straße abgesperrt, nachdem der Unfall passiert ist.', vi: 'Cảnh sát đã phong tỏa đường sau tai nạn.' },
                   { word: 'anfassen', de: 'Du darfst das nicht anfassen, weil es heiß ist.', vi: 'Bạn không được chạm vào vì nó nóng.' },
                   { word: 'angreifen', de: 'Der Hund hat den Mann angegriffen, als er vorbeiging.', vi: 'Con chó tấn công người đàn ông khi ông đi qua.' },
                   { word: 'sichern', de: 'Die Polizei hat den Ort gesichert, damit niemand hineingeht.', vi: 'Cảnh sát bảo vệ hiện trường để không ai vào.' },
                   { word: 'ängstlich', de: 'Ich war sehr ängstlich, nachdem ich den Einbruch gesehen habe.', vi: 'Tôi rất sợ sau khi thấy vụ trộm.' },
                   { word: 'schmal', de: 'Die Straße ist so schmal, dass kein Auto fahren kann.', vi: 'Con đường hẹp đến mức không xe nào đi được.' },
                   { word: 'welcher', de: 'Welcher Film gefällt dir besser, dieser oder der andere?', vi: 'Bạn thích phim nào hơn, phim này hay phim kia?' },
                   { word: 'dieser', de: 'Dieser Mann hat mir geholfen, als ich Probleme hatte.', vi: 'Người đàn ông này đã giúp tôi khi tôi gặp vấn đề.' }
                ].map((item, idx) => (
                   <div key={idx} className="bg-white p-4 rounded-xl border-2 border-zinc-200 hover:border-emerald-400 shadow-sm transition-colors group">
                      <div className="flex items-center gap-3 mb-2">
                        <button onClick={() => playAudio(item.word, `l21-ws34-${idx}`)} className="text-zinc-400 hover:text-emerald-600 bg-zinc-50 p-2 rounded-lg shrink-0">
                          <Volume2 size={20} />
                        </button>
                        <h4 className="font-black text-lg text-emerald-700">{item.word}</h4>
                      </div>
                      <div className="pl-12">
                         <div className="flex items-start gap-2">
                            <p className="font-bold text-zinc-800 text-sm md:text-base leading-relaxed">{item.de}</p>
                            <button onClick={() => playAudio(item.de, `l21-es34-${idx}`)} className="text-zinc-300 hover:text-rose-500 mt-1 shrink-0"><Volume2 size={16}/></button>
                         </div>
                         <p className="text-zinc-500 text-sm font-medium mt-1">→ {item.vi}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        );
      case 35:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="relative p-12 bg-white border-8 border-zinc-900 shadow-[16px_16px_0_0_#27272a] transform -rotate-3 transition-transform max-w-xl mx-auto hover:rotate-1 cursor-pointer" onClick={() => setCurrentSlide(-1)}>
                <div className="absolute -top-8 -right-8 text-6xl animate-bounce">🎉</div>
                <h2 className="text-7xl font-black text-zinc-900 uppercase tracking-tighter leading-none mb-6">
                   Vielen <br/> Dank!
                </h2>
                <div className="w-16 h-2 bg-zinc-900 mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-zinc-600 uppercase tracking-widest text-sm bg-zinc-100 inline-block px-4 py-2 rounded-lg border-2 border-dashed border-zinc-400">
                   Ende des Trainings
                </p>
             </div>
          </div>
        );
      default:
        return null;
    }
  };

  const bgConfig = backgrounds[currentSlide] || { bgColor: 'bg-white' };

  return (
    <div className="max-w-6xl mx-auto py-4 md:py-8 w-full">
      <div className="relative overflow-hidden h-[75vh] min-h-[550px] md:h-[650px] flex flex-col bg-zinc-100 rounded-[2.5rem] shadow-2xl border-4 border-white">
        
        {/* Dynamic Background Feature - Same as L22 Slides to make it NOT monotonous */}
        <div className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-1000 z-0">
           <div className={`absolute inset-0 w-full h-full transition-colors duration-1000 ${bgConfig.bgColor || 'bg-white'}`} />
           {bgConfig.bgImage && (
               <img src={bgConfig.bgImage} className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-1000" />
           )}
        </div>
        
        {/* Progress bar */}
        <div className="absolute top-0 left-0 h-2 bg-theme-primary transition-all duration-500 ease-out z-20 shadow-sm" style={{ width: currentSlide === -1 ? '0%' : `${((currentSlide + 1) / totalSlides) * 100}%` }} />
        
        {/* Content */}
        <div className="flex-1 p-2 md:p-8 relative z-10 overflow-y-auto custom-scrollbar overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-max"
            >
              {renderSlide()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        {currentSlide === -1 ? (
          <div className="p-4 flex justify-center border-t border-theme-dark/5 bg-theme-cream/50 z-10 text-[10px] md:text-xs font-bold text-theme-dark/50 tracking-widest uppercase">
            Sơ đồ tổng quan Lektion 21
          </div>
        ) : (
          <div className="p-4 md:p-6 flex items-center justify-between border-t border-theme-dark/5 bg-theme-cream/50 z-10">
            <button
              onClick={currentSlide === 0 ? () => setCurrentSlide(-1) : prevSlide}
              className="px-4 md:px-6 py-2 md:py-3 rounded-[20px] font-black tracking-wide transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 hover:bg-theme-dark/5 active:scale-95 text-theme-dark text-xs md:text-base"
            >
              <ChevronLeft size={18} className="md:w-5 md:h-5" /> <span className="hidden sm:inline">{currentSlide === 0 ? 'Lộ trình' : 'Trước'}</span>
            </button>
            <div className="flex flex-col items-center gap-1 px-2">
              <span className="font-black text-theme-dark/30 tracking-widest text-xs md:text-sm">
                {currentSlide + 1} / {totalSlides}
              </span>
              <button onClick={() => setCurrentSlide(-1)} className="text-[10px] text-theme-primary font-bold hover:underline uppercase tracking-widest hidden sm:block">
                Xem Lộ Trình
              </button>
            </div>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1 && currentSlide !== 35}
              className="px-4 md:px-6 py-2 md:py-3 bg-theme-primary text-white rounded-[20px] font-black tracking-wide shadow-xl shadow-theme-primary/20 hover:bg-theme-dark transition-all disabled:opacity-30 flex items-center gap-1 md:gap-2 active:scale-95 text-xs md:text-base"
            >
              <span className="hidden sm:inline">
                {currentSlide === 17 || currentSlide === 25 || currentSlide === 35 ? 'Đóng lại' : 'Tiếp'}
              </span> 
              <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
