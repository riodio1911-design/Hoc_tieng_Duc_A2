import React, { useState, useMemo } from 'react';
import { VOCABULARY_DATA, VocabularyItem, GrammarItem } from '../constants';
import { FileText, CheckCircle2, XCircle, RotateCcw, ChevronRight } from 'lucide-react';

type Question = {
  id: string;
  type: 'vocab' | 'grammar';
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

const MODULES = [
  { id: 1, title: 'Modul 1 (Lektion 1-3)', les: ['l1', 'l2', 'l3'] },
  { id: 2, title: 'Modul 2 (Lektion 4-6)', les: ['l4', 'l5', 'l6'] },
  { id: 3, title: 'Modul 3 (Lektion 7-9)', les: ['l7', 'l8', 'l9'] },
  { id: 4, title: 'Modul 4 (Lektion 10-12)', les: ['l10', 'l11', 'l12'] },
  { id: 5, title: 'Modul 5 (Lektion 13-15)', les: ['l13', 'l14', 'l15'] },
  { id: 6, title: 'Modul 6 (Lektion 16-18)', les: ['l16', 'l17', 'l18'] },
  { id: 7, title: 'Modul 7 (Lektion 19-21)', les: ['l19', 'l20', 'l21'] },
  { id: 8, title: 'Modul 8 (Lektion 22-24)', les: ['l22', 'l23', 'l24'] },
];

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

export default function ReviewModulTests() {
  const [selectedModul, setSelectedModul] = useState<number | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const startTest = (moduleId: number) => {
    setSelectedModul(moduleId);
    const mod = MODULES.find(m => m.id === moduleId)!;
    
    let allVocab: VocabularyItem[] = [];
    let allGrammar: GrammarItem[] = [];

    mod.les.forEach(lId => {
       const lesson = VOCABULARY_DATA.find(l => l.id === lId);
       if (lesson) {
          allVocab = [...allVocab, ...lesson.items];
          if (lesson.grammar) allGrammar = [...allGrammar, ...lesson.grammar];
       }
    });

    const selectedVocabs = shuffle(allVocab).slice(0, 7);
    const selectedGrammars = shuffle(allGrammar).slice(0, 3);

    const generatedQs: Question[] = [];

    selectedVocabs.forEach((v, index) => {
        const optionPool = shuffle(allVocab.filter(i => i.id !== v.id)).slice(0, 3).map(i => i.meaning);
        optionPool.push(v.meaning);
        generatedQs.push({
            id: `v-${index}`,
            type: 'vocab',
            question: `Ý nghĩa của từ "${v.word}" là gì?`,
            options: shuffle(optionPool),
            correctAnswer: v.meaning,
            explanation: v.example ? `${v.word}: ${v.example} (${v.exampleTranslation})` : ''
        });
    });

    const realFinalQs: Question[] = [];
    selectedVocabs.forEach((v, idx) => {
        const optionPool = shuffle(allVocab.filter(i => i.id !== v.id)).slice(0, 3).map(i => i.meaning);
        optionPool.push(v.meaning);
        realFinalQs.push({
            id: `fv-${idx}`,
            type: 'vocab',
            question: `Từ vựng: "${v.word}" có nghĩa là gì?`,
            options: shuffle(optionPool),
            correctAnswer: v.meaning,
            explanation: v.example ? `Ví dụ: ${v.example} (${v.exampleTranslation})` : ''
        });
    });

    selectedGrammars.forEach((g, idx) => {
        const optionPool = shuffle(allGrammar.filter(i => i.id !== g.id)).slice(0, 3).map(i => i.meaning);
        optionPool.push(g.meaning);
        realFinalQs.push({
            id: `fg-${idx}`,
            type: 'grammar',
            question: `Ngữ pháp: "${g.word}" dùng để làm gì?`,
            options: shuffle(optionPool),
            correctAnswer: g.meaning,
            explanation: `Quy tắc: ${g.rule}\nVí dụ: ${g.example}`
        });
    });

    setQuestions(shuffle(realFinalQs));
    setCurrentIdx(0);
    setScore(0);
    setSelectedOpt(null);
    setShowResult(false);
  };

  const handleAnswer = (opt: string) => {
    if (selectedOpt) return;
    setSelectedOpt(opt);
    if (opt === questions[currentIdx].correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelectedOpt(null);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setSelectedModul(null);
    setQuestions([]);
    setCurrentIdx(0);
    setSelectedOpt(null);
    setShowResult(false);
    setScore(0);
  };

  if (!selectedModul) {
    return (
      <div className="space-y-6">
        <div className="bg-sky-50 border-2 border-sky-200 p-6 rounded-2xl animate-fade-in">
           <h2 className="text-2xl font-black text-sky-700 flex items-center gap-2 mb-2">
              <FileText className="w-8 h-8" /> Kiểm tra Học phần (Modul Tests)
           </h2>
           <p className="text-theme-dark/80 font-medium">Làm bài kiểm tra tổng hợp (10 câu) cho từng Modul trong sách Menschen A2. Bài tập từ vựng và ngữ pháp giúp bạn củng cố kiến thức trước khi chuyển sang Modul mới.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
           {MODULES.map(m => (
             <button
                key={m.id}
                onClick={() => startTest(m.id)}
                className="bg-white p-6 rounded-2xl border-2 border-theme-dark/10 hover:border-sky-500 hover:shadow-lg transition-all text-center flex flex-col items-center gap-3"
             >
                <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center font-black text-xl">
                   {m.id}
                </div>
                <div>
                   <h3 className="font-black text-theme-dark">{m.title}</h3>
                </div>
             </button>
           ))}
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="bg-white rounded-[32px] p-8 md:p-12 text-center border-4 border-theme-dark/5 shadow-xl max-w-2xl mx-auto animate-fade-in">
        <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-sky-500" />
        </div>
        <h2 className="text-4xl font-black text-theme-dark mb-4">Hoàn thành Modul!</h2>
        <p className="text-theme-dark/60 font-medium text-lg mb-8">
           Bạn đã đạt <strong className="text-sky-500 text-2xl mx-2">{score}/{questions.length}</strong> điểm
        </p>
        <button 
           onClick={reset}
           className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-black rounded-2xl shadow-lg shadow-sky-500/20 transition-all flex items-center justify-center gap-2 mx-auto"
        >
           <RotateCcw className="w-5 h-5" /> Trở về danh sách Modul
        </button>
      </div>
    );
  }

  const q = questions[currentIdx];

  return (
    <div className="bg-white rounded-[32px] border-4 border-theme-dark/5 overflow-hidden flex flex-col h-[600px] shadow-xl animate-fade-in">
       <div className="bg-sky-500 text-white p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
             <div className="bg-white/20 p-2 rounded-lg">
                <FileText className="w-6 h-6" />
             </div>
             <div>
                <h3 className="font-black leading-tight">Modul {selectedModul} Test</h3>
                <p className="text-xs font-bold opacity-80 uppercase tracking-wider">Câu {currentIdx + 1}/{questions.length}</p>
             </div>
          </div>
          <button 
             onClick={reset}
             className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl font-bold transition-colors text-sm"
          >
             Thoát
          </button>
       </div>

       <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <div className="max-w-3xl mx-auto">
             <div className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-xs font-black uppercase tracking-wider rounded-lg mb-4">
                {q.type === 'vocab' ? 'Từ vựng' : 'Ngữ pháp'}
             </div>
             <h2 className="text-2xl md:text-3xl font-black text-theme-dark mb-8 leading-tight">
                {q.question}
             </h2>

             <div className="space-y-3">
                {q.options.map((opt, idx) => {
                   const isSelected = selectedOpt === opt;
                   const isCorrect = opt === q.correctAnswer;
                   let btnClass = "w-full text-left p-5 rounded-2xl border-2 font-bold transition-all flex items-center justify-between group ";
                   
                   if (!selectedOpt) {
                      btnClass += "border-theme-dark/10 hover:border-sky-500 hover:bg-sky-50";
                   } else {
                      if (isCorrect) {
                         btnClass += "border-emerald-500 bg-emerald-50 text-emerald-700";
                      } else if (isSelected) {
                         btnClass += "border-red-500 bg-red-50 text-red-700";
                      } else {
                         btnClass += "border-theme-dark/5 opacity-50";
                      }
                   }

                   return (
                      <button
                         key={idx}
                         onClick={() => handleAnswer(opt)}
                         disabled={!!selectedOpt}
                         className={btnClass}
                      >
                         <span className="text-lg leading-tight">{opt}</span>
                         {selectedOpt && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 ml-4" />}
                         {selectedOpt && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500 shrink-0 ml-4" />}
                      </button>
                   );
                })}
             </div>

             {selectedOpt && (
                <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 animate-fade-in">
                   <h4 className="font-bold text-slate-700 mb-2">Giải thích / Ví dụ:</h4>
                   <p className="text-slate-600 leading-relaxed font-medium whitespace-pre-wrap">{q.explanation}</p>
                   <button
                      onClick={nextQuestion}
                      className="mt-6 px-6 py-3 bg-theme-dark hover:bg-black text-white font-bold rounded-xl transition-all flex items-center gap-2"
                   >
                      {currentIdx < questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'} <ChevronRight className="w-5 h-5" />
                   </button>
                </div>
             )}
          </div>
       </div>
    </div>
  );
}
