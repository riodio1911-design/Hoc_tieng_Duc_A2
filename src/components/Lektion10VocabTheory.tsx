import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Volume2, Store, Grape, KeySquare, Pizza, Info, Coffee } from 'lucide-react';

interface FlashcardProps {
  key?: string;
  item: any;
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
}

const VocabCard = ({ item, playAudio }: FlashcardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-3xl border-2 border-theme-primary/10 hover:border-theme-primary/30 transition-all flex flex-col justify-between"
    >
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-black text-theme-dark">{item.word}</h3>
            <p className="text-lg font-bold text-theme-primary/80 mt-1">{item.meaning}</p>
          </div>
          <button 
            onClick={() => playAudio(item.word, item.id, 'de-DE')}
            className="w-10 h-10 rounded-full bg-theme-primary/10 text-theme-primary flex items-center justify-center hover:bg-theme-primary hover:text-white transition-colors"
          >
            <Volume2 size={20} />
          </button>
        </div>
        
        <div className="bg-theme-cream/30 p-4 rounded-2xl w-full border border-theme-dark/5 space-y-2">
          <p className="text-sm font-medium text-theme-dark bg-white p-2 rounded-xl flex gap-2">
             <span className="text-theme-primary font-bold">Ví dụ:</span>
             <span className="flex-1">{item.example}</span>
          </p>
          <p className="text-xs font-bold text-theme-dark/50 italic px-2">
             {item.exampleTranslation}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Lektion10VocabTheory({ lessonItems, playAudio }: { lessonItems: any, playAudio: any }) {
  const categories = [
    { id: 'restaurant', label: 'Im Restaurant', icon: <Store size={18} /> },
    { id: 'food', label: 'Lebensmittel', icon: <Pizza size={18} /> },
    { id: 'other', label: 'Khác', icon: <Info size={18} /> }
  ];

  const [activeCategory, setActiveCategory] = useState('restaurant');

  const getCategorizedItems = () => {
    switch(activeCategory) {
      case 'restaurant': return lessonItems.filter((i: any) => parseInt(i.id.split('_v')[1]) <= 15);
      case 'food': return lessonItems.filter((i: any) => parseInt(i.id.split('_v')[1]) >= 16 && parseInt(i.id.split('_v')[1]) <= 24);
      case 'other': return lessonItems.filter((i: any) => parseInt(i.id.split('_v')[1]) >= 25);
      default: return lessonItems;
    }
  };

  const categorizedItems = getCategorizedItems();

  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-8 gap-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-3 rounded-2xl font-bold transition-all flex items-center gap-2 ${
              activeCategory === cat.id 
                ? 'bg-theme-primary text-white shadow-lg shadow-theme-primary/30 scale-105' 
                : 'bg-white text-theme-dark/60 hover:bg-theme-cream border-2 border-transparent'
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {categorizedItems.map((item: any) => (
            <VocabCard key={item.id} item={item} playAudio={playAudio} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
