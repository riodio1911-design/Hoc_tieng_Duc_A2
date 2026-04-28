import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion1VocabTheory({ playAudio, playingId }: Props) {
  const vocabSections = [
    {
      title: "1. Gia đình (Die Familie)",
      words: [
        { word: "der Cousin / die Cousine", meaning: "anh/chị/em họ", example: "Mein Cousin spielt gern Fußball." },
        { word: "der Neffe", meaning: "cháu trai (của cô/dì/chú/bác)", example: "Mein Neffe ist fünf Jahre alt." },
        { word: "die Nichte", meaning: "cháu gái (của cô/dì/chú/bác)", example: "Die Nichte von Peter heißt Laura." },
        { word: "der Onkel", meaning: "chú, bác, cậu, dượng", example: "Mein Onkel arbeitet als Arzt." },
        { word: "die Tante", meaning: "cô, dì, bác gái, thím, mợ", example: "Meine Tante kocht sehr gut." },
        { word: "der Schwiegervater", meaning: "bố chồng / bố vợ", example: "Mein Schwiegervater ist lustig." },
        { word: "die Schwiegermutter", meaning: "mẹ chồng / mẹ vợ", example: "Die Schwiegermutter hilft oft." },
        { word: "der Schwiegersohn", meaning: "con rể", example: "Er ist der Schwiegersohn von Herr Müller." },
        { word: "die Schwiegertochter", meaning: "con dâu", example: "Ihre Schwiegertochter ist sehr nett." },
        { word: "der Großvater / der Opa", meaning: "ông", example: "Mein Großvater war schon Bäcker." },
        { word: "die Großmutter / die Oma", meaning: "bà", example: "Meine Oma erzählt tolle Geschichten." },
        { word: "das Enkelkind", meaning: "cháu (của ông/bà)", example: "Die Großeltern spielen mit dem Enkelkind." }
      ]
    },
    {
      title: "2. Tuổi thơ & Thanh thiếu niên (Kindheit und Jugend)",
      words: [
        { word: "Geschichten erzählen", meaning: "kể chuyện", example: "Ich habe meiner Schwester oft Geschichten erzählt." },
        { word: "draußen übernachten", meaning: "ngủ ngoài trời/qua đêm ngoài đường", example: "Wir haben manchmal draußen übernachtet." },
        { word: "auf Bäume klettern", meaning: "trèo cây", example: "Als Kind bin ich gern auf Bäume geklettert." },
        { word: "Fußballbilder sammeln", meaning: "sưu tầm ảnh bóng đá", example: "Ich habe früher Fußballbilder gesammelt." },
        { word: "Sachen auf dem Flohmarkt verkaufen", meaning: "bán đồ ở chợ đồ cũ", example: "Er hat seine Sachen auf dem Flohmarkt verkauft." },
        { word: "Einrad fahren", meaning: "đạp xe một bánh", example: "Sie ist oft Einrad gefahren." },
        { word: "Skateboard fahren", meaning: "trượt ván", example: "Wir sind im Park Skateboard gefahren." },
        { word: "Comics lesen", meaning: "đọc truyện tranh", example: "Mein Bruder hat immer Comics gelesen." },
        { word: "zeichnen", meaning: "vẽ", example: "Ich habe gern gezeichnet." },
        { word: "Computerspiele spielen", meaning: "chơi trò chơi trên máy tính", example: "Wir haben lange Computerspiele gespielt." },
        { word: "mit Puppen spielen", meaning: "chơi với búp bê", example: "Sie hat als Kind gern mit Puppen gespielt." },
        { word: "Süßigkeiten essen", meaning: "ăn kẹo / đồ ngọt", example: "Er hat oft Süßigkeiten gegessen." },
        { word: "Witze erzählen", meaning: "kể chuyện cười", example: "Mein Opa hat immer Witze erzählt." }
      ]
    },
    {
      title: "3. Các từ vựng hữu ích khác (Weitere wichtige Wörter)",
      words: [
        { word: "der Anfang (am Anfang)", meaning: "sự bắt đầu (lúc ban đầu)", example: "Am Anfang war es schwer." },
        { word: "das Ende (am Ende)", meaning: "sự kết thúc (lúc kết thúc)", example: "Am Ende hat es gut geklappt." },
        { word: "der Schluss (zum Schluss)", meaning: "đoạn kết (phần kết)", example: "Zum Schluss habe ich das Studium bestanden." },
        { word: "die Mannschaft", meaning: "đội", example: "Ich habe in einer Fußball-Mannschaft gespielt." },
        { word: "der Pfeffer", meaning: "hạt tiêu", example: "\"Geh doch dahin, wo der Pfeffer wächst!\" (Tránh xa tôi ra!)" },
        { word: "das Studium", meaning: "sự học đại học", example: "Das Studium war kompliziert." },
        { word: "passieren (ist passiert)", meaning: "xảy ra", example: "Was ist dann passiert?" },
        { word: "streiten (hat gestritten)", meaning: "cãi nhau", example: "Wir haben oft gestritten." },
        { word: "wachsen (ist gewachsen)", meaning: "lớn lên, phát triển", example: "Das Geschäft ist schnell gewachsen." }
      ]
    },
    {
      title: "4. Tính từ quan trọng (Adjektive)",
      words: [
        { word: "verrückt", meaning: "điên rồ, kỳ lạ", example: "Er war schon verrückt, mein Onkel." },
        { word: "einfach", meaning: "đơn giản", example: "Es war nicht einfach für sie." },
        { word: "kompliziert", meaning: "phức tạp", example: "Am Anfang war das Studium kompliziert." },
        { word: "fleißig", meaning: "chăm chỉ", example: "Sie hat fleißig gelernt." },
        { word: "früher", meaning: "ngày trước, trước đây", example: "Hast du früher oft deine Großeltern besucht?" },
        { word: "zuerst / dann / danach", meaning: "đầu tiên / sau đó / tiếp theo đó", example: "Zuerst habe ich studiert, dann habe ich gearbeitet." },
        { word: "geschlossen", meaning: "đóng cửa", example: "Die Bäckerei ist heute geschlossen." }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-rose-500 mb-2">Từ vựng Lektion 1 (Lernwortschatz)</h2>
        <p className="text-theme-dark/60 font-medium">Chủ đề: Gia đình & Kỷ niệm tuổi thơ</p>
      </div>

      <div className="space-y-8">
        {vocabSections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-6 shadow-xl shadow-theme-dark/5 border-2 border-rose-500/10">
            <h3 className="text-xl font-bold text-rose-600 mb-6">{section.title}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.words.map((item, i) => {
                const isPlaying = playingId === `v1_${idx}_${i}`;
                return (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 ${
                      isPlaying ? 'border-rose-500 bg-rose-50 shadow-lg shadow-rose-500/20' : 'border-slate-100 hover:border-rose-500/30'
                    }`}
                    onClick={() => playAudio(item.word, `v1_${idx}_${i}`)}
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
         <h4 className="font-bold text-rose-700 mb-2">Cách kể chuyện gia đình (Familiengeschichten erzählen)</h4>
         <ul className="space-y-2 text-rose-800 font-medium text-sm md:text-base">
            <li>• <span className="font-bold">Habe ich euch schon von... / meiner Familie erzählt?</span> (Tôi đã kể cho các bạn về... chưa?)</li>
            <li>• <span className="font-bold">Und wisst ihr, was dann passiert ist?</span> (Và bạn có biết chuyện gì xảy ra tiếp theo không?)</li>
            <li>• <span className="font-bold">Also passt auf: ...</span> (Vậy thì nghe này: ...)</li>
            <li>• <span className="font-bold">Zum Schluss hat er/sie...</span> (Cuối cùng thì anh ấy/cô ấy đã...)</li>
         </ul>
      </div>
    </div>
  );
}
