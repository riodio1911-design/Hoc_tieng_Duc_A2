import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import FlashcardGrid from './FlashcardGrid';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion20VocabTheory({ playAudio, playingId }: Props) {
  const vocabSections = [
    {
      title: "1. Thế Giới Sách (Bücher & Medien)",
      words: [
        { word: "der Comic", meaning: "Truyện tranh", example: "Ich lese gern Comics.", isRule: false },
        { word: "das Märchen", meaning: "Truyện cổ tích", example: "Oma hat uns Märchen erzählt.", isRule: true },
        { word: "das Bilderbuch", meaning: "Sách tranh", example: "Ein schönes Bilderbuch für Kinder.", isRule: false },
        { word: "das Sachbuch", meaning: "Sách chuyên khoa/kiến thức", example: "Er liest ein Sachbuch über Tiere.", isRule: true },
        { word: "das Hörbuch", meaning: "Sách nói", example: "Im Auto höre ich oft ein Hörbuch.", isRule: true },
        { word: "der Krimi", meaning: "Truyện/phim trinh thám", example: "Krimis sind sehr spannend.", isRule: true },
        { word: "der Roman", meaning: "Tiểu thuyết", example: "Sie liest einen dicken Roman.", isRule: false },
        { word: "der Ratgeber", meaning: "Sách hướng dẫn", example: "Ein Ratgeber über Pflanzen.", isRule: false },
        { word: "das Gedicht", meaning: "Bài thơ", example: "Ein romantisches Gedicht.", isRule: false },
        { word: "die Zeitschrift / die Zeitung", meaning: "Tạp chí / Tờ báo", example: "Mein Vater liest jeden Morgen die Zeitung.", isRule: true }
      ]
    },
    {
      title: "2. Tính từ Đánh giá & Ráp nhận xét (Bewertung)",
      words: [
        { word: "spannend", meaning: "Hấp dẫn, hồi hộp", example: "Ein spannender Krimi.", isRule: true },
        { word: "romantisch", meaning: "Lãng mạn", example: "Das Buch ist sehr romantisch.", isRule: true },
        { word: "lustig", meaning: "Vui nhộn, buồn cười", example: "Die Geschichte ist total lustig.", isRule: true },
        { word: "interessant", meaning: "Thú vị", example: "Der Roman ist wirklich interessant.", isRule: true },
        { word: "langweilig", meaning: "Nhàm chán", example: "Ich finde das Buch langweilig.", isRule: true },
        { word: "traurig", meaning: "Buồn", example: "Ein sehr trauriges Ende.", isRule: false },
        { word: "furchtbar", meaning: "Khủng khiếp, tồi tệ", example: "Der Film war furchtbar.", isRule: false },
        { word: "ehrlich (gesagt)", meaning: "Thành thật (mà nói)", example: "Ehrlich gesagt, habe ich keine Lust.", isRule: false }
      ]
    },
    {
      title: "3. Động từ & Hoạt động (Verben & Aktivitäten)",
      words: [
        { word: "vorlesen", meaning: "Đọc to lên (cho ai nghe)", example: "Mein Vater hat mir oft vorgelesen.", isRule: true },
        { word: "erfahren (etwas)", meaning: "Trải nghiệm / biết được", example: "Man erfährt viel Neues.", isRule: true },
        { word: "sich beeilen", meaning: "Khẩn trương, vội vã", example: "Ich musste mich beeilen.", isRule: false },
        { word: "weinen", meaning: "Khóc", example: "Sie hat wegen des Films geweint.", isRule: false }
      ]
    }
  ];

  return (
    <div className="space-y-12 pb-12 animate-fade-in max-w-4xl mx-auto">
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-3xl font-black text-theme-dark uppercase tracking-tight">Từ Vựng Lektion 20</h2>
        <p className="text-theme-dark/70 font-medium">Ich durfte eigentlich keine Comics lesen</p>
      </div>

      <div className="space-y-8">
        {vocabSections.map((section, idx) => (
          <div key={idx} className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-sm border-2 border-white">
            <h3 className="text-xl font-bold text-theme-primary mb-6">{section.title}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.words.map((w, wIdx) => {
                const audioId = `l20-vocab-${idx}-${wIdx}`;
                const isPlaying = playingId === audioId;
                
                return (
                  <motion.div 
                    key={wIdx}
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col p-4 rounded-2xl bg-theme-cream/30 border-2 border-theme-primary/5 hover:border-theme-primary/20 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-lg text-theme-dark">{w.word}</span>
                      <button 
                        onClick={() => playAudio(w.word, audioId, 'de-DE')}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isPlaying ? 'bg-theme-secondary text-white animate-pulse' : 'bg-white text-theme-secondary hover:bg-theme-secondary/10'}`}
                      >
                        <Play size={16} className={isPlaying ? "ml-0.5" : "ml-0.5"} />
                      </button>
                    </div>
                    <span className="text-theme-secondary font-medium mb-1">{w.meaning}</span>
                    {w.example && (
                      <span className="text-sm text-theme-dark/60 mt-2 bg-white/50 p-2 rounded-xl italic">
                        {w.example}
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-emerald-50 rounded-3xl p-6 border-2 border-emerald-100 mt-12">
        <h3 className="text-xl font-bold text-emerald-700 mb-6 text-center">Giao tiếp: Bày tỏ sự quan tâm (Interesse)</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-bold text-emerald-900 border-b-2 border-emerald-200 pb-2">Hỏi thăm</h4>
            <ul className="space-y-3 font-medium text-emerald-800">
              <li className="flex gap-2"><span>💬</span> Interessierst du dich für Romane?</li>
              <li className="flex gap-2"><span>💬</span> Hast du Interesse an Politik?</li>
              <li className="flex gap-2"><span>💬</span> Liest du gern Krimis?</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-emerald-900 border-b-2 border-emerald-200 pb-2">Trình bày / Phản hồi</h4>
            <ul className="space-y-3 font-medium text-emerald-800">
              <li className="flex gap-2"><span>💬</span> Ja, und wie! Das interessiert mich sehr.</li>
              <li className="flex gap-2"><span>💬</span> Nein, ... finde ich ehrlich gesagt langweilig.</li>
              <li className="flex gap-2"><span>💬</span> Ich habe großes Interesse daran.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
