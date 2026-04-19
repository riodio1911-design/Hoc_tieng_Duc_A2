import React, { useState } from 'react';
import { Volume2, Loader2, RefreshCw, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VocabularyItem } from '../constants';
import FeedbackDisplay from './FeedbackDisplay';

interface FlashcardGridProps {
  items: VocabularyItem[];
  playAudio: (text: string, id: string) => void;
  playingId: string | null;
  recordingId?: string | null;
  isEvaluating?: boolean;
  feedback?: Record<string, any>;
  startRecording?: (id: string, text: string) => void;
  stopRecording?: () => void;
  setFeedback?: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}

export default function FlashcardGrid({ 
  items, playAudio, playingId,
  recordingId, isEvaluating, feedback,
  startRecording, stopRecording, setFeedback
}: FlashcardGridProps) {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(items.map(item => item.category || 'Khác')))];
  
  const filteredItems = items.filter(item => activeCategory === 'All' || (item.category || 'Khác') === activeCategory);

  const toggleFlip = (id: string, e: React.MouseEvent) => {
    // Prevent flip if clicking action buttons or feedback blocks
    const target = e.target as HTMLElement;
    if (target.closest('.avoid-flip')) return;
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getArticleColor = (word: string) => {
    const isPlural = word.toLowerCase().includes('(số nhiều)');
    if (isPlural) return 'text-amber-600 bg-amber-50 border-amber-200';
    if (word.startsWith('der ')) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (word.startsWith('die ')) return 'text-pink-600 bg-pink-50 border-pink-200';
    if (word.startsWith('das ')) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    return 'text-theme-dark bg-white border-theme-dark/10';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-black transition-all ${
                activeCategory === cat ? 'bg-theme-primary text-white shadow-md scale-105' : 'bg-theme-dark/5 text-theme-dark/60 hover:bg-theme-dark/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Legend */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 px-1 py-3 border-t border-b border-theme-dark/5 bg-theme-cream/30 rounded-2xl mx-1">
          <div className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-theme-dark/50 ml-2">Phân loại:</div>
          <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm border border-blue-600"></span><span className="text-[10px] sm:text-xs font-bold text-theme-dark/80">Đực (der)</span></div>
          <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-pink-500 shadow-sm border border-pink-600"></span><span className="text-[10px] sm:text-xs font-bold text-theme-dark/80">Cái (die)</span></div>
          <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm border border-emerald-600"></span><span className="text-[10px] sm:text-xs font-bold text-theme-dark/80">Trung (das)</span></div>
          <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm border border-amber-600"></span><span className="text-[10px] sm:text-xs font-bold text-theme-dark/80">Số nhiều</span></div>
          <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-white shadow-sm border border-theme-dark/20"></span><span className="text-[10px] sm:text-xs font-bold text-theme-dark/80">Khác</span></div>
        </div>
      </div>
      
      <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-6 hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
        {filteredItems.map((item, index) => {
          const isFlipped = flippedCards[item.id];
          const colorClasses = getArticleColor(item.word);
          const fbkId = `${item.id}-word`;
          const fbk = feedback?.[fbkId];
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={(e) => toggleFlip(item.id, e)}
              className="relative min-w-[85vw] snap-center shrink-0 md:min-w-0 md:w-full h-[360px] sm:h-[420px] cursor-pointer group"
              style={{ perspective: 1000 }}
            >
              <motion.div
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                className="w-full h-full relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div 
                  className={`absolute inset-0 rounded-[28px] border-2 shadow-sm p-6 flex flex-col items-center justify-center text-center transition-colors ${colorClasses} group-hover:shadow-md`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="absolute top-4 right-4 text-theme-dark/20 group-hover:text-theme-dark/40 transition-colors">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <h4 className="text-3xl font-display font-black leading-tight mb-2 px-4">
                    {item.word.split('(')[0].trim()}
                  </h4>
                  {item.word.includes('(') && (
                    <p className="text-sm font-black uppercase tracking-widest opacity-60">
                      {item.word.match(/\([^)]+\)/)?.[0]}
                    </p>
                  )}
                  {item.ipa && (
                    <p className="font-mono text-sm opacity-50 mt-2 font-bold italic">[{item.ipa}]</p>
                  )}
                  
                  {isEvaluating && recordingId === fbkId && (
                    <div className="absolute top-4 left-4 text-[10px] text-zinc-600 font-bold animate-pulse flex items-center gap-1">
                      <Loader2 className="w-3 h-3 animate-spin" /> Đang PT...
                    </div>
                  )}

                  {/* Feedback UI full overlay on front card */}
                  <AnimatePresence>
                    {fbk && setFeedback && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="avoid-flip absolute inset-0 z-30 flex flex-col rounded-[26px] overflow-hidden"
                      >
                         <FeedbackDisplay feedback={fbk} onClear={() => setFeedback(prev => {
                           const next = { ...prev }; delete next[fbkId]; return next;
                         })} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="avoid-flip absolute bottom-6 flex gap-4 z-10">
                    {/* Audio Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playAudio(item.word.split('(')[0].trim(), fbkId);
                      }}
                      disabled={playingId === fbkId}
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                        playingId === fbkId
                          ? 'bg-theme-primary text-white shadow-lg'
                          : 'bg-black/5 text-black/40 hover:bg-theme-primary hover:text-white shadow-sm hover:scale-110'
                      }`}
                    >
                      {playingId === fbkId ? <Loader2 className="w-6 h-6 animate-spin" /> : <Volume2 className="w-6 h-6" />}
                    </button>

                    {/* Mic Button */}
                    {startRecording && stopRecording && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          recordingId === fbkId ? stopRecording() : startRecording(fbkId, item.word.split('(')[0].trim());
                        }}
                        disabled={isEvaluating && recordingId !== fbkId}
                        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                          recordingId === fbkId
                            ? 'bg-rose-500 text-white animate-pulse shadow-lg'
                            : 'bg-black/5 text-black/40 hover:bg-rose-500 hover:text-white shadow-sm hover:scale-110'
                        }`}
                      >
                        {recordingId === fbkId ? <div className="w-5 h-5 bg-white rounded-sm" /> : <Mic className="w-6 h-6" />}
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Back */}
                <div 
                  className="absolute inset-0 rounded-[28px] bg-theme-dark text-white p-6 flex flex-col justify-center border-2 border-theme-dark shadow-xl overflow-hidden"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="overflow-y-auto custom-scrollbar h-full flex flex-col justify-center space-y-6 pt-4 pb-4">
                    <div className="text-center">
                      <span className="text-xs font-black text-white/40 uppercase tracking-widest block mb-2">Ý nghĩa</span>
                      <p className="text-2xl font-bold bg-white/10 py-3 px-5 rounded-2xl inline-block">{item.meaning}</p>
                    </div>
                    
                    <div className="pt-6 border-t border-white/10 space-y-3 text-center text-balance relative">
                      <div className="flex items-start justify-center gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            playAudio(item.example, `${item.id}-ex-card`);
                          }}
                          disabled={playingId === `${item.id}-ex-card`}
                          className={`avoid-flip mt-0.5 shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                            playingId === `${item.id}-ex-card` ? 'bg-theme-primary text-white shadow-lg' : 'bg-white/10 text-white hover:bg-theme-primary hover:text-white'
                          }`}
                        >
                          {playingId === `${item.id}-ex-card` ? <Loader2 className="w-4 h-4 animate-spin" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <p className="text-lg font-bold text-theme-cream italic leading-relaxed text-left flex-1">"{item.example}"</p>
                      </div>
                      <p className="text-base font-medium text-white/60">{item.exampleTranslation}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
