import React from 'react';
import { BookOpen, TableProperties, Info, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Lektion5GrammarTheory() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-black text-theme-dark mb-6 flex items-center gap-3">
        <BookOpen className="w-8 h-8 text-indigo-500" /> Biến cách Tính từ (Adjektivdeklination)
      </h3>

      <div className="bg-indigo-50/50 rounded-3xl p-6 border border-indigo-100 mb-8">
         <p className="text-theme-dark/80 font-medium mb-4">
           Biến cách tính từ là quá trình thêm đuôi vào sau tính từ để phản ánh đúng giống (der, die, das), số (ít, nhiều) và cách (Nominativ, Akkusativ, Dativ) của danh từ mà nó bổ nghĩa. <br/>
           Trong bài này, chúng ta học <strong>Tính từ đi sau Mạo từ xác định (der, die, das, die - số nhiều)</strong>.
         </p>
      </div>

      <div className="space-y-8">
        
        {/* Quy tắc hình cái thìa (L-Form) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100"
        >
          <div className="bg-indigo-600 p-4 text-white flex items-center gap-3">
             <TableProperties className="w-6 h-6" />
             <h4 className="text-lg font-bold">1. Bảng quy tắc (Quy tắc "Cái thìa")</h4>
          </div>
          
          <div className="p-6 overflow-x-auto">
             <p className="font-medium text-theme-dark/80 mb-4">
               Hầu hết các đuôi ở số ít Nominativ và Akkusativ đều là <strong className="text-emerald-600">-e</strong>. Chỉ có giống đực Akkusativ và tất cả cách Dativ (số ít, nhiều) và số nhiều Nom/Akk là có đuôi <strong className="text-rose-600">-en</strong>.
             </p>
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="p-3 text-slate-500 font-bold">Kasus</th>
                  <th className="p-3 text-blue-600 font-bold">Maskulin (der)</th>
                  <th className="p-3 text-orange-600 font-bold">Neutral (das)</th>
                  <th className="p-3 text-rose-600 font-bold">Feminin (die)</th>
                  <th className="p-3 text-emerald-600 font-bold">Plural (die)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3 font-bold text-slate-700">Nominativ</td>
                  <td className="p-3 bg-indigo-50/50">der alt<span className="font-bold text-indigo-600">e</span></td>
                  <td className="p-3 bg-indigo-50/50">das bunt<span className="font-bold text-indigo-600">e</span></td>
                  <td className="p-3 bg-indigo-50/50">die neu<span className="font-bold text-indigo-600">e</span></td>
                  <td className="p-3 bg-rose-50/50">die nett<span className="font-bold text-rose-600">en</span></td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-700">Akkusativ</td>
                  <td className="p-3 bg-rose-50/50">den alt<span className="font-bold text-rose-600">en</span></td>
                  <td className="p-3 bg-indigo-50/50">das bunt<span className="font-bold text-indigo-600">e</span></td>
                  <td className="p-3 bg-indigo-50/50">die neu<span className="font-bold text-indigo-600">e</span></td>
                  <td className="p-3 bg-rose-50/50">die nett<span className="font-bold text-rose-600">en</span></td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-700">Dativ</td>
                  <td className="p-3 bg-rose-50/50">dem alt<span className="font-bold text-rose-600">en</span></td>
                  <td className="p-3 bg-rose-50/50">dem bunt<span className="font-bold text-rose-600">en</span></td>
                  <td className="p-3 bg-rose-50/50">der neu<span className="font-bold text-rose-600">en</span></td>
                  <td className="p-3 bg-rose-50/50">den nett<span className="font-bold text-rose-600">en</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Nominativ & Akkusativ */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold text-theme-dark">2. Phân tích: Nominativ và Akkusativ</h4>
          </div>
          <div className="space-y-3 pl-4 border-l-2 border-emerald-100 mb-4 text-theme-dark/80">
            <p><strong>Nominativ (Chủ ngữ):</strong> Các giống số ít (der/die/das) đều lấy đuôi <strong className="text-emerald-600">-e</strong>. Số nhiều lấy <strong className="text-rose-600">-en</strong>.</p>
            <div className="bg-slate-50 p-3 rounded-lg text-sm font-mono text-slate-700 mb-2">
              Der alt<strong>e</strong> Dom gefällt mir sehr gut.
            </div>
            
            <p className="mt-4"><strong>Akkusativ (Tân ngữ trực tiếp):</strong> Giống hệt Nominativ, CHỈ CÓ GIỐNG ĐỰC (der) đổi đuôi thành <strong className="text-rose-600">-en</strong> (den alt<strong>en</strong>).</p>
            <div className="bg-slate-50 p-3 rounded-lg text-sm font-mono text-slate-700">
               Wir besichtigen den alt<strong>en</strong> Dom. (Dom là giống đực, chia Akkusativ nên đổi) <br/>
               Wir sehen das bunt<strong>e</strong> Fenster. (Nguyên bản -e)
            </div>
          </div>
        </motion.div>

        {/* Dativ */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center">
              <Info className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold text-theme-dark">3. Phân tích: Dativ</h4>
          </div>
          <p className="text-theme-dark/70 font-medium mb-4">
            QUY TẮC VÀNG: Ở cách Dativ, <strong>tất cả</strong> các tính từ sau mạo từ xác định đều có đuôi <strong className="text-rose-600">-en</strong>.
          </p>
          <div className="bg-rose-50/50 rounded-2xl p-4 border border-rose-100 space-y-2">
            <ul className="list-disc pl-5 font-medium text-theme-dark/80 space-y-2">
              <li>mit dem nett<strong>en</strong> Reiseführer ( Maskulin )</li>
              <li>mit dem bunt<strong>en</strong> Fenster ( Neutral )</li>
              <li>mit der neu<strong>en</strong> Kamera ( Feminin )</li>
              <li>mit den nett<strong>en</strong> Leuten ( Plural )</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
