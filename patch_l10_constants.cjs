const fs = require('fs');
const content = fs.readFileSync('src/constants.ts', 'utf8');

const l10 = `  {
    id: "l10",
    title: "Lektion 10",
    subtitle: "Gut, dass du reserviert hast",
    items: [
      { id: "l10_v1", word: "das Besteck, -e", meaning: "dao dĩa (chung)", example: "Das Besteck liegt auf dem Tisch.", exampleTranslation: "Dao dĩa đặt trên bàn." },
      { id: "l10_v2", word: "die Gabel, -n", meaning: "cái dĩa", example: "Die Gabel ist nicht sauber.", exampleTranslation: "Cái dĩa không sạch." },
      { id: "l10_v3", word: "das Glas, ⸚er", meaning: "cái ly", example: "Bringen Sie mir bitte ein Glas Wasser.", exampleTranslation: "Làm ơn mang cho tôi một ly nước." },
      { id: "l10_v4", word: "die Kanne, -n", meaning: "cái bình", example: "Ich hätte gern eine Kanne Tee.", exampleTranslation: "Tôi muốn một bình trà." },
      { id: "l10_v5", word: "der Löffel, -", meaning: "cái thìa", example: "Mir fehlt ein Löffel für die Suppe.", exampleTranslation: "Tôi thiếu một cái thìa để ăn súp." },
      { id: "l10_v6", word: "das Lokal, -e", meaning: "quán ăn, nhà hàng", example: "Das Lokal am Marktplatz ist sehr beliebt.", exampleTranslation: "Quán ăn ở quảng trường rất được yêu thích." },
      { id: "l10_v7", word: "das Messer, -", meaning: "con dao", example: "Könnte ich ein anderes Messer bekommen?", exampleTranslation: "Tôi có thể lấy một con dao khác được không?" },
      { id: "l10_v8", word: "die Rechnung, -en", meaning: "hóa đơn", example: "Die Rechnung, bitte!", exampleTranslation: "Làm ơn thanh toán!" },
      { id: "l10_v9", word: "die Tasse, -n", meaning: "tách, cốc", example: "Möchtest du eine Tasse Kaffee?", exampleTranslation: "Bạn có muốn một tách cà phê không?" },
      { id: "l10_v10", word: "der Teller, -", meaning: "cái đĩa", example: "Die Teller sind sehr schön.", exampleTranslation: "Những cái đĩa này rất đẹp." },
      { id: "l10_v11", word: "reservieren, hat reserviert", meaning: "đặt chỗ", example: "Gut, dass du einen Tisch reserviert hast.", exampleTranslation: "Thật tốt vì bạn đã đặt bàn." },
      { id: "l10_v12", word: "stimmen, stimmt so", meaning: "đúng vậy / cứ giữ lại tiền thừa nhé", example: "Hier bitte, stimmt so.", exampleTranslation: "Đây ạ, tiền thừa cứ giữ lại nhé." },
      { id: "l10_v13", word: "zusammen <-> getrennt", meaning: "cùng nhau <-> riêng (tính tiền)", example: "Zahlen Sie zusammen oder getrennt?", exampleTranslation: "Quý khách thanh toán chung hay riêng?" },
      { id: "l10_v14", word: "der Augenblick / der Moment", meaning: "một chốc, một lát", example: "Einen Augenblick, bitte.", exampleTranslation: "Xin chờ một lát." },
      { id: "l10_v15", word: "verzeihen (Sie)", meaning: "xin lỗi, tha lỗi", example: "Verzeihen Sie, aber die Suppe ist kalt.", exampleTranslation: "Xin lỗi, nhưng súp bị lạnh." },
      { id: "l10_v16", word: "der Essig", meaning: "giấm", example: "Der Salat braucht mehr Essig.", exampleTranslation: "Salad cần thêm giấm." },
      { id: "l10_v17", word: "das Hähnchen, -", meaning: "thịt gà", example: "Ich nehme das Hähnchen mit Pommes.", exampleTranslation: "Tôi lấy phần gà với khoai tây chiên." },
      { id: "l10_v18", word: "das Öl, -e", meaning: "dầu ăn", example: "Könnten Sie mir Essig und Öl bringen?", exampleTranslation: "Bạn có thể mang cho tôi giấm và dầu không?" },
      { id: "l10_v19", word: "die Pommes frites", meaning: "khoai tây chiên", example: "Die Kinder essen gern Pommes.", exampleTranslation: "Trẻ em thích ăn khoai tây chiên." },
      { id: "l10_v20", word: "das Salz", meaning: "muối", example: "Die Kartoffeln haben zu viel Salz.", exampleTranslation: "Khoai tây có quá nhiều muối." },
      { id: "l10_v21", word: "die Soße, -n", meaning: "nước sốt", example: "Ist die Soße scharf?", exampleTranslation: "Nước sốt có cay không?" },
      { id: "l10_v22", word: "das Schnitzel, -", meaning: "thịt tẩm bột chiên", example: "Ein Schnitzel Wiener Art, bitte.", exampleTranslation: "Cho tôi một phần Schnitzel kiểu Vienna." },
      { id: "l10_v23", word: "das Steak, -s", meaning: "bít tết", example: "Ich möchte das Steak medium.", exampleTranslation: "Tôi muốn bít tết chín vừa." },
      { id: "l10_v24", word: "der Zucker", meaning: "đường", example: "Ich trinke Kaffee ohne Zucker.", exampleTranslation: "Tôi uống cà phê không đường." },
      { id: "l10_v25", word: "reagieren, hat reagiert", meaning: "phản ứng", example: "Wie hat der Kellner reagiert?", exampleTranslation: "Bồi bàn đã phản ứng thế nào?" },
      { id: "l10_v26", word: "wenigstens", meaning: "ít nhất là", example: "Du hast wenigstens noch Wasser.", exampleTranslation: "Ít nhất là bạn vẫn còn nước." },
      { id: "l10_v27", word: "sondern", meaning: "mà là", example: "Das ist kein Rindfleisch, sondern Schweinefleisch.", exampleTranslation: "Đó không phải thịt bò, mà là thịt lợn." }
    ],
    grammar: [
      { id: "l10_g1", word: "dass-Sätze (Mệnh đề phụ với dass)", meaning: "Câu phụ bắt đầu bằng dass (rằng)", rule: "Mệnh đề phụ bắt đầu bằng 'dass' (rằng) dùng để bổ sung ý nghĩa cho mệnh đề chính. Động từ được chia trong mệnh đề 'dass' PHẢI ĐỨNG Ở CUỐI CÂU.", example: "Ich finde, dass das Restaurant toll ist. / Es ist gut, dass du reserviert hast.", exampleTranslation: "Tôi thấy rằng nhà hàng rất tuyệt. / Thật tốt là bạn đã đặt bàn." },
      { id: "l10_g2", word: "Ausdrücke vor dass-Sätzen", meaning: "Các cụm từ thường đứng trước mệnh đề dass", rule: "Thường đứng sau các động từ/cụm từ bày tỏ ý kiến, cảm xúc hoặc suy nghĩ: Ich finde/glaube/denke/hoffe/weiß, dass... hoặc các cấu trúc như Gut/Schön/Schade, dass... / Kann es sein, dass...?", example: "Ich hoffe, dass das Essen bald kommt.", exampleTranslation: "Tôi hi vọng rằng đồ ăn sẽ đến sớm." },
      { id: "l10_g3", word: "Reklamieren im Restaurant", meaning: "Mẫu câu phàn nàn trong nhà hàng", rule: "Dùng để báo cáo sự cố lịch sự: Verzeihen Sie, aber die Suppe ist kalt. / Das Messer ist nicht sauber. / Die Kartoffeln waren versalzen. Phản hồi của phục vụ: Oh, das tut mir leid. Ich bringe sofort ein anderes/eine neue (Món thay thế).", example: "Entschuldigung, die Gabel ist nicht sauber. - Oh, das tut mir leid.", exampleTranslation: "Xin lỗi, cái dĩa không được sạch. - Ồ, tôi rất xin lỗi." }
    ]
  },
`;

const newContent = content.replace("  {\n    id: \"l13\",", l10 + "  {\n    id: \"l13\",");
fs.writeFileSync('src/constants.ts', newContent);
