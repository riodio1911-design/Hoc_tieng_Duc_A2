import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ExFillTyping, ExFillOptionsLocal, ExRewrite } from './Lektion23Exercises';

const GRAMMAR_EXERCISES = [
  {
    id: 1,
    title: "Phần 1: Điền đại từ quan hệ (Nominativ)",
    type: "FILL_OPTIONS_LOCAL",
    questions: [
      { textToPlay: "Das ist der Beruf, der zu mir passt.", q: "Das ist der Beruf, {blank} zu mir passt.", a: "der", options: ["der", "den", "dem"] },
      { textToPlay: "Das ist das Buch, das so empfehlenswert ist.", q: "Das ist das Buch, {blank} so empfehlenswert ist.", a: "das", options: ["das", "dem", "den"] },
      { textToPlay: "Das ist die Arbeit, die zu mir passt.", q: "Das ist die Arbeit, {blank} zu mir passt.", a: "die", options: ["die", "der", "den"] },
      { textToPlay: "Das sind die Jobs, die zu uns passen.", q: "Das sind die Jobs, {blank} zu uns passen.", a: "die", options: ["die", "den", "der"] }
    ]
  },
  {
    id: 2,
    title: "Phần 2: Điền đại từ quan hệ (Akkusativ)",
    type: "FILL_OPTIONS_LOCAL",
    questions: [
      { textToPlay: "Das ist der Beruf, den ich liebe.", q: "Das ist der Beruf, {blank} ich liebe.", a: "den", options: ["der", "den", "dem"] },
      { textToPlay: "Das ist das Buch, das ich so gern gelesen habe.", q: "Das ist das Buch, {blank} ich so gern gelesen habe.", a: "das", options: ["das", "dem", "den"] },
      { textToPlay: "Das ist die Arbeit, die ich liebe.", q: "Das ist die Arbeit, {blank} ich liebe.", a: "die", options: ["die", "der", "den"] },
      { textToPlay: "Das sind die Jobs, die ich machen könnte.", q: "Das sind die Jobs, {blank} ich machen könnte.", a: "die", options: ["die", "den", "der"] }
    ]
  },
  {
    id: 3,
    title: "Phần 3: Chọn đại từ quan hệ (Nominativ oder Akkusativ)",
    type: "FILL_TYPING",
    questions: [
      { textToPlay: "Das ist der Beruf, der zu mir passt.", q: "Das ist der Beruf, {blank} zu mir passt.", a: "der" },
      { textToPlay: "Das ist der Beruf, den ich liebe.", q: "Das ist der Beruf, {blank} ich liebe.", a: "den" },
      { textToPlay: "Das ist das Buch, das so empfehlenswert ist.", q: "Das ist das Buch, {blank} so empfehlenswert ist.", a: "das" },
      { textToPlay: "Das ist das Buch, das ich so gern gelesen habe.", q: "Das ist das Buch, {blank} ich so gern gelesen habe.", a: "das" },
      { textToPlay: "Das ist die Arbeit, die zu mir passt.", q: "Das ist die Arbeit, {blank} zu mir passt.", a: "die" },
      { textToPlay: "Das ist die Arbeit, die ich liebe.", q: "Das ist die Arbeit, {blank} ich liebe.", a: "die" },
      { textToPlay: "Das sind die Jobs, die zu uns passen.", q: "Das sind die Jobs, {blank} zu uns passen.", a: "die" },
      { textToPlay: "Das sind die Jobs, die ich machen könnte.", q: "Das sind die Jobs, {blank} ich machen könnte.", a: "die" }
    ]
  },
  {
    id: 4,
    title: "Phần 4: Viết lại câu với mệnh đề quan hệ",
    type: "REWRITE",
    questions: [
      { prompt: "Das ist der Beruf. Er passt zu mir.", a: "Das ist der Beruf, der zu mir passt." },
      { prompt: "Das ist der Beruf. Ich liebe ihn.", a: "Das ist der Beruf, den ich liebe." },
      { prompt: "Das ist das Buch. Es ist so empfehlenswert.", a: "Das ist das Buch, das so empfehlenswert ist." },
      { prompt: "Das ist das Buch. Ich habe es so gern gelesen.", a: "Das ist das Buch, das ich so gern gelesen habe." },
      { prompt: "Das ist die Arbeit. Sie passt zu mir.", a: "Das ist die Arbeit, die zu mir passt." },
      { prompt: "Das ist die Arbeit. Ich liebe sie.", a: "Das ist die Arbeit, die ich liebe." },
      { prompt: "Das sind die Jobs. Sie passen zu uns.", a: "Das sind die Jobs, die zu uns passen." },
      { prompt: "Das sind die Jobs. Ich könnte sie machen.", a: "Das sind die Jobs, die ich machen könnte." }
    ]
  },
  {
    id: 5,
    title: "Phần 5: Zufriedenheit ausdrücken (Thể hiện sự hài lòng)",
    type: "FILL_TYPING",
    questions: [
      { textToPlay: "Ja, ich bin sehr zufrieden damit.", q: "Ja, ich bin sehr {blank} damit.", a: "zufrieden" },
      { textToPlay: "Mein Job ist sehr interessant.", q: "Mein Job ist {blank} interessant.", a: "sehr" },
      { textToPlay: "Ich finde meinen Beruf prima.", q: "Ich finde meinen Beruf {blank}.", a: "prima" },
      { textToPlay: "Ich finde meinen Job gut.", q: "Ich finde meinen Job {blank}.", a: "gut" },
      { textToPlay: "Mein Beruf macht mir großen Spaß.", q: "Mein Beruf macht mir großen {blank}.", a: "Spaß" }
    ]
  },
  {
    id: 6,
    title: "Phần 6: Unzufriedenheit ausdrücken (Thể hiện sự không hài lòng)",
    type: "FILL_TYPING",
    questions: [
      { textToPlay: "Nein, ich bin sehr unzufrieden damit.", q: "Nein, ich bin sehr {blank} damit.", a: "unzufrieden" },
      { textToPlay: "Nein, überhaupt nicht.", q: "Nein, {blank} nicht.", a: "überhaupt" },
      { textToPlay: "Ich habe keine Lust mehr.", q: "Ich habe keine {blank} mehr.", a: "Lust" },
      { textToPlay: "Ich habe genug.", q: "Ich {blank} genug.", a: "habe" },
      { textToPlay: "Immer muss ich Überstunden machen. Das ärgert mich.", q: "Immer muss ich Überstunden machen. Das {blank} mich.", a: "ärgert" },
      { textToPlay: "Das stört mich. Deshalb möchte ich kündigen.", q: "Das stört mich. {blank} möchte ich kündigen.", a: "Deshalb" },
      { textToPlay: "Das habe ich fest vor.", q: "Das habe ich fest {blank}.", a: "vor" }
    ]
  },
  {
    id: 7,
    title: "Phần 7: Phân định Thái độ (Hài lòng hay Không hài lòng?)",
    type: "FILL_OPTIONS_LOCAL",
    questions: [
      { textToPlay: "Na ja, es geht. Der Job ist okay.", q: "Na ja, es geht. Der Job ist {blank}.", a: "okay", options: ["okay", "schlecht", "unzufrieden"] },
      { textToPlay: "Ich finde meine Ausbildung schön.", q: "Ich finde meine Ausbildung {blank}.", a: "schön", options: ["schön", "überhaupt", "Lust"] },
      { textToPlay: "Das ärgert mich.", q: "Das {blank} mich.", a: "ärgert", options: ["ärgert", "freut", "passt"] },
      { textToPlay: "Ja, ich bin zufrieden damit.", q: "Ja, ich bin {blank} damit.", a: "zufrieden", options: ["zufrieden", "stört", "genug"] }
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
