import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Volume2, Search, Info, CheckCircle2, Apple, Beef, Carrot, Store } from 'lucide-react';
import FlashcardGrid from './FlashcardGrid';

interface FlashcardProps {
  key?: React.Key;
  item: any;
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
}

const VocabCard = ({ item, playAudio }: FlashcardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-3xl border-2 border-theme-primary/10 hover:border-theme-primary/30 transition-all flex flex-col justify-between h-[280px]"
    >
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-black text-theme-dark">{item.word}</h3>
            <p className="text-sm font-bold text-theme-primary mt-1">{item.meaning}</p>
          </div>
          <button 
            onClick={() => playAudio(item.word, `word-${item.id}`, 'de-DE')}
            className="w-10 h-10 rounded-full bg-theme-primary/10 text-theme-primary flex items-center justify-center hover:bg-theme-primary hover:text-white transition-colors"
          >
            <Volume2 size={20} />
          </button>
        </div>
        
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex-1">
          <p className="text-sm font-bold text-theme-dark leading-relaxed">
            {item.example}
          </p>
          <p className="text-xs font-medium text-theme-dark/60 mt-2">
            {item.exampleTranslation}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Lektion12VocabTheory({ vocabItems, playAudio }: { vocabItems: any[], playAudio: any }) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'food' | 'verbs' | 'other'>('all');

  const categories = [
    { id: 'all', label: 'Tất cả', icon: <Store size={18} /> },
    { id: 'food', label: 'Essen & Getränke', icon: <Apple size={18} /> },
    { id: 'verbs', label: 'Verben', icon: <Play size={18} /> },
    { id: 'other', label: 'Sonstiges', icon: <Info size={18} /> },
  ];

  const getFilteredItems = () => {
    switch (activeCategory) {
      case 'food':
        return vocabItems.slice(0, 10);
      case 'verbs':
        return vocabItems.filter(item => item.word.includes('braten') || item.word.includes('ansehen') || item.word.includes('holen') || item.word.includes('vorbereiten'));
      case 'other':
        return vocabItems.filter(item => !getFilteredItems().includes(item));
      default:
        return vocabItems;
    }
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center text-center space-y-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-display font-black text-theme-dark">
          Lernwortschatz: Essen und Trinken
        </h2>
        <p className="text-lg font-medium text-theme-dark/70 max-w-2xl">
          Học từ vựng liên quan đến thực phẩm, đồ uống, và các động từ thường dùng quanh chủ đề ẩm thực.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as any)}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all
              ${activeCategory === cat.id 
                ? 'bg-theme-dark text-white shadow-lg scale-105' 
                : 'bg-white text-theme-dark/70 border-2 border-slate-100 hover:border-theme-primary/30 hover:text-theme-primary'}
            `}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <VocabCard key={item.id} item={item} playAudio={playAudio} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
