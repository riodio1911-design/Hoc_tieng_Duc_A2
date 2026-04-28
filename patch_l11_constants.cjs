const fs = require('fs');
const path = './src/constants.ts';

const data = fs.readFileSync(path, 'utf8');

const l11Content = `
  {
    id: "l11",
    title: "Lektion 11",
    subtitle: "Ich freue mich so.",
    items: [
      { id: "l11_v1", word: "der Kunde, -n / die Kundin, -nen", meaning: "khách hàng", example: "Der Kunde beschwert sich über den Service.", exampleTranslation: "Khách hàng phàn nàn về dịch vụ." },
      { id: "l11_v2", word: "die Notiz, -en", meaning: "ghi chú", example: "Ich mache mir eine Notiz.", exampleTranslation: "Tôi tạo một ghi chú." },
      { id: "l11_v3", word: "der Notizblock, ⸚e", meaning: "cuốn sổ ghi chú", example: "Er schreibt auf den Notizblock.", exampleTranslation: "Anh ấy viết vào cuốn sổ ghi chú." },
      { id: "l11_v4", word: "die Werkstatt, ⸚en", meaning: "xưởng, phân xưởng", example: "Mein Auto ist in der Werkstatt.", exampleTranslation: "Xe của tôi đang ở trong xưởng." },
      { id: "l11_v5", word: "herstellen, hat hergestellt", meaning: "sản xuất, chế tạo", example: "Wir stellen Taschen her.", exampleTranslation: "Chúng tôi sản xuất túi xách." },
      { id: "l11_v6", word: "organisieren, hat organisiert", meaning: "tổ chức", example: "Sie organisiert ein Fest.", exampleTranslation: "Cô ấy tổ chức một bữa tiệc." },
      { id: "l11_v7", word: "verwenden, hat verwendet", meaning: "sử dụng", example: "Wir verwenden nur alte Materialien.", exampleTranslation: "Chúng tôi chỉ sử dụng các vật liệu cũ." },
      { id: "l11_v8", word: "der Briefumschlag, ⸚e", meaning: "phong bì", example: "Ich brauche einen Briefumschlag für den Brief.", exampleTranslation: "Tôi cần một chiếc phong bì cho lá thư." },
      { id: "l11_v9", word: "die Handtasche, -n", meaning: "túi xách tay", example: "Sie hat eine neue Handtasche.", exampleTranslation: "Cô ấy có một cái túi xách tay mới." },
      { id: "l11_v10", word: "wegwerfen, hat weggeworfen", meaning: "vứt bỏ", example: "Man soll alte Sachen nicht wegwerfen.", exampleTranslation: "Người ta không nên vứt bỏ đồ cũ." },
      { id: "l11_v11", word: "viel Erfolg", meaning: "chúc nhiều thành công", example: "Ich wünsche dir viel Erfolg!", exampleTranslation: "Tôi chúc bạn nhiều thành công!" },
      { id: "l11_v12", word: "viel Glück", meaning: "chúc nhiều may mắn", example: "Wir wünschen Ihnen viel Glück für die Zukunft.", exampleTranslation: "Chúng tôi chúc ngài nhiều may mắn cho tương lai." },
      { id: "l11_v13", word: "sich bedanken (bei D. / für A.)", meaning: "cảm ơn", example: "Ich bedanke mich für Ihre Hilfe.", exampleTranslation: "Tôi cảm ơn vì sự giúp đỡ của ngài." },
      { id: "l11_v14", word: "wünschen, hat gewünscht", meaning: "mong ước, chúc", example: "Wir wünschen Ihnen alles Gute.", exampleTranslation: "Chúng tôi chúc ngài mọi điều tốt đẹp." },
      { id: "l11_v15", word: "der Artikel, -", meaning: "bài báo, điều khoản", example: "Hast du den Artikel gelesen?", exampleTranslation: "Bạn đã đọc bài báo chưa?" },
      { id: "l11_v16", word: "der Erwachsene, -n", meaning: "người lớn", example: "Das Spiel ist für Erwachsene.", exampleTranslation: "Trò chơi này dành cho người lớn." },
      { id: "l11_v17", word: "der Grund, ⸚e", meaning: "lý do, nguyên nhân", example: "Was ist der Grund für deinen Ärger?", exampleTranslation: "Nguyên nhân khiến bạn tức giận là gì?" },
      { id: "l11_v18", word: "die Meinung, -en", meaning: "ý kiến", example: "Was ist deine Meinung dazu?", exampleTranslation: "Ý kiến của bạn về việc này là gì?" },
      { id: "l11_v19", word: "meiner Meinung nach", meaning: "theo ý kiến của tôi", example: "Meiner Meinung nach ist das eine gute Idee.", exampleTranslation: "Theo ý kiến của tôi thì đó là một ý tưởng hay." },
      { id: "l11_v20", word: "der Schmuck", meaning: "đồ trang sức", example: "Sie trägt gern Schmuck.", exampleTranslation: "Cô ấy thích đeo đồ trang sức." },
      { id: "l11_v21", word: "der Stoff, -e", meaning: "chất liệu, vải", example: "Der Stoff ist sehr weich.", exampleTranslation: "Vải này rất mềm." },
      { id: "l11_v22", word: "sich erinnern (an A.)", meaning: "nhớ về, nhớ đến", example: "Erinnerst du dich an unseren Urlaub?", exampleTranslation: "Bạn có nhớ về kỳ nghỉ của chúng ta không?" },
      { id: "l11_v23", word: "sich fühlen", meaning: "cảm thấy", example: "Ich fühle mich heute nicht gut.", exampleTranslation: "Hôm nay tôi cảm thấy không khỏe." },
      { id: "l11_v24", word: "sich streiten", meaning: "cãi nhau", example: "Die Kinder streiten sich oft.", exampleTranslation: "Bọn trẻ thường cãi nhau." },
      { id: "l11_v25", word: "sich unterhalten (über A.)", meaning: "trò chuyện", example: "Wir unterhalten uns über das Buch.", exampleTranslation: "Chúng tôi trò chuyện về cuốn sách." },
      { id: "l11_v26", word: "verlieren, hat verloren", meaning: "đánh mất, thua", example: "Ich habe meinen Schlüssel verloren.", exampleTranslation: "Tôi đã làm mất chìa khóa." },
      { id: "l11_v27", word: "froh (sein)", meaning: "vui mừng", example: "Ich bin froh, dass du hier bist.", exampleTranslation: "Tôi rất vui vì bạn ở đây." },
      { id: "l11_v28", word: "jung", meaning: "trẻ", example: "Sie ist noch sehr jung.", exampleTranslation: "Cô ấy vẫn còn rất trẻ." },
      { id: "l11_v29", word: "schrecklich", meaning: "kinh khủng, khủng khiếp", example: "Ich finde das Wetter schrecklich.", exampleTranslation: "Tôi thấy thời tiết thật kinh khủng." },
      { id: "l11_v30", word: "stark", meaning: "mạnh mẽ", example: "Er ist sehr stark.", exampleTranslation: "Anh ấy rất mạnh mẽ." },
      { id: "l11_v31", word: "willkommen", meaning: "chào mừng, hoan nghênh", example: "Herzlich willkommen in Berlin!", exampleTranslation: "Nhiệt liệt chào mừng tới Berlin!" },
      { id: "l11_v32", word: "sich freuen (auf/über A.)", meaning: "vui mừng (về)", example: "Ich freue mich auf das Wochenende.", exampleTranslation: "Tôi rất mong chờ đến cuối tuần." },
      { id: "l11_v33", word: "sich ärgern (über A.)", meaning: "tức giận (về)", example: "Er ärgert sich über die Fehler.", exampleTranslation: "Anh ấy tức giận về những lỗi sai." },
      { id: "l11_v34", word: "sich beschweren (über A.)", meaning: "phàn nàn (về)", example: "Wir beschweren uns über den Lärm.", exampleTranslation: "Chúng tôi phàn nàn về tiếng ồn." },
      { id: "l11_v35", word: "gratulieren (D.)", meaning: "chúc mừng (ai đó)", example: "Ich gratuliere dir zum Geburtstag.", exampleTranslation: "Tôi chúc mừng sinh nhật bạn." }
    ],
    grammar: [
      { id: "l11_g1", word: "Reflexive Verben (Động từ phản thân)", meaning: "Cách sử dụng động từ đi cùng đại từ phản thân (Reflexivpronomen)", rule: "Nhiều động từ trong tiếng Đức luôn đi kèm với đại từ phản thân. Đại từ phản thân ở cách Akkusativ: ich -> mich, du -> dich, er/es/sie -> sich, wir -> uns, ihr -> euch, sie/Sie -> sich.", example: "Ich fühle mich prima. - Freut ihr euch auf das Wochenende?", exampleTranslation: "Tôi cảm thấy tuyệt vời. - Các bạn có mong chờ đến cuối tuần không?" },
      { id: "l11_g2", word: "Etwas bewerten (Đánh giá điều gì đó)", meaning: "Các mẫu câu dùng để nhận xét hoặc đưa ra ý kiến đánh giá", rule: "Để nói lên quan điểm cá nhân, ta thường dùng các câu chứa 'dass': Ich finde es traurig/schön/schrecklich, dass... ; Ich bin froh/denke/glaube, dass... ; Meiner Meinung nach ist es sehr gut, dass...", example: "Ich finde es traurig, dass man so viel wegwirft.", exampleTranslation: "Tôi thấy thật buồn khi người ta vứt bỏ quá nhiều." },
      { id: "l11_g3", word: "Gratulieren und sich bedanken", meaning: "Mẫu câu dùng để chúc mừng và cảm ơn", rule: "Mẫu câu chúc mừng: Herzlichen Glückwunsch zum Jubiläum! / Alles Gute zum Jubiläum! / Viel Glück! / Wir wünschen Ihnen ... / Wir gratulieren Ihnen / dir. Cảm ơn: Wir danken Ihnen für ... / Wir bedanken uns für ...", example: "Herzlichen Glückwunsch zum zehnjährigen Jubiläum!", exampleTranslation: "Chúc mừng sinh nhật 10 năm thành lập!" }
    ]
  },`;

const newData = data.replace(
  '    id: "l13",',
  l11Content + '\n  {\n    id: "l13",'
);

fs.writeFileSync(path, newData);
console.log('constants.ts updated successfully with Lektion 11');
