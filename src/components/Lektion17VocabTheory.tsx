import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion17VocabTheory({ playAudio, playingId }: Props) {
  const vocabSections = [
    {
      title: "1. Phương tiện & Giao thông (Verkehrsmittel & Straße)",
      words: [
        { word: "die Tankstelle, -n", meaning: "Trạm xăng", example: "Wir müssen an der Tankstelle tanken." },
        { word: "die Ampel, -n", meaning: "Đèn giao thông", example: "An der Ampel stehen bleiben." },
        { word: "die Autobahn, -en", meaning: "Đường cao tốc", example: "Auf der Autobahn darf man schnell fahren." },
        { word: "die Grenze, -n", meaning: "Biên giới", example: "Wir stehen an der Grenze." },
        { word: "die Fähre, -n", meaning: "Phà", example: "Wir überqueren den Fluss mit der Fähre." },
        { word: "die Panne, -n", meaning: "Sự cố, hỏng xe", example: "Wir hatten eine Reifenpanne." },
        { word: "der Reifen, -", meaning: "Lốp xe", example: "Winterreifen / Sommerreifen" },
        { word: "die Abfahrt / die Ankunft", meaning: "Sự khởi hành / Sự đến nơi", example: "Nach der Abfahrt waren wir müde." }
      ]
    },
    {
      title: "2. Địa điểm Du lịch & Thiên nhiên (Urlaubsorte)",
      words: [
        { word: "das Meer, -e / die See", meaning: "Biển", example: "Wir fahren ans Meer." },
        { word: "die Küste, -n", meaning: "Bờ biển", example: "Ein Hotel an der Küste" },
        { word: "der Strand, \"-e", meaning: "Bãi biển", example: "Am Strand liegen" },
        { word: "die Insel, -n", meaning: "Hòn đảo", example: "Wir waren auf einer Insel." },
        { word: "die Berge (Pl.) / das Gebirge", meaning: "Núi / Dãy núi", example: "Wir wandern in den Bergen." },
        { word: "der Wald, \"-er", meaning: "Rừng", example: "Spazieren im Wald" },
        { word: "die Wüste, -n", meaning: "Sa mạc", example: "Heiß in der Wüste" },
        { word: "das Zelt, -e", meaning: "Cái lều", example: "Wir übernachten im Zelt auf der Wiese." }
      ]
    },
    {
      title: "3. Cụm động từ & Trạng thái (Verben & Adjektive)",
      words: [
        { word: "sich ausruhen", meaning: "Nghỉ ngơi", example: "Nach der Fahrt ruhen wir uns aus." },
        { word: "einschlafen", meaning: "Ngủ thiếp đi", example: "Ich bin sofort eingeschlafen." },
        { word: "erleben", meaning: "Trải nghiệm", example: "Wir haben im Urlaub viel erlebt." },
        { word: "müde / munter", meaning: "Mệt mỏi / Tỉnh táo", example: "Wir waren sehr müde." },
        { word: "optimistisch", meaning: "Lạc quan", example: "Bleib optimistisch!" },
        { word: "komisch", meaning: "Kỳ lạ, lạ lùng", example: "Der Motor macht komische Geräusche." }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-amber-500 mb-2">Từ vựng (Lernwortschatz)</h2>
        <p className="text-theme-dark/60 font-medium">Chủ đề Du lịch, Giao thông & Thiên nhiên</p>
      </div>

      <div className="space-y-8">
        {vocabSections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-6 shadow-xl shadow-theme-dark/5 border-2 border-amber-500/10">
            <h3 className="text-xl font-bold text-amber-600 mb-6">{section.title}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.words.map((item, i) => {
                const isPlaying = playingId === `v17_${idx}_${i}`;
                return (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 ${
                      isPlaying ? 'border-amber-500 bg-amber-50 shadow-lg shadow-amber-500/20' : 'border-slate-100 hover:border-amber-500/30'
                    }`}
                    onClick={() => playAudio(item.word, `v17_${idx}_${i}`)}
                  >
                    <div className={`p-2 rounded-full mt-1 ${isPlaying ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                      <Play size={16} className={isPlaying ? 'animate-pulse' : ''} />
                    </div>
                    <div>
                      <p className="font-bold text-theme-dark text-lg">{item.word}</p>
                      <p className="text-amber-600 font-medium text-sm mb-1">{item.meaning}</p>
                      <p className="text-slate-500 text-sm italic">"{item.example}"</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-amber-50 rounded-3xl p-6 border border-amber-200">
         <h4 className="font-bold text-amber-700 mb-2">Bày tỏ ý kiến (Etwas kommentieren)</h4>
         <ul className="space-y-2 text-amber-800 font-medium text-sm md:text-base">
            <li>• <span className="font-bold">So ein Zufall!</span> (Thật là trùng hợp!)</li>
            <li>• <span className="font-bold">Nicht zu glauben!</span> (Không thể tin được!)</li>
            <li>• <span className="font-bold">Das sieht toll/schrecklich aus.</span> (Trông thật tuyệt / kinh khủng.)</li>
         </ul>
      </div>

    </div>
  );
}
