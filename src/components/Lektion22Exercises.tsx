import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, ChevronLeft, ArrowRight, Check, RotateCcw, HelpCircle, XCircle } from 'lucide-react';

const EXERCISES = [
  {
    id: 1,
    title: "Bài 1: Nối từ (Zuordnen)",
    type: "MATCHING",
    pairs: [
      { id: 1, left: "Anmeldung", right: "đăng ký" },
      { id: 2, left: "Vertrag", right: "hợp đồng" },
      { id: 3, left: "Umwelt", right: "môi trường" },
      { id: 4, left: "Ziel", right: "mục tiêu" },
      { id: 5, left: "Fahrkarte", right: "vé xe" }
    ]
  },
  {
    id: 2,
    title: "Bài 2: Điền từ (Lückentext A2)",
    type: "FILL_OPTIONS",
    options: ["anklicken", "Passwort", "Ziel", "mieten", "Daten"],
    questions: [
      { q: "Ich möchte eine Wohnung {blank}.", a: "mieten" },
      { q: "Mein {blank} ist sehr sicher.", a: "Passwort" },
      { q: "Bitte geben Sie Ihre {blank} ein.", a: "Daten" },
      { q: "Ich muss den Link {blank}.", a: "anklicken" },
      { q: "Mein {blank} ist Deutsch lernen.", a: "Ziel" }
    ]
  },
  {
    id: 3,
    title: "Bài 3: Chia động từ (Konjugation Präsens)",
    type: "FILL_TYPING",
    questions: [
      { q: "Ich {blank} (ausfüllen) das Formular.", a: "fülle aus" },
      { q: "Er {blank} (wählen) eine Option.", a: "wählt" },
      { q: "Wir {blank} (teilen) das Essen.", a: "teilen" },
      { q: "Du {blank} (bestätigen) die E-Mail.", a: "bestätigst" },
      { q: "Sie {blank} (mieten) ein Auto.", a: "mieten" }
    ]
  },
  {
    id: 4,
    title: "Bài 4: Perfekt (Quá khứ hoàn thành)",
    type: "FILL_TYPING_MULTI",
    questions: [
      { q: "Ich {blank1} das Formular {blank2} (ausfüllen).", a1: "habe", a2: "ausgefüllt" },
      { q: "Er {blank1} den Vertrag {blank2} (unterschreiben).", a1: "hat", a2: "unterschrieben" },
      { q: "Wir {blank1} ein Auto {blank2} (mieten).", a1: "haben", a2: "gemietet" },
      { q: "Sie {blank1} das Ziel {blank2} (erreichen).", a1: "hat", a2: "erreicht" },
      { q: "Ich {blank1} mich {blank2} (vorstellen).", a1: "habe", a2: "vorgestellt" }
    ]
  },
  {
    id: 5,
    title: "Bài 5: Chọn đáp án đúng (Multiple Choice)",
    type: "MULTIPLE_CHOICE",
    questions: [
      {
        q: "Ich brauche einen ______.",
        options: ["Umwelt", "Zugangscode", "unterwegs"],
        a: "Zugangscode"
      },
      {
        q: "Wir schützen die ______.",
        options: ["Ziel", "Umwelt", "Vertrag"],
        a: "Umwelt"
      },
      {
        q: "Ich bin ______.",
        options: ["unterwegs", "Vertrag", "Zahl"],
        a: "unterwegs"
      }
    ]
  },
  {
    id: 6,
    title: "Bài 6: Sắp xếp câu (Satzbau)",
    type: "REORDER",
    questions: [
      { words: ["ich", "Formular", "das", "ausfüllen"], a: "Ich fülle das Formular aus." },
      { words: ["hat", "er", "Ziel", "sein", "erreicht"], a: "Er hat sein Ziel erreicht." },
      { words: ["wir", "sind", "unterwegs", "heute"], a: "Wir sind heute unterwegs." },
      { words: ["ich", "eine", "Fahrkarte", "kaufe"], a: "Ich kaufe eine Fahrkarte." },
      { words: ["sie", "sich", "vorstellt"], a: "Sie stellt sich vor." }
    ]
  },
  {
    id: 7,
    title: "Bài 7: Viết lại câu (B1 nhẹ)",
    type: "REWRITE",
    questions: [
      { prompt: "Ich habe das Formular ausgefüllt. (Chuyển sang Präsens)", a: "Ich fülle das Formular aus." },
      { prompt: "Er hat das Ziel erreicht. (Chuyển sang Präsens)", a: "Er erreicht das Ziel." },
      { prompt: "Ich miete eine Wohnung. (Chuyển sang Perfekt)", a: "Ich habe eine Wohnung gemietet." }
    ]
  },
  {
    id: 8,
    title: "Bài 8: Điền giới từ/ý nghĩa (B1)",
    type: "FILL_TYPING",
    questions: [
      { q: "Ich wohne {blank} der Stadt. (außerhalb / klar)", a: "außerhalb" },
      { q: "Das dauert {blank} eine Stunde. (höchstens / Umwelt)", a: "höchstens" },
      { q: "Er ist {blank} zur Arbeit. (unterwegs / Vertrag)", a: "unterwegs" }
    ]
  },
  {
    id: 9,
    title: "Bài 9: Viết câu với từ cho sẵn",
    type: "FREE_TEXT",
    questions: [
      { prompt: "Passwort", hint: "Mein Passwort ist sicher." },
      { prompt: "Vertrag", hint: "Ich unterschreibe den Vertrag." },
      { prompt: "umweltfreundlich", hint: "Das Fahrrad ist umweltfreundlich." },
      { prompt: "zurückfahren", hint: "Ich fahre morgen zurück." },
      { prompt: "Organisation", hint: "Die Organisation hilft Kindern." }
    ]
  },
  {
    id: 10,
    title: "Bài 10: Dịch câu (Deutsch ↔ Viet)",
    type: "FREE_TEXT",
    questions: [
      { prompt: "Ich habe den Zugangscode vergessen.", hint: "Tôi đã quên mã truy cập." },
      { prompt: "Wir sind unterwegs nach Berlin.", hint: "Chúng tôi đang trên đường đến Berlin." },
      { prompt: "Die Organisation hilft vielen Menschen.", hint: "Tổ chức giúp nhiều người." },
      { prompt: "Tôi cần đăng ký.", hint: "Ich muss mich anmelden." },
      { prompt: "Anh ấy đã thuê một căn hộ.", hint: "Er hat eine Wohnung gemietet." }
    ]
  }
];

export default function Lektion22Exercises() {
  const [currentIdx, setCurrentIdx] = useState(0);
  
  const exercise = EXERCISES[currentIdx];

  const renderExercise = () => {
    switch (exercise.type) {
      case 'MATCHING': return <ExMatching data={exercise} />;
      case 'FILL_OPTIONS': return <ExFillOptions data={exercise} />;
      case 'FILL_TYPING': return <ExFillTyping data={exercise} />;
      case 'FILL_TYPING_MULTI': return <ExFillTypingMulti data={exercise} />;
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

export function ExMatching({ data }: { data: any }) {
  const [leftArr, setLeftArr] = useState<{id:number, text:string}[]>([]);
  const [rightArr, setRightArr] = useState<{id:number, text:string}[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [matched, setMatched] = useState<number[]>([]);

  useEffect(() => {
    // Shuffle on mount
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
             <button
               key={'L'+item.id}
               onClick={() => !matched.includes(item.id) && setSelectedLeft(item.id)}
               disabled={matched.includes(item.id)}
               className={`w-full text-left md:text-center px-4 md:px-6 py-4 rounded-2xl font-bold transition-all text-sm md:text-base border-2 ${
                 matched.includes(item.id) ? 'bg-emerald-100 border-emerald-200 text-emerald-700 opacity-50 cursor-not-allowed transform scale-95' :
                 selectedLeft === item.id ? 'bg-theme-primary border-theme-primary text-white shadow-lg scale-105' :
                 'bg-theme-cream border-transparent text-theme-dark hover:border-theme-primary/30'
               }`}
             >
               {item.text}
             </button>
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

export function ExFillOptions({ data }: { data: any }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setAnswers({});
    setChecked(false);
  }, [data]);

  const allComplete = Object.keys(answers).length === data.questions.length;
  const isCorrect = (idx: number) => answers[idx] === data.questions[idx].a;
  const allCorrect = checked && data.questions.every((_, i) => isCorrect(i));

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
          return (
            <div key={i} className="flex flex-wrap items-center gap-2 text-lg font-medium text-theme-dark bg-theme-dark/5 p-4 rounded-2xl">
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
            <button 
              onClick={() => setChecked(true)} 
              disabled={!allComplete}
              className="px-8 py-3 bg-theme-accent text-white font-black rounded-2xl shadow-xl hover:opacity-90 disabled:opacity-50 transition-all"
            >
              Kiểm tra
            </button>
         ) : (
            <button 
              onClick={() => { setChecked(false); setAnswers({}); }} 
              className="px-8 py-3 bg-theme-dark/10 text-theme-dark font-black rounded-2xl hover:bg-theme-dark/20 transition-all"
            >
              Làm lại
            </button>
         )}
      </div>
      {allCorrect && <div className="text-center font-bold text-emerald-500">Chính xác hoàn toàn!</div>}
    </div>
  )
}

export function ExFillTyping({ data }: { data: any }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  useEffect(() => { setAnswers({}); setChecked(false); }, [data]);

  const isCorrect = (idx: number) => answers[idx]?.trim().toLowerCase() === data.questions[idx].a.toLowerCase();

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {data.questions.map((q: any, i: number) => {
          const parts = q.q.split('{blank}');
          return (
            <div key={i} className="flex flex-wrap items-center gap-2 text-lg font-medium text-theme-dark bg-theme-dark/5 p-4 rounded-2xl">
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
         {!checked ? (
            <button onClick={() => setChecked(true)} className="px-8 py-3 bg-theme-accent text-white font-black rounded-2xl shadow-xl hover:opacity-90 transition-all">
              Kiểm tra
            </button>
         ) : (
            <button onClick={() => { setChecked(false); setAnswers({}); }} className="px-8 py-3 bg-theme-dark/10 text-theme-dark font-black rounded-2xl hover:bg-theme-dark/20 transition-all">
              Làm lại
            </button>
         )}
      </div>
    </div>
  )
}

export function ExFillTypingMulti({ data }: { data: any }) {
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
          
          return (
            <div key={i} className="flex flex-wrap items-center gap-2 text-[15px] md:text-lg font-medium text-theme-dark bg-theme-dark/5 p-4 rounded-2xl">
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
         {!checked ? <button onClick={() => setChecked(true)} className="px-8 py-3 bg-theme-accent text-white font-black rounded-2xl shadow-xl hover:opacity-90">Kiểm tra</button>
         : <button onClick={() => { setChecked(false); setAnswers({}); }} className="px-8 py-3 bg-theme-dark/10 font-black rounded-2xl">Làm lại</button>}
      </div>
    </div>
  )
}

export function ExMultipleChoice({ data }: { data: any }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  useEffect(() => { setAnswers({}); setChecked(false); }, [data]);

  return (
    <div className="space-y-8">
      {data.questions.map((q: any, i: number) => {
         const isCorrect = answers[i] === q.a;
         return (
           <div key={i} className="bg-theme-cream/30 p-6 rounded-3xl border border-theme-dark/5">
              <h4 className="text-xl font-bold text-theme-dark mb-4">{i+1}. {q.q}</h4>
              <div className="flex flex-col gap-3">
                 {q.options.map((opt: string) => {
                    const isSelected = answers[i] === opt;
                    const isWinningOpt = checked && opt === q.a;
                    const isWrongSelected = checked && isSelected && !isCorrect;
                    
                    return (
                      <button
                        key={opt}
                        onClick={() => { if(!checked) { setAnswers({...answers, [i]: opt}); } }}
                        className={`text-left p-4 rounded-xl font-bold border-2 transition-all ${
                           isWinningOpt ? 'bg-emerald-50 border-emerald-400 text-emerald-700' :
                           isWrongSelected ? 'bg-red-50 border-red-400 text-red-700' :
                           isSelected ? 'bg-theme-primary/10 border-theme-primary text-theme-primary' :
                           'bg-white border-transparent hover:border-theme-dark/10'
                        }`}
                      >
                         {opt}
                         {isWinningOpt && <CheckCircle2 className="inline float-right w-5 h-5 text-emerald-500" />}
                         {isWrongSelected && <XCircle className="inline float-right w-5 h-5 text-red-500" />}
                      </button>
                    )
                 })}
              </div>
           </div>
         )
      })}

      <div className="flex justify-end">
         {!checked ? <button onClick={() => setChecked(true)} disabled={Object.keys(answers).length < data.questions.length} className="px-8 py-3 bg-theme-accent text-white font-black rounded-2xl shadow-xl disabled:opacity-50">Kiểm tra</button>
         : <button onClick={() => { setChecked(false); setAnswers({}); }} className="px-8 py-3 bg-theme-dark/10 font-black rounded-2xl">Làm lại</button>}
      </div>
    </div>
  )
}

export function ExReorder({ data }: { data: any }) {
  const [qIndex, setQIndex] = useState(0);
  const q = data.questions[qIndex];
  
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [sentence, setSentence] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Initialize randomly
  useEffect(() => {
    setAvailableWords([...q.words].sort(() => Math.random() - 0.5));
    setSentence([]);
    setIsCorrect(null);
  }, [qIndex, data]);

  const addWord = (w: string, idx: number) => {
    setSentence([...sentence, w]);
    const nextAvail = [...availableWords];
    nextAvail.splice(idx, 1);
    setAvailableWords(nextAvail);
  };
  
  const removeWord = (w: string, idx: number) => {
    setAvailableWords([...availableWords, w]);
    const nextSent = [...sentence];
    nextSent.splice(idx, 1);
    setSentence(nextSent);
  };

  const checkSentence = () => {
     const joined = sentence.join(" ").replace(/\.$/, "").trim().toLowerCase();
     const target = q.a.replace(/\.$/, "").trim().toLowerCase();
     setIsCorrect(joined === target);
  };

  return (
     <div className="space-y-8">
        <div className="flex justify-between items-center text-sm font-bold text-theme-dark/50">
           <span>Câu {qIndex + 1} / {data.questions.length}</span>
           <span>Sắp xếp các từ để tạo thành câu chuẩn.</span>
        </div>

        <div className="min-h-[80px] p-4 border-b-2 border-dashed border-theme-dark/20 flex flex-wrap gap-2 items-center">
           {sentence.map((w, i) => (
              <button key={i} onClick={() => removeWord(w, i)} className="px-4 py-2 bg-theme-primary text-white font-bold rounded-xl shadow-lg transform hover:-translate-y-1 transition-all">
                {w}
              </button>
           ))}
           {sentence.length === 0 && <span className="text-theme-dark/20 font-bold italic">Bấm chọn từ bên dưới...</span>}
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
           {availableWords.map((w, i) => (
              <button key={i} onClick={() => addWord(w, i)} className="px-5 py-3 bg-theme-cream border-2 border-theme-dark/10 text-theme-dark font-bold rounded-xl shadow-sm hover:border-theme-primary/40 transition-all">
                {w}
              </button>
           ))}
        </div>

        {isCorrect !== null && (
           <div className={`p-4 rounded-2xl font-bold text-center ${isCorrect ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
              {isCorrect ? 'Tuyệt vời! Bạn đã xếp rất đúng.' : `Chưa chính xác. Đáp án: ${q.a}`}
           </div>
        )}

        <div className="flex justify-between pt-4">
           {isCorrect === null ? (
              <button onClick={checkSentence} disabled={availableWords.length > 0} className="w-full py-4 bg-theme-accent text-white font-black rounded-2xl shadow-xl disabled:opacity-50">
                Kiểm tra
              </button>
           ) : (
              <button onClick={() => {
                 if (qIndex < data.questions.length - 1) { setQIndex(qIndex + 1); }
                 else { setQIndex(0); } // loop back
              }} className="w-full py-4 bg-theme-dark text-white font-black rounded-2xl shadow-xl">
                {qIndex < data.questions.length - 1 ? 'Câu tiếp theo' : 'Làm lại từ đầu'}
              </button>
           )}
        </div>
     </div>
  );
}

export function ExRewrite({ data }: { data: any }) {
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
             <div className="font-bold text-theme-dark">{q.prompt}</div>
             <input 
               type="text"
               value={answers[i] || ""}
               onChange={(e) => { setAnswers({...answers, [i]: e.target.value}); setChecked(false); }}
               disabled={checked}
               className="w-full p-4 rounded-xl font-medium outline-none border-2 bg-white focus:border-theme-primary/50"
               placeholder="Viết lại câu mới..."
             />
             {checked && (
                <div className={`text-sm font-bold flex items-center gap-2 ${isCorrect(i) ? 'text-emerald-500' : 'text-red-500'}`}>
                   {isCorrect(i) ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                   {isCorrect(i) ? 'Chính xác!' : `Gợi ý: ${q.a}`}
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

export function ExFreeText({ data }: { data: any }) {
  const [showHints, setShowHints] = useState<Record<number, boolean>>({});

  useEffect(() => { setShowHints({}); }, [data]);

  return (
    <div className="space-y-8">
      <div className="px-4 py-3 bg-blue-50 text-blue-800 text-sm font-bold rounded-xl">
         Lưu ý: Bạn có thể tự do viết câu. Hãy tự so sánh với gợi ý đáp án bên dưới nhé.
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
               placeholder="Viết hoặc dịch câu của bạn vào đây..."
             />
             
             {!showHints[i] ? (
               <button onClick={() => setShowHints({...showHints, [i]: true})} className="text-sm font-bold text-theme-dark/50 hover:text-theme-dark flex items-center gap-1">
                  <HelpCircle size={16} /> Xem gợi ý đáp án
               </button>
             ) : (
               <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800 font-bold">
                 Gợi ý: {q.hint}
               </div>
             )}
          </div>
        ))}
      </div>
    </div>
  )
}
