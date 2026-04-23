import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, 
  Search, 
  MessageSquare, 
  Users, 
  ChevronRight, 
  RotateCcw, 
  CheckCircle2, 
  XCircle,
  Clock,
  MapPin,
  ClipboardList,
  Volume2,
  Loader2
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// Sử dụng trực tiếp VITE_GEMINI_API_KEY
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

interface AlibiGameProps {
  onBack: () => void;
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

interface InterviewEntry {
  question: string;
  questionTranslation: string;
  answer: string;
  answerTranslation: string;
  timestamp: number;
}

interface Suspect {
  id: string;
  name: string;
  role: string;
  description: string;
  avatar: string;
  interviews: InterviewEntry[];
}

const ALIBI_QUESTIONS = [
  { de: "Wo waren Sie am Samstagnachmittag um 16 Uhr?", vi: "Ông/Bà đã ở đâu vào chiều thứ Bảy lúc 16 giờ?" },
  { de: "Gibt es dafür Zeugen?", vi: "Có nhân chứng nào cho việc đó không?" },
  { de: "Ab wann waren Sie dort?", vi: "Ông/Bà đã ở đó từ khi nào?" },
  { de: "Wie lange waren Sie dort?", vi: "Ông/Bà đã ở đó trong bao lâu?" },
  { de: "Was haben Sie gemacht?", vi: "Ông/Bà đã làm gì?" },
  { de: "Worüber haben Sie gesprochen?", vi: "Ông/Bà đã nói về chuyện gì?" },
  { de: "Haben Sie etwas gegessen oder getrunken? Wenn ja, was?", vi: "Ông/Bà có ăn hay uống gì không? Nếu có thì là gì?" },
  { de: "Wie sind Sie dorthin gekommen?", vi: "Ông/Bà đã đến đó bằng cách nào?" }
];

export default function AlibiGame({ onBack, playAudio, playingId }: AlibiGameProps) {
  const [gameState, setGameState] = useState<'intro' | 'interviewing' | 'accusing' | 'result'>('intro');
  const [selectedSuspectId, setSelectedSuspectId] = useState<string | null>(null);
  const [realitySeed, setRealitySeed] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [accusation, setAccusation] = useState('');
  const [selectedCulprit, setSelectedCulprit] = useState<'Heiner' | 'Klaus' | 'Cả hai' | ''>('');
  const [isAccusationCorrect, setIsAccusationCorrect] = useState<boolean | null>(null);
  const [explanation, setExplanation] = useState('');
  const [suspects, setSuspects] = useState<Suspect[]>([
    {
      id: 'suspect-a',
      name: 'Heiner',
      role: 'Nghi phạm số 1 (Suspekt A)',
      description: 'Một thợ cơ điện tử (Mechatroniker), khẳng định mình vô tội.',
      avatar: 'https://picsum.photos/seed/heiner/200',
      interviews: []
    },
    {
      id: 'suspect-b',
      name: 'Klaus',
      role: 'Nghi phạm số 2 (Suspekt B)',
      description: 'Làm việc cùng xưởng (Werkstatt) với Heiner.',
      avatar: 'https://picsum.photos/seed/klaus/200',
      interviews: []
    }
  ]);

  useEffect(() => {
    // Generate a hidden reality at the start
    const generateReality = async () => {
      setIsLoading(true);
      try {
        const response = await ai.models.generateContent({
          model: "gemini-3.1-pro-preview",
          contents: "Generate a detailed 'alibi story' for two friends (Heiner and Klaus) who claim they were together during a robbery on Saturday at 16:00. The story should include: location, witnesses, arrival time, duration, activities, conversation topics, food/drink, and transportation. Most importantly, create ONE specific, subtle contradiction in their story (e.g., Klaus says they had coffee, Heiner says they had beer; or different transportation). Return the story in English for internal use.",
        });
        setRealitySeed(response.text || '');
      } catch (error: any) {
        console.error('Failed to generate reality:', error);
        // Fallback reality so the application doesn't break
        setRealitySeed("They claim they were at 'Café am Park' together from 15:30 to 17:00 on Saturday. They walked there. The contradiction: Heiner explicitly says they drank 'schwarzen Kaffee' (black coffee). Klaus explicitly says they drank 'ein kühles Bier' (a cold beer).");
      } finally {
        setIsLoading(false);
      }
    };

    generateReality();
  }, []);

  const handleAskQuestion = async (qObj: { de: string, vi: string }) => {
    if (!selectedSuspectId || isLoading) return;
    
    setIsLoading(true);
    const suspect = suspects.find(s => s.id === selectedSuspectId)!;
    
    // Check if question already asked
    if (suspect.interviews.find(i => i.question === qObj.de)) {
      setIsLoading(false);
      return;
    }

    try {
      const otherSuspect = suspects.find(s => s.id !== selectedSuspectId)!;
      const otherInterviews = otherSuspect.interviews.map(i => `Q: ${i.question} A: ${i.answer}`).join('\n');
      
      const prompt = `
        You are acting as ${suspect.name} in a detective game 'Alibi-Spiel'.
        SCENARIO: A burglary happened at Müller family's house on Saturday at 16:00.
        REALITY (Internal knowledge): ${realitySeed}
        
        YOUR TASK:
        - Answer the following question from the police.
        - Be consistent with the overall story in the 'REALITY'.
        - If you are Suspect B (Klaus), ensure your answers generally match Suspect A's logic, BUT you must include the EXPLICIT CONTRADICTION mentioned in the reality if it relates to the question.
        - Keep answers concise and natural.
        
        OTHER INFO:
        - Your name: ${suspect.name}
        - Current Question: ${qObj.de}
        
        RETURN A JSON OBJECT:
        {
          "answer": "The answer in German",
          "answerTranslation": "Dịch câu trả lời sang tiếng Việt"
        }
      `;

      let resultText = '';
      try {
        const response = await ai.models.generateContent({
          model: "gemini-3.1-pro-preview",
          contents: prompt,
          config: {
            responseMimeType: "application/json"
          }
        });
        resultText = response.text || '{"answer":"Ich kann mich nicht erinnern.","answerTranslation":"Tôi không nhớ."}';
      } catch (error: any) {
        console.error('Interview failed:', error);
        const errorMsg = error.message || '';
        if (errorMsg.includes('503') || errorMsg.includes('high demand') || errorMsg.includes('UNAVAILABLE')) {
          alert('Máy chủ AI đang quá tải (503). Hệ thống đang tiếp nhận quá nhiều yêu cầu, vui lòng thử lại sau vài giây hoặc thiết lập API Key của riêng bạn trong Cài đặt.');
        } else if (errorMsg.includes('429') || errorMsg.includes('Quota') || errorMsg.includes('exhausted')) {
          alert('Hệ thống AI đang tạm hết lượt miễn phí (429 - Quota exceeded). Vui lòng thử lại sau ít phút hoặc thiết lập API Key riêng trong Cài đặt.');
        } else {
          alert('Lỗi phản hồi từ AI: ' + errorMsg);
        }
        setIsLoading(false);
        return;
      }

      const result = JSON.parse(resultText);
      
      setSuspects(prev => prev.map(s => {
        if (s.id === selectedSuspectId) {
          return {
            ...s,
            interviews: [...s.interviews, { 
              question: qObj.de, 
              questionTranslation: qObj.vi, 
              answer: result.answer, 
              answerTranslation: result.answerTranslation, 
              timestamp: Date.now() 
            }]
          };
        }
        return s;
      }));

    } catch (error: any) {
      console.error('Interview internal processing failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAccuse = async () => {
    if (!accusation.trim() || !selectedCulprit || isLoading) return;
    setIsLoading(true);

    try {
      const interviewLog = suspects.map(s => {
        return `${s.name}'s Alibi:\n` + s.interviews.map(i => `- ${i.question}: ${i.answer}`).join('\n');
      }).join('\n\n');

      const prompt = `
        Detective Game: Alibi-Spiel
        REALITY: ${realitySeed}
        INTERVIEW LOGS:
        ${interviewLog}
        
        USER'S CULPRIT SELECTION: ${selectedCulprit}
        USER'S CONTRADICTION REASONING: ${accusation}
        
        TASK:
        Check if the User correctly identified the exact explicit contradiction between Heiner and Klaus in their reasoning. 
        Since their shared alibi is broken, they both lied. Selecting "Cả hai" (Both) or either one is logically acceptable AS LONG AS the contradiction reasoning is correct.
        
        Return a JSON object:
        {
          "isCorrect": boolean,
          "explanation": "Detailed explanation in Vietnamese of why they are right or what they missed, addressing both their selected culprit and their reasoning."
        }
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });

      const result = JSON.parse(response.text || '{}');
      setIsAccusationCorrect(result.isCorrect);
      setExplanation(result.explanation);
      setGameState('result');
    } catch (error: any) {
      console.error('Accusation failed:', error);
      const errorMsg = error.message || '';
      if (errorMsg.includes('503') || errorMsg.includes('high demand') || errorMsg.includes('UNAVAILABLE')) {
        alert('Máy chủ AI đang quá tải (503). Vui lòng thử lại sau vài giây hoặc thiết lập API Key riêng trong Cài đặt.');
      } else if (errorMsg.includes('429') || errorMsg.includes('Quota') || errorMsg.includes('exhausted')) {
        alert('Hệ thống AI đang tạm hết lượt miễn phí. Vui lòng thiết lập API Key riêng.');
      } else {
        alert('Đã xảy ra lỗi hệ thống khi nộp cáo trạng: ' + errorMsg);
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (gameState === 'intro') {
    return (
      <div className="max-w-4xl mx-auto p-6 md:p-12 bg-white/90 backdrop-blur-xl rounded-[32px] md:rounded-[48px] border-4 border-theme-dark/5 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-5 text-theme-primary hidden md:block">
          <ShieldAlert size={200} />
        </div>
        
        <div className="space-y-6 md:space-y-10 relative z-10">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-1.5 rounded-full bg-theme-primary/10 text-theme-primary text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
            Lektion 21: Alibi-Spiel
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-black text-theme-dark leading-[1.1]">
            Vụ trộm tại <br className="md:hidden" /><span className="text-theme-primary italic">nhà Müller</span>
          </h1>
          
          <div className="p-6 md:p-8 bg-theme-cream rounded-[24px] md:rounded-[32px] border-l-4 md:border-l-8 border-theme-primary shadow-sm space-y-4 md:space-y-6 relative group">
            <button 
              onClick={() => playAudio(`Vào chiều Thứ Bảy lúc 16:00, một kẻ nào đó đã đột nhập vào nhà gia đình Müller và lấy đi tiền cùng đồ trang sức. Bạn là thanh tra cảnh sát đang thẩm vấn hai nghi phạm: Heiner và Klaus. Họ khẳng định mình có chứng cứ ngoại phạm vì đã ở cùng nhau suốt buổi chiều đó. Nhiệm vụ của bạn là thẩm vấn từng người một và tìm ra điểm mâu thuẫn trong lời khai của họ.`, 'intro-desc', 'vi-VN')}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 rounded-xl md:rounded-2xl bg-white text-theme-primary shadow-md opacity-100 md:opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95"
            >
              {playingId === 'intro-desc' ? <Loader2 size={16} className="animate-spin" /> : <Volume2 size={16} />}
            </button>
            <p className="text-theme-dark text-base md:text-lg leading-relaxed pr-10 font-medium">
              Vào chiều Thứ Bảy lúc 16:00, một kẻ nào đó đã đột nhập vào nhà gia đình Müller và lấy đi tiền cùng đồ trang sức. 
              Bạn là thanh tra cảnh sát đang thẩm vấn hai nghi phạm: <b>Heiner</b> và <b>Klaus</b>.
            </p>
            <p className="text-theme-dark text-base md:text-lg leading-relaxed font-black">
              Họ khẳng định mình có chứng cứ ngoại phạm (Alibi) vì đã ở cùng nhau suốt buổi chiều đó. 
              Nhiệm vụ của bạn là tìm ra điểm mâu thuẫn trong lời khai của họ.
            </p>
            <div className="mt-4 p-4 bg-white/60 rounded-xl border-l-4 border-emerald-400">
              <p className="text-sm font-bold text-emerald-800">
                Lưu ý: Để có thể tiến hành Kết tội, bạn bắt buộc phải hỏi mỗi nghi phạm ít nhất 3 câu hỏi để thu thập đủ lời khai.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {suspects.map(s => (
              <div key={s.id} className="p-4 md:p-6 rounded-[24px] md:rounded-[28px] bg-theme-dark/5 border-2 border-transparent flex items-center gap-4 md:gap-5">
                <img src={s.avatar} alt={s.name} className="w-12 h-12 md:w-16 md:h-16 rounded-[14px] md:rounded-2xl border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
                <div>
                  <h3 className="font-display font-black text-lg md:text-xl text-theme-dark">{s.name}</h3>
                  <p className="text-[10px] md:text-xs text-theme-dark/40 font-black uppercase tracking-widest">{s.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 md:pt-6 flex flex-col sm:flex-row items-center gap-4 md:gap-6">
            <button 
              onClick={() => setGameState('interviewing')}
              className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-theme-dark text-white rounded-[20px] md:rounded-[24px] font-black shadow-xl shadow-theme-dark/20 hover:bg-theme-primary hover:shadow-theme-primary/20 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 text-base md:text-lg"
            >
              Thẩm vấn ngay <ChevronRight size={20} className="md:w-6 md:h-6" />
            </button>
            <button 
              onClick={onBack}
              className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-theme-cream text-theme-dark/60 rounded-[20px] md:rounded-[24px] font-black hover:bg-theme-dark/5 transition-all text-base md:text-lg"
            >
              Quay lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6 md:space-y-10 py-6 md:py-12 px-4 md:px-0 relative">
      <div className="flex items-center justify-between">
        <div className="space-y-1 md:space-y-2">
          <h2 className="text-3xl md:text-4xl font-display font-black text-theme-dark">Alibi-Spiel</h2>
          <p className="text-theme-dark/40 font-bold uppercase tracking-widest text-[10px] md:text-xs">Tìm điểm mâu thuẫn</p>
        </div>
        <button 
          onClick={() => {
            if (confirm('Bạn có muốn hủy vụ án hiện tại không?')) {
              setGameState('intro');
              setAccusation('');
              setSelectedCulprit('');
              setIsAccusationCorrect(null);
              setSuspects(s => s.map(su => ({...su, interviews: []})));
            }
          }}
          className="p-3 md:p-4 bg-theme-cream text-theme-dark/20 rounded-xl md:rounded-2xl hover:text-theme-primary transition-all hover:bg-white shadow-sm"
        >
          <RotateCcw size={20} className="md:w-6 md:h-6" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
        {/* Suspect Selection */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-4 md:space-y-6">
           <div className="flex overflow-x-auto lg:flex-col gap-3 md:gap-4 snap-x snap-mandatory hide-scrollbar pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
             {suspects.map(s => (
               <button
                key={s.id}
                onClick={() => setSelectedSuspectId(s.id)}
                className={`flex-none w-[85vw] sm:w-[300px] lg:w-full snap-center p-4 md:p-5 rounded-[24px] md:rounded-[32px] border-[3px] md:border-4 transition-all text-left space-y-3 md:space-y-4 group ${
                  selectedSuspectId === s.id 
                    ? 'border-theme-primary bg-white shadow-xl transform lg:-translate-y-1' 
                    : 'border-theme-dark/5 bg-theme-cream/30 hover:border-theme-primary/20 hover:bg-white'
                }`}
               >
                 <div className="flex items-center gap-3 md:gap-4">
                   <div className="relative shrink-0">
                     <img src={s.avatar} alt={s.name} className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl transition-all ${selectedSuspectId === s.id ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`} referrerPolicy="no-referrer" />
                     {selectedSuspectId === s.id && (
                       <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-theme-primary rounded-full border-2 border-white flex items-center justify-center text-[8px] md:text-[10px] text-white">
                         <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                       </div>
                     )}
                   </div>
                   <div className="flex-1 min-w-0">
                     <h3 className="font-display font-black text-base md:text-lg text-theme-dark leading-none truncate">{s.name}</h3>
                     <p className="text-[9px] md:text-[10px] text-theme-dark/80 font-black uppercase tracking-widest mt-1.5 truncate">{s.role}</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-2 md:gap-3">
                   <div className="h-1.5 md:h-2 flex-1 bg-theme-dark/5 rounded-full overflow-hidden p-[1px] md:p-0.5">
                     <div 
                      className="h-full bg-theme-primary rounded-full transition-all duration-1000" 
                      style={{ width: `${(s.interviews.length / ALIBI_QUESTIONS.length) * 100}%` }}
                     />
                   </div>
                   <span className="text-[9px] md:text-[10px] font-black text-theme-primary">{s.interviews.length}/{ALIBI_QUESTIONS.length}</span>
                 </div>
               </button>
             ))}
           </div>

           <div className="hidden lg:block p-6 rounded-[32px] bg-theme-dark text-white space-y-6 shadow-2xl relative overflow-hidden group">
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-theme-primary/10 rounded-full blur-3xl group-hover:bg-theme-primary/20 transition-all" />
             <div className="flex items-center gap-3 text-theme-primary">
               <ShieldAlert size={20} />
               <span className="text-xs font-black uppercase tracking-[0.2em]">Hồ sơ vụ án</span>
             </div>
             <div className="space-y-4 text-xs leading-relaxed text-white/95 font-medium">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-theme-primary"><Clock size={14} /></div>
                 <span>Thứ Bảy, 16:00</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-theme-primary"><MapPin size={14} /></div>
                 <span>Nhà Müller</span>
               </div>
               <div className="flex items-start gap-3">
                 <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-theme-primary shrink-0"><ClipboardList size={14} /></div>
                 <span>Mất tiền mặt và đồ trang sức.</span>
               </div>
             </div>
           </div>

           {suspects.every(s => s.interviews.length >= 3) && (
             <button
              onClick={() => setGameState('accusing')}
              className="w-full py-4 md:py-5 bg-red-600 text-white rounded-[20px] md:rounded-[24px] font-black shadow-xl shadow-red-200 hover:bg-red-700 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg"
             >
               Kết tội <ShieldAlert size={20} className="md:w-6 md:h-6" />
             </button>
           )}
        </div>

        {/* Interaction Area */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-4 md:space-y-6">
          <AnimatePresence mode="wait">
            {gameState === 'interviewing' && (
              <motion.div 
                key="chat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-6"
              >
                {!selectedSuspectId ? (
                   <div className="h-[500px] flex flex-col items-center justify-center text-center space-y-4 bg-white border-4 border-dashed border-theme-dark/5 rounded-[48px] p-12">
                     <div className="p-6 bg-theme-dark/5 rounded-[32px] text-theme-dark/30">
                       <Users size={80} />
                     </div>
                     <div>
                       <h3 className="text-3xl font-display font-black text-theme-dark">Chọn một nghi phạm</h3>
                       <p className="text-theme-dark/40 max-w-xs mx-auto font-bold">Hãy bắt đầu bằng cách chọn một trong hai nghi phạm ở bên trái để tiến hành thẩm vấn.</p>
                     </div>
                   </div>
                ) : (
                  <div className="space-y-6">
                    {/* Transcription / Chat Area */}
                    <div className="h-[450px] overflow-y-auto p-8 slide-card space-y-6 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/notebook-dark.png')] bg-opacity-5">
                       {suspects.find(s => s.id === selectedSuspectId)?.interviews.length === 0 && (
                          <div className="h-full flex flex-col items-center justify-center text-center text-theme-dark/10 space-y-4">
                            <MessageSquare size={64} strokeWidth={1} />
                            <p className="text-sm font-black uppercase tracking-widest">Sẵn sàng thẩm vấn</p>
                          </div>
                       )}
                       {suspects.find(s => s.id === selectedSuspectId)?.interviews.map((entry, i) => (
                         <div key={i} className="space-y-3">
                            <div className="flex justify-end gap-3 items-start">
                              <div className="flex flex-col items-end gap-2 max-w-[85%]">
                                <button 
                                  onClick={() => playAudio(entry.question, `q-${i}`)}
                                  className={`p-2 rounded-xl transition-all shadow-sm ${playingId === `q-${i}` ? 'bg-theme-primary text-white scale-110' : 'bg-white text-theme-dark/20 hover:text-theme-primary'}`}
                                >
                                  {playingId === `q-${i}` ? <Loader2 size={16} className="animate-spin" /> : <Volume2 size={16} />}
                                </button>
                                <div className="bg-theme-dark text-white px-5 py-3 rounded-[24px] rounded-tr-none text-sm font-bold shadow-xl">
                                  {entry.word || entry.question}
                                  <div className="mt-2 pt-2 border-t border-white/10 text-[10px] text-theme-primary font-black uppercase tracking-wider italic">
                                    {entry.questionTranslation}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-start gap-3 items-start">
                              <div className="flex flex-col gap-2 max-w-[85%]">
                                <button 
                                  onClick={() => playAudio(entry.answer, `a-${i}`)}
                                  className={`p-2 rounded-xl transition-all shadow-sm ${playingId === `a-${i}` ? 'bg-theme-secondary text-white scale-110' : 'bg-white text-theme-dark/20 hover:text-theme-secondary hover:bg-theme-secondary/5'}`}
                                >
                                  {playingId === `a-${i}` ? <Loader2 size={16} className="animate-spin" /> : <Volume2 size={16} />}
                                </button>
                                <div className="bg-theme-cream text-theme-dark px-5 py-3 rounded-[24px] rounded-tl-none text-sm font-black border-2 border-theme-dark/5 shadow-md leading-relaxed">
                                  {entry.answer}
                                  <div className="mt-2 pt-2 border-t border-theme-dark/5 text-[10px] text-theme-dark/40 font-bold italic">
                                    {entry.answerTranslation}
                                  </div>
                                </div>
                              </div>
                            </div>
                         </div>
                       ))}
                       {isLoading && (
                          <div className="flex justify-start pt-4">
                            <div className="bg-theme-cream px-5 py-3 rounded-[20px] flex gap-2 border-2 border-theme-dark/5">
                              <div className="w-2.5 h-2.5 bg-theme-primary/30 rounded-full animate-bounce" />
                              <div className="w-2.5 h-2.5 bg-theme-primary/30 rounded-full animate-bounce delay-100" />
                              <div className="w-2.5 h-2.5 bg-theme-primary/30 rounded-full animate-bounce delay-200" />
                            </div>
                          </div>
                       )}
                    </div>

                    {/* Question Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-6">
                       {ALIBI_QUESTIONS.map((q, i) => {
                         const currentSuspect = suspects.find(s => s.id === selectedSuspectId)!;
                         const isAsked = currentSuspect.interviews.some(interview => interview.question === q.de);
                         
                         return (
                           <div key={i} className="relative group">
                             <button
                               disabled={isAsked || isLoading}
                               onClick={() => handleAskQuestion(q)}
                               className={`w-full p-4 pr-12 rounded-[24px] text-left text-xs font-black transition-all border-2 ${
                                 isAsked 
                                   ? 'bg-theme-dark/5 text-theme-dark/20 border-transparent rotate-0 line-through cursor-not-allowed' 
                                   : 'bg-white text-theme-dark border-theme-dark/5 hover:border-theme-primary hover:bg-theme-primary/5 shadow-sm active:scale-95'
                               }`}
                             >
                               <div className="flex items-center gap-4">
                                 <span className="text-theme-primary font-black text-sm">{i + 1}</span>
                                 <div className="overflow-hidden">
                                   <span className="line-clamp-1 text-[13px]">{q.de}</span>
                                   <div className="text-[10px] text-theme-dark/40 font-bold italic mt-1 leading-tight">{q.vi}</div>
                                 </div>
                               </div>
                             </button>
                             {!isAsked && (
                               <button 
                                onClick={(e) => { e.stopPropagation(); playAudio(q.de, `q-btn-${i}`); }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-theme-cream text-theme-dark/20 rounded-xl hover:text-theme-primary hover:bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-all"
                               >
                                 {playingId === `q-btn-${i}` ? <Loader2 size={14} className="animate-spin" /> : <Volume2 size={14} />}
                               </button>
                             )}
                           </div>
                         );
                       })}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {gameState === 'accusing' && (
              <motion.div
                key="accuse"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/90 backdrop-blur-xl p-12 rounded-[48px] border-4 border-theme-primary/10 shadow-2xl space-y-8"
              >
                <div className="text-center space-y-3">
                  <div className="inline-block p-6 bg-theme-primary/10 text-theme-primary rounded-[32px] mb-4">
                    <Search size={56} />
                  </div>
                  <h3 className="text-4xl font-display font-black text-theme-dark">Nộp hồ sơ kết tội</h3>
                  <p className="text-theme-dark/80 font-bold uppercase tracking-widest text-xs">Mâu thuẫn mà bạn tìm thấy là gì?</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-theme-dark/80 font-bold uppercase tracking-widest text-xs px-2">Theo bạn, ai là thủ phạm (hoặc nói dối)?</label>
                    <div className="flex gap-3">
                      {(['Heiner', 'Klaus', 'Cả hai'] as const).map(c => (
                        <button
                          key={c}
                          onClick={() => setSelectedCulprit(c)}
                          className={`flex-1 py-4 rounded-2xl font-black transition-all border-4 ${
                            selectedCulprit === c 
                              ? 'bg-theme-primary border-theme-primary text-white shadow-xl transform -translate-y-1' 
                              : 'bg-white border-theme-dark/5 text-theme-dark hover:border-theme-primary/30'
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-theme-dark/80 font-bold uppercase tracking-widest text-xs px-2">Lý do (Chi tiết mâu thuẫn):</label>
                    <textarea 
                      value={accusation}
                      onChange={(e) => setAccusation(e.target.value)}
                      placeholder="Ví dụ: Heiner nói họ uống cà phê, nhưng Klaus lại nói họ uống bia..."
                      className="w-full h-40 p-6 md:p-8 rounded-[32px] border-4 border-theme-dark/5 focus:border-theme-primary focus:outline-none transition-all text-theme-dark font-medium text-base md:text-lg placeholder:text-theme-dark/20 resize-none shadow-inner bg-theme-cream/50"
                    />
                  </div>
                  
                  <div className="flex gap-4 pt-4 border-t border-theme-dark/5">
                    <button
                      onClick={handleAccuse}
                      disabled={!accusation.trim() || !selectedCulprit || isLoading}
                      className="flex-1 py-5 bg-theme-primary text-white rounded-[24px] font-black shadow-xl shadow-theme-primary/20 hover:bg-theme-dark hover:shadow-theme-dark/20 transition-all flex items-center justify-center gap-3 text-lg transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isLoading ? 'Đang phân tích...' : 'Gửi cáo trạng'}
                    </button>
                    <button
                      onClick={() => setGameState('interviewing')}
                      className="px-8 py-5 bg-theme-cream text-theme-dark/60 rounded-[24px] font-black hover:bg-theme-dark/5 transition-all text-lg"
                    >
                      Hủy
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {gameState === 'result' && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-12 rounded-[56px] text-center space-y-10 shadow-2xl border-[12px] relative overflow-hidden backdrop-blur-xl ${
                  isAccusationCorrect ? 'bg-emerald-50/80 border-emerald-100/50' : 'bg-red-50/80 border-red-100/50'
                }`}
              >
                <div className="flex flex-col items-center space-y-6">
                   {isAccusationCorrect ? (
                      <div className="p-10 bg-emerald-500 text-white rounded-[40px] shadow-2xl shadow-emerald-200 animate-bounce">
                        <CheckCircle2 size={80} />
                      </div>
                   ) : (
                      <div className="p-10 bg-red-500 text-white rounded-[40px] shadow-2xl shadow-red-200">
                        <XCircle size={80} />
                      </div>
                   )}
                   
                   <div className="space-y-2">
                     <h3 className={`text-5xl font-display font-black tracking-tight ${isAccusationCorrect ? 'text-emerald-900' : 'text-red-900'}`}>
                       {isAccusationCorrect ? 'PHÁ ÁN THÀNH CÔNG!' : 'KẾT TỘI SAI!'}
                     </h3>
                     <p className={`text-xl font-black uppercase tracking-[0.2em] ${isAccusationCorrect ? 'text-emerald-600/60' : 'text-red-600/60'}`}>
                       {isAccusationCorrect ? 'Tội phạm đã phải lộ diện.' : 'Nghi phạm đã thoát tội do thiếu chứng cứ.'}
                     </p>
                   </div>
                </div>

                <div className="bg-white p-10 rounded-[40px] border-4 border-theme-dark/5 text-left space-y-5 shadow-sm max-w-3xl mx-auto relative group">
                   <button 
                    onClick={() => playAudio(explanation, 'result-exp', 'vi-VN')}
                    className="absolute top-6 right-6 p-4 rounded-2xl bg-theme-cream text-theme-primary shadow-md opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                   >
                     {playingId === 'result-exp' ? <Loader2 size={18} className="animate-spin" /> : <Volume2 size={18} />}
                   </button>
                   <h4 className="font-black text-theme-dark/20 uppercase tracking-[0.3em] text-[10px] flex items-center gap-3">
                     <Search size={16} /> Phân tích hồ sơ
                   </h4>
                   <p className="text-theme-dark text-xl leading-relaxed font-bold pr-12">
                     {explanation}
                   </p>
                </div>

                <div className="flex justify-center gap-6 pt-6">
                  <button
                    onClick={() => {
                      setGameState('intro');
                      setAccusation('');
                      setSelectedCulprit('');
                      setIsAccusationCorrect(null);
                      setSuspects(s => s.map(su => ({...su, interviews: []})));
                    }}
                    className="px-12 py-5 bg-theme-dark text-white rounded-[24px] font-black hover:bg-theme-primary transition-all shadow-2xl flex items-center gap-4 text-xl transform hover:-translate-y-1"
                  >
                    Vụ án mới <RotateCcw size={24} />
                  </button>
                  <button
                    onClick={onBack}
                    className="px-12 py-5 bg-theme-cream text-theme-dark/60 rounded-[24px] font-black hover:bg-theme-dark/5 transition-all text-xl"
                  >
                    Thoát
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
