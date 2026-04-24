import React from 'react';
import { Play } from 'lucide-react';

interface SlideProps {
  playAudio: (text: string, id: string, lang?: 'de-DE' | 'vi-VN') => void;
  playingId: string | null;
}

export default function Lektion15GrammarTheory({ playAudio, playingId }: SlideProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-4xl md:text-5xl font-display font-black text-theme-dark uppercase tracking-wide">
          Passiv Präsens
        </h2>
        <p className="text-lg font-bold text-theme-dark/60 max-w-2xl mx-auto">
          Câu bị động (Passiv) được dùng khi muốn nhấn mạnh vào HÀNH ĐỘNG hoặc ĐỐI TƯỢNG chịu tác động, thay vì người thực hiện hành động.
        </p>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-theme-secondary/10">
        <h3 className="text-2xl font-black text-theme-secondary mb-6">1. Cấu trúc Passiv Präsens</h3>
        <div className="space-y-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
             <div className="flex flex-col justify-center items-center">
               <p className="text-xl font-bold bg-white px-6 py-4 rounded-2xl shadow-sm text-center">
                 Chủ ngữ + <span className="text-theme-secondary">werden</span> + ... + <span className="text-rose-500">Partizip II</span>
               </p>
             </div>
          </div>

          <div className="flex gap-4 p-4 bg-theme-cream/30 rounded-xl overflow-x-auto">
            <div className="min-w-max">
               <p className="font-bold text-theme-dark mb-2">Chia động từ "werden":</p>
               <ul className="space-y-1 text-theme-dark/80 font-medium">
                  <li>ich <span className="text-theme-secondary font-bold">werde</span></li>
                  <li>du <span className="text-theme-secondary font-bold">wirst</span></li>
                  <li>er/sie/es <span className="text-theme-secondary font-bold">wird</span></li>
               </ul>
            </div>
            <div className="min-w-max">
               <p className="font-bold border-b border-transparent mb-2">&nbsp;</p>
               <ul className="space-y-1 text-theme-dark/80 font-medium">
                  <li>wir <span className="text-theme-secondary font-bold">werden</span></li>
                  <li>ihr <span className="text-theme-secondary font-bold">werdet</span></li>
                  <li>sie/Sie <span className="text-theme-secondary font-bold">werden</span></li>
               </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 border border-slate-200 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 bg-theme-dark/10 rounded-bl-xl text-xs font-bold text-theme-dark/60">Aktiv (Chủ động)</div>
              <p className="mt-4 text-theme-dark">Man <span className="font-bold">produziert</span> die Sendung.</p>
              <p className="text-sm font-medium text-theme-dark/50">(Người ta sản xuất chương trình)</p>
            </div>
            <div className="p-5 border-2 border-theme-secondary/20 bg-theme-secondary/5 rounded-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-2 bg-theme-secondary text-white rounded-bl-xl text-xs font-bold">Passiv (Bị động)</div>
               <p className="mt-4 text-theme-dark">Die Sendung <span className="font-bold text-theme-secondary">wird</span> <span className="font-bold text-rose-500">produziert</span>.</p>
               <p className="text-sm font-medium text-theme-dark/50">(Chương trình được sản xuất)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-theme-primary/10">
         <h3 className="text-2xl font-black text-theme-primary mb-6">2. Passiv kết hợp giới từ chỉ trình tự</h3>
         <p className="text-theme-dark/80 font-medium mb-6">
           Khi mô tả một quy trình (như sản xuất phim hay đặt hàng online), người Đức thường dùng các trạng từ chỉ trình tự kết hợp với Passiv. Trạng từ sẽ đứng đầu câu, đẩy động từ "werden" xuống vị trí thứ 2.
         </p>

         <div className="space-y-4">
           <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-theme-primary/20 text-theme-primary flex items-center justify-center font-bold">1</span>
              <div>
                <p className="font-bold text-theme-dark"><span className="text-theme-primary">Zuerst</span> wird das Paket gepackt.</p>
                <p className="text-sm font-medium text-theme-dark/60">Đầu tiên, bưu kiện được đóng gói.</p>
              </div>
           </div>
           
           <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-theme-primary/20 text-theme-primary flex items-center justify-center font-bold">2</span>
              <div>
                <p className="font-bold text-theme-dark"><span className="text-theme-primary">Dann</span> wird es verschickt.</p>
                <p className="text-sm font-medium text-theme-dark/60">Sau đó, nó được gửi đi.</p>
              </div>
           </div>

           <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-theme-primary/20 text-theme-primary flex items-center justify-center font-bold">3</span>
              <div>
                <p className="font-bold text-theme-dark"><span className="text-theme-primary">Danach</span> wird die Bestellung geliefert.</p>
                <p className="text-sm font-medium text-theme-dark/60">Tiếp theo, đơn hàng được giao.</p>
              </div>
           </div>

           <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-theme-primary/20 text-theme-primary flex items-center justify-center font-bold">4</span>
              <div>
                <p className="font-bold text-theme-dark"><span className="text-theme-primary">Am Ende</span> wird es bezahlt.</p>
                <p className="text-sm font-medium text-theme-dark/60">Cuối cùng, nó được thanh toán.</p>
              </div>
           </div>
         </div>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-emerald-500/10">
         <h3 className="text-2xl font-black text-emerald-600 mb-6">3. Câu bị động với "man"</h3>
         <p className="text-theme-dark/80 font-medium mb-6">
           Trong tiếng Đức, khi không muốn chỉ đích danh ai thực hiện hành động, người ta dùng đại từ bất định "man" (người ta). Khi chuyển sang câu bị động, trạng từ tân ngữ sẽ trở thành chủ ngữ mới.
         </p>
         <div className="space-y-4">
            <div className="p-5 border-2 border-slate-200 bg-slate-50 rounded-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-2 bg-slate-200 text-slate-600 rounded-bl-xl text-xs font-bold">Aktiv (Chủ động)</div>
               <p className="mt-4 text-theme-dark font-bold"><span className="text-emerald-500">Man</span> spricht hier nur Deutsch.</p>
               <p className="text-sm font-medium text-theme-dark/50">(Người ta chỉ nói tiếng Đức ở đây.)</p>
            </div>
            <div className="text-center text-emerald-500">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
            </div>
            <div className="p-5 border-2 border-emerald-500/20 bg-emerald-500/5 rounded-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-2 bg-emerald-500 text-white rounded-bl-xl text-xs font-bold">Passiv (Bị động)</div>
               <p className="mt-4 text-theme-dark font-bold">Hier <span className="text-emerald-500">wird</span> nur Deutsch <span className="text-emerald-500">gesprochen</span>.</p>
               <p className="text-sm font-medium text-theme-dark/50">(Chỉ có tiếng Đức được nói ở đây.)</p>
            </div>
         </div>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-xl shadow-theme-dark/5 border-2 border-rose-500/10">
         <h3 className="text-2xl font-black text-rose-500 mb-6">4. Trạng từ chỉ tần suất (Adverbien)</h3>
         <p className="text-theme-dark/80 font-medium mb-6">
           Sử dụng để mô tả mức độ thường xuyên của một hành động.
         </p>
         <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
               <span className="px-4 py-2 bg-slate-100 rounded-full font-bold text-slate-500">nie (0%)</span>
               <span className="px-4 py-2 bg-slate-100 rounded-full font-bold text-slate-600">fast nie</span>
               <span className="px-4 py-2 bg-slate-100 rounded-full font-bold text-theme-dark/60">selten (hiếm khi)</span>
               <span className="px-4 py-2 bg-slate-200 rounded-full font-bold text-theme-dark/80">manchmal (thỉnh thoảng)</span>
               <span className="px-4 py-2 bg-rose-100 rounded-full font-bold text-rose-500">oft (thường xuyên)</span>
               <span className="px-4 py-2 bg-rose-500 rounded-full font-bold text-white">immer (100%)</span>
            </div>
            <div className="p-4 bg-rose-500/5 border border-rose-500/20 rounded-xl mt-4">
               <p className="font-bold text-theme-dark">Wie oft werden Sendungen über Natur gezeigt?</p>
               <p className="text-theme-dark/70 mt-2">Sie werden <span className="text-rose-500 font-bold">oft</span> gezeigt. (Chúng thường xuyên được chiếu.)</p>
            </div>
         </div>
      </div>

    </div>
  );
}
