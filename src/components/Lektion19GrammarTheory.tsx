import React from 'react';
import { Volume2, BookOpen, AlertTriangle } from 'lucide-react';

export default function Lektion19GrammarTheory({ playAudio, playingId }: { playAudio: (text: string, id: string, lang?: string) => void, playingId: string | null }) {
  const GRAMMAR_INTRO_SCRIPT = `Xin chào các bạn. Về Ngữ pháp bài 19, trọng tâm lớn nhất của chúng ta là các giới từ chỉ địa điểm Lokale Präpositionen dùng để trả lời cho hai câu hỏi chính: Woher (từ đâu đến) và Wohin (đi đâu đến). Đầu tiên, khi trả lời câu hỏi Woher, chúng ta dùng giới từ 'aus' cộng với Dativ dành cho các không gian kín (như nhà cửa, rạp phim) hoặc 'von' cộng với Dativ (dành cho người, địa điểm chuyên biệt hoặc sự kiện). Ví dụ: 'Ich komme gerade aus dem Kino.' hoặc 'Ich komme vom Sport, vom Arzt.' Thứ hai, khi trả lời câu hỏi Wohin, chúng ta dùng giới từ 'in' cộng với Akkusativ khi đi vào bên trong, và 'zu' cộng với Dativ khi đi đến chỗ của ai đó hoặc một sự kiện nào đó. Ví dụ: 'Ich gehe ins Kino.' hoặc 'Ich gehe zu Paul. Ich gehe zum Arzt.' Hãy nhớ đặc điểm quan trọng này nhé!`;

  return (
    <div className="space-y-8 pb-12 animate-fade-in max-w-4xl mx-auto">
      <div className="flex max-md:flex-col items-center justify-center gap-4 mb-8">
        <h2 className="text-3xl font-black text-theme-dark uppercase tracking-tight text-center bg-white/50 py-4 rounded-3xl inline-block px-8 border-2 border-white shadow-sm mb-0">
          Lý thuyết Ngữ pháp
        </h2>
        <div className="flex items-center gap-3 bg-white pl-2 pr-5 py-1.5 rounded-full shadow-sm border-2 border-theme-secondary/20">
          <button 
            onClick={() => playAudio(GRAMMAR_INTRO_SCRIPT, 'l19-grammar-intro', 'vi-VN')} 
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-all ${playingId === 'l19-grammar-intro' ? 'bg-theme-secondary text-white shadow-theme-secondary/30 shadow-lg animate-pulse' : 'bg-theme-secondary/10 text-theme-secondary hover:bg-theme-secondary hover:text-white'}`}
            title="Nghe Bài giảng Ngữ pháp (Tiếng Việt)"
          >
            {playingId === 'l19-grammar-intro' ? <Volume2 size={20} /> : <Volume2 size={20} />}
          </button>
          <span className="text-sm font-bold text-theme-secondary uppercase tracking-widest">
            Audio giới thiệu ngữ pháp
          </span>
        </div>
      </div>
      
      {/* PHẦN 1: WOHER */}
      <section className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-sm border-4 border-white overflow-hidden relative group">
        <div className="absolute top-0 left-0 w-full h-2 bg-rose-400 group-hover:h-3 transition-all"></div>
        <h3 className="text-2xl font-black text-rose-500 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-rose-100 flex items-center justify-center flex-shrink-0">
            <BookOpen size={20} className="text-rose-600" />
          </div>
          1. WOHER? (Từ đâu đến?)
        </h3>
        
        <p className="text-lg text-theme-dark/80 mb-6 leading-relaxed font-medium">
          Dùng để diễn tả nguồn gốc xuất phát từ một địa điểm hoặc một người nào đó.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* aus + Dativ */}
          <div className="bg-rose-50/50 rounded-3xl p-6 border-2 border-rose-100 relative">
            <h4 className="text-xl font-bold text-rose-600 mb-4 pb-2 border-b-2 border-rose-200">
              aus + Dativ
            </h4>
            <p className="text-theme-dark/70 mb-4 font-medium">
              Dùng khi bạn rời khỏi (đi ra) từ một <strong className="text-rose-600">không gian kín</strong> (tòa nhà, phòng, hộp, thành phố, quốc gia).
            </p>
            <ul className="space-y-3 font-medium">
              <li className="flex gap-2">
                <span className="text-rose-400">►</span> 
                <span>Ich komme gerade <strong className="text-rose-600">aus dem</strong> Theater.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-400">►</span> 
                <span>Er geht <strong className="text-rose-600">aus dem</strong> Haus.</span>
              </li>
              <li className="flex gap-2 text-theme-dark/60 text-sm">
                (từ rạp hát, từ trong nhà)
              </li>
            </ul>
          </div>

          {/* von + Dativ */}
          <div className="bg-rose-50/50 rounded-3xl p-6 border-2 border-rose-100 relative">
            <h4 className="text-xl font-bold text-rose-600 mb-4 pb-2 border-b-2 border-rose-200">
              von + Dativ
            </h4>
            <p className="text-theme-dark/70 mb-4 font-medium">
              Dùng khi bạn rời khỏi một <strong className="text-rose-600">người</strong>, một <strong className="text-rose-600">hoạt động/sự kiện</strong>, hoặc địa điểm có tính mở.
            </p>
            <ul className="space-y-3 font-medium">
              <li className="flex gap-2">
                <span className="text-rose-400">►</span> 
                <span>Ich habe Grippe. Ich komme gerade <strong className="text-rose-600">vom</strong> Arzt. (von dem)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-rose-400">►</span> 
                <span>Herr Müller kommt <strong className="text-rose-600">vom</strong> Essen zurück.</span>
              </li>
              <li className="flex gap-2 text-theme-dark/60 text-sm">
                (từ chỗ bác sĩ, từ bữa ăn)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PHẦN 2: WOHIN */}
      <section className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-sm border-4 border-white overflow-hidden relative group">
        <div className="absolute top-0 left-0 w-full h-2 bg-emerald-400 group-hover:h-3 transition-all"></div>
        <h3 className="text-2xl font-black text-emerald-500 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <BookOpen size={20} className="text-emerald-600" />
          </div>
          2. WOHIN? (Đi đến đâu?)
        </h3>
        
        <p className="text-lg text-theme-dark/80 mb-6 leading-relaxed font-medium">
          Dùng để chỉ đích đến của một sự chuyển động.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* in + Akkusativ */}
          <div className="bg-emerald-50/50 rounded-3xl p-6 border-2 border-emerald-100 relative">
            <h4 className="text-xl font-bold text-emerald-600 mb-4 pb-2 border-b-2 border-emerald-200">
              in + Akkusativ
            </h4>
            <p className="text-theme-dark/70 mb-4 font-medium">
              Dùng khi bạn đi <strong className="text-emerald-600">vào bên trong</strong> một không gian có giới hạn (nhà cửa, vườn, rừng).
            </p>
            <ul className="space-y-3 font-medium">
              <li className="flex gap-2">
                <span className="text-emerald-400">►</span> 
                <span>Wir gehen heute Abend <strong className="text-emerald-600">ins</strong> Kino. (in das)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">►</span> 
                <span>Sie geht <strong className="text-emerald-600">in die</strong> Stadt.</span>
              </li>
              <li className="flex gap-2 text-theme-dark/60 text-sm">
                (vào rạp phim, vào trung tâm thành phố)
              </li>
            </ul>
          </div>

          {/* zu + Dativ */}
          <div className="bg-emerald-50/50 rounded-3xl p-6 border-2 border-emerald-100 relative">
            <h4 className="text-xl font-bold text-emerald-600 mb-4 pb-2 border-b-2 border-emerald-200">
              zu + Dativ
            </h4>
            <p className="text-theme-dark/70 mb-4 font-medium">
              Dùng khi đi đến <strong className="text-emerald-600">chỗ một người</strong>, một <strong className="text-emerald-600">hoạt động</strong>, hoặc hướng tới một tòa nhà/địa điểm nhưng <strong className="text-emerald-600">không nhất thiết bước vào trong</strong>.
            </p>
            <ul className="space-y-3 font-medium">
              <li className="flex gap-2">
                <span className="text-emerald-400">►</span> 
                <span>Ich muss <strong className="text-emerald-600">zum</strong> Arzt gehen. (zu dem)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">►</span> 
                <span>Wir gehen <strong className="text-emerald-600">zu</strong> Paul.</span>
              </li>
              <li className="flex gap-2 text-theme-dark/60 text-sm">
                (tới chỗ bác sĩ, tới chỗ nhà Paul)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tóm tắt */}
      <section className="bg-indigo-50/50 rounded-[2.5rem] p-6 shadow-sm border-2 border-indigo-100 flex items-start gap-4">
        <div className="p-3 bg-indigo-100 rounded-2xl flex-shrink-0 text-indigo-600">
          <AlertTriangle size={24} />
        </div>
        <div>
          <h4 className="font-bold text-indigo-800 text-lg mb-2">TỔNG KẾT NHANH</h4>
          <p className="text-indigo-900/80 font-medium">Hệ thống lại với 3 câu hỏi chính: Wo (Ở đâu), Woher (Từ đâu), Wohin (Đi đâu):</p>
          <ul className="mt-2 space-y-2 text-indigo-900 font-medium">
            <li>• <strong className="text-indigo-800">Tới rạp chiếu phim:</strong> <code>ins Kino</code> (Wohin) &rarr; <code>im Kino</code> (Wo) &rarr; <code>aus dem Kino</code> (Woher)</li>
            <li>• <strong className="text-indigo-800">Tới chỗ bác sĩ:</strong> <code>zum Arzt</code> (Wohin) &rarr; <code>beim Arzt</code> (Wo) &rarr; <code>vom Arzt</code> (Woher)</li>
            <li>• <strong className="text-indigo-800">Tới chỗ chơi thể thao:</strong> <code>zum Sport</code> (Wohin) &rarr; <code>beim Sport</code> (Wo) &rarr; <code>vom Sport</code> (Woher)</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
