const fs = require("fs");

const vocabIds = [15, 16];
for (const id of vocabIds) {
  const content = `import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { VOCABULARY_DATA } from '../constants';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion${id}VocabTheory({ playAudio, playingId }: Props) {
  const lesson = VOCABULARY_DATA.find(l => l.id === 'l${id}');
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
                const audioId = 'l${id}-vocab-' + idx + '-' + wIdx;
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
}`;
  fs.writeFileSync("src/components/Lektion" + id + "VocabTheory.tsx", content);
}

const grammarIds = [22, 23, 24];
for (const id of grammarIds) {
  const content = `import React from 'react';
import { Volume2, BookOpen } from 'lucide-react';
import { VOCABULARY_DATA } from '../constants';
import GrammarTable from './GrammarTable';

export default function Lektion${id}GrammarTheory({ playAudio, playingId }: { playAudio: (text: string, id: string, lang?: string) => void, playingId: string | null }) {
  const lesson = VOCABULARY_DATA.find(l => l.id === 'l${id}');
  if (!lesson || !lesson.grammar) return (
    <div className="text-center p-8 bg-slate-50 rounded-2xl">
      Chưa có dữ liệu ngữ pháp cho bài này.
    </div>
  );

  return (
    <div className="space-y-8 pb-12 animate-fade-in max-w-4xl mx-auto">
      <div className="flex max-md:flex-col items-center justify-center gap-4 mb-8">
        <h2 className="text-3xl font-black text-theme-dark uppercase tracking-tight text-center bg-white/50 py-4 rounded-3xl inline-block px-8 border-2 border-white shadow-sm mb-0">
          Lý thuyết Ngữ pháp Bài ${id}
        </h2>
      </div>
      
      <section className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-sm border-4 border-white overflow-hidden relative group">
        <div className="absolute top-0 left-0 w-full h-2 bg-theme-secondary group-hover:h-3 transition-all"></div>
        <h3 className="text-2xl font-black text-theme-secondary mb-6 flex items-center gap-3">
          <BookOpen size={28} />
          Tổng hợp cấu trúc
        </h3>

        <GrammarTable 
          items={lesson.grammar} 
          playAudio={playAudio} 
          playingId={playingId} 
        />
      </section>
    </div>
  );
}`;
  fs.writeFileSync("src/components/Lektion" + id + "GrammarTheory.tsx", content);
}
console.log("Done generating components");
