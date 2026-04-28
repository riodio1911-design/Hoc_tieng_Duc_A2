import React from 'react';
import { BookOpen, Clock, Users } from 'lucide-react';

export default function Lektion7GrammarTheory() {
  return (
    <div className="space-y-8 animate-fade-in pb-12">
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-indigo-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mx-20 -my-20 opacity-50 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 shadow-inner">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-theme-dark font-display">Lý thuyết Ngữ pháp: Wir könnten montags joggen gehen</h2>
              <p className="text-theme-dark/60 font-bold">Lektion 7 • Konjunktiv II & Giới từ thời gian</p>
            </div>
          </div>

          <div className="prose prose-indigo max-w-none">
             <div className="grid grid-cols-1 gap-8 mt-8">
               {/* 1. Temporale Adverbien */}
               <div className="bg-amber-50 rounded-3xl p-6 border border-amber-100/50">
                 <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-amber-500" />
                    <h3 className="text-xl font-black text-theme-dark m-0">1. Trạng từ chỉ thời gian (Temporale Adverbien)</h3>
                 </div>
                 <p className="text-theme-dark/80 font-medium mb-4">
                   Để diễn tả một thói quen hoặc sự việc lặp đi lặp lại vào một thời điểm cố định, chúng ta có thể chuyển các <strong>danh từ chỉ ngày/buổi</strong> thành <strong>trạng từ</strong> bằng cách viết thường chữ cái đầu tiên và thêm đuôi <strong>-s</strong>.
                 </p>
                 <div className="grid md:grid-cols-2 gap-4">
                   <div className="bg-white p-4 rounded-2xl shadow-sm">
                      <h4 className="font-bold text-amber-600 mb-2">Với các ngày trong tuần:</h4>
                      <ul className="space-y-2 text-theme-dark">
                         <li><span className="font-mono">der Montag</span> {'->'} <span className="font-bold font-mono">montags</span> (mỗi thứ Hai)</li>
                         <li><span className="font-mono">der Dienstag</span> {'->'} <span className="font-bold font-mono">dienstags</span> (mỗi thứ Ba)</li>
                         <li><span className="font-mono">der Mittwoch</span> {'->'} <span className="font-bold font-mono">mittwochs</span></li>
                      </ul>
                   </div>
                   <div className="bg-white p-4 rounded-2xl shadow-sm">
                      <h4 className="font-bold text-amber-600 mb-2">Với các buổi trong ngày:</h4>
                      <ul className="space-y-2 text-theme-dark">
                         <li><span className="font-mono">der Abend</span> {'->'} <span className="font-bold font-mono">abends</span> (mỗi tối)</li>
                         <li><span className="font-mono">der Morgen</span> {'->'} <span className="font-bold font-mono">morgens</span> (mỗi sáng)</li>
                         <li><span className="font-mono">die Nacht</span> {'->'} <span className="font-bold font-mono">nachts</span> (mỗi đêm)</li>
                      </ul>
                   </div>
                 </div>
                 <div className="mt-4 p-4 bg-amber-100 rounded-xl font-bold text-amber-800">
                   Ví dụ: "Ich gehe <span className="underline">montags</span> joggen." (Tôi chạy bộ vào các ngày thứ Hai = jeden Montag)
                 </div>
               </div>

               {/* 2. Temporale Präpositionen */}
               <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-100/50">
                 <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-emerald-500" />
                    <h3 className="text-xl font-black text-theme-dark m-0">2. Giới từ chỉ thời gian (Temporale Präpositionen)</h3>
                 </div>
                 <p className="text-theme-dark/80 font-medium mb-4">
                   Một số giới từ để diễn đạt khoảng thời gian hoặc mốc thời gian:
                 </p>
                 <div className="space-y-4">
                   <div className="bg-white p-4 rounded-2xl shadow-sm">
                      <div className="flex gap-4 items-start">
                         <div className="font-bold text-emerald-600 w-32 shrink-0">zwischen<br/>(+ Dativ)</div>
                         <div className="text-theme-dark">
                           <p className="font-bold mb-1">ở giữa ... và ...</p>
                           <p className="font-mono text-sm bg-emerald-50 p-2 rounded inline-block">Zwischen 7:00 und 7:15 Uhr frühstücke ich.</p>
                         </div>
                      </div>
                   </div>
                   <div className="bg-white p-4 rounded-2xl shadow-sm">
                      <div className="flex gap-4 items-start">
                         <div className="font-bold text-emerald-600 w-32 shrink-0">seit<br/>(+ Dativ)</div>
                         <div className="text-theme-dark">
                           <p className="font-bold mb-1">từ, kể từ (quá khứ và vẫn đang tiếp diễn)</p>
                           <p className="font-mono text-sm bg-emerald-50 p-2 rounded inline-block">Seit vier Monaten habe ich kein Auto mehr.</p>
                         </div>
                      </div>
                   </div>
                   <div className="bg-white p-4 rounded-2xl shadow-sm">
                      <div className="flex gap-4 items-start">
                         <div className="font-bold text-emerald-600 w-32 shrink-0">von... an<br/>(+ Dativ)</div>
                         <div className="text-theme-dark">
                           <p className="font-bold mb-1">từ ... (bắt đầu ở hiện tại/tương lai)</p>
                           <p className="font-mono text-sm bg-emerald-50 p-2 rounded inline-block">Von morgen an lerne ich jeden Tag.</p>
                         </div>
                      </div>
                   </div>
                   <div className="bg-white p-4 rounded-2xl shadow-sm">
                      <div className="flex gap-4 items-start">
                         <div className="font-bold text-emerald-600 w-32 shrink-0">über<br/>(+ Akkusativ)</div>
                         <div className="text-theme-dark">
                           <p className="font-bold mb-1">hơn, lâu hơn (khoảng thời gian / mức độ)</p>
                           <p className="font-mono text-sm bg-emerald-50 p-2 rounded inline-block">Ich wiege schon über 75 Kilo.</p>
                         </div>
                      </div>
                   </div>
                 </div>
               </div>

               {/* 3. Konjunktiv II */}
               <div className="bg-indigo-50 rounded-3xl p-6 border border-indigo-100/50">
                 <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-indigo-500" />
                    <h3 className="text-xl font-black text-theme-dark m-0">3. Đưa ra lời khuyên (Konjunktiv II: könnte / sollte)</h3>
                 </div>
                 <p className="text-theme-dark/80 font-medium mb-4">
                   Để đưa ra <strong>đề nghị lịch sự</strong> hoặc <strong>lời khuyên nhẹ nhàng</strong>, chúng ta dùng dạng <strong>Konjunktiv II</strong> của động từ khuyết thiếu <em>können</em> và <em>sollen</em>.
                 </p>
                 
                 <div className="grid md:grid-cols-2 gap-4 mb-6">
                   <div className="bg-white p-4 rounded-2xl shadow-sm overflow-x-auto">
                      <table className="w-full text-left text-theme-dark">
                         <thead>
                            <tr>
                               <th className="pb-2 border-b border-indigo-100">Pronomen</th>
                               <th className="pb-2 border-b border-indigo-100">können <br/><span className="text-sm font-normal text-theme-dark/60">{'->'} könnte</span></th>
                               <th className="pb-2 border-b border-indigo-100">sollen <br/><span className="text-sm font-normal text-theme-dark/60">{'->'} sollte</span></th>
                            </tr>
                         </thead>
                         <tbody className="font-mono text-sm">
                            <tr><td className="py-2">ich</td><td>könnte</td><td>sollte</td></tr>
                            <tr><td className="py-2">du</td><td>könntest</td><td>solltest</td></tr>
                            <tr><td className="py-2">er/sie/es</td><td>könnte</td><td>sollte</td></tr>
                            <tr><td className="py-2">wir</td><td>könnten</td><td>sollten</td></tr>
                            <tr><td className="py-2">ihr</td><td>könntet</td><td>solltet</td></tr>
                            <tr><td className="py-2">sie/Sie</td><td>könnten</td><td>sollten</td></tr>
                         </tbody>
                      </table>
                   </div>
                   <div className="flex flex-col gap-4">
                      <div className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-indigo-500">
                         <h4 className="font-bold text-indigo-600 mb-1">Mẫu câu đưa ra lời khuyên:</h4>
                         <ul className="space-y-2 text-sm text-theme-dark">
                            <li>- Du <strong className="text-indigo-600">solltest</strong> jeden Tag laufen.</li>
                            <li>- Du <strong className="text-indigo-600">könntest</strong> schwimmen.</li>
                            <li>- <strong className="text-indigo-600">An deiner Stelle würde ich</strong> ...</li>
                            <li>- <strong className="text-indigo-600">Wie wäre es mit</strong> Yoga?</li>
                         </ul>
                      </div>
                      <div className="bg-indigo-100 p-4 rounded-2xl text-indigo-900 text-sm">
                         <em>Lưu ý:</em> "könnte/sollte" đứng ở vị trí động từ số 2, động từ chính viết ở nguyên thể và đẩy xuống cuối câu.
                      </div>
                   </div>
                 </div>

               </div>
               
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
