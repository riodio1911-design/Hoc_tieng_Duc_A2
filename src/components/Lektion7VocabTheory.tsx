import React from 'react';
import { Activity, Dumbbell, CalendarRange, MapPin, Apple } from 'lucide-react';

export default function Lektion7VocabTheory() {
  return (
    <div className="space-y-8 animate-fade-in pb-12">
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-emerald-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -mx-20 -my-20 opacity-50 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shadow-inner">
              <Dumbbell className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-theme-dark font-display">Lý thuyết Từ vựng: Wir könnten montags joggen gehen</h2>
              <p className="text-theme-dark/60 font-bold">Lektion 7 • Thể thao, Sức khỏe và Lối sống</p>
            </div>
          </div>

          <div className="prose prose-emerald max-w-none">
            <p className="text-theme-dark/80 font-medium text-lg leading-relaxed mb-8">
              Trong bài học này, chúng ta sẽ tìm hiểu từ vựng về chủ đề Thể thao (Sportarten), Sức khỏe & Thể hình (Gesundheit und Fitness), cùng các trạng từ, giới từ thời gian phản ánh lịch trình.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* 1. Gesundheit und Fitness */}
              <div className="bg-emerald-50/50 rounded-3xl p-6 border border-emerald-100/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-500">
                    <Apple className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-theme-dark m-0">1. Sức khỏe & Thể hình</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-50">
                    <h4 className="font-bold text-emerald-700 mb-2">Các danh từ:</h4>
                    <ul className="space-y-2 text-theme-dark/80">
                      <li><span className="font-bold text-theme-dark">die Art, -en:</span> Loại, loại hình</li>
                      <li><span className="font-bold text-theme-dark">die Sportart:</span> Môn thể thao</li>
                      <li><span className="font-bold text-theme-dark">die Diät, -en:</span> Chế độ ăn kiêng</li>
                      <li><span className="font-bold text-theme-dark">die Gesundheit:</span> Sức khỏe</li>
                      <li><span className="font-bold text-theme-dark">das Gewicht, -e:</span> Cân nặng</li>
                      <li><span className="font-bold text-theme-dark">das Training, -s:</span> Sự tập luyện</li>
                      <li><span className="font-bold text-theme-dark">die frische Luft:</span> Không khí trong lành</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-50">
                    <h4 className="font-bold text-emerald-700 mb-2">Động từ & Tính từ:</h4>
                    <ul className="space-y-2 text-theme-dark/80">
                      <li><span className="font-bold text-theme-dark">ab|nehmen (hat abgenommen):</span> Giảm cân</li>
                      <li><span className="font-bold text-theme-dark">wiegen (hat gewogen):</span> Cân (nặng)</li>
                      <li><span className="font-bold text-theme-dark">trainieren (hat trainiert):</span> Tập luyện</li>
                      <li><span className="font-bold text-theme-dark">aus|ruhen (sich) (hat sich ausgeruht):</span> Nghỉ ngơi</li>
                      <li><span className="font-bold text-theme-dark">fit sein:</span> Khỏe mạnh, thon gọn</li>
                      <li><span className="font-bold text-theme-dark">frisch:</span> Tươi mát, trong lành</li>
                      <li><span className="font-bold text-theme-dark">regelmäßig:</span> Thường xuyên, đều đặn</li>
                      <li><span className="font-bold text-theme-dark">selten:</span> Hiếm khi</li>
                      <li><span className="font-bold text-theme-dark">mindestens:</span> Ít nhất</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. Sportarten & Weiteres */}
              <div className="bg-teal-50/50 rounded-3xl p-6 border border-teal-100/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-teal-500">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-theme-dark m-0">2. Môn thể thao & Hoạt động</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-teal-50">
                    <h4 className="font-bold text-teal-700 mb-2">Sportarten:</h4>
                    <p className="text-theme-dark/80 leading-relaxed">
                      Basketball, Volleyball, Handball, Gewichtheben, Fitnesstraining, Judo, Badminton, Yoga, Golf, Gymnastik, Tischtennis, Eishockey, Walken, Aqua-Fitness, Rudern, Schwimmen.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-teal-50">
                    <h4 className="font-bold text-teal-700 mb-2">Các từ vựng mở rộng:</h4>
                    <ul className="space-y-2 text-theme-dark/80">
                      <li><span className="font-bold text-theme-dark">die Nudel, -n:</span> Mì sợi</li>
                      <li><span className="font-bold text-theme-dark">die Stelle, -n:</span> Vị trí (An deiner Stelle: Nếu tôi là bạn)</li>
                      <li><span className="font-bold text-theme-dark">der Verein, -e:</span> Câu lạc bộ</li>
                      <li><span className="font-bold text-theme-dark">empfehlen (hat empfohlen):</span> Giới thiệu, khuyên</li>
                      <li><span className="font-bold text-theme-dark">leihen (hat geliehen):</span> Cho mượn, mượn</li>
                      <li><span className="font-bold text-theme-dark">öffnen (hat geöffnet):</span> Mở (cửa)</li>
                      <li><span className="font-bold text-theme-dark">teil|nehmen (hat teilgenommen):</span> Tham gia</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. Thời gian */}
              <div className="bg-cyan-50/50 md:col-span-2 rounded-3xl p-6 border border-cyan-100/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-cyan-500">
                    <CalendarRange className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-theme-dark m-0">3. Thời gian biểu & Thói quen</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-cyan-50">
                     <h4 className="font-bold text-cyan-700 mb-2">Chỉ tần suất lặp lại (mỗi...):</h4>
                     <ul className="space-y-2 text-theme-dark/80">
                       <li><span className="font-bold text-theme-dark">morgens, vormittags, mittags, nachmittags, abends, nachts:</span> Mỗi sáng, mỗi trưa, mỗi tối...</li>
                       <li><span className="font-bold text-theme-dark">montags, dienstags, ... , sonntags:</span> Mỗi thứ 2, mỗi thứ 3...</li>
                     </ul>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-cyan-50">
                     <h4 className="font-bold text-cyan-700 mb-2">Các mốc & Khoảng thời gian:</h4>
                     <ul className="space-y-2 text-theme-dark/80">
                       <li><span className="font-bold text-theme-dark">circa:</span> Khoảng chừng</li>
                       <li><span className="font-bold text-theme-dark">früh:</span> Sớm</li>
                       <li><span className="font-bold text-theme-dark">zwischen:</span> Ở giữa (ví dụ: zwischen 7.00 und 7.15 Uhr)</li>
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
