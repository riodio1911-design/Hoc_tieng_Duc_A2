import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { GoogleGenAI } from '@google/genai';
import { Loader2, Send, CheckCircle2, AlertCircle, Edit3, Sparkles, Mic } from 'lucide-react';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function WritingPractice() {
  const [text, setText] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [isDictating, setIsDictating] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const recognitionRef = useRef<any>(null);
  const [feedback, setFeedback] = useState<{
    score: number;
    grammar: string;
    vocabulary: string;
    coherence: string;
    suggestion: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRec) {
      const recognition = new SpeechRec();
      recognition.lang = 'de-DE';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      
      recognition.onresult = (event: any) => {
        if (event.results.length > 0) {
          const transcript = event.results[0][0].transcript;
          
          if (textareaRef.current) {
            const start = textareaRef.current.selectionStart;
            const end = textareaRef.current.selectionEnd;
            const currentText = textareaRef.current.value;
            
            const newText = currentText.substring(0, start) + transcript + (currentText.length > end && currentText[end] !== ' ' ? ' ' : '') + currentText.substring(end);
            
            setText(newText);
            
            // Setting cursor position after the inserted text
            setTimeout(() => {
              if (textareaRef.current) {
                textareaRef.current.selectionStart = start + transcript.length + 1;
                textareaRef.current.selectionEnd = start + transcript.length + 1;
                textareaRef.current.focus();
              }
            }, 10);
          } else {
            // Append if ref not available
            setText(prev => prev + (prev.length > 0 && !prev.endsWith(' ') ? ' ' : '') + transcript);
          }
        }
      };
      
      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsDictating(false);
        if (event.error !== 'no-speech') {
           setError('Lỗi nhận diện giọng nói: ' + event.error);
        }
      };
      
      recognition.onend = () => {
        setIsDictating(false);
      };
      
      recognitionRef.current = recognition;
    }
  }, []);

  const toggleDictation = () => {
    if (isDictating) {
      recognitionRef.current?.stop();
      setIsDictating(false);
    } else {
      setError(null);
      if (!recognitionRef.current) {
        setError('Trình duyệt của bạn không hỗ trợ nhận diện giọng nói. Vui lòng dùng Chrome/Edge.');
        return;
      }
      try {
        recognitionRef.current.start();
        setIsDictating(true);
      } catch (err: any) {
         if (err.name === 'NotAllowedError') {
             setError('Vui lòng cấp quyền sử dụng Microphone cho trình duyệt.');
         } else {
             // If already started, just ignore or restart
             console.error(err);
         }
      }
    }
  };

  const evaluateText = async () => {
    if (text.trim().length < 20) {
      setError('Vui lòng viết ít nhất một câu hoàn chỉnh (khoảng 20 ký tự) để AI có thể chấm điểm.');
      return;
    }
    
    setError(null);
    setIsEvaluating(true);

    const promptText = `
      ACT AS A STRICT AND DEMANDING GERMAN LINGUISTICS EXPERT.
      Evaluate the following German text written by a language learner.
      
      The writing prompt is: "Schreiben Sie eine E-Mail an eine Freundin / einen Freund. Erzählen Sie eine spannende Geschichte über einen Einbruch." (Write an email to a friend telling an exciting story about a burglary).
      
      CRITICAL INSTRUCTIONS:
      1. Provide a "score" from 0 to 100 based on grammar, vocabulary, coherence, and adherence to the prompt.
      2. Provide a "grammar" evaluation in Vietnamese: point out grammatical errors and how to fix them.
      3. Provide a "vocabulary" evaluation in Vietnamese: suggest better words or point out incorrect usage.
      4. Provide a "coherence" evaluation in Vietnamese: comment on the email structure and story flow.
      5. Provide an overall "suggestion" in Vietnamese for improvement.
      
      Format the output EXACTLY as a JSON object:
      {
        "score": 85,
        "grammar": "...",
        "vocabulary": "...",
        "coherence": "...",
        "suggestion": "..."
      }
      
      Student's text:
      "${text}"
    `;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: promptText,
        config: {
          responseMimeType: "application/json",
        }
      });

      const result = JSON.parse(response.text || '{}');
      setFeedback(result);
    } catch (err: any) {
      console.error(err);
      setError('Có lỗi xảy ra khi kết nối với AI. Vui lòng thử lại sau.');
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 md:space-y-10 py-6 md:py-12 px-4 relative">
      <div className="flex items-center justify-between">
        <div className="space-y-1 md:space-y-2">
          <h2 className="text-3xl md:text-4xl font-display font-black text-theme-dark">Luyện viết</h2>
          <p className="text-theme-dark/40 font-bold uppercase tracking-widest text-xs">Phân tích & Chấm điểm bằng AI</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-4 space-y-6">
           <div className="bg-white rounded-[32px] border-4 border-theme-dark/5 p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-display font-black text-theme-dark mb-4 flex items-center gap-2">
                 <Edit3 className="text-theme-primary" /> Đề bài
              </h3>
              <div className="p-4 bg-theme-cream/30 rounded-2xl border-2 border-theme-primary/10 space-y-4">
                 <p className="font-bold text-theme-dark leading-relaxed">
                   Schreiben Sie eine spannende Geschichte über eine Freundin.
                 </p>
                 <p className="text-sm font-medium text-theme-dark/60">
                   Viết một câu chuyện ly kỳ về một người bạn dưới dạng một bức E-Mail. Kể về một vụ trộm (Einbruch).
                 </p>
              </div>

              <div className="mt-8 space-y-3">
                 <h4 className="font-black text-theme-dark/70 uppercase tracking-widest text-xs">Gợi ý cấu trúc (Redemittel)</h4>
                 <div className="space-y-2">
                    {[
                      { de: 'Liebe/Lieber [Tên],', vi: 'Gửi [Tên] thân mến,' },
                      { de: 'Weißt du, was passiert ist?', vi: 'Bạn có biết chuyện gì đã xảy ra không?' },
                      { de: 'Stell dir vor: ...', vi: 'Thử tưởng tượng xem: ...' },
                      { de: 'Plötzlich ...', vi: 'Đột nhiên ...' },
                      { de: 'Zum Glück ...', vi: 'May mắn thay ...' }
                    ].map((item, idx) => (
                      <div key={idx} className="p-3 bg-zinc-50 rounded-xl border border-zinc-100 flex flex-col">
                        <span className="font-bold text-theme-dark text-sm">{item.de}</span>
                        <span className="text-xs text-theme-dark/50">{item.vi}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
           <div className="bg-white rounded-[32px] border-4 border-theme-dark/5 p-6 md:p-8 shadow-xl flex flex-col h-full relative">
              <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Liebe Anna, stell dir vor, was gestern passiert ist..."
                className="w-full h-64 md:h-80 p-6 pt-16 bg-zinc-50 rounded-2xl border-2 border-zinc-200 outline-none focus:border-theme-primary focus:bg-white resize-none font-medium text-theme-dark leading-relaxed transition-all"
              />
              
              <div className="absolute top-10 right-10 md:top-12 md:right-12 z-10">
                <button
                   onClick={toggleDictation}
                   title="Nhập bằng giọng nói (Bôi đen đoạn cần nhét sau đó bấm nút này)"
                   className={`w-12 h-12 flex items-center justify-center rounded-full transition-all shadow-md active:scale-95 ${isDictating ? 'bg-red-500 text-white animate-pulse shadow-red-500/30' : 'bg-theme-cream text-theme-dark hover:bg-theme-primary hover:text-white border border-theme-dark/10 hover:border-theme-primary'}`}
                >
                   <Mic size={22} className={isDictating ? "animate-bounce" : ""} />
                </button>
              </div>

              {isDictating && (
                 <div className="absolute top-[80px] right-12 z-10 bg-theme-dark text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-lg w-max shadow-xl animate-fade-in pointer-events-none before:content-[''] before:absolute before:-top-1 before:right-4 before:w-2 before:h-2 before:bg-theme-dark before:rotate-45">
                   Đang nghe Đức ngữ...
                 </div>
              )}
              
              {error && (
                <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-2 font-medium">
                  <AlertCircle size={20} /> {error}
                </div>
              )}

              <div className="mt-6 flex justify-end">
                 <button
                   onClick={evaluateText}
                   disabled={isEvaluating || text.trim().length === 0}
                   className="px-8 py-4 bg-theme-dark text-white font-black rounded-2xl shadow-xl hover:bg-theme-primary hover:-translate-y-1 transition-all disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-theme-dark flex items-center gap-2"
                 >
                   {isEvaluating ? (
                     <>
                       <Loader2 className="animate-spin" size={20} /> Đang phân tích...
                     </>
                   ) : (
                     <>
                       <Sparkles size={20} /> Chấm bài bằng AI
                     </>
                   )}
                 </button>
              </div>
           </div>
        </div>

        {feedback && (
          <div className="lg:col-span-12">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-theme-dark rounded-[32px] p-8 shadow-2xl text-white relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 w-64 h-64 bg-theme-primary/20 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                   <div className="shrink-0 flex flex-col items-center justify-center bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
                     <div className="text-6xl font-black text-emerald-400 font-display">
                       {feedback.score}
                     </div>
                     <div className="text-white/60 font-bold uppercase tracking-widest text-xs mt-2">
                       Trực tiếp từ AI
                     </div>
                   </div>

                   <div className="flex-1 space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FeedbackCard title="Ngữ pháp" content={feedback.grammar} />
                        <FeedbackCard title="Từ vựng" content={feedback.vocabulary} />
                        <FeedbackCard title="Bố cục & Mạch lạc" content={feedback.coherence} />
                     </div>
                     
                     <div className="p-6 bg-theme-primary/20 border border-theme-primary/30 rounded-2xl box-border max-w-full overflow-hidden">
                       <h4 className="font-black text-theme-primary mb-2 uppercase tracking-widest text-sm">Gợi ý cải thiện</h4>
                       <p className="text-white/90 leading-relaxed font-medium">
                         {feedback.suggestion}
                       </p>
                     </div>
                   </div>
                </div>
             </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

function FeedbackCard({ title, content }: { title: string, content: string }) {
  return (
    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
      <h4 className="font-black text-white/50 mb-2 uppercase tracking-widest text-xs">{title}</h4>
      <p className="text-sm font-medium leading-relaxed">{content}</p>
    </div>
  );
}
