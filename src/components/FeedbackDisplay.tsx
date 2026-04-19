import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, RotateCcw } from 'lucide-react';

export type Feedback = {
  score: number;
  transcription: string;
  suggestion: string;
} | null;

interface FeedbackDisplayProps {
  feedback: NonNullable<Feedback>;
  onClear: () => void;
}

export default function FeedbackDisplay({ feedback, onClear }: FeedbackDisplayProps) {
  if (!feedback) return null;
  
  const isGood = feedback.score >= 80;
  
  return (
    <div className="w-full flex flex-col h-full absolute inset-0 bg-white/95 backdrop-blur-md rounded-[26px]">
      {/* Header bar with Score and Retry */}
      <div className={`shrink-0 flex items-center justify-between px-4 py-3 border-b border-theme-dark/5 bg-gradient-to-r ${isGood ? 'from-emerald-50 to-white' : 'from-amber-50 to-white'} rounded-t-[26px]`}>
        <div className="flex items-center gap-2">
           {isGood ? <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-500" /> : <AlertCircle className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500" />}
           <div className={`text-2xl sm:text-3xl font-black ${isGood ? 'text-emerald-600' : 'text-amber-600'}`}>
              {feedback.score}
              <span className="text-sm sm:text-base text-theme-dark/40 opacity-70">/100</span>
           </div>
        </div>
        
        <button 
          onClick={(e) => { e.stopPropagation(); onClear(); }}
          className="text-xs sm:text-sm font-bold bg-white border border-theme-dark/10 hover:bg-zinc-100 px-3 py-2 rounded-xl flex items-center gap-1.5 shadow-sm transition-all"
        >
          <RotateCcw className="w-4 h-4" /> Thử lại
        </button>
      </div>
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4 text-left">
        <div>
          <p className="text-[11px] font-black uppercase tracking-widest text-theme-dark/40 mb-1">AI nghe thấy:</p>
          <p className="text-sm sm:text-base font-bold text-theme-dark p-2 rounded-xl bg-theme-dark/5">
            "{feedback.transcription}"
          </p>
        </div>
        
        <div>
          <p className="text-[11px] font-black uppercase tracking-widest text-theme-dark/40 mb-1">Nhận xét & Sửa lỗi:</p>
          <p className="text-sm sm:text-[15px] font-medium text-theme-dark/80 leading-snug">
            {feedback.suggestion}
          </p>
        </div>
      </div>
    </div>
  );
}
