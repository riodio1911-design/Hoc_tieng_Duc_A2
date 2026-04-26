import fs from 'fs';

const constPath = 'src/constants.ts';
let content = fs.readFileSync(constPath, 'utf8');

const introScript = "export const L20_INTRO_SCRIPT = `Xin chào các bạn. Hãy cùng bước vào Lektion 20 với chủ đề về thói quen đọc sách và những kỷ niệm thuở ấu thơ. Bài học này sẽ cung cấp cho chúng ta một lượng lớn từ vựng về các thể loại sách báo, tạp chí cũng như cách bày tỏ sự quan tâm, hứng thú đối với một chủ đề nào đó. Đặc biệt về mặt ngữ pháp, chúng ta sẽ học cách kể lại những chuyện đã xảy ra trong quá khứ thông qua thì Präteritum (Quá khứ đơn) của các động từ khuyết thiếu (Modalverben). Nào, hãy cùng nhau khám phá thế giới sách muôn màu ngay bây giờ nhé!`;\n\n";

const grammarScript = "export const L20_GRAMMAR_SCRIPT = `Xin chào các bạn. Trọng tâm ngữ pháp của bài 20 là cách chia động từ khuyết thiếu - Modalverben ở thì quá khứ đơn Präteritum. Quá khứ đơn rất hay được dùng để kể chuyện xảy ra trong quá khứ. Đặc điểm quan trọng nhất các bạn cần nhớ khi chuyển Modalverben từ hiện tại sang quá khứ đơn là chúng ta bỏ dấu Umlaut đi và thêm đuôi -te. Ví dụ: können chuyển thành konnte, müssen chuyển thành musste, dürfen thành durfte, wollen thành wollte, sollen thành sollte, và mögen thành mochte. Các ngôi ich và er/sie/es sẽ có cách chia hoàn toàn giống nhau. Ví dụ: Als Kind durfte ich keine Comics lesen. (Hồi nhỏ tôi không được phép đọc truyện tranh). Hãy cùng luyện tập thêm trong bài nhé!`;\n\n";

if (!content.includes('L20_INTRO_SCRIPT')) {
  const vocabDataIndex = content.indexOf('export const VOCABULARY_DATA');
  content = content.slice(0, vocabDataIndex) + introScript + grammarScript + content.slice(vocabDataIndex);
}

const newLektion = `  {
    id: "l20",
    title: "Lektion 20",
    subtitle: "Ich durfte eigentlich keine Comics lesen",
    items: [
      { id: "v20_1", word: "der Comic", ipa: "/ˈkɔmɪk/", meaning: "Truyện tranh", example: "Ich lese gern Comics.", grammar: "Pl: die Comics", category: "Medien" },
      { id: "v20_2", word: "das Märchen", ipa: "/ˈmɛːɐ̯çən/", meaning: "Truyện cổ tích", example: "Meine Oma hat mir früher Märchen erzählt.", grammar: "Pl: die Märchen", category: "Medien" },
      { id: "v20_3", word: "das Bilderbuch", ipa: "/ˈbɪldɐˌbuːx/", meaning: "Sách tranh", example: "Das ist ein schönes Bilderbuch für Kinder.", grammar: "Pl: die Bilderbücher", category: "Medien" },
      { id: "v20_4", word: "das Sachbuch", ipa: "/ˈzaxˌbuːx/", meaning: "Sách chuyên ngành/thông tin", example: "Ich lese gern Sachbücher über Geschichte.", grammar: "Pl: die Sachbücher", category: "Medien" },
      { id: "v20_5", word: "das Hörbuch", ipa: "/ˈhøːɐ̯ˌbuːx/", meaning: "Sách nói", example: "Im Auto höre ich oft ein Hörbuch.", grammar: "Pl: die Hörbücher", category: "Medien" },
      { id: "v20_6", word: "der Krimi", ipa: "/ˈkʁimi/", meaning: "Truyện/phim trinh thám", example: "Krimis sind sehr spannend.", grammar: "Pl: die Krimis", category: "Medien" },
      { id: "v20_7", word: "der Roman", ipa: "/ʁoˈmaːn/", meaning: "Tiểu thuyết", example: "Sie liest einen dicken Roman.", grammar: "Pl: die Romane", category: "Medien" },
      { id: "v20_8", word: "das Kinderbuch", ipa: "/ˈkɪndɐˌbuːx/", meaning: "Sách trẻ em", example: "Das ist ein bekanntes Kinderbuch.", grammar: "Pl: die Kinderbücher", category: "Medien" },
      { id: "v20_9", word: "der Ratgeber", ipa: "/ˈʁaːtˌɡeːbɐ/", meaning: "Sách hướng dẫn / Cố vấn", example: "Ich habe einen Ratgeber über Pflanzen gekauft.", grammar: "Pl: die Ratgeber", category: "Medien" },
      { id: "v20_10", word: "das Gedicht", ipa: "/ɡəˈdɪçt/", meaning: "Bài thơ", example: "Er hat ein romantisches Gedicht geschrieben.", grammar: "Pl: die Gedichte", category: "Medien" },
      { id: "v20_11", word: "die Zeitschrift", ipa: "/ˈt͡saɪ̯tˌʃʁɪft/", meaning: "Tạp chí", example: "Liest du gern Computerzeitschriften?", grammar: "Pl: die Zeitschriften", category: "Medien" },
      { id: "v20_12", word: "die Zeitung", ipa: "/ˈt͡saɪ̯tʊŋ/", meaning: "Tờ báo", example: "Mein Vater liest jeden Morgen die Zeitung.", grammar: "Pl: die Zeitungen", category: "Medien" },
      { id: "v20_13", word: "die Literatur", ipa: "/litəʁaˈtuːɐ̯/", meaning: "Văn học", example: "Er studiert deutsche Literatur.", category: "Kultur" },
      { id: "v20_14", word: "die Geschichte", ipa: "/ɡəˈʃɪçtə/", meaning: "Câu chuyện / Lịch sử", example: "Die Geschichte ist sehr lustig.", grammar: "Pl: die Geschichten", category: "Kultur" },
      { id: "v20_15", word: "der Autor", ipa: "/ˈaʊ̯toːɐ̯/", meaning: "Tác giả (nam)", example: "Der Autor schreibt spannende Bücher.", grammar: "Pl: die Autoren", category: "Personen" },
      { id: "v20_16", word: "spannend", ipa: "/ˈʃpanənt/", meaning: "Hấp dẫn, hồi hộp", example: "Der Film war sehr spannend.", category: "Adjektiv" },
      { id: "v20_17", word: "romantisch", ipa: "/ʁoˈmantɪʃ/", meaning: "Lãng mạn", example: "Das ist ein romantisches Buch.", category: "Adjektiv" },
      { id: "v20_18", word: "lustig", ipa: "/ˈlʊstɪç/", meaning: "Vui nhộn, hài hước", example: "Der Comic ist total lustig.", category: "Adjektiv" },
      { id: "v20_19", word: "interessant", ipa: "/ɪntəʁɛˈsant/", meaning: "Thú vị", example: "Dieses Sachbuch ist sehr interessant.", category: "Adjektiv" },
      { id: "v20_20", word: "traurig", ipa: "/ˈtʁaʊ̯ʁɪç/", meaning: "Buồn", example: "Die Geschichte hat ein trauriges Ende.", category: "Adjektiv" },
      { id: "v20_21", word: "langweilig", ipa: "/ˈlaŋˌvaɪ̯lɪç/", meaning: "Nhàm chán", example: "Das Buch finde ich ehrlich gesagt langweilig.", category: "Adjektiv" },
      { id: "v20_22", word: "furchtbar", ipa: "/ˈfʊʁçtbaːɐ̯/", meaning: "Khủng khiếp", example: "Das Wetter war furchtbar.", category: "Adjektiv" },
      { id: "v20_23", word: "ehrlich", ipa: "/ˈeːɐ̯lɪç/", meaning: "Thành thật / trung thực", example: "Ehrlich gesagt, habe ich keine Lust.", category: "Adjektiv" },
      { id: "v20_24", word: "vorlesen", ipa: "/ˈfoːɐ̯ˌleːzn̩/", meaning: "Đọc to lên (cho ai nghe)", example: "Mein Vater hat mir oft Märchen vorgelesen.", grammar: "liest vor, hat vorgelesen", category: "Verb" },
      { id: "v20_25", word: "erfahren", ipa: "/ɛɐ̯ˈfaːʁən/", meaning: "Trải nghiệm / biết được", example: "Man erfährt viel über die Krankheit.", grammar: "erfährt, hat erfahren", category: "Verb" },
      { id: "v20_26", word: "weinen", ipa: "/ˈvaɪ̯nən/", meaning: "Khóc", example: "Bei diesem Text musste ich weinen.", grammar: "hat geweint", category: "Verb" },
      { id: "v20_27", word: "sich beeilen", ipa: "/bəˈʔaɪ̯lən/", meaning: "Vội vàng, khẩn trương", example: "Ich musste mich beeilen, weil ich zu spät aufgestanden bin.", grammar: "hat sich beeilt", category: "Verb" },
      { id: "v20_28", word: "das Interesse", ipa: "/ɪnˈtʁɛsə/", meaning: "Sự quan tâm / sở thích", example: "Ich habe großes Interesse an Kunst.", grammar: "Pl: die Interessen", category: "Allgemein" },
      { id: "v20_29", word: "sich interessieren für", ipa: "/ɪntəʁɛˈsiːʁən/", meaning: "Quan tâm đến cái gì", example: "Interessierst du dich für Autos?", grammar: "+ Akkusativ", category: "Verb" },
      { id: "v20_30", word: "überhaupt", ipa: "/yːbɐˈhaʊ̯pt/", meaning: "Hoàn toàn (không)", example: "Das interessiert mich überhaupt nicht.", category: "Allgemein" }
    ],
    grammar: [
      { id: "g20_1", word: "Modalverben im Präteritum", meaning: "Động từ khuyết thiếu ở thì quá khứ", rule: "Bỏ dấu Umlaut (ä, ö, ü) của động từ khuyết thiếu nguyên thể và thêm đuôi quá khứ (-te). Ví dụ: können -> konnte, müssen -> musste, dürfen -> durfte, wollen -> wollte, sollen -> sollte, mögen -> mochte.", example: "Als Kind durfte ich keine Comics lesen.", exampleTranslation: "Hồi nhỏ tôi không được phép đọc truyện tranh." },
      { id: "g20_2", word: "Interesse haben an + Dativ", meaning: "Quan tâm/hứng thú với cái gì", rule: "Dùng để diễn tả sự quan tâm đến một đối tượng nào đó, theo sau giới từ 'an' là cách 3 (Dativ).", example: "Hast du Interesse an Büchern?", exampleTranslation: "Bạn có hứng thú với sách không?" },
      { id: "g20_3", word: "sich interessieren für + Akkusativ", meaning: "Quan tâm đến cái gì", rule: "Động từ phản thân đi với giới từ 'für' cộng cách 4 (Akkusativ) có nghĩa giống với 'Interesse haben an'.", example: "Ich interessiere mich für Geschichte.", exampleTranslation: "Tôi quan tâm đến lịch sử." }
    ]
  },
`;

if (!content.includes('id: "l20"')) {
  const l21Index = content.indexOf('    id: "l21"');
  if (l21Index !== -1) {
    const insertIndex = content.lastIndexOf('  {', l21Index);
    content = content.slice(0, insertIndex) + newLektion + content.slice(insertIndex);
  } else {
    console.log("Could not find l21");
  }
}

fs.writeFileSync(constPath, content, 'utf8');
console.log("Done updating constants.ts for L20");
