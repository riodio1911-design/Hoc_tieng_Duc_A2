import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface Props {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion13VocabTheory({ playAudio, playingId }: Props) {
  const vocabSections = [
    {
      title: "1. Sự kiện trong đời (Lebensereignisse)",
      words: [
        { word: "in den Kindergarten kommen", meaning: "đi mẫu giáo", example: "Mit drei Jahren ist sie in den Kindergarten gekommen." },
        { word: "in die Schule kommen", meaning: "đi học", example: "Mit sechs Jahren kommt man in die Schule." },
        { word: "mit der Schule fertig sein", meaning: "học xong phổ thông", example: "Ich bin mit der Schule fertig." },
        { word: "ein Studium anfangen", meaning: "bắt đầu học đại học", example: "Er hat ein Studium angefangen." },
        { word: "im Ausland leben", meaning: "sống ở nước ngoài", example: "Ich habe zwei Jahre im Ausland gelebt." },
        { word: "ein Examen bestehen", meaning: "thi đỗ", example: "Sie hat ihr Examen bestanden." },
        { word: "einen Job bekommen", meaning: "nhận việc", example: "Nach dem Studium hat er einen Job bekommen." },
        { word: "ein Kind bekommen", meaning: "sinh con, có con", example: "Sie hat letztes Jahr ein Kind bekommen." }
      ]
    },
    {
      title: "2. Học ngôn ngữ (Sprachen lernen)",
      words: [
        { word: "Vokabelkärtchen schreiben", meaning: "viết thẻ từ vựng", example: "Ich schreibe immer Vokabelkärtchen." },
        { word: "Sätze aufschreiben", meaning: "viết câu", example: "Ich schreibe Sätze auf." },
        { word: "Wörter wiederholen", meaning: "ôn lại từ vựng", example: "Man muss neue Wörter oft wiederholen." },
        { word: "Wörter übersetzen", meaning: "dịch từ", example: "Ich übersetze die neuen Wörter in meine Muttersprache." },
        { word: "Fehler korrigieren", meaning: "sửa lỗi", example: "Der Lehrer korrigiert die Fehler." },
        { word: "Sätze nachsprechen", meaning: "đọc theo câu", example: "Sprechen Sie die Sätze nach." },
        { word: "Grammatikaufgaben lösen", meaning: "giải bài tập ngữ pháp", example: "Ich löse jeden Tag Grammatikaufgaben." },
        { word: "Nachrichten hören", meaning: "nghe tin tức", example: "Ich höre deutsche Nachrichten." },
        { word: "Lieder mitsingen", meaning: "hát theo bài hát", example: "Mit Musik lerne ich gern, ich singe die Lieder mit." },
        { word: "Filme anschauen", meaning: "xem phim", example: "Wir schauen deutsche Filme an." }
      ]
    },
    {
      title: "3. Kiểu người học & Cảm nhận về ngôn ngữ (Lernertypen & Spracheindruck)",
      words: [
        { word: "der visuelle Typ", meaning: "Người học qua thị giác", example: "Er benutzt Bilder und Farben, er ist ein visueller Typ." },
        { word: "der auditive Typ", meaning: "Người học qua thính giác", example: "Sie lernt gut mit Musik, sie ist ein auditiver Typ." },
        { word: "der haptische Typ", meaning: "Người học qua xúc giác (vận động)", example: "Er muss sich beim Lernen bewegen." },
        { word: "laut / leise", meaning: "to / nhỏ (âm thanh)", example: "Bitte sprich nicht so laut." },
        { word: "hart / weich", meaning: "cứng / mềm mại", example: "Deutsch klingt manchmal hart." },
        { word: "melodisch / fremd", meaning: "du dương / lạ lẫm", example: "Vietnamesisch klingt sehr melodisch." }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-rose-500 mb-2">Từ vựng Lektion 13 (Lernwortschatz)</h2>
        <p className="text-theme-dark/60 font-medium">Chủ đề: Cuộc đời & Kinh nghiệm học tiếng Đức</p>
      </div>

      <div className="space-y-8">
        {vocabSections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-6 shadow-xl shadow-theme-dark/5 border-2 border-rose-500/10">
            <h3 className="text-xl font-bold text-rose-600 mb-6">{section.title}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.words.map((item, i) => {
                const isPlaying = playingId === `v13_${idx}_${i}`;
                return (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 ${
                      isPlaying ? 'border-rose-500 bg-rose-50 shadow-lg shadow-rose-500/20' : 'border-slate-100 hover:border-rose-500/30'
                    }`}
                    onClick={() => playAudio(item.word, `v13_${idx}_${i}`)}
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
         <h4 className="font-bold text-rose-700 mb-2">Chia sẻ kinh nghiệm học (Sprachlernerfahrungen berichten)</h4>
         <ul className="space-y-2 text-rose-800 font-medium text-sm md:text-base">
            <li>• <span className="font-bold">Ich finde es wichtig, dass man...</span> (Tôi nghĩ quan trọng là người ta...)</li>
            <li>• <span className="font-bold">Ich muss immer/oft...</span> (Tôi thường/luôn phải...)</li>
            <li>• <span className="font-bold">Für mich gibt es nur einen Weg:...</span> (Đối với tôi chỉ có 1 cách:...)</li>
            <li>• <span className="font-bold">Am (aller)wichtigsten ist für mich...</span> (Quan trọng nhất đối với tôi là...)</li>
            <li>• <span className="font-bold">Tests finde ich gar nicht wichtig.</span> (Tôi thấy kiểm tra không quan trọng chút nào.)</li>
         </ul>
      </div>
    </div>
  );
}
