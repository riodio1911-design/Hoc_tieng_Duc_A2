import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion2VocabTheory({ playAudio, playingId }: Props) {
  const vocabSections = [
    {
      title: "1. Đồ nội thất & Đồ dùng trong nhà (Möbel und Gegenstände)",
      words: [
        { word: "die Kommode, -n", meaning: "tủ ngăn kéo", example: "Wohin mit der Kommode?" },
        { word: "der Schrank, -\"e", meaning: "tủ quần áo/tủ đồ", example: "Der Schrank steht im Schlafzimmer." },
        { word: "das Regal, -e", meaning: "kệ, giá", example: "Stellen Sie Souvenirs auf ein Regal." },
        { word: "der Teppich, -e", meaning: "tấm thảm", example: "Ein Teppich auf dem Boden macht das Zimmer gemütlicher." },
        { word: "die Lampe, -n", meaning: "cái đèn", example: "Stellen Sie eine Lampe auf den Tisch." },
        { word: "das Kissen, -", meaning: "cái gối", example: "Auf dem Sofa liegen bunte Kissen." },
        { word: "der Spiegel, -", meaning: "cái gương", example: "Hängen Sie den Spiegel an die Wand." },
        { word: "der Schreibtisch, -e", meaning: "bàn làm việc", example: "Das Buch liegt auf dem Schreibtisch." },
        { word: "der Vorhang, -\"e", meaning: "rèm cửa", example: "Das hängt vor dem Fenster." },
        { word: "das Fernsehgerät, -e (CH: der Fernseher)", meaning: "cái tivi", example: "Das Fernsehgerät steht in der Ecke." },
        { word: "der Herd, -e", meaning: "bếp lò", example: "Der Herd ist in der Küche." },
        { word: "das Werkzeug, -e", meaning: "dụng cụ", example: "Das Werkzeug ist im Keller." }
      ]
    },
    {
      title: "2. Không gian & Chuyển nhà (Räume und Umzug)",
      words: [
        { word: "der Umzug", meaning: "sự chuyển nhà", example: "Ich ziehe gar nicht gern um." },
        { word: "der Raum, -\"e", meaning: "căn phòng", example: "Der Raum ist zu unordentlich." },
        { word: "die Ecke, -n", meaning: "góc", example: "Das Regal steht in der Ecke." },
        { word: "die Wand, -\"e", meaning: "bức tường", example: "Das Bild hängt an der Wand." },
        { word: "die Tür, -en", meaning: "cánh cửa", example: "Der Stuhl steht neben der Tür." },
        { word: "einrichten (hat eingerichtet)", meaning: "trang bị nội thất", example: "Jeder richtet seine Wohnung anders ein." },
        { word: "renovieren (hat renoviert)", meaning: "cải tạo, sửa chữa", example: "Lars soll Maria beim Renovieren helfen." },
        { word: "verstecken (hat versteckt)", meaning: "giấu", example: "Das Fernsehgerät verstecke ich im Schrank." },
        { word: "diskutieren (hat diskutiert)", meaning: "thảo luận, tranh luận", example: "Sie sollen nicht mehr diskutieren." }
      ]
    },
    {
      title: "3. Tính từ quan trọng (Wichtige Adjektive)",
      words: [
        { word: "schwer", meaning: "nặng, khó", example: "Die Kommode ist sehr schwer." },
        { word: "vorsichtig", meaning: "cẩn thận", example: "Seien Sie vorsichtig mit dunklen Möbeln." },
        { word: "dunkel", meaning: "tối", example: "Das Zimmer wird schnell zu dunkel." },
        { word: "hell", meaning: "sáng", example: "Eine helle Wand ist schöner." },
        { word: "unordentlich", meaning: "bừa bộn", example: "Der Raum ist zu unordentlich." },
        { word: "gemütlich", meaning: "ấm cúng, thoải mái", example: "Ein Teppich macht das Zimmer gleich viel gemütlicher." }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-rose-500 mb-2">Từ vựng Lektion 2 (Lernwortschatz)</h2>
        <p className="text-theme-dark/60 font-medium">Chủ đề: Đồ nội thất, Chuyển nhà & Trang trí (Möbel, Umzug & Einrichtung)</p>
      </div>

      <div className="space-y-8">
        {vocabSections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-6 shadow-xl shadow-theme-dark/5 border-2 border-rose-500/10">
            <h3 className="text-xl font-bold text-rose-600 mb-6">{section.title}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.words.map((item, i) => {
                const isPlaying = playingId === `v2_${idx}_${i}`;
                return (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 ${
                      isPlaying ? 'border-rose-500 bg-rose-50 shadow-lg shadow-rose-500/20' : 'border-slate-100 hover:border-rose-500/30'
                    }`}
                    onClick={() => playAudio(item.word, `v2_${idx}_${i}`)}
                  >
                    <div className={`p-2 rounded-full mt-1 shrink-0 ${isPlaying ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                      <Play size={16} className={isPlaying ? 'animate-pulse' : ''} />
                    </div>
                    <div>
                      <p className="font-bold text-theme-dark text-lg">{item.word}</p>
                      <p className="text-rose-600 font-medium text-sm mb-1">{item.meaning}</p>
                      <p className="text-slate-500 text-sm italic">"{item.example}"</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-rose-50 rounded-3xl p-6 border border-rose-200">
         <h4 className="font-bold text-rose-700 mb-2">Lời khuyên trang trí nhà cửa (Einrichtungstipps geben)</h4>
         <ul className="space-y-2 text-rose-800 font-medium text-sm md:text-base">
            <li>• <span className="font-bold">- Stellt/Stellen Sie nicht / nur ...</span> (Đừng đặt / Chỉ đặt...)</li>
            <li>• <span className="font-bold">- Sonst wird der Raum / das Zimmer ...</span> (Nếu không thì căn phòng sẽ...)</li>
            <li>• <span className="font-bold">- Dann sieht man ...</span> (Sau đó người ta sẽ thấy...)</li>
            <li>• <span className="font-bold">- Vorsicht mit / Passt auf mit ... / Seid vorsichtig mit ...</span> (Cẩn thận với...)</li>
            <li>• <span className="font-bold">- Schön ist ein Bild / ... an der Wand. / vor ...</span> (Một bức tranh / ... trên tường thì sẽ đẹp / ở phía trước...)</li>
         </ul>
      </div>
    </div>
  );
}
