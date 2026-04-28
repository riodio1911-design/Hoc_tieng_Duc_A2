import React from 'react';
import { ShoppingCart, Scale, Coffee, ListChecks, Store } from 'lucide-react';
import { motion } from 'motion/react';

export default function Lektion4VocabTheory() {
  return (
    <div className="space-y-8 animate-fade-in pb-12">
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-orange-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -mx-20 -my-20 opacity-50 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shadow-inner">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-theme-dark font-display">Lý thuyết Từ vựng: Was darf es sein?</h2>
              <p className="text-theme-dark/60 font-bold">Lektion 4 • Thực phẩm, Đo lường & Mua sắm</p>
            </div>
          </div>

          <div className="prose prose-orange max-w-none">
            <p className="text-theme-dark/80 font-medium text-lg leading-relaxed mb-8">
              Trong bài này, chúng ta sẽ học từ vựng về thực phẩm, các đơn vị đo lường, tính từ dùng để miêu tả đồ ăn và các mẫu câu dùng khi đi chợ, siêu thị hoặc gọi đồ trong quán cà phê.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* 1. Lebensmittel */}
              <div className="bg-orange-50/50 rounded-3xl p-6 border border-orange-100/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-500">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-theme-dark m-0">1. Thực phẩm & Đồ uống (Lebensmittel)</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-50">
                    <ul className="space-y-2 text-theme-dark/80 cursor-default">
                      <li><span className="font-bold text-theme-dark">das Gemüse:</span> Rau củ</li>
                      <li><span className="font-bold text-theme-dark">die Banane / die Birne:</span> Quả chuối / lê</li>
                      <li><span className="font-bold text-theme-dark">die Bohne:</span> Hạt đậu / đỗ</li>
                      <li><span className="font-bold text-theme-dark">das Bonbon:</span> Kẹo</li>
                      <li><span className="font-bold text-theme-dark">das Getränk / der Saft / die Cola:</span> Đồ uống / Nước ép / Cola</li>
                      <li><span className="font-bold text-theme-dark">die Marmelade:</span> Mứt</li>
                      <li><span className="font-bold text-theme-dark">das Mehl / der Quark:</span> Bột mì / Phô mai tươi</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-50">
                    <h4 className="font-bold text-orange-700 mb-2">Tính từ miêu tả:</h4>
                    <ul className="space-y-2 text-theme-dark/80 cursor-default">
                      <li><span className="font-bold text-theme-dark">frisch:</span> Tươi (frischer Fisch)</li>
                      <li><span className="font-bold text-theme-dark">mager / fett:</span> Nạc / mỡ (magerer Schinken / fetter Braten)</li>
                      <li><span className="font-bold text-theme-dark">fettarm:</span> Ít béo (fettarme Milch)</li>
                      <li><span className="font-bold text-theme-dark">roh / gekocht:</span> Sống / chín (roher Schinken)</li>
                      <li><span className="font-bold text-theme-dark">hart / weich:</span> Cứng / mềm (ein weich gekochtes Ei)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. Mengen und Verpackungen */}
              <div className="bg-amber-50/50 rounded-3xl p-6 border border-amber-100/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-amber-500">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-theme-dark m-0">2. Số lượng & Đo lường</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-amber-50">
                    <ul className="space-y-2 text-theme-dark/80 cursor-default">
                      <li><span className="font-bold text-theme-dark">das Gramm (g):</span> 200 Gramm Käse.</li>
                      <li><span className="font-bold text-theme-dark">das Pfund:</span> bằng 500g (Ein Pfund Tomaten).</li>
                      <li><span className="font-bold text-theme-dark">das Kilo(gramm):</span> 1 Kilo = 1000g.</li>
                      <li><span className="font-bold text-theme-dark">der Liter:</span> Ein Liter Milch.</li>
                      <li><span className="font-bold text-theme-dark">die Packung:</span> Hộp giấy/gói (eine Packung Tee).</li>
                      <li><span className="font-bold text-theme-dark">die Dose:</span> Lon/hộp kim loại (eine Dose Cola).</li>
                      <li><span className="font-bold text-theme-dark">die Tüte:</span> Túi giấy/nilon (eine Tüte Kartoffeln).</li>
                      <li><span className="font-bold text-theme-dark">die Portion:</span> Khẩu phần (eine Portion Pommes).</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. Einkaufen und Kommunizieren */}
              <div className="bg-yellow-50/50 md:col-span-2 rounded-3xl p-6 border border-yellow-100/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-yellow-500">
                    <Store className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-theme-dark m-0">3. Đi chợ & Gọi món</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-yellow-50">
                    <h4 className="font-bold text-yellow-700 mb-2">Người bán (Verkäufer/in):</h4>
                    <ul className="space-y-2 text-theme-dark/80 cursor-default">
                      <li><span className="font-bold text-theme-dark">Was darf es sein?</span> Ngài muốn mua gì?</li>
                      <li><span className="font-bold text-theme-dark">Sonst noch etwas?</span> Còn gì nữa không?</li>
                      <li><span className="font-bold text-theme-dark">Das macht... / Das kostet...</span> Của ngài hết...</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-yellow-50">
                    <h4 className="font-bold text-yellow-700 mb-2">Khách hàng (Kunde/Kundin):</h4>
                    <ul className="space-y-2 text-theme-dark/80 cursor-default">
                      <li><span className="font-bold text-theme-dark">Ich hätte gern...</span> Tôi muốn (có)...</li>
                      <li><span className="font-bold text-theme-dark">Ich nehme... / Ich brauche...</span> Tôi lấy... / Tôi cần...</li>
                      <li><span className="font-bold text-theme-dark">Geben Sie mir bitte...</span> Cho tôi...</li>
                      <li><span className="font-bold text-theme-dark">Das ist alles.</span> Đó là tất cả.</li>
                    </ul>
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
