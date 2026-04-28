import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion14VocabTheory({ playAudio, playingId }: Props) {
  const vocabSections = [
    {
      title: "1. Bưu điện & Gửi hàng (Post & Päckchen)",
      words: [
        { word: "die Post", meaning: "bưu điện", example: "Ich muss noch zur Post gehen." },
        { word: "das Päckchen, -", meaning: "gói hàng nhỏ", example: "Zuerst wird das Päckchen gepackt." },
        { word: "das Paket, -e", meaning: "bưu kiện", example: "Paula verschickt ein Paket." },
        { word: "der Absender, -", meaning: "người gửi", example: "Hier steht leider kein Absender." },
        { word: "der Empfänger, -", meaning: "người nhận", example: "Das Paket wird an den Empfänger geliefert." },
        { word: "der Briefkasten, ⸚", meaning: "hòm thư", example: "Bitte wirf den Brief in den Briefkasten." },
        { word: "der Schalter, -", meaning: "quầy giao dịch", example: "Gehen Sie bitte zum Schalter 3." },
        { word: "die Unterschrift, -en", meaning: "chữ ký", example: "Hier fehlt Ihre Unterschrift." },
      ]
    },
    {
      title: "2. Động từ thường dùng (Verben)",
      words: [
        { word: "packen", meaning: "đóng đồ vào", example: "Es werden fleißig Päckchen gepackt." },
        { word: "einpacken", meaning: "đóng gói / gói lại", example: "Geschenke werden in den Karton eingepackt." },
        { word: "transportieren", meaning: "vận chuyển", example: "Die Pakete werden mit einem Lkw transportiert." },
        { word: "unterschreiben", meaning: "ký tên", example: "Man muss das Formular unterschreiben." },
        { word: "ankreuzen", meaning: "đánh dấu chéo", example: "Bitte Geschlecht und Alter ankreuzen." },
        { word: "ergänzen", meaning: "điền vào, bổ sung", example: "Ergänzen Sie die fehlenden Wörter." },
        { word: "denken an", meaning: "nghĩ về", example: "Schön, dass Du an mich gedacht hast." },
        { word: "benutzen", meaning: "sử dụng", example: "Gestern habe ich sie gleich benutzt." },
        { word: "gebrauchen", meaning: "dùng, sử dụng", example: "Das kann ich gut gebrauchen." }
      ]
    },
    {
      title: "3. Quà tặng & Đồ vật (Geschenke & Dinge)",
      words: [
        { word: "die Creme, -s", meaning: "kem bôi/dưỡng", example: "Die Gesichtscreme ist super." },
        { word: "die Gebrauchsanweisung, -en", meaning: "hướng dẫn sử dụng", example: "Lesen Sie die Gebrauchsanweisung." },
        { word: "die Tafel, -n", meaning: "thanh, bảng", example: "Ich liebe 3 Tafeln Chili-Schokolade." },
        { word: "der Schritt, -e", meaning: "bước", example: "Schritt 1: Zuerst wird der Karton beklebt." },
        { word: "der Zentimeter, -", meaning: "xen-ti-mét", example: "Der Schuhkarton ist 30 Zentimeter lang." }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-rose-500 mb-2">Từ vựng Lektion 14 (Lernwortschatz)</h2>
        <p className="text-theme-dark/60 font-medium">Chủ đề: Tại bưu điện & Gửi quà tặng</p>
      </div>

      <div className="space-y-8">
        {vocabSections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-6 shadow-xl shadow-theme-dark/5 border-2 border-rose-500/10">
            <h3 className="text-xl font-bold text-rose-600 mb-6">{section.title}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.words.map((item, i) => {
                const isPlaying = playingId === `v14_${idx}_${i}`;
                return (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 ${
                      isPlaying ? 'border-rose-500 bg-rose-50 shadow-lg shadow-rose-500/20' : 'border-slate-100 hover:border-rose-500/30'
                    }`}
                    onClick={() => playAudio(item.word, `v14_${idx}_${i}`)}
                  >
                    <div className={`p-2 rounded-full mt-1 ${isPlaying ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
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
         <h4 className="font-bold text-rose-700 mb-2">Cách bày tỏ sự vui mừng (Freude ausdrücken)</h4>
         <ul className="space-y-3 text-rose-800 font-medium text-sm md:text-base">
            <li className="flex gap-2"><span>🎁</span> <span><span className="font-bold">Vielen Dank für Deine tollen Geschenke!</span> (Cảm ơn rất nhiều vì những món quà tuyệt vời!)</span></li>
            <li className="flex gap-2"><span>💬</span> <span><span className="font-bold">Schön, dass Du an mich gedacht hast.</span> (Thật tuyệt vì bạn đã nhớ tới mình.)</span></li>
            <li className="flex gap-2"><span>🥰</span> <span><span className="font-bold">Die Geschenke haben mich sehr gefreut.</span> (Những món quà đã làm mình rất vui.)</span></li>
            <li className="flex gap-2"><span>❤️</span> <span><span className="font-bold">Ich liebe / mag Schokolade besonders gern.</span> (Mình đặc biệt rất thích Sô-cô-la.)</span></li>
            <li className="flex gap-2"><span>👍</span> <span><span className="font-bold">Der Gutschein ist eine tolle Idee.</span> (Phiếu quà tặng là một ý tưởng tuyệt vời.)</span></li>
            <li className="flex gap-2"><span>😊</span> <span><span className="font-bold">Ich bin sehr froh, dass... / Ich freue mich sehr auf...</span> (Mình rất vui rằng... / Mình rất trông mong...)</span></li>
         </ul>
      </div>
    </div>
  );
}
