import fs from 'fs';

const constPath = 'src/constants.ts';
let content = fs.readFileSync(constPath, 'utf8');

// The scripts
const introScript = "export const L19_INTRO_SCRIPT = `Xin chào các bạn. Chọn chương trình và hoạt động vui chơi giải trí ngày hôm nay thật là thú vị. Bài 19 của giáo trình Menschen B1 sẽ hướng dẫn chúng ta cách giao tiếp, lên kế hoạch cho cuộc hẹn đi ra ngoài, thảo luận xem chúng ta nên đi xem phim hay nghe nhạc, đặc biệt là cách sử dụng những từ vựng để diễn đạt cảm xúc khen ngợi, hoặc chê bai một tác phẩm hay buổi biểu diễn. Về mặt ngữ pháp, các bạn sẽ làm quen với giới từ chỉ hướng trả lời cho câu hỏi Woher (từ đâu đến) và Wohin (đi đâu). Đừng quên, giới từ Woher thường đi với aus/von cộng Dativ, còn Wohin đi với zu (cộng Dativ) hoặc in (cộng Akkusativ). Nào, hãy cùng bắt đầu Lektion 19 ngay nhé!`;\n\n";

const grammarScript = "export const L19_GRAMMAR_SCRIPT = `Xin chào các bạn. Về Ngữ pháp bài 19, trọng tâm lớn nhất của chúng ta là các giới từ chỉ địa điểm Lokale Präpositionen dùng để trả lời cho hai câu hỏi chính: Woher (từ đâu đến) và Wohin (đi đâu đến). Đầu tiên, khi trả lời câu hỏi Woher, chúng ta dùng giới từ 'aus' cộng với Dativ dành cho các không gian kín (như nhà cửa, rạp phim) hoặc 'von' cộng với Dativ (dành cho người, địa điểm chuyên biệt hoặc sự kiện). Ví dụ: 'Ich komme gerade aus dem Kino.' hoặc 'Ich komme vom Sport, vom Arzt.' Thứ hai, khi trả lời câu hỏi Wohin, chúng ta dùng giới từ 'in' cộng với Akkusativ khi đi vào bên trong, và 'zu' cộng với Dativ khi đi đến chỗ của ai đó hoặc một sự kiện nào đó. Ví dụ: 'Ich gehe ins Kino.' hoặc 'Ich gehe zu Paul. Ich gehe zum Arzt.' Hãy nhớ đặc điểm quan trọng này nhé!`;\n\n";

if (!content.includes('L19_INTRO_SCRIPT')) {
  // Insert before L22_GRAMMAR_SCRIPT or just before VOCABULARY_DATA
  const vocabDataIndex = content.indexOf('export const VOCABULARY_DATA');
  content = content.slice(0, vocabDataIndex) + introScript + grammarScript + content.slice(vocabDataIndex);
}

// Add to VOCABULARY_DATA
const newLektion = `  {
    id: "l19",
    title: "Lektion 19",
    subtitle: "Wohin gehen wir heute?",
    items: [
      { id: "v19_1", word: "das Publikum", ipa: "/ˈpuːblikʊm/", meaning: "Khán giả, công chúng", example: "Das Publikum war begeistert.", exampleTranslation: "Khán giả rất hào hứng.", category: "Kultur" },
      { id: "v19_2", word: "die Sendung", ipa: "/ˈzɛndʊŋ/", meaning: "Chương trình (máy thu thanh, truyền hình)", example: "Die Sendung beginnt um 20 Uhr.", exampleTranslation: "Chương trình bắt đầu lúc 20 giờ.", category: "Medien" },
      { id: "v19_3", word: "der Spielfilm", ipa: "/ˈʃpiːlˌfɪlm/", meaning: "Phim truyện", example: "Wir schauen einen Spielfilm.", exampleTranslation: "Chúng tôi xem một bộ phim truyện.", category: "Medien" },
      { id: "v19_4", word: "die Ausstellung", ipa: "/ˈaʊ̯sˌʃtɛlʊŋ/", meaning: "Cuộc triển lãm", example: "Wir gehen in die Ausstellung.", exampleTranslation: "Chúng tôi đi xem triển lãm.", category: "Kultur" },
      { id: "v19_5", word: "die Vorstellung", ipa: "/ˈfoːɐ̯ˌʃtɛlʊŋ/", meaning: "Buổi biểu diễn", example: "Die Vorstellung war ausgezeichnet.", exampleTranslation: "Buổi biểu diễn rất xuất sắc.", category: "Kultur" },
      { id: "v19_6", word: "die Eröffnung", ipa: "/ɛɐ̯ˈʔœfnʊŋ/", meaning: "Sự khai mạc, khai trương", example: "Zur Eröffnung gab es Sekt.", exampleTranslation: "Có rượu champagne tại lễ khai mạc.", category: "Kultur" },
      { id: "v19_7", word: "der Spaziergang", ipa: "/ʃpaˈt͡siːɐ̯ˌɡaŋ/", meaning: "Cuộc đi dạo", example: "Wir machen einen Spaziergang.", exampleTranslation: "Chúng tôi đang đi dạo.", category: "Freizeit" },
      { id: "v19_8", word: "der Club", ipa: "/klʊp/", meaning: "Câu lạc bộ", example: "Sie gehen am Wochenende in den Club.", exampleTranslation: "Họ đi đến câu lạc bộ vào cuối tuần.", category: "Freizeit" },
      { id: "v19_9", word: "die Kultur", ipa: "/kʊlˈtuːɐ̯/", meaning: "Văn hóa", example: "Er interessiert sich für Kultur.", exampleTranslation: "Anh ấy quan tâm đến văn hóa.", category: "Kultur" },
      { id: "v19_10", word: "der Beginn", ipa: "/beˈɡɪn/", meaning: "Sự bắt đầu", example: "Der Beginn ist um 19 Uhr.", exampleTranslation: "Bắt đầu lúc 19 giờ.", category: "Allgemein" },
      { id: "v19_11", word: "ausgezeichnet", ipa: "/ˈaʊ̯sɡəˈt͡saɪ̯çnət/", meaning: "Xuất sắc, tuyệt vời", example: "Das Essen war ausgezeichnet.", exampleTranslation: "Thức ăn rất tuyệt vời.", category: "Adjektiv" },
      { id: "v19_12", word: "beliebt", ipa: "/bəˈliːpt/", meaning: "Được yêu thích / Phổ biến", example: "Das Restaurant ist sehr beliebt.", exampleTranslation: "Nhà hàng này rất được yêu thích.", category: "Adjektiv" },
      { id: "v19_13", word: "klassisch", ipa: "/ˈklasɪʃ/", meaning: "Cổ điển", example: "Ich mag klassische Musik.", exampleTranslation: "Tôi thích nhạc cổ điển.", category: "Adjektiv" },
      { id: "v19_14", word: "kostenlos / gratis", ipa: "/ˈkɔstn̩ˌloːs/", meaning: "Miễn phí", example: "Der Eintritt ist kostenlos.", exampleTranslation: "Vào cửa miễn phí.", category: "Adjektiv" },
      { id: "v19_15", word: "kulturell", ipa: "/kʊltuˈʁɛl/", meaning: "Thuộc về văn hóa", example: "Wir nehmen an einem kulturellen Event teil.", exampleTranslation: "Chúng tôi tham gia một sự kiện văn hóa.", category: "Adjektiv" },
      { id: "v19_16", word: "negativ", ipa: "/ˈneːɡatiːf/", meaning: "Tiêu cực", example: "Sei nicht so negativ!", exampleTranslation: "Đừng có tỏ ra tiêu cực như vậy!", category: "Adjektiv" },
      { id: "v19_17", word: "positiv", ipa: "/ˈpoːzitiːf/", meaning: "Tích cực", example: "Er hat eine positive Einstellung.", exampleTranslation: "Anh ấy có một thái độ tích cực.", category: "Adjektiv" },
      { id: "v19_18", word: "neugierig", ipa: "/ˈnɔɪ̯ˌɡiːʁɪç/", meaning: "Tò mò", example: "Bist du gar nicht neugierig?", exampleTranslation: "Bạn không tò mò chút nào sao?", category: "Adjektiv" },
      { id: "v19_19", word: "wahr", ipa: "/vaːɐ̯/", meaning: "Đúng, có thật", example: "Das ist wahr.", exampleTranslation: "Điều đó là sự thật.", category: "Adjektiv" },
      { id: "v19_20", word: "eröffnen", ipa: "/ɛɐ̯ˈʔœfnən/", meaning: "Mở cửa, khai trương", example: "Ein neues Café wird eröffnet.", exampleTranslation: "Một quán cà phê mới đang được khai trương.", category: "Verb" },
      { id: "v19_21", word: "verlängern", ipa: "/fɛɐ̯ˈlɛŋɐn/", meaning: "Kéo dài, gia hạn", example: "Die Ausstellung wird verlängert.", exampleTranslation: "Buổi triển lãm được kéo dài.", category: "Verb" },
      { id: "v19_22", word: "verpassen", ipa: "/fɛɐ̯ˈpasn̩/", meaning: "Bỏ lỡ", example: "Du solltest diesen Film nicht verpassen.", exampleTranslation: "Bạn không nên bỏ lỡ bộ phim này.", category: "Verb" },
      { id: "v19_23", word: "recht haben", ipa: "/ʁɛçt ˈhaːbən/", meaning: "Có lý, đúng", example: "Du hast recht.", exampleTranslation: "Bạn nói đúng.", category: "Verb" },
      { id: "v19_24", word: "unternehmen", ipa: "/ˌʊntɐˈneːmən/", meaning: "Thực hiện (một hoạt động)", example: "Wollen wir heute Abend etwas unternehmen?", exampleTranslation: "Tối nay chúng ta có muốn làm gì đó không?", category: "Verb" },
      { id: "v19_25", word: "versuchen", ipa: "/fɛɐ̯ˈzuːxn̩/", meaning: "Thử, cố gắng", example: "Versuch das doch mal.", exampleTranslation: "Hãy thử xem sao.", category: "Verb" },
      { id: "v19_26", word: "weggehen", ipa: "/ˈvɛkˌɡeːən/", meaning: "Đi ra ngoài chơi, rời đi", example: "Wir wollen am Wochenende weggehen.", exampleTranslation: "Chúng tôi muốn ra ngoài đi chơi vào cuối tuần.", category: "Verb" },
      { id: "v19_27", word: "überzeugen", ipa: "/ˌyːbɐˈt͡sɔɪ̯ɡən/", meaning: "Thuyết phục", example: "Ich versuche, ihn zu überzeugen.", exampleTranslation: "Tôi đang cố gắng thuyết phục anh ấy.", category: "Verb" },
      { id: "v19_28", word: "sich lohnen", ipa: "/zɪç ˈloːnən/", meaning: "Đáng giá, bõ công", example: "Das lohnt sich bestimmt.", exampleTranslation: "Chắc chắn là bõ công đó.", category: "Verb" },
      { id: "v19_29", word: "probieren", ipa: "/pʁoˈbiːʁən/", meaning: "Thử nghiệm, nếm", example: "Probier mal!", exampleTranslation: "Hãy thử đi!", category: "Verb" }
    ],
    grammar: [
      { id: "g19_1", word: "aus / von (Woher?)", meaning: "Từ đâu đến?", rule: "'aus' cộng Dativ dùng cho không gian kín (aus dem Kino). 'von' cộng Dativ dùng cho người, sự kiện hoặc hoạt động (vom Arzt, vom Sport).", example: "Ich komme gerade aus dem Theater.", exampleTranslation: "Tôi vừa từ nhà hát về." },
      { id: "g19_2", word: "in / zu (Wohin?)", meaning: "Đi đâu?", rule: "'in' cộng Akkusativ dùng cho đi vào bên trong (ins Kino). 'zu' cộng Dativ dùng khi đi đến nơi nào đó xác định, hoặc người nào đó (zur Bank, zu Paul).", example: "Wir gehen heute Abend ins Kino.", exampleTranslation: "Tối nay chúng ta sẽ đi xem phim." }
    ]
  },
`;

if (!content.includes('id: "l19"')) {
  // We want to insert it before l21
  const l21Index = content.indexOf('    id: "l21"');
  if (l21Index !== -1) {
    // find the start of the l21 object, which is "  {"
    const insertIndex = content.lastIndexOf('  {', l21Index);
    content = content.slice(0, insertIndex) + newLektion + content.slice(insertIndex);
  } else {
    console.log("Could not find l21");
  }
}

fs.writeFileSync(constPath, content, 'utf8');
console.log("Done updating constants.ts");
