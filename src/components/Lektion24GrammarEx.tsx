import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ExFillTyping, ExFillOptionsLocal, ExRewrite } from './Lektion23Exercises';

const GRAMMAR_EXERCISES = [
  {
    id: 1,
    title: "Phần 1: Chuyển đổi Präsens sang Präteritum (er/sie)",
    type: "FILL_TYPING",
    questions: [
      { textToPlay: "er muss, er musste", q: "er/sie muss ➔ er/sie {blank}", a: "musste" },
      { textToPlay: "er kann, er konnte", q: "er/sie kann ➔ er/sie {blank}", a: "konnte" },
      { textToPlay: "er soll, er sollte", q: "er/sie soll ➔ er/sie {blank}", a: "sollte" },
      { textToPlay: "er will, er wollte", q: "er/sie will ➔ er/sie {blank}", a: "wollte" },
      { textToPlay: "er darf, er durfte", q: "er/sie darf ➔ er/sie {blank}", a: "durfte" },
      { textToPlay: "er ist, er war", q: "er/sie ist ➔ er/sie {blank}", a: "war" },
      { textToPlay: "er hat, er hatte", q: "er/sie hat ➔ er/sie {blank}", a: "hatte" },
      { textToPlay: "er sieht, er sah", q: "er/sie sieht ➔ er/sie {blank}", a: "sah" },
      { textToPlay: "er kommt, er kam", q: "er/sie kommt ➔ er/sie {blank}", a: "kam" },
      { textToPlay: "er gibt, er gab", q: "er/sie gibt ➔ er/sie {blank}", a: "gab" },
      { textToPlay: "er findet, er fand", q: "er/sie findet ➔ er/sie {blank}", a: "fand" },
      { textToPlay: "er sagt, er sagte", q: "er/sie sagt ➔ er/sie {blank}", a: "sagte" }
    ]
  },
  {
    id: 2,
    title: "Phần 2: Chia động từ ở thì Präteritum",
    type: "FILL_TYPING",
    questions: [
      { textToPlay: "ich arbeitete", q: "arbeiten (ich) ➔ {blank}", a: "arbeitete" },
      { textToPlay: "ich fand", q: "finden (ich) ➔ {blank}", a: "fand" },
      { textToPlay: "er sagte", q: "sagen (er/es/sie) ➔ {blank}", a: "sagte" },
      { textToPlay: "er kam", q: "kommen (er/es/sie) ➔ {blank}", a: "kam" },
      { textToPlay: "wir arbeiteten", q: "arbeiten (wir) ➔ {blank}", a: "arbeiteten" },
      { textToPlay: "wir gaben", q: "geben (wir) ➔ {blank}", a: "gaben" },
      { textToPlay: "sie sagten", q: "sagen (sie/Sie) ➔ {blank}", a: "sagten" },
      { textToPlay: "sie sahen", q: "sehen (sie/Sie) ➔ {blank}", a: "sahen" }
    ]
  },
  {
    id: 3,
    title: "Phần 3: Hoàn thành đoạn văn (Ein Trip nach Australien)",
    type: "FILL_TYPING",
    questions: [
      { textToPlay: "Letztes Jahr wollte ich mit meiner Freundin nach Australien fliegen.", q: "Letztes Jahr {blank} ich mit meiner Freundin nach Australien fliegen. (wollen)", a: "wollte" },
      { textToPlay: "Leider hatten wir beide nicht viel Geld.", q: "Leider {blank} wir beide nicht viel Geld. (haben)", a: "hatten" },
      { textToPlay: "Aber wir wollten nicht zu Hause bleiben.", q: "Aber wir {blank} nicht zu Hause bleiben. (wollen)", a: "wollten" },
      { textToPlay: "Meine Freundin hatte dann die Idee...", q: "Meine Freundin {blank} dann die Idee... (haben)", a: "hatte" },
      { textToPlay: "Die Arbeit war sehr anstrengend.", q: "Die Arbeit {blank} sehr anstrengend. (sein)", a: "war" },
      { textToPlay: "und wir mussten jeden Tag sehr früh aufstehen.", q: "... und wir {blank} jeden Tag sehr früh aufstehen. (müssen)", a: "mussten" },
      { textToPlay: "Aber die Leute waren ziemlich nett.", q: "Aber die Leute {blank} ziemlich nett. (sein)", a: "waren" },
      { textToPlay: "Das war eine interessante Erfahrung.", q: "Das {blank} eine interessante Erfahrung. (sein)", a: "war" }
    ]
  },
  {
    id: 4,
    title: "Phần 4: Tìm động từ nguyên thể (Infinitiv)",
    type: "FILL_TYPING",
    questions: [
      { textToPlay: "Heute Morgen fand ich zuerst meinen Büroschlüssel nicht.", q: "Heute Morgen fand ich zuerst meinen Büroschlüssel nicht. (fand) ➔ {blank}", a: "finden" },
      { textToPlay: "Dann sah ich eine wichtige Notiz nicht.", q: "Dann sah ich eine wichtige Notiz... nicht. (sah) ➔ {blank}", a: "sehen" },
      { textToPlay: "Meine zwei Kollegen kamen zu spät ins Büro.", q: "Meine zwei Kollegen kamen zu spät ins Büro. (kamen) ➔ {blank}", a: "kommen" },
      { textToPlay: "Wir arbeiteten den ganzen Tag.", q: "Wir arbeiteten den ganzen Tag. (arbeiteten) ➔ {blank}", a: "arbeiten" },
      { textToPlay: "Es gab keine Mittagspause.", q: "Es gab keine Mittagspause. (gab) ➔ {blank}", a: "geben" }
    ]
  },
  {
    id: 5,
    title: "Phần 5: Hoàn thành đoạn văn (Unterwegs in Argentinien)",
    type: "FILL_TYPING",
    questions: [
      { textToPlay: "Nach der Schule wollte ich etwas Sinnvolles machen.", q: "Nach der Schule {blank} ich etwas Sinnvolles machen. (wollen)", a: "wollte" },
      { textToPlay: "Ich hatte einen Job in einem Kindergarten in Buenos Aires.", q: "Ich {blank} einen Job in einem Kindergarten in Buenos Aires. (haben)", a: "hatte" },
      { textToPlay: "Es war eine tolle Zeit.", q: "Es {blank} eine tolle Zeit. (sein)", a: "war" },
      { textToPlay: "Außer mir gab es noch zwei Praktikanten...", q: "Außer mir {blank} es noch zwei Praktikanten... (geben)", a: "gab" },
      { textToPlay: "... die aus Spanien kamen.", q: "... die aus Spanien {blank}. (kommen)", a: "kamen" },
      { textToPlay: "Am Wochenende waren wir oft zusammen unterwegs.", q: "Am Wochenende {blank} wir oft zusammen unterwegs. (sein)", a: "waren" },
      { textToPlay: "Als wir einmal nach Hause zurückfahren wollten,", q: "Als wir einmal nach Hause zurückfahren {blank}, (wollen)", a: "wollten" },
      { textToPlay: "... kam ein Gewitter.", q: "... {blank} ein Gewitter. (kommen)", a: "kam" },
      { textToPlay: "Wir hatten keinen Regenschirm...", q: "Wir {blank} keinen Regenschirm... (haben)", a: "hatten" },
      { textToPlay: "... und mussten auf den Bus warten.", q: "... und {blank} auf den Bus warten. (müssen)", a: "mussten" },
      { textToPlay: "An der Haltestelle war ein Auto.", q: "An der Haltestelle {blank} ein Auto. (sein)", a: "war" },
      { textToPlay: "Als er uns sah, ...", q: "Als er uns {blank}, ... (sehen)", a: "sah" },
      { textToPlay: "... sagte er: Wenn ihr wollt, könnt ihr mitfahren.", q: "... {blank} er: Wenn ihr wollt, könnt ihr mitfahren. (sagen)", a: "sagte" },
      { textToPlay: "Das fanden wir super...", q: "Das {blank} wir super... (finden)", a: "fanden" },
      { textToPlay: "Ich war so froh!", q: "Ich {blank} so froh! (sein)", a: "war" }
    ]
  },
  {
    id: 6,
    title: "Phần 6: Chọn thì đúng (Perfekt hay Präteritum)",
    type: "FILL_OPTIONS_LOCAL",
    questions: [
      { textToPlay: "Ich war im Ausland.", q: "Ich {blank} im Ausland.", a: "war", options: ["war", "habe gewesen"] },
      { textToPlay: "Ich habe dort gearbeitet.", q: "Ich {blank} dort gearbeitet.", a: "habe", options: ["habe", "war"] },
      { textToPlay: "Er hatte viel Stress.", q: "Er {blank} viel Stress.", a: "hatte", options: ["hatte", "hat gehabt"] },
      { textToPlay: "Wir haben viel gelernt.", q: "Wir {blank} viel gelernt.", a: "haben", options: ["haben", "waren"] },
      { textToPlay: "Sie war sehr müde.", q: "Sie {blank} sehr müde.", a: "war", options: ["war", "hat gewesen"] },
      { textToPlay: "Er hatte keine Zeit.", q: "Er {blank} keine Zeit.", a: "hatte", options: ["hatte", "hat gehabt"] },
      { textToPlay: "Wir waren im Urlaub.", q: "Wir {blank} im Urlaub.", a: "waren", options: ["waren", "haben gewesen"] },
      { textToPlay: "Sie hat viel gearbeitet.", q: "Sie {blank} viel gearbeitet.", a: "hat", options: ["hat", "war"] }
    ]
  },
  {
    id: 7,
    title: "Phần 7: Sein và Haben trong thì Präteritum",
    type: "FILL_TYPING",
    questions: [
      { textToPlay: "Ich war in Deutschland.", q: "Ich {blank} in Deutschland. (sein)", a: "war" },
      { textToPlay: "Du hattest keine Zeit.", q: "Du {blank} keine Zeit. (haben)", a: "hattest" },
      { textToPlay: "Er war sehr müde.", q: "Er {blank} sehr müde. (sein)", a: "war" },
      { textToPlay: "Wir hatten viel Arbeit.", q: "Wir {blank} viel Arbeit. (haben)", a: "hatten" },
      { textToPlay: "Sie war im Ausland.", q: "Sie {blank} im Ausland. (sein)", a: "war" },
      { textToPlay: "Ich hatte große Probleme.", q: "Ich {blank} große Probleme. (haben)", a: "hatte" },
      { textToPlay: "Er war krank.", q: "Er {blank} krank. (sein)", a: "war" },
      { textToPlay: "Wir hatten Glück.", q: "Wir {blank} Glück. (haben)", a: "hatten" }
    ]
  },
  {
    id: 8,
    title: "Phần 8: Modalverben trong thì Präteritum",
    type: "FILL_TYPING",
    questions: [
      { textToPlay: "Ich konnte nicht kommen.", q: "Ich {blank} nicht kommen. (können)", a: "konnte" },
      { textToPlay: "Er musste viel arbeiten.", q: "Er {blank} viel arbeiten. (müssen)", a: "musste" },
      { textToPlay: "Wir wollten helfen.", q: "Wir {blank} helfen. (wollen)", a: "wollten" },
      { textToPlay: "Sie musste lange bleiben.", q: "Sie {blank} lange bleiben. (müssen)", a: "musste" },
      { textToPlay: "Du konntest nicht schlafen.", q: "Du {blank} nicht schlafen. (können)", a: "konntest" },
      { textToPlay: "Ich wollte Deutsch lernen.", q: "Ich {blank} Deutsch lernen. (wollen)", a: "wollte" },
      { textToPlay: "Er musste früh aufstehen.", q: "Er {blank} früh aufstehen. (müssen)", a: "musste" },
      { textToPlay: "Wir konnten nicht gehen.", q: "Wir {blank} nicht gehen. (können)", a: "konnten" }
    ]
  }
];

export default function Lektion24GrammarEx({ playAudio, playingId }: { playAudio: (text: string, id: string) => void, playingId: string | null }) {
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
             className="px-6 py-3 rounded-2xl bg-white font-bold text-theme-dark/50 disabled:opacity-30 hover:text-theme-dark shadow-sm transition-all flex items-center gap-2"
          >
            Bài tiếp theo <ChevronRight size={20} />
          </button>
       </div>
    </div>
  );
}
