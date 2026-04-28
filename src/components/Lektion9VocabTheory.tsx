import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion9VocabTheory({ playAudio, playingId }: Props) {
  const vocabSections = [
    {
      title: "1. Sản xuất & Công nghiệp (Produktion & Industrie)",
      words: [
        { word: "die Produktion", meaning: "Sự sản xuất", example: "Die Produktion in Vietnam ist sehr hoch." },
        { word: "das Werk", meaning: "Nhà máy", example: "Das ist ein Werk von Audi." },
        { word: "die Maschine", meaning: "Máy móc", example: "Wir haben viele neue Maschinen." },
        { word: "das Lager", meaning: "Nhà kho", example: "Die Bauteile sind im Lager." },
        { word: "der Lkw / der Lastkraftwagen", meaning: "Xe tải", example: "Der Lkw transportiert Autos." },
        { word: "der Export / Import", meaning: "Sự xuất khẩu / nhập khẩu", example: "Der Export nach Europa ist wichtig." },
        { word: "produzieren", meaning: "Sản xuất (Động từ)", example: "Die Firma produziert LKWs." },
      ]
    },
    {
      title: "2. Kinh tế & Việc làm (Wirtschaft & Arbeit)",
      words: [
        { word: "der Arbeiter", meaning: "Công nhân", example: "Die Arbeiter arbeiten am Fließband." },
        { word: "der Angestellte", meaning: "Nhân viên (văn phòng)", example: "Ich bin Angestellter in einer Computerfirma." },
        { word: "der Lohn", meaning: "Tiền lương", example: "Sie fordern mehr Lohn." },
        { word: "der Betrieb", meaning: "Doanh nghiệp, công ty", example: "Wie lange arbeiten Sie in diesem Betrieb?" },
        { word: "der Erfolg", meaning: "Thành công", example: "Das neue Produkt ist ein Erfolg." },
        { word: "die Arbeitsbedingungen (Pl.)", meaning: "Điều kiện làm việc", example: "Wir haben gute Arbeitsbedingungen." },
        { word: "die Wirtschaft", meaning: "Nền kinh tế", example: "Die Wirtschaft wächst." }
      ]
    },
    {
      title: "3. Các từ vựng & Động từ quan trọng khác",
      words: [
        { word: "sparen", meaning: "Tiết kiệm", example: "Wir müssen viel Geld sparen." },
        { word: "steigen", meaning: "Tăng lên", example: "Die Preise steigen (ist gestiegen)." },
        { word: "sinken", meaning: "Giảm xuống", example: "Die Produktion sinkt (ist gesunken)." },
        { word: "erklären", meaning: "Giải thích", example: "Er hat mir das Problem erklärt." },
        { word: "international", meaning: "Quốc tế (Tính từ)", example: "Das ist eine internationale Firma." },
        { word: "selbstständig", meaning: "Tự do, độc lập", example: "Er arbeitet selbstständig." },
        { word: "dringend", meaning: "Khẩn cấp", example: "Wir suchen dringend Mitarbeiter." }
      ]
    }
  ];

  return (
    <div className="space-y-12 pb-12 animate-fade-in max-w-4xl mx-auto">
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-3xl font-black text-theme-dark uppercase tracking-tight">Từ Vựng: Ô Tô & Công Nghiệp</h2>
        <p className="text-theme-dark/70 font-medium">Lektion 9: Bei guten Autos sind wir ganz vorn</p>
      </div>

      <div className="space-y-8">
        {vocabSections.map((section, idx) => (
          <div key={idx} className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-sm border-2 border-white">
            <h3 className="text-xl font-bold text-theme-primary mb-6">{section.title}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.words.map((w, wIdx) => {
                const audioId = `l9-vocab-${idx}-${wIdx}`;
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
                    <span className="text-sm text-theme-dark/60 mt-2 bg-white/50 p-2 rounded-xl italic">
                      {w.example}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-sky-50 rounded-3xl p-6 md:p-8 border-2 border-sky-100 mt-12">
        <h3 className="text-xl font-bold text-sky-700 mb-6 text-center">Giao tiếp: Bày tỏ Tầm quan trọng (Wichtigkeit)</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-bold text-sky-900 border-b-2 border-sky-200 pb-2">Hỏi về tầm quan trọng</h4>
            <ul className="space-y-3 font-medium text-sky-800">
              <li className="flex gap-2"><span>💬</span> Ist dir der Lohn wichtig?</li>
              <li className="flex gap-2"><span>💬</span> Was ist Ihnen im Job wichtig?</li>
              <li className="flex gap-2 text-sm italic mt-2 opacity-80">(Mức lương có quan trọng với bạn không? / Điều gì đối với Ngài là quan trọng trong công việc?)</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-sky-900 border-b-2 border-sky-200 pb-2">Trả lời & Khẳng định</h4>
            <ul className="space-y-3 font-medium text-sky-800">
              <li className="flex gap-2"><span>💬</span> Ja, der Lohn ist mir sehr wichtig.</li>
              <li className="flex gap-2"><span>💬</span> Nein, das ist mir nicht so wichtig.</li>
              <li className="flex gap-2"><span>💬</span> Ein nettes Team ist mir am wichtigsten.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
