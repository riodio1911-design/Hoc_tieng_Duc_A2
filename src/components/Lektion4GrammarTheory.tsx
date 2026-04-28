import React from 'react';
import { BookOpen, TableProperties, Info, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Lektion4GrammarTheory() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-black text-theme-dark mb-6 flex items-center gap-3">
        <BookOpen className="w-8 h-8 text-indigo-500" /> Biến cách Tính từ sau Mạo Từ Không Xác Định
      </h3>

      <div className="bg-indigo-50/50 rounded-3xl p-6 border border-indigo-100 mb-8">
         <p className="text-theme-dark/80 font-medium mb-4">
           Khác với mạo từ xác định (der/die/das), mạo từ <strong>không xác định (ein/eine/ein - hoặc kein/mein)</strong> ở Nominativ và Akkusativ không thể hiện rõ danh từ phía sau là giống gì đối với giống Đực và Trung (đều là "ein").<br/>
           Vì vậy, <strong>Tính từ phải gánh nhiệm vụ thể hiện giống</strong> bằng cách lấy đuôi tương ứng với mạo từ xác định (-er cho der, -es cho das, -e cho die).
         </p>
      </div>

      <div className="space-y-8">
        
        {/* Bảng tổng hợp Nominativ & Akkusativ */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100"
        >
          <div className="bg-indigo-600 p-4 text-white flex items-center gap-3">
             <TableProperties className="w-6 h-6" />
             <h4 className="text-lg font-bold">1. Bảng quy tắc (Nominativ & Akkusativ)</h4>
          </div>
          
          <div className="p-6 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="p-3 text-slate-500 font-bold">Kasus</th>
                  <th className="p-3 text-blue-600 font-bold">Maskulin (ein)</th>
                  <th className="p-3 text-orange-600 font-bold">Neutral (ein)</th>
                  <th className="p-3 text-rose-600 font-bold">Feminin (eine)</th>
                  <th className="p-3 text-emerald-600 font-bold">Plural (keine/meine)*</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3 font-bold text-slate-700">Nominativ</td>
                  <td className="p-3 bg-indigo-50/50">ein mager<span className="font-bold text-blue-600">er</span> Schinken</td>
                  <td className="p-3 bg-indigo-50/50">ein hell<span className="font-bold text-orange-600">es</span> Brot</td>
                  <td className="p-3 bg-indigo-50/50">eine grün<span className="font-bold text-rose-600">e</span> Paprika</td>
                  <td className="p-3 bg-rose-50/50">keine/meine hell<span className="font-bold text-emerald-600">en</span> Brötchen</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-700">Akkusativ</td>
                  <td className="p-3 bg-rose-50/50">einen mager<span className="font-bold text-rose-600">en</span> Schinken</td>
                  <td className="p-3 bg-indigo-50/50">ein hell<span className="font-bold text-orange-600">es</span> Brot</td>
                  <td className="p-3 bg-indigo-50/50">eine grün<span className="font-bold text-rose-600">e</span> Paprika</td>
                  <td className="p-3 bg-rose-50/50">keine/meine hell<span className="font-bold text-emerald-600">en</span> Brötchen</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4 text-sm text-slate-500 italic">
              * Lưu ý: "ein" không có số nhiều. Nhưng "kein/mein" có. Trường hợp danh từ số nhiều ĐỨNG MỘT MÌNH KHÔNG CÓ MẠO TỪ thì đuôi là <strong>-e</strong> (ví dụ: helle Brötchen). Nhưng nếu đứng sau "keine/meine/deine..." thì đuôi là <strong>-en</strong> (keine hellen Brötchen).
            </p>
          </div>
        </motion.div>

        {/* Phân tích Nominativ / Akkusativ */}
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
            <h4 className="text-xl font-bold text-theme-dark">2. Tại sao lại gọi là đuôi "nhận diện"?</h4>
          </div>
          <div className="space-y-3 pl-4 border-l-2 border-emerald-100 mb-4 text-theme-dark/80">
            <p>Ở Nominativ, <code>ein</code> có thể là Giống đực (der) hoặc Giống trung (das). Người nghe không biết là giống nào.</p>
            <ul className="list-disc pl-5">
              <li>Vì vậy, tính từ cho Giống đực phải mang chữ "r" của <strong>de<span className="text-blue-600">r</span></strong>: ein mager<strong>e<span className="text-blue-600">r</span></strong> Schinken.</li>
              <li>Tính từ cho Giống trung phải mang chữ "s" của <strong>da<span className="text-orange-600">s</span></strong>: ein hell<strong>e<span className="text-orange-600">s</span></strong> Brot.</li>
              <li>Riêng Giống cái (eine) và Akkusativ Giống đực (einen) bản thân mạo từ đã rõ giống nên đuôi tính từ sẽ tuân theo quy tắc "Cái thìa" (một là -e, hai là -en).</li>
            </ul>
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
            <h4 className="text-xl font-bold text-theme-dark">3. Dativ với mạo từ không xác định</h4>
          </div>
          <p className="text-theme-dark/70 font-medium mb-4">
            Ở cách Dativ, <strong>tất cả</strong> các tính từ đi sau mạo từ xác định HAY không xác định (einem/einer/keinem) đều mang đuôi <strong className="text-rose-600">-en</strong>.
          </p>
          <div className="bg-rose-50/50 rounded-2xl p-4 border border-rose-100 space-y-2">
            <ul className="list-disc pl-5 font-medium text-theme-dark/80 space-y-2">
              <li>mit ein<strong>em</strong> (Maskulin) mager<strong>en</strong> Schinken</li>
              <li>mit ein<strong>em</strong> (Neutral) hell<strong>en</strong> Brot</li>
              <li>mit ein<strong>er</strong> (Feminin) grün<strong>en</strong> Paprika</li>
              <li>mit kein<strong>en</strong> (Plural) hell<strong>en</strong> Brötchen</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
