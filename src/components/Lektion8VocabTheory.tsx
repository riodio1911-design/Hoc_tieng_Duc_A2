import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion8VocabTheory({ playAudio, playingId }: Props) {
  const vocabSections = [
    {
      title: "1. Sức khỏe & Khám Bệnh (Gesundheit & Untersuchung)",
      words: [
        { word: "die Untersuchung", meaning: "Sự thăm khám, kiểm tra", example: "Die Untersuchung dauert nur kurz.", isRule: true },
        { word: "die Sprechstunde", meaning: "Giờ khám bệnh", example: "Wann hat der Arzt Sprechstunde?", isRule: true },
        { word: "die Krankheit", meaning: "Căn bệnh", example: "Was ist das für eine Krankheit?", isRule: true },
        { word: "die Grippe", meaning: "Bệnh cúm", example: "Er liegt mit Grippe im Bett.", isRule: false },
        { word: "das Herz", meaning: "Trái tim", example: "Hoffentlich ist es nicht das Herz!", isRule: false },
        { word: "der Magen", meaning: "Dạ dày", example: "Mein Magen tut weh.", isRule: false },
        { word: "erkältet sein", meaning: "Bị cảm lạnh", example: "Ich bin stark erkältet.", isRule: true }
      ]
    },
    {
      title: "2. Tai Nạn & Cấp Cứu (Unfall & Notfall)",
      words: [
        { word: "der Notfall", meaning: "Trường hợp khẩn cấp", example: "Bei einem Notfall rufen Sie die 112.", isRule: true },
        { word: "der Krankenwagen", meaning: "Xe cứu thương", example: "Der Krankenwagen ist schnell da.", isRule: true },
        { word: "der Notarzt", meaning: "Bác sĩ cấp cứu", example: "Der Notarzt untersucht den Verletzten.", isRule: true },
        { word: "die Notaufnahme", meaning: "Khoa cấp cứu", example: "Sie ist in der Notaufnahme.", isRule: true },
        { word: "der Unfall", meaning: "Tai nạn", example: "Er hatte einen Autounfall.", isRule: true },
        { word: "die Verletzung", meaning: "Vết thương", example: "Die Verletzung ist nicht so schlimm.", isRule: false },
        { word: "das Blut", meaning: "Máu", example: "Mein Finger blutet.", isRule: false }
      ]
    },
    {
      title: "3. Động từ Y tế (Medizinische Verben)",
      words: [
        { word: "sich verletzen", meaning: "Làm bị thương", example: "Ich habe mich beim Sport verletzt.", isRule: true },
        { word: "hinfallen", meaning: "Ngã, vấp ngã", example: "Er ist hingefallen.", isRule: true },
        { word: "operieren", meaning: "Phẫu thuật", example: "Der Arzt operiert das Knie.", isRule: true },
        { word: "untersuchen", meaning: "Khám bệnh", example: "Der Arzt untersucht den Patienten.", isRule: false },
        { word: "verbinden", meaning: "Băng bó", example: "Er verbindet die Wunde.", isRule: false },
        { word: "sterben", meaning: "Chết, qua đời", example: "Seine Großmutter ist gestorben.", isRule: true }
      ]
    }
  ];

  return (
    <div className="space-y-12 pb-12 animate-fade-in max-w-4xl mx-auto">
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-3xl font-black text-theme-dark uppercase tracking-tight">Từ Vựng: Khám Bệnh & Cấp Cứu</h2>
        <p className="text-theme-dark/70 font-medium">Lektion 8: Hoffentlich ist es nicht das Herz!</p>
      </div>

      <div className="space-y-8">
        {vocabSections.map((section, idx) => (
          <div key={idx} className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-sm border-2 border-white">
            <h3 className="text-xl font-bold text-theme-primary mb-6">{section.title}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.words.map((w, wIdx) => {
                const audioId = `l8-vocab-${idx}-${wIdx}`;
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
      
      <div className="bg-rose-50 rounded-3xl p-6 md:p-8 border-2 border-rose-100 mt-12">
        <h3 className="text-xl font-bold text-rose-700 mb-6 text-center">Giao tiếp: Bày tỏ Lo lắng & Cảm thông</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-bold text-rose-900 border-b-2 border-rose-200 pb-2">Bày tỏ sự lo lắng (Sorge)</h4>
            <ul className="space-y-3 font-medium text-rose-800">
              <li className="flex gap-2"><span>💬</span> Was ist denn los? (Có chuyện gì vậy?)</li>
              <li className="flex gap-2"><span>💬</span> Ich mache mir Sorgen. (Tôi rất lo lắng.)</li>
              <li className="flex gap-2"><span>💬</span> Ich habe Angst vor der Operation.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-rose-900 border-b-2 border-rose-200 pb-2">Đồng cảm & Hy vọng</h4>
            <ul className="space-y-3 font-medium text-rose-800">
              <li className="flex gap-2"><span>💬</span> Das tut mir wirklich leid. (Tôi rất tiếc.)</li>
              <li className="flex gap-2"><span>💬</span> Das finde ich traurig. (Tôi thấy điều đó thật buồn.)</li>
              <li className="flex gap-2"><span>💬</span> Hoffentlich ist es nicht das Herz!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

