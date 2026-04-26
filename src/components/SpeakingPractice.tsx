import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, Volume2, Loader2, PlayCircle, BarChart3, ChevronRight, CheckCircle2, RotateCcw, AlertCircle } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { getAI } from '../ai';

const ai = getAI();

interface PracticeItem {
  id: string;
  de: string;
  vi: string;
  ipa?: string;
  syllables?: string[];
  notation?: number[];
  speaker?: string;
  context?: string;
}

interface ConversationGroup {
  context: string;
  lines: PracticeItem[];
}

const TeachingNotation = ({ syllables, notation, isSentence }: { syllables?: string[], notation?: number[], isSentence: boolean }) => {
  if (!syllables || !notation || syllables.length !== notation.length) return null;
  
  const width = syllables.length * (isSentence ? 60 : 50);
  const height = 80;
  
  const points = notation.map((n, i) => {
     const x = i * (isSentence ? 60 : 50) + (isSentence ? 30 : 25);
     const y = height - ((n / 100) * (height - 30) + 15);
     return `${x},${y}`;
  }).join(' ');

  return (
     <div className="flex flex-col items-start md:items-center justify-center mt-6 w-full max-w-full overflow-x-auto hide-scrollbar pb-4">
        <div style={{ minWidth: width, padding: '0 20px' }} className="relative mx-auto">
          <svg width={width} height={height} className="overflow-visible mx-auto">
             {isSentence && <polyline points={points} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-theme-primary/40" />}
             
             {notation.map((n, i) => {
                const x = i * (isSentence ? 60 : 50) + (isSentence ? 30 : 25);
                const y = height - ((n / 100) * (height - 30) + 15);
                const isStressed = n > 65;
                return (
                   <circle cx={x} cy={y} r={!isSentence && isStressed ? 6 : 4} fill="currentColor" className="text-theme-primary" key={`dot-${i}`} />
                )
             })}
          </svg>
          <div className="flex mt-2 justify-center" style={{ width }}>
             {syllables.map((syl, i) => (
                <div key={`syl-${i}`} style={{ width: isSentence ? 60 : 50 }} className="text-center text-xs md:text-sm font-bold text-theme-dark/60 truncate px-1" title={syl}>
                  {syl}
                </div>
             ))}
          </div>
        </div>
     </div>
  );
}

export const SPEAKING_DATA: Record<string, { words: PracticeItem[], sentences: PracticeItem[], conversations?: PracticeItem[] }> = {
  "l15": {
    "words": [
      { "id": "w1", "de": "Fernseher", "vi": "Ti-vi", "ipa": "/ˈfɛʁnˌzeːɐ/", "syllables": ["Fern", "se", "her"], "notation": [80, 40, 40] },
      { "id": "w2", "de": "Sendung", "vi": "Chương trình (phát sóng)", "ipa": "/ˈzɛndʊŋ/", "syllables": ["Sen", "dung"], "notation": [80, 40] },
      { "id": "w3", "de": "Krimi", "vi": "Phim hình sự", "ipa": "/ˈkʁiːmi/", "syllables": ["Kri", "mi"], "notation": [80, 40] },
      { "id": "w4", "de": "Zuschauer", "vi": "Khán giả", "ipa": "/ˈt͡suːˌʃaʊ̯ɐ/", "syllables": ["Zu", "schau", "er"], "notation": [80, 60, 40] },
      { "id": "w5", "de": "Mediathek", "vi": "Thư viện truyền thông", "ipa": "/ˌmeːdiaˈteːk/", "syllables": ["Me", "dia", "thek"], "notation": [40, 40, 80] },
      { "id": "w6", "de": "Schauspieler", "vi": "Diễn viên", "ipa": "/ˈʃaʊ̯ˌʃpiːlɐ/", "syllables": ["Schau", "spie", "ler"], "notation": [80, 60, 40] },
      { "id": "w7", "de": "spannend", "vi": "Căng thẳng, hồi hộp", "ipa": "/ˈʃpanənt/", "syllables": ["span", "nend"], "notation": [80, 40] },
      { "id": "w8", "de": "langweilig", "vi": "Nhàm chán", "ipa": "/ˈlaŋˌvaɪ̯lɪç/", "syllables": ["lang", "wei", "lig"], "notation": [80, 60, 40] },
      { "id": "w9", "de": "gucken", "vi": "Xem", "ipa": "/ˈɡʊkən/", "syllables": ["gu", "cken"], "notation": [80, 40] },
      { "id": "w10", "de": "Serie", "vi": "Loạt phim (Series)", "ipa": "/ˈzeːʁiə/", "syllables": ["Se", "ri", "e"], "notation": [80, 40, 60] },
      { "id": "w11", "de": "Sender", "vi": "Đài phát thanh/truyền hình", "ipa": "/ˈzɛndɐ/", "syllables": ["Sen", "der"], "notation": [80, 40] },
      { "id": "w12", "de": "regelmäßig", "vi": "Thường xuyên", "ipa": "/ˈʁeːɡəlˌmɛːsɪç/", "syllables": ["re", "gel", "mä", "ßig"], "notation": [80, 40, 60, 40] }
    ],
    "sentences": [
      { "id": "s1", "de": "Ich sehe am liebsten Krimis.", "vi": "Tôi thích xem phim hình sự nhất.", "ipa": "/ɪç ˈzeːə am ˈliːpstən ˈkʁiːmɪs/", "syllables": ["Ich", "se", "he", "am", "liebs", "ten", "Kri", "mis."], "notation": [40, 60, 40, 40, 80, 40, 80, 40] },
      { "id": "s2", "de": "Der Tatort ist sehr spannend.", "vi": "Phim Tatort rất hồi hộp.", "ipa": "/deːɐ̯ ˈtaːtˌɔʁt ɪst zeːɐ̯ ˈʃpanənt/", "syllables": ["Der", "Tat", "ort", "ist", "sehr", "span", "nend."], "notation": [40, 80, 60, 40, 60, 80, 40] },
      { "id": "s3", "de": "Ich gucke oft abends fern.", "vi": "Tôi thường xem TV vào buổi tối.", "ipa": "/ɪç ˈɡʊkə ɔft ˈaːbənts fɛʁn/", "syllables": ["Ich", "gu", "cke", "oft", "a", "bends", "fern."], "notation": [40, 80, 40, 60, 80, 40, 60] },
      { "id": "s4", "de": "Hast du den neuen Film gesehen?", "vi": "Bạn đã xem bộ phim mới chưa?", "ipa": "/hast duː deːn ˈnɔɪ̯ən fɪlm ɡəˈzeːən/", "syllables": ["Hast", "du", "den", "neu", "en", "Film", "ge", "se", "hen?"], "notation": [60, 40, 40, 80, 40, 60, 40, 80, 40] },
      { "id": "s5", "de": "Wir laden dich zum Videoabend ein.", "vi": "Chúng tôi mời bạn đến buổi tối xem video.", "ipa": "/viːɐ̯ ˈlaːdən dɪç t͡sʊm ˈviːdeoˌʔaːbənt aɪ̯n/", "syllables": ["Wir", "la", "den", "dich", "zum", "Vi", "de", "o", "a", "bend", "ein."], "notation": [40, 80, 40, 40, 40, 80, 40, 40, 80, 60, 60] },
      { "id": "s6", "de": "Die Serie läuft jeden Sonntag.", "vi": "Loạt phim chiếu vào mỗi Chủ Nhật.", "ipa": "/diː ˈzeːʁiə lɔɪ̯ft ˈjeːdən ˈzɔntaːk/", "syllables": ["Die", "Se", "ri", "e", "läuft", "je", "den", "Sonn", "tag."], "notation": [40, 80, 40, 60, 60, 80, 40, 80, 60] },
      { "id": "s7", "de": "Ich finde die Dialoge interessant.", "vi": "Tôi thấy các đoạn hội thoại rất thú vị.", "ipa": "/ɪç ˈfɪndə diː diaˈloːɡə ɪntəʁɛˈsant/", "syllables": ["Ich", "fin", "de", "die", "Di", "a", "lo", "ge", "in", "te", "res", "sant."], "notation": [40, 80, 40, 40, 40, 40, 80, 40, 40, 40, 60, 80] },
      { "id": "s8", "de": "Die Schauspieler spielen toll.", "vi": "Các diễn viên diễn xuất tuyệt vời.", "ipa": "/diː ˈʃaʊ̯ˌʃpiːlɐ ˈʃpiːlən tɔl/", "syllables": ["Die", "Schau", "spie", "ler", "spie", "len", "toll."], "notation": [40, 80, 60, 40, 80, 40, 60] },
      { "id": "s9", "de": "Ich schaue in der Mediathek.", "vi": "Tôi xem trong thư viện truyền thông.", "ipa": "/ɪç ˈʃaʊ̯ə ɪn deːɐ̯ ˌmeːdiaˈteːk/", "syllables": ["Ich", "schau", "e", "in", "der", "Me", "dia", "thek."], "notation": [40, 80, 40, 40, 40, 40, 40, 80] },
      { "id": "s10", "de": "Sollen wir einen Film ansehen?", "vi": "Chúng ta có nên xem một bộ phim không?", "ipa": "/ˈzɔlən viːɐ̯ ˈaɪ̯nən fɪlm ˈanˌzeːən/", "syllables": ["Sol", "len", "wir", "ei", "nen", "Film", "an", "se", "hen?"], "notation": [80, 40, 40, 80, 40, 60, 80, 60, 40] }
    ],
    "conversations": [
      { "id": "c1", "context": "Hội thoại 1: Sở thích xem TV", "speaker": "A", "de": "Was siehst du gern im Fernsehen?", "vi": "Bạn thích xem gì trên TV?" },
      { "id": "c2", "context": "Hội thoại 1: Sở thích xem TV", "speaker": "B", "de": "Ich sehe am liebsten Krimis, besonders den Tatort.", "vi": "Tôi thích xem phim hình sự nhất, đặc biệt là Tatort." },
      { "id": "c3", "context": "Hội thoại 2: Thời gian xem", "speaker": "A", "de": "Wann guckst du immer?", "vi": "Bạn thường xem lúc nào?" },
      { "id": "c4", "context": "Hội thoại 2: Thời gian xem", "speaker": "B", "de": "Meistens am Sonntagabend um 20 Uhr.", "vi": "Thường là vào tối Chủ Nhật lúc 8 giờ tối." },
      { "id": "c5", "context": "Hội thoại 3: Xem cùng ai", "speaker": "A", "de": "Und wo guckst du fern?", "vi": "Và bạn xem ở đâu?" },
      { "id": "c6", "context": "Hội thoại 3: Xem cùng ai", "speaker": "B", "de": "Entweder zu Hause allein oder mit Freunden.", "vi": "Hoặc là ở nhà một mình hoặc cùng với bạn bè." },
      { "id": "c7", "context": "Hội thoại 4: Chất lượng phim", "speaker": "A", "de": "Wie findest du die Schauspieler?", "vi": "Bạn thấy các diễn viên diễn thế nào?" },
      { "id": "c8", "context": "Hội thoại 4: Chất lượng phim", "speaker": "B", "de": "Sie spielen toll und die Dialoge sind interessant.", "vi": "Họ diễn xuất tuyệt vời và lời thoại rất thú vị." }
    ]
  },
  "l16": {
    "words": [
      { "id": "w1", "de": "Einzelzimmer", "vi": "Phòng đơn", "ipa": "/ˈaɪ̯nt͡səlˌt͡sɪmɐ/", "syllables": ["Ein", "zel", "zim", "mer"], "notation": [80, 40, 60, 40] },
      { "id": "w2", "de": "Doppelzimmer", "vi": "Phòng đôi", "ipa": "/ˈdɔpəlˌt͡sɪmɐ/", "syllables": ["Dop", "pel", "zim", "mer"], "notation": [80, 40, 60, 40] },
      { "id": "w3", "de": "Rezeption", "vi": "Lễ tân", "ipa": "/ʁet͡sɛpˈt͡sjoːn/", "syllables": ["Re", "zep", "ti", "on"], "notation": [40, 40, 80, 40] },
      { "id": "w4", "de": "buchen", "vi": "Đặt phòng/vé", "ipa": "/ˈbuːxən/", "syllables": ["bu", "chen"], "notation": [80, 40] },
      { "id": "w5", "de": "Frühstück", "vi": "Bữa sáng", "ipa": "/ˈfʁyːˌʃtʏk/", "syllables": ["Früh", "stück"], "notation": [80, 60] },
      { "id": "w6", "de": "Schlüssel", "vi": "Chìa khóa", "ipa": "/ˈʃlʏsəl/", "syllables": ["Schlüs", "sel"], "notation": [80, 40] },
      { "id": "w7", "de": "Aufzug", "vi": "Thang máy", "ipa": "/ˈaʊ̯fˌt͡suːk/", "syllables": ["Auf", "zug"], "notation": [80, 60] },
      { "id": "w8", "de": "Schwimmbad", "vi": "Hồ bơi", "ipa": "/ˈʃvɪmˌbaːt/", "syllables": ["Schwimm", "bad"], "notation": [80, 60] },
      { "id": "w9", "de": "reservieren", "vi": "Đặt trước", "ipa": "/ʁezɛʁˈviːʁən/", "syllables": ["re", "ser", "vie", "ren"], "notation": [40, 40, 80, 40] },
      { "id": "w10", "de": "gegenüber", "vi": "Đối diện", "ipa": "/ɡeːɡn̩ˈʔyːbɐ/", "syllables": ["ge", "gen", "ü", "ber"], "notation": [40, 40, 80, 40] },
      { "id": "w11", "de": "Aufenthalt", "vi": "Sự lưu trú", "ipa": "/ˈaʊ̯fɛntˌhalt/", "syllables": ["Auf", "ent", "halt"], "notation": [80, 40, 60] },
      { "id": "w12", "de": "Halbpension", "vi": "Bán thời gian (ăn 2 bữa)", "ipa": "/ˈhalpbɑ̃ˌzjoːn/", "syllables": ["Halb", "pen", "si", "on"], "notation": [80, 40, 80, 40] }
    ],
    "sentences": [
      { "id": "s1", "de": "Haben Sie noch ein Zimmer frei?", "vi": "Bạn còn phòng trống không?", "ipa": "/ˈhaːbən ziː nɔx aɪ̯n ˈt͡sɪmɐ fʁaɪ̯/", "syllables": ["Ha", "ben", "Sie", "noch", "ein", "Zim", "mer", "frei?"], "notation": [80, 40, 40, 60, 40, 80, 40, 60] },
      { "id": "s2", "de": "Ich möchte ein Doppelzimmer buchen.", "vi": "Tôi muốn đặt một phòng đôi.", "ipa": "/ɪç ˈmœçtə aɪ̯n ˈdɔpəlˌt͡sɪmɐ ˈbuːxən/", "syllables": ["Ich", "möch", "te", "ein", "Dop", "pel", "zim", "mer", "bu", "chen."], "notation": [40, 80, 40, 40, 80, 40, 60, 40, 80, 40] },
      { "id": "s3", "de": "Wann gibt es Frühstück?", "vi": "Khi nào thì có bữa sáng?", "ipa": "/van ɡiːpt ɛs ˈfʁyːˌʃtʏk/", "syllables": ["Wann", "gibt", "es", "Früh", "stück?"], "notation": [60, 80, 40, 80, 60] },
      { "id": "s4", "de": "Wo ist der Frühstücksraum?", "vi": "Phòng ăn sáng ở đâu?", "ipa": "/voː ɪst deːɐ̯ ˈfʁyːʃtʏksˌʁaʊ̯m/", "syllables": ["Wo", "ist", "der", "Früh", "stücks", "raum?"], "notation": [60, 40, 40, 80, 60, 40] },
      { "id": "s5", "de": "Gehen Sie hier durch die Tür.", "vi": "Mời bạn đi qua cánh cửa này.", "ipa": "/ˈɡeːən ziː hiːɐ̯ dʊʁç diː tyːɐ̯/", "syllables": ["Ge", "hen", "Sie", "hier", "durch", "die", "Tür."], "notation": [80, 40, 40, 60, 40, 40, 80] },
      { "id": "s6", "de": "Die Sauna ist gegenüber.", "vi": "Phòng xông hơi ở đối diện.", "ipa": "/diː ˈzaʊ̯na ɪst ɡeːɡn̩ˈʔyːbɐ/", "syllables": ["Die", "Sau", "na", "ist", "ge", "gen", "ü", "ber."], "notation": [40, 80, 40, 40, 40, 40, 80, 40] },
      { "id": "s7", "de": "Wie lange möchten Sie bleiben?", "vi": "Bạn muốn ở lại bao lâu?", "ipa": "/viː ˈlaŋə ˈmœçtən ziː ˈblaɪ̯bən/", "syllables": ["Wie", "lan", "ge", "möch", "ten", "Sie", "blei", "ben?"], "notation": [60, 80, 40, 80, 40, 40, 80, 40] },
      { "id": "s8", "de": "Ich wünsche einen angenehmen Aufenthalt.", "vi": "Chúc bạn một kỳ nghỉ vui vẻ.", "ipa": "/ɪç ˈvʏnʃə ˈaɪ̯nən ˈanɡəˌneːmən ˈaʊ̯fɛntˌhalt/", "syllables": ["Ich", "wün", "sche", "ei", "nen", "an", "ge", "neh", "men", "Auf", "ent", "halt."], "notation": [40, 80, 40, 40, 40, 80, 40, 60, 40, 80, 40, 60] },
      { "id": "s9", "de": "Das Zimmer kostet hundert Euro.", "vi": "Căn phòng có giá 100 Euro.", "ipa": "/das ˈt͡sɪmɐ ˈkɔstət ˈhʊndɐt ˈɔɪ̯ʁo/", "syllables": ["Das", "Zim", "mer", "kos", "tet", "hun", "dert", "Eu", "ro."], "notation": [40, 80, 40, 80, 40, 80, 40, 80, 40] },
      { "id": "s10", "de": "Wie funktioniert der Fernseher?", "vi": "TV hoạt động như thế nào?", "ipa": "/viː fʊŋkt͡sjoˈniːɐ̯t deːɐ̯ ˈfɛʁnˌzeːɐ/", "syllables": ["Wie", "funk", "tio", "niert", "der", "Fern", "se", "her?"], "notation": [60, 40, 40, 80, 40, 80, 40, 40] }
    ],
    "conversations": [
      { "id": "c1", "context": "Hội thoại 1: Đặt phòng", "speaker": "A", "de": "Guten Tag, kann ich Ihnen helfen?", "vi": "Xin chào, tôi có thể giúp gì cho ngài?" },
      { "id": "c2", "context": "Hội thoại 1: Đặt phòng", "speaker": "B", "de": "Ja, haben Sie noch ein Zimmer frei?", "vi": "Vâng, bạn còn phòng trống không?" },
      { "id": "c3", "context": "Hội thoại 2: Loại phòng", "speaker": "A", "de": "Möchten Sie ein Einzel- oder ein Doppelzimmer?", "vi": "Ngài muốn phòng đơn hay phòng đôi?" },
      { "id": "c4", "context": "Hội thoại 2: Loại phòng", "speaker": "B", "de": "Ein Doppelzimmer für zwei Nächte, bitte.", "vi": "Một phòng đôi trong 2 đêm, xin cảm ơn." },
      { "id": "c5", "context": "Hội thoại 3: Dịch vụ ăn uống", "speaker": "A", "de": "Mit Frühstück oder Halbpension?", "vi": "Bao gồm bữa sáng hay ăn nửa buổi?" },
      { "id": "c6", "context": "Hội thoại 3: Dịch vụ ăn uống", "speaker": "B", "de": "Nur Frühstück, bitte.", "vi": "Chỉ bữa sáng thôi, cảm ơn." },
      { "id": "c7", "context": "Hội thoại 4: Giao chìa khóa", "speaker": "A", "de": "Hier ist Ihr Schlüssel. Ich wünsche einen angenehmen Aufenthalt.", "vi": "Đây là chìa khóa của ngài. Chúc ngài một kì nghỉ vui vẻ." },
      { "id": "c8", "context": "Hội thoại 4: Giao chìa khóa", "speaker": "B", "de": "Vielen Dank!", "vi": "Cảm ơn rất nhiều!" }
    ]
  },
  "l17": {
    "words": [
      { "id": "w1", "de": "Urlaub", "vi": "Kỳ nghỉ", "ipa": "/ˈuːɐ̯ˌlaʊ̯p/", "syllables": ["Ur", "laub"], "notation": [80, 40] },
      { "id": "w2", "de": "Motorrad", "vi": "Xe máy", "ipa": "/moˈtoːʁaːt/", "syllables": ["Mo", "tor", "rad"], "notation": [40, 80, 40] },
      { "id": "w3", "de": "Flugzeug", "vi": "Máy bay", "ipa": "/ˈfluːkˌt͡sɔɪ̯k/", "syllables": ["Flug", "zeug"], "notation": [80, 60] },
      { "id": "w4", "de": "Autobahn", "vi": "Đường cao tốc", "ipa": "/ˈaʊ̯toˌbaːn/", "syllables": ["Au", "to", "bahn"], "notation": [80, 40, 60] },
      { "id": "w5", "de": "Grenze", "vi": "Biên giới", "ipa": "/ˈɡʁɛnt͡sə/", "syllables": ["Gren", "ze"], "notation": [80, 40] },
      { "id": "w6", "de": "Gebirge", "vi": "Dãy núi", "ipa": "/ɡəˈbɪʁɡə/", "syllables": ["Ge", "bir", "ge"], "notation": [40, 80, 40] },
      { "id": "w7", "de": "anstrengend", "vi": "Mệt mỏi, vất vả", "ipa": "/ˈanˌʃtʁɛŋənt/", "syllables": ["an", "stren", "gend"], "notation": [80, 60, 40] },
      { "id": "w8", "de": "gefährlich", "vi": "Nguy hiểm", "ipa": "/ɡəˈfɛːɐ̯lɪç/", "syllables": ["ge", "fähr", "lich"], "notation": [40, 80, 40] },
      { "id": "w9", "de": "Fähre", "vi": "Phà", "ipa": "/ˈfɛːʁə/", "syllables": ["Fäh", "re"], "notation": [80, 40] },
      { "id": "w10", "de": "Reifen", "vi": "Lốp xe", "ipa": "/ˈʁaɪ̯fən/", "syllables": ["Rei", "fen"], "notation": [80, 40] },
      { "id": "w11", "de": "Panne", "vi": "Sự cố, hỏng hóc", "ipa": "/ˈpanə/", "syllables": ["Pan", "ne"], "notation": [80, 40] },
      { "id": "w12", "de": "überqueren", "vi": "Băng qua", "ipa": "/yːbɐˈkveːʁən/", "syllables": ["ü", "ber", "que", "ren"], "notation": [40, 40, 80, 40] }
    ],
    "sentences": [
      { "id": "s1", "de": "Wir wollen nach Rumänien.", "vi": "Chúng tôi muốn đến Rumani.", "ipa": "/viːɐ̯ ˈvɔlən nax ʁuˈmɛːni̯ən/", "syllables": ["Wir", "wol", "len", "nach", "Ru", "mä", "ni", "en."], "notation": [40, 80, 40, 40, 40, 80, 40, 40] },
      { "id": "s2", "de": "Wir reisen mit dem Motorrad.", "vi": "Chúng tôi du lịch bằng xe máy.", "ipa": "/viːɐ̯ ˈʁaɪ̯zən mɪt deːm moˈtoːʁaːt/", "syllables": ["Wir", "rei", "sen", "mit", "dem", "Mo", "tor", "rad."], "notation": [40, 80, 40, 40, 40, 40, 80, 40] },
      { "id": "s3", "de": "Wir hatten eine Reifenpanne.", "vi": "Chúng tôi đã bị thủng lốp.", "ipa": "/viːɐ̯ ˈhatən ˈaɪ̯nə ˈʁaɪ̯fənˌpanə/", "syllables": ["Wir", "hat", "ten", "ei", "ne", "Rei", "fen", "pan", "ne."], "notation": [40, 80, 40, 40, 40, 80, 40, 60, 40] },
      { "id": "s4", "de": "Nicht zu glauben!", "vi": "Không thể tin được!", "ipa": "/nɪçt t͡su ˈɡlaʊ̯bən/", "syllables": ["Nicht", "zu", "glau", "ben!"], "notation": [80, 40, 80, 40] },
      { "id": "s5", "de": "Das war sicher anstrengend.", "vi": "Chắc hẳn điều đó rất mệt mỏi.", "ipa": "/das vaːɐ̯ ˈzɪçɐ ˈanˌʃtʁɛŋənt/", "syllables": ["Das", "war", "si", "cher", "an", "stren", "gend."], "notation": [40, 40, 80, 40, 80, 60, 40] },
      { "id": "s6", "de": "Wir fahren ans Schwarze Meer.", "vi": "Chúng tôi đi đến Biển Đen.", "ipa": "/viːɐ̯ ˈfaːʁən ans ˈʃvaʁt͡sə meːɐ̯/", "syllables": ["Wir", "fah", "ren", "ans", "Schwar", "ze", "Meer."], "notation": [40, 80, 40, 40, 80, 40, 80] },
      { "id": "s7", "de": "Ich war auf einer Insel.", "vi": "Tôi đã ở trên một hòn đảo.", "ipa": "/ɪç vaːɐ̯ aʊ̯f ˈaɪ̯nɐ ˈɪnzəl/", "syllables": ["Ich", "war", "auf", "ei", "ner", "In", "sel."], "notation": [40, 60, 40, 40, 40, 80, 40] },
      { "id": "s8", "de": "Ich finde das toll.", "vi": "Tôi thấy điều đó thật tuyệt.", "ipa": "/ɪç ˈfɪndə das tɔl/", "syllables": ["Ich", "fin", "de", "das", "toll."], "notation": [40, 80, 40, 40, 80] },
      { "id": "s9", "de": "Das ist wirklich ärgerlich!", "vi": "Thật là đáng tức giận!", "ipa": "/das ɪst ˈvɪʁklɪç ˈɛʁɡɐlɪç/", "syllables": ["Das", "ist", "wirk", "lich", "är", "ger", "lich!"], "notation": [40, 40, 80, 40, 80, 40, 40] },
      { "id": "s10", "de": "Letzten Sommer war ich in Brasilien.", "vi": "Mùa hè năm ngoái tôi đã ở Brasil.", "ipa": "/ˈlɛt͡stən ˈzɔmɐ vaːɐ̯ ɪç ɪn bʁaˈziːli̯ən/", "syllables": ["Letz", "ten", "Som", "mer", "war", "ich", "in", "Bra", "si", "li", "en."], "notation": [80, 40, 80, 40, 40, 40, 40, 40, 80, 40, 40] }
    ],
    "conversations": [
      { "id": "c1", "context": "Hội thoại 1: Đi nghỉ ở đâu", "speaker": "A", "de": "Wo warst du im Urlaub?", "vi": "Bạn đã ở đâu trong kỳ nghỉ?" },
      { "id": "c2", "context": "Hội thoại 1: Đi nghỉ ở đâu", "speaker": "B", "de": "Ich war in den Bergen.", "vi": "Tôi đã ở vùng núi." },
      { "id": "c3", "context": "Hội thoại 2: Phương tiện", "speaker": "A", "de": "Und mit welchem Verkehrsmittel bist du gereist?", "vi": "Và bạn đã đi bằng phương tiện gì?" },
      { "id": "c4", "context": "Hội thoại 2: Phương tiện", "speaker": "B", "de": "Ich bin mit dem Auto gefahren.", "vi": "Tôi đã lái xe ô tô đi." },
      { "id": "c5", "context": "Hội thoại 3: Sự cố", "speaker": "A", "de": "Gab es Probleme auf der Fahrt?", "vi": "Có vấn đề gì trong chuyến đi không?" },
      { "id": "c6", "context": "Hội thoại 3: Sự cố", "speaker": "B", "de": "Ja, leider hatten wir eine Panne.", "vi": "Vâng, rất tiếc chúng tôi đã gặp sự cố trên đường." },
      { "id": "c7", "context": "Hội thoại 4: An ủi", "speaker": "A", "de": "So ein Pech! Das ist wirklich ärgerlich.", "vi": "Thật không may! Thật bực mình." },
      { "id": "c8", "context": "Hội thoại 4: An ủi", "speaker": "B", "de": "Ja, aber danach war der Urlaub super.", "vi": "Vâng, nhưng sau đó kỳ nghỉ rất tuyệt." }
    ]
  },
  "l18": {
    "words": [
      { "id": "w1", "de": "Wetter", "vi": "Thời tiết", "ipa": "/ˈvɛtɐ/", "syllables": ["Wet", "ter"], "notation": [80, 40] },
      { "id": "w2", "de": "Sonne", "vi": "Mặt trời", "ipa": "/ˈzɔnə/", "syllables": ["Son", "ne"], "notation": [80, 40] },
      { "id": "w3", "de": "Regen", "vi": "Mưa", "ipa": "/ˈʁeːɡən/", "syllables": ["Re", "gen"], "notation": [80, 40] },
      { "id": "w4", "de": "Schnee", "vi": "Tuyết", "ipa": "/ʃneː/", "syllables": ["Schnee"], "notation": [80] },
      { "id": "w5", "de": "Wind", "vi": "Gió", "ipa": "/vɪnt/", "syllables": ["Wind"], "notation": [80] },
      { "id": "w6", "de": "Hitze", "vi": "Sức nóng, nóng nực", "ipa": "/ˈhɪt͡sə/", "syllables": ["Hit", "ze"], "notation": [80, 40] },
      { "id": "w7", "de": "Kälte", "vi": "Cái lạnh", "ipa": "/ˈkɛltə/", "syllables": ["Käl", "te"], "notation": [80, 40] },
      { "id": "w8", "de": "kalt", "vi": "Lạnh", "ipa": "/kalt/", "syllables": ["kalt"], "notation": [80] },
      { "id": "w9", "de": "warm", "vi": "Ấm áp", "ipa": "/vaʁm/", "syllables": ["warm"], "notation": [80] },
      { "id": "w10", "de": "regnen", "vi": "Trời mưa", "ipa": "/ˈʁeːɡnən/", "syllables": ["reg", "nen"], "notation": [80, 40] },
      { "id": "w11", "de": "schneien", "vi": "Tuyết rơi", "ipa": "/ˈʃnaɪ̯ən/", "syllables": ["schnei", "en"], "notation": [80, 40] },
      { "id": "w12", "de": "Gewitter", "vi": "Sấm sét, dông bão", "ipa": "/ɡəˈvɪtɐ/", "syllables": ["Ge", "wit", "ter"], "notation": [40, 80, 40] }
    ],
    "sentences": [
      { "id": "s1", "de": "Wie ist das Wetter heute?", "vi": "Thời tiết hôm nay thế nào?", "ipa": "/viː ɪst das ˈvɛtɐ ˈhɔɪ̯tə/", "syllables": ["Wie", "ist", "das", "Wet", "ter", "heu", "te?"], "notation": [60, 40, 40, 80, 40, 80, 40] },
      { "id": "s2", "de": "Es regnet und es ist ziemlich kalt.", "vi": "Trời mưa và khá lạnh.", "ipa": "/ɛs ˈʁeːɡnət ʊnt ɛs ɪst ˈt͡siːmlɪç kalt/", "syllables": ["Es", "reg", "net", "und", "es", "ist", "ziem", "lich", "kalt."], "notation": [40, 80, 40, 40, 40, 40, 80, 40, 80] },
      { "id": "s3", "de": "Ich freue mich auf Sonne und Wärme.", "vi": "Tôi mong ngóng mặt trời và sự ấm áp.", "ipa": "/ɪç ˈfʁɔɪ̯ə mɪç aʊ̯f ˈzɔnə ʊnt ˈvɛʁmə/", "syllables": ["Ich", "freu", "e", "mich", "auf", "Son", "ne", "und", "Wär", "me."], "notation": [40, 80, 40, 40, 40, 80, 40, 40, 80, 40] },
      { "id": "s4", "de": "Im Sommer scheint oft die Sonne.", "vi": "Vào mùa hè mặt trời thường chiếu sáng.", "ipa": "/ɪm ˈzɔmɐ ʃaɪ̯nt ɔft diː ˈzɔnə/", "syllables": ["Im", "Som", "mer", "scheint", "oft", "die", "Son", "ne."], "notation": [40, 80, 40, 80, 60, 40, 80, 40] },
      { "id": "s5", "de": "Im Winter gibt es oft Schnee.", "vi": "Vùng mùa đông thường có tuyết.", "ipa": "/ɪm ˈvɪntɐ ɡiːpt ɛs ɔft ʃneː/", "syllables": ["Im", "Win", "ter", "gibt", "es", "oft", "Schnee."], "notation": [40, 80, 40, 60, 40, 60, 80] },
      { "id": "s6", "de": "Die Temperaturen sind heute niedrig.", "vi": "Nhiệt độ hôm nay khá thấp.", "ipa": "/diː tɛmpəʁaˈtuːʁən zɪnt ˈhɔɪ̯tə ˈniːdʁɪç/", "syllables": ["Die", "Tem", "pe", "ra", "tu", "ren", "sind", "heu", "te", "nied", "rig."], "notation": [40, 40, 40, 40, 80, 40, 40, 80, 40, 80, 40] },
      { "id": "s7", "de": "Es ist stürmisch an der Küste.", "vi": "Có bão ở vùng bờ biển.", "ipa": "/ɛs ɪst ˈʃtʏʁmɪʃ an deːɐ̯ ˈkʏstə/", "syllables": ["Es", "ist", "stür", "misch", "an", "der", "Küs", "te."], "notation": [40, 40, 80, 40, 40, 40, 80, 40] },
      { "id": "s8", "de": "Ich ärgere mich über das Wetter.", "vi": "Tôi thấy bực mình vì thời tiết (xấu).", "ipa": "/ɪç ˈɛʁɡəʁə mɪç ˈyːbɐ das ˈvɛtɐ/", "syllables": ["Ich", "är", "ge", "re", "mich", "ü", "ber", "das", "Wet", "ter."], "notation": [40, 80, 40, 40, 40, 80, 40, 40, 80, 40] },
      { "id": "s9", "de": "Bist du mit dem Wetter zufrieden?", "vi": "Bạn có hài lòng với thời tiết không?", "ipa": "/bɪst duː mɪt deːm ˈvɛtɐ t͡suˈfʁiːdən/", "syllables": ["Bist", "du", "mit", "dem", "Wet", "ter", "zu", "frie", "den?"], "notation": [60, 40, 40, 40, 80, 40, 40, 80, 40] },
      { "id": "s10", "de": "Im Herbst gibt es Niederschläge.", "vi": "Mùa thu thường có lượng giáng thủy (mưa/tuyết...).", "ipa": "/ɪm ˈhɛʁpst ɡiːpt ɛs ˈniːdɐˌʃlɛːɡə/", "syllables": ["Im", "Herbst", "gibt", "es", "Nie", "der", "schlä", "ge."], "notation": [40, 80, 60, 40, 80, 40, 60, 40] }
    ],
    "conversations": [
      { "id": "c1", "context": "Hội thoại 1: Thời tiết ở vùng miền", "speaker": "A", "de": "Wie ist das Wetter in Deutschland?", "vi": "Thời tiết ở Đức như thế nào?" },
      { "id": "c2", "context": "Hội thoại 1: Thời tiết ở vùng miền", "speaker": "B", "de": "Es ist meistens kalt und es regnet oft.", "vi": "Thường thì trời lạnh và hay có mưa." },
      { "id": "c3", "context": "Hội thoại 2: Sở thích cá nhân", "speaker": "A", "de": "Worauf freust du dich?", "vi": "Bạn đang mong đợi điều gì?" },
      { "id": "c4", "context": "Hội thoại 2: Sở thích cá nhân", "speaker": "B", "de": "Ich freue mich auf den Sommer.", "vi": "Tôi mong chờ mùa hè đến." },
      { "id": "c5", "context": "Hội thoại 3: Lý do", "speaker": "A", "de": "Warum?", "vi": "Tại sao vậy?" },
      { "id": "c6", "context": "Hội thoại 3: Lý do", "speaker": "B", "de": "Weil es dann wärmer ist und die Sonne scheint.", "vi": "Vì lúc đó trời ấm hơn và có nắng." },
      { "id": "c7", "context": "Hội thoại 4: Thời tiết hôm nay", "speaker": "A", "de": "Und wie ist es heute?", "vi": "Và hôm nay thời tiết sao?" },
      { "id": "c8", "context": "Hội thoại 4: Thời tiết hôm nay", "speaker": "B", "de": "Heute gibt es leider ein Gewitter.", "vi": "Hôm nay rất tiếc là có giông bão." }
    ]
  },
  "l19": {
    "words": [
      { "id": "w1", "de": "Konzert", "vi": "Buổi hòa nhạc", "ipa": "/kɔnˈtsɛʁt/", "syllables": ["Kon", "zert"], "notation": [40, 80] },
      { "id": "w2", "de": "Kino", "vi": "Rạp phim", "ipa": "/ˈkiːno/", "syllables": ["Ki", "no"], "notation": [80, 40] },
      { "id": "w3", "de": "Ausstellung", "vi": "Buổi triển lãm", "ipa": "/ˈaʊ̯sˌʃtɛlʊŋ/", "syllables": ["Aus", "stel", "lung"], "notation": [80, 60, 40] },
      { "id": "w4", "de": "Theater", "vi": "Nhà hát", "ipa": "/teˈaːtɐ/", "syllables": ["The", "a", "ter"], "notation": [40, 80, 40] },
      { "id": "w5", "de": "Bühne", "vi": "Sân khấu", "ipa": "/ˈbyːnə/", "syllables": ["Büh", "ne"], "notation": [80, 40] },
      { "id": "w6", "de": "Publikum", "vi": "Khán giả", "ipa": "/ˈpuːblikʊm/", "syllables": ["Pub", "li", "kum"], "notation": [80, 40, 40] },
      { "id": "w7", "de": "romantisch", "vi": "Lãng mạn", "ipa": "/ʁoˈmantɪʃ/", "syllables": ["ro", "man", "tisch"], "notation": [40, 80, 40] },
      { "id": "w8", "de": "ausgezeichnet", "vi": "Xuất sắc", "ipa": "/ˈaʊ̯sɡəˌt͡saɪ̯çnət/", "syllables": ["aus", "ge", "zeich", "net"], "notation": [80, 40, 60, 40] },
      { "id": "w9", "de": "überragend", "vi": "Vượt trội", "ipa": "/yːbɐˈʁaːɡn̩t/", "syllables": ["ü", "ber", "ra", "gend"], "notation": [40, 40, 80, 40] },
      { "id": "w10", "de": "Veranstaltung", "vi": "Sự kiện", "ipa": "/fɛɐ̯ˈʔanˌʃtaltʊŋ/", "syllables": ["Ver", "an", "stal", "tung"], "notation": [40, 80, 60, 40] }
    ],
    "sentences": [
      { "id": "s1", "de": "Gehen wir heute Abend ins Kino?", "vi": "Tối nay chúng ta đi xem phim không?", "ipa": "/ˈɡeːən viːɐ̯ ˈhɔɪ̯tə ˈaːbənt ɪns ˈkiːno/", "syllables": ["Ge", "hen", "wir", "heu", "te", "A", "bend", "ins", "Ki", "no?"], "notation": [80, 40, 40, 80, 40, 80, 40, 40, 80, 40] },
      { "id": "s2", "de": "Das Konzert war sensationell.", "vi": "Buổi hòa nhạc thật chấn động.", "ipa": "/das kɔnˈt͡sɛʁt vaːɐ̯ zɛnzat͡sioˈnɛl/", "syllables": ["Das", "Kon", "zert", "war", "sen", "sa", "ti", "o", "nell."], "notation": [40, 40, 80, 40, 40, 40, 40, 40, 80] },
      { "id": "s3", "de": "Hast du Lust auf Theater?", "vi": "Bạn có hứng thú với nhà hát không?", "ipa": "/hast duː lʊst aʊ̯f teˈaːtɐ/", "syllables": ["Hast", "du", "Lust", "auf", "The", "a", "ter?"], "notation": [60, 40, 80, 40, 40, 80, 40] },
      { "id": "s4", "de": "Die Ausstellung hat mir sehr gut gefallen.", "vi": "Tôi rất thích buổi triển lãm.", "ipa": "/diː ˈaʊ̯sˌʃtɛlʊŋ hat miːɐ̯ zeːɐ̯ ɡuːt ɡəˈfalən/", "syllables": ["Die", "Aus", "stel", "lung", "hat", "mir", "sehr", "gut", "ge", "fal", "len."], "notation": [40, 80, 60, 40, 40, 40, 60, 80, 40, 80, 40] },
      { "id": "s5", "de": "Ich war schon lange nicht mehr auf einem Konzert.", "vi": "Đã lâu rồi tôi không đi xem hòa nhạc.", "ipa": "/ɪç vaːɐ̯ ʃoːn ˈlaŋə nɪçt meːɐ̯ aʊ̯f ˈaɪ̯nəm kɔnˈt͡sɛʁt/", "syllables": ["Ich", "war", "schon", "lan", "ge", "nicht", "mehr", "auf", "ei", "nem", "Kon", "zert."], "notation": [40, 40, 40, 80, 40, 80, 40, 40, 40, 40, 40, 80] }
    ],
    "conversations": [
      { "id": "c1", "context": "Hội thoại: Rủ đi chơi", "speaker": "A", "de": "Hast du am Wochenende schon etwas vor?", "vi": "Cuối tuần bạn đã có dự định gì chưa?" },
      { "id": "c2", "context": "Hội thoại: Rủ đi chơi", "speaker": "B", "de": "Nein, noch nichts. Was wollen wir machen?", "vi": "Chưa, chưa có gì. Chúng ta muốn làm gì?" },
      { "id": "c3", "context": "Hội thoại: Đề xuất điểm đến", "speaker": "A", "de": "Sollen wir ins Konzert oder ins Kino gehen?", "vi": "Chúng ta nên đi hòa nhạc hay xem phim?" },
      { "id": "c4", "context": "Hội thoại: Đề xuất điểm đến", "speaker": "B", "de": "Ein Konzert wäre toll. Ich liebe Live-Musik.", "vi": "Hòa nhạc thì tuyệt. Tôi rất thích nhạc sống." }
    ]
  },
  "l20": {
    "words": [
      { "id": "w1", "de": "Märchen", "vi": "Truyện cổ tích", "ipa": "/ˈmɛːɐ̯çən/", "syllables": ["Mär", "chen"], "notation": [80, 40] },
      { "id": "w2", "de": "Comic", "vi": "Truyện tranh", "ipa": "/ˈkɔmɪk/", "syllables": ["Co", "mic"], "notation": [80, 40] },
      { "id": "w3", "de": "Ratgeber", "vi": "Sách hướng dẫn/tư vấn", "ipa": "/ˈʁaːtˌɡeːbɐ/", "syllables": ["Rat", "ge", "ber"], "notation": [80, 40, 40] },
      { "id": "w4", "de": "Gedicht", "vi": "Bài thơ", "ipa": "/ɡəˈdɪçt/", "syllables": ["Ge", "dicht"], "notation": [40, 80] },
      { "id": "w5", "de": "beeilen", "vi": "Nhanh chóng, khẩn trương", "ipa": "/bəˈʔaɪ̯lən/", "syllables": ["be", "ei", "len"], "notation": [40, 80, 40] },
      { "id": "w6", "de": "vorlesen", "vi": "Đọc to (cho ai nghe)", "ipa": "/ˈfoːɐ̯ˌleːzən/", "syllables": ["vor", "le", "sen"], "notation": [80, 40, 40] },
      { "id": "w7", "de": "Zeitung", "vi": "Báo", "ipa": "/ˈt͡saɪ̯tʊŋ/", "syllables": ["Zei", "tung"], "notation": [80, 40] },
      { "id": "w8", "de": "Sachbuch", "vi": "Sách chuyên ngành/phi hư cấu", "ipa": "/ˈzaxˌbuːx/", "syllables": ["Sach", "buch"], "notation": [80, 60] }
    ],
    "sentences": [
      { "id": "s1", "de": "Ich lese am liebsten Krimis und Thriller.", "vi": "Tôi thích đọc truyện trinh thám và giật gân nhất.", "ipa": "/ɪç ˈleːzə am ˈliːpstən ˈkʁiːmɪs ʊnt ˈθʁɪlɐ/", "syllables": ["Ich", "le", "se", "am", "liebs", "ten", "Kri", "mis", "und", "Thril", "ler."], "notation": [40, 80, 40, 40, 80, 40, 80, 40, 40, 80, 40] },
      { "id": "s2", "de": "Frauen lesen mehr Romane als Männer.", "vi": "Phụ nữ đọc nhiều tiểu thuyết hơn nam giới.", "ipa": "/ˈfʁaʊ̯ən ˈleːzən meːɐ̯ ʁoˈmaːnə als ˈmɛnɐ/", "syllables": ["Frau", "en", "le", "sen", "mehr", "Ro", "ma", "ne", "als", "Män", "ner."], "notation": [80, 40, 80, 40, 60, 40, 80, 40, 60, 80, 40] },
      { "id": "s3", "de": "Er liest jeden Morgen die Zeitung.", "vi": "Sáng nào anh ấy cũng đọc báo.", "ipa": "/eːɐ̯ liːst ˈjeːdən ˈmɔʁɡən diː ˈt͡saɪ̯tʊŋ/", "syllables": ["Er", "liest", "je", "den", "Mor", "gen", "die", "Zei", "tung."], "notation": [40, 80, 80, 40, 80, 40, 40, 80, 40] },
      { "id": "s4", "de": "Kinder lieben Märchen.", "vi": "Trẻ em yêu thích truyện cổ tích.", "ipa": "/ˈkɪndɐ ˈliːbən ˈmɛːɐ̯çən/", "syllables": ["Kin", "der", "lie", "ben", "Mär", "chen."], "notation": [80, 40, 80, 40, 80, 40] }
    ],
    "conversations": [
      { "id": "c1", "context": "Hội thoại: Thói quen đọc sách", "speaker": "A", "de": "Liest du gern?", "vi": "Bạn có thích đọc không?" },
      { "id": "c2", "context": "Hội thoại: Thói quen đọc sách", "speaker": "B", "de": "Ja, ich lese sehr gern. Am liebsten lese ich Sachbücher.", "vi": "Có, tôi rất thích đọc. Tôi thích đọc sách phi hư cấu nhất." },
      { "id": "c3", "context": "Hội thoại: Nơi đọc sách", "speaker": "A", "de": "Und wo liest du meistens?", "vi": "Và bạn thường đọc ở đâu nhất?" },
      { "id": "c4", "context": "Hội thoại: Nơi đọc sách", "speaker": "B", "de": "Meistens im Bett, bevor ich einschlafe.", "vi": "Thường là ở trên giường, trước khi tôi ngủ." }
    ]
  },
  "l21": {
    "words": [
      {
        "id": "w1",
        "de": "Einbruch",
        "vi": "Vụ trộm đột nhập",
        "ipa": "/ˈaɪ̯nbʁʊx/",
        "syllables": [
          "Ein",
          "bruch"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w2",
        "de": "Täter",
        "vi": "Thủ phạm",
        "ipa": "/ˈtɛːtɐ/",
        "syllables": [
          "Tä",
          "ter"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w3",
        "de": "stehlen",
        "vi": "Ăn cắp",
        "ipa": "/ˈʃteːlən/",
        "syllables": [
          "steh",
          "len"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w4",
        "de": "bemerken",
        "vi": "Nhận thấy",
        "ipa": "/bəˈmɛʁkən/",
        "syllables": [
          "be",
          "mer",
          "ken"
        ],
        "notation": [
          40,
          80,
          40
        ]
      },
      {
        "id": "w5",
        "de": "sperren",
        "vi": "Khóa (thẻ)",
        "ipa": "/ˈʃpɛʁən/",
        "syllables": [
          "sper",
          "ren"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w6",
        "de": "Aussage",
        "vi": "Lời khai",
        "ipa": "/ˈaʊ̯sˌzaːɡə/",
        "syllables": [
          "Aus",
          "sa",
          "ge"
        ],
        "notation": [
          80,
          60,
          40
        ]
      },
      {
        "id": "w7",
        "de": "Geldbörse",
        "vi": "Ví tiền",
        "ipa": "/ˈɡɛltˌbœʁzə/",
        "syllables": [
          "Geld",
          "bör",
          "se"
        ],
        "notation": [
          80,
          60,
          40
        ]
      },
      {
        "id": "w8",
        "de": "Ausweis",
        "vi": "Giấy tờ tùy thân",
        "ipa": "/ˈaʊ̯svaɪ̯s/",
        "syllables": [
          "Aus",
          "weis"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w9",
        "de": "Führerschein",
        "vi": "Bằng lái xe",
        "ipa": "/ˈfyːʁɐˌʃaɪ̯n/",
        "syllables": [
          "Füh",
          "rer",
          "schein"
        ],
        "notation": [
          80,
          40,
          60
        ]
      },
      {
        "id": "w10",
        "de": "dunkel",
        "vi": "Tối màu",
        "ipa": "/ˈdʊŋkəl/",
        "syllables": [
          "dun",
          "kel"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w11",
        "de": "reparieren",
        "vi": "Sửa chữa",
        "ipa": "/ʁepaˈʁiːʁən/",
        "syllables": [
          "re",
          "pa",
          "rie",
          "ren"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w12",
        "de": "Werkstatt",
        "vi": "Xưởng sửa chữa",
        "ipa": "/ˈvɛʁkˌʃtat/",
        "syllables": [
          "Werk",
          "statt"
        ],
        "notation": [
          80,
          60
        ]
      },
      { "id": "nw1", "de": "das Dokument", "vi": "Tài liệu" },
      { "id": "nw2", "de": "der Ausweis", "vi": "Giấy tờ tùy thân" },
      { "id": "nw3", "de": "Bargeld", "vi": "Tiền mặt" },
      { "id": "nw4", "de": "die EC-Karte", "vi": "Thẻ ngân hàng" },
      { "id": "nw5", "de": "die Telefonkarte", "vi": "Thẻ điện thoại" },
      { "id": "nw6", "de": "die Gesundheitskarte", "vi": "Thẻ bảo hiểm y tế" },
      { "id": "nw7", "de": "der Einbruch", "vi": "Vụ đột nhập/trộm" },
      { "id": "nw8", "de": "die Feuerwehr", "vi": "Đội cứu hỏa" },
      { "id": "nw9", "de": "der Polizist", "vi": "Cảnh sát (nam)" },
      { "id": "nw10", "de": "die Polizistin", "vi": "Cảnh sát (nữ)" },
      { "id": "nw11", "de": "das Schloss", "vi": "Ổ khóa" },
      { "id": "nw12", "de": "der Täter", "vi": "Thủ phạm" },
      { "id": "nw13", "de": "die Versicherung", "vi": "Bảo hiểm" },
      { "id": "nw14", "de": "der Zeuge", "vi": "Nhân chứng" },
      { "id": "nw15", "de": "die Glühbirne", "vi": "Bóng đèn" },
      { "id": "nw16", "de": "der Hammer", "vi": "Cái búa" },
      { "id": "nw17", "de": "die Liste", "vi": "Danh sách" },
      { "id": "nw18", "de": "der Strom", "vi": "Điện" },
      { "id": "nw19", "de": "der Titel", "vi": "Tiêu đề" },
      { "id": "nw20", "de": "stehen", "vi": "Đứng" },
      { "id": "nw21", "de": "stehlen", "vi": "Ăn cắp" },
      { "id": "nw22", "de": "ändern", "vi": "Thay đổi" },
      { "id": "nw23", "de": "brennen", "vi": "Cháy" },
      { "id": "nw24", "de": "lassen", "vi": "Để, làm, nhờ" },
      { "id": "nw25", "de": "nähen", "vi": "Khâu, may" },
      { "id": "nw26", "de": "reinigen", "vi": "Làm sạch, dọn dẹp" },
      { "id": "nw27", "de": "schneiden", "vi": "Cắt" },
      { "id": "nw28", "de": "waschen", "vi": "Rửa, giặt" },
      { "id": "nw29", "de": "abschließen", "vi": "Khóa lại" },
      { "id": "nw30", "de": "absperren", "vi": "Phong tỏa" },
      { "id": "nw31", "de": "anfassen", "vi": "Chạm vào" },
      { "id": "nw32", "de": "angreifen", "vi": "Tấn công" },
      { "id": "nw33", "de": "sichern", "vi": "Bảo vệ, đảm bảo" },
      { "id": "nw34", "de": "ängstlich", "vi": "Sợ hãi" },
      { "id": "nw35", "de": "schmal", "vi": "Hẹp, nhỏ" },
      { "id": "nw36", "de": "welcher", "vi": "Nào, cái nào" },
      { "id": "nw37", "de": "dieser", "vi": "Này, người này" }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Es gab einen Einbruch in mein Auto.",
        "vi": "Có một vụ trộm đột nhập vào xe tôi.",
        "ipa": "/ɛs ɡaːp ˈaɪ̯nən ˈaɪ̯nbʁʊx ɪn maɪ̯n ˈaʊ̯to/",
        "syllables": [
          "Es",
          "gab",
          "einen",
          "Einbruch",
          "in",
          "mein",
          "Auto."
        ],
        "notation": [
          40,
          40,
          40,
          80,
          40,
          40,
          80
        ]
      },
      {
        "id": "s2",
        "de": "Die Polizei sucht den Täter.",
        "vi": "Cảnh sát đang truy tìm thủ phạm.",
        "ipa": "/diː poliˈt͡saɪ̯ zuːxt deːn ˈtɛːtɐ/",
        "syllables": [
          "Die",
          "Polizei",
          "sucht",
          "den",
          "Täter."
        ],
        "notation": [
          40,
          80,
          60,
          40,
          80
        ]
      },
      {
        "id": "s3",
        "de": "Jemand hat meine Tasche gestohlen.",
        "vi": "Ai đó đã lấy trộm túi của tôi.",
        "ipa": "/ˈjeːmant hat ˈmaɪ̯nə ˈtaʃə ɡəˈʃtoːlən/",
        "syllables": [
          "Jemand",
          "hat",
          "meine",
          "Tasche",
          "gestohlen."
        ],
        "notation": [
          80,
          40,
          60,
          80,
          60
        ]
      },
      {
        "id": "s4",
        "de": "Ich habe den Diebstahl sofort bemerkt.",
        "vi": "Tôi đã nhận ra vụ trộm ngay lập tức.",
        "ipa": "/ɪç ˈhaːbə deːn ˈdiːpˌʃtaːl zoˈfɔʁt bəˈmɛʁkt/",
        "syllables": [
          "Ich",
          "habe",
          "den",
          "Diebstahl",
          "sofort",
          "bemerkt."
        ],
        "notation": [
          40,
          60,
          40,
          80,
          60,
          80
        ]
      },
      {
        "id": "s5",
        "de": "Ich muss meine EC-Karte sperren.",
        "vi": "Tôi phải khóa thẻ ngân hàng của mình.",
        "ipa": "/ɪç mʊs ˈmaɪ̯nə eːˈt͡seːˌkaʁtə ˈʃpɛʁən/",
        "syllables": [
          "Ich",
          "muss",
          "meine",
          "EC-Karte",
          "sperren."
        ],
        "notation": [
          40,
          60,
          40,
          80,
          60
        ]
      },
      {
        "id": "s6",
        "de": "Ich muss bei der Polizei eine Aussage machen.",
        "vi": "Tôi phải khai báo với cảnh sát.",
        "ipa": "/ɪç mʊs baɪ̯ deːɐ̯ poliˈt͡saɪ̯ ˈaɪ̯nə ˈaʊ̯sˌzaːɡə ˈmaxən/",
        "syllables": [
          "Ich",
          "muss",
          "bei",
          "der",
          "Polizei",
          "eine",
          "Aussage",
          "machen."
        ],
        "notation": [
          40,
          60,
          40,
          40,
          80,
          40,
          80,
          60
        ]
      },
      {
        "id": "s7",
        "de": "Zeigen Sie mir bitte Ihren Ausweis.",
        "vi": "Vui lòng cho tôi xem giấy tờ tùy thân của bạn.",
        "ipa": "/ˈt͡saɪ̯ɡən ziː miːɐ̯ ˈbɪtə ˈiːʁən ˈaʊ̯svaɪ̯s/",
        "syllables": [
          "Zeigen",
          "Sie",
          "mir",
          "bitte",
          "Ihren",
          "Ausweis."
        ],
        "notation": [
          80,
          40,
          40,
          60,
          40,
          80
        ]
      },
      {
        "id": "s8",
        "de": "Ich habe meinen Führerschein vergessen.",
        "vi": "Tôi đã quên bằng lái xe của mình.",
        "ipa": "/ɪç ˈhaːbə ˈmaɪ̯nən ˈfyːʁɐˌʃaɪ̯n fɛɐ̯ˈɡɛsən/",
        "syllables": [
          "Ich",
          "habe",
          "meinen",
          "Führerschein",
          "vergessen."
        ],
        "notation": [
          40,
          60,
          40,
          80,
          60
        ]
      },
      {
        "id": "s9",
        "de": "Der Täter hat ein schmales Gesicht.",
        "vi": "Thủ phạm có khuôn mặt gầy.",
        "ipa": "/deːɐ̯ ˈtɛːtɐ hat aɪ̯n ˈʃmaːləs ɡəˈzɪçt/",
        "syllables": [
          "Der",
          "Täter",
          "hat",
          "ein",
          "schmales",
          "Gesicht."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          60,
          80
        ]
      },
      {
        "id": "s10",
        "de": "Er hat dunkle Haare und Augen.",
        "vi": "Anh ta có tóc và mắt màu tối.",
        "ipa": "/eːɐ̯ hat ˈdʊŋklə ˈhaːʁə ʊnt ˈaʊ̯ɡən/",
        "syllables": [
          "Er",
          "hat",
          "dunkle",
          "Haare",
          "und",
          "Augen."
        ],
        "notation": [
          40,
          40,
          60,
          80,
          40,
          80
        ]
      },
      {
        "id": "s11",
        "de": "Ich lasse mein Handy reparieren.",
        "vi": "Tôi thuê người sửa điện thoại.",
        "ipa": "/ɪç ˈlasə maɪ̯n ˈhɛndi ʁepaˈʁiːʁən/",
        "syllables": [
          "Ich",
          "lasse",
          "mein",
          "Handy",
          "reparieren."
        ],
        "notation": [
          40,
          60,
          40,
          80,
          60
        ]
      },
      {
        "id": "s12",
        "de": "Mein Auto ist in der Werkstatt.",
        "vi": "Xe của tôi đang ở trong xưởng sửa chữa.",
        "ipa": "/maɪ̯n ˈaʊ̯to ɪst ɪn deːɐ̯ ˈvɛʁkˌʃtat/",
        "syllables": [
          "Mein",
          "Auto",
          "ist",
          "in",
          "der",
          "Werkstatt."
        ],
        "notation": [
          40,
          80,
          40,
          40,
          40,
          80
        ]
      },
      { "id": "ns1", "de": "Ich habe das Dokument gelesen, weil ich den Vertrag verstehen wollte.", "vi": "Tôi đã đọc tài liệu vì tôi muốn hiểu hợp đồng." },
      { "id": "ns2", "de": "Ich musste meinen Ausweis zeigen, als ich zur Polizei gegangen bin.", "vi": "Tôi đã phải xuất trình giấy tờ khi tôi đến đồn cảnh sát." },
      { "id": "ns3", "de": "Ich hatte kein Bargeld dabei, deshalb konnte ich nichts kaufen.", "vi": "Tôi không có tiền mặt nên không thể mua gì." },
      { "id": "ns4", "de": "Ich habe meine EC-Karte verloren und musste sie sperren lassen.", "vi": "Tôi đã làm mất thẻ ngân hàng và phải khóa nó." },
      { "id": "ns5", "de": "Früher habe ich oft eine Telefonkarte benutzt, wenn ich telefonieren wollte.", "vi": "Trước đây tôi thường dùng thẻ điện thoại khi muốn gọi điện." },
      { "id": "ns6", "de": "Ich musste meine Gesundheitskarte zeigen, als ich beim Arzt war.", "vi": "Tôi phải đưa thẻ bảo hiểm y tế khi đi khám." },
      { "id": "ns7", "de": "Es gab einen Einbruch, während wir im Urlaub waren.", "vi": "Có một vụ trộm khi chúng tôi đi nghỉ." },
      { "id": "ns8", "de": "Die Feuerwehr musste kommen, weil das Haus gebrannt hat.", "vi": "Đội cứu hỏa phải đến vì nhà bị cháy." },
      { "id": "ns9", "de": "Der Polizist hat mir geholfen, nachdem ich den Täter gesehen hatte.", "vi": "Cảnh sát đã giúp tôi sau khi tôi thấy thủ phạm." },
      { "id": "ns10", "de": "Die Polizistin hat alles notiert, was der Zeuge gesagt hat.", "vi": "Nữ cảnh sát đã ghi lại tất cả những gì nhân chứng nói." },
      { "id": "ns11", "de": "Ich konnte die Tür nicht öffnen, weil das Schloss kaputt war.", "vi": "Tôi không mở được cửa vì ổ khóa bị hỏng." },
      { "id": "ns12", "de": "Der Täter ist schnell weggelaufen, bevor die Polizei gekommen ist.", "vi": "Thủ phạm đã chạy đi trước khi cảnh sát đến." },
      { "id": "ns13", "de": "Die Versicherung hat den Schaden bezahlt, nachdem ich angerufen hatte.", "vi": "Bảo hiểm đã trả tiền sau khi tôi gọi." },
      { "id": "ns14", "de": "Ein Zeuge hat gesehen, wie der Täter ins Haus gegangen ist.", "vi": "Một nhân chứng đã thấy thủ phạm vào nhà." },
      { "id": "ns15", "de": "Die Glühbirne ist kaputt, deshalb muss ich sie wechseln.", "vi": "Bóng đèn hỏng nên tôi phải thay." },
      { "id": "ns16", "de": "Ich habe einen Hammer benutzt, um die Tür zu öffnen.", "vi": "Tôi đã dùng búa để mở cửa." },
      { "id": "ns17", "de": "Ich habe eine Liste gemacht, damit ich nichts vergesse.", "vi": "Tôi lập danh sách để không quên gì." },
      { "id": "ns18", "de": "Der Strom war weg, als der Sturm gekommen ist.", "vi": "Mất điện khi cơn bão đến." },
      { "id": "ns19", "de": "Der Titel des Films ist interessant, deshalb möchte ich ihn sehen.", "vi": "Tiêu đề phim thú vị nên tôi muốn xem." },
      { "id": "ns20", "de": "Er stand vor der Tür, als ich nach Hause kam.", "vi": "Anh ấy đứng trước cửa khi tôi về nhà." },
      { "id": "ns21", "de": "Jemand hat mein Fahrrad gestohlen, während ich gearbeitet habe.", "vi": "Ai đó đã lấy xe đạp khi tôi đang làm việc." },
      { "id": "ns22", "de": "Ich habe meine Meinung geändert, nachdem ich alles gehört habe.", "vi": "Tôi đã thay đổi ý kiến sau khi nghe mọi thứ." },
      { "id": "ns23", "de": "Das Haus hat gebrannt, weil jemand vergessen hat, den Herd auszuschalten.", "vi": "Nhà cháy vì ai đó quên tắt bếp." },
      { "id": "ns24", "de": "Ich lasse mein Auto reparieren, weil es kaputt ist.", "vi": "Tôi mang xe đi sửa vì nó bị hỏng." },
      { "id": "ns25", "de": "Meine Mutter hat mir eine Jacke genäht, als ich klein war.", "vi": "Mẹ tôi đã may áo cho tôi khi tôi còn nhỏ." },
      { "id": "ns26", "de": "Ich habe das Zimmer gereinigt, bevor die Gäste gekommen sind.", "vi": "Tôi đã dọn phòng trước khi khách đến." },
      { "id": "ns27", "de": "Ich habe mich geschnitten, als ich Gemüse geschnitten habe.", "vi": "Tôi bị đứt tay khi cắt rau." },
      { "id": "ns28", "de": "Ich habe meine Hände gewaschen, nachdem ich draußen war.", "vi": "Tôi đã rửa tay sau khi ra ngoài." },
      { "id": "ns29", "de": "Ich habe die Tür abgeschlossen, bevor ich gegangen bin.", "vi": "Tôi đã khóa cửa trước khi đi." },
      { "id": "ns30", "de": "Die Polizei hat die Straße abgesperrt, nachdem der Unfall passiert ist.", "vi": "Cảnh sát đã phong tỏa đường sau tai nạn." },
      { "id": "ns31", "de": "Du darfst das nicht anfassen, weil es heiß ist.", "vi": "Bạn không được chạm vào vì nó nóng." },
      { "id": "ns32", "de": "Der Hund hat den Mann angegriffen, als er vorbeiging.", "vi": "Con chó tấn công người đàn ông khi ông đi qua." },
      { "id": "ns33", "de": "Die Polizei hat den Ort gesichert, damit niemand hineingeht.", "vi": "Cảnh sát bảo vệ hiện trường để không ai vào." },
      { "id": "ns34", "de": "Ich war sehr ängstlich, nachdem ich den Einbruch gesehen habe.", "vi": "Tôi rất sợ sau khi thấy vụ trộm." },
      { "id": "ns35", "de": "Die Straße ist so schmal, dass kein Auto fahren kann.", "vi": "Con đường hẹp đến mức không xe nào đi được." },
      { "id": "ns36", "de": "Welcher Film gefällt dir besser, dieser oder der andere?", "vi": "Bạn thích phim nào hơn, phim này hay phim kia?" },
      { "id": "ns37", "de": "Dieser Mann hat mir geholfen, als ich Probleme hatte.", "vi": "Người đàn ông này đã giúp tôi khi tôi gặp vấn đề." }
    ],
    "conversations": [
      { "id": "c1", "context": "Hội thoại 1: Einbruch", "speaker": "A", "de": "Hast du gehört, dass es einen Einbruch gab?", "vi": "Bạn có nghe rằng có vụ trộm không?" },
      { "id": "c2", "context": "Hội thoại 1: Einbruch", "speaker": "B", "de": "Ja, ein Täter hat Bargeld und eine EC-Karte gestohlen.", "vi": "Có, một thủ phạm đã lấy tiền mặt và thẻ." },
      { "id": "c3", "context": "Hội thoại 1: Einbruch", "speaker": "A", "de": "Hat ein Zeuge etwas gesehen?", "vi": "Có nhân chứng không?" },
      { "id": "c4", "context": "Hội thoại 1: Einbruch", "speaker": "B", "de": "Ja, aber er konnte nicht alles erkennen.", "vi": "Có, nhưng anh ấy không nhìn rõ hết." },
      { "id": "c5", "context": "Hội thoại 2: Polizei & Bericht", "speaker": "A", "de": "Hast du mit dem Polizisten gesprochen?", "vi": "Bạn đã nói chuyện với cảnh sát chưa?" },
      { "id": "c6", "context": "Hội thoại 2: Polizei & Bericht", "speaker": "B", "de": "Ja, der Polizist und eine Polizistin haben mir Fragen gestellt.", "vi": "Có, một cảnh sát nam và nữ đã hỏi tôi." },
      { "id": "c7", "context": "Hội thoại 2: Polizei & Bericht", "speaker": "A", "de": "Was wollten sie wissen?", "vi": "Họ muốn biết gì?" },
      { "id": "c8", "context": "Hội thoại 2: Polizei & Bericht", "speaker": "B", "de": "Sie wollten wissen, was ich gesehen habe und wann ich nach Hause gekommen bin.", "vi": "Họ muốn biết tôi đã thấy gì và khi nào tôi về nhà." },
      { "id": "c9", "context": "Hội thoại 3: Versicherung", "speaker": "A", "de": "Hast du deine Versicherung angerufen?", "vi": "Bạn đã gọi bảo hiểm chưa?" },
      { "id": "c10", "context": "Hội thoại 3: Versicherung", "speaker": "B", "de": "Ja, nachdem ich den Einbruch gesehen habe, habe ich sofort angerufen.", "vi": "Có, sau khi thấy vụ trộm tôi gọi ngay." },
      { "id": "c11", "context": "Hội thoại 3: Versicherung", "speaker": "A", "de": "Was haben sie gesagt?", "vi": "Họ nói gì?" },
      { "id": "c12", "context": "Hội thoại 3: Versicherung", "speaker": "B", "de": "Sie haben gesagt, dass sie den Schaden bezahlen werden.", "vi": "Họ nói sẽ trả thiệt hại." },
      { "id": "c13", "context": "Hội thoại 4: Tür & Schloss", "speaker": "A", "de": "Warum konntest du nicht ins Haus gehen?", "vi": "Tại sao bạn không vào nhà được?" },
      { "id": "c14", "context": "Hội thoại 4: Tür & Schloss", "speaker": "B", "de": "Weil das Schloss kaputt war.", "vi": "Vì ổ khóa bị hỏng." },
      { "id": "c15", "context": "Hội thoại 4: Tür & Schloss", "speaker": "A", "de": "Was hast du gemacht?", "vi": "Bạn đã làm gì?" },
      { "id": "c16", "context": "Hội thoại 4: Tür & Schloss", "speaker": "B", "de": "Ich habe einen Hammer benutzt, um die Tür zu öffnen.", "vi": "Tôi dùng búa để mở cửa." },
      { "id": "c17", "context": "Hội thoại 5: Strom & Glühbirne", "speaker": "A", "de": "Warum war es so dunkel?", "vi": "Sao tối vậy?" },
      { "id": "c18", "context": "Hội thoại 5: Strom & Glühbirne", "speaker": "B", "de": "Weil der Strom weg war.", "vi": "Vì mất điện." },
      { "id": "c19", "context": "Hội thoại 5: Strom & Glühbirne", "speaker": "A", "de": "Und die Glühbirne?", "vi": "Còn bóng đèn?" },
      { "id": "c20", "context": "Hội thoại 5: Strom & Glühbirne", "speaker": "B", "de": "Die war auch kaputt.", "vi": "Nó cũng hỏng." },
      { "id": "c21", "context": "Hội thoại 6: Unfall", "speaker": "A", "de": "Was ist passiert?", "vi": "Chuyện gì xảy ra?" },
      { "id": "c22", "context": "Hội thoại 6: Unfall", "speaker": "B", "de": "Ich hatte einen Unfall, als ich zur Arbeit gefahren bin.", "vi": "Tôi bị tai nạn khi đi làm." },
      { "id": "c23", "context": "Hội thoại 6: Unfall", "speaker": "A", "de": "Ist jemand verletzt?", "vi": "Có ai bị thương không?" },
      { "id": "c24", "context": "Hội thoại 6: Unfall", "speaker": "B", "de": "Nein, aber das Auto ist kaputt.", "vi": "Không, nhưng xe hỏng." },
      { "id": "c25", "context": "Hội thoại 7: Liste & Plan", "speaker": "A", "de": "Warum hast du eine Liste gemacht?", "vi": "Tại sao bạn lập danh sách?" },
      { "id": "c26", "context": "Hội thoại 7: Liste & Plan", "speaker": "B", "de": "Damit ich nichts vergesse.", "vi": "Để không quên gì." },
      { "id": "c27", "context": "Hội thoại 8: Reinigung", "speaker": "A", "de": "Hast du das Zimmer gereinigt?", "vi": "Bạn đã dọn phòng chưa?" },
      { "id": "c28", "context": "Hội thoại 8: Reinigung", "speaker": "B", "de": "Ja, bevor die Gäste gekommen sind.", "vi": "Rồi, trước khi khách đến." },
      { "id": "c29", "context": "Hội thoại 9: Kleidung & nähen", "speaker": "A", "de": "Woher hast du deine Jacke?", "vi": "Bạn lấy áo khoác ở đâu?" },
      { "id": "c30", "context": "Hội thoại 9: Kleidung & nähen", "speaker": "B", "de": "Meine Mutter hat sie genäht.", "vi": "Mẹ tôi may." },
      { "id": "c31", "context": "Hội thoại 10: Eigene Erfahrung", "speaker": "A", "de": "Ist dir schon einmal so etwas passiert?", "vi": "Bạn đã từng gặp chuyện như vậy chưa?" },
      { "id": "c32", "context": "Hội thoại 10: Eigene Erfahrung", "speaker": "B", "de": "Ja, jemand hat mein Fahrrad gestohlen, als ich im Supermarkt war.", "vi": "Có, ai đó đã lấy xe tôi khi tôi đi siêu thị." },
      { "id": "c33", "context": "Hội thoại 10: Eigene Erfahrung", "speaker": "A", "de": "Was hast du gemacht?", "vi": "Bạn đã làm gì?" },
      { "id": "c34", "context": "Hội thoại 10: Eigene Erfahrung", "speaker": "B", "de": "Ich habe die Polizei angerufen und alles erklärt.", "vi": "Tôi gọi cảnh sát và giải thích." }
    ]
  },
  "l22": {
    "words": [
      {
        "id": "w1",
        "de": "Wagen",
        "vi": "Xe ô tô",
        "ipa": "/ˈvaːɡən/",
        "syllables": [
          "Wa",
          "gen"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w2",
        "de": "Autobahn",
        "vi": "Đường cao tốc",
        "ipa": "/ˈaʊ̯toˌbaːn/",
        "syllables": [
          "Au",
          "to",
          "bahn"
        ],
        "notation": [
          80,
          40,
          60
        ]
      },
      {
        "id": "w3",
        "de": "Tankstelle",
        "vi": "Trạm đổ xăng",
        "ipa": "/ˈtaŋkˌʃtɛlə/",
        "syllables": [
          "Tank",
          "stel",
          "le"
        ],
        "notation": [
          80,
          60,
          40
        ]
      },
      {
        "id": "w4",
        "de": "Werkstatt",
        "vi": "Xưởng sửa chữa",
        "ipa": "/ˈvɛʁkˌʃtat/",
        "syllables": [
          "Werk",
          "statt"
        ],
        "notation": [
          80,
          60
        ]
      },
      {
        "id": "w5",
        "de": "Motor",
        "vi": "Động cơ",
        "ipa": "/ˈmoːtoːɐ̯/",
        "syllables": [
          "Mo",
          "tor"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w6",
        "de": "Reifenpanne",
        "vi": "Sự cố thủng lốp",
        "ipa": "/ˈʁaɪ̯fənˌpanə/",
        "syllables": [
          "Rei",
          "fen",
          "pan",
          "ne"
        ],
        "notation": [
          80,
          40,
          60,
          40
        ]
      },
      {
        "id": "w7",
        "de": "tanken",
        "vi": "Đổ xăng",
        "ipa": "/ˈtaŋkən/",
        "syllables": [
          "tan",
          "ken"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w8",
        "de": "überqueren",
        "vi": "Băng qua",
        "ipa": "/yːbɐˈkveːʁən/",
        "syllables": [
          "ü",
          "ber",
          "que",
          "ren"
        ],
        "notation": [
          40,
          40,
          80,
          40
        ]
      },
      {
        "id": "w9",
        "de": "plötzlich",
        "vi": "Bỗng nhiên",
        "ipa": "/ˈplœt͡slɪç/",
        "syllables": [
          "plötz",
          "lich"
        ],
        "notation": [
          80,
          40
        ]
      },
      {
        "id": "w10",
        "de": "insgesamt",
        "vi": "Tổng cộng",
        "ipa": "/ˈɪnsɡəˌzamt/",
        "syllables": [
          "ins",
          "ge",
          "samt"
        ],
        "notation": [
          80,
          40,
          60
        ]
      },
      {
        "id": "w11",
        "de": "Abfahrt",
        "vi": "Sự khởi hành",
        "ipa": "/ˈapˌfaːɐ̯t/",
        "syllables": [
          "Ab",
          "fahrt"
        ],
        "notation": [
          80,
          60
        ]
      },
      {
        "id": "w12",
        "de": "vorsichtig",
        "vi": "Cẩn thận",
        "ipa": "/ˈfoːɐ̯ˌzɪçtɪç/",
        "syllables": [
          "vor",
          "sich",
          "tig"
        ],
        "notation": [
          80,
          40,
          40
        ]
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Seit ich meinen Wagen verkauft habe, fahre ich mit dem Rad.",
        "vi": "Từ khi bán xe hơi, tôi đi bằng xe đạp.",
        "ipa": "/zaɪ̯t ɪç ˈmaɪ̯nən ˈvaːɡən fɛɐ̯ˈkaʊ̯ft ˈhaːbə, ˈfaːʁə ɪç mɪt deːm ʁaːt/",
        "syllables": [
          "Seit",
          "ich",
          "meinen",
          "Wagen",
          "verkauft",
          "habe,",
          "fahre",
          "ich",
          "mit",
          "dem",
          "Rad."
        ],
        "notation": [
          40,
          40,
          40,
          80,
          60,
          40,
          80,
          40,
          40,
          40,
          80
        ]
      },
      {
        "id": "s2",
        "de": "Auf der Autobahn darf man schnell fahren.",
        "vi": "Trên đường cao tốc, người ta được phép lái xe nhanh.",
        "ipa": "/aʊ̯f deːɐ̯ ˈaʊ̯toˌbaːn daʁf man ʃnɛl ˈfaːʁən/",
        "syllables": [
          "Auf",
          "der",
          "Autobahn",
          "darf",
          "man",
          "schnell",
          "fahren."
        ],
        "notation": [
          40,
          40,
          80,
          40,
          40,
          80,
          60
        ]
      },
      {
        "id": "s3",
        "de": "Wir müssen zur Tankstelle fahren.",
        "vi": "Chúng ta phải đến trạm xăng.",
        "ipa": "/viːɐ̯ ˈmʏsən t͡suːɐ̯ ˈtaŋkˌʃtɛlə ˈfaːʁən/",
        "syllables": [
          "Wir",
          "müssen",
          "zur",
          "Tankstelle",
          "fahren."
        ],
        "notation": [
          40,
          60,
          40,
          80,
          60
        ]
      },
      {
        "id": "s4",
        "de": "Mein Auto ist kaputt, es steht in der Kfz-Werkstatt.",
        "vi": "Xe tôi bị hỏng, nó đang ở xưởng sửa chữa ô tô.",
        "ipa": "/maɪ̯n ˈaʊ̯to ɪst kaˈpʊt, ɛs ʃteːt ɪn deːɐ̯ kaːʔɛfˈt͡sɛtˌvɛʁkʃtat/",
        "syllables": [
          "Mein",
          "Auto",
          "ist",
          "kaputt,",
          "es",
          "steht",
          "in",
          "der",
          "Kfz-Werkstatt."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          40,
          60,
          40,
          40,
          80
        ]
      },
      {
        "id": "s5",
        "de": "Der Motor macht komische Geräusche.",
        "vi": "Động cơ phát ra những tiếng động lạ.",
        "ipa": "/deːɐ̯ ˈmoːtoːɐ̯ maxt ˈkoːmɪʃə ɡəˈʁɔʏ̯ʃə/",
        "syllables": [
          "Der",
          "Motor",
          "macht",
          "komische",
          "Geräusche."
        ],
        "notation": [
          40,
          80,
          40,
          60,
          80
        ]
      },
      {
        "id": "s6",
        "de": "Ich hatte auf dem Weg eine Reifenpanne.",
        "vi": "Tôi đã bị thủng lốp trên đường đi.",
        "ipa": "/ɪç ˈhatə aʊ̯f deːm veːk ˈaɪ̯nə ˈʁaɪ̯fənˌpanə/",
        "syllables": [
          "Ich",
          "hatte",
          "auf",
          "dem",
          "Weg",
          "eine",
          "Reifenpanne."
        ],
        "notation": [
          40,
          60,
          40,
          40,
          80,
          40,
          80
        ]
      },
      {
        "id": "s7",
        "de": "Ich habe mein Auto gestern voll getankt.",
        "vi": "Tôi đã đổ đầy bình xăng hôm qua.",
        "ipa": "/ɪç ˈhaːbə maɪ̯n ˈaʊ̯to ˈɡɛstɐn fɔl ɡəˈtaŋkt/",
        "syllables": [
          "Ich",
          "habe",
          "mein",
          "Auto",
          "gestern",
          "voll",
          "getankt."
        ],
        "notation": [
          40,
          40,
          40,
          80,
          60,
          40,
          80
        ]
      },
      {
        "id": "s8",
        "de": "Wir überqueren die Donau mit einer Fähre.",
        "vi": "Chúng tôi băng qua sông Danube bằng một con phà.",
        "ipa": "/viːɐ̯ yːbɐˈkveːʁən diː ˈdoːnaʊ̯ mɪt ˈaɪ̯nɐ ˈfɛːʁə/",
        "syllables": [
          "Wir",
          "überqueren",
          "die",
          "Donau",
          "mit",
          "einer",
          "Fähre."
        ],
        "notation": [
          40,
          60,
          40,
          80,
          40,
          40,
          80
        ]
      },
      {
        "id": "s9",
        "de": "Plötzlich blieb das Auto stehen.",
        "vi": "Bỗng nhiên chiếc xe dừng lại.",
        "ipa": "/ˈplœt͡slɪç bliːp das ˈaʊ̯to ˈʃteːən/",
        "syllables": [
          "Plötzlich",
          "blieb",
          "das",
          "Auto",
          "stehen."
        ],
        "notation": [
          80,
          40,
          40,
          80,
          60
        ]
      },
      {
        "id": "s10",
        "de": "Kurz nach der Abfahrt hatten wir ein Problem.",
        "vi": "Ngay sau khi khởi hành chúng tôi đã gặp vấn đề.",
        "ipa": "/kʊʁt͡s nax deːɐ̯ ˈapˌfaːɐ̯t ˈhatən viːɐ̯ aɪ̯n pʁoˈbleːm/",
        "syllables": [
          "Kurz",
          "nach",
          "der",
          "Abfahrt",
          "hatten",
          "wir",
          "ein",
          "Problem."
        ],
        "notation": [
          60,
          40,
          40,
          80,
          40,
          40,
          40,
          80
        ]
      },
      {
        "id": "s11",
        "de": "Kannst du dich noch an die Reise erinnern?",
        "vi": "Bạn có còn nhớ về chuyến đi đó không?",
        "ipa": "/kanst duː dɪç nɔx an diː ˈʁaɪ̯zə ɛɐ̯ˈɪnɐn/",
        "syllables": [
          "Kannst",
          "du",
          "dich",
          "noch",
          "an",
          "die",
          "Reise",
          "erinnern?"
        ],
        "notation": [
          60,
          40,
          40,
          40,
          40,
          40,
          80,
          60
        ]
      },
      {
        "id": "s12",
        "de": "Man muss auf den Straßen vorsichtig fahren.",
        "vi": "Người ta phải lái xe cẩn thận trên đường.",
        "ipa": "/man mʊs aʊ̯f deːn ˈʃtʁaːsən ˈfoːɐ̯ˌzɪçtɪç ˈfaːʁən/",
        "syllables": [
          "Man",
          "muss",
          "auf",
          "den",
          "Straßen",
          "vorsichtig",
          "fahren."
        ],
        "notation": [
          40,
          60,
          40,
          40,
          80,
          60,
          80
        ]
      }
    ]
  },
  "l23": {
    "words": [
      { "id": "w1", "de": "Abitur", "vi": "Bằng tú tài", "ipa": "/abiˈtuːɐ̯/", "syllables": ["A", "bi", "tur"], "notation": [40, 40, 80] },
      { "id": "w2", "de": "Berufsschule", "vi": "Trường dạy nghề", "ipa": "/bəˈʁuːfsˌʃuːlə/", "syllables": ["Be", "rufs", "schu", "le"], "notation": [40, 80, 60, 40] },
      { "id": "w3", "de": "Gesamtschule", "vi": "Trường tổng hợp", "ipa": "/ɡəˈzamtˌʃuːlə/", "syllables": ["Ge", "samt", "schu", "le"], "notation": [40, 80, 60, 40] },
      { "id": "w4", "de": "Gymnasium", "vi": "Trường trung học phổ thông", "ipa": "/ɡʏmˈnaːzi̯ʊm/", "syllables": ["Gym", "na", "si", "um"], "notation": [40, 80, 40, 40] },
      { "id": "w5", "de": "Lehre", "vi": "Sự học nghề", "ipa": "/ˈleːʁə/", "syllables": ["Leh", "re"], "notation": [80, 40] },
      { "id": "w6", "de": "Bewerbung", "vi": "Đơn xin việc", "ipa": "/bəˈvɛʁbʊŋ/", "syllables": ["Be", "wer", "bung"], "notation": [40, 80, 40] },
      { "id": "w7", "de": "Zeugnis", "vi": "Học bạ/Bằng cấp", "ipa": "/ˈt͡sɔʏ̯knɪs/", "syllables": ["Zeug", "nis"], "notation": [80, 40] },
      { "id": "w8", "de": "mündlich", "vi": "Bằng miệng", "ipa": "/ˈmʏntlɪç/", "syllables": ["münd", "lich"], "notation": [80, 40] },
      { "id": "w9", "de": "schriftlich", "vi": "Bằng văn bản", "ipa": "/ˈʃʁɪftlɪç/", "syllables": ["schrift", "lich"], "notation": [80, 40] },
      { "id": "w10", "de": "kündigen", "vi": "Chấm dứt hợp đồng/Nghỉ việc", "ipa": "/ˈkʏndɪɡən/", "syllables": ["kün", "di", "gen"], "notation": [80, 40, 40] }
    ],
    "sentences": [
      {
        "id": "s1",
        "de": "Das ist der Beruf, der zu mir passt.",
        "vi": "Đó là nghề nghiệp phù hợp với tôi.",
        "ipa": "/das ɪst deːɐ̯ bəˈʁuːf deːɐ̯ t͡suː miːɐ̯ past/",
        "syllables": ["Das", "ist", "der", "Beruf,", "der", "zu", "mir", "passt."],
        "notation": [40, 40, 40, 80, 40, 40, 40, 80]
      },
      {
        "id": "s2",
        "de": "Das ist das Buch, das ich so gern gelesen habe.",
        "vi": "Đó là cuốn sách mà tôi đã rất thích đọc.",
        "ipa": "/das ɪst das buːx das ɪç zoː ɡɛʁn ɡəˈleːzən ˈhaːbə/",
        "syllables": ["Das", "ist", "das", "Buch,", "das", "ich", "so", "gern", "ge", "le", "sen", "ha", "be."],
        "notation": [40, 40, 40, 80, 40, 40, 40, 40, 40, 80, 40, 60, 40]
      },
      {
        "id": "s3",
        "de": "Bist du mit deinem Beruf zufrieden?",
        "vi": "Bạn có hài lòng với nghề nghiệp của mình không?",
        "ipa": "/bɪst duː mɪt ˈdaɪ̯nəm bəˈʁuːf t͡suˈfʁiːdən/",
        "syllables": ["Bist", "du", "mit", "deinem", "Beruf", "zu", "frie", "den?"],
        "notation": [40, 40, 40, 60, 80, 40, 80, 40]
      },
      {
        "id": "s4",
        "de": "Ja, ich bin sehr zufrieden damit.",
        "vi": "Có, tôi rất hài lòng với nó.",
        "ipa": "/jaː ɪç bɪn zeːɐ̯ t͡suˈfʁiːdən daˈmɪt/",
        "syllables": ["Ja,", "ich", "bin", "sehr", "zu", "frie", "den", "da", "mit."],
        "notation": [60, 40, 40, 60, 40, 80, 40, 40, 80]
      },
      {
        "id": "s5",
        "de": "Nein, überhaupt nicht.",
        "vi": "Không, hoàn toàn không.",
        "ipa": "/naɪ̯n yːbɐˈhaʊ̯pt nɪçt/",
        "syllables": ["Nein,", "über", "haupt", "nicht."],
        "notation": [80, 40, 80, 60]
      },
      {
        "id": "s6",
        "de": "Ich habe keine Lust mehr.",
        "vi": "Tôi không còn hứng thú nữa.",
        "ipa": "/ɪç ˈhaːbə ˈkaɪ̯nə lʊst meːɐ̯/",
        "syllables": ["Ich", "ha", "be", "kei", "ne", "Lust", "mehr."],
        "notation": [40, 80, 40, 60, 40, 80, 60]
      },
      {
        "id": "s7",
        "de": "Immer muss ich kopieren. Das ärgert mich.",
        "vi": "Tôi luôn phải phô tô. Điều đó làm tôi bực mình.",
        "ipa": "/ˈɪmɐ mʊs ɪç koˈpiːʁən das ˈɛʁɡɐt mɪç/",
        "syllables": ["Im", "mer", "muss", "ich", "ko", "pie", "ren.", "Das", "är", "gert", "mich."],
        "notation": [80, 40, 60, 40, 40, 80, 40, 40, 80, 40, 60]
      },
      {
        "id": "s8",
        "de": "Ich möchte kündigen.",
        "vi": "Tôi muốn nghỉ việc.",
        "ipa": "/ɪç ˈmœçtə ˈkʏndɪɡən/",
        "syllables": ["Ich", "möch", "te", "kün", "di", "gen."],
        "notation": [40, 80, 40, 80, 40, 40]
      }
    ],
    "conversations": [
      { "id": "l23-c1", "context": "Hội thoại 1: Ullas Berufswunsch", "speaker": "A", "de": "Ulla ist 14 Jahre alt und will Medizin studieren. Welcher Schultyp passt zu ihr?", "vi": "Ulla 14 tuổi và muốn học y. Loại trường nào phù hợp với cô ấy?" },
      { "id": "l23-c2", "context": "Hội thoại 1: Ullas Berufswunsch", "speaker": "B", "de": "Sie kann zum Beispiel ein Gymnasium oder eine Gesamtschule besuchen.", "vi": "Cô ấy có thể học trường Gymnasium hoặc Gesamtschule." },
      { "id": "l23-c3", "context": "Hội thoại 1: Ullas Berufswunsch", "speaker": "A", "de": "Was muss sie machen, damit sie auf die Universität kann?", "vi": "Cố ấy phải làm gì để có thể vào đại học?" },
      { "id": "l23-c4", "context": "Hội thoại 1: Ullas Berufswunsch", "speaker": "B", "de": "Sie muss das Abitur machen, dann kann sie auf die Universität.", "vi": "Cô ấy phải thi đỗ tú tài, sau đó có thể lên đại học." },
      { "id": "l23-c5", "context": "Hội thoại 2: Simons Berufswunsch", "speaker": "A", "de": "Simon, 8, geht nicht gern in die Schule. Er möchte später als Schreiner arbeiten. Welcher Schultyp passt zu ihm?", "vi": "Simon, 8 tuổi, không thích đi học. Cậu ấy muốn làm thợ mộc sau này. Loại trường nào phù hợp với cậu ấy?" },
      { "id": "l23-c6", "context": "Hội thoại 2: Simons Berufswunsch", "speaker": "B", "de": "Er kann eine Hauptschule oder eine Mittelschule besuchen.", "vi": "Cậu ấy có thể học trường Hauptschule hoặc Mittelschule." },
      { "id": "l23-c7", "context": "Hội thoại 2: Simons Berufswunsch", "speaker": "A", "de": "Was muss er danach machen?", "vi": "Cậu ấy phải làm gì tiếp theo?" },
      { "id": "l23-c8", "context": "Hội thoại 2: Simons Berufswunsch", "speaker": "B", "de": "Er muss die Hauptschule abschließen, dann kann er eine Lehre machen.", "vi": "Cậu ấy phải tốt nghiệp trường Hauptschule, sau đó có thể học nghề." }
    ]
  },
  "l24": {
    "words": [
      { "id": "w1", "de": "Arzt", "vi": "Bác sĩ", "ipa": "/aʁt͡st/", "syllables": ["Arzt"], "notation": [80] },
      { "id": "w2", "de": "Bewerbung", "vi": "Đơn xin việc", "ipa": "/bəˈvɛʁbʊŋ/", "syllables": ["Be", "wer", "bung"], "notation": [40, 80, 40] },
      { "id": "w3", "de": "Lebenslauf", "vi": "Sơ yếu lý lịch", "ipa": "/ˈleːbənsˌlaʊ̯f/", "syllables": ["Le", "bens", "lauf"], "notation": [80, 40, 60] },
      { "id": "w4", "de": "Krankenhaus", "vi": "Bệnh viện", "ipa": "/ˈkʁaŋkənˌhaʊ̯s/", "syllables": ["Kran", "ken", "haus"], "notation": [80, 40, 60] },
      { "id": "w5", "de": "Umzug", "vi": "Sự chuyển nhà", "ipa": "/ˈʊmˌt͡suːk/", "syllables": ["Um", "zug"], "notation": [80, 60] },
      { "id": "w6", "de": "Erfahrung", "vi": "Kinh nghiệm", "ipa": "/ɛɐ̯ˈfaːʁʊŋ/", "syllables": ["Er", "fah", "rung"], "notation": [40, 80, 40] },
      { "id": "w7", "de": "Vertrag", "vi": "Hợp đồng", "ipa": "/fɛɐ̯ˈtʁaːk/", "syllables": ["Ver", "trag"], "notation": [40, 80] },
      { "id": "w8", "de": "kündigen", "vi": "Nghỉ việc/Chấm dứt", "ipa": "/ˈkʏndɪɡən/", "syllables": ["kün", "di", "gen"], "notation": [80, 40, 40] }
    ],
    "sentences": [
      { "id": "s1", "de": "Ich möchte mich um die Stelle bewerben.", "vi": "Tôi muốn ứng tuyển vào vị trí này.", "ipa": "/ɪç ˈmœçtə mɪç ʊm diː ˈʃtɛlə bəˈvɛʁbən/", "syllables": ["Ich", "möch", "te", "mich", "um", "die", "Stel", "le", "be", "wer", "ben."], "notation": [40, 80, 40, 40, 40, 40, 80, 40, 40, 80, 40] },
      { "id": "s2", "de": "Er hat den Vertrag unterschrieben.", "vi": "Anh ấy đã ký hợp đồng.", "ipa": "/eːɐ̯ hat deːn fɛɐ̯ˈtʁaːk ʊntɐˈʃʁiːbən/", "syllables": ["Er", "hat", "den", "Ver", "trag", "un", "ter", "schrie", "ben."], "notation": [40, 40, 40, 40, 80, 40, 40, 80, 40] },
      { "id": "s3", "de": "Wir müssen bald wieder umziehen.", "vi": "Chúng ta phải sớm chuyển nhà lại thôi.", "ipa": "/viːɐ̯ ˈmʏsən balt ˈviːdɐ ˈʊmˌt͡siːən/", "syllables": ["Wir", "müs", "sen", "bald", "wie", "der", "um", "zie", "hen."], "notation": [40, 80, 40, 60, 80, 40, 80, 60, 40] },
      { "id": "s4", "de": "Sie arbeitet als Assistenzärztin.", "vi": "Cô ấy làm việc với tư cách là bác sĩ nội trú.", "ipa": "/ziː ˈaʁbaɪ̯tət als asɪsˈtɛnt͡sˌʔɛʁt͡stɪn/", "syllables": ["Sie", "ar", "bei", "tet", "als", "As", "sis", "tenz", "ärz", "tin."], "notation": [40, 80, 40, 40, 40, 40, 40, 80, 60, 40] }
    ],
    "conversations": [
      { "id": "c1", "context": "Hội thoại: Sự nhiệp", "speaker": "A", "de": "Was sind Sie von Beruf?", "vi": "Nghề nghiệp của bạn là gì?" },
      { "id": "c2", "context": "Hội thoại: Sự nghiêp", "speaker": "B", "de": "Ich bin Arzt. Ich arbeite in einem Krankenhaus in Berlin.", "vi": "Tôi là bác sĩ. Tôi làm việc trong một bệnh viện ở Berlin." },
      { "id": "c3", "context": "Hội thoại: Kinh nghiệm", "speaker": "A", "de": "Haben Sie schon viel Berufserfahrung?", "vi": "Ngài đã có nhiều kinh nghiệm làm việc chưa?" },
      { "id": "c4", "context": "Hội thoại: Kinh nghiệm", "speaker": "B", "de": "Ja, ich bin seit fünf Jahren Arzt.", "vi": "Vâng, tôi đã làm bác sĩ được 5 năm rồi." }
    ]
  }
};

type DimensionData = {
  subject: string;
  A: number; // Current Score Average
  fullMark: number;
};

interface SpeakingPracticeProps {
  lessonId: string;
  playAudio: (text: string, id: string, lang?: "de-DE" | "vi-VN") => void;
  playingId: string | null;
}

export default function SpeakingPractice({ lessonId, playAudio, playingId }: SpeakingPracticeProps) {
  const [activeTab, setActiveTab] = useState<'words' | 'sentences' | 'conversations'>('words');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [recordingId, setRecordingId] = useState<string | null>(null);
  const [evaluatingId, setEvaluatingId] = useState<string | null>(null);
  
  // Tracking scores history
  // e.g. metric -> array of scores over items.
  const [wordScores, setWordScores] = useState<Record<string, number[]>>({
    'Vowels': [], 'Consonants': [], 'EndingSounds': [], 'Stress': [], 'Clarity': []
  });
  const [sentenceScores, setSentenceScores] = useState<Record<string, number[]>>({
    'Intonation': [], 'Pausing': [], 'SentenceStress': [], 'Pronunciation': [], 'Fluency': []
  });
  const [conversationScores, setConversationScores] = useState<Record<string, number[]>>({
    'Intonation': [], 'Pausing': [], 'SentenceStress': [], 'Pronunciation': [], 'Fluency': []
  });
  const [currentFeedback, setCurrentFeedback] = useState<string>('');

  const data = SPEAKING_DATA[lessonId] || SPEAKING_DATA["l21"]; // default fallback
  
  const getConversationGroups = (convItems: PracticeItem[]): ConversationGroup[] => {
    const groups: { [key: string]: PracticeItem[] } = {};
    for (const item of convItems) {
      const ctx = item.context || 'Khái quát';
      if (!groups[ctx]) groups[ctx] = [];
      groups[ctx].push(item);
    }
    return Object.keys(groups).map(k => ({ context: k, lines: groups[k] }));
  };

  const isConvTab = activeTab === 'conversations';
  const convGroups = isConvTab ? getConversationGroups(data.conversations || []) : [];
  
  const currentListLength = isConvTab ? convGroups.length : (activeTab === 'words' ? data.words.length : data.sentences.length);
  const currentItem = isConvTab ? undefined : (activeTab === 'words' ? data.words : data.sentences)[currentIndex];
  // Wait, I need a better way. I will fetch the actual data.
  // Actually, wait, let's keep it simple.

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // Calculate Averages for Radar Chart
  const getRadarData = (): DimensionData[] => {
    const activeScores = activeTab === 'words' ? wordScores : (activeTab === 'sentences' ? sentenceScores : conversationScores);
    const metrics = activeTab === 'words' 
      ? [
          { key: 'Vowels', label: 'Nguyên âm' },
          { key: 'Consonants', label: 'Phụ âm' },
          { key: 'EndingSounds', label: 'Âm cuối' },
          { key: 'Stress', label: 'Trọng âm' },
          { key: 'Clarity', label: 'Độ rõ ràng' }
        ]
      : [
          { key: 'Intonation', label: 'Ngữ điệu' },
          { key: 'Pausing', label: 'Ngắt nghỉ' },
          { key: 'SentenceStress', label: 'Trọng âm câu' },
          { key: 'Pronunciation', label: 'Phát âm (Tổng thể)' },
          { key: 'Fluency', label: 'Độ trôi chảy' }
        ];

    return metrics.map(m => {
      const scores = activeScores[m.key];
      const avg = scores.length > 0 ? (scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
      return {
        subject: m.label,
        A: Math.round(avg),
        fullMark: 100
      };
    });
  };

  const startRecording = async (targetItem?: PracticeItem) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      
      const itemToEvaluate = targetItem || currentItem;
      if (itemToEvaluate) {
          setRecordingId(itemToEvaluate.id);
      }

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioData = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        if (itemToEvaluate) {
            evaluateAudio(audioData, itemToEvaluate);
        }
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setCurrentFeedback('');
    } catch (e) {
      console.error(e);
      alert('Không thể truy cập Microphone.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setRecordingId(null);
    }
  };

  const evaluateAudio = async (blob: Blob, item: PracticeItem) => {
    setEvaluatingId(item.id);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = async () => {
        try {
          const base64Audio = (reader.result as string).split(',')[1];
          
          let promptFormat = '';
          if (activeTab === 'words') {
            promptFormat = `
              CRITICAL TASK: Evaluate the pronunciation of the SINGLE GERMAN WORD: "${item.de}".
              Return a JSON object assessing 5 metrics from 0 to 100: "Vowels", "Consonants", "EndingSounds", "Stress", "Clarity".
              Additionally, provide a short "Feedback" string in Vietnamese explaining their specific error.
              Format: { "Vowels": 80, "Consonants": 70, "EndingSounds": 60, "Stress": 90, "Clarity": 85, "Feedback": "..." }
            `;
          } else {
            promptFormat = `
              CRITICAL TASK: Evaluate the pronunciation of the GERMAN SENTENCE: "${item.de}".
              Return a JSON object assessing 5 metrics from 0 to 100: "Intonation", "Pausing", "SentenceStress", "Pronunciation", "Fluency".
              Additionally, provide a short "Feedback" string in Vietnamese pointing out strong/weak points.
              Format: { "Intonation": 80, "Pausing": 70, "SentenceStress": 60, "Pronunciation": 85, "Fluency": 82, "Feedback": "..." }
            `;
          }

          const response = await ai.models.generateContent({
            model: "gemini-3.1-pro-preview",
            contents: [
              { inlineData: { data: base64Audio, mimeType: "audio/webm" } },
              { text: promptFormat }
            ],
            config: { responseMimeType: "application/json" }
          });

          const result = JSON.parse(response.text || '{}');
          
          if (activeTab === 'words') {
            setWordScores(prev => ({
              Vowels: [...prev.Vowels, result.Vowels || 0],
              Consonants: [...prev.Consonants, result.Consonants || 0],
              EndingSounds: [...prev.EndingSounds, result.EndingSounds || 0],
              Stress: [...prev.Stress, result.Stress || 0],
              Clarity: [...prev.Clarity, result.Clarity || 0]
            }));
          } else if (activeTab === 'sentences') {
            setSentenceScores(prev => ({
              Intonation: [...prev.Intonation, result.Intonation || 0],
              Pausing: [...prev.Pausing, result.Pausing || 0],
              SentenceStress: [...prev.SentenceStress, result.SentenceStress || 0],
              Pronunciation: [...prev.Pronunciation, result.Pronunciation || 0],
              Fluency: [...prev.Fluency, result.Fluency || 0]
            }));
          } else {
            setConversationScores(prev => ({
              Intonation: [...prev.Intonation, result.Intonation || 0],
              Pausing: [...prev.Pausing, result.Pausing || 0],
              SentenceStress: [...prev.SentenceStress, result.SentenceStress || 0],
              Pronunciation: [...prev.Pronunciation, result.Pronunciation || 0],
              Fluency: [...prev.Fluency, result.Fluency || 0]
            }));
          }
          setCurrentFeedback(result.Feedback || 'Tuyệt vời!');
          
        } catch (err) {
          console.error(err);
          setCurrentFeedback('Không thể kết nối máy chủ AI để phân tích âm thanh lúc này.');
        } finally {
          setEvaluatingId(null);
          // Auto move next if close to end
        }
      };
    } catch (e) {
      setEvaluatingId(null);
    }
  };

  const nextItem = () => {
    if (currentIndex < currentListLength) {
      setCurrentIndex(currentIndex + 1);
      setCurrentFeedback('');
    }
  };
  
  const prevItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentFeedback('');
    }
  };

  const chartData = getRadarData();
  const hasData = chartData.some(d => d.A > 0);

  if (currentIndex === currentListLength) {
    return (
      <div className="max-w-6xl mx-auto space-y-6 py-12 px-4 relative flex flex-col items-center justify-center min-h-[70vh]">
         <div className="text-center space-y-4 mb-8">
            <CheckCircle2 size={80} className="text-emerald-500 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-display font-black text-theme-dark">Tổng kết luyện tập</h2>
            <p className="text-theme-dark/60 font-bold max-w-xl mx-auto text-lg">
              Bạn đã hoàn thành bài luyện tập {activeTab === 'words' ? 'Từ vựng' : (activeTab === 'sentences' ? 'Câu giao tiếp' : 'Hội thoại')}. 
              Đây là biểu đồ năng lực tổng hợp của bạn.
            </p>
         </div>

         <div className="w-full max-w-2xl bg-theme-dark rounded-[48px] p-4 md:p-8 shadow-2xl relative mb-8 min-h-[400px]">
            <div className="absolute inset-0 bg-theme-primary/10 rounded-[48px] mix-blend-overlay" />
            {hasData ? (
               <ResponsiveContainer width="100%" height={400}>
                 <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                   <PolarGrid stroke="rgba(255,255,255,0.1)" />
                   <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 12, fontWeight: 800 }} />
                   <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                   <Radar name="Skil" dataKey="A" stroke="#50E3C2" strokeWidth={4} fill="#50E3C2" fillOpacity={0.6} />
                 </RadarChart>
               </ResponsiveContainer>
            ) : (
                <div className="h-full min-h-[400px] flex items-center justify-center text-white/40 font-bold">Chưa có đủ dữ liệu thu âm</div>
            )}
         </div>

         <div className="bg-white p-6 rounded-[32px] border-2 border-theme-dark/5 shadow-xl w-full max-w-2xl overflow-x-auto">
             <h4 className="font-black text-theme-primary mb-2 text-center text-sm uppercase tracking-widest">Ký âm sư phạm mục tiêu</h4>
             <TeachingNotation 
               syllables={['Gut', 'ge', 'macht!', 'Wei', 'ter', 'so!']} 
               notation={[80, 40, 90, 80, 40, 90]} 
               isSentence={true} 
             />
         </div>

         <div className="pt-8 flex gap-4">
            <button onClick={() => setCurrentIndex(0)} className="px-8 py-4 bg-theme-cream text-theme-dark font-black rounded-2xl flex items-center gap-3 hover:bg-theme-dark/10 transition-all">
               <RotateCcw size={20} /> Luyện lại từ đầu
            </button>
            <button onClick={() => { 
                const nextTab = activeTab === 'words' ? 'sentences' : (activeTab === 'sentences' && data.conversations ? 'conversations' : 'words');
                setActiveTab(nextTab); 
                setCurrentIndex(0); 
              }} 
              className="px-8 py-4 bg-theme-dark text-white font-black rounded-2xl shadow-xl hover:bg-theme-primary hover:-translate-y-1 transition-all">
               Chuyển sang {activeTab === 'words' ? 'Câu' : (activeTab === 'sentences' && data.conversations ? 'Hội thoại' : 'Từ vựng')}
            </button>
         </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6 md:space-y-10 py-6 md:py-12 px-4 relative">
      <div className="flex items-center justify-between">
        <div className="space-y-1 md:space-y-2">
          <h2 className="text-3xl md:text-4xl font-display font-black text-theme-dark">Luyện phát âm</h2>
          <p className="text-theme-dark/40 font-bold uppercase tracking-widest text-xs">Mô hình Radar AI</p>
        </div>
      </div>

      <div className="flex gap-4 p-2 bg-theme-cream/50 rounded-[20px] w-fit font-bold shadow-inner">
        <button
          onClick={() => { setActiveTab('words'); setCurrentIndex(0); setCurrentFeedback(''); }}
          className={`px-6 py-3 rounded-xl transition-all ${activeTab === 'words' ? 'bg-white text-theme-primary shadow-sm' : 'text-theme-dark/50 hover:text-theme-dark'}`}
        >
          Từ vựng ({data.words.length})
        </button>
        <button
          onClick={() => { setActiveTab('sentences'); setCurrentIndex(0); setCurrentFeedback(''); }}
          className={`px-6 py-3 rounded-xl transition-all ${activeTab === 'sentences' ? 'bg-white text-theme-primary shadow-sm' : 'text-theme-dark/50 hover:text-theme-dark'}`}
        >
          Câu giao tiếp ({data.sentences.length})
        </button>
        {data.conversations && data.conversations.length > 0 && (
          <button
            onClick={() => { setActiveTab('conversations'); setCurrentIndex(0); setCurrentFeedback(''); }}
            className={`px-6 py-3 rounded-xl transition-all ${activeTab === 'conversations' ? 'bg-white text-theme-primary shadow-sm' : 'text-theme-dark/50 hover:text-theme-dark'}`}
          >
            Hội thoại ({data.conversations.length})
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Practice Module */}
        <div className="lg:col-span-7 bg-white rounded-[32px] border-4 border-theme-dark/5 p-8 shadow-2xl flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
               <div className="text-theme-primary font-black text-lg">
                 #{currentIndex + 1} / {currentListLength}
               </div>
               {isConvTab && convGroups[currentIndex] && (
                 <div className="text-sm font-bold text-theme-primary/50 uppercase tracking-widest bg-theme-primary/5 px-4 py-2 rounded-xl">
                   {convGroups[currentIndex].context}
                 </div>
               )}
            </div>
            
            <div className="space-y-6 my-4 flex-1 overflow-y-auto pr-2 hide-scrollbar">
               {!isConvTab && currentItem && (
                 <div className="text-center space-y-4 pt-4">
                   <div className="flex justify-center mb-4">
                     <button onClick={() => playAudio(currentItem.de, 'practice-' + currentItem.id)} className="w-16 h-16 bg-theme-cream rounded-full flex items-center justify-center text-theme-primary hover:bg-theme-primary hover:text-white transition-all shadow-md">
                       {playingId === 'practice-' + currentItem.id ? <Loader2 size={32} className="animate-spin" /> : <Volume2 size={32} />}
                     </button>
                   </div>
                   <h3 className="text-3xl md:text-5xl font-display font-black text-theme-dark tracking-tight break-words">{currentItem.de}</h3>
                   {currentItem.ipa && (
                     <p className="text-sm md:text-lg text-theme-primary font-mono bg-theme-primary/10 px-4 py-1 rounded-lg inline-block whitespace-normal text-center">{currentItem.ipa}</p>
                   )}
                   <p className="text-lg md:text-xl text-theme-dark/40 font-bold uppercase tracking-wider whitespace-normal">{currentItem.vi}</p>
                   <TeachingNotation syllables={currentItem.syllables} notation={currentItem.notation} isSentence={activeTab === 'sentences'} />
                   
                   {/* Record button for non-conversation */}
                   <div className="pt-6">
                     <button 
                       onMouseDown={() => startRecording(currentItem)}
                       onMouseUp={stopRecording}
                       onTouchStart={() => startRecording(currentItem)}
                       onTouchEnd={stopRecording}
                       className={`w-full max-w-sm mx-auto flex py-4 items-center justify-center gap-3 rounded-2xl font-black text-xl transition-all ${recordingId === currentItem.id ? 'bg-red-500 text-white animate-pulse shadow-xl shadow-red-200' : 'bg-theme-dark text-white shadow-xl hover:bg-theme-primary transform hover:-translate-y-1'}`}
                     >
                       {evaluatingId === currentItem.id ? <Loader2 size={24} className="animate-spin" /> : <Mic size={24} />}
                       {evaluatingId === currentItem.id ? 'Đang phân tích...' : recordingId === currentItem.id ? 'Đang nghe...' : 'Giữ & Đọc'}
                     </button>
                   </div>
                 </div>
               )}

               {isConvTab && convGroups[currentIndex] && convGroups[currentIndex].lines.map((line, idx) => (
                 <div key={line.id} className={`flex flex-col ${line.speaker === 'A' ? 'items-start' : 'items-end'}`}>
                   <div className={`flex items-end gap-3 max-w-[85%] ${line.speaker === 'A' ? 'flex-row' : 'flex-row-reverse'}`}>
                     <div className="w-10 h-10 shrink-0 rounded-full bg-theme-dark text-white flex items-center justify-center font-black text-lg shadow-md">
                       {line.speaker}
                     </div>
                     <div className={`p-4 rounded-2xl ${line.speaker === 'A' ? 'bg-theme-cream/50 rounded-bl-sm' : 'bg-theme-dark text-white rounded-br-sm'}`}>
                       <p className={`font-bold text-lg mb-1 leading-snug ${line.speaker === 'A' ? 'text-theme-dark' : 'text-white'}`}>{line.de}</p>
                       <p className={`text-sm font-medium opacity-70`}>{line.vi}</p>
                       
                       <div className={`flex gap-2 mt-3 ${line.speaker === 'A' ? 'justify-start' : 'justify-end'}`}>
                         <button onClick={() => playAudio(line.de, 'practice-' + line.id)} className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${line.speaker === 'A' ? 'bg-white text-theme-primary hover:bg-theme-primary hover:text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                           {playingId === 'practice-' + line.id ? <Loader2 size={18} className="animate-spin" /> : <Volume2 size={18} />}
                         </button>
                         <button 
                           onMouseDown={() => startRecording(line)}
                           onMouseUp={stopRecording}
                           onTouchStart={() => startRecording(line)}
                           onTouchEnd={stopRecording}
                           className={`h-10 px-4 rounded-full flex items-center justify-center gap-2 font-bold text-sm transition-all ${recordingId === line.id ? 'bg-red-500 text-white animate-pulse' : (line.speaker === 'A' ? 'bg-theme-primary text-white hover:bg-theme-primary/80' : 'bg-theme-primary text-white hover:bg-theme-primary/80')}`}
                         >
                           {evaluatingId === line.id ? <Loader2 size={16} className="animate-spin" /> : <Mic size={16} />}
                           {recordingId === line.id ? 'Đang nghe...' : (evaluatingId === line.id ? 'Phân tích...' : 'Giữ & Đọc')}
                         </button>
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
            </div>

            <div className="space-y-6 pt-4 border-t-2 border-theme-dark/5">
              {currentFeedback && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-theme-secondary/10 border-l-4 border-theme-secondary rounded-xl text-theme-dark font-medium">
                  <span className="font-bold text-theme-secondary">AI Nhận xét:</span> {currentFeedback}
                </motion.div>
              )}

              <div className="flex gap-4 justify-between">
                 <button onClick={prevItem} disabled={currentIndex === 0} className="p-5 bg-theme-cream rounded-2xl text-theme-dark/40 hover:bg-theme-dark/5 hover:text-theme-dark disabled:opacity-50 transition-all flex-1 md:flex-none">
                   <ChevronRight size={24} className="rotate-180 mx-auto" />
                 </button>
                 
                 <button onClick={nextItem} disabled={currentIndex === currentListLength - 1} className="p-5 bg-theme-dark text-white rounded-2xl hover:bg-theme-primary disabled:opacity-50 transition-all flex-1 md:flex-none items-center justify-center flex gap-2 font-bold">
                   Tiếp theo <ChevronRight size={24} />
                 </button>
              </div>
            </div>
        </div>

        {/* Radar Chart Module */}
        <div className="lg:col-span-5 bg-theme-dark text-white rounded-[32px] p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
           <div className="absolute -top-10 -right-10 w-48 h-48 bg-theme-primary/20 rounded-full blur-3xl opacity-50" />
           <h3 className="text-xl font-display font-black uppercase tracking-widest text-theme-primary">Bản đồ năng lực</h3>
           <p className="text-sm font-medium text-white/50 mb-8">Cập nhật liên tục theo cách bạn phát âm</p>
           
           <div className="flex-1 w-full relative min-h-[300px]">
             {hasData ? (
               <ResponsiveContainer width="100%" height="100%">
                 <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                   <PolarGrid stroke="rgba(255,255,255,0.1)" />
                   <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 11, fontWeight: 700 }} />
                   <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                   <Radar name="Skil" dataKey="A" stroke="#50E3C2" strokeWidth={3} fill="#50E3C2" fillOpacity={0.4} />
                   <Tooltip contentStyle={{ backgroundColor: '#1E293B', border: 'none', borderRadius: '12px' }} />
                 </RadarChart>
               </ResponsiveContainer>
             ) : (
               <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 space-y-4">
                 <BarChart3 size={64} />
                 <p className="text-sm font-bold">Bắt đầu đọc để vẽ biểu đồ</p>
               </div>
             )}
           </div>

           {hasData && (
              <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10 space-y-2">
                 <div className="flex justify-between text-xs font-black uppercase text-white/40">
                   <span>Chỉ số cao nhất</span>
                   <span className="text-emerald-400">{chartData.reduce((prev, current) => (prev.A > current.A) ? prev : current).subject}</span>
                 </div>
                 <div className="flex justify-between text-xs font-black uppercase text-white/40">
                   <span>Cần cải thiện</span>
                   <span className="text-red-400">{chartData.reduce((prev, current) => (prev.A < current.A) ? prev : current).subject}</span>
                 </div>
              </div>
           )}
        </div>

      </div>
    </div>
  );
}
