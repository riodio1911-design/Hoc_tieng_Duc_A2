import React from 'react';
import { Volume2, BookOpen, AlertTriangle } from 'lucide-react';

export default function Lektion21GrammarTheory({ playAudio, playingId }: { playAudio: (text: string, id: string, lang?: string) => void, playingId: string | null }) {
  const GRAMMAR_INTRO_SCRIPT = `Xin chào các bạn. Trong bài 21 của giáo trình Menschen A2, chúng ta sẽ học một nhóm ngữ pháp rất quan trọng ... bao gồm 3 điểm: ... Thứ nhất là Frageartikel ... "welch-" ... tức là nhóm từ để hỏi như: "welcher" ... "welche" ... "welches" ... Thứ hai là Demonstrativpronomen ... tức là đại từ chỉ định như: "dieser" ... "diese" ... "dieses" ... và "der" ... "die" ... "das" ... Thứ ba là động từ "lassen" ... một động từ rất hay gặp trong tiếng Đức đời sống hằng ngày. Về "welch-", nó đi kèm với danh từ và mang nghĩa: cái nào, người nào. Ví dụ: "Welchen Pass meinen Sie?" ... "welch-" chia giống gần như mạo từ xác định "der", "die", "das". Thứ hai, về nhóm "dies-", dùng để chỉ rõ một người hay vật, mang nghĩa: cái này, người này. Ví dụ: "Dieser Pass ist neu." ... Nhóm "der", "die", "das" cũng có thể dùng như đại từ chỉ định thay thế cho danh từ đã nhắc trước đó. Ví dụ: "Der ist neu." thay vì "Dieser Pass ist neu." ... Cuối cùng, cấu trúc với "lassen". Quan trọng nhất là cấu trúc: "lassen" cộng Akkusativ cộng Infinitiv ... dùng khi mình nhờ, thuê hoặc để cho người khác làm việc gì đó. Ví dụ: "Ich lasse meinen Pass kopieren." ... tức là tôi nhờ ai đó photo hộ chiếu ... Ngoài ra "lassen" còn mang nghĩa cho phép: "Lassen Sie mich bitte rein." ... hoặc để nguyên: "Lass mich in Ruhe." ... Hãy ghi nhớ và luyện tập nhé!`;

  return (
    <div className="space-y-8 pb-12 animate-fade-in max-w-4xl mx-auto">
      <div className="flex max-md:flex-col items-center justify-center gap-4 mb-8">
        <h2 className="text-3xl font-black text-theme-dark uppercase tracking-tight text-center bg-white/50 py-4 rounded-3xl inline-block px-8 border-2 border-white shadow-sm mb-0">
          Lý thuyết Ngữ pháp
        </h2>
        <div className="flex items-center gap-3 bg-white pl-2 pr-5 py-1.5 rounded-full shadow-sm border-2 border-theme-secondary/20">
          <button 
            onClick={() => playAudio(GRAMMAR_INTRO_SCRIPT, 'l21-grammar-intro', 'vi-VN')} 
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-all ${playingId === 'l21-grammar-intro' ? 'bg-theme-secondary text-white shadow-theme-secondary/30 shadow-lg animate-pulse' : 'bg-theme-secondary/10 text-theme-secondary hover:bg-theme-secondary hover:text-white'}`}
            title="Nghe Bài giảng Ngữ pháp (Tiếng Việt)"
          >
            {playingId === 'l21-grammar-intro' ? <Volume2 size={20} /> : <Volume2 size={20} />}
          </button>
          <span className="text-sm font-bold text-theme-secondary uppercase tracking-widest">
            Audio giới thiệu ngữ pháp
          </span>
        </div>
      </div>
      
      {/* PHẦN 1: FRAGEARTIKEL „WELCH-“ */}
      <section className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-sm border-4 border-white overflow-hidden relative group">
        <div className="absolute top-0 left-0 w-full h-2 bg-indigo-400 group-hover:h-3 transition-all"></div>
        <h3 className="text-2xl font-black text-indigo-500 mb-6 flex items-center gap-3">
          <div className="bg-indigo-50 p-3 rounded-2xl"><BookOpen className="w-8 h-8 text-indigo-500" /></div>
          FRAGEARTIKEL „WELCH-“
        </h3>
        
        <div className="space-y-8 text-theme-dark/80">
          <div>
            <h4 className="text-xl font-bold text-theme-dark mb-4 border-b-2 border-slate-100 pb-2">1. Khi nào dùng „welch-“?</h4>
            <p className="flex items-start gap-4 bg-indigo-50/80 p-5 rounded-2xl text-indigo-900 border border-indigo-100 font-medium">
              <span className="text-2xl pt-1">👉</span>
              <span className="text-lg leading-relaxed">Dùng khi bạn hỏi <strong>“cái nào / người nào”</strong> trong một nhóm cụ thể.</span>
            </p>
            <div className="mt-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <p className="font-bold text-slate-500 uppercase tracking-widest text-sm mb-3">So sánh</p>
              <ul className="space-y-3 font-medium">
                <li className="flex items-center gap-3">
                   <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg font-bold">Was für ein...?</div>
                   <span className="text-slate-600">→ loại gì (hỏi chung chung về đặc điểm/loại bỏ)</span>
                </li>
                <li className="flex items-center gap-3">
                   <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg font-bold">Welcher...?</div>
                   <span className="text-slate-600">→ cái nào (chỉ đích danh một vật cụ thể trong nhóm)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-theme-dark mb-4 border-b-2 border-slate-100 pb-2">2. Bảng chia đuôi (Deklination)</h4>
            <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 uppercase text-xs tracking-widest">
                    <th className="p-4 font-bold border-b border-slate-200">Kasus</th>
                    <th className="p-4 font-bold border-b border-slate-200">Maskulin</th>
                    <th className="p-4 font-bold border-b border-slate-200">Feminin</th>
                    <th className="p-4 font-bold border-b border-slate-200">Neutral</th>
                    <th className="p-4 font-bold border-b border-slate-200">Plural</th>
                  </tr>
                </thead>
                <tbody className="text-[15px]">
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-700">Nominativ</td>
                    <td className="p-4 text-indigo-600 font-bold">welcher</td>
                    <td className="p-4 text-indigo-600 font-bold">welche</td>
                    <td className="p-4 text-indigo-600 font-bold">welches</td>
                    <td className="p-4 text-indigo-600 font-bold">welche</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-rose-50/30 hover:bg-rose-50 transition-colors">
                    <td className="p-4 font-bold text-rose-500">Akkusativ</td>
                    <td className="p-4 text-rose-600 font-black">welchen</td>
                    <td className="p-4 text-indigo-600 font-bold">welche</td>
                    <td className="p-4 text-indigo-600 font-bold">welches</td>
                    <td className="p-4 text-indigo-600 font-bold">welche</td>
                  </tr>
                  <tr className="hover:bg-amber-50 transition-colors">
                    <td className="p-4 font-bold text-amber-600">Dativ</td>
                    <td className="p-4 text-amber-600 font-bold">welchem</td>
                    <td className="p-4 text-amber-600 font-bold">welcher</td>
                    <td className="p-4 text-amber-600 font-bold">welchem</td>
                    <td className="p-4 text-amber-600 font-bold">welchen</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-theme-dark mb-4 border-b-2 border-slate-100 pb-2">3. Cấu trúc & Ví dụ</h4>
            <div className="bg-slate-800 text-white p-4 rounded-2xl mb-4 font-mono font-bold w-fit shadow-md flex items-center gap-3">
               Cấu trúc: <span className="text-indigo-300">welch- + danh từ</span>
            </div>
            <div className="space-y-3">
              {[
                { de: "Welchen Pass haben Sie verloren?", vi: "Ông đã mất hộ chiếu nào?" },
                { de: "Welche Tasche ist Ihre?", vi: "Túi nào là của bà?" },
                { de: "Welches Dokument brauchen Sie?", vi: "Ngài cần tài liệu nào?" }
              ].map((ex, i) => (
                <div key={i} className="flex items-center gap-4 bg-white border-2 border-slate-100 p-4 rounded-2xl hover:border-indigo-300 transition-colors group">
                  <button onClick={() => playAudio(ex.de, `t1-ex${i}`)} className="text-slate-300 hover:text-indigo-500 bg-slate-50 hover:bg-indigo-50 p-3 rounded-xl transition-colors">
                    <Volume2 size={24} />
                  </button>
                  <div>
                    <p className="font-bold text-theme-dark text-lg">{ex.de}</p>
                    <p className="text-slate-500 font-medium">{ex.vi}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-rose-50 to-white p-6 rounded-[2rem] border-2 border-rose-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-10"><AlertTriangle size={100} /></div>
            <h4 className="text-xl font-black text-rose-600 mb-4 flex items-center gap-2 relative z-10">
               Lỗi sai phổ biến
            </h4>
            <div className="space-y-3 mb-5 relative z-10">
              <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100">
                 <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold">❌</div>
                 <p className="text-rose-700 font-medium line-through text-lg">Welche Pass?</p>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 rounded-xl border-2 border-emerald-200">
                 <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">✅</div>
                 <p className="text-emerald-700 font-black text-lg">Welchen Pass? <span className="text-sm font-medium text-slate-500 block">Vì Pass (Maskulin) đóng vai trò Tân ngữ trực tiếp (Akkusativ)</span></p>
              </div>
            </div>
            <p className="font-bold text-theme-dark bg-white py-3 px-5 rounded-xl border border-slate-200 shadow-sm inline-flex gap-2 items-center relative z-10">
              👉 Mẹo luôn đúng: Xác định <span className="text-rose-500 bg-rose-50 px-2 rounded">giống</span> và <span className="text-indigo-500 bg-indigo-50 px-2 rounded">Kasus</span> của danh từ.
            </p>
          </div>
        </div>
      </section>

      {/* PHẦN 2: DEMONSTRATIVPRONOMEN */}
      <section className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-sm border-4 border-white overflow-hidden relative group">
        <div className="absolute top-0 left-0 w-full h-2 bg-rose-400 group-hover:h-3 transition-all"></div>
        <h3 className="text-2xl font-black text-rose-500 mb-6 flex items-center gap-3">
          <div className="bg-rose-50 p-3 rounded-2xl"><BookOpen className="w-8 h-8 text-rose-500" /></div>
          DEMONSTRATIVPRONOMEN <span className="text-lg opacity-70 font-medium">(dies-, der/die/das)</span>
        </h3>
        
        <div className="space-y-8 text-theme-dark/80">
          <div>
            <h4 className="text-xl font-bold text-theme-dark mb-4 border-b-2 border-slate-100 pb-2">1. „dies-“ (cái này)</h4>
            <p className="mb-4 text-rose-800 bg-rose-50/80 px-5 py-3 rounded-xl inline-flex items-center gap-2 font-medium border border-rose-100">
               <span className="text-2xl">👉</span> Dùng để chỉ rõ/nhấn mạnh không gian của một vật (ngay đây). <br />Luôn đi kèm VỚI danh từ phía sau.
            </p>
            <div className="grid md:grid-cols-3 gap-3 mt-2">
              {[
                "Dieser Pass ist neu.",
                "Diese Tasche gehört mir.",
                "Dieses Dokument ist wichtig."
              ].map((ex, i) => (
                <div key={i} className="flex flex-col gap-2 bg-slate-50 hover:bg-rose-50 border border-slate-100 hover:border-rose-200 p-4 rounded-2xl transition-colors text-center relative group/btn">
                  <button onClick={() => playAudio(ex, `t2-ex${i}`)} className="absolute top-2 right-2 text-slate-300 group-hover/btn:text-rose-400"><Volume2 size={18} /></button>
                  <p className="font-bold text-theme-dark mt-2">{ex}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-theme-dark mb-4 border-b-2 border-slate-100 pb-2">2. „der / die / das“ (thay thế cho danh từ)</h4>
            <p className="mb-4 text-emerald-800 bg-emerald-50/80 px-5 py-3 rounded-xl inline-flex items-center gap-2 font-medium border border-emerald-100">
               <span className="text-2xl">👉</span> KHÔNG cần danh từ phía sau. Dùng để tránh lặp từ đã đề cập.
            </p>
            <div className="grid md:grid-cols-3 gap-3 mt-2">
              {[
                "Der gehört mir.",
                "Die ist meine.",
                "Das ist falsch."
              ].map((ex, i) => (
                <div key={i} className="flex flex-col gap-2 bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 p-4 rounded-2xl transition-colors text-center relative group/btn">
                  <button onClick={() => playAudio(ex, `t3-ex${i}`)} className="absolute top-2 right-2 text-slate-300 group-hover/btn:text-emerald-500"><Volume2 size={18} /></button>
                  <p className="font-bold text-theme-dark mt-2">{ex}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-50 p-6 md:p-8 rounded-[2rem] border-2 border-slate-100">
            <h4 className="text-xl font-black text-theme-dark mb-6 text-center uppercase tracking-widest text-sm">Bảng So Sánh</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border-2 border-rose-100 shadow-sm relative pt-10">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-100 text-rose-700 px-4 py-1 rounded-full font-bold text-sm whitespace-nowrap">Có danh từ đi kèm</div>
                <p className="font-black text-rose-600 text-xl text-center">Dieser Pass ist neu</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-emerald-100 shadow-sm relative pt-10">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full font-bold text-sm whitespace-nowrap">Đại từ thay thế (Đứng 1 mình)</div>
                <p className="font-black text-emerald-600 text-xl text-center">Der ist neu</p>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-[2rem] border-2 border-amber-100 relative overflow-hidden">
             <div className="absolute right-0 bottom-0 p-4 opacity-10"><AlertTriangle size={80} /></div>
            <h4 className="text-xl font-black text-amber-700 mb-4 flex items-center gap-2 relative z-10">
               Lỗi sai phổ biến
            </h4>
            <div className="space-y-3 relative z-10">
               <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100">
                 <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold">❌</div>
                 <p className="text-rose-700 font-medium line-through">Diese gehört mir</p>
                 <span className="text-xs ml-auto text-slate-400 font-bold bg-slate-50 px-2 py-1 rounded">Thiếu danh từ!</span>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                 <div className="flex-1 flex items-center gap-3 bg-white p-4 rounded-xl border-2 border-emerald-100">
                   <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">✅</div>
                   <p className="text-emerald-700 font-bold">Die gehört mir</p>
                 </div>
                 <div className="flex-1 flex items-center gap-3 bg-white p-4 rounded-xl border-2 border-emerald-100">
                   <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">✅</div>
                   <p className="text-emerald-700 font-bold">Diese Tasche gehört mir</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHẦN 3: VERB „LASSEN“ */}
      <section className="bg-white/90 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-sm border-4 border-white overflow-hidden relative group">
        <div className="absolute top-0 left-0 w-full h-2 bg-amber-400 group-hover:h-3 transition-all"></div>
        <h3 className="text-2xl font-black text-amber-500 mb-6 flex items-center gap-3">
          <div className="bg-amber-50 p-3 rounded-2xl"><BookOpen className="w-8 h-8 text-amber-500" /></div>
          VERB „LASSEN“
        </h3>
        
        <div className="space-y-8 text-theme-dark/80">
          <div>
            <h4 className="text-xl font-bold text-theme-dark mb-4 border-b-2 border-slate-100 pb-2">1. Ba ý nghĩa chính của Lassen</h4>
            
            <div className="space-y-4">
              <div className="bg-white border-2 border-amber-100 p-5 md:p-6 rounded-3xl relative overflow-hidden group/item">
                <div className="absolute top-0 left-0 w-full h-1 bg-amber-200"></div>
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                   <div className="bg-amber-100 text-amber-700 font-black px-4 py-2 rounded-xl w-fit flex items-center gap-2">
                     <span className="text-xl">1</span> NHỜ VẢ / THUÊ LÀM
                   </div>
                   <p className="font-mono text-sm bg-slate-50 text-slate-600 p-2 rounded-lg border border-slate-100 font-bold hidden md:block">lassen + Akkusativ + Infinitiv</p>
                </div>
                <p className="font-mono text-sm bg-slate-50 text-slate-600 p-2 rounded-lg border border-slate-100 font-bold md:hidden mb-4 w-fit">lassen + Akkusativ + Infinitiv</p>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 bg-amber-50/50 p-3 rounded-xl">
                     <button onClick={() => playAudio('Ich lasse meinen Pass kopieren', 'l1')} className="mt-0.5 text-amber-500 hover:text-amber-600 bg-white shadow-sm p-1.5 rounded-lg"><Volume2 size={16}/></button>
                     <div>
                       <p className="font-bold text-theme-dark">Ich lasse meinen Pass kopieren</p>
                       <p className="text-sm font-medium text-slate-500">Tôi nhờ người ta copy hộ chiếu</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-3 bg-amber-50/50 p-3 rounded-xl">
                     <button onClick={() => playAudio('Ich lasse das Auto reparieren', 'l2')} className="mt-0.5 text-amber-500 hover:text-amber-600 bg-white shadow-sm p-1.5 rounded-lg"><Volume2 size={16}/></button>
                     <div>
                       <p className="font-bold text-theme-dark">Ich lasse das Auto reparieren</p>
                       <p className="text-sm font-medium text-slate-500">Tôi mang xe đi sửa (nhờ thợ sửa)</p>
                     </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                 <div className="bg-white border-2 border-emerald-100 p-5 rounded-3xl relative overflow-hidden h-full">
                   <div className="absolute top-0 left-0 w-full h-1 bg-emerald-200"></div>
                   <div className="bg-emerald-100 text-emerald-700 font-black px-3 py-1.5 rounded-xl w-fit flex items-center gap-2 mb-4 text-sm">
                     <span className="text-lg">2</span> CHO PHÉP
                   </div>
                   <div className="space-y-3">
                     <div className="flex items-center gap-3">
                        <button onClick={() => playAudio('Lassen Sie mich bitte rein', 'l3')} className="text-emerald-500 bg-emerald-50 p-1.5 rounded-lg"><Volume2 size={16}/></button>
                        <p className="font-bold text-theme-dark text-sm">Lassen Sie mich bitte rein</p>
                     </div>
                     <div className="flex items-center gap-3">
                        <button onClick={() => playAudio('Er lässt mich gehen', 'l4')} className="text-emerald-500 bg-emerald-50 p-1.5 rounded-lg"><Volume2 size={16}/></button>
                        <p className="font-bold text-theme-dark text-sm">Er lässt mich gehen</p>
                     </div>
                   </div>
                 </div>
                 
                 <div className="bg-white border-2 border-slate-200 p-5 rounded-3xl relative overflow-hidden h-full">
                   <div className="absolute top-0 left-0 w-full h-1 bg-slate-300"></div>
                   <div className="bg-slate-200 text-slate-700 font-black px-3 py-1.5 rounded-xl w-fit flex items-center gap-2 mb-4 text-sm">
                     <span className="text-lg">3</span> ĐỂ MẶC / KỆ
                   </div>
                   <div className="space-y-3">
                     <div className="flex items-center gap-3">
                        <button onClick={() => playAudio('Ich lasse das so', 'l5')} className="text-slate-500 bg-slate-100 p-1.5 rounded-lg"><Volume2 size={16}/></button>
                        <p className="font-bold text-theme-dark text-sm">Ich lasse das so</p>
                     </div>
                     <div className="flex items-center gap-3">
                        <button onClick={() => playAudio('Lass mich in Ruhe', 'l6')} className="text-slate-500 bg-slate-100 p-1.5 rounded-lg"><Volume2 size={16}/></button>
                        <p className="font-bold text-theme-dark text-sm">Lass mich in Ruhe</p>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-theme-dark mb-4 border-b-2 border-slate-100 pb-2">2. Chia động từ (Präsens)</h4>
              <div className="bg-white border-2 border-amber-100 rounded-3xl p-6 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
                <ul className="space-y-3 font-mono text-[15px]">
                  <li className="flex justify-between border-b border-slate-100 pb-2"><span>ich</span> <strong>lasse</strong></li>
                  <li className="flex justify-between border-b border-rose-100 pb-2 bg-rose-50/50 px-2 rounded -mx-2">
                     <span className="font-bold text-rose-500">du</span> <strong className="text-rose-600 text-lg">lässt</strong>
                  </li>
                  <li className="flex justify-between border-b border-rose-100 pb-2 bg-rose-50/50 px-2 rounded -mx-2">
                     <span className="font-bold text-rose-500">er/sie/es</span> <strong className="text-rose-600 text-lg">lässt</strong>
                  </li>
                  <li className="flex justify-between border-b border-slate-100 pb-2 pt-1"><span>wir</span> <strong>lassen</strong></li>
                  <li className="flex justify-between border-b border-amber-100 pb-2 pt-1 bg-amber-50/50 px-2 rounded -mx-2">
                     <span className="font-bold text-amber-600">ihr</span> <strong className="text-amber-700 text-lg">lasst</strong>
                  </li>
                  <li className="flex justify-between pt-1"><span>Sie/sie</span> <strong>lassen</strong></li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
               <div>
                  <h4 className="text-xl font-bold text-theme-dark mb-4 border-b-2 border-slate-100 pb-2">3. Vị trí trong câu</h4>
                  <div className="bg-indigo-50/80 p-5 rounded-3xl border border-indigo-100">
                    <p className="font-black text-indigo-700 mb-4 bg-white py-2 px-4 rounded-xl shadow-sm inline-block">👉 Động từ thứ 2 phải ở cuối câu</p>
                    <div className="space-y-3">
                       <div className="flex gap-3 bg-white p-3 rounded-xl border border-emerald-100 shadow-sm relative pr-12 overflow-hidden">
                         <div className="absolute top-0 right-0 h-full w-10 bg-emerald-100 flex items-center justify-center font-bold text-emerald-600">✅</div>
                         <p className="text-theme-dark font-medium leading-relaxed">Ich <span className="font-black text-indigo-600 underline">lasse</span> den Pass <span className="font-black text-indigo-600 underline">kopieren</span></p>
                       </div>
                       <div className="flex gap-3 bg-slate-50 p-3 rounded-xl border border-rose-100 opacity-60">
                         <p className="text-rose-700 font-medium line-through">Ich lasse kopieren den Pass</p>
                       </div>
                    </div>
                  </div>
               </div>
               
               <div>
                  <h4 className="text-xl font-bold text-rose-600 mb-4 border-b-2 border-rose-100 pb-2 flex items-center gap-2">4. Lỗi sai dịch từ Anh/Việt sang</h4>
                  <div className="bg-rose-50 p-5 rounded-3xl border border-rose-100">
                    <div className="flex items-center gap-3 bg-white p-3 rounded-xl mb-3">
                      <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs shrink-0">❌</div>
                      <p className="text-rose-700 font-medium line-through">Ich <strong>mache</strong> meinen Pass kopieren</p>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-3 rounded-xl border-2 border-emerald-200 mb-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">✅</div>
                      <p className="text-emerald-700 font-bold">Ich <strong>lasse</strong> meinen Pass kopieren</p>
                    </div>
                    <p className="text-sm font-bold text-rose-800 flex items-start gap-2">
                       <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                       "Lassen" thay thế hoàn toàn cho "machen" trong tình huống này, vì bạn KHÔNG TỰ LÀM, bạn giao việc đó/nhờ người khác làm.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
