import React from 'react';
import { ArrowRight, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Lektion6GrammarTheory() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-black text-theme-dark mb-6 flex items-center gap-3">
        <Clock className="w-8 h-8 text-indigo-500" /> Giới từ chỉ Thời gian (Temporale Präpositionen)
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* von ... bis */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold text-theme-dark">von ... bis (zu)</h4>
          </div>
          <p className="text-theme-dark/70 font-medium mb-4">
            Dùng để chỉ một khoảng thời gian có điểm bắt đầu và kết thúc (Từ ... đến ...)
          </p>
          <div className="bg-indigo-50/50 rounded-2xl p-4 border border-indigo-100 space-y-2">
            <div className="flex items-start gap-4">
              <div className="font-mono text-indigo-600 font-bold whitespace-nowrap mt-1">
                von ... bis
              </div>
              <div className="text-theme-dark font-medium">
                Das Festival ist <strong>von</strong> Freitag <strong>bis</strong> Sonntag.
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="font-mono text-indigo-600 font-bold whitespace-nowrap mt-1">
                vom ... bis zum
              </div>
              <div className="text-theme-dark font-medium">
                Der Kurs geht <strong>vom</strong> ersten <strong>bis zum</strong> zehnten Juli.
              </div>
            </div>
          </div>
        </motion.div>

        {/* von ... an */}
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
            <h4 className="text-xl font-bold text-theme-dark">von ... an</h4>
          </div>
          <p className="text-theme-dark/70 font-medium mb-4">
            Từ thời điểm nào đó trở đi. Thường chỉ một điểm bắt đầu ở tương lai hoặc hiện tại, không có mốc kết thúc.
          </p>
          <div className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-100 space-y-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div className="text-theme-dark font-medium">
                <strong>Von morgen an</strong> lerne ich jeden Tag Deutsch. (Bắt đầu từ ngày mai)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div className="text-theme-dark font-medium">
                <strong>Vom 1. Januar an</strong> rauche ich nicht mehr. (Bắt đầu từ mùng 1 tháng 1)
              </div>
            </div>
          </div>
        </motion.div>

        {/* seit + Dativ */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold text-theme-dark">seit + Dativ</h4>
          </div>
          <p className="text-theme-dark/70 font-medium mb-4">
            Chỉ một khoảng thời gian/thời điểm bắt đầu trong quá khứ và vẫn KÉO DÀI ĐẾN HIỆN TẠI (Từ đó ... đến nay). Nhớ chia cách 3 (Dativ). Đi với câu hỏi Seit wann? (từ khi nào) hoặc Wie lange? (bao lâu)
          </p>
          <div className="bg-rose-50/50 rounded-2xl p-4 border border-rose-100 space-y-2">
            <div className="flex items-start gap-4">
              <div className="font-mono text-rose-600 font-bold whitespace-nowrap mt-1">
                seit einem Jahr
              </div>
              <div className="text-theme-dark font-medium">
                Ich lerne <strong>seit einem Jahr</strong> Deutsch. (Được 1 năm rồi và vẫn đang tiếp tục học)
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="font-mono text-rose-600 font-bold whitespace-nowrap mt-1">
                seit 1985
              </div>
              <div className="text-theme-dark font-medium">
                Das Festival findet <strong>seit 1985</strong> jedes Jahr statt.
              </div>
            </div>
          </div>
        </motion.div>

        {/* über + Akkusativ */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
              <ArrowRight className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold text-theme-dark">über + Akkusativ</h4>
          </div>
          <p className="text-theme-dark/70 font-medium mb-4">
            Hơn một khoảng thời gian (kéo dài). Đồng nghĩa với từ "mehr als" hoặc "länger als". Đi kèm cấu trúc thời gian ở Akkusativ.
          </p>
          <div className="bg-amber-50/50 rounded-2xl p-4 border border-amber-100 space-y-2">
            <div className="flex items-start gap-4">
              <div className="font-mono text-amber-600 font-bold whitespace-nowrap mt-1">
                über ein Jahr
              </div>
              <div className="text-theme-dark font-medium">
                Ich wohne schon <strong>über ein Jahr</strong> in Berlin. (lâu hơn 1 năm)
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="font-mono text-amber-600 font-bold whitespace-nowrap mt-1">
                über 30 Jahre
              </div>
              <div className="text-theme-dark font-medium">
                Die Landshuter Hochzeit gibt es schon <strong>über 30 Jahre</strong>.
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
