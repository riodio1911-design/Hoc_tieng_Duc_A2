import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, CheckCircle2, Lock, FileEdit, Type, CheckSquare, List, AlertCircle, RefreshCw } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion24Exercises({ playAudio, playingId }: Props) {
  const [activeExercise, setActiveExercise] = useState<number>(0);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);

  const exercises = [
    { title: "Bài 1: Nối từ", icon: <List className="w-5 h-5"/>, color: "text-blue-600", bg: "bg-blue-100" },
    { title: "Bài 2: Chọn đáp án", icon: <CheckSquare className="w-5 h-5"/>, color: "text-emerald-600", bg: "bg-emerald-100" },
    { title: "Bài 3: Điền từ", icon: <Type className="w-5 h-5"/>, color: "text-amber-600", bg: "bg-amber-100" },
    { title: "Bài 4: Số ít / Nhiều", icon: <FileEdit className="w-5 h-5"/>, color: "text-purple-600", bg: "bg-purple-100" },
    { title: "Bài 5: Chia động từ", icon: <FileEdit className="w-5 h-5"/>, color: "text-rose-600", bg: "bg-rose-100" },
    { title: "Bài 6: Präteritum", icon: <FileEdit className="w-5 h-5"/>, color: "text-indigo-600", bg: "bg-indigo-100" },
    { title: "Bài 7: Viết lại câu", icon: <Type className="w-5 h-5"/>, color: "text-cyan-600", bg: "bg-cyan-100" },
    { title: "Bài 8: Tìm lỗi sai", icon: <AlertCircle className="w-5 h-5"/>, color: "text-red-600", bg: "bg-red-100" },
    { title: "Bài 9: Đặt câu", icon: <FileEdit className="w-5 h-5"/>, color: "text-teal-600", bg: "bg-teal-100" },
    { title: "Bài 10: Viết đoạn", icon: <Type className="w-5 h-5"/>, color: "text-orange-600", bg: "bg-orange-100" },
  ];

  const markComplete = (idx: number) => {
    if (!completedExercises.includes(idx)) {
      setCompletedExercises([...completedExercises, idx]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="bg-white rounded-[32px] shadow-2xl border-4 border-theme-dark/5 p-6 md:p-8 flex flex-col md:flex-row gap-8 min-h-[700px]">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 shrink-0 space-y-2 flex flex-col hide-scrollbar overflow-y-auto max-h-[700px]">
          <h3 className="font-display font-black text-theme-dark text-xl mb-4 px-2">Danh sách Bài tập<br/><span className="text-sm font-bold text-theme-dark/50">(Lektion 24 Nâng cấp)</span></h3>
          {exercises.map((ex, idx) => {
            const isActive = activeExercise === idx;
            const isCompleted = completedExercises.includes(idx);
            
            return (
              <button
                key={idx}
                onClick={() => setActiveExercise(idx)}
                className={`flex items-center gap-3 p-3 rounded-2xl transition-all text-left w-full
                  ${isActive ? 'bg-theme-dark text-white shadow-xl scale-105' : 'hover:bg-theme-dark/5 text-theme-dark/80'}
                `}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isActive ? 'bg-white/20' : ex.bg + ' ' + ex.color}`}>
                  {isCompleted ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : ex.icon}
                </div>
                <span className="font-bold text-sm leading-tight flex-1">{ex.title}</span>
              </button>
            )
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-theme-cream/30 rounded-3xl border-2 border-theme-dark/5 p-4 md:p-8 overflow-y-auto hide-scrollbar relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExercise}
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -10}}
              transition={{duration: 0.2}}
              className="h-full"
            >
              <div className="mb-8">
                 <h2 className="text-2xl md:text-3xl font-black text-theme-dark flex items-center gap-3">
                   {exercises[activeExercise].title}
                 </h2>
              </div>
              
              <div className="pb-10">
                {activeExercise === 0 && <Exercise1 onComplete={() => markComplete(0)} />}
                {activeExercise === 1 && <Exercise2 onComplete={() => markComplete(1)} />}
                {activeExercise === 2 && <Exercise3 onComplete={() => markComplete(2)} />}
                {activeExercise === 3 && <Exercise4 onComplete={() => markComplete(3)} />}
                {activeExercise === 4 && <Exercise5 onComplete={() => markComplete(4)} />}
                {activeExercise === 5 && <Exercise6 onComplete={() => markComplete(5)} />}
                {activeExercise === 6 && <Exercise7 onComplete={() => markComplete(6)} />}
                {activeExercise === 7 && <Exercise8 onComplete={() => markComplete(7)} />}
                {activeExercise === 8 && <Exercise9 onComplete={() => markComplete(8)} />}
                {activeExercise === 9 && <Exercise10 onComplete={() => markComplete(9)} />}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ====================== BÀI 1 ======================
function Exercise1({ onComplete }: { onComplete: () => void }) {
  const pairs = [
    { de: "der Pass", vi: "hộ chiếu" },
    { de: "das Visum", vi: "visa" },
    { de: "der Zoll", vi: "hải quan" },
    { de: "das Ausland", vi: "nước ngoài" },
    { de: "die Erfahrung", vi: "trải nghiệm" },
    { de: "der Abflug", vi: "chuyến bay khởi hành" },
    { de: "die Ankunft", vi: "sự đến nơi" },
    { de: "der Anschluss", vi: "chuyến nối" },
    { de: "der Alltag", vi: "cuộc sống hàng ngày" },
    { de: "die Geburt", vi: "ca sinh" }
  ];
  
  const [selectedDe, setSelectedDe] = useState<string | null>(null);
  const [selectedVi, setSelectedVi] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [showError, setShowError] = useState(false);

  // Shuffle logic only on mount
  const [deList, setDeList] = useState<string[]>([]);
  const [viList, setViList] = useState<string[]>([]);

  React.useEffect(() => {
    setDeList([...pairs.map(p => p.de)].sort(() => Math.random() - 0.5));
    setViList([...pairs.map(p => p.vi)].sort(() => Math.random() - 0.5));
  }, []);

  const handleDeClick = (w: string) => {
    if (matched.includes(w)) return;
    if (selectedDe === w) {
      setSelectedDe(null);
      return;
    }
    setSelectedDe(w);
    checkMatch(w, selectedVi);
  };

  const handleViClick = (w: string) => {
    if (matched.includes(w)) return;
    if (selectedVi === w) {
      setSelectedVi(null);
      return;
    }
    setSelectedVi(w);
    checkMatch(selectedDe, w);
  };

  const checkMatch = (de: string | null, vi: string | null) => {
    if (de && vi) {
      const pair = pairs.find(p => p.de === de && p.vi === vi);
      if (pair) {
        const newMatched = [...matched, de, vi];
        setMatched(newMatched);
        setSelectedDe(null);
        setSelectedVi(null);
        setShowError(false);
        if (newMatched.length === 20) {
          onComplete();
        }
      } else {
        setShowError(true);
        setTimeout(() => {
          setSelectedDe(null);
          setSelectedVi(null);
          setShowError(false);
        }, 800);
      }
    }
  };

  return (
    <div className="space-y-6">
      <p className="font-bold text-theme-dark/70">Nối từ tiếng Đức với nghĩa tiếng Việt tương ứng.</p>
      
      {showError && <p className="text-red-500 font-bold text-center animate-pulse">Sai rồi, thử lại nhé!</p>}
      
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-3">
          {deList.map(w => (
            <button
              key={w}
              onClick={() => handleDeClick(w)}
              disabled={matched.includes(w)}
              className={`w-full p-3 rounded-xl font-bold transition-all border-2 
                ${matched.includes(w) ? 'bg-emerald-100 border-emerald-200 text-emerald-700 opacity-50 cursor-not-allowed' :
                  selectedDe === w ? 'bg-theme-primary border-theme-primary text-white scale-105 shadow-lg' : 
                  'bg-white border-theme-dark/10 text-theme-dark hover:border-theme-primary/50'
                }`}
            >
              {w}
            </button>
          ))}
        </div>
        <div className="space-y-3">
          {viList.map(w => (
            <button
              key={w}
              onClick={() => handleViClick(w)}
              disabled={matched.includes(w)}
              className={`w-full p-3 rounded-xl font-bold transition-all border-2 
                ${matched.includes(w) ? 'bg-emerald-100 border-emerald-200 text-emerald-700 opacity-50 cursor-not-allowed' :
                  selectedVi === w ? 'bg-amber-500 border-amber-500 text-white scale-105 shadow-lg' : 
                  'bg-white border-theme-dark/10 text-theme-dark hover:border-amber-500/50'
                }`}
            >
              {w}
            </button>
          ))}
        </div>
      </div>
      
      {matched.length === 20 && (
         <div className="mt-8 bg-emerald-100 text-emerald-800 p-4 rounded-xl flex items-center justify-center gap-2 font-black text-lg">
            <CheckCircle2 /> Hoàn thành xuất sắc!
         </div>
      )}
    </div>
  );
}

// ====================== BÀI 2 ======================
function Exercise2({ onComplete }: { onComplete: () => void }) {
  const questions = [
    { q: "Ich habe meinen ______.", opts: ["Pass", "Tisch"], a: "Pass" },
    { q: "Ich brauche ein ______.", opts: ["Visum", "Brot"], a: "Visum" },
    { q: "Ich gehe durch den ______.", opts: ["Zoll", "Stuhl"], a: "Zoll" },
    { q: "Ich arbeite im ______.", opts: ["Ausland", "Fenster"], a: "Ausland" },
    { q: "Das ist eine gute ______.", opts: ["Erfahrung", "Tür"], a: "Erfahrung" },
    { q: "Der ______ ist um 9 Uhr.", opts: ["Abflug", "Wasser"], a: "Abflug" },
    { q: "Die ______ ist spät.", opts: ["Ankunft", "Lampe"], a: "Ankunft" },
    { q: "Ich habe keinen ______.", opts: ["Anschluss", "Buch"], a: "Anschluss" },
    { q: "Mein ______ ist stressig.", opts: ["Alltag", "Auto"], a: "Alltag" },
    { q: "Die ______ war schwer.", opts: ["Geburt", "Tasche"], a: "Geburt" },
  ];

  const [answers, setAnswers] = useState<Record<number, string>>({});

  const isComplete = Object.keys(answers).length === 10 && Object.entries(answers).every(([i, v]) => v === questions[Number(i)].a);

  if (isComplete) onComplete();

  return (
    <div className="space-y-4">
      <p className="font-bold text-theme-dark/70 mb-6">Chọn đáp án đúng điền vào chỗ trống.</p>
      {questions.map((q, i) => (
         <div key={i} className="bg-white p-4 rounded-xl border border-theme-dark/10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="font-bold text-theme-dark text-lg">
               {i+1}. {q.q.replace('______', answers[i] ? answers[i] : '______')}
            </div>
            <div className="flex gap-2">
               {q.opts.map(opt => {
                 const isSelected = answers[i] === opt;
                 const isCorrect = q.a === opt;
                 let btnClass = "bg-theme-cream border-2 border-theme-dark/5 text-theme-dark/70";
                 if (isSelected) {
                    btnClass = isCorrect ? "bg-emerald-500 border-emerald-500 text-white" : "bg-red-500 border-red-500 text-white";
                 }
                 return (
                   <button 
                     key={opt}
                     onClick={() => setAnswers({...answers, [i]: opt})}
                     className={`px-4 py-2 font-bold rounded-lg transition-colors ${btnClass}`}
                   >
                     {opt}
                   </button>
                 )
               })}
            </div>
         </div>
      ))}
    </div>
  );
}

// ====================== BÀI 3, 4, 5, 6, 8 (Input based) ======================
const inputExercises = {
  ex3: {
    title: "Điền từ vào chỗ trống",
    desc: "(abholen, arbeiten, beantragen, verlängern, leiten, vermissen, gefallen, passieren)",
    questions: [
      { q: "Ich ______ meinen Freund vom Flughafen.", a: ["hole ab", "hole...ab"] },
      { q: "Ich ______ im Ausland.", a: ["arbeite"] },
      { q: "Ich ______ ein Visum.", a: ["beantrage"] },
      { q: "Ich ______ meinen Pass.", a: ["verlängere"] },
      { q: "Er ______ ein Team.", a: ["leitet"] },
      { q: "Ich ______ meine Familie.", a: ["vermisse"] },
      { q: "Das ______ mir sehr.", a: ["gefällt"] },
      { q: "Was ______ hier?", a: ["passiert"] },
      { q: "Ich ______ oft im Krankenhaus.", a: ["arbeite"] },
      { q: "Sie ______ ein Projekt.", a: ["leitet"] },
    ]
  },
  ex4: {
    title: "Viết dạng số nhiều",
    desc: "Viết chính xác cả quán từ die. VD: der Pass -> die Pässe",
    questions: [
      { q: "der Pass →", a: ["die Pässe", "pässe", "die pässe"] },
      { q: "die Erfahrung →", a: ["die Erfahrungen", "erfahrungen", "die erfahrungen"] },
      { q: "die Kollegin →", a: ["die Kolleginnen", "kolleginnen", "die kolleginnen"] },
      { q: "die Geburt →", a: ["die Geburten", "geburten"] },
      { q: "der Anschluss →", a: ["die Anschlüsse", "anschlüsse"] },
      { q: "der Abflug →", a: ["die Abflüge", "abflüge"] },
      { q: "die Familie →", a: ["die Familien", "familien"] },
      { q: "das Visum →", a: ["die Visa", "visa"] },
      { q: "die Tätigkeit →", a: ["die Tätigkeiten", "tätigkeiten"] },
      { q: "der Praktikant →", a: ["die Praktikanten", "praktikanten"] },
    ]
  },
  ex5: {
    title: "Chia động từ (Präsens - Hiện tại)",
    desc: "Chia động từ trong ngoặc",
    questions: [
      { q: "Ich ______ viel. (arbeiten)", a: ["arbeite"] },
      { q: "Er ______ ein Team. (leiten)", a: ["leitet"] },
      { q: "Ich ______ dich. (vermissen)", a: ["vermisse"] },
      { q: "Das ______ mir. (gefallen)", a: ["gefällt"] },
      { q: "Was ______? (passieren)", a: ["passiert"] },
      { q: "Ich ______ dich ab. (abholen)", a: ["hole"] },
      { q: "Ich ______ ein Visum. (beantragen)", a: ["beantrage"] },
      { q: "Ich ______ meinen Pass. (verlängern)", a: ["verlängere"] },
      { q: "Sie ______ im Ausland. (arbeiten - số ít/nhiều)", a: ["arbeitet", "arbeiten"] },
      { q: "Er ______ das Projekt. (leiten)", a: ["leitet"] },
    ]
  },
  ex6: {
    title: "Chia động từ thì Quá khứ (Präteritum)",
    desc: "Viết dạng Präteritum của động từ trong ngoặc",
    questions: [
      { q: "Ich ______ im Ausland. (sein)", a: ["war"] },
      { q: "Ich ______ viel Arbeit. (haben)", a: ["hatte"] },
      { q: "Ich ______ oft arbeiten. (müssen)", a: ["musste"] },
      { q: "Ich ______ nicht kommen. (können)", a: ["konnte"] },
      { q: "Ich ______ helfen. (wollen)", a: ["wollte"] },
      { q: "Ich ______ viel lernen. (müssen)", a: ["musste"] },
      { q: "Ich ______ sehr müde. (sein)", a: ["war"] },
      { q: "Ich ______ keine Zeit. (haben)", a: ["hatte"] },
      { q: "Ich ______ nachts arbeiten. (müssen)", a: ["musste"] },
      { q: "Ich ______ Deutsch lernen. (wollen)", a: ["wollte"] },
    ]
  },
  ex7: {
    title: "Viết lại câu",
    desc: "Dùng liên từ weil hoặc dass",
    questions: [
      { q: "Ich war glücklich, ______ ich viel gelernt habe", a: ["weil", "dass"] },
      { q: "Ich denke, ______ es gut war", a: ["dass"] },
      { q: "Ich war traurig, ______ ich meine Familie vermisst habe", a: ["weil"] },
      { q: "Ich finde, ______ die Arbeit interessant ist", a: ["dass"] },
      { q: "Ich war müde, ______ ich viel gearbeitet habe", a: ["weil"] },
      { q: "Ich glaube, ______ das wichtig ist", a: ["dass"] },
      { q: "Ich war zufrieden, ______ ich Erfolg hatte", a: ["weil"] },
      { q: "Ich denke, ______ das eine gute Erfahrung war", a: ["dass"] },
      { q: "Ich war nervös, ______ alles neu war", a: ["weil"] },
      { q: "Ich finde, ______ das nicht einfach ist", a: ["dass"] },
    ]
  },
  ex8: {
    title: "Tìm và sửa lỗi sai",
    desc: "Tìm 1 từ sai và gõ từ đúng vào ô trống.",
    questions: [
      { q: "Ich habe viele Erfahrung. ->", a: ["Erfahrungen"] },
      { q: "Ich habe mein Pass verloren. ->", a: ["meinen Pass", "meinen"] },
      { q: "Ich brauche ein Visums. ->", a: ["ein Visum", "Visum"] },
      { q: "Ich habe meine Familie vermisstet. ->", a: ["vermisst"] },
      { q: "Das gefällt mir sehr gutt. ->", a: ["gut"] },
      { q: "Ich habe im Ausland arbeiten. ->", a: ["gearbeitet"] },
      { q: "Ich war sehr müder. ->", a: ["müde"] },
      { q: "Ich habe viel gelerntet. ->", a: ["gelernt"] },
      { q: "Ich musste gearbeitet. ->", a: ["arbeiten"] },
      { q: "Ich habe ein Projekt geleitetet. ->", a: ["geleitet"] },
    ]
  }
};

function GenericInputExercise({ data, onComplete }: { data: any, onComplete: () => void }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  
  const isComplete = Object.keys(answers).length === 10 && Object.entries(answers).every(([i, v]) => {
     return data.questions[Number(i)].a.some((ans: string) => ans.toLowerCase() === String(v).toLowerCase().trim());
  });

  if (isComplete) onComplete();

  return (
    <div className="space-y-4">
      <p className="font-bold text-theme-dark text-lg">{data.title}</p>
      <p className="font-bold text-theme-dark/60 text-sm mb-6">{data.desc}</p>
      
      {data.questions.map((q: any, i: number) => {
         const val = answers[i] || '';
         let statusColor = "border-theme-dark/10";
         if (val.length > 0) {
            const isCorrect = q.a.some((ans: string) => ans.toLowerCase() === val.toLowerCase().trim());
            statusColor = isCorrect ? "border-emerald-500 bg-emerald-50 text-emerald-900" : "border-red-500 bg-red-50 text-red-900";
         }
         
         return (
           <div key={i} className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm border border-theme-dark/5">
             <span className="font-bold w-6 text-theme-dark/50">{i+1}.</span>
             <span className="font-bold text-theme-dark flex-1">{q.q}</span>
             <input 
               type="text" 
               value={val}
               onChange={(e) => setAnswers({...answers, [i]: e.target.value})}
               className={`w-36 md:w-64 p-2 rounded-lg border-2 font-bold focus:outline-none focus:ring-2 focus:ring-theme-primary transition-colors ${statusColor}`}
               placeholder="..."
             />
           </div>
         )
      })}
    </div>
  );
}

function Exercise3({ onComplete }: { onComplete: () => void }) { return <GenericInputExercise data={inputExercises.ex3} onComplete={onComplete} /> }
function Exercise4({ onComplete }: { onComplete: () => void }) { return <GenericInputExercise data={inputExercises.ex4} onComplete={onComplete} /> }
function Exercise5({ onComplete }: { onComplete: () => void }) { return <GenericInputExercise data={inputExercises.ex5} onComplete={onComplete} /> }
function Exercise6({ onComplete }: { onComplete: () => void }) { return <GenericInputExercise data={inputExercises.ex6} onComplete={onComplete} /> }
function Exercise7({ onComplete }: { onComplete: () => void }) { return <GenericInputExercise data={inputExercises.ex7} onComplete={onComplete} /> }
function Exercise8({ onComplete }: { onComplete: () => void }) { return <GenericInputExercise data={inputExercises.ex8} onComplete={onComplete} /> }

// ====================== BÀI 9 ======================
function Exercise9({ onComplete }: { onComplete: () => void }) {
  const words = ["Pass", "Ausland", "arbeiten", "vermissen", "Erfahrung", "Zoll", "Visum", "Alltag", "gefallen", "passieren"];
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const checkAll = () => {
     let allCorrect = true;
     words.forEach((w, i) => {
        const val = answers[i] || '';
        if (val.length < 5 || !val.toLowerCase().includes(w.toLowerCase().replace('en', ''))) {
           allCorrect = false;
        }
     });
     if (allCorrect) onComplete();
  };

  return (
    <div className="space-y-4">
      <p className="font-bold text-theme-dark text-lg mb-4">Viết 10 câu với 10 từ gợi ý sau</p>
      {words.map((w, i) => {
         const val = answers[i] || '';
         const isValidLength = val.length > 5;
         // Relaxed check: just checks if standard form is typed, or partial
         const hasWord = val.toLowerCase().includes(w.toLowerCase().substring(0, 4)); 
         const isCorrect = isValidLength && hasWord;
         
         return (
           <div key={i} className="bg-white p-4 justify-between rounded-xl shadow-sm border border-theme-dark/10 flex flex-col md:flex-row gap-4 md:items-center">
             <div className="flex items-center gap-3 w-32 shrink-0">
                <span className="font-black text-theme-primary px-3 py-1 bg-theme-primary/10 rounded-lg">{w}</span>
             </div>
             <input 
               type="text" 
               value={val}
               onChange={(e) => setAnswers({...answers, [i]: e.target.value})}
               onBlur={checkAll}
               className={`flex-1 p-2 rounded-lg border-2 font-medium focus:outline-none focus:ring-2 focus:ring-theme-primary ${val.length > 0 ? (isCorrect ? 'border-emerald-500' : 'border-red-500') : 'border-theme-dark/10'}`}
               placeholder="Gõ câu của bạn..."
             />
           </div>
         )
      })}
    </div>
  );
}

// ====================== BÀI 10 (AI Evaluation) ======================
function Exercise10({ onComplete }: { onComplete: () => void }) {
  const [text, setText] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [feedback, setFeedback] = useState<any>(null);

  const evaluateText = async () => {
    if (text.trim().length < 30) return;
    setIsEvaluating(true);
    setFeedback(null);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: `ACT AS A STRICT GERMAN TEACHER (A2-B1 Level).
The student is required to write a short paragraph (8-10 sentences) about the topic: "Eine Erfahrung im Ausland" (Một trải nghiệm ở nước ngoài).
They must use past tense (Präteritum/Perfekt) and ideally include hints like: Ich war im Ausland, Ich habe dort gearbeitet, Ich musste..., Ich habe gelernt..., Ich habe vermisst...

Student's text: "${text}"

Evaluate strictly and return JSON with this EXACT structure:
{
  "score": number (0-100),
  "grammar": "string (Grammar feedback in Vietnamese)",
  "vocabulary": "string (Vocabulary feedback in Vietnamese)",
  "coherence": "string (Coherence & structure feedback in Vietnamese)",
  "suggestion": "string (How to rewrite it better in German)"
}`,
        config: { responseMimeType: "application/json" }
      });

      const result = JSON.parse(response.text || '{}');
      setFeedback(result);
      if (result.score >= 60) onComplete();
    } catch (err) {
      console.error(err);
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div className="space-y-6">
       <div className="bg-theme-secondary/10 p-6 rounded-2xl border border-theme-secondary/20">
          <h3 className="font-black text-theme-secondary text-xl mb-4">Viết đoạn văn (8–10 câu)</h3>
          <p className="font-bold text-theme-dark/80 mb-2">Chủ đề: Một trải nghiệm ở nước ngoài</p>
          <div className="text-sm font-medium text-theme-dark/70 bg-white p-4 rounded-xl border border-theme-dark/10">
             <p className="font-bold mb-2">Gợi ý dùng (Präteritum / Perfekt):</p>
             <ul className="list-disc pl-5 space-y-1">
                <li>Ich war im Ausland</li>
                <li>Ich habe dort gearbeitet</li>
                <li>Ich musste…</li>
                <li>Ich habe gelernt…</li>
                <li>Ich habe vermisst…</li>
             </ul>
          </div>
       </div>

       <textarea 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Viết đoạn văn tiếng Đức của bạn ở đây..."
          className="w-full h-48 p-4 rounded-2xl border-2 border-theme-dark/20 focus:border-theme-primary focus:ring-4 focus:ring-theme-primary/20 transition-all resize-none font-medium text-lg leading-relaxed shadow-inner"
       />

       <button 
          onClick={evaluateText}
          disabled={isEvaluating || text.trim().length < 30}
          className="w-full py-4 bg-theme-dark text-white rounded-2xl font-black text-lg hover:bg-theme-primary transition-all disabled:opacity-50 flex items-center justify-center shadow-xl shadow-theme-dark/20"
       >
          {isEvaluating ? <div className="animate-spin w-6 h-6 border-4 border-white/30 border-t-white rounded-full"/> : "AI Chấm Điểm Bài Viết"}
       </button>

       {feedback && (
          <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} className="bg-white rounded-3xl p-6 shadow-2xl border-4 border-theme-dark/5 space-y-6">
             <div className="flex items-center gap-6 pb-6 border-b-2 border-theme-dark/5">
                <div className={`w-24 h-24 rounded-full flex flex-col items-center justify-center font-black shadow-inner border-4 ${feedback.score >= 80 ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : feedback.score >= 60 ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
                   <span className="text-3xl leading-none">{feedback.score}</span>
                   <span className="text-xs uppercase tracking-widest mt-1">Điểm</span>
                </div>
                <div className="flex-1">
                   <h3 className="text-2xl font-black text-theme-dark">Kết quả đánh giá</h3>
                   <p className="font-bold text-theme-dark/60 mt-1">Gemini AI Linguistics Engine</p>
                </div>
             </div>
             <div className="space-y-4">
                <div className="bg-emerald-50 p-4 rounded-2xl">
                   <h4 className="font-black text-emerald-800 text-sm uppercase tracking-wider mb-2">Ngữ pháp</h4>
                   <p className="font-medium text-emerald-900/80">{feedback.grammar}</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-2xl">
                   <h4 className="font-black text-amber-800 text-sm uppercase tracking-wider mb-2">Từ vựng</h4>
                   <p className="font-medium text-amber-900/80">{feedback.vocabulary}</p>
                </div>
                <div className="bg-theme-secondary/5 p-4 rounded-2xl">
                   <h4 className="font-black text-theme-secondary text-sm uppercase tracking-wider mb-2">Gợi ý viết lại</h4>
                   <p className="font-bold italic text-theme-dark">{feedback.suggestion}</p>
                </div>
             </div>
          </motion.div>
       )}
    </div>
  );
}
