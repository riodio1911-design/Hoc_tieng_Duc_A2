import React from 'react';
import { Volume2, Loader2 } from 'lucide-react';
import { GrammarItem } from '../constants';

interface GrammarTableProps {
  items: GrammarItem[];
  playAudio: (text: string, id: string) => void;
  playingId: string | null;
}

export default function GrammarTable({ items, playAudio, playingId }: GrammarTableProps) {
  // Group rules
  const rulesMap = items.reduce((acc, item) => {
    const rule = item.rule || 'Ngữ pháp khác';
    if (!acc[rule]) acc[rule] = [];
    acc[rule].push(item);
    return acc;
  }, {} as Record<string, GrammarItem[]>);

  return (
    <div className="space-y-8 md:space-y-12">
      {Object.entries(rulesMap).map(([ruleName, ruleItems], index) => (
        <div key={index} className="slide-card overflow-hidden border-2 border-theme-dark/5">
          <div className="bg-theme-secondary/10 p-4 border-b-2 border-theme-dark/5">
            <h3 className="text-lg md:text-xl font-black text-theme-secondary uppercase tracking-wide">{ruleName}</h3>
          </div>
          
          <div className="flex flex-col">
            {/* Desktop Header - hidden on mobile */}
            <div className="hidden md:grid grid-cols-12 bg-theme-cream/50 text-sm text-theme-dark/50 font-black uppercase tracking-widest border-b-2 border-theme-dark/5">
              <div className="p-4 col-span-3">Cấu trúc / Từ</div>
              <div className="p-4 col-span-4">Ý nghĩa / Cách dùng</div>
              <div className="p-4 col-span-5">Ví dụ</div>
            </div>
            
            <div className="flex flex-col divide-y divide-theme-dark/5">
              {ruleItems.map((item, idx) => (
                <div key={idx} className="flex flex-col md:grid md:grid-cols-12 hover:bg-theme-dark/[0.02] transition-colors p-4 gap-4 md:gap-0 md:p-0">
                  
                  {/* Cấu trúc / Từ */}
                  <div className="md:col-span-3 md:p-4 md:border-r border-theme-dark/5 align-top">
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => playAudio(item.word.split('(')[0].trim(), `${item.id}-gr-word`)}
                        disabled={playingId === `${item.id}-gr-word`}
                        className={`mt-0.5 shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          playingId === `${item.id}-gr-word` ? 'bg-theme-primary text-white shadow-sm' : 'bg-theme-dark/5 text-theme-dark/40 hover:bg-theme-primary hover:text-white'
                        }`}
                      >
                        {playingId === `${item.id}-gr-word` ? <Loader2 className="w-4 h-4 animate-spin" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <div>
                        <div className="md:hidden text-xs font-bold text-theme-dark/40 uppercase tracking-widest mb-1">Cấu trúc</div>
                        <div className="font-black text-theme-dark text-lg">
                          {item.word}
                        </div>
                        {item.ipa && <div className="text-sm font-mono font-bold text-theme-dark/40 mt-1">[{item.ipa}]</div>}
                      </div>
                    </div>
                  </div>
                  
                  {/* Ý nghĩa / Cách dùng */}
                  <div className="md:col-span-4 md:p-4 md:border-r border-theme-dark/5 align-top">
                    <div className="md:hidden text-xs font-bold text-theme-dark/40 uppercase tracking-widest mb-1">Ý nghĩa</div>
                    <div className="font-bold text-theme-primary leading-relaxed text-base">{item.meaning}</div>
                    {item.note && (
                      <div className="mt-3 text-sm font-medium text-amber-700 bg-amber-50 p-3 rounded-xl border border-amber-100/50 leading-relaxed">
                        {item.note}
                      </div>
                    )}
                  </div>
                  
                  {/* Ví dụ */}
                  <div className="md:col-span-5 md:p-4 align-top">
                    <div className="md:hidden text-xs font-bold text-theme-dark/40 uppercase tracking-widest mb-2">Ví dụ</div>
                    <div className="flex items-start gap-3 bg-theme-cream/30 p-4 rounded-2xl">
                      <button
                        onClick={() => playAudio(item.example, `${item.id}-gr-ex`)}
                        disabled={playingId === `${item.id}-gr-ex`}
                        className={`mt-0.5 shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          playingId === `${item.id}-gr-ex` ? 'bg-theme-secondary text-white shadow-sm' : 'bg-white text-theme-dark/40 shadow-sm hover:bg-theme-secondary hover:text-white'
                        }`}
                      >
                        {playingId === `${item.id}-gr-ex` ? <Loader2 className="w-4 h-4 animate-spin" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <div className="flex-1">
                        <div className="font-bold text-theme-dark/80 italic leading-relaxed text-lg">"{item.example}"</div>
                        <div className="text-sm font-medium text-theme-dark/60 mt-2">{item.exampleTranslation}</div>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
