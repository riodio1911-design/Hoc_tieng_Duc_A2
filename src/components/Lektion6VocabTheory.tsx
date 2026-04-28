import React from 'react';
import { BookOpen, MapPin, Calendar, Users, Target, Activity } from 'lucide-react';

export default function Lektion6VocabTheory() {
  return (
    <div className="space-y-8 animate-fade-in pb-12">
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-emerald-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -mx-20 -my-20 opacity-50 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shadow-inner">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-theme-dark font-display">Lý thuyết Từ vựng: Meine Lieblingsveranstaltung</h2>
              <p className="text-theme-dark/60 font-bold">Lektion 6 • Sự kiện, Cuộc hẹn và Thời gian</p>
            </div>
          </div>

          <div className="prose prose-emerald max-w-none">
            <p className="text-theme-dark/80 font-medium text-lg leading-relaxed mb-8">
              Trong bài học này, chúng ta sẽ làm quen với các từ vựng chủ đề Sự kiện (Veranstaltungen), cách sắp xếp cuộc hẹn (Verabredungen) và các mốc thời gian (Zeiträume).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* 1. Veranstaltungen */}
              <div className="bg-emerald-50/50 rounded-3xl p-6 border border-emerald-100/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-500">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-theme-dark m-0">1. Veranstaltungen (Sự kiện)</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-50">
                    <h4 className="font-bold text-emerald-700 mb-2">Các danh từ chính:</h4>
                    <ul className="space-y-2 text-theme-dark/80">
                      <li><span className="font-bold text-theme-dark">die Bühne, -n:</span> Sân khấu</li>
                      <li><span className="font-bold text-theme-dark">die Diskussion, -en:</span> Sự thảo luận</li>
                      <li><span className="font-bold text-theme-dark">der Eintritt (-e):</span> Sự vào cửa / vé vào cửa</li>
                      <li><span className="font-bold text-theme-dark">die Ermäßigung, -en:</span> Sự giảm giá</li>
                      <li><span className="font-bold text-theme-dark">das Festival, -s:</span> Lễ hội</li>
                      <li><span className="font-bold text-theme-dark">das Kostüm, -e:</span> Trang phục hóa trang</li>
                      <li><span className="font-bold text-theme-dark">die Kunst, -"e:</span> Nghệ thuật</li>
                      <li><span className="font-bold text-theme-dark">die Veranstaltung, -en:</span> Sự kiện</li>
                      <li><span className="font-bold text-theme-dark">der Vortrag, -"e:</span> Bài diễn thuyết</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-50">
                    <h4 className="font-bold text-emerald-700 mb-2">Động từ & Tính từ:</h4>
                    <ul className="space-y-2 text-theme-dark/80">
                      <li><span className="font-bold text-theme-dark">erleben:</span> Trải nghiệm</li>
                      <li><span className="font-bold text-theme-dark">stattfinden:</span> Diễn ra</li>
                      <li><span className="font-bold text-theme-dark">zahlen:</span> Thanh toán</li>
                      <li><span className="font-bold text-theme-dark">spannend:</span> Hấp dẫn, thú vị</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. Verabredungen */}
              <div className="bg-teal-50/50 rounded-3xl p-6 border border-teal-100/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-teal-500">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-theme-dark m-0">2. Verabredungen (Cuộc hẹn)</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-teal-50">
                    <h4 className="font-bold text-teal-700 mb-2">Động từ quan trọng:</h4>
                    <ul className="space-y-2 text-theme-dark/80">
                      <li><span className="font-bold text-theme-dark">ausmachen:</span> Quyết định, thống nhất cuộc hẹn</li>
                      <li><span className="font-bold text-theme-dark">sich verabreden:</span> Xác nhận hẹn gặp mặt</li>
                      <li><span className="font-bold text-theme-dark">vorschlagen:</span> Đề xuất, gợi ý (Mẫu: Ich schlage vor...)</li>
                      <li><span className="font-bold text-theme-dark">halten von:</span> Nghĩ gì về ý kiến/kế hoạch đó (Was hältst du davon?)</li>
                      <li><span className="font-bold text-theme-dark">hin / hinfahren:</span> Đi đến (chỗ đó)</li>
                      <li><span className="font-bold text-theme-dark">lassen:</span> Hay dùng ở câu rủ rê "Lass uns..." (Hãy...)</li>
                      <li><span className="font-bold text-theme-dark">mitkommen:</span> Đi cùng với một người khác</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-teal-50">
                    <h4 className="font-bold text-teal-700 mb-2">Từ vựng giao tiếp:</h4>
                    <ul className="space-y-2 text-theme-dark/80">
                      <li><span className="font-bold text-theme-dark">der Vorschlag, -"e:</span> Lời đề xuất</li>
                      <li><span className="font-bold text-theme-dark">prima:</span> Rất tuyệt!</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. Zeiträume & Weitere Wörter */}
              <div className="bg-cyan-50/50 md:col-span-2 rounded-3xl p-6 border border-cyan-100/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-cyan-500">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-theme-dark m-0">3. Thời gian và các từ khác</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-cyan-50">
                    <h4 className="font-bold text-cyan-700 mb-2">Khoảng thời gian (Zeiträume):</h4>
                    <ul className="space-y-2 text-theme-dark/80">
                      <li><span className="font-bold text-theme-dark">über + [Akkusativ]:</span> hơn (khoảng thời gian) - <i>über 30 Jahre</i></li>
                      <li><span className="font-bold text-theme-dark">von ... an:</span> bắt đầu từ lúc (đến tương lai) - <i>von morgen an</i></li>
                      <li><span className="font-bold text-theme-dark">vom ... bis:</span> từ ... đến (khoảng có bắt đầu và kết thúc)</li>
                      <li><span className="font-bold text-theme-dark">zum ...:</span> vào lúc (z.B. zum Wochenende)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-cyan-50">
                    <h4 className="font-bold text-cyan-700 mb-2">Từ vựng bổ sung:</h4>
                    <ul className="space-y-2 text-theme-dark/80">
                      <li><span className="font-bold text-theme-dark">das Feuer, -:</span> Lửa</li>
                      <li><span className="font-bold text-theme-dark">das Mal, -e:</span> Lần (das erste Mal = lần đầu tiên)</li>
                      <li><span className="font-bold text-theme-dark">da / dort:</span> Ở đó</li>
                      <li><span className="font-bold text-theme-dark">genau:</span> Chính xác</li>
                      <li><span className="font-bold text-theme-dark">ziemlich:</span> Khá là</li>
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
