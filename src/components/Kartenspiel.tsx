import React, { useState, useEffect, useCallback } from 'react';
import { 
  motion, 
  AnimatePresence 
} from 'motion/react';
import { 
  Volume2, 
  Loader2, 
  RotateCcw, 
  Trophy, 
  Gamepad2,
  HelpCircle,
  CheckCircle2,
  XCircle,
  LayoutGrid
} from 'lucide-react';
import { Lesson } from '../constants';

interface Card {
  id: string;
  content: string;
  translation: string;
  type: 'word' | 'meaning';
  matchId: string;
  isFlipped: boolean;
  isSolved: boolean;
}

interface KartenspielProps {
  lesson: Lesson;
  onBack: () => void;
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Kartenspiel({ lesson, onBack, playAudio, playingId }: KartenspielProps) {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const cleanTextForAudio = (text: string) => {
    return text.replace(/\s*\([^)]*\)\s*/g, '').trim();
  };

  const formatCardText = (text: string) => {
    const parts = text.split(/(\([^)]+\))/g);
    return parts.map((part, index) => {
      if (part.startsWith('(') && part.endsWith(')')) {
        return <span key={index} className="block text-[0.65em] text-theme-dark/60 mt-1.5 font-bold italic">{part}</span>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  const initGame = useCallback(() => {
    // Select a mix of vocabulary and grammar to make 8 pairs total
    const vocabPool = lesson.items ? [...lesson.items].sort(() => Math.random() - 0.5) : [];
    const grammarPool = lesson.grammar ? [...lesson.grammar].sort(() => Math.random() - 0.5) : [];
    
    // Determine how many grammar vs vocab to pick. Try to pick up to 3 grammar rules if available.
    const numGrammar = Math.min(3, grammarPool.length);
    const numVocab = Math.min(8 - numGrammar, vocabPool.length);
    const selectedGrammar = grammarPool.slice(0, numGrammar);
    const selectedVocab = vocabPool.slice(0, numVocab);
    
    // Combine and shuffle again if we didn't reach 8 wait, if lesson hasn't enough items, maybe we just use what we have
    const selectedItems = [...selectedGrammar, ...selectedVocab].sort(() => Math.random() - 0.5).slice(0, 8);

    let newCards: Card[] = [];
    selectedItems.forEach((item) => {
      // Create German word card (using item.word which applies to both vocab and grammar)
      newCards.push({
        id: `${item.id}-word`,
        content: item.word,
        translation: item.meaning,
        type: 'word',
        matchId: item.id,
        isFlipped: false,
        isSolved: false
      });
      // Create Vietnamese meaning card
      newCards.push({
        id: `${item.id}-meaning`,
        content: item.meaning,
        translation: item.word,
        type: 'meaning',
        matchId: item.id,
        isFlipped: false,
        isSolved: false
      });
    });

    setCards(newCards.sort(() => Math.random() - 0.5));
    setFlippedCards([]);
    setMoves(0);
    setIsWon(false);
    setIsLocked(false);
  }, [lesson]);

  useEffect(() => {
    initGame();
  }, [initGame]);

  const handleCardClick = (index: number) => {
    if (isLocked || cards[index].isFlipped || cards[index].isSolved || flippedCards.length === 2) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [first, second] = newFlipped;

      if (cards[first].matchId === cards[second].matchId) {
        // Match found
        setTimeout(() => {
          setCards(prev => prev.map((c, i) => 
            i === first || i === second ? { ...c, isSolved: true } : c
          ));
          setFlippedCards([]);
          // Play German audio if one of the cards is a word
          const wordCard = cards[first].type === 'word' ? cards[first] : cards[second];
          playAudio(cleanTextForAudio(wordCard.content), `solved-${wordCard.matchId}`);
        }, 500);
      } else {
        // No match
        setIsLocked(true);
        setTimeout(() => {
          setCards(prev => prev.map((c, i) => 
            i === first || i === second ? { ...c, isFlipped: false } : c
          ));
          setFlippedCards([]);
          setIsLocked(false);
        }, 1200);
      }
    }
  };

  useEffect(() => {
    if (cards.length > 0 && cards.every(c => c.isSolved)) {
      setIsWon(true);
    }
  }, [cards]);

  return (
    <div className="max-w-5xl mx-auto space-y-10 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/80 backdrop-blur-xl p-8 rounded-[48px] shadow-2xl border-4 border-theme-dark/5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-theme-primary transition-transform group-hover:scale-110">
          <Gamepad2 size={120} />
        </div>
        
        <div className="flex items-center gap-6 relative z-10">
          <div className="w-16 h-16 bg-theme-primary/10 rounded-[24px] flex items-center justify-center text-theme-primary shadow-inner shrink-0">
            <Gamepad2 size={32} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-black text-theme-dark leading-tight flex flex-wrap items-center gap-2 md:gap-3">
              Kartenspiel <span className="text-theme-primary italic text-xl md:text-3xl">(Trò chơi lật thẻ)</span>
            </h2>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="text-[10px] font-black text-theme-dark/60 uppercase tracking-[0.2em]">{lesson.title}</span>
              <div className="w-1.5 h-1.5 bg-theme-primary/30 rounded-full" />
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => playAudio("Hãy lật các thẻ và tìm cặp từ tiếng Đức tương ứng với nghĩa tiếng Việt của nó. Chúc bạn may mắn!", "game-instr", "vi-VN")}
                  className="p-2 bg-theme-cream text-theme-primary rounded-xl hover:bg-white shadow-sm transition-all hover:scale-110 active:scale-95"
                >
                  {playingId === 'game-instr' ? <Loader2 size={14} className="animate-spin" /> : <Volume2 size={14} />}
                </button>
                <span className="text-xs text-theme-dark/80 font-bold italic">Lật thẻ để tìm cặp tương ứng</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 relative z-10">
          <div className="px-6 py-3 bg-theme-cream rounded-[24px] border-2 border-theme-dark/5 shadow-inner">
            <span className="text-[9px] font-black text-theme-dark/70 uppercase block mb-0.5 tracking-tighter">Số lượt lật</span>
            <span className="text-2xl font-black text-theme-dark">{moves}</span>
          </div>
          <button 
            onClick={initGame}
            className="p-5 bg-theme-dark text-white rounded-[24px] hover:bg-theme-primary transition-all shadow-xl shadow-theme-dark/10 active:scale-95 flex items-center justify-center"
          >
            <RotateCcw size={24} />
          </button>
        </div>
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={card.id} className="aspect-[3/4] perspective-1000">
            <motion.div
              animate={{ rotateY: card.isFlipped || card.isSolved ? 180 : 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
              className="relative w-full h-full preserve-3d cursor-pointer"
              onClick={() => handleCardClick(index)}
            >
              {/* Back (Hidden state) */}
              <div className="absolute inset-0 backface-hidden bg-white border-4 border-theme-dark/5 rounded-[32px] flex items-center justify-center shadow-lg hover:border-theme-primary/30 transition-all group">
                <div className="w-16 h-16 bg-theme-cream rounded-[24px] flex items-center justify-center text-theme-dark/40 group-hover:text-theme-primary group-hover:scale-110 transition-all">
                  <LayoutGrid size={32} />
                </div>
              </div>

              {/* Front (Visible state) */}
              <div 
                className={`absolute inset-0 backface-hidden rotate-y-180 rounded-[32px] flex flex-col items-center justify-center p-6 text-center border-4 shadow-2xl ${
                  card.isSolved 
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
                    : 'bg-white border-theme-primary/20 text-theme-dark'
                }`}
              >
                <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 ${card.type === 'word' ? 'text-theme-primary' : 'text-theme-secondary font-black'}`}>
                    {card.type === 'word' ? 'Deutsch' : 'Tiếng Việt'}
                  </span>
                  <p className={`font-black font-display leading-tight ${card.content.length > 20 ? 'text-sm' : 'text-xl'}`}>
                    {formatCardText(card.content)}
                  </p>
                  
                  {card.isSolved && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 text-emerald-500 bg-white rounded-full p-1 shadow-lg"
                    >
                      <CheckCircle2 size={24} fill="currentColor" className="text-white" />
                    </motion.div>
                  )}

                  <div className="flex gap-2">
                    {card.type === 'word' && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); playAudio(cleanTextForAudio(card.content), `card-audio-${card.id}`); }}
                        className="mt-2 p-3 bg-theme-cream rounded-2xl hover:bg-white transition-all text-theme-primary shadow-sm active:scale-95"
                      >
                        {playingId === `card-audio-${card.id}` ? <Loader2 size={18} className="animate-spin" /> : <Volume2 size={18} />}
                      </button>
                    )}
                    {card.type === 'meaning' && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); playAudio(cleanTextForAudio(card.content), `card-audio-${card.id}`, 'vi-VN'); }}
                        className="mt-2 p-3 bg-theme-cream rounded-2xl hover:bg-white transition-all text-theme-primary shadow-sm active:scale-95"
                      >
                        {playingId === `card-audio-${card.id}` ? <Loader2 size={18} className="animate-spin" /> : <Volume2 size={18} />}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Win Modal */}
      <AnimatePresence>
        {isWon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-theme-dark/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white/90 backdrop-blur-2xl rounded-[56px] p-12 max-w-sm w-full text-center shadow-2xl relative overflow-hidden border-8 border-emerald-100/50"
            >
              <div className="absolute top-0 left-0 w-full h-3 bg-emerald-500" />
              
              <div className="w-24 h-24 bg-emerald-100 rounded-[32px] flex items-center justify-center text-emerald-600 mx-auto mb-8 shadow-inner">
                <Trophy size={48} />
              </div>
              
              <h3 className="text-4xl font-display font-black text-theme-dark mb-3 leading-tight">Tuyệt vời!</h3>
              <p className="text-theme-dark/70 font-bold mb-10 leading-relaxed uppercase tracking-widest text-[10px]">
                Bạn đã hoàn thành trò chơi sau <span className="text-theme-primary font-black px-2 py-1 bg-theme-primary/10 rounded-lg text-sm">{moves} lượt đi</span>.
              </p>

              <div className="space-y-4">
                <button
                  onClick={initGame}
                  className="w-full py-5 bg-theme-dark text-white rounded-[24px] font-black hover:bg-theme-primary transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95"
                >
                  <RotateCcw size={20} /> Chơi lại
                </button>
                <button
                  onClick={onBack}
                  className="w-full py-5 bg-theme-cream text-theme-dark/80 rounded-[24px] font-black hover:bg-theme-dark/5 transition-all active:scale-95"
                >
                  Quay lại bài học
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
}
