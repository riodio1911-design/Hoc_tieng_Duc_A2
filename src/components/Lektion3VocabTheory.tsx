import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion3VocabTheory({ playAudio, playingId }: Props) {
  const vocabSections = [
    {
      title: "1. Thiên nhiên và Môi trường (Natur und Umwelt)",
      words: [
        { word: "die Landschaft, -en", meaning: "phong cảnh", example: "Die Landschaft hier ist wunderschön." },
        { word: "das Dorf, -\"er", meaning: "ngôi làng", example: "Das Bauerndorf liegt in den Bergen." },
        { word: "der Strand, -\"e", meaning: "bãi biển", example: "Wir liegen den ganzen Tag am Strand." },
        { word: "das Ufer, -", meaning: "bờ sông/bờ hồ", example: "Wir fahren am Ufer entlang." },
        { word: "die Pflanze, -n", meaning: "thực vật, cây cối", example: "Hier gibt es viele Tiere und Pflanzen." },
        { word: "die Luft (Sg.)", meaning: "không khí", example: "Wir genießen die gute Luft." },
        { word: "die Ruhe (Sg.)", meaning: "sự yên tĩnh", example: "Hier finden Sie Ruhe und Erholung." },
        { word: "der Vogel, -\"", meaning: "con chim", example: "Die Vögel singen morgens." },
        { word: "die Katze, -n", meaning: "con mèo", example: "Der Bauernhof hat Hunde und Katzen." },
        { word: "das Tier, -e", meaning: "động vật", example: "Welche Tiere gibt es hier?" },
        { word: "wandern (ist gewandert)", meaning: "đi bộ đường dài", example: "Wir wandern in den Bergen." }
      ]
    },
    {
      title: "2. Du lịch và Dịch vụ (Tourismus & Service)",
      words: [
        { word: "die Beratung, -en", meaning: "sự tư vấn", example: "Wir bieten kompetente Beratung." },
        { word: "die Erfahrung, -en", meaning: "kinh nghiệm", example: "Du hast die Motivation, wir haben die Erfahrung." },
        { word: "die Fahrt, -en", meaning: "chuyến đi", example: "Bei Fahrten durch die Natur sehen Sie viele Tiere." },
        { word: "die Gruppe, -n", meaning: "nhóm", example: "Unsere Gruppen sind klein." },
        { word: "die Karte, -n", meaning: "bản đồ / vé", example: "Haben Sie eine Karte von der Stadt?" },
        { word: "der Service, -s", meaning: "dịch vụ", example: "Der Fahrradvermieter bietet extra Service." },
        { word: "der Trend, -s", meaning: "xu hướng", example: "Wandern liegt im Trend." },
        { word: "der Unterricht, -e", meaning: "tiết học", example: "Hier gibt es Unterricht für Anfänger." },
        { word: "anbieten (hat angeboten)", meaning: "cung cấp, chào bán", example: "Wir bieten Stadtteilen für Touristen an." },
        { word: "beraten (hat beraten)", meaning: "tư vấn", example: "Wir beraten Sie sehr gern." },
        { word: "buchen (hat gebucht)", meaning: "đặt (chỗ, vé, tour)", example: "Welche Reise würdest du am liebsten buchen?" },
        { word: "erleben (hat erlebt)", meaning: "trải nghiệm", example: "Mit dem Fahrrad erlebt man alles anders." },
        { word: "mitmachen (hat mitgemacht)", meaning: "cùng tham gia", example: "Nur Fortgeschrittene dürfen beim Unterricht mitmachen." },
        { word: "aktiv / sportlich", meaning: "năng động / mang tính thể thao", example: "Sie können hier sportlich aktiv sein." }
      ]
    },
    {
      title: "3. Từ vựng quan trọng khác",
      words: [
        { word: "die Mode, -n", meaning: "thời trang", example: "Das ist die neueste Surf-Mode." },
        { word: "liegen in (hat gelegen)", meaning: "đang là xu hướng", example: "E-Bikes liegen gerade im Trend." },
        { word: "überhaupt nicht", meaning: "hoàn toàn không", example: "Das gefällt mir überhaupt nicht." },
        { word: "anders", meaning: "khác biệt", example: "Was war früher anders als heute?" },
        { word: "außerdem", meaning: "ngoài ra", example: "Außerdem haben wir viel Sonne." },
        { word: "direkt", meaning: "trực tiếp", example: "Sie übernachten direkt am Wasser." }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-emerald-500 mb-2">Từ vựng Lektion 3 (Lernwortschatz)</h2>
        <p className="text-theme-dark/60 font-medium">Chủ đề: Thiên nhiên, Môi trường & Du lịch</p>
      </div>

      <div className="space-y-8">
        {vocabSections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-6 shadow-xl shadow-theme-dark/5 border-2 border-emerald-500/10">
            <h3 className="text-xl font-bold text-emerald-600 mb-6">{section.title}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {section.words.map((item, i) => {
                const isPlaying = playingId === `v3_${idx}_${i}`;
                return (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 ${
                      isPlaying ? 'border-emerald-500 bg-emerald-50 shadow-lg shadow-emerald-500/20' : 'border-slate-100 hover:border-emerald-500/30'
                    }`}
                    onClick={() => playAudio(item.word, `v3_${idx}_${i}`)}
                  >
                    <div className={`p-2 rounded-full mt-1 shrink-0 ${isPlaying ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                      <Play size={16} className={isPlaying ? 'animate-pulse' : ''} />
                    </div>
                    <div>
                      <p className="font-bold text-theme-dark text-lg">{item.word}</p>
                      <p className="text-emerald-700 font-medium text-sm mb-1">{item.meaning}</p>
                      <p className="text-slate-500 text-sm italic">"{item.example}"</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-200">
         <h4 className="font-bold text-emerald-800 mb-2">Đánh giá và Thể hiện sở thích (Bewerten & Vorlieben)</h4>
         <ul className="space-y-2 text-emerald-900 font-medium text-sm md:text-base">
            <li>• <span className="font-bold">Welche Idee gefällt Ihnen am besten?</span> (Bạn thích ý tưởng nào nhất?)</li>
            <li>• <span className="font-bold">Also ich finde / denke / mag...</span> (Tôi thấy / nghĩ / thích...)</li>
            <li>• <span className="font-bold">Mir gefällt das Angebot sehr gut / nicht besonders / überhaupt nicht.</span> (Tôi rất thích / không thích lắm / hoàn toàn không thích đề nghị này.)</li>
            <li>• <span className="font-bold">Glaubst du, das funktioniert? - Ja, ich glaube schon.</span> (Bạn có nghĩ điều đó khả thi không? - Có, tôi nghĩ là có.)</li>
            <li>• <span className="font-bold">Welche Reise würden Sie am liebsten buchen?</span> (Bạn thích đặt chuyến đi nào nhất?)</li>
            <li>• <span className="font-bold">Ich würde am liebsten ... buchen.</span> (Tôi muốn đặt ... nhất.)</li>
            <li>• <span className="font-bold">Wirklich? Ich fahre lieber Fahrrad.</span> (Thật ư? Tôi thích đạp xe hơn.)</li>
         </ul>
      </div>
    </div>
  );
}
