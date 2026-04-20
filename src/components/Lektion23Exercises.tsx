import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, ChevronLeft, Volume2, HelpCircle, XCircle, Loader2 } from 'lucide-react';

const EXERCISES = [
  {
    id: 1,
    title: "Bài 1: Nối từ (A2)",
    type: "MATCHING",
    pairs: [
      { id: 1, left: "die Bewerbung", right: "đơn xin việc" },
      { id: 2, left: "das Einkommen", right: "thu nhập" },
      { id: 3, left: "der Praktikant", right: "thực tập sinh" },
      { id: 4, left: "die Note", right: "điểm số" },
      { id: 5, left: "das Zeugnis", right: "bảng điểm" }
    ]
  },
  {
    id: 2,
    title: "Bài 2: Chọn đáp án (A2)",
    type: "FILL_OPTIONS_LOCAL",
    questions: [
      { q: "Ich schreibe eine {blank}.", a: "Bewerbung", options: ["Bewerbung", "Strom"] },
      { q: "Er ist {blank}.", a: "Praktikant", options: ["Praktikant", "Thema"] },
      { q: "Ich habe gute {blank}.", a: "Noten", options: ["Noten", "Türen"] },
      { q: "Das {blank} ist wichtig.", a: "Zeugnis", options: ["Zeugnis", "Hammer"] },
      { q: "Mein {blank} ist niedrig.", a: "Einkommen", options: ["Einkommen", "Liste"] }
    ]
  },
  {
    id: 3,
    title: "Bài 3: Điền từ (A2-B1)",
    type: "FILL_OPTIONS",
    options: ["Grundschule", "Gymnasium", "Berufsschule", "Realschule", "Fachhochschule"],
    questions: [
      { q: "Ich gehe auf das {blank}.", a: "Gymnasium" },
      { q: "Nach der Schule studiere ich an einer {blank}.", a: "Fachhochschule" },
      { q: "Kinder gehen zuerst in die {blank}.", a: "Grundschule" },
      { q: "Er macht eine Ausbildung in der {blank}.", a: "Berufsschule" },
      { q: "Ich war früher in der {blank}.", a: "Realschule" }
    ]
  },
  {
    id: 4,
    title: "Bài 4: Số ít / Số nhiều (B1)",
    type: "FILL_TYPING",
    questions: [
      { textToPlay: "die Bewerbungen", q: "die Bewerbung → {blank}", a: "die Bewerbungen" },
      { textToPlay: "die Praktikanten", q: "der Praktikant → {blank}", a: "die Praktikanten" },
      { textToPlay: "die Tätigkeiten", q: "die Tätigkeit → {blank}", a: "die Tätigkeiten" },
      { textToPlay: "die Themen", q: "das Thema → {blank}", a: "die Themen" },
      { textToPlay: "die Schulen", q: "die Schule → {blank}", a: "die Schulen" }
    ]
  },
  {
    id: 5,
    title: "Bài 5: Chia động từ (A2-B1)",
    type: "FILL_TYPING",
    questions: [
      { textToPlay: "Ich bewerbe mich um eine Stelle.", q: "Ich {blank} mich um eine Stelle. (bewerben)", a: "bewerbe" },
      { textToPlay: "Er kündigt seinen Job.", q: "Er {blank} seinen Job. (kündigen)", a: "kündigt" },
      { textToPlay: "Ich kopiere das Dokument.", q: "Ich {blank} das Dokument. (kopieren)", a: "kopiere" },
      { textToPlay: "Das stört mich.", q: "Das {blank} mich. (stören)", a: "stört" }
    ]
  },
  {
     id: 55,
     title: "Bài 5 (tiếp): Chia động từ (vorhaben)",
     type: "FILL_TYPING_MULTI",
     questions: [
        { textToPlay: "Ich habe viel vor.", q: "Ich {blank1} viel {blank2}. (vorhaben)", a1: "habe", a2: "vor" }
     ]
  },
  {
    id: 6,
    title: "Bài 6: Perfekt (B1)",
    type: "FILL_TYPING_MULTI",
    questions: [
      { textToPlay: "Ich habe mich beworben.", q: "Ich {blank1} mich {blank2}. (bewerben)", a1: "habe", a2: "beworben" },
      { textToPlay: "Er hat seinen Job gekündigt.", q: "Er {blank1} seinen Job {blank2}. (kündigen)", a1: "hat", a2: "gekündigt" },
      { textToPlay: "Sie hat das Dokument kopiert.", q: "Sie {blank1} das Dokument {blank2}. (kopieren)", a1: "hat", a2: "kopiert" },
      { textToPlay: "Das hat mich gestört.", q: "Das {blank1} mich {blank2}. (stören)", a1: "hat", a2: "gestört" },
      { textToPlay: "Ich habe das vorgehabt.", q: "Ich {blank1} das {blank2}. (vorhaben)", a1: "habe", a2: "vorgehabt" }
    ]
  },
  {
    id: 7,
    title: "Bài 7: Tính từ & Trạng từ (B1)",
    type: "FILL_OPTIONS_LOCAL",
    questions: [
      { textToPlay: "Die Prüfung ist mündlich.", q: "Die Prüfung ist {blank}.", a: "mündlich", options: ["mündlich", "Bewerbung"] },
      { textToPlay: "Ich mache eine schriftliche Prüfung.", q: "Ich mache eine {blank} Prüfung.", a: "schriftliche", options: ["schriftliche", "Schule"] },
      { textToPlay: "Ich habe eigentlich genug Zeit.", q: "Ich habe {blank} genug Zeit.", a: "eigentlich", options: ["eigentlich", "Praktikant"] },
      { textToPlay: "Ich mache das freiwillig.", q: "Ich mache das {blank}.", a: "freiwillig", options: ["freiwillig", "Zeugnis"] },
      { textToPlay: "Ich habe ihn neulich gesehen.", q: "Ich habe ihn {blank} gesehen.", a: "neulich", options: ["neulich", "Hammer"] }
    ]
  },
  {
    id: 8,
    title: "Bài 8: Viết lại câu (B1)",
    type: "FILL_TYPING",
    questions: [
      { textToPlay: "Ich lerne viel, weil ich gute Noten will.", q: "Ich lerne viel, {blank} ich gute Noten will. (weil)", a: "weil" },
      { textToPlay: "Ich denke, dass ich den Job bekomme.", q: "Ich denke, {blank} ich den Job bekomme. (dass)", a: "dass" },
      { textToPlay: "Ich habe vor, in Deutschland zu arbeiten.", q: "Ich {blank}, in Deutschland zu arbeiten. (vorhaben)", a: "habe vor" },
      { textToPlay: "Ich lasse mein Dokument kopieren.", q: "Ich lasse mein Dokument {blank}. (lassen)", a: "kopieren" },
      { textToPlay: "Ich habe genug Zeit.", q: "Ich habe {blank} Zeit. (genug)", a: "genug" }
    ]
  },
  {
    id: 9,
    title: "Bài 9: Tìm lỗi sai (B1+)",
    type: "REWRITE",
    questions: [
      { textToPlay: "Ich habe viele Bewerbungen geschrieben.", prompt: "Ich habe viele Bewerbung geschrieben.", a: "Ich habe viele Bewerbungen geschrieben." },
      { textToPlay: "Er hat sich um einen Job beworben.", prompt: "Er hat sich um eine Job beworben.", a: "Er hat sich um einen Job beworben." },
      { textToPlay: "Ich habe meinen Job gekündigt.", prompt: "Ich habe mein Job gekündigt.", a: "Ich habe meinen Job gekündigt." },
      { textToPlay: "Die Prüfung ist schriftlich.", prompt: "Die Prüfung ist schriftlichen.", a: "Die Prüfung ist schriftlich." },
      { textToPlay: "Ich habe genug Geld.", prompt: "Ich habe genug Gelds.", a: "Ich habe genug Geld." }
    ]
  },
  {
    id: 10,
    title: "Bài 10: Viết câu (B1 - Quan trọng)",
    type: "FREE_TEXT",
    questions: [
      { prompt: "die Bewerbung", hint: "Ich schreibe eine Bewerbung." },
      { prompt: "das Einkommen", hint: "Mein Einkommen ist hoch." },
      { prompt: "kündigen", hint: "Er kündigt seinen Job." },
      { prompt: "sich bewerben", hint: "Ich bewerbe mich um eine Stelle." },
      { prompt: "das Zeugnis", hint: "Das Zeugnis ist wichtig." },
      { prompt: "die Tätigkeit", hint: "Diese Tätigkeit ist interessant." },
      { prompt: "freiwillig", hint: "Ich mache das freiwillig." },
      { prompt: "eigentlich", hint: "Eigentlich habe ich keine Zeit." },
      { prompt: "vorhaben", hint: "Was hast du heute vor?" },
      { prompt: "genug", hint: "Ich habe genug Zeit." }
    ]
  }
];

export default function Lektion23Exercises({ playAudio, playingId }: { playAudio: (text: string, id: string) => void, playingId: string | null }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  
  const exercise = EXERCISES[currentIdx];

  const renderExercise = () => {
    switch (exercise.type) {
      case 'MATCHING': return <ExMatching data={exercise} playAudio={playAudio} playingId={playingId} />;
      case 'FILL_OPTIONS': return <ExFillOptions data={exercise} playAudio={playAudio} playingId={playingId} />;
      case 'FILL_OPTIONS_LOCAL': return <ExFillOptionsLocal data={exercise} playAudio={playAudio} playingId={playingId} />;
      case 'FILL_TYPING': return <ExFillTyping data={exercise} playAudio={playAudio} playingId={playingId} />;
      case 'FILL_TYPING_MULTI': return <ExFillTypingMulti data={exercise} playAudio={playAudio} playingId={playingId} />;
      case 'REWRITE': return <ExRewrite data={exercise} playAudio={playAudio} playingId={playingId} />;
      case 'FREE_TEXT': return <ExFreeText data={exercise} playAudio={playAudio} playingId={playingId} />;
      default: return <div>Unknown exercise type</div>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
       <div className="flex bg-white rounded-[24px] p-2 shadow-sm mb-4 overflow-x-auto hide-scrollbar">
         {EXERCISES.map((ex, i) => (
            <button 
              key={ex.id}
              onClick={() => setCurrentIdx(i)}
              className={`flex-shrink-0 px-4 py-2 rounded-[16px] text-sm font-bold transition-all ${currentIdx === i ? 'bg-theme-primary text-white shadow-md' : 'text-theme-dark/40 hover:bg-theme-dark/5'}`}
            >
              Bài {i+1}
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
             onClick={() => setCurrentIdx(Math.min(EXERCISES.length - 1, currentIdx + 1))}
             disabled={currentIdx === EXERCISES.length - 1}
             className="px-6 py-3 rounded-2xl bg-theme-dark text-white font-bold disabled:opacity-30 hover:bg-theme-primary shadow-xl transition-all flex items-center gap-2"
          >
            Bài tiếp theo <ChevronRight size={20} />
          </button>
       </div>
    </div>
  );
}

// ------ EXERCISE COMPONENTS ------ //

export function ExMatching({ data, playAudio, playingId }: { data: any, playAudio: any, playingId: string | null }) {
  const [leftArr, setLeftArr] = useState<{id:number, text:string}[]>([]);
  const [rightArr, setRightArr] = useState<{id:number, text:string}[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [matched, setMatched] = useState<number[]>([]);

  useEffect(() => {
    const lefts = data.pairs.map((p:any) => ({ id: p.id, text: p.left }));
    const rights = data.pairs.map((p:any) => ({ id: p.id, text: p.right }));
    setLeftArr(lefts.sort(() => Math.random() - 0.5));
    setRightArr(rights.sort(() => Math.random() - 0.5));
    setMatched([]);
    setSelectedLeft(null);
    setSelectedRight(null);
  }, [data]);

  useEffect(() => {
    if (selectedLeft !== null && selectedRight !== null) {
      if (selectedLeft === selectedRight) {
        setMatched(prev => [...prev, selectedLeft]);
      }
      setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 400);
    }
  }, [selectedLeft, selectedRight]);

  const isComplete = matched.length === data.pairs.length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4 md:gap-8 relative">
         <div className="space-y-3">
           {leftArr.map(item => (
             <div key={'L'+item.id} className="flex items-center gap-2">
                <button 
                   onClick={() => playAudio(item.text, `match-${item.id}`)}
                   className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${playingId === `match-${item.id}` ? 'bg-theme-primary text-white shadow-lg animate-pulse' : 'bg-theme-primary/10 text-theme-primary hover:bg-theme-primary hover:text-white'}`}
                >
                   {playingId === `match-${item.id}` ? <Loader2 size={14} className="animate-spin" /> : <Volume2 size={14} />}
                </button>
                <button
                  onClick={() => !matched.includes(item.id) && setSelectedLeft(item.id)}
                  disabled={matched.includes(item.id)}
                  className={`flex-1 text-left md:text-center px-4 md:px-6 py-4 rounded-2xl font-bold transition-all text-sm md:text-base border-2 ${
                    matched.includes(item.id) ? 'bg-emerald-100 border-emerald-200 text-emerald-700 opacity-50 cursor-not-allowed transform scale-95' :
                    selectedLeft === item.id ? 'bg-theme-primary border-theme-primary text-white shadow-lg scale-105' :
                    'bg-theme-cream border-transparent text-theme-dark hover:border-theme-primary/30'
                  }`}
                >
                  {item.text}
                </button>
             </div>
           ))}
         </div>
         <div className="space-y-3">
           {rightArr.map(item => (
             <button
               key={'R'+item.id}
               onClick={() => !matched.includes(item.id) && setSelectedRight(item.id)}
               disabled={matched.includes(item.id)}
               className={`w-full text-left md:text-center px-4 md:px-6 py-4 rounded-2xl font-bold transition-all text-sm md:text-base border-2 ${
                 matched.includes(item.id) ? 'bg-emerald-100 border-emerald-200 text-emerald-700 opacity-50 cursor-not-allowed transform scale-95' :
                 selectedRight === item.id ? 'bg-theme-secondary border-theme-secondary text-white shadow-lg scale-105' :
                 'bg-white border-theme-dark/10 text-theme-dark hover:border-theme-secondary/30 shadow-sm'
               }`}
             >
               {item.text}
             </button>
           ))}
         </div>
      </div>
      
      {isComplete && (
         <motion.div initial={{ opacity: 0, y: 10}} animate={{opacity:1, y:0}} className="p-4 bg-emerald-50 text-emerald-600 font-bold rounded-2xl text-center border border-emerald-200 flex items-center justify-center gap-2">
           <CheckCircle2 /> Hoàn thành xuất sắc!
         </motion.div>
      )}
    </div>
  )
}

export function ExFillOptions({ data, playAudio, playingId }: { data: any, playAudio: any, playingId: string | null }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  useEffect(() => { setAnswers({}); setChecked(false); }, [data]);

  const allComplete = Object.keys(answers).length === data.questions.length;
  const isCorrect = (idx: number) => answers[idx] === data.questions[idx].a;
  const allCorrect = checked && data.questions.every((_, i: number) => isCorrect(i));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 mb-6 p-4 bg-theme-cream rounded-2xl">
         <span className="font-bold text-theme-dark/50 mr-2">Từ cho sẵn:</span>
         {data.options.map((opt: string) => (
           <span key={opt} className="px-3 py-1 bg-white rounded-lg text-theme-dark font-bold text-sm shadow-sm border border-theme-dark/5">{opt}</span>
         ))}
      </div>

      <div className="space-y-4">
        {data.questions.map((q: any, i: number) => {
          const parts = q.q.split('{blank}');
          const fullText = checked && isCorrect(i) ? q.q.replace('{blank}', answers[i]) : q.textToPlay; // fallback to textToPlay if provided
          return (
            <div key={i} className="flex flex-wrap items-center gap-2 text-lg font-medium text-theme-dark bg-theme-dark/5 p-4 rounded-2xl relative">
               <button 
                  onClick={() => playAudio(fullText || q.q.replace('{blank}', '___'), `opt-${i}`)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${playingId === `opt-${i}` ? 'bg-theme-primary text-white shadow-lg animate-pulse' : 'bg-white text-theme-primary hover:bg-theme-primary hover:text-white shadow-sm'}`}
               >
                  {playingId === `opt-${i}` ? <Loader2 size={12} className="animate-spin" /> : <Volume2 size={12} />}
               </button>
               {parts[0]}
               <select 
                 value={answers[i] || ""}
                 onChange={(e) => { setAnswers({...answers, [i]: e.target.value}); setChecked(false); }}
                 disabled={checked}
                 className={`p-2 rounded-xl font-bold outline-none border-2 appearance-none text-center min-w-[120px] ${
                   !checked ? 'border-transparent bg-white shadow-sm hover:border-theme-primary/30' :
                   isCorrect(i) ? 'border-emerald-400 bg-emerald-50 text-emerald-600' : 'border-red-400 bg-red-50 text-red-600'
                 }`}
               >
                 <option value="" disabled>---</option>
                 {data.options.map((o:string) => <option key={o} value={o}>{o}</option>)}
               </select>
               {parts[1]}
               {checked && (isCorrect(i) ? <CheckCircle2 className="text-emerald-500 w-5 h-5 ml-auto" /> : <XCircle className="text-red-500 w-5 h-5 ml-auto" />)}
            </div>
          )
        })}
      </div>

      <div className="flex justify-end pt-4">
         {!checked ? (
            <button onClick={() => setChecked(true)} disabled={!allComplete} className="px-8 py-3 bg-theme-accent text-white font-black rounded-2xl shadow-xl disabled:opacity-50 transition-all">Kiểm tra</button>
         ) : (
            <button onClick={() => { setChecked(false); setAnswers({}); }} className="px-8 py-3 bg-theme-dark/10 text-theme-dark font-black rounded-2xl hover:bg-theme-dark/20 transition-all">Làm lại</button>
         )}
      </div>
      {allCorrect && <div className="text-center font-bold text-emerald-500">Chính xác hoàn toàn!</div>}
    </div>
  )
}

export function ExFillOptionsLocal({ data, playAudio, playingId }: { data: any, playAudio: any, playingId: string | null }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  useEffect(() => { setAnswers({}); setChecked(false); }, [data]);
  const isCorrect = (idx: number) => answers[idx] === data.questions[idx].a;

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {data.questions.map((q: any, i: number) => {
          const parts = q.q.split('{blank}');
          const fullText = checked && isCorrect(i) ? q.q.replace('{blank}', answers[i]) : q.textToPlay;
          return (
            <div key={i} className="flex flex-wrap items-center gap-2 text-lg font-medium text-theme-dark bg-theme-dark/5 p-4 rounded-2xl">
               <button 
                  onClick={() => playAudio(fullText || q.q.replace('{blank}', '___'), `opt-loc-${i}`)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${playingId === `opt-loc-${i}` ? 'bg-theme-primary text-white shadow-lg animate-pulse' : 'bg-white text-theme-primary hover:bg-theme-primary hover:text-white shadow-sm'}`}
               >
                  {playingId === `opt-loc-${i}` ? <Loader2 size={12} className="animate-spin" /> : <Volume2 size={12} />}
               </button>
               {parts[0]}
               <select 
                 value={answers[i] || ""}
                 onChange={(e) => { setAnswers({...answers, [i]: e.target.value}); setChecked(false); }}
                 disabled={checked}
                 className={`p-2 rounded-xl font-bold outline-none border-2 appearance-none text-center min-w-[120px] ${
                   !checked ? 'border-transparent bg-white shadow-sm hover:border-theme-primary/30' :
                   isCorrect(i) ? 'border-emerald-400 bg-emerald-50 text-emerald-600' : 'border-red-400 bg-red-50 text-red-600'
                 }`}
               >
                 <option value="" disabled>---</option>
                 {q.options.map((o:string) => <option key={o} value={o}>{o}</option>)}
               </select>
               {parts[1]}
               {checked && (isCorrect(i) ? <CheckCircle2 className="text-emerald-500 w-5 h-5 ml-auto" /> : <XCircle className="text-red-500 w-5 h-5 ml-auto" />)}
            </div>
          )
        })}
      </div>
      <div className="flex justify-end pt-4">
         {!checked ? <button onClick={() => setChecked(true)} className="px-8 py-3 bg-theme-accent text-white font-black rounded-2xl shadow-xl transition-all">Kiểm tra</button> : <button onClick={() => { setChecked(false); setAnswers({}); }} className="px-8 py-3 bg-theme-dark/10 font-black rounded-2xl transition-all">Làm lại</button>}
      </div>
    </div>
  )
}

export function ExFillTyping({ data, playAudio, playingId }: { data: any, playAudio: any, playingId: string | null }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  useEffect(() => { setAnswers({}); setChecked(false); }, [data]);

  const isCorrect = (idx: number) => answers[idx]?.trim().toLowerCase() === data.questions[idx].a.toLowerCase();

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {data.questions.map((q: any, i: number) => {
          const parts = q.q.split('{blank}');
          const fullText = checked && isCorrect(i) ? q.q.replace('{blank}', answers[i]).replace(/\(.*?\)/, "") : q.textToPlay;
          return (
            <div key={i} className="flex flex-wrap items-center gap-2 text-lg font-medium text-theme-dark bg-theme-dark/5 p-4 rounded-2xl">
               <button 
                  onClick={() => playAudio(fullText || q.q.replace('{blank}', '___').replace(/\(.*?\)/, ""), `typing-${i}`)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${playingId === `typing-${i}` ? 'bg-theme-primary text-white shadow-lg animate-pulse' : 'bg-white text-theme-primary hover:bg-theme-primary hover:text-white shadow-sm'}`}
               >
                  {playingId === `typing-${i}` ? <Loader2 size={12} className="animate-spin" /> : <Volume2 size={12} />}
               </button>
               <span className="opacity-80">{parts[0]}</span>
               <input 
                 type="text"
                 value={answers[i] || ""}
                 onChange={(e) => { setAnswers({...answers, [i]: e.target.value}); setChecked(false); }}
                 disabled={checked}
                 className={`p-2 rounded-xl font-bold outline-none border-2 text-center min-w-[140px] w-auto flex-1 md:flex-none ${
                   !checked ? 'border-transparent bg-white shadow-sm focus:border-theme-primary/50' :
                   isCorrect(i) ? 'border-emerald-400 bg-emerald-50 text-emerald-600' : 'border-red-400 bg-red-50 text-red-600'
                 }`}
                 placeholder="..."
               />
               <span className="opacity-80">{parts[1]}</span>
               {checked && (isCorrect(i) ? <CheckCircle2 className="text-emerald-500 w-5 h-5 ml-auto hidden md:block" /> : <div className="w-full md:w-auto text-sm text-red-500 font-bold ml-auto">Đáp án: {data.questions[i].a}</div>)}
            </div>
          )
        })}
      </div>
      
      <div className="flex justify-end pt-4">
         {!checked ? <button onClick={() => setChecked(true)} className="px-8 py-3 bg-theme-accent text-white font-black rounded-2xl shadow-xl transition-all">Kiểm tra</button> : <button onClick={() => { setChecked(false); setAnswers({}); }} className="px-8 py-3 bg-theme-dark/10 font-black rounded-2xl transition-all">Làm lại</button>}
      </div>
    </div>
  )
}

export function ExFillTypingMulti({ data, playAudio, playingId }: { data: any, playAudio: any, playingId: string | null }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  useEffect(() => { setAnswers({}); setChecked(false); }, [data]);

  const isCorrect = (qIdx: number, blankId: 1 | 2) => {
     const key = `${qIdx}_${blankId}`;
     const expected = blankId === 1 ? data.questions[qIdx].a1 : data.questions[qIdx].a2;
     return answers[key]?.trim().toLowerCase() === expected.toLowerCase();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {data.questions.map((q: any, i: number) => {
          const parts = q.q.split(/\{blank1\}|\{blank2\}/); // parts[0], parts[1], parts[2]
          const fullText = q.textToPlay;
          return (
            <div key={i} className="flex flex-wrap items-center gap-2 text-[15px] md:text-lg font-medium text-theme-dark bg-theme-dark/5 p-4 rounded-2xl">
               <button 
                  onClick={() => playAudio(fullText, `typing-multi-${i}`)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${playingId === `typing-multi-${i}` ? 'bg-theme-primary text-white shadow-lg animate-pulse' : 'bg-white text-theme-primary hover:bg-theme-primary hover:text-white shadow-sm'}`}
               >
                  {playingId === `typing-multi-${i}` ? <Loader2 size={12} className="animate-spin" /> : <Volume2 size={12} />}
               </button>
               <span className="opacity-80">{parts[0]}</span>
               <input 
                 value={answers[`${i}_1`] || ""}
                 onChange={(e) => { setAnswers({...answers, [`${i}_1`]: e.target.value}); setChecked(false); }}
                 disabled={checked}
                 className={`p-1.5 md:p-2 w-[80px] rounded-xl font-bold outline-none border-2 text-center ${
                   !checked ? 'bg-white focus:border-theme-primary/50' : isCorrect(i, 1) ? 'border-emerald-400 bg-emerald-50 text-emerald-600' : 'border-red-400 bg-red-50 text-red-600'
                 }`}
               />
               <span className="opacity-80">{parts[1]}</span>
               <input 
                 value={answers[`${i}_2`] || ""}
                 onChange={(e) => { setAnswers({...answers, [`${i}_2`]: e.target.value}); setChecked(false); }}
                 disabled={checked}
                 className={`p-1.5 md:p-2 w-[120px] rounded-xl font-bold outline-none border-2 text-center ${
                   !checked ? 'bg-white focus:border-theme-primary/50' : isCorrect(i, 2) ? 'border-emerald-400 bg-emerald-50 text-emerald-600' : 'border-red-400 bg-red-50 text-red-600'
                 }`}
               />
               <span className="opacity-80">{parts[2]}</span>
               {checked && (!isCorrect(i, 1) || !isCorrect(i, 2)) && (
                 <div className="w-full text-sm text-red-500 font-bold mt-2">Đáp án: {q.a1} ... {q.a2}</div>
               )}
            </div>
          )
        })}
      </div>
      
      <div className="flex justify-end pt-4">
         {!checked ? <button onClick={() => setChecked(true)} className="px-8 py-3 bg-theme-accent text-white font-black rounded-2xl shadow-xl">Kiểm tra</button>
         : <button onClick={() => { setChecked(false); setAnswers({}); }} className="px-8 py-3 bg-theme-dark/10 font-black rounded-2xl">Làm lại</button>}
      </div>
    </div>
  )
}

export function ExRewrite({ data, playAudio, playingId }: { data: any, playAudio: any, playingId: string | null }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  useEffect(() => { setAnswers({}); setChecked(false); }, [data]);

  const isCorrect = (idx: number) => {
     const cleanAns = answers[idx]?.toLowerCase().replace(/[^a-zäöüß ]/g, '').trim() || "";
     const cleanTarget = data.questions[idx].a.toLowerCase().replace(/[^a-zäöüß ]/g, '').trim();
     return cleanAns === cleanTarget;
  }

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        {data.questions.map((q: any, i: number) => (
          <div key={i} className="bg-theme-cream/30 p-6 rounded-3xl border border-theme-dark/5 space-y-4">
             <div className="font-bold text-theme-dark flex items-center gap-3 w-full justify-between pr-4">
                {q.prompt}
                <button 
                  onClick={() => playAudio(q.prompt, `rewrite-prompt-${i}`)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${playingId === `rewrite-prompt-${i}` ? 'bg-theme-primary text-white shadow-lg animate-pulse' : 'bg-white text-theme-primary hover:bg-theme-primary hover:text-white shadow-sm'}`}
                >
                  {playingId === `rewrite-prompt-${i}` ? <Loader2 size={12} className="animate-spin" /> : <Volume2 size={12} />}
                </button>
             </div>
             <input 
               type="text"
               value={answers[i] || ""}
               onChange={(e) => { setAnswers({...answers, [i]: e.target.value}); setChecked(false); }}
               disabled={checked}
               className="w-full p-4 rounded-xl font-medium outline-none border-2 bg-white focus:border-theme-primary/50"
               placeholder="Sửa lại đúng..."
             />
             {checked && (
                <div className={`text-sm font-bold flex items-center gap-2 ${isCorrect(i) ? 'text-emerald-500' : 'text-red-500'}`}>
                   {isCorrect(i) ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                   {isCorrect(i) ? 'Chính xác!' : `Đáp án đúng: ${q.a}`}
                   {isCorrect(i) && (
                     <button 
                        onClick={() => playAudio(q.a, `rewrite-${i}`)}
                        className={`ml-2 w-6 h-6 rounded-full flex items-center justify-center transition-all ${playingId === `rewrite-${i}` ? 'bg-emerald-500 text-white shadow-lg animate-pulse' : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-500 hover:text-white shadow-sm'}`}
                     >
                        {playingId === `rewrite-${i}` ? <Loader2 size={10} className="animate-spin" /> : <Volume2 size={10} />}
                     </button>
                   )}
                </div>
             )}
          </div>
        ))}
      </div>
      
      <div className="flex justify-end">
         {!checked ? <button onClick={() => setChecked(true)} className="px-8 py-3 bg-theme-accent text-white font-black rounded-2xl shadow-xl">Kiểm tra</button>
         : <button onClick={() => { setChecked(false); setAnswers({}); }} className="px-8 py-3 bg-theme-dark/10 font-black rounded-2xl">Làm lại</button>}
      </div>
    </div>
  )
}

export function ExFreeText({ data, playAudio, playingId }: { data: any, playAudio: any, playingId: string | null }) {
  const [showHints, setShowHints] = useState<Record<number, boolean>>({});

  useEffect(() => { setShowHints({}); }, [data]);

  return (
    <div className="space-y-8">
      <div className="px-4 py-3 bg-blue-50 text-blue-800 text-sm font-bold rounded-xl border border-blue-100">
         Lưu ý: Mở đáp án để xem câu gợi ý mẫu và luyện nghe.
      </div>
      
      <div className="space-y-6">
        {data.questions.map((q: any, i: number) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-theme-dark/10 shadow-sm space-y-4">
             <div className="flex items-center gap-2 font-black text-theme-dark text-xl text-theme-primary">
                "{q.prompt}"
             </div>
             <textarea 
               rows={2}
               className="w-full p-4 rounded-xl font-medium outline-none border-2 bg-theme-cream/20 focus:border-theme-primary/50 resize-none"
               placeholder="Tự đặt câu của bạn (không bắt buộc chấm điểm)..."
             />
             
             {!showHints[i] ? (
               <button onClick={() => setShowHints({...showHints, [i]: true})} className="text-sm font-bold text-theme-dark/50 hover:text-theme-dark flex items-center gap-1">
                  <HelpCircle size={16} /> Xem một ví dụ gợi ý
               </button>
             ) : (
               <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800 font-bold flex items-center justify-between">
                 <span>Gợi ý: {q.hint}</span>
                 <button 
                    onClick={() => playAudio(q.hint, `hint-${i}`)}
                    className={`ml-2 w-8 h-8 rounded-full flex items-center justify-center transition-all shrink-0 ${playingId === `hint-${i}` ? 'bg-emerald-600 text-white shadow-lg animate-pulse' : 'bg-emerald-200 text-emerald-800 hover:bg-emerald-600 hover:text-white shadow-sm'}`}
                 >
                    {playingId === `hint-${i}` ? <Loader2 size={14} className="animate-spin" /> : <Volume2 size={14} />}
                 </button>
               </div>
             )}
          </div>
        ))}
      </div>
    </div>
  )
}
