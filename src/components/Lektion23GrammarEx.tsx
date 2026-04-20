import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ExFillTyping, ExFillOptionsLocal, ExRewrite } from './Lektion23Exercises';

const GRAMMAR_EXERCISES = [
  {
    id: 1,
    title: "Phần A - Bài 1: Điền đại từ quan hệ (Nominativ)",
    type: "FILL_TYPING",
    questions: [
      { textToPlay: "Das ist der Mann, der hier arbeitet.", q: "Das ist der Mann, {blank} hier arbeitet.", a: "der" },
      { textToPlay: "Das ist die Frau, die sehr freundlich ist.", q: "Das ist die Frau, {blank} sehr freundlich ist.", a: "die" },
      { textToPlay: "Das ist das Kind, das laut ist.", q: "Das ist das Kind, {blank} laut ist.", a: "das" },
      { textToPlay: "Ich kenne den Mann, der Deutsch spricht.", q: "Ich kenne den Mann, {blank} Deutsch spricht.", a: "der" },
      { textToPlay: "Das ist die Kollegin, die mir hilft.", q: "Das ist die Kollegin, {blank} mir hilft.", a: "die" },
      { textToPlay: "Das ist das Haus, das neu ist.", q: "Das ist das Haus, {blank} neu ist.", a: "das" },
      { textToPlay: "Das ist der Lehrer, der streng ist.", q: "Das ist der Lehrer, {blank} streng ist.", a: "der" },
      { textToPlay: "Ich sehe die Frau, die dort steht.", q: "Ich sehe die Frau, {blank} dort steht.", a: "die" },
      { textToPlay: "Das ist das Buch, das interessant ist.", q: "Das ist das Buch, {blank} interessant ist.", a: "das" },
      { textToPlay: "Das ist der Junge, der Fußball spielt.", q: "Das ist der Junge, {blank} Fußball spielt.", a: "der" }
    ]
  },
  {
    id: 2,
    title: "Phần A - Bài 2: Chọn đáp án đúng (Nominativ)",
    type: "FILL_OPTIONS_LOCAL",
    questions: [
      { textToPlay: "Das ist der Mann, der hier arbeitet.", q: "Das ist der Mann, {blank} hier arbeitet.", a: "der", options: ["der", "den", "dem"] },
      { textToPlay: "Das ist die Frau, die nett ist.", q: "Das ist die Frau, {blank} nett ist.", a: "die", options: ["die", "der", "den"] },
      { textToPlay: "Das ist das Kind, das laut ist.", q: "Das ist das Kind, {blank} laut ist.", a: "das", options: ["das", "dem", "den"] },
      { textToPlay: "Das ist der Lehrer, der uns hilft.", q: "Das ist der Lehrer, {blank} uns hilft.", a: "der", options: ["der", "den", "dem"] },
      { textToPlay: "Das ist die Person, die Deutsch spricht.", q: "Das ist die Person, {blank} Deutsch spricht.", a: "die", options: ["die", "den", "der"] },
      { textToPlay: "Das ist das Haus, das groß ist.", q: "Das ist das Haus, {blank} groß ist.", a: "das", options: ["das", "den", "dem"] },
      { textToPlay: "Das ist der Junge, der schnell läuft.", q: "Das ist der Junge, {blank} schnell läuft.", a: "der", options: ["der", "den", "dem"] },
      { textToPlay: "Das ist die Frau, die lacht.", q: "Das ist die Frau, {blank} lacht.", a: "die", options: ["die", "der", "den"] },
      { textToPlay: "Das ist das Buch, das gut ist.", q: "Das ist das Buch, {blank} gut ist.", a: "das", options: ["das", "den", "dem"] },
      { textToPlay: "Das ist der Mann, der singt.", q: "Das ist der Mann, {blank} singt.", a: "der", options: ["der", "den", "dem"] }
    ]
  },
  {
    id: 3,
    title: "Phần A - Bài 3: Nối câu (Nominativ)",
    type: "REWRITE",
    questions: [
      { prompt: "Das ist der Mann. Er arbeitet hier.", a: "Das ist der Mann, der hier arbeitet." },
      { prompt: "Das ist die Frau. Sie ist freundlich.", a: "Das ist die Frau, die freundlich ist." },
      { prompt: "Das ist das Kind. Es spielt.", a: "Das ist das Kind, das spielt." },
      { prompt: "Das ist der Lehrer. Er hilft uns.", a: "Das ist der Lehrer, der uns hilft." },
      { prompt: "Das ist die Kollegin. Sie arbeitet viel.", a: "Das ist die Kollegin, die viel arbeitet." },
      { prompt: "Das ist das Haus. Es ist groß.", a: "Das ist das Haus, das groß ist." },
      { prompt: "Das ist der Junge. Er spielt Fußball.", a: "Das ist der Junge, der Fußball spielt." },
      { prompt: "Das ist die Frau. Sie spricht Deutsch.", a: "Das ist die Frau, die Deutsch spricht." },
      { prompt: "Das ist das Buch. Es ist interessant.", a: "Das ist das Buch, das interessant ist." },
      { prompt: "Das ist der Mann. Er ist nett.", a: "Das ist der Mann, der nett ist." }
    ]
  },
  {
    id: 4,
    title: "Phần A - Bài 4: Sửa lỗi sai",
    type: "REWRITE",
    questions: [
      { prompt: "Das ist der Mann, den hier arbeitet.", a: "Das ist der Mann, der hier arbeitet." },
      { prompt: "Das ist die Frau, der freundlich ist.", a: "Das ist die Frau, die freundlich ist." },
      { prompt: "Das ist das Kind, den laut ist.", a: "Das ist das Kind, das laut ist." },
      { prompt: "Das ist der Lehrer, dem hilft.", a: "Das ist der Lehrer, der hilft." },
      { prompt: "Das ist die Person, den Deutsch spricht.", a: "Das ist die Person, die Deutsch spricht." },
      { prompt: "Das ist das Haus, dem neu ist.", a: "Das ist das Haus, das neu ist." },
      { prompt: "Das ist der Junge, den Fußball spielt.", a: "Das ist der Junge, der Fußball spielt." },
      { prompt: "Das ist die Frau, der lacht.", a: "Das ist die Frau, die lacht." },
      { prompt: "Das ist das Buch, den interessant ist.", a: "Das ist das Buch, das interessant ist." },
      { prompt: "Das ist der Mann, dem singt.", a: "Das ist der Mann, der singt." }
    ]
  },
  {
    id: 5,
    title: "Phần A - Bài 5: Hoàn thành hội thoại",
    type: "FILL_TYPING",
    questions: [
      { textToPlay: "Kennst du den Mann, der hier arbeitet?", q: "A: Kennst du den Mann, {blank} hier arbeitet?", a: "der" },
      { textToPlay: "Ja, der ist mein Nachbar.", q: "B: Ja, {blank} ist mein Nachbar.", a: "der" },
      { textToPlay: "Und die Frau, die dort steht?", q: "A: Und die Frau, {blank} dort steht?", a: "die" },
      { textToPlay: "Die ist meine Kollegin.", q: "B: {blank} ist meine Kollegin.", a: "die" },
      { textToPlay: "Kennst du das Kind, das spielt?", q: "A: Kennst du das Kind, {blank} spielt?", a: "das" },
      { textToPlay: "Ja, das ist sehr nett.", q: "B: Ja, {blank} ist sehr nett.", a: "das" }
    ]
  },
  {
    id: 6,
    title: "Phần B - Bài 1: Điền đại từ quan hệ (Akkusativ)",
    type: "FILL_TYPING",
    questions: [
      { textToPlay: "Das ist der Mann, den ich kenne.", q: "Das ist der Mann, {blank} ich kenne.", a: "den" },
      { textToPlay: "Das ist die Frau, die ich sehe.", q: "Das ist die Frau, {blank} ich sehe.", a: "die" },
      { textToPlay: "Das ist das Kind, das ich höre.", q: "Das ist das Kind, {blank} ich höre.", a: "das" },
      { textToPlay: "Das ist der Lehrer, den ich frage.", q: "Das ist der Lehrer, {blank} ich frage.", a: "den" },
      { textToPlay: "Das ist die Kollegin, die ich treffe.", q: "Das ist die Kollegin, {blank} ich treffe.", a: "die" },
      { textToPlay: "Das ist das Buch, das ich lese.", q: "Das ist das Buch, {blank} ich lese.", a: "das" },
      { textToPlay: "Das ist der Junge, den ich besuche.", q: "Das ist der Junge, {blank} ich besuche.", a: "den" },
      { textToPlay: "Das ist die Frau, die ich liebe.", q: "Das ist die Frau, {blank} ich liebe.", a: "die" },
      { textToPlay: "Das ist das Auto, das ich kaufe.", q: "Das ist das Auto, {blank} ich kaufe.", a: "das" },
      { textToPlay: "Das ist der Mann, den ich suche.", q: "Das ist der Mann, {blank} ich suche.", a: "den" }
    ]
  },
  {
    id: 7,
    title: "Phần B - Bài 2: Chọn đáp án đúng (Akkusativ)",
    type: "FILL_OPTIONS_LOCAL",
    questions: [
      { textToPlay: "Das ist der Mann, den ich kenne.", q: "Das ist der Mann, {blank} ich kenne.", a: "den", options: ["der", "den", "dem"] },
      { textToPlay: "Das ist die Frau, die ich sehe.", q: "Das ist die Frau, {blank} ich sehe.", a: "die", options: ["die", "den", "der"] },
      { textToPlay: "Das ist das Buch, das ich lese.", q: "Das ist das Buch, {blank} ich lese.", a: "das", options: ["das", "den", "dem"] },
      { textToPlay: "Das ist der Lehrer, den ich frage.", q: "Das ist der Lehrer, {blank} ich frage.", a: "den", options: ["den", "der", "dem"] },
      { textToPlay: "Das ist die Kollegin, die ich treffe.", q: "Das ist die Kollegin, {blank} ich treffe.", a: "die", options: ["die", "den", "der"] },
      { textToPlay: "Das ist das Kind, das ich höre.", q: "Das ist das Kind, {blank} ich höre.", a: "das", options: ["das", "den", "dem"] },
      { textToPlay: "Das ist der Junge, den ich besuche.", q: "Das ist der Junge, {blank} ich besuche.", a: "den", options: ["den", "der", "dem"] },
      { textToPlay: "Das ist die Frau, die ich liebe.", q: "Das ist die Frau, {blank} ich liebe.", a: "die", options: ["die", "den", "der"] },
      { textToPlay: "Das ist das Auto, das ich kaufe.", q: "Das ist das Auto, {blank} ich kaufe.", a: "das", options: ["das", "den", "dem"] },
      { textToPlay: "Das ist der Mann, den ich suche.", q: "Das ist der Mann, {blank} ich suche.", a: "den", options: ["den", "der", "dem"] }
    ]
  },
  {
    id: 8,
    title: "Phần B - Bài 3: Nối câu (Akkusativ)",
    type: "REWRITE",
    questions: [
      { prompt: "Das ist der Mann. Ich kenne ihn.", a: "Das ist der Mann, den ich kenne." },
      { prompt: "Das ist die Frau. Ich sehe sie.", a: "Das ist die Frau, die ich sehe." },
      { prompt: "Das ist das Kind. Ich höre es.", a: "Das ist das Kind, das ich höre." },
      { prompt: "Das ist der Lehrer. Ich frage ihn.", a: "Das ist der Lehrer, den ich frage." },
      { prompt: "Das ist die Kollegin. Ich treffe sie.", a: "Das ist die Kollegin, die ich treffe." },
      { prompt: "Das ist das Buch. Ich lese es.", a: "Das ist das Buch, das ich lese." },
      { prompt: "Das ist der Junge. Ich besuche ihn.", a: "Das ist der Junge, den ich besuche." },
      { prompt: "Das ist die Frau. Ich liebe sie.", a: "Das ist die Frau, die ich liebe." },
      { prompt: "Das ist das Auto. Ich kaufe es.", a: "Das ist das Auto, das ich kaufe." },
      { prompt: "Das ist der Mann. Ich suche ihn.", a: "Das ist der Mann, den ich suche." }
    ]
  },
  {
    id: 9,
    title: "Phần B - Bài 4: Sửa lỗi sai",
    type: "REWRITE",
    questions: [
      { prompt: "Das ist der Mann, der ich kenne.", a: "Das ist der Mann, den ich kenne." },
      { prompt: "Das ist die Frau, den ich sehe.", a: "Das ist die Frau, die ich sehe." },
      { prompt: "Das ist das Buch, den ich lese.", a: "Das ist das Buch, das ich lese." },
      { prompt: "Das ist der Lehrer, der ich frage.", a: "Das ist der Lehrer, den ich frage." },
      { prompt: "Das ist die Kollegin, den ich treffe.", a: "Das ist die Kollegin, die ich treffe." },
      { prompt: "Das ist das Kind, den ich höre.", a: "Das ist das Kind, das ich höre." },
      { prompt: "Das ist der Junge, der ich besuche.", a: "Das ist der Junge, den ich besuche." },
      { prompt: "Das ist die Frau, den ich liebe.", a: "Das ist die Frau, die ich liebe." },
      { prompt: "Das ist das Auto, den ich kaufe.", a: "Das ist das Auto, das ich kaufe." },
      { prompt: "Das ist der Mann, der ich suche.", a: "Das ist der Mann, den ich suche." }
    ]
  },
  {
    id: 10,
    title: "Phần B - Bài 5: Hoàn thành hội thoại",
    type: "FILL_TYPING",
    questions: [
      { textToPlay: "Kennst du den Mann, den du suchst?", q: "A: Kennst du den Mann, {blank} du suchst?", a: "den" },
      { textToPlay: "Ja, den kenne ich.", q: "B: Ja, {blank} kenne ich.", a: "den" },
      { textToPlay: "Und die Frau, die du triffst?", q: "A: Und die Frau, {blank} du triffst?", a: "die" },
      { textToPlay: "Die sehe ich oft.", q: "B: {blank} sehe ich oft.", a: "die" },
      { textToPlay: "Kennst du das Buch, das du liest?", q: "A: Kennst du das Buch, {blank} du liest?", a: "das" },
      { textToPlay: "Ja, das ist sehr interessant.", q: "B: Ja, {blank} ist sehr interessant.", a: "das" }
    ]
  },
  {
    id: 11,
    title: "Phần C - Bài 1: Điền đại từ quan hệ (MIX)",
    type: "FILL_TYPING",
    questions: [
      { textToPlay: "Das ist der Mann, der hier arbeitet.", q: "Das ist der Mann, {blank} hier arbeitet.", a: "der" },
      { textToPlay: "Das ist der Mann, den ich kenne.", q: "Das ist der Mann, {blank} ich kenne.", a: "den" },
      { textToPlay: "Das ist die Frau, die nett ist.", q: "Das ist die Frau, {blank} nett ist.", a: "die" },
      { textToPlay: "Das ist die Frau, die ich sehe.", q: "Das ist die Frau, {blank} ich sehe.", a: "die" },
      { textToPlay: "Das ist das Buch, das interessant ist.", q: "Das ist das Buch, {blank} interessant ist.", a: "das" },
      { textToPlay: "Das ist das Buch, das ich lese.", q: "Das ist das Buch, {blank} ich lese.", a: "das" },
      { textToPlay: "Das ist der Junge, der spielt.", q: "Das ist der Junge, {blank} spielt.", a: "der" },
      { textToPlay: "Das ist der Junge, den ich besuche.", q: "Das ist der Junge, {blank} ich besuche.", a: "den" },
      { textToPlay: "Das ist die Kollegin, die mir hilft.", q: "Das ist die Kollegin, {blank} mir hilft.", a: "die" },
      { textToPlay: "Das ist die Kollegin, die ich treffe.", q: "Das ist die Kollegin, {blank} ich treffe.", a: "die" }
    ]
  },
  {
    id: 12,
    title: "Phần C - Bài 2: Chọn đáp án đúng (MIX)",
    type: "FILL_OPTIONS_LOCAL",
    questions: [
      { textToPlay: "Das ist der Mann, den ich kenne.", q: "Das ist der Mann, {blank} ich kenne.", a: "den", options: ["der", "den"] },
      { textToPlay: "Das ist der Mann, der hier arbeitet.", q: "Das ist der Mann, {blank} hier arbeitet.", a: "der", options: ["der", "den"] },
      { textToPlay: "Das ist die Frau, die ich sehe.", q: "Das ist die Frau, {blank} ich sehe.", a: "die", options: ["die", "den"] },
      { textToPlay: "Das ist die Frau, die nett ist.", q: "Das ist die Frau, {blank} nett ist.", a: "die", options: ["die", "der"] },
      { textToPlay: "Das ist das Buch, das ich lese.", q: "Das ist das Buch, {blank} ich lese.", a: "das", options: ["das", "den"] },
      { textToPlay: "Das ist das Buch, das gut ist.", q: "Das ist das Buch, {blank} gut ist.", a: "das", options: ["das", "den"] },
      { textToPlay: "Das ist der Junge, den ich besuche.", q: "Das ist der Junge, {blank} ich besuche.", a: "den", options: ["den", "der"] },
      { textToPlay: "Das ist der Junge, der spielt.", q: "Das ist der Junge, {blank} spielt.", a: "der", options: ["der", "den"] },
      { textToPlay: "Das ist die Kollegin, die ich treffe.", q: "Das ist die Kollegin, {blank} ich treffe.", a: "die", options: ["die", "den"] },
      { textToPlay: "Das ist die Kollegin, die hilft.", q: "Das ist die Kollegin, {blank} hilft.", a: "die", options: ["die", "den"] }
    ]
  },
  {
    id: 13,
    title: "Phần C - Bài 3: Viết lại câu (MIX)",
    type: "REWRITE",
    questions: [
      { prompt: "Das ist der Mann. Er arbeitet hier.", a: "Das ist der Mann, der hier arbeitet." },
      { prompt: "Das ist der Mann. Ich kenne ihn.", a: "Das ist der Mann, den ich kenne." },
      { prompt: "Das ist die Frau. Sie ist nett.", a: "Das ist die Frau, die nett ist." },
      { prompt: "Das ist die Frau. Ich sehe sie.", a: "Das ist die Frau, die ich sehe." },
      { prompt: "Das ist das Buch. Es ist interessant.", a: "Das ist das Buch, das interessant ist." },
      { prompt: "Das ist das Buch. Ich lese es.", a: "Das ist das Buch, das ich lese." },
      { prompt: "Das ist der Junge. Er spielt.", a: "Das ist der Junge, der spielt." },
      { prompt: "Das ist der Junge. Ich besuche ihn.", a: "Das ist der Junge, den ich besuche." },
      { prompt: "Das ist die Kollegin. Sie hilft mir.", a: "Das ist die Kollegin, die mir hilft." },
      { prompt: "Das ist die Kollegin. Ich treffe sie.", a: "Das ist die Kollegin, die ich treffe." }
    ]
  },
  {
    id: 14,
    title: "Phần C - Bài 4: Sửa lỗi sai",
    type: "REWRITE",
    questions: [
      { prompt: "Das ist der Mann, den hier arbeitet.", a: "Das ist der Mann, der hier arbeitet." },
      { prompt: "Das ist der Mann, der ich kenne.", a: "Das ist der Mann, den ich kenne." },
      { prompt: "Das ist die Frau, den nett ist.", a: "Das ist die Frau, die nett ist." },
      { prompt: "Das ist die Frau, der ich sehe.", a: "Das ist die Frau, die ich sehe." },
      { prompt: "Das ist das Buch, den interessant ist.", a: "Das ist das Buch, das interessant ist." },
      { prompt: "Das ist das Buch, das ich lese es.", a: "Das ist das Buch, das ich lese." },
      { prompt: "Das ist der Junge, den spielt.", a: "Das ist der Junge, der spielt." },
      { prompt: "Das ist der Junge, der ich besuche.", a: "Das ist der Junge, den ich besuche." },
      { prompt: "Das ist die Kollegin, den mir hilft.", a: "Das ist die Kollegin, die mir hilft." },
      { prompt: "Das ist die Kollegin, die ich treffe sie.", a: "Das ist die Kollegin, die ich treffe." }
    ]
  },
  {
    id: 15,
    title: "Phần C - Bài 5: Hoàn thành hội thoại",
    type: "FILL_TYPING",
    questions: [
      { textToPlay: "Kennst du den Mann, der hier arbeitet?", q: "A: Kennst du den Mann, {blank} hier arbeitet?", a: "der" },
      { textToPlay: "Ja, den kenne ich auch.", q: "B: Ja, {blank} kenne ich auch.", a: "den" },
      { textToPlay: "Und die Frau, die du siehst?", q: "A: Und die Frau, {blank} du siehst?", a: "die" },
      { textToPlay: "Die ist meine Kollegin.", q: "B: {blank} ist meine Kollegin.", a: "die" },
      { textToPlay: "Kennst du das Buch, das du liest?", q: "A: Kennst du das Buch, {blank} du liest?", a: "das" },
      { textToPlay: "Ja, das ist sehr gut.", q: "B: Ja, {blank} ist sehr gut.", a: "das" }
    ]
  }
];

export default function Lektion23GrammarEx({ playAudio, playingId }: { playAudio: (text: string, id: string) => void, playingId: string | null }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const exercise = GRAMMAR_EXERCISES[currentIdx];

  const renderExercise = () => {
    switch (exercise.type) {
      case 'FILL_OPTIONS_LOCAL': return <ExFillOptionsLocal data={exercise} playAudio={playAudio} playingId={playingId} />;
      case 'FILL_TYPING': return <ExFillTyping data={exercise} playAudio={playAudio} playingId={playingId} />;
      case 'REWRITE': return <ExRewrite data={exercise} playAudio={playAudio} playingId={playingId} />;
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
