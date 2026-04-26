import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import FlashcardGrid from './FlashcardGrid';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion19VocabTheory({ playAudio, playingId }: Props) {
  const vocabSections = [
    {
      title: "1. Sự Kiện & Văn Hóa (Kultur & Veranstaltungen)",
      words: [
        { word: "das Publikum", meaning: "Khán giả, công chúng", example: "Das Publikum war begeistert.", isRule: true },
        { word: "die Ausstellung", meaning: "Cuộc triển lãm", example: "Wir gehen in die Ausstellung.", isRule: true },
        { word: "die Vorstellung", meaning: "Buổi biểu diễn", example: "Die Vorstellung war ausgezeichnet.", isRule: true },
        { word: "die Eröffnung", meaning: "Sự khai mạc, khai trương", example: "Zur Eröffnung gab es Sekt.", isRule: false },
        { word: "der Club", meaning: "Câu lạc bộ", example: "Wir gehen in den Club.", isRule: false },
        { word: "die Kultur", meaning: "Văn hóa", example: "kulturell (thuộc về văn hóa)", isRule: true }
      ]
    },
    {
      title: "2. Truyền Thông & Phim Ảnh (Medien & Film)",
      words: [
        { word: "die Sendung", meaning: "Chương trình (TV/Radio)", example: "Die Sendung beginnt um 20 Uhr.", isRule: true },
        { word: "der Spielfilm", meaning: "Phim truyện", example: "Wir schauen einen Spielfilm.", isRule: true }
      ]
    },
    {
      title: "3. Hoạt động & Đánh giá (Aktivitäten & Bewertung)",
      words: [
        { word: "ausgezeichnet", meaning: "Xuất sắc, tuyệt vời", example: "Das Essen war ausgezeichnet.", isRule: true },
        { word: "spannend", meaning: "Thú vị / hồi hộp", example: "Der Film ist spannend.", isRule: true },
        { word: "kostenlos / gratis", meaning: "Miễn phí", example: "Der Eintritt ist kostenlos.", isRule: true },
        { word: "überzeugen", meaning: "Thuyết phục", example: "Ich werde ihn überzeugen.", isRule: false },
        { word: "recht haben", meaning: "Có lý, đúng", example: "Du hast recht.", isRule: false }
      ]
    }
  ];

  return (
    <div className="space-y-12 pb-12 animate-fade-in max-w-4xl mx-auto">
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-3xl font-black text-theme-dark uppercase tracking-tight">Từ Vựng: Sự Kiện & Giải Trí</h2>
        <p className="text-theme-dark/70 font-medium">Lektion 19: Wohin gehen wir heute?</p>
      </div>

      <div className="space-y-8">
        {vocabSections.map((section, idx) => (
          <div key={idx} className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-sm border-2 border-white">
            <h3 className="text-xl font-bold text-theme-primary mb-6">{section.title}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.words.map((w, wIdx) => {
                const audioId = `l19-vocab-${idx}-${wIdx}`;
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
      
      <div className="bg-indigo-50 rounded-3xl p-6 md:p-8 border-2 border-indigo-100 mt-12">
        <h3 className="text-xl font-bold text-indigo-700 mb-6 text-center">Giao tiếp: Rủ rê và Thuyết phục</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-bold text-indigo-900 border-b-2 border-indigo-200 pb-2">Đưa ra lời rủ rê (Vorschlag)</h4>
            <ul className="space-y-3 font-medium text-indigo-800">
              <li className="flex gap-2"><span>💬</span> Haben Sie Lust auf ...?</li>
              <li className="flex gap-2"><span>💬</span> Wollen wir etwas unternehmen?</li>
              <li className="flex gap-2"><span>💬</span> Sollen wir zusammen weggehen?</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-indigo-900 border-b-2 border-indigo-200 pb-2">Thuyết phục (Überzeugen)</h4>
            <ul className="space-y-3 font-medium text-indigo-800">
              <li className="flex gap-2"><span>💬</span> Komm doch mit! (Đi cùng đi!)</li>
              <li className="flex gap-2"><span>💬</span> Das musst du sehen!</li>
              <li className="flex gap-2"><span>💬</span> Glaub mir, es lohnt sich.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
