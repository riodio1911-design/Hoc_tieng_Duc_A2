import React, { useState } from 'react';
import { Book, Play, CheckCircle2, Factory, Package, MessageSquare, Plus, Minus } from 'lucide-react';

export default function Lektion11VocabTheory({ lessonItems, playAudio }: { lessonItems: any, playAudio: any }) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Tất cả', icon: <Book size={18} /> },
    { id: 'firma', label: 'In der Firma', icon: <Factory size={18} /> },
    { id: 'produkte', label: 'Produkte', icon: <Package size={18} /> },
    { id: 'kommunikation', label: 'Kommunikation', icon: <MessageSquare size={18} /> },
  ];

  const getCategoryWords = () => {
    switch(activeCategory) {
      case 'firma':
        return lessonItems.filter((item: any) => ['l11_v1', 'l11_v2', 'l11_v3', 'l11_v4', 'l11_v5', 'l11_v6', 'l11_v7', 'l11_v15', 'l11_v16', 'l11_v21'].includes(item.id));
      case 'produkte':
        return lessonItems.filter((item: any) => ['l11_v8', 'l11_v9', 'l11_v10', 'l11_v20'].includes(item.id));
      case 'kommunikation':
        return lessonItems.filter((item: any) => ['l11_v11', 'l11_v12', 'l11_v13', 'l11_v14', 'l11_v17', 'l11_v18', 'l11_v19', 'l11_v22', 'l11_v23', 'l11_v24', 'l11_v25', 'l11_v26', 'l11_v27', 'l11_v28', 'l11_v29', 'l11_v30', 'l11_v31', 'l11_v32', 'l11_v33', 'l11_v34', 'l11_v35'].includes(item.id));
      default:
        return lessonItems;
    }
  };

  return (
    <div className="space-y-8 bg-zinc-50 rounded-3xl p-6 shadow-sm border border-theme-dark/10">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-3 bg-theme-primary/10 rounded-2xl mb-4">
          <Book className="w-8 h-8 text-theme-primary" />
        </div>
        <h2 className="text-3xl font-display font-black text-theme-dark uppercase tracking-tight">Từ vựng Lektion 11</h2>
        <p className="text-theme-dark/60 font-bold max-w-2xl mx-auto">
          Các từ vựng về công ty, sản phẩm, và các biểu đạt đánh giá, cảm xúc.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-3 rounded-2xl font-bold transition-all flex items-center gap-2 ${
              activeCategory === cat.id 
                ? 'bg-theme-primary text-white shadow-lg shadow-theme-primary/30 scale-105' 
                : 'bg-white text-theme-dark/60 hover:bg-theme-cream border border-theme-dark/10'
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {getCategoryWords().map((item: any) => (
          <div 
            key={item.id} 
            className="group bg-white rounded-2xl border border-theme-dark/10 overflow-hidden hover:border-theme-primary/30 hover:shadow-xl transition-all"
          >
            <div 
              className="p-5 cursor-pointer flex items-center justify-between"
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
            >
              <div className="flex items-center gap-4">
                <button
                  onClick={(e) => { e.stopPropagation(); playAudio(item.word, item.id); }}
                  className="w-12 h-12 bg-theme-primary/10 text-theme-primary rounded-xl flex items-center justify-center shrink-0 hover:bg-theme-primary hover:text-white hover:scale-110 transition-all shadow-sm"
                >
                  <Play size={24} className="ml-1" />
                </button>
                <div>
                  <h3 className="text-xl font-bold text-theme-dark group-hover:text-theme-primary transition-colors">{item.word}</h3>
                  <p className="text-theme-dark/60 font-medium">{item.meaning}</p>
                </div>
              </div>
              <div className="text-theme-primary bg-theme-primary/10 p-2 rounded-full">
                {expandedId === item.id ? <Minus size={20} /> : <Plus size={20} />}
              </div>
            </div>

            {expandedId === item.id && (
              <div className="px-5 pb-5 pt-2 bg-theme-cream/30 border-t border-theme-dark/5">
                <div className="bg-white p-4 rounded-xl border border-theme-primary/10 shadow-sm space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-theme-primary shrink-0 mt-0.5" />
                    <p className="font-bold text-theme-dark block">{item.example}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-[18px] shrink-0" />
                    <p className="text-theme-dark/60 italic text-sm">{item.exampleTranslation}</p>
                  </div>
                  <button 
                    onClick={() => playAudio(item.example, `ex_${item.id}`)}
                    className="mt-2 text-xs font-bold text-theme-primary hover:text-white bg-theme-primary/10 hover:bg-theme-primary px-3 py-1.5 rounded-lg transition-all flex items-center gap-1"
                  >
                    <Play size={12} /> Nghe ví dụ
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
