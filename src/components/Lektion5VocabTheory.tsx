import React from 'react';
import { BookOpen, Map, Camera, Heart, Navigation, Info } from 'lucide-react';

export default function Lektion5VocabTheory() {
  return (
    <div className="space-y-8 animate-fade-in pb-12">
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-orange-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -mx-20 -my-20 opacity-50 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shadow-inner">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-theme-dark font-display">Lý thuyết Từ vựng: Schaut mal, der schöne Dom!</h2>
              <p className="text-theme-dark/60 font-bold">Lektion 5 • Du lịch, Tham quan & Tính từ</p>
            </div>
          </div>

          <div className="prose prose-orange max-w-none">
            <p className="text-theme-dark/80 font-medium text-lg leading-relaxed mb-8">
              Trong bài này, chúng ta sẽ học từ vựng về du lịch, tham quan thành phố, đưa ra gợi ý, cũng như các tính từ dùng để miêu tả danh lam thắng cảnh.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* 1. Tourismus */}
              <div className="bg-orange-50/50 rounded-3xl p-6 border border-orange-100/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-500">
                    <Map className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-theme-dark m-0">1. Du lịch & Đi lại (Tourismus)</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-50">
                    <h4 className="font-bold text-orange-700 mb-2">Danh từ (Nomen):</h4>
                    <ul className="space-y-2 text-theme-dark/80">
                      <li><span className="font-bold text-theme-dark">der Besuch, -e:</span> Chuyến thăm</li>
                      <li><span className="font-bold text-theme-dark">die Führung, -en:</span> Chuyến tham quan có hướng dẫn</li>
                      <li><span className="font-bold text-theme-dark">der Reiseführer, -:</span> Hướng dẫn viên / Sách hướng dẫn</li>
                      <li><span className="font-bold text-theme-dark">die Sehenswürdigkeit, -en:</span> Danh lam thắng cảnh</li>
                      <li><span className="font-bold text-theme-dark">der Rundgang, -"e:</span> Chuyến đi dạo quanh</li>
                      <li><span className="font-bold text-theme-dark">das Trinkgeld, -er:</span> Tiền boa (geben: đưa cho)</li>
                      <li><span className="font-bold text-theme-dark">die Unterkunft, -"e:</span> Chỗ ở</li>
                      <li><span className="font-bold text-theme-dark">der Prospekt, -e:</span> Tờ rơi du lịch</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-50">
                    <h4 className="font-bold text-orange-700 mb-2">Động từ (Verben):</h4>
                    <ul className="space-y-2 text-theme-dark/80">
                      <li><span className="font-bold text-theme-dark">besichtigen:</span> Tham quan (địa điểm, bảo tàng)</li>
                      <li><span className="font-bold text-theme-dark">sich interessieren für:</span> Quan tâm đến (cái gì)</li>
                      <li><span className="font-bold text-theme-dark">wechseln:</span> Đổi (Geld wechseln: đổi tiền)</li>
                      <li><span className="font-bold text-theme-dark">zeigen:</span> Chỉ, cho xem</li>
                      <li><span className="font-bold text-theme-dark">eine Führung mitmachen:</span> Tham gia một chuyến tham quan</li>
                      <li><span className="font-bold text-theme-dark">übernachten:</span> Ngủ qua đêm</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. Adjektive */}
              <div className="bg-amber-50/50 rounded-3xl p-6 border border-amber-100/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-amber-500">
                    <Camera className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-theme-dark m-0">2. Tính từ miêu tả (Adjektive)</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-amber-50">
                    <h4 className="font-bold text-amber-700 mb-2">Miêu tả địa điểm:</h4>
                    <ul className="space-y-2 text-theme-dark/80">
                      <li><span className="font-bold text-theme-dark">berühmt:</span> Nổi tiếng</li>
                      <li><span className="font-bold text-theme-dark">schick:</span> Sang trọng, sành điệu (ein schicker Club)</li>
                      <li><span className="font-bold text-theme-dark">bunt:</span> Nhiều màu sắc</li>
                      <li><span className="font-bold text-theme-dark">beeindruckend:</span> Rất ấn tượng</li>
                      <li><span className="font-bold text-theme-dark">toll / schön:</span> Tuyệt vời, đẹp</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-amber-50">
                    <h4 className="font-bold text-amber-700 mb-2">Trạng thái:</h4>
                    <ul className="space-y-2 text-theme-dark/80">
                      <li><span className="font-bold text-theme-dark">geöffnet / offen:</span> Mở cửa</li>
                      <li><span className="font-bold text-theme-dark">geschlossen:</span> Đóng cửa</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. Đưa ra ý kiến & Các từ khác */}
              <div className="bg-yellow-50/50 md:col-span-2 rounded-3xl p-6 border border-yellow-100/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-yellow-500">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-theme-dark m-0">3. Bày tỏ ý kiến và Cảm xúc</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-yellow-50">
                    <h4 className="font-bold text-yellow-700 mb-2">Động từ phản thân (Reflexive Verben):</h4>
                    <ul className="space-y-2 text-theme-dark/80">
                      <li><span className="font-bold text-theme-dark">sich freuen (auf/über):</span> Vui mừng (về/vì)</li>
                      <li><span className="font-bold text-theme-dark">sich ärgern (über):</span> Tức giận (vì)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-yellow-50">
                    <h4 className="font-bold text-yellow-700 mb-2">Bày tỏ sự đồng ý hay phản đối:</h4>
                    <ul className="space-y-2 text-theme-dark/80">
                      <li><span className="font-bold text-theme-dark">dafür sein:</span> Ủng hộ (điều gì)</li>
                      <li><span className="font-bold text-theme-dark">dagegen sein:</span> Phản đối (điều gì)</li>
                      <li><span className="font-bold text-theme-dark">einverstanden sein:</span> Đồng ý</li>
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
