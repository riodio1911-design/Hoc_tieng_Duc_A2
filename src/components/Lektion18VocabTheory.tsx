import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion18VocabTheory({ playAudio, playingId }: Props) {
  const vocabSections = [
    {
      title: "1. Thời tiết (Das Wetter)",
      words: [
        { word: "die Sonne", meaning: "Mặt trời", example: "sonnig (nhiều nắng)", isRule: true },
        { word: "der Regen", meaning: "Mưa", example: "regnerisch (trời mưa)", isRule: true },
        { word: "der Schnee", meaning: "Tuyết", example: "verschneit / schneien (có tuyết / rơi tuyết)", isRule: true },
        { word: "der Wind", meaning: "Gió", example: "windig (nhiều gió)", isRule: true },
        { word: "der Nebel", meaning: "Sương mù", example: "neblig (nhiều sương mù)", isRule: true },
        { word: "das Gewitter", meaning: "Dông bão", example: "", isRule: false },
        { word: "die Hitze", meaning: "Sự nóng bức", example: "heiß (nóng)", isRule: true },
        { word: "die Kälte", meaning: "Sự lạnh lẽo", example: "kalt (lạnh)", isRule: true },
        { word: "warm", meaning: "Ấm áp", example: "", isRule: false },
        { word: "bewölkt", meaning: "Nhiều mây", example: "", isRule: false }
      ]
    },
    {
      title: "2. Du lịch & Bãi biển (Urlaub & Strand)",
      words: [
        { word: "das Handtuch", meaning: "Khăn tắm", example: "Ich brauche ein Handtuch.", isRule: false },
        { word: "die Badehose", meaning: "Quần bơi", example: "Er trägt eine Badehose.", isRule: false },
        { word: "die Sonnencreme", meaning: "Kem chống nắng", example: "Wir brauchen Sonnencreme.", isRule: false },
        { word: "der Golfplatz", meaning: "Sân golf", example: "Spielen auf dem Golfplatz.", isRule: false },
        { word: "der Parkplatz", meaning: "Bãi đỗ xe", example: "Ein großer Parkplatz.", isRule: false },
        { word: "das Freizeitland", meaning: "Khu vui chơi, công viên", example: "Fahren ins Freizeitland.", isRule: false }
      ]
    },
    {
      title: "3. Chỉ đường & Trạng từ (Wegbeschreibung & Adverbien)",
      words: [
        { word: "geradeaus", meaning: "Đi thẳng", example: "Gehen Sie geradeaus.", isRule: false },
        { word: "links / rechts", meaning: "Trái / Phải", example: "Nach links abbiegen.", isRule: false },
        { word: "dahinter", meaning: "Phía sau đó", example: "Der Park ist dahinter.", isRule: false },
        { word: "vorbei", meaning: "Ngang qua", example: "Gehen Sie vorbei.", isRule: false },
        { word: "meistens", meaning: "Thông thường", example: "Er ist meistens pünktlich.", isRule: false },
        { word: "leider", meaning: "Đáng tiếc", example: "Leider habe ich keine Zeit.", isRule: false }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-blue-600 mb-2">Từ vựng (Lernwortschatz)</h2>
        <p className="text-theme-dark/60 font-medium">Lektion 18: Ich weiß nicht, wo ich bin</p>
      </div>

      <div className="space-y-8">
        {vocabSections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-6 shadow-xl shadow-theme-dark/5 border-2 border-blue-500/10">
            <h3 className="text-xl font-bold text-blue-700 mb-6">{section.title}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.words.map((item, i) => {
                const isPlaying = playingId === `v18_${idx}_${i}`;
                return (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 ${
                      isPlaying ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-500/20' : 'border-slate-100 hover:border-blue-500/30'
                    }`}
                    onClick={() => playAudio(item.word, `v18_${idx}_${i}`)}
                  >
                    <div className={`p-2 rounded-full mt-1 ${isPlaying ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                      <Play size={16} className={isPlaying ? 'animate-pulse' : ''} />
                    </div>
                    <div>
                      <p className="font-bold text-theme-dark text-lg">{item.word}</p>
                      <p className="text-blue-600 font-medium text-sm mb-1">{item.meaning}</p>
                      {item.example && (
                        <p className={`text-sm ${item.isRule ? 'font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded inline-block mt-1' : 'text-slate-500 italic'}`}>
                          {item.isRule ? `➔ Tính từ: ${item.example}` : `"${item.example}"`}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
