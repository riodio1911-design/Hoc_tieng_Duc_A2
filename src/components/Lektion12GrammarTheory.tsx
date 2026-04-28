import React from 'react';
import { BookOpen, Info, CheckCircle2 } from 'lucide-react';

export default function Lektion12GrammarTheory() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      
      {/* Intro section */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-display font-black text-theme-dark">
          Grammatik: "Wenn" và Thể hiện sự ngạc nhiên
        </h2>
        <p className="text-lg font-medium text-theme-dark/70">
          Trong Lektion 12 chúng ta học về câu điều kiện với <span className="font-black text-orange-600">wenn</span> và phân biệt vị trí động từ với các liên từ khác.
        </p>
      </div>

      <div className="space-y-8">
        {/* Section 1: Wenn */}
        <section className="bg-white p-8 rounded-[32px] border-2 border-orange-500/20 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full -z-10" />
          
          <h3 className="text-2xl font-black text-theme-dark mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
              <BookOpen size={20} />
            </div>
            1. Mệnh đề điều kiện / thời gian với "wenn"
          </h3>
          
          <div className="space-y-6">
            <p className="font-medium text-theme-dark/80 text-lg">
              <b>Wenn</b> (nếu, khi) giới thiệu một mệnh đề phụ (Nebensatz). <b>Động từ chia trong mệnh đề này phải đứng ở cuối.</b>
            </p>

            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 space-y-3">
                  <h4 className="font-black text-orange-700">Hauptsatz + Nebensatz</h4>
                  <p className="text-sm font-bold text-theme-dark/60">Mệnh đề chính đứng trước</p>
                  <p className="font-bold text-theme-dark mt-2 text-lg">
                     Wir <span className="text-orange-600">essen</span> meist Salat, <span className="text-orange-600">wenn</span> es warm <span className="text-orange-600">ist</span>.
                  </p>
                  <p className="text-sm text-theme-dark/60">(Chúng tôi thường ăn salad, khi trời ấm.)</p>
               </div>
               
               <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100 space-y-3">
                  <h4 className="font-black text-teal-700">Nebensatz + Hauptsatz</h4>
                  <p className="text-sm font-bold text-theme-dark/60">Mệnh đề phụ "wenn" đứng trước</p>
                  <p className="font-bold text-theme-dark mt-2 text-lg">
                     <span className="text-teal-600">Wenn</span> es warm <span className="text-teal-600">ist</span>, <span className="text-teal-600">essen</span> wir meist Salat.
                  </p>
                  <p className="text-sm text-theme-dark/60">(Khi trời ấm, chúng tôi thường ăn salad.)</p>
                  <div className="mt-2 text-xs font-bold bg-white p-2 text-teal-800 rounded">
                     *Động từ của mệnh đề chính ("essen") đứng ngay sau dấu phẩy.
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Section 2: Conjunctions */}
        <section className="bg-white p-8 rounded-[32px] border-2 border-indigo-500/20 shadow-sm relative overflow-hidden">
          <h3 className="text-2xl font-black text-theme-dark mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <CheckCircle2 size={20} />
            </div>
            2. Tổng hợp vị trí động từ với các liên từ
          </h3>
          
          <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse min-w-[500px]">
               <thead>
                 <tr className="border-b-2 border-indigo-100 text-indigo-900">
                   <th className="p-3 font-black">Liên từ</th>
                   <th className="p-3 font-black">Vị trí động từ</th>
                   <th className="p-3 font-black">Ví dụ</th>
                 </tr>
               </thead>
               <tbody>
                 <tr className="border-b border-indigo-50">
                    <td className="p-3 font-bold text-blue-600">und, aber, denn</td>
                    <td className="p-3 text-theme-dark/80 font-medium">Position 2 (Vị trí 0 cho liên từ)</td>
                    <td className="p-3 text-theme-dark/80 italic">... denn das Essen <b>schmeckt</b> gut.</td>
                 </tr>
                 <tr className="border-b border-indigo-50">
                    <td className="p-3 font-bold text-rose-600">dass, weil, wenn</td>
                    <td className="p-3 text-theme-dark/80 font-medium">Am Ende (Cuối câu)</td>
                    <td className="p-3 text-theme-dark/80 italic">... wenn ich Zeit <b>habe</b>.</td>
                 </tr>
               </tbody>
             </table>
          </div>
        </section>

        {/* Section 3: Überraschung */}
        <section className="bg-white p-8 rounded-[32px] border-2 border-rose-500/20 shadow-sm relative overflow-hidden">
          <h3 className="text-2xl font-black text-theme-dark mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
              <Info size={20} />
            </div>
            3. Thể hiện sự ngạc nhiên với "dass"
          </h3>
          <p className="font-medium text-theme-dark/80 text-lg mb-4">
             Khi bạn muốn bày tỏ sự ngạc nhiên về một sự thật hoặc thói quen, bạn có thể dùng các mẫu câu có chứa <b>dass</b>. 
             Vì dass dẫn dắt một mệnh đề phụ nên động từ luôn ở cuối câu.
          </p>

          <ul className="space-y-4 font-bold text-theme-dark bg-rose-50/50 p-6 rounded-2xl">
             <li className="flex gap-4">
                <span className="text-rose-500 shrink-0">■</span>
                <span>"Es wundert mich, <span className="text-rose-600">dass</span> so viele Leute kein Fleisch <span className="text-rose-600">essen</span>."</span>
             </li>
             <li className="flex gap-4">
                <span className="text-rose-500 shrink-0">■</span>
                <span>"Ich finde es komisch, <span className="text-rose-600">dass</span> es hier kein Brot <span className="text-rose-600">gibt</span>."</span>
             </li>
             <li className="flex gap-4">
                <span className="text-rose-500 shrink-0">■</span>
                <span>"Ich habe gedacht, <span className="text-rose-600">dass</span> sie das mögen."</span>
             </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
