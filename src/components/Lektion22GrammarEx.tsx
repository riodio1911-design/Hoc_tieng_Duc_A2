import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ExFillOptions, ExFillTyping, ExMultipleChoice, ExReorder, ExRewrite, ExFreeText } from './Lektion22Exercises';

const GRAMMAR_EXERCISES = [
  {
    id: 1,
    title: "Phần 1.1: Chọn đúng (seit / seitdem / bis)",
    type: "FILL_OPTIONS",
    options: ["seit", "seitdem", "bis"],
    questions: [
      { q: "{blank} ich hier wohne, fahre ich Bus.", a: "seit" },
      { q: "Ich warte, {blank} der Zug kommt.", a: "bis" },
      { q: "{blank} ich mein Auto verkauft habe, fahre ich Fahrrad.", a: "seitdem" },
      { q: "Ich bleibe hier, {blank} du kommst.", a: "bis" },
      { q: "{blank} er in Berlin arbeitet, fährt er U-Bahn.", a: "seit" }
    ]
  },
  {
    id: 2,
    title: "Phần 1.2: Điền từ (seit / seitdem / bis)",
    type: "FILL_TYPING",
    questions: [
      { q: "Ich arbeite hier, {blank} ich in Deutschland bin.", a: "seit" },
      { q: "Ich bleibe, {blank} der Film zu Ende ist.", a: "bis" },
      { q: "{blank} ich umgezogen bin, fahre ich Fahrrad.", a: "seitdem" },
      { q: "Ich warte, {blank} mein Freund kommt.", a: "bis" },
      { q: "{blank} ich kein Auto habe, nehme ich den Bus.", a: "seit" }
    ]
  },
  {
    id: 3,
    title: "Phần 1.3: Chọn Đúng / Sai",
    type: "MULTIPLE_CHOICE",
    questions: [
      { q: "Seit ich gestern hier war, fahre ich Bus.", options: ["Đúng", "Sai"], a: "Sai" },
      { q: "Ich warte, bis du kommst.", options: ["Đúng", "Sai"], a: "Đúng" },
      { q: "Seitdem ich mein Auto verkauft habe, spare ich Geld.", options: ["Đúng", "Sai"], a: "Đúng" },
      { q: "Ich bleibe hier, seit du kommst.", options: ["Đúng", "Sai"], a: "Sai" },
      { q: "Bis ich fertig bin, warte ich.", options: ["Đúng", "Sai"], a: "Đúng" }
    ]
  },
  {
    id: 4,
    title: "Phần 1.4 & 3: Nối câu hoàn chỉnh",
    type: "REWRITE",
    questions: [
      { prompt: "Ich wohne hier. Ich fahre Bus.", a: "Seit ich hier wohne, fahre ich Bus" },
      { prompt: "Ich warte. Der Bus kommt.", a: "Ich warte, bis der Bus kommt" },
      { prompt: "Ich suche einen Parkplatz. Es dauert lange.", a: "Bis ich einen Parkplatz finde, dauert es lange" },
      { prompt: "Ich habe mein Auto verkauft. Ich fahre Fahrrad.", a: "Seitdem ich mein Auto verkauft habe, fahre ich Fahrrad" },
      { prompt: "Ich bleibe hier. Du kommst.", a: "Ich bleibe, bis du kommst" }
    ]
  },
  {
    id: 5,
    title: "Phần 2.1: Sắp xếp Nebensatz (Động từ cuối)",
    type: "REORDER",
    questions: [
      { words: ["seit", "ich", "hier", "wohne"], a: "seit ich hier wohne" },
      { words: ["bis", "ich", "nach", "Hause", "gehe"], a: "bis ich nach Hause gehe" },
      { words: ["seitdem", "ich", "kein", "Auto", "habe"], a: "seitdem ich kein Auto habe" },
      { words: ["bis", "der", "Bus", "kommt"], a: "bis der Bus kommt" },
      { words: ["seit", "ich", "in", "Berlin", "lebe"], a: "seit ich in Berlin lebe" }
    ]
  },
  {
    id: 6,
    title: "Phần 2.2 & 4: Chia động từ",
    type: "FILL_TYPING",
    questions: [
      { q: "Seit ich hier {blank} (wohnen), fahre ich Bus.", a: "wohne" },
      { q: "Ich warte, bis der Bus {blank} (kommen).", a: "kommt" },
      { q: "Seitdem ich in Berlin {blank} (arbeiten), fahre ich U-Bahn.", a: "arbeite" },
      { q: "Bis ich mein Ticket {blank} (bekommen), warte ich.", a: "bekomme" },
      { q: "Seit ich kein Auto {blank} (haben), fahre ich Fahrrad.", a: "habe" }
    ]
  },
  {
    id: 7,
    title: "Phần 2.3: Chọn đáp án đúng",
    type: "MULTIPLE_CHOICE",
    questions: [
      { q: "chọn câu nào sai/đúng vị trí động từ:", options: ["Seit ich wohne hier", "Seit ich hier wohne"], a: "Seit ich hier wohne" },
      { q: "chọn câu nào sai/đúng vị trí động từ:", options: ["bis kommt der Bus", "bis der Bus kommt"], a: "bis der Bus kommt" },
      { q: "chọn câu nào sai/đúng vị trí động từ:", options: ["seitdem ich habe ein Auto", "seitdem ich ein Auto habe"], a: "seitdem ich ein Auto habe" }
    ]
  },
  {
    id: 8,
    title: "Phần 2.4: Tìm và sửa lỗi",
    type: "REWRITE",
    questions: [
      { prompt: "Sửa lỗi: Seit ich wohne hier, fahre ich Bus.", a: "Seit ich hier wohne, fahre ich Bus" },
      { prompt: "Sửa lỗi: Bis ich finde einen Parkplatz, warte ich.", a: "Bis ich einen Parkplatz finde, warte ich" },
      { prompt: "Sửa lỗi: Seitdem ich habe ein Auto verkauft, fahre ich Fahrrad.", a: "Seitdem ich ein Auto verkauft habe, fahre ich Fahrrad" }
    ]
  },
  {
    id: 9,
    title: "Phần 5: Ứng dụng thực tế",
    type: "FREE_TEXT",
    questions: [
      { prompt: "Viết câu về đi làm", hint: "Seit ich hier wohne, fahre ich Bus." },
      { prompt: "Viết câu về phương tiện", hint: "Ich warte, bis der Bus kommt." },
      { prompt: "Viết câu với 'seitdem'", hint: "Seitdem ich mein Auto verkauft habe, spare ich Geld." },
      { prompt: "Viết câu với 'bis'", hint: "Ich warte, bis mein Freund kommt." },
      { prompt: "Viết câu biểu đạt thói quen 1 (tự do)", hint: "Seit ich arbeite, stehe ich früh auf." },
      { prompt: "Viết câu biểu đạt thói quen 2 (tự do)", hint: "Ich trinke Kaffee, bis ich wach bin." }
    ]
  }
];

export default function Lektion22GrammarEx() {
  const [currentIdx, setCurrentIdx] = useState(0);
  
  const exercise = GRAMMAR_EXERCISES[currentIdx];

  const renderExercise = () => {
    switch (exercise.type) {
      case 'FILL_OPTIONS': return <ExFillOptions data={exercise} />;
      case 'FILL_TYPING': return <ExFillTyping data={exercise} />;
      case 'MULTIPLE_CHOICE': return <ExMultipleChoice data={exercise} />;
      case 'REORDER': return <ExReorder data={exercise} />;
      case 'REWRITE': return <ExRewrite data={exercise} />;
      case 'FREE_TEXT': return <ExFreeText data={exercise} />;
      default: return <div>Unknown exercise type</div>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
       <div className="flex bg-white rounded-[24px] p-2 shadow-sm mb-4 overflow-x-auto hide-scrollbar">
         {GRAMMAR_EXERCISES.map((ex, i) => (
            <button 
              key={ex.id}
              onClick={() => setCurrentIdx(i)}
              className={`flex-shrink-0 px-4 py-2 rounded-[16px] text-sm font-bold transition-all ${currentIdx === i ? 'bg-theme-secondary text-white shadow-md' : 'text-theme-dark/40 hover:bg-theme-dark/5'}`}
            >
              Phần {i+1}
            </button>
         ))}
       </div>

       <AnimatePresence mode="wait">
          <motion.div
            key={exercise.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-[32px] p-6 md:p-8 shadow-xl border-4 border-theme-dark/5"
          >
             <h2 className="text-2xl md:text-3xl font-display font-black text-theme-dark mb-8">{exercise.title}</h2>
             {renderExercise()}
          </motion.div>
       </AnimatePresence>
       
       <div className="flex justify-between items-center pt-4 pb-12">
          <button 
             onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
             disabled={currentIdx === 0}
             className="px-6 py-3 rounded-2xl bg-white font-bold text-theme-dark/50 disabled:opacity-30 hover:text-theme-dark shadow-sm transition-all flex items-center gap-2"
          >
            <ChevronLeft size={20} /> Bài trước
          </button>
          
          <button 
             onClick={() => setCurrentIdx(Math.min(GRAMMAR_EXERCISES.length - 1, currentIdx + 1))}
             disabled={currentIdx === GRAMMAR_EXERCISES.length - 1}
             className="px-6 py-3 rounded-2xl bg-theme-dark text-white font-bold disabled:opacity-30 hover:bg-theme-secondary shadow-xl transition-all flex items-center gap-2"
          >
            Tiếp theo <ChevronRight size={20} />
          </button>
       </div>
    </div>
  );
}
