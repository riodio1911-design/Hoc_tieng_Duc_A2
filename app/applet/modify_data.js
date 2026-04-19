const fs = require('fs');

const data = [
  { w: 'das Dokument', s: 'Ich habe das Dokument gelesen, weil ich den Vertrag verstehen wollte.', vi: 'Tôi đã đọc tài liệu vì tôi muốn hiểu hợp đồng.', wvi: 'Tài liệu' },
  { w: 'der Ausweis', s: 'Ich musste meinen Ausweis zeigen, als ich zur Polizei gegangen bin.', vi: 'Tôi đã phải xuất trình giấy tờ khi tôi đến đồn cảnh sát.', wvi: 'Giấy tờ tùy thân' },
  { w: 'Bargeld', s: 'Ich hatte kein Bargeld dabei, deshalb konnte ich nichts kaufen.', vi: 'Tôi không có tiền mặt nên không thể mua gì.', wvi: 'Tiền mặt' },
  { w: 'die EC-Karte', s: 'Ich habe meine EC-Karte verloren und musste sie sperren lassen.', vi: 'Tôi đã làm mất thẻ ngân hàng và phải khóa nó.', wvi: 'Thẻ ngân hàng' },
  { w: 'die Telefonkarte', s: 'Früher habe ich oft eine Telefonkarte benutzt, wenn ich telefonieren wollte.', vi: 'Trước đây tôi thường dùng thẻ điện thoại khi muốn gọi điện.', wvi: 'Thẻ điện thoại' },
  { w: 'die Gesundheitskarte', s: 'Ich musste meine Gesundheitskarte zeigen, als ich beim Arzt war.', vi: 'Tôi phải đưa thẻ bảo hiểm y tế khi đi khám.', wvi: 'Thẻ bảo hiểm y tế' },
  { w: 'der Einbruch', s: 'Es gab einen Einbruch, während wir im Urlaub waren.', vi: 'Có một vụ trộm khi chúng tôi đi nghỉ.', wvi: 'Vụ đột nhập/trộm' },
  { w: 'die Feuerwehr', s: 'Die Feuerwehr musste kommen, weil das Haus gebrannt hat.', vi: 'Đội cứu hỏa phải đến vì nhà bị cháy.', wvi: 'Đội cứu hỏa' },
  { w: 'der Polizist', s: 'Der Polizist hat mir geholfen, nachdem ich den Täter gesehen hatte.', vi: 'Cảnh sát đã giúp tôi sau khi tôi thấy thủ phạm.', wvi: 'Cảnh sát (nam)' },
  { w: 'die Polizistin', s: 'Die Polizistin hat alles notiert, was der Zeuge gesagt hat.', vi: 'Nữ cảnh sát đã ghi lại tất cả những gì nhân chứng nói.', wvi: 'Cảnh sát (nữ)' },
  { w: 'das Schloss', s: 'Ich konnte die Tür nicht öffnen, weil das Schloss kaputt war.', vi: 'Tôi không mở được cửa vì ổ khóa bị hỏng.', wvi: 'Ổ khóa' },
  { w: 'der Täter', s: 'Der Täter ist schnell weggelaufen, bevor die Polizei gekommen ist.', vi: 'Thủ phạm đã chạy đi trước khi cảnh sát đến.', wvi: 'Thủ phạm' },
  { w: 'die Versicherung', s: 'Die Versicherung hat den Schaden bezahlt, nachdem ich angerufen hatte.', vi: 'Bảo hiểm đã trả tiền sau khi tôi gọi.', wvi: 'Bảo hiểm' },
  { w: 'der Zeuge', s: 'Ein Zeuge hat gesehen, wie der Täter ins Haus gegangen ist.', vi: 'Một nhân chứng đã thấy thủ phạm vào nhà.', wvi: 'Nhân chứng' },
  { w: 'die Glühbirne', s: 'Die Glühbirne ist kaputt, deshalb muss ich sie wechseln.', vi: 'Bóng đèn hỏng nên tôi phải thay.', wvi: 'Bóng đèn' },
  { w: 'der Hammer', s: 'Ich habe einen Hammer benutzt, um die Tür zu öffnen.', vi: 'Tôi đã dùng búa để mở cửa.', wvi: 'Cái búa' },
  { w: 'die Liste', s: 'Ich habe eine Liste gemacht, damit ich nichts vergesse.', vi: 'Tôi lập danh sách để không quên gì.', wvi: 'Danh sách' },
  { w: 'der Strom', s: 'Der Strom war weg, als der Sturm gekommen ist.', vi: 'Mất điện khi cơn bão đến.', wvi: 'Điện' },
  { w: 'der Titel', s: 'Der Titel des Films ist interessant, deshalb möchte ich ihn sehen.', vi: 'Tiêu đề phim thú vị nên tôi muốn xem.', wvi: 'Tiêu đề' },
  { w: 'stehen', s: 'Er stand vor der Tür, als ich nach Hause kam.', vi: 'Anh ấy đứng trước cửa khi tôi về nhà.', wvi: 'Đứng' },
  { w: 'stehlen', s: 'Jemand hat mein Fahrrad gestohlen, während ich gearbeitet habe.', vi: 'Ai đó đã lấy xe đạp khi tôi đang làm việc.', wvi: 'Ăn cắp' },
  { w: 'ändern', s: 'Ich habe meine Meinung geändert, nachdem ich alles gehört habe.', vi: 'Tôi đã thay đổi ý kiến sau khi nghe mọi thứ.', wvi: 'Thay đổi' },
  { w: 'brennen', s: 'Das Haus hat gebrannt, weil jemand vergessen hat, den Herd auszuschalten.', vi: 'Nhà cháy vì ai đó quên tắt bếp.', wvi: 'Cháy' },
  { w: 'lassen', s: 'Ich lasse mein Auto reparieren, weil es kaputt ist.', vi: 'Tôi mang xe đi sửa vì nó bị hỏng.', wvi: 'Để, làm, nhờ' },
  { w: 'nähen', s: 'Meine Mutter hat mir eine Jacke genäht, als ich klein war.', vi: 'Mẹ tôi đã may áo cho tôi khi tôi còn nhỏ.', wvi: 'Khâu, may' },
  { w: 'reinigen', s: 'Ich habe das Zimmer gereinigt, bevor die Gäste gekommen sind.', vi: 'Tôi đã dọn phòng trước khi khách đến.', wvi: 'Làm sạch, dọn dẹp' },
  { w: 'schneiden', s: 'Ich habe mich geschnitten, als ich Gemüse geschnitten habe.', vi: 'Tôi bị đứt tay khi cắt rau.', wvi: 'Cắt' },
  { w: 'waschen', s: 'Ich habe meine Hände gewaschen, nachdem ich draußen war.', vi: 'Tôi đã rửa tay sau khi ra ngoài.', wvi: 'Rửa, giặt' },
  { w: 'abschließen', s: 'Ich habe die Tür abgeschlossen, bevor ich gegangen bin.', vi: 'Tôi đã khóa cửa trước khi đi.', wvi: 'Khóa lại' },
  { w: 'absperren', s: 'Die Polizei hat die Straße abgesperrt, nachdem der Unfall passiert ist.', vi: 'Cảnh sát đã phong tỏa đường sau tai nạn.', wvi: 'Phong tỏa' },
  { w: 'anfassen', s: 'Du darfst das nicht anfassen, weil es heiß ist.', vi: 'Bạn không được chạm vào vì nó nóng.', wvi: 'Chạm vào' },
  { w: 'angreifen', s: 'Der Hund hat den Mann angegriffen, als er vorbeiging.', vi: 'Con chó tấn công người đàn ông khi ông đi qua.', wvi: 'Tấn công' },
  { w: 'sichern', s: 'Die Polizei hat den Ort gesichert, damit niemand hineingeht.', vi: 'Cảnh sát bảo vệ hiện trường để không ai vào.', wvi: 'Bảo vệ, đảm bảo' },
  { w: 'ängstlich', s: 'Ich war sehr ängstlich, nachdem ich den Einbruch gesehen habe.', vi: 'Tôi rất sợ sau khi thấy vụ trộm.', wvi: 'Sợ hãi' },
  { w: 'schmal', s: 'Die Straße ist so schmal, dass kein Auto fahren kann.', vi: 'Con đường hẹp đến mức không xe nào đi được.', wvi: 'Hẹp, nhỏ' },
  { w: 'welcher', s: 'Welcher Film gefällt dir besser, dieser oder der andere?', vi: 'Bạn thích phim nào hơn, phim này hay phim kia?', wvi: 'Nào, cái nào' },
  { w: 'dieser', s: 'Dieser Mann hat mir geholfen, als ich Probleme hatte.', vi: 'Người đàn ông này đã giúp tôi khi tôi gặp vấn đề.', wvi: 'Này, người này' }
];

const newWordsStr = data.map((d, i) => `      {
        "id": "nw${i+1}",
        "de": "${d.w}",
        "vi": "${d.wvi}"
      }`).join(',\n');

const newSentencesStr = data.map((d, i) => `      {
        "id": "ns${i+1}",
        "de": "${d.s}",
        "vi": "${d.vi}"
      }`).join(',\n');

const targetPath = './src/components/SpeakingPractice.tsx';
let content = fs.readFileSync(targetPath, 'utf8');

// Insert new words at the end of L21 words array
const wordsRegex = /"l21": {\s*"words": \[\s*([\s\S]*?)\s*\],\s*"sentences": \[/;
const match = content.match(wordsRegex);

if (match) {
  const currentWords = match[1];
  const replacedWords = `"l21": {\n    "words": [\n${currentWords},\n${newWordsStr}\n    ],\n    "sentences": [`;
  content = content.replace(wordsRegex, replacedWords);
}

// Insert new sentences at the end of L21 sentences array
const sentencesRegex = /"sentences": \[\s*([\s\S]*?)\s*\]\s*\},\s*"l22":/;
const sentMatch = content.match(sentencesRegex);

if (sentMatch) {
  const currentSentences = sentMatch[1];
  const replacedSentences = `"sentences": [\n${currentSentences},\n${newSentencesStr}\n    ]\n  },\n  "l22":`;
  content = content.replace(sentencesRegex, replacedSentences);
}

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Successfully updated SpeakingPractice.tsx');
