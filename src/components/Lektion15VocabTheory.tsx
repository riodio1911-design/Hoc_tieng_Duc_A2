import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { VOCABULARY_DATA } from '../constants';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion15VocabTheory({ playAudio, playingId }: Props) {
  const lesson = VOCABULARY_DATA.find(l => l.id === 'l15');
  if (!lesson) return null;

  // Group items by category
  const categories: Record<string, typeof lesson.items> = {};
  lesson.items.forEach(item => {
    if (!item.id.includes('g') && item.word) { // filter out grammar items
      const cat = item.category || 'Từ vựng chung';
      if (!categories[cat]) categories[cat] = [];
      categories[cat].push(item);
    }
  });

  return (
    <div className="space-y-12 pb-12 animate-fade-in max-w-4xl mx-auto">
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-3xl font-black text-theme-dark uppercase tracking-tight">Từ Vựng {lesson.title}</h2>
        <p className="text-theme-dark/70 font-medium">{lesson.subtitle}</p>
      </div>

      <div className="space-y-8">
        {Object.entries(categories).map(([title, words], idx) => (
          <div key={idx} className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-sm border-2 border-white">
            <h3 className="text-xl font-bold text-theme-primary mb-6">{title}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {words.map((w, wIdx) => {
                const audioId = 'l15-vocab-' + idx + '-' + wIdx;
                const isPlaying = playingId === audioId;
                
                return (
                  <motion.div 
                    key={wIdx}
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col p-4 rounded-2xl bg-theme-cream/30 border-2 border-theme-primary/5 hover:border-theme-primary/20 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-lg text-theme-dark">{w.word} {w.ipa && <span className="text-sm font-normal text-theme-dark/50 ml-1">[{w.ipa}]</span>}</span>
                      <button 
                        onClick={() => playAudio(w.word, audioId, 'de-DE')}
                        className={'w-8 h-8 rounded-full flex items-center justify-center transition-colors ' + (isPlaying ? 'bg-theme-secondary text-white animate-pulse' : 'bg-white text-theme-secondary hover:bg-theme-secondary/10')}
                      >
                        <Play size={16} className={isPlaying ? "ml-0.5" : "ml-0.5"} />
                      </button>
                    </div>
                    <span className="text-theme-secondary font-medium mb-1">{w.meaning}</span>
                    {w.example && (
                      <span className="text-sm text-theme-dark/60 mt-2 bg-white/50 p-2 rounded-xl italic">
                        {w.example} <br/> <span className="text-theme-dark/40">{w.exampleTranslation}</span>
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}