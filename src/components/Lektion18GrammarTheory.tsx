import React from 'react';

export default function Lektion18GrammarTheory() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-indigo-500 mb-2">Ngữ pháp (Grammatik)</h2>
        <p className="text-theme-dark/60 font-medium">Lektion 18: Động từ đi kèm giới từ & Chỉ đường nâng cao</p>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-indigo-500/10">
         <h3 className="text-2xl font-black text-indigo-600 mb-6">1. Động từ đi kèm giới từ cố định (Verben mit festen Präpositionen)</h3>
         <p className="text-theme-dark/80 font-medium mb-6">
           Trong tiếng Đức, nhiều động từ luôn đi kèm với một giới từ và một biến cách (Dativ/Akkusativ) cụ thể. Đây là phần phải học thuộc lòng:
         </p>
         
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr>
                     <th className="p-4 bg-indigo-50 font-bold text-indigo-800 rounded-tl-2xl">Động từ + Giới từ</th>
                     <th className="p-4 bg-indigo-100 font-bold text-indigo-900 border-l border-white/50">Cách chia</th>
                     <th className="p-4 bg-indigo-50 font-bold text-indigo-800 border-l border-white/50 rounded-tr-2xl">Ý nghĩa</th>
                  </tr>
               </thead>
               <tbody className="font-medium text-theme-dark bg-white">
                  <tr className="border-b border-slate-100 border-x">
                     <td className="p-4 font-bold text-indigo-700">sich freuen <span className="text-emerald-600">auf</span></td>
                     <td className="p-4"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-sm">Akkusativ</span></td>
                     <td className="p-4">Mong đợi (hướng tới tương lai).<br/><span className="text-sm font-normal text-slate-500">Ich freue mich auf den Urlaub.</span></td>
                  </tr>
                  <tr className="border-b border-slate-100 border-x">
                     <td className="p-4 font-bold text-indigo-700">sich freuen <span className="text-amber-600">über</span></td>
                     <td className="p-4"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-sm">Akkusativ</span></td>
                     <td className="p-4">Vui mừng vì (về sự việc đã xảy ra).<br/><span className="text-sm font-normal text-slate-500">Er freut sich über das Geschenk.</span></td>
                  </tr>
                  <tr className="border-b border-slate-100 border-x bg-slate-50">
                     <td className="p-4 font-bold text-indigo-700">sprechen <span className="text-rose-500">mit</span></td>
                     <td className="p-4"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-lg text-sm">Dativ</span></td>
                     <td className="p-4">Nói chuyện với ai.<br/><span className="text-sm font-normal text-slate-500">Ich spreche mit ihm.</span></td>
                  </tr>
                  <tr className="border-b border-slate-100 border-x bg-slate-50">
                     <td className="p-4 font-bold text-indigo-700">sprechen <span className="text-amber-600">über</span></td>
                     <td className="p-4"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-sm">Akkusativ</span></td>
                     <td className="p-4">Nói về chủ đề gì.<br/><span className="text-sm font-normal text-slate-500">Wir sprechen über das Wetter.</span></td>
                  </tr>
                  <tr className="border-b border-slate-100 border-x">
                     <td className="p-4 font-bold text-indigo-700">träumen <span className="text-amber-600">von</span></td>
                     <td className="p-4"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-lg text-sm">Dativ</span></td>
                     <td className="p-4">Mơ về cái gì.<br/><span className="text-sm font-normal text-slate-500">Ich träume von einem Urlaub.</span></td>
                  </tr>
                  <tr className="border-b border-slate-100 border-x">
                     <td className="p-4 font-bold text-indigo-700">sich ärgern <span className="text-amber-600">über</span></td>
                     <td className="p-4"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-sm">Akkusativ</span></td>
                     <td className="p-4">Bực mình về cái gì.<br/><span className="text-sm font-normal text-slate-500">Ich ärgere mich über den Regen.</span></td>
                  </tr>
                  <tr className="border-b border-slate-100 border-x bg-slate-50">
                     <td className="p-4 font-bold text-indigo-700">zufrieden sein <span className="text-rose-500">mit</span></td>
                     <td className="p-4"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-lg text-sm">Dativ</span></td>
                     <td className="p-4">Hài lòng với cái gì.<br/><span className="text-sm font-normal text-slate-500">Bist du zufrieden mit dem Wetter?</span></td>
                  </tr>
                  <tr className="border-b border-slate-100 border-x bg-slate-50">
                     <td className="p-4 font-bold text-indigo-700">Lust haben <span className="text-emerald-600">auf</span></td>
                     <td className="p-4"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-sm">Akkusativ</span></td>
                     <td className="p-4">Có hứng thú / muốn làm gì.<br/><span className="text-sm font-normal text-slate-500">Hast du Lust auf ein Eis?</span></td>
                  </tr>
                  <tr className="border-b border-slate-100 border-x">
                     <td className="p-4 font-bold text-indigo-700">sich interessieren <span className="text-emerald-600">für</span></td>
                     <td className="p-4"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-sm">Akkusativ</span></td>
                     <td className="p-4">Quan tâm đến cái gì.<br/><span className="text-sm font-normal text-slate-500">Ich interessiere mich für Politik.</span></td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-indigo-500/10">
         <h3 className="text-2xl font-black text-indigo-600 mb-6">2. Giới từ chỉ phương hướng chuyển động (Chỉ đường)</h3>
         <p className="text-theme-dark/80 font-medium mb-6">Mô tả chi tiết lộ trình đi qua các địa điểm:</p>

         <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-6 rounded-2xl border-2 border-indigo-100">
               <h4 className="text-lg font-bold text-indigo-700 mb-2">durch + Akkusativ</h4>
               <p className="text-indigo-900 font-medium mb-2">Đi xuyên qua không gian kín hoặc có giới hạn.</p>
               <ul className="list-disc ml-5 text-indigo-800/80">
                  <li><span className="font-bold">durch den Wald</span> (xuyên qua rừng)</li>
                  <li><span className="font-bold">durch den Tunnel</span> (xuyên qua hầm)</li>
               </ul>
            </div>
            
            <div className="bg-emerald-50 p-6 rounded-2xl border-2 border-emerald-100">
               <h4 className="text-lg font-bold text-emerald-700 mb-2">über + Akkusativ</h4>
               <p className="text-emerald-900 font-medium mb-2">Băng qua một bề mặt hoặc phía trên cái gì đó.</p>
               <ul className="list-disc ml-5 text-emerald-800/80">
                  <li><span className="font-bold">über die Autobahn</span> (băng qua cao tốc)</li>
                  <li><span className="font-bold">über die Brücke</span> (băng qua cầu)</li>
               </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-100">
               <h4 className="text-lg font-bold text-blue-700 mb-2">bis (zu) + Dativ</h4>
               <p className="text-blue-900 font-medium mb-2">Đến tận một điểm nào đó rồi dừng lại.</p>
               <ul className="list-disc ml-5 text-blue-800/80">
                  <li><span className="font-bold">bis zur Bäckerei</span> (đến tận tiệm bánh)</li>
                  <li><span className="font-bold">bis zum Parkplatz</span> (đến tận bãi đỗ xe)</li>
               </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-2xl border-2 border-amber-100">
               <h4 className="text-lg font-bold text-amber-700 mb-2">an ... vorbei + Dativ</h4>
               <p className="text-amber-900 font-medium mb-2">Đi ngang qua một địa điểm mà không dừng lại.</p>
               <ul className="list-disc ml-5 text-amber-800/80">
                  <li><span className="font-bold">an der Bäckerei vorbei</span> (ngang qua tiệm bánh)</li>
                  <li><span className="font-bold">am Haus vorbei</span> (ngang qua ngôi nhà)</li>
               </ul>
            </div>
         </div>
      </div>
      
    </div>
  );
}
