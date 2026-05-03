import React from 'react';
import { Volume2, BookOpen } from 'lucide-react';
import { VOCABULARY_DATA } from '../constants';
import GrammarTable from './GrammarTable';

export default function Lektion24GrammarTheory({ playAudio, playingId }: { playAudio: (text: string, id: string, lang?: string) => void, playingId: string | null }) {
  const lesson = VOCABULARY_DATA.find(l => l.id === 'l24');
  if (!lesson || !lesson.grammar) return (
    <div className="text-center p-8 bg-slate-50 rounded-2xl">
      Chưa có dữ liệu ngữ pháp cho bài này.
    </div>
  );

  return (
    <div className="space-y-8 pb-12 animate-fade-in max-w-4xl mx-auto">
      <div className="flex max-md:flex-col items-center justify-center gap-4 mb-8">
        <h2 className="text-3xl font-black text-theme-dark uppercase tracking-tight text-center bg-white/50 py-4 rounded-3xl inline-block px-8 border-2 border-white shadow-sm mb-0">
          Lý thuyết Ngữ pháp Bài 24
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
}